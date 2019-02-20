$(document).ready(function() {
  // 不能选中
  document.body.onselectstart = function() {
    return false
  }
  // 根据屏幕缩放比例
  var screenW = 1
  // if ($(window).width() <= 1500) {
  //   screenW = 0.8
  // }
  //页面缩放
  $(window).resize(()=>{
    resize()
  })
  resize();
  // banner3 comic
  $('.indexg2')
    .eq(0)
    .css({
      transform: `translate3d(-${screenW * 296}px, -${screenW *
        52}px, -20px) scale(${screenW})`
    })
  $('.indexg2')
    .eq(1)
    .css({
      transform: `translate3d(-${screenW * 80}px, -${screenW *
        102}px, -6px) scale(${screenW})`
    })
  $('.indexg2')
    .eq(2)
    .css({
      transform: `translate3d(${screenW * 56}px, -${screenW *
        196}px, 5px) scale(${screenW})`
    })
  $('.indexg2')
    .eq(3)
    .css({
      transform: `translate3d(${screenW * 107}px, -${screenW *
        79}px, -5px) scale(${screenW})`
    })
  $('.indexg2')
    .eq(4)
    .css({
      transform: `translate3d(${screenW * 250}px, -${screenW *
        56}px, -10px) scale(${screenW})`
    })
  $('.indexg2')
    .eq(5)
    .css({
      transform: `translate3d(${screenW * 348}px, ${screenW *
        24}px, -15px) scale(${screenW})`
    })
  $('.indexg2')
    .eq(6)
    .css({
      transform: `translate3d(-${screenW * 248}px, ${screenW *
        138}px, 0px) scale(${screenW})`
    })
  $('.indexg2')
    .eq(7)
    .css({
      transform: `translate3d(-${screenW * 12}px, ${screenW *
        115}px, -15px) scale(${screenW})`
    })
  $('.indexg2')
    .eq(8)
    .css({
      transform: `translate3d(${screenW * 231}px, ${screenW *
        135}px, -20px) scale(${screenW})`
    })
  $('.indexg2').velocity(
    {
      opacity: 1
    },
    {
      duration: 1000
    }
  )
  // banner0 comic
  $('.indexg0')
    .eq(0)
    .css({
      transform: `translate3d(${screenW * 537}px, -${screenW *
        76}px, 0) scale(${screenW})`
    })

  $('.indexg0')
    .eq(1)
    .css({
      transform: `translate3d(-${screenW * 519}px, ${screenW *
        63}px, 0) scale(${screenW})`
    })

  $('.indexg0').velocity(
    {
      opacity: 1
    },
    {
      easing: [0.65, 0.01, 0.54, 1.19],
      duration: 1000
    }
  )
  // banner1 comic
  $('.indexg1')
    .eq(0)
    .css({
      transform: `translate3d(-${screenW * 347}px, -${screenW *
        293}px, -30px) scale(${screenW})`
    })
  $('.indexg1')
    .eq(1)
    .css({
      transform: `translate3d(-${screenW * 112}px, -${screenW *
        326}px, -50px) scale(${screenW})`
    })
  $('.indexg1')
    .eq(2)
    .css({
      transform: `translate3d(${screenW * 116}px, -${screenW *
        350}px, -20px) scale(${screenW})`
    })
  $('.indexg1')
    .eq(3)
    .css({
      transform: `translate3d(${screenW * 351}px, -${screenW *
        290}px, -60px) scale(${screenW})`
    })
  $('.indexg1').velocity(
    {
      opacity: 1
    },
    {
      duration: 1000
    }
  )
  //联系方式拖拽
  Draggable($('#tel'), true)
  $('#tel').velocity(
    {
      opacity: 1,
      height: '500px'
    },
    {
      easing: 'linear',
      duration: 1000,
      delay: 1000,
      complete: () => {
        $('#tel').addClass('show')
        gravity(0, 50, $('#tel'), true)
      }
    }
  )
  // 作品集相关
  silder(
    4,
    $('#disContent ul li:eq(1)'),
    $('#disContent ul'),
    $('#disControl a:eq(0)'),
    $('#disControl a:eq(1)')
  )
})
//屏幕适配
function resize() {
  var iStarWidth = 1920;
  var iStarHeight = 937;
  var iWidth = $(document).width();
  var iHeight = $(document).height();
  var iScale = Math.min(iWidth / iStarWidth, iHeight / iStarHeight)
  $('#transform-wrapper').css({transform:`scale(${iScale})`})
  console.log(iScale)
};
// banner跟随鼠标移动变化
$(document).on('mousemove', ev => {
  let x = $('#indexgs').width() / 2
  let y = $('#indexgs').height() / 2
  let mouseX = ev.clientX
  let mouseY = ev.clientY

  $('#transform-wrapper').css({
    'perspective-origin': `${50 + (x - mouseX) / 20}% ${50 + (y - mouseY) / 5}%`
  })

  $('#indexgs').css({
    transform: `rotateY(${(x - mouseX) / 600}deg)`
  })
})
//联系方式相关
var down = null
var mouse = false

$('#tel').click(() => {
  clearTimeout(down)
  if (!mouse) {
    console.log('被点击了')
  } else {
    mouse = false
  }
})

$('.telControl').click(() => {
  clearTimeout(down)
  if (!mouse) {
    console.log('被点击了')
  } else {
    mouse = false
  }
  let _boolen = false
  if (!$('#tel').hasClass('show')) {
    _boolen = !_boolen
    $('#tel').velocity(
      {
        top: `${$(window).height() - 500}px`,
        left: '38%',
        height: '500px'
      },
      {
        easing: 'linear',
        duration: 500,
        complete: () => {
          $('#tel').addClass('show')
          gravity(-40, 70, $('#tel'), true)
        }
      }
    )
  } else {
    clearInterval(window.Gtimer)
    $('#tel').velocity(
      {
        top: '12px',
        left: '2%',
        height: '67px'
      },
      {
        duration: 1000,
        complete: () => {
          $('#tel').removeClass('show')
        }
      }
    )
  }
})
//导航相关
$('#nav ul li:lt(5)').hover(
  function() {
    $('#navmove').css({ left: $(this).width() * $(this).index() })
  },
  function() {
    var navs = $('#nav ul li:lt(5)')
    Array.from(navs).forEach((item, i) => {
      if (item.classList.contains('navative')) {
        $('#navmove').css({ left: item.offsetWidth * i })
      }
    })
  }
)

$('#nav ul li:eq(0)').click(() => {
  closeMenu()
})

$('#workclose img').click(() => {
  closeMenu()
})

$('#workclose img').hover(
  function() {
    $(this).css({ top: '-28px' })
  },
  function() {
    $(this).css({ top: '0' })
  }
)

function closeMenu() {
  $('#showWrapper li').velocity(
    { 
      bottom:-500
    },
    {
      duration: 1000,
      complete:() => {
        $('#showWrapper li').css({bottom:140,opacity:0})
      }
    }
  )
  $('#tel').css({ visibility: 'visible' })
  $('#tel').removeClass('show')
  $('#tel').velocity(
    {
      left: '2%'
    },
    {
      easing: [0.175, 0.885, 0.32, 1.275],
      duration: 1000,
      delay: 500
    }
  )
  $('#displays').velocity(
    {
      right: '1%'
    },
    {
      easing: [0.175, 0.885, 0.32, 1.275],
      duration: 1000,
      delay: 500
    }
  )
  $('#nav ul li').removeClass('navative')
  $('#nav ul li')
    .eq(0)
    .addClass('navative')
  $('#navmove').css({ left: '0' })
}
$('#worklc a img').hover(
  function() {
    $(this).css({ top: -20 })
  },
  function() {
    $(this).css({ top: 0 })
  }
)
// cube 3d
$('.cube-wrapper .cube').hover(
  //3d转换
  function(ev) {
    let x = 0
    let y = 0
    let a = '90deg'
    let cube = {
      left: $(this).offset().left,
      right: $(this).offset().left + $(this).width(),
      top: $(this).offset().top,
      bottom: $(this).offset().top + $(this).height()
    }

    let mouseP = {
      x: ev.clientX,
      y: ev.clientY
    }

    if (Math.abs(mouseP.x - cube.left) < 20) {
      y = 1
    } else if (Math.abs(mouseP.x - cube.right) < 20) {
      y = 1
      a = '-90deg'
    } else if (Math.abs(mouseP.y - cube.top) < 20) {
      x = 1
      a = '-90deg'
    } else if (Math.abs(mouseP.y - cube.bottom) < 20) {
      x = 1
    }

    $(this).css({ transform: `rotate3d(${x},${y},0,${a})` })
  },
  function() {
    $('.cube-wrapper .cube').css({ transform: 'rotate3d(0,0,0,0deg)' })
  }
)