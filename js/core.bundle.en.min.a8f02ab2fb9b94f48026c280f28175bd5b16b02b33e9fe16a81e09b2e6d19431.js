/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const alert=document.getElementById("page-alert"),closeBtn=document.getElementById("page-alert-btn-close");if(alert!==null&&closeBtn!==null){const e=alert.getAttribute("data-page-alert-version")||"unknown",t=getSessionStorage(`page-alert-${e}`,null,"functional")!==null;t&&alert.classList.add("d-none"),closeBtn.addEventListener("click",()=>{setSessionStorage(`page-alert-${e}`,"seen","functional"),alert.classList.add("d-none")})}function reveal(){const e=document.querySelectorAll(".reveal");for(let t=0;t<e.length;t++){const n=window.innerHeight,s=e[t].getBoundingClientRect().top,o=150;s<n-o?(e[t].classList.add("active"),e[t].classList.remove("reveal")):e[t].classList.remove("active")}}window.addEventListener("scroll",reveal);const svgCopy='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>',svgCheck='<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>',addCopyButtons=e=>{document.querySelectorAll("pre > code").forEach(t=>{const n=document.createElement("button");n.className="clipboard-button",n.setAttribute("data-toast-target","toast-copied-code-message"),n.setAttribute("aria-label","copy to clipboard"),n.type="button",n.innerHTML=svgCopy,n.addEventListener("click",()=>{const s=t.innerText.split(`
`).filter(Boolean).join(`
`);e.writeText(s).then(()=>{n.blur(),n.innerHTML=svgCheck,setTimeout(()=>n.innerHTML=svgCopy,2e3)},e=>n.innerHTML="Error")});const s=t.parentNode;s.parentNode.insertBefore(n,s)})};navigator&&navigator.clipboard&&addCopyButtons(navigator.clipboard),document.querySelectorAll("[data-clipboard]").forEach(e=>{const t=e.getAttribute("data-clipboard");e.addEventListener("click",()=>{navigator.clipboard.writeText(t)})});const url=new URL(window.location.href),menu=url.searchParams.get("menu"),child=url.searchParams.get("child"),menuItems=document.querySelectorAll('[data-nav="main"]');if(menu!==null){menuItems.forEach(e=>{e.classList.remove("active")});const e=document.querySelectorAll(`[data-nav-main="${menu}"]:not([data-nav-child])`);e.forEach(e=>{e.classList.add("active")});const t=document.querySelectorAll(`[data-nav-main="${menu}"][data-nav-child="${child}"]`);t.forEach(e=>{e.classList.add("active")})}(function(e,t){typeof exports=="object"&&typeof module!="undefined"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self,e.bootstrap=t())})(this,function(){"use strict";const C=new Map,pt={set(e,t,n){C.has(e)||C.set(e,new Map);const s=C.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return C.has(e)?C.get(e).get(t)||null:null},remove(e,t){if(!C.has(e))return;const n=C.get(e);n.delete(t),n.size===0&&C.delete(e)}},Jr=1e6,Xr=1e3,lt="transitionend",is=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),Gr=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),Yr=e=>{do e+=Math.floor(Math.random()*Jr);while(document.getElementById(e))return e},Pr=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),o=Number.parseFloat(n);return!s&&!o?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*Xr)},ns=e=>{e.dispatchEvent(new Event(lt))},g=e=>!!e&&typeof e=="object"&&(typeof e.jquery!="undefined"&&(e=e[0]),typeof e.nodeType!="undefined"),w=e=>g(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(is(e)):null,R=e=>{if(!g(e)||e.getClientRects().length===0)return!1;const n=getComputedStyle(e).getPropertyValue("visibility")==="visible",t=e.closest("details:not([open])");if(!t)return n;if(t!==e){const n=e.closest("summary");if(n&&n.parentNode!==t)return!1;if(n===null)return!1}return n},y=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(typeof e.disabled!="undefined"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false"),es=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?es(e.parentNode):null},le=()=>{},oe=e=>{e.offsetHeight},Jn=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ue=[],Nr=e=>{document.readyState==="loading"?(Ue.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Ue)e()}),Ue.push(e)):e()},c=()=>document.documentElement.dir==="rtl",u=e=>{Nr(()=>{const t=Jn();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},o=(e,t=[],n=e)=>typeof e=="function"?e(...t):n,Zn=(e,t,n=!0)=>{if(!n){o(e);return}const a=5,r=Pr(t)+a;let s=!1;const i=({target:n})=>{if(n!==t)return;s=!0,t.removeEventListener(lt,i),o(e)};t.addEventListener(lt,i),setTimeout(()=>{s||ns(t)},r)},$e=(e,t,n,s)=>{const i=e.length;let o=e.indexOf(t);return o===-1?!n&&s?e[i-1]:e[0]:(o+=n?1:-1,s&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))])},zr=/[^.]*(?=\..*)\.|.*/,Tr=/\..*/,Ar=/::\d+$/,De={};let qn=1;const Un={mouseenter:"mouseover",mouseleave:"mouseout"},Er=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Hn(e,t){return t&&`${t}::${qn++}`||e.uidEvent||qn++}function Fn(e){const t=Hn(e);return e.uidEvent=t,De[t]=De[t]||{},De[t]}function xr(t,n){return function s(o){return ht(o,{delegateTarget:t}),s.oneOff&&e.off(t,o.type,n),n.apply(t,[o])}}function Or(t,n,s){return function o(i){const a=t.querySelectorAll(n);for(let{target:r}=i;r&&r!==this;r=r.parentNode)for(const c of a){if(c!==r)continue;return ht(i,{delegateTarget:r}),o.oneOff&&e.off(t,i.type,n,s),s.apply(r,[i])}}}function Sn(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function An(e,t,n){const o=typeof t=="string",i=o?n:t||n;let s=xn(e);return Er.has(s)||(s=e),[o,i,s]}function Cn(e,t,n,s,o){if(typeof t!="string"||!e)return;let[r,i,c]=An(t,n,s);if(t in Un){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};i=e(i)}const d=Fn(e),u=d[c]||(d[c]={}),l=Sn(u,i,r?n:null);if(l){l.oneOff=l.oneOff&&o;return}const h=Hn(i,t.replace(zr,"")),a=r?Or(e,n,i):xr(e,i);a.delegationSelector=r?n:null,a.callable=i,a.oneOff=o,a.uidEvent=h,u[h]=a,e.addEventListener(c,a,r)}function dt(e,t,n,s,o){const i=Sn(t[n],s,o);if(!i)return;e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent]}function wr(e,t,n,s){const o=t[n]||{};for(const[a,i]of Object.entries(o))a.includes(s)&&dt(e,t,n,i.callable,i.delegationSelector)}function xn(e){return e=e.replace(Tr,""),Un[e]||e}const e={on(e,t,n,s){Cn(e,t,n,s,!1)},one(e,t,n,s){Cn(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[c,a,i]=An(t,n,s),l=i!==t,o=Fn(e),r=o[i]||{},d=t.startsWith(".");if(typeof a!="undefined"){if(!Object.keys(r).length)return;dt(e,o,i,a,c?n:null);return}if(d)for(const n of Object.keys(o))wr(e,o,n,t.slice(1));for(const[s,n]of Object.entries(r)){const a=s.replace(Ar,"");(!l||t.includes(a))&&dt(e,o,i,n.callable,n.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const i=Jn(),l=xn(t),d=t!==l;let s=null,a=!0,r=!0,c=!1;d&&i&&(s=i.Event(t,n),i(e).trigger(s),a=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),c=s.isDefaultPrevented());const o=ht(new Event(t,{bubbles:a,cancelable:!0}),n);return c&&o.preventDefault(),r&&e.dispatchEvent(o),o.defaultPrevented&&s&&s.preventDefault(),o}};function ht(e,t={}){for(const[n,s]of Object.entries(t))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}function On(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Le(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const v={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Le(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Le(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(const o of n){let s=o.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=On(e.dataset[o])}return t},getDataAttribute(e,t){return On(e.getAttribute(`data-bs-${Le(t)}`))}};class se{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=g(t)?v.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...g(t)?v.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,s]of Object.entries(t)){const o=e[n],i=g(o)?"element":Gr(o);if(!new RegExp(s).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${s}".`)}}}const _r="5.3.3";class h extends se{constructor(e,t){if(super(),e=w(e),!e)return;this._element=e,this._config=this._getConfig(t),pt.set(this._element,this.constructor.DATA_KEY,this)}dispose(){pt.remove(this._element,this.constructor.DATA_KEY),e.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Zn(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return pt.get(w(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return _r}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const tt=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t?t.split(",").map(e=>is(e)).join(","):null},t={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const s=[];let n=e.parentNode.closest(t);for(;n;)s.push(n),n=n.parentNode.closest(t);return s},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(e=>!y(e)&&R(e))},getSelectorFromElement(e){const n=tt(e);return n?t.findOne(n)?n:null:null},getElementFromSelector(e){const n=tt(e);return n?t.findOne(n):null},getMultipleElementsFromSelector(e){const n=tt(e);return n?t.find(n):[]}},_e=(n,s="hide")=>{const i=`click.dismiss${n.EVENT_KEY}`,o=n.NAME;e.on(document,i,`[data-bs-dismiss="${o}"]`,function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),y(this))return;const i=t.getElementFromSelector(this)||this.closest(`.${o}`),a=n.getOrCreateInstance(i);a[s]()})},yr="alert",jr="bs.alert",jn=`.${jr}`,vr=`close${jn}`,cr=`closed${jn}`,ir="fade",Qa="show";class de extends h{static get NAME(){return yr}close(){const t=e.trigger(this._element,vr);if(t.defaultPrevented)return;this._element.classList.remove(Qa);const n=this._element.classList.contains(ir);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),e.trigger(this._element,cr),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=de.getOrCreateInstance(this);if(typeof e!="string")return;if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)})}}_e(de,"close"),u(de);const Ga="button",qa="bs.button",Wa=`.${qa}`,Ba=".data-api",Pa="active",fn='[data-bs-toggle="button"]',Ta=`click${Wa}${Ba}`;class fe extends h{static get NAME(){return Ga}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Pa))}static jQueryInterface(e){return this.each(function(){const t=fe.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}e.on(document,Ta,fn,e=>{e.preventDefault();const t=e.target.closest(fn),n=fe.getOrCreateInstance(t);n.toggle()}),u(fe);const ga="swipe",P=".bs.swipe",pa=`touchstart${P}`,fa=`touchmove${P}`,ma=`touchend${P}`,ua=`pointerdown${P}`,la=`pointerup${P}`,Qi="touch",Gi="pen",Vi="pointer-event",Bi=40,Ri={endCallback:null,leftCallback:null,rightCallback:null},Ni={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Re extends se{constructor(e,t){if(super(),this._element=e,!e||!Re.isSupported())return;this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents()}static get Default(){return Ri}static get DefaultType(){return Ni}static get NAME(){return ga}dispose(){e.off(this._element,P)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),o(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Bi)return;const t=e/this._deltaX;if(this._deltaX=0,!t)return;o(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(e.on(this._element,ua,e=>this._start(e)),e.on(this._element,la,e=>this._end(e)),this._element.classList.add(Vi)):(e.on(this._element,pa,e=>this._start(e)),e.on(this._element,fa,e=>this._move(e)),e.on(this._element,ma,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Gi||e.pointerType===Qi)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Di="carousel",zi="bs.carousel",_=`.${zi}`,Kt=".data-api",Mi="ArrowLeft",Si="ArrowRight",Ei=500,ie="next",U="prev",K="left",ke="right",ji=`slide${_}`,Be=`slid${_}`,bi=`keydown${_}`,gi=`mouseenter${_}`,li=`mouseleave${_}`,ci=`dragstart${_}`,si=`load${_}${Kt}`,ei=`click${_}${Kt}`,Pt="carousel",Ce="active",Jo="slide",Zo="carousel-item-end",Qo="carousel-item-start",Xo="carousel-item-next",Go="carousel-item-prev",zt=".active",gt=".carousel-item",Ko=zt+gt,Bo=".carousel-item img",Po=".carousel-indicators",No="[data-bs-slide], [data-bs-slide-to]",Do='[data-bs-ride="carousel"]',To={[Mi]:ke,[Si]:K},Fo={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},vo={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ee extends h{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=t.findOne(Po,this._element),this._addEventListeners(),this._config.ride===Pt&&this.cycle()}static get Default(){return Fo}static get DefaultType(){return vo}static get NAME(){return Di}next(){this._slide(ie)}nextWhenVisible(){!document.hidden&&R(this._element)&&this.next()}prev(){this._slide(U)}pause(){this._isSliding&&ns(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!this._config.ride)return;if(this._isSliding){e.one(this._element,Be,()=>this.cycle());return}this.cycle()}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){e.one(this._element,Be,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const o=t>s?ie:U;this._slide(o,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&e.on(this._element,bi,e=>this._keydown(e)),this._config.pause==="hover"&&(e.on(this._element,gi,()=>this.pause()),e.on(this._element,li,()=>this._maybeEnableCycle())),this._config.touch&&Re.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of t.find(Bo,this._element))e.on(n,ci,e=>e.preventDefault());const n=()=>{if(this._config.pause!=="hover")return;this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Ei+this._config.interval)},s={leftCallback:()=>this._slide(this._directionToOrder(K)),rightCallback:()=>this._slide(this._directionToOrder(ke)),endCallback:n};this._swipeHelper=new Re(this._element,s)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=To[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const s=t.findOne(zt,this._indicatorsElement);s.classList.remove(Ce),s.removeAttribute("aria-current");const n=t.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Ce),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const o=this._getActive(),a=t===ie,s=n||$e(this._getItems(),o,a,this._config.wrap);if(s===o)return;const c=this._getItemIndex(s),l=n=>e.trigger(this._element,n,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:c}),d=l(ji);if(d.defaultPrevented)return;if(!o||!s)return;const u=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(c),this._activeElement=s;const i=a?Qo:Zo,r=a?Xo:Go;s.classList.add(r),oe(s),o.classList.add(i),s.classList.add(i);const h=()=>{s.classList.remove(i,r),s.classList.add(Ce),o.classList.remove(Ce,r,i),this._isSliding=!1,l(Be)};this._queueCallback(h,o,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(Jo)}_getActive(){return t.findOne(Ko,this._element)}_getItems(){return t.find(gt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return c()?e===K?U:ie:e===K?ie:U}_orderToDirection(e){return c()?e===U?K:ke:e===U?ke:K}static jQueryInterface(e){return this.each(function(){const t=ee.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}e.on(document,ei,No,function(e){const s=t.getElementFromSelector(this);if(!s||!s.classList.contains(Pt))return;e.preventDefault();const n=ee.getOrCreateInstance(s),o=this.getAttribute("data-bs-slide-to");if(o){n.to(o),n._maybeEnableCycle();return}if(v.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()}),e.on(window,si,()=>{const e=t.find(Do);for(const t of e)ee.getOrCreateInstance(t)}),u(ee);const rs="collapse",po="bs.collapse",J=`.${po}`,co=".data-api",ao=`show${J}`,io=`shown${J}`,Js=`hide${J}`,Qs=`hidden${J}`,Gs=`click${J}${co}`,ct="show",L="collapse",pe="collapsing",Ys="collapsed",Ks=`:scope .${L} .${L}`,Us="collapse-horizontal",Ws="width",$s="height",Vs=".collapse.show, .collapse.collapsing",nt='[data-bs-toggle="collapse"]',Bs={parent:null,toggle:!0},Is={parent:"(null|element)",toggle:"boolean"};class te extends h{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=t.find(nt);for(const e of s){const n=t.getSelectorFromElement(e),o=t.find(n).filter(e=>e===this._element);n!==null&&o.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Bs}static get DefaultType(){return Is}static get NAME(){return rs}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let n=[];if(this._config.parent&&(n=this._getFirstLevelChildren(Vs).filter(e=>e!==this._element).map(e=>te.getOrCreateInstance(e,{toggle:!1}))),n.length&&n[0]._isTransitioning)return;const s=e.trigger(this._element,ao);if(s.defaultPrevented)return;for(const e of n)e.hide();const t=this._getDimension();this._element.classList.remove(L),this._element.classList.add(pe),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(pe),this._element.classList.add(L,ct),this._element.style[t]="",e.trigger(this._element,io)},i=t[0].toUpperCase()+t.slice(1),a=`scroll${i}`;this._queueCallback(o,this._element,!0),this._element.style[t]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const s=e.trigger(this._element,Js);if(s.defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,oe(this._element),this._element.classList.add(pe),this._element.classList.remove(L,ct);for(const e of this._triggerArray){const n=t.getElementFromSelector(e);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(pe),this._element.classList.add(L),e.trigger(this._element,Qs)};this._element.style[n]="",this._queueCallback(o,this._element,!0)}_isShown(e=this._element){return e.classList.contains(ct)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=w(e.parent),e}_getDimension(){return this._element.classList.contains(Us)?Ws:$s}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(nt);for(const n of e){const s=t.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=t.find(Ks,this._config.parent);return t.find(e,this._config.parent).filter(e=>!n.includes(e))}_addAriaAndCollapsedClass(e,t){if(!e.length)return;for(const n of e)n.classList.toggle(Ys,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const n=te.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}e.on(document,Gs,nt,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const e of t.getMultipleElementsFromSelector(this))te.getOrCreateInstance(e,{toggle:!1}).toggle()}),u(te);var k,A,Q,Nn,In,ae,Yn,Xn,ot,Tt,Ft,St,At,je,s="top",a="bottom",i="right",n="left",Ee="auto",Y=[s,a,i,n],T="start",q="end",Vt="clippingParents",Ve="viewport",I="popper",Ut="reference",Te=Y.reduce(function(e,t){return e.concat([t+"-"+T,t+"-"+q])},[]),Xe=[].concat(Y,[Ee]).reduce(function(e,t){return e.concat([t,t+"-"+T,t+"-"+q])},[]),Yt="beforeRead",Gt="read",Xt="afterRead",Qt="beforeMain",Zt="main",Jt="afterMain",en="beforeWrite",tn="write",nn="afterWrite",sn=[Yt,Gt,Xt,Qt,Zt,Jt,en,tn,nn];function f(e){return e?(e.nodeName||"").toLowerCase():null}function r(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t?t.defaultView||window:window}return e}function D(e){var t=r(e).Element;return e instanceof t||e instanceof Element}function l(e){var t=r(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Me(e){if(typeof ShadowRoot=="undefined")return!1;var t=r(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Hs(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},s=t.attributes[e]||{},n=t.elements[e];if(!l(n)||!f(n))return;Object.assign(n.style,o),Object.keys(s).forEach(function(e){var t=s[e];t===!1?n.removeAttribute(e):n.setAttribute(e,t===!0?"":t)})})}function Ps(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var s=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),a=i.reduce(function(e,t){return e[t]="",e},{});if(!l(s)||!f(s))return;Object.assign(s.style,a),Object.keys(o).forEach(function(e){s.removeAttribute(e)})})}}const st={name:"applyStyles",enabled:!0,phase:"write",fn:Hs,effect:Ps,requires:["computeStyles"]};function p(e){return e.split("-")[0]}k=Math.max,Q=Math.min,A=Math.round;function et(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function bn(){return!/^((?!chrome|android).)*safari/i.test(et())}function X(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1),s=e.getBoundingClientRect(),o=1,i=1,t&&l(e)&&(o=e.offsetWidth>0?A(s.width)/e.offsetWidth||1:1,i=e.offsetHeight>0?A(s.height)/e.offsetHeight||1:1);var s,o,i,f=D(e)?r(e):window,a=f.visualViewport,u=!bn()&&n,c=(s.left+(u&&a?a.offsetLeft:0))/o,d=(s.top+(u&&a?a.offsetTop:0))/i,h=s.width/o,m=s.height/i;return{width:h,height:m,top:d,right:c+h,bottom:d+m,left:c,x:c,y:d}}function ut(e){var t=X(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function _n(e,t){var n,s=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(s&&Me(s)){n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function j(e){return r(e).getComputedStyle(e)}function Rs(e){return["table","td","th"].indexOf(f(e))>=0}function E(e){return((D(e)?e.ownerDocument:e.document)||window.document).documentElement}function ge(e){return f(e)==="html"?e:e.assignedSlot||e.parentNode||(Me(e)?e.host:null)||E(e)}function En(e){return!l(e)||j(e).position==="fixed"?null:e.offsetParent}function As(e){var t,n,o,s=/firefox/i.test(et()),i=/Trident/i.test(et());if(i&&l(e)&&(o=j(e),o.position==="fixed"))return null;for(t=ge(e),Me(t)&&(t=t.host);l(t)&&["html","body"].indexOf(f(t))<0;){if(n=j(t),n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].indexOf(n.willChange)!==-1||s&&n.willChange==="filter"||s&&n.filter&&n.filter!=="none")return t;t=t.parentNode}return null}function ce(e){for(var n=r(e),t=En(e);t&&Rs(t)&&j(t).position==="static";)t=En(t);return t&&(f(t)==="html"||f(t)==="body"&&j(t).position==="static")?n:t||As(e)||n}function Qe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function re(e,t,n){return k(e,Q(t,n))}function Cs(e,t,n){var s=re(e,t,n);return s>n?n:s}function Tn(){return{top:0,right:0,bottom:0,left:0}}function zn(e){return Object.assign({},Tn(),e)}function Dn(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}Nn=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,zn(typeof t!="number"?t:Dn(t,Y))};function Os(e){var r,c,d,u,f,g,v,b,j,y,_,O,x,C,E,t=e.state,S=e.name,A=e.options,h=t.elements.arrow,m=t.modifiersData.popperOffsets,w=p(t.placement),o=Qe(w),k=[n,i].indexOf(w)>=0,l=k?"height":"width";if(!h||!m)return;g=Nn(A.padding,t),v=ut(h),b=o==="y"?s:n,j=o==="y"?a:i,y=t.rects.reference[l]+t.rects.reference[o]-m[o]-t.rects.popper[l],_=m[o]-t.rects.reference[o],c=ce(h),f=c?o==="y"?c.clientHeight||0:c.clientWidth||0:0,O=y/2-_/2,x=g[b],C=f-v[l]-g[j],u=f/2-v[l]/2+O,d=re(x,u,C),E=o,t.modifiersData[S]=(r={},r[E]=d,r.centerOffset=d-u,r)}function ys(e){var n=e.state,o=e.options,s=o.element,t=s===void 0?"[data-popper-arrow]":s;if(t==null)return;if(typeof t=="string"&&(t=n.elements.popper.querySelector(t),!t))return;if(!_n(n.elements.popper,t))return;n.elements.arrow=t}const Pn={name:"arrow",enabled:!0,phase:"main",fn:Os,effect:ys,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function V(e){return e.split("-")[1]}In={top:"auto",right:"auto",bottom:"auto",left:"auto"};function bs(e,t){var s=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:A(s*n)/n||0,y:A(o*n)/n||0}}function Vn(e){var c,u,h,p,g,b,y,T,z,f=e.popper,N=e.popperRect,d=e.placement,A=e.variation,m=e.offsets,x=e.position,v=e.gpuAcceleration,S=e.adaptive,_=e.roundOffsets,M=e.isFixed,L=m.x,t=L===void 0?0:L,D=m.y,o=D===void 0?0:D,C=typeof _=="function"?_({x:t,y:o}):{x:t,y:o},t=C.x,o=C.y,F=m.hasOwnProperty("x"),k=m.hasOwnProperty("y"),w=n,O=s,l=window;return S&&(c=ce(f),g="clientHeight",y="clientWidth",c===r(f)&&(c=E(f),j(c).position!=="static"&&x==="absolute"&&(g="scrollHeight",y="scrollWidth")),c=c,(d===s||(d===n||d===i)&&A===q)&&(O=a,T=M&&c===l&&l.visualViewport?l.visualViewport.height:c[g],o-=T-N.height,o*=v?1:-1),(d===n||(d===s||d===a)&&A===q)&&(w=i,z=M&&c===l&&l.visualViewport?l.visualViewport.width:c[y],t-=z-N.width,t*=v?1:-1)),p=Object.assign({position:x},S&&In),b=_===!0?bs({x:t,y:o},r(f)):{x:t,y:o},t=b.x,o=b.y,v?Object.assign({},p,(h={},h[O]=k?"0":"",h[w]=F?"0":"",h.transform=(l.devicePixelRatio||1)<=1?"translate("+t+"px, "+o+"px)":"translate3d("+t+"px, "+o+"px, 0)",h)):Object.assign({},p,(u={},u[O]=k?o+"px":"",u[w]=F?t+"px":"",u.transform="",u))}function vs(e){var t=e.state,n=e.options,s=n.gpuAcceleration,c=s===void 0||s,o=n.adaptive,l=o===void 0||o,i=n.roundOffsets,a=i===void 0||i,r={placement:p(t.placement),variation:V(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:c,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Vn(Object.assign({},r,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Vn(Object.assign({},r,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Fe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vs,data:{}};ae={passive:!0};function gs(e){var n=e.state,t=e.instance,s=e.options,o=s.scroll,i=o===void 0||o,a=s.resize,c=a===void 0||a,l=r(n.elements.popper),d=[].concat(n.scrollParents.reference,n.scrollParents.popper);return i&&d.forEach(function(e){e.addEventListener("scroll",t.update,ae)}),c&&l.addEventListener("resize",t.update,ae),function(){i&&d.forEach(function(e){e.removeEventListener("scroll",t.update,ae)}),c&&l.removeEventListener("resize",t.update,ae)}}const ze={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gs,data:{}};Yn={left:"right",right:"left",bottom:"top",top:"bottom"};function Ae(e){return e.replace(/left|right|bottom|top/g,function(e){return Yn[e]})}Xn={start:"end",end:"start"};function Qn(e){return e.replace(/start|end/g,function(e){return Xn[e]})}function We(e){var t=r(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Ke(e){return X(E(e)).left+We(e).scrollLeft}function hs(e,t){var s,d=r(e),o=E(e),n=d.visualViewport,i=o.clientWidth,a=o.clientHeight,c=0,l=0;return n&&(i=n.width,a=n.height,s=bn(),(s||!s&&t==="fixed")&&(c=n.offsetLeft,l=n.offsetTop)),{width:i,height:a,x:c+Ke(e),y:l}}function us(e){var s,n=E(e),o=We(e),t=(s=e.ownerDocument)==null?void 0:s.body,i=k(n.scrollWidth,n.clientWidth,t?t.scrollWidth:0,t?t.clientWidth:0),r=k(n.scrollHeight,n.clientHeight,t?t.scrollHeight:0,t?t.clientHeight:0),a=-o.scrollLeft+Ke(e),c=-o.scrollTop;return j(t||n).direction==="rtl"&&(a+=k(n.clientWidth,t?t.clientWidth:0)-i),{width:i,height:r,x:a,y:c}}function Je(e){var t=j(e),n=t.overflow,s=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+s)}function ss(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:l(e)&&Je(e)?e:ss(ge(e))}function ne(e,t){t===void 0&&(t=[]);var s,n=ss(e),o=n===((s=e.ownerDocument)==null?void 0:s.body),i=r(n),a=o?[i].concat(i.visualViewport||[],Je(n)?n:[]):n,c=t.concat(a);return o?c:c.concat(ne(ge(a)))}function rt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Fi(e,t){var n=X(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Mt(e,t,n){return t===Ve?rt(hs(e,n)):D(t)?Fi(t,n):rt(us(E(e)))}function ls(e){var n=ne(ge(e)),s=["absolute","fixed"].indexOf(j(e).position)>=0,t=s&&l(e)?ce(e):e;return D(t)?n.filter(function(e){return D(e)&&_n(e,t)&&f(e)!=="body"}):[]}function ds(e,t,n,s){var a=t==="clippingParents"?ls(e):[].concat(t),i=[].concat(a,[n]),r=i[0],o=i.reduce(function(t,n){var o=Mt(e,n,s);return t.top=k(o.top,t.top),t.right=Q(o.right,t.right),t.bottom=Q(o.bottom,t.bottom),t.left=k(o.left,t.left),t},Mt(e,r,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function ts(e){var o,r,l,t=e.reference,c=e.element,d=e.placement,u=d?p(d):null,f=d?V(d):null,h=t.x+t.width/2-c.width/2,m=t.y+t.height/2-c.height/2;switch(u){case s:o={x:h,y:t.y-c.height};break;case a:o={x:h,y:t.y+t.height};break;case i:o={x:t.x+t.width,y:m};break;case n:o={x:t.x-c.width,y:m};break;default:o={x:t.x,y:t.y}}if(r=u?Qe(u):null,r!=null)switch(l=r==="y"?"height":"width",f){case T:o[r]=o[r]-(t[l]/2-c[l]/2);break;case q:o[r]=o[r]+(t[l]/2-c[l]/2);break}return o}function N(e,t){t===void 0&&(t={});var _,n=t,v=n.placement,j=v===void 0?e.placement:v,f=n.strategy,T=f===void 0?e.strategy:f,p=n.boundary,C=p===void 0?Vt:p,O=n.rootBoundary,F=O===void 0?Ve:O,x=n.elementContext,c=x===void 0?I:x,m=n.altBoundary,M=m!==void 0&&m,b=n.padding,d=b===void 0?0:b,o=zn(typeof d!="number"?d:Dn(d,Y)),S=c===I?Ut:I,w=e.rects.popper,h=e.elements[M?S:c],r=ds(D(h)?h:h.contextElement||E(e.elements.popper),C,F,T),y=X(e.elements.reference),k=ts({reference:y,element:w,strategy:"absolute",placement:j}),A=rt(Object.assign({},w,k)),l=c===I?A:y,u={top:r.top-l.top+o.top,bottom:l.bottom-r.bottom+o.bottom,left:r.left-l.left+o.left,right:l.right-r.right+o.right},g=e.modifiersData.offset;return c===I&&g&&(_=g[j],Object.keys(u).forEach(function(e){var t=[i,a].indexOf(e)>=0?1:-1,n=[s,a].indexOf(e)>=0?"y":"x";u[e]+=_[n]*t})),u}function ms(e,t){t===void 0&&(t={});var s,n=t,c=n.placement,l=n.boundary,d=n.rootBoundary,u=n.padding,h=n.flipVariations,i=n.allowedAutoPlacements,m=i===void 0?Xe:i,a=V(c),r=a?h?Te:Te.filter(function(e){return V(e)===a}):Y,o=r.filter(function(e){return m.indexOf(e)>=0});return o.length===0&&(o=r),s=o.reduce(function(t,n){return t[n]=N(e,{placement:n,boundary:l,rootBoundary:d,padding:u})[p(n)],t},{}),Object.keys(s).sort(function(e,t){return s[e]-s[t]})}function fs(e){if(p(e)===Ee)return[];var t=Ae(e);return[Qn(e),t,Qn(t)]}function ps(e){var t=e.state,o=e.options,C=e.name;if(t.modifiersData[C]._skip)return;for(var r,c,l,u,h,g,v,y,_,x,E,k,z,M=o.mainAxis,I=M===void 0||M,D=o.altAxis,P=D===void 0||D,R=o.fallbackPlacements,L=o.padding,w=o.boundary,O=o.rootBoundary,B=o.altBoundary,F=o.flipVariations,j=F===void 0||F,$=o.allowedAutoPlacements,d=t.options.placement,K=p(d),H=K===d,q=R||(H||!j?[Ae(d)]:fs(d)),f=[d].concat(q).reduce(function(e,n){return e.concat(p(n)===Ee?ms(t,{placement:n,boundary:w,rootBoundary:O,padding:L,flipVariations:j,allowedAutoPlacements:$}):n)},[]),U=t.rects.reference,W=t.rects.popper,A=new Map,S=!0,m=f[0],b=0;b<f.length;b++){if(r=f[b],v=p(r),g=V(r)===T,y=[s,a].indexOf(v)>=0,_=y?"width":"height",h=N(t,{placement:r,boundary:w,rootBoundary:O,altBoundary:B,padding:L}),l=y?g?i:n:g?a:s,U[_]>W[_]&&(l=Ae(l)),z=Ae(l),c=[],I&&c.push(h[v]<=0),P&&c.push(h[l]<=0,h[z]<=0),c.every(function(e){return e})){m=r,S=!1;break}A.set(r,c)}if(S)for(k=j?3:1,E=function(t){var n=f.find(function(e){var n=A.get(e);if(n)return n.slice(0,t).every(function(e){return e})});if(n)return m=n,"break"},u=k;u>0;u--)if(x=E(u),x==="break")break;t.placement!==m&&(t.modifiersData[C]._skip=!0,t.placement=m,t.reset=!0)}const Kn={name:"flip",enabled:!0,phase:"main",fn:ps,requiresIfExists:["offset"],data:{_skip:!1}};function $n(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Bn(e){return[s,i,a,n].some(function(t){return e[t]>=0})}function js(e){var t=e.state,a=e.name,r=t.rects.reference,c=t.rects.popper,l=t.modifiersData.preventOverflow,d=N(t,{elementContext:"reference"}),u=N(t,{altBoundary:!0}),n=$n(d,r),s=$n(u,c,l),o=Bn(n),i=Bn(s);t.modifiersData[a]={referenceClippingOffsets:n,popperEscapeOffsets:s,isReferenceHidden:o,hasPopperEscaped:i},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":o,"data-popper-escaped":i})}const Rn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:js};function _s(e,t,o){var c=p(e),d=[n,s].indexOf(c)>=0?-1:1,l=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,a=l[0],r=l[1],a=a||0,r=(r||0)*d;return[n,i].indexOf(c)>=0?{x:r,y:a}:{x:a,y:r}}function ws(e){var t=e.state,i=e.options,a=e.name,n=i.offset,r=n===void 0?[0,0]:n,s=Xe.reduce(function(e,n){return e[n]=_s(n,t.rects,r),e},{}),o=s[t.placement],c=o.x,l=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[a]=s}const Ln={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ws};function xs(e){var t=e.state,n=e.name;t.modifiersData[n]=ts({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const He={name:"popperOffsets",enabled:!0,phase:"read",fn:xs,data:{}};function Es(e){return e==="x"?"y":"x"}function ks(e){var fe,r,h,P,H,$,W,U,Y,Z,J,ue,v,E,K,q,te,ne,x,oe,B,ae,le,G,me,c,f,w,A,M,F,z,D,R,I,X,t=e.state,l=e.options,be=e.name,pe=l.mainAxis,ge=pe===void 0||pe,se=l.altAxis,we=se!==void 0&&se,_e=l.boundary,ye=l.rootBoundary,ve=l.altBoundary,je=l.padding,de=l.tether,d=de===void 0||de,ie=l.tetherOffset,S=ie===void 0?0:ie,O=N(t,{boundary:_e,rootBoundary:ye,padding:je,altBoundary:ve}),ee=p(t.placement),C=V(t.placement),he=!C,o=Qe(ee),j=Es(o),b=t.modifiersData.popperOffsets,u=t.rects.reference,g=t.rects.popper,_=typeof S=="function"?S(Object.assign({},t.rects,{placement:t.placement})):S,m=typeof _=="number"?{mainAxis:_,altAxis:_}:Object.assign({mainAxis:0,altAxis:0},_),y=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(!b)return;ge&&(P=o==="y"?s:n,H=o==="y"?a:i,r=o==="y"?"height":"width",h=b[o],$=h+O[P],W=h-O[H],U=d?-g[r]/2:0,J=C===T?u[r]:g[r],Z=C===T?-g[r]:-u[r],Y=t.elements.arrow,ue=d&&Y?ut(Y):{width:0,height:0},E=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Tn(),q=E[P],K=E[H],v=re(0,u[r],ue[r]),te=he?u[r]/2-U-v-q-m.mainAxis:J-v-q-m.mainAxis,ne=he?-u[r]/2+U+v+K+m.mainAxis:Z+v+K+m.mainAxis,x=t.elements.arrow&&ce(t.elements.arrow),oe=x?o==="y"?x.clientTop||0:x.clientLeft||0:0,B=(fe=y?.[o])!=null?fe:0,ae=h+te-B-oe,le=h+ne-B,I=re(d?Q($,ae):$,h,d?k(W,le):W),b[o]=I,L[o]=I-h),we&&(G=o==="x"?s:n,me=o==="x"?a:i,c=b[j],f=j==="y"?"height":"width",R=c+O[G],D=c-O[me],w=[s,n].indexOf(ee)!==-1,z=(X=y?.[j])!=null?X:0,F=w?R:c-u[f]-g[f]-z+m.altAxis,M=w?c+u[f]+g[f]-z-m.altAxis:D,A=d&&w?Cs(F,c,M):re(d?F:R,c,d?M:D),b[j]=A,L[j]=A-c),t.modifiersData[be]=L}const kn={name:"preventOverflow",enabled:!0,phase:"main",fn:ks,requiresIfExists:["offset"]};function Ss(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ms(e){return e===r(e)||!l(e)?We(e):Ss(e)}function Fs(e){var t=e.getBoundingClientRect(),n=A(t.width)/e.offsetWidth||1,s=A(t.height)/e.offsetHeight||1;return n!==1||s!==1}function Ts(e,t,n){n===void 0&&(n=!1);var r=l(t),c=l(t)&&Fs(t),i=E(t),o=X(e,c,n),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&((f(t)!=="body"||Je(i))&&(a=Ms(t)),l(t)?(s=X(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=Ke(i))),{x:o.left+a.scrollLeft-s.x,y:o.top+a.scrollTop-s.y,width:o.width,height:o.height}}function zs(e){var n=new Map,t=new Set,s=[];e.forEach(function(e){n.set(e.name,e)});function o(e){t.add(e.name);var i=[].concat(e.requires||[],e.requiresIfExists||[]);i.forEach(function(e){if(!t.has(e)){var s=n.get(e);s&&o(s)}}),s.push(e)}return e.forEach(function(e){t.has(e.name)||o(e)}),s}function Ds(e){var t=zs(e);return sn.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function Ns(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Ls(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}ot={placement:"bottom",modifiers:[],strategy:"absolute"};function un(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return!n.some(function(e){return!e||typeof e.getBoundingClientRect!="function"})}function we(e){e===void 0&&(e={});var n=e,s=n.defaultModifiers,i=s===void 0?[]:s,o=n.defaultOptions,t=o===void 0?ot:o;return function(n,s,o){o===void 0&&(o=t);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ot,t),modifiersData:{},elements:{reference:n,popper:s},attributes:{},styles:{}},c=[],l=!1,r={state:a,setOptions:function(o){var c,l=typeof o=="function"?o(a.options):o;return d(),a.options=Object.assign({},t,a.options,l),a.scrollParents={reference:D(n)?ne(n):n.contextElement?ne(n.contextElement):[],popper:ne(s)},c=Ds(Ls([].concat(i,a.options.modifiers))),a.orderedModifiers=c.filter(function(e){return e.enabled}),u(),r.update()},forceUpdate:function(){if(l)return;var o=a.elements,i=o.reference,n=o.popper;if(!un(i,n))return;a.rects={reference:Ts(i,ce(n),a.options.strategy==="fixed"),popper:ut(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(t=0;t<a.orderedModifiers.length;t++){if(a.reset===!0){a.reset=!1,t=-1;continue}var t,s=a.orderedModifiers[t],c=s.fn,d=s.options,u=d===void 0?{}:d,h=s.name;typeof c=="function"&&(a=c({state:a,options:u,name:h,instance:r})||a)}},update:Ns(function(){return new Promise(function(e){r.forceUpdate(),e(a)})}),destroy:function(){d(),l=!0}};if(!un(n,s))return r;r.setOptions(o).then(function(e){!l&&o.onFirstUpdate&&o.onFirstUpdate(e)});function u(){a.orderedModifiers.forEach(function(e){var s,o,i=e.name,t=e.options,l=t===void 0?{}:t,n=e.effect;typeof n=="function"&&(s=n({state:a,name:i,instance:r,options:l}),o=function(){},c.push(s||o))})}function d(){c.forEach(function(e){return e()}),c=[]}return r}}Tt=we(),Ft=[ze,He,Fe,st],St=we({defaultModifiers:Ft}),At=[ze,He,Fe,st,Ln,Kn,kn,Pn,Rn],je=we({defaultModifiers:At});const Et=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Jt,afterRead:Xt,afterWrite:nn,applyStyles:st,arrow:Pn,auto:Ee,basePlacements:Y,beforeMain:Qt,beforeRead:Yt,beforeWrite:en,bottom:a,clippingParents:Vt,computeStyles:Fe,createPopper:je,createPopperBase:Tt,createPopperLite:St,detectOverflow:N,end:q,eventListeners:ze,flip:Kn,hide:Rn,left:n,main:Zt,modifierPhases:sn,offset:Ln,placements:Xe,popper:I,popperGenerator:we,popperOffsets:He,preventOverflow:kn,read:Gt,reference:Ut,right:i,start:T,top:s,variationPlacements:Te,viewport:Ve,write:tn},Symbol.toStringTag,{value:"Module"})),Ct="dropdown",qs="bs.dropdown",F=`.${qs}`,it=".data-api",Xs="Escape",jt="Tab",Zs="ArrowUp",bt="ArrowDown",eo=2,to=`hide${F}`,no=`hidden${F}`,so=`show${F}`,oo=`shown${F}`,vt=`click${F}${it}`,yt=`keydown${F}${it}`,ro=`keyup${F}${it}`,G="show",lo="dropup",uo="dropend",ho="dropstart",mo="dropup-center",fo="dropdown-center",z='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',go=`${z}.${G}`,me=".dropdown-menu",bo=".navbar",jo=".navbar-nav",yo=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",_o=c()?"top-end":"top-start",wo=c()?"top-start":"top-end",Oo=c()?"bottom-end":"bottom-start",xo=c()?"bottom-start":"bottom-end",Co=c()?"left-start":"right-start",Eo=c()?"right-start":"left-start",ko="top",Ao="bottom",So={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Mo={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class m extends h{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=t.next(this._element,me)[0]||t.prev(this._element,me)[0]||t.findOne(me,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return So}static get DefaultType(){return Mo}static get NAME(){return Ct}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const t={relatedTarget:this._element},n=e.trigger(this._element,so,t);if(n.defaultPrevented)return;if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(jo))for(const t of[].concat(...document.body.children))e.on(t,"mouseover",le);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(G),this._element.classList.add(G),e.trigger(this._element,oo,t)}hide(){if(y(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){const n=e.trigger(this._element,to,t);if(n.defaultPrevented)return;if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))e.off(t,"mouseover",le);this._popper&&this._popper.destroy(),this._menu.classList.remove(G),this._element.classList.remove(G),this._element.setAttribute("aria-expanded","false"),v.removeDataAttribute(this._menu,"popper"),e.trigger(this._element,no,t)}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!g(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Ct.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof Et=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:g(this._config.reference)?e=w(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=je(e,this._menu,t)}_isShown(){return this._menu.classList.contains(G)}_getPlacement(){const e=this._parent;if(e.classList.contains(uo))return Co;if(e.classList.contains(ho))return Eo;if(e.classList.contains(mo))return ko;if(e.classList.contains(fo))return Ao;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(lo)?t?wo:_o:t?xo:Oo}_detectNavbar(){return this._element.closest(bo)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(e=>Number.parseInt(e,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(v.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...o(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:n}){const s=t.find(yo,this._menu).filter(e=>R(e));if(!s.length)return;$e(s,n,e===bt,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const t=m.getOrCreateInstance(this,e);if(typeof e!="string")return;if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()})}static clearMenus(e){if(e.button===eo||e.type==="keyup"&&e.key!==jt)return;const n=t.find(go);for(const a of n){const t=m.getInstance(a);if(!t||t._config.autoClose===!1)continue;const s=e.composedPath(),o=s.includes(t._menu);if(s.includes(t._element)||t._config.autoClose==="inside"&&!o||t._config.autoClose==="outside"&&o)continue;if(t._menu.contains(e.target)&&(e.type==="keyup"&&e.key===jt||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const i={relatedTarget:t._element};e.type==="click"&&(i.clickEvent=e),t._completeHide(i)}}static dataApiKeydownHandler(e){const a=/input|textarea/i.test(e.target.tagName),s=e.key===Xs,o=[Zs,bt].includes(e.key);if(!o&&!s)return;if(a&&!s)return;e.preventDefault();const i=this.matches(z)?this:t.prev(this,z)[0]||t.next(this,z)[0]||t.findOne(z,e.delegateTarget.parentNode),n=m.getOrCreateInstance(i);if(o){e.stopPropagation(),n.show(),n._selectMenuItem(e);return}n._isShown()&&(e.stopPropagation(),n.hide(),i.focus())}}e.on(document,yt,z,m.dataApiKeydownHandler),e.on(document,yt,me,m.dataApiKeydownHandler),e.on(document,vt,m.clearMenus),e.on(document,ro,m.clearMenus),e.on(document,vt,z,function(e){e.preventDefault(),m.getOrCreateInstance(this).toggle()}),u(m);const _t="backdrop",zo="fade",wt="show",Ot=`mousedown.bs.${_t}`,Lo={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ro={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class xt extends se{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Lo}static get DefaultType(){return Ro}static get NAME(){return _t}show(e){if(!this._config.isVisible){o(e);return}this._append();const t=this._getElement();this._config.isAnimated&&oe(t),t.classList.add(wt),this._emulateAnimation(()=>{o(e)})}hide(e){if(!this._config.isVisible){o(e);return}this._getElement().classList.remove(wt),this._emulateAnimation(()=>{this.dispose(),o(e)})}dispose(){if(!this._isAppended)return;e.off(this._element,Ot),this._element.remove(),this._isAppended=!1}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(zo),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=w(e.rootElement),e}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),e.on(t,Ot,()=>{o(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Zn(e,this._getElement(),this._config.isAnimated)}}const Ho="focustrap",Io="bs.focustrap",be=`.${Io}`,Vo=`focusin${be}`,$o=`keydown.tab${be}`,Wo="Tab",Uo="forward",kt="backward",qo={autofocus:!0,trapElement:null},Yo={autofocus:"boolean",trapElement:"element"};class Dt extends se{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return qo}static get DefaultType(){return Yo}static get NAME(){return Ho}activate(){if(this._isActive)return;this._config.autofocus&&this._config.trapElement.focus(),e.off(document,be),e.on(document,Vo,e=>this._handleFocusin(e)),e.on(document,$o,e=>this._handleKeydown(e)),this._isActive=!0}deactivate(){if(!this._isActive)return;this._isActive=!1,e.off(document,be)}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=t.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===kt?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){if(e.key!==Wo)return;this._lastTabNavDirection=e.shiftKey?kt:Uo}}const Nt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Lt=".sticky-top",Oe="padding-right",Rt="margin-right";class qe{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Oe,t=>t+e),this._setElementAttributes(Nt,Oe,t=>t+e),this._setElementAttributes(Lt,Rt,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Oe),this._resetElementAttributes(Nt,Oe),this._resetElementAttributes(Lt,Rt)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const s=this.getWidth(),o=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+s)return;this._saveInitialAttribute(e,t);const o=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(o))}px`)};this._applyManipulationCallback(e,o)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&v.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=v.getDataAttribute(e,t);if(n===null){e.style.removeProperty(t);return}v.removeDataAttribute(e,t),e.style.setProperty(t,n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,n){if(g(e)){n(e);return}for(const s of t.find(e,this._element))n(s)}}const ti="modal",ni="bs.modal",d=`.${ni}`,oi=".data-api",ii="Escape",ai=`hide${d}`,ri=`hidePrevented${d}`,Ht=`hidden${d}`,It=`show${d}`,di=`shown${d}`,ui=`resize${d}`,hi=`click.dismiss${d}`,mi=`mousedown.dismiss${d}`,fi=`keydown.dismiss${d}`,pi=`click${d}${oi}`,Bt="modal-open",vi="fade",$t="show",Se="modal-static",yi=".modal.show",_i=".modal-dialog",wi=".modal-body",Oi='[data-bs-toggle="modal"]',xi={backdrop:!0,focus:!0,keyboard:!0},Ci={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class $ extends h{constructor(e,n){super(e,n),this._dialog=t.findOne(_i,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new qe,this._addEventListeners()}static get Default(){return xi}static get DefaultType(){return Ci}static get NAME(){return ti}toggle(e){return this._isShown?this.hide():this.show(e)}show(t){if(this._isShown||this._isTransitioning)return;const n=e.trigger(this._element,It,{relatedTarget:t});if(n.defaultPrevented)return;this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Bt),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t))}hide(){if(!this._isShown||this._isTransitioning)return;const t=e.trigger(this._element,ai);if(t.defaultPrevented)return;this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove($t),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())}dispose(){e.off(window,d),e.off(this._dialog,d),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new xt({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Dt({trapElement:this._element})}_showElement(n){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=t.findOne(wi,this._dialog);s&&(s.scrollTop=0),oe(this._element),this._element.classList.add($t);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,e.trigger(this._element,di,{relatedTarget:n})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){e.on(this._element,fi,e=>{if(e.key!==ii)return;if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}),e.on(window,ui,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),e.on(this._element,mi,t=>{e.one(this._element,hi,e=>{if(this._element!==t.target||this._element!==e.target)return;if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Bt),this._resetAdjustments(),this._scrollBar.reset(),e.trigger(this._element,Ht)})}_isAnimated(){return this._element.classList.contains(vi)}_triggerBackdropTransition(){const n=e.trigger(this._element,ri);if(n.defaultPrevented)return;const s=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;if(t==="hidden"||this._element.classList.contains(Se))return;s||(this._element.style.overflowY="hidden"),this._element.classList.add(Se),this._queueCallback(()=>{this._element.classList.remove(Se),this._queueCallback(()=>{this._element.style.overflowY=t},this._dialog)},this._dialog),this._element.focus()}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const t=c()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!n&&t){const t=c()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const n=$.getOrCreateInstance(this,e);if(typeof e!="string")return;if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e](t)})}}e.on(document,pi,Oi,function(n){const s=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),e.one(s,It,t=>{if(t.defaultPrevented)return;e.one(s,Ht,()=>{R(this)&&this.focus()})});const o=t.findOne(yi);o&&$.getInstance(o).hide();const i=$.getOrCreateInstance(s);i.toggle(this)}),_e($),u($);const ki="offcanvas",Ai="bs.offcanvas",b=`.${Ai}`,Wt=".data-api",cs=`load${b}${Wt}`,Ti="Escape",qt="show",on="showing",an="hiding",Li="offcanvas-backdrop",rn=".offcanvas.show",Pi=`show${b}`,Hi=`shown${b}`,Ii=`hide${b}`,cn=`hidePrevented${b}`,ln=`hidden${b}`,$i=`resize${b}`,Wi=`click${b}${Wt}`,Ui=`keydown.dismiss${b}`,Ki='[data-bs-toggle="offcanvas"]',qi={backdrop:!0,keyboard:!0,scroll:!1},Yi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class O extends h{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return qi}static get DefaultType(){return Yi}static get NAME(){return ki}toggle(e){return this._isShown?this.hide():this.show(e)}show(t){if(this._isShown)return;const n=e.trigger(this._element,Pi,{relatedTarget:t});if(n.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new qe).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(on);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(qt),this._element.classList.remove(on),e.trigger(this._element,Hi,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown)return;const t=e.trigger(this._element,Ii);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(an),this._backdrop.hide();const n=()=>{this._element.classList.remove(qt,an),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new qe).reset(),e.trigger(this._element,ln)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const n=()=>{if(this._config.backdrop==="static"){e.trigger(this._element,cn);return}this.hide()},t=Boolean(this._config.backdrop);return new xt({className:Li,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?n:null})}_initializeFocusTrap(){return new Dt({trapElement:this._element})}_addEventListeners(){e.on(this._element,Ui,t=>{if(t.key!==Ti)return;if(this._config.keyboard){this.hide();return}e.trigger(this._element,cn)})}static jQueryInterface(e){return this.each(function(){const t=O.getOrCreateInstance(this,e);if(typeof e!="string")return;if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)})}}e.on(document,Wi,Ki,function(n){const s=t.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),y(this))return;e.one(s,ln,()=>{R(this)&&this.focus()});const o=t.findOne(rn);o&&o!==s&&O.getInstance(o).hide();const i=O.getOrCreateInstance(s);i.toggle(this)}),e.on(window,cs,()=>{for(const e of t.find(rn))O.getOrCreateInstance(e).show()}),e.on(window,$i,()=>{for(const e of t.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&O.getOrCreateInstance(e).hide()}),_e(O),u(O);const Xi=/^aria-[\w-]*$/i,dn={"*":["class","dir","id","lang","role",Xi],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Zi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ji=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,ea=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Zi.has(n)||Boolean(Ji.test(e.nodeValue)):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))};function ta(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const o=new window.DOMParser,s=o.parseFromString(e,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const e of i){const n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const s=[].concat(...e.attributes),o=[].concat(t["*"]||[],t[n]||[]);for(const t of s)ea(t,o)||e.removeAttribute(t.nodeName)}return s.body.innerHTML}const na="TemplateFactory",sa={allowList:dn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},oa={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ia={entry:"(string|element|function|null)",selector:"(string|element)"};class aa extends se{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return sa}static get DefaultType(){return oa}static get NAME(){return na}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},ia)}_setContent(e,n,s){const o=t.findOne(s,e);if(!o)return;if(n=this._resolvePossibleFunction(n),!n){o.remove();return}if(g(n)){this._putElementInTemplate(w(n),o);return}if(this._config.html){o.innerHTML=this._maybeSanitize(n);return}o.textContent=n}_maybeSanitize(e){return this._config.sanitize?ta(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return o(e,[this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const ra="tooltip",ca=new Set(["sanitize","allowList","sanitizeFn"]),Ze="fade",da="modal",ye="show",ha=".tooltip-inner",hn=`.${da}`,mn="hide.bs.modal",Z="hover",at="focus",va="click",ba="manual",ja="hide",ya="hidden",_a="show",wa="shown",Oa="inserted",xa="click",Ca="focusin",Ea="focusout",ka="mouseenter",Aa="mouseleave",Sa={AUTO:"auto",TOP:"top",RIGHT:c()?"left":"right",BOTTOM:"bottom",LEFT:c()?"right":"left"},Ma={allowList:dn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Fa={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class H extends h{constructor(e,t){if(typeof Et=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Ma}static get DefaultType(){return Fa}static get NAME(){return ra}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(!this._isEnabled)return;if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}dispose(){clearTimeout(this._timeout),e.off(this._element.closest(hn),mn,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const n=e.trigger(this._element,this.constructor.eventName(_a)),s=es(this._element),o=(s||this._element.ownerDocument.documentElement).contains(this._element);if(n.defaultPrevented||!o)return;this._disposePopper();const t=this._getTipElement();this._element.setAttribute("aria-describedby",t.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(t),e.trigger(this._element,this.constructor.eventName(Oa))),this._popper=this._createPopper(t),t.classList.add(ye),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))e.on(t,"mouseover",le);const a=()=>{e.trigger(this._element,this.constructor.eventName(wa)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const t=e.trigger(this._element,this.constructor.eventName(ja));if(t.defaultPrevented)return;const n=this._getTipElement();if(n.classList.remove(ye),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))e.off(t,"mouseover",le);this._activeTrigger[va]=!1,this._activeTrigger[at]=!1,this._activeTrigger[Z]=!1,this._isHovered=null;const s=()=>{if(this._isWithActiveTrigger())return;this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),e.trigger(this._element,this.constructor.eventName(ya))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(Ze,ye),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=Yr(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(Ze),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new aa({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ha]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ze)}_isShown(){return this.tip&&this.tip.classList.contains(ye)}_createPopper(e){const t=o(this._config.placement,[this,e,this._element]),n=Sa[t.toUpperCase()];return je(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(e=>Number.parseInt(e,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return o(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...o(this._config.popperConfig,[t])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")e.on(this._element,this.constructor.eventName(xa),this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t.toggle()});else if(n!==ba){const t=n===Z?this.constructor.eventName(ka):this.constructor.eventName(Ca),s=n===Z?this.constructor.eventName(Aa):this.constructor.eventName(Ea);e.on(this._element,t,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type==="focusin"?at:Z]=!0,t._enter()}),e.on(this._element,s,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type==="focusout"?at:Z]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},e.on(this._element.closest(hn),mn,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");if(!e)return;!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title")}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){if(this._isWithActiveTrigger())return;this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide)}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=v.getDataAttributes(this._element);for(const e of Object.keys(t))ca.has(e)&&delete t[e];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:w(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=H.getOrCreateInstance(this,e);if(typeof e!="string")return;if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()})}}u(H);const za="popover",Da=".popover-header",Na=".popover-body",La={...H.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ra={...H.DefaultType,content:"(null|string|element|function)"};class mt extends H{static get Default(){return La}static get DefaultType(){return Ra}static get NAME(){return za}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Da]:this._getTitle(),[Na]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=mt.getOrCreateInstance(this,e);if(typeof e!="string")return;if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()})}}u(mt);const Ha="scrollspy",Ia="bs.scrollspy",Ie=`.${Ia}`,Va=".data-api",$a=`activate${Ie}`,pn=`click${Ie}`,Ua=`load${Ie}${Va}`,Ka="dropdown-item",W="active",Ya='[data-bs-spy="scroll"]',Ge="[href]",Xa=".nav, .list-group",gn=".nav-link",Za=".nav-item",Ja=".list-group-item",er=`${gn}, ${Za} > ${gn}, ${Ja}`,tr=".dropdown",nr=".dropdown-toggle",sr={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},or={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class xe extends h{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sr}static get DefaultType(){return or}static get NAME(){return Ha}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=w(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){if(!this._config.smoothScroll)return;e.off(this._config.target,pn),e.on(this._config.target,pn,Ge,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,s=t.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:s,behavior:"smooth"});return}n.scrollTop=s}})}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){const n=e=>this._targetLinks.get(`#${e.target.id}`),s=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(n(e))},t=(this._rootElement||document.documentElement).scrollTop,o=t>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=t;for(const i of e){if(!i.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(i));continue}const a=i.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(s(i),!t)return;continue}!o&&!a&&s(i)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=t.find(Ge,this._config.target);for(const n of e){if(!n.hash||y(n))continue;const s=t.findOne(decodeURI(n.hash),this._element);R(s)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,s))}}_process(t){if(this._activeTarget===t)return;this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(W),this._activateParents(t),e.trigger(this._element,$a,{relatedTarget:t})}_activateParents(e){if(e.classList.contains(Ka)){t.findOne(nr,e.closest(tr)).classList.add(W);return}for(const n of t.parents(e,Xa))for(const e of t.prev(n,er))e.classList.add(W)}_clearActiveClass(e){e.classList.remove(W);const n=t.find(`${Ge}.${W}`,e);for(const e of n)e.classList.remove(W)}static jQueryInterface(e){return this.each(function(){const t=xe.getOrCreateInstance(this,e);if(typeof e!="string")return;if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()})}}e.on(window,Ua,()=>{for(const e of t.find(Ya))xe.getOrCreateInstance(e)}),u(xe);const ar="tab",rr="bs.tab",M=`.${rr}`,lr=`hide${M}`,dr=`hidden${M}`,ur=`show${M}`,hr=`shown${M}`,mr=`click${M}`,fr=`keydown${M}`,pr=`load${M}`,gr="ArrowLeft",vn="ArrowRight",br="ArrowUp",yn="ArrowDown",ft="Home",wn="End",S="active",Mn="fade",Ye="show",Cr="dropdown",Wn=".dropdown-toggle",kr=".dropdown-menu",Ne=`:not(${Wn})`,Sr='.list-group, .nav, [role="tablist"]',Mr=".nav-item, .list-group-item",Fr=`.nav-link${Ne}, .list-group-item${Ne}, [role="tab"]${Ne}`,Gn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Pe=`${Fr}, ${Gn}`,Dr=`.${S}[data-bs-toggle="tab"], .${S}[data-bs-toggle="pill"], .${S}[data-bs-toggle="list"]`;class B extends h{constructor(t){if(super(t),this._parent=this._element.closest(Sr),!this._parent)return;this._setInitialAttributes(this._parent,this._getChildren()),e.on(this._element,fr,e=>this._keydown(e))}static get NAME(){return ar}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?e.trigger(n,lr,{relatedTarget:t}):null,o=e.trigger(t,ur,{relatedTarget:n});if(o.defaultPrevented||s&&s.defaultPrevented)return;this._deactivate(n,t),this._activate(t,n)}_activate(n,s){if(!n)return;n.classList.add(S),this._activate(t.getElementFromSelector(n));const o=()=>{if(n.getAttribute("role")!=="tab"){n.classList.add(Ye);return}n.removeAttribute("tabindex"),n.setAttribute("aria-selected",!0),this._toggleDropDown(n,!0),e.trigger(n,hr,{relatedTarget:s})};this._queueCallback(o,n,n.classList.contains(Mn))}_deactivate(n,s){if(!n)return;n.classList.remove(S),n.blur(),this._deactivate(t.getElementFromSelector(n));const o=()=>{if(n.getAttribute("role")!=="tab"){n.classList.remove(Ye);return}n.setAttribute("aria-selected",!1),n.setAttribute("tabindex","-1"),this._toggleDropDown(n,!1),e.trigger(n,dr,{relatedTarget:s})};this._queueCallback(o,n,n.classList.contains(Mn))}_keydown(e){if(![gr,vn,br,yn,ft,wn].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(e=>!y(e));let t;if([ft,wn].includes(e.key))t=n[e.key===ft?0:n.length-1];else{const s=[vn,yn].includes(e.key);t=$e(n,e.target,s,!0)}t&&(t.focus({preventScroll:!0}),B.getOrCreateInstance(t).show())}_getChildren(){return t.find(Pe,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=t.getElementFromSelector(e);if(!n)return;this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`)}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(Cr))return;const o=(e,o)=>{const i=t.findOne(e,s);i&&i.classList.toggle(o,n)};o(Wn,S),o(kr,Ye),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(S)}_getInnerElement(e){return e.matches(Pe)?e:t.findOne(Pe,e)}_getOuterElement(e){return e.closest(Mr)||e}static jQueryInterface(e){return this.each(function(){const t=B.getOrCreateInstance(this);if(typeof e!="string")return;if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()})}}e.on(document,mr,Gn,function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),y(this))return;B.getOrCreateInstance(this).show()}),e.on(window,pr,()=>{for(const e of t.find(Dr))B.getOrCreateInstance(e)}),u(B);const Lr="toast",Rr="bs.toast",x=`.${Rr}`,Hr=`mouseover${x}`,Ir=`mouseout${x}`,Br=`focusin${x}`,Vr=`focusout${x}`,$r=`hide${x}`,Wr=`hidden${x}`,Ur=`show${x}`,Kr=`shown${x}`,qr="fade",os="hide",ve="show",he="showing",Qr={animation:"boolean",autohide:"boolean",delay:"number"},Zr={animation:!0,autohide:!0,delay:5e3};class ue extends h{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Zr}static get DefaultType(){return Qr}static get NAME(){return Lr}show(){const t=e.trigger(this._element,Ur);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(qr);const n=()=>{this._element.classList.remove(he),e.trigger(this._element,Kr),this._maybeScheduleHide()};this._element.classList.remove(os),oe(this._element),this._element.classList.add(ve,he),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,$r);if(t.defaultPrevented)return;const n=()=>{this._element.classList.add(os),this._element.classList.remove(he,ve),e.trigger(this._element,Wr)};this._element.classList.add(he),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ve),super.dispose()}isShown(){return this._element.classList.contains(ve)}_maybeScheduleHide(){if(!this._config.autohide)return;if(this._hasMouseInteraction||this._hasKeyboardInteraction)return;this._timeout=setTimeout(()=>{this.hide()},this._config.delay)}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const n=e.relatedTarget;if(this._element===n||this._element.contains(n))return;this._maybeScheduleHide()}_setListeners(){e.on(this._element,Hr,e=>this._onInteraction(e,!0)),e.on(this._element,Ir,e=>this._onInteraction(e,!1)),e.on(this._element,Br,e=>this._onInteraction(e,!0)),e.on(this._element,Vr,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=ue.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}_e(ue),u(ue);const ec={Alert:de,Button:fe,Carousel:ee,Collapse:te,Dropdown:m,Modal:$,Offcanvas:O,Popover:mt,ScrollSpy:xe,Tab:B,Toast:ue,Tooltip:H};return ec}),function e(t){"use strict";try{module&&(t=module)}catch{}t._factory=e;function g(e){return"undefined"==typeof e||e}function M(e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n();return t}function n(){return Object.create(null)}function re(e,t){return t.length-e.length}function i(e){return"string"==typeof e}function a(e){return"object"==typeof e}function x(e){return"function"==typeof e}function U(e,t){var n=Q;if(e&&(t&&(e=f(e,t)),this.H&&(e=f(e,this.H)),this.J&&1<e.length&&(e=f(e,this.J)),n||""===n)){if(t=e.split(n),this.filter){e=this.filter,n=t.length;const s=[];for(let o=0,a=0;o<n;o++){const i=t[o];i&&!e[i]&&(s[a++]=i)}e=s}else e=t;return e}return e}const Q=/[\p{Z}\p{S}\p{P}\p{C}]+/u,J=/[\u0300-\u036f]/g;function V(e,t){const a=Object.keys(e),r=a.length,n=[];let s="",i=0;for(let l=0,c,d;l<r;l++)c=a[l],(d=e[c])?(n[i++]=o(t?"(?!\\b)"+c+"(\\b|_)":c),n[i++]=d):s+=(s?"|":"")+c;return s&&(n[i++]=o(t?"(?!\\b)("+s+")(\\b|_)":"("+s+")"),n[i]=""),n}function f(e,t){for(let n=0,s=t.length;n<s&&(e=e.replace(t[n],t[n+1]),e);n+=2);return e}function o(e){return new RegExp(e,"g")}function B(e){let t="",n="";for(let s=0,i=e.length,o;s<i;s++)(o=e[s])!==n&&(t+=n=o);return t}var s,L,I,W,Y,ie={encode:P,F:!1,G:""};function P(e){return U.call(this,(""+e).toLowerCase(),!1)}const N={},r={};function T(e){m(e,"add"),m(e,"append"),m(e,"search"),m(e,"update"),m(e,"remove")}function m(e,t){e[t+"Async"]=function(){const s=this,e=arguments;var n=e[e.length-1];let o;return x(n)&&(o=n,delete e[e.length-1]),n=new Promise(function(n){setTimeout(function(){s.async=!0;const o=s[t].apply(s,e);s.async=!1,n(o)})}),o?(n.then(o),this):n}}function F(e,t,s,o){const l=e.length;let a=[],i,c,r=0;o&&(o=[]);for(let d=l-1;0<=d;d--){const h=e[d],f=h.length,u=n();let m=!i;for(let e=0;e<f;e++){const n=h[e],p=n.length;if(p)for(let f=0,h,e;f<p;f++)if(e=n[f],i){{if(i[e]){if(!d)if(s)s--;else if(a[r++]=e,r===t)return a;(d||o)&&(u[e]=1),m=!0}if(o&&(h=(c[e]||0)+1,c[e]=h,h<l)){const t=o[h-2]||(o[h-2]=[]);t[t.length]=e}}}else u[e]=1}if(o)i||(c=u);else if(!m)return[];i=u}if(o)for(let e=o.length-1,n,c;0<=e;e--){n=o[e],c=n.length;for(let o=0,e;o<c;o++)if(e=n[o],!i[e]){if(s)s--;else if(a[r++]=e,r===t)return a;i[e]=1}}return a}function ce(e,t){const o=n(),i=n(),s=[];for(let t=0;t<e.length;t++)o[e[t]]=1;for(let e=0,n;e<t.length;e++){n=t[e];for(let t=0,e;t<n.length;t++)e=n[t],o[e]&&!i[e]&&(i[e]=1,s[s.length]=e)}return s}function j(e){this.l=!0!==e&&e,this.cache=n(),this.h=[]}function S(e,t,n){a(e)&&(e=e.query);let s=this.cache.get(e);return s||(s=this.search(e,t,n),this.cache.set(e,s)),s}j.prototype.set=function(e,t){if(!this.cache[e]){var n=this.h.length;n===this.l?delete this.cache[this.h[n-1]]:n++;for(--n;0<n;n--)this.h[n]=this.h[n-1];this.h[0]=e}this.cache[e]=t},j.prototype.get=function(e){const t=this.cache[e];if(this.l&&t&&(e=this.h.indexOf(e))){const t=this.h[e-1];this.h[e-1]=this.h[e],this.h[e]=t}return t};const ee={memory:{charset:"latin:extra",D:3,B:4,m:!1},performance:{D:3,B:3,s:!1,context:{depth:2,D:1}},match:{charset:"latin:extra",G:"reverse"},score:{charset:"latin:advanced",D:20,B:3,context:{depth:3,D:9}},default:{}};function A(e,t,n,s,o,i,a,r){setTimeout(function(){const c=e(n?n+"."+s:s,JSON.stringify(a));c&&c.then?c.then(function(){t.export(e,t,n,o,i+1,r)}):t.export(e,t,n,o,i+1,r)})}function c(e,t){if(!(this instanceof c))return new c(e);if(e){i(e)?e=ee[e]:(s=e.preset)&&(e=Object.assign({},s[s],e)),s=e.charset;var s,o=e.lang;i(s)&&(-1===s.indexOf(":")&&(s+=":default"),s=r[s]),i(o)&&(o=N[o])}else e={};let a,l,d=e.context||{};if(this.encode=e.encode||s&&s.encode||P,this.register=t||n(),this.D=a=e.resolution||9,this.G=t=s&&s.G||e.tokenize||"strict",this.depth="strict"===t&&d.depth,this.l=g(d.bidirectional),this.s=l=g(e.optimize),this.m=g(e.fastupdate),this.B=e.minlength||1,this.C=e.boost,this.map=l?M(a):n(),this.A=a=d.resolution||1,this.h=l?M(a):n(),this.F=s&&s.F||e.rtl,this.H=(t=e.matcher||o&&o.H)&&V(t,!1),this.J=(t=e.stemmer||o&&o.J)&&V(t,!0),s=t=e.filter||o&&o.filter){s=t,o=n();for(let e=0,t=s.length;e<t;e++)o[s[e]]=1;s=o}this.filter=s,this.cache=(t=e.cache)&&new j(t)}s=c.prototype,s.append=function(e,t){return this.add(e,t,!0)},s.add=function(e,t,s,o){if(t&&(e||0===e)){if(!o&&!s&&this.register[e])return this.update(e,t);if(t=this.encode(t),o=t.length){const f=n(),d=n(),m=this.depth,u=this.D;for(let g=0;g<o;g++){let p=t[this.F?o-1-g:g];if(r=p.length,p&&r>=this.B&&(m||!d[p])){var i,r,l,a=b(u,o,g),c="";switch(this.G){case"full":if(2<r){for(a=0;a<r;a++)for(i=r;i>a;i--)i-a>=this.B&&(l=b(u,o,g,r,a),c=p.substring(a,i),h(this,d,c,l,e,s));break}case"reverse":if(1<r){for(i=r-1;0<i;i--)c=p[i]+c,c.length>=this.B&&h(this,d,c,b(u,o,g,r,i),e,s);c=""}case"forward":if(1<r){for(i=0;i<r;i++)c+=p[i],c.length>=this.B&&h(this,d,c,a,e,s);break}default:if(this.C&&(a=Math.min(a/this.C(t,p,g)|0,u-1)),h(this,d,p,a,e,s),m&&1<o&&g<o-1)for(r=n(),c=this.A,a=p,i=Math.min(m+1,o-g),r[a]=1,l=1;l<i;l++)if((p=t[this.F?o-1-g-l:g+l])&&p.length>=this.B&&!r[p]){r[p]=1;const t=this.l&&p>a;h(this,f,t?a:p,b(c+(o/2>c?0:1),o,g,i-1,l-1),e,s,t?p:a)}}}}this.m||(this.register[e]=1)}}return this};function b(e,t,n,s,o){return n&&1<e?t+(s||0)<=e?n+(o||0):(e-1)/(t+(s||0))*(n+(o||0))+1|0:0}function h(e,t,s,o,i,a,r){let c=r?e.h:e.map;(!t[s]||r&&!t[s][r])&&(e.s&&(c=c[o]),r?(t=t[s]||(t[s]=n()),t[r]=1,c=c[r]||(c[r]=n())):t[s]=1,c=c[s]||(c[s]=[]),e.s||(c=c[o]||(c[o]=[])),a&&c.includes(i)||(c[c.length]=i,e.m&&(e=e.register[i]||(e.register[i]=[]),e[e.length]=c)))}s.search=function(e,t,s){s||(!t&&a(e)?(s=e,e=s.query):a(t)&&(s=t));let i=[],o,r,d=0;if(s){e=s.query||e,t=s.limit,d=s.offset||0;var l,c=s.context;r=s.suggest}if(e&&(e=this.encode(""+e),o=e.length,1<o)){s=n(),l=[];for(let n=0,a=0,t;n<o;n++)if((t=e[n])&&t.length>=this.B&&!s[t])if(this.s||r||this.map[t])l[a++]=t,s[t]=1;else return i;e=l,o=e.length}if(!o)return i;t||(t=100),c=this.depth&&1<o&&!1!==c,s=0;let u;c?(u=e[0],s=1):1<o&&e.sort(re);for(let n,a;s<o;s++){if(a=e[s],c?(n=E(this,i,r,t,d,2===o,a,u),r&&!1===n&&i.length||(u=a)):n=E(this,i,r,t,d,1===o,a),n)return n;if(r&&s===o-1){if(l=i.length,!l){if(c){c=0,s=-1;continue}return i}if(1===l)return z(i[0],t,d)}}return F(i,t,d,r)};function E(e,t,n,s,o,i,a,r){let l=[],c=r?e.h:e.map;if(e.s||(c=D(c,a,r,e.l)),c){let n=0;const d=Math.min(c.length,r?e.A:e.D);for(let u=0,m=0,t,h;u<d;u++)if((t=c[u])&&(e.s&&(t=D(t,a,r,e.l)),o&&t&&i&&(h=t.length,h<=o?(o-=h,t=null):(t=t.slice(o),o=0)),t&&(l[n++]=t,i&&(m+=t.length,m>=s))))break;if(n){if(i)return z(l,s,0);t[t.length]=l;return}}return!n&&l}function z(e,t,n){return e=1===e.length?e[0]:[].concat.apply([],e),n||e.length>t?e.slice(n,n+t):e}function D(e,t,n,s){return n?(s=s&&t>n,e=(e=e[s?t:n])&&e[s?n:t]):e=e[t],e}s.contain=function(e){return!!this.register[e]},s.update=function(e,t){return this.remove(e).add(e,t)},s.remove=function(e,t){const n=this.register[e];if(n){if(this.m)for(let t=0,s;t<n.length;t++)s=n[t],s.splice(s.indexOf(e),1);else p(this.map,e,this.D,this.s),this.depth&&p(this.h,e,this.A,this.s);if(t||delete this.register[e],this.cache){t=this.cache;for(let n=0,o,s;n<t.h.length;n++)s=t.h[n],o=t.cache[s],o.includes(e)&&(t.h.splice(n--,1),delete t.cache[s])}}return this};function p(e,t,n,s,o){let i=0;if(e.constructor===Array)if(o)t=e.indexOf(t),-1!==t?1<e.length&&(e.splice(t,1),i++):i++;else{o=Math.min(e.length,n);for(let a=0,r;a<o;a++)(r=e[a])&&(i=p(r,t,n,s,o),s||i||delete e[a])}else for(let a in e)(i=p(e[a],t,n,s,o))||delete e[a];return i}s.searchCache=S,s.export=function(e,t,s,o,i,a){let l=!0;"undefined"==typeof a&&(l=new Promise(e=>{a=e}));let c,r;switch(i||(i=0)){case 0:if(c="reg",this.m){r=n();for(let e in this.register)r[e]=1}else r=this.register;break;case 1:c="cfg",r={doc:0,opt:this.s?1:0};break;case 2:c="map",r=this.map;break;case 3:c="ctx",r=this.h;break;default:"undefined"==typeof s&&a&&a();return}return A(e,t||this,s,c,o,i,r,a),l},s.import=function(e,t){if(t)switch(i(t)&&(t=JSON.parse(t)),e){case"cfg":this.s=!!t.opt;break;case"reg":this.m=!1,this.register=t;break;case"map":this.map=t;break;case"ctx":this.h=t}},T(c.prototype);function oe(e){e=e.data;var n,s=t._index;const o=e.args;switch(n=e.task,n){case"init":n=e.options||{},e=e.factory,s=n.encode,n.cache=!1,s&&0===s.indexOf("function")&&(n.encode=Function("return "+s)()),e?(Function("return "+e)()(t),t._index=new t.FlexSearch.Index(n),delete t.FlexSearch):t._index=new c(n);break;default:e=e.id,s=s[n].apply(s,o),postMessage("search"===n?{id:e,msg:s}:{id:e})}}let R=0;function l(e){if(!(this instanceof l))return new l(e);var s;e?x(s=e.encode)&&(e.encode=s.toString()):e={},(s=(t||window)._factory)&&(s=s.toString());const i="undefined"==typeof window&&t.exports,o=this;this.o=G(s,i,e.worker),this.h=n(),this.o&&(i?this.o.on("message",function(e){o.h[e.id](e.msg),delete o.h[e.id]}):this.o.onmessage=function(e){e=e.data,o.h[e.id](e.msg),delete o.h[e.id]},this.o.postMessage({task:"init",factory:s,options:e}))}u("add"),u("append"),u("search"),u("update"),u("remove");function u(e){l.prototype[e]=l.prototype[e+"Async"]=function(){const o=this,t=[].slice.call(arguments);var n=t[t.length-1];let s;return x(n)&&(s=n,t.splice(t.length-1,1)),n=new Promise(function(n){setTimeout(function(){o.h[++R]=n,o.o.postMessage({task:e,id:R,args:t})})}),s?(n.then(s),this):n}}function G(e,t,n){let s;try{s=t?new(require("worker_threads").Worker)(__dirname+"/node/node.js"):e?new Worker(URL.createObjectURL(new Blob(["onmessage="+oe.toString()],{type:"text/javascript"}))):new Worker(i(n)?n:"worker/worker.js",{type:"module"})}catch{}return s}function d(e){if(!(this instanceof d))return new d(e);var t,s=e.document||e.doc||e;this.K=[],this.h=[],this.A=[],this.register=n(),this.key=(t=s.key||s.id)&&v(t,this.A)||"id",this.m=g(e.fastupdate),this.C=(t=s.store)&&!0!==t&&[],this.store=t&&n(),this.I=(t=s.tag)&&v(t,this.A),this.l=t&&n(),this.cache=(t=e.cache)&&new j(t),e.cache=!1,this.o=e.worker,this.async=!1,t=n();let o=s.index||s.field||s;i(o)&&(o=[o]);for(let r=0,n,s;r<o.length;r++)n=o[r],i(n)||(s=n,n=n.field),s=a(s)?Object.assign({},e,s):e,this.o&&(t[n]=new l(s),t[n].o||(this.o=!1)),this.o||(t[n]=new c(s,this.register)),this.K[r]=v(n,this.A),this.h[r]=n;if(this.C)for(e=s.store,i(e)&&(e=[e]),s=0;s<e.length;s++)this.C[s]=v(e[s],this.A);this.index=t}function v(e,t){const n=e.split(":");let s=0;for(let o=0;o<n.length;o++)e=n[o],0<=e.indexOf("[]")&&(e=e.substring(0,e.length-2))&&(t[s]=!0),e&&(n[s++]=e);return s<n.length&&(n.length=s),1<s?n:n[0]}function C(e,t){if(i(t))e=e[t];else for(let n=0;e&&n<t.length;n++)e=e[t[n]];return e}function w(e,t,s,o,i){if(e=e[i],o===s.length-1)t[i]=e;else if(e)if(e.constructor===Array)for(t=t[i]=Array(e.length),i=0;i<e.length;i++)w(e,t,s,o,i);else t=t[i]||(t[i]=n()),i=s[++o],w(e,t,s,o,i)}function O(e,t,n,s,o,i,a,r){if(e=e[a])if(s===t.length-1){if(e.constructor===Array){if(n[s]){for(t=0;t<e.length;t++)o.add(i,e[t],!0,!0);return}e=e.join(" ")}o.add(i,e,r,!0)}else if(e.constructor===Array)for(a=0;a<e.length;a++)O(e,t,n,s,o,i,a,r);else a=t[++s],O(e,t,n,s,o,i,a,r)}s=d.prototype,s.add=function(e,t,s){if(a(e)&&(t=e,e=C(t,this.key)),t&&(e||0===e)){if(!s&&this.register[e])return this.update(e,t);for(let o=0,n,a;o<this.h.length;o++)a=this.h[o],n=this.K[o],i(n)&&(n=[n]),O(t,n,this.A,0,this.index[a],e,n[0],s);if(this.I){let o=C(t,this.I),a=n();i(o)&&(o=[o]);for(let i=0,t,n;i<o.length;i++)if(t=o[i],!a[t]&&(a[t]=1,n=this.l[t]||(this.l[t]=[]),!s||!n.includes(e))&&(n[n.length]=e,this.m)){const t=this.register[e]||(this.register[e]=[]);t[t.length]=n}}if(this.store&&(!s||!this.store[e])){let s;if(this.C){s=n();for(let n=0,e;n<this.C.length;n++)e=this.C[n],i(e)?s[e]=t[e]:w(t,s,e,0,e[0])}this.store[e]=s||t}}return this},s.append=function(e,t){return this.add(e,t,!0)},s.update=function(e,t){return this.remove(e).add(e,t)},s.remove=function(e){if(a(e)&&(e=C(e,this.key)),this.register[e]){for(var t=0;t<this.h.length&&(this.index[this.h[t]].remove(e,!this.o),!this.m);t++);if(this.I&&!this.m)for(let n in this.l){t=this.l[n];const s=t.indexOf(e);-1!==s&&(1<t.length?t.splice(s,1):delete this.l[n])}this.store&&delete this.store[e],delete this.register[e]}return this},s.search=function(e,t,n,s){n||(!t&&a(e)?(n=e,e=""):a(t)&&(n=t,t=0));let c=[],m=[],f,d,r,o,l,p,u=0;if(n)if(n.constructor===Array)r=n,n=null;else{if(e=n.query||e,r=(f=n.pluck)||n.index||n.field,o=n.tag,d=this.store&&n.enrich,l="and"===n.bool,t=n.limit||t||100,p=n.offset||0,o&&(i(o)&&(o=[o]),!e)){for(let e=0,n;e<o.length;e++)(n=te.call(this,o[e],t,p,d))&&(c[c.length]=n,u++);return u?c:[]}i(r)&&(r=[r])}r||(r=this.h),l=l&&(1<r.length||o&&1<o.length);const h=!s&&(this.o||this.async)&&[];for(let v=0,a,f,b;v<r.length;v++){let g;if(f=r[v],i(f)||(g=f,f=g.field,e=g.query||e,t=g.limit||t,d=g.enrich||d),h)h[v]=this.index[f].searchAsync(e,t,g||n);else{if(s?a=s[v]:a=this.index[f].search(e,t,g||n),b=a&&a.length,o&&b){const e=[];let n=0;l&&(e[0]=[a]);for(let s=0,i,t;s<o.length;s++)(i=o[s],b=(t=this.l[i])&&t.length)&&(n++,e[e.length]=l?[t]:t);n&&(a=l?F(e,t||100,p||0):ce(a,e),b=a.length)}if(b)m[u]=f,c[u++]=a;else if(l)return[]}}if(h){const s=this;return new Promise(function(o){Promise.all(h).then(function(i){o(s.search(e,t,n,i))})})}if(!u)return[];if(f&&(!d||!this.store))return c[0];for(let t=0,e;t<m.length;t++){if(e=c[t],e.length&&d&&(e=q.call(this,e)),f)return e;c[t]={field:m[t],result:e}}return c};function te(e,t,n,s){let o=this.l[e],i=o&&o.length-n;if(i&&0<i)return(i>t||n)&&(o=o.slice(n,n+t)),s&&(o=q.call(this,o)),{tag:e,result:o}}function q(e){const t=Array(e.length);for(let n=0,s;n<e.length;n++)s=e[n],t[n]={id:s,doc:this.store[s]};return t}s.contain=function(e){return!!this.register[e]},s.get=function(e){return this.store[e]},s.set=function(e,t){return this.store[e]=t,this},s.searchCache=S,s.export=function(e,t,n,s,o,i){let a;if("undefined"==typeof i&&(a=new Promise(e=>{i=e})),o||(o=0),s||(s=0),s<this.h.length){const n=this.h[s],a=this.index[n];t=this,setTimeout(function(){a.export(e,t,o?n:"",s,o++,i)||(s++,o=1,t.export(e,t,n,s,o,i))})}else{let t,a;switch(o){case 1:t="tag",a=this.l,n=null;break;case 2:t="store",a=this.store,n=null;break;default:i();return}A(e,this,n,t,s,o,a,i)}return a},s.import=function(e,t){if(t)switch(i(t)&&(t=JSON.parse(t)),e){case"tag":this.l=t;break;case"reg":this.m=!1,this.register=t;for(let e=0,n;e<this.h.length;e++)n=this.index[this.h[e]],n.register=t,n.m=!1;break;case"store":this.store=t;break;default:e=e.split(".");const n=e[0];e=e[1],n&&e&&this.index[n].import(e,t)}},T(d.prototype),Y={encode:K,F:!1,G:""};const X=[o("[àáâãäå]"),"a",o("[èéêë]"),"e",o("[ìíîï]"),"i",o("[òóôõöő]"),"o",o("[ùúûüű]"),"u",o("[ýŷÿ]"),"y",o("ñ"),"n",o("[çc]"),"k",o("ß"),"s",o(" & ")," and "];function K(e){var t=e=""+e;return t.normalize&&(t=t.normalize("NFD").replace(J,"")),U.call(this,t.toLowerCase(),!e.normalize&&X)}W={encode:k,F:!1,G:"strict"};const Z=/[^a-z0-9]+/,$={b:"p",v:"f",w:"f",z:"s",x:"s","ß":"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function k(e){e=K.call(this,e).join(" ");const t=[];if(e){const n=e.split(Z),s=n.length;for(let i=0,o,a=0;i<s;i++)if((e=n[i])&&(!this.filter||!this.filter[e])){o=e[0];let n=$[o]||o,s=n;for(let i=1;i<e.length;i++){o=e[i];const t=$[o]||o;t&&t!==s&&(n+=t,s=t)}t[a++]=n}}return t}I={encode:H,F:!1,G:""};const ne=[o("ae"),"a",o("oe"),"o",o("sh"),"s",o("th"),"t",o("ph"),"f",o("pf"),"f",o("(?![aeo])h(?![aeo])"),"",o("(?!^[aeo])h(?!^[aeo])"),""];function H(e,t){return e&&(e=k.call(this,e).join(" "),2<e.length&&(e=f(e,ne)),t||(1<e.length&&(e=B(e)),e&&(e=e.split(" ")))),e||[]}L={encode:ae,F:!1,G:""};const se=o("(?!\\b)[aeo]");function ae(e){return e&&(e=H.call(this,e,!0),1<e.length&&(e=e.replace(se,"")),1<e.length&&(e=B(e)),e&&(e=e.split(" "))),e||[]}r["latin:default"]=ie,r["latin:simple"]=Y,r["latin:balance"]=W,r["latin:advanced"]=I,r["latin:extra"]=L;const _={Index:c,Document:d,Worker:l,registerCharset:function(e,t){r[e]=t},registerLanguage:function(e,t){N[e]=t}};let y;(y=t.define)&&y.amd?y([],function(){return _}):t.exports?t.exports=_:t.FlexSearch=_}(this);const search=document.querySelector(".search-input"),suggestions=document.querySelector(".search-suggestions"),background=document.querySelector(".search-background");var index=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",tag:"tag",store:["href","title","description"],index:["title","description","content"]}});function initIndex(){index.add({id:0,tag:"en",href:"/blogs/agents/",title:"Agents 框架",description:"Agents 框架介绍 （MetaGPT/ChatDEV/AutoGen）",content:`LLM Powered Autonomous Agents
在基于 LLM 驱动的 agent 体系里, LLM 作为agent的大脑，加其他 3个能力作为补充：
规划能力
子目标与拆解: Agent能够把大的任务拆解为更小的，可管理的子任务，实现复杂任务的高效处理。
自省与改进: Agent能基于过去的行动做自我批评和自我改进，从过去的错误中学习从而改进未来的动作，从而能够改善最终的结果
记忆
感官记忆：原始输入
短期记忆：in-context learning
所有基于context的学习能力, 或者说prompt内的学习能力均可作为短期记忆
长期记忆：Agent能够保留和无限召回的历史信息能力。这通常通过外部的向量数据库实现
工具使用
Agent在模型内部知识不够时，去调用外部 API，比如获取实时的信息，处理代码，访问专有的信息知识库等等.
单agent：通过记忆、规划和工具使用等能力的支持，让大模型自主完成目标任务
多agent：把多个agent组合在一起，每个agent有自主能力和不同的目标任务，充分挖掘大模型思维链和理解能力，协作完成复杂任务
MetaGPT MetaGPT 利用装配线范式为各种代理分配不同的角色，建立了一个有效、一致地解构复杂的多代理协作问题的框架。
MetaGPT 将高级任务分解为由不同角色处理的详细可操作组件：ProductManager, Architect, ProjectManager, Engineer, QA Engineer，分别输出产品设计、架构图、代码等内容。
整个过程完全自动化，从而促进特定角色的专业知识运用和协调。
全流程 初始化 Software Company
定义这个软件公司的环境，投资金额，和初始的需求。
Company hire：
为了实现这个需求，软件公司需要定义一些角色（Agent）来完成， 初始化这些需要使用的Agent，将Agent按照执行顺序排列，默认的选择就是产品经理，架构师，项目经理，工程师，QA。
定义每个 Agent 时，需要完成两项初始化：
Init actions：定义 agent 可以执行的 actions
Watch：添加 agent关注的 action （此action的结果会作为当前agent的参考）
Example：
对于产品经理，可执行的 actions 为 写prd 文档， 他关注的动作为boss 发送的初始需求。
Invest：
定义投资金额，计算成本
Start project
将初始需求发布
Run：
按照 Company hire 的顺序 Agent 依次行动
Product Manager（Requirement Analysis） Architect（Architectural Design） Project Manager （ System Design） Engineer（Coding ） QA Engineer（Testing） Agent 定义 %% width=60% flowchart TD Agent["Agent"] --> LLM["LLM"] Agent["Agent"] --> Setting["Setting
(Agent的游戏角色)"] Agent --> States["States
[[index, action]]"] Agent --> Actions["Actions
[action]"] Agent --> RoleContext["RoleContext:
(Agent的上下文本)"] ​
LLM： Agent的大语言模型
Setting：Agent 的基本信息
name profile goal constraints desc States：由序号和单个action 组成 ，方便在实际执行过程中定位到agent的 动作状态
Actions：agent可以执行的actions
WriteCode WriteCodeReview WritePRD WriteDesign WriteTasks …… 大多数 agent 基本只包含一个 action：（产品经理，写prd），（架构师，写架构设计），（项目经理， 写任务）
RoleContext
角色上下文，可以看做是agent与外界交互的缓冲环境
Environment
Memory
Index: agent: message Storage: [message] Long term Memory
MemoryStorage (FaissStore) State： int，指定 agent 的 actions list 中的的某个action
Todo：指示 Agent 接下来要做的 action
Watch：Agent 关注的 actions
News： Agent 自身记忆与环境进行交互之后更新的内容
Agent执行流程 %% width=60% graph LR Watch["watch
(观察)"] --> Observe["observe"] Observe --> Think["think
(set state)"] Think --> Act["act"] Act --> Publish["publish message"] Watch：初始化的时候定义。
更新 RoleContext 的 watch，设定agent关心的action。
当 agent 在其 RoleContext 中观测到该 agent 关心的 action的时候，该agent会对这个 action 做出反应，此 action 的结果是该 agent 的参考
其它的步骤主要跟 RoleContext 相关
RoleContext
observe
获取环境记忆与自身记忆对比，更新为 news 获取环境记忆，更新自身记忆 think：
根据 news 更新自身 state， 根据 state 更新 Todo list
act：
执行 Todo list里的任务（与 LLM 交互），得到 response（message），更新自身 memory
publish message：
用 message 更新环境memory
Example
收到人类的需求 产品经理通过进行需求和可行性分析 架构师为项目制定具体的技术设计 项目经理执行顺序流图示以满足每个需求 工程师负责实际的代码开发 质量保证（QA）工程师负责执行全面的测试 ChatDev ChatDev 虚拟了一个聊天驱动软件开发公司，模拟了瀑布模型，将开发过程细分为四个不同的时间阶段：每个阶段都涉及一组代理人，例如程序员、代码审查人员和测试工程师，促进协作对话和工作流程。
在代码中，ChatDev 定义的phase会更多更复杂, 也能包含进前面的四个阶段中
ChatDEV 由 phase-level 和 chat-level构成。
phase-level ：将软件开发过程分解为 44 个连续阶段： Designing， Coding， Testing， Documenting。
chat-level ： 每个阶段都进一步分为 atomic chats 。这些原子聊天涉及两个agents之间以任务为导向的角色扮演，促进协作沟通。 聊天过程遵循 instruction-following风格，在每个chat中，agents交互聊天以完成特定子任务
全流程
初始化 ChatChain
定义全流程的整个阶段内容
定义各个阶段参与的agent
Start Chatting
Phase：全流程中的具体阶段
%% width=20% graph LR Phase["Phase"] --> Assistant["Assistant role"] Phase --> User["User role"] Phase --> Prompt["Phase prompt"] Phase --> Name["Phase name"] DemandAnalysis LanguageChoose Coding ArtDesign ArtIntegration CodeComplete CodeReviewComment CodeReviewModification CodeReviewHuman TestErrorSummary TestModification EnvironmentDoc Manual Chat中的关键机制 Role specialization 角色专业化
确保每个agent履行其指定的职能，并有效地促进面向任务的对话。
Memory stream 记忆流
维护聊天中以前对话的全面记录，使agent能够做出明智的决策。
Self-reflection 自我反省
当双方达成共识而不触发预定义的终止条件时，促使assistant反思拟议的决定。
%% width=30% graph LR subgraph Interaction User((User Role)) <--> Assistant((Assistant Role)) end Interaction -->|seminar conclusion| C[RES] Phase prompt：有关phase的描述prompt，配置在 config 中
Assistant role / User role : 由 Chat Agent 扮演
根据初始化的system message，Assistant agent 和 User agent轮流对话，直到出现 terminal signal 或者 轮次达到上限
self reflection ：seminar conclusion （可选）对对话讨论进行总结，得出结论。 Agent 定义 System message： System 基本信息（角色的基本定义）
Content : prompt （Chatdev prompt+role prompt） Meta dict Assistant_role Chatdev prompt Task User role Role: system Role name: Agent name Agent使用的 LLM 及其配置
Model config / backend：LLM 及其配置
Stored messages: 历史消息（Agent记忆）
ChatDev 中定义的 agent （Role name /Role type）：
Chief Executive Officer Chief Product Officer Counselor Chief Technology Officer Chief Human Resource Officer Programmer Code Reviewer Software Test Engineer Chief Creative Officer AutoGen AutoGen是微软开源的一个框架，允许开发具有多个 Agent 的LLM应用程序，这些Agent可以相互交流以解决任务。
AutoGen 的Agent是可定制的、可对话的，并可以无缝地允许人类参与。它们可以在使用LLM、人类输入和工具的各种模式下运行。
AutoGen简化了复杂LLM工作流程的协调、自动化和优化，可以使用可定制和可对话的Agent来构建涵盖对话自治、Agent数量和Agent对话拓扑的各种对话模式。
具体来说，AutoGen定义了一个 Conversable Agent，并由 Conversable Agent 衍生出了 33 种类型的 Agent
Assistant Agent 和 UserProxy Agent
Assistant Agent: 通过LLM解决具体问题 UserProxy Agent: 用户代理，可执行代码和提供反馈 Group Chat Manager
在 group chat模式中担任管理对话的角色，负责在agent间传递消息以及在每一轮指定下一个发言的agent
Agent 配置
System message： 默认的agent prompt Llm config： LLM 及其配置 Max consecutive auto reply： 最大对话次数 Human input mode：人参与的形式（ Assistant默认never，User Proxy 默认always） flowchart LR A[Agent] --> B[Conversable Agent] B --> C[Assistant Agent] B --> D[User Proxy Agent] B --> E[Group Chat Manager] 使用AutoGen构建的六个不同应用程序示例。他们的谈话模式显示了AutoGen的灵活性和实力。
Example
自定义AutoGen提供的内置代理 2 agents chatting 实现“画META 和TESLA 年初至今股票价格”示例 2 agents的具体聊天过程 Reference LLM Powered Autonomous Agents MetaGPT: Meta Programming for A Multi-Agent Collaborative Framework ChatDev: Communicative Agents for Software Development AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation`}).add({id:1,tag:"en",href:"/blogs/flashattention/",title:"FlashAttention",description:"FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",content:`Background Structure of GPU Memory 在 GPU 当中，memory 也跟 CPU memory 一样分成不同的 level，通常 越上层空间越小 但是 速度越快
HBM：平常主要提到的 GPU memory 通常是指 high bandwidth memory (HBM)
A100 的 HBM 大概 4040 GB~ 8080 GB， HBM 的bandwidth为 1.51.5 – 2.02.0 TB/s。 SRAM：再往上一层的 memory 称为 SRAM
总容量 192KB×108192 \\textKB \\times 108 (streaming multi-processors) ， bandwidth 可以达到 1919 TB/s 因此当有运算需要从 HBM 当中不断读写资料的时候，这样的速度差就容易导致 HBM 的读取变成整体效能的 bottleneck。
在 GPU 当中有非常大量的 threads (kernel) 负责执行 operation 的运算，而整个运算的过程基本上是从 HBM 当中将资料载入至 SRAM 中，执行运算并将 output 存回 HBM 当中。
根据每个 operation 实际运算时间和 memory 存取的时间多寡，我们可以将 operations 归纳为两个类别，分别是 compute-bound 以及 memory-bound
Compute-bound ：运算的主要时间都耗费在 operation 的计算上，HBM 的存取只占了其中一点点的时间 多维度的矩阵相乘 高 channel 数的 convolution Memory-bound：运算主要时间都耗费在 memory 的读取上，而实际的运算只占了其中一点点的时间 element-wise (eg, activation, dropout) reduction (eg, sum, softmax, batch norm, layer norm) 皆属于 memory-bound。 Attention 的计算复杂度 Attention 的计算过程 NN ：序列长度 kk ：hidden size dd : head dimension 线性变换：
对输入序列 X∈RN×k\\mathbf X\\in \\mathbbR^N\\times k 进行线性变换，分别乘以三个不同的权重矩阵 WQ\\mathbf W^Q ， WK\\mathbf W^K ， WV\\mathbf W^V ∈Rk×d\\in \\mathbbR^k\\times d 得到 Q\\mathbf Q 、 K\\mathbf K 、 V\\mathbf V ∈RN×d\\in \\mathbbR^N\\times d 。 该步骤的复杂度为 O(3Nkd)O(3Nkd) 。 计算相似度得分：
通过 Q\\mathbf Q 、 K\\mathbf K 两个矩阵计算相似度得分，得到注意力权重矩阵 QK⊤∈RN×N\\mathbf Q \\mathbf K^\\top\\in \\mathbbR^N\\times N 该步骤的复杂度为 O(NNd)O(NNd) 。 Softmax: 该步骤的复杂度为: O(N2)O(N^2) 加权平均：
将 Softmax 之后的注意力权重矩阵与 V\\mathbf V 矩阵相乘。 该步骤的复杂度为 O(N2d)O(N^2d) 。 通常情况下有 N≫dN \\gg d （GPT2中， N=1024N=1024 ， d=64d=64 ），因此总体的计算复杂度约为 O(N2d)O(N^2d) FlashAttention Tiling and Recomputation FlashAttention 通过利用 GPU 硬件中的特殊设计，针对全局内存和共享存储的 I/O 速度的不同，尽可能
高效地使用 SRAM 来加快计算速度 避免 HBM 中读取或写入注意力矩阵 达成该目标需要能 做到在不访问整个输入的情况下计算 Softmax 函数，并且后向传播中不能存储中间注意力矩阵。
标准 Attention 算法中，Softmax 计算按行进行，即在与 V\\mathbf V 做矩阵乘法之前，需要将 Q\\mathbf Q 、 K\\mathbf K 的各个分块完成一整行的计算。 得到 Softmax 的结果后，再与矩阵 V\\mathbf V 分块做矩阵乘。 在 FlashAttention 中，将输入分割成块，并在输入块上进行多次传递，从而 以增量方式 执行 Softmax 计算。
Tiling (在向前和向后传递时使用)-基本上将 N×NN \\times N softmax/scores 矩阵分块成块。 Recomputation (重算，仅在向后传递中使用) Tiling 平铺 Theorem 1
FlashAttention 的算法能够在 O(N2d)O(N^2d) FLOPs 内正确的返回 O=softmax(QK⊤)VO=\\mathrmsoftmax(\\mathbf Q \\mathbf K^\\top)\\mathbf V ，除去输入和输出之外还需要 O(N)O(N) 大小的空间
输入: Q,K,V\\mathbf Q,\\mathbf K,\\mathbf V ∈RN×d\\in \\mathbbR^N\\times d 位于高速显存（HBM）中，GPU 芯片中的 SRAM 大小 为 MM 输出: O\\mathbf O 初始化 设置块大小 block size block 的列大小： Bc=[M4d]B_c =[\\fracM4d] block 的行大小： Br=min⁡([M4d],d)B_r = \\min \\big([\\fracM4d], d \\big) min⁡\\min 函数的目的是防止块大小 Bc×Br&gt;M4B_c \\times B_r &gt; \\fracM4 , 这样就无法把 44 个这样的块放到 SRAM。
HBM 中初始化 O=[0]N×d∈RN×d\\mathbf O = \\beginbmatrix0\\endbmatrix_N \\times d \\in \\mathbbR^N\\times d ：结果矩阵 O\\mathbf O 初始化为 00 ，后面会逐步把中间结果累加进去 l=[0]N∈RN\\mathbf l = \\beginbmatrix0\\endbmatrix_N\\in \\mathbbR^N ：对于每一行来说，它是一个标量，用于累加指数和，由于输出有 NN 行，所以这里的 l\\mathbf l 是长度为 NN 的向量 m=[−∞]N∈RN\\mathbf m= \\beginbmatrix- \\infty\\endbmatrix_N \\in \\mathbbR^N ： m\\mathbf m 用于记录 每一行当前最大的值，所以也是长度为 NN ，而 −∞-\\infty 是求 max⁡\\max 的合适初始值。 切分子块 Q\\mathbf Q 、 K\\mathbf K 、 V\\mathbf V 将矩阵 Q\\mathbf Q 按行切分成 Tr=[NBr]T_r = [\\fracNB_r] 块 Q1,⋯ ,QTr\\mathbf Q_1, \\cdots , \\mathbf Q_T_r ， Qi∈RBr×d\\mathbf Q_i\\in \\mathbbR^B_r\\times d Qi=(Qi11Qi12…Qi1dQi21Qi22…Qi2d⋮⋮⋱⋮QiBr1QiBr2…QiBrd) \\mathbf Q_i =\\beginpmatrix Q_i_11 &amp; Q_i_12 &amp; \\ldots &amp; Q_i_1d \\\\ Q_i_21 &amp; Q_i_22 &amp; \\ldots &amp; Q_i_2d\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ Q_i_B_r1 &amp; Q_i_B_r2 &amp; \\ldots &amp; Q_i_B_rd\\\\ \\endpmatrix 将矩阵 K\\mathbf K 按行切分成 Tc=[NBc]T_c = [\\fracNB_c] 块 K1,⋯ ,KTc\\mathbf K_1, \\cdots , \\mathbf K_T_c ， Kj∈RBc×d\\mathbf K_j\\in \\mathbbR^B_c\\times d KjT=(K1j1K1j2…K1jBcK2j1K2j2…K2jBc⋮⋮⋱⋮Kdj1Kdj2…KdjBc) \\mathbf K_j^T =\\beginpmatrix K_1j_1 &amp; K_1j_2 &amp; \\ldots &amp; K_1j_B_c \\\\ K_2j_1 &amp; K_2j_2&amp; \\ldots &amp; K_2j_B_c\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ K_dj_1 &amp; K_dj_2 &amp; \\ldots &amp; K_dj_B_c\\\\ \\endpmatrix 将矩阵 V\\mathbf V 按行切分成 Tc=[NBc]T_c = [\\fracNB_c] 块 V1,⋯ ,VTc\\mathbf V_1, \\cdots , \\mathbf V_T_c ， Vj∈RBc×d\\mathbf V_j\\in \\mathbbR^B_c\\times d Vj=(Vj11Vj12…Vj1dVj21Vj22…Vj2d⋮⋮⋱⋮VjBc1VjBc2…VjBcd) \\mathbf V_j =\\beginpmatrix V_j_11 &amp; V_j_12 &amp; \\ldots &amp; V_j_1d \\\\ V_j_21 &amp; V_j_22&amp; \\ldots &amp; V_j_2d\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ V_j_B_c1 &amp; V_j_B_c2 &amp; \\ldots &amp; V_j_B_cd\\\\ \\endpmatrix 切分子块 O\\mathbf O 、 l\\mathbf l 、 m\\mathbf m 将矩阵 O\\mathbf O 切分成 Tr=[MBr]T_r = [\\fracMB_r] 块 O1,⋯ ,OTr\\mathbf O_1, \\cdots , \\mathbf O_T_r ， Oi∈RBr×d\\mathbf O_i\\in \\mathbbR^B_r\\times d 将 l\\mathbf l 切分成 Tr=[MBr]T_r = [\\fracMB_r] 块 l1,⋯ ,lTr\\mathbf l_1, \\cdots , \\mathbf l_T_r ， li∈RBr\\mathbf l_i\\in \\mathbbR^B_r l=(l1⋮li⋮lTr),li=(li1⋮liBr) \\mathbf l =\\beginpmatrix \\mathbf l_1\\\\ \\vdots \\\\ \\mathbf l_i \\\\ \\vdots \\\\ \\mathbf l_T_r\\\\ \\endpmatrix , \\quad \\mathbf l_i = \\beginpmatrix l_i_1\\\\ \\vdots \\\\ l_i_B_r\\\\ \\endpmatrix 将 m\\mathbf m 切分成 Tr=[MBr]T_r = [\\fracMB_r] 块 m1,⋯ ,mTr\\mathbf m_1, \\cdots , \\mathbf m_T_r ， mi∈RBrm_i\\in \\mathbbR^B_r m=(m1⋮mi⋮mTr),mi=(mi1⋮miBr) \\mathbf m =\\beginpmatrix \\mathbf m_1\\\\ \\vdots \\\\ \\mathbf m_i \\\\ \\vdots \\\\ \\mathbf m_T_r\\\\ \\endpmatrix , \\quad \\mathbf m_i = \\beginpmatrix m_i_1\\\\ \\vdots \\\\ m_i_B_r\\\\ \\endpmatrix 循环 for j=1j = 1 to TcT_c do （列）：
将 Kj\\mathbf K_j 和 Vj\\mathbf V_j 从 HBM 中读入芯片存储 SRAM
for i=1i = 1 to TrT_r do （行）：
将 Qi\\mathbf Q_i 、 Oi\\mathbf O_i 、 li\\mathbf l_i 和 mi\\mathbf m_i 从 HBM 中读入芯片存储 SRAM
计算 当前的 m~i\\mathbf \\tildem_i 和 l~i\\mathbf\\tildel_i Sij=QiKjT∈RBr×Bc\\mathbf S_ij = \\mathbfQ_i\\mathbfK_j^T \\in \\mathbbR^B_r\\times B_c Sij=(Si1j1Si1j2…Si1jBcSi2j1Si2j2…Si2jBc⋮⋮⋱⋮SiBrj1SiBrj2…SiBrjBc) \\mathbf S_ij =\\beginpmatrix S_i_1j_1 &amp; S_i_1j_2&amp; \\ldots &amp; S_i_1j_B_c\\\\ S_i_2j_1 &amp; S_i_2j_2 &amp; \\ldots &amp; S_i_2j_B_c\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ S_i_B_rj_1 &amp; S_i_B_rj_2 &amp; \\ldots &amp; S_i_B_rj_B_c\\\\ \\endpmatrix 其中 Sinjm=Qin1K1jm+Qin2K2jm+…+QindKdjmS_i_nj_m = Q_i_n1K_1j_m + Q_i_n2K_2j_m + \\ldots + Q_i_ndK_dj_m m~ij=rowmax(Sij)∈RBr\\mathbf\\tildem_ij = \\mathrmrowmax (\\mathbf S_ij) \\in \\mathbbR^B_r : m~ij\\mathbf\\tildem_ij 逐行计算，找到每一行的最大值 m~ij=(m~i1jm~i2j⋮m~iBrj) \\mathbf\\tildem_ij =\\beginpmatrix \\tildem_i_1j\\\\ \\tildem_i_2j \\\\ \\vdots \\\\ \\tildem_i_B_rj\\\\ \\endpmatrix 其中 m~ikj=max⁡[Sikj1Sikj2…SikjBc]\\tildem_i_kj = \\max \\Big\\ \\big[\\beginmatrix S_i_kj_1 &amp; S_i_kj_2&amp; \\ldots &amp; S_i_kj_B_c\\endmatrix \\big] \\Big\\ P~ij=exp⁡(Sij−m~ij)∈RBr×Bc\\mathbf\\tildeP_ij =\\exp(S_ij - \\tildem_ij) \\in \\mathbbR^B_r \\times B_c ： P~ij\\mathbf \\tildeP_ij 逐点运算，把 Sij\\mathbf S_ij 减去第 ii 行的最大值 m~ij\\mathbf\\tildem_ij (注意：这个下标 jj 表示这是第 jj 次计算），然后计算指数 P~ij=exp⁡((Si1j1−m~i1jSi1j2−m~i1j…Si1jBc−m~i1jSi2j1−m~i2jSi2j2−m~i2j…Si2jBc−m~i2j⋮⋮⋱⋮SiBrj1−m~iBrjSiBrj2−m~iBrj…SiBrjBc−m~iBrj))=exp⁡((P~i1j1P~i1j2…P~i1jBcP~i2j1P~i2j2…P~i2jBc⋮⋮⋱⋮P~iBrj1P~iBrj2…P~iBrjBc)) \\mathbf \\tildeP_ij =\\exp \\big( \\beginpmatrix S_i_1j_1-\\tildem_i_1j&amp; S_i_1j_2-\\tildem_i_1j &amp; \\ldots &amp; S_i_1j_B_c-\\tildem_i_1j\\\\ S_i_2j_1-\\tildem_i_2j &amp; S_i_2j_2-\\tildem_i_2j &amp; \\ldots &amp; S_i_2j_B_c-\\tildem_i_2j\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ S_i_B_rj_1-\\tildem_i_B_rj &amp; S_i_B_rj_2-\\tildem_i_B_rj &amp; \\ldots &amp; S_i_B_rj_B_c-\\tildem_i_B_rj\\\\ \\endpmatrix \\big) = \\exp\\big( \\beginpmatrix \\tildeP_i_1j_1 &amp; \\tildeP_i_1j_2&amp; \\ldots &amp; \\tildeP_i_1j_B_c\\\\ \\tildeP_i_2j_1 &amp; \\tildeP_i_2j_2 &amp; \\ldots &amp; \\tildeP_i_2j_B_c\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ \\tildeP_i_B_rj_1 &amp; \\tildeP_i_B_rj_2 &amp; \\ldots &amp; \\tildeP_i_B_rj_B_c\\\\ \\endpmatrix \\big) l~ij=rowsum(P~ij)∈RBr\\mathbf\\tildel_ij = \\mathrmrowsum (\\tilde P_ij) \\in \\mathbbR^B_r ： l~ij\\mathbf\\tildel_ij 逐行计算，把每一行的 P~ij\\mathbf\\tildeP_ij 加起来 l~ij=(l~i1jl~i2j⋮l~iBrj) \\mathbf\\tildel_ij =\\beginpmatrix \\tildel_i_1j\\\\ \\tildel_i_2j \\\\ \\vdots \\\\ \\tildel_i_B_rj\\\\ \\endpmatrix 其中 l~ikj=∑jn∈[j1,jBc]P~ikjn\\tildel_i_kj = \\sum_j_n \\in[j_1, j_B_c] \\tilde P_i_kj_n 更新 mi\\mathbf m_i 和 li\\mathbf l_i ：
minew=mij=max⁡(mij−1,m~ij)∈RBr\\mathbf m^\\mathrm new_i = \\mathbf m_ij=\\max(\\mathbf m_ij-1, \\mathbf\\tildem_ij ) \\in \\mathbbR^B_r ： 更新每一行到当前的最大值，同理，此时的 jj 表示的是第 jj 次更新。
minew=mij=(max⁡[mi1j−1,m~i1j]⋮max⁡[miBrj−1,m~iBrj]) \\mathbf m_i^\\textnew = \\mathbf m_ij= \\beginpmatrix \\max\\big[m_i_1j-1  ,&amp;\\tildem_i_1j\\big]\\\\ \\vdots \\\\ \\max\\big [m_i_B_rj-1  ,&amp;\\tildem_i_B_rj\\big]\\\\ \\endpmatrix linew=lij=emi−minewlij−1+em~ij−minewl~ij∈RBr\\mathbf l^\\mathrm new_i = \\mathbf l_ij = e^\\mathbf m_i-\\mathbf m^\\mathrm new_i \\mathbf l_ij-1 + e^\\mathbf\\tilde m_ij-\\mathbf m^\\mathrm new_i\\mathbf \\tilde l_ij \\in \\mathbbR^B_r ：更新每一行的修正过后的累加值，同理，此时的 jj 表示的是第 jj 次更新。
将 O←diag(linew)−1⏟(3)(diag(li)emi−minewOi⏟(1)+em~i−minewP~ijVij⏟(2))\\mathbf O\\leftarrow \\underbrace\\mathrmdiag(\\mathbf l^\\mathrm new_i)^-1_(3) \\bigg(\\underbrace\\mathrmdiag(\\mathbf l_i)e^\\mathbf m_i-\\mathbf m^\\mathrm new_i\\mathbf O_i_(1) + \\underbracee^\\mathbf\\tilde m_i-\\mathbf m^\\mathrm new_i \\mathbf\\tilde P_ij\\mathbf V_ij_(2)\\bigg) 写回 HBM 中 P~ijVij∈RBr×d\\mathbf\\tildeP_ij \\mathbfV_ij \\in \\mathbbR^B_r\\times d (1) Oin\\mathbf O_i_n 表示同一行中当前块之前块的 softmax，乘以 li\\mathbf l_i 恢复得到之前块的 PV\\mathbf P\\mathbf V , 乘以 emi−minewe^\\mathbf m_i-\\mathbf m^\\mathrm new_i 得到修正后的 PV\\mathbf P\\mathbf V (2) 表示当前块， em~i−minewP~ijVije^\\mathbf \\tilde m_i-\\mathbf m^\\mathrm new_i \\mathbf\\tilde P_ij\\mathbf V_ij 为修正后的 PV\\mathbf P \\mathbf V (3) (1)+(2) 得到新的 PV\\mathbf P \\mathbf V 除以 linew\\mathbf l_i^\\textnew 得到新的 O\\mathbf O 将 li←linew\\mathbf l_i \\leftarrow \\mathbf l^\\mathrmnew_i 和 mi←minew\\mathbf m_i \\leftarrow \\mathbf m^\\mathrmnew_i 写回 HBM 中
其中:
li=[li1⋯liBr]∈RBr l_i = \\big[ \\beginmatrix l_i_1 &amp;\\cdots &amp; l_i_B_r \\endmatrix\\big]\\in \\mathbbR^B_r diag(li)=(li10…00li2…0⋮⋮⋱⋮00…liBr) \\beginequation \\mathrmdiag(l_i)= \\left( \\beginarraycccc l_i_1 &amp; 0 &amp; \\ldots &amp; 0 \\\\ 0 &amp; l_i_2 &amp; \\ldots &amp; 0 \\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp; \\vdots \\\\ 0 &amp; 0 &amp; \\ldots &amp; l_i_B_r \\\\ \\endarray \\right) \\endequation (l10…00l2…0⋮⋮⋱⋮00…lBr)× (Oi11Oi12…Oi1dOi21Oi22…Oi2d⋮⋮⋱⋮OiBr1OiBr2…OiBrd)= (l1×Oi11l1×Oi12…l1×Oi1dl2×Oi21l2×Oi22…l2×Oi2d⋮⋮⋱⋮lBr×OiBr1lBr×OiBr2…lBr×OiBrd) \\beginpmatrix l_1 &amp; 0 &amp; \\ldots &amp; 0 \\\\ 0 &amp; l_2 &amp; \\ldots &amp; 0\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ 0 &amp; 0 &amp; \\ldots &amp; l_B_r\\\\ \\endpmatrix \\times \\ \\beginpmatrix O_i_11 &amp; O_i_12 &amp; \\ldots &amp; O_i_1d \\\\ O_i_21 &amp; O_i_22 &amp; \\ldots &amp; O_i2d\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ O_i_B_r1 &amp; O_i_B_r2 &amp; \\ldots &amp; O_i_B_rd\\\\ \\endpmatrix= \\ \\beginpmatrix l_1 \\times O_i_11 &amp; l_1 \\times O_i_12 &amp; \\ldots &amp; l_1 \\times O_i_1d\\\\ l_2 \\times O_i_21 &amp; l_2 \\times O_i_22 &amp; \\ldots &amp; l_2 \\times O_i2d\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ l_B_r \\times O_i_B_r1 &amp; l_B_r \\times O_i_B_r2 &amp; \\ldots &amp; l_B_r \\times O_i_B_rd \\endpmatrix (l10…00l2…0⋮⋮⋱⋮00…lBr)−1=(1l10…001l2…0⋮⋮⋱⋮00…1lBr) \\beginpmatrix l_1 &amp; 0 &amp; \\ldots &amp; 0 \\\\ 0 &amp; l_2 &amp; \\ldots &amp; 0\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ 0 &amp; 0 &amp; \\ldots &amp; l_B_r\\\\ \\endpmatrix^-1 = \\beginpmatrix \\frac1l_1 &amp; 0 &amp; \\ldots &amp; 0 \\\\ 0 &amp; \\frac1l_2 &amp; \\ldots &amp; 0\\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp;\\vdots\\\\ 0 &amp; 0 &amp; \\ldots &amp; \\frac1l_B_r\\\\ \\endpmatrix 分块 Softmax ：
对向量 X∈RBX\\in \\mathbbR^B ， softmax 计算公式为：
softmax(X):=f(x)l(x)m(x):=max⁡ixif(x):=[ex1−m(x)…exB−m(x)]l(x):=∑if(x)i \\beginalign \\mathrm softmax(X):&amp;= \\fracf(x)l(x) \\\\ \\\\ m(x): &amp;= \\max_i x_i\\\\ \\\\ f(x): &amp;=\\big [e^x_1-m(x) \\quad \\dots \\quad e^x_B-m(x)\\big]\\\\ \\\\ l(x): &amp;= \\sum_i f(x)_i \\\\ \\endalign 那么对 向量 X(1),X(2)∈RBX^(1), X^(2) \\in \\mathbbR^B ， 可以将 X=[X(1),X(2)]∈R2BX = [X^(1), X^(2)] \\in \\mathbbR^2B 的 softmax 计算拆解为：
softmax(X):=f(x)l(x)m(x):=m([x(1),x(2)])=max⁡(m(x(1)),m(x(2)))f(x):=[ex(1)−m(x)ex(2)−m(x)]=[em(x(1))−m(x)+x(1)−m(x(1))em(x(2))−m(x)+x(2)−m(x(2))]=[em(x(1))−m(x)f(x(1))em(x(2))−m(x)f(x(2))]l(x):=∑if(x)i=em(x(1))−m(x)l(x(1))+em(x(2))−m(x)l(x(2)) \\beginalign \\mathrmsoftmax(X) &amp;:= \\fracf(x)l(x) \\\\ \\\\ m(x) &amp;:= m([x^(1), x^(2)]) = \\max \\big(m(x^(1)), m(x^(2))) \\\\ \\\\ f(x) &amp;:= \\beginbmatrix e^x^(1) - m(x) &amp; e^x^(2) - m(x) \\endbmatrix \\\\ &amp;= \\beginbmatrix e^m(x^(1)) - m(x) + x^(1) - m(x^(1)) &amp; e^m(x^(2)) - m(x) + x^(2) - m(x^(2)) \\endbmatrix \\\\ &amp;= \\beginbmatrix e^m(x^(1)) - m(x) f(x^(1)) &amp; e^m(x^(2)) - m(x) f(x^(2)) \\endbmatrix \\\\ \\\\ l(x) &amp;:= \\sum_i f(x)_i \\\\ &amp;= e^m(x^(1)) - m(x) l(x^(1)) + e^m(x^(2)) - m(x) l(x^(2)) \\endalign Example1
x=[1,3,2,4]x=[1,3,2,4] x(1)=[1,3]x^(1)=[1,3] m(x(1))=3m(x^(1))=3 f(x(1))=[e−2,1]f(x^(1))=[e^-2,1] l(x(1))=(e−2+1)l(x^(1))=(e^-2+1) softmax(x(1))=f(x(1))l(x(1))=[e−2e−2+1,1e−2+1]\\mathrmsoftmax (x^(1)) = \\fracf(x^(1))l(x^(1))=[\\frace^-2e^-2+1, \\frac1e^-2+1] x(2)=[2,4]x^(2)=[2,4] m(x(2))=4m(x^(2))=4 f(x(2))=[e−2,1]f(x^(2))=[e^-2,1] l(x(2))=(e−2+1)l(x^(2))=(e^-2+1) softmax(x(2))=f(x(2))l(x(2))=[e−2e−2+1,1e−2+1]\\mathrmsoftmax (x^(2)) = \\fracf(x^(2))l(x^(2))=[\\frace^-2e^-2+1, \\frac1e^-2+1] 根据分块 softmax 的公式计算前两个块的结果：
m(x)=max⁡(m(x(1)),m(x(2)))=max⁡(3,4)=4m(x) = \\max(m(x^(1)),m(x^(2))) = \\max(3,4) = 4 f(x)=[e3−4f(x(1)),e4−4f(x(2))]=[e−3,e−1,e−2,1]f(x) =[e^3-4f(x^(1)) , e^4-4 f(x^(2))] =[e^-3,e^-1, e^-2, 1] l(x)=e3−4l(x(1))+e4−4l(x(2))=(e−3+e−2+e−1+1)l(x) =e^3-4 l(x^(1)) + e^4-4 l(x^(2))=(e^-3+e^-2+e^-1+1) softmax(x)=f(x)l(x)=[e−3e−3+e−2+e−1+1,e−1e−3+e−2+e−1+1,e−2e−3+e−2+e−1+1,1e−3+e−2+e−1+1]\\mathrmsoftmax (x) = \\fracf(x)l(x) = [\\frace^-3e^-3+e^-2+e^-1+1, \\frace^-1e^-3+e^-2+e^-1+1, \\frace^-2e^-3+e^-2+e^-1+1, \\frac1e^-3+e^-2+e^-1+1] 与直接计算 softmax(x)\\mathrmsoftmax (x) 的值一致
从上面简单的例子可以发现：
我们可以把一个很大的 xx 拆分成长度为 BB 的块， 用上面的算法先计算第 1 块和第 2 块，然后合并其结果；接着计算第 3 块，合并前 3 块结果 如果我们定义空块 x=[]x=[\\quad] 时 m(x)=−inf⁡m(x)=-\\inf , f(x)=[]f(x)=[\\quad] , l(x)=0l(x)=0 ，那么第一个块也可以看成它和空的合并，这样的话我们的代码的循环空从第一个块开始。 Example2
1 2 3 4 5 6 7 8 import torch from torch import softmax s = torch.tensor([0.1, 0.2, 0.3, 0.4]) v = torch.tensor([0.6, 0.7, 0.8, 0.9]) p = softmax(s, dim=-1) # tensor([0.2138, 0.2363, 0.2612, 0.2887]) print(torch.matmul(p, v)) # tensor(0.7625) 计算第一个 block 的值 1 2 3 4 5 6 s1 = torch.tensor([0.1, 0.2]) v1 = torch.tensor([0.6, 0.7]) p1 = torch.softmax(s1, dim=-1) # tensor([0.4750, 0.5250]) output1 = torch.matmul(p1, v1) # tensor(0.6525) sum_exp1 = sum(torch.exp(s1)) # tensor(2.3266) 同时我们将 [0.1,0.2][0.1, 0.2] 的 exponential summation (softmax 的分母) 2.32662.3266 存下来
计算第二个 block 的值 1 2 3 4 5 6 s2 = torch.tensor([0.3, 0.4]) v2 = torch.tensor([0.8, 0.9]) p2 = torch.softmax(s2, dim=-1) # tensor([0.4750, 0.5250]) output2 = torch.matmul(p2, v2) # tensor(0.8525) sum_exp2 = sum(torch.exp(s2)) # tensor(2.8417) 并且得到 [0.3,0.4][0.3, 0.4] 的 exponential summation ( softmax 的分母) 2.84172.8417 校准 1 output = (output1 * sum_exp1 + output2 * sum_exp2) / (sum_exp1 + sum_exp2) # tensor(0.7625) 我们可以把每个 block 的 output 和 expoential summation 相乘来还原出还没经过 normalization 的值，并且再将两者的 expoential summation 相加作为新的 softmax 分母，也就是 (0.6525∗2.3266+0.8525∗2.8417)/(2.3266+2.8417)=0.7625(0.6525*2.3266+0.8525*2.8417)/(2.3266+2.8417)= 0.7625 （实际会先减去 max value 来避免经过 exponential 后 overflow，这里为了简化就略过这个步骤了）
通过以上三个步骤发现，只需要额外多存下每个 sub block 的 exponential summation ，这使得我们可以从头到尾只将 sub-block 1 对应的 QQ 和 KK 从 HBM load 到 SRAM 一次便可以直接算出最后的 O，中间也完全不用再多存取任何东西。
尽管这样的方式不能让我们避免 O(N2)O(N^2) 的时间复杂度 ( 因为我们需要 for loop 将每个 QQ 和 KK 做内积)，但是这样切割成 sub-block 直接计算出结果，且 不用整个 row 一起存取 的方式可以让我们 将整个时间复杂度除以 M (sub-block 数量)，同时减少许多 O(N2)O(N^2) memory 存取的次数，可以达到非常显著的效果提升。
Recomputation 重计算 为了后向传递计算梯度，前向计算时通常需要将某些中间结果写回到 HBM 中，这会产生额外的 HBM 读写次数，减慢运行时间。因此，Flash Attention 没有为后向传递保存很大的中间结果矩阵。
标准注意力实现中, 后向传递计算 Q\\mathbf Q , K\\mathbf K , V\\mathbf V 的梯度时, 需要将 S\\mathbf S 和 P\\mathbf P 这两个 N×NN \\times N 的矩阵存入 HBM，并且在 backward 时再将他们两个从 HBM load 到 SRAM。
Flash attention 保存了两个统计量 m(x)\\mathbf m(x) ， l(x)\\mathbf l(x) ，后向传递时在 SRAM 上快速地重新计算 Attention, 通过分块的方式重新计算注意力矩阵 S\\mathbf S 和 P\\mathbf P 。相比于标准注意力中, 从 HBM 中读取很大的中间注意力矩阵的方法, 重计算的方法要快得多。
IO Complexity of FlashAttention 【Theorem 2】
假设序列长度为 NN ，head 的维度为 dd ，SRAM 的大小是 MM ，并且我们假设 d≤M≤Ndd\\le M \\le Nd 。标准的 Attention 算法需要 O(Nd+N2)O(Nd+N^2) 的 HBM 访问，而 FlashAttention 算法需要 O(N2d2)M)O(\\fracN^2d^2)M) 的 HBM 访问。
因为 dd ：64~128， MM ：100KB， 所以 d2≪Md^2 \\ll M ， 所以 FlashAttention 算法的复杂度远远小于标准 Attention 的复杂度
标准 Attention 实现的 IO 情况 从全局内存中读取矩阵 Q\\mathbf Q 和 K\\mathbf K ∈RN×d\\in \\mathbbR^N\\times d ，并将计算好的 矩阵 S\\mathbf S ∈RN×N\\in \\mathbbR^N\\times N 再写入 HBM
需要进行 O(Nd+N2)O(Nd + N^2) 次 HBM 访问
从 HBM 中获取 矩阵 S\\mathbf S ∈RN×N\\in \\mathbbR^N\\times N ，计算 Softmax 得到 矩阵 P\\mathbf P ∈RN×N\\in \\mathbbR^N\\times N ，再写入 HBM
需要进行 O(N2)O(N^2) 次 HBM 访问
从 HBM 中读取 矩阵 P\\mathbf P ∈RN×N\\in \\mathbbR^N\\times N 和 矩阵 V\\mathbf V ∈RN×d\\in \\mathbbR^N\\times d ，计算得到 矩阵 O\\mathbf O ∈RN×d\\in \\mathbbR^N\\times d , 将 O\\mathbf O 写入 HBM。
需要进行 O(Nd+N2)O(Nd + N^2) 次 HBM 访问
因此，标准 Attention 算法的总 HBM 访问次数为 O(N2)O(N^2) （通常情况下 N≫dN \\gg d (e.g., GPT2, 𝑁=1024𝑁 = 1024 , 𝑑=64𝑑 = 64 )）。
过程中存储 P\\mathbf P 和 S\\mathbf S 的理由：
需要这些 intermediate activations 来帮助 backward 的时候通过反向传播计算 gradients，这也使得我们很难将多个 operations fuse 成一个 operation。 由于 SRAM 本身不够大，而 softmax 这种需要计算 sum 的 operation，需要整个 row 的元素都到齐后才可以计算，使得我们没有办法应用一些分治的算法，更使得我们没有办法把所有运算一口气在 SRAM 当中计算完 FlashAttention 算法的 IO 情况 外层循环遍历 TcT_c 次， K\\mathbf K 和 V\\mathbf V 从 HBM 加载到 SRAM 一次， Q\\mathbf Q 和 O\\mathbf O 需要遍历 TcT_c 次。每次都完整的把它们加载一遍。
需要进行 O(Nd+NdTc)=O(NdTc)O(Nd + NdT_c) = O(NdT_c) 次 HBM 访问
需要将 Kj\\mathbf K_j ， Vj∈RBc×d\\mathbf V_j \\in \\mathbbR^B_c\\times d 放到 SRAM 里，因此
Bc×d=O(M)⇔Bc=O(Md) \\beginalign B_c \\times d = O(M) \\Leftrightarrow B_c = O(\\fracMd) \\endalign 需要将 Qi\\mathbf Q_i ， Oi∈RBr×d\\mathbf O_i \\in \\mathbbR^B_r\\times d 放到 SRAM 里，因此
Br×d=O(M)⇔Br=O(Md) \\beginalign B_r \\times d = O(M) \\Leftrightarrow B_r = O(\\fracMd) \\endalign 需要将 Sij∈RBr×Bc\\mathbf S_ij \\in R^B_r \\times B_c 放到 SRAM 里，因此
BrBc=O(M) \\beginalign B_rB_c = O(M) \\endalign 因此设置：
Bc=O(Md),Br=O(min⁡(Md,MBc))=O(min⁡(Md,d)) \\beginalign B_c &amp;= O(\\fracMd), \\\\ B_r &amp;= O\\bigg(\\min(\\fracMd, \\fracMB_c)\\bigg)= O\\bigg(\\min(\\fracMd , d)\\bigg) \\endalign 因此有：
Tc=NBc=O(NdM) \\beginalign T_c =\\fracNB_c= O(\\fracNdM) \\endalign 所以： O(NdTc)=O(N2d2)M)O(NdT_c)=O(\\fracN^2d^2)M) Reference FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness`}).add({id:2,tag:"en",href:"/blogs/lsh/",title:"LSH",description:"LSH (Locality-Sensitive Hashing, 局部敏感哈希) 算法",content:`在 Top N 推荐中，我们需要处理的是大量高维度的数据，如何快速地从大量的高维度数据集中找出与某条数据最为接近的一条或多条数据成为了难题。
如果只是一些小规模的低维度数据集，可以很容易地使用线性搜索来解决问题；但如果我们要在一个庞大的高维度数据集中使用线性搜索来进行匹配，则会消耗很多时间。
因此，需要采取一些类似于索引的技术来加速查询过程，这些技术通常被统称为 最近邻查找 (Nearest Neighbor, NN) ，而在处理大规模数据时，还可以考虑采用 近似最近邻查找 (Approximate Nearest Neighbor, ANN)。其中一种常用的方法就是局部敏感哈希 (Locality-Sensitive Hashing, LSH)。
Hash Hash一般翻译做 散列，就是把任意长度的输入（又叫做 预映射， pre-image），通过散列算法，变换成固定长度的输出，该输出就是散列值。
这种转换是一种压缩映射，散列值的空间通常远小于输入的空间，不同的输入可能会散列成相同的输出。
通俗的说 Hash就是找到一种数据内容和数据存放地址之间的映射关系（ f:key→addressf: \\mathrmkey \\rightarrow \\mathrmaddress ）。
LSH 传统的哈希表用于检索数据，无法将相似的数据放到同一个Bucket中，比如 h=xmod wh=x \\mod w ；
LSH将相邻的数据，通过映射后依然保持相邻的关系，即保持局部的敏感度Locality-Sensitive。
LSH通过哈希函数，将原始数据集划分为若干子集（Bucket），每个子集中包含的数据很可能彼此相邻，并且这些子集中的元素数量相对较小。这使得可以在一个小的集合中搜索临近的元素，从而实现快速最近邻查询。
Shingling: 将文档转化为集合形式(bool 值)
Min-Hashing: 将较大的数据集转化为相对更短的signatures，同时保证每对数据的相关性。
Locality-Sensitive Hashing
Step 1: Shingling 将文档转化为集合形式。
文档的 k-shingle（或 k-gram）是指文档中出现的一串长度为 kk 的 token序列
token可以是字符、词或者其他形式，这取决于应用的具体情况，例如可以假设： tokens=characters\\mathrmtokens = \\mathrmcharacters 为了压缩较长的 shingles，我们可以把他们 hash 成（例如）4bytes， 通过该文档所有 k-shingels 的哈希值集来表示这个文档。
Example:
k=2k=2 ;
Doc： D1=abcabD_1= \\mathrmabcab ;
2-shingles set of Doc D1:S(D1)=ab,bc,caD_1: S(D_1)= \\\\mathrmab, \\mathrmbc, \\mathrmca\\ Hash the shingles: h(D1)=1,5,7h(D_1) = \\1, 5, 7\\ k=8,9,10k = 8, 9, 10 is often used in practice
Shingles 的优势
类似的文档会有许多共有的 shingle（碎片） 改变一个词只会影响该词距离k-1以内的 k-gram 文档 DiD_i 被它自己的 k-grams 集合 Ci=S(Di)C_i = S(D_i) 所代表。
sim(D1,D2)=∣C1∩C2∣∣C1∪C2∣ \\mathrmsim(D_1, D_2) = \\frac|C_1 \\cap C_2||C_1 \\cup C_2| d(C1,C2)=1−∣C1∩C2∣∣C1∪C2∣ \\mathrmd(C_1, C_2) =1- \\frac|C_1 \\cap C_2||C_1 \\cup C_2| 用 0/1（bit, Boolean）向量来编码集合并生成相应的特征矩阵。
Rows : k-grams
Columns ： 文档集合，每一列代表一个文件
第 ee 行第 ss 列中 元素值为 11 当且仅当 k-gram ee 是 文档 ss 的一部分
列相似性是相应集合的 Jaccard 相似度（具有值 1 的行）
矩阵是稀疏的
Step 2: Min-Hashing 将较大的数据集转化为相对更短的 signatures，同时保证每对数据的相关性。
Key Idea:
将每一列 CC hash 至更短的 signature h(C)h(C) ，使得： sim(C1,C2)\\mathrmsim(C_1 ,C_2 ) 与 signatures h(C1)h(C_1) 和 h(C2)h(C_2) 的相似度一致
Goal:
找到一个散列函数 h(⋅)h(\\cdot) 使得：
如果 sim(C1,C2)\\mathrmsim(C_1 ,C_2 ) 很大，那么 h(C1)=h(C2)h(C_1 ) = h(C_2) 的概率很大 如果 sim(C1,C2)\\mathrmsim(C_1 ,C_2 ) 很小，那么 h(C1)=h(C2)h(C_1 ) = h(C_2) 的概率很小 Idea:
将文档hash进 buckets，期望“大部分”近似重复的文档被散列到相同的桶中。
Min-Hashing 使用某个变换 π\\pi 来变换 Boolean 矩阵的行。 对于该变换，定义min-hash 函数： hπ(C)h_\\pi(C) = 第 CC 列中值为 11 的第一个行号 （变换后的顺序）。 hπ(C)=min⁡ππ(C) h_\\pi(C) = \\min_\\pi \\pi(C) 将 hπh_\\pi 应用到每一列上，从而得到每列的一个signature（特征向量)。
将文档集合转化为 signature 矩阵 MM :
Columns ：文档集合
Rows ：对每一个变换 π\\pi 对应的最小化散列值
[Example]
[证明1]
选择一个随机排列 π\\pi , 证明 Pr[hπ(C1)=hπ(C2)]=sim(C1,C2)\\mathrmPr\\Big[h_\\pi(C_1) = h_\\pi (C_2)\\Big] = \\mathrmsim(C_1 , C_2 ) 。
令 XX 为 doc， z∈Xz \\in X 为 shingle， 则有： Pr[π(z)=min⁡(π(X))]=1∣X∣) \\beginalign \\mathrmPr\\Big[\\pi(z)= \\min(\\pi(X))\\Big] = \\frac1|X|) \\endalign 因为 ∀z∈X\\forall z \\in X 等可能地映射到最小值 min⁡\\min 令 y\\mathbf y 为 shingles 集合，使得 π(y):=min⁡(π(C1∪C2))\\pi(\\mathbf y) := \\min(\\pi(C_1\\cup C_2 )) , 则：
π(y)=min⁡(π(C1)),if y∈C1 (C2=∅)orπ(y)=min⁡(π(C2)),if y∈C2 (C1=∅) \\beginalign &amp;\\pi(\\mathbf y)=\\min(\\pi(C_1)) , \\quad \\textif $\\mathbf y \\in C_1$  \\quad(C_2 = \\emptyset )\\\\ \\textor \\quad &amp;\\pi(\\mathbf y)=\\min(\\pi(C_2)) ,\\quad \\textif $\\mathbf y \\in C_2$  \\quad (C_1 = \\emptyset ) \\endalign 那么
π(y)=min⁡(π(C1))=min⁡(π(C2))if y∈C1∩C2 \\pi(\\mathbf y)=\\min(\\pi(C_1))=\\min(\\pi(C_2)) \\quad \\textif $\\mathbf y \\in C_1 \\cap C_2$  所以
Pr[min⁡(π(C1))=min⁡(π(C2))]=∣C1∩C2∣∣C1∪C2∣=sim(C1,C2) \\beginalign \\mathrmPr\\Big[\\min(\\pi(C_1)) = \\min(\\pi (C_2))\\Big] = \\frac|C_1 \\cap C_2||C_1 \\cup C_2|= \\mathrmsim(C_1 , C_2 ) \\endalign [证明2]
对于 CiC_i , CjC_j 两列， 对应行有 33 种可能：
【Type A】两列的值都为 11 ，数量为 aa 【Type B】其中一列的值为 00 ，另一列的值为 11 , 数量为 bb 【Type C】两列的值都为 00 ，数量为 cc sim(C1,C2)=aa+b \\mathrmsim(C_1 , C_2 ) = \\fracaa+b 【Type C】对于结果计算没有影响，可以删除
又因为 hπ(C1)=hπ(C2)h_\\pi(C_1) = h_\\pi (C_2) 当且仅当 对应的行为【Type A】
Pr[hπ(C1)=hπ(C2)]=Pr[aa+b]=sim(C1,C2) \\mathrmPr\\Big[h_\\pi(C_1) = h_\\pi (C_2)\\Big] = \\mathrmPr\\Big[ \\fracaa+b\\Big] = \\mathrmsim(C_1 , C_2 ) 两个signature之间的相似度是它们的 min-hash function 中达成一致的比例，也即它们表示的列（或集合）的 Jaccard相似度。
1-3：
col/col: 34=0.75\\frac34 = 0.75 (input matrix)
sig/sig: 23=0.67\\frac23 = 0.67 (signature matrix)
执行技巧 对于每一列 cc 和 每一个hash函数 hih_i ，记录 M(i,c)M(i,c) , 初始化 M(i,c)=∞M(i, c) = \\infin 对行进行扫描，如果列 cc 在 第 jj 行存在 11 , 那么对每个 hih_i 如果 hi(j)&lt;M(i,c)h_i(j) &lt; M(i, c) , 则用 M(i,c)←hi(j)M(i, c) \\larr h_i (j) 。（即如果此时列 cc 上 第 ii 行的元素为1，通过 hih_i 得到最新的行号，而且新行号比原来记录的 MM 值小，那么更新M值。）
hash函数获取
ha,b(x)=((a⋅x+b)mod p)mod N h_a,b(x)=((a \\cdot x+b) \\mod p) \\mod N aa , bb ：随机整数 pp ：质数 ( p&gt;Np &gt; N ) Example
h1(x)=xmod 5h_1(x)= x \\mod 5 h2(x)=(2x+1)mod 5h_2(x)=(2x+1) \\mod 5 c1c_1 c2c_2 h1h_1 h2h_2 M(h1,c1)M(h_1,c_1) M(h2,c1)M(h_2,c_1) M(h1,c2)M(h_1,c_2) M(h2,c2)M(h_2,c_2) 1 0 h1(1)=1h_1(1) =1 h2(1)=3h_2(1) =3 1 3 ∞\\infin ∞\\infin 0 1 h1(2)=2h_1(2) =2 h2(2)=0h_2(2) =0 1 3 2 0 1 1 h1(3)=3h_1(3) =3 h2(3)=2h_2(3) =2 1 2 2 0 1 0 h1(4)=4h_1(4) =4 h2(4)=4h_2(4) =4 1 2 2 0 0 1 h1(5)=0h_1(5) =0 h2(5)=1h_2(5) =1 1 2 0 0 Step 3: Locality Sensitive Hashing Focus on pairs of signatures likely to be from similar documents
除了要解决 CiC_i 和 CjC_j 两两之间相似度的计算问题，当数据量大（&gt;100万）的时候，两两之间相似度计算次数为 cN2c^2_N ，计算量非常大。
为了解决这一问题，将可能相似的用户以较大概率分到同一个bucket内，这样，同一个bucket中的列，两两之间才进行相似度计算，而不是所有列两两之间进行相似度计算，大大降低计算复杂度。
hash 函数数目和 bucket数目的协调：
为了使每个bucket中的signatures数目相对较少，从而生成较少的候选pairs，我们需要调整 hash 函数和每个 hash 函数的 buckets 数目。
但是也不能使用太多的buckets，否则真正相似的pairs都不会被任意一个hash函数聚到同一个bucket中。
LSH具体做法 将 signature 矩阵 MM 按行划分为 bb bands，每个band宽度为 rr 行。
把每个band hash到一些bucket中（不同的band使用不同的hash函数，也就是对每个band我们都要创建一个hash函数）。
只要两个signatures在某个片断band上的 Min-Hash 相同，它们在整体上就有一定的概率相似，那么这两者就会hash到同一个桶而成为候选相似 项。 同一个bucket中的两列是局部相似的（因为只要某个band相似就会至少hash一次到同一个bucket中（局部敏感哈希）），所以同一个bucket中的任意两对都是候选对。 如果两个signatures大部分都是相同的，那么存在bands 100%相同就有很大的机会。而两列如果不相似，即很少有相同的片段，那他们被hash到同一个bucket中的概率就相当小，只要bucket的数量要足够多，两个不一样的bands就会被哈希到不同的bucket中。 LSH准确率分析 ss ： 22 个sets ( docs、columns、signatures) 的真实相似度 tt ：相似度阈值。 理想阶跃函数：
当两个 sets 相似度高时（ &gt;t&gt;t ），总是分到同一个bucket中， 当两个 sets 相似度低时（ &lt;t&lt;t ），总是不会分到同一个bucket中（分到同一bucket中的概率为0） 实际情况: 分析signature matrix 的单行（两列） 阈值为 tt 时的 FPFP 和 FNFN 。
FPFP ：相似度阈值 tt 小但是分到同一buckets中的概率 FNFN ：相似度阈值 tt 大但是未分到同一buckets中的概率 具体分析
假设对于某行，两列 C1C_1 , C2C_2 Signature值相同的概率为 tt （两列的相似度）
对于某个band（ rr 行）
其中所有行，值相同的概率为 trt^r 存在至少一行值不相同的概率为 1−tr1-t^r 对于 bb 个band，每个band 都至少存在一行值不相同的概率为 (1−tr)b(1-t^r)^b 。【 C1C_1 ， C2C_2 不会被分到同一个bucket】
对于 bb 个band，至少存在一个band值相同（即至少存在一组相似对）的概率为 1−(1−tr)b1- (1-t^r)^b 。【 C1C_1 ， C2C_2 会被分到至少同一个bucket】
FPFP 和 FNFN 的概率大小控制
signatures 长度固定 MM 时
bb 越大， (1−tr)b=(1−tMb)b(1-t^r)^b = (1-t^\\fracMb) ^b 越小。S曲线就越接近于阶跃函数（折线）。因此在min-hash阶段使用越多 hash 函数，可以使 LSH 阶段的错误更小一些。 rr 越大， (1−tr)b=(1−tr)Mr(1-t^r)^b = (1-t^r) ^\\fracMr 越大。S曲线就越接近于斜线。 bb 和 rr 固定时
1−(1−tr)b1-(1-t^r)^b （阈值 tt 下相似的列hash到至少同一个桶中的概率）的增长类似一个阶跃函数step function，当阈值在大概 t=(1b)1rt = (\\frac1b)^\\frac1r 这个位置时跳跃。
输入一个相似度 tt ，得到一个概率 pp （hash到同一个bucket中的概率）。当相似度变大时，其hash到同一个bucket中的概率也变大，反之相似度变小时，其hash到同一个bucket中的概率变小。
下表为 b=20b=20 , r=5r=5 时的概率表，从表中看出，0.4-0.6之间的跳跃最大，幅度超过0.6，threshold取值在这个范围内最优。
t 1−(1−tr)b1-(1-t^r)^b 0.2 0.0064 0.3 0.0475 0.4 0.1860 0.5 0.4701 0.6 0.8019 0.7 0.9748 0.8 0.9996 Example
假设 MM 有100000列（100k个文档），签名长度为100，查找相似度至少达到 0.80.8 的两篇文档。
b=20b=20 ， r=5r =5 ， sim(C1,C2)=0.8\\mathrmsim(C_1 , C_2 ) = 0.8 C1C_1 ， C2C_2 在某个band中值完全一致的概率为： (0.8)5=0.328(0.8)^5 = 0.328 C1C_1 ， C2C_2 在 bb 个band中均不存在值完全一致的概率为： (1−0.328)20=0.00035(1-0.328)^20 = 0.00035 因此，约有 0.035%0.035\\% 的 80%80\\% 相似度的文档对会被认为是不相关的（ FNFN ）， 我们将会找到 99.965%99.965\\% 真实为相似对的文档对。
b=20b=20 ， r=5r =5 ， sim(C1,C2)=0.3\\mathrmsim(C_1 , C_2 ) = 0.3 C1C_1 ， C2C_2 在某个band中值完全一致的概率为： (0.3)5=0.0024(0.3)^5 = 0.0024 C1C_1 ， C2C_2 在 bb 个band中均不存在值完全一致的概率为： (1−0.0024)20=0.9525(1-0.0024)^20 = 0.9525 C1C_1 ， C2C_2 在 bb 个band中至少存在一个值完全一致的概率为： 1−(1−0.0024)20=0.04741- (1-0.0024)^20 = 0.0474 因此，约有 4.74%4.74\\% 的 30%30\\% 相似度的文档对会被认为是相关的（ FPFP ）， 我们将会误把 4.74%4.74\\% 的不相关文档 当做相似文档对。
在LSH算法使用过程中，我们需要确定:
相似度阈值 tt ，相似用户的阈值定义（近邻定义）；
Signature向量的长度，降到 kk 维 embedding。
针对 bb 和 rr 的取值，我们需要考虑：
如果想要尽可能少的出现 FNFN ，需要选择 bb 和 rr 使得概率变化最陡的地方小于 tt （比如 tt 在 0.50.5 以上才属于相似用户，选择 bb 和 rr 使得S曲线的最陡处小于 0.50.5 ）；
如果想要保证计算速度较快，并且尽可能少出现 FNFN ，那么最好选择 bb 和 rr 使得概率变化最陡的地方较大（比如 b=20b=20 ， r=6r=6 ）这样， ss 较小的两个列就很难成为candidate列，但同时也会有一些“潜在”的相似用户不会被划分到同一个桶内。
Summary Summary Shingling:
将文档转换为集合表示， 使用 hash 函数给每一块 shingling 赋予一个唯一的标识符
Min-Hashing：特征降维
将文档集合表示转化为更短的signatures矩阵，同时保证其文档间的相似度不变。
使用保持相似性的 hash 函数来生成signatures矩阵，维持其特定性质
Pr[hπ(C1)=hπ(C2)]=sim(C1,C2) \\mathrmPr\\Big[h_\\pi(C_1) = h_\\pi (C_2)\\Big] = \\mathrmsim(C_1 , C_2) 使用 hash 函数取代生成随机变换
Locality-Sensitive Hashing：分桶（数据规模N的“降维”，减少查找范围）
关注可能是来自于相似文档的签名对，使用 hashing 找出相似度 ≥s\\ge s 的候选配对
LSH的一般定义 距离测度 Distance Measure
d(⋅)d(\\cdot) 是一个距离测度函数，如果它是来自将 pair 对 x,yx,y 指向实数的函数，满足：
𝑑(𝑥,𝑦)≥0𝑑( 𝑥, 𝑦) \\ge 0 𝑑(𝑥,𝑦)=0𝑑(𝑥, 𝑦) = 0 iff 𝑥=𝑦𝑥 = 𝑦 𝑑(𝑥,𝑦)=𝑑(𝑦,𝑥)𝑑(𝑥, 𝑦) = 𝑑(𝑦, 𝑥) 𝑑(x,y)≤𝑑(𝑥,𝑧)+𝑑(𝑧,𝑦)𝑑(x,y) \\le 𝑑(𝑥, 𝑧) + 𝑑(𝑧, 𝑦) ( triangle inequality ) 局部敏感族 Locality-Sensitive (LS) Families
hash 函数族 H\\mathcal H 被称为 (d1,d2,p1,p2)(d_1,d_2,p_1,p_2) -sensitive的函数簇，如果对任意 x,y∈Sx,y \\in S , hash 函数 h∈Hh \\in \\mathcal H ：
如果 d(x,y)≤d1d(x,y)\\leq d_1 ，则 h(x)=h(y)h(x) = h(y) 的概率至少为 p1p_1 ，即 Pr[h(x)=h(y)]≥p1\\mathrmPr\\big[h(x)=h(y)\\big] \\ge p_1 如果 d(x,y)≥d1d(x,y)\\geq d_1 ，则 h(x)=h(y)h(x) = h(y) 的概率至多为 p2p_2 ，即 Pr[h(x)=h(y)]≤p2\\mathrmPr\\big[h(x)=h(y)\\big] \\le p_2 其中 p1&gt;p2p_1&gt;p_2 ， d1&lt;d2d_1&lt;d_2 SS ：集合空间 dd ：Jaccard 距离 HH ：所有行变换的Min-hash 函数族 那么，对 ∀ h∈H\\forall \\ h \\in H ：
Pr[h(x)=h(y)]=1−d(x,y) \\mathrmPr\\Big[h(x) = h (y)\\Big] = 1-d(x,y) Jaccard 相似性对应的 LSH 为 MinHash 是 (d1,d2,1−d1,1−d2)(d_1,d_2,1-d_1,1-d_2) -sensitive 族，对任意 d1&lt;d2d_1&lt;d_2 。
对函数族 H\\mathcal H ， 构建包含来自 H\\mathcal H 的 rr 个函数组的新函数族 H′\\mathcal H&#x27; :
对于 h=[h1,⋯ ,hr]∈H′\\mathbf h = [h_1, \\cdots, h_r ] \\in \\mathcal H&#x27; ， 定义 h(x)=h(y)\\mathbf h(x) = \\mathbf h(y) 当且仅当 hi(x)=hi(y) ∀ i, 1≤i≤rh_i(x) = h_i(y) \\ \\forall \\ i, \\ 1\\le i \\le r （相当于band的长度 rr ）
【定理】
如果 H\\mathcal H 是 (d1,d2,p1,p2)(d_1,d_2,p_1,p_2) -sensitive 族，那么 H′\\mathcal H&#x27; 是 (d1,d2,(p1)r,(p2)r)(d_1,d_2,(p_1)^r,(p_2)^r) -sensitive 族
Reference https://web.stanford.edu/class/cs246/slides/03-lsh.pdf https://web.stanford.edu/class/cs246/slides/04-lsh_theory.pdf 推荐算法学习（十三）：LSH近似最近邻查找`}).add({id:3,tag:"en",href:"/blogs/pythontools/",title:"PythonTools",description:"多种 Python 工具包括其功能、使用方法和示例代码，涵盖了数据处理、界面构建、字符编码检测、终端文本美化等多个方面。",content:`Tools Docstring Parser docstring_parser
docstring_parser将 Python 文档字符串解析。目前支持 ReST、Google、Numpydoc 风格和 Epydoc 风格的文档字符串。
1 from docstring_parser import parse 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 docstring = parse( &#39;&#39;&#39; Short description Long description spanning multiple lines - First line - Second line - Third line :param name: description 1 :param int priority: description 2 :param str sender: description 3 :raises ValueError: if name is invalid &#39;&#39;&#39; ) 1 2 docstring.long_description # &#39;Long description spanning multiple lines\\n - First line\\n - Second line\\n - Third line&#39; 1 2 docstring.short_description # &#39;Short description&#39; 1 2 3 4 docstring.params # [&lt;docstring_parser.common.DocstringParam at 0x1a67269ea10&gt;, # &lt;docstring_parser.common.DocstringParam at 0x1a67269eb30&gt;, # &lt;docstring_parser.common.DocstringParam at 0x1a67269eb60&gt;] 1 2 3 4 5 6 7 vars(docstring.params[0]) # &#39;args&#39;: [&#39;param&#39;, &#39;name&#39;], # &#39;description&#39;: &#39;description 1&#39;, # &#39;arg_name&#39;: &#39;name&#39;, # &#39;type_name&#39;: None, # &#39;is_optional&#39;: None, # &#39;default&#39;: None 1 2 docstring.params[1].type_name # &#39;int&#39; Ftfy ftfy
ftfy: fixes text for you。ftfy修复了以各种方式破坏的Unicode。ftfy的目标是接收坏的Unicode并输出好的Unicode，以便在您的Unicode感知代码中使用.
1 import ftfy 1 2 3 # fix mojibake (encoding mix-ups), ftfy.fix_text(&#39;âœ” No problems&#39;) # &#39;✔ No problems&#39; 1 2 3 # 修复多层 mojibake ftfy.fix_text(&#39;The Mona Lisa doesnÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢t have eyebrows.&#39;) # &#34;The Mona Lisa doesn&#39;t have eyebrows.&#34; 1 2 ftfy.fix_text(&#39;ＬＯＵＤ　ＮＯＩＳＥＳ&#39;) # &#39;LOUD NOISES&#39; 1 2 ftfy.fix_text(&#34;&amp;macr;\\\\_(ã\\x83\\x84)_/&amp;macr;&#34;) # &#39;¯\\\\_(ツ)_/¯&#39; 1 2 ftfy.fix_text(&#34;(à¸‡&#39;âŒ£&#39;)à¸‡&#34;) # &#34;(ง&#39;⌣&#39;)ง&#34; Prettytable prettytable
prettytable 可以轻松地以视觉上吸引人的ASCII表格格式显示表格数据
1 2 3 4 5 6 7 8 9 10 from prettytable import PrettyTable table = PrettyTable() table.field_names = [&#34;City name&#34;, &#34;Area&#34;, &#34;Population&#34;, &#34;Annual Rainfall&#34;] table.add_rows( [ [&#34;Adelaide&#34;, 1295, 1158259, 600.5], [&#34;Brisbane&#34;, 5905, 1857594, 1146.4], ] ) 1 table City name Area Population Annual Rainfall Adelaide 1295 1158259 600.5 Brisbane 5905 1857594 1146.4 1 2 3 4 5 6 7 print(table.get_string()) # +-----------+------+------------+-----------------+ # | City name | Area | Population | Annual Rainfall | # +-----------+------+------------+-----------------+ # | Adelaide | 1295 | 1158259 | 600.5 | # | Brisbane | 5905 | 1857594 | 1146.4 | # +-----------+------+------------+-----------------+ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 print(table.get_json_string()) # [ # [ # &#34;City name&#34;, # &#34;Area&#34;, # &#34;Population&#34;, # &#34;Annual Rainfall&#34; # ], #  # &#34;Annual Rainfall&#34;: 600.5, # &#34;Area&#34;: 1295, # &#34;City name&#34;: &#34;Adelaide&#34;, # &#34;Population&#34;: 1158259 # , #  # &#34;Annual Rainfall&#34;: 1146.4, # &#34;Area&#34;: 5905, # &#34;City name&#34;: &#34;Brisbane&#34;, # &#34;Population&#34;: 1857594 #  # ] Box box
box 被设计成一个近乎透明的替换字典，它添加了点表示法访问和其他强大功能。
1 2 3 from box import Box movie_box = Box( &#34;Robin Hood: Men in Tights&#34;:  &#34;imdb stars&#34;: 6.7, &#34;length&#34;: 104  ) 1 2 movie_box.Robin_Hood_Men_in_Tights.imdb_stars # 6.7 1 2 3 4 # merge box_1 = Box(val=&#39;important_key&#39;: 1) box_2 = Box(val=&#39;less_important_key&#39;: 2) box_1.merge_update(box_2) 1 2 box_1 # Box(&#39;val&#39;: &#39;important_key&#39;: 1, &#39;less_important_key&#39;: 2) Fuzzy Finder fuzzyfinder
fuzzyfinder 模糊查找器。匹配字符串列表中的部分字符串条目。工作原理类似于SublimeText和Vim的Ctrl-P插件中的模糊查找器。
用户向它传递部分字符串和一系列可能的选择，然后，Fuzzy Finder 将会返回一个与部分字符串匹配的列表，这一列表是通过模糊算法根据相关性排序得出的。
1 from fuzzyfinder import fuzzyfinder 1 2 3 suggestions = fuzzyfinder(&#39;abc&#39;, [&#39;defabca&#39;, &#39;abcd&#39;, &#39;aagbec&#39;, &#39;xyz&#39;, &#39;qux&#39;]) list(suggestions) # [&#39;abcd&#39;, &#39;defabca&#39;, &#39;aagbec&#39;] 1 2 3 4 5 # 使用自定义函数获取要进行模糊匹配的字符串 collection = [&#39;aa bbb&#39;, &#39;aca xyz&#39;, &#39;qx ala&#39;, &#39;xza az&#39;, &#39;bc aa&#39;, &#39;xy abca&#39;] suggestions = fuzzyfinder(&#39;aa&#39;, collection, accessor=lambda x: x.split()[1]) list(suggestions) # [&#39;bc aa&#39;, &#39;qx ala&#39;, &#39;xy abca&#39;] Click click
Click是一个Python包，用于以可组合的方式使用尽可能少的代码创建漂亮的命令行界面。它是“命令行界面创建工具包”。它高度可配置，但带有开箱即用的合理默认值。
1 2 3 4 5 6 7 8 9 10 11 12 import click @click.command() @click.option(&#39;--count&#39;, default=1, help=&#39;Number of greetings.&#39;) @click.option(&#39;--name&#39;, prompt=&#39;Your name&#39;, help=&#39;The person to greet.&#39;) def hello(count, name): &#34;&#34;&#34;Simple program that greets NAME for a total of COUNT times.&#34;&#34;&#34; for x in range(count): click.echo(f&#34;Hello name!&#34;) if __name__ == &#39;__main__&#39;: hello() Python Prompt Toolkit prompt_toolkit
prompt_toolkit 是一个用于在Python中构建功能强大的交互式命令行和终端应用程序的库。它可以是GNU readline的一个非常高级的纯Python替代品，但它也可以用于构建全屏幕应用程序。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 import click from fuzzyfinder import fuzzyfinder from prompt_toolkit import prompt from prompt_toolkit.auto_suggest import AutoSuggestFromHistory from prompt_toolkit.completion import Completer, Completion, WordCompleter from prompt_toolkit.history import FileHistory SQLKeywords = [&#39;select&#39;, &#39;from&#39;, &#39;insert&#39;, &#39;update&#39;, &#39;delete&#39;, &#39;drop&#39;] class SQLCompleter(Completer): def get_completions(self, document, complete_event): word_before_cursor = document.get_word_before_cursor(WORD=True) matches = fuzzyfinder(word_before_cursor, SQLKeywords) for m in matches: yield Completion(m, start_position=-len(word_before_cursor)) while True: user_input = prompt( u&#39;&gt;&#39;, history=FileHistory(&#39;history.txt&#39;), # 命令历史 auto_suggest=AutoSuggestFromHistory(), # 自动推荐 completer=SQLCompleter(), # 自动补全 ) # 分页器 click.echo_via_pager(user_input) Pygments pygments
Pygments 是一个通用的语法高亮程序，适合在代码托管、论坛、wiki或其他需要美化源代码的应用程序中使用。亮点包括：
支持多种589种语言和其他文本格式
特别关注那些能够提高高亮显示效果的细节
容易地加入新的语言及文件类型的支持
大多数的语言都采用了简单基于正则表达式的方法来实现词法分析,可提供多种形式的输出，包括HTML、RTF、LaTeX以及ANSI序列
这个程序既可以用作命令行工具，又可以作为一个库来进行调用
1 2 3 4 5 6 7 8 9 from pygments import highlight from pygments.lexers import get_lexer_by_name from pygments.formatters import HtmlFormatter code = &#39;print(&#34;Hello World&#34;)&#39; lexer = get_lexer_by_name(&#34;python&#34;, stripall=True) formatter = HtmlFormatter(linenos=True, cssclass=&#34;source&#34;) result = highlight(code, lexer, formatter) print(result) 1print(&quot;Hello World&quot;) Questionary questionary
questionary 可以轻松构建漂亮的问卷命令行界面
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 import questionary questionary.text(&#34;What&#39;s your first name&#34;).ask() questionary.password(&#34;What&#39;s your secret?&#34;).ask() questionary.confirm(&#34;Are you amazed?&#34;).ask() questionary.select( &#34;What do you want to do?&#34;, choices=[&#34;Order a pizza&#34;, &#34;Make a reservation&#34;, &#34;Ask for opening hours&#34;], ).ask() questionary.rawselect( &#34;What do you want to do?&#34;, choices=[&#34;Order a pizza&#34;, &#34;Make a reservation&#34;, &#34;Ask for opening hours&#34;], ).ask() questionary.checkbox( &#34;Select toppings&#34;, choices=[&#34;foo&#34;, &#34;bar&#34;, &#34;bazz&#34;] ).ask() questionary.path(&#34;Path to the projects version file&#34;).ask() Chardet chardet
Chardet 通用字符编码检测器
1 2 3 4 5 6 import urllib.request import chardet rawdata = urllib.request.urlopen(&#39;http://yahoo.co&#39;).read() chardet.detect(rawdata) # &#39;encoding&#39;: &#39;utf-8&#39;, &#39;confidence&#39;: 0.99, &#39;language&#39;: &#39;&#39; Rich rich
Rich是一个Python库，用于向终端写入富文本（带有颜色和样式），以及显示表格、markdown和语法高亮代码等高级内容。
使用Rich可以使您的命令行应用程序在视觉上具有吸引力，并以更可读的方式呈现数据。通过漂亮的打印和语法突出显示数据结构，Rich也可以成为有用的调试辅助工具。
1 2 3 from rich import print print(&#34;[italic red]Hello[/italic red] World!&#34;) Hello World! 1 2 3 from rich.panel import Panel Panel.fit(&#34;[bold yellow]Hi, I&#39;m a Panel&#34;, border_style=&#34;red&#34;) ╭─────────────────╮ │ Hi, I'm a Panel │ ╰─────────────────╯ 1 2 3 4 5 from rich import print from rich.panel import Panel from rich.text import Text print( Panel(Text(&#34;Hello&#34;, justify=&#34;right&#34;))) ╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮ │ Hello │ ╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 MARKDOWN = &#34;&#34;&#34; # This is an h1 Rich can do a pretty *decent* job of rendering markdown. 1. This is a list item 2. This is another list item &#34;&#34;&#34; from rich.console import Console from rich.markdown import Markdown console = Console() md = Markdown(MARKDOWN) console.print(md) ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ ┃ This is an h1 ┃ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ Rich can do a pretty decent job of rendering markdown. 1 This is a list item 2 This is another list item 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 from rich.console import Console from rich.table import Table table = Table(title=&#34;Star Wars Movies&#34;) table.add_column(&#34;Released&#34;, justify=&#34;right&#34;, style=&#34;cyan&#34;, no_wrap=True) table.add_column(&#34;Title&#34;, style=&#34;magenta&#34;) table.add_column(&#34;Box Office&#34;, justify=&#34;right&#34;, style=&#34;green&#34;) table.add_row(&#34;Dec 20, 2019&#34;, &#34;Star Wars: The Rise of Skywalker&#34;, &#34;$952,110,690&#34;) table.add_row(&#34;May 25, 2018&#34;, &#34;Solo: A Star Wars Story&#34;, &#34;$393,151,347&#34;) table.add_row(&#34;Dec 15, 2017&#34;, &#34;Star Wars Ep. V111: The Last Jedi&#34;, &#34;$1,332,539,889&#34;) table.add_row(&#34;Dec 16, 2016&#34;, &#34;Rogue One: A Star Wars Story&#34;, &#34;$1,332,439,889&#34;) console = Console() console.print(table) Star Wars Movies ┏━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━┓ ┃ Released ┃ Title ┃ Box Office ┃ ┡━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━┩ │ Dec 20, 2019 │ Star Wars: The Rise of Skywalker │ $952,110,690 │ │ May 25, 2018 │ Solo: A Star Wars Story │ $393,151,347 │ │ Dec 15, 2017 │ Star Wars Ep. V111: The Last Jedi │ $1,332,539,889 │ │ Dec 16, 2016 │ Rogue One: A Star Wars Story │ $1,332,439,889 │ └──────────────┴───────────────────────────────────┴────────────────┘ 1 2 3 4 5 6 7 from rich.tree import Tree from rich import print tree = Tree(&#34;Rich Tree&#34;) tree.add(&#34;foo&#34;) tree.add(&#34;bar&#34;) print(tree) Rich Tree ├── foo └── bar Termcolor termcolor
1 2 3 import sys from termcolor import colored, cprint 1 2 3 4 # 红色背景字符不发光 text = colored(&#34;Hello, World!&#34;, &#34;red&#34;, attrs=[&#34;reverse&#34;, &#34;blink&#34;]) cprint(text) # [5m[7m[31mHello, World![0m[0m 1 2 3 # 红色背景上显示绿色字符 cprint(&#39;Hello, World!&#39;, &#39;green&#39;, &#39;on_red&#39;) # [41m[32mHello, World![0m 1 2 3 4 # 青蓝色背景上显示绿色字符 print_red_on_cyan = lambda x: cprint(x, &#39;red&#39;, &#39;on_cyan&#39;) print_red_on_cyan(&#39;Hello, World!&#39;) # [46m[31mHello, World![0m 1 2 3 for i in range(10): cprint(i, &#39;magenta&#39;, end=&#39; &#39;) # [35m0[0m [35m1[0m [35m2[0m [35m3[0m [35m4[0m [35m5[0m [35m6[0m [35m7[0m [35m8[0m [35m9[0m 1 2 3 # 红色字符加粗 cprint(&#34;Attention!&#34;, &#39;red&#39;, attrs=[&#39;bold&#39;], file=sys.stderr) # [1m[31mAttention![0m colorama colorama
colorama 使 ANSI 转义字符序列（用于生成彩色终端文本和光标定位）在MS Windows下工作。
ANSI转义字符序列表示法已在Unix和Mac上使用了很长时间来产生带颜色的终端文本和光标位置。Colorama使得这也在Windows上可行，它是通过包裹stdout，删除其中发现的所有ANSI序列（这些序列在输出中看起来像乱码），然后将其转化为相应的win32调用以更改终端状态的方式实现的。对于其它平台而言，Colorama则不会执行任何操作
这使得我们可以提供一种简单易用的跨平台API来实现Python程序中彩色终端文字的显示功能。同时，这个方法还有一个额外的好处就是那些已经在Linux或者Mac系统上通过ANSI序列来产生彩色输出的应用程序或库，在Windows平台上也能正常工作了。只需要调用colorama模块下的just_fix_windows_console函数（自v0.4.6版起支持），或者是init函数（适用于所有版本，但是可能会带来其他的副作用）。
Fore是针对字体颜色，Back是针对字体背景颜色，Style是针对字体格式
Fore: BLACK, RED, GREEN, YELLOW, BLUE, MAGENTA, CYAN, WHITE, RESET.
Back: BLACK, RED, GREEN, YELLOW, BLUE, MAGENTA, CYAN, WHITE, RESET.
Style: DIM, NORMAL, BRIGHT, RESET_ALL
1 from colorama import Fore, Back, Style, init 1 2 3 4 5 6 # 初始化，并且设置颜色设置自动恢复 # 如果未设置 autoreset=True，需要使用如下代码重置终端颜色为初始设置 # Fore.RESET # Back.RESET # Style.RESET_ALL init(autoreset=True) 1 2 f&#34;Fore.LIGHTGREEN_EXsome red text&#34; # &#39;\\x1b[92msome red text&#39; 1 2 f&#34;Back.GREENand with a green background&#34; # &#39;\\x1b[42mand with a green background&#39; 1 2 f&#34;Style.DIMand in dim text&#34; # &#39;\\x1b[2mand in dim text&#39;`}).add({id:4,tag:"en",href:"/blogs/python%E5%9F%BA%E7%A1%80/",title:"Python基础",description:"Python基础",content:`赋值、浅 copy、深 copy 赋值：相当于多贴了一个标签（引用），指向同一个对象，引用计数 +1。
浅拷贝：会开辟新的内存地址存储 被拷贝对象的外层对象，但是 不拷贝内层的对象，不能算一个完整的拷贝副本。
深拷贝：会开辟新的内存地址存储被拷贝对象的外层对象，同时 对于内层对象也会递归拷贝，即是一个完整的拷贝副本。
赋值 不可变对象被重新赋值，重新分配了一块内存，ID 就变了
1 2 3 4 5 6 7 a = 1 b = a print(id(a), id(b)) # 140729223153328 140729223153328 a = 2 print(a, b) # 2 1 print(id(a), id(b)) # 140729223153360 140729223153328 列表直接赋值给列表不属于拷贝, 只是内存地址的引用
1 2 3 4 5 list1 = [&#34;a&#34;, &#34;b&#34;, &#34;c&#34;] list2 = list1 list1.append(&#34;d&#34;) print(list1, list2) # [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;] [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;] print(id(list1), id(list2)) # 2212470388480 2212470388480 浅拷贝 浅拷贝, 只会拷贝第一层, 第二层的内容不会拷贝
list() 转换也是浅 copy
1 2 3 4 5 6 7 8 9 list1 = [&#34;a&#34;, &#34;b&#34;, &#34;c&#34;] list2 = list1.copy() # 转换也是浅copy list3 = list(list1) list1.append(&#34;d&#34;) print(list1, list2, list3) # [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;] [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;] [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;] print(id(list1), id(list2), id(list3)) # 2128034527104 2128034526144 2128033091072 1 2 3 4 5 6 7 8 9 10 list1 = [&#34;a&#34;, &#34;b&#34;, &#34;c&#34;, [1, 2, 3]] list2 = list1.copy() # 转换也是浅copy list3 = list(list1) list1[3].append(4) print(list1, list2, list3) # [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, [1, 2, 3, 4]] [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, [1, 2, 3, 4]] [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, [1, 2, 3, 4]] print(id(list1), id(list2), id(list3)) # 2111124370112 2111124370816 2111124369664 print(id(list1[3]), id(list2[3]), id(list3[3])) # 2111124400320 2111124400320 2111124400320 深拷贝 1 2 3 4 5 6 7 8 9 import copy list1 = [&#34;a&#34;, &#34;b&#34;, &#34;c&#34;, [1, 2, 3]] list2 = copy.deepcopy(list1) list1[3].append(4) print(list1, list2) # [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, [1, 2, 3, 4]] [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, [1, 2, 3]] print(id(list1), id(list2)) # 1394256181440 1394256181696 print(id(list1[3]), id(list2[3])) # 1394256180608 1394256115584 推导式生成对象 [item] * 3 的结果相当于 [item, item, item]，因为 item 指向的是一个可变对象(list)，所以我们用 * 做重复的时候，实际上得到的 items 的三个元素都是指向的同一个对象 [&quot;hello&quot;]
1 2 3 4 5 6 7 item = [&#34;hello&#34;] items = [item] * 3 print(items) # [[&#39;hello&#39;], [&#39;hello&#39;], [&#39;hello&#39;]] items[0][0] = &#34;world&#34; print(items) # [[&#39;world&#39;], [&#39;world&#39;], [&#39;world&#39;]] 1 2 3 4 5 items = [[&#39;hello&#39;] for _ in range(3)] print(id(items[0]), id(items[1]), id(items[2])) # 1618997298624 1618997299584 1618997299456 items[0][0] = &#34;world&#34; print(items) # [[&#39;world&#39;], [&#39;hello&#39;], [&#39;hello&#39;]] lambda 测试
1 2 3 4 5 6 def multipliers(): return [lambda x: i * x for i in range(4)] print([m(2) for m in multipliers()]) # [6, 6, 6, 6] 1 2 3 4 5 6 7 def multipliers(): # 添加了一个默认参数i=i return [lambda x, i=i: i * x for i in range(4)] print([m(2) for m in multipliers()]) # [0, 2, 4, 6] 1 2 3 4 5 6 def multipliers(): return (lambda x: i * x for i in range(4)) print([m(2) for m in multipliers()]) # [0, 2, 4, 6] 变量及作用域 全局变量 1 2 3 4 5 6 7 8 9 10 g1 = 1 g2 = [] def f(): g1 = 2 g2.append(1) f() print(g1) # 1 print(g2) # [1] g1: 因为是数值，f 中直接就重新定义了； g2: 因为是列表，f 中是修改，而不是重新定义，所以是对全局变量的修改；如果这里重新定义，再修改，就是对局部变量的修改了，不会影响全局变量； 在 python 的函数内，可以直接引用外部变量，但不能改写外部变量。
可以使用 nonlocal 和 global 来实现，nonlocal 与 global 的区别在于 nonlocal 语句会去搜寻本地变量与全局变量之间的变量，其会优先寻找层级关系与闭包作用域最近的外部变量。
Example
a = 1 不在 globals 作用域，因此在 func2 中只能用 nonlocal 定义后才能修改。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 a = 0 def func1(): a = 1 def func2(): a = 2 print(&#39;closure a: &#39;, a) print(f&#39;func1_a: a&#39;) func2() print(f&#39;after func2, func1_a: a&#39;) func1() print(f&#39;global a: a&#39;) 1 2 3 4 # func1_a:1 # closure a: 2 # after func2, func1_a:1 # global a:0 a = 1 不在 globals 作用域，因此在 func2 中只能用 nonlocal 定义后才能修改。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 a = 0 def func1(): a = 1 def func2(): nonlocal a a = 2 print(&#39;closure a: &#39;, a) print(f&#39;func1_a: a&#39;) func2() print(f&#39;after func2, func1_a: a&#39;) func1() print(f&#39;global a: a&#39;) 1 2 3 4 # func1_a: 1 # closure a: 2 # after func2, func1_a: 2 # global a: 0 a = 1 不在 globals 作用域，因此在 func2 中只能用 nonlocal 定义后才能修改。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 a = 0 def func1(): a = 1 def func2(): global a a = 2 print(&#39;closure a: &#39;, a) print(f&#39;func1_a: a&#39;) func2() print(f&#39;after func2, func1_a: a&#39;) func1() print(f&#39;global a: a&#39;) 1 2 3 4 # func1_a: 1 # closure a: 2 # after func2, func1_a: 1 # global a: 2 闭包 nonclosure 一个闭包就是你调用了一个函数 A，这个函数 A 返回了一个函数 B 给你。这个返回的函数 B 就叫做闭包。你在调用函数 A 的时候传递的参数就是 自由变量。
1 2 3 4 5 6 7 def func(name): def inner_func(age): print(&#39;name:&#39;, name, &#39;age:&#39;, age) return inner_func bb = func(&#39;aa&#39;) bb(26) 1 # name: aa age: 26 这里面调用 func 的时候就产生了一个 闭包——inner_func, 并且该闭包持有 自由变量——name，因此这也意味着，当函数 func 的生命周期结束之后，name 这个变量依然存在，因为它被闭包引用了，所以不会被回收。
闭包的作用
闭包的最大特点是 可以将父函数的变量与内部函数绑定，并返回绑定变量后的函数（也即闭包），此时即便生成闭包的环境（父函数）已经释放，闭包仍然存在，这个过程很像类（父函数）生成实例（闭包），不同的是父函数只在调用时执行，执行完毕后其环境就会释放，而类则在文件执行时创建，一般程序执行完毕后作用域才释放。
因此对一些需要重用的功能且不足以定义为类的行为，使用闭包会比使用类占用更少的资源，且更轻巧灵活。
Example：
假设我们仅仅想打印出各类动物的叫声，分别以类和闭包来实现：
1 2 3 4 5 6 7 8 9 def animal_voice(animal): def sound(voice): print(animal, &#34;:&#34;, voice, &#34;...&#34;) return sound dog = animal_voice(&#34;dog&#34;) dog(&#34;wangwang&#34;) # dog : wangwang ... dog(&#34;wowo&#34;) # dog : wowo ... 1 2 3 4 5 6 7 8 9 10 11 class Animal: def __init__(self, animal): self.animal = animal def sound(self, voice): print(self.animal, &#34;:&#34;, voice, &#34;...&#34;) dog = Animal(&#39;dog&#39;) dog.sound(&#34;wangwang&#34;) # dog : wangwang ... dog.sound(&#34;wowo&#34;) # dog : wowo ... 1 2 print(id(Animal.sound)) # 2165033261520 print(id(dog.sound)) # 2165026975808 可以看到输出结果完全一样，但显然类的实现相对繁琐，且这里只是想输出一下动物的叫声，定义一个 Animal 类未免小题大做，而且 voice 函数在执行完毕后，其作用域就已经释放，但 Animal 类及其实例 dog 的相应属性却一直贮存在内存中。而这种占用对于实现该功能后，则是没有必要的。
除此之外，闭包还有很多其他功能，比如用于封装等，另外，闭包有效的减少了函数参数的数目，这对并行计算非常有价值，比如可以让每台电脑负责一个函数，然后串起来，实现流水化的作业等。
Example
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 def makebold(fn): def wrapped(): return &#34;&lt;b&gt;&#34; + fn + &#34;&lt;b&gt;&#34; return wrapped def makeitalic(fn): def wrapped(): return &#34;&lt;i&gt;&#34; + fn + &#34;&lt;i&gt;&#34; return wrapped def hello(): return &#34;hello world&#34; hello = makeitalic(hello()) hello = makebold(hello()) print(hello()) # &lt;b&gt;&lt;i&gt;hello world&lt;i&gt;&lt;b&gt; 装饰器 装饰器（decorators） 是 Python 中的一种高级功能，它允许你 动态地修改函数或类的行为。
装饰器是一种函数，它接受 一个函数作为参数，并 返回一个新的函数或修改原来的函数。
装饰器的语法使用 @decorator_name 来应用在函数或方法上
Python 装饰器允许在不修改原有函数代码的基础上，动态地增加或修改函数的功能，装饰器本质上是一个 接收函数作为输入 并 返回一个新的包装过后的函数 的对象。
装饰器的应用场景：
日志记录: 装饰器可用于记录函数的调用信息、参数和返回值。 性能分析: 可以使用装饰器来测量函数的执行时间。 权限控制: 装饰器可用于限制对某些函数的访问权限。 缓存: 装饰器可用于实现函数结果的缓存，以提高性能。 Example 1
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 def outer(f): def inner(*args, **kargs): inner.co += 1 return f(*args, **kargs) inner.co = 0 return inner @outer def f(): pass f() f() f() print(f.co) 1 # 3 Example 2
1 2 3 4 5 6 7 8 9 10 11 12 def wrapFun(func): def inner(a, b): print(&#39;function name:&#39;, func.__name__) r = func(a, b) return r return inner @wrapFun def myadd(a, b): return a + b print(myadd(2, 3)) 1 2 # function name: myadd # 5 多个装饰器装饰一个函数类似 stack
多个装饰器装饰一个函数时，执行时的顺序是：最先装饰的装饰器，最后一个执行。它遵循了 先进后出规则 类似于 stack
Example 3
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 def set_fun1(func): # 打印用于验证在多个装饰器的情况下，多个装饰器之间的执行顺序 print(&#34;set_fun1已被定义&#34;) def call_fun1(*args, **kwargs): # 当被装饰函数执行时，会打印 print(&#34;call_fun1执行了&#34;) return func() return call_fun1 def set_fun2(func): print(&#34;set_fun2已被定义&#34;) def call_fun2(*args, **kwargs): print(&#34;call_fun2执行了&#34;) return func() return call_fun2 # 装饰函数 @set_fun2 @set_fun1 def test(): print(&#34;--------------&#34;) test() 1 2 3 4 5 # set_fun1已被定义 # set_fun2已被定义 # call_fun2执行了 # call_fun1执行了 # -------------- 迭代对象，迭代器，生成器 若对象中实现了 __getitem__ 或者 __iter__ 方法，那么这个对象就是 可迭代对象
若对象中实现了 __next__ 和 __iter__ 方法，那么这个对象就是 迭代器
可迭代对象的背后其实是迭代器在起作用
使用了 yield 的函数被称为 生成器（generator）
yield 是一个关键字，用于定义生成器函数，生成器函数是一种特殊的函数，可以在迭代过程中逐步产生值，而不是一次性返回所有结果。生成器是一个返回迭代器的函数，只能用于迭代操作，更简单点理解生成器就是一个迭代器。
当在生成器函数中使用 yield 语句时，函数的执行将会暂停，并将 yield 后面的表达式作为当前迭代的值返回。
然后，每次调用生成器的 next() 方法或使用 for 循环进行迭代时，函数会从上次暂停的地方继续执行，直到再次遇到 yield 语句。这样，生成器函数可以逐步产生值，而不需要一次性计算并返回所有结果。
调用一个生成器函数，返回的是一个 迭代器对象。可以说所有生成器对象都是迭代器对象，有一点细微的区别：
生成器对象更倾向于在无限中集合中惰性的输出需要的数据 迭代器更倾向于在实现已知道所有数据的情况下惰性输出需要的数据 恰当的例子就是斐波那契数列，可以用生成器实现一个斐波那契数列，但因为该数列的元素是无限多个，所以说其是迭代器实现的就没有说由生成器实现的说法恰当。
判断对象是否是可迭代对象的方法
方法一：
1 print(&#39;__iter__&#39; in dir([1, 2, 3])) # True 方法二：
1 2 3 from collections.abc import Iterable print(isinstance(&#39;123&#39;, Iterable)) # True 1 2 3 4 5 6 7 8 9 arr = [1, 2, 3] arr_iter = arr.__iter__() print(arr_iter.__next__()) # 1 # arr是可迭代对象, 不是迭代器 print(&#39;__next__&#39; in dir(arr)) # False # arr_iter是迭代器 print(&#39;__next__&#39; in dir(arr_iter)) # True 1. __iter__()
该方法返回的是当前对象的 迭代器类的实例。因为可迭代对象与迭代器都要实现这个方法，因此有以下两种写法。
用于可迭代对象类的写法，返回该可迭代对象的迭代器类的实例。 用于迭代器类的写法，直接返回 self（即自己本身），表示自身即是自己的迭代器。 2. __next__ ()
返回迭代的每一步，实现该方法时注意要最后超出边界要抛出 StopIteration 异常。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 def __init__(self, start, end): self.start = start self.end = end def __iter__(self): return self def __next__(self): if self.start &lt; self.end: self.start += 1 return self.start - 1 else: raise StopIteration for i in MyRange(1, 3): print(i) # 1 2 for i in range(1, 3): print(i) # 1 2 3. iter(source, sentinel=None)
1 2 3 4 5 6 7 8 9 10 def iter(source, sentinel=None): # known special case of iter &#34;&#34;&#34; iter(iterable) -&gt; iterator iter(callable, sentinel) -&gt; iterator Get an iterator from an object. In the first form, the argument must supply its own iterator, or be a sequence. In the second form, the callable is called until it returns the sentinel. &#34;&#34;&#34; pass Example 1:
1 2 3 4 5 6 7 it = iter([1, 2, 3, 4, 5]) def func(): return next(it) for j in iter(func, 4): print(j) 1 2 3 # 1 # 2 # 3 Example 2:
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 class Next: def __init__(self): self.data = [0, 1, 2, 3, 4] self._iter = iter(self.data) def get_len(self): return len(self.data) def __iter__(self): print(&#39;iter&#39;) return self def __call__(self): print(&#34;call&#34;) return next(self._iter) def __next__(self): print(&#39;i am next&#39;) return next(self._iter) 这里 Next() 是初始化创建一个实例，该实例可以被调用，也就是 Next()() 时会调用 Next().__call__()。
而 iter 对象的第一个参数如果是 可调用对象 时，会一直调用该对象 直到与第二个参数相同 或者 raise StopIteration
而每次执行 __call__ 时，会对 self._iter 迭代一次。这里 __next__ 和 __iter__ 没有执行。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 for it in iter(Next(), 6): print(it) # call # 0 # call # 1 # call # 2 # call # 3 # call # 4 # call 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 iter_next = iter(Next()) print(&#34;===================&#34;) for it in iter_next: print(it) # iter # =================== # iter # i am next # 0 # i am next # 1 # i am next # 2 # i am next # 3 # i am next # 4 # i am next 异常捕获 try/except
try 语句按照如下方式工作:
执行 try 子句（在关键字 try 和关键字 except 之间的语句）。
如果没有异常发生，忽略 except 子句，try 子句执行后结束。
如果在执行 try 子句的过程中发生了异常，那么 try 子句余下的部分将被忽略。
如果异常的类型和 except 之后的名称相符，那么对应的 except 子句将被执行。一个 try 语句可能包含多个 except 子句，分别来处理不同的特定的异常。最多只有一个分支会被执行。
except 只有第一个捕获的会执行。
一个 except 子句可以同时处理多个异常，这些异常将被放在一个括号里成为一个元组：
except (ValueError,IndexError) as e:
如果一个异常没有与任何的 except 匹配，那么这个异常将会传递给上层的 try 中。
Except 多个异常
1 2 3 4 5 6 7 8 9 10 11 class AException(Exception): def __str__(self): return &#34;A Exception&#34; class BException(AException): def __str__(self): return &#34;B Exception&#34; class CException(AException, BException): pass Example 1
1 2 3 4 5 6 7 8 try: try: raise BException except AException: raise except Exception as exc: print(&#34;Raise exception&#34;) print(str(exc)) 1 2 # Raise exception # B Exception Example 2
1 2 3 4 5 6 7 8 try: try: raise BException except AException: raise AException except Exception as exc: print(&#34;Raise exception&#34;) print(str(exc)) 1 2 # Raise exception # A Exception Example 3
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 try: exc_massage = [] try: raise CException except AException as exc: exc_massage.append(&#34;AException&#34;) raise exc except BException as exc: exc_massage.append(&#34;BException&#34;) raise exc except CException as exc: exc_massage.append(&#34;CException&#34;) raise exc except CException: print(exc_massage) print(&#34;C Exception&#34;) except AException as e: print(&#34;A Exception&#34;) except BException: print(&#34;B Exception&#34;) 1 2 # [&#39;AException&#39;] # C Exception try/except&hellip;else
try/except 语句还有一个可选的 else 子句，如果使用这个子句，那么必须放在所有的 except 子句之后。
else 子句将在 try 子句没有发生任何异常的时候执行。
使用 else 子句比把所有的语句都放在 try 子句里面要好，这样可以避免一些意想不到，而 except 又无法捕获的异常。
1 2 3 4 5 6 7 8 9 try: try: x = 1 / 0 except TypeError: print(&#34;TypeError&#34;) else: print(&#34;Else&#34;) except Exception as e: print(e) 1 # division by zero try/except&hellip;else&hellip;finally
finally 语句无论异常是否发生都会执行
Example 1
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 def test(): try: print(&#39;try&#39;) a = 1 / 0 print(&#39;try&#39;) return 0 except: print(&#39;except&#39;) return 1 else: print(&#34;else&#34;) return 2 finally: print(&#39;finally&#39;) print(test()) # try # except # finally # 1 Example 2
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 def test(): try: print(&#39;try&#39;) a = 5.0 / 0.0 print(&#39;try&#39;) return 0 except: print(&#39;except&#39;) return 1 else: print(&#34;else&#34;) return 2 finally: print(&#39;finally&#39;) return 3 print(test()) # try # except # finally # 3 Example 3
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 def test(): try: print(&#39;try&#39;) a = 1 / 1 print(&#39;try&#39;) return 0 except: print(&#39;except&#39;) return 1 else: print(&#34;else&#34;) return 2 finally: print(&#39;finally&#39;) return 3 print(test()) # try # try # finally # 3 Example 4
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 def test(): try: print(&#39;try&#39;) a = 1 / 1 print(&#39;try&#39;) except: print(&#39;except&#39;) return 1 else: print(&#34;else&#34;) return 2 finally: print(&#39;finally&#39;) return 3 print(test()) # try # try # else # finally # 3 类 python 的类变量和 C++的静态变量不同，并不是由类的所有对象共享。
类本身拥有自己的类变量（保存在内存），当一个 TestClass 类的对象被构造时，会将当前类变量拷贝一份给这个对象，当前类变量的值是多少，这个对象拷贝得到的类变量的值就是多少；而且，通过对象来修改类变量，并不会影响其他对象的类变量的值，因为大家都有各自的副本，更不会影响类本身所拥有的那个类变量的值；只有类自己才能改变类本身拥有的类变量的值。
对于 类数据属性 和 实例数据属性，可以总结为：
类数据属性 属于类本身，可以通过 类名 进行访问/修改 类数据属性也可以被类的所有实例访问/修改 在类定义之后，可以通过类名动态添加类数据属性，新增的类属性也被类和所有实例共有 实例数据属性 只能通过实例访问 在实例生成后，还可以动态添加实例数据属性，但是这些实例数据属性只属于该实例 1 2 3 4 5 6 7 8 9 10 11 12 class TestClass(object): # 类变量 val1 = 100 def __init__(self): # 成员变量 self.val2 = 200 def fcn(self, val=400): val3 = 300 self.val4 = val self.val5 = 500 1 2 3 4 5 6 7 8 9 inst = TestClass() print(TestClass.val1) # 100 print(inst.val1) # 100 print(inst.val2) # 200 print(inst.val3) # &#39;TestClass&#39; object has no attribute &#39;val3&#39; print(inst.val4) # &#39;TestClass&#39; object has no attribute &#39;val4&#39; print(inst.val5) # &#39;TestClass&#39; object has no attribute &#39;val5&#39; 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 inst1 = TestClass() inst2 = TestClass() print(inst1.val1) # 100 inst1.val1 = 1000 print(inst1.val1) # 1000 print(TestClass.val1) # 100 print(inst2.val1) # 100 TestClass.val1 = 2000 print(TestClass.val1) # 2000 print(inst1.val1) # 1000 被重新赋值后，就跟类变量没关系了 print(inst2.val1) # 2000 没有重新赋值，跟类变量保存一致 inst3 = TestClass() print(inst3.val1) # 2000 不可变对象与可变对象
python 内置的一些类型中
可变对象：list dict set
不可变对象：tuple string int float bool
Python 中万物皆对象，每个对象包含 3 个属性，id，type，value
id ：对象地址，可以通过内置函数 id() 查看对象引用的地址。
type ：对象类型，可以通过内置函数 type() 查看对象的类型。
value ：对象的值
is 和 ==
is 比较的是 id 是不是一样 == 比较的是值是不是一样。 1 2 3 4 5 6 7 8 9 10 a = 1 b = a c = 1 d = 1.0 print(id(a)) # 140729241962160 print(id(b)) # 140729241962160 print(id(c)) # 140729241962160 print(id(d)) # 2070028299024 print(a is d) # False print(a == d) # True 判断 a is d 的时候，实际上比较的是 id(d)==id(d)，结果为 False。 判断 a==d 的时候，实际上比较的是 id(a) 这个地址指向的值是不是和 id(d) 这个地址指向值一样。结果为 True。 python 为了实现对内存的有效利用，对小整数 [-5,256] 内的整数会进行缓存，不在该范围内的则不会缓存。
注意在 python 交互式界面有内存池缓存机制，只适用于-5~256，在 python 脚本编程中则没有这个限制:
1 2 3 4 5 6 7 a = 255 b = 255 print(a is b) # True c = 257 d = 257 print(c is d) # True Python console：
1 2 3 4 5 6 7 8 a = 255 b = 255 id(a) Out[10]: 2922684620976 id(b) Out[11]: 2922684620976 a is b Out[4]: True 1 2 3 4 5 6 7 8 c = 257 d = 257 id(c) Out[8]: 2920614082448 id(d) Out[9]: 2920614081904 c is d Out[7]: False 类属性 1 2 3 4 5 6 7 8 9 10 11 class Person(object): tall = 180 hobbies = [] def __init__(self, name, age, weight): self.name = name self.age = age self.weight = weight def inform(self): print(&#39;%s is %s weights %s&#39; % (self.name, self.age, self.weight)) 特殊的类属性：对于所有的类，都有一组特殊的属性
__name__：类的名字（字符串）
__doc__ ：类的文档字符串
__bases__：类的所有父类组成的元组
__dict__：类的属性组成的字典
__module__：类所属的模块
__class__：类对象的类型
1 2 3 4 5 6 print(Person.__name__) # Person print(Person.__doc__) # None print(Person.__bases__) # (&lt;class &#39;object&#39;&gt;,) print(Person.__dir__) # &lt;method &#39;__dir__&#39; of &#39;object&#39; objects&gt; print(Person.__module__) # __main__ print(Person.__class__) # &lt;class &#39;type&#39;&gt; __dict__ 与 dir() 区别
__dict__ 属性： 类的 __dict__ 存储 所有实例共享的变量和函数(类属性，方法等)，类的 __dict__ 并 不包含其父类的属性。 实例的 __dict__ 属性 仅仅是那个实例的 实例属性的集合，并不包含该实例的所有有效属性，正是因为实例的 __dict__ 属性，每个实例的实例属性才会互不影响。 python 一切皆对象，并不是所有对象都拥有 __dict__ 属性。许多内建类型就没有 __dict__ 属性，如 list，此时就需要用 dir() 来列出对象的所有属性。 dir() 函数： dir() 是 Python 提供的一个 API 函数，dir() 函数会自动寻找一个对象的所有属性(包括从父类中继承的属性)。 所以如果想获取一个对象所有有效属性，应使用 dir()。 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 # 类数据属性属于类本身，可以通过类名进行访问/修改，此处添加&#34;football&#34;、&#34;woman&#34;两个 Person.hobbies.extend([&#34;football&#34;, &#34;woman&#34;]) print(Person.hobbies) # [&#39;football&#39;, &#39;woman&#39;] # 在类定义之后，可以通过类名动态添加类数据属性，新增的类属性也被类和所有实例共有 Person.hobbies2 = [&#34;reading&#34;, &#34;jogging&#34;, &#34;swimming&#34;] print(Person.hobbies2) # [&#39;reading&#39;, &#39;jogging&#39;, &#39;swimming&#39;] # 实例数据属性只能通过实例访问 Bruce = Person(&#34;Bruce&#34;, 25, 60) print(f&#34;Bruce.name is Bruce.age years old&#34;) # Bruce is 25 years old # 在实例生成后，还可以动态添加实例数据属性，但是这些实例数据属性只属于该实例 Bruce.gender = &#34;male&#34; print(&#34;Bruce.name is Bruce.gender&#34;) # Bruce is male # class instance can access class attribute Bruce.hobbies.append(&#34;C#&#34;) print(Bruce.hobbies) # [&#39;football&#39;, &#39;woman&#39;, &#39;C#&#39;] print(Bruce.hobbies2) # [&#39;reading&#39;, &#39;jogging&#39;, &#39;swimming&#39;] 类数据属性属于类本身，被所有该类的实例共享并且，通过实例可以去访问/修改类属性。但是，在通过实例中访问类属性的时候一定要谨慎，因为可能出现 属性 &ldquo;隐藏&rdquo; 的情况
对于 不可变类型 的类属性，隐藏属性 可以总结为：
对于 不可变类型 的类属性 person.tall，可以通过实例 Bruce 进行访问，并且 &ldquo;person.tall is Bruce.tall&rdquo; 当通过实例赋值/修改 tall 属性的时候，将为实例 Bruce 新建一个 tall 实例属性，这时，“person.tall is not Bruce.tall” 当通过 &ldquo;del Bruce.tall&rdquo; 语句删除实例的 tall 属性后，再次成为 &ldquo;person.tall is Bruce.tall&rdquo; 1 2 3 4 5 6 7 8 9 10 11 12 # 对于不可变类型的类属性person.tall，可以通过实例Bruce进行访问 print(Person.tall is Bruce.tall) # True # 重新赋值或者修改 Bruce.tall = 185 print(Bruce.tall) # 185 print(Person.tall is Bruce.tall) # False # 再次删除实例的赋值 del Bruce.tall print(Bruce.tall) # 180 print(Person.tall is Bruce.tall) # True 对于 可变类型 的类属性，隐藏属性 可以总结为：
同样对于 可变类型 的类属性 person.hobbies，可以通过实例 Bruce 进行访问，并且 &ldquo;person.hobbies is Bruce hobbies&rdquo; 当通过实例赋值 hobbies 属性的时候，都将为实例 Bruce 新建一个 hobbies 实例属性，这时，“person.hobbies is not Bruce hobbies” 当通过 &ldquo;del Bruce. hobbies&rdquo; 语句删除实例的 hobbies 属性后，再次成为 &ldquo;person. hobbies is Bruce hobbies&rdquo; 当通过实例修改 hobbies 属性的时候，将修改 Bruce. hobbies 指向的内存地址（即 person.hobbies），此时，“person.hobbies is Bruce. hobbies” 1 2 3 4 5 6 7 8 9 10 11 12 13 14 # 对于可变类型的类属性person.hobbies，可以通过实例Bruce进行访问 print(Person.hobbies is Bruce.hobbies) # True Bruce.hobbies.append(&#34;CSS&#34;) print(Person.hobbies is Bruce.hobbies) # True print(Person.hobbies) # [&#39;football&#39;, &#39;woman&#39;, &#39;C#&#39;, &#39;CSS&#39;] Will = Person(&#34;Will&#34;, 27, 60) print(f&#34;Will.name is Will.age years old&#34;) # Will is 27 years old # Will shares the same class attribute with wilber # Will don&#39;t have the &#34;gender&#34; attribute that belongs to wilber print(Will.hobbies) # [&#39;football&#39;, &#39;woman&#39;, &#39;C#&#39;, &#39;CSS&#39;] print(Will.gender) # AttributeError: &#39;Person&#39; object has no attribute &#39;gender&#39; 注意，虽然通过实例可以访问类属性，但是，不建议这么做，最好还是通过类名来访问类属性，从而避免属性隐藏带来的不必要麻烦
__del__
1 2 3 4 5 6 7 8 9 10 11 12 13 14 class Test: # 当内存不需要的时候调用这个删除方法，python解释器自动调用 def __del__(self): print(&#34;Over&#34;) t1 = Test() t2 = t1 del t1 del t2 print(&#34;==========&#34;) # Over # ========== 1 2 3 4 5 6 7 8 9 10 11 12 class Test: # 当内存不需要的时候调用这个删除方法，python解释器自动调用 def __del__(self): print(&#34;Over&#34;) t1 = Test() t2 = t1 del dog1 print(&#34;==========&#34;) # ========== # Over 当删除了 t1，内存空间还没有结束，还不会调用 __del__ 方法，当调用完最后一条语句时，内存空间被释放，调用 __del__ 方法
类 class 的访问控制 &ldquo;_&rdquo; 和 &ldquo;__&rdquo; 的使用 更多的是一种规范/约定，并没有真正达到限制的目的
单下划线 &ldquo;_&rdquo;
以单下划线开头的表示的是 protected 类型的变量，即只能 允许其本身与子类 进行访问；同时表示弱内部变量标示，如 &ldquo;from moduleName import * &quot; 将不会引入以单下划线 &ldquo;_&rdquo; 开头的函数。
双下划线 &ldquo;__&rdquo;
双下划线的表示的是 private 类型的变量。只能是 允许这个类本身 进行访问了，连子类也不可以，这类属性在运行时属性名会加上单下划线和类名。
对于 Python 中的类属性，可以通过双下划线 &quot;__&rdquo; 来实现 一定程度的私有化，因为双下划线开头的属性在运行时会被 &ldquo;混淆&rdquo;（mangling）
双下划线的另一个重要的目地是，避免子类对父类同名属性的冲突
单下划线，可被重写，调用 子类方法
双下划线，不能被重写，调用的还是 父类方法
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 class A(object): def __init__(self): self.__private() self.public() def __private(self): print(&#39;A.__private()&#39;) def public(self): print(&#39;A.public()&#39;) class B(A): def __private(self): print(&#39;B.__private()&#39;) def public(self): print(&#39;B.public()&#39;) b = B() # A.__private() # B.public() 类 class 的继承 在 Python 中，同时支持 单继承 与 多继承
实现继承之后，子类将继承父类的属性(除了文档字符串)，也可以使用内建函数 insubclass() 来判断一个类是不是另一个类的子孙类
类型比较
type() 不会认为子类是一种父类类型 isinstance() 会认为子类是一种父类类型。 1 2 3 4 5 6 7 8 9 10 class Foo(object): pass class Bar(Foo): pass print(type(Foo()) == Foo) # True print(type(Bar()) == Foo) # False print(isinstance(Foo(), Foo)) # True print(isinstance(Bar(), Foo)) # True Example 1
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 class A: def __init__(self): self.__j = 1 self.number = 5 class B(A): def __init__(self): self.__j = 2 self.number = 7 def show(self): print(self.__j, self.number) b = B() b.show() # 2 7 Example 2
1 2 3 4 5 6 7 8 9 10 11 12 13 14 class A(object): def __method(self): print(&#34;I&#39;m a method in A&#34;) def method(self): self.__method() class B(A): def __method(self): print(&#34;I&#39;m a method in B&#34;) B().method() # I&#39;m a method in A A().method() # I&#39;m a method in A Example 3
1 2 3 4 5 6 7 8 9 10 11 12 13 14 class Parent(object): &#34;&#34;&#34; parent class &#34;&#34;&#34; pass class Child(Parent): pass # doc属性不会被继承 print(Parent.__doc__) # parent class print(Child.__doc__) # None super 的使用
super 主要显式调用父类，在子类中，一般会定义与父类相同的属性（数据属性，方法），从而来实现子类特有的行为。也就是说，子类会继承父类的所有的属性和方法，子类也可以覆盖父类同名的属性和方法
调用父类的方法：
将“self”显式的传递进去： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 class Parent(object): Value = &#34;Hi, Parent value&#34; def fun(self): print(&#34;This is from Parent&#34;) class Child(Parent): Value = &#34;Hi, Child value&#34; def fun(self): print(&#34;This is from Child&#34;) # 调用父类Parent的fun函数方法 Parent.fun(self) c = Child() c.fun() # This is from Child # This is from Parent 使用 Python 中的 super 关键字 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 class Parent(object): Value = &#34;Hi, Parent value&#34; def fun(self): print(&#34;This is from Parent&#34;) class Child(Parent): Value = &#34;Hi, Child value&#34; def fun(self): print(&#34;This is from Child&#34;) # 相当于用super的方法与上一调用父类的语句置换 super(Child, self).fun() c = Child() c.fun() # This is from Child # This is from Parent super() 对于你定义的每一个类，Python 会计算出一个所谓的 方法解析顺序(MRO)列表。 这个 MRO 列表就是一个简单的所有基类的线性顺序表。为了实现继承，Python 会在 MRO 列表上从左到右开始查找基类，直到找到第一个匹配这个属性的类为止。
而这个 MRO 列表的构造是通过一个 C3 线性化算法来实现的。 实际上就是 合并所有父类的 MRO 列表并遵循如下三条准则：
子类会先于父类被检查 多个父类会根据它们在列表中的顺序被检查 如果对下一个类存在两个合法的选择，选择第一个父类 虽然名义上来说 super 是用来调用父类中的方法，但是 super 实际上是在 MRO 表中找到下一个匹配的类。super 原型如下：
1 2 3 def super(cls, inst): mro = inst.__class__.mro() return mro[mro.index(cls) + 1] 两个参数 cls 和 inst 分别做了两件事：
inst 负责生成 MRO 的 list 通过 cls 定位当前 MRO 中的 index, 并返回 mro[index + 1] 但是根据我们上面说的 super 本质知道 super 和父类其实没有实质关联，我们就不难理解为什么 enter B 下一句是 enter C 而不是 enter A 了（如果认为 super 代表“调用父类的方法”，会想当然的认为下一句应该是 enter A）。
可以用　self.__class__.__mro__ 方法来 查询当前 MRO
一个多继承中的 MRO 是固定的(只要每个类之间都有继承关系）
Example:
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 class A(object): def __init__(self): print(&#34;Enter A&#34;) class B(A): def __init__(self): print(&#39;Enter B&#39;) super(B, self).__init__() print(&#39;Leave B&#39;) class C(A): def __init__(self): print(&#39;Enter C&#39;) super(C, self).__init__() print(&#39;Leave C&#39;) class D(B, C): def __init__(self): print(&#39;Enter D&#39;) super(D, self).__init__() print(&#34;Leave D&#34;) print(self.__class__.__mro__) d = D() # Enter D # Enter B # Enter C # Enter A # Leave C # Leave B # Leave D # (&lt;class &#39;__main__.D&#39;&gt;, &lt;class &#39;__main__.B&#39;&gt;, &lt;class &#39;__main__.C&#39;&gt;, &lt;class &#39;__main__.A&#39;&gt;, &lt;class &#39;object&#39;&gt;) 上方例子的中流程：
class D 中，输出“Enter D &quot; , 然后就会调用 super 方法，super() 方法，第一个参数是 D，在 MRO 列表中的下标（index）为 0，那么调用的下一个类就是下标为（index+1）的类，即 class B,
进入 class B，输出 &ldquo;Enter B&rdquo; , 再次调用 super()，此时的 index 为 1，那么调用的下一个类的 index 为 2，即 class C，输出“Enter C” .
在 class C 中，调用 super()，进入 class A，输出“Enter A”，
回到 class C ，输出 &ldquo;Leave C&rdquo; , 再回到 class B ，输出“Leave B”, 然后回到 class D，输出“Leave D”。结束
当使用 super() 函数时，Python 会在 MRO 列表上继续搜索下一个类。 只要每个重定义的方法统一使用 super() 并只调用它一次， 那么控制流最终会遍历完整个 MRO 列表，每个方法也只会被调用一次。
__new__ __new__ 方法：类级别的方法
是在类准备将自身实例化时调用，并且至少需要传递一个参数 cls，此参数在实例化时由 python 解释器自动提供 始终是 类的类方法，即使没有被加上类方法装饰器； 必须要有返回值，返回实例化出来的实例；在自己实现 __new__() 时需要注意：可以 return 父类（通过 super(当前类名，cls)）.__new__ 出来的实例，或者直接是 object 的 __new__ 出来的实例 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 class A(object): pass # 默认调用父类object的__new__()方法来构造该类的实例 a = A() print(a) # &lt;__main__.A object at 0x000001BE6F8CD520&gt; class A(object): def __new__(cls): &#34;重写__new__方法&#34; return &#34;abc&#34; a = A() print(a) # &#39;abc&#39; print(type(a)) # &lt;class &#39;str&#39;&gt; 通过 __new__() 方法实现单例
1 2 3 4 5 6 7 8 9 10 11 12 13 class Singleton(object): def __new__(cls, *args, **kwargs): if not hasattr(cls, &#34;_instance&#34;): cls._instance = super(Singleton, cls).__new__(cls) return cls._instance a = Singleton() b = Singleton() c = Singleton() print(a) # &lt;__main__.Singleton object at 0x000001F0B57D86D0&gt; print(b) # &lt;__main__.Singleton object at 0x000001F0B57D86D0&gt; print(c) # &lt;__main__.Singleton object at 0x000001F0B57D86D0&gt; __init__ __init__ 方法：实例级别的方法
有一个参数 self, 该 self 参数就是 __new__() 返回的实例；
__init__() 在 __new()__ 的基础上完成初始化动作，不需要返回值；
若 __new__() 没有正确返回当前类 cls 的实例，那 __init__() 将不会被调用
创建的每个实例都有自己的属性，方便类中的实例方法调用；
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 class A: def __new__(cls, *args, **kwargs): print(&#34;A&#39; __new__&#34;) # return super(A,cls).__new__(cls) return object.__new__(cls) def __init__(self): print(&#34;A&#39; __init__&#34;) class B(A): def __new__(cls, *args, **kwargs): print(&#34;B&#39; __new__&#34;) def __init__(self): print(&#34;B&#39; __init__&#34;) a = A() # B&#39; __new__ 没有创建真正的类B，所以类B的构造函数没有调用 b = B() # A&#39; __new__ # A&#39; __init__ # B&#39; __new__ 当在 Python 中出现继承的情况时，一定要注意初始化函数 __init__ 的行为:
如果子类没有定义自己的初始化函数，父类的初始化函数会被 默认调用；但是如果要实例化子类的对象，则只能传入父类的初始化函数对应的参数，否则会出错
如果子类定义了自己的初始化函数，而在子类中 没有显式调用 父类的初始化函数，则父类的属性 不会 被初始化
如果子类定义了自己的初始化函数，在子类中 显式调用 父类，子类和父类的属性都 会 被初始化
元类 类是能够创建出类实例的对象。类本身也是实例，它们是元类的实例。
Python 中的一切都是对象，它们要么是类的实例，要么是元类的实例，除了 type。type 实际上是它自己的元类，在纯 Python 环境中这可不是你能够做到的，这是通过在实现层面耍一些小手段做到的。
其次，元类是很复杂的。对于非常简单的类，你可能不希望通过使用元类来对类做修改。你可以通过其他两种技术来修改类：
1 2 3 4 5 6 7 class A: pass print(type(1)) # &lt;class &#39;int&#39;&gt; print(type(type(1))) # &lt;class &#39;type&#39;&gt; print(type(int)) # &lt;class &#39;type&#39;&gt; print(type(A)) # &lt;class &#39;type&#39;&gt; 元类是类的类，常可以用在类工厂中；
Python 中所有的类都是对象，可以通过 type() 来创建元类 在定义类时，可用过 metaclass 参数来指定此类的元类 Python 类语句执行时，会先 查找其类本身的 metaclass 属性，如果没找到，会继续在 父类 中找，还没找到，则到 模块 中找，最后再用 内置的 type 来创建此类对象 使用类、函数都可以当作元类，通常在 __new__ 方法中通过 type 来自定义自己的元类 从设计的复杂度来讲，尽量少用元类，多用普通类或函数 并发与并行 并行
只有多个 CPU，才能实现并行；多个 CPU 同时执行任务（线程或者进程）
并发
CPU 轮流执行任务，每个任务执行 0.01s（举例），看起来是同时，实际上同一个时刻还是只执行一个任务；这种情况，称为并发；
线程 进程 线程
线程是 CPU 执行 的最基本单元
进程
进程是系统进行分配资源和调度的基本单位，是 操作系统执行 的基本单元；
多线程相比多进程的优势
多线程无需重复申请资源，子线程和父线程共享资源；
多线程间的通信速度快于进程通信，效率更高；
协程 协程，又称微线程。在 Python 语言中，单线程+异步 I/O 的编程模型称为协程。协程的特点是 只有一个线程 在执行，只有当子程序内部发生阻塞或者 IO 时，才会交出线程执行权给其他子程序，适当的时候再返回；
协程相比多线程的优势
省去了大量线程切换的开销； 由于是单线程执行，共享资源不需要加锁，执行效率更高； 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 import asyncio import time async def say_after(delay, what): await asyncio.sleep(delay) print(f&#34;delay: what&#34;) async def main(): task1 = asyncio.create_task(say_after(2, &#39;hello1&#39;)) task2 = asyncio.create_task(say_after(2, &#39;world1&#39;)) print(f&#34;started at time.strftime(&#39;%X&#39;)&#34;) await say_after(1, &#39;hello2&#39;) await say_after(2, &#39;world2&#39;) await task1 await task2 print(f&#34;finished at time.strftime(&#39;%X&#39;)&#34;) asyncio.run(main()) 1 2 3 4 5 6 # started at 10:19:42 # 1: hello2 # 2: hello1 # 2: world1 # 2: world2 # finished at 10:19:45 要真正运行一个协程，asyncio 提供了三种主要机制:
asyncio.run() 函数用来运行最高层级的入口点 &ldquo;main()&rdquo; 函数
等待一个协程。await say_after(1, 'hello2') 、 await say_after(2, 'world2') 会在等待 1 秒后打印 &ldquo;hello2&rdquo;，然后 再次 等待 22 秒后打印 &ldquo;world2&rdquo;:
asyncio.create_task() 函数用来 并发运行 作为 asyncio 任务 的多个协程。
总用时 33 s
死锁 两个或两个以上的进程在执行过程中, 因争夺资源而造成的一种 互相等待 的现象, 若无 外力 作用, 它们都将无法推进下去。
产生死锁的原因：
因为系统资源不足。 进程运行推进顺序不合适。 资源分配不当等。 死锁的必要条件
互斥条件：一个资源每次只能被一个进程使用。 请求与保持条件：一个进程因请求资源而阻塞时，对已获得的资源保持不放。 不剥夺条件: 进程已获得的资源，在末使用完之前，不能强行剥夺。 循环等待条件: 若干进程之间形成一种头尾相接的循环等待资源关系 死锁的避免：
死锁的预防是通过破坏产生条件来阻止死锁的产生，但这种方法破坏了系统的并行性和并发性。
死锁产生的前三个条件是死锁产生的必要条件，也就是说要产生死锁必须具备的条件，而不是存在这 3 个条件就一定产生死锁，那么只要在逻辑上回避了第四个条件就可以避免死锁。避免死锁采用的是允许前三个条件存在，但通过合理的资源分配算法来确保永远不会形成环形等待的封闭进程链，从而避免死锁。该方法支持多个进程的并行执行，为了避免死锁，系统动态的确定是否分配一个资源给请求的进程。
银行家算法：分配资源之前先看清楚，资源分配后是否会导致系统死锁。如果会死锁，则不分配，否则就分配。要求每个进程必须先知道资源的最大需求量，且在系统运行过程中，考察每个进程对各类资源的申请需要花费较多的时间。
进程间通信方式：
管道、共享存储器系统、消息传递系统、信号量
mutex 是互斥锁`}).add({id:5,tag:"en",href:"/blog/quick_start/",title:"QuickStart",description:"This is QuickStart.",content:`在 quickstart 目录中为您的项目创建目录结构。
添加内容 向您的网站添加一个新页面。
1 hugo new content/posts/my-first-post.md 启动 Hugo 的开发服务器以查看网站
1 hugo server -D Mathematics in Markdown Step Step 1 在 hugo.toml 文件中配置
1 2 3 4 5 6 7 8 9 10 [markup] [markup.goldmark] [markup.goldmark.extensions] [markup.goldmark.extensions.passthrough] enable = true [markup.goldmark.extensions.passthrough.delimiters] block = [[&#39;\\[&#39;, &#39;\\]&#39;], [&#39;$$&#39;, &#39;$$&#39;]] inline = [[&#39;\\(&#39;, &#39;\\)&#39;]] [params] math = true Step 2 创建一个局部模板来加载 MathJax 或 KaTeX。下面的示例加载 MathJax，或者您也可以使用引擎部分中描述的 KaTeX。
layouts/partials/math.html
MathJax:
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 &lt;script id=&#34;MathJax-script&#34; async src=&#34;https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js&#34;&gt;&lt;/script&gt; &lt;script&gt; MathJax =  tex:  displayMath: [[&#39;\\\\[&#39;, &#39;\\\\]&#39;], [&#39;$$&#39;, &#39;$$&#39;]], // block inlineMath: [[&#39;\\\\(&#39;, &#39;\\\\)&#39;]] // inline , ; &lt;/script&gt;  if .Params.math  &lt;script&gt; MathJax =  tex: inlineMath: [[&#34;$&#34;, &#34;$&#34;]],	// block displayMath: [[&#34;$$&#34;, &#34;$$&#34;]],	// inline svg:  fontCache: &#34;global&#34;, , loader: load: [&#39;ui/safe&#39;] , ; &lt;/script&gt; &lt;script src=&#34;https://polyfill.io/v3/polyfill.min.js?features=es6&#34;&gt;&lt;/script&gt; &lt;script id=&#34;MathJax-script&#34; async src=&#34;https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js&#34; &gt;&lt;/script&gt;  end  Step 3 从 base template 调用 partial template
layouts/_default/baseof.html
1 2 3 4 5 6 7 &lt;head&gt; ...  if .Param &#34;math&#34;   partialCached &#34;math.html&#34; .   end  ... &lt;/head&gt; inline &amp; display 渲染数学公式时区分 inline 和 display 格式
更新 layouts/_default/_markup/render-passthrough.html 文件
修改 render-passthrough.html 文件中的渲染逻辑，区分 inline 和 display 数学公式，并根据类型应用适当的 MathJax 渲染方式。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26  $opts := dict   if eq .Type &#34;block&#34;   $opts = dict &#34;displayMode&#34; true   end   with try (transform.ToMath .Inner $opts)   with .Err   errorf &#34;Failed to render MathJax: %q. See %s&#34; . $.Position   else   $rendered := .Value  &lt;!-- 区分 inline 和 display --&gt;  if $opts.displayMode  &lt;!-- 块级公式，MathJax 渲染 --&gt; &lt;div class=&#34;mathjax-display&#34;&gt;  $rendered  &lt;/div&gt;  else  &lt;!-- 行内公式，MathJax 渲染 --&gt; &lt;span class=&#34;mathjax-inline&#34;&gt;  $rendered  &lt;/span&gt;  end   end   end  修改 assets/scss/components/_math.scss
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 // 行内数学公式样式 .mathjax-inline  display: inline-block; // 保持在同一行 font-size: 100%; // 适中字体大小 vertical-align: middle; // 垂直居中 padding: 0.2em 0.4em; // 给公式添加内边距，让公式更显眼 margin: 0; // 不增加外边距 color: $primary; // 设置颜色，可根据需求修改 font-family: &#34;Times New Roman&#34;, serif; // 字体样式，确保易读性  // 块级数学公式样式 .mathjax-display  display: block; // 占据整行 font-size: 100%; margin: 20px 0; // 上下外边距，增加间距 padding: 0.5em; // 给公式增加一些内边距 text-align: center; // 居中显示公式 color: #1a73e8; // 设置颜色，可根据需求修改 font-family: &#34;Times New Roman&#34;, serif; // 字体样式 border: 1px solid #e0e0e0; // 为块级公式添加边框，增加区分度 border-radius: 8px; // 圆角效果 background-color: #f4f6f9; // 背景色，使块级公式更加显眼 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 阴影效果，提升层次感`}).add({id:6,tag:"en",href:"/blogs/rope/",title:"RoPE",description:"RoPE（旋转式位置编码）及其外推和 Base 选择。",content:`RoPE RoPE 通过 绝对位置编码 的方式实现 相对位置编码
绝对位置编码：位置索引 直接进行编码。一般都是直接构建 词嵌入向量 和 位置嵌入向量 直接相加。
Transformer 中的 Sinusoidal 位置编码
BERT 和 GPT 中的 训练式位置编码
相对位置编码：相对位置索引 进行编码。&ldquo;相对&rdquo; 指的是有参照物。
如果两个向量的位置索引分别是 mm 和 nn ，那么他们的 相对位置索引 是 m−nm-n ，其中 nn 就是参照物。一般是作用于矩阵 QQ 和 K⊤K^\\top 点乘时。
qm\\mathbf q_m ：矩阵 QQ 中的第 mm 个向量
kn\\mathbf k_n ：矩阵 KK 中的第 nn 个向量
两个向量之间的 注意力分数 计算方式是： Score(qm,kn)=qm⊤⋅kn\\mathrmScore(\\mathbfq_m, \\mathbfk_n) = \\mathbfq_m^\\top \\cdot \\mathbfk_n 相对位置编码 则是希望 注意力分数 中包含 相对位置信息, 即 m−nm-n XLNET T5 DeBERTa 定义 wii=1N\\w_i\\_i = 1^N ：长度为 NN 的 输入序列，其中 wiw_i 表示输入序列中第 ii 个 token
xii=1N\\x_i\\_i = 1^N ：输入序列 wii=1N\\w_i\\_i=1^N 对应的 embedding，其中 xix_i 表示第 ii 个 token wiw_i 对应的 dd 维词嵌入向量
对应的 query， key，value 分别为：
qm=fq(xm,m)kn=fk(xn,n)vn=fv(xn,n) \\beginalign \\boldsymbolq_m &amp;= \\boldsymbolf_\\boldsymbolq(x_m, m) \\\\ \\boldsymbolk_n &amp;= \\boldsymbolf_\\boldsymbolk(x_n, n)\\\\ \\boldsymbolv_n &amp;= \\boldsymbolf_\\boldsymbolv(x_n, n) \\endalign qm\\boldsymbolq_m 表示第 mm 个 token 对应的 词向量 xmx_m 融合 位置 mm 信息 之后的 query 向量 kn\\boldsymbolk_n 表示第 nn 个 token 对应的 词向量 xnx_n 融合 位置 nn 信息 之后的 key 向量 vn\\boldsymbolv_n 表示第 nn 个 token 对应的 词向量 xnx_n 融合 位置 nn 信息 之后的 value 向量 假定 query 向量 qm\\boldsymbolq_m 和 key 向量 kn\\boldsymbolk_n 之间的内积操作可以被一个函数 gg 表示， gg 是 词嵌入向量 xmx_m ， xnx_n 和它们之间的 相对位置 m−nm-n 的函数：
⟨fq(xm,m),fk(xk,n)⟩=g(xm,xn,m−n) \\beginequation \\langle \\mathbff_\\mathbfq(\\mathbfx_m, m), \\mathbff_\\mathbfk(\\mathbfx_k, n)\\rangle = g(\\mathbfx_m,\\mathbfx_n, m-n) \\endequation 所以我们要求出该恒等式的一个（尽可能简单的）解。
fq(xm,m)=(Wqxm)eimθfk(xn,n)=(Wkxn)einθg(xm,xn,m−n)=Re[(Wqxm)(Wkxn)∗ei(m−n)θ] \\beginaligned \\mathbff_\\mathbfq(\\mathbfx_m, m) &amp;= (\\mathbfW_q\\mathbfx_m) e^\\textim\\theta \\\\ \\\\ \\mathbff_\\mathbfk(\\mathbfx_n, n) &amp;= (\\mathbfW_k\\mathbfx_n) e^\\textin\\theta \\\\ \\\\ \\mathbfg(\\mathbfx_m,\\mathbfx_n, m-n) &amp;= \\mathrmRe\\bigg[(\\mathbfW_q\\mathbfx_m) (\\mathbfW_k\\mathbfx_n)^* e^\\texti(m-n)\\theta\\bigg] \\endaligned Re\\mathrmRe ：复数的实部，
(Wkxn)∗(\\mathbfW_k\\mathbfx_n)^* ：复数 (Wkxn)∗(\\mathbfW_k\\mathbfx_n)^* 的共轭。
fq(xm,m)=(cos⁡mθ−sin⁡mθsin⁡mθcos⁡mθ)(Wq(1,1)Wq(1,2)Wq(2,1)Wq(2,2))(xm(1)xm(2))=(cos⁡mθ−sin⁡mθsin⁡mθcos⁡mθ)(qm(1)qm(2)) \\beginaligned \\mathbff_\\mathbfq(\\mathbfx_m, m) &amp;=\\beginpmatrix\\cos m\\theta &amp; -\\sin m\\theta\\\\ \\sin m\\theta &amp; \\cos m\\theta\\endpmatrix \\beginpmatrixW_q^(1,1) &amp; W_q^(1,2) \\\\ W_q^(2,1) &amp; W_q^(2,2) \\endpmatrix \\beginpmatrixx_m^(1) \\\\ x_m^(2)\\endpmatrix\\\\ &amp;= \\beginpmatrix\\cos m\\theta &amp; -\\sin m\\theta\\\\ \\sin m\\theta &amp; \\cos m\\theta\\endpmatrix \\beginpmatrixq_m^(1) \\\\ q_m^(2)\\endpmatrix \\endaligned fk(xn,n)=(cos⁡nθ−sin⁡nθsin⁡nθcos⁡nθ)(Wk(1,1)Wk(1,2)Wk(2,1)Wk(2,2))(xm(1)xm(2))=(cos⁡nθ−sin⁡nθsin⁡nθcos⁡nθ)(km(1)km(2)) \\beginaligned \\mathbff_\\mathbfk(\\mathbfx_n, n) &amp;=\\beginpmatrix\\cos n\\theta &amp; -\\sin n\\theta\\\\ \\sin n\\theta &amp; \\cos n\\theta\\endpmatrix \\beginpmatrixW_k^(1,1) &amp; W_k^(1,2) \\\\ W_k^(2,1) &amp; W_k^(2,2) \\endpmatrix \\beginpmatrixx_m^(1) \\\\ x_m^(2)\\endpmatrix\\\\ &amp;= \\beginpmatrix\\cos n\\theta &amp; -\\sin n\\theta\\\\ \\sin n\\theta &amp; \\cos n\\theta\\endpmatrix \\beginpmatrixk_m^(1) \\\\ k_m^(2)\\endpmatrix \\endaligned g(xm,xn,m−n)=(qm(1)qm(2))(cos⁡mθsin⁡mθ−sin⁡mθcos⁡mθ)(cos⁡nθ−sin⁡nθsin⁡nθcos⁡nθ)(kn(1)kn(2))=(qm(1)qm(2))(cos⁡(m−n)θsin⁡(m−n)θ−sin⁡(m−n)θcos⁡(m−n)θ)(kn(1)kn(2)) =(qm(1)qm(2))(cos⁡(n−m)θ−sin⁡(n−m)θsin⁡(n−m)θcos⁡(n−m)θ)(kn(1)kn(2)) \\beginaligned \\mathbfg(\\mathbfx_m,\\mathbfx_n, m-n) &amp;= \\beginpmatrixq_m^(1) &amp; q_m^(2)\\endpmatrix \\beginpmatrix\\cos m\\theta &amp; \\sin m\\theta\\\\ -\\sin m\\theta &amp; \\cos m\\theta\\endpmatrix \\beginpmatrix\\cos n\\theta &amp; -\\sin n\\theta\\\\ \\sin n\\theta &amp; \\cos n\\theta\\endpmatrix \\beginpmatrixk_n^(1) \\\\ k_n^(2)\\endpmatrix\\\\[7pt] &amp;= \\beginpmatrixq_m^(1) &amp; q_m^(2)\\endpmatrix \\beginpmatrix\\cos (m-n)\\theta &amp; \\sin (m-n)\\theta\\\\ -\\sin( m-n)\\theta &amp; \\cos (m-n)\\theta\\endpmatrix \\beginpmatrixk_n^(1) \\\\ k_n^(2)\\endpmatrix\\ \\\\[7pt] &amp;= \\beginpmatrixq_m^(1) &amp; q_m^(2)\\endpmatrix \\beginpmatrix\\cos (n-m)\\theta &amp; -\\sin (n-m)\\theta\\\\ \\sin( n- m)\\theta &amp; \\cos (n-m)\\theta\\endpmatrix \\beginpmatrixk_n^(1) \\\\ k_n^(2)\\endpmatrix\\ \\endaligned 根据 欧拉公式： eix=cos⁡x+isin⁡xe^ix = \\cos x + i\\sin x qm=(qm(1)qm(2))=Wqxm=(Wq(1,1)Wq(1,2)Wq(2,1)Wq(2,2))(xm(1)xm(2)) \\beginalign \\boldq_m = \\beginpmatrix q_m^(1) \\\\ q_m^(2) \\endpmatrix = \\mathbfW_qx_m =\\beginpmatrixW_q^(1,1) &amp; W_q^(1,2) \\\\ W_q^(2,1) &amp; W_q^(2,2) \\endpmatrix \\beginpmatrix x_m^(1) \\\\ x_m^(2) \\endpmatrix \\\\ \\endalign 复平面上的 qm\\boldq_m 表示成复数形式：
qm=(qm(1)qm(2))=qm(1)+iqm(2) \\boldq_m =\\beginpmatrix q_m^(1) \\\\ q_m^(2) \\endpmatrix = q_m^(1) + iq_m^(2) fq(xm,m)=(Wqxm)eimθ=qmeimθ=(qm(1)+iqm(2))⋅(cos⁡mθ+isin⁡mθ)=(qm(1)cos⁡mθ−qm(2)sin⁡mθ)+i(qm(2)cos⁡mθ+qm(1)sin⁡mθ)=(qm(1)cos⁡mθ−qm(2)sin⁡mθqm(2)cos⁡mθ+qm(1)sin⁡mθ)=(cos⁡mθ−sin⁡mθsin⁡mθcos⁡mθ)(qm(1)qm(2)) \\beginaligned \\mathbff_\\mathbfq(\\mathbfx_m, m) &amp;=(\\mathbfW_q\\mathbfx_m) e^\\textim\\theta = \\boldq_m e^\\textim\\theta\\\\[7pt] &amp;=(q_m^(1) + iq_m^(2)) \\cdot \\big(\\cos m\\theta + i\\sin m\\theta \\big) \\\\[7pt] &amp;=\\big(q_m^(1)\\cos m\\theta - q_m^(2) \\sin m\\theta \\big) + i\\big(q_m^(2)\\cos m\\theta + q_m^(1)\\sin m\\theta \\big) \\\\[7pt] &amp;=\\beginpmatrix q_m^(1)\\cos m\\theta - q_m^(2) \\sin m\\theta \\\\ q_m^(2)\\cos m\\theta + q_m^(1)\\sin m\\theta \\endpmatrix\\\\[7pt] &amp;=\\beginpmatrix \\cos m\\theta &amp; -\\sin m\\theta \\\\ \\sin m\\theta &amp; \\cos m\\theta \\endpmatrix \\beginpmatrix q_m^(1) \\\\ q_m^(2) \\endpmatrix \\endaligned g(xm,xn,m−n)=Re[(Wqxm)(Wkxn)∗ei(m−n)θ]=Re[(qm(1)+iqm(2))(kn(1)−ikn(2))⋅[cos⁡(m−n)θ+isin⁡(m−n)θ]]=Re[[(qm(1)kn(1)+qm(2)kn(2))+i(qm(2)kn(1)−qm(1)kn(2))]⋅[cos⁡(m−n)θ+isin⁡(m−n)θ]]=(qm(1)kn(1)+qm(2)kn(2))cos⁡(m−n)θ−(qm(2)kn(1)−qm(1)kn(2))sin⁡(m−n)θ=(qm(1)qm(2))(cos⁡(m−n)θsin⁡(m−n)θ−sin⁡(m−n)θcos⁡(m−n)θ)(kn(1)kn(2)) =(qm(1)qm(2))(cos⁡(n−m)θ−sin⁡(n−m)θsin⁡(n−m)θcos⁡(n−m)θ)(kn(1)kn(2)) \\beginaligned \\mathbfg(\\mathbfx_m,\\mathbfx_n, m-n) &amp;= \\mathrmRe\\bigg[(\\mathbfW_q\\mathbfx_m) (\\mathbfW_k\\mathbfx_n)^* e^\\texti(m-n)\\theta\\bigg] \\\\ &amp;=\\mathrmRe\\bigg [(q_m^(1) + iq_m^(2)) (k_n^(1) - ik_n^(2)) \\cdot \\big[\\cos (m-n)\\theta + i\\sin (m-n)\\theta \\big]\\bigg] \\\\[7pt] &amp;=\\mathrmRe\\bigg [ \\left[\\big(q_m^(1) k_n^(1)+ q_m^(2) k_n^(2)\\big)+ i\\big(q_m^(2) k_n^(1)- q_m^(1) k_n^(2) \\big)\\right]\\cdot \\big [\\cos (m-n)\\theta + i\\sin (m-n)\\theta \\big] \\bigg] \\\\[7pt] &amp;=\\left(q_m^(1) k_n^(1)+q_m^(2) k_n^(2)\\right) \\cos (m-n) \\theta-\\left(q_m^(2) k_n^(1)-q_m^(1) k_n^(2)\\right) \\sin (m-n) \\theta\\\\[7pt] &amp;= \\beginpmatrixq_m^(1) &amp; q_m^(2)\\endpmatrix \\beginpmatrix\\cos (m-n)\\theta &amp; \\sin (m-n)\\theta\\\\ -\\sin( m-n)\\theta &amp; \\cos (m-n)\\theta\\endpmatrix \\beginpmatrixk_n^(1) \\\\ k_n^(2)\\endpmatrix\\ \\\\[7pt] &amp;= \\beginpmatrixq_m^(1) &amp; q_m^(2)\\endpmatrix \\beginpmatrix\\cos (n-m)\\theta &amp; -\\sin (n-m)\\theta\\\\ \\sin( n- m)\\theta &amp; \\cos (n-m)\\theta\\endpmatrix \\beginpmatrixk_n^(1) \\\\ k_n^(2)\\endpmatrix\\\\ \\endaligned 点乘与旋转变换 在 直角坐标系 中, 对于向量 x\\mathbf x 和 y\\mathbf y ，其点乘满足公式： x⊤⋅y=∣∣x∣∣⋅∣∣y∣∣⋅cos⁡γ\\mathbfx^\\top \\cdot \\mathbfy = ||\\mathbfx|| \\cdot ||\\mathbfy|| \\cdot \\cos \\gamma ， 其中 γ\\gamma 是两个向量的夹角。这个 夹角 就是两个向量之间的 相对位置。即只要两个向量的 模长 和 夹角 不变，无论它们在坐标系中的什么位置，点乘的结果都不会发生变化。
Rm=(cos⁡m−sin⁡msin⁡mcos⁡m) \\beginaligned \\mathbf\\mathcalR_m =\\beginpmatrix\\cos m &amp; -\\sin m\\\\ \\sin m &amp; \\cos m\\endpmatrix \\endaligned 易得 Rm⊤⋅Rn=Rn−m\\mathbf\\mathcalR^\\top_m \\cdot \\mathbf\\mathcalR_n = \\mathbf\\mathcalR_n - m ，其中, n−mn-m 即为 旋转弧度的相对信息。
假设向量 x\\mathbf x 和 y\\mathbf y 是二维向量：
如果将其绕原点旋转一定的角度，那么改变的仅仅是两个向量之间的夹角。 此时, 将旋转后的向量点乘, 其结果一定包含 旋转弧度的相对信息。 分别将 x\\mathbf x 和 y\\mathbf y 旋转 mm 和 nn 弧度，则有 (Rm⋅x)⊤⋅(Rn⋅y)=x⊤⋅Rn−m⋅y(\\mathbf\\mathcalR_m \\cdot \\mathbfx)^\\top \\cdot (\\mathbf\\mathcalR_n \\cdot \\mathbfy) = \\mathbfx^\\top \\cdot \\mathbf\\mathcalR_n - m \\cdot \\mathbfy 如果向量 x\\mathbf x 和 y\\mathbf y 旋转相同的弧度, 那么旋转前和旋转后的点乘的结果是一致的 应用到位置编码
当向量 qm\\mathbfq_m 和 kn\\mathbfk_n 为二维向量时， 其 位置信息 表示为将向量 qm\\mathbfq_m 和 kn\\mathbfk_n 旋转其 位置索引 弧度，即将 qm\\mathbfq_m 旋转 mm 弧度 Rm⋅qm\\mathbf\\mathcalR_m \\cdot \\mathbf q_m ， kn\\mathbfk_n 旋转 nn 弧度 Rn⋅kn\\mathbf\\mathcalR_n \\cdot \\mathbf k_n ,，此时两者的 注意力分数 为： Score(qm,kn)=(Rm⋅qm)⊤⋅(Rn⋅kn)\\mathrmScore(\\mathbfq_m, \\mathbfk_n) = (\\mathbf\\mathcalR_m \\cdot \\mathbf q_m)^\\top \\cdot (\\mathbf\\mathcalR_n \\cdot \\mathbf k_n) 扩展到多维 (cos⁡mθ0−sin⁡mθ000⋯00sin⁡mθ0cos⁡mθ000⋯0000cos⁡mθ1−sin⁡mθ1⋯0000sin⁡mθ1cos⁡mθ1⋯00⋮⋮⋮⋮⋱⋮⋮0000⋯cos⁡mθd/2−1−sin⁡mθd/2−10000⋯sin⁡mθd/2−1cos⁡mθd/2−1)⏟Rm(q0q1q2q3⋮qd−2qd−1) \\beginequation \\scriptsize\\underbrace\\beginpmatrix \\cos m\\theta_0 &amp; -\\sin m\\theta_0 &amp; 0 &amp; 0 &amp; \\cdots &amp; 0 &amp; 0 \\\\ \\sin m\\theta_0 &amp; \\cos m\\theta_0 &amp; 0 &amp; 0 &amp; \\cdots &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; \\cos m\\theta_1 &amp; -\\sin m\\theta_1 &amp; \\cdots &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; \\sin m\\theta_1 &amp; \\cos m\\theta_1 &amp; \\cdots &amp; 0 &amp; 0 \\\\ \\vdots &amp; \\vdots &amp; \\vdots &amp; \\vdots &amp; \\ddots &amp; \\vdots &amp; \\vdots \\\\ 0 &amp; 0 &amp; 0 &amp; 0 &amp; \\cdots &amp; \\cos m\\theta_d/2-1 &amp; -\\sin m\\theta_d/2-1 \\\\ 0 &amp; 0 &amp; 0 &amp; 0 &amp; \\cdots &amp; \\sin m\\theta_d/2-1 &amp; \\cos m\\theta_d/2-1 \\\\ \\endpmatrix_\\mathbf\\mathcalR_m \\beginpmatrixq_0 \\\\ q_1 \\\\ q_2 \\\\ q_3 \\\\ \\vdots \\\\ q_d-2 \\\\ q_d-1\\endpmatrix \\endequation 其中, ii 是维度分组索引, θi\\theta_i 的设置沿用 Transformer 中 Sinusoidal 位置编码的设置, 即 θi=10000−2id\\theta_i = 10000^-\\frac2id 也就是说，给位置为 mm 的向量 qq 乘上矩阵 Rm\\mathbf\\mathcalR_m 、位置为 nn 的向量 kk 乘上矩阵 Rn\\mathbf\\mathcalR_n ，用变换后的 QQ , KK 序列做 Attention，那么 Attention 就自动包含相对位置信息了，因为成立恒等式:
(Rmq)⊤(Rnk)=q⊤Rm⊤Rnk=q⊤Rn−mk \\beginalign (\\mathbf\\mathcalR_m \\mathbfq)^\\top(\\mathbf\\mathcalR_n \\mathbfk) = \\mathbfq^\\top \\mathbf\\mathcalR_m^\\top\\mathbf\\mathcalR_n \\mathbfk = \\mathbfq^\\top \\mathbf\\mathcalR_n-m \\mathbfk \\endalign Rm\\mathbf\\mathcalR_m 主对角线上是一个一个 旋转矩阵, 其它的元素都是 0。此外， Rm\\mathbf\\mathcalR_m 是一个正交矩阵，它不会改变向量的模长，因此通常来说它不会改变原模型的稳定性。
Rm=[cos⁡mθ0−sin⁡mθ000⋯⋯00sin⁡mθ0cos⁡mθ000⋯⋯0000cos⁡mθ1−sin⁡mθ1⋯⋯0000sin⁡mθ1cos⁡mθ1⋯⋯00⋮⋮⋮⋮⋱⋱⋮⋮⋮⋮⋮⋮⋱⋱⋮⋮0000⋯⋯cos⁡mθd/2−1−sin⁡mθd/2−10000⋯⋯sin⁡mθd/2−1cos⁡mθd/2−1] \\beginequation \\mathbf\\mathcalR_m = \\scriptsize\\left [ \\beginarraycc: cc: cc: cc \\cos m\\theta_0 &amp; -\\sin m\\theta_0 &amp; 0 &amp; 0 &amp; \\cdots &amp; \\cdots &amp; 0 &amp; 0 \\\\ \\sin m\\theta_0 &amp; \\cos m\\theta_0 &amp; 0 &amp; 0 &amp; \\cdots &amp; \\cdots &amp; 0 &amp; 0 \\\\ \\hdashline 0 &amp; 0 &amp; \\cos m\\theta_1 &amp; -\\sin m\\theta_1 &amp; \\cdots &amp; \\cdots &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; \\sin m\\theta_1 &amp; \\cos m\\theta_1 &amp; \\cdots &amp; \\cdots &amp; 0 &amp; 0 \\\\ \\hdashline \\vdots &amp; \\vdots &amp; \\vdots &amp; \\vdots &amp; \\ddots &amp; \\ddots &amp; \\vdots &amp; \\vdots \\\\ \\vdots &amp; \\vdots &amp; \\vdots &amp; \\vdots &amp; \\ddots &amp; \\ddots &amp; \\vdots &amp; \\vdots \\\\ \\hdashline 0 &amp; 0 &amp; 0 &amp; 0 &amp; \\cdots &amp; \\cdots &amp; \\cos m\\theta_d/2-1 &amp; -\\sin m\\theta_d/2-1 \\\\ 0 &amp; 0 &amp; 0 &amp; 0 &amp; \\cdots &amp; \\cdots &amp; \\sin m\\theta_d/2-1 &amp; \\cos m\\theta_d/2-1 \\\\ \\endarray \\right] \\endequation 高效计算 由于 Rm\\mathbf\\mathcalR_m 的稀疏性，所以直接用矩阵乘法来实现会很浪费算力，推荐通过下述方式来实现 RoPE
(q0q1q2q3⋮qd−2qd−1)⊗(cos⁡mθ0cos⁡mθ0cos⁡mθ1cos⁡mθ1⋮cos⁡mθd/2−1cos⁡mθd/2−1)+(−q1q0−q3q2⋮−qd−1qd−2)⊗(sin⁡mθ0sin⁡mθ0sin⁡mθ1sin⁡mθ1⋮sin⁡mθd/2−1sin⁡mθd/2−1)(1) \\beginequation \\beginpmatrixq_0 \\\\ q_1 \\\\ q_2 \\\\ q_3 \\\\ \\vdots \\\\ q_d-2 \\\\ q_d-1 \\endpmatrix\\otimes\\beginpmatrix\\cos m\\theta_0 \\\\ \\cos m\\theta_0 \\\\ \\cos m\\theta_1 \\\\ \\cos m\\theta_1 \\\\ \\vdots \\\\ \\cos m\\theta_d/2-1 \\\\ \\cos m\\theta_d/2-1 \\endpmatrix + \\beginpmatrix-q_1 \\\\ q_0 \\\\ -q_3 \\\\ q_2 \\\\ \\vdots \\\\ -q_d-1 \\\\ q_d-2 \\endpmatrix\\otimes\\beginpmatrix\\sin m\\theta_0 \\\\ \\sin m\\theta_0 \\\\ \\sin m\\theta_1 \\\\ \\sin m\\theta_1 \\\\ \\vdots \\\\ \\sin m\\theta_d/2-1 \\\\ \\sin m\\theta_d/2-1 \\endpmatrix \\endequation\\tag1 其中 ⊗\\otimes 是逐位对应相乘
远程衰减 远程衰减性：如果向量 k\\boldk 在向量 q\\boldq 的附近, 那么他们的 注意力分数 应该偏高, 反之应该偏低。
假设 q\\mathbfq ， k\\mathbfk 均为 ones 向量，则 根据公式 (1)
(Rmq)⊤(Rnk)=q⊤Rn−mk=2∑i=0d2−1cos⁡(n−m)θi \\beginalign (\\mathbf\\mathcalR_m \\mathbfq)^\\top(\\mathbf\\mathcalR_n \\mathbfk) &amp;=\\mathbfq^\\top \\mathbf\\mathcalR_n-m \\mathbfk\\\\[7pt] &amp;= 2\\sum^\\fracd2-1_i = 0 \\cos (n-m) \\theta_i \\endalign 令 g(x)=2∑i=0d2−1cos⁡xθig(x) = 2\\sum^\\fracd2-1_i=0 \\cos x \\theta_i ，对于 θi=10000−2id\\theta_i = 10000^-\\frac2id ii ：分组索引， i∈[0,d2)i \\in [0, \\fracd2) θi\\theta_i ：对 ii 单调递减， θi∈(10−4,1]\\theta_i \\in (10^-4, 1] θi=0\\theta_i =0 ，则 g(x)=dg(x) = d ，无论相对距离多大，注意力得分都相等 θi=1\\theta_i =1 ，则 g(x)=dcos⁡xg(x) = d\\cos x ，随着相对距离增大，注意力得分呈周期性变化，但不会震荡衰减 对于 cos⁡xθi\\cos x \\theta_i ，当 xθi≤π2⟹x≤π2θix\\theta_i \\le \\frac\\pi2 \\Longrightarrow x \\le \\frac\\pi2\\theta_i 时， cos⁡xθi≥0\\cos x \\theta_i \\ge 0 且 cos⁡xθi\\cos x \\theta_i 处于单调递减区间
令 i=d2−1i =\\fracd2-1 ：
当 x≤π2⋅10(4−8d)x \\le \\frac\\pi2\\cdot 10^(4-\\frac8d) 时， cos⁡xθd2−1≥0\\cos x \\theta_\\fracd2-1 \\ge 0 且 cos⁡xθd2−1\\cos x \\theta_\\fracd2-1 处于单调递减区间 当 x&gt;π2⋅10(4−8d)x &gt; \\frac\\pi2\\cdot 10^(4-\\frac8d) 时， g(x)=2∑i=0d2−1cos⁡xθig(x) = 2\\sum^\\fracd2-1_i=0 \\cos x \\theta_i 的前一部分呈周期变化，后一部分单调递减，约为震荡递减的函数 因此， g(x)=2∑i=0d2−1cos⁡xθig(x) = 2\\sum^\\fracd2-1_i=0 \\cos x \\theta_i 随着相对距离 xx 的增大震荡减小。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 def plot(plt_obj, head_size, seq_len, base=10000): &#34;&#34;&#34; plot &#34;&#34;&#34; theta = base ** (-np.arange(0, head_size, 2) / head_size) x = np.arange(seq_len) func_ = lambda t: np.cos(t * theta).sum() plt_obj.plot(x, np.fromiter((func_(i) for i in x), x.dtype)) plt_obj.set_title(f&#34;d:head_size, threshold: int(np.pi / 2 * 10 ** (4 - 8 / head_size))&#34;) plt_obj.set_ylabel(&#39;g(x)&#39;) plt_obj.set_xlabel(&#39;seq len&#39;) return axes if __name__ == &#39;__main__&#39;: _, axes = plt.subplots(nrows=2, ncols=2, figsize=(10, 10)) plot(axes[0, 0], head_size=256, seq_len=10000, base=1000) plot(axes[0, 1], head_size=256, seq_len=30000) plot(axes[1, 0], head_size=64, seq_len=10000) plot(axes[1, 1], head_size=64, seq_len=30000) plt.show() 位置插值 RoPE 直接外推 周期
对于三角函数 sin⁡(ωx)\\sin (\\omega x) ，其周期为 T=2πωT= \\frac2\\pi\\omega ，对应到 RoPE 中的每个维度 sin⁡mθi\\sin m\\theta_i 和 cos⁡mθi\\cos m\\theta_i ， 其中 θi=b−2id\\theta_i = b^-\\frac2id ， i∈[0,1,2,...,d2−1]i \\in [0, 1,2,...,\\fracd2-1] ， b=10000b=10000 ，可计算得到 **周期为 **
T=2πθi=2πb2id T = \\frac2\\pi\\theta_i = 2 \\pi b^\\frac2id 因此，对不同的维度编码 ii ，每个维度对应的三角函数周期 越来越大。
要使得向量完整旋转一圈（所有位置都见过）， 则有 (m−n)θ≥2π(m-n)\\theta \\ge 2\\pi ，即 m−n≥2πθm-n \\ge \\frac2\\pi\\theta 对于 θi=10000−2id\\theta_i = 10000^-\\frac2id ：
i=0i=0 ， θi=1\\theta_i = 1 ， m−n≥2πθi=2π&gt;6m-n \\ge \\frac2\\pi\\theta_i = 2\\pi&gt; 6 ，因此预训练的序列长度只要达到 77 ，向量 q\\mathbfq 和 k\\mathbfk 就可以旋转一圈；当预训练, 最大序列长度是 20482048 时，那么向量 q\\mathbfq 和 k\\mathbfk 最多可以旋转 326 圈。
……
i=d2i=\\fracd2 ， θi=10000−1\\theta_i = 10000^-1 ， m−n≥2πθi=2∗104π&gt;6&gt;62831m-n \\ge \\frac2\\pi\\theta_i = 2*10^4\\pi&gt; 6&gt; 62831 ，因此只有当预训练的长度达到 6283262832 时，向量 q\\mathbfq 和 k\\mathbfk 才可以旋转一圈；当预训练, 最大序列长度是 20482048 时，没有旋转过那么多弧度，因此推理对于超过的部分效果存在问题
因此，在预训练阶段, 向量 q\\mathbfq 和 k\\mathbfk 靠前的维度已经旋转很多圈了，而靠后的维度连 1/4 圈都没有旋转到, 因此 直接外推效果不好
Position Interpolation 线性内插 Extending Context Window of Large Language Models via Positional Interpolation
Extending Context is Hard…but not Impossible
将位置索引从推理时的 [0,L′)[0,L&#x27;) 映射到 预训练时的 [0,L)[0,L) ，以便与预训练时使用的索引相匹配。
相当于对于绝对位置 mm ，把它”缩放“成 mLL′=mk\\fracm LL^\\prime = \\fracmk ，具体实现时将 θi\\theta_i 改成
h(θi)=1sb−2id=1100002ids h\\left(\\theta_i\\right) =\\frac1sb^-\\frac2id = \\frac110000^\\frac2ids 其中, s=L推理L预训练=L′Ls= \\fracL_\\text推理L_\\text预训练 = \\fracL^\\primeL ，且 s&gt;1s&gt;1 如果预训练时位置索引的取值范围是 [0,2048)[0,2048) ，而推理时位置索引的取值范围是 [0,4096)[0,4096) ，那么我们就将 [0,4096)[0,4096) 映射到 [0,2048)[0,2048) 的范围内。于是，推理时的的 11 就变成了 0.50.5 ， 40964096 变成了 20482048 ，把没见过的位置映射到见过的位置，确保 推理时向量旋转角度 在 预训练时向量旋转角度 的范围之内。
训练阶段: (1,2,⋯ ,n−1,n)预测阶段: (1,2,⋯ ,n,n+1,⋯ ,4n−1,4n⏟远处越界)→内插(14,24,34⏟局部失真,⋯ ,n−14,n) \\beginequation \\beginaligned&amp;\\text训练阶段:\\,(1,2,\\cdots, n-1, n)\\\\[5pt] &amp;\\text预测阶段:\\,(1,2,\\cdots, n,\\underbracen+1,\\cdots,4n-1,4n_\\text远处越界)\\xrightarrow\\quad\\text内插\\quad \\big(\\underbrace\\frac14,\\frac24,\\frac34_\\text局部失真,\\cdots, n-\\frac14, n\\big)\\endaligned \\endequation 实验
通过 PI，将预训练的 7B、13B、33B 和 65B LLaMA 模型扩展到大小为 32768 的上下文窗口，只需要在 Pile 等数据集上进行 1000 步的微调即可获得良好的质量。
微调过程只需要数万到数十万个样本，微调的结果对训练样本的选择不敏感。 原因在于在这个阶段中，模型仅仅是在已有的良好基础上去适配新的上下文环境，而不是获取新的知识。
PI+无微调，模型可以展示出一定的语言建模能力
PI+微调，模型困惑度迅速改善
PI 效果好于直接微调
问题
PI 对每个维度 ii 同等地生效；
对于周期小(高频)的维度，插值之后会变得很密集(本来一个周期包含 10 个值，但是内插之后能包含 20 个值)，高频的维度就变的很拥挤。
YaRN YaRN: Efficient Context Window Extension of Large Language Models
定义 RoPE 嵌入在第 ii 维处的 波长 λi\\lambda_i ，其描述的是 RoPE 的 embedding 上的第 ii 维，执行完整旋转（ 2π2\\pi ）所需的 token 长度
λi=2πθi=2πb2id \\lambda_i=\\frac2 \\pi\\theta_i= 2 \\pi b^\\frac2 id NTK-aware NTK-Aware Scaled RoPE allows LLaMA models to have extended (8k+) context size without any fine-tuning and minimal perplexity degradation
NTK-aware（Neural Tangent Kernel）插值方法 使得每一组 RoPE 维度向量相对于其相邻组向量 具有不同的“旋转”速度。即不是将 RoPE 的每个维度平均缩放一个因子，而是通过 减少对高频区域的缩放 和 增加对低频区域的缩放，从而将插值压力分散到多个维度。
高频学习到的是局部的相对距离，低频学习到的是远程的绝对距离
对于向量 q\\mathbfq 和 k\\mathbfk , 靠前的维度直接外推, 靠后的维度线性内插
h(θi)=(bs)−2id=1100002ids2id h\\left(\\theta_i\\right) =(bs)^-\\frac2id= \\frac110000^\\frac2ids^\\frac2id 其中, s=L推理L预训练==L′Ls= \\fracL_\\text推理L_\\text预训练 = = \\fracL^\\primeL ，且 s&gt;1s&gt;1 。
考虑引入了 ss 的 的第 ii 维 θi′\\theta_i &#x27; θi=b−2id\\theta_i = b^-\\frac2id θi′=(bs)−2id\\theta_i&#x27;= (bs)^-\\frac2id 旋转弧度在同维度 ii 的调节比率 rir_i 为 rθi=θi′θi=s−2id∈(1s,1]r_\\theta_i =\\frac\\theta_i^\\prime\\theta_i = s^-\\frac2id \\in (\\frac1s,1] i↓i \\downarrow ， rθi↑r_\\theta_i \\uparrow ， ii 较小的高频区域，调节比率 rθir_\\theta_i 较大，接近 11 ，即趋近于不调节 i=0i=0 ， θi=1\\theta_i = 1 , 此时 ss 无影响，即 直接外推 i↑i \\uparrow ， rθi↓r_\\theta_i \\downarrow ， ii 较大的低频区域，调节比率 rθir_\\theta_i 较小，即调节幅度很大，可支持更大的推理位置范围映射到训练位置范围 i=d2i=\\fracd2 ， θi=110000s\\theta_i = \\frac110000s ，等价于 线性内插。将推理的位置索引从 [0,L′)[0, L^\\prime) 映射到 [0,L)[0,L) 将 s−2ids^-\\frac2id 看作是 位置索引的缩放函数，NTK 即为 直接外推 和 线性内插 的光滑方案。
NTK-aware Scaled RoPE
由于 ii 最小只能取到 d2−1\\fracd2-1 ，为了保证最后一组是 线性内插，因此得到 NTK-aware Scaled RoPE：
h(θi)=(bsdd−2)−2id=1100002ids2id−2 h\\left(\\theta_i\\right) =(bs^\\fracdd-2)^-\\frac2id= \\frac110000^\\frac2ids^\\frac2id-2 NTK-by-parts 定义 预训练时的长度 LL 与 波长 λ\\lambda 之间的 比值 r=Lλr = \\fracL\\lambda 。
具体来说，可以将该 比值 rir_i 视为给定预训练长度 LL ，训练过程中 第 ii 维所旋转的圈数：
ri=Lλi=L2πb2id r_i = \\fracL\\lambda_i = \\fracL2 \\pi b^\\frac2 id 定义 斜坡函数 γ\\gamma ：
γ(ri)=1ri&gt;βri−αβ−αα≤ri≤β0ri&lt;α \\gamma(r_i)= \\begincases 1 \\quad &amp; r_i &gt;\\beta \\\\[7pt] \\fracr_i-\\alpha\\beta-\\alpha \\quad &amp; \\alpha \\le r_i \\le \\beta \\\\[7pt] 0 \\quad &amp; r_i &lt;\\alpha \\\\[7pt] \\endcases 其中 α\\alpha ， β\\beta 为额外的参数， i↓ ⟹ ri↑i \\downarrow \\ \\Longrightarrow\\ r_i \\uparrow 调整后的旋转角度 θi\\theta_i ：
h(θi)=[1−γ(ri)]θis+γ(ri)θi h\\left(\\theta_i\\right)=\\bigg [1-\\gamma(r_i)\\bigg] \\frac\\theta_is+\\gamma(r_i) \\theta_i 其中 s=L推理L预训练=L′Ls= \\fracL_\\text推理L_\\text预训练 = \\fracL^\\primeL ri&gt;βr_i&gt;\\beta ，预训练时旋转圈数超过 β\\beta ，在 ii 较小的高频区域，可认为已经过充分训练，无需改变 α≤ri≤β\\alpha \\le r_i \\le \\beta ，在中间区域，在两者之间线性插值过渡 ri&lt;αr_i&lt;\\alpha , 预训练时旋转圈数少于 α\\alpha ， 在 ii 较大的低频区域，进行线性插值 应根据具体情况调整 α\\alpha 和 β\\beta 的值。实验发现，对于 Llama 模型， α\\alpha 和 β\\beta 的推荐取值是 α=1\\alpha=1 和 β=32\\beta=32 。
NTK-by-parts 只改变 θi\\theta_i 的值，不改变 Attention 和 RoPE 的形式，因此不会有额外的实现成本和推理成本。
Code
Llama 3 使用的方式为 NTK-by-parts
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 Compute the inverse frequencies (\\theta) inv_freq = 1.0 / (base ** (torch.arange(0, dim, 2, dtype=torch.int64).float().to(device) / dim)) low_freq_wavelen = old_context_len / low_freq_factor high_freq_wavelen = old_context_len / high_freq_factor wavelen = 2 * math.pi / inv_freq # wavelen &lt; high_freq_wavelen: do nothing # wavelen &gt; low_freq_wavelen: divide by factor inv_freq_llama = torch.where(wavelen &gt; low_freq_wavelen, inv_freq / factor, inv_freq) # otherwise: interpolate between the two, using a smooth factor smooth_factor = (old_context_len / wavelen - low_freq_factor) / (high_freq_factor - low_freq_factor) smoothed_inv_freq = (1 - smooth_factor) * inv_freq_llama / factor + smooth_factor * inv_freq_llama is_medium_freq = ~(wavelen &lt; high_freq_wavelen) * ~(wavelen &gt; low_freq_wavelen) inv_freq_llama = torch.where(is_medium_freq, smoothed_inv_freq, inv_freq_llama) Dynamically NTK Dynamically Scaled RoPE further increases performance of long context LLaMA with zero fine-tuning
当推理长度小于等于训练长度时，不进行插值；
当推理长度大于训练长度时，每一步 都通过 NTK-Aware Interpolation 动态 放大 base
h(θi)=[b(αs−α+1)dd−2]−2id=1100002id(αs−α+1)2id−2 \\beginalign &amp;h\\left(\\theta_i\\right) = [b(\\alpha s-\\alpha+1)^\\fracdd-2]^-\\frac2id= \\frac110000^\\frac2id(\\alpha s-\\alpha+1)^\\frac2id-2 \\\\[7pt] \\endalign s=max⁡1,L′Ls = \\max\\1, \\fracL^\\primeL\\ ， L′L^\\prime 为 当前序列 的序列长度。 α\\alpha 为一个超参数, 且 α&gt;1\\alpha&gt;1 。一般取 α=2\\alpha=2 。 Code
1 2 3 4 5 6 seq_len: default to max_position_embeddings, e.g. at init time seq_len = seq_len if seq_len is not None and seq_len &gt; max_position_embeddings else max_position_embeddings # Compute the inverse frequencies base = base * ((factor * seq_len / max_position_embeddings) - (factor - 1)) ** (dim / (dim - 2)) inv_freq = 1.0 / (base ** (torch.arange(0, dim, 2, dtype=torch.int64).float().to(device) / dim)) YaRN NTK-by-parts + Attention scaling
Attention scaling by temperature
将注意力权重的计算修改为
softmax(qmTkntd) \\beginalign \\textsoftmax\\bigg( \\frac\\mathbfq_m^T \\mathbfk_nt \\sqrtd \\bigg) \\endalign 对于 Llama 模型，推荐
1t=0.1ln(s)+1 \\beginalign \\sqrt\\frac1t= 0.1 \\mathrmln\\left(s\\right)+1 \\\\ \\endalign Code
根据设定的 α\\alpha 和 β\\beta 分别计算 能转到 α\\alpha 圈和 β\\beta 时对应 embedding 的 维度 iαi_\\alpha 和 iβi_\\beta ：
β≤riβ=L2πb2iβd⟹iβ≤dln⁡L2πβ2ln⁡b\\beta \\le r_i_\\beta =\\fracL2 \\pi b^\\frac2 i_\\betad \\quad \\Longrightarrow \\quad i_\\beta\\le \\fracd \\ln \\fracL2 \\pi \\beta2\\ln b α≥riα=L2πb2iαd⟹iα≥dln⁡L2πα2ln⁡b\\alpha \\ge r_i_\\alpha =\\fracL2 \\pi b^\\frac2 i_\\alphad \\quad \\Longrightarrow \\quad i_\\alpha\\ge \\fracd \\ln \\fracL2 \\pi \\alpha2\\ln b 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 # Compute the inverse frequencies def find_correction_dim(num_rotations, dim, base, max_position_embeddings): &#34;&#34;&#34;Inverse dimension formula to find the dimension based on the number of rotations&#34;&#34;&#34; return (dim * math.log(max_position_embeddings / (num_rotations * 2 * math.pi))) / (2 * math.log(base)) def find_correction_range(low_rot, high_rot, dim, base, max_position_embeddings): &#34;&#34;&#34;Find dimension range bounds based on rotations&#34;&#34;&#34; low = math.floor(find_correction_dim(low_rot, dim, base, max_position_embeddings)) high = math.ceil(find_correction_dim(high_rot, dim, base, max_position_embeddings)) return max(low, 0), min(high, dim - 1) # Optional config options # beta_fast/beta_slow: as suggested in the paper, default to 32/1 (correspondingly) beta_fast = config.rope_scaling.get(&#34;beta_fast&#34;) or 32 beta_slow = config.rope_scaling.get(&#34;beta_slow&#34;) or 1 low, high = find_correction_range(beta_fast, beta_slow, dim, base, max_position_embeddings) 对 embedding 根据 [0,iβ][0,i_\\beta] ， (iβ,iα)(i_\\beta, i_\\alpha) ， [iα,d][i_\\alpha, d] 进行分段
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 def linear_ramp_factor(min, max, dim): if min == max: max += 0.001 # Prevent singularity linear_func = (torch.arange(dim, dtype=torch.float32) - min) / (max - min) ramp_func = torch.clamp(linear_func, 0, 1) return ramp_func # Note on variable naming: &#34;interpolation&#34; comes from the original technique, where we interpolate the position IDs # to expand the possible context length. In other words, interpolation = apply scaling factor. pos_freqs = base ** (torch.arange(0, dim, 2).float().to(device) / dim) inv_freq_extrapolation = 1.0 / pos_freqs inv_freq_interpolation = 1.0 / (factor * pos_freqs) # Get n-dimensional rotational scaling corrected for extrapolation inv_freq_extrapolation_factor = 1 - linear_ramp_factor(low, high, dim // 2).float().to(device) inv_freq = ( inv_freq_interpolation * (1 - inv_freq_extrapolation_factor) + inv_freq_extrapolation * inv_freq_extrapolation_factor ) 计算 attention scaling
1 attention_factor = 0.1 * math.log(factor) + 1.0 inv_freq 和 position_ids 相乘，计算 cos 和 sin 值，再除以 attention_factor, 得到最终的 cos 和 sin 值
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 # inv_freq: [h_d/2] # inv_freq_expanded: [B, h_d/2, 1] # position_ids_expanded: [B, L, 1] # freqs: [B, L, h_d/2] freqs = (inv_freq_expanded.float() @ position_ids_expanded.float()).transpose(1, 2) # emb: [B, L, h_d] emb = torch.cat((freqs, freqs), dim=-1) cos = emb.cos() sin = emb.sin() # Advanced RoPE types (e.g. yarn) apply a post-processing scaling factor, equivalent to scaling attention # cos: [B, L, h_d] cos = cos * attention_factor sin = sin * attention_factor 计算 qn\\mathbfq_n 和 kn\\mathbfk_n 1 2 3 4 5 6 7 8 9 10 def rotate_half(x): &#34;&#34;&#34;Rotates half the hidden dims of the input.&#34;&#34;&#34; x1 = x[..., : x.shape[-1] // 2] x2 = x[..., x.shape[-1] // 2 :] return torch.cat((-x2, x1), dim=-1) cos = cos.unsqueeze(unsqueeze_dim) sin = sin.unsqueeze(unsqueeze_dim) q_embed = (q * cos) + (rotate_half(q) * sin) k_embed = (k * cos) + (rotate_half(k) * sin) ReRoPE RoPE 形式上是一种绝对位置编码，但实际上给 Attention 带来的是相对位置信息，如果只考虑 Decoder，此时的 相对位置矩阵 是:
(0102103210⋱3210⋱⋱3210⋱⋱⋱⋱⋱⋱⋱L−2⋱⋱⋱⋱⋱⋱⋱L−1L−2⋱⋱⋱3210) \\beginequation\\beginpmatrix0 &amp; \\\\ 1 &amp; 0 &amp; \\\\ 2 &amp; 1 &amp; 0 &amp;\\\\ 3 &amp; 2 &amp; 1 &amp; 0 &amp; \\\\ \\ddots &amp; 3 &amp; 2 &amp; 1 &amp; 0 &amp; \\\\ \\ddots &amp; \\ddots &amp; 3 &amp; 2 &amp; 1 &amp; 0 &amp; \\\\ \\ddots &amp; \\ddots &amp; \\ddots &amp; \\ddots &amp; \\ddots &amp; \\ddots &amp; \\ddots \\\\ \\tinyL - 2 &amp; \\ddots &amp; \\ddots &amp; \\ddots &amp; \\ddots &amp; \\ddots &amp; \\ddots &amp; \\ddots \\\\ \\tinyL - 1 &amp; \\tinyL - 2 &amp; \\ddots &amp; \\ddots &amp; \\ddots &amp; 3 &amp; 2 &amp; 1 &amp; 0 &amp; \\\\ \\endpmatrix\\endequation 其中, LL 表示推理时序列的长度。
在一个序列中, 相对位置越小，出现的次数越多，被训练的程度越高。
Leaky ReRoPE 设定一个窗口大小 ww ，在窗口内使用大小为 11 的位置间隔，在窗口外使用大小为 1k\\frac1k 的位置间隔，此时相对位置矩阵如下：
(010210⋱210w−1⋱210ww−1⋱210w+1kw⋱⋱210w+2kw+1k⋱⋱⋱210⋱w+2k⋱⋱⋱⋱210⋱⋱⋱⋱⋱⋱⋱⋱⋱⋱⋱⋱⋱w+2kw+1kww−1⋱210w+L−1−wk⋱⋱⋱w+2kw+1kww−1⋱210) \\beginequation \\beginpmatrix \\colorred0 &amp; \\\\ \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorred\\tinyw - 1 &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreenw &amp; \\colorred\\tinyw - 1 &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreen\\tinyw + \\frac1k &amp; \\colorgreenw &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreen\\tinyw + \\frac2k &amp; \\colorgreen\\tinyw + \\frac1k &amp; \\colorgreen\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreen\\ddots &amp; \\colorgreen\\tinyw + \\frac2k &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\\\ \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\tinyw + \\frac2k &amp; \\colorgreen\\tinyw + \\frac1k &amp; \\colorgreenw &amp; \\colorred\\tinyw - 1 &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreen\\tinyw + \\fracL-1-wk &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\tinyw + \\frac2k &amp; \\colorgreen\\tinyw + \\frac1k &amp; \\colorgreenw &amp; \\colorred\\tinyw - 1 &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\endpmatrix \\endequation ReRoPE（Rectified RoPE） 特别地，当 k→∞k\\to\\infty 时，简化为
(010210⋱210w−1⋱210ww−1⋱210ww⋱⋱210ww⋱⋱⋱210⋱w⋱⋱⋱⋱210⋱⋱⋱⋱⋱⋱⋱⋱⋱⋱⋱⋱⋱wwww−1⋱210w⋱⋱⋱wwww−1⋱210) \\beginequation \\beginpmatrix \\colorred0 &amp; \\\\ \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorred\\tinyw - 1 &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreenw &amp; \\colorred\\tinyw - 1 &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreenw &amp; \\colorgreenw &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreenw &amp; \\colorgreenw &amp; \\colorgreen\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreen\\ddots &amp; \\colorgreenw &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\colorred\\ddots &amp; \\\\ \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreenw &amp; \\colorgreenw &amp; \\colorgreenw &amp; \\colorred\\tinyw - 1 &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\colorgreenw &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreen\\ddots &amp; \\colorgreenw &amp; \\colorgreenw &amp; \\colorgreenw &amp; \\colorred\\tinyw - 1 &amp; \\colorred\\ddots &amp; \\colorred2 &amp; \\colorred1 &amp; \\colorred0 &amp; \\\\ \\endpmatrix \\endequation 计算
算两次 Attention 矩阵，然后组合起来。如果向量 q\\mathbfq 和 k\\mathbfk 的相对位置超过 ww ，那么就进行 截断
Score(qm,kn)=qm⊤⋅Rn−m⋅kn(m−n&lt;w)qm⊤⋅Rn−m−wk+w⋅kn(m−n≥w) \\mathrmScore(\\mathbfq_m, \\mathbfk_n) = \\left\\ \\beginaligned &amp;\\boldq^\\top_m \\cdot \\mathbf\\mathcalR_n - m \\cdot \\boldk_n \\qquad &amp;(m - n \\lt w) \\\\ &amp;\\boldq^\\top_m \\cdot \\mathbf\\mathcalR_\\fracn-m-wk+w \\cdot \\boldk_n \\qquad &amp;(m - n \\ge w) \\endaligned \\right. 此外，需要自定义计算 Attention 矩阵也导致了不能直接套用现成的 flash attention 实现，因此相对之下又增加了计算成本。
LongRoPE LongRoPE: Extending LLM Context Window Beyond 2 Million Tokens
精细化非均匀位置插值
允许 搜索 RoPE 每个维度 以及 不同 token 位置的旋转角度缩放因子，有效地保留了原始 RoPE 位置编码中的信息。这种方法最大程度地减小了位置插值引起的信息损失，从而为微调提供了更好的初始化
有效的位置编码插值应考虑 两种非均匀性：不同的 RoPE 维度 和 token 位置
低维 RoPE 和 初始 token 位置存储着关键信息，因此需要进行更少程度的插值 高维 RoPE 存储的信息相对较为稀疏，可进行较大程度的插值 对于位置为 nn 的 token，它的对应 RoPE 编码为：
[cos⁡(nθ0),sin⁡(nθ0),cos⁡(nθ1),…,cos⁡(nθd2−1),sin⁡(nθd2−1)] \\beginalign [\\cos(n\\theta_0), \\quad \\sin(n\\theta_0),\\quad \\cos(n\\theta_1),\\quad \\dots,\\quad \\cos(n\\theta_\\fracd2-1),\\quad \\sin(n\\theta_\\fracd2-1)] \\endalign dd : embedding 维数 nθin\\theta_i ：位置 nn 的旋转角度 θi=b−2id\\theta_i = b^-\\frac2id ：旋转频率 s=L′Ls=\\fracL^\\primeL ：扩展上下文长度 L′L^\\prime 与原始长度 LL 的比值 令 λ\\lambda 表示与 ss 相关的实际缩放因子，那么 RoPE 编码表示可以统一为:
[cos⁡(nλθ0),sin⁡(nλθ0),cos⁡(nλθ1),…,cos⁡(nλθd2−1),sin⁡(nλθd2−1)] \\beginalign [\\cos(\\fracn\\lambda\\theta_0), \\quad \\sin(\\fracn\\lambda\\theta_0),\\quad \\cos(\\fracn\\lambda\\theta_1),\\quad \\dots,\\quad \\cos(\\fracn\\lambda\\theta_\\fracd2-1),\\quad \\sin(\\fracn\\lambda\\theta_\\fracd2-1)] \\endalign PI: 线性插值
λ=s \\lambda = s 这使得位置信息非常 &ldquo;拥挤&rdquo;，妨碍了模型区分位置紧密 token 的能力。
NTK: 把插值压力分布在 RoPE 维度上
λ=si \\lambda = s^i NTK 可以在 非微调 场景中扩展上下文窗口，但通常最大扩展比例为 4×4\\times 。
YaRN：将 RoPE 维度分为三个基于频率的组，每个组具有不同的插值策略，高频维度外推，低频维度使用线性插值（PI），中间维度使用 NTK。
YaRN 的关键在于它对 RoPE 维度的分组，这目前依赖于人类主导的经验实验。这可能会导致新 LLM 的次优性能。
LongRoPE：同时考虑 RoPE 维度和 token 位置两者的非均匀性
对于上下文窗口长度为 LL ，以及较长的输入文档 X\\mathbfX , 其中每个 x∈X\\mathbfx\\in\\mathbfX token 长度均超过了 LL 。
定义一组重缩放因子 I(λ^i,n^)\\mathbbI(\\hat\\lambda_i,\\hatn) 来涵盖两种非均匀性，其中 λ^i\\hat\\lambda_i 表示与 embedding 维度相关的缩放因子， n^\\hatn 表示 token 位置的阈值, 那么最优化问题转变为：
arg⁡min⁡x∈X;∣x∣≥LL(LLM(RoPE,X))whereRoPE(n)=[⋯ ,cos⁡(I(λ^i,n^)⋅nθi),sin⁡(I(λ^i,n^)⋅nθi),⋯],i=0,⋯ ,d2−1;n∈[0,∣x∣);whereI(λ^i,n^)=1n&lt;n^1λin≥n^ \\beginalign &amp; \\arg \\min_\\mathbfx\\in\\mathbfX; |\\mathbfx|\\geq L \\mathcalL \\left(\\textLLM(\\textRoPE,\\mathbfX)\\right)\\\\[7pt] \\textwhere \\quad &amp; \\textRoPE_(n) =\\left [\\quad \\cdots,\\quad \\cos\\left(\\mathbbI(\\hat\\lambda_i,\\hatn)\\cdot n \\theta_i\\right),\\quad \\sin\\left(\\mathbbI(\\hat\\lambda_i,\\hatn) \\cdot n \\theta_i\\right), \\quad \\cdots \\quad \\right] , \\quad i = 0,\\cdots,\\fracd2-1;\\quad n\\in [0,|\\mathbfx|);\\\\[7pt] \\textwhere\\quad &amp; \\mathbbI(\\hat\\lambda_i,\\hatn)=\\begincases1&amp;\\quad n &lt;\\hatn\\\\\\frac1\\lambda_i&amp;\\quad n\\ge\\hatn\\endcases \\endalign 对于初始的 n^−1\\hatn-1 个 token 位置，缩放因子 λ^i\\hat\\lambda_i 无影响，当 token 位置 n≥n^ n\\ge\\hatn , 缩放因子会起到作用。
因此，给定上下文窗口长度 LL ，目标为找到一组最优的重缩放因子 I(λ^i,n^)i∈[1,d]\\left\\\\mathbbI(\\hat\\lambda_i,\\hatn)\\right\\_i\\in [1,d] , 使得模型能对输入样本 X\\mathbfX 的 next token 预测损失（困惑度）最小。
搜索
搜索空间
​	n^\\hatn 从 0,1,2,4,8,12,16,20,24,28,32,64,128,2560, 1, 2, 4, 8, 12, 16, 20, 24, 28, 32, 64,128, 256 中选择, 当 n^=0\\hatn = 0 时，所有 token 位置都用到了搜索得到的 λi\\lambda_i 。
基于进化的搜索
优化初始种群生成: 是将 PI、NTK 和 YaRN 对应的三个 RoPE 重缩放因子作为个体添加到初始群体中
单调递增约束：对采样的 RoPE 重缩放因子施加一个非递减单调 性约束： λi≤λi+1λ_i \\le λ_i+1 ，要求 λi\\lambda_i 随 RoPE 维度单调增加.
渐进式扩展策略
8×8 \\times 无需 finetune &gt;8×&gt; 8 \\times 需要 finetune 直接拓展为 2048k2048k 的上下文窗口，搜索空间过大，训练成本过高
使用 LongRoPE 搜索将 8k8k 扩展到 256k256k 。
分别在上下文窗口大小为 128k128k 和 256k256k 的情况下进行搜索。扩展比例分别为 32×32 \\times 和 64×64 \\times Finetune 256k
首先使用 128k128k 的 RoPE 重缩放因子对 LLaMA2 进行 400400 步的微调 再将 RoPE 重新缩放因子替换为 256k256k ，并执行额外的 600600 步微调 扩展至 2048k2048k 在微调后的 256k256k 长度 LLM 上执行二次搜索。这最终达到 2048k2048k 的超大上下文窗口大小，无需进一步微调
恢复短上下文窗口性能
位置插值导致原始上下文窗口内的位置被压缩在更窄的区域内，从而对大模型的性能产生了负面影响。
在扩展后的 LLM 上执行额外的进化搜索来调整 RoPE 缩放因子以适应较短的上下文长度（如 4K4K 和 8K8K ）。由于对于更短的长度需要较少的位置内插，因此减少允许的最大搜索 λ\\lambda 。
在推理过程中，LLM 会动态地调整相应的 RoPE 缩放因子。
Base 选择 Base of RoPE Bounds Context Length
RoPE 中频率的计算公式为
θi=b−2id \\theta_i = b^-\\frac2id 其中底数 bb 默认值为 1000010000 。目前 Long Context 的主流做法之一是，先在 b=10000b=10000 上用短文本预训练，然后调大 bb 并在长文本微调。
基于一个期望性质研究了 bb 的下界，由此指出更大的训练长度本身就应该选择更大的底数，与训练策略无关。
我们希望 RoPE 的两个理想性质：
1、远程衰减，位置相近的 Token 平均来说获得更多的注意力；
2、语义聚合，语义相似的 Token 平均来说获得更多的注意力。
—
语义聚合
当 qm\\mathbfq_m 和 kn\\mathbfk_n 相近时，不管它们的相对距离 n−mn−m 多大，其注意力 qm⊤⋅Rn−m⋅kn\\boldq^\\top_m \\cdot \\mathbf\\mathcalR_n - m \\cdot \\boldk_n 平均来说都应该更大（至少要比随机的两个 Token 更大）。
假设:
q∈Rd\\mathbfq \\in \\mathbbR^d 每个分量独立同分布，均值为 μ\\mu ，方差为 σ2\\sigma^2 k∗=q+ϵ\\mathbfk^* =q+\\epsilon ，其中 ϵ\\epsilon 为均值为 00 的随机变量， k∗\\mathbfk^* 代表跟 q\\mathbfq 语义相近的 token k∈Rd\\mathbfk \\in \\mathbbR^d 与 q\\mathbfq 独立同分布： k\\mathbfk 代表两个随机的 token Eq,k,ε[q⊤Rn−mk∗−q⊤Rn−mk]≥0 \\beginequation\\mathbbE_\\mathbfq,\\mathbfk,\\mathbf\\varepsilon\\big [\\mathbfq^\\top \\mathbf\\mathcalR_n-m \\mathbfk^* - \\mathbfq^\\top \\mathbf\\mathcalR_n-m \\mathbfk\\big] \\geq 0\\endequation Eq,k,ε[q⊤Rn−m(q+ε)−q⊤Rn−mk]= Eq[q⊤Rn−mq]−Eq,k[q⊤Rn−mk]= Eq[q⊤Rn−mq]−Eq[q]⊤Rn−mEk[k]= Eq[q⊤Rn−mq]−μ21⊤Rn−m1=Eq[∑i=0d/2−1(q2i2+q2i+12)cos⁡(n−m)θi]−∑i=0d/2−12μ2cos⁡(n−m)θi=∑i=0d/2−12(μ2+σ2)cos⁡(n−m)θi−∑i=0d/2−12μ2cos⁡(n−m)θi=∑i=0d/2−12σ2cos⁡(n−m)θi \\beginequation\\beginaligned &amp;\\,\\mathbbE_\\mathbfq,\\mathbfk,\\mathbf\\varepsilon\\big [\\mathbfq^\\top \\mathbf\\mathcalR_n-m (\\mathbfq + \\mathbf\\varepsilon) - \\mathbfq^\\top \\mathbf\\mathcalR_n-m \\mathbfk\\big] \\\\[7pt] =&amp;\\, \\mathbbE_\\mathbfq\\big [\\mathbfq^\\top \\mathbf\\mathcalR_n-m \\mathbfq\\big] - \\mathbbE_\\mathbfq,\\mathbfk\\big[\\mathbfq^\\top \\mathbf\\mathcalR_n-m \\mathbfk\\big] \\\\[5pt] =&amp;\\, \\mathbbE_\\mathbfq\\big [\\mathbfq^\\top \\mathbf\\mathcalR_n-m \\mathbfq\\big] - \\mathbbE_\\mathbfq[\\mathbfq]^\\top\\mathbf\\mathcalR_n-m \\mathbbE_\\mathbfk[\\mathbfk] \\\\[5pt] =&amp;\\, \\mathbbE_\\mathbfq\\big [\\mathbfq^\\top \\mathbf\\mathcalR_n-m \\mathbfq\\big] - \\mu^2\\mathbf1^\\top\\mathbf\\mathcalR_n-m \\mathbf1 \\\\[5pt] =&amp; \\mathbbE_\\mathbfq\\left [\\sum_i = 0^d/2-1 (q_2i^2 + q_2i+1^2)\\cos (n-m)\\theta_i\\right] - \\sum_i = 0^d/2-1 2\\mu^2\\cos (n-m)\\theta_i \\\\[5pt] =&amp; \\sum_i = 0^d/2-1 2(\\mu^2 + \\sigma^2)\\cos (n-m)\\theta_i - \\sum_i = 0^d/2-1 2\\mu^2\\cos (n-m)\\theta_i \\\\[5pt] =&amp; \\sum_i = 0^d/2-1 2\\sigma^2\\cos (n-m)\\theta_i \\\\ \\endaligned\\endequation ∑i=0d/2−1cos⁡mθi≥0,m∈0,1,2,⋯ ,L−1 \\beginequation\\sum_i = 0^d/2-1 \\cos m\\theta_i \\geq 0,\\quad m\\in\\0,1,2,\\cdots, L-1\\\\endequation 定义 Bm,θ=∑i=0d/2−1cos⁡mθiB_m,\\theta= \\sum_i=0^d/2-1 \\cos m\\theta_i ，则 Bm,θB_m,\\theta 衡量了是对相似 tokens 对比随机 tokens 给予更多注意力的能力，该能力随着相对距离 mm 的增加而减小。对于较小的 bb （对应 θi\\theta_i 较大）， Bm,θB_m,\\theta 在一定距离下甚至低于零。这意味着随机 tokens 比相似 tokens 具有更大的注意力得分，这对于长上下文建模可能有问题。
根据上式有 Bm,θ≥0B_m,\\theta \\ge 0 ，给定 RoPE 中的 θ\\theta ，存在最大的上下文长度 LθL_\\theta 满足：
Lθ=sup⁡L∣Bm,θ≥0m∈0,1,2,⋯ ,L−1 L_\\theta = \\sup\\L|B_m,\\theta \\ge 0 \\quad m\\in\\0,1,2,\\cdots, L-1\\ 换句话说，如果按照 θi=b−2id\\theta_i = b^-\\frac2id 的设置，为了得到期望的上下文长度 LL ，存在 bb 的下界：
bL=inf⁡b∣Bm,θ≥0m∈0,1,2,⋯ ,L−1 b_L = \\inf\\ b|B_m,\\theta \\ge 0 \\quad m\\in\\0,1,2,\\cdots, L-1\\ 由于 Bm,θB_m,\\theta 是多个余弦函数的和，很难得到解析解，因此采用数值求解
渐近估计
fb(m)=∑i=0d/2−1cos⁡mb−2i/d≈∫01cos⁡mb−sds=令t=mb−s∫mb−1mcos⁡ttln⁡bdt \\beginalignf_b(m) = \\sum_i = 0^d/2-1 \\cos m b^-2i/d\\approx \\int_0^1 \\cos m b^-s ds \\xlongequal\\text令t = mb^-s \\int_mb^-1^m \\frac\\cos tt \\ln bdt\\endalign 记 Ci(x)=−∫x∞cos⁡ttdt\\textCi(x) = -\\int_x^\\infty \\frac\\cos tt dt （ Trigonometric integral ）, 则
fb(m)≈Ci(m)−Ci(mb−1)ln⁡b \\beginequationf_b(m) \\approx \\frac\\textCi(m) - \\textCi(mb^-1)\\ln b\\endequation Ci(x)\\textCi(x) 的第一个零点 x0=0.6165⋯x_0=0.6165\\cdots 对于 m≥1m \\ge 1 ， ∣Ci(m)∣≤1/2|\\textCi(m)|\\leq 1/2 ，可以忽略
考虑 Ci(mb−1)≤0m∈0,1,2,⋯ ,L−1\\textCi(mb^-1)\\leq 0 \\quad m\\in\\0,1,2,\\cdots,L-1\\ ，因此需要 mb−1∈[0,x0]⟹b≥mx0mb^-1 \\in [0,x_0] \\Longrightarrow b\\ge \\fracmx_0 ，即
b≥Lx0≈2L b\\ge \\fracLx_0 \\approx 2L 这个结果比精确的数值结果要小，因为它对应于 d→∞d \\rightarrow \\infin ，无限个三角函数叠加会使得函数图像的震荡更少，看起来更加平稳（相比于有限的 dd ），从而对于固定的 bb ， fb(m)f_b(m) 的连续非负区间更长，或者反过来，对于固定的 LL ，保持 m=0,1,2,⋯ ,L−1m=0,1,2,\\cdots,L-1 的 fb(m)f_b(m) 都非负的 bb 更小。
Reference Transformer 升级之路：2、博采众长的旋转式位置编码 Transformer 升级之路：12、无限外推的 ReRoPE？ Transformer 升级之路：16、“复盘”长度外推技术 Transformer 升级之路：18、RoPE 的底数选择原则 Extending Context Window of Large Language Models via Positional Interpolation Extending Context is Hard…but not Impossible YaRN: Efficient Context Window Extension of Large Language Models NTK-Aware Scaled RoPE allows LLaMA models to have extended (8k+) context size without any fine-tuning and minimal perplexity degradation Dynamically Scaled RoPE further increases performance of long context LLaMA with zero fine-tuning LongRoPE: Extending LLM Context Window Beyond 2 Million Tokens Base of RoPE Bounds Context Length`}).add({id:7,tag:"en",href:"/blogs/searchengine/basics/",title:"SearchEngine-1-概要",description:"【笔记】wangshusen-搜索引擎技术：搜索引擎的基本概念",content:`搜索引擎的基本概念 查询词（query）：用户在搜索框中输入的词。
查询建议（SUG）：用户点击搜索之前，搜索引擎会给出的相关词，如用户输入“深度学习”，SUG 可能为“深度学习框架”、“深度学习教程”等等。
作用是让搜索引擎用起来更方便。
文档：搜索结果，如网页链接（Google、百度）、商品（Amazon、淘宝）、视频（YouTube、B 站）
搜索结果页：搜索完成的整个界面。
搜索结果页的主体为文档，会有首图、标题、摘要等预览
标签/筛选项：搜索结果页中包含的信息，如最新（按时间）、最热（按点击&amp;交互次数）、视频。
文档单列曝光： 搜索结果页每行只有一篇文档（Google、百度、YouTube）
文档双列曝光： 搜索结果页每行有两篇文档（淘宝、京东、小红书），两者只是产品形态的差异，后台的搜索引擎算法和工程架构差不多
曝光 &amp; 点击 搜索引擎考虑两类点击率：文档、查询词
曝光： 用户在搜索结果页上看到文档，就算曝光。
如屏幕上最多展示 33 篇文档，假如用户搜索之后不往下滑，那么只有前 33 篇文档获得曝光。
文档点击：在曝光之后，用户点击文档，进入文档详情页。
文档点击率：
文档点击总次数 / 文档曝光总次数（独立看待每篇文档的点击） 10%10 \\% 垂搜 &amp; 通搜 垂直搜索（垂搜）：针对某一个行业的搜索引擎
通用搜索（通搜）：覆盖面广，不限于一个领域
垂直搜索 电商搜索：Amazon、淘宝、京东、拼多多
学术搜索：Google Scholar、知网
本地生活搜索：Yelp、大众点评、美团、饿了么
酒店机票搜索：Booking、美团、携程、东航
租售房搜索：Zillow、Redfin、Airbnb、贝壳
招聘搜索：LinkedIn、脉脉、Boss 直聘
特点：
垂搜的文档普遍是结构化的，容易根据文档属性标签做检索筛选:
电商：商品，可以限定品牌、卖家、价格、颜色
学术：论文，可以限定关键词、作者、期刊、年份
本地生活：店铺，可以限定类目、商圈、距离
垂搜用户的意图明确
大众点评用户搜索“寿司”，目的是找寿司餐厅。
淘宝用户搜索“拳击”，目的是找拳击相关的商品。
通用搜索 谷歌、百度、必应、抖音（抖音可以自动判断查询词的意图，找视频/用户/商品/直播/本地生活的店铺）
特点：
文档来源广，覆盖面大（网页、视频、图片、商品、直播、店铺）
没有结构化，检索难度大（需要搜索引擎自己做网页分析抽取信息）
用户使用通搜的目的各不相同，较难判断用户意图
搜索引擎的用户满意度 【业界共识】影响用户满意度的三大因素：
相关性：查询词和文档在语义上有多相关
内容质量：分为 EAT、文本质量、图片质量等几类，每一类都有多种分数
时效性：意图分为突发时效性、一般时效性、周期时效性
【移动互联网时代】
个性化：反映在预估点击率、交互率上
地域性
相关性（Relevance） 相关性 是 查询词 qq 与 文档 dd 两者的关系
相关性是客观标准，不取决于用户 uu ，无个性化。(如果大多数有背景知识的人认为 (q,d)(q,d) 相关，则判定为相关。
相关性是语义上的，不是字面上的。相关是指 dd 能满足 qq 的需求 或 回答 qq 提出的问题
查询词 qq 可能有多重意图。只要 dd 命中 qq 的一种主要意图，则 (q,d)(q,d) 算相关
召回、粗排、精排均需要计算相关性。
召回海选阶段: 候选文档量级为数万，使用 文本匹配分数（如 tf-idf、类目匹配分数等）或 双塔 BERT 模型 粗略地估计相关性。
粗排阶段：候选文档量级为数千，使用 双塔 BERT 模型（推理代价小） 或 浅层交叉 BERT 模型 计算相关性。
精排阶段：候选文档量级为数百，使用 交叉 BERT 模型（通常 44 层）计算相关性。
内容质量 内容质量不是一个分数，而是很多分数，会在搜索排序中用到
EAT：专业性、权威性、可信赖，针对作者和网站（对金钱、健康类的查询词尤为重要。）
文本质量：文字质量、文章意图、标题党这样的负面信号，针对文档本身。
图片质量（或视频质量）：分辨率、有无水印、是不是截图、图片是否清晰、图片的美学……
EAT EAT（又被称为权威性）：针对网站和作者，是谷歌提出的内容质量评价标准
专业性（Expertise）：作者有专业资质，比如医生、记者等。
权威性（Authoritativeness）：作者、网站在领域内有影响力，不会被用户质疑。
可信赖（Trustworthiness）：作者、网站的名声好坏。
对于 your money or your life 方面（金钱、健康类）的查询词，EAT 是排序的重要因子
Your money：
金融理财（保险、投资、报税、贷款、转账）
电商、购物
Your life：
医疗健康（诊断建议、用药建议、医院介绍、减肥）
法律等严肃的主题（诉讼、移民、选举、离婚、收养）
对人生有重大影响的主题（高考、择校、出国、就业）
文本质量 文本质量：针对文档本身。
文字的质量：文章写得好不好？
文章的价值：文章是否清晰、全面，事实是否准确，信息是否有用
作者的态度和水平：写作是否认真，写作的专业程度，写作的技巧
宠物饲养：解释清楚、事实正确，对读者有价值。
笑话：好笑。
影评：清晰丶全面丶公正、深刻
文章的意图：有益、有害？
有益：分享有用的知识、攻略、亲身经历
有害：虚假信息、软广、散布仇恨、男女对立、发泄情绪
负向信号：标题党、图文不一致、虚假引流标签、堆砌关键词……对于每个文本质量分数，都有一个专门训练的模型：
文本质量不是一个分数，而是很多个分数，在搜索排序中起作用。
对于每个文本质量分数，都有一个专门训练的模型
模型：BERT 等 NLP 模型、CLIP 等多模态模型。（预训练后再用人工标注的数据做 finetune）
数据：制定分档规则，然后人工标注
文本质量分数都是静态的，只需计算一次。在文档发布或被检索时，用模型打分，分数存入文档画像（搜索排序时直接读取文档画像）
时效性 文档的年龄（从文档发布/更新到现在过了多久）在排序中起多大作用？
时效性强需求：query = “最新房贷政策”、“美元汇率”
有时效性需求但不强：query = “泰国旅游”、“新荣记探店”
无时效性需求：query = “搞笑萌宠”、“宝宝湿疹”
决于查询词，查询词对时效的需求越强，文档年龄的权重就越大
优化搜索时效性的关键是 识别查询词的时效性意图，即查询词对“新”的需求，即卡文档年龄
分类：
突发时效性
一般时效性（强/中/弱/无）
周期时效性
识别方法：
数据挖掘
语义模型
突发时效性 查询词涉及突发的新闻、热点事件。
如果查询词带有突发时效性，那么用户想看最近发布的文档
&quot; 阿根廷足球”有没有突发时效性？
&quot; 王力宏”有没有突发时效性？
识别方法：以数据挖掘为主
挖掘站内搜索量激增的查询词(明星八卦)
挖掘站内发布量激增的关键词（抖音小红书）
爬取其他网站的热词
为什么不能用 BERT 等自然语言模型？
人擅长判断文字质量、相关性，BERT 也擅长
如果不借助新闻媒体，人无法判断突发时效性
一般时效性 只看查询词字面就可以判断时效性意图的强弱，（无需知道近期是否有大新闻）
按需求强度分为 44 档：强、中、弱、无
【例】 (从强到弱) 某品牌羊毛、黄金价格、上海楼市新闻、在美国更新中国护照、单反相机测评、苏联笑话、82 版射雕
识别方法：BERT 等语义模型
周期时效性 在每年特定时间表现为突发时效性，在其他时间表现为无时效性。
【例】双十一、春晚小品、高考作文、奥斯卡
识别方法：
可以不做任何处理。 当查询词表现出突发时效性时，会被算法挖掘到。
可以通过人工标注、数据挖掘 识别周期时效性查询词。
个性化 考虑到不同用户有不同偏好，搜索引擎可以根据用户特征做排序（类似推荐系统）。
衡量用户对文档的偏好：
预估点击率
交互率
为什么需要个性化和点击率模型？
查询词越宽泛（例如“头像”），就越需要个性化排序
宽泛的查询词（例如“头像”）相关的文档数量巨大，其中小部分是用户感兴趣的。
精准的查询词（例如“权力的游戏龙妈头像”）不需要个性化。
预估点击率和交互率有利于提升相关性和内容质量
相关且高质量的文档更容易被点击、点赞、收藏、转发。
与 BERT 等语义模型互补，解决 bad case。
即便是非个性化排序，也会用模型预估点击率和交互率（从另一个角度反映出相关性和内容质量），有助于提升排序效果。
【思考题】
PageRank：根据网页之间的链接关系给网页打分。如果很多重要网站的页面指向网页 xx ，则认为网页 xx 也重要。
【问题】：PageRank 属于搜索排序用到的哪一类因子? B
A.相关性	B． 权威性 (EAT)	C． 文本质量	D． 时效性	E． 个性化
搜索引擎的评价指标 北极星指标（也叫核心指标）
用户规模、留存率（用户更多更活跃）
单个策略不容易提升规模和留存
对于某些垂类搜索引擎北极星指标可能有区别，如电商搜索，还包括商品交易总额等
中间指标（与北极星指标正相关）
用户的点击等行为，反映搜索质量的好坏
做 A/B 测试，中间指标很容易显著
人工体验评估
人工评估搜索体验，让标注员评估搜索结果好坏
考察 GSB、DCG 等指标
北极星指标：用户规模&amp;留存 用户规模 日活用户数（Daily Active User，DAU），或 月活用户数（Monthly Active User，MAU）
日活用户数：
搜索日活（Search DAU）
推荐日活（Feed DAU）
搜索渗透率
搜索渗透率 = Search DAU / APP 总体 DAU。
搜索体验越好，用户越喜欢用搜索功能，搜索渗透率越高
提升搜索日活、搜索渗透率的方法：
搜索的体验优化，可以提升搜索留存，从而提升搜索日活。
产品设计的改动，从推荐等渠道向搜索导流，推荐的用户更频繁地用搜索，提升搜索渗透率，从而提升搜索日活。
用户留存 次 77 留: APP 的次 77 日内留存
【例】
Feb 1 有 11 亿用户使用 APP。
这 11 亿人中，有 88 千万在 Feb 2~8 使用 APP 至少 11 次。
Feb 1 的 次 77 留 = 8 千万/1 亿=80%\\text8 千万 / \\text1 亿 = 80\\% 。
常用的留存指标：
次 11 留
次 77 留
次 3030 留
次 nn 留随 nn 单调递增： 次1留≤次7留≤次30留\\text次1留 \\le \\text次7留 \\le \\text次30留 把 APP 多个功能单独拆出看留存指标：
APP 总体次 nn 留
搜索次 nn 留
推荐次 nn 留
现在更流行 LT7 和 LT30 留存指标。原因：LT 是加和，次 NN 留是 OR，加和波动更小，更容易显著。
中间指标 用户的点击等行为、规模和留存指标未必适合评价单个策略。
单个策略很难显著提升规模和留存（很难达到统计显著性）。即便能达到，规模和留存指标也需要很长时间才能显著（不利于快速迭代模型和策略）。
规模和留存指标更适合作为大盘长期指标观察，评估整个团队长期的表现（所有策略叠加）。
长期优化搜索体验，规模和留存会稳定提升，反映在 AB 测试的 holdout 上。
中间指标：与规模和留存强关联，且容易在 AB 测试中显著。
点击率&amp;有点比 文档点击率：搜索结果页上文档被用户看到，算作曝光。（通常是 10%10\\% ）
文档点击率 = 总点击数 / 总曝光数
有点比（查询词点击率）： 搜索结果页上，用户点击任意一篇文档，则本次搜索算有点击（是否找到至少一篇用户需要的文档）。（通常是 70%70\\% ）
有点比 = 有点击的搜索次数 / 总搜索次数
首屏有点比：仅当点击发生在首屏，本次搜索算有点击（考察排序的效果，是否把用户需要的文档排在首屏）
首屏有点比 ≤\\le 有点比
3 个指标关联很强，一个指标提升会造成其它指标的提升：
改进 排序策略 通常会同时提升以上三种指标
改进 召回策略 可以提升 文档点击率 和 有点比（因为首屏的几篇文档主要由排序决定）
首点位置 用户需要的文档排名是否靠前。
平均首点位置：
一次搜索之后，记录第一次点击发生的位置
如果没有点击，或者首点位置大于阈值 xx ，则首点位置取 xx 对所有搜索的首点位置取平均。
平均首点位置越小越好：平均首点位置小，说明符合用户需求的文档排名靠前，用户体验好。
优化搜索排序，通常会同时改善 有点比、首屏有点比、平均首点位置，三者与留存指标强相关。
主动换词率 如果用户搜到需要的文档，通常不会换查询词。
【例】
女性用户搜 “机械键盘”，结果大多是黑色的，不符合用户喜好，个性化差，用户会换词为 “机械键盘 女性” 搜 “权利的游戏”，搜索引擎没能自动纠错，搜到的文档很少、质量不好，用户会换词为 “权力的游戏” 换词的判定
一定时间间隔内，搜的两个查询词相似（比如编辑距离小），则被认定为换词。
主动换词 vs 被动换词：
主动换词：原因是没找到满意的结果，说明搜索结果不好。
被动换词（说明搜索引擎很智能）：比如搜索建议“您是不是想搜权力的游戏”，用户点击建议。
交互指标 用户点击文档进入详情页，可能会点赞、收藏、转发、关注、评论。
交互通常表明用户对文档非常感兴趣（强度大于点击），因此可以作为中间指标（类似于有点比、首点位置、换词率）
缺点
交互行为稀疏（每百次点击，只有 10 次点赞、2 次收藏），单个交互率波动很大，且在 AB 测试中不容易显著。
解决
取各种交互率的加权和作为总体交互指标，权重取决于交互率与留存的关联强弱。
中间目标 -&gt; 留存目标： 体验优化的策略往往同时改善多种中间指标：有点比、首屏有点比、平均首点位置、主动换词率、交互指标（短期内 A/B test 就会显著）
单个体验优化的策略很难在短期内显著提升留存指标（通常微弱上涨，不具有统计显著性）。只要中间指标普遍正向，实验就可以推全。
上述中间指标与留存有很强的关联，长期持续改善中间指标，留存指标会稳定上涨。
人工体验评估 Side by Side 评估 判断新旧两种策略谁的结果更好
【步骤】
随机抽一批搜索日志，取其中查询词、用户画像、场景。运行新旧两种策略，得到两个搜索结果页（文档列表，标注员可以看到标题、摘要、首图等信息）。
固定查询词、用户、场景（时间、地点、手机型号等），搜索结果的差异只来自于策略。
随机抽样搜索日志时，非均匀抽样（否则高频查询词太多），需要覆盖高频、中频、低频查询词。
对于一条查询词，人工评估两个列表，分别对应新旧两种策略。
基于查询词、用户画像、搜索场景，判断左右两个列表谁更好。
盲评，即新策略出现在左、右的概率都是 50%50\\% 。
不是判断具体哪篇文档更好，而是判断哪个列表整体更好。
【评价指标】
使用 GSB(Good Same Bad）作为评价指标：
如果新策略更优，记作 Good（G）
如果两者持平，记作 Same（S）
如果旧策略更优，记作 Bad（B）
【例】：评 300 条查询词，GSB 为 50:220:3050:220:30 ， G&gt;BG &gt; B ，新策略更好
月度评估 【步骤】
每个月随机抽取一批搜索日志（用户实际看到的搜索结果），每条搜索日志包含查询词 qq 、用户 uu 、场景 cc 、排名前 kk 的文档 d1,⋯ ,dkd_1, \\cdots ,d_k 。
随机抽样搜索日志时，非均匀抽样，比例固定，需要覆盖高频、中频、低频查询词。
文档数量 kk 取决于平均下滑深度（用户平均浏览结果页的前 kk 篇文档），比如 k=20k=20 。
标注员评估每一篇文档，打分 score(q,u,c,di)\\textscore(q, u, c, d_i) ，越大说明文档 did_i 越好
可以单独给相关性、内容质量、时效性打分 (每个维度单独评分)。
可以只打一个综合满意度分数（有具体的分档方法）
【评价指标】
DCG@k=∑i=1kscore(q,u,c,di)log⁡2(i+1). \\mathrmDCG@k =\\sum_i = 1^k\\frac\\mathrmscore(q, u, c, d_i)\\log_2(i+1). DCG 评价的不是单独文档，而是搜索结果页整体好坏
score(q,u,c,di)\\mathrmscore(q,u,c,d_i) ：标注员评分，越大说明文档 did_i 越好。
log⁡2(i+1)\\log_2(i+1) ：加权，文档排名越靠后，这篇文档对用户体验的影响越小，权重越低。
对月度所有搜索日志，取 DCG 的均值，作为月度评估的结果
可以是自我对比，是否优于往期的 DCG
可以与竞对对比，是否优于竞对的 DCG
总结 北极星指标：用户规模真&amp;留存
用户规模：
APP 总体的 DAU、搜索的 DAU
搜索渗透率（Search DAU／APP DAU)
（百度不看搜索渗透率，看推荐渗透率，因为其主要功能是搜索，搜索渗透率接近 100%100\\% ）
用户留存：
次 11 留、次 77 留、次 3030 留。
LT7、LT30 （目前更流行）
APP 总体的留存、搜索自身的留存。
规模和留存指标未必适合评价单个策略。
单个策略很难显著提升规模和留存。
规模和留存指标需要很长时间才能显著。
规模和留存指标更适合作为大盘长期指标观察。
评估整个团队长期的表现（所有策略叠加）。
长期优化搜索体验，规模和留存会稳定提升，反映在 A/B 测试的 holdout 上。
中间指标：用户的点击等行为
中间指标：与规模和留存强关联，且容易在 A/B 测试中显著
有点比：是否找到至少一篇用户需要的文档。
首屏有点比：是否把用户需要的文档排在首屏。(考察排序效果)（越高越好）
首点位置：用户需要的文档排名是否靠前。(考察排序效果)（越小越好）
主动换词率：没搜到用户需要的文档，用户会换词重搜。（越小越好）
交互率：文档是用户非常需要的’那么用户会点赞丶收藏转发、关注·····
人工体验评估
Side by side 评估：以 GSB 作为评价指标，对比新旧两种策略，决策新策略是否可以推全。
缺点
评估过于主观，评估标准未必与普通用户体验一致。
每次仅评价几百个搜索结果页，结果噪声大，稳定性不如 AB 测试（AB 测试虽然单次结果很随机，但样本量大，统计意义上可靠）。
速度慢于 AB 测试，影响开发迭代效率。
人工成本比较贵。
不适合强个性化搜索引擎，个性化较难处理，仅凭用户画像难以判断用户真实需求。
月度评估：以 平均 DCG 作为评价指标，与自己往期做对比，与竞对做对比，判断搜索团队整体水平。
Side by side 和月度评估的区别：
目的不同：前者决策新策略是否推全，后者判断搜索团队整体水平（不是单个策略）。
指标不同：前者的指标是 GSB，后者的指标是 DCG。
有无争议：前者充满争议，后者没有缺点和争议 。
【思考题】
【问题】：用于评价用户体验，整个搜索引擎的日均搜索次数是好的指标吗？
【提示】：
是好的商业目标，它与广告收入正相关。
可以用来对比新旧策略的用户体验吗?
日均搜索次数 = DAU × 人均搜索次数。
人均搜索次数与换词率的关系是什么?
DAU 增长是好事，但人均搜索次数增长不一定是好事，不代表用户体验变好
搜索引擎的链路 查询词处理：分词、词权重、类目识别、意图识别、查询词改写等多个功能模块，后面召回和排序会使用查询词处理的结果。
召回：从海量文档中找出几万篇与查询词相关的文档，二三十条召回通道同时运行，各自有一些配额。召回结束后，会用规则或简单模型做个初步筛选，把文档数量降低到几千，再送去排序服务器。
排序：决定搜索结果页上文档展示的顺序。需要计算相关性、点击率、内容质量、时效性等很多分数，然后用规则或模型融合这些分数，给出最终的排序。
推荐系统排序 主要靠预估点击率和交互率。
搜索引擎排序 中的预估点击率和交互率是个性化分数，此外还需要相关性、时效性、内容质量等分数综合，其中相关性最重要。
查询词处理 只要有 分词 就能做文本召回，如果用向量召回甚至连分词都不需要；
除分词之外的其他功能（词权重、类目识别、意图识别、改写 等）都是为了用搜索引擎效果更好，而非必不可少。
查询词处理的 缓存，如果查询词命中缓存，就直接读取缓存中的查询词处理结果，不需要调用各个服务做计算。对于通用搜索引擎，几百万个 高频查询词就能覆盖每天大部分的搜索请求。
分词（Tokenization） 中文搜索引擎必不可少，主要给文本召回使用（文本召回必须要把查询词切成多个较短的 term）
【例】：冬季卫衣推荐 —&gt; 冬季/卫衣/推荐
为什么需要做分词？
文本召回根据词（term）在倒排索引中检索文档。
倒排索引的 key 大多是“冬季”、“卫衣”、“推荐”这样的常用词，数量不大。
假如倒排索引的 key 是“冬季卫衣推荐”这样的词，倒排索引会过于巨大（工程上的困难）。
词权重（Term Weight） 非必要但有用
【例】：冬季卫衣推荐 —&gt; 冬季/卫衣/推荐
词权重：卫衣 &gt; 冬季 &gt; 推荐。
丢弃“卫衣”，搜索“冬季推荐 &quot; （绝对不能丢弃）
丢弃“冬季”，搜索“卫衣推荐 &quot; （若丢弃对搜索结果有较大影响）
丢弃“推荐”，搜索“冬季卫衣” （若丢弃，查询词语义基本不变，没有影响）
为什么要计算词权重（Term Weight）？
如果查询词太长，没有文档可以同时包含其中所有词，文本召回找不到用户想要的文档，需要丢弃不重要的词（告诉文本召回哪些 term 不重要，可以丢弃）
召回结束之后需要用简单的规则或模型计算相关性，对文档做个初步筛选。计算查询词与文档的相关性时，可以用词权重做加权
类目识别 每个平台都有各自的 多级类目体系(一个平台可能有几十个一级类目，几百个二级类目，甚至会细分出三级类目)。
一级类目：美妆
二级类目：彩妆、护肤、美甲、香水、医美
用 NLP 技术识别文档、查询词的类目（多标签分类问题），一篇文档/查询词可能同时属于多个类目。
文档类目识别：在文档发布（或被爬虫获取到）时，离线 识别文档类目。
查询词类目识别：在用户做搜索时，在线 识别查询词类目。
类目识别的作用：召回模型、排序模型将文档、查询词类目作为特征。
查询词意图识别 一条查询词可以同时带有多种意图。
时效性意图：查询词对文档“新”的需求，召回和排序均需要 考虑文档的年龄。
【例】：
新款电动车测评：一般时效性意图
热点新闻：突发时效性意图
地域性意图：召回和排序不止需要文本相关性，还需要结合用户定位地点、查询词提及地点、文档定位地点。
【例】：附近的美食
用户名意图：用户想要找平台中的某位用户，应当检索用户名库，而非检索文档库。
求购意图：用户可能想要买商品，同时在文档库、商品库中检索。
查询词改写 技术难度最大。
用户输入查询词 qq ，算法将其改写成多个查询词 q1′,⋯ ,qk′ q_1^\\prime,\\cdots,q_k^\\prime 。（独立用 q,q1′,⋯ ,qk′q, q_1^\\prime,\\cdots,q_k^\\prime 做召回，对召回的文档取并集。）
查询词改写有什么用？
解决语义匹配、但文本不匹配的问题（文本召回只能做字面上的匹配)。
【例】：
qq = “LV包”
dd = “推荐几款 LOUIS VUITTON 包包”
qq 和 dd 语义相关，但文本召回无法用 qq 检索到 dd 解决召回文档数量过少的问题。
qq 不规范表达，或 qq 过长，导致召回结果很少。
【例】：
老谋子拍的电影 = 张艺谋的电影
身高 160 体重 120 年龄 20 女穿搭 = 微胖女大学生穿搭
召回（Information Retrieval） 给定查询词 qq ，从文档库（数亿篇文档）中快速检索数万篇可能与 qq 相关的文档 d\\d\\ 文本召回（即文本匹配，最传统的方法）：借助倒排索引，匹配 qq 中的词和 dd 中的词.
向量召回（双塔召回）：用BERT这样的深度学习技术，将 qq 和 dd 分别表征为向量 xqx_q 和 zdz_d 。给定查询词向量 xqx_q ，在向量数据库中做ANN查找，召回相似度高的文档 zdz_d 。
KV召回（离线构造的KV索引，用于高频查询词的召回）：对于高频查询 qq ，离线建立 q→List⟨d⟩q \\rightarrow \\textList \\langle d \\rangle 这样的 key-value索引。线上直接读取索引，获取 qq 相关的文档。
文本召回 借助倒排索引
离线处理文档，建立倒排索引(key是term， value是文档)。（给定词 tt (term)，可以快速找到所有包含 tt 的文档）
给定查询词 qq ，做分词得到多个词 t1,⋯ ,tkt_1, \\cdots, t_k 对。
于每个词 tit_i ，检索倒排索引，得到文档的集合 Di\\mathcalD_i , 这些文档全都包含 tit_i 。
求 kk 个集合的交集 D1∩⋯∩Dk\\mathcalD_1 \\cap \\cdots \\cap \\mathcalD_k ，作为文本召回的结果。
交集可能很小甚至为空，因此需要对 qq 做丢词、改写。
向量召回 双塔模型
借助深度学习技术，把查询词和文档表征为向量，计算两个向量的内积或余弦相似度。
训练模型时，用预测点击或者相关性作为预测目标。
文档的预测表征：预先计算好，存储于向量数据库。
查询词的向量表征：实时计算（查询词很短，推理代价不大）。
在线上做召回时，给定查询词的向量表征，在向量数据库中做 ANN 查找, 找到相似度最高的一批文档作为召回结果。
KV召回 作为补充
key：用户真实搜过的查询词，在过去一段时间被搜的次数高于某个阈值。
value：文档列表，每个查询词都对应很多篇文档，由于离线做过筛选，这些文档与查询词都有高相关性。
排序（Ranking） 搜索排序需要多个模型计算多个分数
排序的依据 影响用户满意度的因素
相关性（主要决定因素）：查询词和文档之间的关系，重要性最高，在线上用BERT模型（4/6/12层都有，取决于算力）实时计算查询词和文档的相关性。
内容质量：指文档的文本和图片质量、以及作者或者网站的EAT。算法离线分析文档的内容质量（在文档发布或被爬虫检索到时，算法就会计算文档的内容质量，得到很多分数），把多个分数写到文档画像中。
时效性：主要指查询词对“新”的需求。查询词处理分析时效性，把结果传递给排序服务器，如果查询词有时效性需求，那么文档年龄会成为排序的主要因素之一。
个性化：在不同的搜索引擎中，个性化的重要性各不相同(小红书看重个性化，个性化对百度的重要性片偏低（无登录）)。在线上用多目标神经网络预估点击率和交互率。（与推荐系统几乎相同）
【思考题】
【问题】：搜索引擎的时效性很差，该从哪些方面改进？
【提示】：查询词处理、召回、排序分别能做什么？
Reference https://github.com/wangshusen/SearchEngine`}).add({id:8,tag:"en",href:"/blogs/searchengine/rel/",title:"SearchEngine-2-相关性",description:"【笔记】wangshusen-搜索引擎技术：相关性",content:`相关性：定义与分档 工业界标准流程：
制定标注规则→标注数据 → 训练模型→线上推理 \\text制定标注规则 \\rightarrow \\text标注数据  \\rightarrow \\text 训练模型 \\rightarrow \\text线上推理  搜索产品和搜索算法团队定义相关性标注规则。
人为将 (q,d)(q,d) 的相关性划分为 44 个或 55 个（如百度）档位。后以 44 个为例。
相关性分档规则非常重要，假如日后有大幅变动，需要重新标注数据，丢弃积累的数据。
产品和算法团队监督指导标注团队的工作，累积数十万、数百万条 (q,d)(q,d) 样本。
算法团队用人工标注的数据训练相关性模型。
相关 V.S. 不相关 字面匹配 vs 需求匹配 相关性不是字面上的匹配，而是需求匹配。
相关性是指 dd 能满足 qq 的需求或回答 qq 提出的问题。
哪怕 qq 和 dd 字面上完全不匹配，两者也可以被判定为相关。
qq = 谁掌握芯片制造的尖端技术
dd = 全球最先进的光刻机都由荷兰 ASML 公司制造
即便 qq 和 dd 字面匹配，两者也可能不相关。
qq = 巴伦西亚旅游
dd = 我去巴伦西亚旅游，吃到了最好最正宗的西班牙海鲜饭，回来研究了一番，这个视频给大家介绍西班牙海鲜饭的做法···
相关性标注只考虑相关性 相关性标注的重点问题：相关性标注只考虑相关性，不考虑内容质量、时效性等因素。
满足相关性，但内容质量低，OK
qq = 什么药物可以治愈新冠？
dd = 一则虚假广告，声称某种草药可以治愈新冠，并用阴阳调和原理解释该草药克制新冠病毒
满足相关性，但时效性低，OK
qq = 上海落户政策
dd = 一篇过时的文章，介绍 2015 年的上海落户政策。
相关性数据训练的模型只负责判断相关性 （内容质量/时效性由别的模型判别）
多意图 查询词 qq 可能有多种意图，文档 dd 只需命中一种意图就算相关
【例】
黑寡妇：黑寡妇蜘蛛、漫威电影黑寡妇角色、车臣黑寡妇组织。
用户搜 =“黑寡妇”，不论用户的意图是什么，黑寡妇蜘蛛黑寡妇角色、黑寡妇组织的文档都满足相关性。
越短的查询词就越可能有多意图。
若没有命中用户的真实意图，是个性化的问题，搜索引擎没有根据用户画像做好查询词理解和排序。
上位词&amp;下位词 下位词∈上位词\\text下位词 \\in \\text上位词 搜上位词，出下位词，判定为 相关。
搜 qq =“广东菜”，出 dd = “潮汕美食”。
搜 qq =“红色口红”，出 dd = “玫红色口红”
搜下位词，出上位词，通常判定为 不相关。
搜 qq = “潮汕美食”，出 dd =“经典广东菜’
搜 qq = “玫红色口红”，出 dd =“红色口红”
丢词的判定 丢词即文档不能完全满足查询词的需求，丢失了一部分需求。
丢弃 核心词，判定为不相关
搜 qq =“情人节餐厅”，出 dd = “情人节礼物”。
搜 qq =“黄晓明”，出 dd =“杨颖拍过的电影”。
丢失 重要限定词（主观性较强），判定为不相关。
搜 qq = “初二物理考点”，出 dd = “初三物理考点”。 搜 qq = “黄石公园春季旅游”，出 dd = “黄石公园秋季旅游 &ldquo;。 丢失 不重要限定词，判定为相关
搜 qq =“精彩的好莱坞动作片”，出 dd = “好莱坞动作片 top 10”。
搜 qq = “东南亚十大旅游景点”，出 dd = “东南亚热门旅游景点”。
具体要看 dd 能否满足 qq 的主要需求或回答 qq 提出的问题。
总结 相关性是指 dd 能满足 qq 的需求或回答 qq 提出的问题，而非字面上的匹配。
相关性标注只考虑相关性，不考虑内容质量、时效性
如果 qq 有多种意图，只要命中一种意图，就判定为相关。
搜上位词出下位词，判定为相关；搜下位词出上位词，通常判定为不相关。
丢核心词、重要限定词，判定为不相关；丢不重要的限定词，判定为相关。
档位细分 根据内容占比划分高、中档位 如果 (q,d)(q,d) 相关，则进一步划分为高（超过 50%50\\% ）、**中（不超过 50%50\\% ）**两档。
细分规则：满足需求的内容的篇幅占比是否超过 50%
【例 1】
搜索 qq = “泰坦尼克号”，出 dd = 演员莱昂纳多关于他的代表作的访谈，其中重点谈了《泰坦尼克号》电影。
文档 dd 满足查询词 qq 的需求，判定为相关。
如果访谈内容中《泰坦尼克号》篇幅占比大于 50%50\\% ，判定为高档位，否则判定为中档位。
【例 2】
搜索 qq = “小米手机测评”，出 dd = 几款安卓手机的测评，其中包括几款小米手机。
文档 dd 满足查询词 qq 的需求，判定为相关。
如果文档中小米手机篇幅占比大于 50%50\\% ，判定为高档位，否则判定为中档位。
根据参考价值划分低、无档位 如果 (q,d)(q,d) 不相关，则进一步划分为低（有参考价值）、**无（无参考价值）**两档。
细分规则：文档是否具有参考价值（用户可能愿意看这篇文档，代表有参考价值）
【例 1】
搜索 qq = “初二下册物理考点”，出 dd = “中考物理考点”。
丢失重要限定词，导致文档 dd 无法满足查询词 qq 的需求，判定为不相关。
“中考物理考点”有一定参考价值，档位为“低”
【例 2】
搜索 qq = “初二下册物理考点”，出 dd = “初一数学考点”。
丢失重要限定词，导致文档 dd 无法满足查询词 qq 的需求，判定为不相关
“初一数学考点 &quot; 没有参考价值，档位为“无”。
总结 相关性是指 dd 能满足 qq 的需求或回答 qq 提出的问题。
先判断 qq 与 dd 是否相关，划分为 22 大档位：
判断是否相关只考虑相关性本身，不要考虑内容质量、时效性、个性化等其他因素。
qq 可能有多种意图，只要 dd 命中其中一种意图，就算相关。
搜上位词出下位词，判定为相关；反之，通常判定为不相关
如果 dd 丢弃了 qq 中的词，需要判断 dd 能否满足 qq 的需求，从而判断是否相关。
将大档位细分为 44 个小档位。
根据所占篇幅，将 &ldquo;相关&rdquo; 细分为高、中 22 个小档位。
根据文档是否有参考价值，将 &ldquo;不相关&rdquo; 细分为低、无 22 个小档位
相关性细分为高、中、低、无 44 个小档位。
有的公司将 &ldquo;相关&rdquo; 细分为 33 个小档位，“不相关 &quot; 细分为 22 个小档位，一共 55 个小档位。
标注流程 由算法团队抽取待标注样本
从搜索日志中随机抽取 nn 条查询词， nn 的大小取决于标注人力。既有高频查询词，也有中、低频查询词（假如中低频查询词占比太小，训练出的模型在中低频查询词上的表现会比较差）
给定 qq ，从搜索结果中抽取 kk 篇文档，组成二元组 (q,d1),⋯ ,(q,dk)(q, d_1) , \\cdots, (q, d_k) ， 44 个相关性档位的 样本数量尽可能平衡。
不能直接取搜索结果页排名 Topk 的文档，否则高档位（即高相关）文档过多，低档位文档过少。样本有偏不利于训练。
由产品团队和算法团队监督标注过程和验收结果
遇到难以界定档位的 (q,d)(q, d) ，由产品和算法团队做界定和解释。
一条样本由至少两人标注，两人标注的结果需要有一致性。如果标注不一致，样本会被直接丢掉，或找第三人标注。
一致率指两个人的标注结果有多大比例是相同的。一致率大于某个阈值，如 80%80\\% ，才会被接受。
若一致率合格，再由产品团队抽查标注结果（可以认为产品团队的标注结果是正确的，为 ground truth），要求准确率高于某个阈值。
只靠抽查还是不够（数量太少），可以事先往数据中埋雷（如往 1000010000 条待标注样本中掺杂 200200 条产品团队自己标注的样本），考察埋雷样本的标注准确率。
评价指标（AUC、正逆序比、DCG） Pointwise 评价指标：AUC（Area Under the Curve）
Pairwise 评价指标：PNR（正逆序比，Positive to Negative Ratio）
Listwise 评价指标：DCG（Discounted Cumulative Gain）
离线: AUC 和 PNR （看相关性模型在测试集上的表现够不够好）
线上排序：DCG （线上直接搜索结果页存在搜索日志里，事后做抽样，让人工标注相关性，然后计算 DCG，评价排序是否合理）
Pointwise 评价指标 二分类评价指标 把 相关性 看作 二分类问题，独立对待 每一对 (q,d)(q, d) 二元组。
训练集还是 44 个小档位（高中低无），但测试集只用 22 个大档位（把测试集相关性档位转化为 0/1）
高、中两档合并，作为标签 y=1y = 1 低、无两档合并，作为标签 y=0y = 0 相关性模型输出预测值 p∈[0,1]p\\in [0,1] ， pp 的值越大，表示模型认为查询词和文档越有可能相关
二分类评价指标：
准确率、召回率、F1、AUC（工业界最常用 AUC 来评价搜索相关性）
调整二分类的阈值，获得很多组 假阳性率&amp;真阳性率 的二元组，获得 ROC 曲线
用 **AUC （Area Under the Curve）**评价模型的预测是否准确。
AUC =0.5= 0.5 说明模型没有学到东西 （没有比随机猜测更好）
比较好的相关性模型的 AUC 在 0.8 ~ 0.95 之间
Pairwise 评价指标 每次取两个二元组做对比。问题：只考虑文档两两之间的序，不考虑整体的序。
根据模型估计的相关性分数 pp 对文档做排序（不知道真实相关性分数)
例子中有 66 篇文档，它们的分数满足 p1≥p2≥⋯≥p6p_1 \\ge p_2 \\ge \\cdots \\ge p_6 有 kk 篇文档，则有 (k2)=k!2!×(k−2)!\\beginpmatrix k\\\\ 2 \\endpmatrix= \\frack!2!\\times (k-2)! 种方式将文档两两组合
k=6k=6 ，有 (62)=15\\beginpmatrix 6\\\\ 2 \\endpmatrix = 15 种组合
有 22 个逆序对 (2,3)(2,3) , (2,4)(2,4) ， 1313 个正序对
正逆序比为： PNR=132\\textPNR=\\frac132 ⟨高,高⟩\\langle\\text高,\\text高\\rangle 这样的 pair，可以看成正序对，也可以忽略掉这样的二元组。
以下两种情况正逆序比相同，都是 13:213:2 ，在 Pairwise 评价指标下是等价的。但实际上，右边的情况要优于左边。（因为错误发生在后面，用户浏览搜索结果页时通常是从上到下浏览，要保证前面的结果都是高相关性）
Listwise 评价指标 更看重排在前面的文档，给更大的权重
Pairwise 指标 v.s. Listwise 指标 有 nn 篇候选文档，根据模型打分做降序排列，把文档记作 d1,⋯ ,dnd_1, \\cdots, d_n 。（此时不知道真实相关性分数）
d1,⋯ ,dnd_1, \\cdots, d_n 的真实相关性分数为 y1,⋯ ,yny_1, \\cdots, y_n 。（人工标注相关性档位，档位映射到 [0,1][0,1] 区间上的实数）
理想的排序为 y1≥y2≥⋯≥yny_1 \\ge y_2 \\ge \\cdots \\ge y_n ，即模型打分的序与真实相关性分数的序一致，此时 pairwise 和 listwise 指标都最大化。
逆序对会导致 pairwise 和 listwise 指标减小。
pairwise 指标: 逆序对出现的位置不影响。
listwise 指标：逆序对越靠前，对 listwise 指标造成的损失越大
CG（Cumulative Gain） 有 nn 篇候选文档，根据模型打分做降序排列；它们的真实相关性分数为 y1,⋯ ,yny_1, \\cdots, y_n 。
只关注排在前 kk (k≪n)(k\\ll n) 的文档，它们最可能获得曝光，对用户体验的影响最大。
Cumulative Gain CG@k:
CG@k=∑i=1kyi CG@k = \\sum^k_i = 1y_i CG@k 何时最大化？
真实相关性分数 yy 最高的 kk 篇文档被模型排在前 kk 。
前 kk 篇文档的序不重要，它们之间可以存在逆序对。
DCG（Discounted Cumulative Gain） 有 nn 篇候选文档，根据模型打分做降序排列，它们的真实相关性分数为 y1,⋯ ,yny_1, \\cdots, y_n Discounted Cumulative Gain DCG@k:
DCG@k=∑i=1kyilog⁡2(i+1) \\mathrmDCG@k =\\sum_i = 1^k\\fracy_i\\log_2(i+1) DCG@k 何时最大化?
真实相关性分数 yy 最高的 kk 篇文档被模型排在前 kk 。
前 kk 篇文档不存在逆序对。
总结 相关性有 pointwise、pairwise、listwise 评价指标
pointwise：单独评价每一个 (q,d)(q, d) 二元组，判断预测的相关性分数与真实标签的相似度。不考虑二元组之间的关系；
pairwise：对比 (q,d1)(q, d_1) 和 (q,d2)(q, d_2) ，判断两者的序是否正确（正序对或逆序对）
listwise：对比 (q,d1),(q,d2),⋯ ,(q,dn)(q, d_1),(q, d_2), \\cdots, (q,d_n) ，判断整体的序关系的正确程度
离线评价指标 (point&amp;pair-wise) 事先准备人工标注的数据，划分为训练集和测试集。
完成训练之后，计算测试集上的 AUC 和 PNR（分别是 pointwise 和 pairwise 评价指标）。
相关性有 44 个档位，为什么用 AUC（AUC 是评价二分类的指标），而不用多分类的评价指标（Macro F1 和 Micro F1）？
简而言之，相关性虽然有 44 个档位，但不是多分类问题。
相关性的标签存在序关系： 高&gt;中&gt;低&gt;无\\text高 &gt; \\text中 &gt; \\text低 &gt;\\text无 多分类把 44 种标签看作 44 个类别，忽略其中的序关系。
把 &ldquo;高&rdquo; 错判为 &ldquo;中&rdquo;，或错判为 &ldquo;无&rdquo;，错误严重程度不同，但被多分类视为同等的分类错误。
线上评价指标 (listwise) 一个搜索 session: 用户实际做过的一次搜索，保存在搜索日志中：用户搜索 qq ，搜索结果页上按顺序展示文档 d1,⋯ ,dnd_1, \\cdots, d_n 从搜索日志中抽取一批 session，覆盖高、中、低频查询词。
对于每个 session，取排序最高的 kk 篇文档 d1,⋯ ,dkd_1, \\cdots, d_k kk 的设定取决于用户浏览深度，比如 k=20k = 20 。
高频查询词前 2020 篇文档几乎都是高相关，指标过高。
高频查询词的 kk 设置的较大（比如 k=40k = 40 ），低频查询词的 kk 设置的较小（比如 k=20k = 20 ）
人工标注相关性分数，记作 y1,⋯ ,yny_1, \\cdots, y_n 。
想要对线上实际结果做评估，没办法事先准备一个测试集，只能在做评估的时候标注，每做一次评估就要标一批数据，通常一个月做一次，故叫月度评估。
计算 DCG@k=∑i=1kyilog⁡2(i+1)\\mathrmDCG@k=\\sum_i=1^k\\fracy_i\\log_2(i+1) ，作为该 session 的评价指标。
对 DCG@k 关于所有 session 取平均，评价线上相关性模型。
【思考题】
NDCG@k=DCG@kIDCG@k\\mathsfNDCG@k=\\frac\\mathsfDCG@k\\mathsfIDCG@k 是教科书中经典的评价指标，NDCG 是归一化的 DCG（N 表示 Normalized）
其中 IDCG@k 是 DCG@k 的最优值，对应最优的排序。 因此 NDCG@k 的值介于 00 和 11 之间 【问题】NDCG 可否代替 DCG 用作线上评价指标？NDCG 有什么缺陷？
【提示】
先做召回，再做排序。假设召回的结果全是低相关文档。
DCG 是高是低？NDCG 是高是低？DCG 与 NDCG 谁更合理？
指标得到了正向提升，而用户体验实际大幅下降，会诱导系统进行负向优化。
比如，在召回环节的一次上线，实验方案相比原方案，相关性大幅降低，但线上 NDCG 指标有可能会涨，这是因为 NDCG=DCG/IDCG\\textNDCG= \\textDCG/ \\textIDCG ，虽然 DCG 降低了，但是 IDCG 降低的幅度远大于 DCG 降低幅度，所以一次失败的优化却得到了正向效果。
DCG 低，但 NDCG 不一定低，故 DCG 更合理。
文本匹配（TF-IDF、BM25、词距） 在深度学习成熟之前，搜索引擎主要靠 文本匹配 来判断相关性。
传统的搜索引擎使用几十种人工设计的文本匹配分数，作为线性模型或树模型的特征，模型预测相关性分数。
词匹配分数（TF-IDF、BM25）、词距分数（OkaTP、BM25TP）。
其他分数（类目匹配、核心词匹配）。
2020 年后，搜索排序普遍放弃文本匹配，改用 BERT 模型，仅剩文本召回使用文本匹配做海选
链路上的相关性模型 召回海选：
打分量：数万 模型：文本匹配分数+线性模型，或双塔 BERT 模型 粗排：
打分量：数千 模型：双塔 BERT 模型，或单塔 BERT 模型（又叫交叉 BERT 模型） 精排：
打分量：数百 模型：单塔 BERT 模型（ 44 / 66 /￥ 层） 词匹配分数 反映查询词和文档的相关性
中文分词：将查询词、文档切成多个字符串
查询词： q=好莱坞电影推荐q = \\text好莱坞电影推荐 分词得到： Q=好莱坞,电影,推荐Q = \\\\text好莱坞, \\text电影, \\text推荐\\ QQ 中的词在文档 dd 中出现次数越多，则 qq 与 dd 越可能相关。
TF-IDF 和 BM25 都是基于上述想法
TF-IDF Term Frequency (TF) 词频 QQ : 分词结果记作集合 ，【例】： Q=好莱坞,电影,推荐Q = \\\\text好莱坞, \\text电影, \\text推荐\\ 。
t∈Qt \\in Q ：一个词（term），【例】： t=电影t = \\text电影 。
tft,d\\texttf_t,d ：词 tt 在文档 dd 中出现次数叫做词频。
tft,d\\texttf_t,d 越大，说明 tt 与 dd 越可能相关
∑t∈Qtft,d\\sum_t \\in Q\\texttf_t,d 越大，则 qq 与 dd 越可能相关
用 tft,d\\texttf_t,d 衡量相关性的缺陷：文档 dd 越长，则 tft,d\\texttf_t,d 越大。
把文档 dd 重复两遍，得到 d′=d+dd^\\prime=d+d 。
TF 变成的原先两倍： tft,d′=2⋅tft,d\\texttf_t,d^\\prime =2\\cdot \\texttf_t,d 文档 d′d^\\prime 和 dd 的信息量相同，算出的相关性分数应当相等。
解决方法：用文档 dd 的长度（记作 ldl_d ）对词频做归一化，即归一化的词频。用 ∑t∈Qtft,dld\\sum_t \\in Q\\frac\\texttf_t,dl_d 消除文档长度影响。
ldl_d ：文档 dd 的长度 用 ∑t∈Qtft,dld\\sum_t \\in Q\\frac\\texttf_t,dl_d 衡量相关性仍然有缺陷：加和同等对待所有 tt 。
词的重要性各不相同，不该同等对待。如何设定词的权重?
语义重要性（term weight）：语义重要性在查询词处理环节计算，需要用深度学习计算。
电影&gt;好莱坞 &gt;推荐\\text电影 &gt; \\text好莱坞 &gt; \\text推荐 t=电影t =\\text电影 是核心词
t=好莱坞t =\\text好莱坞 是重要的限定词。
t=推荐t =\\text推荐 是不重要的词。
在深度学习成熟之前，词匹配算不了 term weight，有一个简单的方法给词设定权重：一个 term 在越多文档中出现，它的判别能力就越弱，给它设定的权重就越低。
有多少篇文档包含 tt ？ 好莱坞 &lt;电影 &lt;推荐\\text好莱坞 &lt; \\text电影 &lt; \\text推荐 。
Document Frequency (DF) dft\\textdf_t ：词 tt 在多少文档中出现过（数据集一共有 NN 篇文档）。
0≤dft≤N0\\le \\textdf_t \\le N dft\\textdf_t 大，说明词 tt 判别能力弱，应当设置较小权重。
“你”、“的”、“是”这样的停用词（stop word）的 DF 接近 NN ，对判断相关性几乎不起作用。
“好莱坞”、“强化学习”、“王者荣耀”的 DF 都很小，判别能力强。
Inverse Document Frequency（IDF） Inverse Document Frequency (IDF） 定义为:
idft=logNdft \\mathrmidf_t =\\mathrmlog\\frac N\\mathrmdf_t IDF 只取决于文档的数据集
对于人工智能论文数据集，“深度学习 &quot; 的 IDF 很小
对于维基百科数据集，“深度学习 &quot; 的 IDF 很大
idft\\mathrmidf_t 可以衡量词 tt 的判别能力； idft\\mathrmidf_t 越大，词 tt 越重要。
用加权和 ∑t∈Qtft,dld⋅idft\\sum_t \\in Q\\frac\\texttf_t,dl_d \\cdot \\mathrmidf_t 衡量相关性
Term Frequency-Inverse Document Frequency（TF-IDF） 查询词 qq 的分词结果记作 QQ ，它与文档 dd 的相关性可以用 TF-IDF 衡量
TFIDF(Q,d)=∑t∈Qtft,dld⋅ idft \\mathrmTFIDF(Q, d)=\\sum_t\\in\\mathcalQ\\frac\\mathrmtf_t, dl_d\\cdot\\mathrm~idf_t TF-IDF 有很多变种，例如
TFIDF(Q,d)=∑t∈Qlog⁡(1+tft,d)⋅ idft \\mathrmTFIDF(Q, d)=\\sum_t\\in\\mathcalQ\\log(1+\\mathrmtf_t, d) \\cdot\\mathrm~idf_t Okapi Best Match 25 (BM25) BM25 可以看做 TF-IDF 的一种变体：
∑t∈Qtft,d⋅(k+1)tft,d+k⋅(1−b+b⋅ldmean(ld))⋅ln⁡(1+N−dft+0.5dft+0.5) \\sum_t\\in\\mathcalQ\\frac\\mathrmtf_t, d\\cdot(k+1)\\mathrmtf_t, d+k\\cdot\\left(1-b+b\\cdot\\fracl_d\\mathrmmean(l_d)\\right) \\cdot \\ln\\left(1+\\fracN-\\mathrmdf_t+0.5\\mathrmdf_t+0.5\\right) kk 和 bb 是参数，通常设置 k∈[1.2,2]k \\in[1.2,2] 和 b=0.75b=0.75 。
BM25 有很多种变体
在所有 词匹配分数 中，BM25 是最强的。如果学一个线性模型或者树模型预测相关性，BM25 的特征权重是最高的
词袋模型 (bag of words) TF-IDF 和 BM25 都属于 词袋模型，隐含了词袋模型假设：只考虑词频，不考虑词的顺序和上下文。
【例 1】：
男朋友 / 送 / 的 / 礼物 送 / 男朋友 / 的 / 礼物 【例 2】：
白 / 衬衫 / 灰 / 裤子 灰 / 衬衫 / 白 / 裤子 缺点：词袋模型忽略词序和上下文，丢失了语义，不利于准确计算相关性。
前深度学习时代有很多词袋模型，例如 Latent Semantic Analysis (LSA)、Latent Dirichlet Allocation (LDA) 等都可以将查询词和文档映射为向量。
RNN、BERT、GPT 都不是词袋模型，会考虑词的顺序和上下文，更好地理解查询词和文档的语义。
词距分数 (Term Proximity) 从另一个角度反映相关性。
【例】
查询词 Q=亚马逊,雨林Q =\\\\text亚马逊, \\text雨林\\ 文档 d=我在亚马逊上网购了一本书，介绍东南亚热带雨林的植物群落……d= \\text我在亚马逊上网购了一本书，介绍东南亚热带雨林的植物群落…… 如果用 TF-IDF 或 BM25 计算相关性，会得出错误结论。
想要避免这类错误，需要用到 词距。
词距: QQ 中的两个词出现在文档 dd 中，两者间隔多少词。 词距 越小， QQ 与 dd 越可能相关。
OkaTP 既考虑了词频，也考虑了词距:
词 tt 在文档 dd 中出现的位置记作集合 O(t,d)O(t,d) 。
出现在文档 dd 中第 2727 、 8484 、 9898 位置上。
那么 O(t,d)=27,84,98O(t,d)=\\27,84,98\\ 。
集合 O(t,d)O(t,d) 的大小等于词频： ∣O(t,d)∣=tft,d|\\mathcalO(t,d)|=\\mathrmtf_t,d 。
tt 和 t′t^\\prime 是查询词 QQ 中的两个词，它们的 词距分数 TP
tp(t,t′,d)=∑o∈O(t,d)∑o′∈O(t′,d)1(o−o′)2. \\mathrmtp(t, t&#x27;, d)=\\sum_o\\in O(t, d)\\sum_o&#x27;\\in O(t&#x27;, d)\\frac1(o-o&#x27;)^2. 查询词中的 t,t′∈Qt,t^\\prime \\in Q 在文档 dd 中出现 次数越多、距离越近，则 tp(t,t′,d)\\mathrmtp(t,t^\\prime,d) 越大。
OkaTP :
∑t,t′∈Q,t≠ttp⁡(t,t′,d)⋅(k+1)tp⁡(t,t′,d)+k⋅(1−b+b⋅ldmean⁡(ld))⋅min⁡(idft,idft′) \\sum_t, t^\\prime\\in\\mathcalQ, t\\neq t\\frac\\operatornametp(t, t^\\prime, d)\\cdot(k+1)\\operatornametp(t, t^\\prime, d)+k\\cdot\\left(1-b+b\\cdot\\fracl_d\\operatornamemean(l_d)\\right) \\cdot \\min(\\mathrmidf_t,\\mathrmidf_t^\\prime) 第一项跟 BM25 的区别是，把 Term Frequency tft,d\\mathrmtf_t, d 换成了词距分数 TP tp(t,t′,d)\\mathrmtp(t,t&#x27;,d) 。TP 越大，该项就越大。
第二项两个 term 各有一个 IDF，取两者中 较小 的那一项。
对两个 term 的组合求加和
总结 词匹配分数包括 TF-IDF、BM25 等
TF：词在文档中出现次数越多越好。
IDF：词在较少的文档中出现，则给词较高的权重。
基于词袋模型，只考虑词频，不考虑词序和上下文。
词距分数包括 OkaTP 等
查询词 QQ 中的词在文档中出现次数 越多越好。
查询词 QQ 中的任意两个词在文档中 越近越好。
传统搜索相关性会用很多 人工设计的文本匹配分数，如词匹配分数、词距分数等一共几十种分数，把它们作为特征，用 线性模型 或 树模型 预测相关性。
基于文本匹配的传统方法没有真正理解查询词和文档的语义，效果远不如深度学习。现在只有召回海选还用这种方法，用较小代价排序海量文档。
BERT 模型 现代搜索引擎普遍使用 BERT 模型计算查询词 qq 和文档 dd 的相关性，文本匹配的方法正在逐步被淘汰。
交叉/单塔 BERT 模型：把查询词和文档拼成一个序列输入 BERT，准确性好，但推理代价大，通常用于 搜索链路的下游（精排、粗排）。
双塔 BERT 模型：不够准确，但是推理代价小，给上万篇文档打分也没有问题，通常用在 链路上游（粗排、召回海选）。
训练相关性 BERT 模型的 4 个步骤：预训练、后预训练、微调、蒸馏。
粗排 给几千篇文档打分，可能用交叉 BERT（此时模型应较小，只有 22 层或 44 层），也可能用双塔 BERT。
召回海选 给几千或者几万篇文档打分。
模型结构、线上推理 交叉 BERT 模型 交叉 BERT 模型的 self attention 层对查询和文档做了交叉。
输入的查询词、标题、正文（有可能会包含更多字段，如摘要、Anchor Query）会被切分为 token，每个 token 可以是汉字、词、拉丁字母、英文单词或其他字符串。token 会被 Embedding 层表征为向量。
每个 token 被表征为 33 个向量，取加和作为 token 的表征
token embedding：表征 token 本身。
position embedding：位置编码，表征 token 的序。
segment embedding：用于区分查询词、标题、正文 （非必要，模型可以通过 position embedding 和 [SEP] 分隔符区分查询词、标题、正文 33 个字段）。
模型的输入有 nn 个 token，被表征为 nn 个向量；然后经过很多自注意力层和全连接层，最终模型输出一个 00 ~ 11 之间的实数作为相关性分数，指示输入句子对的相似性。
交叉编码器不会产生句子嵌入。
分词粒度：字粒度 v.s. 字词混合粒度 需要把查询词和文档切分成很多 token，具体的分词方法对相关性有很大影响。
对于 中文，有 22 种分词粒度：
字粒度：将每个汉字/字符作为一个 token。
词表较小（几千），只包含汉字、字母、常用字符。词表较小则 Embedding Table 也较小。
优点：实现简单，无需做分词。
第一个版本的相关性 BERT 最好用字粒度，实现简单，效果也还行，可以作为好的 baseline。
字词混合粒度：做分词，将分词结果作为 tokens。
词表较大（几万、十几万），包含汉字、字母、常用符号、常用中文词语、常用英文单词
与字粒度相比，字词混合粒度得到的序列长度更短（即 token 数量更少，可以少一半左右）。
参考 WoBERT，字词混合粒度更复杂，效果更好。
序列更短（token 数量更少）有什么好处？
BERT 推理的计算量是序列长度/token 数量的超线性函数，介于线性和平方时间复杂度之间。自注意力层是平方时间复杂度，全连接层是线性时间复杂度。序列越长，推理代价越大。
为了控制推理成本，会限定 token 数量，例如 128128 或 256256 。
如果文档超出 token 数量上限，会被截断，或者做抽取式摘要（准确性降低）。
使用字词混合粒度，token 数量更少，推理成本降低。（字词混合粒度的序列长度可以比字粒度少一半左右，如字粒度需要 256256 tokens，字词混合粒度只需要 128128 tokens）
推理降本 对每个 (q,d)(q,d) 二元组计算相关性分数 score，精排有几百个 (q,d)(q,d) 二元组，粗排有几千个，由于交叉 BERT 模型推理代价很大，代价很大。
【降本方案】
用内存换计算，用 Redis 这样的 KV 数据库缓存 ⟨q,d,score⟩\\langle q, d, score\\rangle 。
把查询词和文档 id (q,d)(q,d) 作为 key，相关性分数 (score) 作为 value。
线上做排序时要计算相关性时，如果 (q,d)(q,d) 命中缓存，则避免计算。用户的搜索大多集中在很少的高频查询词上，由于 (q,d)(q,d) 重复率很高，这种缓存机制可以避免一半以上的计算。
如果超出内存上限（通常几个 TB 的内存），按照 LRU（Least Recently Used，最近最少使用）清理缓存。
模型量化技术，例如将 float32 转化成 int8。
神经网络的参数都是用浮点数表示的，通常为 float32，也叫单精度浮点数，占 32bits 的存储。把 float32 压缩成 int8 这样的低精度整数。
训练后量化（post-training quantization，PTQ）：训练不变，量化和训练互不影响，训练完了再做量化，把 float32 压缩成 int8。
训练中量化（quantization-aware training，QAT）：训练和量化是结合在一起做的，训练模型时要做前向传播和反向传播，前向传播使用量化后的低精度整数做计算，反向传播仍使用原始的浮点数权重和浮点数梯度。
文本摘要技术，使用文本摘要降低 token 数量。
如果文档长度超出上限，则用摘要替换文档，优于直接截断文档。
在文档发布时计算摘要。可以是抽取式（取一些关键的句子和段落作为摘要），也可以是生成式（用大语言模型生成摘要）。
如果摘要效果好，可以将 token 数量上限降低，比如从 128128 降低到 9696 双塔 BERT 模型 准确性不好，但推理代价小。
双塔 BERT 模型既可以用于召回，也可以用于排序。
左右的神经网络分别把查询词和文档映射成向量
左边的神经网络（查询词塔）在 线上实时做推理，用户做一次搜索，只有一个查询词，左塔做一次推理，代价很小。
查询词类目等特征由查询词处理环节提供。
右边的神经网络（文档塔）不会在线上做推理，而是在 文档发布时离线做一次推理，把算出的文档向量表征存入哈希表（key 是文档 id，value 是向量表征），线上计算相关性时就不用再计算文档的向量表征了。
因此双塔模型在线上的推理代价较小
计算查询词的向量表征和文档的向量表征的向量相似度，把向量相似度作为估计的相关性分数
总结 交叉/单塔 BERT 模型：
准确性高，计算量大，适用于 精排、粗排。
字词混合粒度分词降低序列长度，即 token 数量。
用 KV 内存数据库缓存 ⟨q,d,score⟩\\langle q, d, score\\rangle ，可以避免大部分计算。
用模型量化技术，把 float32 转化成 int8，降低推理成本。
设置较小的 token 数量上限，将长文档替换成摘要。
双塔 BERT 模型：
准确性低，计算量小，适用于 粗排、召回海选。
事先 离线 计算每篇 文档 dd 的向量表征 zdz_d ，将 (d,zd)(d, z_d) 存入哈希表。
线上计算 (q,d)(q,d) 的相关性时，给定候选文档 dd ，从哈希表中读取它的向量表征 zdz_d ,（key 是文档 id，value 是向量表征）。
线上计算查询词 qq 的向量表征 xqx_q ，然后计算内积 ⟨xq,zd⟩\\langle x_q, z_d \\rangle (可能做个 sigmoid 内积)，结果作为 (q,d)(q,d) 相关性分数。
BERT 模型的训练 不论是交叉 BERT 还是双塔 BERT，如果用在排序中计算相关性，两者的训练方法相同。
训练分 44 个步骤：
预训练（pretrain）：用 MLM（Mask Language Model）等任务预训练模型。(直接用开源的模型效果不差，但最好自己用搜索引擎的文档库做预训练，效果会更好)
后预训练（post pretrain）：利用用户的点击、交互 数据 训练模型，因为相关性越好的文档越有可能被点击和交互。
微调（fine tuning）：用人工标注的相关性数据训练模型。
蒸馏（distillation）：得到更小的模型，加速线上的推理（先训练大模型再蒸馏小模型，效果远好于直接训练小模型）。
微调（fine tuning） 微调用监督学习训练模型，模型估计 qq 和 dd 的相关性。
人工标注数十万、数百万条样本，每条样本为 (q,d,y)(q,d,y) ，(查询词，文档，人工标注的相关性分数）
可以把 估计相关性 看作 回归任务，也可以看作 排序任务。
回归任务：让预测的值 pp 拟合 yy ，起到 “保值” 的作用
给定 (q,d)(q,d) ，模型估计相关性为 pp 。
pp 越接近真实标签 yy 越好
排序任务：让 pp 的序拟合 yy 的序，起到 “保序” 的作用。只在乎预测的序是否正确，不在乎预测的值离 yy 是远是近。
给定两条样本 (q,d1,y1)(q,d_1,y_1) 和 (q,d2,y2)(q,d_2,y_2) ，相同的查询词 qq ，不同的文档 dd ，真实相关性分数满足 y1&gt;y2y_1&gt;y_2 。
模型预测的相关性分数 p1p_1 和 p2p_2 应当满足 p1&gt;p2p_1&gt;p_2 （正序对），反之 p1&lt;p2p_1&lt;p_2 为逆序对。
回归任务 数据： (q1,d1,y1),⋯(qn,dn,yn)(q_1,d_1,y_1) ,\\cdots (q_n,d_n,y_n) ，其中 yiy_i 是归一化后的相关性分数， yi∈[0,1]y_i \\in [0,1] 。
模型预测 (qi,di)(q_i,d_i) 的 相关性 为 pip_i 。
最小化损失函数 1n∑i=1nlog⁡(yi,pi)\\frac1n\\sum_i=1^n\\log(y_i,p_i) ，使得 pip_i 尽量接近 yiy_i 。
均方差损失函数：
MSE_Loss(yi,pi)=12(yi−pi)2 \\mathrmMSE\\_Loss(y_i, p_i)=\\frac12(y_i-p_i)^2 交叉熵损失函数（类似二分类，用 soft label 更好)
CE_Loss(yi,pi)=−yi⋅ln⁡pi−(1−yi)⋅ln⁡(1−pi) \\mathrmCE\\_Loss(y_i, p_i)=-y_i\\cdot\\ln p_i-(1-y_i)\\cdot\\ln(1-p_i) 用 CE Loss 时，标签 yy 不止是 00 （最低相关性档位）和 11 （最高相关性档位），还可以是 00 ~ 11 之间的小数（其余相关性档位）。
排序任务 数据：一条样本包含一条查询词 qq 和 kk 篇文档 d1,⋯ ,dkd_1, \\cdots, d_k 。
对于 (q,di)(q,d_i) ，真实相关性分数记作 yiy_i ，模型预测的相关性记作 pip_i 。
两种排序方式：按照 yiy_i 排序、按照 pip_i 排序。
排序任务不在乎 pip_i 和 yiy_i 的值是否接近，只在乎两种排序是否接近。
设 yi&gt;yjy_i&gt;y_j ，损失函数应当鼓励 pi−pjp_i-p_j 尽量大。
如果 pi≥pjp_i \\ge p_j （模型预测正确），则称 (i,j)(i,j) 为 正序对。
如果 pi&lt;pjp_i&lt;p_j （模型预测错误），则称 (i,j)(i,j) 为 逆序对。
损失函数应当惩罚逆序对，鼓励正序对 —&gt; 鼓励 pi−pjp_i-p_j 尽量大。 Pairwise logistic 损失函数：
∑(i,j):yi&gt;yjln⁡[1+exp⁡(−γ⋅(pi−pj))]. \\sum_(i, j): y_i &gt; y_j\\ln\\left [1+\\exp\\left(-\\gamma\\cdot(p_i-p_j)\\right)\\right]. pi−pjp_i-p_j 越大，则损失函数越小。最小化损失函数，可以鼓励 (i,j)(i,j) 成为正序对。
γ\\gamma 是一个 &gt;0&gt;0 的超参数，控制 logistic 函数的形状。
一条样本包含 kk 篇文档，对 kk 篇文档两两组合，最小化加和，会鼓励模型给 kk 篇文档的排序，接近按 yy 做的排序。
总结 回归任务，使用 均方差损失（MSE） 或 交叉熵损失（CE），有利于提升 AUC 指标。
排序任务，使用 pairwise logistic 损失，有利于提升正逆序比指标。
不要把估计相关性看作多分类任务：相关性有多个档位，但档位之间是有序的，而不是无序的类别名称。
如果同时用 AUC 和 正逆序比 作为离线评价指标，则同时使用 CE 和 pairwise logistic 损失，取两者的加权和作为优化的目标函数。
后预训练（post pretrain） Zou et al. Pre-trained language model based ranking in Baidu search. In KDD , 2021. Zou et al. Pre-trained language model-based retrieval and ranking for web search. ACM Transactions on the Web, 2022. 训练相关性模型：预训练 -&gt; 后预训练 -&gt; 微调 -&gt; 蒸馏
后预训练的步骤
从搜索日志中挑选十亿对 (q,d)(q,d) 。对于 4848 层 BERT，数据量超过 10 亿的话，边际效益会越来越小，更多数据对指标的提升不大。
自动生成标签：将用户行为 x\\mathbf x 映射到相关性分数 y^\\haty 。自动生成的标签 y^\\haty 噪声很大，但仍然有很多信息量，这就是为什么后预训练有效 (技巧很多，对后续结果影响最大)。
用自动生成的 (q,d,y^)(q,d, \\haty) 训练模型。方法与微调类似，都是监督学习。但额外加上预训练的 MLM 任务，避免预训练的结果被清洗掉。
步骤 1：挑选 (q,d)(q, d) 搜索日志记录用户每次搜索的查询词 qq 和搜索引擎返回的文档。
根据搜索日志抽取查询词 qq ，需要覆盖高、中、低频的 qq 。（不是均匀抽样，否则抽到的几乎都是高频查询词）
给定 qq ，搜索日志记录搜到的文档 d1,⋯ ,dn d_1, \\cdots, d_n ，以及模型估计的相关性分数。（精排相关性模型的打分，非人工标注。不需要很准确，只是用来筛选文档而已。）
根据线上模型估计的相关性分数，选取 nn 篇文档的一个子集，均匀覆盖各相关性档位。
步骤 2：自动生成相关性分数 步骤 1 根据搜索日志选出十亿对 (q,d)(q,d) 。
对搜索日志做统计，得出 (q,d)(q,d) 的点击率和多种交互率，记作向量 x\\mathbfx ，其维度大小就是交互统计的特征数，比如关注点击率，点赞率，收藏率，转发率，那么这个 x\\mathbfx 维度就是 44 ，每个位置为对应值。
已经得到十亿条样本 (q,d,x)(q,d,\\mathbfx) ，其中 向量 x\\mathbfx 是用户行为。
相关性 yy 与 x\\mathbfx 存在某种函数关系，(相关性越高，用户越有可能点击和交互)。
找出 yy 与 x\\mathbfx 的函数关系： y^=t(x)\\haty = t(\\mathbfx) , 函数 t(⋅)t(\\cdot) 将用户行为映射到相关性 yy ，只要学到了这个函数 t(⋅)t(\\cdot) ，就能自动生成标签 y^\\haty 。生成标签 y^\\haty 是对真实标签 yy 的近似。
选取几万对 (q,d)(q,d) ，人工标注相关性分数 yy 。
搜索日志记录了 (q,d)(q,d) 的用户行为 x\\mathbfx 。
得到 几万条样本 (x,y)(\\mathbfx,y) ，训练一个小模型 t(x)t(\\mathbfx) 拟合 yy 。具体来说，定义一个小模型 t(⋅)t(\\cdot) (GBDT/小规模神经网络），它将用户行为 x\\mathbfx 映射到相关性分数 yy ，这样就可以自动生成标签 y^\\haty ，是对真实标签 yy 的近似。
【注意】小模型 t(⋅)t(\\cdot) 只能使用点击率、交互率等用户行为作为输入。
尽量不使用文本特征作为输入。
小模型 t(⋅)t(\\cdot) 的作用 是把用户行为转化成相关性分数，而不是根据文本特征去判别 (q,d)(q,d) 相关性。
绝对不能用相关性 BERT 模型打分作为输入，否则会产生反馈回路（BERT 模型打分 -&gt; 训练小模型 t(⋅)t(\\cdot) -&gt; 小模型 t(⋅)t(\\cdot) 生成数据 -&gt; 训练 BERT 模型）
对于所有十亿条样本 (q,d,x)(q,d,\\mathbfx) ，用训练好的小模型打分 y^=t(x)\\haty = t(\\mathbfx) ，得到十亿条带自动生成标签的样本 (q,d,y^)(q,d,\\haty) ，可以用它们来训练 BERT 模型。
步骤 3：用生成的数据训练模型 前两步得到十亿条样本 (q,d,y^)(q,d,\\haty) ，其中 y^\\haty 是自动生成的相关性分数。
基于预训练的 BERT 模型，用 (q,d,y^)(q,d,\\haty) 做监督学习。
监督学习同时用 33 个任务，取 33 个损失函数的加权和。
回归任务，起到“保值”的作用（模型的输出尽量接近 y^\\haty ），有利于 AUC 指标。
排序任务，起到“保序”的作用（鼓励正序对，惩罚逆序对），有利于正逆序比指标。
预训练的 MLM 任务，避免清洗掉预训练的结果（后预训练的数据量很大，量级是十亿，会清洗掉预训练的结果）。
后预训练为什么有效？
大幅增加了 有标签样本数量（百万 -&gt; 十亿）。
人工标注的相关性数据只有几十万到几百万条 (q,d,y)(q,d, y) 。
后预训练使用十亿条 (q,d,y^)(q,d,\\haty) 。
巨大的数据量使模型更准确。
用户行为 x\\mathbfx 与相关性 yy 有很强的关联。
(q,d)(q,d) 的相关性越高，越有可能得到点击和交互。
小模型可以根据点击率和交互率 x\\mathbfx 较为准确地推断 yy 。
小模型生成的标签 y^\\haty 虽然有噪声，但也有很大的信息量。
蒸馏（distillation） 为什么做蒸馏？
用户每搜一个查询词，排序需要用相关性。
BERT 模型给数百、数千对 (q,d)(q,d) 打分。BERT 模型越大，计算量越大，给相关性的打分越准。
为了平衡计算量和准确性，精排常用 44 ~ 1212 层交叉 BERT 在线上做推理，粗排常用 22 ~ 44 层交叉 BERT（或双塔 BERT）。
两种方法谁更好？
直接训练小模型（ 22 ~ 1212 层） 先训练 4848 层大模型，再蒸馏小模型（better） 先训练 48 层 BERT 作为 teacher，再蒸馏小模型，效果优于直接训练小模型。
工业界经验：
4848 层对比 1212 层，AUC 高 2%2\\% 以上。 4848 层蒸馏 1212 层，参数量压缩了 1010 倍以上，AUC 几乎无损。 4848 层蒸馏 44 层，AUC 损失 0.5%0.5\\% 。 怎样做蒸馏?
做预训练、后预训练、微调，训练好 4848 层 BERT 大模型作为 teacher (参数量一二十亿)。
Teacher 模型越大，它本身越准确，蒸馏出的 student 也越准确。 4848 层 teacher，效果优于 2424 层和 1212 层 teacher。 准备几亿对 (q,d)(q,d) ，用 teacher 给 (q,d)(q,d) 打分 y^\\haty 。
蒸馏的数据量越大越好。 数据量少于 11 亿，蒸馏会损失较大 AUC。 数据量超过 1010 亿，边际效益很小。 在数据 (q,d,y^)(q,d,\\haty) 上做监督学习训练小模型。
只训练 11 epoch。（ 11 亿条样本上训练 22 epoch，效果不如 22 亿条样本上训练 11 epoch。) 与微调相同，同时用回归任务、排序任务 蒸馏：一些有效的技巧。
Student 小模型要先预热、再蒸馏。
预热：先做预训练、后预训练、微调训练 student。（与训练 teacher 的步骤相同。)
基于预热的模型，用蒸馏数据 (q,d,y^)(q,d,\\haty) 训练 student。
给 student 做预热，效果优于随机初始化，也优于只做预训练
不要做逐层蒸馏
逐层蒸馏：让 student 的中间层拟合 teacher 的中间层。逐层蒸馏代价大不好调，多花算力，还不如增加蒸馏数据量。
用相同的算力，直接拟合 y^\\haty 优于逐层蒸馏。
多级蒸馏和单级蒸馏谁更好？
多级蒸馏： 4848 层 -&gt; 1212 层 -&gt; 44 层。 单级蒸馏： 4848 层 -&gt; 44 层。 有争议，可能是单级蒸馏更好 与其做多级蒸馏，还不如用同等的算力增加数据量。
总结 预训练（pretrain）：用跟任务无关的文本训练模型，如用 MLM 等任务在海量文本数据上训练 BERT 模型。
后预训练（post pretrain）：用一个 GBDT 小模型自动生成数据，将用户行为 x\\mathrmx 映射到相关性标签 y^\\haty 。用自动生成的数据训练 BERT 大模型和小模型，结合回归任务排序任务以及预训练任务。
微调（fine tuning）：使用人工标注的数据，数据量相对较小，一般几十万（最多几百万）条样本，监督学习，同时用回归和排序任务。
蒸馏（distillation）：先训练大模型，用训练好的大模型给几亿条 (q,d)(q, d) 打分，得到蒸馏数据；基于预热好的小模型，用蒸馏数据做监督学习；最终得到的小模型部署到线上做相关性。
Reference https://github.com/wangshusen/SearchEngine`}).add({id:9,tag:"en",href:"/blogs/transformer/",title:"Transformer",description:"Transformer 模型",content:`标准的 Transformer 模型主要由两个模块构成：
Encoder（左边）：负责理解输入文本，为每个输入构造对应的语义表示（语义特征）； Decoder（右边）：负责生成输出，使用 Encoder 输出的语义表示结合其他输入来生成目标序列。 这两个模块可以根据任务的需求而单独使用：
纯 Encoder 模型：适用于只需要理解输入语义的任务，例如句子分类、命名实体识别； 纯 Decoder 模型：适用于生成式任务，例如文本生成； Encoder-Decoder 模型 或 Seq2Seq 模型： 适用于需要基于输入的生成式任务，例如翻译、摘要。 Transformer 家族 Encoder 分支 纯 Encoder 模型只使用 Transformer 模型中的 Encoder 模块，也被称为自编码 (auto-encoding) 模型。在每个阶段，注意力层都可以访问到原始输入句子中的所有词语，即具有 “双向 (Bi-directional)”注意力。
纯 Encoder 模型通常通过破坏给定的句子（例如随机遮盖其中的词语），然后让模型进行重构来进行预训练，最适合处理那些需要理解整个句子语义的任务，例如句子分类、命名实体识别（词语分类）、抽取式问答。
BERT：通过预测文本中被遮盖的词语和判断一个文本是否跟随另一个来进行预训练
任务1: 遮盖语言建模 (Masked Language Modeling, MLM) 任务2: 下句预测(Next Sentence Prediction, NSP) DistilBERT：通过在预训练期间使用知识蒸馏 (knowledge distillation) 技术，DistilBERT 在内存占用减少 40%、计算速度提高 60% 的情况下，依然可以保持 97% 的性能
RoBERTa：通过修改预训练方案可以进一步提高性能。
更多的训练数据 更大的批次 训练了更长的时间 放弃了 NSP 任务 XLM：跨语言语言模型 (XLM) 探索了构建多语言模型的多个预训练目标，包括来自 GPT 的自回归语言建模和来自 BERT 的 MLM，还将 MLM 拓展到多语言输入，提出了翻译语言建模 (Translation Language Modeling, TLM)。XLM 在多个多语言 NLU 基准和翻译任务上都取得了最好的性能。
XLM-RoBERTa：跟随 XLM 和 RoBERTa，XLM-RoBERTa (XLM-R) 通过升级训练数据来改进多语言预训练。其基于 Common Crawl 创建了一个 2.5 TB 的语料，然后运用 MLM 训练编码器，由于没有平行对照文本，因此移除了 XLM 的 TLM 目标。最终，该模型大幅超越了 XLM 和多语言 BERT 变体。
ALBERT：ALBERT 通过三处变化使得 Encoder 架构更高效：用更少的参数训练更大的模型，并在 NLU 任务上取得了优异的性能；
将词嵌入维度与隐藏维度解耦以减少模型参数； 所有模型层共享参数； 将 NSP 任务替换为句子排序预测（判断句子顺序是否被交换） ELECTRA：MLM 在每个训练步骤中只有被遮盖掉词语的表示会得到更新。ELECTRA 使用了一种双模型方法来解决这个问题：
第一个模型继续按标准 MLM 工作；第二个模型（鉴别器）则预测第一个模型的输出中哪些词语是被遮盖的，这使得训练效率提高了 30 倍。 下游任务使用时，鉴别器也参与微调； DeBERTa：DeBERTa 模型引入了两处架构变化。
将词语的内容与相对位置分离，使得自注意力层 (Self-Attention) 层可以更好地建模邻近词语对的依赖关系； 在解码头的 softmax 层之前添加了绝对位置嵌入。DeBERTa 是第一个在 SuperGLUE 基准上击败人类的模型 Decoder 分支 纯 Decoder 模型只使用 Transformer 模型中的 Decoder 模块。在每个阶段，对于给定的词语，注意力层只能访问句子中位于它之前的词语，即只能迭代地基于已经生成的词语来逐个预测后面的词语，因此也被称为自回归 (auto-regressive) 模型。
纯 Decoder 模型的预训练通常围绕着预测句子中下一个单词展开。纯 Decoder 模型适合处理那些只涉及文本生成的任务。
GPT：结合了 Transformer Decoder 架构和迁移学习，通过根据上文预测下一个单词的预训练任务，在 BookCorpus 数据集上进行了预训练。GPT 模型在分类等下游任务上取得了很好的效果；
GPT-2：受简单且可扩展的预训练方法的启发，OpenAI 通过扩大原始模型和训练集创造了 GPT-2，它能够生成篇幅较长且语义连贯的文本；
CTRL：GPT-2 虽然可以根据模板 (prompt) 续写文本，但是几乎无法控制生成序列的风格。条件 Transformer 语言模型 (Conditional Transformer Language, CTRL) 通过在序列开头添加特殊的“控制符”以控制生成文本的风格，这样只需要调整控制符就可以生成多样化的文本；
GPT-3：将 GPT-2 进一步放大 100 倍，GPT-3 具有 1750 亿个参数。除了能生成令人印象深刻的真实篇章之外，还展示了小样本学习 (few-shot learning) 的能力。这个模型目前没有开源；
GPT-Neo / GPT-J-6B：由于 GPT-3 没有开源，因此一些旨在重新创建和发布 GPT-3 规模模型的研究人员组成了 EleutherAI，训练出了类似 GPT 的 GPT-Neo 和 GPT-J-6B 。当前公布的模型具有 1.3、2.7、60 亿个参数，在性能上可以媲美较小版本的 GPT-3 模型。
Encoder-Decoder 分支 Encoder-Decoder 模型（又称 Seq2Seq 模型）同时使用 Transformer 架构的两个模块。在每个阶段，Encoder 的注意力层都可以访问初始输入句子中的所有单词，而 Decoder 的注意力层则只能访问输入中给定词语之前的词语（即已经解码生成的词语）
Encoder-Decoder 模型可以使用 Encoder 或 Decoder 模型的目标来完成预训练，但通常会包含一些更复杂的任务
Encoder-Decoder 模型适合处理那些需要根据给定输入来生成新文本的任务，例如自动摘要、翻译、生成式问答。
T5：将所有 NLU 和 NLG 任务都转换为 Seq2Seq 形式统一解决（例如，文本分类就是将文本送入 Encoder，然后 Decoder 生成文本形式的标签）。T5 通过 MLM 及将所有 SuperGLUE 任务转换为 Seq2Seq 任务来进行预训练。最终，具有 110 亿参数的大版本 T5 在多个基准上取得了最优性能。
BART：同时结合了 BERT 和 GPT 的预训练过程。将输入句子通过遮盖词语、打乱句子顺序、删除词语、文档旋转等方式破坏后传给 Encoder 编码，然后要求 Decoder 能够重构出原始的文本。这使得模型可以灵活地用于 NLU 或 NLG 任务，并且在两者上都实现了最优性能。
M2M-100：语言对之间可能存在共享知识可以用来处理小众语言之间的翻译。M2M-100 是第一个可以在 100 种语言之间进行翻译的模型，并且对小众的语言也能生成高质量的翻译。该模型使用特殊的前缀标记来指示源语言和目标语言。
BigBird：由于注意力机制 O(n2)O(n^2) 的内存要求，Transformer 模型只能处理一定长度内的文本。 BigBird 通过使用线性扩展的稀疏注意力形式，将可处理的文本长度从大多数模型的 512 扩展到 4096，这对于处理文本摘要等需要捕获长距离依赖的任务特别有用
Transformer Layer Transformer 的 Encoder 是由多个相同的 layer 叠加而成的，每个 Block 都有 22 个子层（sublayer）。
Block
多头自注意力（multi-head self-attention； 基于位置的前馈网络（position-wise feed-forward network） 在计算编码器的自注意力时，query、key 和 value 都来自前一个 layer 的输出。
Add &amp; Norm
残差连接：每个子层都采用了 残差连接（residual connection）。
在 Transformer 中，对于序列中任何位置的任何输入 x∈Rd\\mathbf x \\in \\mathbb R^d ，都要求满足 sublayer(x)∈Rd\\mathrmsublayer (\\mathbf x )\\in \\mathbb R^d ，以便残差连接满足 x+sublayer(x)∈Rd\\mathbf x +\\mathrmsublayer (\\mathbf x )\\in \\mathbb R^d 。
层规范化：在残差连接的加法计算之后，紧接着应用 层规范化（layer normalization） ( Layer Normalization)。
输入序列对应的每个位置，Transformer 编码器都将输出一个 dd 维表示向量。
Self-Attention 生成查询向量、键向量和值向量
ll ：输入长度
dd : hidden size
输入向量 X∈Rl×d\\mathbf X \\in \\mathbbR^l\\times d 分别乘以三个不同的权重矩阵 WQ∈Rd×dk\\mathbf W^Q \\in \\mathbbR^d\\times d_k ， WK∈Rd×dk\\mathbf W^K\\in\\mathbbR^d\\times d_k ， WV∈Rd×dv\\mathbf W^V \\in \\mathbbR^d \\times d_v 得到 Q\\mathbf Q 、 K\\mathbf K 、 V\\mathbf V 。
这些权重矩阵为模型的参数，需要通过训练得到（先随机初始化，然后在损失函数中表示出来，最后通过反向传播不断优化学习得出，最终目标是最小化模型的预测误差）。
令 X=[X1X2]∈R2×d\\mathbf X = \\beginbmatrix\\mathbf X_1 &amp;\\mathbf X_2 \\endbmatrix\\in \\mathbbR^2\\times d , Xi∈R1×d\\mathbf X_i \\in \\mathbbR^1\\times d X1\\mathbf X_1 与 WQ\\mathbf W^Q 权重矩阵相乘得到与这个单词相关的查询向量 q1∈R1×dk\\mathbf q_1 \\in \\mathbbR^1\\times d_k X1\\mathbf X_1 与 WK\\mathbf W^K 权重矩阵相乘得到与这个单词相关的键向量 k1∈R1×dk\\mathbf k_1 \\in \\mathbbR^1\\times d_k X1\\mathbf X_1 与 WV\\mathbf W^V 权重矩阵相乘得到与这个单词相关的值向量 v1∈R1×dv\\mathbf v_1 \\in \\mathbbR^1\\times d_v 最终使得输入序列的每个单词各自创建一个查询向量、一个键向量和一个值向量
矩阵运算
Scaled Dot-product Attention 查询向量 Query, Q∈Rl×dk\\mathbfQ\\in\\mathbbR^l\\times d_k ：是当前单词的表示形式，用于对所有其他单词(key)进行评分，我们只需要关注当前正在处理的 token 的 query
键向量 Key， K∈Rl×dk\\mathbfK\\in\\mathbbR^l\\times d_k 可以看做是序列中所有单词的标签，是在我们找相关单词时候的对照物
值向量 Value, V∈Rl×dv\\mathbfV\\in\\mathbbR^l\\times d_v 是单词的实际表示，一旦我们对每个单词的相关度打分之后，我们就要对 value 进行相加表示当前正在处理单词的 value
Attention(Q,K,V)=softmax(QK⊤dk)V \\beginalign \\textAttention(\\mathbfQ,\\mathbfK,\\mathbfV) = \\textsoftmax\\left(\\frac\\mathbfQ\\mathbfK^\\top\\sqrtd_k\\right)\\mathbfV \\endalign 计算注意力权重
注意力分数矩阵: QK⊤∈Rl×l\\mathbfQ\\mathbfK^\\top \\in\\mathbbR^l\\times l ：特别地，Scaled Dot-product Attention 使用点积作为相似度函数，这样相似的 queries 和 keys 会具有较大的点积。
注意力分数需要乘以一个缩放因子 dk\\sqrtd_k 来标准化它们的方差 注意力分数需要对第二个维度做 Softmax 标准化 最终的注意力权重矩阵： softmax(QK⊤dk)∈Rl×l\\mathrmsoftmax\\left(\\frac\\mathbfQ\\mathbfK^\\top \\sqrtd_k\\right) \\in\\mathbbR^l\\times l ：矩阵中的每一个元素 wijw_ij 表示第 ii 个 token(query) 向量与第 jj 个 token(key) 向量之间的关联程度。
更新token embeddings
将权重 wijw_ij 与对应的 value 向量 v1,⋯ ,vl\\mathbfv_1,\\cdots,\\mathbfv_l 相乘以获得第 ii 个 token(query) 向量更新后的语义表示 xi′=∑jwijvj\\mathbfx_i^\\prime = \\sum_j w_ij\\mathbfv_j 对公式进行拆解：
Attention(qi,K,V)=∑j=1l1Zexp⁡(⟨qi,kj⟩dk)vj \\beginalign \\textAttention(\\mathbfq_i,\\mathbfK,\\mathbfV) = \\sum_j=1^l \\frac1Z\\exp\\left(\\frac\\langle\\mathbfq_i, \\mathbfk_j\\rangle\\sqrtd_k\\right)\\mathbfv_j \\endalign 其中 ZZ 是归一化因子， K\\mathbf K , V\\mathbf V 是一一对应的 key 和 value 向量序列。
Scaled Dot-product Attention 就是通过 qi\\mathbfq_i 这个 query 与各个 kj\\mathbfk_j 内积并 softmax 的方式来得到 qi\\mathbfq_i 与各个 vj\\mathbfv_j 的相似度，然后加权求和，得到一个 dvd_v 维的向量。 其中因子 dkd_k 起到调节作用，使得内积不至于太大。
缩放因子 dk\\sqrtd_k 的作用分析
scaled 是指对注意力权重进行缩放，以确保数值的稳定性
控制 softmax 的输入的数量级：
queries 和 keys 点积的方差与 dkd_k 成正比。方差越大说明点积的数量级越大，为了将方差稳定为 1，将点积除以 dk\\sqrtd_k :
【证明】：
考虑两个随机向量 u\\mathbf u 和 v\\mathbf v ，其长度都为 dd ，且它们的元素都来自均值为 00 、方差为 11 的独立分布。
对于向量的元素 uiu_i 和 viv_i ，它们的点积为 uiviu_iv_i 期望值： E[uivi]=E[ui]E[vi]=0\\mathrmE[u_iv_i] = \\mathrmE[u_i] E [v_i] = 0 方差： Var(uivi)=E[(uivi)2]−(E[uivi])2=E[ui2]E[vi2]=1\\mathrmVar(u_iv_i)=\\mathrmE[(u_iv_i)^2] - (\\mathrmE [u_iv_i])^2= \\mathrmE[u_i^2] \\mathrmE[v_i^2]=1 因此，向量 u\\mathbf u 和 v\\mathbf v 的点积是这些 uiviu_iv_i 项的总和：
u⋅v=∑i=1duivi \\beginalign \\mathbf u \\cdot \\mathbf v = \\sum ^d_i = 1u_iv_i \\endalign 期望值： E[u⋅v]=0\\mathrmE[\\mathbf u \\cdot \\mathbf v] = 0 方差： Var[u⋅v]=d⋅Var(uivi)=d\\mathrmVar[\\mathbf u \\cdot \\mathbf v] = d \\cdot \\mathrmVar(u_iv_i)= d 因此得出结论
Var(u⋅vdk)=dk(dk)2=1 \\beginalign \\mathrmVar(\\frac\\mathbfu \\cdot \\mathbfv\\sqrtd_k) = \\fracd_k(\\sqrtd_k)^2 = 1 \\endalign 防止求导的梯度越趋向于0：Softmax 的输入的数量级越大，求导的梯度越会趋向于0。
当 dk\\sqrtd_k 较大时，即两个向量的长度比较长时，两个向量的相对差距就会变大。值最大的那个值做出来的 softmax 会更加靠近 1，剩下的会更加靠近 0。值的分布会更加向两端靠拢，此时计算梯度的时候，梯度会趋近于 0。
softmax 函数能够将输入中的元素间差距拉大，然后归一化为一个 0~1 之间的分布。
假设输入的 x=(x1,x2,...,xn)x = ( x_1 , x_2 , ..., x_n ) , 其中最大元素为 xkx_k ，其对应的概率输出为 yky_k ，将会呈现 xkx_k 的数量级越大， yky_k 越趋向于 1 的趋势。
输入 x=[a,a,2a]T\\mathbf x = [a, a, 2a]^T , 不同量级的 aa 对应的 y^3\\hat y_3 ：
1 2 3 4 5 6 for a in (1,10,100): print(nn.Softmax((torch.tensor([a, a, 2*a]).float()))) tensor([0.2119, 0.2119, 0.5761]) tensor([4.5396e-05, 4.5396e-05, 9.9991e-01]) tensor([3.7835e-44, 3.7835e-44, 1.0000e+00]) 在这种情况下，如果输入 xx 的数量级很大，而假设它的最大值是 xkx_k ，则经过 softmax 计算得到的 yy 中，只有 yky_k 趋向于 1，其它概率元素全都趋向于 0。
当 dk\\sqrtd_k 较小时，除不除都没事；
当 dk\\sqrtd_k 较大时，两个向量的长度比较长时，两个向量的相对差距就会变大。值最大的那个值做出来的 softmax 会更加靠近 1，剩下的会更加靠近 0。值的分布会更加向两端靠拢，此时计算梯度的时候，梯度会趋近于 0。
Attention 代码实现
将 causal_mask 对应的注意力分数设置为 −∞-\\infin ，这样 softmax 之后其对应的注意力权重就为 00 了（ e−∞=0e^−\\infin=0 ）
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 import torch import torch.nn.functional as F from math import sqrt def scaled_dot_product_attention(query, key, value, causal_mask=None): # [B,h,L,d/h] dim_k = query.size(-1) scores = torch.bmm(query, key.transpose(-1, -2)) / sqrt(dim_k) if causal_mask is not None: # -inf mask_value = torch.finfo(attn_weights.dtype).min # [a11, -inf, ..., -inf] # [a21, a22, ..., -inf] # ... # [an1, an2, ..., ann] scores = torch.where(causal_mask, attn_weights, mask_value) # 对每一行求softmax (最后一维) # [b11, 0, ..., 0] # [b21, b22, ..., 0] # ... # [bn1, bn2, ..., bnn] attn_weights = F.softmax(scores, dim=-1) # dropout attn_weights = self.attn_dropout(attn_weights) attn_output = torch.bmm(attn_weights, value) return attn_output mask 矩阵的实现
1 2 3 4 # causal_mask 下三角矩阵 causal_mask = torch.tril( torch.ones((query_length, query_length), dtype=torch.bool) ).view(1, 1, query_length, query_length) Multi-headed attention headi=Attention(Q,K,V)MultiHead(Q,K,V)=Concat(head1,...,headh) \\beginalign \\mathrmhead_i &amp;= \\textAttention(\\mathbfQ,\\mathbfK,\\mathbfV)\\\\[7pt] \\textMultiHead(\\mathbfQ,\\mathbfK,\\mathbfV) &amp;= \\textConcat(\\mathrmhead_1,...,\\mathrmhead_h) \\endalign 多头的注意力有助于网络捕捉到更丰富的特征/信息 允许模型在不同的表示子空间里学习到相关的信息 代码实现
实现一个注意力头
每个头都会初始化三个独立的线性层，负责将 Q\\mathbfQ , K\\mathbfK , V\\mathbfV 序列映射到尺寸为 [batch_size, seq_len, head_dim] 的张量，其中 head_dim 是映射到的向量维度。
实践中一般将 head_dim 设置为 embed_dim 的因数，这样 token 嵌入式表示的维度就可以保持不变，例如 BERT 有 1212 个注意力头，因此每个头的维度被设置为 768/12=64768/12=64 。
1 2 3 4 5 6 7 8 9 10 11 12 13 from torch import nn class AttentionHead(nn.Module): def __init__(self, embed_dim, head_dim): super().__init__() self.q = nn.Linear(embed_dim, head_dim) self.k = nn.Linear(embed_dim, head_dim) self.v = nn.Linear(embed_dim, head_dim) def forward(self, query, key, value, query_mask=None, key_mask=None, mask=None): attn_outputs = scaled_dot_product_attention( self.q(query), self.k(key), self.v(value), query_mask, key_mask, mask) return attn_outputs 构建 Multi-head Attention 层
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 lass MultiHeadAttention(nn.Module): def __init__(self, config): super().__init__() embed_dim = config.hidden_size num_heads = config.num_attention_heads head_dim = embed_dim // num_heads self.heads = nn.ModuleList( [AttentionHead(embed_dim, head_dim) for _ in range(num_heads)] ) self.output_linear = nn.Linear(embed_dim, embed_dim) def forward(self, query, key, value, query_mask=None, key_mask=None, mask=None): x = torch.cat([ h(query, key, value, query_mask, key_mask, mask) for h in self.heads ], dim=-1) x = self.output_linear(x) return x MHA &amp; MQA &amp; GQA
MHA（Multi-head Attention）：
标准的 多头注意力机制， hh 个 Query、Key 和 Value 矩阵
MQA（Multi-Query Attention）：
Fast Transformer Decoding: One Write-Head is All You Need
多查询注意力：MQA 让所有的头之间共享同一份 Key 和 Value 矩阵，每个头只单独保留了一份 Query 参数，从而大大减少 Key 和 Value 矩阵的参数量。
GQA（Grouped-Query Attention）：
GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints
分组查询注意力，GQA 将查询头分成 G 组，每个组共享一个 Key 和 Value 矩阵。GQA-G 是指具有 GG 组的 grouped-query attention。
GQA-1 具有单个组，因此具有单个 Key 和 Value，等效于 MQA。 GQA-H 具有与头数相等的组，等效于 MHA。 GQA 介于 MHA 和 MQA 之间。
The Feed-Forward Layer (FFN) Transformer Encoder/Decoder 中的前馈子层实际上就是两层全连接神经网络，它单独地处理序列中的每一个词向量，也被称为 position-wise feed-forward layer。
常见做法是让第一层的维度是词向量大小的 4 倍，然后以 GELU 作为激活函数。
在下面的实现中，输入 x∈RB×L×hidden_size\\mathbf x \\in \\mathbbR^B\\times L \\times \\mathrmhidden\\_size 将被一个两层的 MLP 转换成形状为（B，L, hidden_size）的输出张量。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 class FeedForward(nn.Module): def __init__(self, config): super().__init__() self.linear_1 = nn.Linear(config.hidden_size, config.intermediate_size) self.linear_2 = nn.Linear(config.intermediate_size, config.hidden_size) self.gelu = nn.GELU() self.dropout = nn.Dropout(config.hidden_dropout_prob) def forward(self, x): x = self.linear_1(x) x = self.gelu(x) x = self.linear_2(x) x = self.dropout(x) return x Layer Normalization Layer Normalization 对 单个样本基于特征维度 进行规范化。
Skip Connections 则是将张量直接传递给模型的下一层而不进行处理，并将其添加到处理后的张量中。
向 Transformer Encoder/Decoder 中添加 Layer Normalization 目前共有两种做法:
Post layer normalization：
Post Norm: xt+1=Norm(xt+Ft(xt)) \\beginalign \\textPost Norm: \\quad \\boldsymbolx_t+1 = \\textNorm(\\boldsymbolx_t + F_t(\\boldsymbolx_t)) \\endalign Transformer 架构中传统的 Add&amp;Norm 使用 Post-LN，将 Layer normalization 放在 Skip Connections 之间。 但是因为梯度可能会发散，这种做法很难训练，还需要结合学习率预热 (learning rate warm-up) 等技巧；
Pre layer normalization：
Pre Norm: xt+1=xt+Ft(Norm(xt)) \\beginalign \\textPre Norm:  \\quad \\boldsymbolx_t+1 = \\boldsymbolx_t + F_t(\\textNorm(\\boldsymbolx_t))\\\\ \\endalign 目前主流的做法，将 Layer Normalization 放置于 Skip Connections 的范围内。同一设置之下，Pre Norm 结构往往更容易训练，并且不需要学习率预热，但最终效果通常不如 Post Norm。
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 class TransformerEncoderLayer(nn.Module): def __init__(self, config): super().__init__() self.layer_norm_1 = nn.LayerNorm(config.hidden_size) self.layer_norm_2 = nn.LayerNorm(config.hidden_size) self.attention = MultiHeadAttention(config) self.feed_forward = FeedForward(config) def forward(self, x, mask=None): # Apply layer normalization and then copy input into query, key, value hidden_state = self.layer_norm_1(x) # Apply attention with a skip connection x = x + self.attention(hidden_state, hidden_state, hidden_state, mask=mask) # Apply feed-forward layer with a skip connection x = x + self.feed_forward(self.layer_norm_2(x)) return x Post Norm 假设初始状态下 xx , F(x)F(x) 的方差均为 11 ，那么 x+F(x)x+F(x) 的方差就是 22 ，而 Normalization 操作负责将方差重新降为 11 ，这就说明初始阶段 Post Norm 相当于
xt+1=xt+Ft(xt)2 \\beginequation x_t+1 = \\fracx_t + F_t(x_t)\\sqrt2 \\endequation 递归下去，我们得到
xl= xl−12+Fl−1(xl−1)2= xl−22+Fl−2(xl−2)2+Fl−1(xl−1)2= ⋯= x02l/2+F0(x0)2l/2+F1(x1)2(l−1)/2+F2(x2)2(l−2)/2+⋯+Fl−1(xl−1)21/2 \\beginequation\\beginaligned x_l =&amp;\\, \\fracx_l-1\\sqrt2 + \\fracF_l-1(x_l-1)\\sqrt2 \\\\ =&amp;\\, \\fracx_l-22 + \\fracF_l-2(x_l-2)2 + \\fracF_l-1(x_l-1)\\sqrt2 \\\\[7pt] =&amp;\\, \\cdots \\\\[7pt] =&amp;\\,\\fracx_02^l/2 + \\fracF_0(x_0)2^l/2 + \\fracF_1(x_1)2^(l-1)/2 + \\fracF_2(x_2)2^(l-2)/2 + \\cdots + \\fracF_l-1(x_l-1)2^1/2 \\endaligned\\endequation 本来残差的意思是给前面的层搞一条“绿色通道”，让梯度可以更直接地回传，但是在 Post Norm 中，这条“绿色通道”被严重削弱了，越靠近前面的通道反而权重越小，残差“名存实亡”，因此还是不容易训练。
Pre Norm Pre Norm迭代展开之后有：
xl=x0+F0(x0)+F1(x1/2)+F2(x2/3)+⋯+Fl−1(xl−1/l) \\beginequation x_l = x_0 + F_0(x_0) + F_1(x_1/\\sqrt2) + F_2(x_2/\\sqrt3) + \\cdots + F_l-1(x_l-1/\\sqrtl)\\endequation 每一条残差通道都是平权的，残差的作用会比 Post Norm 更加明显，所以它也更好优化。当然，这样最后的 xlx_l 方差将会很大，所以在接预测层之前 xlx_l 也还要加个 Normalization。
一个 LL 层 Pre Norm 的模型，其实际等效层数不如 LL 层的 Post Norm 模型，而层数少了导致效果变差了
xt+1= xt+Ft(Norm(xt))= xt−1+Ft−1(Norm(xt−1))+Ft(Norm(xt))= ⋯= x0+F0(Norm(x0))+⋯+Ft−1(Norm(xt−1))+Ft(Norm(xt)) \\beginaligned \\mathbfx_t+1 =&amp;\\,\\mathbfx_t + F_t(\\textNorm(\\mathbfx_t)) \\\\[7pt] =&amp;\\, \\mathbfx_t-1 + F_t-1(\\textNorm(\\mathbfx_t-1)) + F_t(\\textNorm(\\mathbfx_t)) \\\\[7pt] =&amp;\\, \\cdots \\\\[7pt] =&amp;\\, \\mathbfx_0 + F_0 (\\textNorm(\\mathbfx_0)) + \\cdots + F_t-1(\\textNorm(\\mathbfx_t-1)) + F_t(\\textNorm(\\mathbfx_t)) \\endaligned 其中每一项都是同一量级的，那么有 xt+1=O(t+1) \\mathbfx_t+1=\\mathscrO(t+1) ，当 tt 较大时，两者的相对差别很小，因此
Ft(Norm(xt))+Ft+1(Norm(xt+1))≈ Ft(Norm(xt))+Ft+1(Norm(xt))= (Ft⊕Ft+1)(Norm(xt)) \\beginaligned &amp;\\, F_t(\\textNorm(\\mathbfx_t)) + F_t+1(\\textNorm(\\mathbfx_t+1)) \\\\[7pt] \\approx&amp;\\, F_t(\\textNorm(\\mathbfx_t)) + F_t+1(\\textNorm(\\mathbfx_t)) \\\\[7pt] =&amp;\\, (F_t\\oplus F_t+1)(\\textNorm(\\mathbfx_t)) \\endaligned 即当 tt 比较大时， xt\\mathbfx_t ， xt+1\\mathbfx_t+1 相差较小，所以 Ft+1(Norm(xt+1))F_t+1(\\textNorm(\\mathbfx_t+1)) 与 Ft+1(Norm(xt))F_t+1(\\textNorm(\\mathbfx_t)) 很接近，因此原本一个 tt 层的模型与 t+1t+1 层之和，近似等效于一个更宽的 tt 层模型，所以在 Pre Norm 中多层叠加的结果更多是增加宽度而不是深度，层数越多，这个层就越“虚”。
DeepNet:
However, the gradients of Pre-LN at bottom layers tend to be larger than at top layers, leading to a degradation in performance compared with Post-LN.
Pre Norm 结构会过度倾向于恒等分支（bottom layers），从而使得 Pre Norm 倾向于退化（degradation）为一个“浅而宽”的模型，最终不如同一深度的 Post Norm.
Warmup的作用 根据泰勒展开式：
f(x+Δx)≈f(x)+⟨∇xf(x),Δx⟩ \\beginequationf(x+\\Delta x) \\approx f(x) + \\langle\\nabla_x f(x), \\Delta x\\rangle\\endequation 即增量 f(x+Δx)−f(x)f(x+\\Delta x) - f(x) 正比于梯度，换句话说，梯度衡量了输出对输入的依赖程度。如果梯度消失，那么意味着模型的输出对输入的依赖变弱了。
Warmup 是在训练开始阶段，将学习率从 0 缓增到指定大小，而不是一开始从指定大小训练。
如果不进行 Wamrup，那么模型一开始就快速地学习，由于梯度消失，模型对越靠后的层越敏感，也就是越靠后的层学习得越快，然后后面的层是以前面的层的输出为输入的，前面的层根本就没学好，所以后面的层虽然学得快，但却是建立在糟糕的输入基础上的。
很快地，后面的层以糟糕的输入为基础到达了一个糟糕的局部最优点，此时它的学习开始放缓（因为已经到达了它认为的最优点附近），同时反向传播给前面层的梯度信号进一步变弱，这就导致了前面的层的梯度变得不准。但Adam 的更新量是常数量级的，梯度不准，但更新量依然是数量级，意味着可能就是一个常数量级的随机噪声了，于是学习方向开始不合理，前面的输出开始崩盘，导致后面的层也一并崩盘。
如果 Post Norm 结构的模型不进行 Wamrup，我们能观察到的现象往往是：loss 快速收敛到一个常数附近，然后再训练一段时间，loss 开始发散，直至 NAN。 如果进行 Wamrup，那么留给模型足够多的时间进行“预热”，在这个过程中，主要是抑制了后面的层的学习速度，并且给了前面的层更多的优化时间，以促进每个层的同步优化。 这里的讨论前提是梯度消失，如果是 Pre Norm 之类的结果，没有明显的梯度消失现象，那么不加 Warmup 往往也可以成功训练。
Reference Attention Is All You Need Transformers快速入门 The Illustrated Transformer The Annotated Transformer 浅谈Transformer的初始化、参数化与标准化 为什么Pre Norm的效果不如Post Norm？ 模型优化漫谈：BERT的初始标准差为什么是0.02？`}).add({id:10,tag:"en",href:"/blogs/transformer-attention/",title:"Transformer Attention",description:"Transformer Attention",content:`KV Cache KV Cache 在不影响任何计算精度的前提下，通过空间换时间思想，提高推理性能。
KV Cache 只能用于 Decoder 架构的模型，因为 Decoder 有 Causal Mask，在推理的时候前面已经生成的字符不需要与后面的字符产生 attention，从而使得前面已经计算的 KK 和 VV 可以缓存起来。
KV Cache 推理过程 假设模型初始输入只有 11 个 token
Att(Q,K,V)=softmax(q1k1⊤)v1 \\mathrmAtt(Q, K, V) = \\textsoftmax(\\mathbfq_1 \\mathbfk_1^\\top ) \\mathbfv_1 其中 : Q=(q1)∈R1×dQ = \\left( \\mathbfq_1 \\right) \\in \\mathbbR^1\\times d ， K=(k1)∈R1×dK = \\left( \\mathbfk_1 \\right) \\in \\mathbbR^1\\times d ， V=(v1)∈R1×dV = \\left( \\mathbfv_1 \\right) \\in \\mathbbR^1\\times d 当模型生成第 22 个 token 时，Attention 的计算如下：
Att(Q,K,V)=softmax([q1k1⊤−∞q2k1⊤q2k2⊤])[v1v2]=[softmax(q1k1⊤)0softmax(q2k1⊤)softmax(q2k2⊤)][v1v2]=[softmax(q1k1⊤)v1softmax(q2k1⊤)v1+softmax(q2k2⊤)v2]=[Att1(Q,K,V)Att2(Q,K,V)] \\beginaligned \\mathrm Att(Q, K, V) &amp; = \\mathrmsoftmax( \\beginbmatrix \\mathbfq_1\\mathbfk_1^\\top&amp;-\\infty \\\\ \\mathbfq_2\\mathbfk_1^\\top&amp;\\mathbfq_2\\mathbfk_2^\\top \\endbmatrix) \\beginbmatrix\\mathbfv_1\\\\\\mathbfv_2\\endbmatrix \\\\[7pt] &amp; =\\beginbmatrix \\textsoftmax( \\mathbfq_1\\mathbfk_1^\\top)&amp;0\\\\ \\textsoftmax(\\mathbfq_2\\mathbfk_1^\\top)&amp;\\textsoftmax(\\mathbfq_2\\mathbfk_2^\\top) \\endbmatrix \\beginbmatrix\\mathbfv_1\\\\\\mathbfv_2\\endbmatrix \\\\[7pt] &amp;=\\beginbmatrix \\mathrmsoftmax(\\mathbfq_1\\mathbfk_1^\\top)\\mathbfv_1\\\\[7pt] \\mathrmsoftmax(\\mathbfq_2\\mathbfk_1^\\top)\\mathbfv_1+\\mathrmsoftmax(\\mathbfq_2\\mathbfk_2^\\top)\\mathbfv_2 \\endbmatrix \\\\[7pt] &amp; = \\beginbmatrix \\mathrmAtt_1(Q, K, V) \\\\ \\mathrmAtt_2(Q, K, V) \\endbmatrix \\endaligned 其中 Att1(Q,K,V)\\mathrmAtt_1(Q,K,V) 和 Att2(Q,K,V)\\mathrmAtt_2(Q,K,V) 分别表示 Attention 的第 11 , 22 行： qi,ki∈Rd\\mathbfq_i, \\mathbfk_i \\in \\mathbb R^d Att1(Q,K,V)=softmax(q1k1⊤)v1Att2(Q,K,V)=softmax(q2k1⊤)v1+softmax(q2k2⊤)v2 \\beginaligned \\mathrmAtt_1(Q, K, V) &amp;= \\mathrmsoftmax(\\mathbfq_1\\mathbfk_1^\\top)\\mathbfv_1 \\\\[7pt] \\mathrmAtt_2(Q, K, V) &amp;= \\mathrmsoftmax(\\mathbfq_2\\mathbfk_1^\\top)\\mathbfv_1+\\mathrmsoftmax(\\mathbfq_2\\mathbfk_2^\\top)\\mathbfv_2 \\endaligned 由于 Decoder 有 Causal Mask， q2k1⊤\\mathbfq_2\\mathbfk_1^\\top 这个值会被 mask
当模型生成第 33 个 token 时，可推导得：
Att(Q,K,V)=[Att1(Q,K,V)Att2(Q,K,V)Att3(Q,K,V)] \\beginaligned \\mathrm Att(Q, K, V) = \\beginbmatrix \\mathrmAtt_1(Q, K, V) \\\\ \\mathrmAtt_2(Q, K, V) \\\\ \\mathrmAtt_3(Q, K, V) \\endbmatrix \\endaligned 其中 Att1(Q,K,V)\\mathrmAtt_1(Q,K,V) ， Att2(Q,K,V)\\mathrmAtt_2(Q,K,V) 和 Att3(Q,K,V)\\mathrmAtt_3(Q,K,V) 分别表示 Attention 的第 11 , 22 , 33 行： qi,ki∈Rd\\mathbfq_i, \\mathbfk_i \\in \\mathbb R^d Att1(Q,K,V)=softmax(q1k1⊤)v1Att2(Q,K,V)=softmax(q2k1⊤)v1+softmax(q2k2⊤)v2Att3(Q,K,V)=softmax(q3k1⊤)v1+softmax(q3k2⊤)v2+softmax(q3k3⊤)v3 \\beginaligned \\mathrmAtt_1(Q, K, V) &amp;= \\mathrmsoftmax(\\mathbfq_1\\mathbfk_1^\\top)\\mathbfv_1 \\\\[7pt] \\mathrmAtt_2(Q, K, V) &amp;= \\mathrmsoftmax(\\mathbfq_2\\mathbfk_1^\\top)\\mathbfv_1+\\mathrmsoftmax(\\mathbfq_2\\mathbfk_2^\\top)\\mathbfv_2\\\\[7pt] \\mathrmAtt_3(Q, K, V) &amp;=\\mathrmsoftmax(\\mathbfq_3\\mathbfk_1^\\top)\\mathbfv_1+\\mathrmsoftmax(\\mathbfq_3\\mathbfk_2^\\top)\\mathbfv_2+\\mathrmsoftmax(\\mathbfq_3\\mathbfk_3^\\top)\\mathbfv_3 \\endaligned Attk\\mathrmAtt_k 只依赖 当前 的 qk\\mathbfq_k 和 之前 所有的 KK ， VV ，所以 只有 KV cache，没有 Q cache
直接计算存在冗余 推理第 kk 个字符的时候只需要输入第 k−1k-1 个字符 【实现】
在推理时使用 past_key_values 参数，以追加方式保存每一轮的 KK , VV 值。
保存的内容为 ((k,v), (k,v), ..., (k,v))，即有 n_layer 个 (k,v) 组成的一个元组，其中 k 和 v 的维度均为 [B, n_head, L, head_dims]
推理输出的 token 直接作为下一轮的输入，不再拼接，因为上文信息已经在 past_key_values 中
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 # query:[B, H, 1, H_D] # key:[B, H, L+1, H_D] # value:[B, H, L+1, H_D] if layer_past is not None: past_key = layer_past[0] past_value = layer_past[1] key = torch.cat((past_key, key), dim=-2) value = torch.cat((past_value, value), dim=-2) if use_cache is True: present = (key, value) else: present = None # attn_weights:[B, H, 1, L+1] attn_weights = torch.matmul(query, key.transpose(-1, -2)) # causal mask mask_value = torch.tensor(torch.finfo(attn_weights.dtype).min) attn_weights = torch.where(causal_mask, attn_weights, mask_value) attn_weights = nn.Softmax(dim=-1)(attn_weights) # attn_output: [B, H, 1, H_D] attn_output = torch.matmul(attn_weights, value) # merge head:[B, 1, D] attn_output = self._merge_heads(attn_output, num_attention_heads, head_dim) if use_cache is True: presents = presents + (outputs[1],) KV Cache 参数量估计 LL ：输入序列长度 NN ：输入序列长度 dd ：hidden_size lnl_n ：层数 如果以 float16 保存（2 个字节表示一个数），占用的显存为 2⋅B(L+N)dln⋅22 \\cdot B(L+N)dl_n \\cdot 2 如果以 float32 保存（4 个字节表示一个数），占用的显存为 2⋅B(L+N)dln⋅42 \\cdot B(L+N)dl_n \\cdot 4 KV Cache 降低的重要性 使用 GPU 进行推理时，单张 GPU 的显存是有限的。
一部分用来存放模型的参数和前向计算的激活值，这部分依赖于模型的体量，选定模型后它就是个常数；
另外一部分用来存放模型的 KV Cache，由 1.2 知道，KV Cache 依赖于 模型的体量 和 模型的输入长度，在推理过程中 动态增长，当 Context 长度足够长时，它的大小就会占主导地位，可能超出一张卡甚至一台机（8 张卡）的总显存量。
减少 KV Cache 的目的: 实现更快的推理速度或者更大的吞吐总量，实现更低的推理成本
更少的设备上推理更长的 Context 相同的 Context 长度下让推理的 batch size 更大 MHA &amp; MQA &amp; GQA &amp; MLA ​
dd ：hidden size nhn_h ：头数 dhd_h ：每个头的维度 ll ：block 层数 ht∈Rd\\mathbfh_t \\in \\mathbbR^d : 第 tt 个 token 的 hidden state MHA 对于标准的 MHA 有 :
[qt1;qt2;...;qtnh]=qt=htWQ∈Rdh⋅nh,qti∈Rdh,WQ∈Rd×dh⋅nh[kt1;kt2;...;ktnh]=kt=htWK∈Rdh⋅nh,kti∈Rdh,WK∈Rd×dh⋅nh[vt1;vt2;...;vtnh]=vt=htWV∈Rdh⋅nh,vti∈Rdh,WV∈Rd×dh⋅nh \\beginalign \\left [\\mathbfq_t^1;\\mathbfq_t^2;...;\\mathbfq_t^n_h \\right]=\\mathbfq_t = \\mathbfh_t \\mathbfW^Q\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfq_t^i\\in \\mathbbR^d_h, \\quad \\mathbfW^Q\\in \\mathbbR^d \\times d_h \\cdot n_h\\\\ \\\\ \\left [\\mathbfk_t^1;\\mathbfk_t^2;...;\\mathbfk_t^n_h\\right]=\\mathbfk_t = \\mathbfh_t \\mathbfW^K \\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfk_t^i \\in \\mathbbR^d_h, \\quad \\mathbfW^K\\in \\mathbbR^d \\times d_h \\cdot n_h\\\\ \\\\ \\left[\\mathbfv_t^1;\\mathbfv_t^2;...;\\mathbfv_t^n_h\\right]=\\mathbfv_t = \\mathbfh_t \\mathbfW^V\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfv_t^i \\in \\mathbbR^d_h, \\quad \\mathbfW^V\\in \\mathbbR^d \\times d_h \\cdot n_h \\endalign qti\\mathbfq_t^i , kti\\mathbfk_t^i , vti\\mathbfv_t^i 表示第 ii 个注意力头的查询、键和值。 ot=[ot1,ot2,⋯ ,otnh]∈Rdh⋅nhoti=∑j=1tSoftmaxj(qtikji⊤dh)vji∈Rnhut=otWO=[ot1,ot2,⋯ ,otnh]WO∈Rd,WO∈Rdh⋅nh×d \\beginalign &amp;\\mathbfo_t =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\in \\mathbbR^d_h\\cdot n_h\\\\ \\\\ &amp;\\mathbfo_t^i=\\sum_j = 1^t\\mathrmSoftmax_j(\\frac\\mathbfq_t^i\\mathbfk_j^i ^\\top\\sqrtd_h)\\mathbfv_j^i \\in \\mathbbR^n_h \\\\ \\\\ &amp;\\mathbfu_t =\\mathbfo_t\\mathbfW^O =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\mathbfW^O \\in \\mathbbR^d, \\quad \\mathbfW^O \\in \\mathbbR^d_h \\cdot n_h\\times d \\endalign WO\\mathbfW^O 表示输出投影矩阵 在推断阶段，所有 key 和 value 都必须被缓存起来以加快推断速度(KV Cache)。
因此对于每一个 token 来说，MHA 需要缓存 2nhdhl2n_hd_hl 个元素。
在模型部署中，KV Cache 成为了制约最大批次大小以及序列长度的一个大瓶颈。
KV Cache：在 token by token 递归生成时，新预测出来的第 t+1t+1 个 token，并不会影响到已经算好的 k≤tik^i_\\le t 和 v≤tiv^i_\\le t ，因此这部分结果我们可以缓存下来供后续生成调用，避免不必要的重复计算。
MQA MQA 直接让所有 Attention Head 共享同一个 KK 、 VV , 即取消 MHA 中 k\\mathbfk 和 v\\mathbfv 的上标 i^i , 记为 kt∗\\mathbfk_t^* 和 vt∗\\mathbfv_t^* [qt1;qt2;...;qtnh]=qt=htWQ∈Rdh⋅nh,qti∈Rdh,WQ∈Rd×dh⋅nh[kt∗;kt∗;...;kt∗]=kt=htWK∈Rdh⋅nh,kt∗∈Rdh,WK∈Rd×dh⋅nh[vt∗;vt∗;...;vt∗]=vt=htWV∈Rdh⋅nh,vt∗∈Rdh,WV∈Rd×dh⋅nh \\beginalign \\left [\\mathbfq_t^1;\\mathbfq_t^2;...;\\mathbfq_t^n_h \\right]=\\mathbfq_t = \\mathbfh_t \\mathbfW^Q\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfq_t^i\\in \\mathbbR^d_h, \\quad \\mathbfW^Q\\in \\mathbbR^d \\times d_h \\cdot n_h\\\\ \\\\ \\left [\\mathbfk_t^*;\\mathbfk_t^*;...;\\mathbfk_t^*\\right] =\\mathbfk_t = \\mathbfh_t \\mathbfW^K \\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfk_t^* \\in \\mathbbR^d_h, \\quad \\mathbfW^K\\in \\mathbbR^d \\times d_h \\cdot n_h\\\\ \\\\ \\left [\\mathbfv_t^*;\\mathbfv_t^*;...;\\mathbfv_t^*\\right] =\\mathbfv_t = \\mathbfh_t \\mathbfW^V\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfv_t^* \\in \\mathbbR^d_h, \\quad \\mathbfW^V\\in \\mathbbR^d \\times d_h \\cdot n_h \\endalign ot=[ot1,ot2,⋯ ,otnh]∈Rdh⋅nhoti=∑j=1tSoftmaxj(qtikj∗⊤dh)vj∗∈Rnhut=otWO=[ot1,ot2,⋯ ,otnh]WO∈Rd,WO∈Rdh⋅nh×d \\beginalign &amp;\\mathbfo_t =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\in \\mathbbR^d_h\\cdot n_h\\\\ \\\\ &amp;\\mathbfo_t^i=\\sum_j = 1^t\\mathrmSoftmax_j(\\frac\\mathbfq_t^i\\mathbfk_j^* ^\\top\\sqrtd_h)\\mathbfv_j^* \\in \\mathbbR^n_h \\\\ \\\\ &amp;\\mathbfu_t =\\mathbfo_t\\mathbfW^O =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\mathbfW^O \\in \\mathbbR^d, \\quad \\mathbfW^O \\in \\mathbbR^d_h \\cdot n_h\\times d \\endalign MQA 将 KV Cache 减少到了原来的 1nh\\frac1n_h , 对于每一个 token 来说，MQA 需要缓存 2dhl2d_hl 个元素 。
效果方面，目前看来大部分任务的损失都比较有限，且 MQA 的支持者相信这部分损失可以通过进一步训练来弥补回。
此外，MQA 由于共享了 K、V，将会导致 Attention 的参数量减少了将近一半，而为了模型总参数量的不变，通常会相应地增大 FFN/GLU 的规模，这也能弥补一部分效果损失。
GQA GQA 将所有 Head 分为 gg 个组（ gg 可以整除 nhn_h ），每组共享同一对 KK 、 VV [qt1;qt2;...;qtnh]=qt=htWQ∈Rdh⋅nh,qti∈Rdh,WQ∈Rd×dh⋅nh[kt1;⋯ ;kt1⏟⌈nhg⌉;⋯ ktg;⋯ ;ktg⏟⌈nhg⌉]=kt=htWK∈Rdh⋅nh,kti∈Rdh,WK∈Rd×dh⋅nh[vt1;⋯ ;vt1⏟⌈nhg⌉;⋯ vtg;⋯ ;vtg⏟⌈nhg⌉]=vt=htWV∈Rdh⋅nh,vti∈Rdh,WV∈Rd×dh⋅nh \\beginalign \\left [\\mathbfq_t^1;\\mathbfq_t^2;...;\\mathbfq_t^n_h \\right]=\\mathbfq_t = \\mathbfh_t \\mathbfW^Q\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfq_t^i\\in \\mathbbR^d_h, \\quad \\mathbfW^Q\\in \\mathbbR^d \\times d_h \\cdot n_h\\\\[7pt] \\left[ \\underbrace\\mathbfk_t^1;\\cdots;\\mathbfk_t^1_\\lceil \\fracn_hg \\rceil; \\cdots\\ \\underbrace\\mathbfk_t^g;\\cdots;\\mathbfk_t^g_\\lceil \\fracn_hg \\rceil \\right] =\\mathbfk_t = \\mathbfh_t \\mathbfW^K \\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfk_t^i \\in \\mathbbR^d_h, \\quad \\mathbfW^K\\in \\mathbbR^d \\times d_h \\cdot n_h\\\\[7pt] \\left[ \\underbrace\\mathbfv_t^1;\\cdots;\\mathbfv_t^1_\\lceil \\fracn_hg \\rceil; \\cdots\\ \\underbrace\\mathbfv_t^g;\\cdots;\\mathbfv_t^g_\\lceil \\fracn_hg \\rceil \\right] =\\mathbfv_t = \\mathbfh_t \\mathbfW^V\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfv_t^i \\in \\mathbbR^d_h, \\quad \\mathbfW^V\\in \\mathbbR^d \\times d_h \\cdot n_h \\endalign ot=[ot1,ot2,⋯ ,otnh]∈Rdh⋅nhoti=∑j=1tSoftmaxj(qtikji⊤dh)vji∈Rnhut=otWO=[ot1,ot2,⋯ ,otnh]WO∈Rd,WO∈Rdh⋅nh×d \\beginalign &amp;\\mathbfo_t =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\in \\mathbbR^d_h\\cdot n_h\\\\[7pt] &amp;\\mathbfo_t^i=\\sum_j = 1^t\\mathrmSoftmax_j(\\frac\\mathbfq_t^i\\mathbfk_j^i ^\\top\\sqrtd_h)\\mathbfv_j^i \\in \\mathbbR^n_h \\\\[7pt] &amp;\\mathbfu_t =\\mathbfo_t\\mathbfW^O =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\mathbfW^O \\in \\mathbbR^d, \\quad \\mathbfW^O \\in \\mathbbR^d_h \\cdot n_h\\times d \\endalign g=nhg=n_h ：MHA g=1g=1 ：MQA 1&lt;g&lt;nh1&lt;g&lt;n_h ：KV Cache 减少到了原来的 gnh\\fracgn_h 。 对于每一个 token 来说，GQA 需要缓存 2gdhl2gd_hl 个元素
Llama2/3-70B 中，GQA 的 g=8g=8 ，其他用了 GQA 的同体量模型基本上也保持了这个设置。由于 Attention 的每个 Head 实际上是独立运算然后拼接起来的，一般情况下对于一机 8 卡的配置，当 g=8g=8 时，正好可以每张卡负责计算一组 KK 、 VV 对应的 Attention Head，这样可以在尽可能保证 KK 、 VV 多样性的同时最大程度上减少卡间通信。
MLA MLA 的核心是对 key 和 value 进行低秩联合压缩，减少 KV cache
[qt1;qt2;...;qtnh]=qt=htWQ∈Rdh⋅nh,qti∈Rdh,WQ∈Rd×dh⋅nh[kt1;kt2;...;ktnh]=kt=ctKVWUK∈Rdh⋅nh,kti∈Rdh,WUK∈Rdc×dh⋅nh[vt1;vt2;...;vtnh]=vt=ctKVWUV∈Rdh⋅nh,vti∈Rdh,WUV∈Rdc×dh⋅nhctKV=htWDKV∈Rdc,WDKV∈Rd×dc \\beginalign \\left [\\mathbfq_t^1;\\mathbfq_t^2;...;\\mathbfq_t^n_h \\right]= &amp;\\mathbfq_t = \\mathbfh_t \\mathbfW^Q\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfq_t^i\\in \\mathbbR^d_h, \\quad \\mathbfW^Q\\in R^d \\times d_h \\cdot n_h\\\\ \\\\ \\left [\\mathbfk_t^1;\\mathbfk_t^2;...;\\mathbfk_t^n_h\\right]= &amp;\\mathbfk_t = \\mathbfc_t^KV \\mathbfW^UK \\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfk_t^i \\in \\mathbbR^d_h, \\quad \\mathbfW^UK\\in \\mathbbR^d_c \\times d_h \\cdot n_h\\\\ \\\\ \\left [\\mathbfv_t^1;\\mathbfv_t^2;...;\\mathbfv_t^n_h\\right]= &amp;\\mathbfv_t = \\mathbfc_t^KV \\mathbfW^UV\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfv_t^i \\in \\mathbbR^d_h, \\quad \\mathbfW^UV\\in \\mathbbR^d_c \\times d_h \\cdot n_h\\\\ \\\\ &amp;\\mathbfc_t^KV = \\mathbfh_t \\mathbfW^DKV\\in\\mathbbR^d_c,\\quad \\mathbfW^DKV\\in\\mathbbR^d\\times d_c \\endalign ctKV\\mathbfc_t^KV ：keys 和 values 的压缩隐向量 dcd_c ：KV 压缩维度， dc≪dh⋅nhd_c \\ll d_h \\cdot n_h WDKV\\mathbfW^DKV ：down-projection 矩阵 WUK\\mathbfW^UK , WUV\\mathbfW^UV ：分别为 key 和 value 的 up-projection 矩阵 ot=[ot1,ot2,⋯ ,otnh]∈Rdh⋅nhoti=∑j=1tSoftmaxj(qtikji⊤dh)vji∈Rdhut=otWO=[ot1,ot2,⋯ ,otnh]WO∈Rd,WO∈Rdh⋅nh×d \\beginalign &amp;\\mathbfo_t =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\in \\mathbbR^d_h\\cdot n_h\\\\ \\\\ &amp;\\mathbfo_t^i=\\sum_j = 1^t\\mathrmSoftmax_j(\\frac\\mathbfq_t^i\\mathbfk_j^i ^\\top\\sqrtd_h)\\mathbfv_j^i \\in \\mathbbR^d_h \\\\ \\\\ &amp;\\mathbfu_t =\\mathbfo_t\\mathbfW^O =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\mathbfW^O \\in \\mathbbR^d, \\quad \\mathbfW^O \\in \\mathbbR^d_h \\cdot n_h\\times d \\endalign 推理阶段
qtikji⊤=(htWQ,i)(cjKVWUK,i)⊤=ht(WQ,iWUK,i⊤)⏟qt′icjKV⏟kj′i⊤uti=otiWO,i=∑j=1tSoftmaxj(qtikji⊤dh)vjiWO,i=∑j=1tSoftmaxj(qtikji⊤dh)cjKV⏟ot′i(WUV,iWO,i)⏟W′O,i \\beginalign \\mathbfq_t^i \\mathbfk_j^i^\\top = \\left(\\mathbfh_t\\mathbfW^Q, i\\right) \\left(\\mathbfc_j^KV\\mathbfW^UK, i\\right)^\\top = \\underbrace\\mathbfh_t\\left(\\mathbfW^Q, i\\mathbfW^UK, i^\\top\\right)_\\mathbfq^\\prime_t^i \\underbrace\\mathbfc_j^KV_\\mathbfk^\\prime_j^i^\\top \\\\[7pt] \\mathbfu_t^i = \\mathbfo_t^i\\mathbfW^O, i =\\sum_j = 1^t\\mathrmSoftmax_j(\\frac\\mathbfq_t^i\\mathbfk_j^i ^\\top\\sqrtd_h)\\mathbfv_j^i \\mathbfW^O, i = \\underbrace\\sum_j = 1^t\\mathrmSoftmax_j(\\frac\\mathbfq_t^i\\mathbfk_j^i ^\\top\\sqrtd_h)\\mathbfc_j^KV_\\mathbfo^\\prime_t^i \\underbrace\\left(\\mathbfW^UV, i \\mathbfW^O, i\\right)_\\mathbfW^\\prime^O, i \\endalign 将 WQ,iWUK,i⊤\\mathbfW^Q,i\\mathbfW^UK,i^\\top 合并作为 QQ 的投影矩阵，则 cjKV\\mathbfc_j^KV 取代了原本的 kj\\mathbfk_j 将 WUK,iWO,i\\mathbfW^UK,i \\mathbfW^O,i 合并作为输出投影矩阵，则 cjKV\\mathbfc_j^KV 取代了原本的 vj\\mathbfv_j 此时，MLA 的 KV Cache 只需要缓存 ctKV∈Rdc\\mathbfc^KV_t \\in\\mathbbR^d_c , 而不是存下所有的 kt,vt∈Rdh⋅nh\\mathbfk_t, \\mathbfv_t \\in \\mathbbR^d_h\\cdot n_h 。 注意到 dc≪dh⋅nhd_c \\ll d_h \\cdot n_h ，且 ctKV\\mathbfc^KV_t 跟 head ii 无关，即所有头共享，因此 MLA 在推理阶段可以恒等变换为一个 MQA。此外， dcd_c 可以取更小的值，对 KV Cache 更进一步进行压缩。
对于每一个 token 来说，MLA 需要缓存 dcld_cl 个元素。
WQ,iWUK,i⊤\\mathbfW^Q,i\\mathbfW^UK,i^\\top 合并成一个矩阵的恒等变换，理论上只有在无限精度下才成立，实际上如果我们使用单精度尤其是 BF16 的话，经过变换后的精度损失往往还是挺明显的，经过多层累积后可能放大到比较可观的程度，这里可能要根据实际误差看要不要做一些后处理。
为了 降低训练过程中 activation 内存消耗，对 query 也可以同时进行低秩压缩处理。尽管这并不能减少 KV 缓存的使用量。
[qt1;qt2;...;qtnh]=qt=ctQWUQ∈Rdh⋅nh,qti∈Rdh,WUQ∈Rdc′×dh⋅nhctQ=htWDQ∈Rdc′,WDQ∈Rd×dc′ \\beginalign \\left [\\mathbfq_t^1;\\mathbfq_t^2;...;\\mathbfq_t^n_h \\right]=&amp;\\mathbfq_t = \\mathbfc_t^Q \\mathbfW^UQ\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfq_t^i\\in \\mathbbR^d_h, \\quad \\mathbfW^UQ\\in \\mathbbR^d_c^\\prime \\times d_h \\cdot n_h\\\\ \\\\ &amp;\\mathbfc_t^Q = \\mathbfh_t \\mathbfW^DQ\\in\\mathbbR^d_c^\\prime,\\quad \\mathbfW^DQ\\in\\mathbbR^d\\times d_c^\\prime \\\\ \\endalign ctQ\\mathbfc_t^Q ：query 的压缩隐向量 dc′d_c^\\prime ：query 压缩维度， dc′≪dh⋅nhd_c^\\prime \\ll d_h \\cdot n_h WDQW^DQ ： down-projection 矩阵 WUQW^UQ ：up-projection 矩阵 解耦 RoPE
RoPE 与位置相关，在 MLA 中加入 ROPE 时
qti=htWQ,iRtkti=ctKVWUK,iRtqtikji⊤=(htWQ,iRt)(cjKVWUK,iRj)⊤=ht(WQ,iRt−jWUK,i⊤)cjKV \\beginalign \\mathbfq_t^i &amp;= \\mathbfh_t \\mathbfW^Q, i\\textcolor#6D8E14\\mathbf\\mathcalR_t\\\\ \\\\ \\mathbfk_t^i &amp;= \\mathbfc_t^KV \\mathbfW^UK, i \\textcolor#6D8E14\\mathbf\\mathcalR_t \\\\ \\\\ \\mathbfq_t^i \\mathbfk_j^i^\\top &amp;= \\left(\\mathbfh_t\\mathbfW^Q, i\\textcolor#6D8E14\\mathbf\\mathcalR_t \\right) \\left( \\mathbfc_j^KV\\mathbfW^UK, i \\textcolor#6D8E14\\mathbf\\mathcalR_j \\right)^\\top = \\mathbfh_t\\left(\\mathbfW^Q, i \\textcolor#6D8E14\\mathbf\\mathcalR_t-j\\mathbfW^UK, i^\\top\\right) \\mathbfc_j^KV\\\\ \\\\ \\endalign 此时 WQ,iRt−jWUK,i⊤\\mathbfW^Q,i \\textcolor#6D8E14\\mathbf\\mathcalR_t-j\\mathbfW^UK,i^\\top 无法合并为一个固定的投影矩阵，因为这时 WQ,iRt−jWUK,i⊤\\mathbfW^Q,i \\textcolor#6D8E14\\mathbf\\mathcalR_t-j\\mathbfW^UK,i^\\top 跟位置差 t−jt-j 相关。
每个 Attention Head 的 QQ 、 KK 新增 dhRd_h^R 个维度用来添加 RoPE，其中 KK 新增的维度每个 Head 共享：
ctQ=htWDQ∈Rdc′,WDQ∈Rd×dc′[qtC,1;qtC,2;⋯ ;qtC,nh]=qtC=ctQWUQ∈Rdh⋅nh,qtC,i∈Rdh,WUQ∈Rdc′×dh⋅nh[qtR,1;qtR,2;⋯ ;qtR,nh]=qtR=ctQWQRRt∈RdhR⋅nh,qtR,i∈RdhR,WQR∈Rdc′×dhR⋅nh[(qtC,1qtR,1);(qtC,2qtR,2);⋯(qtC,nhqtR,nh)]=qt∈R(dh+dhR)⋅nh \\beginaligned &amp;\\mathbfc_t^Q = \\mathbfh_t \\mathbfW^DQ\\in\\mathbbR^d_c^\\prime,\\quad \\mathbfW^DQ\\in\\mathbbR^d\\times d_c^\\prime\\\\ \\\\ \\left[\\mathbfq_t^C,1;\\mathbfq_t^C,2;\\cdots;\\mathbfq_t^C, n_h \\right] = &amp;\\mathbfq_t^C = \\mathbfc_t^Q \\mathbfW^UQ \\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfq_t^C, i\\in \\mathbbR^d_h, \\quad \\mathbfW^UQ\\in R^d_c^\\prime \\times d_h \\cdot n_h\\\\ \\\\ \\left[\\mathbfq_t^R,1;\\mathbfq_t^R,2;\\cdots;\\mathbfq_t^R, n_h \\right]= &amp;\\mathbfq_t^R = \\mathbfc_t^Q \\mathbfW^QR \\textcolor#6D8E14\\mathbf\\mathcalR_t \\in \\mathbbR^d_h^R\\cdot n_h, \\quad \\mathbfq_t^R, i\\in \\mathbbR^d_h^R, \\quad \\mathbfW^QR\\in R^d_c^\\prime \\times d_h^R \\cdot n_h\\\\ \\\\ \\left[ \\beginpmatrix\\mathbfq_t^C,1 &amp; \\mathbfq_t^R,1 \\endpmatrix; \\beginpmatrix\\mathbfq_t^C,2 &amp; \\mathbfq_t^R,2 \\endpmatrix; \\cdots \\beginpmatrix\\mathbfq_t^C, n_h &amp; \\mathbfq_t^R, n_h \\endpmatrix \\right] =&amp;\\mathbfq_t \\in \\mathbbR^(d_h+d_h^R)\\cdot n_h \\\\ \\endaligned ctKV=htWDKV∈Rdc,WDKV∈Rd×dc[ktC,1;ktC,2;...;ktC,nh]=ktC=ctKVWUK∈Rdh⋅nh,ktC,i∈Rdh,WUK∈Rdc×dh⋅nhktR=htWKRRt∈RdhR,WKR∈Rd×dhR[(ktC,1ktR);(ktC,2ktR);⋯(ktC,nhktR)]=kt∈R(dh+dhR)⋅nh[vt1;vt2;...;vtnh]=vt=ctKVWUV∈Rdh⋅nh,vti∈Rdh,WUV∈Rdc×dh⋅nh \\beginaligned &amp;\\mathbfc_t^KV = \\mathbfh_t \\mathbfW^DKV\\in\\mathbbR^d_c,\\quad \\mathbfW^DKV\\in\\mathbbR^d\\times d_c \\\\ \\\\ \\left [\\mathbfk_t^C,1;\\mathbfk_t^C,2;...;\\mathbfk_t^C, n_h\\right]= &amp;\\mathbfk_t^C = \\mathbfc_t^KV \\mathbfW^UK \\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfk_t^C, i \\in \\mathbbR^d_h, \\quad \\mathbfW^UK\\in \\mathbbR^d_c \\times d_h \\cdot n_h\\\\ \\\\ &amp;\\mathbfk_t^R = \\mathbfh_t \\mathbfW^KR \\textcolor#6D8E14\\mathbf\\mathcalR_t \\in \\mathbbR^d_h^R, \\quad \\mathbfW^KR\\in \\mathbbR^d \\times d_h^R\\\\ \\\\ \\left[ \\beginpmatrix\\mathbfk_t^C,1 &amp; \\mathbfk_t^R \\endpmatrix; \\beginpmatrix\\mathbfk_t^C,2 &amp; \\mathbfk_t^R \\endpmatrix; \\cdots \\beginpmatrix\\mathbfk_t^C, n_h &amp; \\mathbfk_t^R \\endpmatrix \\right] =&amp;\\mathbfk_t \\in \\mathbbR^(d_h+d_h^R)\\cdot n_h\\\\ \\\\ \\left [\\mathbfv_t^1;\\mathbfv_t^2;...;\\mathbfv_t^n_h\\right]= &amp;\\mathbfv_t = \\mathbfc_t^KV \\mathbfW^UV\\in \\mathbbR^d_h\\cdot n_h, \\quad \\mathbfv_t^i \\in \\mathbbR^d_h, \\quad \\mathbfW^UV\\in \\mathbbR^d_c \\times d_h \\cdot n_h\\\\[7pt] \\endaligned ot=[ot1,ot2,⋯ ,otnh]∈Rdh⋅nhoti=∑j=1tSoftmaxj(qtikji⊤(dh+dhR))vji∈Rdhut=otWO=[ot1,ot2,⋯ ,otnh]WO∈Rd,WO∈Rdh⋅nh×d \\beginalign &amp;\\mathbfo_t =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\in \\mathbbR^d_h\\cdot n_h\\\\ \\\\ &amp;\\mathbfo_t^i=\\sum_j = 1^t\\mathrmSoftmax_j(\\frac\\mathbfq_t^i\\mathbfk_j^i ^\\top\\sqrt(d_h+d_h^R))\\mathbfv_j^i \\in \\mathbbR^d_h \\\\ \\\\ &amp;\\mathbfu_t =\\mathbfo_t\\mathbfW^O =\\left [\\mathbfo_t^1, \\mathbfo_t^2, \\cdots, \\mathbfo_t^n_h\\right] \\mathbfW^O \\in \\mathbbR^d, \\quad \\mathbfW^O \\in \\mathbbR^d_h \\cdot n_h\\times d \\endalign 没有 RoPE 的维度（ qtC\\mathbfq_t^C 和 ktC\\mathbfk_t^C ） 就可以重复之前的操作，在推理时 KV Cache 只需要存 ctKV∈Rdc\\mathbfc^KV_t \\in\\mathbbR^d_c ， 新增的带 RoPE 的维度就可以用来补充位置信息，并且由于所有 Head 共享，所以只在 K Cache 这里增加了 dhRd_h^R 对于每一个 token 来说，加入 RoPE 的 MLA 需要缓存 (dc+dhR)l(d_c+d_h^R)l 个元素
对于 DeepSeek-V2， dcd_c 设置为 4dh4d_h ， dhRd^R_h 设置为 dh2\\fracd_h2 。
Forward
DeepSeek-V2 参数
Config Value hidden_size dd hidden_size 5120 头数 nhn_h num_attention_heads 128 Key Value 压缩维度 dcd_c kv_lora_rank 512 Query 压缩维度 dc′d_c^\\prime q_lora_rank 1536 head_size dhd_h qk_nope_head_dim 128 RoPE 新增 head_size dhRd_h^R qk_rope_head_dim 64 value head_size dhd_h v_head_dim 128 ctQ=htWDQ∈Rdc′,WDQ∈Rd×dc′ctKV=htWDKV∈Rdc,WDKV∈Rd×dc \\beginalign \\mathbfc_t^Q &amp;= \\mathbfh_t \\mathbfW^DQ\\in\\mathbbR^d_c^\\prime,\\quad \\mathbfW^DQ\\in\\mathbbR^d\\times d_c^\\prime\\\\ \\\\ \\mathbfc_t^KV &amp;= \\mathbfh_t \\mathbfW^DKV\\in\\mathbbR^d_c,\\quad \\mathbfW^DKV\\in\\mathbbR^d\\times d_c \\endalign 训练阶段
qti=[ctQWUQ,ictQWQR,iRt]∈Rdh+dhR,WUQ,i∈Rdc′×dh,WQR,i∈Rdc′×dhR,kti=[ctKVWUK,ihtWKRRt]∈Rdh+dhR,WUK,i∈Rdc×dh,WKR∈Rd×dhRuti=otiWO,i=∑j=1tSoftmaxj(qtikji⊤(dh+dhR))(cjKVWUV,i)WO,i \\beginalign \\mathbfq_t^i &amp;= \\beginbmatrix \\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ, i &amp; \\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR, i\\color#6D8E14\\mathbf\\mathcalR_t \\endbmatrix \\in\\mathbbR^\\textcolor#86422Fd_h + d_h^R,\\quad \\mathbfW^UQ, i\\in\\mathbbR^d_c&#x27;\\times d_h, \\quad \\mathbfW^QR, i\\in\\mathbbR^d_c&#x27;\\times d_h^R,\\\\ \\\\ \\mathbfk_t^i &amp;= \\beginbmatrix \\mathbfc_t^KV\\textcolor#A54F08\\mathbfW^UK, i &amp; \\mathbfh_t\\textcolor#A54F08\\mathbfW^KR\\color#6D8E14\\mathbf\\mathcalR_t \\endbmatrix \\in\\mathbbR^\\textcolor#86422Fd_h + d_h^R, \\quad \\mathbfW^UK, i\\in\\mathbbR^d_c\\times d_h, \\quad \\mathbfW^KR \\in\\mathbbR^d\\times d_h^R \\\\ \\\\ \\mathbfu_t^i &amp;= \\mathbfo_t^i\\mathbfW^O, i = \\sum_j = 1^t\\mathrmSoftmax_j(\\frac\\mathbfq_t^i\\mathbfk_j^i ^\\top\\sqrt(d_h+d_h^R))\\left(\\mathbfc_j^KV \\textcolor#A54F08\\mathbfW^UV, i \\right)\\textcolor#A54F08\\mathbfW^O, i\\\\[7pt] \\endalign 推理阶段
qti=[ctQWUQ,iWUK,i⊤ctQWQR,iRi]∈Rdc+dhR,WUQ,i∈Rdc′×dh,WUK,i∈Rdc×dh,WQR,i∈Rdc′×dhR,kti=[ctKVhtWKRRt]∈Rdc+dhR,WKR∈Rd×dhRuti=otiWO,i=∑j=1tSoftmaxj(qtikji⊤(dh+dhR))cjKV(WUV,iWO,i) \\beginalign \\mathbfq_t^i &amp;= \\beginbmatrix \\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ, i\\mathbfW^UK, i^\\top &amp; \\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR, i\\color#6D8E14\\mathbf\\mathcalR_i \\endbmatrix \\in\\mathbbR^\\textcolor#86422Fd_c + d_h^R, \\quad \\mathbfW^UQ, i\\in\\mathbbR^d_c&#x27;\\times d_h, \\quad \\mathbfW^UK, i\\in\\mathbbR^d_c\\times d_h, \\quad \\mathbfW^QR, i\\in\\mathbbR^d_c&#x27;\\times d_h^R, \\\\ \\\\ \\mathbfk_t^i &amp;= \\beginbmatrix \\mathbfc_t^KV &amp; \\mathbfh_t\\textcolor#A54F08\\mathbfW^KR\\color#6D8E14\\mathbf\\mathcalR_t \\endbmatrix \\in\\mathbbR^\\textcolor#86422Fd_c + d_h^R, \\quad \\mathbfW^KR \\in\\mathbbR^d\\times d_h^R \\\\ \\\\ \\mathbfu_t^i &amp;= \\mathbfo_t^i\\mathbfW^O, i = \\sum_j = 1^t\\mathrmSoftmax_j(\\frac\\mathbfq_t^i\\mathbfk_j^i ^\\top\\sqrt(d_h+d_h^R))\\mathbfc_j^KV \\left(\\textcolor#A54F08\\mathbfW^UV, i \\mathbfW^O, i\\right)\\\\ \\\\ \\endalign 计算 qtikji⊤\\mathbfq_t^i\\mathbfk_j^i ^\\top 时，训练阶段 与 推理阶段 的 head_size 分别为 dh+dhRd_h+d_h^R 和 dc+dhRd_c+d_h^R , 虽然在 DeepSeek-V2 中 dh&lt;dcd_h&lt;d_c , 即推理时的计算量 &gt; 训练时的计算量，但 KV Cache 的减少降低了显存和带宽的压力，推理速度还是能得到提升。 通常的 LLM 架构有 d=dh⋅nhd = d_h\\cdot n_h ，但是 DeepSeek-V2 的 nhn_h 更大。这是因为 MLA 的 KV Cache大小 跟 hh 无关，增大 hh 只会增加计算量和提升模型能力，但不会增加 KV Cache，所以不会带来速度瓶颈。 Code
MLA 开源代码
初始化 q_a_proj: WDQW^DQ q_b_proj: [WUQ,WQR][W^UQ, W^QR] kv_a_proj_with_mqa: [WDKV,WKR][W^DKV, W^KR] kv_b_proj: [WUK,WUV][W^UK,W^UV] o_proj： WOW^O 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 # q_head_dim: d_h+d_h^R if self.q_lora_rank is None: self.q_proj = nn.Linear( self.hidden_size, self.num_heads * self.q_head_dim, bias=False ) else: # W^DQ:[d, d_c&#39;] # [5120, 1536] self.q_a_proj = nn.Linear( self.hidden_size, config.q_lora_rank, bias=config.attention_bias ) self.q_a_layernorm = DeepseekV2RMSNorm(config.q_lora_rank) # [W^UQ, W^QR]:[d_c&#39;, n_h*(d_h+d_h^R)] # [1536， 128*(128+64)] self.q_b_proj = nn.Linear( config.q_lora_rank, self.num_heads * self.q_head_dim, bias=False ) # [W^DKV, W^KR]:[d, d_c+d_h^R] # [5120， (512+64)] self.kv_a_proj_with_mqa = nn.Linear( self.hidden_size, config.kv_lora_rank + config.qk_rope_head_dim, bias=config.attention_bias, ) self.kv_a_layernorm = DeepseekV2RMSNorm(config.kv_lora_rank) # [W^UK,W^UV]:[d_c, n_h*(d_h+d_h)] # [512, 128*(128+128)] self.kv_b_proj = nn.Linear( config.kv_lora_rank, self.num_heads * (self.q_head_dim - self.qk_rope_head_dim + self.v_head_dim), bias=False, ) # W^O:[n_h*d_h, d] # [128*128, 5120] self.o_proj = nn.Linear( self.num_heads * self.v_head_dim, self.hidden_size, bias=config.attention_bias, ) self._init_rope() # softmax_scale: \\sqrt128+64 self.softmax_scale = self.q_head_dim ** (-0.5) 计算 q_nope 和 q_pe 1 2 3 4 5 6 7 8 9 10 # [B,L，5120] -&gt; [B, L, 1536] -&gt; [B, L，24576] = [B, L，128*(128+64)] q = self.q_b_proj(self.q_a_layernorm(self.q_a_proj(hidden_states))) # [B, L，128*(128+64)] -&gt; [B, 128, L, (128+64)] q = q.view(bsz, q_len, self.num_heads, self.q_head_dim).transpose(1, 2) # [B, 128, L, 128+64] -&gt; [B, 128, L, 128], [B, 128, L, 64] q_nope, q_pe = torch.split( q, [self.qk_nope_head_dim, self.qk_rope_head_dim], dim=-1 ) 计算 k_nope, k_pe 和 value_states 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 # [B,L，5120] -&gt; [B, L, (512+64)] compressed_kv = self.kv_a_proj_with_mqa(hidden_states) # [B, L, (512+64)] -&gt; [B, L, 512], [B, L, 64] compressed_kv, k_pe = torch.split( compressed_kv, [self.kv_lora_rank, self.qk_rope_head_dim], dim=-1 ) # [B, 1, L, 64] k_pe = k_pe.view(bsz, q_len, 1, self.qk_rope_head_dim).transpose(1, 2) # [B, L, 512] -&gt; [B, L, 128*(128+128)] -&gt; [B, 128, L, 128+128] kv = ( self.kv_b_proj(self.kv_a_layernorm(compressed_kv)) .view(bsz, q_len, self.num_heads, self.qk_nope_head_dim + self.v_head_dim) .transpose(1, 2) ) # [B, 128, L, 128+128] -&gt; [B, 128, L, 128], [B, 128, L, 128] k_nope, value_states = torch.split( kv, [self.qk_nope_head_dim, self.v_head_dim], dim=-1 ) 计算 query_states 和 key_states 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 # RoPE q_pe, k_pe = apply_rotary_pos_emb(q_pe, k_pe, cos, sin, position_ids) # [B, 128, L, 128]+ [B, 128, L, 64] -&gt; [B, 128, L, (128+64)] query_states = k_pe.new_empty(bsz, self.num_heads, q_len, self.q_head_dim) query_states[:, :, :, : self.qk_nope_head_dim] = q_nope query_states[:, :, :, self.qk_nope_head_dim:] = q_pe # [B, 1, L, 64] -&gt; [B, 128, L, 64] # [B, 128, L, 128]+ [B, 128, L, 64] -&gt; [B, 128, L, (128+64)] key_states = k_pe.new_empty(bsz, self.num_heads, q_len, self.q_head_dim) key_states[:, :, :, : self.qk_nope_head_dim] = k_nope key_states[:, :, :, self.qk_nope_head_dim:] = k_pe # [B, 128, L, (128+64)] * [B, 128, (128+64), L] -&gt; [B, 128, L, L] attn_weights = ( torch.matmul(query_states, key_states.transpose(2, 3)) * self.softmax_scale ) 计算 attention 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 attn_weights = attn_weights + attention_mask # upcast attention to fp32 attn_weights = nn.functional.softmax( attn_weights, dim=-1, dtype=torch.float32 ).to(query_states.dtype) attn_weights = nn.functional.dropout( attn_weights, p=self.attention_dropout, training=self.training ) # [B, 128, L, L] -&gt; [B, 128, L, 128] attn_output = torch.matmul(attn_weights, value_states) # [B, 128, L, 128] -&gt; [B, L, 128, 128] attn_output = attn_output.transpose(1, 2).contiguous() # [B, L, 128, 128] -&gt; [B, L, 128*128] attn_output = attn_output.reshape(bsz, q_len, self.num_heads * self.v_head_dim) # [B, L, 128*128] -&gt; [B, L, 5120] attn_output = self.o_proj(attn_output) MLA 模块优化 MLA 模块优化
实现版本 KV Cache 每 token 每层 Cache 大小 每 token 每层计算量 描述 Cache Decompressed (CD) [ctKVWUK,ihtWKRRt]\\beginbmatrix\\mathbfc_t^KV\\textcolor#A54F08\\mathbfW^UK, i &amp; \\mathbfh_t\\textcolor#A54F08\\mathbfW^KR\\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix + cjKVWUV,i\\mathbfc_j^KV \\textcolor#A54F08\\mathbfW^UV, i 81.92 kB 0.08 MFLOP qkv 无融合
矩阵相乘 Cache Compressed (CC) [ctKVhtWKRRt]\\beginbmatrix \\mathbfc_t^KV &amp;\\mathbfh_t \\textcolor#A54F08\\mathbfW^KR \\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix 1.152 kB 33.64 MFLOP qkv 融合 矩阵相乘 Absorbed Cache Compressed (A_CC) [ctKVhtWKRRt]\\beginbmatrix \\mathbfc_t^KV &amp;\\mathbfh_t \\textcolor#A54F08\\mathbfW^KR \\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix 1.152 kB 0.28 MFLOP qkv 无融合 矩阵相乘 Absorbed Cache Compressed Move Elision (A_CC_ME) [ctKVhtWKRRt]\\beginbmatrix \\mathbfc_t^KV &amp;\\mathbfh_t \\textcolor#A54F08\\mathbfW^KR \\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix 1.152 kB 0.28 MFLOP qkv 融合
MoveElision Cache Decompressed (CD)
KV Cache: [ctKVWUK,ihtWKRRt]\\beginbmatrix\\mathbfc_t^KV\\textcolor#A54F08\\mathbfW^UK, i &amp; \\mathbfh_t\\textcolor#A54F08\\mathbfW^KR\\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix 和 cjKVWUV,i\\mathbfc_j^KV \\textcolor#A54F08\\mathbfW^UV, i BL⋅128⋅(128+64+128)=40960⋅BLBL\\cdot 128 \\cdot (128+64+128) = 40960 \\cdot BL 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 # [B,L，5120] -&gt; [B, L, (512+64)] compressed_kv = self.kv_a_proj_with_mqa(hidden_states_kv) # [B, L, (512+64)] -&gt; [B, L, 512], [B, L, 64] compressed_kv, k_pe = torch.split( compressed_kv, [self.kv_lora_rank, self.qk_rope_head_dim], dim=-1 ) k_pe = k_pe.view(bsz, kv_seq_len, 1, self.qk_rope_head_dim).transpose(1, 2) # [B, L, 512] -&gt; [B, L, 128*(128+128)] -&gt; [B, 128, L, 128+128] kv = self.kv_b_proj(self.kv_a_layernorm(compressed_kv)).view( bsz, kv_seq_len, self.num_heads, self.qk_nope_head_dim + self.v_head_dim ).transpose(1, 2) # [B, 128, L, 128], [B, 128, L, 128] k_nope, value_states = torch.split(kv, [self.qk_nope_head_dim, self.v_head_dim], dim=-1) cos, sin = self.rotary_emb(value_states) k_pe = apply_rotary_pos_emb(k_pe, cos, sin, kv_position_ids) # [B, 128, L, 128+64] key_states = k_pe.new_empty(bsz, self.num_heads, kv_seq_len, self.q_head_dim) key_states[:, :, :, : self.qk_nope_head_dim] = k_nope key_states[:, :, :, self.qk_nope_head_dim:] = k_pe forward
计算 q_nope: ctQWUQ,i\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ, i 和 q_pe: ctQWQR,iRt\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR, i\\color#6D8E14\\mathbf\\mathcalR_t q = self.q_b_proj(self.q_a_layernorm(self.q_a_proj(hidden_states_q))) q = q.view(bsz, q_len, self.num_heads, self.q_head_dim).transpose(1, 2) q_nope, q_pe = torch.split( q, [self.qk_nope_head_dim, self.qk_rope_head_dim], dim=-1 )
cos, sin = self.rotary_emb(q_pe) q_pe = apply_rotary_pos_emb(q_pe, cos, sin, position_ids)
query_states: [ctQWUQ,ictQWQR,iRt]\\beginbmatrix\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ, i &amp; \\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR, i\\color#6D8E14\\mathbf\\mathcalR_t \\endbmatrix : [B, 128, L, 128+64]
1 2 3 4 # [B, 128, L, 128+64] query_states = q_pe.new_empty(bsz, self.num_heads, q_len, self.q_head_dim) query_states[:, :, :, : self.qk_nope_head_dim] = q_nope query_states[:, :, :, self.qk_nope_head_dim:] = q_pe 计算 attention
1 2 3 4 5 6 7 8 9 10 11 12 13 14 # 直接矩阵相乘 [B, 128, L, 128+64]*[B, 128, L, 128+64] attn_weights = torch.matmul(query_states, key_states.transpose(2, 3)) * self.softmax_scale kv_seq_len = key_states.size(2) # upcast attention to fp32 attn_weights = nn.functional.softmax( attn_weights, dim=-1, dtype=torch.float32 ).to(query_states.dtype) attn_output = torch.matmul(attn_weights, value_states) attn_output = attn_output.transpose(1, 2).contiguous() attn_output = attn_output.reshape(bsz, q_len, self.num_heads * self.v_head_dim) attn_output = self.o_proj(attn_output) Cache Compressed (CC)
将 RoPE 后的 k_pe 一并缓存入 KV Cache
KV Cache: [ctKVhtWKRRt]\\beginbmatrix \\mathbfc_t^KV &amp;\\mathbfh_t \\textcolor#A54F08\\mathbfW^KR \\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix BL⋅(512+64)=576⋅BLBL \\cdot (512+64) = 576 \\cdot BL 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 # [B,L，5120] -&gt; [B, L, (512+64)] compressed_kv = self.kv_a_proj_with_mqa(hidden_states_kv) # [B, L, (512+64)] -&gt; [B, L, 512], [B, L, 64] compressed_kv, k_pe = torch.split( compressed_kv, [self.kv_lora_rank, self.qk_rope_head_dim], dim=-1 ) # [B, L, 512] compressed_kv = self.kv_a_layernorm(compressed_kv) # [B, 1, L, 64] k_pe = k_pe.view(bsz, kv_seq_len, 1, self.qk_rope_head_dim).transpose(1, 2) cos, sin = self.rotary_emb(k_pe) k_pe = apply_rotary_pos_emb(k_pe, cos, sin, kv_position_ids).view( bsz, kv_seq_len,self.qk_rope_head_dim ) # [B, L, 512+64] compressed_kv = torch.cat([compressed_kv, k_pe], dim=-1) forward
计算 q_nope: ctQWUQ,i\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ, i 和 q_pe: ctQWQR,iRt\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR, i\\color#6D8E14\\mathbf\\mathcalR_t : 同 Cache Decompressed (CD)
1 2 3 4 5 6 7 8 q = self.q_b_proj(self.q_a_layernorm(self.q_a_proj(hidden_states_q))) q = q.view(bsz, q_len, self.num_heads, self.q_head_dim).transpose(1, 2) q_nope, q_pe = torch.split( q, [self.qk_nope_head_dim, self.qk_rope_head_dim], dim=-1 ) cos, sin = self.rotary_emb(q_pe) q_pe = apply_rotary_pos_emb(q_pe, cos, sin, position_ids) 展开 compressed_kv 得到
compressed_kv: ctKV\\mathbfc_t^KV k_pe: htWKRRt\\mathbfh_t\\textcolor#A54F08\\mathbfW^KR\\color#6D8E14\\mathbf\\mathcalR_t 1 2 3 4 5 # 展开 compressed，得到 compressed_kv, k_pe compressed_kv, k_pe = torch.split( compressed_kv, [self.kv_lora_rank, self.qk_rope_head_dim], dim=-1 ) k_pe = k_pe.view(bsz, kv_seq_len, 1, self.qk_rope_head_dim).transpose(1, 2) 将 kv_b_proj 拆分为 WUKW^UK 和 WUVW^UV 1 2 3 4 5 6 7 # kv_b_proj.weight:[W^UK,W^UV]:[ n_h, (d_h+d_h), d_c] # [128, (128+128), 512] kv_b_proj = self.kv_b_proj.weight.view(self.num_heads, -1, self.kv_lora_rank) # W^UK 与 c_t^Q W^UQ 融合 q_absorb = kv_b_proj[:, :self.qk_nope_head_dim, :] # W^UV 与 W^O 融合 out_absorb = kv_b_proj[:, self.qk_nope_head_dim:, :] query_states: [ctQWUQ,iWUK,i⊤ctQWQR,iRi]\\beginbmatrix\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ, i\\mathbfW^UK, i^\\top &amp; \\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR, i\\color#6D8E14\\mathbf\\mathcalR_i \\endbmatrix : [B, 128, L, 512+64]
q_nope 融合进 q_absorb : WUKW^UK 1 2 3 4 # [B, 128, 512+64] query_states = k_pe.new_empty(bsz, self.num_heads, q_len, qk_head_dim) query_states[:, :, :, : self.kv_lora_rank] = torch.einsum(&#39;hdc,bhid-&gt;bhic&#39;, q_absorb, q_nope) query_states[:, :, :, self.kv_lora_rank:] = q_pe key_states: [ctKVhtWKRRt]\\beginbmatrix \\mathbfc_t^KV &amp;\\mathbfh_t \\textcolor#A54F08\\mathbfW^KR \\color#6D8E14\\mathbf\\mathcalR_t \\endbmatrix : [B, 128, L, 512+64]
1 2 3 4 5 # [B, 128, 512+64] qk_head_dim = self.kv_lora_rank + self.qk_rope_head_dim key_states = k_pe.new_empty(bsz, self.num_heads, kv_seq_len, qk_head_dim) key_states[:, :, :, : self.kv_lora_rank] = compressed_kv.unsqueeze(1) key_states[:, :, :, self.kv_lora_rank:] = k_pe 计算 attention
1 2 3 4 5 6 7 8 9 10 11 # 直接矩阵相乘 [B, 128, L, 512+64]*[B, 128, L, 512+64] attn_weights = torch.matmul(query_states, key_states.transpose(2, 3)) * self.softmax_scale # upcast attention to fp32 attn_weights = nn.functional.softmax( attn_weights, dim=-1, dtype=torch.float32 ).to(q_nope.dtype) # 与融合版v相乘 attn_output = torch.einsum(&#39;bhql,blc-&gt;bhqc&#39;, attn_weights, compressed_kv) attn_output = torch.einsum(&#39;bhqc,hdc-&gt;bhqd&#39;, attn_output, out_absorb) Absorbed Cache Compressed (A_CC)
将 RoPE 后的 k_pe 一并缓存入 KV Cache
KV Cache: [ctKVhtWKRRt]\\beginbmatrix \\mathbfc_t^KV &amp;\\mathbfh_t \\textcolor#A54F08\\mathbfW^KR \\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix : 同 Cache Compressed (CC)
BL⋅(512+64)=576⋅BLBL \\cdot (512+64) = 576 \\cdot BL forward
计算 q_nope: ctQWUQ\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ 和 q_pe: ctQWQRRt\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR\\color#6D8E14\\mathbf\\mathcalR_t : 同 Cache Decompressed (CD)
1 2 3 4 5 6 7 8 q = self.q_b_proj(self.q_a_layernorm(self.q_a_proj(hidden_states_q))) q = q.view(bsz, q_len, self.num_heads, self.q_head_dim).transpose(1, 2) q_nope, q_pe = torch.split( q, [self.qk_nope_head_dim, self.qk_rope_head_dim], dim=-1 ) cos, sin = self.rotary_emb(q_pe) q_pe = apply_rotary_pos_emb(q_pe, cos, sin, position_ids) query_states: [ctQWUQctQWQRRt]\\beginbmatrix\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ &amp; \\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR\\color#6D8E14\\mathbf\\mathcalR_t \\endbmatrix [B, 128, L, 128+64]: 同 Cache Decompressed (CD)
1 2 3 4 # [B, 128, L, 128+64] query_states = q_pe.new_empty(bsz, self.num_heads, q_len, self.q_head_dim) query_states[:, :, :, : self.qk_nope_head_dim] = q_nope query_states[:, :, :, self.qk_nope_head_dim:] = q_pe key_states: [ctKVWUKhtWKRRt]\\beginbmatrix\\mathbfc_t^KV\\textcolor#A54F08\\mathbfW^UK &amp; \\mathbfh_t\\textcolor#A54F08\\mathbfW^KR\\color#6D8E14\\mathbf\\mathcalR_t \\endbmatrix [B, 128, L, 128+64]
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 kv_seq_len = compressed_kv.size(1) # [B, L, (512+64)] -&gt; [B, L, 512], [B, L, 64] compressed_kv, k_pe = torch.split( compressed_kv, [self.kv_lora_rank, self.qk_rope_head_dim], dim=-1 ) k_pe = k_pe.view(bsz, kv_seq_len, 1, self.qk_rope_head_dim).transpose(1, 2) # [B, L, 512] -&gt; [B, L, 128*(128+128)] -&gt; [B, 128, L, 128+128] kv = self.kv_b_proj(compressed_kv).view( bsz, kv_seq_len, self.num_heads, self.qk_nope_head_dim + self.v_head_dim ).transpose(1, 2) # [B, 128, L, 128], [B, 128, L, 128] k_nope, value_states = torch.split(kv, [self.qk_nope_head_dim, self.v_head_dim], dim=-1) key_states = k_pe.new_empty(bsz, self.num_heads, kv_seq_len, self.q_head_dim) key_states[:, :, :, : self.qk_nope_head_dim] = k_nope key_states[:, :, :, self.qk_nope_head_dim:] = k_pe 计算 attention
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 # 直接矩阵相乘 [B, 128, L, 128+64]*[B, 128, L, 128+64] attn_weights = torch.matmul(query_states, key_states.transpose(2, 3)) * self.softmax_scale # avoid copying key-states # attn_weights = torch.matmul(q_nope, k_nope.transpose(2, 3)) + torch.matmul(q_pe, k_pe.transpose(2, 3)) # attn_weights *= self.softmax_scale # upcast attention to fp32 attn_weights = nn.functional.softmax( attn_weights, dim=-1, dtype=torch.float32 ).to(q_pe.dtype) attn_output = torch.matmul(attn_weights, value_states) attn_output = attn_output.transpose(1, 2).contiguous() attn_output = attn_output.reshape(bsz, q_len, self.num_heads * self.v_head_dim) attn_output = self.o_proj(attn_output) Absorbed Cache Compressed Move Elision (A_CC_ME)
将 RoPE 后的 k_pe 一并缓存入 KV Cache
KV Cache: [ctKVhtWKRRt]\\beginbmatrix \\mathbfc_t^KV &amp;\\mathbfh_t \\textcolor#A54F08\\mathbfW^KR \\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix : 同 Cache Compressed (CC)
BL⋅(512+64)=576⋅BLBL \\cdot (512+64) = 576 \\cdot BL forward
计算 q_nope: ctQWUQ\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ 和 q_pe: ctQWQRRt\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR\\color#6D8E14\\mathbf\\mathcalR_t : 同 Cache Decompressed (CD)
1 2 3 4 5 6 7 8 q = self.q_b_proj(self.q_a_layernorm(self.q_a_proj(hidden_states_q))) q = q.view(bsz, q_len, self.num_heads, self.q_head_dim).transpose(1, 2) q_nope, q_pe = torch.split( q, [self.qk_nope_head_dim, self.qk_rope_head_dim], dim=-1 ) cos, sin = self.rotary_emb(q_pe) q_pe = apply_rotary_pos_emb(q_pe, cos, sin, position_ids) 展开 compressed_kv 得到
compressed_kv: ctKV\\mathbfc_t^KV k_pe: htWKRRt\\mathbfh_t\\textcolor#A54F08\\mathbfW^KR\\color#6D8E14\\mathbf\\mathcalR_t 1 2 3 4 5 # 展开 compressed，得到 compressed_kv, k_pe compressed_kv, k_pe = torch.split( compressed_kv, [self.kv_lora_rank, self.qk_rope_head_dim], dim=-1 ) k_pe = k_pe.view(bsz, kv_seq_len, 1, self.qk_rope_head_dim).transpose(1, 2) 将 kv_b_proj 拆分为 WUKW^UK 和 WUVW^UV 1 2 3 4 5 6 7 # kv_b_proj.weight:[W^UK,W^UV]:[ n_h, (d_h+d_h), d_c] # [128, (128+128), 512] kv_b_proj = self.kv_b_proj.weight.view(self.num_heads, -1, self.kv_lora_rank) # W^UK 与 c_t^Q W^UQ 融合 q_absorb = kv_b_proj[:, :self.qk_nope_head_dim, :] # W^UV 与 W^O 融合 out_absorb = kv_b_proj[:, self.qk_nope_head_dim:, :] q_nope 融合进 q_absorb : WUKW^UK 1 q_nope = torch.matmul(q_nope, q_absorb) 计算 attention
MoveElision 优化策略: 省略此处的拼接 RoPE 部分和非 RoPE 部分的过程，而是直接分别计算量部分的额 Attention Score 并相加（考虑 qtkj⊤=qtCkjC⊤+qtRkjR⊤\\mathbfq_t\\mathbfk_j^\\top = \\mathbfq_t^C \\mathcalk_j^C^\\top+ \\mathbfq_t^R k_j^R^\\top )
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 # MoveElision [B, 128, L, 512]*[B, 128, L, 512] + [B, 128, L, 64]*[B, 128, L, 64] attn_weights = ( torch.matmul(q_pe, k_pe.mT) + torch.matmul(q_nope, compressed_kv.unsqueeze(-3).mT) ) * self.softmax_scale # upcast attention to fp32 attn_weights = nn.functional.softmax( attn_weights, dim=-1, dtype=torch.float32 ).to(q_nope.dtype) attn_output = torch.einsum(&#39;bhql,blc-&gt;bhqc&#39;, attn_weights, compressed_kv) # torch.einsum(&#39;bhqc,hdc-&gt;bhqd&#39;, attn_output, out_absorb) attn_output = torch.matmul(attn_output, out_absorb.mT) attn_output = attn_output.transpose(1, 2).contiguous() attn_output = attn_output.reshape(bsz, q_len, self.num_heads * self.v_head_dim) attn_output = self.o_proj(attn_output) Absorbed materialized Cache Compressed Move elision (AM_CC_ME)
将 RoPE 后的 k_pe 一并缓存入 KV Cache
KV Cache: [ctKVhtWKRRt]\\beginbmatrix \\mathbfc_t^KV &amp;\\mathbfh_t \\textcolor#A54F08\\mathbfW^KR \\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix : 同 Cache Compressed (CC)
BL⋅(512+64)=576⋅BLBL \\cdot (512+64) = 576 \\cdot BL forward
计算 WQRW^QR 和融合矩阵 WUQWUK⊤\\textcolor#A54F08\\mathbfW^UQ\\mathbfW^UK^\\top 和 WUVWO\\textcolor#A54F08\\mathbfW^UV \\mathbfW^O 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 def get_absorbed_proj(self) -&gt; Tuple[torch.Tensor, torch.Tensor, torch.Tensor]: # 只计算一次 if not hasattr(self, &#39;_absorbed&#39;): # 只适用于无 bias 的情况 assert self.q_b_proj.bias is None and self.kv_b_proj.bias is None and self.o_proj.bias is None # [128, (128+64), 1536] q_b_proj = self.q_b_proj.weight.view(self.num_heads, -1, self.q_lora_rank) # W^UQ, W^QR # [n_h, nope_hd, q_lora_rank], [n_h, rope_hd, q_lora_rank] # [128, 128, 1536], [128, 64, 1536] q_b_proj_nope, q_b_proj_rope = torch.split( q_b_proj, [self.qk_nope_head_dim, self.qk_rope_head_dim], dim=1 ) # [128, (128+128), 1536] kv_b_proj = self.kv_b_proj.weight.view(self.num_heads, -1, self.kv_lora_rank) # W^UK, W^UV # [n_h, nope_hd, kv_lora_rank], [n_h, v_hd, kv_lora_rank] # [128, 128, 512], [128, 64, 512] q_absorb, out_absorb = torch.split( kv_b_proj, [self.qk_nope_head_dim, self.v_head_dim], dim=1 ) # [5120, 128, 128] o_proj = self.o_proj.weight.view(self.hidden_size, self.num_heads, self.v_head_dim) # q_abosrbed: W^UQ*W^UK^T # [n_h, kv_lora_rank, q_lora_rank] # [128, 512, 1536] q_absorbed = torch.einsum(&#39;hdq,hdk-&gt;hkq&#39;, q_b_proj_nope, q_absorb) # out_absorbed: W^UV*W^O # [hidden_size, n_h, kv_lora_rank] # [5120, 128, 512] out_absorbed = torch.einsum(&#39;hvk,dhv-&gt;dhk&#39;, out_absorb, o_proj) self._absorbed = q_b_proj_rope, q_absorbed, out_absorbed return self._absorbed q: [q_nope, q_pe]: [ctQWUQ,iWUK,i⊤ctQWQR,iRi]\\beginbmatrix\\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^UQ, i\\mathbfW^UK, i^\\top &amp; \\mathbfc_t^Q\\textcolor#A54F08\\mathbfW^QR, i\\color#6D8E14\\mathbf\\mathcalR_i\\endbmatrix [B, 128, L, 512+64]
1 2 3 4 5 6 7 q_b_proj_rope, q_absorbed, out_absorbed = self.get_absorbed_proj() q = self.q_a_layernorm(self.q_a_proj(hidden_states_q)) q_nope = torch.einsum(&#39;bqc,hdc-&gt;bhqd&#39;, q, q_absorbed) q_pe = torch.einsum(&#39;bqc,hdc-&gt;bhqd&#39;, q, q_b_proj_rope) cos, sin = self.rotary_emb(q_pe) q_pe = apply_rotary_pos_emb(q_pe, cos, sin, q_position_ids) k: [compressed_kv, k_pe]: [ctKVhtWKRRt]\\beginbmatrix\\mathbfc_t^KV&amp;\\mathbfh_t\\textcolor#A54F08\\mathbfW^KR\\color#6D8E14\\mathbf\\mathcalR_t\\endbmatrix [B, 128, L, 512+64]
1 2 3 4 5 kv_seq_len = compressed_kv.size(1) compressed_kv, k_pe = torch.split( compressed_kv, [self.kv_lora_rank, self.qk_rope_head_dim], dim=-1 ) k_pe = k_pe.view(bsz, 1, kv_seq_len, self.qk_rope_head_dim) 计算 attention
MoveElision 优化策略: 省略此处的拼接 RoPE 部分和非 RoPE 部分的过程，而是直接分别计算量部分的额 Attention Score 并相加（考虑 qtkj⊤=qtCkjC⊤+qtRkjR⊤\\mathbfq_t\\mathbfk_j^\\top = \\mathbfq_t^C \\mathcalk_j^C^\\top+ \\mathbfq_t^R k_j^R^\\top )
1 2 3 4 5 6 7 8 9 # MoveElision [B, 128, L, 512]*[B, 128, L, 512] + [B, 128, L, 64]*[B, 128, L, 64] attn_weights = ( torch.matmul(q_pe, k_pe.mT) + torch.matmul(q_nope, compressed_kv.unsqueeze(-3).mT) ) * self.softmax_scale attn_weights = nn.functional.softmax( attn_weights, dim=-1, dtype=torch.float32 ).to(q_nope.dtype) attn_output = torch.einsum(&#39;bhql,blc-&gt;bhqc&#39;, attn_weights, compressed_kv) attn_output = torch.einsum(&#39;bhqc,dhc-&gt;bqd&#39;, attn_output, out_absorbed) 作者认为没有必要再改变顺序，对模型参数进行预处理，将 WUKW^UK 与 WUQW^UQ 相乘，以及将 WUVW^UV 与 WOW^O 相乘。
这是因为， WUKW^UK 与 WUQW^UQ 相乘后的结果可以视为 HH 个大小为 1536×5121536 \\times 512 的低秩（不超过 128）矩阵，而 WUVW^UV 与 WOW^O 相乘的结果可以视为 HH 个大小为 5120×5125120 \\times 512 的低秩矩阵。相比用这些特别大的低秩矩阵做投影，明显不如按照低秩分解形式依次相乘来得划算。
Reference DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model 缓存与效果的极限拉扯：从 MHA、MQA、GQA 到 MLA DeepSeek-V2 高性能推理 (1)：通过矩阵吸收十倍提速 MLA 算子`}).add({id:11,tag:"en",href:"/blogs/distributedtraining/",title:"分布式训练",description:"DP & DDP，TP，PP，ZeRO，混合精度，通讯",content:`数据并行(DP &amp; DDP) DataParallel DP 是较简单的一种数据并行方式，直接将模型复制到多个 GPU 上并行计算，每个 GPU 计算 batch 中的一部分数据，各自完成前向和反向后，将梯度汇总到主 GPU 上。
基本流程：
加载模型、数据至内存；
创建 DP 模型；
DP 模型的 forward 过程：
一个 batch 的数据均分到不同 device 上；
为每个 device 复制一份模型；
至此，每个 device 上有模型和一份数据，并行进行前向传播；
收集各个 device 上的输出；
每个 device 上的模型反向传播后，收集梯度到主 device 上，更新主 device 上的模型，将模型广播到其他 device 上；
3-4 循环
只有一个主进程，主进程下有多个线程
每个线程管理一个 device 的训练。
DP 中内存中只存在一份数据，各个线程间共享数据。DP 和 Parameter Server 的方式很像。
DistributedDataParallel 基本流程
准备阶段
环境初始化：在各张卡上初始化进程并建立进程间通信，对应代码：init_process_group。
模型广播：将模型 parameter、buffer 广播到各节点，对应代码：model = DDP(model).to(local_rank)。
创建管理器 reducer，给每个参数注册梯度平均 hook。
准备数据
加载数据集，创建适用于分布式场景的数据采样器，以防不同节点使用的数据重叠。 训练阶段
前向传播
同步各进程状态（parameter 和 buffer）； 当 DDP 参数 find_unused_parameter 为 true 时，其会在 forward 结束时，启动一个回溯，标记未用到的参数，提前将这些设置为 ready。 计算梯度
reducer 外面：
各进程各自开始反向计算梯度； 当某个参数的梯度计算好了，其之前注册的 grad hook 就会触发，在 reducer 里把这个参数的状态标记为 ready； reducer 里面：
当某个 bucket 的所有参数都是 ready 时，reducer 开始对这个 bucket 的所有参数开始一个异步的 all-reduce 梯度平均操作； 当所有 bucket 的梯度平均都结束后，reducer 把得到的平均梯度正式写入到 parameter.grad 里。 优化器应用梯度更新参数。
DDP 与 DP 的区别 DP DDP 多线程 1. 受到 GIL 的限制 2. 单机工作 多进程 1. 多机多卡 迭代更新 传输数据包括 梯度和参数 1. 全程维护 一个 optimizer 2 梯度汇总到主 GPU, 主 GPU 进行参数更新 3. 主 GPU Broadcast 参数 给其他的 GPU 传输数据包括 梯度 1. 每个进程具有 自己的 optimizer 2. 各进程自己计算梯度 3. Ring All-Reduce 将 梯度 汇总平均 4. 各进程用梯度来独立的更新参数 通信效率 通信成本随着 GPU 数量线性增长 Ring All-Reduce 通信成本恒定，与 GPU 数量无关 DDP 中由于各进程中的模型，初始参数一致 (初始时刻进行一次 broadcast)，而每次用于更新参数的梯度也一致，因此，各进程的模型参数始终保持一致。
TP (Tensor Parallelism) Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism
每个张量都被 水平 分成多个块，因此张量的每个分片都位于其指定的 GPU 上，而不是让整个张量驻留在单个 GPU 上。在处理过程中，每个分片在不同的 GPU 上分别并行处理，结果在步骤结束时同步。
MLP 的并行化 对于输入 X∈R(B×L)×D\\mathbfX \\in \\mathbbR^(B\\times L) \\times D ，它的行数是批量大小 BB 乘以序列长度 LL ，列数是隐藏层的宽度即 DD 。
为了方便，令 B=1B=1 ，即 X∈RL×D\\mathbfX \\in \\mathbbR^L \\times D MLP 模块里面其实就是两个全连接层
假定第一个隐藏层的权重是 A∈RD×D′\\mathbf A \\in \\mathbbR^D\\times D^\\prime ( D′D^\\prime 一般是 DD 的 44 倍)，则先做矩阵乘法，然后再接一个激活函数比如 GELU
假定第二个隐藏层的权重是 B∈RD′×D\\mathbf B \\in \\mathbbR^D^\\prime \\times D ，最终得到 Z=σ(X⋅A)B\\mathbf Z = \\sigma(\\mathbf X \\cdot \\mathbf A) \\mathbf B 为了保证每个数据的完整，避免GPU 之间的通讯：
对 A∈RD×D′\\mathbf A \\in \\mathbbR^D\\times D^\\prime 按 D′D^\\prime 所在的那一维作拆分（按行切），此时 X\\mathbfX 不需要拆分，直接复制保证每个GPU上都有即可 对 B∈RD′×D\\mathbf B \\in \\mathbbR^D^\\prime \\times D 按 D′D^\\prime 所在的那一维作拆分（按列切）。 将 A\\mathbf A 按行拆分成 nn 份： A=[A1,⋯ ,An]\\mathbf A= \\beginbmatrix\\mathbf A_1,\\cdots, \\mathbf A_n \\endbmatrix ，其中 Ai∈RD×D′n\\mathbf A_i \\in \\mathbbR^D \\times \\fracD^\\primen 。通过执行矩阵乘法得到:
X⋅A=[XA1,⋯ ,XAn],XAi∈RL×D′n \\mathbf X \\cdot \\mathbf A = \\beginbmatrix\\mathbf X \\mathbf A_1,\\cdots, \\mathbf X\\mathbf A_n \\endbmatrix , \\quad \\mathbf X \\mathbf A_i \\in \\mathbbR^L\\times \\fracD^\\primen 它们可以独立输入GeLU：
[Y1,⋯ ,Yn]=[GeLU⁡(XA1),⋯ ,GeLU⁡(XAn)],Yi∈RL×D′n \\beginbmatrix\\mathbf Y_1,\\cdots, \\mathbf Y_n\\endbmatrix = \\beginbmatrix\\operatornameGeLU\\left(\\mathbf X \\mathbf A_1\\right),\\cdots, \\operatornameGeLU \\left(\\mathbf X\\mathbf A_n \\right)\\endbmatrix , \\quad \\mathbf Y_i \\in \\mathbbR^L\\times \\fracD^\\primen 将 B\\mathbf B 按列拆分成 nn 份： B=[B1,⋯ ,Bn]⊤\\mathbf B= \\beginbmatrix\\mathbf B_1,\\cdots, \\mathbf B_n \\endbmatrix^\\top ，其中 Bi∈RD′n×D\\mathbf B_i \\in \\mathbfR^\\fracD^\\primen\\times D 。通过执行矩阵乘法得到
Z=∑inZi=[Y1,⋯ ,Yn][B1,⋯ ,Bn]⊤,Z∈RL×D \\mathbf Z =\\sum_i^n\\mathbf Z_i = \\beginbmatrix\\mathbf Y_1,\\cdots, \\mathbf Y_n\\endbmatrix \\beginbmatrix\\mathbf B_1,\\cdots, \\mathbf B_n \\endbmatrix^\\top , \\quad \\mathbf Z \\in \\mathbbR^L\\times D 通过上述操作，我们可以更新任意深度的 MLP，只需在每个 拆列-拆行 序列之后同步 GPU
Self-Attention 的并行化 各个头各自计算
对于输入 X∈R(B×L)×D\\mathbfX \\in \\mathbbR^(B\\times L) \\times D ，它的行数是批量大小 BB 乘以序列长度 LL ，列数是隐藏层的宽度即 DD 。
为了方便，令 B=1B=1 ，即 X∈RL×D\\mathbfX \\in \\mathbbR^L \\times D 。
在自注意力机制中，输入 X\\mathbfX 会被复制成三份，分别对应为 X\\mathbfX 的 Q\\mathbf Q 、 K\\mathbf K 、 V\\mathbf V 向量矩阵。
对于多头注意力，头的维度为 Dh\\fracDh , 假定 h=2h=2 ，之后针对每个头中输入 X\\mathbfX 矩阵中各个单词的 Q\\mathbf Q 向量，会与各自上下文的 K\\mathbf K 向量做缩放点积然后做 Softmax 得到一个注意力分数或权重，之后再与 V\\mathbf V 相乘，得到一个 L×DhL \\times \\fracDh 的输出
每个头的计算是各自独立并行的，那意味着一个头可以放在 GPU 00 上，另一个头可以放在 GPU 11 上，最后 all reduce 每个头的结果
由于前向和后向传播中每层都有 22 个 all reduce( MLP+Self-Attention )，因此 TP 需要设备间有非常快速的互联。
因此，不建议跨多个节点进行 TP。
如果节点有 44 个 GPU，则最高 TP 度设为 44 比较好。如果需要 TP 度为 88 ，则需要使用至少有 88 个 GPU 的节点。
PP (Pipeline Parallelism) GPipe: Easy Scaling with Micro-Batch Pipeline Parallelism
模型在多个 GPU 上 垂直 (即按层) 拆分:
因此只有一个或多个模型层放置在单个 GPU 上。 每个 GPU 并行处理流水线的不同阶段，并处理 batch 的一部分数据。 把网络分成 44 块，每一块放在一个 GPU 上(不同的颜色表示不同的 GPU)，于是就有了 F0F_0 、 F1F_1 、 F2F_2 、 F3F_3 这 44 个前向路径和 B3B_3 、 B2B_2 、 B1B_1 、 B0B_0 逆序后向路径。
朴素 PP 方案 在每个时间点只有一台设备在处理计算逻辑，完成计算后将结果发送给下一台设备。
PP PP 引入了一个新的超参数来调整，称为 块 (chunks)。它定义了通过同一管级按顺序发送多少数据块。图中 chunks=4\\textchunks = 4 。
GPU 00 在 chunk 00 、 11 、 22 和 33 ( F0,0F_0,0 、 F0,1F_0,1 、 F0,2F_0,2 、 F0,3F_0,3 ) 上执行相同的前向路径，然后等待。
等其他 GPU 完成工作后，GPU 00 会再次开始工作，为块 33 、 22 、 11 和 00 ( B0,3B_0,3 、 B0,2B_0,2 、 B0,1B_0,1 、 B0,0B_0,0 ) 执行后向路径。
请注意，从概念上讲，这与梯度累积 (gradient accumulation steps，GAS) 的意思相同。PyTorch 叫它chunks，而 DeepSpeed 叫它 GAS 。
梯度累积（Gradient Accumulation） 的主要思想是在计算一个批次的梯度后不立刻更新模型参数，而是累积几个批次后再更新，这样便可以在不增加显存消耗的情况下模拟更大的批次。
因为 块 (chunks），PP 引入了 micro-batches (MBS) 的概念。
DP 将全局 batch size 拆分为小 batch size。
如果 dp_degree=4\\textdp\\_degree = 4 ，则全局 batch_sizeall=1024\\textbatch\\_size_\\textall=1024 将拆分为 44 个小 batch size，每个小batch有 batch_sizedp=1024/4=256\\textbatch\\_size_\\textdp=1024/4 = 256 。
如果 chunks=32\\textchunks = 32 ，最终得到的 micro batch_size=256/32=8\\textmicro batch\\_size = 256/32= 8 。
每个管级一次处理一个 micro batch。
计算 DP + PP 设置的全局批量大小的公式为: mbs∗chunks∗dp_degree (8∗32∗4=1024) \\textmbs*\\textchunks*\\textdp\\_degree (8*32*4=1024) 将 mini-batch 进一步划分成更小的 micro-batch，同时利用 pipipline 方案，每次处理一个 micro-batch 的数据，得到结果后，将该 micro-batch 的结果发送给下游设备，同时开始处理后一个 micro-batch 的数据，通过这套方案减小设备中的 Bubble(设备空闲的时间称为 Bubble)
ZeRO ZeRO: Memory Optimizations Toward Training Trillion Parameter Models
数据并行会产生大量冗余 Model States 的空间占用。每个 GPU 都需要存储大语言模型的相同副本，包括模型参数和优化器参数等。但是对于每个 GPU，在模型传播到某一层时，其他层的模型和优化器参数并不参与计算，这导致了严重的显存冗余现象。
ZeRO 的本质，是在数据并行的基础上，对冗余空间占用进行深度优化。
ZeRO 仅在每个 GPU 上保留部分模型参数和优化器参数，当需要时再从其它 GPU 中读取进行计算，使用完之后便可以释放相应显存。
显存占用 大规模训练中的显存占用可以分为 Model States 与 Residual states 两部分：
Model States
Optimizer States
Optimizer States 是 Optimizer 在进行梯度更新时所需要用到的数据，例如 SGD 中的 Momentum 以及使用混合精度训练时的 Float32 Master Parameters
Gradient
在反向传播后所产生的梯度信息，其决定了参数的更新方向。
Model Parameter
模型参数，也就是我们在整个过程中通过数据“学习”的信息
在传统DDP下，每个进程都使用同样参数来进行训练。每个进程也会持有对 Optimizer States 的完整拷贝，同样占用了大量显存。
在混合精度场景下，设模型参数量为 Φ \\mathbf\\Phi , 那么梯度的元素数量为 Φ\\mathbf\\Phi ，模型参数（fp16）、模型梯度（fp16） 和 优化器状态（fp32）总占用 显存：
(2+2+K)Φ (2 +2+K)\\mathbf\\Phi Residual States
除了模型状态之外的显存占用，包括 激活值（activation）、各种临时缓冲区（buffer）以及无法使用的显存碎片（fragmentation）。
ZeRO-DP （Model States） ZeRO 有三个不同级别，分别对应对 Model States 不同程度的分割 (Paritition)，图中的 Pos\\textP_\\textos 、 Pos+g\\textP_\\textos+\\textg 、 Pos+g+p\\textP_\\textos+\\textg+\\textp 分别代表 ZeRO-1、ZeRO-2、ZeRO-3
ZeRO-1 [ Pos\\textP_\\textos ]： 分割 Optimizer States
模型参数（parameters）和梯度（gradients）仍旧是每张卡保持一份，此时，每张卡的模型状态所需显存是 2Φ+2Φ+K⋅ΦNd2\\mathbf\\Phi+2\\mathbf\\Phi+ \\fracK \\cdot \\mathbf\\PhiN_d ，当 NN 比较大时，趋向于 4Φ4\\mathbf\\Phi 。
ZeRO-2 [ Pos+g\\textP_\\textos+\\textg ]： 分割 Optimizer States 与 Gradients
继续对模型梯度进行分片，模型参数仍旧是每张卡保持一份，此时，每张卡的模型状态所需显存是 2Φ+(2+K)⋅ΦNd2\\mathbf\\Phi+ \\frac(2+K) \\cdot \\mathbf\\PhiN_d ，当 NN 比较大时，趋向于 2Φ2\\mathbf\\Phi 。
ZeRO-3 [ Pos+g+p\\textP_\\textos+\\textg+\\textp ]： 分割 Optimizer States、Gradients 与 Parameters
继续对模型参数进行分片，此时每张卡的模型状态所需显存是 (2+2+K)⋅ΦNd\\frac(2+2+K) \\cdot \\mathbf\\PhiN_d ，当 NN 比较大时，趋向于 00 。
ZeRO-1 和 ZeRO-2 并不会带来额外的通讯，但 ZeRO-3 每一次要算 W\\mathbf W 的时候，都得去别的机器拿回来，相当于带来了额外的通讯(增加了 50%50\\% )
ZeRO V.S. 模型并行 ZeRO 是模型并行的形式，数据并行的实质。
模型并行，是指在 forward 和 backward 的过程中，只需要用自己维护的那块 W\\mathbf W 来计算。
即 同样的输入 X，每块 GPU 上各算模型的一部分，最后通过某些方式聚合结果。
ZeRO 做 forward 和 backward 的时候，需要把各 GPU 上维护的 W\\mathbf W 聚合起来。
即 本质上还是用完整的 W 进行计算。它是不同的输入 X\\mathbf X ，完整的参数 W\\mathbf W ，最终再做聚合。
ZeRO-R（Residual States） PαP_\\alpha : Partitioned Activation Checkpointing
activation 起到加速梯度计算的作用。
使用分片方法，并且配合 checkpointing，可以灵活设置 activation的存储。每块 GPU 上只维护部分的 activation，需要时再从别的地方聚合过来就行。需要注意的是，activation 对显存的占用一般会远高于模型本身，通讯量也是巨大的，所以这块要灵活、有效地实验设计。
CBC_B : Constant Size Buffer 临时缓冲区
模型训练过程中经常会创建一些大小不等的临时缓冲区，比如对梯度进行 AllReduce。
解决办法为预先创建一个固定的缓冲区 ，训练过程中不再动态创建，如果要传输的数据较小，则多组数据 bucket 后再一次性传输，提高效率
固定大小的内存 buffer，它的目的在于：
提升带宽利用率。当 GPU 数量上升，GPU 间的通讯次数也上升，每次的通讯量可能下降（但总通讯量不会变）。数据切片小了，就不能很好利用带宽了。所以这个 buffer 起到了积攒数据的作用：等数据积攒到一定大小，再进行通讯。
使得存储大小可控。在每次通讯前，积攒的存储大小是常量，是已知可控的。更方便使用者对训练中的存储消耗和通讯时间进行预估。
MDM_D : Memory Defragmentation 显存碎片
显存出现碎片的一大原因是 gradient checkpointing 后，不断地创建和销毁那些不保存的激活值。
解决方法是预先分配一块连续的显存，将常驻显存的模型状态和 checkpointed activation 存在里面，剩余显存用于动态创建和销毁 discarded activation。
设置机制，对碎片化的存储空间进行重新整合，整出连续的存储空间。防止出现总存储足够，但连续存储不够而引起的存储请求 fail。
ZeRO-Offload forward 和 backward 计算量高，因此和它们相关的部分，例如参数 W\\mathbf W （fp16），activation，就全放入 GPU。
update 的部分计算量低，因此和它相关的部分，全部放入 CPU 中。例如 参数 W\\mathbf W (fp32)，optimizer states（fp32）和 gradients(fp16)等。
混合精度 Mixed Precision Training
混合精度训练，指代的是单精度 float（ 3232 bit， 44 个字节）和半精度 float16（ 1212 bit， 22 个字节） 混合。
半精度 半精度优点：
内存占用更少： 通用的模型 fp16 占用的内存只需原来的一半：
模型占用的内存更小，训练的时候可以用更大的 batchsize。 模型训练时，通信量（特别是多卡，或者多机多卡）大幅减少，大幅减少等待时间，加快数据的流通。 计算更快：
目前的不少 GPU 都有针对 fp16 的计算进行优化。论文指出：在近期的 GPU 中，半精度的计算吞吐量可以是单精度的 22 - 88 倍； 半精度问题
数据溢出 Overflow / Underflow：对于深度学习而言，最大的问题在于 Underflow（下溢出），在训练后期，例如激活函数的梯度会非常小， 甚至在梯度乘以学习率后，值会更加小。 舍入误差 Rounding Error。 混合精度训练（Mixed Precision 利用 fp16 进行乘法和存储，利用 fp32 来进行加法计算。这样可以减少加法过程中的舍入误差，保证精度不损失
在模型矩阵乘法的过程中，利用 fp32 来进行矩阵乘法中间的累加(accumulated)。
然后再将 fp32 的值转化为 fp16 进行存储。
FP32 权重备份 主要用于解决舍入误差的问题。
weights, activations, gradients 等数据在训练中都 利用 fp16 来存储
fp32 额外拷贝一份 weight 会新增加训练时候存储的占用。
实际训练过程中，内存中占据大部分的基本都是 activations 的值。特别是在 batchsize 很大的情况下， activations 更是特别占据空间。 保存 activiations 主要是为了在 back-propogation 的时候进行计算。
因此，只要 activation 的值基本都是使用 fp16 来进行存储的话，则最终模型与 fp32 相比起来， 内存占用也基本能够减半。
拷贝一份 fp32 的 weights，用于更新。
在更新权重的时候， weightt=weightt−1+lr⋅gradients \\textweight_t= \\text weight_t-1+ \\textlr \\cdot \\textgradients ，而在深度模型中， lr⋅gradients \\textlr \\cdot \\textgradients 往往非常小，如果利用 fp16 来进行相加的话， 则很可能会出现 舍入误差 Rounding Error，导致更新无效。
通过将 weights 拷贝成 fp32 格式，并且确保整个更新（update）过程在 fp32 格式下进行
损失放大 Loss Scale 主要用于解决 fp16 underflow 的问题。
训练到了后期，梯度（特别是激活函数平滑段的梯度）会特别小，fp16 表示容易产生 underflow 现象。
Loss Scale
对计算出来的 loss 值进行 scale，由于链式法则的存在，loss 上的 scale 也会作用在梯度上。这样比起对每个梯度进行 scale 更加划算。 scaled 过后的梯度，就会平移到 fp16 有效的展示范围内。
反向传播前 ，将损失变化（dLoss）手动增大 2k2^k 倍，因此反向传播时得到的中间变量（激活函数梯度）则不会溢出； 反向传播后，将权重梯度缩 2k2^k 倍，恢复正常值。 这样，scaled-gradient 就可以一直使用 fp16 进行存储了。只有在进行更新的时候，才会将 scaled-gradient 转化为 fp32，同时将 scale 抹去。
通讯 Broadcast Broadcast 把同一份数据分发广播给所有人。
Scatter Scatter 将不同数据分发给不同的进程。
Gather Gather 函数是反向的 Scatter ，即收集所有进程发送向 root 进程的数据。
Reduce Reduce 将多个进程中的数据按照指定的映射函数进行运算，得到最后的结果存在一个进程中。
在下图中，左边每个进程包含一个整数。 调用 MPI_Reduce 的 root 进程为 00 ，并使用 MPI_SUM 作 reduction 运算。 这 44 个数字相加后将结果存储在 root 进程中。
右边的每个进程都有 22 个元素。 结果求和基于每个元素进行。 即将每个数组中的第 ii 个元素累加到进程 00 的结果数组中的第 ii 个元素中。
All-reduce All-reduce 与 Reduce 的区别就在于后者最后的结果是只保存在一个进程中，而 All-reduce 需要每个进程都有同样的结果。
所以 All-reduce 一般包含 Scatter 操作，所以有时候也会看到 reduce-scatter 这种说法，其实 reduce-scatter 可以看成是 all reduce 的一种实现方式。
Ring-All-Reduce All-Reduce 可以有多种实现方法，目前主流的实现方法是基于 Ring 的方式。总的来说，Ring-AllReduce 可以分为 reduce-scatter 和 all-gather 两部分。
这里假设有 33 张显卡，逻辑拓扑结构为一个环。此外，每块显卡中的数据都被切分为 33 块。每个显卡都会从红色的数据块开始，然后沿着箭头的方向进行传递和累积。这个逻辑在后续的 reduce-scatter 和 all-gather 中完全相同。
在 nn 个显卡上将数据分成 nn 块，第 ii 个显卡以第 ii 块为起始，经过 n−1n-1 步完成 reduce-scatter 或者 all-gather。
Reduce-scatter 各个显卡从红色的数据开始传输，经过 22 步 后，reduce 的结果存储在了绿色的位置。
All-gather 经过 reduce-scatter 后，reduce 的数据分布在绿色的数据块上。all-gather 从绿色的数据块开始，经过 22 步 后，所有的显卡都有了完整的 reduce 结果。
Ring-AllReduce 通讯量分析 假设模型参数 W 的大小为 Φ\\mathbf\\Phi ，GPU 个数为 NN 。则梯度大小也为 Φ\\mathbf\\Phi ，每个梯度块的大小为 ΦN\\frac\\mathbf\\PhiN ，对单卡 GPU 来说（只算其 send 通讯量）：
Reduce-Scatter 阶段，通讯量为 (N−1)ΦN(N-1)\\frac\\mathbf\\PhiN All-Gather 阶段，通讯量为 (N−1)ΦN(N-1)\\frac\\mathbf\\PhiN 单卡总通讯量为 2(N−1)ΦN2(N-1)\\frac\\mathbf\\PhiN ，随着 NN 的增大，可以近似为 2Φ2\\mathbf\\Phi 。 全卡总通讯量为 2NΦ2N\\mathbf\\Phi ，通讯量均衡负载到了每一时刻的每个 Worker 上。
Reference Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism
GPipe: Easy Scaling with Micro-Batch Pipeline Parallelism
ZeRO: Memory Optimizations Toward Training Trillion Parameter Models
Mixed Precision Training
python-parallel-programmning-cookbook
MPI Reduce and Allreduce`}).add({id:12,tag:"en",href:"/blogs/%E8%87%AA%E4%BF%A1%E6%81%AF%E4%BA%92%E4%BF%A1%E6%81%AF%E7%86%B5/",title:"自信息&互信息&熵",description:"信息论中的自信息、互信息、熵等概念",content:`自信息 在信息论中， 自信息（self-information），由克劳德·香农提出。自信息 指的是当我们接收到一个消息时所获得的信息量。
具体来说，对于一个事件，它的 自信息 大小与其发生概率有关。它是衡量与概率空间中单个事件或离散随机变量取值相关的信息量的一种 量度。
它用信息的单位表示，例如 bit、nat 或是 hart，使用哪个单位取决于在计算中使用的对数的底。
自信息的期望值 就是信息论中的 熵，它反映了 随机变量采样时的平均不确定程度。
当信息被拥有它的实体传递给接收它的实体时，仅当接收实体不知道信息的先验知识时信息才得到传递。如果接收实体事先知道了消息的内容，这条消息所传递的信息量就是 00 。只有当接收实体对消息的先验知识少于 100%100\\% 时，消息才真正传递信息。
一个随机产生的事件 ωn\\omega_n 所包含的自信息量，只与该事件发生的概率有关。事件发生的概率越低，在事件真的发生时，接收到的消息中包含的自信息就越多。
ωn\\omega_n 的自信息量：
I⁡(ωn)=−log⁡(P⁡(ωn))=log⁡(1P⁡(ωn)) \\beginequation \\operatorname I (\\omega _n)=-\\log\\bigg(\\operatorname P (\\omega _n)\\bigg)=\\log \\left(\\frac 1\\operatorname P (\\omega _n)\\right) \\endequation 如果以 22 为底，单位是 bit。 如果以 ee 为底，单位将是 nat。 如果以 1010 为底，单位是 hart。 自信息的量度是非负的而且是可加的。如果事件 CC 是两个独立事件 AA 和 BB 的交集，则宣告 CC 发生的信息熵等于分别宣布事件 AA 和事件 BB 的信息熵之和。
I⁡(C)=I⁡(A∩B)=I⁡(A)+I⁡(B) \\beginalign \\operatorname I (C)=\\operatorname I (A\\cap B)=\\operatorname I (A)+\\operatorname I (B) \\endalign 信息量的大小不同于信息作用的大小。信息量只表明不确定性的减少程度，至于对接收者来说，所获得的信息可能事关重大，也可能无足轻重，这是信息作用的大小。
互信息 在概率论和信息论中，两个随机变量的 互信息（Mutual Information，MI） 衡量了这 两个变量之间的相互依赖程度。
具体而言，对于两个随机变量，MI 是一个随机变量因为知道另一个随机变量而减少的“信息量”（其单位通常是比特）。互信息的概念与随机变量的熵密切相关。
MI 决定了随机变量 (X,Y)\\displaystyle \\displaystyle (X,Y) 的联合分布与 X\\displaystyle X 和 Y\\displaystyle Y 的边缘分布的乘积之间的差异
MI 是点互信息（Pointwise Mutual Information，PMI）的期望
互信息 也称为 信息增益。
定义 设随机变量 (X,Y)(X , Y) 是空间 X×Y\\mathcal X\\times \\mathcal Y 中的一对随机变量。 若他们的联合分布是 p(x,y)p(x,y) ，边缘分布分别是 p(x)p(x) 和 p(y)p(y) ， 那么， 它们之间的互信息可以定义为：
I(X;Y)=KL(p(x,y)∥p(x)×p(y)) \\beginalign I(X; Y)= KL\\big(p(x, y)\\|p(x)\\times p(y)\\big) \\endalign 其中 KLKL 为 KL 散度 (Kullback–Leibler divergence)
注意，根据 KL 散度 的性质，如果联合概率密度函数 p(x,y)p(x,y) 等于边缘概率密度函数 p(x)p(x) 和 p(y)p(y) 的乘积，则 I(X,Y)=0I(X,Y)=0 。也就是说，在 XX 和 YY 相互独立的情况下，观察到 YY 对我们预测 XX 没有任何帮助，这时它们之间的互信息为零。
离散变量的互信息:
I(X;Y)=∑y∈Y∑x∈Xp(x,y)log⁡(p(x,y)p(x) p(y)) \\beginalign I(X; Y)=\\sum _y\\in Y\\sum _x\\in Xp(x, y)\\log \\left(\\frac p(x, y)p(x)\\, p(y)\\right) \\endalign 连续变量的互信息
I(X;Y)=∫Y∫Xp(x,y)log⁡(p(x,y)p(x) p(y)) dx dy \\beginalign I(X; Y)=\\int _Y\\int _Xp(x, y)\\log \\left(\\frac p(x, y)p(x)\\, p(y)\\right)\\; dx\\ dy \\endalign 互信息 是 XX 和 YY 的联合分布相对于假定 XX 和 YY 独立情况下的联合分布之间的内在依赖性。
互信息 度量 XX 和 YY 共享的信息：它度量知道这两个变量其中一个，对另一个不确定度减少的程度。
如果 XX 和 YY 相互独立，则知道 XX 不对 YY 提供任何信息，反之亦然，所以它们的 互信息为零。
I(X;Y)=0I(X; Y) = 0 当且仅当 XX 和 YY 为 独立随机变量。
如果 XX 是 YY 的一个 确定性函数，且 YY 也是 XX 的一个 确定性函数，那么传递的所有信息被 XX 和 YY 共享：知道 XX 决定 YY 的值，反之亦然。
因此，在此情形，互信息与 YY （或 XX ）单独包含的不确定度相同，称作 YY （或 XX ）的 熵。而且，这个互信息与 XX 的熵和 YY 的熵相同。（这种情形的一个非常特殊的情况是当 XX 和 YY 为相同随机变量时。）
性质 互信息是非负的
I(X;Y)≥0 \\beginalign \\displaystyle I(X; Y)\\geq 0 \\endalign 互信息是对称的
I(X;Y)=I(Y;X) \\beginalign \\displaystyle I(X; Y)= I(Y; X) \\endalign 与其他量的关系 互信息的具体意义在于 衡量两个事件之间的关联性
H(Y)H(Y) ：一个随机变量不确定度的量度
H(Y∣X)H(Y|X) ：&ldquo;在已知 XX 事件后 YY 事件会发生&rdquo; 的不确定度
H(Y)−H(Y∣X)H(Y)-H(Y|X) ：&quot; YY 事件的不确定度&quot;，减去 &ldquo;在基于 XX 事件后 YY 事件因此发生的不确定度&rdquo;
I(X;Y)I(X;Y) ：”因为 XX 而导致了 YY 事件”的熵（基于已知随机变量的不确定性），对于“ YY 事件”本身的熵有多大的影响力（其中包含了多大比例的“在给定 XX 条件下的 YY 事件的不确定性”），也就是说，“ YY 事件本身拥有的不确定性”，有多大程度上是由 XX 事件引起的。
互信息越小，两个来自不同事件空间的随机变量彼此之间的关系性越低;
互信息越高，关系性则越高
互信息又可以等价地表示成
I(X;Y)=H(X)−H(X∣Y)=H(Y)−H(Y∣X)=H(X)+H(Y)−H(X,Y)=H(X,Y)−H(X∣Y)−H(Y∣X) \\beginaligned I(X; Y)&amp;= H(X)-H(X|Y)\\\\ &amp;= H(Y)-H(Y|X)\\\\ &amp;= H(X)+H(Y)-H(X, Y)\\\\ &amp;= H(X, Y)-H(X|Y)-H(Y|X) \\endaligned 推导过程：
I(X;Y)=∑x,yp(x,y)log⁡p(x,y)p(x)p(y)=∑x,yp(x,y)log⁡p(x,y)p(x)−∑x,yp(x,y)log⁡p(y)=∑x,yp(x)p(y∣x)log⁡p(y∣x)−∑x,yp(x,y)log⁡p(y)=∑xp(x)(∑yp(y∣x)log⁡p(y∣x))−∑ylog⁡p(y)(∑xp(x,y))=−∑xp(x)H(Y∣X=x)−∑ylog⁡p(y)p(y)=H(Y)−H(Y∣X) \\beginaligned I(X; Y)&amp;=\\sum _x, yp(x, y)\\log \\frac p(x, y)p(x)p(y)\\\\ &amp;=\\sum _x, yp(x, y)\\log \\frac p(x, y)p(x)-\\sum _x, yp(x, y)\\log p(y)\\\\ &amp;=\\sum _x, yp(x)p(y|x)\\log p(y|x)-\\sum _x, yp(x, y)\\log p(y)\\\\ &amp;=\\sum _xp(x)\\left(\\sum _yp(y|x)\\log p(y|x)\\right)-\\sum _y\\log p(y)\\left(\\sum _xp(x, y)\\right)\\\\ &amp;=-\\sum _xp(x)H(Y|X = x)-\\sum _y\\log p(y)p(y)\\\\ &amp;= H(Y)-H(Y|X)\\\\ \\endaligned 一个变量至少包含其他任何变量可以提供的与它有关的信息
I(X;X)=H(X)−H(X∣X)=H(X)≥I(X;Y) \\beginaligned I(X; X) &amp;= H(X) - H(X|X)\\\\ &amp;= H(X) \\\\ &amp;\\ge I(X; Y) \\endaligned 互信息也可以理解为：相对熵 XX 的单变量分布 p(x)p(x) 相对于给定 YY 时 XX 的条件分布 p(x∣y)p(x|y) ：分布 p(x∣y)p(x|y) 和 p(x)p(x) 之间的平均差异越大，信息增益越大。
I(X;Y)=∑yp(y)∑xp(x∣y)log⁡2p(x∣y)p(x)=∑yp(y) DKL(p(x∣y)∥p(x))=EYDKL(p(x∣y)∥p(x)) \\beginaligned I(X; Y)&amp;=\\sum _yp(y)\\sum _xp(x|y)\\log _2\\frac p(x|y)p(x)\\\\&amp;=\\sum _yp(y)\\; D_\\mathrm KL (p(x|y)\\|p(x))\\\\&amp;=\\mathbb E _Y\\D_\\mathrm KL (p(x|y)\\|p(x))\\ \\endaligned 熵 在信息论中，熵（entropy，又称 信息熵、信源熵、平均自信息量）是接收的每条消息中包含的信息的平均量。
这里的“消息”代表来自分布或数据流中的事件、样本或特征。（熵最好理解为 不确定性的量度 而不是确定性的量度，因为越随机的信源的熵越大。）
比较不可能发生的事情，当它发生了，会提供更多的信息。
事件的概率分布和每个事件的信息量构成了一个随机变量，这个随机变量的期望就是这个分布产生的信息量的平均值（即 熵）。
熵的单位通常为 bit，但也用 Sh、nat、Hart 计量，取决于定义用到对数的底。
定义和性质 定义 熵 是 离散随机变量 的 自信息 的 期望值。但是有时也把 熵 称为 随机变量的自信息，熵满足 H(X)=I(X;X)H(X) = I(X;X) ，其中 I(X;X)I(X;X) 是 XX 与其自身的互信息。
随机变量 X∈x1,⋯ ,xnX \\in \\x_1,\\cdots, x_n\\ 的熵值 HH 定义如下：
H(X)=E[I(X)]=E[−ln⁡(P(X))] \\beginalign \\mathrm H (X)=\\mathrm E [\\mathrm I (X)] =\\mathrm E [-\\ln(\\mathrm P (X))] \\endalign P\\mathrm P 为 XX 的概率质量函数（probability mass function） E\\mathrm E 为期望函数 I(X)\\mathrm I (X) 是 XX 的信息量（又称为自信息） 当取自有限的样本时：
H(X)=∑iP(xi) I(xi)=−∑iP(xi)log⁡bP(xi) \\beginalign \\mathrm H (X)=\\sum _i\\mathrm P (x_i)\\,\\mathrm I (x_i)=-\\sum _i\\mathrm P (x_i)\\log _b\\mathrm P (x_i) \\endalign 当 b=2b = 2 ，熵的单位是 bit 当 b=eb = e ，熵的单位是 nat 当 b=10b = 10 , 熵的单位是 Hart Example:
如果有一个系统 SS 内存在多个事件 S=E1,...,EnS = \\E_1,...,E_n\\ ，每个事件的概率分布 P=p1,...,pnP = \\p_1, ..., p_n\\ ，则每个事件本身的讯息（自信息）为：
Ie=−log⁡2piI_e=-\\log _2p_i （对数以 2 为底，单位是比特 bit） Ie=−ln⁡piI_e=-\\ln p_i （对数以 e\\displaystyle e 为底，单位是纳特 nats) 英语有 26 个字母，假如每个字母在文章中出现次数平均的话，每个字母的讯息量为：
Ie=−log⁡2126=4.7 \\beginalign I_e=-\\log _21 \\over 26= 4.7 \\endalign 以日文五十音平假名作为相对范例，假设每个平假名日语文字在文章中出现的概率相等，每个平假名日语文字可携带的信息量为：
Ie=−log⁡2150=5.64 \\beginalign I_e=-\\log _21 \\over 50= 5.64 \\endalign 汉字常用的有 2500 个，假如每个汉字在文章中出现次数平均的话，每个汉字的信息量为：
Ie=−log⁡212500=11.3 \\beginalign I_e=-\\log _21 \\over 2500= 11.3 \\endalign 性质 H(X)=Hn(p1,…,pn)\\mathrm H (X) = \\mathrm H _n(p_1,\\ldots ,p_n) 连续性：熵是连续的，概率值小幅变化只能引起熵的微小变化。
对称性： pip_i 重新排序后，熵的值不变。
Hn(p1,p2,…)=Hn(p2,p1,…) \\beginalign \\mathrm H _n\\left(p_1, p_2,\\ldots \\right)=\\mathrm H _n\\left(p_2, p_1,\\ldots \\right) \\endalign 极值性：当所有符号有同等机会出现的情况下，熵达到最大值（所有可能的事件同等概率时不确定性最高）。
Hn(p1,…,pn)≤Hn(1n,…,1n)=log⁡b(n) \\beginalign \\mathrm H _n(p_1,\\ldots , p_n)\\leq \\mathrm H _n\\left(\\frac 1n,\\ldots ,\\frac 1n\\right)=\\log _b(n) \\endalign 等概率事件的熵应随符号的数量增加
Hn(1n,…,1n⏟n)=log⁡b(n)&lt;log⁡b(n+1)=Hn+1(1n+1,…,1n+1⏟n+1) \\beginalign \\mathrm H _n\\bigg (\\underbrace \\frac 1n,\\ldots ,\\frac 1n _n\\bigg )=\\log _b(n)&lt;\\log _b(n+1)=\\mathrm H _n+1\\bigg (\\underbrace \\frac 1n+1,\\ldots ,\\frac 1n+1 _n+1\\bigg ) \\endalign 可加性：熵的量与该过程如何被划分无关。
如果子系统之间的相互作用是已知的，则可以通过子系统的熵来计算一个系统的熵。
给定 nn 个均匀分布元素的集合，分为 kk 个箱子（子系统），每个里面有 b1,...,bkb_1, ..., b_k 个元素，合起来的熵应等于系统的熵与各个箱子的熵的和，每个箱子的权重为在该箱中的概率。
对正整数 bib_i ，其中 b1+...+bk=nb_1 + ... + b_k = n ：
Hn(1n,…,1n)=Hk(b1n,…,bkn)+∑i=1kbin Hbi(1bi,…,1bi) \\beginalign \\mathrm H _n\\left(\\frac 1n,\\ldots ,\\frac 1n\\right)=\\mathrm H _k\\left(\\frac b_1n,\\ldots ,\\frac b_kn\\right)+\\sum _i = 1^k\\frac b_in\\,\\mathrm H _b_i\\left(\\frac 1b_i,\\ldots ,\\frac 1b_i\\right) \\endalign 选取 k=nk=n ， b1=...=bn=1b_1=...=b_n=1 ，这意味着确定符号的熵为零： H1(1)=0H_1(1)=0 进一步性质 熵 可以被理解为，在揭示了随机变量 XX 的值之后，所获得的信息量（或者消除了不确定性的程度）。
增减一概率为零的事件不改变熵：
Hn+1(p1,…,pn,0)=Hn(p1,…,pn) \\beginalign \\mathrm H _n+1(p_1,\\ldots , p_n,0)=\\mathrm H _n(p_1,\\ldots , p_n) \\endalign 具有均匀概率分布的信源符号集可以有效地达到最大熵 log⁡bn\\log_b n ：所有可能的事件是等概率的时候，不确定性最大。
H(X)=E⁡[log⁡b(1p(X))]≤log⁡b(E⁡[1p(X)])=log⁡b(n) \\beginalign \\mathrm H (X)=\\operatorname E \\left [\\log _b\\left(\\frac 1p(X)\\right)\\right]\\leq \\log _b\\left(\\operatorname E \\left[\\frac 1p(X)\\right]\\right)=\\log _b(n) \\endalign 计算 (X,Y)(X,Y) 得到的熵或信息量（即同时计算 XX 和 YY ）等于通过进行两个连续实验得到的信息: 首先计算 YY 的值，然后在已知 YY 的值的情况下确定 XX 的值。
H(X,Y)=H(X∣Y)+H(Y)=H(Y∣X)+H(X) \\beginalign \\mathrm H (X, Y)=\\mathrm H (X|Y)+\\mathrm H (Y)=\\mathrm H (Y|X)+\\mathrm H (X) \\endalign 如果 Y=f(X)Y=f(X) ，其中 ff 是确定性的，那么 H(f(X)∣X)=0Η(f(X)|X) = 0 H(X)+H(f(X)∣X)=H(X)=H(f(X))+H(X∣f(X)) \\beginalign \\mathrm H (X)+\\mathrm H (f(X)|X)=\\mathrm H (X) =\\mathrm H (f(X))+\\mathrm H (X|f(X)) \\endalign 所以 H(f(X))≤H(X)Η(f(X)) \\le Η(X) ，因此当后者是通过确定性函数传递时，变量的熵只能降低。
如果 XX 和 YY 是两个独立实验，那么知道 YY 的值不影响我们对 XX 值的认知（因为两者独立，所以互不影响）：
H(X∣Y)=H(X) \\beginalign \\mathrm H (X|Y)=\\mathrm H (X) \\endalign 两个事件同时发生的熵不大于每个事件单独发生的熵的总和，且仅当两个事件是独立的情况下相等。更具体地说，如果 XX 和 YY 是同一概率空间的两个随机变量，而 (X,Y)(X,Y) 表示它们的笛卡尔积，则
H(X,Y)≤H(X)+H(Y) \\beginalign \\mathrm H (X, Y)\\leq \\mathrm H (X)+\\mathrm H (Y) \\endalign 联合熵 联合熵 是一集变量之间不确定性的衡量手段。
两个变量 X\\displaystyle X 和 Y\\displaystyle Y 的 联合信息熵 定义为：
H(X,Y)=−∑x∑yP(x,y)log⁡[P(x,y)] \\beginalign \\mathrm H (X, Y)=-\\sum _x\\sum _yP(x, y)\\log [P(x, y)] \\endalign 其中 x\\displaystyle x 和 y\\displaystyle y 是 X\\displaystyle X 和 Y\\displaystyle Y 的特定值, 相应地, P(x,y)\\displaystyle P(x,y) 是这些值一起出现的联合概率, 若 P(x,y)=0\\displaystyle P(x,y)=0 ，则 P(x,y)log⁡[P(x,y)]P(x,y)\\log [P(x,y)] 定义为 0。
对于两个以上的变量 X1,...,Xn\\displaystyle X_1,...,X_n ，该式的一般形式为：
H(X1,...,Xn)=−∑x1...∑xnP(x1,...,xn)log⁡[P(x1,...,xn)] \\beginalign \\mathrm H (X_1,..., X_n)=-\\sum _x_1...\\sum _x_nP(x_1,..., x_n)\\log [P(x_1,..., x_n)] \\endalign 性质 大于每个独立的熵
一集变量的联合熵大于或等于这集变量中任一个的独立熵。
H(X,Y)≥max⁡[H(X),H(Y)]H(X1,...,Xn)≥max⁡[H(X1),...,H(Xn)] \\beginalign \\mathrm H (X, Y) &amp;\\geq \\max [\\mathrm H (X),\\mathrm H (Y)]\\\\ \\mathrm H (X_1,..., X_n) &amp;\\geq \\max [H(X_1),..., H(X_n)] \\endalign 少于或等于独立熵的和
一集变量的联合熵少于或等于这集变量的独立熵之和。该不等式有且只有在 X\\displaystyle X 和 Y\\displaystyle Y 均为统计独立的时候相等。
H(X,Y)≤H(X)+H(Y)H(X1,...,Xn)≤H(X1)+...+H(Xn) \\beginalign \\mathrm H (X, Y) &amp;\\leq \\mathrm H (X)+\\mathrm H (Y)\\\\ \\mathrm H (X_1,..., X_n) &amp;\\leq \\mathrm H (X_1)+...+\\mathrm H (X_n) \\endalign 条件熵 在信息论中， 条件熵 描述了在已知第二个随机变量 X\\displaystyle X 的值的前提下，随机变量 Y\\displaystyle Y 的信息熵还有多少。同其它的信息熵一样，条件熵也用 Sh、nat、Hart 等信息单位表示。基于 X\\displaystyle X 条件的 Y\\displaystyle Y 的信息熵，用 H(Y∣X)\\displaystyle \\mathrm H (Y|X) 表示。
如果 H(Y∣X=x)H(Y|X=x) 是变量 YY 在变量 XX 取特定值 xx 的条件下的熵，则 H(Y∣X)H(Y|X) 就是在 XX 取遍所有可能的 xx 后取平均的结果。
给定随机变量 XX 和 YY ，其定义域分别记作 X\\mathcal X 和 Y\\mathcal Y 。在已知 XX 的条件下， YY 的条件熵被定义为
H(Y∣X) ≡∑x∈X p(x) H(Y∣X=x)=−∑x∈Xp(x)∑y∈Y p(y∣x) log⁡ p(y∣x)=−∑x∈X∑y∈Y p(x,y) log⁡ p(y∣x)=−∑x∈X,y∈Yp(x,y)log⁡ p(y∣x)=−∑x∈X,y∈Yp(x,y)log⁡p(x,y)p(x).=∑x∈X,y∈Yp(x,y)log⁡p(x)p(x,y). \\beginaligned \\mathrm H (Y|X)\\ &amp;\\equiv \\sum _x\\in \\mathcal X\\, p(x)\\,\\mathrm H (Y|X = x)\\\\ &amp;=-\\sum _x\\in \\mathcal Xp(x)\\sum _y\\in \\mathcal Y\\, p(y|x)\\,\\log \\, p(y|x)\\\\ &amp;=-\\sum _x\\in \\mathcal X\\sum _y\\in \\mathcal Y\\, p(x, y)\\,\\log \\, p(y|x)\\\\ &amp;=-\\sum _x\\in \\mathcal X, y\\in \\mathcal Yp(x, y)\\log \\, p(y|x)\\\\ &amp;=-\\sum _x\\in \\mathcal X, y\\in \\mathcal Yp(x, y)\\log \\frac p(x, y)p(x).\\\\ &amp;=\\sum _x\\in \\mathcal X, y\\in \\mathcal Yp(x, y)\\log \\frac p(x)p(x, y).\\\\ \\endaligned H(Y∣X)=0\\mathrm H (Y|X)=0 当且仅当 YY 的值完全由 XX 确定时 H(Y∣X)=H(Y)\\mathrm H (Y|X)=\\mathrm H (Y) 当且仅当 Y\\displaystyle Y 和 X\\displaystyle X 为独立随机变量时 链式法则 假设两个随机变量 XX 和 YY 确定的组合系统的 联合熵 为 H(X,Y)\\displaystyle \\mathrm H (X,Y) ，即我们需要 H(X,Y)\\displaystyle \\mathrm H (X,Y) bits 的信息来描述它的确切状态。
现在，若我们先学习 X\\displaystyle X 的值，我们得到了 H(X)\\displaystyle \\mathrm H (X) bits 的信息。 一旦知道了 X\\displaystyle X ，我们只需 H(X,Y)−H(X)\\displaystyle \\mathrm H (X,Y)-\\mathrm H (X) bits 来描述整个系统的状态。 这个量正是 H(Y∣X)\\mathrm H (Y|X) ，它给出了条件熵的链式法则：
H(Y∣X) = H(X,Y)−H(X) \\beginalign \\mathrm H (Y|X)\\,=\\,\\mathrm H (X, Y)-\\mathrm H(X) \\endalign 推导：
H(Y∣X)=∑x∈X,y∈Yp(x,y)log⁡p(x)p(x,y)=−∑x∈X,y∈Yp(x,y)log⁡p(x,y)+∑x∈X,y∈Yp(x,y)log⁡p(x)=H(X,Y)−H(X) \\beginaligned \\mathrmH(Y|X) &amp;= \\sum_x \\in \\mathcalX, y \\in \\mathcalY p(x, y) \\log \\fracp(x)p(x, y) \\\\ &amp;= -\\sum_x \\in \\mathcalX, y \\in \\mathcalY p(x, y) \\log p(x, y) + \\sum_x \\in \\mathcalX, y \\in \\mathcalY p(x, y) \\log p(x) \\\\ &amp;= \\mathrmH(X, Y) - \\mathrmH(X) \\endaligned 贝叶斯规则 H(Y∣X) = H(X∣Y)−H(X)+H(Y) \\beginalign H(Y|X)\\,=\\, H(X|Y)-H(X)+H(Y) \\endalign 相对熵（KL 散度） KL 散度（Kullback-Leibler divergence，简称 KLD，
消息系统中称为 相对熵（relative entropy） 连续时间序列中称为 随机性（randomness） 统计模型推断中称为 消息增益（information gain）。也称 消息散度（information divergence）。 KL 散度 是两个概率分布 PP 和 QQ 差别的 非对称性的度量。
考虑某个 未知的分布 p(x)p(x) ，假定用一个 近似的分布 q(x)q(x) 对它进行建模。如果我们使用 q(x) q(x) 来建立一个编码体系，用来把 xx 的值传给接收者，那么由于我们使用了 q(x)q(x) 而不是真实分布 p(x)p(x) ，平均编码长度比用真实分布 p(x)p(x) 进行编码增加的信息量(单位是 nat )
对于 连续随机变量
KL(P∣∣Q)=−∫p(x)ln⁡q(x)−(−∫p(x)ln⁡p(x)dx)=−∫p(x)ln⁡[q(x)p(x)]dx=∫p(x)ln⁡[p(x)q(x)]dx \\beginalign KL(P||Q) &amp;= −\\int p(x) \\ln q(x) - \\bigg( -\\int p(x) \\ln p(x) dx \\bigg)\\\\ &amp;= - \\int p(x) \\ln [\\fracq(x)p(x)] dx \\\\ &amp;= \\int p(x) \\ln [\\fracp(x)q(x)] dx \\endalign 对于 离散随机变量:
KL(P∣∣Q)=−∑ip(i)ln⁡[q(i)p(i)]=∑ip(i)ln⁡[p(i)q(i)] \\beginalign KL(P||Q) &amp;= −\\sum_i p(i) \\ln [\\fracq(i)p(i)] \\\\ &amp;= \\sum_i p(i) \\ln [\\fracp(i)q(i)] \\endalign 即按概率 PP 求得的 PP 和 QQ 的对数商的平均值
这被称为分布 p(x)p(x) 和分布 q(x)q(x) 之间的 相对熵(relative entropy)或者 KL 散 度( Kullback-Leibler divergence )。
也就是说，当我们知道真实的概率分布之后，可以给出最有效的编码。如果我们使用了不同于真实分布的概率分布，那么我们一定会损失编码效率，并且在传输时增加的平均额外信息量至少等于两个分布之间的 KL 散度。
KL 散度的测度论定义
如果 PP 和 QQ 是 集合 XX 上的测度，且 PP 关于 QQ 绝对连续，则从 PP 到 QQ 的 KL 散度 定义为
KL(P∣∣Q)=∫Xln⁡(dPdQ)dP \\beginalign KL(P||Q) =\\int_X \\ln (\\fracdPdQ)dP \\endalign 其中，假定右侧的表达形式存在，则 dQdP\\fracdQdP 为 QQ 关于 PP 的 R–N 导数
KL(P∣∣Q)=∫Xln⁡(dPdQ)dP=∫XdPdQln⁡(dPdQ)dQ \\beginalign KL(P||Q) =\\int_X\\ln(\\fracdPdQ)dP = \\int_X \\fracdPdQ\\ln(\\fracdPdQ)dQ \\endalign 即为 PP 关于 QQ 的 相对熵
最小化 KL 散度等价于最大化似然函数
假设我们想要对未知分布 p(x)p(x) 建模，可以试着使用一些参数分布 q(x∣θ)q(x|\\theta) 来近似 p(x)p(x) 。 q(x∣θ)q(x|\\theta) 由可调节的参数 θ\\theta 控制（例如一个多元高斯分布)。
通过最小化 p(x)p(x) 和 q(x∣θ)q(x|\\theta) 之间关于 θ\\theta 的 KL 散度可以确定 θ\\theta 。
但是因为不知道 p(x)，所以不能直接这么做。
如果已经观察到了服从分布 p(x)p(x) 的有限数量的训练点集 xnx_n ，其中 n=1,…,Nn=1,…,N ，那么关于 p(x)p(x) 的期望就可以通过这些点的有限加和，使用公式 E(f)≃1N∑n=1Nf(xn)E(f)\\simeq \\frac1N\\sum_n=1^Nf(x_n) 来近似，即：
KL(p∣∣q)≃1N∑n=1N[−ln⁡q(xn∣θ)+ln⁡p(xn)] \\beginalign KL(p||q)\\simeq \\frac1N\\sum_n = 1^N[− \\ln q(x_n|\\theta)+ \\ln p(x_n)] \\endalign 公式右侧的第二项与 θ\\theta 无关，第一项是使用训练集估计的分布 q(x∣θ)q(x|\\theta) 下的 θ\\theta 的负对数似然函数。
因此最小化 KL 散度等价于最大化似然函数。
性质 非负性
KL 散度满足 KL(p∣∣q)≥0 KL(p||q)\\ge 0 , 并且当且仅当两个概率分布完全相同时，等号成立。
因此我们可以把 KL 散度 看做两个分布 p(x)p(x) 和 q(x)q(x) 之间不相似程度的度量。
非对称性
KL 散度 通常不是对称的 (不满足交换律)，即 KL(p∣∣q)≠KL(q∣∣p) KL(p||q)\\neq KL(q||p) 。
非度量性
KL 散度不满足度量空间的性质：不具有对称性和三角不等式，KL 散度 不能用于计算两个分布之间的“距离”或“相似度”
交叉熵 基于相同事件测度的两个概率分布 pp 和 qq 的 ** 交叉熵（Cross entropy）**是指，当基于一个“非自然”（相对于“真实”分布而言）的概率分布 𝑞𝑞 进行编码时，在事件集合中唯一标识一个事件所需要的平均比特数。
给定两个概率分布 pp 和 qq ， pp 相对于 qq 的交叉熵 定义为
H(p,q)=E⁡p[−ln⁡q]=H(p)+KL(p∥q) \\beginalign H(p, q)=\\operatorname E _p[-\\ln q] = H(p)+ KL(p\\|q) \\endalign 其中 H(p)H(p) 是 pp 的熵， KL(p∥q)KL(p\\|q) 为 从 pp 相对于 qq 的 KL 散度
对于 连续随机变量
H(p,q)=−∫p(x)ln⁡[q(x)]dx \\beginalign H(p, q)= -\\int p(x) \\ln [q(x)] dx \\endalign 对于 离散随机变量
H(p,q)=−∑ip(i)ln⁡q(i) \\beginalign H(p, q)=-\\sum _ip(i) \\ln q(i) \\endalign 性质：
DKL(P∣∣Q)=∑i=1NP(xi)[log⁡P(x)−log⁡Q(x)]=∑i=1NP(xi)log⁡P(xi)−∑i=1NP(xi)log⁡Q(xi)=−[−∑i=1NP(xi)log⁡P(xi)]+[−∑i=1NP(xi)log⁡Q(xi)]=−H(P)+H(P,Q) \\beginequation \\beginsplit D_KL(P||Q) &amp;= \\sum_i = 1^N P(x_i)[\\log P(x) - \\log Q(x)] \\\\ &amp;= \\sum_i = 1^N P(x_i) \\log P(x_i) - \\sum_i = 1^N P(x_i) \\log Q(x_i) \\\\ &amp;= -[- \\sum_i = 1^N P(x_i) \\log P(x_i)]+ [ - \\sum_i = 1^N P(x_i) \\log Q(x_i) ] \\\\ &amp;= - H(P) + H(P, Q) \\endsplit \\endequation 总结 定义了一事件 x=x\\textx = x 的 自信息（self-information）为
I(x)=−log⁡P(x) \\beginalign I(x) = -\\log P(x) \\endalign x\\mathrmx 表示随机变量 x1,x2,...,xi,...,xNx_1, x_2,...,x_i,..., x_N 或者 xx 表示随机变量 x\\mathrmx 可能的取值 如果以 2 为底， I(x)I(x) 单位是 bit。 如果以 e 为底， I(x)I(x) 单位将是 nat。 如果以 10 为底， I(x)I(x) 单位是 hart。 自信息只能处理单个的输出。我们可以使用 香农熵（Shannon entropy）来对整个概率分布中的不确定性总量进行量化：
H(x)=Ex∼P[I(x)]=∑i=1NP(xi)I(xi)=−∑i=1NP(xi)log⁡P(xi) \\beginequation H(\\textx) = \\mathbbE_\\textx \\sim P[I(x)] = \\sum_i = 1^N P(x_i)I(x_i) = - \\sum_i = 1^N P(x_i)\\log P(x_i) \\endequation 后两个等号是在离散型变量的情况下成立，对于连续型变量，则需要求积分。当 x\\mathrmx 是连续的，香农熵被称为 微分熵（differential entropy）。
KL 散度（Kullback-Leibler (KL) divergence）可以用来衡量两个分布的差异。
KL 散度可以帮助我们测量在选择一个近似分布时丢失的信息量。
假设原概率分布为 P(x)P(x) ，近似概率分布为 Q(x)Q(x) ，则使用 KL 散度衡量这两个分布的差异：
DKL(P∣∣Q)=Ex∼P[log⁡P(x)Q(x)]=Ex∼P[log⁡P(x)−log⁡Q(x)] \\beginequation D_KL(P||Q) = \\mathbbE_\\textx \\sim P[\\log \\fracP(x)Q(x)] = \\mathbbE_\\textx \\sim P[\\log P(x) - \\log Q(x)] \\endequation 连续性:
DKL(P∥Q)=∫p(x)log⁡[p(x)q(x)]dx \\beginequation D_KL(P\\|Q) =\\int p(x) \\log [\\fracp(x)q(x)] dx \\endequation 离散型：
DKL(P∣∣Q)=∑iP(xi)log⁡[P(xi)Q(xi)] \\beginalign D_KL(P||Q) &amp;=\\sum_i P(x_i)\\log [\\fracP(x_i)Q(x_i)] \\endalign 交叉熵
H(P,Q)=H(P)+DKL(P∣∣Q) \\beginalign H(P, Q) = H(P) + D_KL(P||Q) \\endalign H(P)H(P) （即 H(x)H(x) ，其中 x∼Px∼P ）为分布 PP 的熵 DKL(P∣∣Q)D_KL(P||Q) 表示两个分布的 KL 散度 当概率分布 P(x)P(x) 确定了时， H(P)H(P) 也将被确定，即 H(P)H(P) 是一个常数。在这种情况下，交叉熵和 KL 散度就差一个大小为 H(P)H(P) 的常数
离散型变量 x\\mathrmx H(P,Q)=−Ex∼Plog⁡Q(x)=−∑i=1NP(xi)log⁡Q(xi) \\beginequation H(P, Q) = - \\mathbbE_\\textx \\sim P\\log Q(x) = - \\sum_i = 1^N P(x_i) \\log Q(x_i) \\endequation 熵：对 PP 事件的随机变量编码所需的最小字节数
KL 散度：使用 QQ 的编码来表示 PP 时“额外所需的编码长度”
交叉熵：使用 QQ 的编码来表示 PP 时所需要的 “平均的编码长度”。衡量在给定的真实分布下，使用非真实分布所指定的策略消除系统的不确定性所需要付出的努力的大小
【Example】 分类损失函数多用交叉熵，而不是 KL 散度
损失函数的功能是通过样本来计算模型分布与目标分布间的差异，在分布差异计算中，KL 散度是最合适的。
但在实际中，某一事件的标签是已知不变的（例如我们设置猫的 label 为 1，那么所有关于猫的样本都要标记为 1），即目标分布的熵为常数。因此最小化 KL 散度等价于最小化交叉熵。所以我们不用计算 KL 散度，只需要计算交叉熵就可以得到模型分布与目标分布的损失值。
如果目标分布是有变化的（如同为猫的样本，不同的样本，其值也会有差异），那么就不能使用交叉熵。例如蒸馏模型的损失函数就是 KL 散度，因为蒸馏模型的目标分布也是一个模型，该模型针对同类别的不同样本，会给出不同的预测值（如两张猫的图片 a 和 b，目标模型对 a 预测为猫的值是 0.6，对 b 预测为猫的值是 0.8）。
Reference 自信息 互信息 熵 (信息论) 联合熵 条件熵 相对熵 交叉熵`}),search.addEventListener("input",showResults,!0)}function hideSuggestions(e){var t=suggestions.contains(e.target);t||(suggestions.classList.add("d-none"),background!==null&&background.style.setProperty("--image-opacity","0.1"))}function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}function showResults(){const s=5;var t,e=this.value;const o=document.documentElement.lang;t=null,e?(t=index.search(e,{index:["title","description","content"],limit:s,tag:o,enrich:!0}),background!==null&&background.style.setProperty("--image-opacity","0")):background!==null&&background.style.setProperty("--image-opacity","0.1");const n=new Map;if(t!==null)for(const e of t.flatMap(e=>e.result)){if(n.has(e.doc.href))continue;n.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),n.size===0&&e){const n=suggestions.dataset.noResults,t=document.createElement("div");t.innerHTML=`${n} "<strong>${e}</strong>"`,t.classList.add("suggestion__no-results"),suggestions.appendChild(t);return}for(const[r,a]of n){const o=document.createElement("div");suggestions.appendChild(o);const e=document.createElement("a");e.href=r,o.appendChild(e);const t=document.createElement("span");t.classList.add("text-start"),t.textContent=a.title,t.classList.add("suggestion__title"),e.appendChild(t);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(o),suggestions.childElementCount==s)break}}search!==null&&suggestions!==null&&(document.addEventListener("keydown",inputFocus),document.addEventListener("keydown",suggestionFocus),document.addEventListener("click",hideSuggestions),initIndex());const searchModal=document.getElementById("search-modal");searchModal!==null&&searchModal.addEventListener("shown.bs.modal",function(){const e=document.getElementById("search-input-modal");e!==null&&e.focus({focusVisible:!0})}),document.querySelectorAll(".dynamic-svg").forEach(e=>{e.onload=function(){const t=e.parentElement,s=e.contentDocument,o=e.getAttribute("data-class"),n=e.getAttribute("data-style");if(t!==null&&s!==null){const e=s.querySelector("svg");e!==null&&(e.setAttribute("class","svg-inline--fa "+(o||"")),e.setAttribute("fill","currentcolor"),e.setAttribute("aria-hidden","true"),e.setAttribute("role","img"),n!==null&&n!==""&&e.setAttribute("style",n),e.removeAttribute("height"),e.removeAttribute("width"),t.innerHTML="",t.appendChild(e))}}});const fixed=!0,navbar=document.querySelector(".navbar"),togglers=document.querySelectorAll(".main-nav-toggler"),modeSelectors=document.querySelectorAll(".switch-mode-collapsed"),colorsBG=["body","secondary","tertiary"];function updateNavbar(){let e;if(typeof getLocalStorage=="function"&&(e=getLocalStorage("theme",null,"functional")),window.scrollY>75)navbar.classList.add("nav-active"),e&&navbar.setAttribute("data-bs-theme",e);else{navbar.classList.remove("nav-active");const t=navbar.getAttribute("data-bs-overlay"),n=t||e;n&&navbar.setAttribute("data-bs-theme",t)}}if(navbar!==null&&window.performance.getEntriesByType&&window.performance.getEntriesByType("navigation")[0].type==="reload"&&fixed&&updateNavbar(),navbar!==null&&togglers!==null){const t=document.querySelector("html"),n={attributes:!0,attributeFilter:["data-bs-theme"]},s=new MutationObserver(e=>{fixed&&updateNavbar()});s.observe(t,n);const e=navbar.getAttribute("data-navbar-color")||"body",o=colorsBG.includes(e)?`var(--bs-${e}-bg)`:`var(--bs-navbar-color-${e})`;navbar.style.setProperty("--bs-navbar-expanded-color",o),window.onscroll=()=>{fixed&&updateNavbar()};for(let e=0;e<togglers.length;++e)togglers[e].onclick=()=>{navbar.classList.toggle("navbar-expanded")};for(let e=0;e<modeSelectors.length;++e)modeSelectors[e].onclick=()=>{for(let e=0;e<togglers.length;++e){const t=togglers[e];t.getAttribute("aria-expanded")==="true"&&t.click()}}}const popoverTriggerList=document.querySelectorAll('[data-bs-toggle="popover"]'),popoverList=[...popoverTriggerList].map(e=>new bootstrap.Popover(e));function webShareAPI(e,t,n){navigator.share({title:e,text:t,url:n}).then(()=>console.log("Successful share")).catch(e=>console.log("Error sharing",e))}const shareButtons=document.querySelectorAll("[data-sharing-url]");shareButtons.forEach(e=>{if(navigator.share){const t=e.getAttribute("data-sharing-title"),n=e.getAttribute("data-sharing-description"),s=e.getAttribute("data-sharing-url");e.style.display="block",e.addEventListener("click",()=>webShareAPI(t,n,s))}else e.style.display="none"});const container=document.getElementById("toast-container");container!==null&&document.querySelectorAll("[data-toast-target]").forEach(e=>{const t=document.getElementById(e.getAttribute("data-toast-target"));if(t!==null){container.appendChild(t);const n=bootstrap.Toast.getOrCreateInstance(t);n!==null&&e.addEventListener("click",()=>{n.show()})}});const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e));document.querySelectorAll("[data-video-padding]").forEach(e=>{e.style.paddingBottom=e.getAttribute("data-video-padding")})