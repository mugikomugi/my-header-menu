$(function () {
  //menuスクロール
  const header = $('#header');
  const pcNav = $('#pcNav');
  const spNav = $('#spNav');
  const menuLi = $('#menuLi').html();


  //pcスクロールheader
  $(window).on('scroll', function () {
    let scrollPoint = $(this).scrollTop();
    if (scrollPoint > 100) {
      header.removeClass('header').addClass('scrollHeader');
    } else {
      header.removeClass('scrollHeader').addClass('header');
    }
  });

  //menuクラス付け替え
  const gMenu = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      header.removeClass('pcHeader').addClass('spHeader');
      //spメニュー書出し
      spNav.html(menuLi);
      $('ul:first-child', pcNav).remove();
      //子要素メニュー表示非表示
      $('.childPul>a', spNav).on('click', function () {
        if ($(this).next('.pulMenu').css('display') == 'none') {
          $(this).next('.pulMenu').stop().slideDown();
        } else {
          $(this).next('.pulMenu').stop().slideUp();
        }
      });
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      header.removeClass('spHeader').addClass('pcHeader');
      //pcメニュー書出し
      pcNav.html(menuLi);
      $('ul:first-child', spNav).remove();
      $('.childPul', pcNav).hover(function () {
        $('.pulMenu', this).stop().slideDown();
      }, function () {
        $('.pulMenu', this).stop().slideUp();
      });
    }
  }

  gMenu();
  $(window).on('resize', () => {
    gMenu();
  });

  //ハンバーガーメニューボタン
  $('#menuBtn').on('click', function () {
    if (spNav.css('display') == 'none') {
      spNav.stop().slideDown();
      $(this).addClass('active');
    } else {
      spNav.stop().slideUp();
      $(this).removeClass('active');
    }
  });

});