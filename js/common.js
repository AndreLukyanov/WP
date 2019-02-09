!function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);
//# sourceMappingURL=jquery.viewportchecker.min.js.map

$(document).ready(function(){
  var $hamburger = $(".hamburger");
      $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
    
      // Do something else, like open/close menu
    });
});

window.onload = function() {
function toggleClassMenu() {
	myMenu.classList.add("menu__animatable");	
	if(!myMenu.classList.contains("visible")) {		
		myMenu.classList.add("visible");
	} else {
		myMenu.classList.remove("visible");		
	}	
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu__animatable");
}

var myMenu = document.querySelector(".navigation");
var oppMenu = document.querySelector(".hamburger");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
};

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 50 ){
            $(".nav").addClass("nav_transparent");
            $(".nav").removeClass("nav_before");
        }
        else if ($(this).scrollTop()< 49 ){
            $(".nav").removeClass("nav_transparent");
            $(".nav").addClass("nav_before");
        }
    });
});

$(document).ready(function(){
	$(".navigation__list").on("click","a.navigation__link_block", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: $(id).offset().top-61}, 1500);
  });

  $(".footer").on("click","a.footer__logo", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: $(id).offset().top-61}, 1500);
  });
});

$(document).ready(function(){

  var hid = true;

  $('.achievements__counter').viewportChecker({
    callbackFunction: function(elem, action) {

      if (!hid) return false;

      $(".achievements__counter").spincrement({
        thousandSeparator: " ",
        duration: 4000
      });

      hid = false;
    }
  });
});

$(document).ready(function(){

  var hi = true;

  $('.price__square_sprint').viewportChecker({
    classToAdd: 'visible animated fadeIn',
    callbackFunction: function(elem, action) {

      if (!hi) return false;

      $(".price__square_sprint").spincrement({
        thousandSeparator: " ",
        duration: 4000
      });

      hi = false;
    }
  });
});


$(document).ready(function() {
	$(".button_hero").click(function() {
		$(".header__form").addClass("visible");
		$(".black").css({
      "opacity": "0.8",
      "z-index": "3000"
    });
    $("body").css("overflow", "hidden");
	});
	$(".close").click(function() {
		$(".header__form").removeClass("visible");
		$(".black").css({
      "opacity": "0",
      "z-index": "0"
    });
    $("body").css("overflow", "visible");
	});
  $(".black").click(function() {
    $(".header__form").removeClass("visible");
    $(".work__popup").removeClass("visible");
    $(".black").css({
      "opacity": "0",
      "z-index": "0"
    });
    $("body").css("overflow", "visible");
  });
});

$(document).ready(function() {
  $(".button_price").click(function() {
    $(".header__form").addClass("visible");
    $(".black").css({
      "opacity": "0.8",
      "z-index": "3000"
    });
    $("body").css("overflow", "hidden");
  });
  $(".close").click(function() {
    $(".header__form").removeClass("visible");
    $(".black").css({
      "opacity": "0",
      "z-index": "0"
    });
    $("body").css("overflow", "visible");
  });
});

$(window).on('load resize', function(){
  if ( document.querySelector('body').offsetWidth < 1021 ) {
    $(".navigation__link").click(function(){
      $(".navigation").removeClass("visible");
      $(".hamburger").removeClass("is-active");
    });
  }
});

$(document).ready(function(){
  $("#head_phone").mask("+38(099) 999-99-99");
  $("#work_phone").mask("+38(099) 999-99-99");
  $("#question_phone").mask("+38(099) 999-99-99");
});


$(document).ready(function() {
  $('.work__item_first').magnificPopup({
    type: 'ajax',
  	removalDelay: 300,
  	mainClass: 'mfp-fade'
  });
});

$(document).ready(function() {
  $('.work__item_second').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});

$(document).ready(function() {
  $('.work__item_three').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});

$(document).ready(function() {
  $('.work__item_four').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});

$(document).ready(function() {
  $('.work__item_five').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});

$(document).ready(function() {
  $('.work__item_six').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});

$(document).ready(function() {
  $('.work__item_seven').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});

$(document).ready(function() {
  $('.work__item_eight').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });
});

$(document).ready(function() {
  $('.work__item_nine').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });
});

$(document).ready(function(){
  document.getElementById('header__form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "mail.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("&name=" + f.name.value + "&phone=" + f.phone.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      alert('Спасибо. Мы ответим Вам в ближайшее время!');    
      f.name.value='';
      f.phone.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

  document.getElementById('question__form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "mail.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("&name=" + f.name.value + "&phone=" + f.phone.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      alert('Спасибо. Мы ответим Вам в ближайшее время!');    
      f.name.value='';
      f.phone.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

  document.getElementById('work__popup').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "mail.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("&name=" + f.name.value + "&phone=" + f.phone.value + "&designn=" + f.designn.value + "&debuggingg=" + f.debuggingg.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      alert('Спасибо. Мы ответим Вам в ближайшее время!');    
      f.name.value='';
      f.phone.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

});

$(document).ready(function() {
  var $text = $('.hidden_one'),
  $box = $('.input_hide_one');

  $box.on('click change', function() {
    var values = [];
    
    $box.filter(':checked').each(function() {
      values.push(this.value);
    });
    
    $text.val(values.join(','));

  });
});

$(document).ready(function() {
  var $texts = $('.hidden_two'),
  $boxx = $('.input_hide_two');

  $boxx.on('click change', function() {
    var values = [];
    
    $boxx.filter(':checked').each(function() {
      values.push(this.value);
    });
    
    $texts.val(values.join(','));

  });
});

$(document).ready(function () {
  $('input,textarea').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'))
    $(this).attr('placeholder','');
  });
  $('input,textarea').blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
  });
});




