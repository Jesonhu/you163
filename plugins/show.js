$(function() {
  $('.service-hook, .phone-hook').hover(
    function() {
      $(this).addClass('is-hover');
    },
    function() {
      $(this).removeClass('is-hover');
    }
  );

  $('.hd-input-hook').focus(function() {
    $(this).parent().addClass('is-focus');

    $(this).siblings().find('.hotkey-hook:gt(0)').hover(
       function() {
         $(this).addClass('is-hover')
         .siblings().removeClass('is-hover');
       },
     function() {
         $(this).removeClass('is-hover');
       }
     );

  }).blur(function() {
    $(this).parent().removeClass('is-focus');
  });

  // 菜单导航
  hdNav();
  function hdNav() {
    const screenWidth = $(window).width();
    const $topItem = $('.hd-tab-nav .item-hook');

    $('.full-screen-hook').css({
      'width': `${screenWidth}px`,
      'left': -(screenWidth / 2) + 'px'
    });

    $topItem.mouseenter(
      function() {
        $(this).addClass('is-hover')
          .siblings().removeClass('is-hover');
    }).mouseleave(
      function() {
        $(this).removeClass('is-hover');
      }
    );
  };

  let hdTabWrap = $('.hd-tabwrap-hook');
  let hdTabMain = $('.hd-tab-hook');
  let hdOffsetTop = hdTabMain.offset().top;

  $(window).scroll(function() {
    let winScrollTop = $(this).scrollTop();

    if (winScrollTop >= hdOffsetTop) {
      hdTabWrap.addClass('fixed');
      hdTabMain.stop().animate({'paddingTop': `10px`}, 80);
    } else {
      hdTabWrap.removeClass('fixed');
      hdTabMain.css('paddingTop', 0);
    }
  })

  // 购物车
  $('.shop-cart-wrap').hover(
    function() {
      $(this).find('.sub-wrap').show().siblings('.arrow').show()
    }, function() {
      $(this).find('.sub-wrap').hide().siblings('.arrow').hide()
    }
  )
});

$(window).ready(function(){
      floorRecommed()
      function floorRecommed() {
         $('.recomment-list-hook').find('.recomment-item-hook:gt(3)')
             .addClass('marginTop');
      }
});

// 新品首发轮播
$(function() {
  const moveWrap = $('.xpsf-hook'); // 需要translateX的容器
  const itmeWidth = $('.xpsf-hook').children('.floor-swiper-item').width(); // 每个item的宽度
  const liLength = $('.xpsf-hook').children('.floor-swiper-item').length // 内容的数量
  const page = Math.ceil(liLength / 4) // 可以分的页数
  const width = itmeWidth * 4 + 10*page; // 一行的宽度
  const arrow = $('.xpsf-hook').parent('.floor-main').siblings('.floor-arrow-wrap').find('.floor-arrow'); // 左右按钮
  let flag = 1; // 标记当前处于第几页

  // 容器初始样式设置
  moveWrap.css({
    'width': (itmeWidth * liLength + (liLength-1)*10)+'px',
    'position': 'relative'
  });

  arrow.click(function() {
    const index = $(this).index();
    if (index) { // 右按钮
      flag++;
      if (flag > page) {
        flag = page;
        return;
      } else if (flag == page) {
        $(this).addClass('is-active').siblings().removeClass('is-active');
      }
    } else { // 左按钮
      flag--;
      if (flag <= 0) {
        flag = 1;
        return;
      } else if(flag == 1) {
        $(this).addClass('is-active').siblings().removeClass('is-active');
      }
    }
    moveWrap.animate({left: '-'+ (flag-1)*width +'px'}, 500)
  });
});

// 购物车页效果
$(function() {
  const picShow = $('.pic-show-hook')
  const picSelect = $('.pic-select-hook')
  let nowPicSrc = ''

  picSelect.hover(function() {
    $(this).addClass('is-active').siblings().removeClass('is-active') // 当前节点添加样式兄弟节点移除样式
    // 替换图片路径
    nowPicSrc = $(this).find('img').attr('src')
    picShow.attr('src', nowPicSrc)
  })
})

// 人气推荐
$(function() {
  const $navTab = $('.floor-title-tabnav').children('.tabnav')
  const $conTab = $('.floor-tabcon-bd').children('.recomment-list-hook')

  $navTab.eq(0).addClass('is-active')
  $conTab.eq(0).show().siblings().hide()

  $navTab.mouseenter(function() {
    const index = $(this).index()
    $(this).addClass('is-active').siblings().removeClass('is-active')
    $conTab.eq(index).show().siblings().hide()
  })
})

// 返回顶部
$(function() {
  let winWidth = $(window).width()
  let scrollTop
  $('.fixedtool').css({'display': 'none', 'left': (winWidth-60)+'px'})
  $(window).scroll(function() {
    scrollTop = $(window).scrollTop()
    if (scrollTop > 50) {
      $('.fixedtool').css('display', 'block')
    } else {
      $('.fixedtool').css('display', 'none')
    }
  })
  $('.fixedtool').click(function() {
    $('body, html').animate({scrollTop:0}, 450)
  })
})
