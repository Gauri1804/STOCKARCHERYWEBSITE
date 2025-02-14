function Jx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ya(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var K0={exports:{}},ec={},Y0={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),Zx=Symbol.for("react.portal"),eb=Symbol.for("react.fragment"),tb=Symbol.for("react.strict_mode"),nb=Symbol.for("react.profiler"),rb=Symbol.for("react.provider"),ib=Symbol.for("react.context"),ob=Symbol.for("react.forward_ref"),sb=Symbol.for("react.suspense"),ab=Symbol.for("react.memo"),lb=Symbol.for("react.lazy"),Lg=Symbol.iterator;function ub(t){return t===null||typeof t!="object"?null:(t=Lg&&t[Lg]||t["@@iterator"],typeof t=="function"?t:null)}var X0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J0=Object.assign,Z0={};function Co(t,e,n){this.props=t,this.context=e,this.refs=Z0,this.updater=n||X0}Co.prototype.isReactComponent={};Co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e1(){}e1.prototype=Co.prototype;function Xh(t,e,n){this.props=t,this.context=e,this.refs=Z0,this.updater=n||X0}var Jh=Xh.prototype=new e1;Jh.constructor=Xh;J0(Jh,Co.prototype);Jh.isPureReactComponent=!0;var Mg=Array.isArray,t1=Object.prototype.hasOwnProperty,Zh={current:null},n1={key:!0,ref:!0,__self:!0,__source:!0};function r1(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)t1.call(e,r)&&!n1.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:va,type:t,key:o,ref:s,props:i,_owner:Zh.current}}function cb(t,e){return{$$typeof:va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ep(t){return typeof t=="object"&&t!==null&&t.$$typeof===va}function fb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vg=/\/+/g;function hf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fb(""+t.key):e.toString(36)}function Rl(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case va:case Zx:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+hf(s,0):r,Mg(i)?(n="",t!=null&&(n=t.replace(Vg,"$&/")+"/"),Rl(i,e,n,"",function(c){return c})):i!=null&&(ep(i)&&(i=cb(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Vg,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Mg(t))for(var l=0;l<t.length;l++){o=t[l];var u=r+hf(o,l);s+=Rl(o,e,n,u,i)}else if(u=ub(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=r+hf(o,l++),s+=Rl(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function tl(t,e,n){if(t==null)return t;var r=[],i=0;return Rl(t,r,"","",function(o){return e.call(n,o,i++)}),r}function db(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},Ol={transition:null},hb={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Zh};function i1(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!ep(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Co;te.Fragment=eb;te.Profiler=nb;te.PureComponent=Xh;te.StrictMode=tb;te.Suspense=sb;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hb;te.act=i1;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=J0({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Zh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)t1.call(e,u)&&!n1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:va,type:t.type,key:i,ref:o,props:r,_owner:s}};te.createContext=function(t){return t={$$typeof:ib,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rb,_context:t},t.Consumer=t};te.createElement=r1;te.createFactory=function(t){var e=r1.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:ob,render:t}};te.isValidElement=ep;te.lazy=function(t){return{$$typeof:lb,_payload:{_status:-1,_result:t},_init:db}};te.memo=function(t,e){return{$$typeof:ab,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};te.unstable_act=i1;te.useCallback=function(t,e){return Tt.current.useCallback(t,e)};te.useContext=function(t){return Tt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};te.useEffect=function(t,e){return Tt.current.useEffect(t,e)};te.useId=function(){return Tt.current.useId()};te.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return Tt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};te.useRef=function(t){return Tt.current.useRef(t)};te.useState=function(t){return Tt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return Tt.current.useTransition()};te.version="18.3.1";Y0.exports=te;var M=Y0.exports;const de=ya(M),pb=Jx({__proto__:null,default:de},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mb=M,gb=Symbol.for("react.element"),yb=Symbol.for("react.fragment"),vb=Object.prototype.hasOwnProperty,wb=mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_b={key:!0,ref:!0,__self:!0,__source:!0};function o1(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)vb.call(e,r)&&!_b.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gb,type:t,key:o,ref:s,props:i,_owner:wb.current}}ec.Fragment=yb;ec.jsx=o1;ec.jsxs=o1;K0.exports=ec;var d=K0.exports,cd={},s1={exports:{}},Gt={},a1={exports:{}},l1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,G){var X=U.length;U.push(G);e:for(;0<X;){var ce=X-1>>>1,ne=U[ce];if(0<i(ne,G))U[ce]=G,U[X]=ne,X=ce;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var G=U[0],X=U.pop();if(X!==G){U[0]=X;e:for(var ce=0,ne=U.length,xe=ne>>>1;ce<xe;){var Lt=2*(ce+1)-1,kt=U[Lt],wt=Lt+1,It=U[wt];if(0>i(kt,X))wt<ne&&0>i(It,kt)?(U[ce]=It,U[wt]=X,ce=wt):(U[ce]=kt,U[Lt]=X,ce=Lt);else if(wt<ne&&0>i(It,X))U[ce]=It,U[wt]=X,ce=wt;else break e}}return G}function i(U,G){var X=U.sortIndex-G.sortIndex;return X!==0?X:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],h=1,m=null,g=3,b=!1,I=!1,C=!1,R=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=U)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function P(U){if(C=!1,x(U),!I)if(n(u)!==null)I=!0,Hr(L);else{var G=n(c);G!==null&&Dt(P,G.startTime-U)}}function L(U,G){I=!1,C&&(C=!1,E(w),w=-1),b=!0;var X=g;try{for(x(G),m=n(u);m!==null&&(!(m.expirationTime>G)||U&&!A());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,g=m.priorityLevel;var ne=ce(m.expirationTime<=G);G=t.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(u)&&r(u),x(G)}else r(u);m=n(u)}if(m!==null)var xe=!0;else{var Lt=n(c);Lt!==null&&Dt(P,Lt.startTime-G),xe=!1}return xe}finally{m=null,g=X,b=!1}}var N=!1,_=null,w=-1,T=5,S=-1;function A(){return!(t.unstable_now()-S<T)}function O(){if(_!==null){var U=t.unstable_now();S=U;var G=!0;try{G=_(!0,U)}finally{G?k():(N=!1,_=null)}}else N=!1}var k;if(typeof v=="function")k=function(){v(O)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,rn=Ze.port2;Ze.port1.onmessage=O,k=function(){rn.postMessage(null)}}else k=function(){R(O,0)};function Hr(U){_=U,N||(N=!0,k())}function Dt(U,G){w=R(function(){U(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){I||b||(I=!0,Hr(L))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var X=g;g=G;try{return U()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=g;g=U;try{return G()}finally{g=X}},t.unstable_scheduleCallback=function(U,G,X){var ce=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ce+X:ce):X=ce,U){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=X+ne,U={id:h++,callback:G,priorityLevel:U,startTime:X,expirationTime:ne,sortIndex:-1},X>ce?(U.sortIndex=X,e(c,U),n(u)===null&&U===n(c)&&(C?(E(w),w=-1):C=!0,Dt(P,X-ce))):(U.sortIndex=ne,e(u,U),I||b||(I=!0,Hr(L))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var G=g;return function(){var X=g;g=G;try{return U.apply(this,arguments)}finally{g=X}}}})(l1);a1.exports=l1;var Eb=a1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb=M,Wt=Eb;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u1=new Set,Ms={};function ki(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(Ms[t]=e,t=0;t<e.length;t++)u1.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,bb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fg={},$g={};function Tb(t){return fd.call($g,t)?!0:fd.call(Fg,t)?!1:bb.test(t)?$g[t]=!0:(Fg[t]=!0,!1)}function Sb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kb(t,e,n,r){if(e===null||typeof e>"u"||Sb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var tp=/[\-:]([a-z])/g;function np(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tp,np);at[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tp,np);at[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tp,np);at[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function rp(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kb(e,n,i,r)&&(n=null),r||i===null?Tb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=xb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),Vi=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),c1=Symbol.for("react.provider"),f1=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),sp=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),d1=Symbol.for("react.offscreen"),zg=Symbol.iterator;function ts(t){return t===null||typeof t!="object"?null:(t=zg&&t[zg]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,pf;function hs(t){if(pf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pf=e&&e[1]||""}return`
`+pf+t}var mf=!1;function gf(t,e){if(!t||mf)return"";mf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=l);break}}}finally{mf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hs(t):""}function Ib(t){switch(t.tag){case 5:return hs(t.type);case 16:return hs("Lazy");case 13:return hs("Suspense");case 19:return hs("SuspenseList");case 0:case 2:case 15:return t=gf(t.type,!1),t;case 11:return t=gf(t.type.render,!1),t;case 1:return t=gf(t.type,!0),t;default:return""}}function md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case Vi:return"Portal";case dd:return"Profiler";case ip:return"StrictMode";case hd:return"Suspense";case pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f1:return(t.displayName||"Context")+".Consumer";case c1:return(t._context.displayName||"Context")+".Provider";case op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sp:return e=t.displayName||null,e!==null?e:md(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return md(t(e))}catch{}}return null}function Ab(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(e);case 8:return e===ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cb(t){var e=h1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=Cb(t))}function p1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=h1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gd(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ug(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function m1(t,e){e=e.checked,e!=null&&rp(t,"checked",e,!1)}function yd(t,e){m1(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&vd(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vd(t,e,n){(e!=="number"||tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ps=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(ps(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function g1(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,v1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pb=["Webkit","ms","Moz","O"];Object.keys(Es).forEach(function(t){Pb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Es[e]=Es[t]})});function w1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Es.hasOwnProperty(t)&&Es[t]?(""+e).trim():e+"px"}function _1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=w1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Rb=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ed(t,e){if(e){if(Rb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Td=null,eo=null,to=null;function Gg(t){if(t=Ea(t)){if(typeof Td!="function")throw Error(F(280));var e=t.stateNode;e&&(e=oc(e),Td(t.stateNode,t.type,e))}}function E1(t){eo?to?to.push(t):to=[t]:eo=t}function x1(){if(eo){var t=eo,e=to;if(to=eo=null,Gg(t),e)for(t=0;t<e.length;t++)Gg(e[t])}}function b1(t,e){return t(e)}function T1(){}var yf=!1;function S1(t,e,n){if(yf)return t(e,n);yf=!0;try{return b1(t,e,n)}finally{yf=!1,(eo!==null||to!==null)&&(T1(),x1())}}function Fs(t,e){var n=t.stateNode;if(n===null)return null;var r=oc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Sd=!1;if(Wn)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Sd=!1}function Ob(t,e,n,r,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var xs=!1,nu=null,ru=!1,kd=null,jb={onError:function(t){xs=!0,nu=t}};function Nb(t,e,n,r,i,o,s,l,u){xs=!1,nu=null,Ob.apply(jb,arguments)}function Db(t,e,n,r,i,o,s,l,u){if(Nb.apply(this,arguments),xs){if(xs){var c=nu;xs=!1,nu=null}else throw Error(F(198));ru||(ru=!0,kd=c)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function k1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qg(t){if(Ii(t)!==t)throw Error(F(188))}function Lb(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qg(i),t;if(o===r)return qg(i),e;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function I1(t){return t=Lb(t),t!==null?A1(t):null}function A1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=A1(t);if(e!==null)return e;t=t.sibling}return null}var C1=Wt.unstable_scheduleCallback,Qg=Wt.unstable_cancelCallback,Mb=Wt.unstable_shouldYield,Vb=Wt.unstable_requestPaint,Fe=Wt.unstable_now,Fb=Wt.unstable_getCurrentPriorityLevel,lp=Wt.unstable_ImmediatePriority,P1=Wt.unstable_UserBlockingPriority,iu=Wt.unstable_NormalPriority,$b=Wt.unstable_LowPriority,R1=Wt.unstable_IdlePriority,tc=null,kn=null;function zb(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(tc,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:Hb,Ub=Math.log,Bb=Math.LN2;function Hb(t){return t>>>=0,t===0?32:31-(Ub(t)/Bb|0)|0}var ol=64,sl=4194304;function ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=ms(l):(o&=s,o!==0&&(r=ms(o)))}else s=n&~i,s!==0?r=ms(s):o!==0&&(r=ms(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function Wb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-pn(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=Wb(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function Id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O1(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function vf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function qb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function j1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var N1,cp,D1,L1,M1,Ad=!1,al=[],wr=null,_r=null,Er=null,$s=new Map,zs=new Map,hr=[],Qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kg(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":$s.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(e.pointerId)}}function rs(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ea(e),e!==null&&cp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Kb(t,e,n,r,i){switch(e){case"focusin":return wr=rs(wr,t,e,n,r,i),!0;case"dragenter":return _r=rs(_r,t,e,n,r,i),!0;case"mouseover":return Er=rs(Er,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return $s.set(o,rs($s.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zs.set(o,rs(zs.get(o)||null,t,e,n,r,i)),!0}return!1}function V1(t){var e=ti(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=k1(n),e!==null){t.blockedOn=e,M1(t.priority,function(){D1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return e=Ea(n),e!==null&&cp(e),t.blockedOn=n,!1;e.shift()}return!0}function Yg(t,e,n){jl(t)&&n.delete(e)}function Yb(){Ad=!1,wr!==null&&jl(wr)&&(wr=null),_r!==null&&jl(_r)&&(_r=null),Er!==null&&jl(Er)&&(Er=null),$s.forEach(Yg),zs.forEach(Yg)}function is(t,e){t.blockedOn===e&&(t.blockedOn=null,Ad||(Ad=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,Yb)))}function Us(t){function e(i){return is(i,t)}if(0<al.length){is(al[0],t);for(var n=1;n<al.length;n++){var r=al[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&is(wr,t),_r!==null&&is(_r,t),Er!==null&&is(Er,t),$s.forEach(e),zs.forEach(e),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)V1(n),n.blockedOn===null&&hr.shift()}var no=Jn.ReactCurrentBatchConfig,su=!0;function Xb(t,e,n,r){var i=fe,o=no.transition;no.transition=null;try{fe=1,fp(t,e,n,r)}finally{fe=i,no.transition=o}}function Jb(t,e,n,r){var i=fe,o=no.transition;no.transition=null;try{fe=4,fp(t,e,n,r)}finally{fe=i,no.transition=o}}function fp(t,e,n,r){if(su){var i=Cd(t,e,n,r);if(i===null)Af(t,e,r,au,n),Kg(t,r);else if(Kb(i,t,e,n,r))r.stopPropagation();else if(Kg(t,r),e&4&&-1<Qb.indexOf(t)){for(;i!==null;){var o=Ea(i);if(o!==null&&N1(o),o=Cd(t,e,n,r),o===null&&Af(t,e,r,au,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Af(t,e,r,null,n)}}var au=null;function Cd(t,e,n,r){if(au=null,t=ap(r),t=ti(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=k1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return au=t,null}function F1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fb()){case lp:return 1;case P1:return 4;case iu:case $b:return 16;case R1:return 536870912;default:return 16}default:return 16}}var mr=null,dp=null,Nl=null;function $1(){if(Nl)return Nl;var t,e=dp,n=e.length,r,i="value"in mr?mr.value:mr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Nl=i.slice(t,1<r?1-r:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function Xg(){return!1}function qt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ll:Xg,this.isPropagationStopped=Xg,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hp=qt(Po),_a=Ne({},Po,{view:0,detail:0}),Zb=qt(_a),wf,_f,os,nc=Ne({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==os&&(os&&t.type==="mousemove"?(wf=t.screenX-os.screenX,_f=t.screenY-os.screenY):_f=wf=0,os=t),wf)},movementY:function(t){return"movementY"in t?t.movementY:_f}}),Jg=qt(nc),eT=Ne({},nc,{dataTransfer:0}),tT=qt(eT),nT=Ne({},_a,{relatedTarget:0}),Ef=qt(nT),rT=Ne({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),iT=qt(rT),oT=Ne({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sT=qt(oT),aT=Ne({},Po,{data:0}),Zg=qt(aT),lT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cT[t])?!!e[t]:!1}function pp(){return fT}var dT=Ne({},_a,{key:function(t){if(t.key){var e=lT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pp,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hT=qt(dT),pT=Ne({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ey=qt(pT),mT=Ne({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pp}),gT=qt(mT),yT=Ne({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),vT=qt(yT),wT=Ne({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_T=qt(wT),ET=[9,13,27,32],mp=Wn&&"CompositionEvent"in window,bs=null;Wn&&"documentMode"in document&&(bs=document.documentMode);var xT=Wn&&"TextEvent"in window&&!bs,z1=Wn&&(!mp||bs&&8<bs&&11>=bs),ty=" ",ny=!1;function U1(t,e){switch(t){case"keyup":return ET.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function bT(t,e){switch(t){case"compositionend":return B1(e);case"keypress":return e.which!==32?null:(ny=!0,ty);case"textInput":return t=e.data,t===ty&&ny?null:t;default:return null}}function TT(t,e){if($i)return t==="compositionend"||!mp&&U1(t,e)?(t=$1(),Nl=dp=mr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z1&&e.locale!=="ko"?null:e.data;default:return null}}var ST={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ry(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ST[t.type]:e==="textarea"}function H1(t,e,n,r){E1(r),e=lu(e,"onChange"),0<e.length&&(n=new hp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ts=null,Bs=null;function kT(t){tw(t,0)}function rc(t){var e=Bi(t);if(p1(e))return t}function IT(t,e){if(t==="change")return e}var W1=!1;if(Wn){var xf;if(Wn){var bf="oninput"in document;if(!bf){var iy=document.createElement("div");iy.setAttribute("oninput","return;"),bf=typeof iy.oninput=="function"}xf=bf}else xf=!1;W1=xf&&(!document.documentMode||9<document.documentMode)}function oy(){Ts&&(Ts.detachEvent("onpropertychange",G1),Bs=Ts=null)}function G1(t){if(t.propertyName==="value"&&rc(Bs)){var e=[];H1(e,Bs,t,ap(t)),S1(kT,e)}}function AT(t,e,n){t==="focusin"?(oy(),Ts=e,Bs=n,Ts.attachEvent("onpropertychange",G1)):t==="focusout"&&oy()}function CT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rc(Bs)}function PT(t,e){if(t==="click")return rc(e)}function RT(t,e){if(t==="input"||t==="change")return rc(e)}function OT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:OT;function Hs(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fd.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function sy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ay(t,e){var n=sy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sy(n)}}function q1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?q1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q1(){for(var t=window,e=tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tu(t.document)}return e}function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jT(t){var e=Q1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&q1(n.ownerDocument.documentElement,n)){if(r!==null&&gp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=ay(n,o);var s=ay(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NT=Wn&&"documentMode"in document&&11>=document.documentMode,zi=null,Pd=null,Ss=null,Rd=!1;function ly(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rd||zi==null||zi!==tu(r)||(r=zi,"selectionStart"in r&&gp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ss&&Hs(Ss,r)||(Ss=r,r=lu(Pd,"onSelect"),0<r.length&&(e=new hp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ui={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},Tf={},K1={};Wn&&(K1=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function ic(t){if(Tf[t])return Tf[t];if(!Ui[t])return t;var e=Ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K1)return Tf[t]=e[n];return t}var Y1=ic("animationend"),X1=ic("animationiteration"),J1=ic("animationstart"),Z1=ic("transitionend"),ew=new Map,uy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){ew.set(t,e),ki(e,[t])}for(var Sf=0;Sf<uy.length;Sf++){var kf=uy[Sf],DT=kf.toLowerCase(),LT=kf[0].toUpperCase()+kf.slice(1);$r(DT,"on"+LT)}$r(Y1,"onAnimationEnd");$r(X1,"onAnimationIteration");$r(J1,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(Z1,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MT=new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));function cy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Db(r,e,void 0,t),t.currentTarget=null}function tw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;cy(i,l,c),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;cy(i,l,c),o=u}}}if(ru)throw t=kd,ru=!1,kd=null,t}function ve(t,e){var n=e[Ld];n===void 0&&(n=e[Ld]=new Set);var r=t+"__bubble";n.has(r)||(nw(e,t,2,!1),n.add(r))}function If(t,e,n){var r=0;e&&(r|=4),nw(n,t,r,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[cl]){t[cl]=!0,u1.forEach(function(n){n!=="selectionchange"&&(MT.has(n)||If(n,!1,t),If(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,If("selectionchange",!1,e))}}function nw(t,e,n,r){switch(F1(e)){case 1:var i=Xb;break;case 4:i=Jb;break;default:i=fp}n=i.bind(null,e,n,t),i=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Af(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=ti(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}S1(function(){var c=o,h=ap(n),m=[];e:{var g=ew.get(t);if(g!==void 0){var b=hp,I=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":b=hT;break;case"focusin":I="focus",b=Ef;break;case"focusout":I="blur",b=Ef;break;case"beforeblur":case"afterblur":b=Ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=tT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=gT;break;case Y1:case X1:case J1:b=iT;break;case Z1:b=vT;break;case"scroll":b=Zb;break;case"wheel":b=_T;break;case"copy":case"cut":case"paste":b=sT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ey}var C=(e&4)!==0,R=!C&&t==="scroll",E=C?g!==null?g+"Capture":null:g;C=[];for(var v=c,x;v!==null;){x=v;var P=x.stateNode;if(x.tag===5&&P!==null&&(x=P,E!==null&&(P=Fs(v,E),P!=null&&C.push(Gs(v,P,x)))),R)break;v=v.return}0<C.length&&(g=new b(g,I,null,n,h),m.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",g&&n!==bd&&(I=n.relatedTarget||n.fromElement)&&(ti(I)||I[Gn]))break e;if((b||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,b?(I=n.relatedTarget||n.toElement,b=c,I=I?ti(I):null,I!==null&&(R=Ii(I),I!==R||I.tag!==5&&I.tag!==6)&&(I=null)):(b=null,I=c),b!==I)){if(C=Jg,P="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=ey,P="onPointerLeave",E="onPointerEnter",v="pointer"),R=b==null?g:Bi(b),x=I==null?g:Bi(I),g=new C(P,v+"leave",b,n,h),g.target=R,g.relatedTarget=x,P=null,ti(h)===c&&(C=new C(E,v+"enter",I,n,h),C.target=x,C.relatedTarget=R,P=C),R=P,b&&I)t:{for(C=b,E=I,v=0,x=C;x;x=ji(x))v++;for(x=0,P=E;P;P=ji(P))x++;for(;0<v-x;)C=ji(C),v--;for(;0<x-v;)E=ji(E),x--;for(;v--;){if(C===E||E!==null&&C===E.alternate)break t;C=ji(C),E=ji(E)}C=null}else C=null;b!==null&&fy(m,g,b,C,!1),I!==null&&R!==null&&fy(m,R,I,C,!0)}}e:{if(g=c?Bi(c):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var L=IT;else if(ry(g))if(W1)L=RT;else{L=CT;var N=AT}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=PT);if(L&&(L=L(t,c))){H1(m,L,n,h);break e}N&&N(t,g,c),t==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&vd(g,"number",g.value)}switch(N=c?Bi(c):window,t){case"focusin":(ry(N)||N.contentEditable==="true")&&(zi=N,Pd=c,Ss=null);break;case"focusout":Ss=Pd=zi=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,ly(m,n,h);break;case"selectionchange":if(NT)break;case"keydown":case"keyup":ly(m,n,h)}var _;if(mp)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else $i?U1(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(z1&&n.locale!=="ko"&&($i||w!=="onCompositionStart"?w==="onCompositionEnd"&&$i&&(_=$1()):(mr=h,dp="value"in mr?mr.value:mr.textContent,$i=!0)),N=lu(c,w),0<N.length&&(w=new Zg(w,t,null,n,h),m.push({event:w,listeners:N}),_?w.data=_:(_=B1(n),_!==null&&(w.data=_)))),(_=xT?bT(t,n):TT(t,n))&&(c=lu(c,"onBeforeInput"),0<c.length&&(h=new Zg("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=_))}tw(m,e)})}function Gs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fs(t,n),o!=null&&r.unshift(Gs(t,o,i)),o=Fs(t,e),o!=null&&r.push(Gs(t,o,i))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fy(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Fs(n,o),u!=null&&s.unshift(Gs(n,u,l))):i||(u=Fs(n,o),u!=null&&s.push(Gs(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var VT=/\r\n?/g,FT=/\u0000|\uFFFD/g;function dy(t){return(typeof t=="string"?t:""+t).replace(VT,`
`).replace(FT,"")}function fl(t,e,n){if(e=dy(e),dy(t)!==e&&n)throw Error(F(425))}function uu(){}var Od=null,jd=null;function Nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,$T=typeof clearTimeout=="function"?clearTimeout:void 0,hy=typeof Promise=="function"?Promise:void 0,zT=typeof queueMicrotask=="function"?queueMicrotask:typeof hy<"u"?function(t){return hy.resolve(null).then(t).catch(UT)}:Dd;function UT(t){setTimeout(function(){throw t})}function Cf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Us(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Us(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function py(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),bn="__reactFiber$"+Ro,qs="__reactProps$"+Ro,Gn="__reactContainer$"+Ro,Ld="__reactEvents$"+Ro,BT="__reactListeners$"+Ro,HT="__reactHandles$"+Ro;function ti(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gn]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=py(t);t!==null;){if(n=t[bn])return n;t=py(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[bn]||t[Gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function oc(t){return t[qs]||null}var Md=[],Hi=-1;function zr(t){return{current:t}}function _e(t){0>Hi||(t.current=Md[Hi],Md[Hi]=null,Hi--)}function me(t,e){Hi++,Md[Hi]=t.current,t.current=e}var jr={},vt=zr(jr),Rt=zr(!1),pi=jr;function co(t,e){var n=t.type.contextTypes;if(!n)return jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function cu(){_e(Rt),_e(vt)}function my(t,e,n){if(vt.current!==jr)throw Error(F(168));me(vt,e),me(Rt,n)}function rw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,Ab(t)||"Unknown",i));return Ne({},n,r)}function fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,pi=vt.current,me(vt,t),me(Rt,Rt.current),!0}function gy(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=rw(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,_e(Rt),_e(vt),me(vt,t)):_e(Rt),me(Rt,n)}var Fn=null,sc=!1,Pf=!1;function iw(t){Fn===null?Fn=[t]:Fn.push(t)}function WT(t){sc=!0,iw(t)}function Ur(){if(!Pf&&Fn!==null){Pf=!0;var t=0,e=fe;try{var n=Fn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fn=null,sc=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(t+1)),C1(lp,Ur),i}finally{fe=e,Pf=!1}}return null}var Wi=[],Gi=0,du=null,hu=0,Yt=[],Xt=0,mi=null,$n=1,zn="";function Xr(t,e){Wi[Gi++]=hu,Wi[Gi++]=du,du=t,hu=e}function ow(t,e,n){Yt[Xt++]=$n,Yt[Xt++]=zn,Yt[Xt++]=mi,mi=t;var r=$n;t=zn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var o=32-pn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,$n=1<<32-pn(e)+i|n<<i|r,zn=o+t}else $n=1<<o|n<<i|r,zn=t}function yp(t){t.return!==null&&(Xr(t,1),ow(t,1,0))}function vp(t){for(;t===du;)du=Wi[--Gi],Wi[Gi]=null,hu=Wi[--Gi],Wi[Gi]=null;for(;t===mi;)mi=Yt[--Xt],Yt[Xt]=null,zn=Yt[--Xt],Yt[Xt]=null,$n=Yt[--Xt],Yt[Xt]=null}var Ut=null,zt=null,ke=!1,un=null;function sw(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,zt=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:$n,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,zt=null,!0):!1;default:return!1}}function Vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fd(t){if(ke){var e=zt;if(e){var n=e;if(!yy(t,e)){if(Vd(t))throw Error(F(418));e=xr(n.nextSibling);var r=Ut;e&&yy(t,e)?sw(r,n):(t.flags=t.flags&-4097|2,ke=!1,Ut=t)}}else{if(Vd(t))throw Error(F(418));t.flags=t.flags&-4097|2,ke=!1,Ut=t}}}function vy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function dl(t){if(t!==Ut)return!1;if(!ke)return vy(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nd(t.type,t.memoizedProps)),e&&(e=zt)){if(Vd(t))throw aw(),Error(F(418));for(;e;)sw(t,e),e=xr(e.nextSibling)}if(vy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Ut?xr(t.stateNode.nextSibling):null;return!0}function aw(){for(var t=zt;t;)t=xr(t.nextSibling)}function fo(){zt=Ut=null,ke=!1}function wp(t){un===null?un=[t]:un.push(t)}var GT=Jn.ReactCurrentBatchConfig;function ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function hl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wy(t){var e=t._init;return e(t._payload)}function lw(t){function e(E,v){if(t){var x=E.deletions;x===null?(E.deletions=[v],E.flags|=16):x.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=kr(E,v),E.index=0,E.sibling=null,E}function o(E,v,x){return E.index=x,t?(x=E.alternate,x!==null?(x=x.index,x<v?(E.flags|=2,v):x):(E.flags|=2,v)):(E.flags|=1048576,v)}function s(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,x,P){return v===null||v.tag!==6?(v=Mf(x,E.mode,P),v.return=E,v):(v=i(v,x),v.return=E,v)}function u(E,v,x,P){var L=x.type;return L===Fi?h(E,v,x.props.children,P,x.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===cr&&wy(L)===v.type)?(P=i(v,x.props),P.ref=ss(E,v,x),P.return=E,P):(P=Ul(x.type,x.key,x.props,null,E.mode,P),P.ref=ss(E,v,x),P.return=E,P)}function c(E,v,x,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Vf(x,E.mode,P),v.return=E,v):(v=i(v,x.children||[]),v.return=E,v)}function h(E,v,x,P,L){return v===null||v.tag!==7?(v=ai(x,E.mode,P,L),v.return=E,v):(v=i(v,x),v.return=E,v)}function m(E,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Mf(""+v,E.mode,x),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nl:return x=Ul(v.type,v.key,v.props,null,E.mode,x),x.ref=ss(E,null,v),x.return=E,x;case Vi:return v=Vf(v,E.mode,x),v.return=E,v;case cr:var P=v._init;return m(E,P(v._payload),x)}if(ps(v)||ts(v))return v=ai(v,E.mode,x,null),v.return=E,v;hl(E,v)}return null}function g(E,v,x,P){var L=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:l(E,v,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nl:return x.key===L?u(E,v,x,P):null;case Vi:return x.key===L?c(E,v,x,P):null;case cr:return L=x._init,g(E,v,L(x._payload),P)}if(ps(x)||ts(x))return L!==null?null:h(E,v,x,P,null);hl(E,x)}return null}function b(E,v,x,P,L){if(typeof P=="string"&&P!==""||typeof P=="number")return E=E.get(x)||null,l(v,E,""+P,L);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case nl:return E=E.get(P.key===null?x:P.key)||null,u(v,E,P,L);case Vi:return E=E.get(P.key===null?x:P.key)||null,c(v,E,P,L);case cr:var N=P._init;return b(E,v,x,N(P._payload),L)}if(ps(P)||ts(P))return E=E.get(x)||null,h(v,E,P,L,null);hl(v,P)}return null}function I(E,v,x,P){for(var L=null,N=null,_=v,w=v=0,T=null;_!==null&&w<x.length;w++){_.index>w?(T=_,_=null):T=_.sibling;var S=g(E,_,x[w],P);if(S===null){_===null&&(_=T);break}t&&_&&S.alternate===null&&e(E,_),v=o(S,v,w),N===null?L=S:N.sibling=S,N=S,_=T}if(w===x.length)return n(E,_),ke&&Xr(E,w),L;if(_===null){for(;w<x.length;w++)_=m(E,x[w],P),_!==null&&(v=o(_,v,w),N===null?L=_:N.sibling=_,N=_);return ke&&Xr(E,w),L}for(_=r(E,_);w<x.length;w++)T=b(_,E,w,x[w],P),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?w:T.key),v=o(T,v,w),N===null?L=T:N.sibling=T,N=T);return t&&_.forEach(function(A){return e(E,A)}),ke&&Xr(E,w),L}function C(E,v,x,P){var L=ts(x);if(typeof L!="function")throw Error(F(150));if(x=L.call(x),x==null)throw Error(F(151));for(var N=L=null,_=v,w=v=0,T=null,S=x.next();_!==null&&!S.done;w++,S=x.next()){_.index>w?(T=_,_=null):T=_.sibling;var A=g(E,_,S.value,P);if(A===null){_===null&&(_=T);break}t&&_&&A.alternate===null&&e(E,_),v=o(A,v,w),N===null?L=A:N.sibling=A,N=A,_=T}if(S.done)return n(E,_),ke&&Xr(E,w),L;if(_===null){for(;!S.done;w++,S=x.next())S=m(E,S.value,P),S!==null&&(v=o(S,v,w),N===null?L=S:N.sibling=S,N=S);return ke&&Xr(E,w),L}for(_=r(E,_);!S.done;w++,S=x.next())S=b(_,E,w,S.value,P),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?w:S.key),v=o(S,v,w),N===null?L=S:N.sibling=S,N=S);return t&&_.forEach(function(O){return e(E,O)}),ke&&Xr(E,w),L}function R(E,v,x,P){if(typeof x=="object"&&x!==null&&x.type===Fi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case nl:e:{for(var L=x.key,N=v;N!==null;){if(N.key===L){if(L=x.type,L===Fi){if(N.tag===7){n(E,N.sibling),v=i(N,x.props.children),v.return=E,E=v;break e}}else if(N.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===cr&&wy(L)===N.type){n(E,N.sibling),v=i(N,x.props),v.ref=ss(E,N,x),v.return=E,E=v;break e}n(E,N);break}else e(E,N);N=N.sibling}x.type===Fi?(v=ai(x.props.children,E.mode,P,x.key),v.return=E,E=v):(P=Ul(x.type,x.key,x.props,null,E.mode,P),P.ref=ss(E,v,x),P.return=E,E=P)}return s(E);case Vi:e:{for(N=x.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(E,v.sibling),v=i(v,x.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Vf(x,E.mode,P),v.return=E,E=v}return s(E);case cr:return N=x._init,R(E,v,N(x._payload),P)}if(ps(x))return I(E,v,x,P);if(ts(x))return C(E,v,x,P);hl(E,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,x),v.return=E,E=v):(n(E,v),v=Mf(x,E.mode,P),v.return=E,E=v),s(E)):n(E,v)}return R}var ho=lw(!0),uw=lw(!1),pu=zr(null),mu=null,qi=null,_p=null;function Ep(){_p=qi=mu=null}function xp(t){var e=pu.current;_e(pu),t._currentValue=e}function $d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){mu=t,_p=qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(_p!==t)if(t={context:t,memoizedValue:e,next:null},qi===null){if(mu===null)throw Error(F(308));qi=t,mu.dependencies={lanes:0,firstContext:t}}else qi=qi.next=t;return e}var ni=null;function bp(t){ni===null?ni=[t]:ni.push(t)}function cw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bp(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,bp(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,up(t,n)}}function _y(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gu(t,e,n,r){var i=t.updateQueue;fr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,h=c=u=null,l=o;do{var g=l.lane,b=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,C=l;switch(g=e,b=n,C.tag){case 1:if(I=C.payload,typeof I=="function"){m=I.call(b,m,g);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=C.payload,g=typeof I=="function"?I.call(b,m,g):I,g==null)break e;m=Ne({},m,g);break e;case 2:fr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else b={eventTime:b,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=b,u=m):h=h.next=b,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);yi|=s,t.lanes=s,t.memoizedState=m}}function Ey(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var xa={},In=zr(xa),Qs=zr(xa),Ks=zr(xa);function ri(t){if(t===xa)throw Error(F(174));return t}function Sp(t,e){switch(me(Ks,e),me(Qs,t),me(In,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_d(e,t)}_e(In),me(In,e)}function po(){_e(In),_e(Qs),_e(Ks)}function dw(t){ri(Ks.current);var e=ri(In.current),n=_d(e,t.type);e!==n&&(me(Qs,t),me(In,n))}function kp(t){Qs.current===t&&(_e(In),_e(Qs))}var Re=zr(0);function yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rf=[];function Ip(){for(var t=0;t<Rf.length;t++)Rf[t]._workInProgressVersionPrimary=null;Rf.length=0}var Ml=Jn.ReactCurrentDispatcher,Of=Jn.ReactCurrentBatchConfig,gi=0,Oe=null,Be=null,qe=null,vu=!1,ks=!1,Ys=0,qT=0;function ft(){throw Error(F(321))}function Ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function Cp(t,e,n,r,i,o){if(gi=o,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?XT:JT,t=n(r,i),ks){o=0;do{if(ks=!1,Ys=0,25<=o)throw Error(F(301));o+=1,qe=Be=null,e.updateQueue=null,Ml.current=ZT,t=n(r,i)}while(ks)}if(Ml.current=wu,e=Be!==null&&Be.next!==null,gi=0,qe=Be=Oe=null,vu=!1,e)throw Error(F(300));return t}function Pp(){var t=Ys!==0;return Ys=0,t}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Oe.memoizedState=qe=t:qe=qe.next=t,qe}function tn(){if(Be===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=qe===null?Oe.memoizedState:qe.next;if(e!==null)qe=e,Be=t;else{if(t===null)throw Error(F(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},qe===null?Oe.memoizedState=qe=t:qe=qe.next=t}return qe}function Xs(t,e){return typeof e=="function"?e(t):e}function jf(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var h=c.lane;if((gi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,s=r):u=u.next=m,Oe.lanes|=h,yi|=h}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=l,yn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Oe.lanes|=o,yi|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nf(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);yn(o,e.memoizedState)||(Pt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function hw(){}function pw(t,e){var n=Oe,r=tn(),i=e(),o=!yn(r.memoizedState,i);if(o&&(r.memoizedState=i,Pt=!0),r=r.queue,Rp(yw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Js(9,gw.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(F(349));gi&30||mw(n,e,i)}return i}function mw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gw(t,e,n,r){e.value=n,e.getSnapshot=r,vw(e)&&ww(t)}function yw(t,e,n){return n(function(){vw(e)&&ww(t)})}function vw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function ww(t){var e=qn(t,1);e!==null&&mn(e,t,1,-1)}function xy(t){var e=wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=YT.bind(null,Oe,t),[e.memoizedState,t]}function Js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _w(){return tn().memoizedState}function Vl(t,e,n,r){var i=wn();Oe.flags|=t,i.memoizedState=Js(1|e,n,void 0,r===void 0?null:r)}function ac(t,e,n,r){var i=tn();r=r===void 0?null:r;var o=void 0;if(Be!==null){var s=Be.memoizedState;if(o=s.destroy,r!==null&&Ap(r,s.deps)){i.memoizedState=Js(e,n,o,r);return}}Oe.flags|=t,i.memoizedState=Js(1|e,n,o,r)}function by(t,e){return Vl(8390656,8,t,e)}function Rp(t,e){return ac(2048,8,t,e)}function Ew(t,e){return ac(4,2,t,e)}function xw(t,e){return ac(4,4,t,e)}function bw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tw(t,e,n){return n=n!=null?n.concat([t]):null,ac(4,4,bw.bind(null,e,t),n)}function Op(){}function Sw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ap(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ap(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Iw(t,e,n){return gi&21?(yn(n,e)||(n=O1(),Oe.lanes|=n,yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function QT(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Of.transition;Of.transition={};try{t(!1),e()}finally{fe=n,Of.transition=r}}function Aw(){return tn().memoizedState}function KT(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cw(t))Pw(e,n);else if(n=cw(t,e,n,r),n!==null){var i=bt();mn(n,t,r,i),Rw(n,e,r)}}function YT(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cw(t))Pw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,yn(l,s)){var u=e.interleaved;u===null?(i.next=i,bp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=cw(t,e,i,r),n!==null&&(i=bt(),mn(n,t,r,i),Rw(n,e,r))}}function Cw(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function Pw(t,e){ks=vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,up(t,n)}}var wu={readContext:en,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},XT={readContext:en,useCallback:function(t,e){return wn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:by,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,bw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=KT.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=wn();return t={current:t},e.memoizedState=t},useState:xy,useDebugValue:Op,useDeferredValue:function(t){return wn().memoizedState=t},useTransition:function(){var t=xy(!1),e=t[0];return t=QT.bind(null,t[1]),wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=wn();if(ke){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Xe===null)throw Error(F(349));gi&30||mw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,by(yw.bind(null,r,o,t),[t]),r.flags|=2048,Js(9,gw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=wn(),e=Xe.identifierPrefix;if(ke){var n=zn,r=$n;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JT={readContext:en,useCallback:Sw,useContext:en,useEffect:Rp,useImperativeHandle:Tw,useInsertionEffect:Ew,useLayoutEffect:xw,useMemo:kw,useReducer:jf,useRef:_w,useState:function(){return jf(Xs)},useDebugValue:Op,useDeferredValue:function(t){var e=tn();return Iw(e,Be.memoizedState,t)},useTransition:function(){var t=jf(Xs)[0],e=tn().memoizedState;return[t,e]},useMutableSource:hw,useSyncExternalStore:pw,useId:Aw,unstable_isNewReconciler:!1},ZT={readContext:en,useCallback:Sw,useContext:en,useEffect:Rp,useImperativeHandle:Tw,useInsertionEffect:Ew,useLayoutEffect:xw,useMemo:kw,useReducer:Nf,useRef:_w,useState:function(){return Nf(Xs)},useDebugValue:Op,useDeferredValue:function(t){var e=tn();return Be===null?e.memoizedState=t:Iw(e,Be.memoizedState,t)},useTransition:function(){var t=Nf(Xs)[0],e=tn().memoizedState;return[t,e]},useMutableSource:hw,useSyncExternalStore:pw,useId:Aw,unstable_isNewReconciler:!1};function an(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lc={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Sr(t),o=Un(r,i);o.payload=e,n!=null&&(o.callback=n),e=br(t,o,i),e!==null&&(mn(e,t,i,r),Ll(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Sr(t),o=Un(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=br(t,o,i),e!==null&&(mn(e,t,i,r),Ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Sr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=br(t,i,r),e!==null&&(mn(e,t,r,n),Ll(e,t,r))}};function Ty(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,o):!0}function Ow(t,e,n){var r=!1,i=jr,o=e.contextType;return typeof o=="object"&&o!==null?o=en(o):(i=Ot(e)?pi:vt.current,r=e.contextTypes,o=(r=r!=null)?co(t,i):jr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lc.enqueueReplaceState(e,e.state,null)}function Ud(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tp(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=en(o):(o=Ot(e)?pi:vt.current,i.context=co(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(zd(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lc.enqueueReplaceState(i,i.state,null),gu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function mo(t,e){try{var n="",r=e;do n+=Ib(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Df(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function jw(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Eu||(Eu=!0,Zd=r),Bd(t,e)},n}function Nw(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bd(t,e),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function ky(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pS.bind(null,t,e,n),e.then(t,t))}function Iy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ay(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var tS=Jn.ReactCurrentOwner,Pt=!1;function xt(t,e,n,r){e.child=t===null?uw(e,null,n,r):ho(e,t.child,n,r)}function Cy(t,e,n,r,i){n=n.render;var o=e.ref;return ro(e,i),r=Cp(t,e,n,r,o,i),n=Pp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(ke&&n&&yp(e),e.flags|=1,xt(t,e,r,i),e.child)}function Py(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!$p(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Dw(t,e,o,r,i)):(t=Ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(s,r)&&t.ref===e.ref)return Qn(t,e,i)}return e.flags|=1,t=kr(o,r),t.ref=e.ref,t.return=e,e.child=t}function Dw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Hs(o,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Qn(t,e,i)}return Hd(t,e,n,r,i)}function Lw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ki,Ft),Ft|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Ki,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(Ki,Ft),Ft|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,me(Ki,Ft),Ft|=r;return xt(t,e,i,n),e.child}function Mw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hd(t,e,n,r,i){var o=Ot(n)?pi:vt.current;return o=co(e,o),ro(e,i),n=Cp(t,e,n,r,o,i),r=Pp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(ke&&r&&yp(e),e.flags|=1,xt(t,e,n,i),e.child)}function Ry(t,e,n,r,i){if(Ot(n)){var o=!0;fu(e)}else o=!1;if(ro(e,i),e.stateNode===null)Fl(t,e),Ow(e,n,r),Ud(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=en(c):(c=Ot(n)?pi:vt.current,c=co(e,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Sy(e,s,r,c),fr=!1;var g=e.memoizedState;s.state=g,gu(e,r,s,i),u=e.memoizedState,l!==r||g!==u||Rt.current||fr?(typeof h=="function"&&(zd(e,n,h,r),u=e.memoizedState),(l=fr||Ty(e,n,l,r,g,u,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,fw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:an(e.type,l),s.props=c,m=e.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=Ot(n)?pi:vt.current,u=co(e,u));var b=n.getDerivedStateFromProps;(h=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Sy(e,s,r,u),fr=!1,g=e.memoizedState,s.state=g,gu(e,r,s,i);var I=e.memoizedState;l!==m||g!==I||Rt.current||fr?(typeof b=="function"&&(zd(e,n,b,r),I=e.memoizedState),(c=fr||Ty(e,n,c,r,g,I,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),s.props=r,s.state=I,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Wd(t,e,n,r,o,i)}function Wd(t,e,n,r,i,o){Mw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&gy(e,n,!1),Qn(t,e,o);r=e.stateNode,tS.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ho(e,t.child,null,o),e.child=ho(e,null,l,o)):xt(t,e,l,o),e.memoizedState=r.state,i&&gy(e,n,!0),e.child}function Vw(t){var e=t.stateNode;e.pendingContext?my(t,e.pendingContext,e.pendingContext!==e.context):e.context&&my(t,e.context,!1),Sp(t,e.containerInfo)}function Oy(t,e,n,r,i){return fo(),wp(i),e.flags|=256,xt(t,e,n,r),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fw(t,e,n){var r=e.pendingProps,i=Re.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Re,i&1),t===null)return Fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fc(s,r,0,null),t=ai(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=qd(n),e.memoizedState=Gd,t):jp(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nS(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=kr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=kr(l,o):(o=ai(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?qd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Gd,r}return o=t.child,t=o.sibling,r=kr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jp(t,e){return e=fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,r){return r!==null&&wp(r),ho(e,t.child,null,n),t=jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nS(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Df(Error(F(422))),pl(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=fc({mode:"visible",children:r.children},i,0,null),o=ai(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ho(e,t.child,null,s),e.child.memoizedState=qd(s),e.memoizedState=Gd,o);if(!(e.mode&1))return pl(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(F(419)),r=Df(o,r,void 0),pl(t,e,s,r)}if(l=(s&t.childLanes)!==0,Pt||l){if(r=Xe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,qn(t,i),mn(r,t,i,-1))}return Fp(),r=Df(Error(F(421))),pl(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mS.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,zt=xr(i.nextSibling),Ut=e,ke=!0,un=null,t!==null&&(Yt[Xt++]=$n,Yt[Xt++]=zn,Yt[Xt++]=mi,$n=t.id,zn=t.overflow,mi=e),e=jp(e,r.children),e.flags|=4096,e)}function jy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$d(t.return,e,n)}function Lf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $w(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(xt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jy(t,n,e);else if(t.tag===19)jy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Lf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Lf(e,!0,n,null,o);break;case"together":Lf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rS(t,e,n){switch(e.tag){case 3:Vw(e),fo();break;case 5:dw(e);break;case 1:Ot(e.type)&&fu(e);break;case 4:Sp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(pu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?Fw(t,e,n):(me(Re,Re.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);me(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $w(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,Lw(t,e,n)}return Qn(t,e,n)}var zw,Qd,Uw,Bw;zw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qd=function(){};Uw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(In.current);var o=null;switch(n){case"input":i=gd(t,i),r=gd(t,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=wd(t,i),r=wd(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uu)}Ed(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ms.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Bw=function(t,e,n,r){n!==r&&(e.flags|=4)};function as(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iS(t,e,n){var r=e.pendingProps;switch(vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Ot(e.type)&&cu(),dt(e),null;case 3:return r=e.stateNode,po(),_e(Rt),_e(vt),Ip(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(nh(un),un=null))),Qd(t,e),dt(e),null;case 5:kp(e);var i=ri(Ks.current);if(n=e.type,t!==null&&e.stateNode!=null)Uw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return dt(e),null}if(t=ri(In.current),dl(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[bn]=e,r[qs]=o,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<gs.length;i++)ve(gs[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Ug(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":Hg(r,o),ve("invalid",r)}Ed(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),i=["children",""+l]):Ms.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ve("scroll",r)}switch(n){case"input":rl(r),Bg(r,o,!0);break;case"textarea":rl(r),Wg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=uu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[bn]=e,t[qs]=r,zw(t,e,!1,!1),e.stateNode=t;e:{switch(s=xd(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<gs.length;i++)ve(gs[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Ug(t,r),i=gd(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Hg(t,r),i=wd(t,r),ve("invalid",t);break;default:i=r}Ed(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?_1(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&v1(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vs(t,u):typeof u=="number"&&Vs(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ms.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ve("scroll",t):u!=null&&rp(t,o,u,s))}switch(n){case"input":rl(t),Bg(t,r,!1);break;case"textarea":rl(t),Wg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Zi(t,!!r.multiple,o,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)Bw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ri(Ks.current),ri(In.current),dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(o=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return dt(e),null;case 13:if(_e(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&zt!==null&&e.mode&1&&!(e.flags&128))aw(),fo(),e.flags|=98560,o=!1;else if(o=dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(F(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[bn]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),o=!1}else un!==null&&(nh(un),un=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?He===0&&(He=3):Fp())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return po(),Qd(t,e),t===null&&Ws(e.stateNode.containerInfo),dt(e),null;case 10:return xp(e.type._context),dt(e),null;case 17:return Ot(e.type)&&cu(),dt(e),null;case 19:if(_e(Re),o=e.memoizedState,o===null)return dt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)as(o,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=yu(t),s!==null){for(e.flags|=128,as(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Re,Re.current&1|2),e.child}t=t.sibling}o.tail!==null&&Fe()>go&&(e.flags|=128,r=!0,as(o,!1),e.lanes=4194304)}else{if(!r)if(t=yu(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),as(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ke)return dt(e),null}else 2*Fe()-o.renderingStartTime>go&&n!==1073741824&&(e.flags|=128,r=!0,as(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Fe(),e.sibling=null,n=Re.current,me(Re,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return Vp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function oS(t,e){switch(vp(e),e.tag){case 1:return Ot(e.type)&&cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return po(),_e(Rt),_e(vt),Ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kp(e),null;case 13:if(_e(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Re),null;case 4:return po(),null;case 10:return xp(e.type._context),null;case 22:case 23:return Vp(),null;case 24:return null;default:return null}}var ml=!1,mt=!1,sS=typeof WeakSet=="function"?WeakSet:Set,B=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function Kd(t,e,n){try{n()}catch(r){Me(t,e,r)}}var Ny=!1;function aS(t,e){if(Od=su,t=Q1(),gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,h=0,m=t,g=null;t:for(;;){for(var b;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(b=m.firstChild)!==null;)g=m,m=b;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=s),g===o&&++h===r&&(u=s),(b=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=b}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:t,selectionRange:n},su=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var C=I.memoizedProps,R=I.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?C:an(e.type,C),R);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(P){Me(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return I=Ny,Ny=!1,I}function Is(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Kd(e,n,o)}i=i.next}while(i!==r)}}function uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hw(t){var e=t.alternate;e!==null&&(t.alternate=null,Hw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[qs],delete e[Ld],delete e[BT],delete e[HT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ww(t){return t.tag===5||t.tag===3||t.tag===4}function Dy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ww(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uu));else if(r!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function Jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}var nt=null,ln=!1;function or(t,e,n){for(n=n.child;n!==null;)Gw(t,e,n),n=n.sibling}function Gw(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(tc,n)}catch{}switch(n.tag){case 5:mt||Qi(n,e);case 6:var r=nt,i=ln;nt=null,or(t,e,n),nt=r,ln=i,nt!==null&&(ln?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(ln?(t=nt,n=n.stateNode,t.nodeType===8?Cf(t.parentNode,n):t.nodeType===1&&Cf(t,n),Us(t)):Cf(nt,n.stateNode));break;case 4:r=nt,i=ln,nt=n.stateNode.containerInfo,ln=!0,or(t,e,n),nt=r,ln=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Kd(n,e,s),i=i.next}while(i!==r)}or(t,e,n);break;case 1:if(!mt&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Me(n,e,l)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,or(t,e,n),mt=r):or(t,e,n);break;default:or(t,e,n)}}function Ly(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sS),e.forEach(function(r){var i=gS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,ln=!1;break e;case 3:nt=l.stateNode.containerInfo,ln=!0;break e;case 4:nt=l.stateNode.containerInfo,ln=!0;break e}l=l.return}if(nt===null)throw Error(F(160));Gw(o,s,i),nt=null,ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Me(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qw(e,t),e=e.sibling}function qw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),vn(t),r&4){try{Is(3,t,t.return),uc(3,t)}catch(C){Me(t,t.return,C)}try{Is(5,t,t.return)}catch(C){Me(t,t.return,C)}}break;case 1:sn(e,t),vn(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(sn(e,t),vn(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{Vs(i,"")}catch(C){Me(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&m1(i,o),xd(l,s);var c=xd(l,o);for(s=0;s<u.length;s+=2){var h=u[s],m=u[s+1];h==="style"?_1(i,m):h==="dangerouslySetInnerHTML"?v1(i,m):h==="children"?Vs(i,m):rp(i,h,m,c)}switch(l){case"input":yd(i,o);break;case"textarea":g1(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?Zi(i,!!o.multiple,b,!1):g!==!!o.multiple&&(o.defaultValue!=null?Zi(i,!!o.multiple,o.defaultValue,!0):Zi(i,!!o.multiple,o.multiple?[]:"",!1))}i[qs]=o}catch(C){Me(t,t.return,C)}}break;case 6:if(sn(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(C){Me(t,t.return,C)}}break;case 3:if(sn(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Us(e.containerInfo)}catch(C){Me(t,t.return,C)}break;case 4:sn(e,t),vn(t);break;case 13:sn(e,t),vn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lp=Fe())),r&4&&Ly(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||h,sn(e,t),mt=c):sn(e,t),vn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(B=t,h=t.child;h!==null;){for(m=B=h;B!==null;){switch(g=B,b=g.child,g.tag){case 0:case 11:case 14:case 15:Is(4,g,g.return);break;case 1:Qi(g,g.return);var I=g.stateNode;if(typeof I.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(C){Me(r,n,C)}}break;case 5:Qi(g,g.return);break;case 22:if(g.memoizedState!==null){Vy(m);continue}}b!==null?(b.return=g,B=b):Vy(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=w1("display",s))}catch(C){Me(t,t.return,C)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(C){Me(t,t.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:sn(e,t),vn(t),r&4&&Ly(t);break;case 21:break;default:sn(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ww(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vs(i,""),r.flags&=-33);var o=Dy(t);Jd(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Dy(t);Xd(t,l,s);break;default:throw Error(F(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lS(t,e,n){B=t,Qw(t)}function Qw(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ml;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||mt;l=ml;var c=mt;if(ml=s,(mt=u)&&!c)for(B=i;B!==null;)s=B,u=s.child,s.tag===22&&s.memoizedState!==null?Fy(i):u!==null?(u.return=s,B=u):Fy(i);for(;o!==null;)B=o,Qw(o),o=o.sibling;B=i,ml=l,mt=c}My(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):My(t)}}function My(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||uc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Ey(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ey(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Us(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}mt||e.flags&512&&Yd(e)}catch(g){Me(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Vy(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Fy(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uc(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Me(e,i,u)}}var o=e.return;try{Yd(e)}catch(u){Me(e,o,u)}break;case 5:var s=e.return;try{Yd(e)}catch(u){Me(e,s,u)}}}catch(u){Me(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var uS=Math.ceil,_u=Jn.ReactCurrentDispatcher,Np=Jn.ReactCurrentOwner,Zt=Jn.ReactCurrentBatchConfig,se=0,Xe=null,Ue=null,st=0,Ft=0,Ki=zr(0),He=0,Zs=null,yi=0,cc=0,Dp=0,As=null,Ct=null,Lp=0,go=1/0,Mn=null,Eu=!1,Zd=null,Tr=null,gl=!1,gr=null,xu=0,Cs=0,eh=null,$l=-1,zl=0;function bt(){return se&6?Fe():$l!==-1?$l:$l=Fe()}function Sr(t){return t.mode&1?se&2&&st!==0?st&-st:GT.transition!==null?(zl===0&&(zl=O1()),zl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:F1(t.type)),t):1}function mn(t,e,n,r){if(50<Cs)throw Cs=0,eh=null,Error(F(185));wa(t,n,r),(!(se&2)||t!==Xe)&&(t===Xe&&(!(se&2)&&(cc|=n),He===4&&pr(t,st)),jt(t,r),n===1&&se===0&&!(e.mode&1)&&(go=Fe()+500,sc&&Ur()))}function jt(t,e){var n=t.callbackNode;Gb(t,e);var r=ou(t,t===Xe?st:0);if(r===0)n!==null&&Qg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qg(n),e===1)t.tag===0?WT($y.bind(null,t)):iw($y.bind(null,t)),zT(function(){!(se&6)&&Ur()}),n=null;else{switch(j1(r)){case 1:n=lp;break;case 4:n=P1;break;case 16:n=iu;break;case 536870912:n=R1;break;default:n=iu}n=n_(n,Kw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kw(t,e){if($l=-1,zl=0,se&6)throw Error(F(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var r=ou(t,t===Xe?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bu(t,r);else{e=r;var i=se;se|=2;var o=Xw();(Xe!==t||st!==e)&&(Mn=null,go=Fe()+500,si(t,e));do try{dS();break}catch(l){Yw(t,l)}while(!0);Ep(),_u.current=o,se=i,Ue!==null?e=0:(Xe=null,st=0,e=He)}if(e!==0){if(e===2&&(i=Id(t),i!==0&&(r=i,e=th(t,i))),e===1)throw n=Zs,si(t,0),pr(t,r),jt(t,Fe()),n;if(e===6)pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!cS(i)&&(e=bu(t,r),e===2&&(o=Id(t),o!==0&&(r=o,e=th(t,o))),e===1))throw n=Zs,si(t,0),pr(t,r),jt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Jr(t,Ct,Mn);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=Lp+500-Fe(),10<e)){if(ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dd(Jr.bind(null,t,Ct,Mn),e);break}Jr(t,Ct,Mn);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-pn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uS(r/1960))-r,10<r){t.timeoutHandle=Dd(Jr.bind(null,t,Ct,Mn),r);break}Jr(t,Ct,Mn);break;case 5:Jr(t,Ct,Mn);break;default:throw Error(F(329))}}}return jt(t,Fe()),t.callbackNode===n?Kw.bind(null,t):null}function th(t,e){var n=As;return t.current.memoizedState.isDehydrated&&(si(t,e).flags|=256),t=bu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&nh(e)),t}function nh(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function cS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!yn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Dp,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function $y(t){if(se&6)throw Error(F(327));io();var e=ou(t,0);if(!(e&1))return jt(t,Fe()),null;var n=bu(t,e);if(t.tag!==0&&n===2){var r=Id(t);r!==0&&(e=r,n=th(t,r))}if(n===1)throw n=Zs,si(t,0),pr(t,e),jt(t,Fe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,Ct,Mn),jt(t,Fe()),null}function Mp(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(go=Fe()+500,sc&&Ur())}}function vi(t){gr!==null&&gr.tag===0&&!(se&6)&&io();var e=se;se|=1;var n=Zt.transition,r=fe;try{if(Zt.transition=null,fe=1,t)return t()}finally{fe=r,Zt.transition=n,se=e,!(se&6)&&Ur()}}function Vp(){Ft=Ki.current,_e(Ki)}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$T(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(vp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cu();break;case 3:po(),_e(Rt),_e(vt),Ip();break;case 5:kp(r);break;case 4:po();break;case 13:_e(Re);break;case 19:_e(Re);break;case 10:xp(r.type._context);break;case 22:case 23:Vp()}n=n.return}if(Xe=t,Ue=t=kr(t.current,null),st=Ft=e,He=0,Zs=null,Dp=cc=yi=0,Ct=As=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ni=null}return t}function Yw(t,e){do{var n=Ue;try{if(Ep(),Ml.current=wu,vu){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vu=!1}if(gi=0,qe=Be=Oe=null,ks=!1,Ys=0,Np.current=null,n===null||n.return===null){He=1,Zs=e,Ue=null;break}e:{var o=t,s=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=Iy(s);if(b!==null){b.flags&=-257,Ay(b,s,l,o,e),b.mode&1&&ky(o,c,e),e=b,u=c;var I=e.updateQueue;if(I===null){var C=new Set;C.add(u),e.updateQueue=C}else I.add(u);break e}else{if(!(e&1)){ky(o,c,e),Fp();break e}u=Error(F(426))}}else if(ke&&l.mode&1){var R=Iy(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ay(R,s,l,o,e),wp(mo(u,l));break e}}o=u=mo(u,l),He!==4&&(He=2),As===null?As=[o]:As.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var E=jw(o,u,e);_y(o,E);break e;case 1:l=u;var v=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Tr===null||!Tr.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var P=Nw(o,l,e);_y(o,P);break e}}o=o.return}while(o!==null)}Zw(n)}catch(L){e=L,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Xw(){var t=_u.current;return _u.current=wu,t===null?wu:t}function Fp(){(He===0||He===3||He===2)&&(He=4),Xe===null||!(yi&268435455)&&!(cc&268435455)||pr(Xe,st)}function bu(t,e){var n=se;se|=2;var r=Xw();(Xe!==t||st!==e)&&(Mn=null,si(t,e));do try{fS();break}catch(i){Yw(t,i)}while(!0);if(Ep(),se=n,_u.current=r,Ue!==null)throw Error(F(261));return Xe=null,st=0,He}function fS(){for(;Ue!==null;)Jw(Ue)}function dS(){for(;Ue!==null&&!Mb();)Jw(Ue)}function Jw(t){var e=t_(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?Zw(t):Ue=e,Np.current=null}function Zw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oS(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Ue=null;return}}else if(n=iS(n,e,Ft),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);He===0&&(He=5)}function Jr(t,e,n){var r=fe,i=Zt.transition;try{Zt.transition=null,fe=1,hS(t,e,n,r)}finally{Zt.transition=i,fe=r}return null}function hS(t,e,n,r){do io();while(gr!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(qb(t,o),t===Xe&&(Ue=Xe=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,n_(iu,function(){return io(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Zt.transition,Zt.transition=null;var s=fe;fe=1;var l=se;se|=4,Np.current=null,aS(t,n),qw(n,t),jT(jd),su=!!Od,jd=Od=null,t.current=n,lS(n),Vb(),se=l,fe=s,Zt.transition=o}else t.current=n;if(gl&&(gl=!1,gr=t,xu=i),o=t.pendingLanes,o===0&&(Tr=null),zb(n.stateNode),jt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eu)throw Eu=!1,t=Zd,Zd=null,t;return xu&1&&t.tag!==0&&io(),o=t.pendingLanes,o&1?t===eh?Cs++:(Cs=0,eh=t):Cs=0,Ur(),null}function io(){if(gr!==null){var t=j1(xu),e=Zt.transition,n=fe;try{if(Zt.transition=null,fe=16>t?16:t,gr===null)var r=!1;else{if(t=gr,gr=null,xu=0,se&6)throw Error(F(331));var i=se;for(se|=4,B=t.current;B!==null;){var o=B,s=o.child;if(B.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(B=c;B!==null;){var h=B;switch(h.tag){case 0:case 11:case 15:Is(8,h,o)}var m=h.child;if(m!==null)m.return=h,B=m;else for(;B!==null;){h=B;var g=h.sibling,b=h.return;if(Hw(h),h===c){B=null;break}if(g!==null){g.return=b,B=g;break}B=b}}}var I=o.alternate;if(I!==null){var C=I.child;if(C!==null){I.child=null;do{var R=C.sibling;C.sibling=null,C=R}while(C!==null)}}B=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,B=s;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Is(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,B=E;break e}B=o.return}}var v=t.current;for(B=v;B!==null;){s=B;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,B=x;else e:for(s=v;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uc(9,l)}}catch(L){Me(l,l.return,L)}if(l===s){B=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,B=P;break e}B=l.return}}if(se=i,Ur(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(tc,t)}catch{}r=!0}return r}finally{fe=n,Zt.transition=e}}return!1}function zy(t,e,n){e=mo(n,e),e=jw(t,e,1),t=br(t,e,1),e=bt(),t!==null&&(wa(t,1,e),jt(t,e))}function Me(t,e,n){if(t.tag===3)zy(t,t,n);else for(;e!==null;){if(e.tag===3){zy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){t=mo(n,t),t=Nw(e,t,1),e=br(e,t,1),t=bt(),e!==null&&(wa(e,1,t),jt(e,t));break}}e=e.return}}function pS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(st&n)===n&&(He===4||He===3&&(st&130023424)===st&&500>Fe()-Lp?si(t,0):Dp|=n),jt(t,e)}function e_(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=bt();t=qn(t,e),t!==null&&(wa(t,e,n),jt(t,n))}function mS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e_(t,n)}function gS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),e_(t,n)}var t_;t_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,rS(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,ke&&e.flags&1048576&&ow(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fl(t,e),t=e.pendingProps;var i=co(e,vt.current);ro(e,n),i=Cp(null,e,r,t,i,n);var o=Pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(o=!0,fu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tp(e),i.updater=lc,e.stateNode=i,i._reactInternals=e,Ud(e,r,t,n),e=Wd(null,e,r,!0,o,n)):(e.tag=0,ke&&o&&yp(e),xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vS(r),t=an(r,t),i){case 0:e=Hd(null,e,r,t,n);break e;case 1:e=Ry(null,e,r,t,n);break e;case 11:e=Cy(null,e,r,t,n);break e;case 14:e=Py(null,e,r,an(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Hd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Ry(t,e,r,i,n);case 3:e:{if(Vw(e),t===null)throw Error(F(387));r=e.pendingProps,o=e.memoizedState,i=o.element,fw(t,e),gu(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=mo(Error(F(423)),e),e=Oy(t,e,r,n,i);break e}else if(r!==i){i=mo(Error(F(424)),e),e=Oy(t,e,r,n,i);break e}else for(zt=xr(e.stateNode.containerInfo.firstChild),Ut=e,ke=!0,un=null,n=uw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),r===i){e=Qn(t,e,n);break e}xt(t,e,r,n)}e=e.child}return e;case 5:return dw(e),t===null&&Fd(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Nd(r,i)?s=null:o!==null&&Nd(r,o)&&(e.flags|=32),Mw(t,e),xt(t,e,s,n),e.child;case 6:return t===null&&Fd(e),null;case 13:return Fw(t,e,n);case 4:return Sp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ho(e,null,r,n):xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Cy(t,e,r,i,n);case 7:return xt(t,e,e.pendingProps,n),e.child;case 8:return xt(t,e,e.pendingProps.children,n),e.child;case 12:return xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,me(pu,r._currentValue),r._currentValue=s,o!==null)if(yn(o.value,s)){if(o.children===i.children&&!Rt.current){e=Qn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Un(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),$d(o.return,n,e),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(F(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$d(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ro(e,n),i=en(i),r=r(i),e.flags|=1,xt(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),Py(t,e,r,i,n);case 15:return Dw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Fl(t,e),e.tag=1,Ot(r)?(t=!0,fu(e)):t=!1,ro(e,n),Ow(e,r,i),Ud(e,r,i,n),Wd(null,e,r,!0,t,n);case 19:return $w(t,e,n);case 22:return Lw(t,e,n)}throw Error(F(156,e.tag))};function n_(t,e){return C1(t,e)}function yS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new yS(t,e,n,r)}function $p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vS(t){if(typeof t=="function")return $p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===op)return 11;if(t===sp)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")$p(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Fi:return ai(n.children,i,o,e);case ip:s=8,i|=8;break;case dd:return t=Jt(12,n,e,i|2),t.elementType=dd,t.lanes=o,t;case hd:return t=Jt(13,n,e,i),t.elementType=hd,t.lanes=o,t;case pd:return t=Jt(19,n,e,i),t.elementType=pd,t.lanes=o,t;case d1:return fc(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c1:s=10;break e;case f1:s=9;break e;case op:s=11;break e;case sp:s=14;break e;case cr:s=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Jt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ai(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function fc(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=d1,t.lanes=n,t.stateNode={isHidden:!1},t}function Mf(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function Vf(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vf(0),this.expirationTimes=vf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zp(t,e,n,r,i,o,s,l,u){return t=new wS(t,e,n,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Jt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tp(o),t}function _S(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function r_(t){if(!t)return jr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Ot(n))return rw(t,n,e)}return e}function i_(t,e,n,r,i,o,s,l,u){return t=zp(n,r,!0,t,i,o,s,l,u),t.context=r_(null),n=t.current,r=bt(),i=Sr(n),o=Un(r,i),o.callback=e??null,br(n,o,i),t.current.lanes=i,wa(t,i,r),jt(t,r),t}function dc(t,e,n,r){var i=e.current,o=bt(),s=Sr(i);return n=r_(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=br(i,e,s),t!==null&&(mn(t,i,s,o),Ll(t,i,s)),s}function Tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){Uy(t,e),(t=t.alternate)&&Uy(t,e)}function ES(){return null}var o_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bp(t){this._internalRoot=t}hc.prototype.render=Bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));dc(t,e,null,null)};hc.prototype.unmount=Bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){dc(null,t,null,null)}),e[Gn]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=L1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&V1(t)}};function Hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function By(){}function xS(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Tu(s);o.call(c)}}var s=i_(e,r,t,0,null,!1,!1,"",By);return t._reactRootContainer=s,t[Gn]=s.current,Ws(t.nodeType===8?t.parentNode:t),vi(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Tu(u);l.call(c)}}var u=zp(t,0,!1,null,null,!1,!1,"",By);return t._reactRootContainer=u,t[Gn]=u.current,Ws(t.nodeType===8?t.parentNode:t),vi(function(){dc(e,u,n,r)}),u}function mc(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=Tu(s);l.call(u)}}dc(e,s,t,i)}else s=xS(n,e,t,i,r);return Tu(s)}N1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ms(e.pendingLanes);n!==0&&(up(e,n|1),jt(e,Fe()),!(se&6)&&(go=Fe()+500,Ur()))}break;case 13:vi(function(){var r=qn(t,1);if(r!==null){var i=bt();mn(r,t,1,i)}}),Up(t,1)}};cp=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=bt();mn(e,t,134217728,n)}Up(t,134217728)}};D1=function(t){if(t.tag===13){var e=Sr(t),n=qn(t,e);if(n!==null){var r=bt();mn(n,t,e,r)}Up(t,e)}};L1=function(){return fe};M1=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Td=function(t,e,n){switch(e){case"input":if(yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oc(r);if(!i)throw Error(F(90));p1(r),yd(r,i)}}}break;case"textarea":g1(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};b1=Mp;T1=vi;var bS={usingClientEntryPoint:!1,Events:[Ea,Bi,oc,E1,x1,Mp]},ls={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TS={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I1(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{tc=yl.inject(TS),kn=yl}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(e))throw Error(F(200));return _S(t,e,null,n)};Gt.createRoot=function(t,e){if(!Hp(t))throw Error(F(299));var n=!1,r="",i=o_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zp(t,1,!1,null,null,n,!1,r,i),t[Gn]=e.current,Ws(t.nodeType===8?t.parentNode:t),new Bp(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=I1(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return vi(t)};Gt.hydrate=function(t,e,n){if(!pc(e))throw Error(F(200));return mc(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Hp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=o_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=i_(e,null,t,1,n??null,i,!1,o,s),t[Gn]=e.current,Ws(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hc(e)};Gt.render=function(t,e,n){if(!pc(e))throw Error(F(200));return mc(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!pc(t))throw Error(F(40));return t._reactRootContainer?(vi(function(){mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Gn]=null})}),!0):!1};Gt.unstable_batchedUpdates=Mp;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return mc(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),s1.exports=Gt;var a_=s1.exports,Hy=a_;cd.createRoot=Hy.createRoot,cd.hydrateRoot=Hy.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ea.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const Wy="popstate";function SS(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:l}=r.location;return rh("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Su(i)}return IS(e,n,null,t)}function je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function l_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kS(){return Math.random().toString(36).substr(2,8)}function Gy(t,e){return{usr:t.state,key:t.key,idx:e}}function rh(t,e,n,r){return n===void 0&&(n=null),ea({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Oo(e):e,{state:n,key:e&&e.key||r||kS()})}function Su(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Oo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=yr.Pop,u=null,c=h();c==null&&(c=0,s.replaceState(ea({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function m(){l=yr.Pop;let R=h(),E=R==null?null:R-c;c=R,u&&u({action:l,location:C.location,delta:E})}function g(R,E){l=yr.Push;let v=rh(C.location,R,E);c=h()+1;let x=Gy(v,c),P=C.createHref(v);try{s.pushState(x,"",P)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(P)}o&&u&&u({action:l,location:C.location,delta:1})}function b(R,E){l=yr.Replace;let v=rh(C.location,R,E);c=h();let x=Gy(v,c),P=C.createHref(v);s.replaceState(x,"",P),o&&u&&u({action:l,location:C.location,delta:0})}function I(R){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof R=="string"?R:Su(R);return v=v.replace(/ $/,"%20"),je(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let C={get action(){return l},get location(){return t(i,s)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Wy,m),u=R,()=>{i.removeEventListener(Wy,m),u=null}},createHref(R){return e(i,R)},createURL:I,encodeLocation(R){let E=I(R);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:b,go(R){return s.go(R)}};return C}var qy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qy||(qy={}));function AS(t,e,n){return n===void 0&&(n="/"),CS(t,e,n,!1)}function CS(t,e,n,r){let i=typeof e=="string"?Oo(e):e,o=yo(i.pathname||"/",n);if(o==null)return null;let s=u_(t);PS(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=zS(o);l=FS(s[u],c,r)}return l}function u_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(je(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ir([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),u_(o.children,e,h,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:MS(c,o.index),routesMeta:h})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let u of c_(o.path))i(o,s,u)}),e}function c_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=c_(r.join("/")),l=[];return l.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...s),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function PS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RS=/^:[\w-]+$/,OS=3,jS=2,NS=1,DS=10,LS=-2,Qy=t=>t==="*";function MS(t,e){let n=t.split("/"),r=n.length;return n.some(Qy)&&(r+=LS),e&&(r+=jS),n.filter(i=>!Qy(i)).reduce((i,o)=>i+(RS.test(o)?OS:o===""?NS:DS),r)}function VS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function FS(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=o==="/"?e:e.slice(o.length)||"/",m=ku({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!m&&c&&n&&!r[r.length-1].route.index&&(m=ku({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:Ir([o,m.pathname]),pathnameBase:WS(Ir([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=Ir([o,m.pathnameBase]))}return s}function ku(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$S(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:b}=h;if(g==="*"){let C=l[m]||"";s=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const I=l[m];return b&&!I?c[g]=void 0:c[g]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function $S(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),l_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function zS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return l_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function US(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Oo(t):t;return{pathname:n?n.startsWith("/")?n:BS(n,e):e,search:GS(r),hash:qS(i)}}function BS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ff(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function HS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Wp(t,e){let n=HS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Oo(t):(i=ea({},t),je(!i.pathname||!i.pathname.includes("?"),Ff("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Ff("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Ff("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=US(i,l),c=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),WS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const f_=["post","put","patch","delete"];new Set(f_);const KS=["get",...f_];new Set(KS);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ta.apply(this,arguments)}const gc=M.createContext(null),d_=M.createContext(null),Zn=M.createContext(null),yc=M.createContext(null),Br=M.createContext({outlet:null,matches:[],isDataRoute:!1}),h_=M.createContext(null);function YS(t,e){let{relative:n}=e===void 0?{}:e;jo()||je(!1);let{basename:r,navigator:i}=M.useContext(Zn),{hash:o,pathname:s,search:l}=vc(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Ir([r,s])),i.createHref({pathname:u,search:l,hash:o})}function jo(){return M.useContext(yc)!=null}function No(){return jo()||je(!1),M.useContext(yc).location}function p_(t){M.useContext(Zn).static||M.useLayoutEffect(t)}function m_(){let{isDataRoute:t}=M.useContext(Br);return t?uk():XS()}function XS(){jo()||je(!1);let t=M.useContext(gc),{basename:e,future:n,navigator:r}=M.useContext(Zn),{matches:i}=M.useContext(Br),{pathname:o}=No(),s=JSON.stringify(Wp(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return p_(()=>{l.current=!0}),M.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Gp(c,JSON.parse(s),o,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Ir([e,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[e,r,s,o,t])}function vc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Zn),{matches:i}=M.useContext(Br),{pathname:o}=No(),s=JSON.stringify(Wp(i,r.v7_relativeSplatPath));return M.useMemo(()=>Gp(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function JS(t,e){return ZS(t,e)}function ZS(t,e,n,r){jo()||je(!1);let{navigator:i}=M.useContext(Zn),{matches:o}=M.useContext(Br),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=No(),h;if(e){var m;let R=typeof e=="string"?Oo(e):e;u==="/"||(m=R.pathname)!=null&&m.startsWith(u)||je(!1),h=R}else h=c;let g=h.pathname||"/",b=g;if(u!=="/"){let R=u.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(R.length).join("/")}let I=AS(t,{pathname:b}),C=ik(I&&I.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:Ir([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:Ir([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),o,n,r);return e&&C?M.createElement(yc.Provider,{value:{location:ta({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:yr.Pop}},C):C}function ek(){let t=lk(),e=QS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const tk=M.createElement(ek,null);class nk extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Br.Provider,{value:this.props.routeContext},M.createElement(h_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rk(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(gc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Br.Provider,{value:e},r)}function ik(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);h>=0||je(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:b}=n,I=m.route.loader&&g[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||I){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,m,g)=>{let b,I=!1,C=null,R=null;n&&(b=l&&m.route.id?l[m.route.id]:void 0,C=m.route.errorElement||tk,u&&(c<0&&g===0?(I=!0,R=null):c===g&&(I=!0,R=m.route.hydrateFallbackElement||null)));let E=e.concat(s.slice(0,g+1)),v=()=>{let x;return b?x=C:I?x=R:m.route.Component?x=M.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=h,M.createElement(rk,{match:m,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?M.createElement(nk,{location:n.location,revalidation:n.revalidation,component:C,error:b,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var g_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(g_||{}),Iu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Iu||{});function ok(t){let e=M.useContext(gc);return e||je(!1),e}function sk(t){let e=M.useContext(d_);return e||je(!1),e}function ak(t){let e=M.useContext(Br);return e||je(!1),e}function y_(t){let e=ak(),n=e.matches[e.matches.length-1];return n.route.id||je(!1),n.route.id}function lk(){var t;let e=M.useContext(h_),n=sk(Iu.UseRouteError),r=y_(Iu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function uk(){let{router:t}=ok(g_.UseNavigateStable),e=y_(Iu.UseNavigateStable),n=M.useRef(!1);return p_(()=>{n.current=!0}),M.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ta({fromRouteId:e},o)))},[t,e])}function ck(t){let{to:e,replace:n,state:r,relative:i}=t;jo()||je(!1);let{future:o,static:s}=M.useContext(Zn),{matches:l}=M.useContext(Br),{pathname:u}=No(),c=m_(),h=Gp(e,Wp(l,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return M.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function tt(t){je(!1)}function fk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:o,static:s=!1,future:l}=t;jo()&&je(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:o,static:s,future:ta({v7_relativeSplatPath:!1},l)}),[u,l,o,s]);typeof r=="string"&&(r=Oo(r));let{pathname:h="/",search:m="",hash:g="",state:b=null,key:I="default"}=r,C=M.useMemo(()=>{let R=yo(h,u);return R==null?null:{location:{pathname:R,search:m,hash:g,state:b,key:I},navigationType:i}},[u,h,m,g,b,I,i]);return C==null?null:M.createElement(Zn.Provider,{value:c},M.createElement(yc.Provider,{children:n,value:C}))}function dk(t){let{children:e,location:n}=t;return JS(ih(e),n)}new Promise(()=>{});function ih(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let o=[...e,i];if(r.type===M.Fragment){n.push.apply(n,ih(r.props.children,o));return}r.type!==tt&&je(!1),!r.props.index||!r.props.children||je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ih(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Au(){return Au=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Au.apply(this,arguments)}function v_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pk(t,e){return t.button===0&&(!e||e==="_self")&&!hk(t)}const mk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],gk=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],yk="6";try{window.__reactRouterVersion=yk}catch{}const vk=M.createContext({isTransitioning:!1}),wk="startTransition",Ky=pb[wk];function _k(t){let{basename:e,children:n,future:r,window:i}=t,o=M.useRef();o.current==null&&(o.current=SS({window:i,v5Compat:!0}));let s=o.current,[l,u]=M.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},h=M.useCallback(m=>{c&&Ky?Ky(()=>u(m)):u(m)},[u,c]);return M.useLayoutEffect(()=>s.listen(h),[s,h]),M.createElement(fk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Ek=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bk=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:u,to:c,preventScrollReset:h,unstable_viewTransition:m}=e,g=v_(e,mk),{basename:b}=M.useContext(Zn),I,C=!1;if(typeof c=="string"&&xk.test(c)&&(I=c,Ek))try{let x=new URL(window.location.href),P=c.startsWith("//")?new URL(x.protocol+c):new URL(c),L=yo(P.pathname,b);P.origin===x.origin&&L!=null?c=L+P.search+P.hash:C=!0}catch{}let R=YS(c,{relative:i}),E=Sk(c,{replace:s,state:l,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:m});function v(x){r&&r(x),x.defaultPrevented||E(x)}return M.createElement("a",Au({},g,{href:I||R,onClick:C||o?r:v,ref:n,target:u}))}),dr=M.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:u,unstable_viewTransition:c,children:h}=e,m=v_(e,gk),g=vc(u,{relative:m.relative}),b=No(),I=M.useContext(d_),{navigator:C,basename:R}=M.useContext(Zn),E=I!=null&&kk(g)&&c===!0,v=C.encodeLocation?C.encodeLocation(g).pathname:g.pathname,x=b.pathname,P=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;i||(x=x.toLowerCase(),P=P?P.toLowerCase():null,v=v.toLowerCase()),P&&R&&(P=yo(P,R)||P);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let N=x===v||!s&&x.startsWith(v)&&x.charAt(L)==="/",_=P!=null&&(P===v||!s&&P.startsWith(v)&&P.charAt(v.length)==="/"),w={isActive:N,isPending:_,isTransitioning:E},T=N?r:void 0,S;typeof o=="function"?S=o(w):S=[o,N?"active":null,_?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(w):l;return M.createElement(bk,Au({},m,{"aria-current":T,className:S,ref:n,style:A,to:u,unstable_viewTransition:c}),typeof h=="function"?h(w):h)});var oh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(oh||(oh={}));var Yy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Yy||(Yy={}));function Tk(t){let e=M.useContext(gc);return e||je(!1),e}function Sk(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l}=e===void 0?{}:e,u=m_(),c=No(),h=vc(t,{relative:s});return M.useCallback(m=>{if(pk(m,n)){m.preventDefault();let g=r!==void 0?r:Su(c)===Su(h);u(t,{replace:g,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l})}},[c,u,h,r,i,n,t,o,s,l])}function kk(t,e){e===void 0&&(e={});let n=M.useContext(vk);n==null&&je(!1);let{basename:r}=Tk(oh.useViewTransitionState),i=vc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=yo(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=yo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ku(i.pathname,s)!=null||ku(i.pathname,o)!=null}var Ye=function(){return Ye=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ye.apply(this,arguments)};function na(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var we="-ms-",Ps="-moz-",ue="-webkit-",w_="comm",wc="rule",qp="decl",Ik="@import",__="@keyframes",Ak="@layer",E_=Math.abs,Qp=String.fromCharCode,sh=Object.assign;function Ck(t,e){return Qe(t,0)^45?(((e<<2^Qe(t,0))<<2^Qe(t,1))<<2^Qe(t,2))<<2^Qe(t,3):0}function x_(t){return t.trim()}function Vn(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function Bl(t,e,n){return t.indexOf(e,n)}function Qe(t,e){return t.charCodeAt(e)|0}function vo(t,e,n){return t.slice(e,n)}function _n(t){return t.length}function b_(t){return t.length}function ys(t,e){return e.push(t),t}function Pk(t,e){return t.map(e).join("")}function Xy(t,e){return t.filter(function(n){return!Vn(n,e)})}var _c=1,wo=1,T_=0,nn=0,ze=0,Do="";function Ec(t,e,n,r,i,o,s,l){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:_c,column:wo,length:s,return:"",siblings:l}}function ur(t,e){return sh(Ec("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ni(t){for(;t.root;)t=ur(t.root,{children:[t]});ys(t,t.siblings)}function Rk(){return ze}function Ok(){return ze=nn>0?Qe(Do,--nn):0,wo--,ze===10&&(wo=1,_c--),ze}function gn(){return ze=nn<T_?Qe(Do,nn++):0,wo++,ze===10&&(wo=1,_c++),ze}function li(){return Qe(Do,nn)}function Hl(){return nn}function xc(t,e){return vo(Do,t,e)}function ah(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jk(t){return _c=wo=1,T_=_n(Do=t),nn=0,[]}function Nk(t){return Do="",t}function $f(t){return x_(xc(nn-1,lh(t===91?t+2:t===40?t+1:t)))}function Dk(t){for(;(ze=li())&&ze<33;)gn();return ah(t)>2||ah(ze)>3?"":" "}function Lk(t,e){for(;--e&&gn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return xc(t,Hl()+(e<6&&li()==32&&gn()==32))}function lh(t){for(;gn();)switch(ze){case t:return nn;case 34:case 39:t!==34&&t!==39&&lh(ze);break;case 40:t===41&&lh(t);break;case 92:gn();break}return nn}function Mk(t,e){for(;gn()&&t+ze!==57;)if(t+ze===84&&li()===47)break;return"/*"+xc(e,nn-1)+"*"+Qp(t===47?t:gn())}function Vk(t){for(;!ah(li());)gn();return xc(t,nn)}function Fk(t){return Nk(Wl("",null,null,null,[""],t=jk(t),0,[0],t))}function Wl(t,e,n,r,i,o,s,l,u){for(var c=0,h=0,m=s,g=0,b=0,I=0,C=1,R=1,E=1,v=0,x="",P=i,L=o,N=r,_=x;R;)switch(I=v,v=gn()){case 40:if(I!=108&&Qe(_,m-1)==58){Bl(_+=Z($f(v),"&","&\f"),"&\f",E_(c?l[c-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:_+=$f(v);break;case 9:case 10:case 13:case 32:_+=Dk(I);break;case 92:_+=Lk(Hl()-1,7);continue;case 47:switch(li()){case 42:case 47:ys($k(Mk(gn(),Hl()),e,n,u),u);break;default:_+="/"}break;case 123*C:l[c++]=_n(_)*E;case 125*C:case 59:case 0:switch(v){case 0:case 125:R=0;case 59+h:E==-1&&(_=Z(_,/\f/g,"")),b>0&&_n(_)-m&&ys(b>32?Zy(_+";",r,n,m-1,u):Zy(Z(_," ","")+";",r,n,m-2,u),u);break;case 59:_+=";";default:if(ys(N=Jy(_,e,n,c,h,i,l,x,P=[],L=[],m,o),o),v===123)if(h===0)Wl(_,e,N,N,P,o,m,l,L);else switch(g===99&&Qe(_,3)===110?100:g){case 100:case 108:case 109:case 115:Wl(t,N,N,r&&ys(Jy(t,N,N,0,0,i,l,x,i,P=[],m,L),L),i,L,m,l,r?P:L);break;default:Wl(_,N,N,N,[""],L,0,l,L)}}c=h=b=0,C=E=1,x=_="",m=s;break;case 58:m=1+_n(_),b=I;default:if(C<1){if(v==123)--C;else if(v==125&&C++==0&&Ok()==125)continue}switch(_+=Qp(v),v*C){case 38:E=h>0?1:(_+="\f",-1);break;case 44:l[c++]=(_n(_)-1)*E,E=1;break;case 64:li()===45&&(_+=$f(gn())),g=li(),h=m=_n(x=_+=Vk(Hl())),v++;break;case 45:I===45&&_n(_)==2&&(C=0)}}return o}function Jy(t,e,n,r,i,o,s,l,u,c,h,m){for(var g=i-1,b=i===0?o:[""],I=b_(b),C=0,R=0,E=0;C<r;++C)for(var v=0,x=vo(t,g+1,g=E_(R=s[C])),P=t;v<I;++v)(P=x_(R>0?b[v]+" "+x:Z(x,/&\f/g,b[v])))&&(u[E++]=P);return Ec(t,e,n,i===0?wc:l,u,c,h,m)}function $k(t,e,n,r){return Ec(t,e,n,w_,Qp(Rk()),vo(t,2,-2),0,r)}function Zy(t,e,n,r,i){return Ec(t,e,n,qp,vo(t,0,r),vo(t,r+1,-1),r,i)}function S_(t,e,n){switch(Ck(t,e)){case 5103:return ue+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+t+t;case 4789:return Ps+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+t+Ps+t+we+t+t;case 5936:switch(Qe(t,e+11)){case 114:return ue+t+we+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ue+t+we+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ue+t+we+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ue+t+we+t+t;case 6165:return ue+t+we+"flex-"+t+t;case 5187:return ue+t+Z(t,/(\w+).+(:[^]+)/,ue+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return ue+t+we+"flex-item-"+Z(t,/flex-|-self/g,"")+(Vn(t,/flex-|baseline/)?"":we+"grid-row-"+Z(t,/flex-|-self/g,""))+t;case 4675:return ue+t+we+"flex-line-pack"+Z(t,/align-content|flex-|-self/g,"")+t;case 5548:return ue+t+we+Z(t,"shrink","negative")+t;case 5292:return ue+t+we+Z(t,"basis","preferred-size")+t;case 6060:return ue+"box-"+Z(t,"-grow","")+ue+t+we+Z(t,"grow","positive")+t;case 4554:return ue+Z(t,/([^-])(transform)/g,"$1"+ue+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+t+t;case 4200:if(!Vn(t,/flex-|baseline/))return we+"grid-column-align"+vo(t,e)+t;break;case 2592:case 3360:return we+Z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Vn(r.props,/grid-\w+-end/)})?~Bl(t+(n=n[e].value),"span",0)?t:we+Z(t,"-start","")+t+we+"grid-row-span:"+(~Bl(n,"span",0)?Vn(n,/\d+/):+Vn(n,/\d+/)-+Vn(t,/\d+/))+";":we+Z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Vn(r.props,/grid-\w+-start/)})?t:we+Z(Z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,ue+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(t)-1-e>6)switch(Qe(t,e+1)){case 109:if(Qe(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ps+(Qe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Bl(t,"stretch",0)?S_(Z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,u,c){return we+i+":"+o+c+(s?we+i+"-span:"+(l?u:+u-+o)+c:"")+t});case 4949:if(Qe(t,e+6)===121)return Z(t,":",":"+ue)+t;break;case 6444:switch(Qe(t,Qe(t,14)===45?18:11)){case 120:return Z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Qe(t,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+we+"$2box$3")+t;case 100:return Z(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(t,"scroll-","scroll-snap-")+t}return t}function Cu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function zk(t,e,n,r){switch(t.type){case Ak:if(t.children.length)break;case Ik:case qp:return t.return=t.return||t.value;case w_:return"";case __:return t.return=t.value+"{"+Cu(t.children,r)+"}";case wc:if(!_n(t.value=t.props.join(",")))return""}return _n(n=Cu(t.children,r))?t.return=t.value+"{"+n+"}":""}function Uk(t){var e=b_(t);return function(n,r,i,o){for(var s="",l=0;l<e;l++)s+=t[l](n,r,i,o)||"";return s}}function Bk(t){return function(e){e.root||(e=e.return)&&t(e)}}function Hk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case qp:t.return=S_(t.value,t.length,n);return;case __:return Cu([ur(t,{value:Z(t.value,"@","@"+ue)})],r);case wc:if(t.length)return Pk(n=t.props,function(i){switch(Vn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ni(ur(t,{props:[Z(i,/:(read-\w+)/,":"+Ps+"$1")]})),Ni(ur(t,{props:[i]})),sh(t,{props:Xy(n,r)});break;case"::placeholder":Ni(ur(t,{props:[Z(i,/:(plac\w+)/,":"+ue+"input-$1")]})),Ni(ur(t,{props:[Z(i,/:(plac\w+)/,":"+Ps+"$1")]})),Ni(ur(t,{props:[Z(i,/:(plac\w+)/,we+"input-$1")]})),Ni(ur(t,{props:[i]})),sh(t,{props:Xy(n,r)});break}return""})}}var Wk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vt={},_o=typeof process<"u"&&Vt!==void 0&&(Vt.REACT_APP_SC_ATTR||Vt.SC_ATTR)||"data-styled",k_="active",I_="data-styled-version",bc="6.1.12",Kp=`/*!sc*/
`,Pu=typeof window<"u"&&"HTMLElement"in window,Gk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==""?Vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.SC_DISABLE_SPEEDY!==void 0&&Vt.SC_DISABLE_SPEEDY!==""&&Vt.SC_DISABLE_SPEEDY!=="false"&&Vt.SC_DISABLE_SPEEDY),qk={},Tc=Object.freeze([]),Eo=Object.freeze({});function A_(t,e,n){return n===void 0&&(n=Eo),t.theme!==n.theme&&t.theme||e||n.theme}var C_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kk=/(^-|-$)/g;function ev(t){return t.replace(Qk,"-").replace(Kk,"")}var Yk=/(a)(d)/gi,vl=52,tv=function(t){return String.fromCharCode(t+(t>25?39:97))};function uh(t){var e,n="";for(e=Math.abs(t);e>vl;e=e/vl|0)n=tv(e%vl)+n;return(tv(e%vl)+n).replace(Yk,"$1-$2")}var zf,P_=5381,Yi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},R_=function(t){return Yi(P_,t)};function O_(t){return uh(R_(t)>>>0)}function Xk(t){return t.displayName||t.name||"Component"}function Uf(t){return typeof t=="string"&&!0}var j_=typeof Symbol=="function"&&Symbol.for,N_=j_?Symbol.for("react.memo"):60115,Jk=j_?Symbol.for("react.forward_ref"):60112,Zk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},D_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tI=((zf={})[Jk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zf[N_]=D_,zf);function nv(t){return("type"in(e=t)&&e.type.$$typeof)===N_?D_:"$$typeof"in t?tI[t.$$typeof]:Zk;var e}var nI=Object.defineProperty,rI=Object.getOwnPropertyNames,rv=Object.getOwnPropertySymbols,iI=Object.getOwnPropertyDescriptor,oI=Object.getPrototypeOf,iv=Object.prototype;function L_(t,e,n){if(typeof e!="string"){if(iv){var r=oI(e);r&&r!==iv&&L_(t,r,n)}var i=rI(e);rv&&(i=i.concat(rv(e)));for(var o=nv(t),s=nv(e),l=0;l<i.length;++l){var u=i[l];if(!(u in eI||n&&n[u]||s&&u in s||o&&u in o)){var c=iI(e,u);try{nI(t,u,c)}catch{}}}}return t}function wi(t){return typeof t=="function"}function Yp(t){return typeof t=="object"&&"styledComponentId"in t}function ii(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ch(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function ra(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function fh(t,e,n){if(n===void 0&&(n=!1),!n&&!ra(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=fh(t[r],e[r]);else if(ra(e))for(var r in e)t[r]=fh(t[r],e[r]);return t}function Xp(t,e){Object.defineProperty(t,"toString",{value:e})}function _i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var sI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw _i(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Kp);return n},t}(),Gl=new Map,Ru=new Map,ql=1,wl=function(t){if(Gl.has(t))return Gl.get(t);for(;Ru.has(ql);)ql++;var e=ql++;return Gl.set(t,e),Ru.set(e,t),e},aI=function(t,e){ql=e+1,Gl.set(t,e),Ru.set(e,t)},lI="style[".concat(_o,"][").concat(I_,'="').concat(bc,'"]'),uI=new RegExp("^".concat(_o,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cI=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},fI=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Kp),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var u=l.match(uI);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(aI(h,c),cI(t,h,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},ov=function(t){for(var e=document.querySelectorAll(lI),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(_o)!==k_&&(fI(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function dI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var M_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(_o,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(_o,k_),r.setAttribute(I_,bc);var s=dI();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},hI=function(){function t(e){this.element=M_(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw _i(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),pI=function(){function t(e){this.element=M_(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),mI=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),sv=Pu,gI={isServer:!Pu,useCSSOMInjection:!Gk},Ou=function(){function t(e,n,r){e===void 0&&(e=Eo),n===void 0&&(n={});var i=this;this.options=Ye(Ye({},gI),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Pu&&sv&&(sv=!1,ov(this)),Xp(this,function(){return function(o){for(var s=o.getTag(),l=s.length,u="",c=function(m){var g=function(E){return Ru.get(E)}(m);if(g===void 0)return"continue";var b=o.names.get(g),I=s.getGroup(m);if(b===void 0||!b.size||I.length===0)return"continue";var C="".concat(_o,".g").concat(m,'[id="').concat(g,'"]'),R="";b!==void 0&&b.forEach(function(E){E.length>0&&(R+="".concat(E,","))}),u+="".concat(I).concat(C,'{content:"').concat(R,'"}').concat(Kp)},h=0;h<l;h++)c(h);return u}(i)})}return t.registerId=function(e){return wl(e)},t.prototype.rehydrate=function(){!this.server&&Pu&&ov(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ye(Ye({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new mI(i):r?new hI(i):new pI(i)}(this.options),new sI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(wl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(wl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(wl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),yI=/&/g,vI=/^\s*\/\/.*$/gm;function V_(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=V_(n.children,e)),n})}function wI(t){var e,n,r,i=Eo,o=i.options,s=o===void 0?Eo:o,l=i.plugins,u=l===void 0?Tc:l,c=function(g,b,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):g},h=u.slice();h.push(function(g){g.type===wc&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(yI,n).replace(r,c))}),s.prefix&&h.push(Hk),h.push(zk);var m=function(g,b,I,C){b===void 0&&(b=""),I===void 0&&(I=""),C===void 0&&(C="&"),e=C,n=b,r=new RegExp("\\".concat(n,"\\b"),"g");var R=g.replace(vI,""),E=Fk(I||b?"".concat(I," ").concat(b," { ").concat(R," }"):R);s.namespace&&(E=V_(E,s.namespace));var v=[];return Cu(E,Uk(h.concat(Bk(function(x){return v.push(x)})))),v};return m.hash=u.length?u.reduce(function(g,b){return b.name||_i(15),Yi(g,b.name)},P_).toString():"",m}var _I=new Ou,dh=wI(),F_=de.createContext({shouldForwardProp:void 0,styleSheet:_I,stylis:dh});F_.Consumer;de.createContext(void 0);function hh(){return M.useContext(F_)}var EI=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=dh);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Xp(this,function(){throw _i(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=dh),this.name+e.hash},t}(),xI=function(t){return t>="A"&&t<="Z"};function av(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;xI(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var $_=function(t){return t==null||t===!1||t===""},z_=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!$_(o)&&(Array.isArray(o)&&o.isCss||wi(o)?r.push("".concat(av(i),":"),o,";"):ra(o)?r.push.apply(r,na(na(["".concat(i," {")],z_(o),!1),["}"],!1)):r.push("".concat(av(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Wk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ar(t,e,n,r){if($_(t))return[];if(Yp(t))return[".".concat(t.styledComponentId)];if(wi(t)){if(!wi(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Ar(i,e,n,r)}var o;return t instanceof EI?n?(t.inject(n,r),[t.getName(r)]):[t]:ra(t)?z_(t):Array.isArray(t)?Array.prototype.concat.apply(Tc,t.map(function(s){return Ar(s,e,n,r)})):[t.toString()]}function U_(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(wi(n)&&!Yp(n))return!1}return!0}var bI=R_(bc),TI=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&U_(e),this.componentId=n,this.baseHash=Yi(bI,n),this.baseStyle=r,Ou.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ii(i,this.staticRulesId);else{var o=ch(Ar(this.rules,e,n,r)),s=uh(Yi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=ii(i,s),this.staticRulesId=s}else{for(var u=Yi(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")c+=m;else if(m){var g=ch(Ar(m,e,n,r));u=Yi(u,g+h),c+=g}}if(c){var b=uh(u>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,r(c,".".concat(b),void 0,this.componentId)),i=ii(i,b)}}return i},t}(),ia=de.createContext(void 0);ia.Consumer;function SI(t){var e=de.useContext(ia),n=M.useMemo(function(){return function(r,i){if(!r)throw _i(14);if(wi(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw _i(8);return i?Ye(Ye({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?de.createElement(ia.Provider,{value:n},t.children):null}var Bf={};function kI(t,e,n){var r=Yp(t),i=t,o=!Uf(t),s=e.attrs,l=s===void 0?Tc:s,u=e.componentId,c=u===void 0?function(P,L){var N=typeof P!="string"?"sc":ev(P);Bf[N]=(Bf[N]||0)+1;var _="".concat(N,"-").concat(O_(bc+N+Bf[N]));return L?"".concat(L,"-").concat(_):_}(e.displayName,e.parentComponentId):u,h=e.displayName,m=h===void 0?function(P){return Uf(P)?"styled.".concat(P):"Styled(".concat(Xk(P),")")}(t):h,g=e.displayName&&e.componentId?"".concat(ev(e.displayName),"-").concat(e.componentId):e.componentId||c,b=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;I=function(P,L){return C(P,L)&&R(P,L)}}else I=C}var E=new TI(n,g,r?i.componentStyle:void 0);function v(P,L){return function(N,_,w){var T=N.attrs,S=N.componentStyle,A=N.defaultProps,O=N.foldedComponentIds,k=N.styledComponentId,Ze=N.target,rn=de.useContext(ia),Hr=hh(),Dt=N.shouldForwardProp||Hr.shouldForwardProp,U=A_(_,rn,A)||Eo,G=function(kt,wt,It){for(var Wr,On=Ye(Ye({},wt),{className:void 0,theme:It}),tr=0;tr<kt.length;tr+=1){var jn=wi(Wr=kt[tr])?Wr(On):Wr;for(var Kt in jn)On[Kt]=Kt==="className"?ii(On[Kt],jn[Kt]):Kt==="style"?Ye(Ye({},On[Kt]),jn[Kt]):jn[Kt]}return wt.className&&(On.className=ii(On.className,wt.className)),On}(T,_,U),X=G.as||Ze,ce={};for(var ne in G)G[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&G.theme===U||(ne==="forwardedAs"?ce.as=G.forwardedAs:Dt&&!Dt(ne,X)||(ce[ne]=G[ne]));var xe=function(kt,wt){var It=hh(),Wr=kt.generateAndInjectStyles(wt,It.styleSheet,It.stylis);return Wr}(S,G),Lt=ii(O,k);return xe&&(Lt+=" "+xe),G.className&&(Lt+=" "+G.className),ce[Uf(X)&&!C_.has(X)?"class":"className"]=Lt,ce.ref=w,M.createElement(X,ce)}(x,P,L)}v.displayName=m;var x=de.forwardRef(v);return x.attrs=b,x.componentStyle=E,x.displayName=m,x.shouldForwardProp=I,x.foldedComponentIds=r?ii(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=g,x.target=r?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(L){for(var N=[],_=1;_<arguments.length;_++)N[_-1]=arguments[_];for(var w=0,T=N;w<T.length;w++)fh(L,T[w],!0);return L}({},i.defaultProps,P):P}}),Xp(x,function(){return".".concat(x.styledComponentId)}),o&&L_(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function lv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var uv=function(t){return Object.assign(t,{isCss:!0})};function B_(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(wi(t)||ra(t))return uv(Ar(lv(Tc,na([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ar(r):uv(Ar(lv(r,e)))}function ph(t,e,n){if(n===void 0&&(n=Eo),!e)throw _i(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,B_.apply(void 0,na([i],o,!1)))};return r.attrs=function(i){return ph(t,e,Ye(Ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ph(t,e,Ye(Ye({},n),i))},r}var H_=function(t){return ph(kI,t)},Q=H_;C_.forEach(function(t){Q[t]=H_(t)});var II=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=U_(e),Ou.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var o=i(ch(Ar(this.rules,n,r,i)),""),s=this.componentId+e;r.insertRules(s,s,o)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Ou.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function AI(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=B_.apply(void 0,na([t],e,!1)),i="sc-global-".concat(O_(JSON.stringify(r))),o=new II(r,i),s=function(u){var c=hh(),h=de.useContext(ia),m=de.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(m,u,c.styleSheet,h,c.stylis),de.useLayoutEffect(function(){if(!c.styleSheet.server)return l(m,u,c.styleSheet,h,c.stylis),function(){return o.removeStyles(m,c.styleSheet)}},[m,u,c.styleSheet,h,c.stylis]),null};function l(u,c,h,m,g){if(o.isStatic)o.renderStyles(u,qk,h,g);else{var b=Ye(Ye({},c),{theme:A_(c,m,s.defaultProps)});o.renderStyles(u,b,h,g)}}return de.memo(s)}const CI=AI`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
  background-color:#FFFFFF;
}

body {
  overflow-x: hidden;
  scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
  background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
  background: #fff;
  border: 5px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

h1 {
  color: ${({theme:t})=>t.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
  color: ${({theme:t})=>t.colors.heading};
  font-size: 4.4rem;
  font-weight: 500;
  white-space: normal;
  text-align: center;
}

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({theme:t})=>t.colors.text};
  opacity: 0.7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight: 400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
}

.common-heading {
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
}

input, textarea {
  max-width: 50rem;
  color: ${({theme:t})=>t.colors.black};
  padding: 1.6rem 2.4rem;
  border: 1px solid ${({theme:t})=>t.colors.border};
  text-transform: uppercase;
  box-shadow: ${({theme:t})=>t.colors.shadowSupport};
}

input[type="submit"] {
  max-width: 16rem;
  margin-top: 2rem;
  background-color: ${({theme:t})=>t.colors.btn};
  color: ${({theme:t})=>t.colors.white};
  padding: 1.4rem 2.2rem;
  border-style: solid;
  border-width: 0.1rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: ${({theme:t})=>t.media.tab}) {
  .container {
    padding: 0 3.2rem;
  }

  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: ${({theme:t})=>t.media.mobile}) {
  html {
    font-size: 50%;
  }

  .grid {
    gap: 3.2rem;
  }

  .grid-two-column, .grid-three-column, .grid-four-column {
    grid-template-columns: 1fr;
  }
}
`;var W_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cv=de.createContext&&de.createContext(W_),PI=["attr","size","title"];function RI(t,e){if(t==null)return{};var n=OI(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function OI(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function ju(){return ju=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ju.apply(this,arguments)}function fv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Nu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fv(Object(n),!0).forEach(function(r){jI(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jI(t,e,n){return e=NI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function NI(t){var e=DI(t,"string");return typeof e=="symbol"?e:e+""}function DI(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function G_(t){return t&&t.map((e,n)=>de.createElement(e.tag,Nu({key:n},e.attr),G_(e.child)))}function ba(t){return e=>de.createElement(LI,ju({attr:Nu({},t.attr)},e),G_(t.child))}function LI(t){var e=n=>{var{attr:r,size:i,title:o}=t,s=RI(t,PI),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),de.createElement("svg",ju({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:Nu(Nu({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&de.createElement("title",null,o),t.children)};return cv!==void 0?de.createElement(cv.Consumer,null,n=>e(n)):e(W_)}function MI(t){return ba({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z",fill:"currentColor"},child:[]}]})(t)}function VI(t){return ba({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z",fill:"currentColor"},child:[]}]})(t)}const FI=()=>{const[t,e]=M.useState(!1);return d.jsx($I,{role:"navigation","aria-label":"Main Navigation",children:d.jsxs("div",{className:"menuIcon",children:[d.jsx("div",{className:"mobile-navbar-btn","aria-label":t?"Close menu":"Open menu","aria-expanded":t,onClick:()=>e(!t),children:t?d.jsx(MI,{className:"mobile-nav-icon close-icon","aria-hidden":"true"}):d.jsx(VI,{className:"mobile-nav-icon","aria-hidden":"true"})}),d.jsxs("ul",{className:`navbar-list ${t?"active":""}`,role:"menubar",children:[d.jsx("li",{role:"none",children:d.jsx(dr,{className:"navbar-link",onClick:()=>e(!1),to:"/",role:"menuitem","aria-label":"Home",children:"Home"})}),d.jsx("li",{role:"none",children:d.jsx(dr,{className:"navbar-link",onClick:()=>e(!1),to:"/about",role:"menuitem","aria-label":"About Us",children:"About"})}),d.jsx("li",{role:"none",children:d.jsx(dr,{className:"navbar-link",onClick:()=>e(!1),to:"/testimonial",role:"menuitem","aria-label":"Testimonials",children:"Testimonials"})}),d.jsx("li",{role:"none",children:d.jsx(dr,{className:"navbar-link",onClick:()=>e(!1),to:"/contact",role:"menuitem","aria-label":"Contact Us",children:"Contact"})}),d.jsx("li",{role:"none",children:d.jsx(dr,{className:"navbar-link",onClick:()=>e(!1),to:"/blog",role:"menuitem","aria-label":"Contact Us",children:"Blogs"})}),d.jsx("li",{role:"none",children:d.jsx(dr,{className:"navbar-link",onClick:()=>e(!1),to:"/FAQ",role:"menuitem","aria-label":"Frequently Asked Questions",children:"FAQ"})})]})]})})},$I=Q.nav`
  .menuIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(37,37,37,255);
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }

  .navbar-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li {
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 2rem;
          text-transform: uppercase;
          color: #febb12;
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: #e9e12b;
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .mobile-nav-icon {
      font-size: 4rem; /* Adjusted size */
      cursor: pointer;
      color: #febb12; /* Set icon color to yellow */
      transition: color 0.3s ease;
    }

    .close-icon {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 10001; /* Ensure the close icon is above other elements */
    }
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
      color: #FDD788;
    }

    .navbar-list {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #252525;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 0;
      margin: 0;
      transform: translateX(100%);
      opacity: 0;
      visibility: hidden;
      transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
    }

    .navbar-list.active {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
      z-index: 9999;
      background-color: #252525;
      font-size: 5rem;
    }

    .menuIcon {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-navbar-btn .mobile-nav-icon {
      display: block;
    }
  }
`,zI=()=>d.jsxs(UI,{children:[d.jsx(dr,{to:"/",children:d.jsxs(BI,{children:[d.jsx(HI,{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/logo1_rzt9qj.png",alt:"Logo"}),d.jsxs(WI,{children:[d.jsx(GI,{children:"STOCK"}),d.jsx(QI,{}),d.jsx(qI,{children:"ARCHERY"})]})]})}),d.jsx(FI,{})]}),UI=Q.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: rgba(37, 37, 37, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    padding: 0 1.6rem; /* Reduce padding on mobile */
  }
`,BI=Q.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    margin-left: 0; /* Ensure no margin on mobile */
  }
`,HI=Q.img`
  width: 50px; /* Increase size if needed */
  height: 50px; /* Increase size if needed */
  border-radius: 50%; /* Ensure it’s perfectly round */
  margin-right: 0.5rem; /* Space between logo and text */
  object-fit: cover; /* Ensure the image covers the circle properly */
  
  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    width: 50px; /* Adjust size on mobile if needed */
    height: 50px; /* Adjust size on mobile if needed */
    margin-right: 0.5rem; /* Reduce space on mobile */
  }
`,WI=Q.div`
  font-size: 3rem; /* Adjust size as needed */
  font-weight: bold; /* You can choose the desired font weight */
  display: flex;
  align-items: center;
  text-decoration: none;

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    margin-left: 1.5rem; /* Move text to the right on mobile */
  }
`,GI=Q.span`
  color: #fff; /* White color */
`,qI=Q.span`
  color: #febb12; /* Yellow color */
`,QI=Q.span`
  margin-left: 0.5rem; /* Adjust the spacing as needed */
`,dv=()=>{};let Jp={},q_={},Q_=null,K_={mark:dv,measure:dv};try{typeof window<"u"&&(Jp=window),typeof document<"u"&&(q_=document),typeof MutationObserver<"u"&&(Q_=MutationObserver),typeof performance<"u"&&(K_=performance)}catch{}const{userAgent:hv=""}=Jp.navigator||{},Nr=Jp,Ee=q_,pv=Q_,_l=K_;Nr.document;const er=!!Ee.documentElement&&!!Ee.head&&typeof Ee.addEventListener=="function"&&typeof Ee.createElement=="function",Y_=~hv.indexOf("MSIE")||~hv.indexOf("Trident/");var Ie="classic",X_="duotone",Bt="sharp",Ht="sharp-duotone",KI=[Ie,X_,Bt,Ht],YI={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},mv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},XI=["kit"],JI=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,ZI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,eA={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},tA={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},nA={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},rA={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},iA={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},oA={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},J_={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},sA=["solid","regular","light","thin","duotone","brands"],Z_=[1,2,3,4,5,6,7,8,9,10],aA=Z_.concat([11,12,13,14,15,16,17,18,19,20]),vs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lA=[...Object.keys(rA),...sA,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vs.GROUP,vs.SWAP_OPACITY,vs.PRIMARY,vs.SECONDARY].concat(Z_.map(t=>"".concat(t,"x"))).concat(aA.map(t=>"w-".concat(t))),uA={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},cA={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},fA={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},gv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Kn="___FONT_AWESOME___",mh=16,e2="fa",t2="svg-inline--fa",Ei="data-fa-i2svg",gh="data-fa-pseudo-element",dA="data-fa-pseudo-element-pending",Zp="data-prefix",em="data-icon",yv="fontawesome-i2svg",hA="async",pA=["HTML","HEAD","STYLE","SCRIPT"],n2=(()=>{try{return!0}catch{return!1}})(),r2=[Ie,Bt,Ht];function Ta(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ie]}})}const i2={...J_};i2[Ie]={...J_[Ie],...mv.kit,...mv["kit-duotone"]};const ui=Ta(i2),yh={...oA};yh[Ie]={...yh[Ie],...gv.kit,...gv["kit-duotone"]};const oa=Ta(yh),vh={...iA};vh[Ie]={...vh[Ie],...fA.kit};const ci=Ta(vh),wh={...nA};wh[Ie]={...wh[Ie],...cA.kit};const mA=Ta(wh),gA=JI,o2="fa-layers-text",yA=ZI,vA={...YI};Ta(vA);const wA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hf=vs,xo=new Set;Object.keys(oa[Ie]).map(xo.add.bind(xo));Object.keys(oa[Bt]).map(xo.add.bind(xo));Object.keys(oa[Ht]).map(xo.add.bind(xo));const _A=[...XI,...lA],Rs=Nr.FontAwesomeConfig||{};function EA(t){var e=Ee.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xA(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ee&&typeof Ee.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=xA(EA(n));i!=null&&(Rs[r]=i)});const s2={styleDefault:"solid",familyDefault:"classic",cssPrefix:e2,replacementClass:t2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rs.familyPrefix&&(Rs.cssPrefix=Rs.familyPrefix);const bo={...s2,...Rs};bo.autoReplaceSvg||(bo.observeMutations=!1);const H={};Object.keys(s2).forEach(t=>{Object.defineProperty(H,t,{enumerable:!0,set:function(e){bo[t]=e,Os.forEach(n=>n(H))},get:function(){return bo[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(t){bo.cssPrefix=t,Os.forEach(e=>e(H))},get:function(){return bo.cssPrefix}});Nr.FontAwesomeConfig=H;const Os=[];function bA(t){return Os.push(t),()=>{Os.splice(Os.indexOf(t),1)}}const sr=mh,Tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function TA(t){if(!t||!er)return;const e=Ee.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Ee.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Ee.head.insertBefore(e,r),t}const SA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sa(){let t=12,e="";for(;t-- >0;)e+=SA[Math.random()*62|0];return e}function Lo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function tm(t){return t.classList?Lo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function a2(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kA(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(a2(t[n]),'" '),"").trim()}function Sc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function nm(t){return t.size!==Tn.size||t.x!==Tn.x||t.y!==Tn.y||t.rotate!==Tn.rotate||t.flipX||t.flipY}function IA(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function AA(t){let{transform:e,width:n=mh,height:r=mh,startCentered:i=!1}=t,o="";return i&&Y_?o+="translate(".concat(e.x/sr-n/2,"em, ").concat(e.y/sr-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/sr,"em), calc(-50% + ").concat(e.y/sr,"em)) "):o+="translate(".concat(e.x/sr,"em, ").concat(e.y/sr,"em) "),o+="scale(".concat(e.size/sr*(e.flipX?-1:1),", ").concat(e.size/sr*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var CA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function l2(){const t=e2,e=t2,n=H.cssPrefix,r=H.replacementClass;let i=CA;if(n!==t||r!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let vv=!1;function Wf(){H.autoAddCss&&!vv&&(TA(l2()),vv=!0)}var PA={mixout(){return{dom:{css:l2,insertCss:Wf}}},hooks(){return{beforeDOMElementCreation(){Wf()},beforeI2svg(){Wf()}}}};const Yn=Nr||{};Yn[Kn]||(Yn[Kn]={});Yn[Kn].styles||(Yn[Kn].styles={});Yn[Kn].hooks||(Yn[Kn].hooks={});Yn[Kn].shims||(Yn[Kn].shims=[]);var Sn=Yn[Kn];const u2=[],c2=function(){Ee.removeEventListener("DOMContentLoaded",c2),Du=1,u2.map(t=>t())};let Du=!1;er&&(Du=(Ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ee.readyState),Du||Ee.addEventListener("DOMContentLoaded",c2));function RA(t){er&&(Du?setTimeout(t,0):u2.push(t))}function Sa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?a2(t):"<".concat(e," ").concat(kA(n),">").concat(r.map(Sa).join(""),"</").concat(e,">")}function wv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Gf=function(e,n,r,i){var o=Object.keys(e),s=o.length,l=n,u,c,h;for(r===void 0?(u=1,h=e[o[0]]):(u=0,h=r);u<s;u++)c=o[u],h=l(h,e[c],c,e);return h};function OA(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function _h(t){const e=OA(t);return e.length===1?e[0].toString(16):null}function jA(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function _v(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Eh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=_v(e);typeof Sn.hooks.addPack=="function"&&!r?Sn.hooks.addPack(t,_v(e)):Sn.styles[t]={...Sn.styles[t]||{},...i},t==="fas"&&Eh("fa",e)}const{styles:ei,shims:NA}=Sn,DA={[Ie]:Object.values(ci[Ie]),[Bt]:Object.values(ci[Bt]),[Ht]:Object.values(ci[Ht])};let rm=null,f2={},d2={},h2={},p2={},m2={};const LA={[Ie]:Object.keys(ui[Ie]),[Bt]:Object.keys(ui[Bt]),[Ht]:Object.keys(ui[Ht])};function MA(t){return~_A.indexOf(t)}function VA(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!MA(i)?i:null}const g2=()=>{const t=r=>Gf(ei,(i,o,s)=>(i[s]=Gf(o,r,{}),i),{});f2=t((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),d2=t((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),m2=t((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(l=>{r[l]=o}),r});const e="far"in ei||H.autoFetchSvg,n=Gf(NA,(r,i)=>{const o=i[0];let s=i[1];const l=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});h2=n.names,p2=n.unicodes,rm=kc(H.styleDefault,{family:H.familyDefault})};bA(t=>{rm=kc(t.styleDefault,{family:H.familyDefault})});g2();function im(t,e){return(f2[t]||{})[e]}function FA(t,e){return(d2[t]||{})[e]}function vr(t,e){return(m2[t]||{})[e]}function y2(t){return h2[t]||{prefix:null,iconName:null}}function $A(t){const e=p2[t],n=im("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return rm}const om=()=>({prefix:null,iconName:null,rest:[]});function kc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ie}=e,r=ui[n][t],i=oa[n][t]||oa[n][r],o=t in Sn.styles?t:null;return i||o||null}const zA={[Ie]:Object.keys(ci[Ie]),[Bt]:Object.keys(ci[Bt]),[Ht]:Object.keys(ci[Ht])};function Ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ie]:"".concat(H.cssPrefix,"-").concat(Ie),[Bt]:"".concat(H.cssPrefix,"-").concat(Bt),[Ht]:"".concat(H.cssPrefix,"-").concat(Ht)};let i=null,o=Ie;const s=KI.filter(u=>u!==X_);s.forEach(u=>{(t.includes(r[u])||t.some(c=>zA[u].includes(c)))&&(o=u)});const l=t.reduce((u,c)=>{const h=VA(H.cssPrefix,c);if(ei[c]?(c=DA[o].includes(c)?mA[o][c]:c,i=c,u.prefix=c):LA[o].indexOf(c)>-1?(i=c,u.prefix=kc(c,{family:o})):h?u.iconName=h:c!==H.replacementClass&&!s.some(m=>c===r[m])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const m=i==="fa"?y2(u.iconName):{},g=vr(u.prefix,u.iconName);m.prefix&&(i=null),u.iconName=m.iconName||g||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!ei.far&&ei.fas&&!H.autoFetchSvg&&(u.prefix="fas")}return u},om());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Bt&&(ei.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=vr(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===Ht&&(ei.fasds||H.autoFetchSvg)&&(l.prefix="fasds",l.iconName=vr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Dr()||"fas"),l}class UA{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},Eh(o,i[o]);const s=ci[Ie][o];s&&Eh(s,i[o]),g2()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:l}=r[i],u=l[2];e[o]||(e[o]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[o][c]=l)}),e[o][s]=l}),e}}let Ev=[],Xi={};const oo={},BA=Object.keys(oo);function HA(t,e){let{mixoutsTo:n}=e;return Ev=t,Xi={},Object.keys(oo).forEach(r=>{BA.indexOf(r)===-1&&delete oo[r]}),Ev.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{Xi[s]||(Xi[s]=[]),Xi[s].push(o[s])})}r.provides&&r.provides(oo)}),n}function xh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Xi[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function xi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Xi[t]||[]).forEach(o=>{o.apply(null,n)})}function Lr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return oo[t]?oo[t].apply(null,e):void 0}function bh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Dr();if(e)return e=vr(n,e)||e,wv(v2.definitions,n,e)||wv(Sn.styles,n,e)}const v2=new UA,WA=()=>{H.autoReplaceSvg=!1,H.observeMutations=!1,xi("noAuto")},GA={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return er?(xi("beforeI2svg",t),Lr("pseudoElements2svg",t),Lr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,RA(()=>{QA({autoReplaceSvgRoot:e}),xi("watch",t)})}},qA={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=kc(t[0]);return{prefix:n,iconName:vr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(H.cssPrefix,"-"))>-1||t.match(gA))){const e=Ic(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Dr(),iconName:vr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Dr();return{prefix:e,iconName:vr(e,t)||t}}}},Qt={noAuto:WA,config:H,dom:GA,parse:qA,library:v2,findIconDefinition:bh,toHtml:Sa},QA=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Ee}=t;(Object.keys(Sn.styles).length>0||H.autoFetchSvg)&&er&&H.autoReplaceSvg&&Qt.dom.i2svg({node:e})};function Ac(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Sa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!er)return;const n=Ee.createElement("div");return n.innerHTML=t.html,n.children}}),t}function KA(t){let{children:e,main:n,mask:r,attributes:i,styles:o,transform:s}=t;if(nm(s)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=Sc({...o,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function YA(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function sm(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:l,maskId:u,titleId:c,extra:h,watchable:m=!1}=t,{width:g,height:b}=n.found?n:e,I=r==="fak",C=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(L=>h.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(h.classes).join(" ");let R={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":i,class:C,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)}};const E=I&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/b*16*.0625,"em")}:{};m&&(R.attributes[Ei]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||sa())},children:[l]}),delete R.attributes.title);const v={...R,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:o,symbol:s,styles:{...E,...h.styles}},{children:x,attributes:P}=n.found&&e.found?Lr("generateAbstractMask",v)||{children:[],attributes:{}}:Lr("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=x,v.attributes=P,s?YA(v):KA(v)}function xv(t){const{content:e,width:n,height:r,transform:i,title:o,extra:s,watchable:l=!1}=t,u={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};l&&(u[Ei]="");const c={...s.styles};nm(i)&&(c.transform=AA({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=Sc(c);h.length>0&&(u.style=h);const m=[];return m.push({tag:"span",attributes:u,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function XA(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Sc(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:qf}=Sn;function Th(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Hf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Hf.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Hf.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const JA={found:!1,width:512,height:512};function ZA(t,e){!n2&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Sh(t,e){let n=e;return e==="fa"&&H.styleDefault!==null&&(e=Dr()),new Promise((r,i)=>{if(n==="fa"){const o=y2(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&qf[e]&&qf[e][t]){const o=qf[e][t];return r(Th(o))}ZA(t,e),r({...JA,icon:H.showMissingIcons&&t?Lr("missingIconAbstract")||{}:{}})})}const bv=()=>{},kh=H.measurePerformance&&_l&&_l.mark&&_l.measure?_l:{mark:bv,measure:bv},ws='FA "6.6.0"',eC=t=>(kh.mark("".concat(ws," ").concat(t," begins")),()=>w2(t)),w2=t=>{kh.mark("".concat(ws," ").concat(t," ends")),kh.measure("".concat(ws," ").concat(t),"".concat(ws," ").concat(t," begins"),"".concat(ws," ").concat(t," ends"))};var am={begin:eC,end:w2};const Ql=()=>{};function Tv(t){return typeof(t.getAttribute?t.getAttribute(Ei):null)=="string"}function tC(t){const e=t.getAttribute?t.getAttribute(Zp):null,n=t.getAttribute?t.getAttribute(em):null;return e&&n}function nC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function rC(){return H.autoReplaceSvg===!0?Kl.replace:Kl[H.autoReplaceSvg]||Kl.replace}function iC(t){return Ee.createElementNS("http://www.w3.org/2000/svg",t)}function oC(t){return Ee.createElement(t)}function _2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?iC:oC}=e;if(typeof t=="string")return Ee.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(_2(o,{ceFn:n}))}),r}function sC(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Kl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(_2(n),e)}),e.getAttribute(Ei)===null&&H.keepOriginalSource){let n=Ee.createComment(sC(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~tm(e).indexOf(H.replacementClass))return Kl.replace(t);const r=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===H.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Sa(o)).join(`
`);e.setAttribute(Ei,""),e.innerHTML=i}};function Sv(t){t()}function E2(t,e){const n=typeof e=="function"?e:Ql;if(t.length===0)n();else{let r=Sv;H.mutateApproach===hA&&(r=Nr.requestAnimationFrame||Sv),r(()=>{const i=rC(),o=am.begin("mutate");t.map(i),o(),n()})}}let lm=!1;function x2(){lm=!0}function Ih(){lm=!1}let Lu=null;function kv(t){if(!pv||!H.observeMutations)return;const{treeCallback:e=Ql,nodeCallback:n=Ql,pseudoElementsCallback:r=Ql,observeMutationsRoot:i=Ee}=t;Lu=new pv(o=>{if(lm)return;const s=Dr();Lo(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Tv(l.addedNodes[0])&&(H.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&H.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Tv(l.target)&&~wA.indexOf(l.attributeName))if(l.attributeName==="class"&&tC(l.target)){const{prefix:u,iconName:c}=Ic(tm(l.target));l.target.setAttribute(Zp,u||s),c&&l.target.setAttribute(em,c)}else nC(l.target)&&n(l.target)})}),er&&Lu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function aC(){Lu&&Lu.disconnect()}function lC(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function uC(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Ic(tm(t));return i.prefix||(i.prefix=Dr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=FA(i.prefix,t.innerText)||im(i.prefix,_h(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function cC(t){const e=Lo(t.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||sa()):(e["aria-hidden"]="true",e.focusable="false")),e}function fC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Iv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=uC(t),o=cC(t),s=xh("parseNodeAttributes",{},t);let l=e.styleParser?lC(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o},...s}}const{styles:dC}=Sn;function b2(t){const e=H.autoReplaceSvg==="nest"?Iv(t,{styleParser:!1}):Iv(t);return~e.extra.classes.indexOf(o2)?Lr("generateLayersText",t,e):Lr("generateSvgReplacementMutation",t,e)}let An=new Set;r2.map(t=>{An.add("fa-".concat(t))});Object.keys(ui[Ie]).map(An.add.bind(An));Object.keys(ui[Bt]).map(An.add.bind(An));Object.keys(ui[Ht]).map(An.add.bind(An));An=[...An];function Av(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!er)return Promise.resolve();const n=Ee.documentElement.classList,r=h=>n.add("".concat(yv,"-").concat(h)),i=h=>n.remove("".concat(yv,"-").concat(h)),o=H.autoFetchSvg?An:r2.map(h=>"fa-".concat(h)).concat(Object.keys(dC));o.includes("fa")||o.push("fa");const s=[".".concat(o2,":not([").concat(Ei,"])")].concat(o.map(h=>".".concat(h,":not([").concat(Ei,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=Lo(t.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=am.begin("onTree"),c=l.reduce((h,m)=>{try{const g=b2(m);g&&h.push(g)}catch(g){n2||g.name==="MissingIcon"&&console.error(g)}return h},[]);return new Promise((h,m)=>{Promise.all(c).then(g=>{E2(g,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(g=>{u(),m(g)})})}function hC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;b2(t).then(n=>{n&&E2([n],e)})}function pC(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:bh(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:bh(i||{})),t(r,{...n,mask:i})}}const mC=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Tn,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:l=null,classes:u=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:m,iconName:g,icon:b}=t;return Ac({type:"icon",...t},()=>(xi("beforeDOMElementCreation",{iconDefinition:t,params:e}),H.autoA11y&&(s?c["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(l||sa()):(c["aria-hidden"]="true",c.focusable="false")),sm({icons:{main:Th(b),mask:i?Th(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:g,transform:{...Tn,...n},symbol:r,title:s,maskId:o,titleId:l,extra:{attributes:c,styles:h,classes:u}})))};var gC={mixout(){return{icon:pC(mC)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Av,t.nodeCallback=hC,t}}},provides(t){t.i2svg=function(e){const{node:n=Ee,callback:r=()=>{}}=e;return Av(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:l,symbol:u,mask:c,maskId:h,extra:m}=n;return new Promise((g,b)=>{Promise.all([Sh(r,s),c.iconName?Sh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[C,R]=I;g([e,sm({icons:{main:C,mask:R},prefix:s,iconName:r,transform:l,symbol:u,maskId:h,title:i,titleId:o,extra:m,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:o,styles:s}=e;const l=Sc(s);l.length>0&&(r.style=l);let u;return nm(o)&&(u=Lr("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},yC={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ac({type:"layer"},()=>{xi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},vC={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=e;return Ac({type:"counter",content:t},()=>(xi("beforeDOMElementCreation",{content:t,params:e}),XA({content:t.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(H.cssPrefix,"-layers-counter"),...r]}})))}}}},wC={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Tn,title:r=null,classes:i=[],attributes:o={},styles:s={}}=e;return Ac({type:"text",content:t},()=>(xi("beforeDOMElementCreation",{content:t,params:e}),xv({content:t,transform:{...Tn,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(H.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:o}=n;let s=null,l=null;if(Y_){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/u,l=c.height/u}return H.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,xv({content:e.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}};const _C=new RegExp('"',"ug"),Cv=[1105920,1112319],Pv={FontAwesome:{normal:"fas",400:"fas"},...tA,...eA,...uA},Ah=Object.keys(Pv).reduce((t,e)=>(t[e.toLowerCase()]=Pv[e],t),{}),EC=Object.keys(Ah).reduce((t,e)=>{const n=Ah[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function xC(t){const e=t.replace(_C,""),n=jA(e,0),r=n>=Cv[0]&&n<=Cv[1],i=e.length===2?e[0]===e[1]:!1;return{value:_h(i?e[0]:e),isSecondary:r||i}}function bC(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Ah[n]||{})[i]||EC[n]}function Rv(t,e){const n="".concat(dA).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const s=Lo(t.children).filter(g=>g.getAttribute(gh)===e)[0],l=Nr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(yA),h=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),r();if(c&&m!=="none"&&m!==""){const g=l.getPropertyValue("content");let b=bC(u,h);const{value:I,isSecondary:C}=xC(g),R=c[0].startsWith("FontAwesome");let E=im(b,I),v=E;if(R){const x=$A(I);x.iconName&&x.prefix&&(E=x.iconName,b=x.prefix)}if(E&&!C&&(!s||s.getAttribute(Zp)!==b||s.getAttribute(em)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const x=fC(),{extra:P}=x;P.attributes[gh]=e,Sh(E,b).then(L=>{const N=sm({...x,icons:{main:L,mask:om()},prefix:b,iconName:v,extra:P,watchable:!0}),_=Ee.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_,t.firstChild):t.appendChild(_),_.outerHTML=N.map(w=>Sa(w)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function TC(t){return Promise.all([Rv(t,"::before"),Rv(t,"::after")])}function SC(t){return t.parentNode!==document.head&&!~pA.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(gh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ov(t){if(er)return new Promise((e,n)=>{const r=Lo(t.querySelectorAll("*")).filter(SC).map(TC),i=am.begin("searchPseudoElements");x2(),Promise.all(r).then(()=>{i(),Ih(),e()}).catch(()=>{i(),Ih(),n()})})}var kC={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ov,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Ee}=e;H.searchPseudoElements&&Ov(n)}}};let jv=!1;var IC={mixout(){return{dom:{unwatch(){x2(),jv=!0}}}},hooks(){return{bootstrap(){kv(xh("mutationObserverCallbacks",{}))},noAuto(){aC()},watch(t){const{observeMutationsRoot:e}=t;jv?Ih():kv(xh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Nv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var AC={mixout(){return{parse:{transform:t=>Nv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Nv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:o}=e;const s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:h,path:m};return{tag:"g",attributes:{...g.outer},children:[{tag:"g",attributes:{...g.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...g.path}}]}]}}}};const Qf={x:0,y:0,width:"100%",height:"100%"};function Dv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function CC(t){return t.tag==="g"?t.children:[t]}var PC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ic(n.split(" ").map(i=>i.trim())):om();return r.prefix||(r.prefix=Dr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:l}=e;const{width:u,icon:c}=i,{width:h,icon:m}=o,g=IA({transform:l,containerWidth:h,iconWidth:u}),b={tag:"rect",attributes:{...Qf,fill:"white"}},I=c.children?{children:c.children.map(Dv)}:{},C={tag:"g",attributes:{...g.inner},children:[Dv({tag:c.tag,attributes:{...c.attributes,...g.path},...I})]},R={tag:"g",attributes:{...g.outer},children:[C]},E="mask-".concat(s||sa()),v="clip-".concat(s||sa()),x={tag:"mask",attributes:{...Qf,id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,R]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:CC(m)},x]};return n.push(P,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(E,")"),...Qf}}),{children:n,attributes:r}}}},RC={provides(t){let e=!1;Nr.matchMedia&&(e=Nr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},OC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},jC=[PA,gC,yC,vC,wC,kC,IC,AC,PC,RC,OC];HA(jC,{mixoutsTo:Qt});Qt.noAuto;Qt.config;Qt.library;Qt.dom;const Ch=Qt.parse;Qt.findIconDefinition;Qt.toHtml;const NC=Qt.icon;Qt.layer;Qt.text;Qt.counter;var T2={exports:{}},DC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",LC=DC,MC=LC;function S2(){}function k2(){}k2.resetWarningCache=S2;var VC=function(){function t(r,i,o,s,l,u){if(u!==MC){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:k2,resetWarningCache:S2};return n.PropTypes=n,n};T2.exports=VC();var ka=T2.exports;const W=ya(ka);function Lv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function En(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Lv(Object(n),!0).forEach(function(r){Ji(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mu(t){"@babel/helpers - typeof";return Mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mu(t)}function Ji(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function FC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $C(t,e){if(t==null)return{};var n=FC(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Ph(t){return zC(t)||UC(t)||BC(t)||HC()}function zC(t){if(Array.isArray(t))return Rh(t)}function UC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function BC(t,e){if(t){if(typeof t=="string")return Rh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rh(t,e)}}function Rh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function HC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WC(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,h=t.spinReverse,m=t.pulse,g=t.fixedWidth,b=t.inverse,I=t.border,C=t.listItem,R=t.flip,E=t.size,v=t.rotation,x=t.pull,P=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":g,"fa-inverse":b,"fa-border":I,"fa-li":C,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},Ji(e,"fa-".concat(E),typeof E<"u"&&E!==null),Ji(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Ji(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),Ji(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(P).map(function(L){return P[L]?L:null}).filter(function(L){return L})}function GC(t){return t=t-0,t===t}function I2(t){return GC(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var qC=["style"];function QC(t){return t.charAt(0).toUpperCase()+t.slice(1)}function KC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=I2(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[QC(i)]=o:e[i]=o,e},{})}function A2(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return A2(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var h=e.attributes[c];switch(c){case"class":u.attrs.className=h,delete e.attributes.class;break;case"style":u.attrs.style=KC(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=h:u.attrs[I2(c)]=h}return u},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=$C(n,qC);return i.attrs.style=En(En({},i.attrs.style),s),t.apply(void 0,[e.tag,En(En({},i.attrs),l)].concat(Ph(r)))}var C2=!1;try{C2=!0}catch{}function YC(){if(!C2&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Mv(t){if(t&&Mu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ch.icon)return Ch.icon(t);if(t===null)return null;if(t&&Mu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Kf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ji({},t,e):{}}var Vv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},$t=de.forwardRef(function(t,e){var n=En(En({},Vv),t),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,u=n.titleId,c=n.maskId,h=Mv(r),m=Kf("classes",[].concat(Ph(WC(n)),Ph((s||"").split(" ")))),g=Kf("transform",typeof n.transform=="string"?Ch.transform(n.transform):n.transform),b=Kf("mask",Mv(i)),I=NC(h,En(En(En(En({},m),g),b),{},{symbol:o,title:l,titleId:u,maskId:c}));if(!I)return YC("Could not find icon",h),null;var C=I.abstract,R={ref:e};return Object.keys(n).forEach(function(E){Vv.hasOwnProperty(E)||(R[E]=n[E])}),XC(C[0],R)});$t.displayName="FontAwesomeIcon";$t.propTypes={beat:W.bool,border:W.bool,beatFade:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};var XC=A2.bind(null,de.createElement);const um={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},P2={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},R2={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},JC={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},O2={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},ZC={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]},e4=()=>{const t="+919229102334",e=encodeURIComponent("Hi, I was just checking out your website, and Im interested in learning more about your trading floor and live market sessions. Can you provide me with more details?"),n=`https://wa.me/${t}?text=${e}`;return d.jsxs(t4,{children:[d.jsx("section",{className:"contact-short","aria-labelledby":"contact-short-heading",children:d.jsxs("div",{className:"grid grid-two-column",children:[d.jsx("div",{className:"contact-text",children:d.jsx("h3",{id:"contact-short-heading",children:"Talk to us today"})}),d.jsx("div",{className:"contact-short-btn",children:d.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":"Contact us on WhatsApp",children:d.jsxs(n4,{children:[d.jsx($t,{icon:R2,className:"whatsapp-icon","aria-hidden":"true"}),d.jsx("span",{children:"Contact Us"})]})})})]})}),d.jsx("footer",{"aria-labelledby":"footer-heading",role:"contentinfo",children:d.jsxs("div",{className:"container grid grid-four-column",children:[d.jsxs("div",{className:"footer-about",children:[d.jsxs("h3",{id:"footer-heading",children:[d.jsx("span",{className:"stock",children:"Stock"})," ",d.jsx("span",{className:"archery",children:"Archery"})]}),d.jsx("a",{href:"/","aria-label":"Visit our homepage",children:d.jsx("p",{children:"Besides Babulal Sweets, Manik Sarkar Chowk, Adampur, Bhagalpur - 812001, Bihar."})})]}),d.jsxs("div",{className:"footer-subscribe",children:[d.jsx("h3",{children:"Feel Free to Contact Us"}),d.jsxs("form",{action:"https://formspree.io/f/mzzpddag",method:"POST","aria-labelledby":"subscribe-form-heading",children:[d.jsx("input",{id:"phone-input",name:"phone",type:"tel",required:!0,autoComplete:"off",placeholder:"Phone number"}),d.jsx("input",{type:"submit",value:"Submit","aria-label":"Submit subscription form"})]})]}),d.jsxs("div",{className:"footer-social",children:[d.jsx("h3",{children:"Follow Us"}),d.jsxs("div",{className:"footer-social--icons",role:"list",children:[d.jsx("a",{href:"https://www.linkedin.com/company/stockarchery/",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on LinkedIn",children:d.jsx($t,{icon:um,style:{color:"#0077b5"},className:"icons"})}),d.jsx("a",{href:"https://www.instagram.com/stock.archery/?hl=en",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Instagram",children:d.jsx($t,{icon:P2,style:{color:"#e1306c"},className:"icons"})}),d.jsx("a",{href:"https://www.youtube.com/@stock.archery",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on YouTube",children:d.jsx($t,{icon:JC,style:{color:"#ff0000"},className:"icons"})}),d.jsx("a",{href:"https://x.com/stockarchery",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Twitter",children:d.jsx($t,{icon:O2,style:{color:"#0077b5"},className:"icons"})})]})]}),d.jsxs("div",{className:"footer-contact",children:[d.jsx("h3",{children:"Call Us"}),d.jsx("a",{href:"tel:+919229102334","aria-label":"Call us at +91 9229102334",children:d.jsx("h3",{children:"+91 9229102334"})}),d.jsx("a",{href:"tel:+918252052601","aria-label":"Call us at +91 8252052601",children:d.jsx("h3",{children:"+91 8252052601"})})]})]})})]})},t4=Q.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: rgba(37, 37, 37, 255);
    border-radius: 2rem;
    border: 3px solid #febb12;
    box-shadow: ${({theme:t})=>t.colors.shadowSupport};
    transform: translateY(50%);

    .grid {
      display: grid;
      gap: 2rem;

      .contact-text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #febb12;
      }

      .contact-short-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          text-decoration: none; /* Remove underline from the link */
        }
      }
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: rgba(37, 37, 37, 255);

    h3 {
      color: ${({theme:t})=>t.colors.yellow};
      margin-bottom: 2.4rem;
      font-size: 2.3rem;
    }

    .stock {
      color: #ffffff; /* White color for Stock */
    }

    .archery {
      color: #febb12; /* Existing color for Archery */
    }

    p {
      color: #febb12;
      font-size: 2rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      .icons {
        font-size: 2.4rem;
        color: inherit; /* Use color from parent element */
        cursor: pointer;
      }
    }

    .footer-subscribe {
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type="tel"] {
          width: 250px;
          padding: 0.75rem 1rem;
          border-radius: 1.5rem;
          border: 2px solid ${({theme:t})=>t.colors.yellow};
        }

        input[type="submit"] {
          width: 150px;
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
          border: 1px solid #febb12;
          background-color: #febb12;
          color: #000000;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: #e6c072;
            border-color: #febb12;
          }
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({theme:t})=>t.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .contact-short {
      max-width: 100%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .grid {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .contact-short-btn {
        margin-top: 2rem;
        justify-self: center;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`,n4=Q.button`
  background-color: #28a745; /* Green color */
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 1.5rem; /* Added border radius */

  .whatsapp-icon {
    font-size: 2rem; /* Size of the WhatsApp icon */
  }

  &:hover {
    background-color: #218838; /* Darker green on hover */
  }
`,cm=Q.button`
  text-decoration: none;
  max-width: auto;
  background-color: #fdbe11;
  color: #252525;
  padding: 1.4rem 2.4rem;
  border-radius: 20px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
   box-shadow: 0 2rem 2rem 0 rgba(196, 143, 33, 0.3);

    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: #252525;
    font-size: 1.8rem;
    
  }
`,r4=(t,e)=>{switch(e.type){case"HOME_UPDATE":return{...t,name:e.payload.name,image:e.payload.image,paragraph:e.payload.paragraph};case"ABOUT_UPDATE":return{...t,name:e.payload.name,image:e.payload.image,paragraph:e.payload.paragraph};case"VIDEO_UPDATE":return{...t,name2:e.payload.name2,paragraph2:e.payload.paragraph2};case"GET_SERVICES":return{...t,services:e.payload};default:return t}},j2=de.createContext(),i4="https://backendapi-production-1726.up.railway.app/service",o4={name:"",image:"",paragraph:"",services:[]},s4=({children:t})=>{const[e,n]=M.useReducer(r4,o4),r=()=>n({type:"HOME_UPDATE",payload:{name:"STOCK ARCHERY",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152404/h44_-_Copy_c8vbgm.png",paragraph:"Welcome to Stock Archery, your premier source for expert trading knowledge and strategies. Achieve trading success with our in-depth resources, tips, and insights tailored for savvy investors. Start mastering the market today"}}),i=()=>n({type:"ABOUT_UPDATE",payload:{name:"Bihar's First Trading Floor",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152394/about1_sz1ch8.svg",paragraph:"Introducing Stock Archery's  live trading classes—where education meets real-time trading. Gain hands-on experience and practical skills in our interactive sessions. Elevate your trading expertise with our unique, live-learning approach. Join now and experience the future of trading education"}}),o=()=>n({type:"VIDEO_UPDATE",payload:{name2:"STOCK ARCHERY",paragraph2:"First of its kind, we offer live trading classes where students can learn and trade in real-time. This unique approach combines education with practical trading experience, providing a hands-on learning environment."}}),s=async l=>{try{const u=await fetch(l);if(!u.ok)throw new Error(`HTTP error! Status: ${u.status}`);const c=await u.json();n({type:"GET_SERVICES",payload:c})}catch(u){console.error("Failed to fetch services:",u)}};return M.useEffect(()=>{s(i4)},[]),M.useEffect(()=>{o()},[]),d.jsx(j2.Provider,{value:{...e,updateHomePage:r,updateAboutPage:i,updateVideoPage:o},children:t})},Ia=()=>M.useContext(j2);var Le={},fm={},Aa={},Ca={},N2="Expected a function",Fv=NaN,a4="[object Symbol]",l4=/^\s+|\s+$/g,u4=/^[-+]0x[0-9a-f]+$/i,c4=/^0b[01]+$/i,f4=/^0o[0-7]+$/i,d4=parseInt,h4=typeof el=="object"&&el&&el.Object===Object&&el,p4=typeof self=="object"&&self&&self.Object===Object&&self,m4=h4||p4||Function("return this")(),g4=Object.prototype,y4=g4.toString,v4=Math.max,w4=Math.min,Yf=function(){return m4.Date.now()};function _4(t,e,n){var r,i,o,s,l,u,c=0,h=!1,m=!1,g=!0;if(typeof t!="function")throw new TypeError(N2);e=$v(e)||0,Vu(n)&&(h=!!n.leading,m="maxWait"in n,o=m?v4($v(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g);function b(N){var _=r,w=i;return r=i=void 0,c=N,s=t.apply(w,_),s}function I(N){return c=N,l=setTimeout(E,e),h?b(N):s}function C(N){var _=N-u,w=N-c,T=e-_;return m?w4(T,o-w):T}function R(N){var _=N-u,w=N-c;return u===void 0||_>=e||_<0||m&&w>=o}function E(){var N=Yf();if(R(N))return v(N);l=setTimeout(E,C(N))}function v(N){return l=void 0,g&&r?b(N):(r=i=void 0,s)}function x(){l!==void 0&&clearTimeout(l),c=0,r=u=i=l=void 0}function P(){return l===void 0?s:v(Yf())}function L(){var N=Yf(),_=R(N);if(r=arguments,i=this,u=N,_){if(l===void 0)return I(u);if(m)return l=setTimeout(E,e),b(u)}return l===void 0&&(l=setTimeout(E,e)),s}return L.cancel=x,L.flush=P,L}function E4(t,e,n){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(N2);return Vu(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),_4(t,e,{leading:r,maxWait:e,trailing:i})}function Vu(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function x4(t){return!!t&&typeof t=="object"}function b4(t){return typeof t=="symbol"||x4(t)&&y4.call(t)==a4}function $v(t){if(typeof t=="number")return t;if(b4(t))return Fv;if(Vu(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Vu(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(l4,"");var n=c4.test(t);return n||f4.test(t)?d4(t.slice(2),n?2:8):u4.test(t)?Fv:+t}var T4=E4,Pa={};Object.defineProperty(Pa,"__esModule",{value:!0});Pa.addPassiveEventListener=function(e,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),Yl.has(n)||Yl.set(n,new Set);var o=Yl.get(n);if(!o.has(i)){var s=function(){var l=!1;try{var u=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,u)}catch{}return l}();e.addEventListener(n,r,s?{passive:!0}:!1),o.add(i)}};Pa.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r),Yl.get(n).delete(r.name||n)};var Yl=new Map;Object.defineProperty(Ca,"__esModule",{value:!0});var S4=T4,k4=A4(S4),I4=Pa;function A4(t){return t&&t.__esModule?t:{default:t}}var C4=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,k4.default)(e,n)},Ae={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var r=C4(function(i){Ae.scrollHandler(e)},n);Ae.scrollSpyContainers.push(e),(0,I4.addPassiveEventListener)(e,"scroll",r)}},isMounted:function(e){return Ae.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=Ae.scrollSpyContainers[Ae.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(r){return r(Ae.currentPositionX(e),Ae.currentPositionY(e))})},addStateHandler:function(e){Ae.spySetState.push(e)},addSpyHandler:function(e,n){var r=Ae.scrollSpyContainers[Ae.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(e),e(Ae.currentPositionX(n),Ae.currentPositionY(n))},updateStates:function(){Ae.spySetState.forEach(function(e){return e()})},unmount:function(e,n){Ae.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Ae.spySetState&&Ae.spySetState.length&&Ae.spySetState.indexOf(e)>-1&&Ae.spySetState.splice(Ae.spySetState.indexOf(e),1),document.removeEventListener("scroll",Ae.scrollHandler)},update:function(){return Ae.scrollSpyContainers.forEach(function(e){return Ae.scrollHandler(e)})}};Ca.default=Ae;var Mo={},Ra={};Object.defineProperty(Ra,"__esModule",{value:!0});var P4=function(e,n){var r=e.indexOf("#")===0?e.substring(1):e,i=r?"#"+r:"",o=window&&window.location,s=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",s):history.replaceState(history.state,"",s)},R4=function(){return window.location.hash.replace(/^#/,"")},O4=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},j4=function(e){return getComputedStyle(e).position!=="static"},Xf=function(e,n){for(var r=e.offsetTop,i=e.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},N4=function(e,n,r){if(r)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(j4(e)){if(n.offsetParent!==e){var i=function(h){return h===e||h===document},o=Xf(n,i),s=o.offsetTop,l=o.offsetParent;if(l!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return s}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var u=function(h){return h===document};return Xf(n,u).offsetTop-Xf(e,u).offsetTop};Ra.default={updateHash:P4,getHash:R4,filterElementInContainer:O4,scrollOffset:N4};var Cc={},dm={};Object.defineProperty(dm,"__esModule",{value:!0});dm.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var hm={};Object.defineProperty(hm,"__esModule",{value:!0});var D4=Pa,L4=["mousedown","mousewheel","touchmove","keydown"];hm.default={subscribe:function(e){return typeof document<"u"&&L4.forEach(function(n){return(0,D4.addPassiveEventListener)(document,n,e)})}};var Oa={};Object.defineProperty(Oa,"__esModule",{value:!0});var Oh={registered:{},scrollEvent:{register:function(e,n){Oh.registered[e]=n},remove:function(e){Oh.registered[e]=null}}};Oa.default=Oh;Object.defineProperty(Cc,"__esModule",{value:!0});var M4=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},V4=Ra;Pc(V4);var F4=dm,zv=Pc(F4),$4=hm,z4=Pc($4),U4=Oa,xn=Pc(U4);function Pc(t){return t&&t.__esModule?t:{default:t}}var D2=function(e){return zv.default[e.smooth]||zv.default.defaultEasing},B4=function(e){return typeof e=="function"?e:function(){return e}},H4=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},jh=function(){return H4()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),L2=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},M2=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},V2=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},W4=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},G4=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},q4=function t(e,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){xn.default.registered.end&&xn.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=t.bind(null,e,n);jh.call(window,o);return}xn.default.registered.end&&xn.default.registered.end(i.to,i.target,i.currentPosition)},pm=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},ja=function(e,n,r,i){n.data=n.data||L2(),window.clearTimeout(n.data.delayTimeout);var o=function(){n.data.cancel=!0};if(z4.default.subscribe(o),pm(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?M2(n):V2(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){xn.default.registered.end&&xn.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=B4(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var s=D2(n),l=q4.bind(null,s,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){xn.default.registered.begin&&xn.default.registered.begin(n.data.to,n.data.target),jh.call(window,l)},n.delay);return}xn.default.registered.begin&&xn.default.registered.begin(n.data.to,n.data.target),jh.call(window,l)},Rc=function(e){return e=M4({},e),e.data=e.data||L2(),e.absolute=!0,e},Q4=function(e){ja(0,Rc(e))},K4=function(e,n){ja(e,Rc(n))},Y4=function(e){e=Rc(e),pm(e),ja(e.horizontal?W4(e):G4(e),e)},X4=function(e,n){n=Rc(n),pm(n);var r=n.horizontal?M2(n):V2(n);ja(e+r,n)};Cc.default={animateTopScroll:ja,getAnimationType:D2,scrollToTop:Q4,scrollToBottom:Y4,scrollTo:K4,scrollMore:X4};Object.defineProperty(Mo,"__esModule",{value:!0});var J4=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Z4=Ra,eP=mm(Z4),tP=Cc,nP=mm(tP),rP=Oa,El=mm(rP);function mm(t){return t&&t.__esModule?t:{default:t}}var xl={},Uv=void 0;Mo.default={unmount:function(){xl={}},register:function(e,n){xl[e]=n},unregister:function(e){delete xl[e]},get:function(e){return xl[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Uv=e},getActiveLink:function(){return Uv},scrollTo:function(e,n){var r=this.get(e);if(!r){console.warn("target Element not found");return}n=J4({},n,{absolute:!1});var i=n.containerId,o=n.container,s=void 0;i?s=document.getElementById(i):o&&o.nodeType?s=o:s=document,n.absolute=!0;var l=n.horizontal,u=eP.default.scrollOffset(s,r,l)+(n.offset||0);if(!n.smooth){El.default.registered.begin&&El.default.registered.begin(e,r),s===document?n.horizontal?window.scrollTo(u,0):window.scrollTo(0,u):s.scrollTop=u,El.default.registered.end&&El.default.registered.end(e,r);return}nP.default.animateTopScroll(u,n,e,r)}};var Oc={};Object.defineProperty(Oc,"__esModule",{value:!0});var iP=Ra,Jf=oP(iP);function oP(t){return t&&t.__esModule?t:{default:t}}var sP={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var r=this.scroller,i=r.get(e);if(i&&(n||e!==r.getActiveLink())){var o=this.containers[e]||document;r.scrollTo(e,{container:o})}},getHash:function(){return Jf.default.getHash()},changeHash:function(e,n){this.isInitialized()&&Jf.default.getHash()!==e&&Jf.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Oc.default=sP;Object.defineProperty(Aa,"__esModule",{value:!0});var bl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},aP=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),lP=M,Bv=Na(lP),uP=Ca,Tl=Na(uP),cP=Mo,fP=Na(cP),dP=ka,be=Na(dP),hP=Oc,ar=Na(hP);function Na(t){return t&&t.__esModule?t:{default:t}}function pP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function gP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Hv={to:be.default.string.isRequired,containerId:be.default.string,container:be.default.object,activeClass:be.default.string,activeStyle:be.default.object,spy:be.default.bool,horizontal:be.default.bool,smooth:be.default.oneOfType([be.default.bool,be.default.string]),offset:be.default.number,delay:be.default.number,isDynamic:be.default.bool,onClick:be.default.func,duration:be.default.oneOfType([be.default.number,be.default.func]),absolute:be.default.bool,onSetActive:be.default.func,onSetInactive:be.default.func,ignoreCancelEvents:be.default.bool,hashSpy:be.default.bool,saveHashHistory:be.default.bool,spyThrottle:be.default.number};Aa.default=function(t,e){var n=e||fP.default,r=function(o){gP(s,o);function s(l){pP(this,s);var u=mP(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return i.call(u),u.state={active:!1},u}return aP(s,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u&&!c?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Tl.default.isMounted(u)||Tl.default.mount(u,this.props.spyThrottle),this.props.hashSpy&&(ar.default.isMounted()||ar.default.mount(n),ar.default.mapContainer(this.props.to,u)),Tl.default.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Tl.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c={};this.state&&this.state.active?c=bl({},this.props.style,this.props.activeStyle):c=bl({},this.props.style);var h=bl({},this.props);for(var m in Hv)h.hasOwnProperty(m)&&delete h[m];return h.className=u,h.style=c,h.onClick=this.handleClick,Bv.default.createElement(t,h)}}]),s}(Bv.default.PureComponent),i=function(){var s=this;this.scrollTo=function(l,u){n.scrollTo(l,bl({},s.state,u))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.spyHandler=function(l,u){var c=s.getScrollSpyContainer();if(!(ar.default.isMounted()&&!ar.default.isInitialized())){var h=s.props.horizontal,m=s.props.to,g=null,b=void 0,I=void 0;if(h){var C=0,R=0,E=0;if(c.getBoundingClientRect){var v=c.getBoundingClientRect();E=v.left}if(!g||s.props.isDynamic){if(g=n.get(m),!g)return;var x=g.getBoundingClientRect();C=x.left-E+l,R=C+x.width}var P=l-s.props.offset;b=P>=Math.floor(C)&&P<Math.floor(R),I=P<Math.floor(C)||P>=Math.floor(R)}else{var L=0,N=0,_=0;if(c.getBoundingClientRect){var w=c.getBoundingClientRect();_=w.top}if(!g||s.props.isDynamic){if(g=n.get(m),!g)return;var T=g.getBoundingClientRect();L=T.top-_+u,N=L+T.height}var S=u-s.props.offset;b=S>=Math.floor(L)&&S<Math.floor(N),I=S<Math.floor(L)||S>=Math.floor(N)}var A=n.getActiveLink();if(I){if(m===A&&n.setActiveLink(void 0),s.props.hashSpy&&ar.default.getHash()===m){var O=s.props.saveHashHistory,k=O===void 0?!1:O;ar.default.changeHash("",k)}s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive(m,g))}if(b&&(A!==m||s.state.active===!1)){n.setActiveLink(m);var Ze=s.props.saveHashHistory,rn=Ze===void 0?!1:Ze;s.props.hashSpy&&ar.default.changeHash(m,rn),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(m,g))}}}};return r.propTypes=Hv,r.defaultProps={offset:0},r};Object.defineProperty(fm,"__esModule",{value:!0});var yP=M,Wv=F2(yP),vP=Aa,wP=F2(vP);function F2(t){return t&&t.__esModule?t:{default:t}}function _P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Gv(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function EP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var xP=function(t){EP(e,t);function e(){var n,r,i,o;_P(this,e);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return o=(r=(i=Gv(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),i),i.render=function(){return Wv.default.createElement("a",i.props,i.props.children)},r),Gv(i,o)}return e}(Wv.default.Component);fm.default=(0,wP.default)(xP);var gm={};Object.defineProperty(gm,"__esModule",{value:!0});var bP=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),TP=M,qv=$2(TP),SP=Aa,kP=$2(SP);function $2(t){return t&&t.__esModule?t:{default:t}}function IP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function AP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function CP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var PP=function(t){CP(e,t);function e(){return IP(this,e),AP(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return bP(e,[{key:"render",value:function(){return qv.default.createElement("button",this.props,this.props.children)}}]),e}(qv.default.Component);gm.default=(0,kP.default)(PP);var ym={},jc={};Object.defineProperty(jc,"__esModule",{value:!0});var RP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},OP=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),jP=M,Qv=Nc(jP),NP=a_;Nc(NP);var DP=Mo,Kv=Nc(DP),LP=ka,Yv=Nc(LP);function Nc(t){return t&&t.__esModule?t:{default:t}}function MP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function VP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function FP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}jc.default=function(t){var e=function(n){FP(r,n);function r(i){MP(this,r);var o=VP(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return OP(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Kv.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){Kv.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return Qv.default.createElement(t,RP({},this.props,{parentBindings:this.childBindings}))}}]),r}(Qv.default.Component);return e.propTypes={name:Yv.default.string,id:Yv.default.string},e};Object.defineProperty(ym,"__esModule",{value:!0});var Xv=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$P=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),zP=M,Jv=vm(zP),UP=jc,BP=vm(UP),HP=ka,Zv=vm(HP);function vm(t){return t&&t.__esModule?t:{default:t}}function WP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function GP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function qP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var z2=function(t){qP(e,t);function e(){return WP(this,e),GP(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return $P(e,[{key:"render",value:function(){var r=this,i=Xv({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,Jv.default.createElement("div",Xv({},i,{ref:function(s){r.props.parentBindings.domNode=s}}),this.props.children)}}]),e}(Jv.default.Component);z2.propTypes={name:Zv.default.string,id:Zv.default.string};ym.default=(0,BP.default)(z2);var Zf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e0=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function t0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n0(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function r0(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Sl=M,Yr=Ca,ed=Mo,Ce=ka,lr=Oc,i0={to:Ce.string.isRequired,containerId:Ce.string,container:Ce.object,activeClass:Ce.string,spy:Ce.bool,smooth:Ce.oneOfType([Ce.bool,Ce.string]),offset:Ce.number,delay:Ce.number,isDynamic:Ce.bool,onClick:Ce.func,duration:Ce.oneOfType([Ce.number,Ce.func]),absolute:Ce.bool,onSetActive:Ce.func,onSetInactive:Ce.func,ignoreCancelEvents:Ce.bool,hashSpy:Ce.bool,spyThrottle:Ce.number},QP={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||ed,i=function(s){r0(l,s);function l(u){t0(this,l);var c=n0(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,u));return o.call(c),c.state={active:!1},c}return e0(l,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,h=this.props.container;return c?document.getElementById(c):h&&h.nodeType?h:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Yr.isMounted(c)||Yr.mount(c,this.props.spyThrottle),this.props.hashSpy&&(lr.isMounted()||lr.mount(r),lr.mapContainer(this.props.to,c)),this.props.spy&&Yr.addStateHandler(this.stateHandler),Yr.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Yr.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var h=Zf({},this.props);for(var m in i0)h.hasOwnProperty(m)&&delete h[m];return h.className=c,h.onClick=this.handleClick,Sl.createElement(e,h)}}]),l}(Sl.Component),o=function(){var l=this;this.scrollTo=function(u,c){r.scrollTo(u,Zf({},l.state,c))},this.handleClick=function(u){l.props.onClick&&l.props.onClick(u),u.stopPropagation&&u.stopPropagation(),u.preventDefault&&u.preventDefault(),l.scrollTo(l.props.to,l.props)},this.stateHandler=function(){r.getActiveLink()!==l.props.to&&(l.state!==null&&l.state.active&&l.props.onSetInactive&&l.props.onSetInactive(),l.setState({active:!1}))},this.spyHandler=function(u){var c=l.getScrollSpyContainer();if(!(lr.isMounted()&&!lr.isInitialized())){var h=l.props.to,m=null,g=0,b=0,I=0;if(c.getBoundingClientRect){var C=c.getBoundingClientRect();I=C.top}if(!m||l.props.isDynamic){if(m=r.get(h),!m)return;var R=m.getBoundingClientRect();g=R.top-I+u,b=g+R.height}var E=u-l.props.offset,v=E>=Math.floor(g)&&E<Math.floor(b),x=E<Math.floor(g)||E>=Math.floor(b),P=r.getActiveLink();if(x)return h===P&&r.setActiveLink(void 0),l.props.hashSpy&&lr.getHash()===h&&lr.changeHash(),l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive()),Yr.updateStates();if(v&&P!==h)return r.setActiveLink(h),l.props.hashSpy&&lr.changeHash(h),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(h)),Yr.updateStates()}}};return i.propTypes=i0,i.defaultProps={offset:0},i},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){r0(i,r);function i(o){t0(this,i);var s=n0(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return s.childBindings={domNode:null},s}return e0(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;ed.unregister(this.props.name)}},{key:"registerElems",value:function(s){ed.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Sl.createElement(e,Zf({},this.props,{parentBindings:this.childBindings}))}}]),i}(Sl.Component);return n.propTypes={name:Ce.string,id:Ce.string},n}},KP=QP;Object.defineProperty(Le,"__esModule",{value:!0});Le.Helpers=Le.ScrollElement=Le.ScrollLink=Le.animateScroll=Le.scrollSpy=Le.Events=Le.scroller=Le.Element=Le.Button=J2=Le.Link=void 0;var YP=fm,U2=Rn(YP),XP=gm,B2=Rn(XP),JP=ym,H2=Rn(JP),ZP=Mo,W2=Rn(ZP),e3=Oa,G2=Rn(e3),t3=Ca,q2=Rn(t3),n3=Cc,Q2=Rn(n3),r3=Aa,K2=Rn(r3),i3=jc,Y2=Rn(i3),o3=KP,X2=Rn(o3);function Rn(t){return t&&t.__esModule?t:{default:t}}var J2=Le.Link=U2.default;Le.Button=B2.default;Le.Element=H2.default;Le.scroller=W2.default;Le.Events=G2.default;Le.scrollSpy=q2.default;Le.animateScroll=Q2.default;Le.ScrollLink=K2.default;Le.ScrollElement=Y2.default;Le.Helpers=X2.default;Le.default={Link:U2.default,Button:B2.default,Element:H2.default,scroller:W2.default,Events:G2.default,scrollSpy:q2.default,animateScroll:Q2.default,ScrollLink:K2.default,ScrollElement:Y2.default,Helpers:X2.default};const s3=()=>{const{image:t,paragraph:e}=Ia();return d.jsx(a3,{children:d.jsxs("div",{className:"container grid grid-two-column",children:[d.jsxs("div",{className:"section-hero-data",role:"banner","aria-labelledby":"hero-heading",children:[d.jsxs("h1",{id:"hero-heading",className:"hero-heading",children:[d.jsx("span",{className:"stock",children:"Stock"})," ",d.jsx("span",{className:"archery",children:"Archery"})]}),d.jsx("p",{className:"hero-para",children:e}),d.jsx(J2,{to:"sections-page",smooth:!0,duration:500,"aria-label":"Learn more about our services",children:d.jsx(cm,{className:"btn hireme-btn",children:"Know more"})})]}),d.jsxs("div",{className:"section-hero-image",role:"figure","aria-labelledby":"hero-image-caption",children:[d.jsx("picture",{children:d.jsx("img",{src:t,alt:"Hero illustration showing archery",className:"hero-img"})}),d.jsx("figcaption",{id:"hero-image-caption",className:"sr-only",children:"Hero illustration showing archery equipment and practice."})]})]})})},a3=Q.section`
  padding: 9rem 0;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }

  .btn {
    max-width: 16rem;
    background-color: #febb12;
    border: none;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #fdd788; /* Slightly lighter on hover */
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .stock {
    color: white; /* White color for "Stock" */
  }

  .archery {
    color: #febb12; /* Original color for "Archery" */
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #FDD788;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  picture {
    text-align: center;
    width: 100%;
  }

  .hero-img {
    max-width: 100%;
  }

  /* Optional: Adding a gradient overlay */
  .section-hero-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(37, 37, 37, 0.4), rgba(37, 37, 37, 0.1));
    border-radius: 15px; /* Match the image border radius */
    z-index: 0;
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .grid {
      gap: 7.2rem;
      grid-template-columns: 1fr; /* Stack items vertically on small screens */
    }
  }
`,l3=Q.div`
  display: flex;
  background-color: rgba(37, 37, 37, 1);
  color: #febb12;
  padding: 20px;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,u3=Q.div`
  flex: 1;
  background-color: #333;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  

  iframe {
    width: 100%;
    height: 325px;
    border: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`,c3=Q.div`
  flex: 1;
  padding: 0; /* Explicitly remove padding */
  margin: 0; /* Explicitly remove margin */

  h2 {
    font-size: 5rem;
    color: #fff;
    margin: none; /* Remove margin */
    padding: none; /* Remove padding */
    
    
    span {
      color: #febb12;
    }
  }

  p {
    font-size: 2rem;
    text-align: justify;
    color: #FDD788;
   margin: 40px 0 0; 
    padding: 0; /* Remove padding */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,Z2=()=>d.jsxs(l3,{children:[d.jsx(u3,{children:d.jsx("iframe",{src:"https://www.youtube.com/embed/stxCGM-XAP0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),d.jsxs(c3,{children:[d.jsxs("h2",{children:["Bihar's ",d.jsx("span",{children:"First"})," Trading ",d.jsx("span",{children:"Floor"})]}),d.jsx("p",{children:"Experience Bihar’s premier stock market institute where education meets action. Our live trading classes allow students to learn and trade simultaneously in a real market setting. Gain hands-on experience, guided by expert mentors, and master strategies that work. Join us and elevate your trading skills with real-time practice."})]})]}),f3=Q.div`
  padding: 20px;
  background-color: rgba(37, 37, 37, 255);
`,d3=Q.h1`
  text-align: center;
  font-size: 50px;
  color: #febb12;
  margin-bottom: 40px;

  span {
    color: #fff;
  }
`,o0=Q.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,h3=Q.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  max-width: calc(33.333% - 20px);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 8%;
    right: 0;
    width: 0.5px; /* Ensure consistent vertical line width */
    height: 90%;
    background-color: #febb12;
    display: block;
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;

    &::after {
      display: none;
    }
  }
`,p3=Q.img`
  border-radius: 20px;
  width: 50%;
  height: 50%;
  object-fit: cover;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`,m3=Q.h2`
  margin: 10px 0;
  font-size: 18px;
  color: #febb12;
`,g3=Q.p`
  font-size: 14px;
  color: #FDD788;
`,eE=Q.hr`
  border: none;
  border-top: 1px solid #febb12;
  margin: 20px 0;
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,Di=({image:t,heading:e,text:n})=>d.jsxs(d.Fragment,{children:[d.jsxs(h3,{children:[d.jsx(p3,{src:t,alt:e}),d.jsx(m3,{children:e}),d.jsx(g3,{children:n})]}),d.jsx(eE,{})]}),tE=()=>d.jsxs(f3,{id:"sections-page",children:[d.jsxs(d3,{children:[d.jsx("span",{children:"Our"})," Services"]}),d.jsxs(o0,{children:[d.jsx(Di,{image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/4th_-_Copy_bxcdbz.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Bihar’s First Live Trading Institute"})}),text:"The only institute in Bihar offering real-time trading classes, setting a new standard for stock market education."}),d.jsx(Di,{image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/2nd_s04uzo.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Learn and Trade Simultaneously"})}),text:"Students gain hands-on experience by learning and trading in a live market environment."}),d.jsx(Di,{image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/3rd_-_Copy_vredry.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Expert Mentor Guidance"})}),text:"Benefit from personalized instruction and proven strategies from seasoned trading professionals."})]}),d.jsx(eE,{}),d.jsxs(o0,{children:[d.jsx(Di,{image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152390/1st_acbapn.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Real-Time Market Exposure"})}),text:"Develop practical trading skills with immediate application in the live market."}),d.jsx(Di,{image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152393/5th_-_Copy_flkcme.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Comprehensive Trading Experience"})}),text:"A unique blend of theoretical knowledge and practical execution, ensuring well-rounded trading expertise."}),d.jsx(Di,{image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/ind_-_Copy_pgb10b.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Interactive Learning Enviroment"})}),text:" Engage in an energetic and collaborative setting where real-time discussions and peer interactions enhance the learning experience."})]})]}),y3=()=>{const{updateHomePage:t}=Ia();return M.useEffect(()=>t(),[]),d.jsxs(d.Fragment,{children:[d.jsx(s3,{}),d.jsx(Z2,{}),d.jsx(tE,{})]})},nE=()=>{const{image:t,paragraph:e}=Ia();return d.jsx(v3,{children:d.jsxs("div",{className:"container grid grid-two-column",children:[d.jsxs("div",{className:"section-hero-data",children:[d.jsxs("h1",{className:"hero-heading",children:[d.jsx("span",{className:"stock",children:"Stock"})," ",d.jsx("span",{className:"archery",children:"Archery"})]}),d.jsx("p",{className:"hero-para",children:e}),d.jsx(dr,{to:"/content","aria-label":"Learn more about Stock Archery",children:d.jsx(cm,{className:"btn hireme-btn",children:"Know more"})})]}),d.jsx("div",{className:"section-hero-image",children:d.jsx("picture",{children:d.jsx("img",{src:t,alt:"Stock Archery promotional image",className:"hero-img"})})})]})})},v3=Q.section`
  padding: 9rem 0;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }

  .btn {
    max-width: 16rem;
    background-color: #febb12;
    border: none;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #fdd788; /* Slightly lighter on hover */
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .stock {
    color: white; /* White color for "Stock" */
  }

  .archery {
    color: #febb12; /* Original color for "Archery" */
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #FDD788;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  picture {
    text-align: center;
    width: 100%;
  }

  .hero-img {
    max-width: 100%;
  }

  /* Optional: Adding a gradient overlay */
  .section-hero-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(37, 37, 37, 0.4), rgba(37, 37, 37, 0.1));
    border-radius: 15px; /* Match the image border radius */
    z-index: 0;
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .grid {
      gap: 7.2rem;
      grid-template-columns: 1fr; /* Stack items vertically on small screens */
    }
  }
`,w3=Q.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #252525;
  gap: 40px;
`,_3=Q.h1`
  color: #febb12;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;

  & span {
    color: #ffffff;
  }
`,rE=Q.div`
  display: flex;
  align-items: flex-start;
  padding: 30px;
  background-color: #252525;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,E3=Q.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 30px;
  border: 6px solid #4a90e2;
  transition: transform 0.3s ease;

  ${rE}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`,x3=Q.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  @media (min-width: 769px) {
    text-align: left;
  }
`,b3=Q.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #febb12;
  font-weight: bold;
`,T3=Q.h4`
  font-size: 2rem;
  margin: 5px 0;
  color: #febb12;
  font-weight: 2000;
`,S3=Q.p`
  font-size: 1.5rem;
  color: #fdd788;
  margin: 10px 0;
  line-height: 1.6;
  max-width: 1500px;
`,k3=Q.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`,td=Q.a`
  font-size: 1.8rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #8ebbf2;
    transform: scale(1.1);
  }
`,I3=({name:t,subject:e,bio:n,image:r,linkedin:i,twitter:o,instagram:s})=>d.jsx("article",{children:d.jsxs(rE,{children:[d.jsx(E3,{src:r,alt:`Portrait of ${t}`}),d.jsxs(x3,{children:[d.jsx(b3,{children:t}),d.jsx(T3,{children:e}),d.jsx(S3,{children:n}),d.jsxs(k3,{children:[i&&d.jsx(td,{href:i,target:"_blank",rel:"noopener noreferrer","aria-label":`LinkedIn profile of ${t}`,children:d.jsx($t,{icon:um,style:{color:"#0077b5"}})}),o&&d.jsx(td,{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":`Twitter profile of ${t}`,children:d.jsx($t,{icon:O2,style:{color:"#000000"}})}),s&&d.jsx(td,{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":`Instagram profile of ${t}`,children:d.jsx($t,{icon:P2,style:{color:"#e1306c"}})})]})]})]})}),A3=()=>{const t=[{subject:"Prem Sandesh",bio:"With over eight years of experience in price action trading and a specialization in swing trades, I offer unparalleled expertise in market dynamics. My mission is to equip aspiring traders with essential insights and skills for confident, profitable market navigation. Discover comprehensive strategies and practical techniques tailored for success. Join me to enhance your trading skills and achieve remarkable results in the ever-evolving financial markets.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152410/prem_jdeoi6.jpg",linkedin:"https://www.linkedin.com/in/prem-sandesh-b29927289/",twitter:"https://x.com/stockarchery",instagram:"https://www.instagram.com/stock.archery/"},{subject:"Kumar Ankit",bio:"Hello, I'm Kumar Ankit, your dedicated mentor—Certified Researcher, Trader, and Financial Advisor with nearly a decade of market experience. With my extensive expertise, I emphasize that mastering a single trading setup can lead to significant success in the stock market. My mission is to guide you in discovering that pivotal setup, ensuring you have the tools and knowledge needed to excel. Join me to unlock your trading potential and achieve financial success with proven strategies and personalized support. See you soon on your path to market mastery!",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152394/ankit_-_Copy_eytbng.jpg",linkedin:"https://www.linkedin.com/in/kumar-ankit-964823323/",twitter:"https://x.com/stockarchery",instagram:"https://www.instagram.com/stock.archery/"}];return d.jsxs(w3,{children:[d.jsxs(_3,{children:[d.jsx("span",{children:"Meet"})," Our Mentors"]}),t.map((e,n)=>d.jsx(I3,{...e},n))]})},C3=()=>{const{updateAboutPage:t}=Ia();return M.useEffect(()=>{t()},[t]),d.jsxs("div",{children:[d.jsx(nE,{}),d.jsx(A3,{})]})},P3=()=>{const{services:t}=Ia();return console.log(t),d.jsxs(R3,{className:"section",children:[d.jsx("h2",{className:"common-heading",children:"Liabrary"}),d.jsx("div",{className:"container grid grid-three-column",children:t.map(e=>{const{id:n,name:r,image:i,description:o,read_more:s}=e;return d.jsxs("div",{className:"card",children:[d.jsx("figure",{children:d.jsx("img",{src:i,alt:r})}),d.jsxs("div",{className:"card-data",children:[d.jsx("h3",{children:r}),d.jsx("p",{children:o}),d.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:d.jsx(cm,{className:"btn",children:"Read More"})})]})]},n)})})]})},R3=Q.section`
  padding: 9rem 0;
  background-color: #252525;
  

  .container {
    max-width: 120rem;
  }
    h2{
    color: #febb12;
    }

  .card {
    border: 0.5rem solid rgb(170 170 170 / 40%);
    color:#febb12;

    

    
    }

    .card-data {
      padding: 0 2rem;
      
      
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid #febb12;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #febb12;
      font-size: 1.4rem;

      &:hover {
        background-color: #febb12;
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({theme:t})=>t.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;var s0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},O3=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},oE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=o>>2,m=(o&3)<<4|l>>4;let g=(l&15)<<2|c>>6,b=c&63;u||(b=64,s||(g=64)),r.push(n[h],n[m],n[g],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):O3(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||c==null||m==null)throw new j3;const g=o<<2|l>>4;if(r.push(g),c!==64){const b=l<<4&240|c>>2;if(r.push(b),m!==64){const I=c<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class j3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N3=function(t){const e=iE(t);return oE.encodeByteArray(e,!0)},Fu=function(t){return N3(t).replace(/\./g,"")},D3=function(t){try{return oE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M3=()=>L3().__FIREBASE_DEFAULTS__,V3=()=>{if(typeof process>"u"||typeof s0>"u")return;const t=s0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},F3=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&D3(t[1]);return e&&JSON.parse(e)},wm=()=>{try{return M3()||V3()||F3()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$3=t=>{var e,n;return(n=(e=wm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},z3=t=>{const e=$3(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sE=()=>{var t;return(t=wm())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B3(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fu(JSON.stringify(n)),Fu(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H3(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function W3(){var t;const e=(t=wm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function G3(){return!W3()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function q3(){try{return typeof indexedDB=="object"}catch{return!1}}function Q3(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3="FirebaseError";class Vo extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=K3,Object.setPrototypeOf(this,Vo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aE.prototype.create)}}class aE{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Y3(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Vo(i,l,r)}}function Y3(t,e){return t.replace(X3,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const X3=/\{\$([^}]+)}/g;function Nh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(a0(o)&&a0(s)){if(!Nh(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function a0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){return t&&t._delegate?t._delegate:t}class la{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new U3;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(e5(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Z3(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z3(t){return t===Zr?void 0:t}function e5(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J3(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const n5={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},r5=oe.INFO,i5={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},o5=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=i5[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lE{constructor(e){this.name=e,this._logLevel=r5,this._logHandler=o5,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?n5[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const s5=(t,e)=>e.some(n=>t instanceof n);let l0,u0;function a5(){return l0||(l0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l5(){return u0||(u0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uE=new WeakMap,Dh=new WeakMap,cE=new WeakMap,nd=new WeakMap,_m=new WeakMap;function u5(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Cr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&uE.set(n,t)}).catch(()=>{}),_m.set(e,t),e}function c5(t){if(Dh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Dh.set(t,e)}let Lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function f5(t){Lh=t(Lh)}function d5(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rd(this),e,...n);return cE.set(r,e.sort?e.sort():[e]),Cr(r)}:l5().includes(t)?function(...e){return t.apply(rd(this),e),Cr(uE.get(this))}:function(...e){return Cr(t.apply(rd(this),e))}}function h5(t){return typeof t=="function"?d5(t):(t instanceof IDBTransaction&&c5(t),s5(t,a5())?new Proxy(t,Lh):t)}function Cr(t){if(t instanceof IDBRequest)return u5(t);if(nd.has(t))return nd.get(t);const e=h5(t);return e!==t&&(nd.set(t,e),_m.set(e,t)),e}const rd=t=>_m.get(t);function p5(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Cr(s);return r&&s.addEventListener("upgradeneeded",u=>{r(Cr(s.result),u.oldVersion,u.newVersion,Cr(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const m5=["get","getKey","getAll","getAllKeys","count"],g5=["put","add","delete","clear"],id=new Map;function c0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=g5.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m5.includes(n)))return;const o=async function(s,...l){const u=this.transaction(s,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return id.set(e,o),o}f5(t=>({...t,get:(e,n,r)=>c0(e,n)||t.get(e,n,r),has:(e,n)=>!!c0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v5(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function v5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",f0="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new lE("@firebase/app"),w5="@firebase/app-compat",_5="@firebase/analytics-compat",E5="@firebase/analytics",x5="@firebase/app-check-compat",b5="@firebase/app-check",T5="@firebase/auth",S5="@firebase/auth-compat",k5="@firebase/database",I5="@firebase/database-compat",A5="@firebase/functions",C5="@firebase/functions-compat",P5="@firebase/installations",R5="@firebase/installations-compat",O5="@firebase/messaging",j5="@firebase/messaging-compat",N5="@firebase/performance",D5="@firebase/performance-compat",L5="@firebase/remote-config",M5="@firebase/remote-config-compat",V5="@firebase/storage",F5="@firebase/storage-compat",$5="@firebase/firestore",z5="@firebase/vertexai-preview",U5="@firebase/firestore-compat",B5="firebase",H5="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="[DEFAULT]",W5={[Mh]:"fire-core",[w5]:"fire-core-compat",[E5]:"fire-analytics",[_5]:"fire-analytics-compat",[b5]:"fire-app-check",[x5]:"fire-app-check-compat",[T5]:"fire-auth",[S5]:"fire-auth-compat",[k5]:"fire-rtdb",[I5]:"fire-rtdb-compat",[A5]:"fire-fn",[C5]:"fire-fn-compat",[P5]:"fire-iid",[R5]:"fire-iid-compat",[O5]:"fire-fcm",[j5]:"fire-fcm-compat",[N5]:"fire-perf",[D5]:"fire-perf-compat",[L5]:"fire-rc",[M5]:"fire-rc-compat",[V5]:"fire-gcs",[F5]:"fire-gcs-compat",[$5]:"fire-fst",[U5]:"fire-fst-compat",[z5]:"fire-vertex","fire-js":"fire-js",[B5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Map,G5=new Map,Fh=new Map;function d0(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zu(t){const e=t.name;if(Fh.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Fh.set(e,t);for(const n of $u.values())d0(n,t);for(const n of G5.values())d0(n,t);return!0}function q5(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new aE("app","Firebase",Q5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K5{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new la("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y5=H5;function fE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=sE()),!n)throw Pr.create("no-options");const o=$u.get(i);if(o){if(Nh(n,o.options)&&Nh(r,o.config))return o;throw Pr.create("duplicate-app",{appName:i})}const s=new t5(i);for(const u of Fh.values())s.addComponent(u);const l=new K5(n,r,s);return $u.set(i,l),l}function X5(t=Vh){const e=$u.get(t);if(!e&&t===Vh&&sE())return fE();if(!e)throw Pr.create("no-app",{appName:t});return e}function so(t,e,n){var r;let i=(r=W5[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(l.join(" "));return}zu(new la(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J5="firebase-heartbeat-database",Z5=1,ua="firebase-heartbeat-store";let od=null;function dE(){return od||(od=p5(J5,Z5,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ua)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),od}async function eR(t){try{const n=(await dE()).transaction(ua),r=await n.objectStore(ua).get(hE(t));return await n.done,r}catch(e){if(e instanceof Vo)Xn.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function h0(t,e){try{const r=(await dE()).transaction(ua,"readwrite");await r.objectStore(ua).put(e,hE(t)),await r.done}catch(n){if(n instanceof Vo)Xn.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function hE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=1024,nR=30*24*60*60*1e3;class rR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=p0();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=nR}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Xn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=p0(),{heartbeatsToSend:r,unsentEntries:i}=iR(this._heartbeatsCache.heartbeats),o=Fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Xn.warn(n),""}}}function p0(){return new Date().toISOString().substring(0,10)}function iR(t,e=tR){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),m0(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),m0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q3()?Q3().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return h0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return h0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function m0(t){return Fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){zu(new la("platform-logger",e=>new y5(e),"PRIVATE")),zu(new la("heartbeat",e=>new rR(e),"PRIVATE")),so(Mh,f0,t),so(Mh,f0,"esm2017"),so("fire-js","")}sR("");var aR="firebase",lR="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */so(aR,lR,"app");var g0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,w){function T(){}T.prototype=w.prototype,_.D=w.prototype,_.prototype=new T,_.prototype.constructor=_,_.C=function(S,A,O){for(var k=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)k[Ze-2]=arguments[Ze];return w.prototype[A].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,w,T){T||(T=0);var S=Array(16);if(typeof w=="string")for(var A=0;16>A;++A)S[A]=w.charCodeAt(T++)|w.charCodeAt(T++)<<8|w.charCodeAt(T++)<<16|w.charCodeAt(T++)<<24;else for(A=0;16>A;++A)S[A]=w[T++]|w[T++]<<8|w[T++]<<16|w[T++]<<24;w=_.g[0],T=_.g[1],A=_.g[2];var O=_.g[3],k=w+(O^T&(A^O))+S[0]+3614090360&4294967295;w=T+(k<<7&4294967295|k>>>25),k=O+(A^w&(T^A))+S[1]+3905402710&4294967295,O=w+(k<<12&4294967295|k>>>20),k=A+(T^O&(w^T))+S[2]+606105819&4294967295,A=O+(k<<17&4294967295|k>>>15),k=T+(w^A&(O^w))+S[3]+3250441966&4294967295,T=A+(k<<22&4294967295|k>>>10),k=w+(O^T&(A^O))+S[4]+4118548399&4294967295,w=T+(k<<7&4294967295|k>>>25),k=O+(A^w&(T^A))+S[5]+1200080426&4294967295,O=w+(k<<12&4294967295|k>>>20),k=A+(T^O&(w^T))+S[6]+2821735955&4294967295,A=O+(k<<17&4294967295|k>>>15),k=T+(w^A&(O^w))+S[7]+4249261313&4294967295,T=A+(k<<22&4294967295|k>>>10),k=w+(O^T&(A^O))+S[8]+1770035416&4294967295,w=T+(k<<7&4294967295|k>>>25),k=O+(A^w&(T^A))+S[9]+2336552879&4294967295,O=w+(k<<12&4294967295|k>>>20),k=A+(T^O&(w^T))+S[10]+4294925233&4294967295,A=O+(k<<17&4294967295|k>>>15),k=T+(w^A&(O^w))+S[11]+2304563134&4294967295,T=A+(k<<22&4294967295|k>>>10),k=w+(O^T&(A^O))+S[12]+1804603682&4294967295,w=T+(k<<7&4294967295|k>>>25),k=O+(A^w&(T^A))+S[13]+4254626195&4294967295,O=w+(k<<12&4294967295|k>>>20),k=A+(T^O&(w^T))+S[14]+2792965006&4294967295,A=O+(k<<17&4294967295|k>>>15),k=T+(w^A&(O^w))+S[15]+1236535329&4294967295,T=A+(k<<22&4294967295|k>>>10),k=w+(A^O&(T^A))+S[1]+4129170786&4294967295,w=T+(k<<5&4294967295|k>>>27),k=O+(T^A&(w^T))+S[6]+3225465664&4294967295,O=w+(k<<9&4294967295|k>>>23),k=A+(w^T&(O^w))+S[11]+643717713&4294967295,A=O+(k<<14&4294967295|k>>>18),k=T+(O^w&(A^O))+S[0]+3921069994&4294967295,T=A+(k<<20&4294967295|k>>>12),k=w+(A^O&(T^A))+S[5]+3593408605&4294967295,w=T+(k<<5&4294967295|k>>>27),k=O+(T^A&(w^T))+S[10]+38016083&4294967295,O=w+(k<<9&4294967295|k>>>23),k=A+(w^T&(O^w))+S[15]+3634488961&4294967295,A=O+(k<<14&4294967295|k>>>18),k=T+(O^w&(A^O))+S[4]+3889429448&4294967295,T=A+(k<<20&4294967295|k>>>12),k=w+(A^O&(T^A))+S[9]+568446438&4294967295,w=T+(k<<5&4294967295|k>>>27),k=O+(T^A&(w^T))+S[14]+3275163606&4294967295,O=w+(k<<9&4294967295|k>>>23),k=A+(w^T&(O^w))+S[3]+4107603335&4294967295,A=O+(k<<14&4294967295|k>>>18),k=T+(O^w&(A^O))+S[8]+1163531501&4294967295,T=A+(k<<20&4294967295|k>>>12),k=w+(A^O&(T^A))+S[13]+2850285829&4294967295,w=T+(k<<5&4294967295|k>>>27),k=O+(T^A&(w^T))+S[2]+4243563512&4294967295,O=w+(k<<9&4294967295|k>>>23),k=A+(w^T&(O^w))+S[7]+1735328473&4294967295,A=O+(k<<14&4294967295|k>>>18),k=T+(O^w&(A^O))+S[12]+2368359562&4294967295,T=A+(k<<20&4294967295|k>>>12),k=w+(T^A^O)+S[5]+4294588738&4294967295,w=T+(k<<4&4294967295|k>>>28),k=O+(w^T^A)+S[8]+2272392833&4294967295,O=w+(k<<11&4294967295|k>>>21),k=A+(O^w^T)+S[11]+1839030562&4294967295,A=O+(k<<16&4294967295|k>>>16),k=T+(A^O^w)+S[14]+4259657740&4294967295,T=A+(k<<23&4294967295|k>>>9),k=w+(T^A^O)+S[1]+2763975236&4294967295,w=T+(k<<4&4294967295|k>>>28),k=O+(w^T^A)+S[4]+1272893353&4294967295,O=w+(k<<11&4294967295|k>>>21),k=A+(O^w^T)+S[7]+4139469664&4294967295,A=O+(k<<16&4294967295|k>>>16),k=T+(A^O^w)+S[10]+3200236656&4294967295,T=A+(k<<23&4294967295|k>>>9),k=w+(T^A^O)+S[13]+681279174&4294967295,w=T+(k<<4&4294967295|k>>>28),k=O+(w^T^A)+S[0]+3936430074&4294967295,O=w+(k<<11&4294967295|k>>>21),k=A+(O^w^T)+S[3]+3572445317&4294967295,A=O+(k<<16&4294967295|k>>>16),k=T+(A^O^w)+S[6]+76029189&4294967295,T=A+(k<<23&4294967295|k>>>9),k=w+(T^A^O)+S[9]+3654602809&4294967295,w=T+(k<<4&4294967295|k>>>28),k=O+(w^T^A)+S[12]+3873151461&4294967295,O=w+(k<<11&4294967295|k>>>21),k=A+(O^w^T)+S[15]+530742520&4294967295,A=O+(k<<16&4294967295|k>>>16),k=T+(A^O^w)+S[2]+3299628645&4294967295,T=A+(k<<23&4294967295|k>>>9),k=w+(A^(T|~O))+S[0]+4096336452&4294967295,w=T+(k<<6&4294967295|k>>>26),k=O+(T^(w|~A))+S[7]+1126891415&4294967295,O=w+(k<<10&4294967295|k>>>22),k=A+(w^(O|~T))+S[14]+2878612391&4294967295,A=O+(k<<15&4294967295|k>>>17),k=T+(O^(A|~w))+S[5]+4237533241&4294967295,T=A+(k<<21&4294967295|k>>>11),k=w+(A^(T|~O))+S[12]+1700485571&4294967295,w=T+(k<<6&4294967295|k>>>26),k=O+(T^(w|~A))+S[3]+2399980690&4294967295,O=w+(k<<10&4294967295|k>>>22),k=A+(w^(O|~T))+S[10]+4293915773&4294967295,A=O+(k<<15&4294967295|k>>>17),k=T+(O^(A|~w))+S[1]+2240044497&4294967295,T=A+(k<<21&4294967295|k>>>11),k=w+(A^(T|~O))+S[8]+1873313359&4294967295,w=T+(k<<6&4294967295|k>>>26),k=O+(T^(w|~A))+S[15]+4264355552&4294967295,O=w+(k<<10&4294967295|k>>>22),k=A+(w^(O|~T))+S[6]+2734768916&4294967295,A=O+(k<<15&4294967295|k>>>17),k=T+(O^(A|~w))+S[13]+1309151649&4294967295,T=A+(k<<21&4294967295|k>>>11),k=w+(A^(T|~O))+S[4]+4149444226&4294967295,w=T+(k<<6&4294967295|k>>>26),k=O+(T^(w|~A))+S[11]+3174756917&4294967295,O=w+(k<<10&4294967295|k>>>22),k=A+(w^(O|~T))+S[2]+718787259&4294967295,A=O+(k<<15&4294967295|k>>>17),k=T+(O^(A|~w))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+w&4294967295,_.g[1]=_.g[1]+(A+(k<<21&4294967295|k>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+O&4294967295}r.prototype.u=function(_,w){w===void 0&&(w=_.length);for(var T=w-this.blockSize,S=this.B,A=this.h,O=0;O<w;){if(A==0)for(;O<=T;)i(this,_,O),O+=this.blockSize;if(typeof _=="string"){for(;O<w;)if(S[A++]=_.charCodeAt(O++),A==this.blockSize){i(this,S),A=0;break}}else for(;O<w;)if(S[A++]=_[O++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=w},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var w=1;w<_.length-8;++w)_[w]=0;var T=8*this.o;for(w=_.length-8;w<_.length;++w)_[w]=T&255,T/=256;for(this.u(_),_=Array(16),w=T=0;4>w;++w)for(var S=0;32>S;S+=8)_[T++]=this.g[w]>>>S&255;return _};function o(_,w){var T=l;return Object.prototype.hasOwnProperty.call(T,_)?T[_]:T[_]=w(_)}function s(_,w){this.h=w;for(var T=[],S=!0,A=_.length-1;0<=A;A--){var O=_[A]|0;S&&O==w||(T[A]=O,S=!1)}this.g=T}var l={};function u(_){return-128<=_&&128>_?o(_,function(w){return new s([w|0],0>w?-1:0)}):new s([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return m;if(0>_)return R(c(-_));for(var w=[],T=1,S=0;_>=T;S++)w[S]=_/T|0,T*=4294967296;return new s(w,0)}function h(_,w){if(_.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(_.charAt(0)=="-")return R(h(_.substring(1),w));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(w,8)),S=m,A=0;A<_.length;A+=8){var O=Math.min(8,_.length-A),k=parseInt(_.substring(A,A+O),w);8>O?(O=c(Math.pow(w,O)),S=S.j(O).add(c(k))):(S=S.j(T),S=S.add(c(k)))}return S}var m=u(0),g=u(1),b=u(16777216);t=s.prototype,t.m=function(){if(C(this))return-R(this).m();for(var _=0,w=1,T=0;T<this.g.length;T++){var S=this.i(T);_+=(0<=S?S:4294967296+S)*w,w*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I(this))return"0";if(C(this))return"-"+R(this).toString(_);for(var w=c(Math.pow(_,6)),T=this,S="";;){var A=P(T,w).g;T=E(T,A.j(w));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(_);if(T=A,I(T))return O+S;for(;6>O.length;)O="0"+O;S=O+S}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function I(_){if(_.h!=0)return!1;for(var w=0;w<_.g.length;w++)if(_.g[w]!=0)return!1;return!0}function C(_){return _.h==-1}t.l=function(_){return _=E(this,_),C(_)?-1:I(_)?0:1};function R(_){for(var w=_.g.length,T=[],S=0;S<w;S++)T[S]=~_.g[S];return new s(T,~_.h).add(g)}t.abs=function(){return C(this)?R(this):this},t.add=function(_){for(var w=Math.max(this.g.length,_.g.length),T=[],S=0,A=0;A<=w;A++){var O=S+(this.i(A)&65535)+(_.i(A)&65535),k=(O>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);S=k>>>16,O&=65535,k&=65535,T[A]=k<<16|O}return new s(T,T[T.length-1]&-2147483648?-1:0)};function E(_,w){return _.add(R(w))}t.j=function(_){if(I(this)||I(_))return m;if(C(this))return C(_)?R(this).j(R(_)):R(R(this).j(_));if(C(_))return R(this.j(R(_)));if(0>this.l(b)&&0>_.l(b))return c(this.m()*_.m());for(var w=this.g.length+_.g.length,T=[],S=0;S<2*w;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var A=0;A<_.g.length;A++){var O=this.i(S)>>>16,k=this.i(S)&65535,Ze=_.i(A)>>>16,rn=_.i(A)&65535;T[2*S+2*A]+=k*rn,v(T,2*S+2*A),T[2*S+2*A+1]+=O*rn,v(T,2*S+2*A+1),T[2*S+2*A+1]+=k*Ze,v(T,2*S+2*A+1),T[2*S+2*A+2]+=O*Ze,v(T,2*S+2*A+2)}for(S=0;S<w;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=w;S<2*w;S++)T[S]=0;return new s(T,0)};function v(_,w){for(;(_[w]&65535)!=_[w];)_[w+1]+=_[w]>>>16,_[w]&=65535,w++}function x(_,w){this.g=_,this.h=w}function P(_,w){if(I(w))throw Error("division by zero");if(I(_))return new x(m,m);if(C(_))return w=P(R(_),w),new x(R(w.g),R(w.h));if(C(w))return w=P(_,R(w)),new x(R(w.g),w.h);if(30<_.g.length){if(C(_)||C(w))throw Error("slowDivide_ only works with positive integers.");for(var T=g,S=w;0>=S.l(_);)T=L(T),S=L(S);var A=N(T,1),O=N(S,1);for(S=N(S,2),T=N(T,2);!I(S);){var k=O.add(S);0>=k.l(_)&&(A=A.add(T),O=k),S=N(S,1),T=N(T,1)}return w=E(_,A.j(w)),new x(A,w)}for(A=m;0<=_.l(w);){for(T=Math.max(1,Math.floor(_.m()/w.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),O=c(T),k=O.j(w);C(k)||0<k.l(_);)T-=S,O=c(T),k=O.j(w);I(O)&&(O=g),A=A.add(O),_=E(_,k)}return new x(A,_)}t.A=function(_){return P(this,_).h},t.and=function(_){for(var w=Math.max(this.g.length,_.g.length),T=[],S=0;S<w;S++)T[S]=this.i(S)&_.i(S);return new s(T,this.h&_.h)},t.or=function(_){for(var w=Math.max(this.g.length,_.g.length),T=[],S=0;S<w;S++)T[S]=this.i(S)|_.i(S);return new s(T,this.h|_.h)},t.xor=function(_){for(var w=Math.max(this.g.length,_.g.length),T=[],S=0;S<w;S++)T[S]=this.i(S)^_.i(S);return new s(T,this.h^_.h)};function L(_){for(var w=_.g.length+1,T=[],S=0;S<w;S++)T[S]=_.i(S)<<1|_.i(S-1)>>>31;return new s(T,_.h)}function N(_,w){var T=w>>5;w%=32;for(var S=_.g.length-T,A=[],O=0;O<S;O++)A[O]=0<w?_.i(O+T)>>>w|_.i(O+T+1)<<32-w:_.i(O+T);return new s(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=h,pE=s}).apply(typeof g0<"u"?g0:typeof self<"u"?self:typeof window<"u"?window:{});var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mE,gE,_s,yE,Xl,$h,vE,wE,_E;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof kl=="object"&&kl];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,f){if(f)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var j=a[y];if(!(j in p))break e;p=p[j]}a=a[a.length-1],y=p[a],f=f(y),f!=y&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function o(a,f){a instanceof String&&(a+="");var p=0,y=!1,j={next:function(){if(!y&&p<a.length){var D=p++;return{value:f(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}i("Array.prototype.values",function(a){return a||function(){return o(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function u(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function m(a,f,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,y),a.apply(f,j)}}return function(){return a.apply(f,arguments)}}function g(a,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,g.apply(null,arguments)}function b(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function I(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,j,D){for(var z=Array(arguments.length-2),he=2;he<arguments.length;he++)z[he-2]=arguments[he];return f.prototype[j].apply(y,z)}}function C(a){const f=a.length;if(0<f){const p=Array(f);for(let y=0;y<f;y++)p[y]=a[y];return p}return[]}function R(a,f){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const j=a.length||0,D=y.length||0;a.length=j+D;for(let z=0;z<D;z++)a[j+z]=y[z]}else a.push(y)}}class E{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function v(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var L=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function N(a,f,p){for(const y in a)f.call(p,a[y],y,a)}function _(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function w(a){const f={};for(const p in a)f[p]=a[p];return f}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,f){let p,y;for(let j=1;j<arguments.length;j++){y=arguments[j];for(p in y)a[p]=y[p];for(let D=0;D<T.length;D++)p=T[D],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function A(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function O(a){l.setTimeout(()=>{throw a},0)}function k(){var a=G;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,p){const y=rn.get();y.set(f,p),this.h?this.h.next=y:this.g=y,this.h=y}}var rn=new E(()=>new Hr,a=>a.reset());class Hr{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Dt,U=!1,G=new Ze,X=()=>{const a=l.Promise.resolve(void 0);Dt=()=>{a.then(ce)}};var ce=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(p){O(p)}var f=rn;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}U=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Lt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,f),l.removeEventListener("test",p,f)}catch{}return a}();function kt(a,f){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(L){e:{try{P(f.nodeName);var j=!0;break e}catch{}j=!1}j||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&kt.aa.h.call(this)}}I(kt,xe);var wt={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var It="closure_listenable_"+(1e6*Math.random()|0),Wr=0;function On(a,f,p,y,j){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!y,this.ha=j,this.key=++Wr,this.da=this.fa=!1}function tr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function jn(a){this.src=a,this.g={},this.h=0}jn.prototype.add=function(a,f,p,y,j){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=Hc(a,f,y,j);return-1<z?(f=a[z],p||(f.fa=!1)):(f=new On(f,this.src,D,!!y,j),f.fa=p,a.push(f)),f};function Kt(a,f){var p=f.type;if(p in a.g){var y=a.g[p],j=Array.prototype.indexOf.call(y,f,void 0),D;(D=0<=j)&&Array.prototype.splice.call(y,j,1),D&&(tr(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Hc(a,f,p,y){for(var j=0;j<a.length;++j){var D=a[j];if(!D.da&&D.listener==f&&D.capture==!!p&&D.ha==y)return j}return-1}var Wc="closure_lm_"+(1e6*Math.random()|0),Gc={};function Mm(a,f,p,y,j){if(Array.isArray(f)){for(var D=0;D<f.length;D++)Mm(a,f[D],p,y,j);return null}return p=$m(p),a&&a[It]?a.K(f,p,c(y)?!!y.capture:!!y,j):bx(a,f,p,!1,y,j)}function bx(a,f,p,y,j,D){if(!f)throw Error("Invalid event type");var z=c(j)?!!j.capture:!!j,he=Qc(a);if(he||(a[Wc]=he=new jn(a)),p=he.add(f,p,y,z,D),p.proxy)return p;if(y=Tx(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)Lt||(j=z),j===void 0&&(j=!1),a.addEventListener(f.toString(),y,j);else if(a.attachEvent)a.attachEvent(Fm(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Tx(){function a(p){return f.call(a.src,a.listener,p)}const f=Sx;return a}function Vm(a,f,p,y,j){if(Array.isArray(f))for(var D=0;D<f.length;D++)Vm(a,f[D],p,y,j);else y=c(y)?!!y.capture:!!y,p=$m(p),a&&a[It]?(a=a.i,f=String(f).toString(),f in a.g&&(D=a.g[f],p=Hc(D,p,y,j),-1<p&&(tr(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete a.g[f],a.h--)))):a&&(a=Qc(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Hc(f,p,y,j)),(p=-1<a?f[a]:null)&&qc(p))}function qc(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[It])Kt(f.i,a);else{var p=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(p,y,a.capture):f.detachEvent?f.detachEvent(Fm(p),y):f.addListener&&f.removeListener&&f.removeListener(y),(p=Qc(f))?(Kt(p,a),p.h==0&&(p.src=null,f[Wc]=null)):tr(a)}}}function Fm(a){return a in Gc?Gc[a]:Gc[a]="on"+a}function Sx(a,f){if(a.da)a=!0;else{f=new kt(f,this);var p=a.listener,y=a.ha||a.src;a.fa&&qc(a),a=p.call(y,f)}return a}function Qc(a){return a=a[Wc],a instanceof jn?a:null}var Kc="__closure_events_fn_"+(1e9*Math.random()>>>0);function $m(a){return typeof a=="function"?a:(a[Kc]||(a[Kc]=function(f){return a.handleEvent(f)}),a[Kc])}function lt(){ne.call(this),this.i=new jn(this),this.M=this,this.F=null}I(lt,ne),lt.prototype[It]=!0,lt.prototype.removeEventListener=function(a,f,p,y){Vm(this,a,f,p,y)};function _t(a,f){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new xe(f,a);else if(f instanceof xe)f.target=f.target||a;else{var j=f;f=new xe(y,a),S(f,j)}if(j=!0,p)for(var D=p.length-1;0<=D;D--){var z=f.g=p[D];j=Fa(z,y,!0,f)&&j}if(z=f.g=a,j=Fa(z,y,!0,f)&&j,j=Fa(z,y,!1,f)&&j,p)for(D=0;D<p.length;D++)z=f.g=p[D],j=Fa(z,y,!1,f)&&j}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],y=0;y<p.length;y++)tr(p[y]);delete a.g[f],a.h--}}this.F=null},lt.prototype.K=function(a,f,p,y){return this.i.add(String(a),f,!1,p,y)},lt.prototype.L=function(a,f,p,y){return this.i.add(String(a),f,!0,p,y)};function Fa(a,f,p,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var j=!0,D=0;D<f.length;++D){var z=f[D];if(z&&!z.da&&z.capture==p){var he=z.listener,et=z.ha||z.src;z.fa&&Kt(a.i,z),j=he.call(et,y)!==!1&&j}}return j&&!y.defaultPrevented}function zm(a,f,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function Um(a){a.g=zm(()=>{a.g=null,a.i&&(a.i=!1,Um(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class kx extends ne{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Um(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zo(a){ne.call(this),this.h=a,this.g={}}I(zo,ne);var Bm=[];function Hm(a){N(a.g,function(f,p){this.g.hasOwnProperty(p)&&qc(f)},a),a.g={}}zo.prototype.N=function(){zo.aa.N.call(this),Hm(this)},zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yc=l.JSON.stringify,Ix=l.JSON.parse,Ax=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Xc(){}Xc.prototype.h=null;function Wm(a){return a.h||(a.h=a.i())}function Gm(){}var Uo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jc(){xe.call(this,"d")}I(Jc,xe);function Zc(){xe.call(this,"c")}I(Zc,xe);var Gr={},qm=null;function $a(){return qm=qm||new lt}Gr.La="serverreachability";function Qm(a){xe.call(this,Gr.La,a)}I(Qm,xe);function Bo(a){const f=$a();_t(f,new Qm(f))}Gr.STAT_EVENT="statevent";function Km(a,f){xe.call(this,Gr.STAT_EVENT,a),this.stat=f}I(Km,xe);function Et(a){const f=$a();_t(f,new Km(f,a))}Gr.Ma="timingevent";function Ym(a,f){xe.call(this,Gr.Ma,a),this.size=f}I(Ym,xe);function Ho(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Wo(){this.g=!0}Wo.prototype.xa=function(){this.g=!1};function Cx(a,f,p,y,j,D){a.info(function(){if(a.g)if(D)for(var z="",he=D.split("&"),et=0;et<he.length;et++){var ae=he[et].split("=");if(1<ae.length){var ut=ae[0];ae=ae[1];var ct=ut.split("_");z=2<=ct.length&&ct[1]=="type"?z+(ut+"="+ae+"&"):z+(ut+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+y+") [attempt "+j+"]: "+f+`
`+p+`
`+z})}function Px(a,f,p,y,j,D,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+j+"]: "+f+`
`+p+`
`+D+" "+z})}function Ci(a,f,p,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ox(a,p)+(y?" "+y:"")})}function Rx(a,f){a.info(function(){return"TIMEOUT: "+f})}Wo.prototype.info=function(){};function Ox(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var j=y[1];if(Array.isArray(j)&&!(1>j.length)){var D=j[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<j.length;z++)j[z]=""}}}}return Yc(p)}catch{return f}}var za={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ef;function Ua(){}I(Ua,Xc),Ua.prototype.g=function(){return new XMLHttpRequest},Ua.prototype.i=function(){return{}},ef=new Ua;function nr(a,f,p,y){this.j=a,this.i=f,this.l=p,this.R=y||1,this.U=new zo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jm}function Jm(){this.i=null,this.g="",this.h=!1}var Zm={},tf={};function nf(a,f,p){a.L=1,a.v=Ga(Nn(f)),a.m=p,a.P=!0,eg(a,null)}function eg(a,f){a.F=Date.now(),Ba(a),a.A=Nn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),pg(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Jm,a.g=Og(a.j,p?f:null,!a.m),0<a.O&&(a.M=new kx(g(a.Y,a,a.g),a.O)),f=a.U,p=a.g,y=a.ca;var j="readystatechange";Array.isArray(j)||(j&&(Bm[0]=j.toString()),j=Bm);for(var D=0;D<j.length;D++){var z=Mm(p,j[D],y||f.handleEvent,!1,f.h||f);if(!z)break;f.g[z.key]=z}f=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Bo(),Cx(a.i,a.u,a.A,a.l,a.R,a.m)}nr.prototype.ca=function(a){a=a.target;const f=this.M;f&&Dn(a)==3?f.j():this.Y(a)},nr.prototype.Y=function(a){try{if(a==this.g)e:{const ct=Dn(this.g);var f=this.g.Ba();const Oi=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Eg(this.g)))){this.J||ct!=4||f==7||(f==8||0>=Oi?Bo(3):Bo(2)),rf(this);var p=this.g.Z();this.X=p;t:if(tg(this)){var y=Eg(this.g);a="";var j=y.length,D=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),Go(this);var z="";break t}this.h.i=new l.TextDecoder}for(f=0;f<j;f++)this.h.h=!0,a+=this.h.i.decode(y[f],{stream:!(D&&f==j-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,Px(this.i,this.u,this.A,this.l,this.R,ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var he,et=this.g;if((he=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(he)){var ae=he;break t}}ae=null}if(p=ae)Ci(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,of(this,p);else{this.o=!1,this.s=3,Et(12),qr(this),Go(this);break e}}if(this.P){p=!0;let on;for(;!this.J&&this.C<z.length;)if(on=jx(this,z),on==tf){ct==4&&(this.s=4,Et(14),p=!1),Ci(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Zm){this.s=4,Et(15),Ci(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Ci(this.i,this.l,on,null),of(this,on);if(tg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||z.length!=0||this.h.h||(this.s=1,Et(16),p=!1),this.o=this.o&&p,!p)Ci(this.i,this.l,z,"[Invalid Chunked Response]"),qr(this),Go(this);else if(0<z.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),ff(ut),ut.M=!0,Et(11))}}else Ci(this.i,this.l,z,null),of(this,z);ct==4&&qr(this),this.o&&!this.J&&(ct==4?Ag(this.j,this):(this.o=!1,Ba(this)))}else Yx(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),qr(this),Go(this)}}}catch{}finally{}};function tg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jx(a,f){var p=a.C,y=f.indexOf(`
`,p);return y==-1?tf:(p=Number(f.substring(p,y)),isNaN(p)?Zm:(y+=1,y+p>f.length?tf:(f=f.slice(y,y+p),a.C=y+p,f)))}nr.prototype.cancel=function(){this.J=!0,qr(this)};function Ba(a){a.S=Date.now()+a.I,ng(a,a.I)}function ng(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ho(g(a.ba,a),f)}function rf(a){a.B&&(l.clearTimeout(a.B),a.B=null)}nr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Rx(this.i,this.A),this.L!=2&&(Bo(),Et(17)),qr(this),this.s=2,Go(this)):ng(this,this.S-a)};function Go(a){a.j.G==0||a.J||Ag(a.j,a)}function qr(a){rf(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Hm(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function of(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||sf(p.h,a))){if(!a.K&&sf(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var j=y;if(j[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Xa(p),Ka(p);else break e;cf(p),Et(18)}}else p.za=j[1],0<p.za-p.T&&37500>j[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ho(g(p.Za,p),6e3));if(1>=og(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Kr(p,11)}else if((a.K||p.g==a)&&Xa(p),!v(f))for(j=p.Da.g.parse(f),f=0;f<j.length;f++){let ae=j[f];if(p.T=ae[0],ae=ae[1],p.G==2)if(ae[0]=="c"){p.K=ae[1],p.ia=ae[2];const ut=ae[3];ut!=null&&(p.la=ut,p.j.info("VER="+p.la));const ct=ae[4];ct!=null&&(p.Aa=ct,p.j.info("SVER="+p.Aa));const Oi=ae[5];Oi!=null&&typeof Oi=="number"&&0<Oi&&(y=1.5*Oi,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const on=a.g;if(on){const Za=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Za){var D=y.h;D.g||Za.indexOf("spdy")==-1&&Za.indexOf("quic")==-1&&Za.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(af(D,D.h),D.h=null))}if(y.D){const df=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;df&&(y.ya=df,ye(y.I,y.D,df))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var z=a;if(y.qa=Rg(y,y.J?y.ia:null,y.W),z.K){sg(y.h,z);var he=z,et=y.L;et&&(he.I=et),he.B&&(rf(he),Ba(he)),y.g=z}else kg(y);0<p.i.length&&Ya(p)}else ae[0]!="stop"&&ae[0]!="close"||Kr(p,7);else p.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Kr(p,7):uf(p):ae[0]!="noop"&&p.l&&p.l.ta(ae),p.v=0)}}Bo(4)}catch{}}var Nx=class{constructor(a,f){this.g=a,this.map=f}};function rg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ig(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function og(a){return a.h?1:a.g?a.g.size:0}function sf(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function af(a,f){a.g?a.g.add(f):a.h=f}function sg(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}rg.prototype.cancel=function(){if(this.i=ag(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ag(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return C(a.i)}function Dx(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var f=[],p=a.length,y=0;y<p;y++)f.push(a[y]);return f}f=[],p=0;for(y in a)f[p++]=a[y];return f}function Lx(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const y in a)f[p++]=y;return f}}}function lg(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=Lx(a),y=Dx(a),j=y.length,D=0;D<j;D++)f.call(void 0,y[D],p&&p[D],a)}var ug=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mx(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),j=null;if(0<=y){var D=a[p].substring(0,y);j=a[p].substring(y+1)}else D=a[p];f(D,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qr){this.h=a.h,Ha(this,a.j),this.o=a.o,this.g=a.g,Wa(this,a.s),this.l=a.l;var f=a.i,p=new Ko;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),cg(this,p),this.m=a.m}else a&&(f=String(a).match(ug))?(this.h=!1,Ha(this,f[1]||"",!0),this.o=qo(f[2]||""),this.g=qo(f[3]||"",!0),Wa(this,f[4]),this.l=qo(f[5]||"",!0),cg(this,f[6]||"",!0),this.m=qo(f[7]||"")):(this.h=!1,this.i=new Ko(null,this.h))}Qr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Qo(f,fg,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Qo(f,fg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Qo(p,p.charAt(0)=="/"?$x:Fx,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Qo(p,Ux)),a.join("")};function Nn(a){return new Qr(a)}function Ha(a,f,p){a.j=p?qo(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Wa(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function cg(a,f,p){f instanceof Ko?(a.i=f,Bx(a.i,a.h)):(p||(f=Qo(f,zx)),a.i=new Ko(f,a.h))}function ye(a,f,p){a.i.set(f,p)}function Ga(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qo(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qo(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,Vx),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Vx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fg=/[#\/\?@]/g,Fx=/[#\?:]/g,$x=/[#\?]/g,zx=/[#\?@]/g,Ux=/#/g;function Ko(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function rr(a){a.g||(a.g=new Map,a.h=0,a.i&&Mx(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Ko.prototype,t.add=function(a,f){rr(this),this.i=null,a=Pi(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function dg(a,f){rr(a),f=Pi(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function hg(a,f){return rr(a),f=Pi(a,f),a.g.has(f)}t.forEach=function(a,f){rr(this),this.g.forEach(function(p,y){p.forEach(function(j){a.call(f,j,y,this)},this)},this)},t.na=function(){rr(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let y=0;y<f.length;y++){const j=a[y];for(let D=0;D<j.length;D++)p.push(f[y])}return p},t.V=function(a){rr(this);let f=[];if(typeof a=="string")hg(this,a)&&(f=f.concat(this.g.get(Pi(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return rr(this),this.i=null,a=Pi(this,a),hg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function pg(a,f,p){dg(a,f),0<p.length&&(a.i=null,a.g.set(Pi(a,f),C(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var y=f[p];const D=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var j=D;z[y]!==""&&(j+="="+encodeURIComponent(String(z[y]))),a.push(j)}}return this.i=a.join("&")};function Pi(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Bx(a,f){f&&!a.j&&(rr(a),a.i=null,a.g.forEach(function(p,y){var j=y.toLowerCase();y!=j&&(dg(this,y),pg(this,j,p))},a)),a.j=f}function Hx(a,f){const p=new Wo;if(l.Image){const y=new Image;y.onload=b(ir,p,"TestLoadImage: loaded",!0,f,y),y.onerror=b(ir,p,"TestLoadImage: error",!1,f,y),y.onabort=b(ir,p,"TestLoadImage: abort",!1,f,y),y.ontimeout=b(ir,p,"TestLoadImage: timeout",!1,f,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function Wx(a,f){const p=new Wo,y=new AbortController,j=setTimeout(()=>{y.abort(),ir(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(j),D.ok?ir(p,"TestPingServer: ok",!0,f):ir(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(j),ir(p,"TestPingServer: error",!1,f)})}function ir(a,f,p,y,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),y(p)}catch{}}function Gx(){this.g=new Ax}function qx(a,f,p){const y=p||"";try{lg(a,function(j,D){let z=j;c(j)&&(z=Yc(j)),f.push(y+D+"="+encodeURIComponent(z))})}catch(j){throw f.push(y+"type="+encodeURIComponent("_badmap")),j}}function Yo(a){this.l=a.Ub||null,this.j=a.eb||!1}I(Yo,Xc),Yo.prototype.g=function(){return new qa(this.l,this.j)},Yo.prototype.i=function(a){return function(){return a}}({});function qa(a,f){lt.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(qa,lt),t=qa.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Jo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Jo(this)),this.g&&(this.readyState=3,Jo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function mg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Xo(this):Jo(this),this.readyState==3&&mg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Xo(this))},t.Qa=function(a){this.g&&(this.response=a,Xo(this))},t.ga=function(){this.g&&Xo(this)};function Xo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Jo(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function Jo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gg(a){let f="";return N(a,function(p,y){f+=y,f+=":",f+=p,f+=`\r
`}),f}function lf(a,f,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=gg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ye(a,f,p))}function De(a){lt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(De,lt);var Qx=/^https?$/i,Kx=["POST","PUT"];t=De.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ef.g(),this.v=this.o?Wm(this.o):Wm(ef),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(D){yg(this,D);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var j in y)p.set(j,y[j]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())p.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),j=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Kx,f,void 0))||y||j||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of p)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_g(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){yg(this,D)}};function yg(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,vg(a),Qa(a)}function vg(a){a.A||(a.A=!0,_t(a,"complete"),_t(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_t(this,"complete"),_t(this,"abort"),Qa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qa(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wg(this):this.bb())},t.bb=function(){wg(this)};function wg(a){if(a.h&&typeof s<"u"&&(!a.v[1]||Dn(a)!=4||a.Z()!=2)){if(a.u&&Dn(a)==4)zm(a.Ea,0,a);else if(_t(a,"readystatechange"),Dn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var y;if(y=z===0){var j=String(a.D).match(ug)[1]||null;!j&&l.self&&l.self.location&&(j=l.self.location.protocol.slice(0,-1)),y=!Qx.test(j?j.toLowerCase():"")}p=y}if(p)_t(a,"complete"),_t(a,"success");else{a.m=6;try{var D=2<Dn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",vg(a)}}finally{Qa(a)}}}}function Qa(a,f){if(a.g){_g(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||_t(a,"ready");try{p.onreadystatechange=y}catch{}}}function _g(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Ix(f)}};function Eg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Yx(a){const f={};a=(a.g&&2<=Dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var p=A(a[y]);const j=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=f[j]||[];f[j]=D,D.push(p)}_(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zo(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function xg(a){this.Aa=0,this.i=[],this.j=new Wo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zo("baseRetryDelayMs",5e3,a),this.cb=Zo("retryDelaySeedMs",1e4,a),this.Wa=Zo("forwardChannelMaxRetries",2,a),this.wa=Zo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rg(a&&a.concurrentRequestLimit),this.Da=new Gx,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xg.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,y){Et(0),this.W=a,this.H=f||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Rg(this,null,this.W),Ya(this)};function uf(a){if(bg(a),a.G==3){var f=a.U++,p=Nn(a.I);if(ye(p,"SID",a.K),ye(p,"RID",f),ye(p,"TYPE","terminate"),es(a,p),f=new nr(a,a.j,f),f.L=2,f.v=Ga(Nn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=f.v,p=!0),p||(f.g=Og(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ba(f)}Pg(a)}function Ka(a){a.g&&(ff(a),a.g.cancel(),a.g=null)}function bg(a){Ka(a),a.u&&(l.clearTimeout(a.u),a.u=null),Xa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ya(a){if(!ig(a.h)&&!a.s){a.s=!0;var f=a.Ga;Dt||X(),U||(Dt(),U=!0),G.add(f,a),a.B=0}}function Xx(a,f){return og(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ho(g(a.Ga,a,f),Cg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const j=new nr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=w(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(j.H=D,D=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=Sg(this,j,f),p=Nn(this.I),ye(p,"RID",a),ye(p,"CVER",22),this.D&&ye(p,"X-HTTP-Session-Id",this.D),es(this,p),D&&(this.O?f="headers="+encodeURIComponent(String(gg(D)))+"&"+f:this.m&&lf(p,this.m,D)),af(this.h,j),this.Ua&&ye(p,"TYPE","init"),this.P?(ye(p,"$req",f),ye(p,"SID","null"),j.T=!0,nf(j,p,null)):nf(j,p,f),this.G=2}}else this.G==3&&(a?Tg(this,a):this.i.length==0||ig(this.h)||Tg(this))};function Tg(a,f){var p;f?p=f.l:p=a.U++;const y=Nn(a.I);ye(y,"SID",a.K),ye(y,"RID",p),ye(y,"AID",a.T),es(a,y),a.m&&a.o&&lf(y,a.m,a.o),p=new nr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Sg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),af(a.h,p),nf(p,y,f)}function es(a,f){a.H&&N(a.H,function(p,y){ye(f,y,p)}),a.l&&lg({},function(p,y){ye(f,y,p)})}function Sg(a,f,p){p=Math.min(a.i.length,p);var y=a.l?g(a.l.Na,a.l,a):null;e:{var j=a.i;let D=-1;for(;;){const z=["count="+p];D==-1?0<p?(D=j[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let he=!0;for(let et=0;et<p;et++){let ae=j[et].g;const ut=j[et].map;if(ae-=D,0>ae)D=Math.max(0,j[et].g-100),he=!1;else try{qx(ut,z,"req"+ae+"_")}catch{y&&y(ut)}}if(he){y=z.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,y}function kg(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;Dt||X(),U||(Dt(),U=!0),G.add(f,a),a.v=0}}function cf(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ho(g(a.Fa,a),Cg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ig(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ho(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Ka(this),Ig(this))};function ff(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ig(a){a.g=new nr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Nn(a.qa);ye(f,"RID","rpc"),ye(f,"SID",a.K),ye(f,"AID",a.T),ye(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(f,"TO",a.ja),ye(f,"TYPE","xmlhttp"),es(a,f),a.m&&a.o&&lf(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ga(Nn(f)),p.m=null,p.P=!0,eg(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Ka(this),cf(this),Et(19))};function Xa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ag(a,f){var p=null;if(a.g==f){Xa(a),ff(a),a.g=null;var y=2}else if(sf(a.h,f))p=f.D,sg(a.h,f),y=1;else return;if(a.G!=0){if(f.o)if(y==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var j=a.B;y=$a(),_t(y,new Ym(y,p)),Ya(a)}else kg(a);else if(j=f.s,j==3||j==0&&0<f.X||!(y==1&&Xx(a,f)||y==2&&cf(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),j){case 1:Kr(a,5);break;case 4:Kr(a,10);break;case 3:Kr(a,6);break;default:Kr(a,2)}}}function Cg(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function Kr(a,f){if(a.j.info("Error code "+f),f==2){var p=g(a.fb,a),y=a.Xa;const j=!y;y=new Qr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ha(y,"https"),Ga(y),j?Hx(y.toString(),p):Wx(y.toString(),p)}else Et(2);a.G=0,a.l&&a.l.sa(f),Pg(a),bg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Pg(a){if(a.G=0,a.ka=[],a.l){const f=ag(a.h);(f.length!=0||a.i.length!=0)&&(R(a.ka,f),R(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Rg(a,f,p){var y=p instanceof Qr?Nn(p):new Qr(p);if(y.g!="")f&&(y.g=f+"."+y.g),Wa(y,y.s);else{var j=l.location;y=j.protocol,f=f?f+"."+j.hostname:j.hostname,j=+j.port;var D=new Qr(null);y&&Ha(D,y),f&&(D.g=f),j&&Wa(D,j),p&&(D.l=p),y=D}return p=a.D,f=a.ya,p&&f&&ye(y,p,f),ye(y,"VER",a.la),es(a,y),y}function Og(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new De(new Yo({eb:p})):new De(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jg(){}t=jg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ja(){}Ja.prototype.g=function(a,f){return new Mt(a,f)};function Mt(a,f){lt.call(this),this.g=new xg(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!v(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!v(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Ri(this)}I(Mt,lt),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){uf(this.g)},Mt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Yc(a),a=p);f.i.push(new Nx(f.Ya++,a)),f.G==3&&Ya(f)},Mt.prototype.N=function(){this.g.l=null,delete this.j,uf(this.g),delete this.g,Mt.aa.N.call(this)};function Ng(a){Jc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}I(Ng,Jc);function Dg(){Zc.call(this),this.status=1}I(Dg,Zc);function Ri(a){this.g=a}I(Ri,jg),Ri.prototype.ua=function(){_t(this.g,"a")},Ri.prototype.ta=function(a){_t(this.g,new Ng(a))},Ri.prototype.sa=function(a){_t(this.g,new Dg)},Ri.prototype.ra=function(){_t(this.g,"b")},Ja.prototype.createWebChannel=Ja.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,_E=function(){return new Ja},wE=function(){return $a()},vE=Gr,$h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},za.NO_ERROR=0,za.TIMEOUT=8,za.HTTP_ERROR=6,Xl=za,Xm.COMPLETE="complete",yE=Xm,Gm.EventType=Uo,Uo.OPEN="a",Uo.CLOSE="b",Uo.ERROR="c",Uo.MESSAGE="d",lt.prototype.listen=lt.prototype.K,_s=Gm,gE=Yo,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,mE=De}).apply(typeof kl<"u"?kl:typeof self<"u"?self:typeof window<"u"?window:{});const y0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new lE("@firebase/firestore");function us(){return bi.logLevel}function q(t,...e){if(bi.logLevel<=oe.DEBUG){const n=e.map(Em);bi.debug(`Firestore (${Fo}): ${t}`,...n)}}function Ti(t,...e){if(bi.logLevel<=oe.ERROR){const n=e.map(Em);bi.error(`Firestore (${Fo}): ${t}`,...n)}}function Uu(t,...e){if(bi.logLevel<=oe.WARN){const n=e.map(Em);bi.warn(`Firestore (${Fo}): ${t}`,...n)}}function Em(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+t;throw Ti(e),new Error(e)}function We(t,e){t||re()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Vo{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class cR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fR{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new fi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new fi,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new fi)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new EE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new pt(e)}}class dR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string"),this.R=n.token,new pR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gR(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function To(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new Je(0,0))}static max(){return new Pe(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ca?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends ca{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const yR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends ca{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return yR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Y($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Y($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new Y($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ve.fromString(e))}static fromName(e){return new ee(Ve.fromString(e).popFirst(5))}static empty(){return new ee(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ve(e.slice()))}}function vR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Pe.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Mr(i,ee.empty(),e)}function wR(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(Pe.min(),ee.empty(),-1)}static max(){return new Mr(Pe.max(),ee.empty(),-1)}}function _R(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==ER)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let u=0;u<o;u++){const c=u;n(e[c]).next(h=>{s[c]=h,++l,l===o&&r(s)},h=>i(h))}})}static doWhile(e,n){return new V((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function bR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Dc(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}TE.oe=-1;function xm(t){return t==null}function Bu(t){return t===0&&1/t==-1/0}function TR(t){return typeof t=="number"&&Number.isInteger(t)&&!Bu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Da(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function SE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,o){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new Nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new w0(this.data.getIterator())}getIteratorFrom(e){return new w0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yt(this.comparator);return n.data=e,n}}class w0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new dn([])}unionWith(e){let n=new yt(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new SR("Invalid base64 string: "+o):o}}(e);return new Cn(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Cn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Cn.EMPTY_BYTE_STRING=new Cn("");const kR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(t){if(We(!!t),typeof t=="string"){let e=0;const n=kR.exec(t);if(We(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fa(t){return typeof t=="string"?Cn.fromBase64String(t):Cn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kE(t){const e=t.mapValue.fields.__previous_value__;return bm(e)?kE(e):e}function Hu(t){const e=Si(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,i,o,s,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Wu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function So(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bm(t)?4:CR(t)?9007199254740991:AR(t)?10:11:re()}function Pn(t,e){if(t===e)return!0;const n=So(t);if(n!==So(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hu(t).isEqual(Hu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Si(i.timestampValue),l=Si(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return fa(i.bytesValue).isEqual(fa(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=it(i.doubleValue),l=it(o.doubleValue);return s===l?Bu(s)===Bu(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return To(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(v0(s)!==v0(l))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(l[u]===void 0||!Pn(s[u],l[u])))return!1;return!0}(t,e);default:return re()}}function da(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function ko(t,e){if(t===e)return 0;const n=So(t),r=So(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=it(o.integerValue||o.doubleValue),u=it(s.integerValue||s.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return _0(t.timestampValue,e.timestampValue);case 4:return _0(Hu(t),Hu(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(o,s){const l=fa(o),u=fa(s);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),u=s.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=pe(l[c],u[c]);if(h!==0)return h}return pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=pe(it(o.latitude),it(s.latitude));return l!==0?l:pe(it(o.longitude),it(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return E0(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,u,c,h;const m=o.fields||{},g=s.fields||{},b=(l=m.value)===null||l===void 0?void 0:l.arrayValue,I=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=pe(((c=b==null?void 0:b.values)===null||c===void 0?void 0:c.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:E0(b,I)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Al.mapValue&&s===Al.mapValue)return 0;if(o===Al.mapValue)return 1;if(s===Al.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),c=s.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let m=0;m<u.length&&m<h.length;++m){const g=pe(u[m],h[m]);if(g!==0)return g;const b=ko(l[u[m]],c[h[m]]);if(b!==0)return b}return pe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw re()}}function _0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Si(t),r=Si(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function E0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ko(n[i],r[i]);if(o)return o}return pe(n.length,r.length)}function Io(t){return zh(t)}function zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fa(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=zh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${zh(n.fields[s])}`;return i+"}"}(t.mapValue):re()}function Uh(t){return!!t&&"integerValue"in t}function Tm(t){return!!t&&"arrayValue"in t}function Jl(t){return!!t&&"mapValue"in t}function AR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Da(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=js(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Jl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Da(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new fn(js(this.value))}}function IE(t){const e=[];return Da(t.fields,(n,r)=>{const i=new ot([n]);if(Jl(r)){const o=IE(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new cn(e,0,Pe.min(),Pe.min(),Pe.min(),fn.empty(),0)}static newFoundDocument(e,n,r,i){return new cn(e,1,n,Pe.min(),r,i,0)}static newNoDocument(e,n){return new cn(e,2,n,Pe.min(),Pe.min(),fn.empty(),0)}static newUnknownDocument(e,n){return new cn(e,3,n,Pe.min(),Pe.min(),fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n){this.position=e,this.inclusive=n}}function x0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=ee.comparator(ee.fromName(s.referenceValue),n.key):r=ko(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function b0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n="asc"){this.field=e,this.dir=n}}function PR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{}class Ke extends AE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OR(e,n,r):n==="array-contains"?new DR(e,r):n==="in"?new LR(e,r):n==="not-in"?new MR(e,r):n==="array-contains-any"?new VR(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jR(e,r):new NR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ko(n,this.value)):n!==null&&So(this.value)===So(n)&&this.matchesComparison(ko(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vr extends AE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Vr(e,n)}matches(e){return CE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function CE(t){return t.op==="and"}function PE(t){return RR(t)&&CE(t)}function RR(t){for(const e of t.filters)if(e instanceof Vr)return!1;return!0}function Bh(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Io(t.value);if(PE(t))return t.filters.map(e=>Bh(e)).join(",");{const e=t.filters.map(n=>Bh(n)).join(",");return`${t.op}(${e})`}}function RE(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&Pn(r.value,i.value)}(t,e):t instanceof Vr?function(r,i){return i instanceof Vr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&RE(s,i.filters[l]),!0):!1}(t,e):void re()}function OE(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Io(n.value)}`}(t):t instanceof Vr?function(n){return n.op.toString()+" {"+n.getFilters().map(OE).join(" ,")+"}"}(t):"Filter"}class OR extends Ke{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class jR extends Ke{constructor(e,n){super(e,"in",n),this.keys=jE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NR extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=jE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class DR extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tm(n)&&da(n.arrayValue,this.value)}}class LR extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&da(this.value.arrayValue,n)}}class MR extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!da(this.value.arrayValue,n)}}class VR extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>da(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function T0(t,e=null,n=[],r=[],i=null,o=null,s=null){return new FR(t,e,n,r,i,o,s)}function Sm(t){const e=ge(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),xm(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),e.ue=n}return e.ue}function km(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!RE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!b0(t.startAt,e.startAt)&&b0(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $R(t,e,n,r,i,o,s,l){return new Lc(t,e,n,r,i,o,s,l)}function zR(t){return new Lc(t)}function S0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UR(t){return t.collectionGroup!==null}function Ns(t){const e=ge(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new yt(ot.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new qu(o,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new qu(ot.keyField(),r))}return e.ce}function di(t){const e=ge(t);return e.le||(e.le=BR(e,Ns(t))),e.le}function BR(t,e){if(t.limitType==="F")return T0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new qu(i.field,o)});const n=t.endAt?new Gu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gu(t.startAt.position,t.startAt.inclusive):null;return T0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hh(t,e,n){return new Lc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function NE(t,e){return km(di(t),di(e))&&t.limitType===e.limitType}function DE(t){return`${Sm(di(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>OE(i)).join(", ")}]`),xm(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Io(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Io(i)).join(",")),`Target(${r})`}(di(t))}; limitType=${t.limitType})`}function Im(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ee.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Ns(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,u){const c=x0(s,l,u);return s.inclusive?c<=0:c<0}(r.startAt,Ns(r),i)||r.endAt&&!function(s,l,u){const c=x0(s,l,u);return s.inclusive?c>=0:c>0}(r.endAt,Ns(r),i))}(t,e)}function HR(t){return(e,n)=>{let r=!1;for(const i of Ns(t)){const o=WR(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function WR(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(o,s,l){const u=s.data.field(o),c=l.data.field(o);return u!==null&&c!==null?ko(u,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Da(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return SE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=new Nt(ee.comparator);function Qu(){return GR}const LE=new Nt(ee.comparator);function Cl(...t){let e=LE;for(const n of t)e=e.insert(n.key,n);return e}function ME(t){let e=LE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oi(){return Ds()}function VE(){return Ds()}function Ds(){return new $o(t=>t.toString(),(t,e)=>t.isEqual(e))}const qR=new Nt(ee.comparator),QR=new yt(ee.comparator);function gt(...t){let e=QR;for(const n of t)e=e.add(n);return e}const KR=new yt(pe);function YR(){return KR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bu(e)?"-0":e}}function FE(t){return{integerValue:""+t}}function XR(t,e){return TR(e)?FE(e):Am(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this._=void 0}}function JR(t,e,n){return t instanceof Ku?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&bm(o)&&(o=kE(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof ha?zE(t,e):t instanceof pa?UE(t,e):function(i,o){const s=$E(i,o),l=k0(s)+k0(i.Pe);return Uh(s)&&Uh(i.Pe)?FE(l):Am(i.serializer,l)}(t,e)}function ZR(t,e,n){return t instanceof ha?zE(t,e):t instanceof pa?UE(t,e):n}function $E(t,e){return t instanceof Yu?function(r){return Uh(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Ku extends Mc{}class ha extends Mc{constructor(e){super(),this.elements=e}}function zE(t,e){const n=BE(e);for(const r of t.elements)n.some(i=>Pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class pa extends Mc{constructor(e){super(),this.elements=e}}function UE(t,e){let n=BE(e);for(const r of t.elements)n=n.filter(i=>!Pn(i,r));return{arrayValue:{values:n}}}class Yu extends Mc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function k0(t){return it(t.integerValue||t.doubleValue)}function BE(t){return Tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ha&&i instanceof ha||r instanceof pa&&i instanceof pa?To(r.elements,i.elements,Pn):r instanceof Yu&&i instanceof Yu?Pn(r.Pe,i.Pe):r instanceof Ku&&i instanceof Ku}(t.transform,e.transform)}class tO{constructor(e,n){this.version=e,this.transformResults=n}}class Bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vc{}function HE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new GE(t.key,Bn.none()):new La(t.key,t.data,Bn.none());{const n=t.data,r=fn.empty();let i=new yt(ot.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Ai(t.key,r,new dn(i.toArray()),Bn.none())}}function nO(t,e,n){t instanceof La?function(i,o,s){const l=i.value.clone(),u=A0(i.fieldTransforms,o,s.transformResults);l.setAll(u),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ai?function(i,o,s){if(!Zl(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=A0(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(WE(i)),u.setAll(l),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ls(t,e,n,r){return t instanceof La?function(o,s,l,u){if(!Zl(o.precondition,s))return l;const c=o.value.clone(),h=C0(o.fieldTransforms,u,s);return c.setAll(h),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ai?function(o,s,l,u){if(!Zl(o.precondition,s))return l;const c=C0(o.fieldTransforms,u,s),h=s.data;return h.setAll(WE(o)),h.setAll(c),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,l){return Zl(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function rO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=$E(r.transform,i||null);o!=null&&(n===null&&(n=fn.empty()),n.set(r.field,o))}return n||null}function I0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&To(r,i,(o,s)=>eO(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends Vc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ai extends Vc{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function WE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function A0(t,e,n){const r=new Map;We(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,ZR(s,l,n[i]))}return r}function C0(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,JR(o,s,e))}return r}class GE extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iO extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&nO(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ls(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ls(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=VE();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const u=HE(s,l);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(Pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),gt())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(n,r)=>I0(n,r))&&To(this.baseMutations,e.baseMutations,(n,r)=>I0(n,r))}}class Cm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){We(e.mutations.length===r.length);let i=function(){return qR}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Cm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ie;function aO(t){switch(t){default:return re();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function lO(t){if(t===void 0)return Ti("GRPC error has no .code"),$.UNKNOWN;switch(t){case $e.OK:return $.OK;case $e.CANCELLED:return $.CANCELLED;case $e.UNKNOWN:return $.UNKNOWN;case $e.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case $e.INTERNAL:return $.INTERNAL;case $e.UNAVAILABLE:return $.UNAVAILABLE;case $e.UNAUTHENTICATED:return $.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case $e.NOT_FOUND:return $.NOT_FOUND;case $e.ALREADY_EXISTS:return $.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return $.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case $e.ABORTED:return $.ABORTED;case $e.OUT_OF_RANGE:return $.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return $.UNIMPLEMENTED;case $e.DATA_LOSS:return $.DATA_LOSS;default:return re()}}(ie=$e||($e={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new pE([4294967295,4294967295],0);class uO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cO(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fO(t,e){return Wh(t,e.toTimestamp())}function ao(t){return We(!!t),Pe.fromTimestamp(function(n){const r=Si(n);return new Je(r.seconds,r.nanos)}(t))}function qE(t,e){return Gh(t,e).canonicalString()}function Gh(t,e){const n=function(i){return new Ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dO(t){const e=Ve.fromString(t);return We(_O(e)),e}function qh(t,e){return qE(t.databaseId,e.path)}function hO(t){const e=dO(t);return e.length===4?Ve.emptyPath():mO(e)}function pO(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mO(t){return We(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function P0(t,e,n){return{name:qh(t,e),fields:n.value.mapValue.fields}}function gO(t,e){let n;if(e instanceof La)n={update:P0(t,e.key,e.value)};else if(e instanceof GE)n={delete:qh(t,e.key)};else if(e instanceof Ai)n={update:P0(t,e.key,e.data),updateMask:wO(e.fieldMask)};else{if(!(e instanceof iO))return re();n={verify:qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof Ku)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ha)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pa)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yu)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:fO(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:re()}(t,e.precondition)),n}function yO(t,e){return t&&t.length>0?(We(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?ao(i.updateTime):ao(o);return s.isEqual(Pe.min())&&(s=ao(o)),new tO(s,i.transformResults||[])}(n,e))):[]}function vO(t){let e=hO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){We(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];n.where&&(o=function(m){const g=QE(m);return g instanceof Vr&&PE(g)?g.getFilters():[g]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(g=>function(I){return new qu(Mi(I.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,xm(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,b=m.values||[];return new Gu(b,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,b=m.values||[];return new Gu(b,g)}(n.endAt)),$R(e,i,s,o,l,"F",u,c)}function QE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mi(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Mi(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Mi(n.unaryFilter.field);return Ke.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Mi(n.unaryFilter.field);return Ke.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vr.create(n.compositeFilter.filters.map(r=>QE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function Mi(t){return ot.fromServerFormat(t.fieldPath)}function wO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _O(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.ct=e}}function xO(t){const e=vO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.un=new TO}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Mr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class TO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new yt(Ve.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new yt(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ao(0)}static kn(){return new Ao(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this.changes=new $o(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ls(r.mutation,i,dn.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,gt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=gt()){const i=oi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Cl();return o.forEach((l,u)=>{s=s.insert(l,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=oi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,gt()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=Qu();const s=Ds(),l=function(){return Ds()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ai)?o=o.insert(c.key,c):h!==void 0?(s.set(c.key,h.mutation.getFieldMask()),Ls(h.mutation,c,h.mutation.getFieldMask(),Je.now())):s.set(c.key,dn.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((c,h)=>s.set(c,h)),n.forEach((c,h)=>{var m;return l.set(c,new kO(h,(m=s.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ds();let i=new Nt((s,l)=>s-l),o=gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||dn.empty();h=l.applyToLocalView(c,h),r.set(u,h);const m=(i.get(l.batchId)||gt()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,m=VE();h.forEach(g=>{if(!o.has(g)){const b=HE(n.get(g),r.get(g));b!==null&&m.set(g,b),o=o.add(g)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return ee.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):V.resolve(oi());let l=-1,u=o;return s.next(c=>V.forEach(c,(h,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),o.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,u,c,gt())).next(h=>({batchId:l,changes:ME(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=Cl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Cl();return this.indexManager.getCollectionParents(e,o).next(l=>V.forEach(l,u=>{const c=function(m,g){return new Lc(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((m,g)=>{s=s.insert(m,g)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,c)=>{const h=c.getKey();s.get(h)===null&&(s=s.insert(h,cn.newInvalidDocument(h)))});let l=Cl();return s.forEach((u,c)=>{const h=o.get(u);h!==void 0&&Ls(h.mutation,c,dn.empty(),Je.now()),Im(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ao(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:xO(i.bundledQuery),readTime:ao(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(){this.overlays=new Nt(ee.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oi();return V.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=oi(),o=n.length+1,s=new ee(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Nt((c,h)=>c-h);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=o.get(c.largestBatchId);h===null&&(h=oi(),o=o.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=oi(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new sO(n,r));let o=this.Ir.get(n);o===void 0&&(o=gt(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(){this.sessionToken=Cn.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.Tr=new yt(Ge.Er),this.dr=new yt(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ee(new Ve([])),r=new Ge(n,e),i=new Ge(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ee(new Ve([])),r=new Ge(n,e),i=new Ge(n,e+1);let o=gt();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ee.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new yt(Ge.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new oO(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new Ge(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(s)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const l=this.Dr(s.wr);o.push(l)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new yt(pe);return n.forEach(i=>{const o=new Ge(i,0),s=new Ge(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;ee.isDocumentKey(o)||(o=o.child(""));const s=new Ge(new ee(o),0);let l=new yt(pe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},s),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){We(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const o=new Ge(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.Mr=e,this.docs=function(){return new Nt(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():cn.newInvalidDocument(n))}getEntries(e,n){let r=Qu();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():cn.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Qu();const s=n.path,l=new ee(s.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||_R(wR(h),r)<=0||(i.has(h.key)||Im(n,h))&&(o=o.insert(h.key,h.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jO(this)}getSize(e){return V.resolve(this.size)}}class jO extends SO{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.persistence=e,this.Nr=new $o(n=>Sm(n),km),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Pm,this.targetCount=0,this.kr=Ao.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ao(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),V.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new TE(0),this.Kr=!1,this.Kr=!0,this.$r=new PO,this.referenceDelegate=e(this),this.Ur=new NO(this),this.indexManager=new bO,this.remoteDocumentCache=function(i){return new OO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new EO(n),this.Gr=new AO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new RO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new LO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class LO extends xR{constructor(e){super(),this.currentSequenceNumber=e}}class Rm{constructor(e){this.persistence=e,this.Jr=new Pm,this.Yr=null}static Zr(e){return new Rm(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=ee.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,Pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=gt(),i=gt();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Om(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return G3()?8:bR(H3())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new MO;return this.Xi(e,n,s).next(l=>{if(o.result=l,this.zi)return this.es(e,n,s,l.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(us()<=oe.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(us()<=oe.DEBUG&&q("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(us()<=oe.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,di(n))):V.resolve())}Yi(e,n){if(S0(n))return V.resolve(null);let r=di(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hh(n,null,"F"),r=di(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=gt(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,s,u.readTime)?this.Yi(e,Hh(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return S0(n)||i.isEqual(Pe.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?V.resolve(null):(us()<=oe.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cs(n)),this.rs(e,s,n,vR(i,-1)).next(l=>l))})}ts(e,n){let r=new yt(HR(e));return n.forEach((i,o)=>{Im(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return us()<=oe.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",cs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Mr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Nt(pe),this._s=new $o(o=>Sm(o),km),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function $O(t,e,n,r){return new FO(t,e,n,r)}async function KE(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let u=gt();for(const c of i){s.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of o){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:s,addedBatchIds:l}))})})}function zO(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const m=c.batch,g=m.keys();let b=V.resolve();return g.forEach(I=>{b=b.next(()=>h.getEntry(u,I)).next(C=>{const R=c.docVersions.get(I);We(R!==null),C.version.compareTo(R)<0&&(m.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=gt();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UO(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function BO(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class R0{constructor(){this.activeTargetIds=YR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HO{constructor(){this.so=new R0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new R0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl=null;function sd(){return Pl===null?Pl=function(){return 268435456+Math.round(2147483648*Math.random())}():Pl++,"0x"+Pl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class QO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const l=sd(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,o,s),this.No(n,u,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw Uu("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,o,s,l){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=GO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=sd();return new Promise((s,l)=>{const u=new mE;u.setWithCredentials(!0),u.listenOnce(yE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Xl.NO_ERROR:const h=u.getResponseJson();q(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case Xl.TIMEOUT:q(ht,`RPC '${e}' ${o} timed out`),l(new Y($.DEADLINE_EXCEEDED,"Request time out"));break;case Xl.HTTP_ERROR:const m=u.getStatus();if(q(ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const b=g==null?void 0:g.error;if(b&&b.status&&b.message){const I=function(R){const E=R.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(E)>=0?E:$.UNKNOWN}(b.status);l(new Y(I,b.message))}else l(new Y($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Y($.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{q(ht,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);q(ht,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=sd(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=_E(),l=wE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new gE({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=o.join("");q(ht,`Creating RPC '${e}' stream ${i}: ${h}`,u);const m=s.createWebChannel(h,u);let g=!1,b=!1;const I=new qO({Io:R=>{b?q(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(g||(q(ht,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(ht,`RPC '${e}' stream ${i} sending:`,R),m.send(R))},To:()=>m.close()}),C=(R,E,v)=>{R.listen(E,x=>{try{v(x)}catch(P){setTimeout(()=>{throw P},0)}})};return C(m,_s.EventType.OPEN,()=>{b||(q(ht,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),C(m,_s.EventType.CLOSE,()=>{b||(b=!0,q(ht,`RPC '${e}' stream ${i} transport closed`),I.So())}),C(m,_s.EventType.ERROR,R=>{b||(b=!0,Uu(ht,`RPC '${e}' stream ${i} transport errored:`,R),I.So(new Y($.UNAVAILABLE,"The operation could not be completed")))}),C(m,_s.EventType.MESSAGE,R=>{var E;if(!b){const v=R.data[0];We(!!v);const x=v,P=x.error||((E=x[0])===null||E===void 0?void 0:E.error);if(P){q(ht,`RPC '${e}' stream ${i} received error:`,P);const L=P.status;let N=function(T){const S=$e[T];if(S!==void 0)return lO(S)}(L),_=P.message;N===void 0&&(N=$.INTERNAL,_="Unknown error status: "+L+" with message "+P.message),b=!0,I.So(new Y(N,_)),m.close()}else q(ht,`RPC '${e}' stream ${i} received:`,v),I.bo(v)}}),C(l,vE.STAT_EVENT,R=>{R.stat===$h.PROXY?q(ht,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===$h.NOPROXY&&q(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function ad(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){return new uO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,n,r,i,o,s,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new YE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Ti(n.toString()),Ti("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Y($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YO extends KO{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return We(!!e.streamToken),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=yO(e.writeResults,e.commitTime),r=ao(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=pO(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gO(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Y($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Gh(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y($.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,Gh(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y($.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class JO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ti(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Va(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ge(u);c.L_.add(4),await Ma(c),c.q_.set("Unknown"),c.L_.delete(4),await $c(c)}(this))})}),this.q_=new JO(r,i)}}async function $c(t){if(Va(t))for(const e of t.B_)await e(!0)}async function Ma(t){for(const e of t.B_)await e(!1)}function Va(t){return ge(t).L_.size===0}async function XE(t,e,n){if(!Dc(e))throw e;t.L_.add(1),await Ma(t),t.q_.set("Offline"),n||(n=()=>UO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await $c(t)})}function JE(t,e){return e().catch(n=>XE(t,n,e))}async function zc(t){const e=ge(t),n=Fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;e9(e);)try{const i=await BO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,t9(e,i)}catch(i){await XE(e,i)}ZE(e)&&ex(e)}function e9(t){return Va(t)&&t.O_.length<10}function t9(t,e){t.O_.push(e);const n=Fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ZE(t){return Va(t)&&!Fr(t).n_()&&t.O_.length>0}function ex(t){Fr(t).start()}async function n9(t){Fr(t).p_()}async function r9(t){const e=Fr(t);for(const n of t.O_)e.m_(n.mutations)}async function i9(t,e,n){const r=t.O_.shift(),i=Cm.from(r,e,n);await JE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zc(t)}async function o9(t,e){e&&Fr(t).V_&&await async function(r,i){if(function(s){return aO(s)&&s!==$.ABORTED}(i.code)){const o=r.O_.shift();Fr(r).s_(),await JE(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await zc(r)}}(t,e),ZE(t)&&ex(t)}async function j0(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Va(n);n.L_.add(3),await Ma(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await $c(n)}async function s9(t,e){const n=ge(t);e?(n.L_.delete(2),await $c(n)):e||(n.L_.add(2),await Ma(n),n.q_.set("Unknown"))}function Fr(t){return t.U_||(t.U_=function(n,r,i){const o=ge(n);return o.w_(),new YO(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:n9.bind(null,t),mo:o9.bind(null,t),f_:r9.bind(null,t),g_:i9.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await zc(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new jm(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tx(t,e){if(Ti("AsyncQueue",`${e}: ${t}`),Dc(t))return new Y($.UNAVAILABLE,`${e}: ${t}`);throw t}class a9{constructor(){this.queries=N0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ge(n),o=i.queries;i.queries=N0(),o.forEach((s,l)=>{for(const u of l.j_)u.onError(r)})})(this,new Y($.ABORTED,"Firestore shutting down"))}}function N0(){return new $o(t=>DE(t),NE)}function l9(t){t.Y_.forEach(e=>{e.next()})}var D0,L0;(L0=D0||(D0={})).ea="default",L0.Cache="cache";class u9{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new $o(l=>DE(l),NE),this.Ma=new Map,this.xa=new Set,this.Oa=new Nt(ee.comparator),this.Na=new Map,this.La=new Pm,this.Ba={},this.ka=new Map,this.qa=Ao.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function c9(t,e,n){const r=p9(t);try{const i=await function(s,l){const u=ge(s),c=Je.now(),h=l.reduce((b,I)=>b.add(I.key),gt());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let I=Qu(),C=gt();return u.cs.getEntries(b,h).next(R=>{I=R,I.forEach((E,v)=>{v.isValidDocument()||(C=C.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,I)).next(R=>{m=R;const E=[];for(const v of l){const x=rO(v,m.get(v.key).overlayedDocument);x!=null&&E.push(new Ai(v.key,x,IE(x.value.mapValue),Bn.exists(!0)))}return u.mutationQueue.addMutationBatch(b,c,E,l)}).next(R=>{g=R;const E=R.applyToLocalDocumentSet(m,C);return u.documentOverlayCache.saveOverlays(b,R.batchId,E)})}).then(()=>({batchId:g.batchId,changes:ME(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,u){let c=s.Ba[s.currentUser.toKey()];c||(c=new Nt(pe)),c=c.insert(l,u),s.Ba[s.currentUser.toKey()]=c}(r,i.batchId,n),await Uc(r,i.changes),await zc(r.remoteStore)}catch(i){const o=tx(i,"Failed to persist write");n.reject(o)}}function M0(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const u=ge(s);u.onlineState=l;let c=!1;u.queries.forEach((h,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&l9(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function f9(t,e){const n=ge(t),r=e.batch.batchId;try{const i=await zO(n.localStore,e);rx(n,r,null),nx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Uc(n,i)}catch(i){await bE(i)}}async function d9(t,e,n){const r=ge(t);try{const i=await function(s,l){const u=ge(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(We(m!==null),h=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);rx(r,e,n),nx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Uc(r,i)}catch(i){await bE(i)}}function nx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function rx(t,e,n){const r=ge(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function Uc(t,e,n){const r=ge(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{s.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(h=void 0)===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Om.Wi(u.targetId,c);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,c){const h=ge(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,g=>V.forEach(g.$i,b=>h.persistence.referenceDelegate.addReference(m,g.targetId,b)).next(()=>V.forEach(g.Ui,b=>h.persistence.referenceDelegate.removeReference(m,g.targetId,b)))))}catch(m){if(!Dc(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const b=h.os.get(g),I=b.snapshotVersion,C=b.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(g,C)}}}(r.localStore,o))}async function h9(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await KE(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(u=>{u.reject(new Y($.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Uc(n,r.hs)}}function p9(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=f9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d9.bind(null,e),e}class V0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $O(this.persistence,new VO,e.initialUser,this.serializer)}createPersistence(e){return new DO(Rm.Zr,this.serializer)}createSharedClientState(e){return new HO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class m9{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>M0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=h9.bind(null,this.syncEngine),await s9(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new a9}()}createDatastore(e){const n=Fc(e.databaseInfo.databaseId),r=function(o){return new QO(o)}(e.databaseInfo);return function(o,s,l,u){return new XO(o,s,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new ZO(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>M0(this.syncEngine,n,0),function(){return O0.D()?new O0:new WO}())}createSyncEngine(e,n){return function(i,o,s,l,u,c,h){const m=new u9(i,o,s,l,u,c);return h&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ge(i);q("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Ma(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g9{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=xE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tx(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ld(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await KE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function F0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await v9(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>j0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>j0(e.remoteStore,i)),t._onlineComponents=e}function y9(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function v9(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await ld(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!y9(n))throw n;Uu("Error using user provided cache. Falling back to memory cache: "+n),await ld(t,new V0)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await ld(t,new V0);return t._offlineComponents}async function w9(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await F0(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await F0(t,new m9))),t._onlineComponents}function _9(t){return w9(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t,e,n){if(!n)throw new Y($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function E9(t,e,n,r){if(e===!0&&r===!0)throw new Y($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function z0(t){if(!ee.isDocumentKey(t))throw new Y($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U0(t){if(ee.isDocumentKey(t))throw new Y($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function sx(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nm(t);throw new Y($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}E9("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ix((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Y($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Y($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Y($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uR;switch(r.type){case"firstParty":return new hR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$0.get(n);r&&(q("ComponentProvider","Removing Datastore"),$0.delete(n),r.terminate())}(this),Promise.resolve()}}function x9(t,e,n,r={}){var i;const o=(t=sx(t,Bc))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Uu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=pt.MOCK_USER;else{l=B3(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new pt(c)}t._authCredentials=new cR(new EE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dm(this.firestore,e,this._query)}}class Hn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Hn(this.firestore,e,this._key)}}class Rr extends Dm{constructor(e,n,r){super(e,n,zR(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Hn(this.firestore,null,new ee(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function b9(t,e,...n){if(t=aa(t),ox("collection","path",e),t instanceof Bc){const r=Ve.fromString(e,...n);return U0(r),new Rr(t,null,r)}{if(!(t instanceof Hn||t instanceof Rr))throw new Y($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return U0(r),new Rr(t.firestore,null,r)}}function T9(t,e,...n){if(t=aa(t),arguments.length===1&&(e=xE.newId()),ox("doc","path",e),t instanceof Bc){const r=Ve.fromString(e,...n);return z0(r),new Hn(t,null,new ee(r))}{if(!(t instanceof Hn||t instanceof Rr))throw new Y($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return z0(r),new Hn(t.firestore,t instanceof Rr?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S9{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new YE(this,"async_queue_retry"),this.Eu=()=>{const n=ad();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=ad();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=ad();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new fi;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Dc(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw Ti("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=jm.createAndSchedule(this,e,n,r,o=>this.Vu(o));return this.lu.push(i),i}du(){this.hu&&re()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class ax extends Bc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new S9}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lx(this),this._firestoreClient.terminate()}}function k9(t,e){const n=typeof t=="object"?t:X5(),r=typeof t=="string"?t:"(default)",i=q5(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=z3("firestore");o&&x9(i,...o)}return i}function I9(t){return t._firestoreClient||lx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lx(t){var e,n,r;const i=t._freezeSettings(),o=function(l,u,c,h){return new IR(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ix(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new g9(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ma(Cn.fromBase64String(e))}catch(n){throw new Y($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ma(Cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A9=/^__.*__$/;class C9{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}function hx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Lm{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Lm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Xu(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(hx(this.wu)&&A9.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class P9{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fc(e)}Nu(e,n,r,i=!1){return new Lm({wu:e,methodName:n,Ou:r,path:ot.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function R9(t){const e=t._freezeSettings(),n=Fc(t._databaseId);return new P9(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O9(t,e,n,r,i,o={}){const s=t.Nu(o.merge||o.mergeFields?2:0,e,n,i);yx("Data must be an object, but it was:",s,r);const l=mx(r,s);let u,c;if(o.merge)u=new dn(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const m of o.mergeFields){const g=j9(e,m,n);if(!s.contains(g))throw new Y($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);L9(h,g)||h.push(g)}u=new dn(h),c=s.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=s.fieldTransforms;return new C9(new fn(l),u,c)}function px(t,e){if(gx(t=aa(t)))return yx("Unsupported field value:",e,t),mx(t,e);if(t instanceof cx)return function(r,i){if(!hx(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let u=px(l,i.Fu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=aa(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Je.fromDate(r);return{timestampValue:Wh(i.serializer,o)}}if(r instanceof Je){const o=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wh(i.serializer,o)}}if(r instanceof fx)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ma)return{bytesValue:cO(i.serializer,r._byteString)};if(r instanceof Hn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:qE(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dx)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return Am(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Nm(r)}`)}(t,e)}function mx(t,e){const n={};return SE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Da(t,(r,i)=>{const o=px(i,e.bu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function gx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof fx||t instanceof ma||t instanceof Hn||t instanceof cx||t instanceof dx)}function yx(t,e,n){if(!gx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Nm(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function j9(t,e,n){if((e=aa(e))instanceof ux)return e._internalPath;if(typeof e=="string")return D9(t,e);throw Xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const N9=new RegExp("[~\\*/\\[\\]]");function D9(t,e,n){if(e.search(N9)>=0)throw Xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ux(...e.split("."))._internalPath}catch{throw Xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xu(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new Y($.INVALID_ARGUMENT,l+t+u)}function L9(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M9(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function V9(t,e){const n=sx(t.firestore,ax),r=T9(t),i=M9(t.converter,e);return F9(n,[O9(R9(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Bn.exists(!1))]).then(()=>r)}function F9(t,e){return function(r,i){const o=new fi;return r.asyncQueue.enqueueAndForget(async()=>c9(await _9(r),i,o)),o.promise}(I9(t),e)}(function(e,n=!0){(function(i){Fo=i})(Y5),zu(new la("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new ax(new fR(r.getProvider("auth-internal")),new mR(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Y($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wu(c.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),so(y0,"4.7.0",e),so(y0,"4.7.0","esm2017")})();const $9={apiKey:"AIzaSyBmR3GSVYkjoqB3abYYPo0NqhyDX-ILUKU",authDomain:"lead-generation-database.firebaseapp.com",projectId:"lead-generation-database",storageBucket:"lead-generation-database.appspot.com",messagingSenderId:"42227662086",appId:"1:42227662086:web:cc1043134a2cebdf66f287"},z9=fE($9),U9=k9(z9),B9=()=>{M.useState({username:"",phonenumber:"",message:""});const t=async n=>{n.preventDefault();const r=n.target,i={username:r.username.value,phonenumber:r.phonenumber.value,message:r.message.value};try{const o=new Date().toISOString().split("T")[0];await V9(b9(U9,o),i),alert("Message sent successfully!")}catch(o){console.error("Error adding document: ",o),alert("Error sending message, please try again.")}r.reset()},e=Q.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        padding: 2rem;
        background-color: ${({theme:n})=>n.colors.background};
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: auto;
        align-items: center;
        justify-content: center;

        input,
        textarea {
          padding: 1rem;
          border: 1px solid ${({theme:n})=>n.colors.yellow};
          border-radius: 5px;
          font-size: 1rem;
          width: 100%;
          max-width: 100%;
        }

        textarea {
          resize: vertical;
          min-height: 200px;
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.3s;
          padding: 1rem;
          background-color: ${({theme:n})=>n.colors.yellow};
          color: #fff;
          border: 2px solid ${({theme:n})=>n.colors.yellow};
          font-size: 1.2rem;
          width: 100px;
          max-width: 200px;
          text-align: center;
          margin-top: 1rem;

          &:hover {
            background-color: ${({theme:n})=>n.colors.yellow};
            border: 2px solid ${({theme:n})=>n.colors.yellow};
            transform: scale(1.05);
          }
        }
      }
    }

    iframe {
      border: 0;
    }
  `;return d.jsxs(e,{children:[d.jsx("h2",{className:"common-heading",children:"Feel Free to Contact us"}),d.jsx("div",{className:"container",children:d.jsx("div",{className:"contact-form",children:d.jsxs("form",{onSubmit:t,className:"contact-inputs",children:[d.jsx("input",{type:"text",name:"username",placeholder:"Name",autoComplete:"off",required:!0}),d.jsx("input",{type:"tel",name:"phonenumber",placeholder:"Phone Number",autoComplete:"off",required:!0}),d.jsx("textarea",{name:"message",cols:"30",rows:"6",placeholder:"Your message",autoComplete:"off",required:!0}),d.jsx("input",{type:"submit",value:"Send"})]})})})]})},H9=Q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(37, 37, 37, 255);
`,W9=Q.h1`
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
  color: #febb12;
  margin-top: 7px;
`,G9=Q.div`
  overflow: hidden;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(37, 37, 37, 255);
  border-radius: 10px;
  padding: 20px;
`,q9=Q.div`
  display: flex;
  transition: transform 1s ease-in-out;
`,Q9=Q.div`
  flex: 0 0 25%;
  max-width: 25%;
  height: 300px;
  background-color: #444;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  font-size: 16px;
  color: #febb12;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(37, 37, 37, 255);
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin: 10px 0;
  }
`,K9=Q.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`,Y9=Q.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`,X9=Q.div`
  text-align: center;
  font-size: 14px;
  color: #ccc;
`,J9=({name:t,review:e,imageSrc:n,onMouseEnter:r,onMouseLeave:i})=>d.jsxs(Q9,{onMouseEnter:r,onMouseLeave:i,"aria-labelledby":`card-name-${t}`,"aria-describedby":`card-review-${t}`,children:[d.jsx(K9,{src:n,alt:`Review from ${t}`}),d.jsx(Y9,{id:`card-name-${t}`,children:t}),d.jsx(X9,{id:`card-review-${t}`,children:e})]}),Z9=()=>{const[t,e]=M.useState(0),[n,r]=M.useState(!1),i=M.useRef(null),o=[{name:"Manav Ranjan",review:'"Prem sir ka experience aur energetic class environment se maine live trading mein confidence paya. Standoff strategies bahut helpful hain."',imageSrc:"./images/Student1.jpg"},{name:"Shahwaz Alam",review:'"I learned so much about the stock market from Ankit Sir. His classes are clear and helpful. Highly recommended!"',imageSrc:"./images/student3.jpg"},{name:"Vaihavb",review:"Live market mein trading ka experience anokha tha. Ankit sir, Prem sir, aur Prabhas sir ke guidance meinmaine kaafi kuch seekha.",imageSrc:"./images/Student4.jpg"},{name:"Tripti Sharma",review:"I am thankful to have found Prem on Instagram, conducting live market classes from Bihar. Stock Archery real-time sessions are insightful and interactive, offering a thorough understanding of market dynamics.",imageSrc:"./images/student5.png"},{name:"Deepak Kumar",review:"Stock Archery ne mujhe trading ke basics aur advanced dono level pe mahir banaya. Bhagalpur jaise chote sheher mein aisa platform milna sach mein incredible ha",imageSrc:"./images/student6.png"}];M.useEffect(()=>{const c=()=>{if(i.current){const m=window.innerWidth<=768?i.current.clientWidth:i.current.clientWidth/4;i.current.style.transform=`translateX(-${t*m}px)`}};return window.addEventListener("resize",c),c(),()=>window.removeEventListener("resize",c)},[t]),M.useEffect(()=>{let c;return n||(c=setInterval(()=>{e(h=>(h+1)%o.length)},4e3)),()=>clearInterval(c)},[n,o.length]);const s=()=>{r(!0)},l=()=>{r(!1)},u=c=>{if(i.current){const m=window.innerWidth<=768?i.current.clientWidth:i.current.clientWidth/4,g=c.deltaY>0?1:-1;e(b=>{const I=(b+g+o.length)%o.length;return i.current.style.transform=`translateX(-${I*m}px)`,I}),c.preventDefault()}};return M.useEffect(()=>(i.current&&i.current.addEventListener("wheel",u),()=>{i.current&&i.current.removeEventListener("wheel",u)}),[]),d.jsxs(H9,{children:[d.jsx(W9,{children:"Testimonials"}),d.jsx(G9,{children:d.jsx(q9,{ref:i,children:o.map((c,h)=>d.jsx(J9,{...c,onMouseEnter:s,onMouseLeave:l},h))})})]})};function e6(t){return ba({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function t6(t){return ba({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(t)}function n6(t){return ba({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(t)}function r6(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var vx=M,i6=r6(vx);function H0(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o6(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var s6=!!(typeof window<"u"&&window.document&&window.document.createElement);function a6(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],l;function u(){l=t(s.map(function(h){return h.props})),c.canUseDOM?e(l):n&&(l=n(l))}var c=function(h){o6(m,h);function m(){return h.apply(this,arguments)||this}m.peek=function(){return l},m.rewind=function(){if(m.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var I=l;return l=void 0,s=[],I};var g=m.prototype;return g.UNSAFE_componentWillMount=function(){s.push(this),u()},g.componentDidUpdate=function(){u()},g.componentWillUnmount=function(){var I=s.indexOf(this);s.splice(I,1),u()},g.render=function(){return i6.createElement(o,this.props)},m}(vx.PureComponent);return H0(c,"displayName","SideEffect("+r(o)+")"),H0(c,"canUseDOM",s6),c}}var l6=a6;const u6=ya(l6);var c6=typeof Element<"u",f6=typeof Map=="function",d6=typeof Set=="function",h6=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function eu(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!eu(t[r],e[r]))return!1;return!0}var o;if(f6&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;for(o=t.entries();!(r=o.next()).done;)if(!eu(r.value[1],e.get(r.value[0])))return!1;return!0}if(d6&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(h6&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(c6&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!eu(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var p6=function(e,n){try{return eu(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const m6=ya(p6);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var W0=Object.getOwnPropertySymbols,g6=Object.prototype.hasOwnProperty,y6=Object.prototype.propertyIsEnumerable;function v6(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function w6(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var _6=w6()?Object.assign:function(t,e){for(var n,r=v6(t),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)g6.call(n,s)&&(r[s]=n[s]);if(W0){i=W0(n);for(var l=0;l<i.length;l++)y6.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r};const E6=ya(_6);var hi={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},J={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(J).map(function(t){return J[t]});var Se={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Ju={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ga={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},x6=Object.keys(Ju).reduce(function(t,e){return t[Ju[e]]=e,t},{}),b6=[J.NOSCRIPT,J.SCRIPT,J.STYLE],hn="data-react-helmet",T6=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S6=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},k6=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),At=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},I6=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},G0=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},A6=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Qh=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},C6=function(e){var n=lo(e,J.TITLE),r=lo(e,ga.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=lo(e,ga.DEFAULT_TITLE);return n||i||void 0},P6=function(e){return lo(e,ga.ON_CHANGE_CLIENT_STATE)||function(){}},ud=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,i){return At({},r,i)},{})},R6=function(e,n){return n.filter(function(r){return typeof r[J.BASE]<"u"}).map(function(r){return r[J.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),s=0;s<o.length;s++){var l=o[s],u=l.toLowerCase();if(e.indexOf(u)!==-1&&i[u])return r.concat(i)}return r},[])},fs=function(e,n,r){var i={};return r.filter(function(o){return Array.isArray(o[e])?!0:(typeof o[e]<"u"&&D6("Helmet: "+e+' should be of type "Array". Instead found type "'+T6(o[e])+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,s){var l={};s.filter(function(g){for(var b=void 0,I=Object.keys(g),C=0;C<I.length;C++){var R=I[C],E=R.toLowerCase();n.indexOf(E)!==-1&&!(b===Se.REL&&g[b].toLowerCase()==="canonical")&&!(E===Se.REL&&g[E].toLowerCase()==="stylesheet")&&(b=E),n.indexOf(R)!==-1&&(R===Se.INNER_HTML||R===Se.CSS_TEXT||R===Se.ITEM_PROP)&&(b=R)}if(!b||!g[b])return!1;var v=g[b].toLowerCase();return i[b]||(i[b]={}),l[b]||(l[b]={}),i[b][v]?!1:(l[b][v]=!0,!0)}).reverse().forEach(function(g){return o.push(g)});for(var u=Object.keys(l),c=0;c<u.length;c++){var h=u[c],m=E6({},i[h],l[h]);i[h]=m}return o},[]).reverse()},lo=function(e,n){for(var r=e.length-1;r>=0;r--){var i=e[r];if(i.hasOwnProperty(n))return i[n]}return null},O6=function(e){return{baseTag:R6([Se.HREF,Se.TARGET],e),bodyAttributes:ud(hi.BODY,e),defer:lo(e,ga.DEFER),encode:lo(e,ga.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ud(hi.HTML,e),linkTags:fs(J.LINK,[Se.REL,Se.HREF],e),metaTags:fs(J.META,[Se.NAME,Se.CHARSET,Se.HTTPEQUIV,Se.PROPERTY,Se.ITEM_PROP],e),noscriptTags:fs(J.NOSCRIPT,[Se.INNER_HTML],e),onChangeClientState:P6(e),scriptTags:fs(J.SCRIPT,[Se.SRC,Se.INNER_HTML],e),styleTags:fs(J.STYLE,[Se.CSS_TEXT],e),title:C6(e),titleAttributes:ud(hi.TITLE,e)}},Kh=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){Kh(e)},0)}}(),q0=function(e){return clearTimeout(e)},j6=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Kh:global.requestAnimationFrame||Kh,N6=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||q0:global.cancelAnimationFrame||q0,D6=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},ds=null,L6=function(e){ds&&N6(ds),e.defer?ds=j6(function(){Q0(e,function(){ds=null})}):(Q0(e),ds=null)},Q0=function(e,n){var r=e.baseTag,i=e.bodyAttributes,o=e.htmlAttributes,s=e.linkTags,l=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,h=e.scriptTags,m=e.styleTags,g=e.title,b=e.titleAttributes;Yh(J.BODY,i),Yh(J.HTML,o),M6(g,b);var I={baseTag:Li(J.BASE,r),linkTags:Li(J.LINK,s),metaTags:Li(J.META,l),noscriptTags:Li(J.NOSCRIPT,u),scriptTags:Li(J.SCRIPT,h),styleTags:Li(J.STYLE,m)},C={},R={};Object.keys(I).forEach(function(E){var v=I[E],x=v.newTags,P=v.oldTags;x.length&&(C[E]=x),P.length&&(R[E]=I[E].oldTags)}),n&&n(),c(e,C,R)},wx=function(e){return Array.isArray(e)?e.join(""):e},M6=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=wx(e)),Yh(J.TITLE,n)},Yh=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var i=r.getAttribute(hn),o=i?i.split(","):[],s=[].concat(o),l=Object.keys(n),u=0;u<l.length;u++){var c=l[u],h=n[c]||"";r.getAttribute(c)!==h&&r.setAttribute(c,h),o.indexOf(c)===-1&&o.push(c);var m=s.indexOf(c);m!==-1&&s.splice(m,1)}for(var g=s.length-1;g>=0;g--)r.removeAttribute(s[g]);o.length===s.length?r.removeAttribute(hn):r.getAttribute(hn)!==l.join(",")&&r.setAttribute(hn,l.join(","))}},Li=function(e,n){var r=document.head||document.querySelector(J.HEAD),i=r.querySelectorAll(e+"["+hn+"]"),o=Array.prototype.slice.call(i),s=[],l=void 0;return n&&n.length&&n.forEach(function(u){var c=document.createElement(e);for(var h in u)if(u.hasOwnProperty(h))if(h===Se.INNER_HTML)c.innerHTML=u.innerHTML;else if(h===Se.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=u.cssText:c.appendChild(document.createTextNode(u.cssText));else{var m=typeof u[h]>"u"?"":u[h];c.setAttribute(h,m)}c.setAttribute(hn,"true"),o.some(function(g,b){return l=b,c.isEqualNode(g)})?o.splice(l,1):s.push(c)}),o.forEach(function(u){return u.parentNode.removeChild(u)}),s.forEach(function(u){return r.appendChild(u)}),{oldTags:o,newTags:s}},_x=function(e){return Object.keys(e).reduce(function(n,r){var i=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+i:i},"")},V6=function(e,n,r,i){var o=_x(r),s=wx(n);return o?"<"+e+" "+hn+'="true" '+o+">"+Qh(s,i)+"</"+e+">":"<"+e+" "+hn+'="true">'+Qh(s,i)+"</"+e+">"},F6=function(e,n,r){return n.reduce(function(i,o){var s=Object.keys(o).filter(function(c){return!(c===Se.INNER_HTML||c===Se.CSS_TEXT)}).reduce(function(c,h){var m=typeof o[h]>"u"?h:h+'="'+Qh(o[h],r)+'"';return c?c+" "+m:m},""),l=o.innerHTML||o.cssText||"",u=b6.indexOf(e)===-1;return i+"<"+e+" "+hn+'="true" '+s+(u?"/>":">"+l+"</"+e+">")},"")},Ex=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[Ju[i]||i]=e[i],r},n)},$6=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[x6[i]||i]=e[i],r},n)},z6=function(e,n,r){var i,o=(i={key:n},i[hn]=!0,i),s=Ex(r,o);return[de.createElement(J.TITLE,s,n)]},U6=function(e,n){return n.map(function(r,i){var o,s=(o={key:i},o[hn]=!0,o);return Object.keys(r).forEach(function(l){var u=Ju[l]||l;if(u===Se.INNER_HTML||u===Se.CSS_TEXT){var c=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[u]=r[l]}),de.createElement(e,s)})},Ln=function(e,n,r){switch(e){case J.TITLE:return{toComponent:function(){return z6(e,n.title,n.titleAttributes)},toString:function(){return V6(e,n.title,n.titleAttributes,r)}};case hi.BODY:case hi.HTML:return{toComponent:function(){return Ex(n)},toString:function(){return _x(n)}};default:return{toComponent:function(){return U6(e,n)},toString:function(){return F6(e,n,r)}}}},xx=function(e){var n=e.baseTag,r=e.bodyAttributes,i=e.encode,o=e.htmlAttributes,s=e.linkTags,l=e.metaTags,u=e.noscriptTags,c=e.scriptTags,h=e.styleTags,m=e.title,g=m===void 0?"":m,b=e.titleAttributes;return{base:Ln(J.BASE,n,i),bodyAttributes:Ln(hi.BODY,r,i),htmlAttributes:Ln(hi.HTML,o,i),link:Ln(J.LINK,s,i),meta:Ln(J.META,l,i),noscript:Ln(J.NOSCRIPT,u,i),script:Ln(J.SCRIPT,c,i),style:Ln(J.STYLE,h,i),title:Ln(J.TITLE,{title:g,titleAttributes:b},i)}},B6=function(e){var n,r;return r=n=function(i){I6(o,i);function o(){return S6(this,o),A6(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(l){return!m6(this.props,l)},o.prototype.mapNestedChildrenToProps=function(l,u){if(!u)return null;switch(l.type){case J.SCRIPT:case J.NOSCRIPT:return{innerHTML:u};case J.STYLE:return{cssText:u}}throw new Error("<"+l.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(l){var u,c=l.child,h=l.arrayTypeChildren,m=l.newChildProps,g=l.nestedChildren;return At({},h,(u={},u[c.type]=[].concat(h[c.type]||[],[At({},m,this.mapNestedChildrenToProps(c,g))]),u))},o.prototype.mapObjectTypeChildren=function(l){var u,c,h=l.child,m=l.newProps,g=l.newChildProps,b=l.nestedChildren;switch(h.type){case J.TITLE:return At({},m,(u={},u[h.type]=b,u.titleAttributes=At({},g),u));case J.BODY:return At({},m,{bodyAttributes:At({},g)});case J.HTML:return At({},m,{htmlAttributes:At({},g)})}return At({},m,(c={},c[h.type]=At({},g),c))},o.prototype.mapArrayTypeChildrenToProps=function(l,u){var c=At({},u);return Object.keys(l).forEach(function(h){var m;c=At({},c,(m={},m[h]=l[h],m))}),c},o.prototype.warnOnInvalidChildren=function(l,u){return!0},o.prototype.mapChildrenToProps=function(l,u){var c=this,h={};return de.Children.forEach(l,function(m){if(!(!m||!m.props)){var g=m.props,b=g.children,I=G0(g,["children"]),C=$6(I);switch(c.warnOnInvalidChildren(m,b),m.type){case J.LINK:case J.META:case J.NOSCRIPT:case J.SCRIPT:case J.STYLE:h=c.flattenArrayTypeChildren({child:m,arrayTypeChildren:h,newChildProps:C,nestedChildren:b});break;default:u=c.mapObjectTypeChildren({child:m,newProps:u,newChildProps:C,nestedChildren:b});break}}}),u=this.mapArrayTypeChildrenToProps(h,u),u},o.prototype.render=function(){var l=this.props,u=l.children,c=G0(l,["children"]),h=At({},c);return u&&(h=this.mapChildrenToProps(u,h)),de.createElement(e,h)},k6(o,null,[{key:"canUseDOM",set:function(l){e.canUseDOM=l}}]),o}(de.Component),n.propTypes={base:W.object,bodyAttributes:W.object,children:W.oneOfType([W.arrayOf(W.node),W.node]),defaultTitle:W.string,defer:W.bool,encodeSpecialCharacters:W.bool,htmlAttributes:W.object,link:W.arrayOf(W.object),meta:W.arrayOf(W.object),noscript:W.arrayOf(W.object),onChangeClientState:W.func,script:W.arrayOf(W.object),style:W.arrayOf(W.object),title:W.string,titleAttributes:W.object,titleTemplate:W.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var i=e.rewind();return i||(i=xx({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},H6=function(){return null},W6=u6(O6,L6,xx)(H6),Zu=B6(W6);Zu.renderStatic=Zu.rewind;const G6=Q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */
  color: #fff;
`,q6=Q.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #febb12;
`,Q6=Q.div`
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
`,K6=Q.div`
  background-color: #252525;
  border-radius: 15px; /* Rounded corners */
  border: 2px solid #ddd; /* Border around each question */
  padding: 15px 20px; /* Adjust padding */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-bottom: 20px; /* Space between FAQ items */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: shadow effect */
  display: flex;
  flex-direction: column;
`,Y6=Q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,X6=Q.div`
  font-size: 1.9rem; /* Larger font size */
  font-weight: bold;
  color: #febb12;
  flex-grow: 1;
`,J6=Q.div`
  max-height: ${({isOpen:t})=>t?"300px":"0"};
  overflow: hidden;
  transition: max-height 0.6s ease, padding 0.6s ease;
  padding: ${({isOpen:t})=>t?"10px 0":"0"};
  font-size: 1.9rem; /* Larger font size for better readability */
  background-color: #252525;
  color: #fff;
`,Z6=Q.div`
  transition: transform 0.3s ease;
  transform: ${({isOpen:t})=>t?"rotate(180deg)":"rotate(0)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.9rem; /* Adjust size if needed */
  color: #febb12; /* Yellow color for the arrow */
`,ej=()=>{const[t,e]=M.useState(null),n=i=>{e(t===i?null:i)},r=[{question:"Whom is this training suitable for ?",answer:"Anyone intrested in learning stock market from scratch is welcome to join the course."},{question:"Is laptop mandatory to attend the training ?",answer:"No, a laptop is not mandatory to attend the training. However, having a laptop is highly recommended as it enhances your learning experience."},{question:"Do I need to pay entire fees at once ?",answer:"Yes, you need to pay the entire fees at once."},{question:"How long will this training last ?",answer:"The training duration is of 2 months, excluding weekends, with one year of handholding support."},{question:"Will I be able to trade independently after this training ends ?",answer:"Absolutely Yes, many individuals successfully pursue trading as a full-time career after this course."},{question:"Will I receive a certificate of course completion ?",answer:"Yes, you will."}];return d.jsxs(G6,{children:[d.jsxs(Zu,{children:[d.jsx("title",{children:"Frequently Asked Questions | Stock Archery"}),d.jsx("meta",{name:"description",content:"Find answers to common questions about our capital markets training, including suitability, laptop requirements, fees, training duration, certification, and more."}),d.jsx("meta",{name:"keywords",content:"FAQ, capital markets training, Stock Archery, trading education, financial markets, trading course, stock market questions"}),d.jsx("meta",{property:"og:title",content:"Frequently Asked Questions | Stock Archery"}),d.jsx("meta",{property:"og:description",content:"Find answers to common questions about our capital markets training, including suitability, laptop requirements, fees, training duration, certification, and more."}),d.jsx("meta",{property:"og:image",content:"./images/faq-image.svg"}),d.jsx("meta",{property:"og:url",content:"https://www.stockarchery.com/faq"})]}),d.jsx(q6,{children:"Frequently Asked Questions"}),d.jsx(Q6,{children:r.map((i,o)=>d.jsxs(K6,{onClick:()=>n(o),role:"button","aria-expanded":t===o,"aria-controls":`answer-${o}`,tabIndex:"0",children:[d.jsxs(Y6,{children:[d.jsx(X6,{children:i.question}),d.jsx(Z6,{isOpen:t===o,children:t===o?d.jsx(n6,{}):d.jsx(t6,{})})]}),d.jsx(J6,{id:`answer-${o}`,isOpen:t===o,children:i.answer})]},o))})]})},tj=Q.button`
  display: flex;
  align-items: center;
  background-color: green;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d00; /* Darker green on hover */
  }

  svg {
    margin-right: 8px;
  }
`,nj=Q(tj)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Ensures the button is above other elements */
`,rj=()=>{const t=()=>{const r=`https://wa.me/+919229102334?text=${encodeURIComponent("Hi, I was just checking out your website, and Im interested in learning more about your trading floor and live market sessions. Can you provide me with more details?")}`;window.open(r,"_blank")};return d.jsxs(nj,{onClick:t,children:[d.jsx(e6,{}),"Contact Us"]})},ij=()=>{const[t,e]=M.useState(null),[n,r]=M.useState(window.innerWidth<=768);M.useEffect(()=>{const N=()=>{r(window.innerWidth<=768)};return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]);const i={width:"100%",marginBottom:"none",margin:"0 auto",padding:"20px",backgroundColor:"rgba(37, 37, 37, 1)",color:"#febb12"},o={display:"flex",alignItems:"center",flexDirection:n?"column":"row",marginBottom:"40px",textAlign:n?"center":"left",gap:n?"20px":"40px"},s={width:n?"100%":"60%",maxWidth:n?"300px":"500px",height:n?"auto":"400px",objectFit:"cover",borderRadius:"10px",marginBottom:n?"20px":"0"},l={marginTop:n?"20px":"0",textAlign:n?"center":"left",flex:1},u={fontSize:n?"2.5rem":"3rem",marginBottom:"20px",color:"#febb12",fontWeight:"bold"},c={color:"#fff"},h={fontSize:n?"1.5rem":"1.8rem",lineHeight:"1.6",marginBottom:"15px",textAlign:"justify",color:"#FDD788"},m={fontSize:n?"2.5rem":"3rem",textAlign:"center",marginBottom:"30px",color:"#febb12",fontWeight:"bold"},g={display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",gap:"20px",marginBottom:"30px"},b={position:"relative",width:"100%",maxWidth:"300px",perspective:"1000px",margin:"0 auto"},I=N=>({position:"relative",width:"100%",height:"350px",transition:"transform 0.6s",transformStyle:"preserve-3d",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",transform:N?"rotateY(180deg)":"rotateY(0deg)"}),C={position:"absolute",width:"100%",height:"100%",backfaceVisibility:"hidden",backgroundColor:"rgba(37,37,37,255)",color:"#febb12",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",boxSizing:"border-box",borderRadius:"10px",overflow:"hidden"},R={position:"absolute",width:"100%",height:"100%",backfaceVisibility:"hidden",backgroundColor:"#333",color:"#FDD788",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",boxSizing:"border-box",transform:"rotateY(180deg)",borderRadius:"10px",overflow:"hidden"},E={width:"100%",height:"200px",objectFit:"cover",borderRadius:"10px"},v={fontSize:n?"1.8rem":"2rem",margin:"10px 0",color:"#febb12",fontWeight:"bold"},x={fontSize:n?"1.6rem":"1.5rem",color:"#FDD788"},P={display:"none"},L=[{title:"Live Market Sessions",text:"Our trading floor, the first of its kind in Bihar, offers a unique opportunity to learn and trade during live market.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/2nd_s04uzo.jpg",backText:"Join our live market sessions at Stock Archery to gain unparalleled real-time trading experience and actionable insights directly from industry experts. Our sessions offer a unique opportunity to engage with the market as it unfolds, providing you with hands-on learning and immediate feedback from seasoned professionals."},{title:"One-on-One Mentorship",text:"Stock Archery offers personalized mentorship, empowering you with tailored guidance and support for success.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/3rd_jem2df.jpg",backText:"Our exclusive one-on-one mentorship program offers personalized support tailored to your unique trading needs. Designed to help you navigate the complexities of the stock market with confidence, this program provides direct access to expert guidance and customized strategies."},{title:"Doubt Clearing Sessions",text:"We are dedicated to sustainable practices that protect the environment and promote a healthier future.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152393/5th_-_Copy_flkcme.jpg",backText:"Clear your doubts and overcome trading challenges with our in-depth, personalized sessions. Our program is designed to tackle your specific trading issues head-on, providing targeted solutions and expert advice to address your unique concerns. Benefit from comprehensive, one-on-one discussions that focus on resolving your trading difficulties and refining your strategies."},{title:"1 Year Handhold Support",text:"We actively engage with and support our local communities through various initiatives and partnerships.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152389/1st_-_Copy_iarhze.jpg",backText:"Enjoy a full year of dedicated support with our comprehensive trading program, designed to keep you on track with your trading goals and ensure continuous progress. Our year-long support package offers you ongoing access to expert guidance, personalized feedback, and strategic insights tailored to your evolving needs."}];return d.jsxs(d.Fragment,{children:[d.jsxs(Zu,{children:[d.jsx("title",{children:"About Us | Stock Archery"}),d.jsx("meta",{name:"description",content:"Learn about Stock Archery, Bihar’s premier trading floor offering hands-on trading education, live market sessions, and personalized mentorship. Discover our innovative approach and services to enhance your trading skills."}),d.jsx("meta",{name:"keywords",content:"Stock Archery, trading education, live market sessions, one-on-one mentorship, trading support, Bihar"}),d.jsx("meta",{property:"og:title",content:"About Us | Stock Archery"}),d.jsx("meta",{property:"og:description",content:"Discover Stock Archery's premier trading floor in Bihar. Learn about our live market sessions, one-on-one mentorship, and year-long support programs designed to enhance your trading skills."}),d.jsx("meta",{property:"og:image",content:"./images/about1.svg"}),d.jsx("meta",{property:"og:url",content:"https://www.stockarchery.com/about"})]}),d.jsxs("div",{style:i,children:[d.jsxs("section",{style:o,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152394/about1_sz1ch8.svg",alt:"About Stock Archery",style:s}),d.jsxs("div",{style:l,children:[d.jsxs("h1",{style:u,children:[d.jsx("span",{style:c,children:"ABOUT"})," US"]}),d.jsx("p",{style:h,children:"Stock Archery is Bihar’s premier trading floor and educational hub, offering unmatched hands-on trading education during live market sessions. As a pioneer in the region, we specialize in practical, real-time trading experience. Our expert trainers provide comprehensive, step-by-step guidance, ensuring that students master essential trading skills. At Stock Archery, our innovative approach promotes learning by doing—students trade alongside seasoned professionals, merging theory with real-world practice. Whether you're a novice or seeking advanced skill enhancement, Stock Archery delivers tailored classes to achieve your trading goals. Discover the future of trading education and elevate your market success with us today."})]})]}),d.jsxs("h1",{style:m,children:[d.jsx("span",{style:c,children:"Our"})," Services"]}),d.jsx("div",{style:g,children:L.map((N,_)=>d.jsx("div",{style:b,onMouseEnter:()=>e(_),onMouseLeave:()=>e(null),role:"region","aria-labelledby":`card-${_}-title`,children:d.jsxs("div",{style:I(t===_),children:[d.jsxs("div",{style:C,children:[d.jsx("img",{src:N.image,alt:`Image representing ${N.title}`,style:E}),d.jsx("strong",{children:d.jsx("h2",{id:`card-${_}-title`,style:v,children:N.title})}),d.jsx("p",{style:x,children:N.text})]}),d.jsxs("div",{style:R,children:[d.jsx("h2",{style:P,"aria-hidden":"true",children:N.title}),d.jsx("p",{style:x,children:N.backText})]})]})},_))})]})]})},oj=[{name:"Manav Ranjan",review:"Prem sir ka experience aur energetic class environment se maine live trading mein confidence paya. Standoff strategies bahut helpful hain.",rating:5,image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152411/stu55_ol06xn.jpg"},{name:"Shahwaz Alam",review:"I learned so much about the stock market from Ankit Sir. His classes are clear and helpful. Highly recommended",rating:4,image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152416/student3_etfv4z.png"},{name:"Vaihavb",review:"Live market mein trading ka experience anokha tha. Ankit sir, Prem sir, aur Prabhas sir ke guidance meinmaine kaafi kuch seekha.",rating:5,image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152410/stu44_g3jjqj.png"},{name:"Tripti Sharma",review:"I am thankful to have found Prem on Instagram, conducting live market classes from Bihar. Stock Archery real-time sessions are insightful and interactive, offering a thorough understanding of market dynamics.",rating:5,image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152417/student5_ll2sal.png"},{name:"Deepak Kumar",review:"Stock Archery ne mujhe trading ke basics aur advanced dono level pe mahir banaya. Bhagalpur jaise chote sheher mein aisa platform milna sach mein incredible ha",rating:5,image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152417/student6_xplvbd.png"},{name:"Anushka Singh",review:"Stock Archery ke live classes kamaal ki hain! Real-time market ke sath trading seekhne ka maza hi kuch aur hai. Professionals ke sath trade karke bahut kuch naya seekhne ko mila. Bahut helpful aur informative sessions hain. Highly recommended.",rating:5,image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152417/stuu55_bjn84b.jpg"},{name:"Harsh Raj",review:"Real-time market ke sath trading seekhna ek zabardast experience hai. Professionals ke guidance se bahut kuch seekhne ko mila. Highly recommended for serious traders!",rating:5,image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152417/stuu66_nctcb4.jpg"},{name:"Amit Kumar",review:"Real-time trading se confidence badta hai aur strategies ko easily implement karne ka mauka milta hai. Instructors bhi bahut supportive hain. Ideal for trading beginners and experts alike!.",rating:5,image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152417/stuu77_bnuuhv.jpg"}],sj=()=>d.jsxs("div",{className:"reviews-container",children:[d.jsx("style",{children:`
          body {
            background-color: rgba(37, 37, 37, 1);
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            color: #fff;
          }

          .reviews-container {
            padding: 20px;
            max-width: 1200px;
            margin: auto;
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 3rem;
            color: #fff;
          }

          h1 span {
            color: #febb12;
          }

          .reviews {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .review-card {
            background-color: rgba(37, 37, 37, 1);
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
          }

          .review-card img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-bottom: 10px;
          }

          .review-card h2 {
            margin-top: 0;
            font-size: 2rem;
            color: #febb12;
          }

          .review-card p {
            font-size: 1.5rem;
            color: #FDD788;
          }

          .rating {
            margin-top: 10px;
            font-size: 1.5rem;
            color: #50C878;
          }

          @media (max-width: 1200px) {
            .reviews {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 768px) {
            .reviews {
              grid-template-columns: repeat(2, 1fr);
            }

            h1 {
              font-size: 2.5rem;
             
            }
          }

          @media (max-width: 480px) {
            .reviews {
              grid-template-columns: 1fr;
            }

            h1 {
              
              font-size: 2.5rem;
            }
          }
        `}),d.jsxs("h1",{children:["Student ",d.jsx("span",{children:"Reviews"})]}),d.jsx("div",{className:"reviews",children:oj.map((t,e)=>d.jsxs("div",{className:"review-card",children:[d.jsx("img",{src:t.image,alt:`${t.name}'s profile`}),d.jsx("h2",{children:t.name}),d.jsx("p",{children:t.review}),d.jsxs("div",{className:"rating",children:["★".repeat(t.rating),"☆".repeat(5-t.rating)]})]},e))})]}),aj=()=>{const t=[{title:"Ola Electric IPO Success: Journey, Milestones, and Market Impact",description:"Ola Electric, a subsidiary of the ride-hailing giant Ola, has become a symbol of India's electric vehicle (EV) revolution.",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724395871/Grey_minimalist_business_project_presentation_eqv2bp.png",route:"/ola"},{title:"Zerodha Cancels Referral Program",description:"Zerodha Cancels Referral Program: A Detailed Analysis",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724396033/Simple_Presentation_in_Pink_Lilac_Pastel_Blobs_Basic_Style_wul5th.png",route:"/ref"},{title:"Stock Market Analysis During Festive Season",description:"Discover how the Indian stock market has performed during the festive seasons over the last five years.",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724401791/Add_a_heading_ctoegk.png",route:"/fest"}],e=(n,r,i,o)=>{const l=`${window.location.origin}${r}`,u=encodeURIComponent(l),c=encodeURIComponent(i),h=encodeURIComponent(o);let m="";switch(n){case"linkedin":m=`https://www.linkedin.com/shareArticle?mini=true&url=${u}&title=${c}`;break;case"telegram":m=`https://telegram.me/share/url?url=${u}&text=${c} - ${h}`;break;case"whatsapp":m=`https://api.whatsapp.com/send?text=${c}%20${u}%20%0A%0AImage:%20${h}`;break;default:return}window.open(m,"_blank")};return d.jsxs("div",{className:"blog-page",children:[d.jsx("style",{children:`
                /* General Styles */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }

                .container {
                    width: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 20px;
                    background: rgba(37, 37, 37, 255);
                }

                /* Hero Section Styles */
                .hero {
                    color: black;
                    text-align: center;
                    background: rgba(37, 37, 37, 255);
                }

                .hero h2 {
                    font-size: 3.5rem;
                    margin: 0;
                    color: #febb12;
                }

                .hero p {
                    font-size: 2rem;
                    margin: 10px 0 0;
                }

                /* Cards Container Styles */
                .cards-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                }

                .card {
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-decoration: none;
                    color: #febb12;
                    position: relative;
                }

                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.2);
                }

                .card-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .card-content {
                    padding: 20px;
                }

                .card-title {
                    font-size: 2rem;
                    margin: 0 0 10px;
                    font-weight: bold;
                }

                .card-description {
                    font-size: 1.5rem;
                    margin: 0;
                    color: #000000;
                    font-weight: bold;
                }

                .card-link {
                    display: block;
                    margin-top: 15px;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #febb12;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .card-link:hover {
                    color: #0056b3;
                }

                .share-icons {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                }

                .share-icon {
                    font-size: 3rem;
                    cursor: pointer;
                    color: #0056b3;
                    transition: color 0.3s ease;
                }

                .share-icon:hover {
                    color: #0056b3;
                }
                `}),d.jsx("section",{className:"hero",children:d.jsx("div",{className:"container",children:d.jsx("h2",{children:"BLOGS"})})}),d.jsx("div",{className:"container",children:d.jsx("div",{className:"cards-container",children:t.map((n,r)=>d.jsxs("a",{href:n.route,className:"card",children:[d.jsx("img",{src:n.imgUrl,alt:n.title,className:"card-image"}),d.jsxs("div",{className:"card-content",children:[d.jsx("h3",{className:"card-title",children:n.title}),d.jsx("p",{className:"card-description",children:n.description}),d.jsx("span",{className:"card-link",children:"Read More"})]}),d.jsxs("div",{className:"share-icons",children:[d.jsx($t,{icon:um,className:"share-icon",onClick:()=>e("linkedin",n.route,n.title,n.imgUrl)}),d.jsx($t,{icon:ZC,className:"share-icon",onClick:()=>e("telegram",n.route,n.title,n.imgUrl)}),d.jsx($t,{icon:R2,className:"share-icon",onClick:()=>e("whatsapp",n.route,n.title,n.imgUrl)})]})]},r))})})]})},Te={body:{margin:0,fontFamily:"Arial, sans-serif",backgroundColor:"#f4f4f4",overflowX:"hidden"},header:{backgroundImage:"url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724395871/Grey_minimalist_business_project_presentation_eqv2bp.png)",backgroundSize:"cover",backgroundPosition:"center",color:"white",padding:"30px 20px",width:"100%",height:"280px",minHeight:"198px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",animation:"fadeIn 1s ease-in-out",textAlign:"center",position:"relative",left:"2px",right:"2px",marginTop:"2px"},headerH1:{fontSize:"2.5em",margin:0,animation:"slideIn 1s ease-out"},main:{padding:"20px",width:"100%",boxSizing:"border-box",backgroundColor:"#fff"},h1:{fontSize:"2.5em",color:"#333",marginBottom:"20px",transition:"color 0.3s ease"},h1Hover:{color:"#4CAF50"},h2:{fontSize:"1.8em",color:"#555",marginTop:"20px",marginBottom:"10px",fontWeight:"bold",textAlign:"left",transition:"color 0.3s ease"},h2Hover:{color:"#4CAF50"},p:{lineHeight:"1.8",color:"#000000",marginBottom:"20px",textAlign:"justify"},socialIcons:{display:"flex",justifyContent:"center",marginTop:"20px"},socialIcon:{textDecoration:"none",margin:"0 10px",fontSize:"24px",color:"#007BFF",transition:"color 0.3s ease, transform 0.3s ease"},socialIconHover:{color:"#0056b3",transform:"scale(1.2)"},socialIconInner:{background:"none",border:"none",padding:"0",borderRadius:"0"}},lj=()=>d.jsxs("div",{style:Te.body,children:[d.jsx("header",{style:Te.header}),d.jsxs("main",{style:Te.main,children:[d.jsx("h1",{style:Te.h1,children:"Ola Electric IPO Success: Journey, Milestones, and Market Impact"}),d.jsx("h2",{style:Te.h2,children:"The Birth of Ola Electric"}),d.jsx("p",{style:Te.p,children:"Ola Electric was officially founded in 2017, but its roots trace back to the larger vision of Bhavish Aggarwal, the co-founder of Ola Cabs. Recognizing the global shift towards sustainable transportation and the Indian government's push for electric mobility, Aggarwal envisioned an electric ecosystem that would encompass not just vehicles but also the infrastructure required to support them. Ola Electric's mission was clear from the start: to create affordable, high-performance electric vehicles that could replace traditional internal combustion engine (ICE) vehicles in India. This vision was aligned with India's National Electric Mobility Mission Plan, which aimed to achieve significant electrification of the automobile industry by 2030."}),d.jsx("h2",{style:Te.h2,children:"Early Challenges and Strategic Alliances"}),d.jsx("p",{style:Te.p,children:"The journey to building a robust electric vehicle company was fraught with challenges. In a market dominated by ICE vehicles, the acceptance of electric vehicles (EVs) was a significant hurdle. Concerns about range anxiety, charging infrastructure, and the high initial cost of EVs were major roadblocks. To address these issues, Ola Electric adopted a multi-pronged strategy. The company started by focusing on electric two-wheelers, a segment that had a higher acceptance rate among Indian consumers due to lower costs and easier urban mobility. This decision proved crucial as it allowed Ola Electric to establish a foothold in the burgeoning EV market. In 2018, Ola Electric raised $56 million in its first funding round from Tiger Global and Matrix Partners. This funding was instrumental in accelerating the company's R&D efforts and scaling its production capabilities."}),d.jsx("h2",{style:Te.h2,children:"The Ola Electric Scooter: A Game Changer"}),d.jsx("p",{style:Te.p,children:"In 2020, Ola Electric unveiled its first electric scooter, the Ola S1, which was met with widespread acclaim. The scooter was designed to be both affordable and technologically advanced, with features such as app-based keyless entry, voice controls, and a robust battery pack offering a range of over 100 kilometers on a single charge. The Ola S1's launch was a pivotal moment for the company. It not only demonstrated Ola Electric's ability to deliver a high-quality product but also set new standards in the Indian EV market. The scooter's success was underpinned by Ola's investment in a sprawling manufacturing facility in Krishnagiri, Tamil Nadu, dubbed the 'Futurefactory.'"}),d.jsx("h2",{style:Te.h2,children:"The Futurefactory: A Vision Realized"}),d.jsx("p",{style:Te.p,children:"The Futurefactory, one of the world's largest electric two-wheeler production facilities, is a testament to Ola Electric's ambitious vision. Spread over 500 acres, the factory has an annual production capacity of 10 million vehicles, making it the largest of its kind globally. This facility is a critical component of Ola Electric's strategy to scale its operations and meet the growing demand for electric vehicles. The factory is also a shining example of sustainable manufacturing, powered entirely by renewable energy sources, and is expected to be the world's first carbon-negative two-wheeler factory."}),d.jsx("p",{style:Te.p,children:"In conclusion, Ola Electric's remarkable performance in the stock market is a reflection of its strategic vision, innovative product offerings, and strong market fundamentals. As the company continues to expand and capture a larger share of the electric vehicle market, it is likely to maintain its position as a leading player in the industry."}),d.jsxs("div",{style:Te.socialIcons,children:[d.jsx("a",{href:"https://twitter.com/share?url=https://stockarchery.in/ola&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-twitter",style:Te.socialIconInner})}),d.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/ola",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-facebook-f",style:Te.socialIconInner})}),d.jsx("a",{href:"https://wa.me/?text=https://stockarchery.in/ola",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-whatsapp",style:Te.socialIconInner})}),d.jsx("a",{href:"https://t.me/share/url?url=https://stockarchery.in/ola&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-telegram",style:Te.socialIconInner})}),d.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/ola",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-linkedin",style:Te.socialIconInner})})]})]}),d.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
  
            @keyframes slideIn {
              from { transform: translateY(-20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
  
            @media (max-width: 768px) {
              header {
                padding: 30px 10px;
              }
              header h1 {
                font-size: 2em;
              }
              main {
                padding: 15px;
              }
              h1 {
                font-size: 2em;
              }
              h2 {
                font-size: 1.5em;
              }
              .social-icons a {
                margin: 0 8px;
                font-size: 20px;
              }
            }
  
            @media (max-width: 480px) {
              header {
                padding: 20px 5px;
              }
              header h1 {
                font-size: 1.5em;
              }
              main {
                padding: 10px;
              }
              h1 {
                font-size: 1.8em;
              }
              h2 {
                font-size: 1.3em;
              }
              .social-icons {
                flex-direction: row;
                align-items: center;
              }
              .social-icons a {
                margin: 5px 5px;
                font-size: 18px;
              }
            }
          `})]}),le={body:{margin:0,fontFamily:"Arial, sans-serif",backgroundColor:"#f4f4f4",overflowX:"hidden"},header:{backgroundImage:"url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724396033/Simple_Presentation_in_Pink_Lilac_Pastel_Blobs_Basic_Style_wul5th.png)",backgroundSize:"cover",backgroundPosition:"center",color:"white",padding:"30px 20px",width:"100%",height:"280px",minHeight:"198px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",animation:"fadeIn 1s ease-in-out",textAlign:"center",position:"relative",left:"2px",right:"2px",marginTop:"2px"},headerH1:{fontSize:"2.5em",margin:0,animation:"slideIn 1s ease-out"},main:{padding:"20px",width:"100%",boxSizing:"border-box",backgroundColor:"#fff"},h1:{fontSize:"2.5em",color:"#333",marginBottom:"20px",transition:"color 0.3s ease"},h1Hover:{color:"#4CAF50"},h2:{fontSize:"1.8em",color:"#555",marginTop:"20px",marginBottom:"10px",fontWeight:"bold",textAlign:"left",transition:"color 0.3s ease"},h2Hover:{color:"#4CAF50"},h3:{fontSize:"1.0em",color:"#000000",transition:"color 0.3s ease"},p:{lineHeight:"1.8",color:"#000000",marginBottom:"20px",textAlign:"justify"},socialIcons:{display:"flex",justifyContent:"center",marginTop:"20px"},socialIcon:{textDecoration:"none",margin:"0 10px",fontSize:"24px",color:"#007BFF",transition:"color 0.3s ease, transform 0.3s ease"},socialIconHover:{color:"#0056b3",transform:"scale(1.2)"},socialIconInner:{background:"none",border:"none",padding:"0",borderRadius:"0"}},uj=()=>d.jsxs("div",{style:le.body,children:[d.jsx("header",{style:le.header}),d.jsxs("main",{style:le.main,children:[d.jsx("h1",{style:le.h1,children:"Zerodha Cancels Referral Program"}),d.jsx("h2",{style:le.h2,children:"Introduction"}),d.jsx("p",{style:le.p,children:"Zerodha, India's largest stockbroker, has recently announced the cancellation of its popular referral program. This decision has stirred conversations in the financial community, as the referral program was a significant part of Zerodha's customer acquisition strategy. In this report, we will explore the reasons behind this decision, its potential impact, and what it means for Zerodha and its users."}),d.jsx("h2",{style:le.h2,children:"Background of Zerodha's Referral Program"}),d.jsx("p",{style:le.p,children:"Zerodha's referral program was introduced as an innovative way to incentivize existing users to bring new customers to the platform. The program offered monetary rewards or brokerage credits to those who referred new users who successfully opened trading accounts with Zerodha. This approach not only helped Zerodha grow its user base rapidly but also created a strong community of traders who were actively engaged with the platform."}),d.jsx("h2",{style:le.h2,children:"Why Zerodha Cancelled the Referral Program"}),d.jsx("p",{style:le.p,children:"There are several reasons behind Zerodha's decision to cancel its referral program:"}),d.jsxs("ol",{children:[d.jsx("li",{children:d.jsxs("p",{style:le.p,children:[d.jsx("h3",{style:le.h3,children:"Regulatory Compliance:"})," The financial industry in India is heavily regulated. The Securities and Exchange Board of India (SEBI) has been tightening regulations around promotional activities, including referral programs, to ensure transparency and protect investors. Zerodha's decision could be influenced by the need to comply with these evolving regulations, thereby avoiding potential legal issues."]})}),d.jsx("li",{children:d.jsxs("p",{style:le.p,children:[d.jsx("h3",{style:le.h3,children:"Sustainability Concerns:"})," As Zerodha's user base grew, the cost of maintaining the referral program may have become unsustainable. The company might have found that the expenses associated with rewarding referrals were outweighing the benefits, especially as the program matured and the rate of new user acquisition slowed down."]})}),d.jsx("li",{children:d.jsxs("p",{style:le.p,children:[d.jsx("h3",{style:le.h3,children:"Focus on Organic Growth:"})," Zerodha has always emphasized the importance of organic growth and providing value through its products and services. By canceling the referral program, the company may be aiming to shift its focus entirely to organic user acquisition strategies, such as content marketing, educational initiatives, and word-of-mouth."]})})]}),d.jsx("h2",{style:le.h2,children:"Impact on Users and the Market"}),d.jsx("p",{style:le.p,children:"The cancellation of the referral program is likely to have mixed reactions among Zerodha's users. While some may be disappointed by the loss of an incentive to refer friends and family, others might appreciate the company's focus on improving its core services. In the long term, this decision could lead to a more sustainable and customer-centric approach, which may benefit both users and Zerodha."}),d.jsx("h2",{style:le.h2,children:"Conclusion"}),d.jsx("p",{style:le.p,children:"Zerodha's decision to cancel its referral program reflects its commitment to regulatory compliance, sustainable growth, and enhancing the user experience. While this move may seem surprising to some, it is likely a strategic decision aimed at positioning the company for long-term success in a rapidly evolving market. Users and stakeholders should view this change as a part of Zerodha's broader strategy to maintain its leadership position in the Indian stockbroking industry."}),d.jsxs("div",{style:le.socialIcons,children:[d.jsx("a",{href:"https://twitter.com/share?url=https://stockarchery.in/ref&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-twitter",style:le.socialIconInner})}),d.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/ref",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-facebook-f",style:le.socialIconInner})}),d.jsx("a",{href:"https://wa.me/?text=https://stockarchery.in/ref",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-whatsapp",style:le.socialIconInner})}),d.jsx("a",{href:"https://t.me/share/url?url=https://stockarchery.in/ref&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-telegram",style:le.socialIconInner})}),d.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/ref",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-linkedin",style:le.socialIconInner})})]})]}),d.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
  
            @keyframes slideIn {
              from { transform: translateY(-20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
  
            @media (max-width: 768px) {
              header {
                padding: 30px 10px;
              }
              header h1 {
                font-size: 2em;
              }
              main {
                padding: 15px;
              }
              h1 {
                font-size: 2em;
              }
              h2 {
                font-size: 1.5em;
              }
              .social-icons a {
                margin: 0 8px;
                font-size: 20px;
              }
            }
  
            @media (max-width: 480px) {
              header {
                padding: 20px 5px;
              }
              header h1 {
                font-size: 1.5em;
              }
              main {
                padding: 10px;
              }
              h1 {
                font-size: 1.8em;
              }
              h2 {
                font-size: 1.3em;
              }
              .social-icons {
                flex-direction: row;
                align-items: center;
              }
              .social-icons a {
                margin: 5px 5px;
                font-size: 18px;
              }
            }
          `})]}),K={body:{margin:0,fontFamily:"Arial, sans-serif",backgroundColor:"#f4f4f4",overflowX:"hidden"},header:{backgroundImage:"url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724401791/Add_a_heading_ctoegk.png)",backgroundSize:"cover",backgroundPosition:"center",color:"white",padding:"30px 20px",width:"100%",height:"280px",minHeight:"198px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",textAlign:"center",position:"relative",left:"2px",right:"2px",marginTop:"2px"},headerH1:{fontSize:"2.5em",margin:0,animation:"fadeIn 1s ease-in-out"},main:{padding:"20px",width:"100%",boxSizing:"border-box",backgroundColor:"#fff"},h1:{fontSize:"2.5em",color:"#333",marginBottom:"20px",transition:"color 0.3s ease"},h1Hover:{color:"#4CAF50"},h2:{fontSize:"1.8em",color:"#555",marginTop:"20px",marginBottom:"10px",fontWeight:"bold",textAlign:"left",transition:"color 0.3s ease"},h2Hover:{color:"#4CAF50"},p:{lineHeight:"1.8",color:"#000000",marginBottom:"20px",textAlign:"justify"},socialIcons:{display:"flex",justifyContent:"center",marginTop:"20px"},socialIcon:{textDecoration:"none",margin:"0 10px",fontSize:"24px",color:"#007BFF",transition:"color 0.3s ease, transform 0.3s ease"},socialIconHover:{color:"#0056b3",transform:"scale(1.2)"},socialIconInner:{background:"none",border:"none",padding:"0",borderRadius:"0"}},cj=()=>d.jsxs("div",{style:K.body,children:[d.jsx("header",{style:K.header}),d.jsxs("main",{style:K.main,children:[d.jsx("h1",{style:K.h1,children:"Analyzing Indian Stock Market Trends During Festive Seasons: Insights from the Last 5 Years"}),d.jsx("p",{style:K.p,children:"Discover how the Indian stock market has performed during the festive seasons over the last five years. Understand key trends, sectoral performance, and what to expect this year."}),d.jsx("h2",{style:K.h2,children:"Introduction"}),d.jsx("p",{style:K.p,children:"The festive season in India is a significant period not only for cultural celebrations but also for the economy and the stock market. Historically, the stock market tends to reflect the positive sentiment and increased consumer spending during festivals like Diwali, Dussehra, and Christmas. This blog explores the Indian stock market's behavior during the festive seasons over the past five years, offering valuable insights for investors. We will also discuss what the 2024 festive season might hold for the markets."}),d.jsx("h2",{style:K.h2,children:"Market Overview: Festive Seasons (2019-2023)"}),d.jsx("p",{style:K.p,children:"Over the past five years, the Indian stock market has exhibited a pattern of pre-festive rallies, with key indices like the Nifty 50 and Sensex showing significant movement. These rallies are often driven by increased trading volumes, positive investor sentiment, and sectoral performance, particularly in sectors like consumer goods, automotive, retail, and banking. Let's take a closer look at each year:"}),d.jsx("h3",{style:K.h2,children:"2019:"}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Pre-Diwali Rally:"})," In 2019, the market witnessed a strong rally in October, primarily due to positive corporate earnings and favorable government reforms. The Nifty 50 and Sensex both registered significant gains."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Sectoral Performance:"})," The FMCG sector outperformed, buoyed by increased consumer demand during the festive season. The automotive sector also saw a boost with the launch of new models and festive discounts."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Post-Festive Consolidation:"})," Following the festive season, the market experienced a phase of consolidation as investors booked profits, leading to a slight dip in the indices."]}),d.jsx("h3",{style:K.h2,children:"2020:"}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Pandemic Impact:"})," The market's behavior in 2020 was atypical due to the COVID-19 pandemic. Despite a global economic downturn, the Indian stock market showed resilience, particularly in the second half of the year."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Diwali Effect:"})," November 2020 saw a sharp rally, driven by positive news on vaccine developments and a strong recovery in corporate earnings. Both the Nifty 50 and Sensex reached all-time highs during this period."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Sectoral Winners:"})," The Pharma and IT sectors were the biggest gainers, reflecting their critical role during the pandemic."]}),d.jsx("h3",{style:K.h2,children:"2021:"}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Bull Run Continuation:"})," The Indian stock market continued its bullish trend into the festive season of 2021. The Sensex crossed the 60,000 mark for the first time, driven by robust economic recovery and strong corporate earnings."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Sectoral Insights:"})," The real estate and infrastructure sectors saw increased activity, supported by government initiatives and higher demand for housing during the festive period."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Post-Festive Stability:"})," Unlike previous years, the market remained relatively stable post-Diwali, with minor corrections but no significant sell-off."]}),d.jsx("h3",{style:K.h2,children:"2022:"}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Geopolitical Uncertainties:"})," The market was heavily influenced by global factors, including the Russia-Ukraine conflict, which led to cautious trading during the festive season."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Diwali Rally:"})," Despite global headwinds, the Indian stock market managed a modest rally, driven by strong domestic consumption and festive spending."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Sectoral Performance:"})," Energy and commodities sectors performed well due to rising global prices, while consumer goods and retail also saw gains thanks to festive demand."]}),d.jsx("h3",{style:K.h2,children:"2023:"}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Economic Recovery:"})," The Indian economy showed strong signs of recovery in 2023, reflected in the stock market performance. Both the Nifty 50 and Sensex hit new highs during the Diwali period, supported by robust corporate earnings and positive macroeconomic indicators."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Sectoral Gains:"})," The banking and financial services sectors led the rally, followed by consumer goods and retail. The automotive sector also benefited from festive sales and new product launches."]}),d.jsx("h2",{style:K.h2,children:"Key Observations and Sectoral Performance"}),d.jsx("p",{style:K.p,children:"Over the years, certain patterns have emerged in the Indian stock market during the festive season:"}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"1. Positive Sentiment:"})," The market generally reacts positively during the festive season, often leading to pre-festive rallies. This trend is fueled by investor optimism, increased consumer spending, and favorable economic conditions."]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"2. Sectoral Rotation:"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Consumer Goods:"})," This sector consistently performs well during the festive season, driven by increased demand for FMCG products."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Automotive:"})," Festive discounts and new model launches lead to higher sales, boosting the sector's stock performance."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Banking:"})," The festive season sees increased activity in the banking sector due to higher demand for loans and financial services. Stable interest rates further support this growth."]})]})]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"3. Profit Booking:"})," A common pattern of profit booking is observed post-festive season, leading to market consolidation. Investors often sell off stocks to lock in gains made during the pre-festive rally."]}),d.jsx("h2",{style:K.h2,children:"What to Expect in 2024"}),d.jsx("p",{style:K.p,children:"As we approach the 2024 festive season, several factors will influence the stock market's behavior. Here's a detailed analysis of the probable conditions:"}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"1. Current Economic Indicators:"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"GDP Growth:"})," The Indian economy is expected to continue its growth trajectory, with GDP growth estimates ranging between 6-7% for the year. A strong economic backdrop generally supports positive market sentiment during the festive season."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Inflation Trends:"})," Inflation has been relatively stable, but any unexpected spikes could influence consumer spending and market performance. The Reserve Bank of India's monetary policy will play a crucial role in maintaining this balance."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Corporate Earnings:"})," The earnings season leading up to the festive period will be critical. Strong corporate results could fuel a pre-festive rally, while any disappointments might temper expectations."]})]})]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"2. Global Influences:"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Geopolitical Tensions:"})," Ongoing global geopolitical issues, particularly in regions like Eastern Europe and the Middle East, could inject volatility into the markets. Investors should be cautious of any sharp corrections caused by global events."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"US Fed Policy:"})," The Federal Reserve's decisions on interest rates will impact global liquidity. Any tightening of monetary policy could lead to outflows from emerging markets, including India, affecting market sentiment."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Commodity Prices:"})," Oil and gold prices are particularly relevant to the Indian market. Elevated oil prices could pressure the Indian economy, while stable or rising gold prices might boost consumer spending during the festive season."]})]})]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"3. Sectoral Outlook:"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Consumer Goods:"})," This sector is likely to perform well as consumer spending typically increases during the festive season. Companies in the FMCG and retail sectors could see a boost in sales, reflecting positively on their stock prices."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Automotive:"})," The auto sector could benefit from new launches and festive offers, driving sales volumes. However, supply chain issues and raw material costs need to be monitored."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Banking and Financial Services:"})," With increasing demand for festive season loans and financial services, this sector could see significant activity. Stable interest rates would support this growth."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Technology and IT:"})," The tech sector, buoyed by strong demand for digital services, could continue its positive performance, especially if global economic conditions remain favorable."]})]})]}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"4. Predicted Scenarios:"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Optimistic Scenario:"})," If corporate earnings are strong and global conditions remain stable, we could see a robust pre-festive rally with sectors like consumer goods, banking, and automotive leading the charge. The market might hit new highs during the festive season."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Neutral Scenario:"})," If global uncertainties persist, particularly regarding the US Fed’s policies or geopolitical tensions, the market may experience a moderate rally, followed by sideways movement or slight corrections."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Pessimistic Scenario:"})," In case of significant global disruptions or a sharp rise in inflation, the market might face increased volatility, leading to a muted festive season rally. In this scenario, defensive sectors like IT and Pharma might perform better."]})]})]}),d.jsx("h2",{style:K.h2,children:"Conclusion: Investing During the Festive Season"}),d.jsx("p",{style:K.p,children:"The festive season presents unique opportunities for investors. Historical trends suggest that a pre-festive rally is likely, driven by positive sentiment and increased consumer spending. However, global uncertainties could moderate this rally, making it essential for investors to stay informed and consider sectoral performance when making investment decisions."}),d.jsxs("p",{style:K.p,children:[d.jsx("strong",{children:"Investment Tips:"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Timing:"})," Enter the market early in the pre-festive rally and be cautious of profit booking post-festive season."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Sectoral Focus:"})," Invest in sectors that traditionally perform well during the festive season, such as consumer goods, automotive, and banking."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Global Trends:"})," Keep an eye on global economic conditions and geopolitical events, as they can significantly impact market sentiment during the festive season."]})]})]}),d.jsxs("div",{style:K.socialIcons,children:[d.jsx("a",{href:"https://twitter.com/share?url=https://stockarchery.in/fest&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:K.socialIcon,children:d.jsx("i",{className:"fab fa-twitter",style:K.socialIconInner})}),d.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/fest",target:"_blank",rel:"noopener noreferrer",style:K.socialIcon,children:d.jsx("i",{className:"fab fa-facebook-f",style:K.socialIconInner})}),d.jsx("a",{href:"https://wa.me/?text=https://stockarchery.in/fest",target:"_blank",rel:"noopener noreferrer",style:K.socialIcon,children:d.jsx("i",{className:"fab fa-whatsapp",style:K.socialIconInner})}),d.jsx("a",{href:"https://t.me/share/url?url=https://stockarchery.in/fest&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:K.socialIcon,children:d.jsx("i",{className:"fab fa-telegram",style:K.socialIconInner})}),d.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/fest",target:"_blank",rel:"noopener noreferrer",style:K.socialIcon,children:d.jsx("i",{className:"fab fa-linkedin",style:K.socialIconInner})})]})]})]}),fj={colors:{heading:"rgb(24 24 29)",text:"#febb12;",white:"#fff",yellow:"#febb12",black:"#212529",helper:"#8490ff",bg:"rgb(249 249 255)",footer_bg:"#0a1435",btn:"rgb(98 84 243)",border:"rgba(98, 84, 243, 0.5)",hr:"#ffffff",gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",shadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px"},media:{mobile:"768px",tab:"998px"}},dj=()=>d.jsxs(SI,{theme:fj,children:[d.jsx(CI,{}),d.jsx(rj,{}),d.jsxs(_k,{children:[d.jsx(zI,{}),d.jsxs(dk,{children:[d.jsx(tt,{path:"/",element:d.jsx(y3,{})}),d.jsx(tt,{path:"/about",element:d.jsx(C3,{})}),d.jsx(tt,{path:"/service",element:d.jsx(P3,{})}),d.jsx(tt,{path:"/contact",element:d.jsx(B9,{})}),d.jsx(tt,{path:"/review",element:d.jsx(Z9,{})}),d.jsx(tt,{path:"/video",element:d.jsx(Z2,{})}),d.jsx(tt,{path:"/FAQ",element:d.jsx(ej,{})}),d.jsx(tt,{path:"/blog",element:d.jsx(aj,{})}),d.jsx(tt,{path:"/content",element:d.jsx(ij,{})}),d.jsx(tt,{path:"/testimonial",element:d.jsx(sj,{})}),d.jsx(tt,{path:"/new",element:d.jsx(nE,{})}),d.jsx(tt,{path:"/sect",element:d.jsx(tE,{})}),d.jsx(tt,{path:"/ola",element:d.jsx(lj,{})}),d.jsx(tt,{path:"/ref",element:d.jsx(uj,{})}),d.jsx(tt,{path:"/fest",element:d.jsx(cj,{})}),d.jsx(tt,{path:"*",element:d.jsx(ck,{to:"/"})})," "]}),d.jsx(e4,{})]})]});cd.createRoot(document.getElementById("root")).render(d.jsxs(s4,{children:[d.jsx(de.StrictMode,{children:d.jsx(dj,{})}),","]}));
