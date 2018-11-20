$("#newscontrol").click(() => {
  if (!$("#news").hasClass("show")) {
    $("#news").velocity(
      {
        translateY: "80px",
        left: "50%",
        translateX: "-50%",
        height: "719px"
      },
      {
        easing: [0.58, -0.25, 0.43, 1.24],
        duration: 1000,
        complete: () => {
          $("#news").addClass("show");
          $("#news").gravity();
        }
      }
    );
  } else {
    $("#news").velocity("reverse", {
      duration: 1000,
      complete: () => {
        $("#news").removeClass("show");
      }
    });
  }
});
$('#pengzhuang').gravity();
$(document).on("mousemove", ev => {
  let x = $("#indexgs").width() / 2;
  let y = $("#indexgs").height() / 2;
  let mouseX = ev.clientX;
  let mouseY = ev.clientY;
  $("#indexgs li").css({
    transform: `translateX(${-((x - mouseX) / 20)}px) translateY(${(y -
      mouseY) /
      10}px)`
  });
  $("#indexgs li:eq(1)").css({
    transform: `translateX(${-((x - mouseX) / 30)}px) translateY(${(y -
      mouseY) /
      15}px)`
  });
});

$("#nav ul li:lt(5)").hover(
  function() {
    $("#navmove").css({ 'left': $(this).width() * $(this).index() });
  },
  function() {
    var navs = $("#nav ul li:lt(5)");
    for (var i = 0; i < navs.length; i++) {
      if (navs[i].classList.contains("navative")) {
        $("#navmove").css({ 'left': $(this).width() * i });
      } 
    }
  }
);
$("#nav ul li:eq(0)").click(()=>{
  closeMenu();
})
$("#nav ul li:gt(0)").click(function() {
  $("#nav ul li").removeClass("navative");
  $(this).toggleClass("navative");
  let index = $(this).index() - 1;

  $("#showWrapper li").each(function () {
    if($(this).hasClass('show')){
      $(this).removeClass('show');
      $(this).velocity(
        { bottom: -386 },
        {
          duration: 1000,
          easing:[ 300, 20],
          complete: () => {
            $(".content li").css({ visibility: "hidden" });
          }
        }
      );
    }
  })

  $("#showWrapper li").eq(index).addClass('show');
  $("#showWrapper li")
    .eq(index)
    .css({ visibility: "visible" });
  $("#showWrapper li")
    .eq(index)
    .velocity(
      { bottom: 386 },
      {
        duration: 1000,
        easing:[ 300, 20],
      }
    );
  $("#news").velocity(
    {
      right: "-30%"
    },
    {
      duration: 1000
    }
  );
  $("#workslatest").velocity(
    {
      right: "-30%"
    },
    {
      duration: 1000
    }
  );
});

$("#workclose img").click(()=>{
  closeMenu();
})

function closeMenu(){
  $("#showWrapper li").velocity(
    { bottom: -386 },
    {
      duration: 1000,
      easing:[ 300, 20],
      complete: () => {
        $(".content li").css({ visibility: "hidden" });
      }
    }
  );
  $("#news").velocity(
    {
      right: "2%"
    },
    {
      easing: [0.175, 0.885, 0.32, 1.275],
      duration: 1000,
      delay: 500
    }
  );
  $("#workslatest").velocity(
    {
      right: "2%"
    },
    {
      easing: [0.175, 0.885, 0.32, 1.275],
      duration: 1000,
      delay: 500
    }
  );
  $("#navmove").css({ 'left': 0 });
}
$("#worklc a img").hover(
  function() {
    $(this).css({ top: -20 });
  },
  function() {
    $(this).css({ top: 0 });
  }
);

$("#worklbc ul li").hover(
  function() {
    $(".workimgtxt").css({ "margin-top": -32, height: 32 });
    $(".wizoom").css({ top: 52 });
  },
  function() {
    $(".workimgtxt").css({ "margin-top": 0, height: 0 });
    $(".wizoom").css({ top: -52 });
  }
);

$(function() {
  //页面加载完成后立即执行的内容
  $("#news").velocity(
    {
      right: "2%"
    },
    {
      easing: [0.175, 0.885, 0.32, 1.275],
      duration: 1000
    }
  );

  $("#indexg0").velocity(
    {
      top: "50%",
      left: "50%",
      translateX: "-50%",
      translateY: "-50%"
    },
    {
      easing: [0.65, 0.01, 0.54, 1.19],
      duration: 1000
    }
  );

  $("#indexg2").velocity(
    {
      top: "-6%",
      right: "-3%"
    },
    {
      easing: [0.65, 0.01, 0.54, 1.19],
      duration: 1000
    }
  );

  $("#indexg1").velocity(
    {
      top: "4%",
      left: "-2%"
    },
    {
      easing: [0.65, 0.01, 0.54, 1.19],
      duration: 1000
    }
  );

  silder(
    3,
    $("#worklbc ul li:eq(1)"),
    $("#worklbc ul"),
    $("#worklc a img:eq(0)"),
    $("#worklc a img:eq(1)")
  );
});
