!function(n){"use strict";var o=window.addEventListener?"addEventListener":"attachEvent",e=window[o],a="attachEvent"==o?"onmessage":"message";console.log("Have created event listener"),e(a,function(n){"samlLogin"==n.data&&window.appUser&&(window.appUser.loginFromSaml(),console.log("Have contacted app user 2"))},!1);window.app=n.querySelector("#app");var i=function(o){var e=localStorage.getItem("yp-user-locale");e?window.locale=e:window.locale=o;var a,i=window.location.href.split("locale=");i&&i[1]&&(a=i[1]),a&&2==a.length&&(window.locale=a,localStorage.setItem("yp-user-locale",a));var t=window.locale;i18n.init({lng:t,resGetPath:"/locales/__lng__/__ns__.json"},function(o){window.i18nTranslation=i18n;var e=new CustomEvent("iron-signal",{detail:{name:"yp-language",data:{type:"language-loaded",language:t}}});n.dispatchEvent(e)})};i(window.location.hostname.indexOf("betrireykjavik")>-1?"is":window.location.hostname.indexOf("betraisland")>-1?"is":window.location.hostname.indexOf("forbrukerraadet")>-1?"no":window.location.hostname.indexOf("bolja-pula")>-1?"hr":window.location.hostname.indexOf("boljikarlovac")>-1?"hr":window.location.hostname.indexOf("boljilosinj")>-1?"hr":window.location.hostname.indexOf("pulaodlucuje")>-1?"hr":window.location.href.indexOf("group/801")>-1?"sl":"en"),window.addEventListener("WebComponentsReady",function(n){console.log("WebComponentsReady")})}(document);