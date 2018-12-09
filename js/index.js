var down = null
var mouse = false

$('#news').click(() => {
  clearTimeout(down)
  if (!mouse) {
    console.log('被点击了')
  } else {
    mouse = false
  }
})

$('#newscontrol').click(() => {
  clearTimeout(down)
  if (!mouse) {
    console.log('被点击了')
  } else {
    mouse = false
  }
  let _boolen = false
  if (!$('#news').hasClass('show')) {
    _boolen = !_boolen
    $('#news').velocity(
      {
        top: `${$(window).height() - 500}px`,
        left: '38%',
        height: '500px'
      },
      {
        easing: 'linear',
        duration: 500,
        complete: () => {
          $('#news').addClass('show')
          gravity(-40, 70, $('#news'), true)
        }
      }
    )
  } else {
    clearInterval(window.Gtimer)
    $('#news').velocity(
      {
        top: '80px',
        left: '75%',
        height: '67px'
      },
      {
        duration: 1000,
        complete: () => {
          $('#news').removeClass('show')
        }
      }
    )
  }
})

$(document).on('mousemove', ev => {
  let x = $('#indexgs').width() / 2
  let y = $('#indexgs').height() / 2
  let mouseX = ev.clientX
  let mouseY = ev.clientY
  
  $('#transform-wrapper').css({
    'perspective-origin': `${50 + (x - mouseX) / 20}% ${50 + (y - mouseY) / 5}%`
  })

  $('#indexgs').css({
    'transform': `rotateY(${(x - mouseX) / 600}deg)`
  })
})

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
        $('#showWrapper li').css({bottom:510,opacity:0})
      }
    }
  )
  $('#news').css({ visibility: 'visible' })
  $('#news').removeClass('show')
  $('#news').velocity(
    {
      left: '75%'
    },
    {
      easing: [0.175, 0.885, 0.32, 1.275],
      duration: 1000,
      delay: 500
    }
  )
  $('#workslatest').velocity(
    {
      right: '2%'
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

$('#worklbc ul li').hover(
  function() {
    $('.workimgtxt').css({ 'margin-top': -32, height: 32 })
    $('.wizoom').css({ top: 52 })
  },
  function() {
    $('.workimgtxt').css({ 'margin-top': 0, height: 0 })
    $('.wizoom').css({ top: -52 })
  }
)

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

let textList = [
  '1、对前端技术具有浓厚的兴趣，喜欢逛CSDN，博客园等技术论坛。',
  '2、具备良好的审美能力，有良好的代码编程习惯。',
  '3、学习适应能力强，愿意不断学习新知识丰富自己。',
  '4、抗压能力强，有信心在不同的工作强度下进行开发工作。',
  '5、性格随和，具有良好的团队合作精神。'
]

let intrLeftList = [
  '姓名：姚雨青',
  '性别：男',
  '学历：本科',
  '年龄：27',
  '民族：汉',
  '邮箱：dbpangzi@gmail.com',
  '移动电话：18513355645'
]
let intrRightList = [
  '教育经历',
  '2010.9 — 2014.6 内蒙古农业大学 本科',
  '工作经历',
  '2014.6 – 2018.3 北京建工土木工程有限公司机电安装与网络维护'
]

$(window).on('load', function() {
  // 页面加载完成后立即执行的内容
  Draggable($("#news"), true);
  $("#news").velocity(
    {
      opacity: 1,
      height: "500px"
    },
    {
      easing: 'linear',
      duration: 1000,
      delay: 1000,
      complete: () => {
        $("#news").addClass("show");
        gravity(0, 50, $("#news"), true);
      }
    }
  );

  $('.indexg0')
    .eq(0)
    .css({ transform: 'translate3d(90px,-130px,-30px)' })
  $('.indexg0')
    .eq(1)
    .css({ transform: 'translate3d(357px,-166px,-50px)' })
  $('.indexg0')
    .eq(2)
    .css({ transform: 'translate3d(599px,-177px,-20px)' })
  $('.indexg0')
    .eq(3)
    .css({ transform: 'translate3d(851px,-74px,-60px)' })

  $('.indexg0').velocity(
    {
      opacity: 1
    },
    {
      duration: 1000
    }
  )

  $('.indexg3')
    .eq(0)
    .css({ transform: 'translate3d(117px,100px,0px)' })
  $('.indexg3')
    .eq(1)
    .css({ transform: 'translate3d(376px,69px,-6px)' })
  $('.indexg3')
    .eq(2)
    .css({ transform: 'translate3d(546px,28px,5px)' })
  $('.indexg3')
    .eq(3)
    .css({ transform: 'translate3d(539px,117px,-5px)' })
  $('.indexg3')
    .eq(4)
    .css({ transform: 'translate3d(755px,154px,-10px)' })
  $('.indexg3')
    .eq(5)
    .css({ transform: 'translate3d(833px,203px,-15px)' })
  $('.indexg3')
    .eq(6)
    .css({ transform: 'translate3d(214px,321px,-0px)' })
  $('.indexg3')
    .eq(7)
    .css({ transform: 'translate3d(345px,276px,-15px)' })
  $('.indexg3')
    .eq(8)
    .css({ transform: 'translate3d(669px,278px,-20px)' })

  $('.indexg3').velocity(
    {
      opacity: 1
    },
    {
      duration: 1000
    }
  )

  $('#indexg2').css({ transform: 'translate3d(900px,50px,10px)' })

  $('#indexg2').velocity(
    {
      opacity: 1
    },
    {
      easing: [0.65, 0.01, 0.54, 1.19],
      duration: 1000
    }
  )

  $('#indexg1').css({ transform: 'translate3d(-170px,50px,20px)' })

  $('#indexg1').velocity(
    {
      opacity: 1
    },
    {
      easing: [0.65, 0.01, 0.54, 1.19],
      duration: 1000
    }
  )

  silder(
    4,
    $('#worklbc ul li:eq(1)'),
    $('#worklbc ul'),
    $('#worklc a img:eq(0)'),
    $('#worklc a img:eq(1)')
  )
})

document.body.onselectstart = function() {
  return false
}
