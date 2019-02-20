function Draggable(el,bl) {
  let disX = 0;
  let disY = 0;
  let prevX = 0;
  let prevY = 0;
  let elX = 0;
  let elY = 0;
  let _this = el;

  _this.mousedown(function(ev) {
    clearTimeout(down);
    down = setTimeout(function() {
      mouse = true;
      console.log("鼠标按下了");
      mouseDown(ev);
    }, 150);
  });
  function mouseDown(ev) {
    var ev = ev || window.event;
    disX = ev.clientX - _this.offset().left;
    disY = ev.clientY - _this.offset().top;

    prevX = ev.clientX;
    prevY = ev.clientY;

    $(document).on({
      mousemove: mouseMove,
      mouseup: mouseUp
    });
  }
  function mouseMove(ev) {
    var ev = ev || window.event;
    _this.css({ left: ev.clientX - disX, top: ev.clientY - disY });

    elX = ev.clientX - prevX;
    elY = ev.clientY - prevY;
    prevX = ev.clientX;
    prevY = ev.clientY;
  }
  function mouseUp() {
    $(document).off("mousemove", mouseMove);
    $(document).off("mouseup", mouseUp);
    console.log("执行");
    if(_this.height() > 67 && bl) {
      console.log(1)
      gravity(elX, elY, _this,true);
    } else {
      console.log(2)
      gravity(elX, elY, _this,false);
    }
  }
}

window.Gtimer = null;
function gravity(elX, elY, _this,bl) {
  clearInterval(window.Gtimer);
  if (!bl) return;
  window.Gtimer = setInterval(() => {
    elY += 3;
    let L = _this.offset().left + elX;
    let T = _this.offset().top + elY;

    if (T > $(document).height() - _this.height()) {
      T = $(document).height() - _this.height();
      elY *= -0.75;
      elX *= 0.75;
    } else if (T < 0) {
      T = 0;
      elY *= -0.75;
    }

    if (L > $(document).width() - _this.width()) {
      L = $(document).width() - _this.width();
      elX *= -0.75;
    } else if (L < 0) {
      L = 0;
      elX *= -0.75;
    }

    _this.css({ left: L });
    _this.css({ top: T });
    if (
      _this.offset().top + _this.height() === $(document).height() &&
      Math.abs(elY) < 2
    ) {
      clearInterval(window.Gtimer);
    }
  }, 30);
}

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

  timer = setInterval(move, 3000);

  silderWrapper.hover(
    () => {
      clearInterval(timer);
    },
    () => {
      timer = setInterval(move, 3000);
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
class Typewriter {
  constructor(el, msg) {
    this.el = el;
    this.msg = msg;
    this.timer = null;
    this.n = 0;
    this.v = 80;
    this.typewriter();
  }
  typewriter() {
    this.el.html(this.msg.substr(0, this.n));
    if (this.n === this.msg.length) {
      this.n = 0;
      clearTimeout(this.timer);
    } else {
      this.n++;
      this.timer = setTimeout(() => {
        this.typewriter(this.el, this.msg);
      }, this.v);
    }
  }
}
let timer = null;
let n = 0;
function typewriter(el, msg) {
  el.html(msg.substr(0, n));
  if (n === msg.length) {
    n = 0;
    clearTimeout(timer);
  } else {
    n++;
    console.log(n);
    timer = setTimeout(() => {
      typewriter(el, msg);
    }, 150);
  }
}
