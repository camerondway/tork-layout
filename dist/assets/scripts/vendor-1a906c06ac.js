!function e(t,n,r){function i(a,o){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!o&&c)return c(a,!0);if(s)return s(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";function r(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}!function(e,n,i){function s(e,t){return("undefined"==typeof e?"undefined":r(e))===t}function a(){var e,t,n,r,i,a,o;for(var c in v)if(v.hasOwnProperty(c)){if(e=[],t=v[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],o=a.split("."),1===o.length?y[o[0]]=r:(!y[o[0]]||y[o[0]]instanceof Boolean||(y[o[0]]=new Boolean(y[o[0]])),y[o[0]][o[1]]=r),S.push((r?"":"no-")+o.join("-"))}}function o(e){var t=E.className,n=y._config.classPrefix||"";if(b&&(t=t.baseVal),y._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}y._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?E.className.baseVal=t:E.className=t)}function c(e,t){if("object"==("undefined"==typeof e?"undefined":r(e)))for(var n in e)w(e,n)&&c(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),s=y[i[0]];if(2==i.length&&(s=s[i[1]]),"undefined"!=typeof s)return y;t="function"==typeof t?t():t,1==i.length?y[i[0]]=t:(!y[i[0]]||y[i[0]]instanceof Boolean||(y[i[0]]=new Boolean(y[i[0]])),y[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),y._trigger(e,t)}return y}function u(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(){var e=n.body;return e||(e=l(b?"svg":"body"),e.fake=!0),e}function d(e,t,r,i){var s,a,o,c,u="modernizr",d=l("div"),p=f();if(parseInt(r,10))for(;r--;)o=l("div"),o.id=i?i[r]:u+(r+1),d.appendChild(o);return s=l("style"),s.type="text/css",s.id="s"+u,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=E.style.overflow,E.style.overflow="hidden",E.appendChild(p)),a=t(d,e),p.fake?(p.parentNode.removeChild(p),E.style.overflow=c,E.offsetHeight):d.parentNode.removeChild(d),!!a}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(t[r]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+p(t[r])+":"+n+")");return s=s.join(" or "),d("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return i}function h(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function g(e,t,n,r){function a(){c&&(delete C.style,delete C.modElem)}if(r=s(r,"undefined")?!1:r,!s(n,"undefined")){var o=m(e,n);if(!s(o,"undefined"))return o}for(var c,f,d,p,g,v=["modernizr","tspan"];!C.style;)c=!0,C.modElem=l(v.shift()),C.style=C.modElem.style;for(d=e.length,f=0;d>f;f++)if(p=e[f],g=C.style[p],u(p,"-")&&(p=h(p)),C.style[p]!==i){if(r||s(n,"undefined"))return a(),"pfx"==t?p:!0;try{C.style[p]=n}catch(A){}if(C.style[p]!=g)return a(),"pfx"==t?p:!0}return a(),!1}var v=[],A={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){v.push({name:e,fn:t,options:n})},addAsyncTest:function(e){v.push({name:null,fn:e})}},y=function(){};y.prototype=A,y=new y;var w,S=[],E=n.documentElement,b="svg"===E.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;w=s(e,"undefined")||s(e.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),A._l={},A.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),y.hasOwnProperty(e)&&setTimeout(function(){y._trigger(e,y[e])},0)},A._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},y._q.push(function(){A.addTest=c});b||!function(e,n){function i(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function s(){var e=T.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=T.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),T.elements=n+" "+e,f(t)}function o(e){var t=C[e[b]];return t||(t={},x++,e[b]=x,C[x]=t),t}function c(e,t,r){if(t||(t=n),A)return t.createElement(e);r||(r=o(t));var i;return i=r.cache[e]?r.cache[e].cloneNode():E.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||S.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function u(e,t){if(e||(e=n),A)return e.createDocumentFragment();t=t||o(e);for(var r=t.frag.cloneNode(),i=0,a=s(),c=a.length;c>i;i++)r.createElement(a[i]);return r}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return T.shivMethods?c(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+s().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(T,t.frag)}function f(e){e||(e=n);var t=o(e);return!T.shivCSS||v||t.hasCSS||(t.hasCSS=!!i(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),A||l(e,t),e}function d(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,i=RegExp("^(?:"+s().join("|")+")$","i"),a=[];r--;)t=n[r],i.test(t.nodeName)&&a.push(t.applyElement(p(t)));return a}function p(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(N+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function m(e){for(var t,n=e.split("{"),r=n.length,i=RegExp("(^|[\\s,>+~])("+s().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+N+"\\:$2";r--;)t=n[r]=n[r].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[r]=t.join("}");return n.join("{")}function h(e){for(var t=e.length;t--;)e[t].removeNode()}function g(e){function t(){clearTimeout(s._removeSheetTimer),n&&n.removeNode(!0),n=null}var n,r,s=o(e),a=e.namespaces,c=e.parentWindow;return!_||e.printShived?e:("undefined"==typeof a[N]&&a.add(N),c.attachEvent("onbeforeprint",function(){t();for(var s,a,o,c=e.styleSheets,u=[],l=c.length,f=Array(l);l--;)f[l]=c[l];for(;o=f.pop();)if(!o.disabled&&z.test(o.media)){try{s=o.imports,a=s.length}catch(p){a=0}for(l=0;a>l;l++)f.push(s[l]);try{u.push(o.cssText)}catch(p){}}u=m(u.reverse().join("")),r=d(e),n=i(e,u)}),c.attachEvent("onafterprint",function(){h(r),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var v,A,y="3.7.3",w=e.html5||{},S=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,E=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",x=0,C={};!function(){try{var e=n.createElement("a");e.innerHTML="<xyz></xyz>",v="hidden"in e,A=1==e.childNodes.length||function(){n.createElement("a");var e=n.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){v=!0,A=!0}}();var T={elements:w.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:y,shivCSS:w.shivCSS!==!1,supportsUnknownElements:A,shivMethods:w.shivMethods!==!1,type:"default",shivDocument:f,createElement:c,createDocumentFragment:u,addElements:a};e.html5=T,f(n);var z=/^$|\b(?:all|print)\b/,N="html5shiv",_=!A&&function(){var t=n.documentElement;return!("undefined"==typeof n.namespaces||"undefined"==typeof n.parentWindow||"undefined"==typeof t.applyElement||"undefined"==typeof t.removeNode||"undefined"==typeof e.attachEvent)}();T.type+=" print",T.shivPrint=g,g(n),"object"==("undefined"==typeof t?"undefined":r(t))&&t.exports&&(t.exports=T)}("undefined"!=typeof e?e:this,n);var x={elem:l("modernizr")};y._q.push(function(){delete x.elem});var C={style:x.elem.style};y._q.unshift(function(){delete C.style});A.testProp=function(e,t,n){return g([e],i,t,n)};y.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var T="CSS"in e&&"supports"in e.CSS,z="supportsCSS"in e;y.addTest("supports",T||z),y.addAsyncTest(function(){var e,t,n,r=l("img"),i="sizes"in r;!i&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){c("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):c("sizes",i)}),y.addTest("srcset","srcset"in l("img")),a(),o(S),delete A.addTest,delete A.addAsyncTest;for(var N=0;N<y._q.length;N++)y._q[N]();e.Modernizr=y}(window,document)},{}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e("picturefill"),e("../../_tmp/scripts/modernizr");var i=function s(){r(this,s)};new i},{"../../_tmp/scripts/modernizr":1,picturefill:3}],3:[function(e,t,n){!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s}())}(window),function(e,n,r){"use strict";function i(e){return" "===e||"	"===e||"\n"===e||"\f"===e||"\r"===e}function s(t,n){var r=new e.Image;return r.onerror=function(){T[t]=!1,te()},r.onload=function(){T[t]=1===r.width,te()},r.src=n,"pending"}function a(){j=!1,I=e.devicePixelRatio,U={},F={},y.DPR=I||1,q.width=Math.max(e.innerWidth||0,C.clientWidth),q.height=Math.max(e.innerHeight||0,C.clientHeight),q.vw=q.width/100,q.vh=q.height/100,A=[q.height,q.width,I].join("-"),q.em=y.getEmValue(),q.rem=q.em}function o(e,t,n,r){var i,s,a,o;return"saveData"===z.algorithm?e>2.7?o=n+1:(s=t-n,i=Math.pow(e-.6,1.5),a=s*i,r&&(a+=.1*i),o=e+a):o=n>1?Math.sqrt(e*t):e,o>n}function c(e){var t,n=y.getSet(e),r=!1;"pending"!==n&&(r=A,n&&(t=y.setRes(n),y.applySetCandidate(t,e))),e[y.ns].evaled=r}function u(e,t){return e.res-t.res}function l(e,t,n){var r;return!n&&t&&(n=e[y.ns].sets,n=n&&n[n.length-1]),r=f(t,n),r&&(t=y.makeUrl(t),e[y.ns].curSrc=t,e[y.ns].curCan=r,r.res||ee(r,r.set.sizes)),r}function f(e,t){var n,r,i;if(e&&t)for(i=y.parseSet(t),e=y.makeUrl(e),n=0;n<i.length;n++)if(e===y.makeUrl(i[n].url)){r=i[n];break}return r}function d(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;r>n;n++)i=a[n],i[y.ns]=!0,s=i.getAttribute("srcset"),s&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function p(e,t){function n(t){var n,r=t.exec(e.substring(d));return r?(n=r[0],d+=n.length,n):void 0}function r(){var e,n,r,i,s,c,u,l,f,d=!1,m={};for(i=0;i<o.length;i++)s=o[i],c=s[s.length-1],u=s.substring(0,s.length-1),l=parseInt(u,10),f=parseFloat(u),J.test(u)&&"w"===c?((e||n)&&(d=!0),0===l?d=!0:e=l):K.test(u)&&"x"===c?((e||n||r)&&(d=!0),0>f?d=!0:n=f):J.test(u)&&"h"===c?((r||n)&&(d=!0),0===l?d=!0:r=l):d=!0;d||(m.url=a,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function s(){for(n(O),c="",u="in descriptor";;){if(l=e.charAt(d),"in descriptor"===u)if(i(l))c&&(o.push(c),c="",u="after descriptor");else{if(","===l)return d+=1,c&&o.push(c),void r();if("("===l)c+=l,u="in parens";else{if(""===l)return c&&o.push(c),void r();c+=l}}else if("in parens"===u)if(")"===l)c+=l,u="in descriptor";else{if(""===l)return o.push(c),void r();c+=l}else if("after descriptor"===u)if(i(l));else{if(""===l)return void r();u="in descriptor",d-=1}d+=1}}for(var a,o,c,u,l,f=e.length,d=0,p=[];;){if(n(Q),d>=f)return p;a=n(G),o=[],","===a.slice(-1)?(a=a.replace(V,""),r()):s()}}function m(e){function t(e){function t(){s&&(a.push(s),s="")}function n(){a[0]&&(o.push(a),a=[])}for(var r,s="",a=[],o=[],c=0,u=0,l=!1;;){if(r=e.charAt(u),""===r)return t(),n(),o;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(i(r)){if(e.charAt(u-1)&&i(e.charAt(u-1))||!s){u+=1;continue}if(0===c){t(),u+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}s+=r,u+=1}}}function n(e){return l.test(e)&&parseFloat(e)>=0?!0:f.test(e)?!0:"0"===e||"-0"===e||"+0"===e?!0:!1}var r,s,a,o,c,u,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,f=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=t(e),a=s.length,r=0;a>r;r++)if(o=s[r],c=o[o.length-1],n(c)){if(u=c,o.pop(),0===o.length)return u;if(o=o.join(" "),y.matchesMedia(o))return u}return"100vw"}n.createElement("picture");var h,g,v,A,y={},w=function(){},S=n.createElement("img"),E=S.getAttribute,b=S.setAttribute,x=S.removeAttribute,C=n.documentElement,T={},z={algorithm:""},N="data-pfsrc",_=N+"set",L=navigator.userAgent,M=/rident/.test(L)||/ecko/.test(L)&&L.match(/rv\:(\d+)/)&&RegExp.$1>35,R="currentSrc",D=/\s+\+?\d+(e\d+)?w/,P=/(\([^)]+\))?\s*(.+)/,$=e.picturefillCFG,k="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",B="font-size:100%!important;",j=!0,U={},F={},I=e.devicePixelRatio,q={px:1,"in":96},W=n.createElement("a"),H=!1,O=/^[ \t\n\r\u000c]+/,Q=/^[, \t\n\r\u000c]+/,G=/^[^ \t\n\r\u000c]+/,V=/[,]+$/,J=/^\d+$/,K=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,X=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Z=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Y=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=Z(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var i;if(!(t in U))if(U[t]=!1,r&&(i=t.match(e)))U[t]=i[1]*q[i[2]];else try{U[t]=new Function("e",n(t))(q)}catch(s){}return U[t]}}(),ee=function(e,t){return e.w?(e.cWidth=y.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},te=function(e){var t,r,i,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),t=s.elements||y.qsa(s.context||n,s.reevaluate||s.reselect?y.sel:y.selShort),i=t.length){for(y.setupRun(s),H=!0,r=0;i>r;r++)y.fillImg(t[r],s);y.teardownRun(s)}};h=e.console&&console.warn?function(e){console.warn(e)}:w,R in S||(R="src"),T["image/jpeg"]=!0,T["image/gif"]=!0,T["image/png"]=!0,T["image/svg+xml"]=n.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),y.ns=("pf"+(new Date).getTime()).substr(0,9),y.supSrcset="srcset"in S,y.supSizes="sizes"in S,y.supPicture=!!e.HTMLPictureElement,y.supSrcset&&y.supPicture&&!y.supSizes&&!function(e){S.srcset="data:,a",e.src="data:,a",y.supSrcset=S.complete===e.complete,y.supPicture=y.supSrcset&&y.supPicture}(n.createElement("img")),y.selShort="picture>img,img[srcset]",y.sel=y.selShort,y.cfg=z,y.supSrcset&&(y.sel+=",img["+_+"]"),y.DPR=I||1,y.u=q,y.types=T,v=y.supSrcset&&!y.supSizes,y.setSize=w,y.makeUrl=Z(function(e){return W.href=e,W.href}),y.qsa=function(e,t){return e.querySelectorAll(t)},y.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?y.matchesMedia=function(e){return!e||matchMedia(e).matches}:y.matchesMedia=y.mMQ,y.matchesMedia.apply(this,arguments)},y.mMQ=function(e){return e?Y(e):!0},y.calcLength=function(e){var t=Y(e,!0)||!1;return 0>t&&(t=!1),t},y.supportsType=function(e){return e?T[e]:!0},y.parseSize=Z(function(e){var t=(e||"").match(P);return{media:t&&t[1],length:t&&t[2]}}),y.parseSet=function(e){return e.cands||(e.cands=p(e.srcset,e)),e.cands},y.getEmValue=function(){var e;if(!g&&(e=n.body)){var t=n.createElement("div"),r=C.style.cssText,i=e.style.cssText;t.style.cssText=k,C.style.cssText=B,e.style.cssText=B,e.appendChild(t),g=t.offsetWidth,e.removeChild(t),g=parseFloat(g,10),C.style.cssText=r,e.style.cssText=i}return g||16},y.calcListLength=function(e){if(!(e in F)||z.uT){var t=y.calcLength(m(e));F[e]=t?t:q.width}return F[e]},y.setRes=function(e){var t;if(e){t=y.parseSet(e);for(var n=0,r=t.length;r>n;n++)ee(t[n],e.sizes)}return t},y.setRes.res=ee,y.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,c,f,d,p,m=t[y.ns],h=y.DPR;if(c=m.curSrc||t[R],f=m.curCan||l(t,c,e[0].set),f&&f.set===e[0].set&&(p=M&&!t.complete&&f.res-.1>h,p||(f.cached=!0,f.res>=h&&(a=f))),!a)for(e.sort(u),s=e.length,a=e[s-1],r=0;s>r;r++)if(n=e[r],n.res>=h){i=r-1,a=e[i]&&(p||c!==y.makeUrl(n.url))&&o(e[i].res,n.res,h,e[i].cached)?e[i]:n;break}a&&(d=y.makeUrl(a.url),m.curSrc=d,m.curCan=a,d!==c&&y.setSrc(t,a),y.setSize(t))}},y.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},y.getSet=function(e){var t,n,r,i=!1,s=e[y.ns].sets;for(t=0;t<s.length&&!i;t++)if(n=s[t],n.srcset&&y.matchesMedia(n.media)&&(r=y.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},y.parseSets=function(e,t,n){var i,s,a,o,c=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[y.ns];(u.src===r||n.src)&&(u.src=E.call(e,"src"),u.src?b.call(e,N,u.src):x.call(e,N)),(u.srcset===r||n.srcset||!y.supSrcset||e.srcset)&&(i=E.call(e,"srcset"),u.srcset=i,o=!0),u.sets=[],c&&(u.pic=!0,d(t,u.sets)),u.srcset?(s={srcset:u.srcset,sizes:E.call(e,"sizes")},u.sets.push(s),a=(v||u.src)&&D.test(u.srcset||""),a||!u.src||f(u.src,s)||s.has1x||(s.srcset+=", "+u.src,s.cands.push({url:u.src,d:1,set:s}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=r,u.supported=!(c||s&&!y.supSrcset||a),o&&y.supSrcset&&!u.supported&&(i?(b.call(e,_,i),e.srcset=""):x.call(e,_)),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==y.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},y.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[y.ns]||(e[y.ns]={}),n=e[y.ns],(r||n.evaled!==A)&&((!n.parsed||t.reevaluate)&&y.parseSets(e,e.parentNode,t),n.supported?n.evaled=A:c(e))},y.setupRun=function(){(!H||j||I!==e.devicePixelRatio)&&a()},y.supPicture?(te=w,y.fillImg=w):!function(){var t,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function(){var e=n.readyState||"";s=setTimeout(i,"loading"===e?200:999),n.body&&(y.fillImgs(),t=t||r.test(e),t&&clearTimeout(s))},s=setTimeout(i,n.body?9:99),a=function(e,t){var n,r,i=function(){var s=new Date-r;t>s?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}},o=C.clientHeight,c=function(){j=Math.max(e.innerWidth||0,C.clientWidth)!==q.width||C.clientHeight!==o,o=C.clientHeight,j&&y.fillImgs()};X(e,"resize",a(c,99)),X(n,"readystatechange",i)}(),y.picturefill=te,y.fillImgs=te,y.teardownRun=w,te._=y,e.picturefillCFG={pf:y,push:function(e){var t=e.shift();"function"==typeof y[t]?y[t].apply(y,e):(z[t]=e[0],H&&y.fillImgs({reselect:!0}))}};for(;$&&$.length;)e.picturefillCFG.push($.shift());e.picturefill=te,"object"==typeof t&&"object"==typeof t.exports?t.exports=te:"function"==typeof define&&define.amd&&define("picturefill",function(){return te}),y.supPicture||(T["image/webp"]=s("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},{}]},{},[2]);