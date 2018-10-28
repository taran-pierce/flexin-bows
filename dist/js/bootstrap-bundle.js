function changeImage(e,t){var a=e.getElementsByTagName("img")[0],n=splitPath(a.getAttribute("srcset"),l=t.targetData.target.imageName),i=e.getElementsByTagName("source");a.srcset=n+".jpg";for(var r=0;r<i.length;r++){var s=i[r],o=s.getAttribute("media");if(o.includes("1200")){var l=t.targetData.target.imageName+"-lg.jpg",c=splitPath(s.getAttribute("srcset"),l);s.srcset=c}if(o.includes("992")){l=t.targetData.target.imageName+"-md.jpg",c=splitPath(s.getAttribute("srcset"),l);s.srcset=c}}}function splitPath(e,t){var a=e.split("/");return a.pop(),a.push(t),a.join("/")}function getTargets(){for(var e=document.getElementsByTagName("table"),t=[],a=0;a<e.length;a++)t.push(e[a].getElementsByTagName("a"));return t}function bindOnClick(e){for(var a=document.getElementsByClassName("workout-image")[0],t=0;t<e.length;t++)for(var n=e[t],i=0;i<n.length;i++)n[i].addEventListener("click",function(e){e.preventDefault();var t={currentImageData:getImageInfo(a),targetData:getTargetInfo(this)};changeImage(a,t)})}function getImageInfo(e){var t=e.getElementsByTagName("img")[0],a=t.getAttribute("alt"),n=t.getAttribute("srcset"),i=e.getElementsByTagName("source"),r={};r.image={alt:a,srcset:n};for(var s=0;s<i.length;s++){var o=i[s];r["source"+s]={srcset:o.getAttribute("srcset"),media:o.getAttribute("media")}}return r}function getTargetInfo(e){var t={},a=e.getAttribute("data-exercise");return t.target={imageName:a},t}function initExerciseProgram(){bindOnClick(getTargets())}function mobileNavToggle(){var e=document.getElementById("main-nav-toggle"),t=document.getElementById("main-nav");e.addEventListener("click",function(){window.innerWidth<992&&t.classList.toggle("open")})}function programBindOnClick(){for(var n=document.getElementById("program-nav"),e=n.getElementsByTagName("a"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){e.preventDefault();var t=this.hash.split("#")[1],a=document.getElementById(t);n.getElementsByClassName("active")[0].classList.toggle("active"),this.parentElement.classList.toggle("active"),document.getElementsByClassName("exercises active")[0].classList.toggle("active"),a.classList.toggle("active")})}function initProgramTable(){programBindOnClick()}function subNavToggle(){for(var e=document.getElementsByClassName("dropdown"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){console.log("oh hai");var e=this.nextElementSibling;console.log(e),e.classList.toggle("open")})}!function(e,t){var a=function(n,d){"use strict";if(!d.getElementsByClassName)return;var u,g,m=d.documentElement,r=n.Date,i=n.HTMLPictureElement,s="addEventListener",f="getAttribute",t=n[s],v=n.setTimeout,a=n.requestAnimationFrame||v,o=n.requestIdleCallback,h=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],c={},y=Array.prototype.forEach,p=function(e,t){return c[t]||(c[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),c[t].test(e[f]("class")||"")&&c[t]},z=function(e,t){p(e,t)||e.setAttribute("class",(e[f]("class")||"").trim()+" "+t)},b=function(e,t){var a;(a=p(e,t))&&e.setAttribute("class",(e[f]("class")||"").replace(a," "))},E=function(t,a,e){var n=e?s:"removeEventListener";e&&E(t,a),l.forEach(function(e){t[n](e,a)})},C=function(e,t,a,n,i){var r=d.createEvent("Event");return a||(a={}),a.instance=u,r.initEvent(t,!n,!i),r.detail=a,e.dispatchEvent(r),r},A=function(e,t){var a;!i&&(a=n.picturefill||g.pf)?(t&&t.src&&!e[f]("srcset")&&e.setAttribute("srcset",t.src),a({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},N=function(e,t){return(getComputedStyle(e,null)||{})[t]},T=function(e,t,a){for(a=a||e.offsetWidth;a<g.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},B=(M=[],k=[],x=M,D=function(){var e=x;for(x=M.length?k:M,I=!(L=!0);e.length;)e.shift()();L=!1},_=function(e,t){L&&!t?e.apply(this,arguments):(x.push(e),I||(I=!0,(d.hidden?v:a)(D)))},_._lsFlush=D,_),e=function(a,e){return e?function(){B(a)}:function(){var e=this,t=arguments;B(function(){a.apply(e,t)})}},w=function(e){var t,a,n=function(){t=null,e()},i=function(){var e=r.now()-a;e<99?v(i,99-e):(o||n)(n)};return function(){a=r.now(),t||(t=v(i,99))}};var L,I,M,k,x,D,_;!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in g=n.lazySizesConfig||n.lazysizesConfig||{},t)e in g||(g[e]=t[e]);n.lazySizesConfig=g,v(function(){g.init&&O()})}();var P=(ce=/^img$/i,de=/^iframe$/i,ue="onscroll"in n&&!/(gle|ing)bot/.test(navigator.userAgent),ge=0,me=0,fe=-1,ve=function(e){me--,e&&e.target&&E(e.target,ve),(!e||me<0||!e.target)&&(me=0)},he=function(e,t){var a,n=e,i="hidden"==N(d.body,"visibility")||"hidden"!=N(e.parentNode,"visibility")&&"hidden"!=N(e,"visibility");for(U-=t,Y+=t,V-=t,X+=t;i&&(n=n.offsetParent)&&n!=d.body&&n!=m;)(i=0<(N(n,"opacity")||1))&&"visible"!=N(n,"overflow")&&(a=n.getBoundingClientRect(),i=X>a.left&&V<a.right&&Y>a.top-1&&U<a.bottom+1);return i},ye=function(){var e,t,a,n,i,r,s,o,l,c=u.elements;if((G=g.loadMode)&&me<8&&(e=c.length)){t=0,fe++,null==ee&&("expand"in g||(g.expand=500<m.clientHeight&&500<m.clientWidth?500:370),Z=g.expand,ee=Z*g.expFactor),ge<ee&&me<1&&2<fe&&2<G&&!d.hidden?(ge=ee,fe=0):ge=1<G&&1<fe&&me<6?Z:0;for(;t<e;t++)if(c[t]&&!c[t]._lazyRace)if(ue)if((o=c[t][f]("data-expand"))&&(r=1*o)||(r=ge),l!==r&&(K=innerWidth+r*te,Q=innerHeight+r,s=-1*r,l=r),a=c[t].getBoundingClientRect(),(Y=a.bottom)>=s&&(U=a.top)<=Q&&(X=a.right)>=s*te&&(V=a.left)<=K&&(Y||X||V||U)&&(g.loadHidden||"hidden"!=N(c[t],"visibility"))&&($&&me<3&&!o&&(G<3||fe<4)||he(c[t],r))){if(Ne(c[t]),i=!0,9<me)break}else!i&&$&&!n&&me<4&&fe<4&&2<G&&(H[0]||g.preloadAfterLoad)&&(H[0]||!o&&(Y||X||V||U||"auto"!=c[t][f](g.sizesAttr)))&&(n=H[0]||c[t]);else Ne(c[t]);n&&!i&&Ne(n)}},ae=ye,ie=0,re=g.throttleDelay,se=g.ricTimeout,oe=function(){ne=!1,ie=r.now(),ae()},le=o&&49<se?function(){o(oe,{timeout:se}),se!==g.ricTimeout&&(se=g.ricTimeout)}:e(function(){v(oe)},!0),pe=function(e){var t;(e=!0===e)&&(se=33),ne||(ne=!0,(t=re-(r.now()-ie))<0&&(t=0),e||t<9?le():v(le,t))},ze=function(e){z(e.target,g.loadedClass),b(e.target,g.loadingClass),E(e.target,Ee),C(e.target,"lazyloaded")},be=e(ze),Ee=function(e){be({target:e.target})},Ce=function(e){var t,a=e[f](g.srcsetAttr);(t=g.customMedia[e[f]("data-media")||e[f]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},Ae=e(function(e,t,a,n,i){var r,s,o,l,c,d;(c=C(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?z(e,g.autosizesClass):e.setAttribute("sizes",n)),s=e[f](g.srcsetAttr),r=e[f](g.srcAttr),i&&(o=e.parentNode,l=o&&h.test(o.nodeName||"")),d=t.firesLoad||"src"in e&&(s||r||l),c={target:e},d&&(E(e,ve,!0),clearTimeout(q),q=v(ve,2500),z(e,g.loadingClass),E(e,Ee,!0)),l&&y.call(o.getElementsByTagName("source"),Ce),s?e.setAttribute("srcset",s):r&&!l&&(de.test(e.nodeName)?function(t,a){try{t.contentWindow.location.replace(a)}catch(e){t.src=a}}(e,r):e.src=r),i&&(s||l)&&A(e,{src:r})),e._lazyRace&&delete e._lazyRace,b(e,g.lazyClass),B(function(){(!d||e.complete&&1<e.naturalWidth)&&(d?ve(c):me--,ze(c))},!0)}),Ne=function(e){var t,a=ce.test(e.nodeName),n=a&&(e[f](g.sizesAttr)||e[f]("sizes")),i="auto"==n;(!i&&$||!a||!e[f]("src")&&!e.srcset||e.complete||p(e,g.errorClass)||!p(e,g.lazyClass))&&(t=C(e,"lazyunveilread").detail,i&&W.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,me++,Ae(e,t,i,n,a))},Te=function(){if(!$)if(r.now()-J<999)v(Te,999);else{var e=w(function(){g.loadMode=3,pe()});$=!0,g.loadMode=3,pe(),t("scroll",function(){3==g.loadMode&&(g.loadMode=2),e()},!0)}},{_:function(){J=r.now(),u.elements=d.getElementsByClassName(g.lazyClass),H=d.getElementsByClassName(g.lazyClass+" "+g.preloadClass),te=g.hFac,t("scroll",pe,!0),t("resize",pe,!0),n.MutationObserver?new MutationObserver(pe).observe(m,{childList:!0,subtree:!0,attributes:!0}):(m[s]("DOMNodeInserted",pe,!0),m[s]("DOMAttrModified",pe,!0),setInterval(pe,999)),t("hashchange",pe,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){d[s](e,pe,!0)}),/d$|^c/.test(d.readyState)?Te():(t("load",Te),d[s]("DOMContentLoaded",pe),v(Te,2e4)),u.elements.length?(ye(),B._lsFlush()):pe()},checkElems:pe,unveil:Ne}),W=(F=e(function(e,t,a,n){var i,r,s;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),h.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),r=0,s=i.length;r<s;r++)i[r].setAttribute("sizes",n);a.detail.dataAttr||A(e,a.detail)}),R=function(e,t,a){var n,i=e.parentNode;i&&(a=T(e,i,a),(n=C(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=n.detail.width)&&a!==e._lazysizesWidth&&F(e,i,n,a))},j=w(function(){var e,t=S.length;if(t)for(e=0;e<t;e++)R(S[e])}),{_:function(){S=d.getElementsByClassName(g.autosizesClass),t("resize",j)},checkElems:j,updateElem:R}),O=function(){O.i||(O.i=!0,W._(),P._())};var S,F,R,j;var H,$,q,G,J,K,Q,U,V,X,Y,Z,ee,te,ae,ne,ie,re,se,oe,le,ce,de,ue,ge,me,fe,ve,he,ye,pe,ze,be,Ee,Ce,Ae,Ne,Te;return u={cfg:g,autoSizer:W,loader:P,init:O,uP:A,aC:z,rC:b,hC:p,fire:C,gW:T,rAF:B}}(e,e.document);e.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}(window),document.addEventListener("DOMContentLoaded",function(e){mobileNavToggle(),initExerciseProgram(),initProgramTable(),subNavToggle()});