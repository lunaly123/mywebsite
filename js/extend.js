$.fn.extend({
  gravity: function() {
    let disX = 0;
    let disY = 0;

    let prevX = 0;
    let prevY = 0;
    let iSpeedX = 0;
    let iSpeedY = 0;

    let timer = null;

    $(this).mousedown(ev => {
      var ev = ev || window.event;
      disX = ev.clientX - $(this).offset().left;
      disY = ev.clientY - $(this).offset().top;

      prevX = ev.clientX;
      prevY = ev.clientY;

      $(document).on({
        mousemove: ev => {
          var ev = ev || window.event;
          $(this).css({ left: ev.clientX - disX });
          $(this).css({ top: ev.clientY - disY });

          iSpeedX = ev.clientX - prevX;
          iSpeedY = ev.clientY - prevY;
          prevX = ev.clientX;
          prevY = ev.clientY;
        },
        mouseup: () => {
          $(document).off();
          impact.call(this);
        }
      });
    });

    function impact() {
      clearInterval(timer);
      timer = setInterval(() => {
        iSpeedY += 3;
        let L = $(this).offset().left + iSpeedX;
        let T = $(this).offset().top + iSpeedY;

        if (T > $(document).height() - $(this).height()) {
          T = $(document).height() - $(this).height();
          iSpeedY *= -0.75;
          iSpeedX *= 0.75;
        } else if (T < 0) {
          T = 0;
          iSpeedY *= -0.75;
        }

        if (L > $(document).width() - $(this).width()) {
          L = $(document).width() - $(this).width();
          iSpeedX *= -0.75;
        } else if (L < 0) {
          L = 0;
          iSpeedX *= -0.75;
        }

        $(this).css({ left: L });
        $(this).css({ top: T });

        if (
          $(this).offset.top + $(this).height() === $(document).height() &&
          Math.abs(iSpeedY) < 2
        ) {
          clearInterval(timer);
        }
      }, 30);
    }
  }
});

function silder(num, imgWidth, silderWrapper, prevBtn, nextBtn) {
  var num = num,
    silderWidth = -imgWidth.width(),
    count = 1,
    timer = null;

  prevBtn.click(function(e) {
    e.preventDefault();
    move(true);
  });
  nextBtn.click(function(e) {
    e.preventDefault();
    move();
  });

  timer = setInterval(move, 2000);

  silderWrapper.hover(
    () => {
      clearInterval(timer);
    },
    () => {
      timer = setInterval(move, 2000);
    }
  );

  function move(lr) {
    if (!lr) {
      if (count === num) {
        count = 0;
        silderWrapper.velocity(
          {
            left: silderWidth * count
          },
          {
            duration: 0
          }
        );
      }
      count++;
      silderWrapper.velocity(
        {
          left: silderWidth * count
        },
        {
          duration: 500
        }
      );
    } else {
      count--;
      silderWrapper.velocity(
        {
          left: silderWidth * count
        },
        {
          duration: 500
        }
      );
      if (count === 0) {
        count = num;
        silderWrapper.velocity(
          {
            left: silderWidth * count
          },
          {
            duration: 0
          }
        );
      }
    }
  }
}
