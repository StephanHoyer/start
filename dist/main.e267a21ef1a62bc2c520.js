webpackJsonp([0],{28:function(e,t){"use strict";function n(){return r("useMockApi")?"http://localhost:3002/":"/"}function r(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(){return a("users")}function o(e){return c("users/"+e)}function a(e){return s.default.request({url:h+e}).then(d).catch(i)}function c(e){return s.default.request({method:"DELETE",url:h+e}).then(d).catch(i)}function d(e){return e}function i(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=u,t.deleteUser=o;var l=n(4),s=r(l),f=n(28),p=r(f),h=(0,p.default)()},1:function(e,t){},0:function(e,t,n){(function(e){"use strict";n(1);var t=n(3);(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+="<tr>\n    <td><a href='#' data-id='"+e.id+"' class='deleteUser'> Delete </a></td>\n    <td>"+e.id+"</td>\n    <td>"+e.firstName+"</td>\n    <td>"+e.lastName+"</td>\n    <td>"+e.email+"</td>\n    </tr>"}),e.document.getElementById("users").innerHTML=r;var u=e.document.getElementsByClassName("deleteUser");Array.from(u,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,function(){return this}())}});
//# sourceMappingURL=main.e267a21ef1a62bc2c520.js.map