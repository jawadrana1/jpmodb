(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var jh={exports:{}},Ea={},Bh={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function NE(){if(Pm)return Te;Pm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function P(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,X={};function H(x,B,ae){this.props=x,this.context=B,this.refs=X,this.updater=ae||z}H.prototype.isReactComponent={},H.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},H.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ve(){}ve.prototype=H.prototype;function fe(x,B,ae){this.props=x,this.context=B,this.refs=X,this.updater=ae||z}var ge=fe.prototype=new ve;ge.constructor=fe,K(ge,H.prototype),ge.isPureReactComponent=!0;var Ie=Array.isArray,Ze=Object.prototype.hasOwnProperty,De={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(x,B,ae){var Ee,we={},Pe=null,Oe=null;if(B!=null)for(Ee in B.ref!==void 0&&(Oe=B.ref),B.key!==void 0&&(Pe=""+B.key),B)Ze.call(B,Ee)&&!D.hasOwnProperty(Ee)&&(we[Ee]=B[Ee]);var Le=arguments.length-2;if(Le===1)we.children=ae;else if(1<Le){for(var ze=Array(Le),gt=0;gt<Le;gt++)ze[gt]=arguments[gt+2];we.children=ze}if(x&&x.defaultProps)for(Ee in Le=x.defaultProps,Le)we[Ee]===void 0&&(we[Ee]=Le[Ee]);return{$$typeof:i,type:x,key:Pe,ref:Oe,props:we,_owner:De.current}}function A(x,B){return{$$typeof:i,type:x.type,key:B,ref:x.ref,props:x.props,_owner:x._owner}}function N(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function V(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ae){return B[ae]})}var O=/\/+/g;function S(x,B){return typeof x=="object"&&x!==null&&x.key!=null?V(""+x.key):B.toString(36)}function et(x,B,ae,Ee,we){var Pe=typeof x;(Pe==="undefined"||Pe==="boolean")&&(x=null);var Oe=!1;if(x===null)Oe=!0;else switch(Pe){case"string":case"number":Oe=!0;break;case"object":switch(x.$$typeof){case i:case e:Oe=!0}}if(Oe)return Oe=x,we=we(Oe),x=Ee===""?"."+S(Oe,0):Ee,Ie(we)?(ae="",x!=null&&(ae=x.replace(O,"$&/")+"/"),et(we,B,ae,"",function(gt){return gt})):we!=null&&(N(we)&&(we=A(we,ae+(!we.key||Oe&&Oe.key===we.key?"":(""+we.key).replace(O,"$&/")+"/")+x)),B.push(we)),1;if(Oe=0,Ee=Ee===""?".":Ee+":",Ie(x))for(var Le=0;Le<x.length;Le++){Pe=x[Le];var ze=Ee+S(Pe,Le);Oe+=et(Pe,B,ae,ze,we)}else if(ze=P(x),typeof ze=="function")for(x=ze.call(x),Le=0;!(Pe=x.next()).done;)Pe=Pe.value,ze=Ee+S(Pe,Le++),Oe+=et(Pe,B,ae,ze,we);else if(Pe==="object")throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Oe}function Nt(x,B,ae){if(x==null)return x;var Ee=[],we=0;return et(x,Ee,"","",function(Pe){return B.call(ae,Pe,we++)}),Ee}function Dt(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(ae){(x._status===0||x._status===-1)&&(x._status=1,x._result=ae)},function(ae){(x._status===0||x._status===-1)&&(x._status=2,x._result=ae)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var be={current:null},J={transition:null},le={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:J,ReactCurrentOwner:De};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Te.Children={map:Nt,forEach:function(x,B,ae){Nt(x,function(){B.apply(this,arguments)},ae)},count:function(x){var B=0;return Nt(x,function(){B++}),B},toArray:function(x){return Nt(x,function(B){return B})||[]},only:function(x){if(!N(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Te.Component=H,Te.Fragment=t,Te.Profiler=o,Te.PureComponent=fe,Te.StrictMode=s,Te.Suspense=y,Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Te.act=ee,Te.cloneElement=function(x,B,ae){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Ee=K({},x.props),we=x.key,Pe=x.ref,Oe=x._owner;if(B!=null){if(B.ref!==void 0&&(Pe=B.ref,Oe=De.current),B.key!==void 0&&(we=""+B.key),x.type&&x.type.defaultProps)var Le=x.type.defaultProps;for(ze in B)Ze.call(B,ze)&&!D.hasOwnProperty(ze)&&(Ee[ze]=B[ze]===void 0&&Le!==void 0?Le[ze]:B[ze])}var ze=arguments.length-2;if(ze===1)Ee.children=ae;else if(1<ze){Le=Array(ze);for(var gt=0;gt<ze;gt++)Le[gt]=arguments[gt+2];Ee.children=Le}return{$$typeof:i,type:x.type,key:we,ref:Pe,props:Ee,_owner:Oe}},Te.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},Te.createElement=I,Te.createFactory=function(x){var B=I.bind(null,x);return B.type=x,B},Te.createRef=function(){return{current:null}},Te.forwardRef=function(x){return{$$typeof:m,render:x}},Te.isValidElement=N,Te.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:Dt}},Te.memo=function(x,B){return{$$typeof:v,type:x,compare:B===void 0?null:B}},Te.startTransition=function(x){var B=J.transition;J.transition={};try{x()}finally{J.transition=B}},Te.unstable_act=ee,Te.useCallback=function(x,B){return be.current.useCallback(x,B)},Te.useContext=function(x){return be.current.useContext(x)},Te.useDebugValue=function(){},Te.useDeferredValue=function(x){return be.current.useDeferredValue(x)},Te.useEffect=function(x,B){return be.current.useEffect(x,B)},Te.useId=function(){return be.current.useId()},Te.useImperativeHandle=function(x,B,ae){return be.current.useImperativeHandle(x,B,ae)},Te.useInsertionEffect=function(x,B){return be.current.useInsertionEffect(x,B)},Te.useLayoutEffect=function(x,B){return be.current.useLayoutEffect(x,B)},Te.useMemo=function(x,B){return be.current.useMemo(x,B)},Te.useReducer=function(x,B,ae){return be.current.useReducer(x,B,ae)},Te.useRef=function(x){return be.current.useRef(x)},Te.useState=function(x){return be.current.useState(x)},Te.useSyncExternalStore=function(x,B,ae){return be.current.useSyncExternalStore(x,B,ae)},Te.useTransition=function(){return be.current.useTransition()},Te.version="18.3.1",Te}var km;function Nf(){return km||(km=1,Bh.exports=NE()),Bh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function DE(){if(Nm)return Ea;Nm=1;var i=Nf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,C={},P=null,z=null;v!==void 0&&(P=""+v),y.key!==void 0&&(P=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(C[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)C[w]===void 0&&(C[w]=y[w]);return{$$typeof:e,type:m,key:P,ref:z,props:C,_owner:o.current}}return Ea.Fragment=t,Ea.jsx=h,Ea.jsxs=h,Ea}var Dm;function VE(){return Dm||(Dm=1,jh.exports=DE()),jh.exports}var dt=VE(),hu={},$h={exports:{}},Yt={},Hh={exports:{}},qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function xE(){return Vm||(Vm=1,function(i){function e(J,le){var ee=J.length;J.push(le);e:for(;0<ee;){var x=ee-1>>>1,B=J[x];if(0<o(B,le))J[x]=le,J[ee]=B,ee=x;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],ee=J.pop();if(ee!==le){J[0]=ee;e:for(var x=0,B=J.length,ae=B>>>1;x<ae;){var Ee=2*(x+1)-1,we=J[Ee],Pe=Ee+1,Oe=J[Pe];if(0>o(we,ee))Pe<B&&0>o(Oe,we)?(J[x]=Oe,J[Pe]=ee,x=Pe):(J[x]=we,J[Ee]=ee,x=Ee);else if(Pe<B&&0>o(Oe,ee))J[x]=Oe,J[Pe]=ee,x=Pe;else break e}}return le}function o(J,le){var ee=J.sortIndex-le.sortIndex;return ee!==0?ee:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,C=null,P=3,z=!1,K=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(J){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=J)s(v),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(v)}}function Ie(J){if(X=!1,ge(J),!K)if(t(y)!==null)K=!0,Dt(Ze);else{var le=t(v);le!==null&&be(Ie,le.startTime-J)}}function Ze(J,le){K=!1,X&&(X=!1,ve(I),I=-1),z=!0;var ee=P;try{for(ge(le),C=t(y);C!==null&&(!(C.expirationTime>le)||J&&!V());){var x=C.callback;if(typeof x=="function"){C.callback=null,P=C.priorityLevel;var B=x(C.expirationTime<=le);le=i.unstable_now(),typeof B=="function"?C.callback=B:C===t(y)&&s(y),ge(le)}else s(y);C=t(y)}if(C!==null)var ae=!0;else{var Ee=t(v);Ee!==null&&be(Ie,Ee.startTime-le),ae=!1}return ae}finally{C=null,P=ee,z=!1}}var De=!1,D=null,I=-1,A=5,N=-1;function V(){return!(i.unstable_now()-N<A)}function O(){if(D!==null){var J=i.unstable_now();N=J;var le=!0;try{le=D(!0,J)}finally{le?S():(De=!1,D=null)}}else De=!1}var S;if(typeof fe=="function")S=function(){fe(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Nt=et.port2;et.port1.onmessage=O,S=function(){Nt.postMessage(null)}}else S=function(){H(O,0)};function Dt(J){D=J,De||(De=!0,S())}function be(J,le){I=H(function(){J(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){K||z||(K=!0,Dt(Ze))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return P},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(J){switch(P){case 1:case 2:case 3:var le=3;break;default:le=P}var ee=P;P=le;try{return J()}finally{P=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=P;P=J;try{return le()}finally{P=ee}},i.unstable_scheduleCallback=function(J,le,ee){var x=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?x+ee:x):ee=x,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ee+B,J={id:w++,callback:le,priorityLevel:J,startTime:ee,expirationTime:B,sortIndex:-1},ee>x?(J.sortIndex=ee,e(v,J),t(y)===null&&J===t(v)&&(X?(ve(I),I=-1):X=!0,be(Ie,ee-x))):(J.sortIndex=B,e(y,J),K||z||(K=!0,Dt(Ze))),J},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(J){var le=P;return function(){var ee=P;P=le;try{return J.apply(this,arguments)}finally{P=ee}}}}(qh)),qh}var xm;function OE(){return xm||(xm=1,Hh.exports=xE()),Hh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function LE(){if(Om)return Yt;Om=1;var i=Nf(),e=OE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function P(n){return y.call(C,n)?!0:y.call(w,n)?!1:v.test(n)?C[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,f,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var ve=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ve,fe);H[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ve,fe);H[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ve,fe);H[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,r,a,c){var f=H.hasOwnProperty(r)?H[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(K(r,a,f,c)&&(a=null),c||f===null?P(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(r=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(r):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ie=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),De=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),V=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,x;function B(n){if(x===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+n}var ae=!1;function Ee(n,r){if(!n||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(b){var c=b}Reflect.construct(n,[],r)}else{try{r.call()}catch(b){c=b}n.call(r.prototype)}else{try{throw Error()}catch(b){c=b}n()}}catch(b){if(b&&c&&typeof b.stack=="string"){for(var f=b.stack.split(`
`),p=c.stack.split(`
`),_=f.length-1,T=p.length-1;1<=_&&0<=T&&f[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(f[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||f[_]!==p[T]){var R=`
`+f[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function we(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case De:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nt:return r=n.displayName||null,r!==null?r:Pe(n.type)||"Memo";case Dt:r=n._payload,n=n._init;try{return Pe(n(r))}catch{}}return null}function Oe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function sr(n){n._valueTracker||(n._valueTracker=gt(n))}function as(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ti(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ls(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ro(n,r){r=r.checked,r!=null&&ge(n,"checked",r,!1)}function Co(n,r){Ro(n,r);var a=Le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?us(n,r.type,a):r.hasOwnProperty("defaultValue")&&us(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xa(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function us(n,r,a){(r!=="number"||Dr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var or=Array.isArray;function ar(n,r,a,c){if(n=n.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=r.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),r=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Po(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function cs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(or(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Le(a)}}function hs(n,r){var a=Le(r.value),c=Le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ko(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lr,No=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,f)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Vr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Si=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(n){Si.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ii[r]=Ii[n]})});function Do(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ii.hasOwnProperty(n)&&Ii[n]?(""+r).trim():r+"px"}function Vo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Do(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var xo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oo(n,r){if(r){if(xo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Lo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function fs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ds=null,cn=null,bn=null;function ps(n){if(n=sa(n)){if(typeof ds!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Rl(r),ds(n.stateNode,n.type,r))}}function Un(n){cn?bn?bn.push(n):bn=[n]:cn=n}function Mo(){if(cn){var n=cn,r=bn;if(bn=cn=null,ps(n),r)for(n=0;n<r.length;n++)ps(r[n])}}function Ri(n,r){return n(r)}function Fo(){}var ur=!1;function bo(n,r,a){if(ur)return n(r,a);ur=!0;try{return Ri(n,r,a)}finally{ur=!1,(cn!==null||bn!==null)&&(Fo(),Mo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=Rl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ms=!1;if(m)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){ms=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{ms=!1}function Ci(n,r,a,c,f,p,_,T,R){var b=Array.prototype.slice.call(arguments,3);try{r.apply(a,b)}catch(W){this.onError(W)}}var Pi=!1,gs=null,Tn=!1,Uo=null,mc={onError:function(n){Pi=!0,gs=n}};function ys(n,r,a,c,f,p,_,T,R){Pi=!1,gs=null,Ci.apply(mc,arguments)}function Ya(n,r,a,c,f,p,_,T,R){if(ys.apply(this,arguments),Pi){if(Pi){var b=gs;Pi=!1,gs=null}else throw Error(t(198));Tn||(Tn=!0,Uo=b)}}function In(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function ki(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function Ja(n){var r=n.alternate;if(!r){if(r=In(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return Sn(f),n;if(p===c)return Sn(f),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=p;else{for(var _=!1,T=f.child;T;){if(T===a){_=!0,a=f,c=p;break}if(T===c){_=!0,c=f,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=f;break}if(T===c){_=!0,c=p,a=f;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function zo(n){return n=Ja(n),n!==null?_s(n):null}function _s(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=_s(n);if(r!==null)return r;n=n.sibling}return null}var vs=e.unstable_scheduleCallback,jo=e.unstable_cancelCallback,Za=e.unstable_shouldYield,gc=e.unstable_requestPaint,je=e.unstable_now,el=e.unstable_getCurrentPriorityLevel,Ni=e.unstable_ImmediatePriority,xr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,Bo=e.unstable_LowPriority,tl=e.unstable_IdlePriority,Di=null,tn=null;function nl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:il,$o=Math.log,rl=Math.LN2;function il(n){return n>>>=0,n===0?32:31-($o(n)/rl|0)|0}var Es=64,ws=4194304;function Or(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~f;T!==0?c=Or(T):(p&=_,p!==0&&(c=Or(p)))}else _=a&~f,_!==0?c=Or(_):p!==0&&(c=Or(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&f)===0&&(f=c&-c,p=r&-r,f>=p||f===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-zt(r),f=1<<a,c|=n[a],r&=~f;return c}function yc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-zt(p),T=1<<_,R=f[_];R===-1?((T&a)===0||(T&c)!==0)&&(f[_]=yc(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xi(){var n=Es;return Es<<=1,(Es&4194240)===0&&(Es=64),n}function Lr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Mr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-zt(r),n[r]=a}function Ue(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-zt(a),p=1<<f;r[f]=0,c[f]=-1,n[f]=-1,a&=~p}}function Fr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-zt(a),f=1<<c;f&r|n[c]&r&&(n[c]|=r),a&=~f}}var Ce=0;function br(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var sl,Ts,ol,al,ll,Ho=!1,zn=[],It=null,An=null,Rn=null,Ur=new Map,fn=new Map,jn=[],_c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ul(n,r){switch(n){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ur.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(r.pointerId)}}function Ht(n,r,a,c,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},r!==null&&(r=sa(r),r!==null&&Ts(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function vc(n,r,a,c,f){switch(r){case"focusin":return It=Ht(It,n,r,a,c,f),!0;case"dragenter":return An=Ht(An,n,r,a,c,f),!0;case"mouseover":return Rn=Ht(Rn,n,r,a,c,f),!0;case"pointerover":var p=f.pointerId;return Ur.set(p,Ht(Ur.get(p)||null,n,r,a,c,f)),!0;case"gotpointercapture":return p=f.pointerId,fn.set(p,Ht(fn.get(p)||null,n,r,a,c,f)),!0}return!1}function cl(n){var r=bi(n.target);if(r!==null){var a=In(r);if(a!==null){if(r=a.tag,r===13){if(r=ki(a),r!==null){n.blockedOn=r,ll(n.priority,function(){ol(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Is(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ai=c,a.target.dispatchEvent(c),Ai=null}else return r=sa(a),r!==null&&Ts(r),n.blockedOn=a,!1;r.shift()}return!0}function Oi(n,r,a){hr(n)&&a.delete(r)}function hl(){Ho=!1,It!==null&&hr(It)&&(It=null),An!==null&&hr(An)&&(An=null),Rn!==null&&hr(Rn)&&(Rn=null),Ur.forEach(Oi),fn.forEach(Oi)}function Cn(n,r){n.blockedOn===r&&(n.blockedOn=null,Ho||(Ho=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hl)))}function Pn(n){function r(f){return Cn(f,n)}if(0<zn.length){Cn(zn[0],n);for(var a=1;a<zn.length;a++){var c=zn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(It!==null&&Cn(It,n),An!==null&&Cn(An,n),Rn!==null&&Cn(Rn,n),Ur.forEach(r),fn.forEach(r),a=0;a<jn.length;a++)c=jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<jn.length&&(a=jn[0],a.blockedOn===null);)cl(a),a.blockedOn===null&&jn.shift()}var fr=Ie.ReactCurrentBatchConfig,zr=!0;function Ge(n,r,a,c){var f=Ce,p=fr.transition;fr.transition=null;try{Ce=1,qo(n,r,a,c)}finally{Ce=f,fr.transition=p}}function Ec(n,r,a,c){var f=Ce,p=fr.transition;fr.transition=null;try{Ce=4,qo(n,r,a,c)}finally{Ce=f,fr.transition=p}}function qo(n,r,a,c){if(zr){var f=Is(n,r,a,c);if(f===null)Dc(n,r,c,Li,a),ul(n,c);else if(vc(f,n,r,a,c))c.stopPropagation();else if(ul(n,c),r&4&&-1<_c.indexOf(n)){for(;f!==null;){var p=sa(f);if(p!==null&&sl(p),p=Is(n,r,a,c),p===null&&Dc(n,r,c,Li,a),p===f)break;f=p}f!==null&&c.stopPropagation()}else Dc(n,r,c,null,a)}}var Li=null;function Is(n,r,a,c){if(Li=null,n=fs(c),n=bi(n),n!==null)if(r=In(n),r===null)n=null;else if(a=r.tag,a===13){if(n=ki(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Li=n,null}function Wo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(el()){case Ni:return 1;case xr:return 4;case hn:case Bo:return 16;case tl:return 536870912;default:return 16}default:return 16}}var rn=null,Ss=null,qt=null;function Go(){if(qt)return qt;var n,r=Ss,a=r.length,c,f="value"in rn?rn.value:rn.textContent,p=f.length;for(n=0;n<a&&r[n]===f[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===f[p-c];c++);return qt=f.slice(n,1<c?1-c:void 0)}function As(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Ko(){return!1}function St(n){function r(a,c,f,p,_){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Bn:Ko,this.isPropagationStopped=Ko,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=St(kn),$n=ee({},kn,{view:0,detail:0}),wc=St($n),Cs,dr,jr,Mi=ee({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jr&&(jr&&n.type==="mousemove"?(Cs=n.screenX-jr.screenX,dr=n.screenY-jr.screenY):dr=Cs=0,jr=n),Cs)},movementY:function(n){return"movementY"in n?n.movementY:dr}}),Ps=St(Mi),Qo=ee({},Mi,{dataTransfer:0}),fl=St(Qo),ks=ee({},$n,{relatedTarget:0}),Ns=St(ks),dl=ee({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),pr=St(dl),pl=ee({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ml=St(pl),gl=ee({},kn,{data:0}),Xo=St(gl),Ds={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _l(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=yl[n])?!!r[n]:!1}function Hn(){return _l}var l=ee({},$n,{key:function(n){if(n.key){var r=Ds[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=As(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(n){return n.type==="keypress"?As(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?As(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),d=St(l),g=ee({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=St(g),L=ee({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),U=St(L),Y=ee({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=St(Y),ct=ee({},Mi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ke=St(ct),yt=[9,13,27,32],it=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var sn=m&&"TextEvent"in window&&!dn,Fi=m&&(!it||dn&&8<dn&&11>=dn),Vs=" ",Td=!1;function Id(n,r){switch(n){case"keyup":return yt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function Cv(n,r){switch(n){case"compositionend":return Sd(r);case"keypress":return r.which!==32?null:(Td=!0,Vs);case"textInput":return n=r.data,n===Vs&&Td?null:n;default:return null}}function Pv(n,r){if(xs)return n==="compositionend"||!it&&Id(n,r)?(n=Go(),qt=Ss=rn=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fi&&r.locale!=="ko"?null:r.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!kv[n.type]:r==="textarea"}function Rd(n,r,a,c){Un(c),r=Il(r,"onChange"),0<r.length&&(a=new Rs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Yo=null,Jo=null;function Nv(n){Hd(n,0)}function vl(n){var r=bs(n);if(as(r))return n}function Dv(n,r){if(n==="change")return r}var Cd=!1;if(m){var Tc;if(m){var Ic="oninput"in document;if(!Ic){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Ic=typeof Pd.oninput=="function"}Tc=Ic}else Tc=!1;Cd=Tc&&(!document.documentMode||9<document.documentMode)}function kd(){Yo&&(Yo.detachEvent("onpropertychange",Nd),Jo=Yo=null)}function Nd(n){if(n.propertyName==="value"&&vl(Jo)){var r=[];Rd(r,Jo,n,fs(n)),bo(Nv,r)}}function Vv(n,r,a){n==="focusin"?(kd(),Yo=r,Jo=a,Yo.attachEvent("onpropertychange",Nd)):n==="focusout"&&kd()}function xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vl(Jo)}function Ov(n,r){if(n==="click")return vl(r)}function Lv(n,r){if(n==="input"||n==="change")return vl(r)}function Mv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:Mv;function Zo(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!y.call(r,f)||!Nn(n[f],r[f]))return!1}return!0}function Dd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vd(n,r){var a=Dd(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dd(a)}}function xd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?xd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Od(){for(var n=window,r=Dr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Dr(n.document)}return r}function Sc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Fv(n){var r=Od(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&xd(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!n.extend&&p>c&&(f=c,c=p,p=f),f=Vd(a,p);var _=Vd(a,c);f&&_&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bv=m&&"documentMode"in document&&11>=document.documentMode,Os=null,Ac=null,ea=null,Rc=!1;function Ld(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||Os==null||Os!==Dr(c)||(c=Os,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ea&&Zo(ea,c)||(ea=c,c=Il(Ac,"onSelect"),0<c.length&&(r=new Rs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Os)))}function El(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ls={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Cc={},Md={};m&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function wl(n){if(Cc[n])return Cc[n];if(!Ls[n])return n;var r=Ls[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Md)return Cc[n]=r[a];return n}var Fd=wl("animationend"),bd=wl("animationiteration"),Ud=wl("animationstart"),zd=wl("transitionend"),jd=new Map,Bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(n,r){jd.set(n,r),u(r,[n])}for(var Pc=0;Pc<Bd.length;Pc++){var kc=Bd[Pc],Uv=kc.toLowerCase(),zv=kc[0].toUpperCase()+kc.slice(1);Br(Uv,"on"+zv)}Br(Fd,"onAnimationEnd"),Br(bd,"onAnimationIteration"),Br(Ud,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(zd,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function $d(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Ya(c,r,void 0,n),n.currentTarget=null}function Hd(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,b=T.currentTarget;if(T=T.listener,R!==p&&f.isPropagationStopped())break e;$d(f,T,b),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,b=T.currentTarget,T=T.listener,R!==p&&f.isPropagationStopped())break e;$d(f,T,b),p=R}}}if(Tn)throw n=Uo,Tn=!1,Uo=null,n}function $e(n,r){var a=r[Fc];a===void 0&&(a=r[Fc]=new Set);var c=n+"__bubble";a.has(c)||(qd(r,n,2,!1),a.add(c))}function Nc(n,r,a){var c=0;r&&(c|=4),qd(a,n,c,r)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function na(n){if(!n[Tl]){n[Tl]=!0,s.forEach(function(a){a!=="selectionchange"&&(jv.has(a)||Nc(a,!1,n),Nc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Tl]||(r[Tl]=!0,Nc("selectionchange",!1,r))}}function qd(n,r,a,c){switch(Wo(r)){case 1:var f=Ge;break;case 4:f=Ec;break;default:f=qo}a=f.bind(null,r,a,n),f=void 0,!ms||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(r,a,{capture:!0,passive:f}):n.addEventListener(r,a,!0):f!==void 0?n.addEventListener(r,a,{passive:f}):n.addEventListener(r,a,!1)}function Dc(n,r,a,c,f){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===f||T.nodeType===8&&T.parentNode===f)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===f||R.nodeType===8&&R.parentNode===f))return;_=_.return}for(;T!==null;){if(_=bi(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}bo(function(){var b=p,W=fs(a),G=[];e:{var q=jd.get(n);if(q!==void 0){var Z=Rs,re=n;switch(n){case"keypress":if(As(a)===0)break e;case"keydown":case"keyup":Z=d;break;case"focusin":re="focus",Z=Ns;break;case"focusout":re="blur",Z=Ns;break;case"beforeblur":case"afterblur":Z=Ns;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case Fd:case bd:case Ud:Z=pr;break;case zd:Z=Fe;break;case"scroll":Z=wc;break;case"wheel":Z=ke;break;case"copy":case"cut":case"paste":Z=ml;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var ie=(r&4)!==0,nt=!ie&&n==="scroll",M=ie?q!==null?q+"Capture":null:q;ie=[];for(var k=b,F;k!==null;){F=k;var Q=F.stateNode;if(F.tag===5&&Q!==null&&(F=Q,M!==null&&(Q=tt(k,M),Q!=null&&ie.push(ra(k,Q,F)))),nt)break;k=k.return}0<ie.length&&(q=new Z(q,re,null,a,W),G.push({event:q,listeners:ie}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",q&&a!==Ai&&(re=a.relatedTarget||a.fromElement)&&(bi(re)||re[mr]))break e;if((Z||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=b,re=re?bi(re):null,re!==null&&(nt=In(re),re!==nt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=b),Z!==re)){if(ie=Ps,Q="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ie=E,Q="onPointerLeave",M="onPointerEnter",k="pointer"),nt=Z==null?q:bs(Z),F=re==null?q:bs(re),q=new ie(Q,k+"leave",Z,a,W),q.target=nt,q.relatedTarget=F,Q=null,bi(W)===b&&(ie=new ie(M,k+"enter",re,a,W),ie.target=F,ie.relatedTarget=nt,Q=ie),nt=Q,Z&&re)t:{for(ie=Z,M=re,k=0,F=ie;F;F=Ms(F))k++;for(F=0,Q=M;Q;Q=Ms(Q))F++;for(;0<k-F;)ie=Ms(ie),k--;for(;0<F-k;)M=Ms(M),F--;for(;k--;){if(ie===M||M!==null&&ie===M.alternate)break t;ie=Ms(ie),M=Ms(M)}ie=null}else ie=null;Z!==null&&Wd(G,q,Z,ie,!1),re!==null&&nt!==null&&Wd(G,nt,re,ie,!0)}}e:{if(q=b?bs(b):window,Z=q.nodeName&&q.nodeName.toLowerCase(),Z==="select"||Z==="input"&&q.type==="file")var se=Dv;else if(Ad(q))if(Cd)se=Lv;else{se=xv;var ce=Vv}else(Z=q.nodeName)&&Z.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(se=Ov);if(se&&(se=se(n,b))){Rd(G,se,a,W);break e}ce&&ce(n,q,b),n==="focusout"&&(ce=q._wrapperState)&&ce.controlled&&q.type==="number"&&us(q,"number",q.value)}switch(ce=b?bs(b):window,n){case"focusin":(Ad(ce)||ce.contentEditable==="true")&&(Os=ce,Ac=b,ea=null);break;case"focusout":ea=Ac=Os=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Ld(G,a,W);break;case"selectionchange":if(bv)break;case"keydown":case"keyup":Ld(G,a,W)}var he;if(it)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else xs?Id(n,a)&&(pe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Fi&&a.locale!=="ko"&&(xs||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&xs&&(he=Go()):(rn=W,Ss="value"in rn?rn.value:rn.textContent,xs=!0)),ce=Il(b,pe),0<ce.length&&(pe=new Xo(pe,n,null,a,W),G.push({event:pe,listeners:ce}),he?pe.data=he:(he=Sd(a),he!==null&&(pe.data=he)))),(he=sn?Cv(n,a):Pv(n,a))&&(b=Il(b,"onBeforeInput"),0<b.length&&(W=new Xo("onBeforeInput","beforeinput",null,a,W),G.push({event:W,listeners:b}),W.data=he))}Hd(G,r)})}function ra(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Il(n,r){for(var a=r+"Capture",c=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=tt(n,a),p!=null&&c.unshift(ra(n,p,f)),p=tt(n,r),p!=null&&c.push(ra(n,p,f))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wd(n,r,a,c,f){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,b=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&b!==null&&(T=b,f?(R=tt(a,p),R!=null&&_.unshift(ra(a,R,T))):f||(R=tt(a,p),R!=null&&_.push(ra(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var Bv=/\r\n?/g,$v=/\u0000|\uFFFD/g;function Gd(n){return(typeof n=="string"?n:""+n).replace(Bv,`
`).replace($v,"")}function Sl(n,r,a){if(r=Gd(r),Gd(n)!==r&&a)throw Error(t(425))}function Al(){}var Vc=null,xc=null;function Oc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,Hv=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(n){return Kd.resolve(null).then(n).catch(Wv)}:Lc;function Wv(n){setTimeout(function(){throw n})}function Mc(n,r){var a=r,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Pn(r)}function $r(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Qd(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),qn="__reactFiber$"+Fs,ia="__reactProps$"+Fs,mr="__reactContainer$"+Fs,Fc="__reactEvents$"+Fs,Gv="__reactListeners$"+Fs,Kv="__reactHandles$"+Fs;function bi(n){var r=n[qn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[qn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Qd(n);n!==null;){if(a=n[qn])return a;n=Qd(n)}return r}n=a,a=n.parentNode}return null}function sa(n){return n=n[qn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Rl(n){return n[ia]||null}var bc=[],Us=-1;function Hr(n){return{current:n}}function He(n){0>Us||(n.current=bc[Us],bc[Us]=null,Us--)}function Be(n,r){Us++,bc[Us]=n.current,n.current=r}var qr={},Vt=Hr(qr),Wt=Hr(!1),Ui=qr;function zs(n,r){var a=n.type.contextTypes;if(!a)return qr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=f),f}function Gt(n){return n=n.childContextTypes,n!=null}function Cl(){He(Wt),He(Vt)}function Xd(n,r,a){if(Vt.current!==qr)throw Error(t(168));Be(Vt,r),Be(Wt,a)}function Yd(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(t(108,Oe(n)||"Unknown",f));return ee({},a,c)}function Pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qr,Ui=Vt.current,Be(Vt,n),Be(Wt,Wt.current),!0}function Jd(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Yd(n,r,Ui),c.__reactInternalMemoizedMergedChildContext=n,He(Wt),He(Vt),Be(Vt,n)):He(Wt),Be(Wt,a)}var gr=null,kl=!1,Uc=!1;function Zd(n){gr===null?gr=[n]:gr.push(n)}function Qv(n){kl=!0,Zd(n)}function Wr(){if(!Uc&&gr!==null){Uc=!0;var n=0,r=Ce;try{var a=gr;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,kl=!1}catch(f){throw gr!==null&&(gr=gr.slice(n+1)),vs(Ni,Wr),f}finally{Ce=r,Uc=!1}}return null}var js=[],Bs=0,Nl=null,Dl=0,pn=[],mn=0,zi=null,yr=1,_r="";function ji(n,r){js[Bs++]=Dl,js[Bs++]=Nl,Nl=n,Dl=r}function ep(n,r,a){pn[mn++]=yr,pn[mn++]=_r,pn[mn++]=zi,zi=n;var c=yr;n=_r;var f=32-zt(c)-1;c&=~(1<<f),a+=1;var p=32-zt(r)+f;if(30<p){var _=f-f%5;p=(c&(1<<_)-1).toString(32),c>>=_,f-=_,yr=1<<32-zt(r)+f|a<<f|c,_r=p+n}else yr=1<<p|a<<f|c,_r=n}function zc(n){n.return!==null&&(ji(n,1),ep(n,1,0))}function jc(n){for(;n===Nl;)Nl=js[--Bs],js[Bs]=null,Dl=js[--Bs],js[Bs]=null;for(;n===zi;)zi=pn[--mn],pn[mn]=null,_r=pn[--mn],pn[mn]=null,yr=pn[--mn],pn[mn]=null}var on=null,an=null,Ke=!1,Dn=null;function tp(n,r){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function np(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,on=n,an=$r(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,on=n,an=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=zi!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(Ke){var r=an;if(r){var a=r;if(!np(n,r)){if(Bc(n))throw Error(t(418));r=$r(a.nextSibling);var c=on;r&&np(n,r)?tp(c,a):(n.flags=n.flags&-4097|2,Ke=!1,on=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,on=n}}}function rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Vl(n){if(n!==on)return!1;if(!Ke)return rp(n),Ke=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Oc(n.type,n.memoizedProps)),r&&(r=an)){if(Bc(n))throw ip(),Error(t(418));for(;r;)tp(n,r),r=$r(r.nextSibling)}if(rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){an=$r(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}an=null}}else an=on?$r(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=an;n;)n=$r(n.nextSibling)}function $s(){an=on=null,Ke=!1}function Hc(n){Dn===null?Dn=[n]:Dn.push(n)}var Xv=Ie.ReactCurrentBatchConfig;function oa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=f.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function xl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function sp(n){var r=n._init;return r(n._payload)}function op(n){function r(M,k){if(n){var F=M.deletions;F===null?(M.deletions=[k],M.flags|=16):F.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function f(M,k){return M=ei(M,k),M.index=0,M.sibling=null,M}function p(M,k,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<k?(M.flags|=2,k):F):(M.flags|=2,k)):(M.flags|=1048576,k)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,k,F,Q){return k===null||k.tag!==6?(k=Lh(F,M.mode,Q),k.return=M,k):(k=f(k,F),k.return=M,k)}function R(M,k,F,Q){var se=F.type;return se===D?W(M,k,F.props.children,Q,F.key):k!==null&&(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Dt&&sp(se)===k.type)?(Q=f(k,F.props),Q.ref=oa(M,k,F),Q.return=M,Q):(Q=ru(F.type,F.key,F.props,null,M.mode,Q),Q.ref=oa(M,k,F),Q.return=M,Q)}function b(M,k,F,Q){return k===null||k.tag!==4||k.stateNode.containerInfo!==F.containerInfo||k.stateNode.implementation!==F.implementation?(k=Mh(F,M.mode,Q),k.return=M,k):(k=f(k,F.children||[]),k.return=M,k)}function W(M,k,F,Q,se){return k===null||k.tag!==7?(k=Qi(F,M.mode,Q,se),k.return=M,k):(k=f(k,F),k.return=M,k)}function G(M,k,F){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Lh(""+k,M.mode,F),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ze:return F=ru(k.type,k.key,k.props,null,M.mode,F),F.ref=oa(M,null,k),F.return=M,F;case De:return k=Mh(k,M.mode,F),k.return=M,k;case Dt:var Q=k._init;return G(M,Q(k._payload),F)}if(or(k)||le(k))return k=Qi(k,M.mode,F,null),k.return=M,k;xl(M,k)}return null}function q(M,k,F,Q){var se=k!==null?k.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return se!==null?null:T(M,k,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ze:return F.key===se?R(M,k,F,Q):null;case De:return F.key===se?b(M,k,F,Q):null;case Dt:return se=F._init,q(M,k,se(F._payload),Q)}if(or(F)||le(F))return se!==null?null:W(M,k,F,Q,null);xl(M,F)}return null}function Z(M,k,F,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return M=M.get(F)||null,T(k,M,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Ze:return M=M.get(Q.key===null?F:Q.key)||null,R(k,M,Q,se);case De:return M=M.get(Q.key===null?F:Q.key)||null,b(k,M,Q,se);case Dt:var ce=Q._init;return Z(M,k,F,ce(Q._payload),se)}if(or(Q)||le(Q))return M=M.get(F)||null,W(k,M,Q,se,null);xl(k,Q)}return null}function re(M,k,F,Q){for(var se=null,ce=null,he=k,pe=k=0,Et=null;he!==null&&pe<F.length;pe++){he.index>pe?(Et=he,he=null):Et=he.sibling;var xe=q(M,he,F[pe],Q);if(xe===null){he===null&&(he=Et);break}n&&he&&xe.alternate===null&&r(M,he),k=p(xe,k,pe),ce===null?se=xe:ce.sibling=xe,ce=xe,he=Et}if(pe===F.length)return a(M,he),Ke&&ji(M,pe),se;if(he===null){for(;pe<F.length;pe++)he=G(M,F[pe],Q),he!==null&&(k=p(he,k,pe),ce===null?se=he:ce.sibling=he,ce=he);return Ke&&ji(M,pe),se}for(he=c(M,he);pe<F.length;pe++)Et=Z(he,M,pe,F[pe],Q),Et!==null&&(n&&Et.alternate!==null&&he.delete(Et.key===null?pe:Et.key),k=p(Et,k,pe),ce===null?se=Et:ce.sibling=Et,ce=Et);return n&&he.forEach(function(ti){return r(M,ti)}),Ke&&ji(M,pe),se}function ie(M,k,F,Q){var se=le(F);if(typeof se!="function")throw Error(t(150));if(F=se.call(F),F==null)throw Error(t(151));for(var ce=se=null,he=k,pe=k=0,Et=null,xe=F.next();he!==null&&!xe.done;pe++,xe=F.next()){he.index>pe?(Et=he,he=null):Et=he.sibling;var ti=q(M,he,xe.value,Q);if(ti===null){he===null&&(he=Et);break}n&&he&&ti.alternate===null&&r(M,he),k=p(ti,k,pe),ce===null?se=ti:ce.sibling=ti,ce=ti,he=Et}if(xe.done)return a(M,he),Ke&&ji(M,pe),se;if(he===null){for(;!xe.done;pe++,xe=F.next())xe=G(M,xe.value,Q),xe!==null&&(k=p(xe,k,pe),ce===null?se=xe:ce.sibling=xe,ce=xe);return Ke&&ji(M,pe),se}for(he=c(M,he);!xe.done;pe++,xe=F.next())xe=Z(he,M,pe,xe.value,Q),xe!==null&&(n&&xe.alternate!==null&&he.delete(xe.key===null?pe:xe.key),k=p(xe,k,pe),ce===null?se=xe:ce.sibling=xe,ce=xe);return n&&he.forEach(function(kE){return r(M,kE)}),Ke&&ji(M,pe),se}function nt(M,k,F,Q){if(typeof F=="object"&&F!==null&&F.type===D&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ze:e:{for(var se=F.key,ce=k;ce!==null;){if(ce.key===se){if(se=F.type,se===D){if(ce.tag===7){a(M,ce.sibling),k=f(ce,F.props.children),k.return=M,M=k;break e}}else if(ce.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Dt&&sp(se)===ce.type){a(M,ce.sibling),k=f(ce,F.props),k.ref=oa(M,ce,F),k.return=M,M=k;break e}a(M,ce);break}else r(M,ce);ce=ce.sibling}F.type===D?(k=Qi(F.props.children,M.mode,Q,F.key),k.return=M,M=k):(Q=ru(F.type,F.key,F.props,null,M.mode,Q),Q.ref=oa(M,k,F),Q.return=M,M=Q)}return _(M);case De:e:{for(ce=F.key;k!==null;){if(k.key===ce)if(k.tag===4&&k.stateNode.containerInfo===F.containerInfo&&k.stateNode.implementation===F.implementation){a(M,k.sibling),k=f(k,F.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=Mh(F,M.mode,Q),k.return=M,M=k}return _(M);case Dt:return ce=F._init,nt(M,k,ce(F._payload),Q)}if(or(F))return re(M,k,F,Q);if(le(F))return ie(M,k,F,Q);xl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,k!==null&&k.tag===6?(a(M,k.sibling),k=f(k,F),k.return=M,M=k):(a(M,k),k=Lh(F,M.mode,Q),k.return=M,M=k),_(M)):a(M,k)}return nt}var Hs=op(!0),ap=op(!1),Ol=Hr(null),Ll=null,qs=null,qc=null;function Wc(){qc=qs=Ll=null}function Gc(n){var r=Ol.current;He(Ol),n._currentValue=r}function Kc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Ws(n,r){Ll=n,qc=qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function gn(n){var r=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:r,next:null},qs===null){if(Ll===null)throw Error(t(308));qs=n,Ll.dependencies={lanes:0,firstContext:n}}else qs=qs.next=n;return r}var Bi=null;function Qc(n){Bi===null?Bi=[n]:Bi.push(n)}function lp(n,r,a,c){var f=r.interleaved;return f===null?(a.next=a,Qc(r)):(a.next=f.next,f.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gr=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Kr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,vr(n,a)}return f=c.interleaved,f===null?(r.next=r,Qc(c)):(r.next=f.next,f.next=r),c.interleaved=r,vr(n,a)}function Ml(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Fr(n,a)}}function cp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?f=p=r:p=p.next=r}else f=p=r;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Fl(n,r,a,c){var f=n.updateQueue;Gr=!1;var p=f.firstBaseUpdate,_=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var R=T,b=R.next;R.next=null,_===null?p=b:_.next=b,_=R;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==_&&(T===null?W.firstBaseUpdate=b:T.next=b,W.lastBaseUpdate=R))}if(p!==null){var G=f.baseState;_=0,W=b=R=null,T=p;do{var q=T.lane,Z=T.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,ie=T;switch(q=r,Z=a,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){G=re.call(Z,G,q);break e}G=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,q=typeof re=="function"?re.call(Z,G,q):re,q==null)break e;G=ee({},G,q);break e;case 2:Gr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=f.effects,q===null?f.effects=[T]:q.push(T))}else Z={eventTime:Z,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(b=W=Z,R=G):W=W.next=Z,_|=q;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;q=T,T=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);if(W===null&&(R=G),f.baseState=R,f.firstBaseUpdate=b,f.lastBaseUpdate=W,r=f.shared.interleaved,r!==null){f=r;do _|=f.lane,f=f.next;while(f!==r)}else p===null&&(f.shared.lanes=0);qi|=_,n.lanes=_,n.memoizedState=G}}function hp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var aa={},Wn=Hr(aa),la=Hr(aa),ua=Hr(aa);function $i(n){if(n===aa)throw Error(t(174));return n}function Yc(n,r){switch(Be(ua,r),Be(la,n),Be(Wn,aa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}He(Wn),Be(Wn,r)}function Gs(){He(Wn),He(la),He(ua)}function fp(n){$i(ua.current);var r=$i(Wn.current),a=ut(r,n.type);r!==a&&(Be(la,n),Be(Wn,a))}function Jc(n){la.current===n&&(He(Wn),He(la))}var Qe=Hr(0);function bl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Zc=[];function eh(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var Ul=Ie.ReactCurrentDispatcher,th=Ie.ReactCurrentBatchConfig,Hi=0,Xe=null,ht=null,_t=null,zl=!1,ca=!1,ha=0,Yv=0;function xt(){throw Error(t(321))}function nh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function rh(n,r,a,c,f,p){if(Hi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ul.current=n===null||n.memoizedState===null?tE:nE,n=a(c,f),ca){p=0;do{if(ca=!1,ha=0,25<=p)throw Error(t(301));p+=1,_t=ht=null,r.updateQueue=null,Ul.current=rE,n=a(c,f)}while(ca)}if(Ul.current=$l,r=ht!==null&&ht.next!==null,Hi=0,_t=ht=Xe=null,zl=!1,r)throw Error(t(300));return n}function ih(){var n=ha!==0;return ha=0,n}function Gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Xe.memoizedState=_t=n:_t=_t.next=n,_t}function yn(){if(ht===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=_t===null?Xe.memoizedState:_t.next;if(r!==null)_t=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},_t===null?Xe.memoizedState=_t=n:_t=_t.next=n}return _t}function fa(n,r){return typeof r=="function"?r(n):r}function sh(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,f=c.baseQueue,p=a.pending;if(p!==null){if(f!==null){var _=f.next;f.next=p.next,p.next=_}c.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,c=c.baseState;var T=_=null,R=null,b=p;do{var W=b.lane;if((Hi&W)===W)R!==null&&(R=R.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),c=b.hasEagerState?b.eagerState:n(c,b.action);else{var G={lane:W,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};R===null?(T=R=G,_=c):R=R.next=G,Xe.lanes|=W,qi|=W}b=b.next}while(b!==null&&b!==p);R===null?_=c:R.next=T,Nn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do p=f.lane,Xe.lanes|=p,qi|=p,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function oh(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,p=r.memoizedState;if(f!==null){a.pending=null;var _=f=f.next;do p=n(p,_.action),_=_.next;while(_!==f);Nn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function dp(){}function pp(n,r){var a=Xe,c=yn(),f=r(),p=!Nn(c.memoizedState,f);if(p&&(c.memoizedState=f,Kt=!0),c=c.queue,ah(yp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,da(9,gp.bind(null,a,c,f,r),void 0,null),vt===null)throw Error(t(349));(Hi&30)!==0||mp(a,r,f)}return f}function mp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function gp(n,r,a,c){r.value=a,r.getSnapshot=c,_p(r)&&vp(n)}function yp(n,r,a){return a(function(){_p(r)&&vp(n)})}function _p(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function vp(n){var r=vr(n,1);r!==null&&Ln(r,n,1,-1)}function Ep(n){var r=Gn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},r.queue=n,n=n.dispatch=eE.bind(null,Xe,n),[r.memoizedState,n]}function da(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function wp(){return yn().memoizedState}function jl(n,r,a,c){var f=Gn();Xe.flags|=n,f.memoizedState=da(1|r,a,void 0,c===void 0?null:c)}function Bl(n,r,a,c){var f=yn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&nh(c,_.deps)){f.memoizedState=da(r,a,p,c);return}}Xe.flags|=n,f.memoizedState=da(1|r,a,p,c)}function Tp(n,r){return jl(8390656,8,n,r)}function ah(n,r){return Bl(2048,8,n,r)}function Ip(n,r){return Bl(4,2,n,r)}function Sp(n,r){return Bl(4,4,n,r)}function Ap(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Rp(n,r,a){return a=a!=null?a.concat([n]):null,Bl(4,4,Ap.bind(null,r,n),a)}function lh(){}function Cp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Pp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function kp(n,r,a){return(Hi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Nn(a,r)||(a=xi(),Xe.lanes|=a,qi|=a,n.baseState=!0),r)}function Jv(n,r){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=th.transition;th.transition={};try{n(!1),r()}finally{Ce=a,th.transition=c}}function Np(){return yn().memoizedState}function Zv(n,r,a){var c=Jr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Dp(n))Vp(r,a);else if(a=lp(n,r,a,c),a!==null){var f=$t();Ln(a,n,c,f),xp(a,r,c)}}function eE(n,r,a){var c=Jr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dp(n))Vp(r,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(f.hasEagerState=!0,f.eagerState=T,Nn(T,_)){var R=r.interleaved;R===null?(f.next=f,Qc(r)):(f.next=R.next,R.next=f),r.interleaved=f;return}}catch{}finally{}a=lp(n,r,f,c),a!==null&&(f=$t(),Ln(a,n,c,f),xp(a,r,c))}}function Dp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function Vp(n,r){ca=zl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function xp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Fr(n,a)}}var $l={readContext:gn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},tE={readContext:gn,useCallback:function(n,r){return Gn().memoizedState=[n,r===void 0?null:r],n},useContext:gn,useEffect:Tp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,jl(4194308,4,Ap.bind(null,r,n),a)},useLayoutEffect:function(n,r){return jl(4194308,4,n,r)},useInsertionEffect:function(n,r){return jl(4,2,n,r)},useMemo:function(n,r){var a=Gn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Gn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Zv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Gn();return n={current:n},r.memoizedState=n},useState:Ep,useDebugValue:lh,useDeferredValue:function(n){return Gn().memoizedState=n},useTransition:function(){var n=Ep(!1),r=n[0];return n=Jv.bind(null,n[1]),Gn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,f=Gn();if(Ke){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),vt===null)throw Error(t(349));(Hi&30)!==0||mp(c,r,a)}f.memoizedState=a;var p={value:a,getSnapshot:r};return f.queue=p,Tp(yp.bind(null,c,p,n),[n]),c.flags|=2048,da(9,gp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Gn(),r=vt.identifierPrefix;if(Ke){var a=_r,c=yr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ha++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Yv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},nE={readContext:gn,useCallback:Cp,useContext:gn,useEffect:ah,useImperativeHandle:Rp,useInsertionEffect:Ip,useLayoutEffect:Sp,useMemo:Pp,useReducer:sh,useRef:wp,useState:function(){return sh(fa)},useDebugValue:lh,useDeferredValue:function(n){var r=yn();return kp(r,ht.memoizedState,n)},useTransition:function(){var n=sh(fa)[0],r=yn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:pp,useId:Np,unstable_isNewReconciler:!1},rE={readContext:gn,useCallback:Cp,useContext:gn,useEffect:ah,useImperativeHandle:Rp,useInsertionEffect:Ip,useLayoutEffect:Sp,useMemo:Pp,useReducer:oh,useRef:wp,useState:function(){return oh(fa)},useDebugValue:lh,useDeferredValue:function(n){var r=yn();return ht===null?r.memoizedState=n:kp(r,ht.memoizedState,n)},useTransition:function(){var n=oh(fa)[0],r=yn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:pp,useId:Np,unstable_isNewReconciler:!1};function Vn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function uh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Hl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=$t(),f=Jr(n),p=Er(c,f);p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,f),r!==null&&(Ln(r,n,f,c),Ml(r,n,f))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=$t(),f=Jr(n),p=Er(c,f);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,f),r!==null&&(Ln(r,n,f,c),Ml(r,n,f))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=$t(),c=Jr(n),f=Er(a,c);f.tag=2,r!=null&&(f.callback=r),r=Kr(n,f,c),r!==null&&(Ln(r,n,c,a),Ml(r,n,c))}};function Op(n,r,a,c,f,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Zo(a,c)||!Zo(f,p):!0}function Lp(n,r,a){var c=!1,f=qr,p=r.contextType;return typeof p=="object"&&p!==null?p=gn(p):(f=Gt(r)?Ui:Vt.current,c=r.contextTypes,p=(c=c!=null)?zs(n,f):qr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),r}function Mp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Hl.enqueueReplaceState(r,r.state,null)}function ch(n,r,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Xc(n);var p=r.contextType;typeof p=="object"&&p!==null?f.context=gn(p):(p=Gt(r)?Ui:Vt.current,f.context=zs(n,p)),f.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(uh(n,r,p,a),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Hl.enqueueReplaceState(f,f.state,null),Fl(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ks(n,r){try{var a="",c=r;do a+=we(c),c=c.return;while(c);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:f,digest:null}}function hh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function fh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var iE=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,r,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Yl||(Yl=!0,Ch=c),fh(n,r)},a}function bp(n,r,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;a.payload=function(){return c(f)},a.callback=function(){fh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){fh(n,r),typeof c!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Up(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new iE;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(a)||(f.add(a),n=_E.bind(null,n,r,a),r.then(n,n))}function zp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function jp(n,r,a,c,f){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Er(-1,1),r.tag=2,Kr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var sE=Ie.ReactCurrentOwner,Kt=!1;function Bt(n,r,a,c){r.child=n===null?ap(r,null,a,c):Hs(r,n.child,a,c)}function Bp(n,r,a,c,f){a=a.render;var p=r.ref;return Ws(r,f),c=rh(n,r,a,c,p,f),a=ih(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,wr(n,r,f)):(Ke&&a&&zc(r),r.flags|=1,Bt(n,r,c,f),r.child)}function $p(n,r,a,c,f){if(n===null){var p=a.type;return typeof p=="function"&&!Oh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Hp(n,r,p,c,f)):(n=ru(a.type,null,c,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&f)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(_,c)&&n.ref===r.ref)return wr(n,r,f)}return r.flags|=1,n=ei(p,c),n.ref=r.ref,n.return=r,r.child=n}function Hp(n,r,a,c,f){if(n!==null){var p=n.memoizedProps;if(Zo(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,wr(n,r,f)}return dh(n,r,a,c,f)}function qp(n,r,a){var c=r.pendingProps,f=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Xs,ln),ln|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Be(Xs,ln),ln|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Be(Xs,ln),ln|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,Be(Xs,ln),ln|=c;return Bt(n,r,f,a),r.child}function Wp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function dh(n,r,a,c,f){var p=Gt(a)?Ui:Vt.current;return p=zs(r,p),Ws(r,f),a=rh(n,r,a,c,p,f),c=ih(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,wr(n,r,f)):(Ke&&c&&zc(r),r.flags|=1,Bt(n,r,a,f),r.child)}function Gp(n,r,a,c,f){if(Gt(a)){var p=!0;Pl(r)}else p=!1;if(Ws(r,f),r.stateNode===null)Wl(n,r),Lp(r,a,c),ch(r,a,c,f),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,b=a.contextType;typeof b=="object"&&b!==null?b=gn(b):(b=Gt(a)?Ui:Vt.current,b=zs(r,b));var W=a.getDerivedStateFromProps,G=typeof W=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==b)&&Mp(r,_,c,b),Gr=!1;var q=r.memoizedState;_.state=q,Fl(r,c,_,f),R=r.memoizedState,T!==c||q!==R||Wt.current||Gr?(typeof W=="function"&&(uh(r,a,W,c),R=r.memoizedState),(T=Gr||Op(r,a,T,c,q,R,b))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=b,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,up(n,r),T=r.memoizedProps,b=r.type===r.elementType?T:Vn(r.type,T),_.props=b,G=r.pendingProps,q=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=gn(R):(R=Gt(a)?Ui:Vt.current,R=zs(r,R));var Z=a.getDerivedStateFromProps;(W=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==G||q!==R)&&Mp(r,_,c,R),Gr=!1,q=r.memoizedState,_.state=q,Fl(r,c,_,f);var re=r.memoizedState;T!==G||q!==re||Wt.current||Gr?(typeof Z=="function"&&(uh(r,a,Z,c),re=r.memoizedState),(b=Gr||Op(r,a,b,c,q,re,R)||!1)?(W||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=R,c=b):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return ph(n,r,a,c,p,f)}function ph(n,r,a,c,f,p){Wp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return f&&Jd(r,a,!1),wr(n,r,p);c=r.stateNode,sE.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Hs(r,n.child,null,p),r.child=Hs(r,null,T,p)):Bt(n,r,T,p),r.memoizedState=c.state,f&&Jd(r,a,!0),r.child}function Kp(n){var r=n.stateNode;r.pendingContext?Xd(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Xd(n,r.context,!1),Yc(n,r.containerInfo)}function Qp(n,r,a,c,f){return $s(),Hc(f),r.flags|=256,Bt(n,r,a,c),r.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xp(n,r,a){var c=r.pendingProps,f=Qe.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(f&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Be(Qe,f&1),n===null)return $c(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=iu(_,c,0,null),n=Qi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=gh(a),r.memoizedState=mh,n):yh(r,_));if(f=n.memoizedState,f!==null&&(T=f.dehydrated,T!==null))return oE(n,r,_,c,T,f,a);if(p){p=c.fallback,_=r.mode,f=n.child,T=f.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=ei(f,R),c.subtreeFlags=f.subtreeFlags&14680064),T!==null?p=ei(T,p):(p=Qi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?gh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=mh,c}return p=n.child,n=p.sibling,c=ei(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function yh(n,r){return r=iu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ql(n,r,a,c){return c!==null&&Hc(c),Hs(r,n.child,null,a),n=yh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function oE(n,r,a,c,f,p,_){if(a)return r.flags&256?(r.flags&=-257,c=hh(Error(t(422))),ql(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,f=r.mode,c=iu({mode:"visible",children:c.children},f,0,null),p=Qi(p,f,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Hs(r,n.child,null,_),r.child.memoizedState=gh(_),r.memoizedState=mh,p);if((r.mode&1)===0)return ql(n,r,_,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=hh(p,c,void 0),ql(n,r,_,c)}if(T=(_&n.childLanes)!==0,Kt||T){if(c=vt,c!==null){switch(_&-_){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|_))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,vr(n,f),Ln(c,n,f,-1))}return xh(),c=hh(Error(t(421))),ql(n,r,_,c)}return f.data==="$?"?(r.flags|=128,r.child=n.child,r=vE.bind(null,n),f._reactRetry=r,null):(n=p.treeContext,an=$r(f.nextSibling),on=r,Ke=!0,Dn=null,n!==null&&(pn[mn++]=yr,pn[mn++]=_r,pn[mn++]=zi,yr=n.id,_r=n.overflow,zi=r),r=yh(r,c.children),r.flags|=4096,r)}function Yp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Kc(n.return,r,a)}function _h(n,r,a,c,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=f)}function Jp(n,r,a){var c=r.pendingProps,f=c.revealOrder,p=c.tail;if(Bt(n,r,c.children,a),c=Qe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,a,r);else if(n.tag===19)Yp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Be(Qe,c),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(a=r.child,f=null;a!==null;)n=a.alternate,n!==null&&bl(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),_h(r,!1,f,a,p);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&bl(n)===null){r.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}_h(r,!0,a,null,p);break;case"together":_h(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Wl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),qi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ei(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ei(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function aE(n,r,a){switch(r.tag){case 3:Kp(r),$s();break;case 5:fp(r);break;case 1:Gt(r.type)&&Pl(r);break;case 4:Yc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Be(Ol,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Be(Qe,Qe.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Xp(n,r,a):(Be(Qe,Qe.current&1),n=wr(n,r,a),n!==null?n.sibling:null);Be(Qe,Qe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Jp(n,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Be(Qe,Qe.current),c)break;return null;case 22:case 23:return r.lanes=0,qp(n,r,a)}return wr(n,r,a)}var Zp,vh,em,tm;Zp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vh=function(){},em=function(n,r,a,c){var f=n.memoizedProps;if(f!==c){n=r.stateNode,$i(Wn.current);var p=null;switch(a){case"input":f=Ti(n,f),c=Ti(n,c),p=[];break;case"select":f=ee({},f,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":f=Po(n,f),c=Po(n,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Al)}Oo(a,c);var _;a=null;for(b in f)if(!c.hasOwnProperty(b)&&f.hasOwnProperty(b)&&f[b]!=null)if(b==="style"){var T=f[b];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(o.hasOwnProperty(b)?p||(p=[]):(p=p||[]).push(b,null));for(b in c){var R=c[b];if(T=f!=null?f[b]:void 0,c.hasOwnProperty(b)&&R!==T&&(R!=null||T!=null))if(b==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(b,a)),a=R;else b==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(b,R)):b==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(b,""+R):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(o.hasOwnProperty(b)?(R!=null&&b==="onScroll"&&$e("scroll",n),p||T===R||(p=[])):(p=p||[]).push(b,R))}a&&(p=p||[]).push("style",a);var b=p;(r.updateQueue=b)&&(r.flags|=4)}},tm=function(n,r,a,c){a!==c&&(r.flags|=4)};function pa(n,r){if(!Ke)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function lE(n,r,a){var c=r.pendingProps;switch(jc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Gt(r.type)&&Cl(),Ot(r),null;case 3:return c=r.stateNode,Gs(),He(Wt),He(Vt),eh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dn!==null&&(Nh(Dn),Dn=null))),vh(n,r),Ot(r),null;case 5:Jc(r);var f=$i(ua.current);if(a=r.type,n!==null&&r.stateNode!=null)em(n,r,a,c,f),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=$i(Wn.current),Vl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[qn]=r,c[ia]=p,n=(r.mode&1)!==0,a){case"dialog":$e("cancel",c),$e("close",c);break;case"iframe":case"object":case"embed":$e("load",c);break;case"video":case"audio":for(f=0;f<ta.length;f++)$e(ta[f],c);break;case"source":$e("error",c);break;case"img":case"image":case"link":$e("error",c),$e("load",c);break;case"details":$e("toggle",c);break;case"input":ls(c,p),$e("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},$e("invalid",c);break;case"textarea":cs(c,p),$e("invalid",c)}Oo(a,p),f=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Sl(c.textContent,T,n),f=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Sl(c.textContent,T,n),f=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&$e("scroll",c)}switch(a){case"input":sr(c),Xa(c,p,!0);break;case"textarea":sr(c),ko(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Al)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[qn]=r,n[ia]=c,Zp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Lo(a,c),a){case"dialog":$e("cancel",n),$e("close",n),f=c;break;case"iframe":case"object":case"embed":$e("load",n),f=c;break;case"video":case"audio":for(f=0;f<ta.length;f++)$e(ta[f],n);f=c;break;case"source":$e("error",n),f=c;break;case"img":case"image":case"link":$e("error",n),$e("load",n),f=c;break;case"details":$e("toggle",n),f=c;break;case"input":ls(n,c),f=Ti(n,c),$e("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ee({},c,{value:void 0}),$e("invalid",n);break;case"textarea":cs(n,c),f=Po(n,c),$e("invalid",n);break;default:f=c}Oo(a,f),T=f;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?Vo(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&No(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Vr(n,R):typeof R=="number"&&Vr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&$e("scroll",n):R!=null&&ge(n,p,R,_))}switch(a){case"input":sr(n),Xa(n,c,!1);break;case"textarea":sr(n),ko(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ar(n,!!c.multiple,p,!1):c.defaultValue!=null&&ar(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Al)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)tm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=$i(ua.current),$i(Wn.current),Vl(r)){if(c=r.stateNode,a=r.memoizedProps,c[qn]=r,(p=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Sl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qn]=r,r.stateNode=c}return Ot(r),null;case 13:if(He(Qe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&an!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ip(),$s(),r.flags|=98560,p=!1;else if(p=Vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[qn]=r}else $s(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),p=!1}else Dn!==null&&(Nh(Dn),Dn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Qe.current&1)!==0?ft===0&&(ft=3):xh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Gs(),vh(n,r),n===null&&na(r.stateNode.containerInfo),Ot(r),null;case 10:return Gc(r.type._context),Ot(r),null;case 17:return Gt(r.type)&&Cl(),Ot(r),null;case 19:if(He(Qe),p=r.memoizedState,p===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)pa(p,!1);else{if(ft!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=bl(n),_!==null){for(r.flags|=128,pa(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Be(Qe,Qe.current&1|2),r.child}n=n.sibling}p.tail!==null&&je()>Ys&&(r.flags|=128,c=!0,pa(p,!1),r.lanes=4194304)}else{if(!c)if(n=bl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),pa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ke)return Ot(r),null}else 2*je()-p.renderingStartTime>Ys&&a!==1073741824&&(r.flags|=128,c=!0,pa(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=je(),r.sibling=null,a=Qe.current,Be(Qe,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Vh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ln&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function uE(n,r){switch(jc(r),r.tag){case 1:return Gt(r.type)&&Cl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Gs(),He(Wt),He(Vt),eh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Jc(r),null;case 13:if(He(Qe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));$s()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Qe),null;case 4:return Gs(),null;case 10:return Gc(r.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var Gl=!1,Lt=!1,cE=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Qs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Je(n,r,c)}else a.current=null}function Eh(n,r,a){try{a()}catch(c){Je(n,r,c)}}var nm=!1;function hE(n,r){if(Vc=zr,n=Od(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,b=0,W=0,G=n,q=null;t:for(;;){for(var Z;G!==a||f!==0&&G.nodeType!==3||(T=_+f),G!==p||c!==0&&G.nodeType!==3||(R=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(Z=G.firstChild)!==null;)q=G,G=Z;for(;;){if(G===n)break t;if(q===a&&++b===f&&(T=_),q===p&&++W===c&&(R=_),(Z=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=Z}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:n,selectionRange:a},zr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,nt=re.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Vn(r.type,ie),nt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){Je(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=nm,nm=!1,re}function ma(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&Eh(r,a,p)}f=f.next}while(f!==c)}}function Kl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function wh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function rm(n){var r=n.alternate;r!==null&&(n.alternate=null,rm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qn],delete r[ia],delete r[Fc],delete r[Gv],delete r[Kv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Th(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Al));else if(c!==4&&(n=n.child,n!==null))for(Th(n,r,a),n=n.sibling;n!==null;)Th(n,r,a),n=n.sibling}function Ih(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ih(n,r,a),n=n.sibling;n!==null;)Ih(n,r,a),n=n.sibling}var At=null,xn=!1;function Qr(n,r,a){for(a=a.child;a!==null;)om(n,r,a),a=a.sibling}function om(n,r,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Di,a)}catch{}switch(a.tag){case 5:Lt||Qs(a,r);case 6:var c=At,f=xn;At=null,Qr(n,r,a),At=c,xn=f,At!==null&&(xn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(xn?(n=At,a=a.stateNode,n.nodeType===8?Mc(n.parentNode,a):n.nodeType===1&&Mc(n,a),Pn(n)):Mc(At,a.stateNode));break;case 4:c=At,f=xn,At=a.stateNode.containerInfo,xn=!0,Qr(n,r,a),At=c,xn=f;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Eh(a,r,_),f=f.next}while(f!==c)}Qr(n,r,a);break;case 1:if(!Lt&&(Qs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Je(a,r,T)}Qr(n,r,a);break;case 21:Qr(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Qr(n,r,a),Lt=c):Qr(n,r,a);break;default:Qr(n,r,a)}}function am(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new cE),r.forEach(function(c){var f=EE.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function On(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:At=T.stateNode,xn=!1;break e;case 3:At=T.stateNode.containerInfo,xn=!0;break e;case 4:At=T.stateNode.containerInfo,xn=!0;break e}T=T.return}if(At===null)throw Error(t(160));om(p,_,f),At=null,xn=!1;var R=f.alternate;R!==null&&(R.return=null),f.return=null}catch(b){Je(f,r,b)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)lm(r,n),r=r.sibling}function lm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(r,n),Kn(n),c&4){try{ma(3,n,n.return),Kl(3,n)}catch(ie){Je(n,n.return,ie)}try{ma(5,n,n.return)}catch(ie){Je(n,n.return,ie)}}break;case 1:On(r,n),Kn(n),c&512&&a!==null&&Qs(a,a.return);break;case 5:if(On(r,n),Kn(n),c&512&&a!==null&&Qs(a,a.return),n.flags&32){var f=n.stateNode;try{Vr(f,"")}catch(ie){Je(n,n.return,ie)}}if(c&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Ro(f,p),Lo(T,_);var b=Lo(T,p);for(_=0;_<R.length;_+=2){var W=R[_],G=R[_+1];W==="style"?Vo(f,G):W==="dangerouslySetInnerHTML"?No(f,G):W==="children"?Vr(f,G):ge(f,W,G,b)}switch(T){case"input":Co(f,p);break;case"textarea":hs(f,p);break;case"select":var q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?ar(f,!!p.multiple,Z,!1):q!==!!p.multiple&&(p.defaultValue!=null?ar(f,!!p.multiple,p.defaultValue,!0):ar(f,!!p.multiple,p.multiple?[]:"",!1))}f[ia]=p}catch(ie){Je(n,n.return,ie)}}break;case 6:if(On(r,n),Kn(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(ie){Je(n,n.return,ie)}}break;case 3:if(On(r,n),Kn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(ie){Je(n,n.return,ie)}break;case 4:On(r,n),Kn(n);break;case 13:On(r,n),Kn(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Rh=je())),c&4&&am(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(b=Lt)||W,On(r,n),Lt=b):On(r,n),Kn(n),c&8192){if(b=n.memoizedState!==null,(n.stateNode.isHidden=b)&&!W&&(n.mode&1)!==0)for(ne=n,W=n.child;W!==null;){for(G=ne=W;ne!==null;){switch(q=ne,Z=q.child,q.tag){case 0:case 11:case 14:case 15:ma(4,q,q.return);break;case 1:Qs(q,q.return);var re=q.stateNode;if(typeof re.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){Je(c,a,ie)}}break;case 5:Qs(q,q.return);break;case 22:if(q.memoizedState!==null){hm(G);continue}}Z!==null?(Z.return=q,ne=Z):hm(G)}W=W.sibling}e:for(W=null,G=n;;){if(G.tag===5){if(W===null){W=G;try{f=G.stateNode,b?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=G.stateNode,R=G.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=Do("display",_))}catch(ie){Je(n,n.return,ie)}}}else if(G.tag===6){if(W===null)try{G.stateNode.nodeValue=b?"":G.memoizedProps}catch(ie){Je(n,n.return,ie)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;W===G&&(W=null),G=G.return}W===G&&(W=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:On(r,n),Kn(n),c&4&&am(n);break;case 21:break;default:On(r,n),Kn(n)}}function Kn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Vr(f,""),c.flags&=-33);var p=sm(n);Ih(n,p,f);break;case 3:case 4:var _=c.stateNode.containerInfo,T=sm(n);Th(n,T,_);break;default:throw Error(t(161))}}catch(R){Je(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function fE(n,r,a){ne=n,um(n)}function um(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var f=ne,p=f.child;if(f.tag===22&&c){var _=f.memoizedState!==null||Gl;if(!_){var T=f.alternate,R=T!==null&&T.memoizedState!==null||Lt;T=Gl;var b=Lt;if(Gl=_,(Lt=R)&&!b)for(ne=f;ne!==null;)_=ne,R=_.child,_.tag===22&&_.memoizedState!==null?fm(f):R!==null?(R.return=_,ne=R):fm(f);for(;p!==null;)ne=p,um(p),p=p.sibling;ne=f,Gl=T,Lt=b}cm(n)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ne=p):cm(n)}}function cm(n){for(;ne!==null;){var r=ne;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||Kl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var f=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&hp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}hp(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var b=r.alternate;if(b!==null){var W=b.memoizedState;if(W!==null){var G=W.dehydrated;G!==null&&Pn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&wh(r)}catch(q){Je(r,r.return,q)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function hm(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function fm(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Kl(4,r)}catch(R){Je(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(R){Je(r,f,R)}}var p=r.return;try{wh(r)}catch(R){Je(r,p,R)}break;case 5:var _=r.return;try{wh(r)}catch(R){Je(r,_,R)}}}catch(R){Je(r,r.return,R)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var dE=Math.ceil,Ql=Ie.ReactCurrentDispatcher,Sh=Ie.ReactCurrentOwner,_n=Ie.ReactCurrentBatchConfig,Ve=0,vt=null,st=null,Rt=0,ln=0,Xs=Hr(0),ft=0,ga=null,qi=0,Xl=0,Ah=0,ya=null,Qt=null,Rh=0,Ys=1/0,Tr=null,Yl=!1,Ch=null,Xr=null,Jl=!1,Yr=null,Zl=0,_a=0,Ph=null,eu=-1,tu=0;function $t(){return(Ve&6)!==0?je():eu!==-1?eu:eu=je()}function Jr(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Rt!==0?Rt&-Rt:Xv.transition!==null?(tu===0&&(tu=xi()),tu):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:Wo(n.type)),n)}function Ln(n,r,a,c){if(50<_a)throw _a=0,Ph=null,Error(t(185));Mr(n,a,c),((Ve&2)===0||n!==vt)&&(n===vt&&((Ve&2)===0&&(Xl|=a),ft===4&&Zr(n,Rt)),Xt(n,c),a===1&&Ve===0&&(r.mode&1)===0&&(Ys=je()+500,kl&&Wr()))}function Xt(n,r){var a=n.callbackNode;cr(n,r);var c=Vi(n,n===vt?Rt:0);if(c===0)a!==null&&jo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&jo(a),r===1)n.tag===0?Qv(pm.bind(null,n)):Zd(pm.bind(null,n)),qv(function(){(Ve&6)===0&&Wr()}),a=null;else{switch(br(c)){case 1:a=Ni;break;case 4:a=xr;break;case 16:a=hn;break;case 536870912:a=tl;break;default:a=hn}a=Tm(a,dm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function dm(n,r){if(eu=-1,tu=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=Vi(n,n===vt?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=nu(n,c);else{r=c;var f=Ve;Ve|=2;var p=gm();(vt!==n||Rt!==r)&&(Tr=null,Ys=je()+500,Gi(n,r));do try{gE();break}catch(T){mm(n,T)}while(!0);Wc(),Ql.current=p,Ve=f,st!==null?r=0:(vt=null,Rt=0,r=ft)}if(r!==0){if(r===2&&(f=nn(n),f!==0&&(c=f,r=kh(n,f))),r===1)throw a=ga,Gi(n,0),Zr(n,c),Xt(n,je()),a;if(r===6)Zr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!pE(f)&&(r=nu(n,c),r===2&&(p=nn(n),p!==0&&(c=p,r=kh(n,p))),r===1))throw a=ga,Gi(n,0),Zr(n,c),Xt(n,je()),a;switch(n.finishedWork=f,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ki(n,Qt,Tr);break;case 3:if(Zr(n,c),(c&130023424)===c&&(r=Rh+500-je(),10<r)){if(Vi(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Lc(Ki.bind(null,n,Qt,Tr),r);break}Ki(n,Qt,Tr);break;case 4:if(Zr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,f=-1;0<c;){var _=31-zt(c);p=1<<_,_=r[_],_>f&&(f=_),c&=~p}if(c=f,c=je()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*dE(c/1960))-c,10<c){n.timeoutHandle=Lc(Ki.bind(null,n,Qt,Tr),c);break}Ki(n,Qt,Tr);break;case 5:Ki(n,Qt,Tr);break;default:throw Error(t(329))}}}return Xt(n,je()),n.callbackNode===a?dm.bind(null,n):null}function kh(n,r){var a=ya;return n.current.memoizedState.isDehydrated&&(Gi(n,r).flags|=256),n=nu(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&Nh(r)),n}function Nh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function pE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],p=f.getSnapshot;f=f.value;try{if(!Nn(p(),f))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zr(n,r){for(r&=~Ah,r&=~Xl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-zt(r),c=1<<a;n[a]=-1,r&=~c}}function pm(n){if((Ve&6)!==0)throw Error(t(327));Js();var r=Vi(n,0);if((r&1)===0)return Xt(n,je()),null;var a=nu(n,r);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(r=c,a=kh(n,c))}if(a===1)throw a=ga,Gi(n,0),Zr(n,r),Xt(n,je()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ki(n,Qt,Tr),Xt(n,je()),null}function Dh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(Ys=je()+500,kl&&Wr())}}function Wi(n){Yr!==null&&Yr.tag===0&&(Ve&6)===0&&Js();var r=Ve;Ve|=1;var a=_n.transition,c=Ce;try{if(_n.transition=null,Ce=1,n)return n()}finally{Ce=c,_n.transition=a,Ve=r,(Ve&6)===0&&Wr()}}function Vh(){ln=Xs.current,He(Xs)}function Gi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Hv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Cl();break;case 3:Gs(),He(Wt),He(Vt),eh();break;case 5:Jc(c);break;case 4:Gs();break;case 13:He(Qe);break;case 19:He(Qe);break;case 10:Gc(c.type._context);break;case 22:case 23:Vh()}a=a.return}if(vt=n,st=n=ei(n.current,null),Rt=ln=r,ft=0,ga=null,Ah=Xl=qi=0,Qt=ya=null,Bi!==null){for(r=0;r<Bi.length;r++)if(a=Bi[r],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=f,c.next=_}a.pending=c}Bi=null}return n}function mm(n,r){do{var a=st;try{if(Wc(),Ul.current=$l,zl){for(var c=Xe.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}zl=!1}if(Hi=0,_t=ht=Xe=null,ca=!1,ha=0,Sh.current=null,a===null||a.return===null){ft=1,ga=r,st=null;break}e:{var p=n,_=a.return,T=a,R=r;if(r=Rt,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var b=R,W=T,G=W.tag;if((W.mode&1)===0&&(G===0||G===11||G===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var Z=zp(_);if(Z!==null){Z.flags&=-257,jp(Z,_,T,p,r),Z.mode&1&&Up(p,b,r),r=Z,R=b;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(R),r.updateQueue=ie}else re.add(R);break e}else{if((r&1)===0){Up(p,b,r),xh();break e}R=Error(t(426))}}else if(Ke&&T.mode&1){var nt=zp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),jp(nt,_,T,p,r),Hc(Ks(R,T));break e}}p=R=Ks(R,T),ft!==4&&(ft=2),ya===null?ya=[p]:ya.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Fp(p,R,r);cp(p,M);break e;case 1:T=R;var k=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Xr===null||!Xr.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var Q=bp(p,T,r);cp(p,Q);break e}}p=p.return}while(p!==null)}_m(a)}catch(se){r=se,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function gm(){var n=Ql.current;return Ql.current=$l,n===null?$l:n}function xh(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||(qi&268435455)===0&&(Xl&268435455)===0||Zr(vt,Rt)}function nu(n,r){var a=Ve;Ve|=2;var c=gm();(vt!==n||Rt!==r)&&(Tr=null,Gi(n,r));do try{mE();break}catch(f){mm(n,f)}while(!0);if(Wc(),Ve=a,Ql.current=c,st!==null)throw Error(t(261));return vt=null,Rt=0,ft}function mE(){for(;st!==null;)ym(st)}function gE(){for(;st!==null&&!Za();)ym(st)}function ym(n){var r=wm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,r===null?_m(n):st=r,Sh.current=null}function _m(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=lE(a,r,ln),a!==null){st=a;return}}else{if(a=uE(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ft===0&&(ft=5)}function Ki(n,r,a){var c=Ce,f=_n.transition;try{_n.transition=null,Ce=1,yE(n,r,a,c)}finally{_n.transition=f,Ce=c}return null}function yE(n,r,a,c){do Js();while(Yr!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ue(n,p),n===vt&&(st=vt=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Jl||(Jl=!0,Tm(hn,function(){return Js(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=_n.transition,_n.transition=null;var _=Ce;Ce=1;var T=Ve;Ve|=4,Sh.current=null,hE(n,a),lm(a,n),Fv(xc),zr=!!Vc,xc=Vc=null,n.current=a,fE(a),gc(),Ve=T,Ce=_,_n.transition=p}else n.current=a;if(Jl&&(Jl=!1,Yr=n,Zl=f),p=n.pendingLanes,p===0&&(Xr=null),nl(a.stateNode),Xt(n,je()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)f=r[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Yl)throw Yl=!1,n=Ch,Ch=null,n;return(Zl&1)!==0&&n.tag!==0&&Js(),p=n.pendingLanes,(p&1)!==0?n===Ph?_a++:(_a=0,Ph=n):_a=0,Wr(),null}function Js(){if(Yr!==null){var n=br(Zl),r=_n.transition,a=Ce;try{if(_n.transition=null,Ce=16>n?16:n,Yr===null)var c=!1;else{if(n=Yr,Yr=null,Zl=0,(Ve&6)!==0)throw Error(t(331));var f=Ve;for(Ve|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if((ne.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var b=T[R];for(ne=b;ne!==null;){var W=ne;switch(W.tag){case 0:case 11:case 15:ma(8,W,p)}var G=W.child;if(G!==null)G.return=W,ne=G;else for(;ne!==null;){W=ne;var q=W.sibling,Z=W.return;if(rm(W),W===b){ne=null;break}if(q!==null){q.return=Z,ne=q;break}ne=Z}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var nt=ie.sibling;ie.sibling=null,ie=nt}while(ie!==null)}}ne=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ma(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ne=M;break e}ne=p.return}}var k=n.current;for(ne=k;ne!==null;){_=ne;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,ne=F;else e:for(_=k;ne!==null;){if(T=ne,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Kl(9,T)}}catch(se){Je(T,T.return,se)}if(T===_){ne=null;break e}var Q=T.sibling;if(Q!==null){Q.return=T.return,ne=Q;break e}ne=T.return}}if(Ve=f,Wr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Di,n)}catch{}c=!0}return c}finally{Ce=a,_n.transition=r}}return!1}function vm(n,r,a){r=Ks(a,r),r=Fp(n,r,1),n=Kr(n,r,1),r=$t(),n!==null&&(Mr(n,1,r),Xt(n,r))}function Je(n,r,a){if(n.tag===3)vm(n,n,a);else for(;r!==null;){if(r.tag===3){vm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Xr===null||!Xr.has(c))){n=Ks(a,n),n=bp(r,n,1),r=Kr(r,n,1),n=$t(),r!==null&&(Mr(r,1,n),Xt(r,n));break}}r=r.return}}function _E(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(Rt&a)===a&&(ft===4||ft===3&&(Rt&130023424)===Rt&&500>je()-Rh?Gi(n,0):Ah|=a),Xt(n,r)}function Em(n,r){r===0&&((n.mode&1)===0?r=1:(r=ws,ws<<=1,(ws&130023424)===0&&(ws=4194304)));var a=$t();n=vr(n,r),n!==null&&(Mr(n,r,a),Xt(n,a))}function vE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Em(n,a)}function EE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Em(n,a)}var wm;wm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,aE(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Ke&&(r.flags&1048576)!==0&&ep(r,Dl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Wl(n,r),n=r.pendingProps;var f=zs(r,Vt.current);Ws(r,a),f=rh(null,r,c,n,f,a);var p=ih();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gt(c)?(p=!0,Pl(r)):p=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Xc(r),f.updater=Hl,r.stateNode=f,f._reactInternals=r,ch(r,c,n,a),r=ph(null,r,c,!0,p,a)):(r.tag=0,Ke&&p&&zc(r),Bt(null,r,f,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Wl(n,r),n=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=TE(c),n=Vn(c,n),f){case 0:r=dh(null,r,c,n,a);break e;case 1:r=Gp(null,r,c,n,a);break e;case 11:r=Bp(null,r,c,n,a);break e;case 14:r=$p(null,r,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Vn(c,f),dh(n,r,c,f,a);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Vn(c,f),Gp(n,r,c,f,a);case 3:e:{if(Kp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,f=p.element,up(n,r),Fl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){f=Ks(Error(t(423)),r),r=Qp(n,r,c,a,f);break e}else if(c!==f){f=Ks(Error(t(424)),r),r=Qp(n,r,c,a,f);break e}else for(an=$r(r.stateNode.containerInfo.firstChild),on=r,Ke=!0,Dn=null,a=ap(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($s(),c===f){r=wr(n,r,a);break e}Bt(n,r,c,a)}r=r.child}return r;case 5:return fp(r),n===null&&$c(r),c=r.type,f=r.pendingProps,p=n!==null?n.memoizedProps:null,_=f.children,Oc(c,f)?_=null:p!==null&&Oc(c,p)&&(r.flags|=32),Wp(n,r),Bt(n,r,_,a),r.child;case 6:return n===null&&$c(r),null;case 13:return Xp(n,r,a);case 4:return Yc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Hs(r,null,c,a):Bt(n,r,c,a),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Vn(c,f),Bp(n,r,c,f,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,p=r.memoizedProps,_=f.value,Be(Ol,c._currentValue),c._currentValue=_,p!==null)if(Nn(p.value,_)){if(p.children===f.children&&!Wt.current){r=wr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=Er(-1,a&-a),R.tag=2;var b=p.updateQueue;if(b!==null){b=b.shared;var W=b.pending;W===null?R.next=R:(R.next=W.next,W.next=R),b.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),Kc(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Kc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Bt(n,r,f.children,a),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Ws(r,a),f=gn(f),c=c(f),r.flags|=1,Bt(n,r,c,a),r.child;case 14:return c=r.type,f=Vn(c,r.pendingProps),f=Vn(c.type,f),$p(n,r,c,f,a);case 15:return Hp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Vn(c,f),Wl(n,r),r.tag=1,Gt(c)?(n=!0,Pl(r)):n=!1,Ws(r,a),Lp(r,c,f),ch(r,c,f,a),ph(null,r,c,!0,n,a);case 19:return Jp(n,r,a);case 22:return qp(n,r,a)}throw Error(t(156,r.tag))};function Tm(n,r){return vs(n,r)}function wE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,r,a,c){return new wE(n,r,a,c)}function Oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function TE(n){if(typeof n=="function")return Oh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Nt)return 14}return 2}function ei(n,r){var a=n.alternate;return a===null?(a=vn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ru(n,r,a,c,f,p){var _=2;if(c=n,typeof n=="function")Oh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return Qi(a.children,f,p,r);case I:_=8,f|=8;break;case A:return n=vn(12,a,r,f|2),n.elementType=A,n.lanes=p,n;case S:return n=vn(13,a,r,f),n.elementType=S,n.lanes=p,n;case et:return n=vn(19,a,r,f),n.elementType=et,n.lanes=p,n;case be:return iu(a,f,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:_=10;break e;case V:_=9;break e;case O:_=11;break e;case Nt:_=14;break e;case Dt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vn(_,a,r,f),r.elementType=n,r.type=c,r.lanes=p,r}function Qi(n,r,a,c){return n=vn(7,n,c,r),n.lanes=a,n}function iu(n,r,a,c){return n=vn(22,n,c,r),n.elementType=be,n.lanes=a,n.stateNode={isHidden:!1},n}function Lh(n,r,a){return n=vn(6,n,null,r),n.lanes=a,n}function Mh(n,r,a){return r=vn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function IE(n,r,a,c,f){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lr(0),this.expirationTimes=Lr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Fh(n,r,a,c,f,p,_,T,R){return n=new IE(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=vn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(p),n}function SE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:De,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Im(n){if(!n)return qr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return Yd(n,a,r)}return r}function Sm(n,r,a,c,f,p,_,T,R){return n=Fh(a,c,!0,n,f,p,_,T,R),n.context=Im(null),a=n.current,c=$t(),f=Jr(a),p=Er(c,f),p.callback=r??null,Kr(a,p,f),n.current.lanes=f,Mr(n,f,c),Xt(n,c),n}function su(n,r,a,c){var f=r.current,p=$t(),_=Jr(f);return a=Im(a),r.context===null?r.context=a:r.pendingContext=a,r=Er(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Kr(f,r,_),n!==null&&(Ln(n,f,_,p),Ml(n,f,_)),_}function ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Am(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function bh(n,r){Am(n,r),(n=n.alternate)&&Am(n,r)}function AE(){return null}var Rm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uh(n){this._internalRoot=n}au.prototype.render=Uh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));su(n,r,null,null)},au.prototype.unmount=Uh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Wi(function(){su(null,n,null,null)}),r[mr]=null}};function au(n){this._internalRoot=n}au.prototype.unstable_scheduleHydration=function(n){if(n){var r=al();n={blockedOn:null,target:n,priority:r};for(var a=0;a<jn.length&&r!==0&&r<jn[a].priority;a++);jn.splice(a,0,n),a===0&&cl(n)}};function zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function RE(n,r,a,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var b=ou(_);p.call(b)}}var _=Sm(r,c,n,0,null,!1,!1,"",Cm);return n._reactRootContainer=_,n[mr]=_.current,na(n.nodeType===8?n.parentNode:n),Wi(),_}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var T=c;c=function(){var b=ou(R);T.call(b)}}var R=Fh(n,0,!1,null,null,!1,!1,"",Cm);return n._reactRootContainer=R,n[mr]=R.current,na(n.nodeType===8?n.parentNode:n),Wi(function(){su(r,R,a,c)}),R}function uu(n,r,a,c,f){var p=a._reactRootContainer;if(p){var _=p;if(typeof f=="function"){var T=f;f=function(){var R=ou(_);T.call(R)}}su(r,_,n,f)}else _=RE(a,r,n,f,c);return ou(_)}sl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Or(r.pendingLanes);a!==0&&(Fr(r,a|1),Xt(r,je()),(Ve&6)===0&&(Ys=je()+500,Wr()))}break;case 13:Wi(function(){var c=vr(n,1);if(c!==null){var f=$t();Ln(c,n,1,f)}}),bh(n,1)}},Ts=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=$t();Ln(r,n,134217728,a)}bh(n,134217728)}},ol=function(n){if(n.tag===13){var r=Jr(n),a=vr(n,r);if(a!==null){var c=$t();Ln(a,n,r,c)}bh(n,r)}},al=function(){return Ce},ll=function(n,r){var a=Ce;try{return Ce=n,r()}finally{Ce=a}},ds=function(n,r,a){switch(r){case"input":if(Co(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var f=Rl(c);if(!f)throw Error(t(90));as(c),Co(c,f)}}}break;case"textarea":hs(n,a);break;case"select":r=a.value,r!=null&&ar(n,!!a.multiple,r,!1)}},Ri=Dh,Fo=Wi;var CE={usingClientEntryPoint:!1,Events:[sa,bs,Rl,Un,Mo,Dh]},va={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PE={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zo(n),n===null?null:n.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||AE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Di=cu.inject(PE),tn=cu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CE,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(r))throw Error(t(200));return SE(n,r,null,a)},Yt.createRoot=function(n,r){if(!zh(n))throw Error(t(299));var a=!1,c="",f=Rm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=Fh(n,1,!1,null,null,a,!1,c,f),n[mr]=r.current,na(n.nodeType===8?n.parentNode:n),new Uh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zo(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Wi(n)},Yt.hydrate=function(n,r,a){if(!lu(r))throw Error(t(200));return uu(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!zh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,p="",_=Rm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Sm(r,null,n,1,a??null,f,!1,p,_),n[mr]=r.current,na(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,f]:r.mutableSourceEagerHydrationData.push(a,f);return new au(r)},Yt.render=function(n,r,a){if(!lu(r))throw Error(t(200));return uu(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!lu(n))throw Error(t(40));return n._reactRootContainer?(Wi(function(){uu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Dh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!lu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return uu(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Lm;function ME(){if(Lm)return $h.exports;Lm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$h.exports=LE(),$h.exports}var Mm;function FE(){if(Mm)return hu;Mm=1;var i=ME();return hu.createRoot=i.createRoot,hu.hydrateRoot=i.hydrateRoot,hu}var bE=FE(),Na=Nf();const UE=({addTodo:i})=>{const[e,t]=Na.useState(""),s=o=>{o.preventDefault(),e.trim()&&(i(e),t(""))};return dt.jsxs("form",{onSubmit:s,className:"mb-3 d-flex",children:[dt.jsx("input",{type:"text",className:"form-control me-2",placeholder:"Enter a new task",value:e,onChange:o=>t(o.target.value)}),dt.jsx("button",{className:"btn btn-primary",type:"submit",children:"Add"})]})},zE=({todo:i,deleteTodo:e,updateTodo:t})=>{const[s,o]=Na.useState(!1),[u,h]=Na.useState(i.text),m=()=>{t(i.id,u),o(!1)};return dt.jsx("div",{className:"card mb-2",children:dt.jsxs("div",{className:"card-body d-flex justify-content-between align-items-center",children:[s?dt.jsx("input",{type:"text",className:"form-control me-2",value:u,onChange:y=>h(y.target.value)}):dt.jsx("span",{children:i.text}),dt.jsxs("div",{children:[s?dt.jsx("button",{className:"btn btn-success btn-sm me-2",onClick:m,children:"Save"}):dt.jsx("button",{className:"btn btn-warning btn-sm me-2",onClick:()=>o(!0),children:"Edit"}),dt.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>e(i.id),children:"Delete"})]})]})})},jE=()=>{};var Fm={};/**
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
 */const ay=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},BE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ly={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,C=(u&3)<<4|m>>4;let P=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(P=64)),s.push(t[w],t[C],t[P],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ay(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):BE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||C==null)throw new $E;const P=u<<2|m>>4;if(s.push(P),v!==64){const z=m<<4&240|v>>2;if(s.push(z),C!==64){const K=v<<6&192|C;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class $E extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HE=function(i){const e=ay(i);return ly.encodeByteArray(e,!0)},ku=function(i){return HE(i).replace(/\./g,"")},uy=function(i){try{return ly.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WE=()=>qE().__FIREBASE_DEFAULTS__,GE=()=>{if(typeof process>"u"||typeof Fm>"u")return;const i=Fm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},KE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&uy(i[1]);return e&&JSON.parse(e)},Qu=()=>{try{return jE()||WE()||GE()||KE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},cy=i=>{var e,t;return(t=(e=Qu())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},QE=i=>{const e=cy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},hy=()=>{var i;return(i=Qu())==null?void 0:i.config},fy=i=>{var e;return(e=Qu())==null?void 0:e[`_${i}`]};/**
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
 */class XE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function vo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function YE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[ku(JSON.stringify(t)),ku(JSON.stringify(h)),""].join(".")}const Sa={};function JE(){const i={prod:[],emulator:[]};for(const e of Object.keys(Sa))Sa[e]?i.emulator.push(e):i.prod.push(e);return i}function ZE(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let bm=!1;function py(i,e){if(typeof window>"u"||typeof document>"u"||!vo(window.location.host)||Sa[i]===e||Sa[i]||bm)return;Sa[i]=e;function t(P){return`__firebase__banner__${P}`}const s="__firebase__banner",u=JE().prod.length>0;function h(){const P=document.getElementById(s);P&&P.remove()}function m(P){P.style.display="flex",P.style.background="#7faaf0",P.style.position="fixed",P.style.bottom="5px",P.style.left="5px",P.style.padding=".5em",P.style.borderRadius="5px",P.style.alignItems="center"}function y(P,z){P.setAttribute("width","24"),P.setAttribute("id",z),P.setAttribute("height","24"),P.setAttribute("viewBox","0 0 24 24"),P.setAttribute("fill","none"),P.style.marginLeft="-6px"}function v(){const P=document.createElement("span");return P.style.cursor="pointer",P.style.marginLeft="16px",P.style.fontSize="24px",P.innerHTML=" &times;",P.onclick=()=>{bm=!0,h()},P}function w(P,z){P.setAttribute("id",z),P.innerText="Learn more",P.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",P.setAttribute("target","__blank"),P.style.paddingLeft="5px",P.style.textDecoration="underline"}function C(){const P=ZE(s),z=t("text"),K=document.getElementById(z)||document.createElement("span"),X=t("learnmore"),H=document.getElementById(X)||document.createElement("a"),ve=t("preprendIcon"),fe=document.getElementById(ve)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(P.created){const ge=P.element;m(ge),w(H,X);const Ie=v();y(fe,ve),ge.append(fe,K,H,Ie),document.body.appendChild(ge)}u?(K.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ew(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function tw(){var e;const i=(e=Qu())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sw(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ow(){return!tw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aw(){try{return typeof indexedDB=="object"}catch{return!1}}function lw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const uw="FirebaseError";class Nr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=uw,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ua.prototype.create)}}class Ua{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?cw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Nr(o,m,s)}}function cw(i,e){return i.replace(hw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const hw=/\{\$([^}]+)}/g;function fw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Zi(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Um(u)&&Um(h)){if(!Zi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Um(i){return i!==null&&typeof i=="object"}/**
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
 */function za(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dw(i,e){const t=new pw(i,e);return t.subscribe.bind(t)}class pw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");mw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Wh),o.error===void 0&&(o.error=Wh),o.complete===void 0&&(o.complete=Wh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Wh(){}/**
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
 */function en(i){return i&&i._delegate?i._delegate:i}class es{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xi="[DEFAULT]";/**
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
 */class gw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new XE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_w(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yw(i){return i===Xi?void 0:i}function _w(i){return i.instantiationMode==="EAGER"}/**
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
 */class vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Se||(Se={}));const Ew={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},ww=Se.INFO,Tw={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Iw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Tw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Df{constructor(e){this.name=e,this._logLevel=ww,this._logHandler=Iw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ew[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const Sw=(i,e)=>e.some(t=>i instanceof t);let zm,jm;function Aw(){return zm||(zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rw(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const my=new WeakMap,sf=new WeakMap,gy=new WeakMap,Gh=new WeakMap,Vf=new WeakMap;function Cw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(li(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&my.set(t,i)}).catch(()=>{}),Vf.set(e,i),e}function Pw(i){if(sf.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});sf.set(i,e)}let of={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return sf.get(i);if(e==="objectStoreNames")return i.objectStoreNames||gy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return li(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function kw(i){of=i(of)}function Nw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Kh(this),e,...t);return gy.set(s,e.sort?e.sort():[e]),li(s)}:Rw().includes(i)?function(...e){return i.apply(Kh(this),e),li(my.get(this))}:function(...e){return li(i.apply(Kh(this),e))}}function Dw(i){return typeof i=="function"?Nw(i):(i instanceof IDBTransaction&&Pw(i),Sw(i,Aw())?new Proxy(i,of):i)}function li(i){if(i instanceof IDBRequest)return Cw(i);if(Gh.has(i))return Gh.get(i);const e=Dw(i);return e!==i&&(Gh.set(i,e),Vf.set(e,i)),e}const Kh=i=>Vf.get(i);function Vw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=li(h);return s&&h.addEventListener("upgradeneeded",y=>{s(li(h.result),y.oldVersion,y.newVersion,li(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const xw=["get","getKey","getAll","getAllKeys","count"],Ow=["put","add","delete","clear"],Qh=new Map;function Bm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Ow.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||xw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Qh.set(e,u),u}kw(i=>({...i,get:(e,t,s)=>Bm(e,t)||i.get(e,t,s),has:(e,t)=>!!Bm(e,t)||i.has(e,t)}));/**
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
 */class Lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Mw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const af="@firebase/app",$m="0.14.1";/**
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
 */const Ar=new Df("@firebase/app"),Fw="@firebase/app-compat",bw="@firebase/analytics-compat",Uw="@firebase/analytics",zw="@firebase/app-check-compat",jw="@firebase/app-check",Bw="@firebase/auth",$w="@firebase/auth-compat",Hw="@firebase/database",qw="@firebase/data-connect",Ww="@firebase/database-compat",Gw="@firebase/functions",Kw="@firebase/functions-compat",Qw="@firebase/installations",Xw="@firebase/installations-compat",Yw="@firebase/messaging",Jw="@firebase/messaging-compat",Zw="@firebase/performance",eT="@firebase/performance-compat",tT="@firebase/remote-config",nT="@firebase/remote-config-compat",rT="@firebase/storage",iT="@firebase/storage-compat",sT="@firebase/firestore",oT="@firebase/ai",aT="@firebase/firestore-compat",lT="firebase",uT="12.1.0";/**
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
 */const lf="[DEFAULT]",cT={[af]:"fire-core",[Fw]:"fire-core-compat",[Uw]:"fire-analytics",[bw]:"fire-analytics-compat",[jw]:"fire-app-check",[zw]:"fire-app-check-compat",[Bw]:"fire-auth",[$w]:"fire-auth-compat",[Hw]:"fire-rtdb",[qw]:"fire-data-connect",[Ww]:"fire-rtdb-compat",[Gw]:"fire-fn",[Kw]:"fire-fn-compat",[Qw]:"fire-iid",[Xw]:"fire-iid-compat",[Yw]:"fire-fcm",[Jw]:"fire-fcm-compat",[Zw]:"fire-perf",[eT]:"fire-perf-compat",[tT]:"fire-rc",[nT]:"fire-rc-compat",[rT]:"fire-gcs",[iT]:"fire-gcs-compat",[sT]:"fire-fst",[aT]:"fire-fst-compat",[oT]:"fire-vertex","fire-js":"fire-js",[lT]:"fire-js-all"};/**
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
 */const Nu=new Map,hT=new Map,uf=new Map;function Hm(i,e){try{i.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function co(i){const e=i.name;if(uf.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;uf.set(e,i);for(const t of Nu.values())Hm(t,i);for(const t of hT.values())Hm(t,i);return!0}function xf(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Xn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const fT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ui=new Ua("app","Firebase",fT);/**
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
 */class dT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
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
 */const Eo=uT;function yy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:lf,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ui.create("bad-app-name",{appName:String(o)});if(t||(t=hy()),!t)throw ui.create("no-options");const u=Nu.get(o);if(u){if(Zi(t,u.options)&&Zi(s,u.config))return u;throw ui.create("duplicate-app",{appName:o})}const h=new vw(o);for(const y of uf.values())h.addComponent(y);const m=new dT(t,s,h);return Nu.set(o,m),m}function _y(i=lf){const e=Nu.get(i);if(!e&&i===lf&&hy())return yy();if(!e)throw ui.create("no-app",{appName:i});return e}function ci(i,e,t){let s=cT[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(h.join(" "));return}co(new es(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pT="firebase-heartbeat-database",mT=1,Da="firebase-heartbeat-store";let Xh=null;function vy(){return Xh||(Xh=Vw(pT,mT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Da)}catch(t){console.warn(t)}}}}).catch(i=>{throw ui.create("idb-open",{originalErrorMessage:i.message})})),Xh}async function gT(i){try{const t=(await vy()).transaction(Da),s=await t.objectStore(Da).get(Ey(i));return await t.done,s}catch(e){if(e instanceof Nr)Ar.warn(e.message);else{const t=ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(t.message)}}}async function qm(i,e){try{const s=(await vy()).transaction(Da,"readwrite");await s.objectStore(Da).put(e,Ey(i)),await s.done}catch(t){if(t instanceof Nr)Ar.warn(t.message);else{const s=ui.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ar.warn(s.message)}}}function Ey(i){return`${i.name}!${i.options.appId}`}/**
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
 */const yT=1024,_T=30;class vT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Wm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>_T){const h=TT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ar.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wm(),{heartbeatsToSend:s,unsentEntries:o}=ET(this._heartbeatsCache.heartbeats),u=ku(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ar.warn(t),""}}}function Wm(){return new Date().toISOString().substring(0,10)}function ET(i,e=yT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Gm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Gm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class wT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aw()?lw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gm(i){return ku(JSON.stringify({version:2,heartbeats:i})).length}function TT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function IT(i){co(new es("platform-logger",e=>new Lw(e),"PRIVATE")),co(new es("heartbeat",e=>new vT(e),"PRIVATE")),ci(af,$m,i),ci(af,$m,"esm2020"),ci("fire-js","")}IT("");var Km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,wy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function A(){}A.prototype=I.prototype,D.D=I.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(N,V,O){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[V].apply(N,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,A){A||(A=0);var N=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)N[V]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(V=0;16>V;++V)N[V]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=D.g[0],A=D.g[1],V=D.g[2];var O=D.g[3],S=I+(O^A&(V^O))+N[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(V^I&(A^V))+N[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(A^O&(I^A))+N[2]+606105819&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(I^V&(O^I))+N[3]+3250441966&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(O^A&(V^O))+N[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(V^I&(A^V))+N[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(A^O&(I^A))+N[6]+2821735955&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(I^V&(O^I))+N[7]+4249261313&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(O^A&(V^O))+N[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(V^I&(A^V))+N[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(A^O&(I^A))+N[10]+4294925233&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(I^V&(O^I))+N[11]+2304563134&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(O^A&(V^O))+N[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(V^I&(A^V))+N[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(A^O&(I^A))+N[14]+2792965006&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(I^V&(O^I))+N[15]+1236535329&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(V^O&(A^V))+N[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(I^A))+N[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(O^I))+N[11]+643717713&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(V^O))+N[0]+3921069994&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(A^V))+N[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(I^A))+N[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(O^I))+N[15]+3634488961&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(V^O))+N[4]+3889429448&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(A^V))+N[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(I^A))+N[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(O^I))+N[3]+4107603335&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(V^O))+N[8]+1163531501&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(A^V))+N[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(I^A))+N[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(O^I))+N[7]+1735328473&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(V^O))+N[12]+2368359562&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(A^V^O)+N[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^V)+N[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^A)+N[11]+1839030562&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^I)+N[14]+4259657740&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(A^V^O)+N[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^V)+N[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^A)+N[7]+4139469664&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^I)+N[10]+3200236656&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(A^V^O)+N[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^V)+N[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^A)+N[3]+3572445317&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^I)+N[6]+76029189&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(A^V^O)+N[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^V)+N[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^A)+N[15]+530742520&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^I)+N[2]+3299628645&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(V^(A|~O))+N[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~V))+N[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~A))+N[14]+2878612391&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~I))+N[5]+4237533241&4294967295,A=V+(S<<21&4294967295|S>>>11),S=I+(V^(A|~O))+N[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~V))+N[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~A))+N[10]+4293915773&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~I))+N[1]+2240044497&4294967295,A=V+(S<<21&4294967295|S>>>11),S=I+(V^(A|~O))+N[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~V))+N[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~A))+N[6]+2734768916&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~I))+N[13]+1309151649&4294967295,A=V+(S<<21&4294967295|S>>>11),S=I+(V^(A|~O))+N[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~V))+N[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~A))+N[2]+718787259&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~I))+N[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+O&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var A=I-this.blockSize,N=this.B,V=this.h,O=0;O<I;){if(V==0)for(;O<=A;)o(this,D,O),O+=this.blockSize;if(typeof D=="string"){for(;O<I;)if(N[V++]=D.charCodeAt(O++),V==this.blockSize){o(this,N),V=0;break}}else for(;O<I;)if(N[V++]=D[O++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var A=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=A&255,A/=256;for(this.u(D),D=Array(16),I=A=0;4>I;++I)for(var N=0;32>N;N+=8)D[A++]=this.g[I]>>>N&255;return D};function u(D,I){var A=m;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=I(D)}function h(D,I){this.h=I;for(var A=[],N=!0,V=D.length-1;0<=V;V--){var O=D[V]|0;N&&O==I||(A[V]=O,N=!1)}this.g=A}var m={};function y(D){return-128<=D&&128>D?u(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return C;if(0>D)return H(v(-D));for(var I=[],A=1,N=0;D>=A;N++)I[N]=D/A|0,A*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return H(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),N=C,V=0;V<D.length;V+=8){var O=Math.min(8,D.length-V),S=parseInt(D.substring(V,V+O),I);8>O?(O=v(Math.pow(I,O)),N=N.j(O).add(v(S))):(N=N.j(A),N=N.add(v(S)))}return N}var C=y(0),P=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(X(this))return-H(this).m();for(var D=0,I=1,A=0;A<this.g.length;A++){var N=this.i(A);D+=(0<=N?N:4294967296+N)*I,I*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(K(this))return"0";if(X(this))return"-"+H(this).toString(D);for(var I=v(Math.pow(D,6)),A=this,N="";;){var V=Ie(A,I).g;A=ve(A,V.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=V,K(A))return O+N;for(;6>O.length;)O="0"+O;N=O+N}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function K(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function X(D){return D.h==-1}i.l=function(D){return D=ve(this,D),X(D)?-1:K(D)?0:1};function H(D){for(var I=D.g.length,A=[],N=0;N<I;N++)A[N]=~D.g[N];return new h(A,~D.h).add(P)}i.abs=function(){return X(this)?H(this):this},i.add=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],N=0,V=0;V<=I;V++){var O=N+(this.i(V)&65535)+(D.i(V)&65535),S=(O>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);N=S>>>16,O&=65535,S&=65535,A[V]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ve(D,I){return D.add(H(I))}i.j=function(D){if(K(this)||K(D))return C;if(X(this))return X(D)?H(this).j(H(D)):H(H(this).j(D));if(X(D))return H(this.j(H(D)));if(0>this.l(z)&&0>D.l(z))return v(this.m()*D.m());for(var I=this.g.length+D.g.length,A=[],N=0;N<2*I;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<D.g.length;V++){var O=this.i(N)>>>16,S=this.i(N)&65535,et=D.i(V)>>>16,Nt=D.i(V)&65535;A[2*N+2*V]+=S*Nt,fe(A,2*N+2*V),A[2*N+2*V+1]+=O*Nt,fe(A,2*N+2*V+1),A[2*N+2*V+1]+=S*et,fe(A,2*N+2*V+1),A[2*N+2*V+2]+=O*et,fe(A,2*N+2*V+2)}for(N=0;N<I;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=I;N<2*I;N++)A[N]=0;return new h(A,0)};function fe(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function ge(D,I){this.g=D,this.h=I}function Ie(D,I){if(K(I))throw Error("division by zero");if(K(D))return new ge(C,C);if(X(D))return I=Ie(H(D),I),new ge(H(I.g),H(I.h));if(X(I))return I=Ie(D,H(I)),new ge(H(I.g),I.h);if(30<D.g.length){if(X(D)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var A=P,N=I;0>=N.l(D);)A=Ze(A),N=Ze(N);var V=De(A,1),O=De(N,1);for(N=De(N,2),A=De(A,2);!K(N);){var S=O.add(N);0>=S.l(D)&&(V=V.add(A),O=S),N=De(N,1),A=De(A,1)}return I=ve(D,V.j(I)),new ge(V,I)}for(V=C;0<=D.l(I);){for(A=Math.max(1,Math.floor(D.m()/I.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),O=v(A),S=O.j(I);X(S)||0<S.l(D);)A-=N,O=v(A),S=O.j(I);K(O)&&(O=P),V=V.add(O),D=ve(D,S)}return new ge(V,D)}i.A=function(D){return Ie(this,D).h},i.and=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)&D.i(N);return new h(A,this.h&D.h)},i.or=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)|D.i(N);return new h(A,this.h|D.h)},i.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)^D.i(N);return new h(A,this.h^D.h)};function Ze(D){for(var I=D.g.length+1,A=[],N=0;N<I;N++)A[N]=D.i(N)<<1|D.i(N-1)>>>31;return new h(A,D.h)}function De(D,I){var A=I>>5;I%=32;for(var N=D.g.length-A,V=[],O=0;O<N;O++)V[O]=0<I?D.i(O+A)>>>I|D.i(O+A+1)<<32-I:D.i(O+A);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,wy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,hi=h}).apply(typeof Km<"u"?Km:typeof self<"u"?self:typeof window<"u"?window:{});var fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ty,wa,Iy,vu,cf,Sy,Ay,Ry;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof fu=="object"&&fu];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,d){if(d)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],d=d(E),d!=E&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function u(l,d){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var U=g++;return{value:d(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function v(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function w(l,d,g){return l.call.apply(l.bind,arguments)}function C(l,d,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function P(l,d,g){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:C,P.apply(null,arguments)}function z(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function K(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var Y=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Y[Fe-2]=arguments[Fe];return d.prototype[L].apply(E,Y)}}function X(l){const d=l.length;if(0<d){const g=Array(d);for(let E=0;E<d;E++)g[E]=l[E];return g}return[]}function H(l,d){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let Y=0;Y<U;Y++)l[L+Y]=E[Y]}else l.push(E)}}class ve{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function fe(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ie(l){return Ie[" "](l),l}Ie[" "]=function(){};var Ze=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function De(l,d,g){for(const E in l)d.call(g,l[E],E,l)}function D(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function I(l){const d={};for(const g in l)d[g]=l[g];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(l,d){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let U=0;U<A.length;U++)g=A[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function V(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class et{constructor(){this.h=this.g=null}add(d,g){const E=Nt.get();E.set(d,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Nt=new ve(()=>new Dt,l=>l.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let be,J=!1,le=new et,ee=()=>{const l=m.Promise.resolve(void 0);be=()=>{l.then(x)}};var x=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var d=Nt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}J=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,d),m.removeEventListener("test",g,d)}catch{}return l}();function we(l,d){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(Ze){e:{try{Ie(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Pe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&we.aa.h.call(this)}}K(we,ae);var Pe={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Le=0;function ze(l,d,g,E,L){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!E,this.ha=L,this.key=++Le,this.da=this.fa=!1}function gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function sr(l){this.src=l,this.g={},this.h=0}sr.prototype.add=function(l,d,g,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var Y=Dr(l,d,E,L);return-1<Y?(d=l[Y],g||(d.fa=!1)):(d=new ze(d,this.src,U,!!E,L),d.fa=g,l.push(d)),d};function as(l,d){var g=d.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,d,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(gt(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Dr(l,d,g,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==d&&U.capture==!!g&&U.ha==E)return L}return-1}var Ti="closure_lm_"+(1e6*Math.random()|0),ls={};function Ro(l,d,g,E,L){if(Array.isArray(d)){for(var U=0;U<d.length;U++)Ro(l,d[U],g,E,L);return null}return g=ko(g),l&&l[Oe]?l.K(d,g,v(E)?!!E.capture:!1,L):Co(l,d,g,!1,E,L)}function Co(l,d,g,E,L,U){if(!d)throw Error("Invalid event type");var Y=v(L)?!!L.capture:!!L,Fe=cs(l);if(Fe||(l[Ti]=Fe=new sr(l)),g=Fe.add(d,g,E,Y,U),g.proxy)return g;if(E=Xa(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ee||(L=Y),L===void 0&&(L=!1),l.addEventListener(d.toString(),E,L);else if(l.attachEvent)l.attachEvent(ar(d.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Xa(){function l(g){return d.call(l.src,l.listener,g)}const d=Po;return l}function us(l,d,g,E,L){if(Array.isArray(d))for(var U=0;U<d.length;U++)us(l,d[U],g,E,L);else E=v(E)?!!E.capture:!!E,g=ko(g),l&&l[Oe]?(l=l.i,d=String(d).toString(),d in l.g&&(U=l.g[d],g=Dr(U,g,E,L),-1<g&&(gt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete l.g[d],l.h--)))):l&&(l=cs(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Dr(d,g,E,L)),(g=-1<l?d[l]:null)&&or(g))}function or(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Oe])as(d.i,l);else{var g=l.type,E=l.proxy;d.removeEventListener?d.removeEventListener(g,E,l.capture):d.detachEvent?d.detachEvent(ar(g),E):d.addListener&&d.removeListener&&d.removeListener(E),(g=cs(d))?(as(g,l),g.h==0&&(g.src=null,d[Ti]=null)):gt(l)}}}function ar(l){return l in ls?ls[l]:ls[l]="on"+l}function Po(l,d){if(l.da)l=!0;else{d=new we(d,this);var g=l.listener,E=l.ha||l.src;l.fa&&or(l),l=g.call(E,d)}return l}function cs(l){return l=l[Ti],l instanceof sr?l:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ko(l){return typeof l=="function"?l:(l[hs]||(l[hs]=function(d){return l.handleEvent(d)}),l[hs])}function lt(){B.call(this),this.i=new sr(this),this.M=this,this.F=null}K(lt,B),lt.prototype[Oe]=!0,lt.prototype.removeEventListener=function(l,d,g,E){us(this,l,d,g,E)};function ut(l,d){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=d.type||d,typeof d=="string")d=new ae(d,l);else if(d instanceof ae)d.target=d.target||l;else{var L=d;d=new ae(E,l),N(d,L)}if(L=!0,g)for(var U=g.length-1;0<=U;U--){var Y=d.g=g[U];L=lr(Y,E,!0,d)&&L}if(Y=d.g=l,L=lr(Y,E,!0,d)&&L,L=lr(Y,E,!1,d)&&L,g)for(U=0;U<g.length;U++)Y=d.g=g[U],L=lr(Y,E,!1,d)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],E=0;E<g.length;E++)gt(g[E]);delete l.g[d],l.h--}}this.F=null},lt.prototype.K=function(l,d,g,E){return this.i.add(String(l),d,!1,g,E)},lt.prototype.L=function(l,d,g,E){return this.i.add(String(l),d,!0,g,E)};function lr(l,d,g,E){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,U=0;U<d.length;++U){var Y=d[U];if(Y&&!Y.da&&Y.capture==g){var Fe=Y.listener,ct=Y.ha||Y.src;Y.fa&&as(l.i,Y),L=Fe.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function No(l,d,g){if(typeof l=="function")g&&(l=P(l,g));else if(l&&typeof l.handleEvent=="function")l=P(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:m.setTimeout(l,d||0)}function Vr(l){l.g=No(()=>{l.g=null,l.i&&(l.i=!1,Vr(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Ii extends B{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Vr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(l){B.call(this),this.h=l,this.g={}}K(Si,B);var Do=[];function Vo(l){De(l.g,function(d,g){this.g.hasOwnProperty(g)&&or(d)},l),l.g={}}Si.prototype.N=function(){Si.aa.N.call(this),Vo(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xo=m.JSON.stringify,Oo=m.JSON.parse,Lo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ai(){}Ai.prototype.h=null;function fs(l){return l.h||(l.h=l.i())}function ds(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bn(){ae.call(this,"d")}K(bn,ae);function ps(){ae.call(this,"c")}K(ps,ae);var Un={},Mo=null;function Ri(){return Mo=Mo||new lt}Un.La="serverreachability";function Fo(l){ae.call(this,Un.La,l)}K(Fo,ae);function ur(l){const d=Ri();ut(d,new Fo(d))}Un.STAT_EVENT="statevent";function bo(l,d){ae.call(this,Un.STAT_EVENT,l),this.stat=d}K(bo,ae);function tt(l){const d=Ri();ut(d,new bo(d,l))}Un.Ma="timingevent";function ms(l,d){ae.call(this,Un.Ma,l),this.size=d}K(ms,ae);function wn(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},d)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function Pi(l,d,g,E,L,U){l.info(function(){if(l.g)if(U)for(var Y="",Fe=U.split("&"),ct=0;ct<Fe.length;ct++){var ke=Fe[ct].split("=");if(1<ke.length){var yt=ke[0];ke=ke[1];var it=yt.split("_");Y=2<=it.length&&it[1]=="type"?Y+(yt+"="+ke+"&"):Y+(yt+"=redacted&")}}else Y=null;else Y=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+d+`
`+g+`
`+Y})}function gs(l,d,g,E,L,U,Y){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+d+`
`+g+`
`+U+" "+Y})}function Tn(l,d,g,E){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+mc(l,g)+(E?" "+E:"")})}function Uo(l,d){l.info(function(){return"TIMEOUT: "+d})}Ci.prototype.info=function(){};function mc(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return xo(g)}catch{return d}}var ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ya={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function ki(){}K(ki,Ai),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},In=new ki;function Sn(l,d,g,E){this.j=l,this.i=d,this.l=g,this.R=E||1,this.U=new Si(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ja}function Ja(){this.i=null,this.g="",this.h=!1}var zo={},_s={};function vs(l,d,g){l.L=1,l.v=Fr(nn(d)),l.m=g,l.P=!0,jo(l,null)}function jo(l,d){l.F=Date.now(),je(l),l.A=nn(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Ur(g.i,"t",E),l.C=0,g=l.j.J,l.h=new Ja,l.g=gl(l.j,g?d:null,!l.m),0<l.O&&(l.M=new Ii(P(l.Y,l,l.g),l.O)),d=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Do[0]=L.toString()),L=Do);for(var U=0;U<L.length;U++){var Y=Ro(g,L[U],E||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),ur(),Pi(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const d=this.M;d&&qt(l)==3?d.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const it=qt(this.g);var d=this.g.Ba();const dn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Go(this.g)))){this.J||it!=4||d==7||(d==8||0>=dn?ur(3):ur(2)),Ni(this);var g=this.g.Z();this.X=g;t:if(Za(this)){var E=Go(this.g);l="";var L=E.length,U=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),xr(this);var Y="";break t}this.h.i=new m.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(E[d],{stream:!(U&&d==L-1)});E.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=g==200,gs(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ct=this.g;if((Fe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(Fe)){var ke=Fe;break t}}ke=null}if(g=ke)Tn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bo(this,g);else{this.o=!1,this.s=3,tt(12),hn(this),xr(this);break e}}if(this.P){g=!0;let sn;for(;!this.J&&this.C<Y.length;)if(sn=gc(this,Y),sn==_s){it==4&&(this.s=4,tt(14),g=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==zo){this.s=4,tt(15),Tn(this.i,this.l,Y,"[Invalid Chunk]"),g=!1;break}else Tn(this.i,this.l,sn,null),Bo(this,sn);if(Za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||Y.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)Tn(this.i,this.l,Y,"[Invalid Chunked Response]"),hn(this),xr(this);else if(0<Y.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Qo(yt),yt.M=!0,tt(11))}}else Tn(this.i,this.l,Y,null),Bo(this,Y);it==4&&hn(this),this.o&&!this.J&&(it==4?Ns(this.j,this):(this.o=!1,je(this)))}else As(this.g),g==400&&0<Y.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),hn(this),xr(this)}}}catch{}finally{}};function Za(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function gc(l,d){var g=l.C,E=d.indexOf(`
`,g);return E==-1?_s:(g=Number(d.substring(g,E)),isNaN(g)?zo:(E+=1,E+g>d.length?_s:(d=d.slice(E,E+g),l.C=E+g,d)))}Sn.prototype.cancel=function(){this.J=!0,hn(this)};function je(l){l.S=Date.now()+l.I,el(l,l.I)}function el(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(P(l.ba,l),d)}function Ni(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Uo(this.i,this.A),this.L!=2&&(ur(),tt(17)),hn(this),this.s=2,xr(this)):el(this,this.S-l)};function xr(l){l.j.G==0||l.J||Ns(l.j,l)}function hn(l){Ni(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Vo(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Bo(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||zt(g.h,l))){if(!l.K&&zt(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(d)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)ks(g),kn(g);else break e;Ps(g),tt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=wn(P(g.Za,g),6e3));if(1>=nl(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else pr(g,11)}else if((l.K||g.g==l)&&ks(g),!fe(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let ke=L[d];if(g.T=ke[0],ke=ke[1],g.G==2)if(ke[0]=="c"){g.K=ke[1],g.ia=ke[2];const yt=ke[3];yt!=null&&(g.la=yt,g.j.info("VER="+g.la));const it=ke[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const dn=ke[5];dn!=null&&typeof dn=="number"&&0<dn&&(E=1.5*dn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const sn=l.g;if(sn){const Fi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var U=E.h;U.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&($o(U,U.h),U.h=null))}if(E.D){const Vs=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vs&&(E.ya=Vs,Ue(E.I,E.D,Vs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var Y=l;if(E.qa=ml(E,E.J?E.ia:null,E.W),Y.K){rl(E.h,Y);var Fe=Y,ct=E.L;ct&&(Fe.I=ct),Fe.B&&(Ni(Fe),je(Fe)),E.g=Y}else Mi(E);0<g.i.length&&$n(g)}else ke[0]!="stop"&&ke[0]!="close"||pr(g,7);else g.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?pr(g,7):St(g):ke[0]!="noop"&&g.l&&g.l.ta(ke),g.v=0)}}ur(4)}catch{}}var tl=class{constructor(l,d){this.g=l,this.map=d}};function Di(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function nl(l){return l.h?1:l.g?l.g.size:0}function zt(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function $o(l,d){l.g?l.g.add(d):l.h=d}function rl(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Di.prototype.cancel=function(){if(this.i=il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function il(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return X(l.i)}function Es(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var d=[],g=l.length,E=0;E<g;E++)d.push(l[E]);return d}d=[],g=0;for(E in l)d[g++]=l[E];return d}function ws(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const E in l)d[g++]=E;return d}}}function Or(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=ws(l),E=Es(l),L=E.length,U=0;U<L;U++)d.call(void 0,E[U],g&&g[U],l)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yc(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var U=l[g].substring(0,E);L=l[g].substring(E+1)}else U=l[g];d(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function cr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof cr){this.h=l.h,xi(this,l.j),this.o=l.o,this.g=l.g,Lr(this,l.s),this.l=l.l;var d=l.i,g=new zn;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Mr(this,g),this.m=l.m}else l&&(d=String(l).match(Vi))?(this.h=!1,xi(this,d[1]||"",!0),this.o=Ce(d[2]||""),this.g=Ce(d[3]||"",!0),Lr(this,d[4]),this.l=Ce(d[5]||"",!0),Mr(this,d[6]||"",!0),this.m=Ce(d[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}cr.prototype.toString=function(){var l=[],d=this.j;d&&l.push(br(d,Ts,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(br(d,Ts,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(br(g,g.charAt(0)=="/"?al:ol,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",br(g,Ho)),l.join("")};function nn(l){return new cr(l)}function xi(l,d,g){l.j=g?Ce(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Lr(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Mr(l,d,g){d instanceof zn?(l.i=d,jn(l.i,l.h)):(g||(d=br(d,ll)),l.i=new zn(d,l.h))}function Ue(l,d,g){l.i.set(d,g)}function Fr(l){return Ue(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ce(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function br(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,sl),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function sl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ts=/[#\/\?@]/g,ol=/[#\?:]/g,al=/[#\?]/g,ll=/[#\?@]/g,Ho=/#/g;function zn(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function It(l){l.g||(l.g=new Map,l.h=0,l.i&&yc(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}i=zn.prototype,i.add=function(l,d){It(this),this.i=null,l=fn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function An(l,d){It(l),d=fn(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Rn(l,d){return It(l),d=fn(l,d),l.g.has(d)}i.forEach=function(l,d){It(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(d,L,E,this)},this)},this)},i.na=function(){It(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let E=0;E<d.length;E++){const L=l[E];for(let U=0;U<L.length;U++)g.push(d[E])}return g},i.V=function(l){It(this);let d=[];if(typeof l=="string")Rn(this,l)&&(d=d.concat(this.g.get(fn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},i.set=function(l,d){return It(this),this.i=null,l=fn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},i.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Ur(l,d,g){An(l,d),0<g.length&&(l.i=null,l.g.set(fn(l,d),X(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var E=d[g];const U=encodeURIComponent(String(E)),Y=this.V(E);for(E=0;E<Y.length;E++){var L=U;Y[E]!==""&&(L+="="+encodeURIComponent(String(Y[E]))),l.push(L)}}return this.i=l.join("&")};function fn(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function jn(l,d){d&&!l.j&&(It(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(An(this,E),Ur(this,L,g))},l)),l.j=d}function _c(l,d){const g=new Ci;if(m.Image){const E=new Image;E.onload=z(Ht,g,"TestLoadImage: loaded",!0,d,E),E.onerror=z(Ht,g,"TestLoadImage: error",!1,d,E),E.onabort=z(Ht,g,"TestLoadImage: abort",!1,d,E),E.ontimeout=z(Ht,g,"TestLoadImage: timeout",!1,d,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else d(!1)}function ul(l,d){const g=new Ci,E=new AbortController,L=setTimeout(()=>{E.abort(),Ht(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Ht(g,"TestPingServer: ok",!0,d):Ht(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Ht(g,"TestPingServer: error",!1,d)})}function Ht(l,d,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function vc(){this.g=new Lo}function cl(l,d,g){const E=g||"";try{Or(l,function(L,U){let Y=L;v(L)&&(Y=xo(L)),d.push(E+U+"="+encodeURIComponent(Y))})}catch(L){throw d.push(E+"type="+encodeURIComponent("_badmap")),L}}function hr(l){this.l=l.Ub||null,this.j=l.eb||!1}K(hr,Ai),hr.prototype.g=function(){return new Oi(this.l,this.j)},hr.prototype.i=function(l){return function(){return l}}({});function Oi(l,d){lt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(Oi,lt),i=Oi.prototype,i.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||m).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function hl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Cn(this):Pn(this),this.readyState==3&&hl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},i.Qa=function(l){this.g&&(this.response=l,Cn(this))},i.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,d){this.u.append(l,d)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function fr(l){let d="";return De(l,function(g,E){d+=E,d+=":",d+=g,d+=`\r
`}),d}function zr(l,d,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=fr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ue(l,d,g))}function Ge(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(Ge,lt);var Ec=/^https?$/i,qo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,d,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?fs(this.o):fs(In),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(U){Li(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(qo,d,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of g)this.g.setRequestHeader(U,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Li(this,U)}};function Li(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Is(l),rn(l)}function Is(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),rn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Wo(this):this.bb())},i.bb=function(){Wo(this)};function Wo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)No(l.Ea,0,l);else if(ut(l,"readystatechange"),qt(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var E;if(E=Y===0){var L=String(l.D).match(Vi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Ec.test(L?L.toLowerCase():"")}g=E}if(g)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<qt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Is(l)}}finally{rn(l)}}}}function rn(l,d){if(l.g){Ss(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ut(l,"ready");try{g.onreadystatechange=E}catch{}}}function Ss(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Oo(d)}};function Go(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function As(l){const d={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(fe(l[E]))continue;var g=V(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=d[L]||[];d[L]=U,U.push(g)}D(d,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function Ko(l){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,l),this.cb=Bn("retryDelaySeedMs",1e4,l),this.Wa=Bn("forwardChannelMaxRetries",2,l),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(l&&l.concurrentRequestLimit),this.Da=new vc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ko.prototype,i.la=8,i.G=1,i.connect=function(l,d,g,E){tt(0),this.W=l,this.H=d||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=ml(this,null,this.W),$n(this)};function St(l){if(Rs(l),l.G==3){var d=l.U++,g=nn(l.I);if(Ue(g,"SID",l.K),Ue(g,"RID",d),Ue(g,"TYPE","terminate"),dr(l,g),d=new Sn(l,l.j,d),d.L=2,d.v=Fr(nn(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=d.v,g=!0),g||(d.g=gl(d.j,null),d.g.ea(d.v)),d.F=Date.now(),je(d)}pl(l)}function kn(l){l.g&&(Qo(l),l.g.cancel(),l.g=null)}function Rs(l){kn(l),l.u&&(m.clearTimeout(l.u),l.u=null),ks(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function $n(l){if(!tn(l.h)&&!l.s){l.s=!0;var d=l.Ga;be||ee(),J||(be(),J=!0),le.add(d,l),l.B=0}}function wc(l,d){return nl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(P(l.Ga,l,d),dl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Sn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),N(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(d+=E,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=jr(this,L,d),g=nn(this.I),Ue(g,"RID",l),Ue(g,"CVER",22),this.D&&Ue(g,"X-HTTP-Session-Id",this.D),dr(this,g),U&&(this.O?d="headers="+encodeURIComponent(String(fr(U)))+"&"+d:this.m&&zr(g,this.m,U)),$o(this.h,L),this.Ua&&Ue(g,"TYPE","init"),this.P?(Ue(g,"$req",d),Ue(g,"SID","null"),L.T=!0,vs(L,g,null)):vs(L,g,d),this.G=2}}else this.G==3&&(l?Cs(this,l):this.i.length==0||tn(this.h)||Cs(this))};function Cs(l,d){var g;d?g=d.l:g=l.U++;const E=nn(l.I);Ue(E,"SID",l.K),Ue(E,"RID",g),Ue(E,"AID",l.T),dr(l,E),l.m&&l.o&&zr(E,l.m,l.o),g=new Sn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=jr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),$o(l.h,g),vs(g,E,d)}function dr(l,d){l.H&&De(l.H,function(g,E){Ue(d,E,g)}),l.l&&Or({},function(g,E){Ue(d,E,g)})}function jr(l,d,g){g=Math.min(l.i.length,g);var E=l.l?P(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const Y=["count="+g];U==-1?0<g?(U=L[0].g,Y.push("ofs="+U)):U=0:Y.push("ofs="+U);let Fe=!0;for(let ct=0;ct<g;ct++){let ke=L[ct].g;const yt=L[ct].map;if(ke-=U,0>ke)U=Math.max(0,L[ct].g-100),Fe=!1;else try{cl(yt,Y,"req"+ke+"_")}catch{E&&E(yt)}}if(Fe){E=Y.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,E}function Mi(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;be||ee(),J||(be(),J=!0),le.add(d,l),l.v=0}}function Ps(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(P(l.Fa,l),dl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(P(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),kn(this),fl(this))};function Qo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function fl(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=nn(l.qa);Ue(d,"RID","rpc"),Ue(d,"SID",l.K),Ue(d,"AID",l.T),Ue(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ue(d,"TO",l.ja),Ue(d,"TYPE","xmlhttp"),dr(l,d),l.m&&l.o&&zr(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Fr(nn(d)),g.m=null,g.P=!0,jo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,kn(this),Ps(this),tt(19))};function ks(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ns(l,d){var g=null;if(l.g==d){ks(l),Qo(l),l.g=null;var E=2}else if(zt(l.h,d))g=d.D,rl(l.h,d),E=1;else return;if(l.G!=0){if(d.o)if(E==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;E=Ri(),ut(E,new ms(E,g)),$n(l)}else Mi(l);else if(L=d.s,L==3||L==0&&0<d.X||!(E==1&&wc(l,d)||E==2&&Ps(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),L){case 1:pr(l,5);break;case 4:pr(l,10);break;case 3:pr(l,6);break;default:pr(l,2)}}}function dl(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function pr(l,d){if(l.j.info("Error code "+d),d==2){var g=P(l.fb,l),E=l.Xa;const L=!E;E=new cr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||xi(E,"https"),Fr(E),L?_c(E.toString(),g):ul(E.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(d),pl(l),Rs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function pl(l){if(l.G=0,l.ka=[],l.l){const d=il(l.h);(d.length!=0||l.i.length!=0)&&(H(l.ka,d),H(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function ml(l,d,g){var E=g instanceof cr?nn(g):new cr(g);if(E.g!="")d&&(E.g=d+"."+E.g),Lr(E,E.s);else{var L=m.location;E=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var U=new cr(null);E&&xi(U,E),d&&(U.g=d),L&&Lr(U,L),g&&(U.l=g),E=U}return g=l.D,d=l.ya,g&&d&&Ue(E,g,d),Ue(E,"VER",l.la),dr(l,E),E}function gl(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ge(new hr({eb:g})):new Ge(l.pa),d.Ha(l.J),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xo(){}i=Xo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ds(){}Ds.prototype.g=function(l,d){return new jt(l,d)};function jt(l,d){lt.call(this),this.g=new Ko(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!fe(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!fe(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Hn(this)}K(jt,lt),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){St(this.g)},jt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=xo(l),l=g);d.i.push(new tl(d.Ya++,l)),d.G==3&&$n(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,St(this.g),delete this.g,jt.aa.N.call(this)};function yl(l){bn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}K(yl,bn);function _l(){ps.call(this),this.status=1}K(_l,ps);function Hn(l){this.g=l}K(Hn,Xo),Hn.prototype.ua=function(){ut(this.g,"a")},Hn.prototype.ta=function(l){ut(this.g,new yl(l))},Hn.prototype.sa=function(l){ut(this.g,new _l)},Hn.prototype.ra=function(){ut(this.g,"b")},Ds.prototype.createWebChannel=Ds.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,Ry=function(){return new Ds},Ay=function(){return Ri()},Sy=Un,cf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,vu=ys,Ya.COMPLETE="complete",Iy=Ya,ds.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",lt.prototype.listen=lt.prototype.K,wa=ds,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Ty=Ge}).apply(typeof fu<"u"?fu:typeof self<"u"?self:typeof window<"u"?window:{});const Qm="@firebase/firestore",Xm="4.9.0";/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let wo="12.0.0";/**
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
 */const ts=new Df("@firebase/firestore");function Zs(){return ts.logLevel}function te(i,...e){if(ts.logLevel<=Se.DEBUG){const t=e.map(Of);ts.debug(`Firestore (${wo}): ${i}`,...t)}}function Rr(i,...e){if(ts.logLevel<=Se.ERROR){const t=e.map(Of);ts.error(`Firestore (${wo}): ${i}`,...t)}}function ho(i,...e){if(ts.logLevel<=Se.WARN){const t=e.map(Of);ts.warn(`Firestore (${wo}): ${i}`,...t)}}function Of(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function de(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Cy(i,s,t)}function Cy(i,e,t){let s=`FIRESTORE (${wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Rr(s),new Error(s)}function Me(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||Cy(e,o,s)}function _e(i,e){return i}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Nr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Py{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ST{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class AT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class RT{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Me(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new fi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new fi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new fi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string",31837,{l:s}),new Py(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class CT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class PT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new CT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ym{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Me(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ym(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ym(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function NT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=NT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ae(i,e){return i<e?-1:i>e?1:0}function hf(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Yh(o)===Yh(u)?Ae(o,u):Yh(o)?1:-1}return Ae(i.length,e.length)}const DT=55296,VT=57343;function Yh(i){const e=i.charCodeAt(0);return e>=DT&&e<=VT}function fo(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */const Jm="__name__";class Qn{constructor(e,t,s){t===void 0?t=0:t>e.length&&de(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&de(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Qn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ae(e.length,t.length)}static compareSegments(e,t){const s=Qn.isNumericId(e),o=Qn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Qn.extractNumericId(e).compare(Qn.extractNumericId(t)):hf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hi.fromString(e.substring(4,e.length-2))}}class qe extends Qn{construct(e,t,s){return new qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new qe(t)}static emptyPath(){return new qe([])}}const xT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Qn{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return xT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jm}static keyField(){return new Pt([Jm])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new oe($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new oe($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new oe($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new oe($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(qe.fromString(e))}static fromName(e){return new ue(qe.fromString(e).popFirst(5))}static empty(){return new ue(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new qe(e.slice()))}}/**
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
 */function ky(i,e,t){if(!t)throw new oe($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function OT(i,e,t,s){if(e===!0&&s===!0)throw new oe($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Zm(i){if(!ue.isDocumentKey(i))throw new oe($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function eg(i){if(ue.isDocumentKey(i))throw new oe($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ny(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Mf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":de(12329,{type:typeof i})}function ns(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new oe($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mf(i);throw new oe($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function at(i,e){const t={typeString:i};return e&&(t.value=e),t}function ja(i,e){if(!Ny(i))throw new oe($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new oe($.INVALID_ARGUMENT,t);return!0}/**
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
 */const tg=-62135596800,ng=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ng);return new We(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<tg)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ng}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ja(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:at("string",We._jsonSchemaVersion),seconds:at("number"),nanoseconds:at("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new We(0,0))}static max(){return new ye(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Va=-1;function LT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(s===1e9?new We(t+1,0):new We(t,s));return new pi(o,ue.empty(),e)}function MT(i){return new pi(i.readTime,i.key,Va)}class pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new pi(ye.min(),ue.empty(),Va)}static max(){return new pi(ye.max(),ue.empty(),Va)}}function FT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:Ae(i.largestBatchId,e.largestBatchId))}/**
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
 */const bT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function To(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==bT)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,s)=>{t(e)})}static reject(e){return new j((t,s)=>{s(e)})}static waitFor(e){return new j((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=j.resolve(!1);for(const s of e)t=t.next(o=>o?j.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new j((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new j((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function zT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Io(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Xu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xu.ce=-1;/**
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
 */const Ff=-1;function Yu(i){return i==null}function Du(i){return i===0&&1/i==-1/0}function jT(i){return typeof i=="number"&&Number.isInteger(i)&&!Du(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Dy="";function BT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=rg(e)),e=$T(i.get(t),e);return rg(e)}function $T(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case Dy:t+="";break;default:t+=u}}return t}function rg(i){return i+Dy+""}/**
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
 */function ig(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ei(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Vy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Ye{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new Ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new du(this.root,e,this.comparator,!1)}getReverseIterator(){return new du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new du(this.root,e,this.comparator,!0)}}class du{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sg(this.data.getIterator())}getIteratorFrom(e){return new sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new un([])}unionWith(e){let t=new mt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class xy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new xy("Invalid base64 string: "+u):u}}(e);return new kt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const HT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(i){if(Me(!!i,39018),typeof i=="string"){let e=0;const t=HT.exec(i);if(Me(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function gi(i){return typeof i=="string"?kt.fromBase64String(i):kt.fromUint8Array(i)}/**
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
 */const Oy="server_timestamp",Ly="__type__",My="__previous_value__",Fy="__local_write_time__";function bf(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[Ly])==null?void 0:s.stringValue)===Oy}function Ju(i){const e=i.mapValue.fields[My];return bf(e)?Ju(e):e}function xa(i){const e=mi(i.mapValue.fields[Fy].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class qT{constructor(e,t,s,o,u,h,m,y,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=w}}const Vu="(default)";class Oa{constructor(e,t){this.projectId=e,this.database=t||Vu}static empty(){return new Oa("","")}get isDefaultDatabase(){return this.database===Vu}isEqual(e){return e instanceof Oa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const by="__type__",WT="__max__",pu={mapValue:{}},Uy="__vector__",xu="value";function yi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?bf(i)?4:KT(i)?9007199254740991:GT(i)?10:11:de(28295,{value:i})}function rr(i,e){if(i===e)return!0;const t=yi(i);if(t!==yi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return xa(i).isEqual(xa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=mi(o.timestampValue),m=mi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return gi(o.bytesValue).isEqual(gi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Du(h)===Du(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return fo(i.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(ig(h)!==ig(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!rr(h[y],m[y])))return!1;return!0}(i,e);default:return de(52216,{left:i})}}function La(i,e){return(i.values||[]).find(t=>rr(t,e))!==void 0}function po(i,e){if(i===e)return 0;const t=yi(i),s=yi(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return og(i.timestampValue,e.timestampValue);case 4:return og(xa(i),xa(e));case 5:return hf(i.stringValue,e.stringValue);case 6:return function(u,h){const m=gi(u),y=gi(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Ae(m[v],y[v]);if(w!==0)return w}return Ae(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Ae(rt(u.latitude),rt(h.latitude));return m!==0?m:Ae(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return ag(i.arrayValue,e.arrayValue);case 10:return function(u,h){var P,z,K,X;const m=u.fields||{},y=h.fields||{},v=(P=m[xu])==null?void 0:P.arrayValue,w=(z=y[xu])==null?void 0:z.arrayValue,C=Ae(((K=v==null?void 0:v.values)==null?void 0:K.length)||0,((X=w==null?void 0:w.values)==null?void 0:X.length)||0);return C!==0?C:ag(v,w)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===pu.mapValue&&h===pu.mapValue)return 0;if(u===pu.mapValue)return 1;if(h===pu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let C=0;C<y.length&&C<w.length;++C){const P=hf(y[C],w[C]);if(P!==0)return P;const z=po(m[y[C]],v[w[C]]);if(z!==0)return z}return Ae(y.length,w.length)}(i.mapValue,e.mapValue);default:throw de(23264,{he:t})}}function og(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ae(i,e);const t=mi(i),s=mi(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function ag(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=po(t[o],s[o]);if(u)return u}return Ae(t.length,s.length)}function mo(i){return ff(i)}function ff(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=mi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return gi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ue.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ff(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ff(t.fields[h])}`;return o+"}"}(i.mapValue):de(61005,{value:i})}function Eu(i){switch(yi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ju(i);return e?16+Eu(e):16;case 5:return 2*i.stringValue.length;case 6:return gi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Eu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return Ei(s.fields,(u,h)=>{o+=u.length+Eu(h)}),o}(i.mapValue);default:throw de(13486,{value:i})}}function df(i){return!!i&&"integerValue"in i}function Uf(i){return!!i&&"arrayValue"in i}function lg(i){return!!i&&"nullValue"in i}function ug(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function wu(i){return!!i&&"mapValue"in i}function GT(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[by])==null?void 0:s.stringValue)===Uy}function Aa(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ei(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Aa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Aa(i.arrayValue.values[t]);return e}return{...i}}function KT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===WT}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!wu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Aa(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Aa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());wu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];wu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ei(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Zt(Aa(this.value))}}function zy(i){const e=[];return Ei(i.fields,(t,s)=>{const o=new Pt([t]);if(wu(s)){const u=zy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new un(e)}/**
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
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,ye.min(),ye.min(),ye.min(),Zt.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,ye.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,ye.min(),ye.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,ye.min(),ye.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ou{constructor(e,t){this.position=e,this.inclusive=t}}function cg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=po(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function hg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!rr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Lu{constructor(e,t="asc"){this.field=e,this.dir=t}}function QT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class jy{}class pt extends jy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new YT(e,t,s):t==="array-contains"?new eI(e,s):t==="in"?new tI(e,s):t==="not-in"?new nI(e,s):t==="array-contains-any"?new rI(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new JT(e,s):new ZT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(po(t,this.value)):t!==null&&yi(this.value)===yi(t)&&this.matchesComparison(po(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ir extends jy{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ir(e,t)}matches(e){return By(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function By(i){return i.op==="and"}function $y(i){return XT(i)&&By(i)}function XT(i){for(const e of i.filters)if(e instanceof ir)return!1;return!0}function pf(i){if(i instanceof pt)return i.field.canonicalString()+i.op.toString()+mo(i.value);if($y(i))return i.filters.map(e=>pf(e)).join(",");{const e=i.filters.map(t=>pf(t)).join(",");return`${i.op}(${e})`}}function Hy(i,e){return i instanceof pt?function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)}(i,e):i instanceof ir?function(s,o){return o instanceof ir&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&Hy(h,o.filters[m]),!0):!1}(i,e):void de(19439)}function qy(i){return i instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${mo(t.value)}`}(i):i instanceof ir?function(t){return t.op.toString()+" {"+t.getFilters().map(qy).join(" ,")+"}"}(i):"Filter"}class YT extends pt{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class JT extends pt{constructor(e,t){super(e,"in",t),this.keys=Wy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ZT extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Wy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Wy(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>ue.fromName(s.referenceValue))}class eI extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Uf(t)&&La(t.arrayValue,this.value)}}class tI extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&La(this.value.arrayValue,t)}}class nI extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(La(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!La(this.value.arrayValue,t)}}class rI extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Uf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>La(this.value.arrayValue,s))}}/**
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
 */class iI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function fg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new iI(i,e,t,s,o,u,h)}function zf(i){const e=_e(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>pf(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Yu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>mo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>mo(s)).join(",")),e.Te=t}return e.Te}function jf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!QT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Hy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!hg(i.startAt,e.startAt)&&hg(i.endAt,e.endAt)}function mf(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Zu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function sI(i,e,t,s,o,u,h,m){return new Zu(i,e,t,s,o,u,h,m)}function Gy(i){return new Zu(i)}function dg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function oI(i){return i.collectionGroup!==null}function Ra(i){const e=_e(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new mt(Pt.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Lu(u,s))}),t.has(Pt.keyField().canonicalString())||e.Ie.push(new Lu(Pt.keyField(),s))}return e.Ie}function Yn(i){const e=_e(i);return e.Ee||(e.Ee=aI(e,Ra(i))),e.Ee}function aI(i,e){if(i.limitType==="F")return fg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Lu(o.field,u)});const t=i.endAt?new Ou(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ou(i.startAt.position,i.startAt.inclusive):null;return fg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function gf(i,e,t){return new Zu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ec(i,e){return jf(Yn(i),Yn(e))&&i.limitType===e.limitType}function Ky(i){return`${zf(Yn(i))}|lt:${i.limitType}`}function eo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>qy(o)).join(", ")}]`),Yu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>mo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>mo(o)).join(",")),`Target(${s})`}(Yn(i))}; limitType=${i.limitType})`}function tc(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Ra(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const v=cg(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,Ra(s),o)||s.endAt&&!function(h,m,y){const v=cg(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,Ra(s),o))}(i,e)}function lI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Qy(i){return(e,t)=>{let s=!1;for(const o of Ra(i)){const u=uI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function uI(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?po(y,v):de(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return de(19790,{direction:i.dir})}}/**
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
 */class ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ei(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Vy(this.inner)}size(){return this.innerSize}}/**
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
 */const cI=new Ye(ue.comparator);function Cr(){return cI}const Xy=new Ye(ue.comparator);function Ta(...i){let e=Xy;for(const t of i)e=e.insert(t.key,t);return e}function Yy(i){let e=Xy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Yi(){return Ca()}function Jy(){return Ca()}function Ca(){return new ss(i=>i.toString(),(i,e)=>i.isEqual(e))}const hI=new Ye(ue.comparator),fI=new mt(ue.comparator);function Re(...i){let e=fI;for(const t of i)e=e.add(t);return e}const dI=new mt(Ae);function pI(){return dI}/**
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
 */function Bf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Du(e)?"-0":e}}function Zy(i){return{integerValue:""+i}}function mI(i,e){return jT(e)?Zy(e):Bf(i,e)}/**
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
 */class nc{constructor(){this._=void 0}}function gI(i,e,t){return i instanceof Mu?function(o,u){const h={fields:{[Ly]:{stringValue:Oy},[Fy]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&bf(u)&&(u=Ju(u)),u&&(h.fields[My]=u),{mapValue:h}}(t,e):i instanceof Ma?t_(i,e):i instanceof Fa?n_(i,e):function(o,u){const h=e_(o,u),m=pg(h)+pg(o.Ae);return df(h)&&df(o.Ae)?Zy(m):Bf(o.serializer,m)}(i,e)}function yI(i,e,t){return i instanceof Ma?t_(i,e):i instanceof Fa?n_(i,e):t}function e_(i,e){return i instanceof Fu?function(s){return df(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Mu extends nc{}class Ma extends nc{constructor(e){super(),this.elements=e}}function t_(i,e){const t=r_(e);for(const s of i.elements)t.some(o=>rr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Fa extends nc{constructor(e){super(),this.elements=e}}function n_(i,e){let t=r_(e);for(const s of i.elements)t=t.filter(o=>!rr(o,s));return{arrayValue:{values:t}}}class Fu extends nc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function pg(i){return rt(i.integerValue||i.doubleValue)}function r_(i){return Uf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function _I(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Ma&&o instanceof Ma||s instanceof Fa&&o instanceof Fa?fo(s.elements,o.elements,rr):s instanceof Fu&&o instanceof Fu?rr(s.Ae,o.Ae):s instanceof Mu&&o instanceof Mu}(i.transform,e.transform)}class vI{constructor(e,t){this.version=e,this.transformResults=t}}class Fn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class rc{}function i_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new $f(i.key,Fn.none()):new Ba(i.key,i.data,Fn.none());{const t=i.data,s=Zt.empty();let o=new mt(Pt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new wi(i.key,s,new un(o.toArray()),Fn.none())}}function EI(i,e,t){i instanceof Ba?function(o,u,h){const m=o.value.clone(),y=gg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof wi?function(o,u,h){if(!Tu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=gg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(s_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Pa(i,e,t,s){return i instanceof Ba?function(u,h,m,y){if(!Tu(u.precondition,h))return m;const v=u.value.clone(),w=yg(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof wi?function(u,h,m,y){if(!Tu(u.precondition,h))return m;const v=yg(u.fieldTransforms,y,h),w=h.data;return w.setAll(s_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(C=>C.field))}(i,e,t,s):function(u,h,m){return Tu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function wI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=e_(s.transform,o||null);u!=null&&(t===null&&(t=Zt.empty()),t.set(s.field,u))}return t||null}function mg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&fo(s,o,(u,h)=>_I(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ba extends rc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class wi extends rc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function s_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function gg(i,e,t){const s=new Map;Me(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,yI(h,m,t[o]))}return s}function yg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,gI(u,h,e))}return s}class $f extends rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TI extends rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class II{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&EI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Pa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Pa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Jy();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=i_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(ye.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Re())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(t,s)=>mg(t,s))&&fo(this.baseMutations,e.baseMutations,(t,s)=>mg(t,s))}}class Hf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Me(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return hI}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Hf(e,t,s,o)}}/**
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
 */class SI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,Ne;function RI(i){switch(i){case $.OK:return de(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return de(15467,{code:i})}}function o_(i){if(i===void 0)return Rr("GRPC error has no .code"),$.UNKNOWN;switch(i){case ot.OK:return $.OK;case ot.CANCELLED:return $.CANCELLED;case ot.UNKNOWN:return $.UNKNOWN;case ot.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ot.INTERNAL:return $.INTERNAL;case ot.UNAVAILABLE:return $.UNAVAILABLE;case ot.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ot.NOT_FOUND:return $.NOT_FOUND;case ot.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ot.ABORTED:return $.ABORTED;case ot.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ot.DATA_LOSS:return $.DATA_LOSS;default:return de(39323,{code:i})}}(Ne=ot||(ot={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CI(){return new TextEncoder}/**
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
 */const PI=new hi([4294967295,4294967295],0);function _g(i){const e=CI().encode(i),t=new wy;return t.update(e),new Uint8Array(t.digest())}function vg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new hi([t,s],0),new hi([o,u],0)]}class qf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ia(`Invalid padding: ${t}`);if(s<0)throw new Ia(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ia(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ia(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=hi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(hi.fromNumber(s)));return o.compare(PI)===1&&(o=new hi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=_g(e),[s,o]=vg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new qf(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.ge===0)return;const t=_g(e),[s,o]=vg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ic{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ic(ye.min(),o,new Ye(Ae),Cr(),Re())}}class $a{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new $a(s,t,Re(),Re(),Re())}}/**
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
 */class Iu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class a_{constructor(e,t){this.targetId=e,this.Ce=t}}class l_{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Eg{constructor(){this.ve=0,this.Fe=wg(),this.Me=kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Re(),t=Re(),s=Re();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:de(38017,{changeType:u})}}),new $a(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=wg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Me(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class kI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cr(),this.Je=mu(),this.He=mu(),this.Ye=new Ye(Ae)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:de(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(mf(u))if(s===0){const h=new ue(u.path);this.et(t,h,bt.newNoDocument(h,ye.min()))}else Me(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=gi(s).toUint8Array()}catch(y){if(y instanceof xy)return ho("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new qf(h,o,u)}catch(y){return ho(y instanceof Ia?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const m=this.ot(h);if(m){if(u.current&&mf(m.target)){const y=new ue(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,bt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Re();this.He.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new ic(e,t,this.Ye,this.je,s);return this.je=Cr(),this.Je=mu(),this.He=mu(),this.Ye=new Ye(Ae),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Eg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new mt(Ae),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new mt(Ae),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Eg),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function mu(){return new Ye(ue.comparator)}function wg(){return new Ye(ue.comparator)}const NI={asc:"ASCENDING",desc:"DESCENDING"},DI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VI={and:"AND",or:"OR"};class xI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yf(i,e){return i.useProto3Json||Yu(e)?e:{value:e}}function bu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function u_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function OI(i,e){return bu(i,e.toTimestamp())}function Jn(i){return Me(!!i,49232),ye.fromTimestamp(function(t){const s=mi(t);return new We(s.seconds,s.nanos)}(i))}function Wf(i,e){return _f(i,e).canonicalString()}function _f(i,e){const t=function(o){return new qe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function c_(i){const e=qe.fromString(i);return Me(m_(e),10190,{key:e.toString()}),e}function vf(i,e){return Wf(i.databaseId,e.path)}function Jh(i,e){const t=c_(e);if(t.get(1)!==i.databaseId.projectId)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(f_(t))}function h_(i,e){return Wf(i.databaseId,e)}function LI(i){const e=c_(i);return e.length===4?qe.emptyPath():f_(e)}function Ef(i){return new qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function f_(i){return Me(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Tg(i,e,t){return{name:vf(i,e),fields:t.value.mapValue.fields}}function MI(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:de(39313,{state:v})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(Me(w===void 0||typeof w=="string",58123),kt.fromBase64String(w||"")):(Me(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),kt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?$.UNKNOWN:o_(v.code);return new oe(w,v.message||"")}(h);t=new l_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Jh(i,s.document.name),u=Jn(s.document.updateTime),h=s.document.createTime?Jn(s.document.createTime):ye.min(),m=new Zt({mapValue:{fields:s.document.fields}}),y=bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Iu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Jh(i,s.document),u=s.readTime?Jn(s.readTime):ye.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Iu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Jh(i,s.document),u=s.removedTargetIds||[];t=new Iu([],u,o,null)}else{if(!("filter"in e))return de(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new AI(o,u),m=s.targetId;t=new a_(m,h)}}return t}function FI(i,e){let t;if(e instanceof Ba)t={update:Tg(i,e.key,e.value)};else if(e instanceof $f)t={delete:vf(i,e.key)};else if(e instanceof wi)t={update:Tg(i,e.key,e.data),updateMask:WI(e.fieldMask)};else{if(!(e instanceof TI))return de(16599,{Vt:e.type});t={verify:vf(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Mu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ma)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Fa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Fu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw de(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:OI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:de(27497)}(i,e.precondition)),t}function bI(i,e){return i&&i.length>0?(Me(e!==void 0,14353),i.map(t=>function(o,u){let h=o.updateTime?Jn(o.updateTime):Jn(u);return h.isEqual(ye.min())&&(h=Jn(u)),new vI(h,o.transformResults||[])}(t,e))):[]}function UI(i,e){return{documents:[h_(i,e.path)]}}function zI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=h_(i,o);const u=function(v){if(v.length!==0)return p_(ir.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(P){return{field:to(P.field),direction:$I(P.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=yf(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ft:t,parent:o}}function jI(i){let e=LI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Me(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(C){const P=d_(C);return P instanceof ir&&$y(P)?P.getFilters():[P]}(t.where));let h=[];t.orderBy&&(h=function(C){return C.map(P=>function(K){return new Lu(no(K.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(K.direction))}(P))}(t.orderBy));let m=null;t.limit&&(m=function(C){let P;return P=typeof C=="object"?C.value:C,Yu(P)?null:P}(t.limit));let y=null;t.startAt&&(y=function(C){const P=!!C.before,z=C.values||[];return new Ou(z,P)}(t.startAt));let v=null;return t.endAt&&(v=function(C){const P=!C.before,z=C.values||[];return new Ou(z,P)}(t.endAt)),sI(e,o,h,u,m,"F",y,v)}function BI(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function d_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return pt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=no(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}}(i):i.fieldFilter!==void 0?function(t){return pt.create(no(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return ir.create(t.compositeFilter.filters.map(s=>d_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return de(1026)}}(t.compositeFilter.op))}(i):de(30097,{filter:i})}function $I(i){return NI[i]}function HI(i){return DI[i]}function qI(i){return VI[i]}function to(i){return{fieldPath:i.canonicalString()}}function no(i){return Pt.fromServerFormat(i.fieldPath)}function p_(i){return i instanceof pt?function(t){if(t.op==="=="){if(ug(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NAN"}};if(lg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ug(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NAN"}};if(lg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(t.field),op:HI(t.op),value:t.value}}}(i):i instanceof ir?function(t){const s=t.getFilters().map(o=>p_(o));return s.length===1?s[0]:{compositeFilter:{op:qI(t.op),filters:s}}}(i):de(54877,{filter:i})}function WI(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function m_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ai{constructor(e,t,s,o,u=ye.min(),h=ye.min(),m=kt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GI{constructor(e){this.yt=e}}function KI(i){const e=jI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?gf(e,e.limit,"L"):e}/**
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
 */class QI{constructor(){this.Cn=new XI}addToCollectionParentIndex(e,t){return this.Cn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(pi.min())}updateCollectionGroup(e,t,s){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class XI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(qe.comparator)).toArray()}}/**
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
 */const Ig={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},g_=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(g_,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class go{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new go(0)}static cr(){return new go(-1)}}/**
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
 */const Sg="LruGarbageCollector",YI=1048576;function Ag([i,e],[t,s]){const o=Ae(i,t);return o===0?Ae(e,s):o}class JI{constructor(e){this.Ir=e,this.buffer=new mt(Ag),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ag(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(Sg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Io(t)?te(Sg,"Ignoring IndexedDB error during garbage collection: ",t):await To(t)}await this.Vr(3e5)})}}class e0{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return j.resolve(Xu.ce);const s=new JI(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Ig)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ig):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o))).next(C=>(s=C,m=Date.now(),this.removeTargets(e,s,t))).next(C=>(u=C,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(C=>(v=Date.now(),Zs()<=Se.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${C} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C})))}}function t0(i,e){return new e0(i,e)}/**
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
 */class n0{constructor(){this.changes=new ss(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?j.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class r0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class i0{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Pa(s.mutation,o,un.empty(),We.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Re()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Re()){const o=Yi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Ta();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Yi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Re()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Cr();const h=Ca(),m=function(){return Ca()}();return t.forEach((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof wi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Pa(w.mutation,v,w.mutation.getFieldMask(),We.now())):h.set(v.key,un.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>m.set(v,new r0(w,h.get(v)??null))),m))}recalculateAndSaveOverlays(e,t){const s=Ca();let o=new Ye((h,m)=>h-m),u=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||un.empty();w=m.applyToLocalView(v,w),s.set(y,w);const C=(o.get(m.batchId)||Re()).add(y);o=o.insert(m.batchId,C)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,C=Jy();w.forEach(P=>{if(!u.has(P)){const z=i_(t.get(P),s.get(P));z!==null&&C.set(P,z),u=u.add(P)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,C))}return j.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):j.resolve(Yi());let m=Va,y=u;return h.next(v=>j.forEach(v,(w,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(w)?j.resolve():this.remoteDocumentCache.getEntry(e,w).next(P=>{y=y.insert(w,P)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,Re())).next(w=>({batchId:m,changes:Yy(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next(s=>{let o=Ta();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ta();return this.indexManager.getCollectionParents(e,u).next(m=>j.forEach(m,y=>{const v=function(C,P){return new Zu(P,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((C,P)=>{h=h.insert(C,P)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let m=Ta();return h.forEach((y,v)=>{const w=u.get(y);w!==void 0&&Pa(w.mutation,v,un.empty(),We.now()),tc(t,v)&&(m=m.insert(y,v))}),m})}}/**
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
 */class s0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return j.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Jn(o.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:KI(o.bundledQuery),readTime:Jn(o.readTime)}}(t)),j.resolve()}}/**
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
 */class o0{constructor(){this.overlays=new Ye(ue.comparator),this.qr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Yi();return j.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),j.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),j.resolve()}getOverlaysForCollection(e,t,s){const o=Yi(),u=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return j.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ye((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Yi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Yi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return j.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new SI(t,s));let u=this.qr.get(t);u===void 0&&(u=Re(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class a0{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
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
 */class Gf{constructor(){this.Qr=new mt(wt.$r),this.Ur=new mt(wt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new wt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new wt(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new ue(new qe([])),s=new wt(t,e),o=new wt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ue(new qe([])),s=new wt(t,e),o=new wt(t,e+1);let u=Re();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new wt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ue.comparator(e.key,t.key)||Ae(e.Yr,t.Yr)}static Kr(e,t){return Ae(e.Yr,t.Yr)||ue.comparator(e.key,t.key)}}/**
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
 */class l0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new mt(wt.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new II(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new wt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return j.resolve(h)}lookupMutationBatch(e,t){return j.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return j.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Ff:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const m=this.Xr(h.Yr);u.push(m)}),j.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(Ae);return t.forEach(o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],m=>{s=s.add(m.Yr)})}),j.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new wt(new ue(u),0);let m=new mt(Ae);return this.Zr.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Yr)),!0)},h),j.resolve(this.ti(m))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Me(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return j.forEach(t.mutations,o=>{const u=new wt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new wt(t,0),o=this.Zr.firstAfterOrEqual(s);return j.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class u0{constructor(e){this.ri=e,this.docs=function(){return new Ye(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return j.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=Cr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),j.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Cr();const h=t.path,m=new ue(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||FT(MT(w),s)<=0||(o.has(w.key)||tc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return j.resolve(u)}getAllFromCollectionGroup(e,t,s,o){de(9500)}ii(e,t){return j.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new c0(this)}getSize(e){return j.resolve(this.size)}}class c0 extends n0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),j.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class h0{constructor(e){this.persistence=e,this.si=new ss(t=>zf(t),jf),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new Gf,this.targetCount=0,this.ai=go.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),j.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new go(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Pr(t),j.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),j.waitFor(u).next(()=>o)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return j.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),j.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),j.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return j.resolve(s)}containsKey(e,t){return j.resolve(this._i.containsKey(t))}}/**
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
 */class y_{constructor(e,t){this.ui={},this.overlays={},this.ci=new Xu(0),this.li=!1,this.li=!0,this.hi=new a0,this.referenceDelegate=e(this),this.Pi=new h0(this),this.indexManager=new QI,this.remoteDocumentCache=function(o){return new u0(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new GI(t),this.Ii=new s0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new o0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new l0(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new f0(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return j.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class f0 extends UT{constructor(e){super(),this.currentSequenceNumber=e}}class Kf{constructor(e){this.persistence=e,this.Ri=new Gf,this.Vi=null}static mi(e){return new Kf(e)}get fi(){if(this.Vi)return this.Vi;throw de(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),j.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),j.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,s=>{const o=ue.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,ye.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return j.or([()=>j.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Uu{constructor(e,t){this.persistence=e,this.pi=new ss(s=>BT(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=t0(this,t)}static mi(e,t){return new Uu(e,t)}Ei(){}di(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return j.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?j.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(m=>{m||(s++,u.removeEntry(h,ye.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),j.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Eu(e.data.value)),t}br(e,t,s){return j.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return j.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Qf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Re(),o=Re();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Qf(e,t.fromCache,s,o)}}/**
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
 */class d0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class p0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return ow()?8:zT(Ut())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new d0;return this.Ss(e,t,h).next(m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(Zs()<=Se.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Zs()<=Se.DEBUG&&te("QueryEngine","Query:",eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Zs()<=Se.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(t))):j.resolve())}ys(e,t){if(dg(t))return j.resolve(null);let s=Yn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=gf(t,null,"F"),s=Yn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Re(...u);return this.ps.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.Ds(t,m);return this.Cs(t,v,h,y.readTime)?this.ys(e,gf(t,null,"F")):this.vs(e,v,t,y)}))})))}ws(e,t,s,o){return dg(t)||o.isEqual(ye.min())?j.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?j.resolve(null):(Zs()<=Se.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(t)),this.vs(e,h,t,LT(o,Va)).next(m=>m))})}Ds(e,t){let s=new mt(Qy(e));return t.forEach((o,u)=>{tc(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Zs()<=Se.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",eo(t)),this.ps.getDocumentsMatchingQuery(e,t,pi.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const Xf="LocalStore",m0=3e8;class g0{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new Ye(Ae),this.xs=new ss(u=>zf(u),jf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function y0(i,e,t,s){return new g0(i,e,t,s)}async function __(i,e){const t=_e(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Re();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(v=>({Ls:v,removedBatchIds:h,addedBatchIds:m}))})})}function _0(i,e){const t=_e(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(m,y,v,w){const C=v.batch,P=C.keys();let z=j.resolve();return P.forEach(K=>{z=z.next(()=>w.getEntry(y,K)).next(X=>{const H=v.docVersions.get(K);Me(H!==null,48541),X.version.compareTo(H)<0&&(C.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),w.addEntry(X)))})}),z.next(()=>m.mutationQueue.removeMutationBatch(y,C))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=Re();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function v_(i){const e=_e(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function v0(i,e){const t=_e(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach((w,C)=>{const P=o.get(C);if(!P)return;m.push(t.Pi.removeMatchingKeys(u,w.removedDocuments,C).next(()=>t.Pi.addMatchingKeys(u,w.addedDocuments,C)));let z=P.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?z=z.withResumeToken(kt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(C,z),function(X,H,ve){return X.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=m0?!0:ve.addedDocuments.size+ve.modifiedDocuments.size+ve.removedDocuments.size>0}(P,z,w)&&m.push(t.Pi.updateTargetData(u,z))});let y=Cr(),v=Re();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(E0(u,h,e.documentUpdates).next(w=>{y=w.ks,v=w.qs})),!s.isEqual(ye.min())){const w=t.Pi.getLastRemoteSnapshotVersion(u).next(C=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return j.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.Ms=o,u))}function E0(i,e,t){let s=Re(),o=Re();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Cr();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(ye.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te(Xf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{ks:h,qs:o}})}function w0(i,e){const t=_e(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ff),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function T0(i,e){const t=_e(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,j.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new ai(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function wf(i,e,t){const s=_e(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Io(h))throw h;te(Xf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Rg(i,e,t){const s=_e(i);let o=ye.min(),u=Re();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,w){const C=_e(y),P=C.xs.get(w);return P!==void 0?j.resolve(C.Ms.get(P)):C.Pi.getTargetData(v,w)}(s,h,Yn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:ye.min(),t?u:Re())).next(m=>(I0(s,lI(e),m),{documents:m,Qs:u})))}function I0(i,e,t){let s=i.Os.get(e)||ye.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Os.set(e,s)}class Cg{constructor(){this.activeTargetIds=pI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class S0{constructor(){this.Mo=new Cg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Cg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class A0{Oo(e){}shutdown(){}}/**
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
 */const Pg="ConnectivityMonitor";class kg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(Pg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(Pg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gu=null;function Tf(){return gu===null?gu=function(){return 268435456+Math.round(2147483648*Math.random())}():gu++,"0x"+gu.toString(16)}/**
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
 */const Zh="RestConnection",R0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class C0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Vu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Tf(),m=this.zo(e,t.toUriEncodedString());te(Zh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:v}=new URL(m),w=vo(v);return this.Jo(e,m,y,s,w).then(C=>(te(Zh,`Received RPC '${e}' ${h}: `,C),C),C=>{throw ho(Zh,`RPC '${e}' ${h} failed with error: `,C,"url: ",m,"request:",s),C})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=R0[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class P0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Mt="WebChannelConnection";class k0 extends C0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Tf();return new Promise((m,y)=>{const v=new Ty;v.setWithCredentials(!0),v.listenOnce(Iy.COMPLETE,()=>{try{switch(v.getLastErrorCode()){case vu.NO_ERROR:const C=v.getResponseJson();te(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(C)),m(C);break;case vu.TIMEOUT:te(Mt,`RPC '${e}' ${h} timed out`),y(new oe($.DEADLINE_EXCEEDED,"Request time out"));break;case vu.HTTP_ERROR:const P=v.getStatus();if(te(Mt,`RPC '${e}' ${h} failed with status:`,P,"response text:",v.getResponseText()),P>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const K=z==null?void 0:z.error;if(K&&K.status&&K.message){const X=function(ve){const fe=ve.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(fe)>=0?fe:$.UNKNOWN}(K.status);y(new oe(X,K.message))}else y(new oe($.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new oe($.UNAVAILABLE,"Connection failed."));break;default:de(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{te(Mt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);te(Mt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)})}T_(e,t,s){const o=Tf(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ry(),m=Ay(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");te(Mt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const C=h.createWebChannel(w,y);this.I_(C);let P=!1,z=!1;const K=new P0({Yo:H=>{z?te(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(P||(te(Mt,`Opening RPC '${e}' stream ${o} transport.`),C.open(),P=!0),te(Mt,`RPC '${e}' stream ${o} sending:`,H),C.send(H))},Zo:()=>C.close()}),X=(H,ve,fe)=>{H.listen(ve,ge=>{try{fe(ge)}catch(Ie){setTimeout(()=>{throw Ie},0)}})};return X(C,wa.EventType.OPEN,()=>{z||(te(Mt,`RPC '${e}' stream ${o} transport opened.`),K.o_())}),X(C,wa.EventType.CLOSE,()=>{z||(z=!0,te(Mt,`RPC '${e}' stream ${o} transport closed`),K.a_(),this.E_(C))}),X(C,wa.EventType.ERROR,H=>{z||(z=!0,ho(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),K.a_(new oe($.UNAVAILABLE,"The operation could not be completed")))}),X(C,wa.EventType.MESSAGE,H=>{var ve;if(!z){const fe=H.data[0];Me(!!fe,16349);const ge=fe,Ie=(ge==null?void 0:ge.error)||((ve=ge[0])==null?void 0:ve.error);if(Ie){te(Mt,`RPC '${e}' stream ${o} received error:`,Ie);const Ze=Ie.status;let De=function(A){const N=ot[A];if(N!==void 0)return o_(N)}(Ze),D=Ie.message;De===void 0&&(De=$.INTERNAL,D="Unknown error status: "+Ze+" with message "+Ie.message),z=!0,K.a_(new oe(De,D)),C.close()}else te(Mt,`RPC '${e}' stream ${o} received:`,fe),K.u_(fe)}}),X(m,Sy.STAT_EVENT,H=>{H.stat===cf.PROXY?te(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===cf.NOPROXY&&te(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{K.__()},0),K}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function ef(){return typeof document<"u"?document:null}/**
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
 */function sc(i){return new xI(i,!0)}/**
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
 */class E_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ng="PersistentStream";class w_{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new E_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new oe($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return te(Ng,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(te(Ng,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class N0 extends w_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=MI(this.serializer,e),s=function(u){if(!("targetChange"in u))return ye.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?Jn(h.readTime):ye.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ef(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=mf(y)?{documents:UI(u,y)}:{query:zI(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=u_(u,h.resumeToken);const v=yf(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=bu(u,h.snapshotVersion.toTimestamp());const v=yf(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=BI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ef(this.serializer),t.removeTarget=e,this.q_(t)}}class D0 extends w_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=bI(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ef(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>FI(this.serializer,s))};this.q_(t)}}/**
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
 */class V0{}class x0 extends V0{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,_f(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe($.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Ho(e,_f(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe($.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class O0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rr(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const rs="RemoteStore";class L0{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{os(this)&&(te(rs,"Restarting streams for network reachability change."),await async function(y){const v=_e(y);v.Ea.add(4),await Ha(v),v.Ra.set("Unknown"),v.Ea.delete(4),await oc(v)}(this))})}),this.Ra=new O0(s,o)}}async function oc(i){if(os(i))for(const e of i.da)await e(!0)}async function Ha(i){for(const e of i.da)await e(!1)}function T_(i,e){const t=_e(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ed(t)?Zf(t):So(t).O_()&&Jf(t,e))}function Yf(i,e){const t=_e(i),s=So(t);t.Ia.delete(e),s.O_()&&I_(t,e),t.Ia.size===0&&(s.O_()?s.L_():os(t)&&t.Ra.set("Unknown"))}function Jf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}So(i).Y_(e)}function I_(i,e){i.Va.Ue(e),So(i).Z_(e)}function Zf(i){i.Va=new kI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),So(i).start(),i.Ra.ua()}function ed(i){return os(i)&&!So(i).x_()&&i.Ia.size>0}function os(i){return _e(i).Ea.size===0}function S_(i){i.Va=void 0}async function M0(i){i.Ra.set("Online")}async function F0(i){i.Ia.forEach((e,t)=>{Jf(i,e)})}async function b0(i,e){S_(i),ed(i)?(i.Ra.ha(e),Zf(i)):i.Ra.set("Unknown")}async function U0(i,e,t){if(i.Ra.set("Online"),e instanceof l_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))}(i,e)}catch(s){te(rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zu(i,s)}else if(e instanceof Iu?i.Va.Ze(e):e instanceof a_?i.Va.st(e):i.Va.tt(e),!t.isEqual(ye.min()))try{const s=await v_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ia.get(v);w&&u.Ia.set(v,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const w=u.Ia.get(y);if(!w)return;u.Ia.set(y,w.withResumeToken(kt.EMPTY_BYTE_STRING,w.snapshotVersion)),I_(u,y);const C=new ai(w.target,y,v,w.sequenceNumber);Jf(u,C)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te(rs,"Failed to raise snapshot:",s),await zu(i,s)}}async function zu(i,e,t){if(!Io(e))throw e;i.Ea.add(1),await Ha(i),i.Ra.set("Offline"),t||(t=()=>v_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te(rs,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await oc(i)})}function A_(i,e){return e().catch(t=>zu(i,t,e))}async function ac(i){const e=_e(i),t=_i(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ff;for(;z0(e);)try{const o=await w0(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,j0(e,o)}catch(o){await zu(e,o)}R_(e)&&C_(e)}function z0(i){return os(i)&&i.Ta.length<10}function j0(i,e){i.Ta.push(e);const t=_i(i);t.O_()&&t.X_&&t.ea(e.mutations)}function R_(i){return os(i)&&!_i(i).x_()&&i.Ta.length>0}function C_(i){_i(i).start()}async function B0(i){_i(i).ra()}async function $0(i){const e=_i(i);for(const t of i.Ta)e.ea(t.mutations)}async function H0(i,e,t){const s=i.Ta.shift(),o=Hf.from(s,e,t);await A_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await ac(i)}async function q0(i,e){e&&_i(i).X_&&await async function(s,o){if(function(h){return RI(h)&&h!==$.ABORTED}(o.code)){const u=s.Ta.shift();_i(s).B_(),await A_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await ac(s)}}(i,e),R_(i)&&C_(i)}async function Dg(i,e){const t=_e(i);t.asyncQueue.verifyOperationInProgress(),te(rs,"RemoteStore received new credentials");const s=os(t);t.Ea.add(3),await Ha(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await oc(t)}async function W0(i,e){const t=_e(i);e?(t.Ea.delete(2),await oc(t)):e||(t.Ea.add(2),await Ha(t),t.Ra.set("Unknown"))}function So(i){return i.ma||(i.ma=function(t,s,o){const u=_e(t);return u.sa(),new N0(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Xo:M0.bind(null,i),t_:F0.bind(null,i),r_:b0.bind(null,i),H_:U0.bind(null,i)}),i.da.push(async e=>{e?(i.ma.B_(),ed(i)?Zf(i):i.Ra.set("Unknown")):(await i.ma.stop(),S_(i))})),i.ma}function _i(i){return i.fa||(i.fa=function(t,s,o){const u=_e(t);return u.sa(),new D0(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:B0.bind(null,i),r_:q0.bind(null,i),ta:$0.bind(null,i),na:H0.bind(null,i)}),i.da.push(async e=>{e?(i.fa.B_(),await ac(i)):(await i.fa.stop(),i.Ta.length>0&&(te(rs,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))})),i.fa}/**
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
 */class td{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new td(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nd(i,e){if(Rr("AsyncQueue",`${e}: ${i}`),Io(i))return new oe($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class io{static emptySet(e){return new io(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Ta(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof io)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new io;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Vg{constructor(){this.ga=new Ye(ue.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):de(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class yo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new yo(e,t,io.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class G0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class K0{constructor(){this.queries=xg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=_e(t),u=o.queries;o.queries=xg(),u.forEach((h,m)=>{for(const y of m.Sa)y.onError(s)})})(this,new oe($.ABORTED,"Firestore shutting down"))}}function xg(){return new ss(i=>Ky(i),ec)}async function Q0(i,e){const t=_e(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new G0,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=nd(h,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&rd(t)}async function X0(i,e){const t=_e(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Y0(i,e){const t=_e(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&rd(t)}function J0(i,e,t){const s=_e(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function rd(i){i.Ca.forEach(e=>{e.next()})}var If,Og;(Og=If||(If={})).Ma="default",Og.Cache="cache";class Z0{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new yo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==If.Cache}}/**
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
 */class P_{constructor(e){this.key=e}}class k_{constructor(e){this.key=e}}class eS{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Re(),this.mutatedKeys=Re(),this.eu=Qy(e),this.tu=new io(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Vg,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,C)=>{const P=o.get(w),z=tc(this.query,C)?C:null,K=!!P&&this.mutatedKeys.has(P.key),X=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let H=!1;P&&z?P.data.isEqual(z.data)?K!==X&&(s.track({type:3,doc:z}),H=!0):this.su(P,z)||(s.track({type:2,doc:z}),H=!0,(y&&this.eu(z,y)>0||v&&this.eu(z,v)<0)&&(m=!0)):!P&&z?(s.track({type:0,doc:z}),H=!0):P&&!z&&(s.track({type:1,doc:P}),H=!0,(y||v)&&(m=!0)),H&&(z?(h=h.add(z),u=X?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((w,C)=>function(z,K){const X=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{Rt:H})}};return X(z)-X(K)}(w.type,C.type)||this.eu(w.doc,C.doc)),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,v=y!==this.Za;return this.Za=y,h.length!==0||v?{snapshot:new yo(this.query,e.tu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Re(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new k_(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new P_(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return yo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const id="SyncEngine";class tS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class nS{constructor(e){this.key=e,this.hu=!1}}class rS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ss(m=>Ky(m),ec),this.Iu=new Map,this.Eu=new Set,this.du=new Ye(ue.comparator),this.Au=new Map,this.Ru=new Gf,this.Vu={},this.mu=new Map,this.fu=go.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function iS(i,e,t=!0){const s=L_(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await N_(s,e,t,!0),o}async function sS(i,e){const t=L_(i);await N_(t,e,!0,!1)}async function N_(i,e,t,s){const o=await T0(i.localStore,Yn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await oS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&T_(i.remoteStore,o),m}async function oS(i,e,t,s,o){i.pu=(C,P,z)=>async function(X,H,ve,fe){let ge=H.view.ru(ve);ge.Cs&&(ge=await Rg(X.localStore,H.query,!1).then(({documents:D})=>H.view.ru(D,ge)));const Ie=fe&&fe.targetChanges.get(H.targetId),Ze=fe&&fe.targetMismatches.get(H.targetId)!=null,De=H.view.applyChanges(ge,X.isPrimaryClient,Ie,Ze);return Mg(X,H.targetId,De.au),De.snapshot}(i,C,P,z);const u=await Rg(i.localStore,e,!0),h=new eS(e,u.Qs),m=h.ru(u.documents),y=$a.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);Mg(i,t,v.au);const w=new tS(e,t,h);return i.Tu.set(e,w),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),v.snapshot}async function aS(i,e,t){const s=_e(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!ec(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await wf(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Yf(s.remoteStore,o.targetId),Sf(s,o.targetId)}).catch(To)):(Sf(s,o.targetId),await wf(s.localStore,o.targetId,!0))}async function lS(i,e){const t=_e(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Yf(t.remoteStore,s.targetId))}async function uS(i,e,t){const s=gS(i);try{const o=await function(h,m){const y=_e(h),v=We.now(),w=m.reduce((z,K)=>z.add(K.key),Re());let C,P;return y.persistence.runTransaction("Locally write mutations","readwrite",z=>{let K=Cr(),X=Re();return y.Ns.getEntries(z,w).next(H=>{K=H,K.forEach((ve,fe)=>{fe.isValidDocument()||(X=X.add(ve))})}).next(()=>y.localDocuments.getOverlayedDocuments(z,K)).next(H=>{C=H;const ve=[];for(const fe of m){const ge=wI(fe,C.get(fe.key).overlayedDocument);ge!=null&&ve.push(new wi(fe.key,ge,zy(ge.value.mapValue),Fn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,ve,m)}).next(H=>{P=H;const ve=H.applyToLocalDocumentSet(C,X);return y.documentOverlayCache.saveOverlays(z,H.batchId,ve)})}).then(()=>({batchId:P.batchId,changes:Yy(C)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let v=h.Vu[h.currentUser.toKey()];v||(v=new Ye(Ae)),v=v.insert(m,y),h.Vu[h.currentUser.toKey()]=v}(s,o.batchId,t),await qa(s,o.changes),await ac(s.remoteStore)}catch(o){const u=nd(o,"Failed to persist write");t.reject(u)}}async function D_(i,e){const t=_e(i);try{const s=await v0(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(Me(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Me(h.hu,14607):o.removedDocuments.size>0&&(Me(h.hu,42227),h.hu=!1))}),await qa(t,s,e)}catch(s){await To(s)}}function Lg(i,e,t){const s=_e(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=_e(h);y.onlineState=m;let v=!1;y.queries.forEach((w,C)=>{for(const P of C.Sa)P.va(m)&&(v=!0)}),v&&rd(y)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function cS(i,e,t){const s=_e(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new Ye(ue.comparator);h=h.insert(u,bt.newNoDocument(u,ye.min()));const m=Re().add(u),y=new ic(ye.min(),new Map,new Ye(Ae),h,m);await D_(s,y),s.du=s.du.remove(u),s.Au.delete(e),sd(s)}else await wf(s.localStore,e,!1).then(()=>Sf(s,e,t)).catch(To)}async function hS(i,e){const t=_e(i),s=e.batch.batchId;try{const o=await _0(t.localStore,e);x_(t,s,null),V_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await qa(t,o)}catch(o){await To(o)}}async function fS(i,e,t){const s=_e(i);try{const o=await function(h,m){const y=_e(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next(C=>(Me(C!==null,37113),w=C.keys(),y.mutationQueue.removeMutationBatch(v,C))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>y.localDocuments.getDocuments(v,w))})}(s.localStore,e);x_(s,e,t),V_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await qa(s,o)}catch(o){await To(o)}}function V_(i,e){(i.mu.get(e)||[]).forEach(t=>{t.resolve()}),i.mu.delete(e)}function x_(i,e,t){const s=_e(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Sf(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach(s=>{i.Ru.containsKey(s)||O_(i,s)})}function O_(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Yf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),sd(i))}function Mg(i,e,t){for(const s of t)s instanceof P_?(i.Ru.addReference(s.key,e),dS(i,s)):s instanceof k_?(te(id,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||O_(i,s.key)):de(19791,{wu:s})}function dS(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(te(id,"New document in limbo: "+t),i.Eu.add(s),sd(i))}function sd(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new ue(qe.fromString(e)),s=i.fu.next();i.Au.set(s,new nS(t)),i.du=i.du.insert(t,s),T_(i.remoteStore,new ai(Yn(Gy(t.path)),s,"TargetPurposeLimboResolution",Xu.ce))}}async function qa(i,e,t){const s=_e(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((m,y)=>{h.push(s.pu(y,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const C=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,C?"current":"not-current")}if(v){o.push(v);const C=Qf.As(y.targetId,v);u.push(C)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(y,v){const w=_e(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>j.forEach(v,P=>j.forEach(P.Es,z=>w.persistence.referenceDelegate.addReference(C,P.targetId,z)).next(()=>j.forEach(P.ds,z=>w.persistence.referenceDelegate.removeReference(C,P.targetId,z)))))}catch(C){if(!Io(C))throw C;te(Xf,"Failed to update sequence numbers: "+C)}for(const C of v){const P=C.targetId;if(!C.fromCache){const z=w.Ms.get(P),K=z.snapshotVersion,X=z.withLastLimboFreeSnapshotVersion(K);w.Ms=w.Ms.insert(P,X)}}}(s.localStore,u))}async function pS(i,e){const t=_e(i);if(!t.currentUser.isEqual(e)){te(id,"User change. New user:",e.toKey());const s=await __(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(m=>{m.forEach(y=>{y.reject(new oe($.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qa(t,s.Ls)}}function mS(i,e){const t=_e(i),s=t.Au.get(e);if(s&&s.hu)return Re().add(s.key);{let o=Re();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function L_(i){const e=_e(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=D_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cS.bind(null,e),e.Pu.H_=Y0.bind(null,e.eventManager),e.Pu.yu=J0.bind(null,e.eventManager),e}function gS(i){const e=_e(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fS.bind(null,e),e}class ju{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return y0(this.persistence,new p0,e.initialUser,this.serializer)}Cu(e){return new y_(Kf.mi,this.serializer)}Du(e){return new S0}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ju.provider={build:()=>new ju};class yS extends ju{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Me(this.persistence.referenceDelegate instanceof Uu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ZI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new y_(s=>Uu.mi(s,t),this.serializer)}}class Af{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Lg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pS.bind(null,this.syncEngine),await W0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new K0}()}createDatastore(e){const t=sc(e.databaseInfo.databaseId),s=function(u){return new k0(u)}(e.databaseInfo);return function(u,h,m,y){return new x0(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new L0(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Lg(this.syncEngine,t,0),function(){return kg.v()?new kg:new A0}())}createSyncEngine(e,t){return function(o,u,h,m,y,v,w){const C=new rS(o,u,h,m,y,v);return w&&(C.gu=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=_e(o);te(rs,"RemoteStore shutting down."),u.Ea.add(5),await Ha(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Af.provider={build:()=>new Af};/**
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
 *//**
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
 */class _S{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const vi="FirestoreClient";class vS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te(vi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te(vi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=nd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function tf(i,e){i.asyncQueue.verifyOperationInProgress(),te(vi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await __(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Fg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await ES(i);te(vi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Dg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Dg(e.remoteStore,o)),i._onlineComponents=e}async function ES(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(vi,"Using user provided OfflineComponentProvider");try{await tf(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ho("Error using user provided cache. Falling back to memory cache: "+t),await tf(i,new ju)}}else te(vi,"Using default OfflineComponentProvider"),await tf(i,new yS(void 0));return i._offlineComponents}async function M_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(vi,"Using user provided OnlineComponentProvider"),await Fg(i,i._uninitializedComponentsProvider._online)):(te(vi,"Using default OnlineComponentProvider"),await Fg(i,new Af))),i._onlineComponents}function wS(i){return M_(i).then(e=>e.syncEngine)}async function TS(i){const e=await M_(i),t=e.eventManager;return t.onListen=iS.bind(null,e.syncEngine),t.onUnlisten=aS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lS.bind(null,e.syncEngine),t}function IS(i,e,t={}){const s=new fi;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,v){const w=new _S({next:P=>{w.Nu(),h.enqueueAndForget(()=>X0(u,C)),P.fromCache&&y.source==="server"?v.reject(new oe($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(P)},error:P=>v.reject(P)}),C=new Z0(m,w,{includeMetadataChanges:!0,qa:!0});return Q0(u,C)}(await TS(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function F_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const bg=new Map;/**
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
 */const b_="firestore.googleapis.com",Ug=!0;class zg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=b_,this.ssl=Ug}else this.host=e.host,this.ssl=e.ssl??Ug;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=g_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YI)throw new oe($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=F_(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ST;switch(s.type){case"firstParty":return new PT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=bg.get(t);s&&(te("ComponentProvider","Removing Datastore"),bg.delete(t),s.terminate())}(this),Promise.resolve()}}function SS(i,e,t,s={}){var v;i=ns(i,lc);const o=vo(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(dy(`https://${m}`),py("Firestore",!0)),u.host!==b_&&u.host!==m&&ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!Zi(y,h)&&(i._setSettings(y),s.mockUserToken)){let w,C;if(typeof s.mockUserToken=="string")w=s.mockUserToken,C=Ft.MOCK_USER;else{w=YE(s.mockUserToken,(v=i._app)==null?void 0:v.options.projectId);const P=s.mockUserToken.sub||s.mockUserToken.user_id;if(!P)throw new oe($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Ft(P)}i._authCredentials=new AT(new Py(w,C))}}/**
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
 */class uc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new uc(this.firestore,e,this._query)}}class Tt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ja(t,Tt._jsonSchema))return new Tt(e,s||null,new ue(qe.fromString(t.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:at("string",Tt._jsonSchemaVersion),referencePath:at("string")};class di extends uc{constructor(e,t,s){super(e,t,Gy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ue(e))}withConverter(e){return new di(this.firestore,e,this._path)}}function AS(i,e,...t){if(i=en(i),ky("collection","path",e),i instanceof lc){const s=qe.fromString(e,...t);return eg(s),new di(i,null,s)}{if(!(i instanceof Tt||i instanceof di))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(qe.fromString(e,...t));return eg(s),new di(i.firestore,null,s)}}function od(i,e,...t){if(i=en(i),arguments.length===1&&(e=Lf.newId()),ky("doc","path",e),i instanceof lc){const s=qe.fromString(e,...t);return Zm(s),new Tt(i,null,new ue(s))}{if(!(i instanceof Tt||i instanceof di))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(qe.fromString(e,...t));return Zm(s),new Tt(i.firestore,i instanceof di?i.converter:null,new ue(s))}}/**
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
 */const jg="AsyncQueue";class Bg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new E_(this,"async_queue_retry"),this._c=()=>{const s=ef();s&&te(jg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ef();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ef();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new fi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Io(e))throw e;te(jg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Rr("INTERNAL UNHANDLED ERROR: ",$g(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=td.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&de(47125,{Pc:$g(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function $g(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Wa extends lc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Bg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bg(e),this._firestoreClient=void 0,await e}}}function RS(i,e){const t=typeof i=="object"?i:_y(),s=typeof i=="string"?i:Vu,o=xf(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=QE("firestore");u&&SS(o,...u)}return o}function U_(i){if(i._terminated)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||CS(i),i._firestoreClient}function CS(i){var s,o,u;const e=i._freezeSettings(),t=function(m,y,v,w){return new qT(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,F_(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new vS(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
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
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(kt.fromBase64String(e))}catch(t){throw new oe($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new En(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:En._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ja(e,En._jsonSchema))return En.fromBase64String(e.bytes)}}En._jsonSchemaVersion="firestore/bytes/1.0",En._jsonSchema={type:at("string",En._jsonSchemaVersion),bytes:at("string")};/**
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
 */class cc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ad{constructor(e){this._methodName=e}}/**
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
 */class Zn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zn._jsonSchemaVersion}}static fromJSON(e){if(ja(e,Zn._jsonSchema))return new Zn(e.latitude,e.longitude)}}Zn._jsonSchemaVersion="firestore/geoPoint/1.0",Zn._jsonSchema={type:at("string",Zn._jsonSchemaVersion),latitude:at("number"),longitude:at("number")};/**
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
 */class er{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ja(e,er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new er(e.vectorValues);throw new oe($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}er._jsonSchemaVersion="firestore/vectorValue/1.0",er._jsonSchema={type:at("string",er._jsonSchemaVersion),vectorValues:at("object")};/**
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
 */const PS=/^__.*__$/;class kS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new wi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ba(e,this.data,t,this.fieldTransforms)}}class z_{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new wi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function j_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{Ac:i})}}class ld{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ld({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Bu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(j_(this.Ac)&&PS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class NS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||sc(e)}Cc(e,t,s,o=!1){return new ld({Ac:e,methodName:t,Dc:s,path:Pt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function B_(i){const e=i._freezeSettings(),t=sc(i._databaseId);return new NS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function DS(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);ud("Data must be an object, but it was:",h,s);const m=$_(s,h);let y,v;if(u.merge)y=new un(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const C of u.mergeFields){const P=Rf(e,C,t);if(!h.contains(P))throw new oe($.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);q_(w,P)||w.push(P)}y=new un(w),v=h.fieldTransforms.filter(C=>y.covers(C.field))}else y=null,v=h.fieldTransforms;return new kS(new Zt(m),y,v)}class hc extends ad{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hc}}function VS(i,e,t,s){const o=i.Cc(1,e,t);ud("Data must be an object, but it was:",o,s);const u=[],h=Zt.empty();Ei(s,(y,v)=>{const w=cd(e,y,t);v=en(v);const C=o.yc(w);if(v instanceof hc)u.push(w);else{const P=fc(v,C);P!=null&&(u.push(w),h.set(w,P))}});const m=new un(u);return new z_(h,m,o.fieldTransforms)}function xS(i,e,t,s,o,u){const h=i.Cc(1,e,t),m=[Rf(e,s,t)],y=[o];if(u.length%2!=0)throw new oe($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let P=0;P<u.length;P+=2)m.push(Rf(e,u[P])),y.push(u[P+1]);const v=[],w=Zt.empty();for(let P=m.length-1;P>=0;--P)if(!q_(v,m[P])){const z=m[P];let K=y[P];K=en(K);const X=h.yc(z);if(K instanceof hc)v.push(z);else{const H=fc(K,X);H!=null&&(v.push(z),w.set(z,H))}}const C=new un(v);return new z_(w,C,h.fieldTransforms)}function fc(i,e){if(H_(i=en(i)))return ud("Unsupported field value:",e,i),$_(i,e);if(i instanceof ad)return function(s,o){if(!j_(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=fc(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=en(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return mI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=We.fromDate(s);return{timestampValue:bu(o.serializer,u)}}if(s instanceof We){const u=new We(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:bu(o.serializer,u)}}if(s instanceof Zn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof En)return{bytesValue:u_(o.serializer,s._byteString)};if(s instanceof Tt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Wf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof er)return function(h,m){return{mapValue:{fields:{[by]:{stringValue:Uy},[xu]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw m.Sc("VectorValues must only contain numeric values.");return Bf(m.serializer,v)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${Mf(s)}`)}(i,e)}function $_(i,e){const t={};return Vy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ei(i,(s,o)=>{const u=fc(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function H_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof We||i instanceof Zn||i instanceof En||i instanceof Tt||i instanceof ad||i instanceof er)}function ud(i,e,t){if(!H_(t)||!Ny(t)){const s=Mf(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Rf(i,e,t){if((e=en(e))instanceof cc)return e._internalPath;if(typeof e=="string")return cd(i,e);throw Bu("Field path arguments must be of type string or ",i,!1,void 0,t)}const OS=new RegExp("[~\\*/\\[\\]]");function cd(i,e,t){if(e.search(OS)>=0)throw Bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new cc(...e.split("."))._internalPath}catch{throw Bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Bu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new oe($.INVALID_ARGUMENT,m+i+y)}function q_(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class W_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(G_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class LS extends W_{data(){return super.data()}}function G_(i,e){return typeof e=="string"?cd(i,e):e instanceof cc?e._internalPath:e._delegate._internalPath}/**
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
 */function MS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new oe($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FS{convertValue(e,t="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ei(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[xu].arrayValue)==null?void 0:o.values)==null?void 0:u.map(h=>rt(h.doubleValue));return new er(t)}convertGeoPoint(e){return new Zn(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ju(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(xa(e));default:return null}}convertTimestamp(e){const t=mi(e);return new We(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=qe.fromString(e);Me(m_(s),9688,{name:e});const o=new Oa(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Rr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function bS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class yu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class so extends W_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(G_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=so._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}so._jsonSchemaVersion="firestore/documentSnapshot/1.0",so._jsonSchema={type:at("string",so._jsonSchemaVersion),bundleSource:at("string","DocumentSnapshot"),bundleName:at("string"),bundle:at("string")};class Su extends so{data(e={}){return super.data(e)}}class oo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new yu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Su(this._firestore,this._userDataWriter,s.key,s,new yu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const y=new Su(o._firestore,o._userDataWriter,m.doc.key,m.doc,new yu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new Su(o._firestore,o._userDataWriter,m.doc.key,m.doc,new yu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:US(m.type),doc:y,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function US(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:i})}}oo._jsonSchemaVersion="firestore/querySnapshot/1.0",oo._jsonSchema={type:at("string",oo._jsonSchemaVersion),bundleSource:at("string","QuerySnapshot"),bundleName:at("string"),bundle:at("string")};class zS extends FS{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function jS(i){i=ns(i,uc);const e=ns(i.firestore,Wa),t=U_(e),s=new zS(e);return MS(i._query),IS(t,i._query).then(o=>new oo(e,s,i,o))}function BS(i,e,t,...s){i=ns(i,Tt);const o=ns(i.firestore,Wa),u=B_(o);let h;return h=typeof(e=en(e))=="string"||e instanceof cc?xS(u,"updateDoc",i._key,e,t,s):VS(u,"updateDoc",i._key,e),hd(o,[h.toMutation(i._key,Fn.exists(!0))])}function $S(i){return hd(ns(i.firestore,Wa),[new $f(i._key,Fn.none())])}function HS(i,e){const t=ns(i.firestore,Wa),s=od(i),o=bS(i.converter,e);return hd(t,[DS(B_(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Fn.exists(!1))]).then(()=>s)}function hd(i,e){return function(s,o){const u=new fi;return s.asyncQueue.enqueueAndForget(async()=>uS(await wS(s),o,u)),u.promise}(U_(i),e)}(function(e,t=!0){(function(o){wo=o})(Eo),co(new es("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Wa(new RT(s.getProvider("auth-internal")),new kT(h,s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new oe($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oa(v.options.projectId,w)}(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),ci(Qm,Xm,e),ci(Qm,Xm,"esm2020")})();var qS="firebase",WS="12.1.0";/**
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
 */ci(qS,WS,"app");function K_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GS=K_,Q_=new Ua("auth","Firebase",K_());/**
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
 */const $u=new Df("@firebase/auth");function KS(i,...e){$u.logLevel<=Se.WARN&&$u.warn(`Auth (${Eo}): ${i}`,...e)}function Au(i,...e){$u.logLevel<=Se.ERROR&&$u.error(`Auth (${Eo}): ${i}`,...e)}/**
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
 */function Pr(i,...e){throw fd(i,...e)}function tr(i,...e){return fd(i,...e)}function X_(i,e,t){const s={...GS(),[e]:t};return new Ua("auth","Firebase",s).create(e,{appName:i.name})}function Ji(i){return X_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Q_.create(i,...e)}function me(i,e,...t){if(!i)throw fd(e,...t)}function Ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Au(e),new Error(e)}function kr(i,e){i||Ir(e)}/**
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
 */function Cf(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function QS(){return Hg()==="http:"||Hg()==="https:"}function Hg(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function XS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QS()||rw()||"connection"in navigator)?navigator.onLine:!0}function YS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ga{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=ew()||iw()}get(){return XS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dd(i,e){kr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Y_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],e1=new Ga(3e4,6e4);function pd(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ao(i,e,t,s,o={}){return J_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=za({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...u};return nw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&vo(i.emulatorConfig.host)&&(v.credentials="include"),Y_.fetch()(await Z_(i,i.config.apiHost,t,m),v)})}async function J_(i,e,t){i._canInitEmulator=!1;const s={...JS,...e};try{const o=new n1(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw _u(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw _u(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw _u(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw _u(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw X_(i,w,v);Pr(i,w)}}catch(o){if(o instanceof Nr)throw o;Pr(i,"network-request-failed",{message:String(o)})}}async function t1(i,e,t,s,o={}){const u=await Ao(i,e,t,s,o);return"mfaPendingCredential"in u&&Pr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Z_(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?dd(i.config,o):`${i.config.apiScheme}://${o}`;return ZS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class n1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tr(this.auth,"network-request-failed")),e1.get())})}}function _u(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=tr(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function r1(i,e){return Ao(i,"POST","/v1/accounts:delete",e)}async function Hu(i,e){return Ao(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function ka(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i1(i,e=!1){const t=en(i),s=await t.getIdToken(e),o=md(s);me(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:ka(nf(o.auth_time)),issuedAtTime:ka(nf(o.iat)),expirationTime:ka(nf(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function nf(i){return Number(i)*1e3}function md(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Au("JWT malformed, contained fewer than 3 sections"),null;try{const o=uy(t);return o?JSON.parse(o):(Au("Failed to decode base64 JWT payload"),null)}catch(o){return Au("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function qg(i){const e=md(i);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ba(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Nr&&s1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function s1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class o1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qu(i){var C;const e=i.auth,t=await i.getIdToken(),s=await ba(i,Hu(e,{idToken:t}));me(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(C=o.providerUserInfo)!=null&&C.length?ev(o.providerUserInfo):[],h=l1(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),v=m?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Pf(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,w)}async function a1(i){const e=en(i);await qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l1(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function ev(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function u1(i,e){const t=await J_(i,{},async()=>{const s=za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Z_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&vo(i.emulatorConfig.host)&&(y.credentials="include"),Y_.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function c1(i,e){return Ao(i,"POST","/v2/accounts:revokeToken",pd(i,e))}/**
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
 */class ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=qg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await u1(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ao;return s&&(me(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(me(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(me(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ao,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
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
 */function ni(i,e){me(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Mn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new o1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Pf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ba(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return i1(this,e)}reload(){return a1(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await qu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await ba(this,r1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:C,emailVerified:P,isAnonymous:z,providerData:K,stsTokenManager:X}=t;me(C&&X,e,"internal-error");const H=ao.fromJSON(this.name,X);me(typeof C=="string",e,"internal-error"),ni(s,e.name),ni(o,e.name),me(typeof P=="boolean",e,"internal-error"),me(typeof z=="boolean",e,"internal-error"),ni(u,e.name),ni(h,e.name),ni(m,e.name),ni(y,e.name),ni(v,e.name),ni(w,e.name);const ve=new Mn({uid:C,auth:e,email:o,emailVerified:P,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:H,createdAt:v,lastLoginAt:w});return K&&Array.isArray(K)&&(ve.providerData=K.map(fe=>({...fe}))),y&&(ve._redirectEventId=y),ve}static async _fromIdTokenResponse(e,t,s=!1){const o=new ao;o.updateFromServerResponse(t);const u=new Mn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await qu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];me(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?ev(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ao;m.updateFromIdToken(s);const y=new Mn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Pf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */const Wg=new Map;function Sr(i){kr(i instanceof Function,"Expected a class definition");let e=Wg.get(i);return e?(kr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Wg.set(i,e),e)}/**
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
 */class tv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tv.type="NONE";const Gg=tv;/**
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
 */function Ru(i,e,t){return`firebase:${i}:${e}:${t}`}class lo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ru(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ru("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Hu(this.auth,{idToken:e}).catch(()=>{});return t?Mn._fromGetAccountInfoResponse(this.auth,t,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new lo(Sr(Gg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Sr(Gg);const h=Ru(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let C;if(typeof w=="string"){const P=await Hu(e,{idToken:w}).catch(()=>{});if(!P)break;C=await Mn._fromGetAccountInfoResponse(e,P,w)}else C=Mn._fromJSON(e,w);v!==u&&(m=C),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new lo(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new lo(u,e,s))}}/**
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
 */function Kg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(av(e))return"Blackberry";if(lv(e))return"Webos";if(rv(e))return"Safari";if((e.includes("chrome/")||iv(e))&&!e.includes("edge/"))return"Chrome";if(ov(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function nv(i=Ut()){return/firefox\//i.test(i)}function rv(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iv(i=Ut()){return/crios\//i.test(i)}function sv(i=Ut()){return/iemobile/i.test(i)}function ov(i=Ut()){return/android/i.test(i)}function av(i=Ut()){return/blackberry/i.test(i)}function lv(i=Ut()){return/webos/i.test(i)}function gd(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function h1(i=Ut()){var e;return gd(i)&&!!((e=window.navigator)!=null&&e.standalone)}function f1(){return sw()&&document.documentMode===10}function uv(i=Ut()){return gd(i)||ov(i)||lv(i)||av(i)||/windows phone/i.test(i)||sv(i)}/**
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
 */function cv(i,e=[]){let t;switch(i){case"Browser":t=Kg(Ut());break;case"Worker":t=`${Kg(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${s}`}/**
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
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function p1(i,e={}){return Ao(i,"GET","/v2/passwordPolicy",pd(i,e))}/**
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
 */const m1=6;class g1{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??m1,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class y1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qg(this),this.idTokenSubscription=new Qg(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await lo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hu(this,{idToken:e}),s=await Mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Xn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Ji(this));const t=e?en(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p1(this),t=new g1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ua("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await c1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await lo.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&KS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function yd(i){return en(i)}class Qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=dw(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _d={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _1(i){_d=i}function v1(i){return _d.loadJS(i)}function E1(){return _d.gapiScript}function w1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function T1(i,e){const t=xf(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Zi(u,e??{}))return o;Pr(o,"already-initialized")}return t.initialize({options:e})}function I1(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Sr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function S1(i,e,t){const s=yd(i);me(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=hv(e),{host:h,port:m}=A1(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){me(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),me(Zi(v,s.config.emulator)&&Zi(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,vo(h)?(dy(`${u}//${h}${y}`),py("Auth",!0)):R1()}function hv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function A1(i){const e=hv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Xg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Xg(h)}}}function Xg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function R1(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class fv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}/**
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
 */async function uo(i,e){return t1(i,"POST","/v1/accounts:signInWithIdp",pd(i,e))}/**
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
 */const C1="http://localhost";class is extends fv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new is(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return uo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,uo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,uo(e,t)}buildRequest(){const e={requestUri:C1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=za(t)}return e}}/**
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
 */class dv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends dv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ri extends Ka{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
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
 */class ii extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return is._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
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
 */class si extends Ka{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
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
 */class oi extends Ka{constructor(){super("twitter.com")}static credential(e,t){return is._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return oi.credential(t,s)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
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
 */class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Mn._fromIdTokenResponse(e,s,o),h=Yg(s);return new _o({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Yg(s);return new _o({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Yg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Wu extends Nr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Wu(e,t,s,o)}}function pv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(i,u,e,s):u})}async function P1(i,e,t=!1){const s=await ba(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return _o._forOperation(i,"link",s)}/**
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
 */async function k1(i,e,t=!1){const{auth:s}=i;if(Xn(s.app))return Promise.reject(Ji(s));const o="reauthenticate";try{const u=await ba(i,pv(s,o,e,i),t);me(u.idToken,s,"internal-error");const h=md(u.idToken);me(h,s,"internal-error");const{sub:m}=h;return me(i.uid===m,s,"user-mismatch"),_o._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Pr(s,"user-mismatch"),u}}/**
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
 */async function N1(i,e,t=!1){if(Xn(i.app))return Promise.reject(Ji(i));const s="signIn",o=await pv(i,s,e),u=await _o._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function D1(i,e,t,s){return en(i).onIdTokenChanged(e,t,s)}function V1(i,e,t){return en(i).beforeAuthStateChanged(e,t)}const Gu="__sak";/**
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
 */class mv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const x1=1e3,O1=10;class gv extends mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);f1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,O1):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},x1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gv.type="LOCAL";const L1=gv;/**
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
 */class yv extends mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yv.type="SESSION";const _v=yv;/**
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
 */function M1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await M1(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function vd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class F1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=vd("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const P=C;if(P.data.eventId===v)switch(P.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(P.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nr(){return window}function b1(i){nr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function vv(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function U1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function j1(){return vv()?self:null}/**
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
 */const Ev="firebaseLocalStorageDb",B1=1,Ku="firebaseLocalStorage",wv="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pc(i,e){return i.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function $1(){const i=indexedDB.deleteDatabase(Ev);return new Qa(i).toPromise()}function kf(){const i=indexedDB.open(Ev,B1);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Ku,{keyPath:wv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Ku)?e(s):(s.close(),await $1(),e(await kf()))})})}async function Jg(i,e,t){const s=pc(i,!0).put({[wv]:e,value:t});return new Qa(s).toPromise()}async function H1(i,e){const t=pc(i,!1).get(e),s=await new Qa(t).toPromise();return s===void 0?null:s.value}function Zg(i,e){const t=pc(i,!0).delete(e);return new Qa(t).toPromise()}const q1=800,W1=3;class Tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>W1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(j1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await U1(),!this.activeServiceWorker)return;this.sender=new F1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kf();return await Jg(e,Gu,"1"),await Zg(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>H1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=pc(o,!1).getAll();return new Qa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tv.type="LOCAL";const G1=Tv;new Ga(3e4,6e4);/**
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
 */function K1(i,e){return e?Sr(e):(me(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Ed extends fv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return uo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return uo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Q1(i){return N1(i.auth,new Ed(i),i.bypassAuthState)}function X1(i){const{auth:e,user:t}=i;return me(t,e,"internal-error"),k1(t,new Ed(i),i.bypassAuthState)}async function Y1(i){const{auth:e,user:t}=i;return me(t,e,"internal-error"),P1(t,new Ed(i),i.bypassAuthState)}/**
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
 */class Iv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q1;case"linkViaPopup":case"linkViaRedirect":return Y1;case"reauthViaPopup":case"reauthViaRedirect":return X1;default:Pr(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const J1=new Ga(2e3,1e4);class ro extends Iv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=vd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,J1.get())};e()}}ro.currentPopupAction=null;/**
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
 */const Z1="pendingRedirect",Cu=new Map;class eA extends Iv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Cu.get(this.auth._key());if(!e){try{const s=await tA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Cu.set(this.auth._key(),e)}return this.bypassAuthState||Cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tA(i,e){const t=iA(e),s=rA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function nA(i,e){Cu.set(i._key(),e)}function rA(i){return Sr(i._redirectPersistence)}function iA(i){return Ru(Z1,i.config.apiKey,i.name)}async function sA(i,e,t=!1){if(Xn(i.app))return Promise.reject(Ji(i));const s=yd(i),o=K1(s,e),h=await new eA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const oA=600*1e3;class aA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Sv(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Sv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sv(i);default:return!1}}/**
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
 */async function uA(i,e={}){return Ao(i,"GET","/v1/projects",e)}/**
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
 */const cA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hA=/^https?/;async function fA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await uA(i);for(const t of e)try{if(dA(t))return}catch{}Pr(i,"unauthorized-domain")}function dA(i){const e=Cf(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!hA.test(t))return!1;if(cA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const pA=new Ga(3e4,6e4);function ty(){const i=nr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function mA(i){return new Promise((e,t)=>{var o,u,h;function s(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),t(tr(i,"network-request-failed"))},timeout:pA.get()})}if((u=(o=nr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=nr().gapi)!=null&&h.load)s();else{const m=w1("iframefcb");return nr()[m]=()=>{gapi.load?s():t(tr(i,"network-request-failed"))},v1(`${E1()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function gA(i){return Pu=Pu||mA(i),Pu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const yA=new Ga(5e3,15e3),_A="__/auth/iframe",vA="emulator/auth/iframe",EA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TA(i){const e=i.config;me(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?dd(e,vA):`https://${i.config.authDomain}/${_A}`,s={apiKey:e.apiKey,appName:i.name,v:Eo},o=wA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${za(s).slice(1)}`}async function IA(i){const e=await gA(i),t=nr().gapi;return me(t,i,"internal-error"),e.open({where:document.body,url:TA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=tr(i,"network-request-failed"),m=nr().setTimeout(()=>{u(h)},yA.get());function y(){nr().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const SA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AA=500,RA=600,CA="_blank",PA="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kA(i,e,t,s=AA,o=RA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...SA,width:s.toString(),height:o.toString(),top:u,left:h},v=Ut().toLowerCase();t&&(m=iv(v)?CA:t),nv(v)&&(e=e||PA,y.scrollbars="yes");const w=Object.entries(y).reduce((P,[z,K])=>`${P}${z}=${K},`,"");if(h1(v)&&m!=="_self")return NA(e||"",m),new ny(null);const C=window.open(e||"",m,w);me(C,i,"popup-blocked");try{C.focus()}catch{}return new ny(C)}function NA(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const DA="__/auth/handler",VA="emulator/auth/handler",xA=encodeURIComponent("fac");async function ry(i,e,t,s,o,u){me(i.config.authDomain,i,"auth-domain-config-required"),me(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Eo,eventId:o};if(e instanceof dv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",fw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))h[w]=C}if(e instanceof Ka){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${xA}=${encodeURIComponent(y)}`:"";return`${OA(i)}?${za(m).slice(1)}${v}`}function OA({config:i}){return i.emulator?dd(i,VA):`https://${i.authDomain}/${DA}`}/**
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
 */const rf="webStorageSupport";class LA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_v,this._completeRedirectFn=sA,this._overrideRedirectResult=nA}async _openPopup(e,t,s,o){var h;kr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await ry(e,t,s,Cf(),o);return kA(e,u,vd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await ry(e,t,s,Cf(),o);return b1(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(kr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await IA(e),s=new aA(e);return t.register("authEvent",o=>(me(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rf,{type:rf},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[rf];u!==void 0&&t(!!u),Pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uv()||rv()||gd()}}const MA=LA;var iy="@firebase/auth",sy="1.11.0";/**
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
 */class FA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bA(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UA(i){co(new es("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;me(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cv(i)},v=new y1(s,o,u,y);return I1(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),co(new es("auth-internal",e=>{const t=yd(e.getProvider("auth").getImmediate());return(s=>new FA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ci(iy,sy,bA(i)),ci(iy,sy,"esm2020")}/**
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
 */const zA=300,jA=fy("authIdTokenMaxAge")||zA;let oy=null;const BA=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>jA)return;const o=t==null?void 0:t.token;oy!==o&&(oy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $A(i=_y()){const e=xf(i,"auth");if(e.isInitialized())return e.getImmediate();const t=T1(i,{popupRedirectResolver:MA,persistence:[G1,L1,_v]}),s=fy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=BA(u.toString());V1(t,h,()=>h(t.currentUser)),D1(t,m=>h(m))}}const o=cy("auth");return o&&S1(t,`http://${o}`),t}function HA(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}_1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=tr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",HA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UA("Browser");const qA={apiKey:"AIzaSyAcYPe2yzMTYLIAT5f_xjWekFGwtsDQ-pU",authDomain:"todowithfb-7e1a5.firebaseapp.com",projectId:"todowithfb-7e1a5",storageBucket:"todowithfb-7e1a5.firebasestorage.app",messagingSenderId:"502415200008",appId:"1:502415200008:web:8c689e14a0b656475da6bd"},Av=yy(qA);$A(Av);const wd=RS(Av),Rv=AS(wd,"todos"),WA=async()=>(await jS(Rv)).docs.map(e=>({id:e.id,...e.data()})),GA=async i=>{const e={text:i};return{id:(await HS(Rv,e)).id,...e}},KA=async i=>{await $S(od(wd,"todos",i))},QA=async(i,e)=>{await BS(od(wd,"todos",i),{text:e})},XA=()=>{const[i,e]=Na.useState([]);Na.useEffect(()=>{(async()=>{const h=await WA();e(h)})()},[]);const t=async u=>{const h=await GA(u);e([h,...i])},s=async u=>{await KA(u),e(i.filter(h=>h.id!==u))},o=async(u,h)=>{await QA(u,h),e(i.map(m=>m.id===u?{...m,text:h}:m))};return dt.jsx("div",{className:"container mt-5",children:dt.jsxs("div",{className:"todo-container",children:[dt.jsx("h2",{className:"text-center mb-4",children:"React ToDo App"}),dt.jsx(UE,{addTodo:t}),i.map(u=>dt.jsx(zE,{todo:u,deleteTodo:s,updateTodo:o},u.id))]})})};bE.createRoot(document.getElementById("root")).render(dt.jsx(dt.Fragment,{children:dt.jsx(XA,{})}));
