!function(e){function t(t){for(var r,c,s=t[0],a=t[1],u=t[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=a;i.push([5,1]),n()}([function(e,t,n){"use strict";var r=document.querySelector(".btn-burger");r.addEventListener("click",(function(){r.classList.toggle("is_active_menu"),document.querySelector(".nav").classList.toggle("is_active_menu")}))},function(e,t,n){"use strict";var r=document.querySelector("header"),o=document.querySelectorAll("[data-move-side]");function i(){window.requestAnimationFrame((function(){!function(){window.scrollY||e()||r.classList.add("header--stretch");window.scrollY&&e()&&r.classList.remove("header--stretch");function e(){return r.classList.contains("header--stretch")}}(),o.forEach((function(e){if(function(e){var t=e.getBoundingClientRect(),n=t.top,o=t.bottom;return n+10<document.documentElement.clientHeight&&o-r.clientHeight-10>0}(e))switch(e.dataset.moveSide){case"right":e.classList.add("move-to-right");break;case"left":e.classList.add("move-to-left");break;case"top":e.classList.add("move-to-top")}}))}))}window.addEventListener("DOMContentLoaded",i),window.addEventListener("scroll",i)},function(e,t,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2)}]);