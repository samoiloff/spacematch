(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const ga=class{static mapObjectToGlobalId(i,t,e){const n=`${e}_${t}`;i[ga.key]=n,window[n]=i}static unmapObjectToGlobalId(i){const t=i[ga.key];t&&window[t]&&(delete i[ga.key],delete window[t])}};let hi=ga;hi.key="__windowId__";class gp{constructor(){this.data=new Map}instantiate(t,e){if(!t.instance)if(t.isSingletone)t.instance=this.createInstance(t,e);else return this.createInstance(t,e);return t.instance}createInstance(t,e){let n;return e?n=new t.instanceCls(...e):t.initParams?n=new t.instanceCls(...t.initParams):n=new t.instanceCls,t.isSingletone&&hi.mapObjectToGlobalId(n,t.injectionId,"d"),n}}const ya=class{static getContext(i){i||(i=ya.DEFAULT);let t=ya.contexts.get(i);return t||(t=new gp,ya.contexts.set(i,t)),t}};let fs=ya;fs.DEFAULT="default";fs.contexts=new Map;class yp{destroy(){this.injectionId=null,this.instanceCls=null,this.initParams=null,this.instance&&(hi.unmapObjectToGlobalId(this.instance),this.instance.hasOwnProperty("destroy")&&(this.instance.destroy(),this.instance=null))}clearInstance(){this.instance&&(hi.unmapObjectToGlobalId(this.instance),this.instance=null)}asSingletone(t=!0){return this.isSingletone=t,this}withParams(t){return this.initParams=t,this}toClass(t){return this.instanceCls=t,this}toInstance(t){return this.instance=t,this}}const xp=(i,t,e=null)=>{const n=fs.getContext(e);let r=n.data.get(i);return r||(r=new yp,r.injectionId=i,r.instanceCls=t,n.data.set(i,r)),r},Vi=(i,t=null)=>{if(typeof i=="string"){const e=i;return fs.getContext(t).data.get(e)}else{const e=i.name;return xp(e,i,t)}};var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ka(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var wf={exports:{}};(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(h,l,u){this.fn=h,this.context=l,this.once=u||!1}function s(h,l,u,c,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new r(u,c||h,f),m=e?e+l:l;return h._events[m]?h._events[m].fn?h._events[m]=[h._events[m],d]:h._events[m].push(d):(h._events[m]=d,h._eventsCount++),h}function a(h,l){--h._eventsCount===0?h._events=new n:delete h._events[l]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],u,c;if(this._eventsCount===0)return l;for(c in u=this._events)t.call(u,c)&&l.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},o.prototype.listeners=function(l){var u=e?e+l:l,c=this._events[u];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,d=c.length,m=new Array(d);f<d;f++)m[f]=c[f].fn;return m},o.prototype.listenerCount=function(l){var u=e?e+l:l,c=this._events[u];return c?c.fn?1:c.length:0},o.prototype.emit=function(l,u,c,f,d,m){var _=e?e+l:l;if(!this._events[_])return!1;var p=this._events[_],v=arguments.length,y,g;if(p.fn){switch(p.once&&this.removeListener(l,p.fn,void 0,!0),v){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,c),!0;case 4:return p.fn.call(p.context,u,c,f),!0;case 5:return p.fn.call(p.context,u,c,f,d),!0;case 6:return p.fn.call(p.context,u,c,f,d,m),!0}for(g=1,y=new Array(v-1);g<v;g++)y[g-1]=arguments[g];p.fn.apply(p.context,y)}else{var T=p.length,E;for(g=0;g<T;g++)switch(p[g].once&&this.removeListener(l,p[g].fn,void 0,!0),v){case 1:p[g].fn.call(p[g].context);break;case 2:p[g].fn.call(p[g].context,u);break;case 3:p[g].fn.call(p[g].context,u,c);break;case 4:p[g].fn.call(p[g].context,u,c,f);break;default:if(!y)for(E=1,y=new Array(v-1);E<v;E++)y[E-1]=arguments[E];p[g].fn.apply(p[g].context,y)}}return!0},o.prototype.on=function(l,u,c){return s(this,l,u,c,!1)},o.prototype.once=function(l,u,c){return s(this,l,u,c,!0)},o.prototype.removeListener=function(l,u,c,f){var d=e?e+l:l;if(!this._events[d])return this;if(!u)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===u&&(!f||m.once)&&(!c||m.context===c)&&a(this,d);else{for(var _=0,p=[],v=m.length;_<v;_++)(m[_].fn!==u||f&&!m[_].once||c&&m[_].context!==c)&&p.push(m[_]);p.length?this._events[d]=p.length===1?p[0]:p:a(this,d)}return this},o.prototype.removeAllListeners=function(l){var u;return l?(u=e?e+l:l,this._events[u]&&a(this,u)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=e,o.EventEmitter=o,i.exports=o})(wf);var Ep=wf.exports;const Af=ka(Ep);let Tp=class extends Af{constructor(){super(...arguments),this.logEventsEnabled=!1,this.instanceId="EventDispatcher"}dispatch(t,...e){return this.logEvent(t,e?e[0]:null),super.emit(t,...e)}emit(t,...e){return this.logEvent(t,e?e[0]:null),super.emit(t,...e)}logEvent(t,e){console.groupCollapsed(`${this.instanceId}: ${t.toString()}`),console.log(e||"-=NO_DATA=-"),console.trace(),console.groupEnd()}};class bp extends Tp{constructor(t){super(),this.component=t,hi.mapObjectToGlobalId(this,this.constructor.name,"m")}destroy(){this.component=null,super.removeAllListeners()}}const vh=class{constructor(){this._time=-1,this._delta=-1}reset(){this._time=-1,this._delta=-1}update(i){this._time<0?(this._time=i,this._delta=0):(this._delta=i-this._time,this._time=i,this._delta>vh.MAX_DELTA&&(this._delta=vh.MAX_DELTA))}get delta(){return this._delta}get time(){return this._time}};let Ha=vh;Ha.MAX_DELTA=100;const Ii=(i,t,e)=>{const n=typeof i=="string"?i:i.name,r=fs.getContext(e),s=r.data.get(n);if(s)return r.instantiate(s,t);throw new Error("Injection not found : "+n)};class Rf extends bp{constructor(t){super(t),this.timerModel=Ii(Ha,[this])}}class Sp{constructor(t){this.model=t,hi.mapObjectToGlobalId(this,this.constructor.name,"v")}destroy(){this.model=null}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="153",Mp=0,Hl=1,wp=2,Cf=1,Ap=2,Gn=3,li=0,ze=1,Hn=2,si=0,_r=1,zl=2,Vl=3,Wl=4,Rp=5,ur=100,Cp=101,Pp=102,Xl=103,Yl=104,Ip=200,Lp=201,Op=202,Dp=203,Pf=204,If=205,Up=206,Np=207,Fp=208,Bp=209,Gp=210,kp=0,Hp=1,zp=2,_h=3,Vp=4,Wp=5,Xp=6,Yp=7,ml=0,jp=1,qp=2,Xn=0,$p=1,Jp=2,Kp=3,Zp=4,Qp=5,Lf=300,Tr=301,br=302,gh=303,yh=304,za=306,xh=1e3,hn=1001,Eh=1002,He=1003,jl=1004,no=1005,$e=1006,tm=1007,Kr=1008,ai=1009,em=1010,nm=1011,vl=1012,Of=1013,ni=1014,ii=1015,Zr=1016,Df=1017,Uf=1018,Li=1020,im=1021,ln=1023,rm=1024,sm=1025,Oi=1026,Sr=1027,am=1028,Nf=1029,om=1030,Ff=1031,Bf=1033,io=33776,ro=33777,so=33778,ao=33779,ql=35840,$l=35841,Jl=35842,Kl=35843,hm=36196,Zl=37492,Ql=37496,tu=37808,eu=37809,nu=37810,iu=37811,ru=37812,su=37813,au=37814,ou=37815,hu=37816,lu=37817,uu=37818,cu=37819,fu=37820,du=37821,oo=36492,lm=36283,pu=36284,mu=36285,vu=36286,Gf=3e3,Di=3001,um=3200,cm=3201,kf=0,fm=1,Ui="",Ht="srgb",Sn="srgb-linear",Hf="display-p3",ho=7680,dm=519,pm=512,mm=513,vm=514,_m=515,gm=516,ym=517,xm=518,Em=519,_u=35044,gu="300 es",Th=1035,Wn=2e3,Ma=2001;class Rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lo=Math.PI/180,bh=180/Math.PI;function ds(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function Tm(i,t){return(i%t+t)%t}function uo(i,t,e){return(1-e)*i+e*t}function yu(i){return(i&i-1)===0&&i!==0}function Sh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,r,s,a,o,h,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,h,l)}set(t,e,n,r,s,a,o,h,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=h,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],h=n[6],l=n[1],u=n[4],c=n[7],f=n[2],d=n[5],m=n[8],_=r[0],p=r[3],v=r[6],y=r[1],g=r[4],T=r[7],E=r[2],b=r[5],w=r[8];return s[0]=a*_+o*y+h*E,s[3]=a*p+o*g+h*b,s[6]=a*v+o*T+h*w,s[1]=l*_+u*y+c*E,s[4]=l*p+u*g+c*b,s[7]=l*v+u*T+c*w,s[2]=f*_+d*y+m*E,s[5]=f*p+d*g+m*b,s[8]=f*v+d*T+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*h+r*s*l-r*a*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],c=u*a-o*l,f=o*h-u*s,d=l*s-a*h,m=e*c+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=c*_,t[1]=(r*l-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=f*_,t[4]=(u*e-r*h)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(n*h-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const h=Math.cos(s),l=Math.sin(s);return this.set(n*h,n*l,-n*(h*a+l*o)+a+t,-r*l,r*h,-r*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Vt;function zf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const xu={};function jr(i){i in xu||(xu[i]=!0,console.warn(i))}function gr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bm=new Vt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Sm=new Vt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Mm(i){return i.convertSRGBToLinear().applyMatrix3(Sm)}function wm(i){return i.applyMatrix3(bm).convertLinearToSRGB()}const Am={[Sn]:i=>i,[Ht]:i=>i.convertSRGBToLinear(),[Hf]:Mm},Rm={[Sn]:i=>i,[Ht]:i=>i.convertLinearToSRGB(),[Hf]:wm},Ze={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Sn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Am[t],r=Rm[e];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let Xi;class Vf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Qr("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gr(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gr(e[n]/255)*255):e[n]=gr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cm=0;class Wf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=ds(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(po(r[a].image)):s.push(po(r[a]))}else s=po(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pm=0,wn=class xa extends Rr{constructor(t=xa.DEFAULT_IMAGE,e=xa.DEFAULT_MAPPING,n=hn,r=hn,s=$e,a=Kr,o=ln,h=ai,l=xa.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=ds(),this.name="",this.source=new Wf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Di?Ht:Ui),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xh:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xh:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?Di:Gf}set encoding(t){jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Di?Ht:Ui}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Lf;wn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,r=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const h=t.elements,l=h[0],u=h[4],c=h[8],f=h[1],d=h[5],m=h[9],_=h[2],p=h[6],v=h[10];if(Math.abs(u-f)<.01&&Math.abs(c-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,T=(d+1)/2,E=(v+1)/2,b=(u+f)/4,w=(c+_)/4,C=(m+p)/4;return g>T&&g>E?g<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(g),r=b/n,s=w/n):T>E?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=b/r,s=C/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=w/s,r=C/s),this.set(n,r,s,e),this}let y=Math.sqrt((p-m)*(p-m)+(c-_)*(c-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(c-_)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bi extends Rr{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Di?Ht:Ui),this.texture=new wn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$e,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xf extends wn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Im extends wn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let h=n[r+0],l=n[r+1],u=n[r+2],c=n[r+3];const f=s[a+0],d=s[a+1],m=s[a+2],_=s[a+3];if(o===0){t[e+0]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(c!==_||h!==f||l!==d||u!==m){let p=1-o;const v=h*f+l*d+u*m+c*_,y=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){const E=Math.sqrt(g),b=Math.atan2(E,v*y);p=Math.sin(p*b)/E,o=Math.sin(o*b)/E}const T=o*y;if(h=h*p+f*T,l=l*p+d*T,u=u*p+m*T,c=c*p+_*T,p===1-o){const E=1/Math.sqrt(h*h+l*l+u*u+c*c);h*=E,l*=E,u*=E,c*=E}}t[e]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],h=n[r+1],l=n[r+2],u=n[r+3],c=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return t[e]=o*m+u*c+h*d-l*f,t[e+1]=h*m+u*f+l*c-o*d,t[e+2]=l*m+u*d+o*f-h*c,t[e+3]=u*m-o*c-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(n/2),u=o(r/2),c=o(s/2),f=h(n/2),d=h(r/2),m=h(s/2);switch(a){case"XYZ":this._x=f*u*c+l*d*m,this._y=l*d*c-f*u*m,this._z=l*u*m+f*d*c,this._w=l*u*c-f*d*m;break;case"YXZ":this._x=f*u*c+l*d*m,this._y=l*d*c-f*u*m,this._z=l*u*m-f*d*c,this._w=l*u*c+f*d*m;break;case"ZXY":this._x=f*u*c-l*d*m,this._y=l*d*c+f*u*m,this._z=l*u*m+f*d*c,this._w=l*u*c-f*d*m;break;case"ZYX":this._x=f*u*c-l*d*m,this._y=l*d*c+f*u*m,this._z=l*u*m-f*d*c,this._w=l*u*c+f*d*m;break;case"YZX":this._x=f*u*c+l*d*m,this._y=l*d*c+f*u*m,this._z=l*u*m-f*d*c,this._w=l*u*c-f*d*m;break;case"XZY":this._x=f*u*c-l*d*m,this._y=l*d*c-f*u*m,this._z=l*u*m+f*d*c,this._w=l*u*c+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],h=e[9],l=e[2],u=e[6],c=e[10],f=n+o+c;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-h)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>c){const d=2*Math.sqrt(1+n-o-c);this._w=(u-h)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>c){const d=2*Math.sqrt(1+o-n-c);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(h+u)/d}else{const d=2*Math.sqrt(1+c-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(h+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,h=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*h,this._y=r*u+a*h+s*o-n*l,this._z=s*u+a*l+n*h-r*o,this._w=a*u-n*o-r*h-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const h=1-o*o;if(h<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),u=Math.atan2(l,o),c=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*c+this._w*f,this._x=n*c+this._x*f,this._y=r*c+this._y*f,this._z=s*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,h=t.w,l=h*e+a*r-o*n,u=h*n+o*e-s*r,c=h*r+s*n-a*e,f=-s*e-a*n-o*r;return this.x=l*h+f*-s+u*-o-c*-a,this.y=u*h+f*-a+c*-s-l*-o,this.z=c*h+f*-o+l*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,h=e.z;return this.x=r*h-s*o,this.y=s*a-n*h,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new N,Eu=new ps;class ms{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Yi.copy(t.boundingBox),Yi.applyMatrix4(t.matrixWorld),this.union(Yi);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Ln.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Ln)}else r.boundingBox===null&&r.computeBoundingBox(),Yi.copy(r.boundingBox),Yi.applyMatrix4(t.matrixWorld),this.union(Yi)}const n=t.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),Ms.subVectors(this.max,Or),ji.subVectors(t.a,Or),qi.subVectors(t.b,Or),$i.subVectors(t.c,Or),Jn.subVectors(qi,ji),Kn.subVectors($i,qi),mi.subVectors(ji,$i);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!vo(e,ji,qi,$i,Ms)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,ji,qi,$i,Ms))?!1:(ws.crossVectors(Jn,Kn),e=[ws.x,ws.y,ws.z],vo(e,ji,qi,$i,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new N,new N,new N,new N,new N,new N,new N,new N],Ln=new N,Yi=new ms,ji=new N,qi=new N,$i=new N,Jn=new N,Kn=new N,mi=new N,Or=new N,Ms=new N,ws=new N,vi=new N;function vo(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){vi.fromArray(i,s);const o=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),h=t.dot(vi),l=e.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>o)return!1}return!0}const Lm=new ms,Dr=new N,_o=new N;class _l{constructor(t=new N,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);const e=Dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Dr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(_o)),this.expandByPoint(Dr.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new N,go=new N,As=new N,Zn=new N,yo=new N,Rs=new N,xo=new N;class Yf{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){go.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(go);const s=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=Zn.dot(this.direction),h=-Zn.dot(As),l=Zn.lengthSq(),u=Math.abs(1-a*a);let c,f,d,m;if(u>0)if(c=a*h-o,f=a*o-h,m=s*u,c>=0)if(f>=-m)if(f<=m){const _=1/u;c*=_,f*=_,d=c*(c+a*f+2*o)+f*(a*c+f+2*h)+l}else f=s,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*h)+l;else f=-s,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*h)+l;else f<=-m?(c=Math.max(0,-(-a*s+o)),f=c>0?-s:Math.min(Math.max(-s,-h),s),d=-c*c+f*(f+2*h)+l):f<=m?(c=0,f=Math.min(Math.max(-s,-h),s),d=f*(f+2*h)+l):(c=Math.max(0,-(a*s+o)),f=c>0?s:Math.min(Math.max(-s,-h),s),d=-c*c+f*(f+2*h)+l);else f=a>0?-s:s,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(go).addScaledVector(As,f),d}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),r=On.dot(On)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,h;const l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),c>=0?(o=(t.min.z-f.z)*c,h=(t.max.z-f.z)*c):(o=(t.max.z-f.z)*c,h=(t.min.z-f.z)*c),n>h||o>r)||((o>n||n!==n)&&(n=o),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,r,s){yo.subVectors(e,t),Rs.subVectors(n,t),xo.crossVectors(yo,Rs);let a=this.direction.dot(xo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,t);const h=o*this.direction.dot(Rs.crossVectors(Zn,Rs));if(h<0)return null;const l=o*this.direction.dot(yo.cross(Zn));if(l<0||h+l>a)return null;const u=-o*Zn.dot(xo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,r,s,a,o,h,l,u,c,f,d,m,_,p){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,h,l,u,c,f,d,m,_,p)}set(t,e,n,r,s,a,o,h,l,u,c,f,d,m,_,p){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=h,v[2]=l,v[6]=u,v[10]=c,v[14]=f,v[3]=d,v[7]=m,v[11]=_,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ji.setFromMatrixColumn(t,0).length(),s=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(r),l=Math.sin(r),u=Math.cos(s),c=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*c,m=o*u,_=o*c;e[0]=h*u,e[4]=-h*c,e[8]=l,e[1]=d+m*l,e[5]=f-_*l,e[9]=-o*h,e[2]=_-f*l,e[6]=m+d*l,e[10]=a*h}else if(t.order==="YXZ"){const f=h*u,d=h*c,m=l*u,_=l*c;e[0]=f+_*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*c,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=_+f*o,e[10]=a*h}else if(t.order==="ZXY"){const f=h*u,d=h*c,m=l*u,_=l*c;e[0]=f-_*o,e[4]=-a*c,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const f=a*u,d=a*c,m=o*u,_=o*c;e[0]=h*u,e[4]=m*l-d,e[8]=f*l+_,e[1]=h*c,e[5]=_*l+f,e[9]=d*l-m,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const f=a*h,d=a*l,m=o*h,_=o*l;e[0]=h*u,e[4]=_-f*c,e[8]=m*c+d,e[1]=c,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*c+m,e[10]=f-_*c}else if(t.order==="XZY"){const f=a*h,d=a*l,m=o*h,_=o*l;e[0]=h*u,e[4]=-c,e[8]=l*u,e[1]=f*c+_,e[5]=a*u,e[9]=d*c-m,e[2]=m*c-d,e[6]=o*u,e[10]=_*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Om,t,Dm)}lookAt(t,e,n){const r=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Qn.crossVectors(n,Xe),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Qn.crossVectors(n,Xe)),Qn.normalize(),Cs.crossVectors(Xe,Qn),r[0]=Qn.x,r[4]=Cs.x,r[8]=Xe.x,r[1]=Qn.y,r[5]=Cs.y,r[9]=Xe.y,r[2]=Qn.z,r[6]=Cs.z,r[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],h=n[8],l=n[12],u=n[1],c=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],v=n[14],y=n[3],g=n[7],T=n[11],E=n[15],b=r[0],w=r[4],C=r[8],x=r[12],S=r[1],F=r[5],H=r[9],L=r[13],G=r[2],P=r[6],B=r[10],z=r[14],Y=r[3],K=r[7],U=r[11],W=r[15];return s[0]=a*b+o*S+h*G+l*Y,s[4]=a*w+o*F+h*P+l*K,s[8]=a*C+o*H+h*B+l*U,s[12]=a*x+o*L+h*z+l*W,s[1]=u*b+c*S+f*G+d*Y,s[5]=u*w+c*F+f*P+d*K,s[9]=u*C+c*H+f*B+d*U,s[13]=u*x+c*L+f*z+d*W,s[2]=m*b+_*S+p*G+v*Y,s[6]=m*w+_*F+p*P+v*K,s[10]=m*C+_*H+p*B+v*U,s[14]=m*x+_*L+p*z+v*W,s[3]=y*b+g*S+T*G+E*Y,s[7]=y*w+g*F+T*P+E*K,s[11]=y*C+g*H+T*B+E*U,s[15]=y*x+g*L+T*z+E*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],h=t[9],l=t[13],u=t[2],c=t[6],f=t[10],d=t[14],m=t[3],_=t[7],p=t[11],v=t[15];return m*(+s*h*c-r*l*c-s*o*f+n*l*f+r*o*d-n*h*d)+_*(+e*h*d-e*l*f+s*a*f-r*a*d+r*l*u-s*h*u)+p*(+e*l*c-e*o*d-s*a*c+n*a*d+s*o*u-n*l*u)+v*(-r*o*u-e*h*c+e*o*f+r*a*c-n*a*f+n*h*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],c=t[9],f=t[10],d=t[11],m=t[12],_=t[13],p=t[14],v=t[15],y=c*p*l-_*f*l+_*h*d-o*p*d-c*h*v+o*f*v,g=m*f*l-u*p*l-m*h*d+a*p*d+u*h*v-a*f*v,T=u*_*l-m*c*l+m*o*d-a*_*d-u*o*v+a*c*v,E=m*c*h-u*_*h-m*o*f+a*_*f+u*o*p-a*c*p,b=e*y+n*g+r*T+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=y*w,t[1]=(_*f*s-c*p*s-_*r*d+n*p*d+c*r*v-n*f*v)*w,t[2]=(o*p*s-_*h*s+_*r*l-n*p*l-o*r*v+n*h*v)*w,t[3]=(c*h*s-o*f*s-c*r*l+n*f*l+o*r*d-n*h*d)*w,t[4]=g*w,t[5]=(u*p*s-m*f*s+m*r*d-e*p*d-u*r*v+e*f*v)*w,t[6]=(m*h*s-a*p*s-m*r*l+e*p*l+a*r*v-e*h*v)*w,t[7]=(a*f*s-u*h*s+u*r*l-e*f*l-a*r*d+e*h*d)*w,t[8]=T*w,t[9]=(m*c*s-u*_*s-m*n*d+e*_*d+u*n*v-e*c*v)*w,t[10]=(a*_*s-m*o*s+m*n*l-e*_*l-a*n*v+e*o*v)*w,t[11]=(u*o*s-a*c*s-u*n*l+e*c*l+a*n*d-e*o*d)*w,t[12]=E*w,t[13]=(u*_*r-m*c*r+m*n*f-e*_*f-u*n*p+e*c*p)*w,t[14]=(m*o*r-a*_*r-m*n*h+e*_*h+a*n*p-e*o*p)*w,t[15]=(a*c*r-u*o*r+u*n*h-e*c*h-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,h=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*h,l*h+r*o,0,l*o+r*h,u*o+n,u*h-r*a,0,l*h-r*o,u*h+r*a,s*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,h=e._w,l=s+s,u=a+a,c=o+o,f=s*l,d=s*u,m=s*c,_=a*u,p=a*c,v=o*c,y=h*l,g=h*u,T=h*c,E=n.x,b=n.y,w=n.z;return r[0]=(1-(_+v))*E,r[1]=(d+T)*E,r[2]=(m-g)*E,r[3]=0,r[4]=(d-T)*b,r[5]=(1-(f+v))*b,r[6]=(p+y)*b,r[7]=0,r[8]=(m+g)*w,r[9]=(p-y)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const a=Ji.set(r[4],r[5],r[6]).length(),o=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Qe.copy(this);const l=1/s,u=1/a,c=1/o;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=u,Qe.elements[5]*=u,Qe.elements[6]*=u,Qe.elements[8]*=c,Qe.elements[9]*=c,Qe.elements[10]*=c,e.setFromRotationMatrix(Qe),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Wn){const h=this.elements,l=2*s/(e-t),u=2*s/(n-r),c=(e+t)/(e-t),f=(n+r)/(n-r);let d,m;if(o===Wn)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Ma)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Wn){const h=this.elements,l=1/(e-t),u=1/(n-r),c=1/(a-s),f=(e+t)*l,d=(n+r)*u;let m,_;if(o===Wn)m=(a+s)*c,_=-2*c;else if(o===Ma)m=s*c,_=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*u,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=_,h[14]=-m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new N,Qe=new ye,Om=new N(0,0,0),Dm=new N(1,1,1),Qn=new N,Cs=new N,Xe=new N,Tu=new ye,bu=new ps;class Va{constructor(t=0,e=0,n=0,r=Va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],h=r[1],l=r[5],u=r[9],c=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bu.setFromEuler(this),this.setFromQuaternion(bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Va.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Um=0;const Su=new N,Ki=new ps,Dn=new ye,Ps=new N,Ur=new N,Nm=new N,Fm=new ps,Mu=new N(1,0,0),wu=new N(0,1,0),Au=new N(0,0,1),Bm={type:"added"},Ru={type:"removed"};class Ne extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new N,e=new Va,n=new ps,r=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ye},normalMatrix:{value:new Vt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(wu,t)}rotateZ(t){return this.rotateOnAxis(Au,t)}translateOnAxis(t,e){return Su.copy(t).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(wu,t)}translateZ(t){return this.translateOnAxis(Au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ur,Ps,this.up):Dn.lookAt(Ps,Ur,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ru)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ru)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){const c=h[l];s(t.shapes,c)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(s(t.materials,this.material[h]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];r.animations.push(s(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),l=a(t.textures),u=a(t.images),c=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const h=[];for(const l in o){const u=o[l];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ne.DEFAULT_UP=new N(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new N,Un=new N,Eo=new N,Nn=new N,Zi=new N,Qi=new N,Cu=new N,To=new N,bo=new N,So=new N;let Is=!1;class an{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),tn.subVectors(t,e),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){tn.subVectors(r,e),Un.subVectors(n,e),Eo.subVectors(t,e);const a=tn.dot(tn),o=tn.dot(Un),h=tn.dot(Eo),l=Un.dot(Un),u=Un.dot(Eo),c=a*l-o*o;if(c===0)return s.set(-2,-1,-1);const f=1/c,d=(l*h-o*u)*f,m=(a*u-o*h)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Nn),Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(t,e,n,r,s,a,o,h){return Is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Is=!0),this.getInterpolation(t,e,n,r,s,a,o,h)}static getInterpolation(t,e,n,r,s,a,o,h){return this.getBarycoord(t,e,n,r,Nn),h.setScalar(0),h.addScaledVector(s,Nn.x),h.addScaledVector(a,Nn.y),h.addScaledVector(o,Nn.z),h}static isFrontFacing(t,e,n,r){return tn.subVectors(n,e),Un.subVectors(t,e),tn.cross(Un).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),tn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return Is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Is=!0),an.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Zi.subVectors(r,n),Qi.subVectors(s,n),To.subVectors(t,n);const h=Zi.dot(To),l=Qi.dot(To);if(h<=0&&l<=0)return e.copy(n);bo.subVectors(t,r);const u=Zi.dot(bo),c=Qi.dot(bo);if(u>=0&&c<=u)return e.copy(r);const f=h*c-u*l;if(f<=0&&h>=0&&u<=0)return a=h/(h-u),e.copy(n).addScaledVector(Zi,a);So.subVectors(t,s);const d=Zi.dot(So),m=Qi.dot(So);if(m>=0&&d<=m)return e.copy(s);const _=d*l-h*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Qi,o);const p=u*m-d*c;if(p<=0&&c-u>=0&&d-m>=0)return Cu.subVectors(s,r),o=(c-u)/(c-u+(d-m)),e.copy(r).addScaledVector(Cu,o);const v=1/(p+_+f);return a=_*v,o=f*v,e.copy(n).addScaledVector(Zi,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Gm=0;class vs extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=_r,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Pf,this.blendDst=If,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_h,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const h=s[o];delete h.metadata,a.push(h)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ht){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ze.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Ze.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Ze.workingColorSpace){if(t=Tm(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Mo(a,s,t+1/3),this.g=Mo(a,s,t),this.b=Mo(a,s,t-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(t,e=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ht){const n=jf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ht){return Ze.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Le(Ue.r*255,0,255))*65536+Math.round(Le(Ue.g*255,0,255))*256+Math.round(Le(Ue.b*255,0,255))}getHexString(t=Ht){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,r=Ue.g,s=Ue.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let h,l;const u=(o+a)/2;if(o===a)h=0,l=0;else{const c=a-o;switch(l=u<=.5?c/(a+o):c/(2-a-o),a){case n:h=(r-s)/c+(r<s?6:0);break;case r:h=(s-n)/c+2;break;case s:h=(n-r)/c+4;break}h/=6}return t.h=h,t.s=l,t.l=u,t}getRGB(t,e=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ht){Ze.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,r=Ue.b;return t!==Ht?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(en),en.h+=t,en.s+=e,en.l+=n,this.setHSL(en.h,en.s,en.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(Ls);const n=uo(en.h,Ls.h,e),r=uo(en.s,Ls.s,e),s=uo(en.l,Ls.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Zt;Zt.NAMES=jf;class yl extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new N,Os=new yt;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_u,this.updateRange={offset:0,count:-1},this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_u&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class qf extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $f extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let km=0;const qe=new ye,wo=new Ne,tr=new N,Ye=new ms,Nr=new ms,Ae=new N;class An extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zf(t)?$f:qf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Ye.min,Nr.min),Ye.expandByPoint(Ae),Ae.addVectors(Ye.max,Nr.max),Ye.expandByPoint(Ae)):(Ye.expandByPoint(Nr.min),Ye.expandByPoint(Nr.max))}Ye.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],h=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ae.fromBufferAttribute(o,l),h&&(tr.fromBufferAttribute(t,l),Ae.add(tr)),r=Math.max(r,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*o),4));const h=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<o;S++)l[S]=new N,u[S]=new N;const c=new N,f=new N,d=new N,m=new yt,_=new yt,p=new yt,v=new N,y=new N;function g(S,F,H){c.fromArray(r,S*3),f.fromArray(r,F*3),d.fromArray(r,H*3),m.fromArray(a,S*2),_.fromArray(a,F*2),p.fromArray(a,H*2),f.sub(c),d.sub(c),_.sub(m),p.sub(m);const L=1/(_.x*p.y-p.x*_.y);isFinite(L)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(L),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(L),l[S].add(v),l[F].add(v),l[H].add(v),u[S].add(y),u[F].add(y),u[H].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let S=0,F=T.length;S<F;++S){const H=T[S],L=H.start,G=H.count;for(let P=L,B=L+G;P<B;P+=3)g(n[P+0],n[P+1],n[P+2])}const E=new N,b=new N,w=new N,C=new N;function x(S){w.fromArray(s,S*3),C.copy(w);const F=l[S];E.copy(F),E.sub(w.multiplyScalar(w.dot(F))).normalize(),b.crossVectors(C,F);const L=b.dot(u[S])<0?-1:1;h[S*4]=E.x,h[S*4+1]=E.y,h[S*4+2]=E.z,h[S*4+3]=L}for(let S=0,F=T.length;S<F;++S){const H=T[S],L=H.start,G=H.count;for(let P=L,B=L+G;P<B;P+=3)x(n[P+0]),x(n[P+1]),x(n[P+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,h=new N,l=new N,u=new N,c=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),c.subVectors(r,s),u.cross(c),o.fromBufferAttribute(n,m),h.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),h.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),c.subVectors(r,s),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,h){const l=o.array,u=o.itemSize,c=o.normalized,f=new l.constructor(h.length*u);let d=0,m=0;for(let _=0,p=h.length;_<p;_++){o.isInterleavedBufferAttribute?d=h[_]*o.data.stride+o.offset:d=h[_]*u;for(let v=0;v<u;v++)f[m++]=l[d++]}return new En(f,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new An,n=this.index.array,r=this.attributes;for(const o in r){const h=r[o],l=t(h,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const h=[],l=s[o];for(let u=0,c=l.length;u<c;u++){const f=l[u],d=t(f,n);h.push(d)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const r={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],u=[];for(let c=0,f=l.length;c<f;c++){const d=l[c];u.push(d.toJSON(t.data))}u.length>0&&(r[h]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],c=s[l];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const c=a[l];this.addGroup(c.start,c.count,c.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new ye,_i=new Yf,Ds=new _l,Iu=new N,er=new N,nr=new N,ir=new N,Ao=new N,Us=new N,Ns=new yt,Fs=new yt,Bs=new yt,Lu=new N,Ou=new N,Du=new N,Gs=new N,ks=new N;let gn=class extends Ne{constructor(t=new An,e=new yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Us.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const u=o[h],c=s[h];u!==0&&(Ao.fromBufferAttribute(c,t),a?Us.addScaledVector(Ao,u):Us.addScaledVector(Ao.sub(e),u))}e.add(Us)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),_i.copy(t.ray).recast(t.near),!(Ds.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Ds,Iu)===null||_i.origin.distanceToSquared(Iu)>(t.far-t.near)**2))&&(Pu.copy(s).invert(),_i.copy(t.ray).applyMatrix4(Pu),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,h=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],v=a[p.materialIndex],y=Math.max(p.start,d.start),g=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let T=y,E=g;T<E;T+=3){const b=o.getX(T),w=o.getX(T+1),C=o.getX(T+2);r=Hs(this,v,t,n,l,u,c,b,w,C),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=m,v=_;p<v;p+=3){const y=o.getX(p),g=o.getX(p+1),T=o.getX(p+2);r=Hs(this,a,t,n,l,u,c,y,g,T),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],v=a[p.materialIndex],y=Math.max(p.start,d.start),g=Math.min(h.count,Math.min(p.start+p.count,d.start+d.count));for(let T=y,E=g;T<E;T+=3){const b=T,w=T+1,C=T+2;r=Hs(this,v,t,n,l,u,c,b,w,C),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(h.count,d.start+d.count);for(let p=m,v=_;p<v;p+=3){const y=p,g=p+1,T=p+2;r=Hs(this,a,t,n,l,u,c,y,g,T),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function Hm(i,t,e,n,r,s,a,o){let h;if(t.side===ze?h=n.intersectTriangle(a,s,r,!0,o):h=n.intersectTriangle(r,s,a,t.side===li,o),h===null)return null;ks.copy(o),ks.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ks);return l<e.near||l>e.far?null:{distance:l,point:ks.clone(),object:i}}function Hs(i,t,e,n,r,s,a,o,h,l){i.getVertexPosition(o,er),i.getVertexPosition(h,nr),i.getVertexPosition(l,ir);const u=Hm(i,t,e,n,er,nr,ir,Gs);if(u){r&&(Ns.fromBufferAttribute(r,o),Fs.fromBufferAttribute(r,h),Bs.fromBufferAttribute(r,l),u.uv=an.getInterpolation(Gs,er,nr,ir,Ns,Fs,Bs,new yt)),s&&(Ns.fromBufferAttribute(s,o),Fs.fromBufferAttribute(s,h),Bs.fromBufferAttribute(s,l),u.uv1=an.getInterpolation(Gs,er,nr,ir,Ns,Fs,Bs,new yt),u.uv2=u.uv1),a&&(Lu.fromBufferAttribute(a,o),Ou.fromBufferAttribute(a,h),Du.fromBufferAttribute(a,l),u.normal=an.getInterpolation(Gs,er,nr,ir,Lu,Ou,Du,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:h,c:l,normal:new N,materialIndex:0};an.getNormal(er,nr,ir,c.normal),u.face=c}return u}class Cr extends An{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const h=[],l=[],u=[],c=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,r,a,2),m("x","z","y",1,-1,t,n,-e,r,a,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(c,2));function m(_,p,v,y,g,T,E,b,w,C,x){const S=T/w,F=E/C,H=T/2,L=E/2,G=b/2,P=w+1,B=C+1;let z=0,Y=0;const K=new N;for(let U=0;U<B;U++){const W=U*F-L;for(let O=0;O<P;O++){const j=O*S-H;K[_]=j*y,K[p]=W*g,K[v]=G,l.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[v]=b>0?1:-1,u.push(K.x,K.y,K.z),c.push(O/w),c.push(1-U/C),z+=1}}for(let U=0;U<C;U++)for(let W=0;W<w;W++){const O=f+W+P*U,j=f+W+P*(U+1),$=f+(W+1)+P*(U+1),et=f+(W+1)+P*U;h.push(O,j,et),h.push(j,$,et),Y+=6}o.addGroup(d,Y,x),d+=Y,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=Mr(i[e]);for(const r in n)t[r]=n[r]}return t}function zm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jf(i){return i.getRenderTarget()===null?i.outputColorSpace:Sn}const Vm={clone:Mr,merge:ke};var Wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=zm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kf extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Je extends Kf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/h,e-=a.offsetY*n/l,r*=a.width/h,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,sr=1;class Ym extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Je(rr,sr,t,e);r.layers=this.layers,this.add(r);const s=new Je(rr,sr,t,e);s.layers=this.layers,this.add(s);const a=new Je(rr,sr,t,e);a.layers=this.layers,this.add(a);const o=new Je(rr,sr,t,e);o.layers=this.layers,this.add(o);const h=new Je(rr,sr,t,e);h.layers=this.layers,this.add(h);const l=new Je(rr,sr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,h]=e;for(const l of e)this.remove(l);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,h,l]=this.children,u=t.getRenderTarget(),c=t.toneMapping,f=t.xr.enabled;t.toneMapping=Xn,t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,r),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,h),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=c,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Zf extends wn{constructor(t,e,n,r,s,a,o,h,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Tr,super(t,e,n,r,s,a,o,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jm extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Di?Ht:Ui),this.texture=new Zf(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cr(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:si});s.uniforms.tEquirect.value=e;const a=new gn(r,s),o=e.minFilter;return e.minFilter===Kr&&(e.minFilter=$e),new Ym(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Ro=new N,qm=new N,$m=new Vt;class Si{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ro.subVectors(n,e).cross(qm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ro),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$m.getNormalMatrix(t),r=this.coplanarPoint(Ro).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new _l,zs=new N;class xl{constructor(t=new Si,e=new Si,n=new Si,r=new Si,s=new Si,a=new Si){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],h=r[3],l=r[4],u=r[5],c=r[6],f=r[7],d=r[8],m=r[9],_=r[10],p=r[11],v=r[12],y=r[13],g=r[14],T=r[15];if(n[0].setComponents(h-s,f-l,p-d,T-v).normalize(),n[1].setComponents(h+s,f+l,p+d,T+v).normalize(),n[2].setComponents(h+a,f+u,p+m,T+y).normalize(),n[3].setComponents(h-a,f-u,p-m,T-y).normalize(),n[4].setComponents(h-o,f-c,p-_,T-g).normalize(),e===Wn)n[5].setComponents(h+o,f+c,p+_,T+g).normalize();else if(e===Ma)n[5].setComponents(o,c,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(zs.x=r.normal.x>0?t.max.x:t.min.x,zs.y=r.normal.y>0?t.max.y:t.min.y,zs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qf(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Jm(i,t){const e=t.isWebGL2,n=new WeakMap;function r(l,u){const c=l.array,f=l.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,c,f),l.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)m=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,c){const f=u.array,d=u.updateRange;i.bindBuffer(c,l),d.count===-1?i.bufferSubData(c,0,f):(e?i.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function h(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c===void 0?n.set(l,r(l,u)):c.version<l.version&&(s(c.buffer,l,u),c.version=l.version)}return{get:a,remove:o,update:h}}let Km=class td extends An{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),h=Math.floor(r),l=o+1,u=h+1,c=t/o,f=e/h,d=[],m=[],_=[],p=[];for(let v=0;v<u;v++){const y=v*f-a;for(let g=0;g<l;g++){const T=g*c-s;m.push(T,-y,0),_.push(0,0,1),p.push(g/o),p.push(1-v/h)}}for(let v=0;v<h;v++)for(let y=0;y<o;y++){const g=y+l*v,T=y+l*(v+1),E=y+1+l*(v+1),b=y+1+l*v;d.push(g,T,b),d.push(T,E,b)}this.setIndex(d),this.setAttribute("position",new Fe(m,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new td(t.width,t.height,t.widthSegments,t.heightSegments)}};var Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rv="vec3 transformed = vec3( position );",sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,av=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ov=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_v=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,jv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,l_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,u_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,c_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,__=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,g_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Q_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,og=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zt={alphamap_fragment:Zm,alphamap_pars_fragment:Qm,alphatest_fragment:tv,alphatest_pars_fragment:ev,aomap_fragment:nv,aomap_pars_fragment:iv,begin_vertex:rv,beginnormal_vertex:sv,bsdfs:av,iridescence_fragment:ov,bumpmap_pars_fragment:hv,clipping_planes_fragment:lv,clipping_planes_pars_fragment:uv,clipping_planes_pars_vertex:cv,clipping_planes_vertex:fv,color_fragment:dv,color_pars_fragment:pv,color_pars_vertex:mv,color_vertex:vv,common:_v,cube_uv_reflection_fragment:gv,defaultnormal_vertex:yv,displacementmap_pars_vertex:xv,displacementmap_vertex:Ev,emissivemap_fragment:Tv,emissivemap_pars_fragment:bv,encodings_fragment:Sv,encodings_pars_fragment:Mv,envmap_fragment:wv,envmap_common_pars_fragment:Av,envmap_pars_fragment:Rv,envmap_pars_vertex:Cv,envmap_physical_pars_fragment:Hv,envmap_vertex:Pv,fog_vertex:Iv,fog_pars_vertex:Lv,fog_fragment:Ov,fog_pars_fragment:Dv,gradientmap_pars_fragment:Uv,lightmap_fragment:Nv,lightmap_pars_fragment:Fv,lights_lambert_fragment:Bv,lights_lambert_pars_fragment:Gv,lights_pars_begin:kv,lights_toon_fragment:zv,lights_toon_pars_fragment:Vv,lights_phong_fragment:Wv,lights_phong_pars_fragment:Xv,lights_physical_fragment:Yv,lights_physical_pars_fragment:jv,lights_fragment_begin:qv,lights_fragment_maps:$v,lights_fragment_end:Jv,logdepthbuf_fragment:Kv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Qv,logdepthbuf_vertex:t_,map_fragment:e_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:r_,metalnessmap_fragment:s_,metalnessmap_pars_fragment:a_,morphcolor_vertex:o_,morphnormal_vertex:h_,morphtarget_pars_vertex:l_,morphtarget_vertex:u_,normal_fragment_begin:c_,normal_fragment_maps:f_,normal_pars_fragment:d_,normal_pars_vertex:p_,normal_vertex:m_,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:__,clearcoat_normal_fragment_maps:g_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:x_,output_fragment:E_,packing:T_,premultiplied_alpha_fragment:b_,project_vertex:S_,dithering_fragment:M_,dithering_pars_fragment:w_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:R_,shadowmap_pars_fragment:C_,shadowmap_pars_vertex:P_,shadowmap_vertex:I_,shadowmask_pars_fragment:L_,skinbase_vertex:O_,skinning_pars_vertex:D_,skinning_vertex:U_,skinnormal_vertex:N_,specularmap_fragment:F_,specularmap_pars_fragment:B_,tonemapping_fragment:G_,tonemapping_pars_fragment:k_,transmission_fragment:H_,transmission_pars_fragment:z_,uv_pars_fragment:V_,uv_pars_vertex:W_,uv_vertex:X_,worldpos_vertex:Y_,background_vert:j_,background_frag:q_,backgroundCube_vert:$_,backgroundCube_frag:J_,cube_vert:K_,cube_frag:Z_,depth_vert:Q_,depth_frag:tg,distanceRGBA_vert:eg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:rg,linedashed_vert:sg,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:hg,meshlambert_vert:lg,meshlambert_frag:ug,meshmatcap_vert:cg,meshmatcap_frag:fg,meshnormal_vert:dg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:vg,meshphysical_vert:_g,meshphysical_frag:gg,meshtoon_vert:yg,meshtoon_frag:xg,points_vert:Eg,points_frag:Tg,shadow_vert:bg,shadow_frag:Sg,sprite_vert:Mg,sprite_frag:wg},ot={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},vn={basic:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ke([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ke([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ke([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ke([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ke([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ke([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ke([ot.common,ot.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ke([ot.lights,ot.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};vn.physical={uniforms:ke([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Vs={r:0,b:0,g:0};function Ag(i,t,e,n,r,s,a){const o=new Zt(0);let h=s===!0?0:1,l,u,c=null,f=0,d=null;function m(p,v){let y=!1,g=v.isScene===!0?v.background:null;switch(g&&g.isTexture&&(g=(v.backgroundBlurriness>0?e:t).get(g)),g===null?_(o,h):g&&g.isColor&&(_(g,1),y=!0),i.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===za)?(u===void 0&&(u=new gn(new Cr(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Mr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Ht,(c!==g||f!==g.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,c=g,f=g.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new gn(new Km(2,2),new Gi({name:"BackgroundMaterial",uniforms:Mr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=g.colorSpace!==Ht,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(c!==g||f!==g.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,c=g,f=g.version,d=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,v){p.getRGB(Vs,Jf(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),h=v,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,_(o,h)},render:m}}function Rg(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},h=p(null);let l=h,u=!1;function c(G,P,B,z,Y){let K=!1;if(a){const U=_(z,B,P);l!==U&&(l=U,d(l.object)),K=v(G,z,B,Y),K&&y(G,z,B,Y)}else{const U=P.wireframe===!0;(l.geometry!==z.id||l.program!==B.id||l.wireframe!==U)&&(l.geometry=z.id,l.program=B.id,l.wireframe=U,K=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,C(G,P,B,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(G){return n.isWebGL2?i.bindVertexArray(G):s.bindVertexArrayOES(G)}function m(G){return n.isWebGL2?i.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function _(G,P,B){const z=B.wireframe===!0;let Y=o[G.id];Y===void 0&&(Y={},o[G.id]=Y);let K=Y[P.id];K===void 0&&(K={},Y[P.id]=K);let U=K[z];return U===void 0&&(U=p(f()),K[z]=U),U}function p(G){const P=[],B=[],z=[];for(let Y=0;Y<r;Y++)P[Y]=0,B[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:z,object:G,attributes:{},index:null}}function v(G,P,B,z){const Y=l.attributes,K=P.attributes;let U=0;const W=B.getAttributes();for(const O in W)if(W[O].location>=0){const $=Y[O];let et=K[O];if(et===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(et=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(et=G.instanceColor)),$===void 0||$.attribute!==et||et&&$.data!==et.data)return!0;U++}return l.attributesNum!==U||l.index!==z}function y(G,P,B,z){const Y={},K=P.attributes;let U=0;const W=B.getAttributes();for(const O in W)if(W[O].location>=0){let $=K[O];$===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&($=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&($=G.instanceColor));const et={};et.attribute=$,$&&$.data&&(et.data=$.data),Y[O]=et,U++}l.attributes=Y,l.attributesNum=U,l.index=z}function g(){const G=l.newAttributes;for(let P=0,B=G.length;P<B;P++)G[P]=0}function T(G){E(G,0)}function E(G,P){const B=l.newAttributes,z=l.enabledAttributes,Y=l.attributeDivisors;B[G]=1,z[G]===0&&(i.enableVertexAttribArray(G),z[G]=1),Y[G]!==P&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,P),Y[G]=P)}function b(){const G=l.newAttributes,P=l.enabledAttributes;for(let B=0,z=P.length;B<z;B++)P[B]!==G[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function w(G,P,B,z,Y,K,U){U===!0?i.vertexAttribIPointer(G,P,B,Y,K):i.vertexAttribPointer(G,P,B,z,Y,K)}function C(G,P,B,z){if(n.isWebGL2===!1&&(G.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const Y=z.attributes,K=B.getAttributes(),U=P.defaultAttributeValues;for(const W in K){const O=K[W];if(O.location>=0){let j=Y[W];if(j===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),j!==void 0){const $=j.normalized,et=j.itemSize,tt=e.get(j);if(tt===void 0)continue;const ht=tt.buffer,Et=tt.type,vt=tt.bytesPerElement,Gt=n.isWebGL2===!0&&(Et===i.INT||Et===i.UNSIGNED_INT||j.gpuType===Of);if(j.isInterleavedBufferAttribute){const pt=j.data,D=pt.stride,Nt=j.offset;if(pt.isInstancedInterleavedBuffer){for(let st=0;st<O.locationSize;st++)E(O.location+st,pt.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let st=0;st<O.locationSize;st++)T(O.location+st);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let st=0;st<O.locationSize;st++)w(O.location+st,et/O.locationSize,Et,$,D*vt,(Nt+et/O.locationSize*st)*vt,Gt)}else{if(j.isInstancedBufferAttribute){for(let pt=0;pt<O.locationSize;pt++)E(O.location+pt,j.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pt=0;pt<O.locationSize;pt++)T(O.location+pt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let pt=0;pt<O.locationSize;pt++)w(O.location+pt,et/O.locationSize,Et,$,et*vt,et/O.locationSize*pt*vt,Gt)}}else if(U!==void 0){const $=U[W];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(O.location,$);break;case 3:i.vertexAttrib3fv(O.location,$);break;case 4:i.vertexAttrib4fv(O.location,$);break;default:i.vertexAttrib1fv(O.location,$)}}}}b()}function x(){H();for(const G in o){const P=o[G];for(const B in P){const z=P[B];for(const Y in z)m(z[Y].object),delete z[Y];delete P[B]}delete o[G]}}function S(G){if(o[G.id]===void 0)return;const P=o[G.id];for(const B in P){const z=P[B];for(const Y in z)m(z[Y].object),delete z[Y];delete P[B]}delete o[G.id]}function F(G){for(const P in o){const B=o[P];if(B[G.id]===void 0)continue;const z=B[G.id];for(const Y in z)m(z[Y].object),delete z[Y];delete B[G.id]}}function H(){L(),u=!0,l!==h&&(l=h,d(l.object))}function L(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:c,reset:H,resetDefaultState:L,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:F,initAttributes:g,enableAttribute:T,disableUnusedAttributes:b}}function Cg(i,t,e,n){const r=n.isWebGL2;let s;function a(l){s=l}function o(l,u){i.drawArrays(s,l,u),e.update(u,s,1)}function h(l,u,c){if(c===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,c),e.update(u,s,c)}this.setMode=a,this.render=o,this.renderInstances=h}function Pg(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const h=s(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,T=a||t.has("OES_texture_float"),E=g&&T,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:b}}function Ig(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Si,o=new Vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){const d=c.length!==0||f||n!==0||r;return r=f,n=c.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){const m=c.clippingPlanes,_=c.clipIntersection,p=c.clipShadows,v=i.get(c);if(!r||m===null||m.length===0||s&&!p)s?u(null):l();else{const y=s?0:n,g=y*4;let T=v.clippingState||null;h.value=T,T=u(m,f,g,d);for(let E=0;E!==g;++E)T[E]=e[E];v.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,f,d,m){const _=c!==null?c.length:0;let p=null;if(_!==0){if(p=h.value,m!==!0||p===null){const v=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<v)&&(p=new Float32Array(v));for(let g=0,T=d;g!==_;++g,T+=4)a.copy(c[g]).applyMatrix4(y,o),a.normal.toArray(p,T),p[T+3]=a.constant}h.value=p,h.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Lg(i){let t=new WeakMap;function e(a,o){return o===gh?a.mapping=Tr:o===yh&&(a.mapping=br),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===gh||o===yh)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const l=new jm(h.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ed extends Kf{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cr=4,Uu=[.125,.215,.35,.446,.526,.582],Pi=20,Co=new ed,Nu=new Zt;let Po=null;const Mi=(1+Math.sqrt(5))/2,ar=1/Mi,Fu=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Mi,ar),new N(0,Mi,-ar),new N(ar,0,Mi),new N(-ar,0,Mi),new N(Mi,ar,0),new N(-Mi,ar,0)];class Bu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Po=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Po),t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Tr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Po=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Zr,format:ln,colorSpace:Sn,depthBuffer:!1},r=Gu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(s)),this._blurMaterial=Dg(s,t,e)}return r}_compileMaterial(t){const e=new gn(this._lodPlanes[0],t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,r){const o=new Je(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor(Nu),u.toneMapping=Xn,u.autoClear=!1;const d=new yl({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),m=new gn(new Cr,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Nu),_=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(o.up.set(0,h[v],0),o.lookAt(l[v],0,0)):y===1?(o.up.set(0,0,h[v]),o.lookAt(0,l[v],0)):(o.up.set(0,h[v],0),o.lookAt(0,0,l[v]));const g=this._cubeSize;Ws(r,y*g,v>2?g:0,g,g),u.setRenderTarget(r),_&&u.render(m,o),u.render(t,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=c,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Tr||t.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new gn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const h=this._cubeSize;Ws(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,Co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fu[(r-1)%Fu.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const h=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new gn(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):Pi;p>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const v=[];let y=0;for(let w=0;w<Pi;++w){const C=w/_,x=Math.exp(-C*C/2);v.push(x),w===0?y+=x:w<p&&(y+=2*x)}for(let w=0;w<v.length;w++)v[w]=v[w]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=m,f.mipInt.value=g-n;const T=this._sizeLods[r],E=3*T*(r>g-cr?r-g+cr:0),b=4*(this._cubeSize-T);Ws(e,E,b,3*T,2*T),h.setRenderTarget(e),h.render(c,Co)}}function Og(i){const t=[],e=[],n=[];let r=i;const s=i-cr+1+Uu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let h=1/o;a>i-cr?h=Uu[a-i+cr-1]:a===0&&(h=0),n.push(h);const l=1/(o-2),u=-l,c=1+l,f=[u,u,c,u,c,c,u,u,c,c,u,c],d=6,m=6,_=3,p=2,v=1,y=new Float32Array(_*m*d),g=new Float32Array(p*m*d),T=new Float32Array(v*m*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,C=b>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(x,_*m*b),g.set(f,p*m*b);const S=[b,b,b,b,b,b];T.set(S,v*m*b)}const E=new An;E.setAttribute("position",new En(y,_)),E.setAttribute("uv",new En(g,p)),E.setAttribute("faceIndex",new En(T,v)),t.push(E),r>cr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gu(i,t,e){const n=new Bi(i,t,e);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Dg(i,t,e){const n=new Float32Array(Pi),r=new N(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ku(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Hu(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ug(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const h=o.mapping,l=h===gh||h===yh,u=h===Tr||h===br;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=t.get(o);return e===null&&(e=new Bu(i)),c=l?e.fromEquirectangular(o,c):e.fromCubemap(o,c),t.set(o,c),c.texture}else{if(t.has(o))return t.get(o).texture;{const c=o.image;if(l&&c&&c.height>0||u&&c&&r(c)){e===null&&(e=new Bu(i));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let h=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&h++;return h===l}function s(o){const h=o.target;h.removeEventListener("dispose",s);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ng(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Fg(i,t,e,n){const r={},s=new WeakMap;function a(c){const f=c.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let p=0,v=_.length;p<v;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(c,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function h(c){const f=c.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER);const d=c.morphAttributes;for(const m in d){const _=d[m];for(let p=0,v=_.length;p<v;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(c){const f=[],d=c.index,m=c.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let g=0,T=y.length;g<T;g+=3){const E=y[g+0],b=y[g+1],w=y[g+2];f.push(E,b,b,w,w,E)}}else{const y=m.array;_=m.version;for(let g=0,T=y.length/3-1;g<T;g+=3){const E=g+0,b=g+1,w=g+2;f.push(E,b,b,w,w,E)}}const p=new(zf(f)?$f:qf)(f,1);p.version=_;const v=s.get(c);v&&t.remove(v),s.set(c,p)}function u(c){const f=s.get(c);if(f){const d=c.index;d!==null&&f.version<d.version&&l(c)}else l(c);return s.get(c)}return{get:o,update:h,getWireframeAttribute:u}}function Bg(i,t,e,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,h;function l(f){o=f.type,h=f.bytesPerElement}function u(f,d){i.drawElements(s,d,o,f*h),e.update(d,s,1)}function c(f,d,m){if(m===0)return;let _,p;if(r)_=i,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,d,o,f*h,m),e.update(d,s,m)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=c}function Gg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function kg(i,t){return i[0]-t[0]}function Hg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function zg(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,a=new Ce,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function h(l,u,c){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let P=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",P)};var d=P;p!==void 0&&p.texture.dispose();const g=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let x=0;g===!0&&(x=1),T===!0&&(x=2),E===!0&&(x=3);let S=u.attributes.position.count*x,F=1;S>t.maxTextureSize&&(F=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const H=new Float32Array(S*F*4*_),L=new Xf(H,S,F,_);L.type=ii,L.needsUpdate=!0;const G=x*4;for(let B=0;B<_;B++){const z=b[B],Y=w[B],K=C[B],U=S*F*4*B;for(let W=0;W<z.count;W++){const O=W*G;g===!0&&(a.fromBufferAttribute(z,W),H[U+O+0]=a.x,H[U+O+1]=a.y,H[U+O+2]=a.z,H[U+O+3]=0),T===!0&&(a.fromBufferAttribute(Y,W),H[U+O+4]=a.x,H[U+O+5]=a.y,H[U+O+6]=a.z,H[U+O+7]=0),E===!0&&(a.fromBufferAttribute(K,W),H[U+O+8]=a.x,H[U+O+9]=a.y,H[U+O+10]=a.z,H[U+O+11]=K.itemSize===4?a.w:1)}}p={count:_,texture:L,size:new yt(S,F)},s.set(u,p),u.addEventListener("dispose",P)}let v=0;for(let g=0;g<f.length;g++)v+=f[g];const y=u.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",f),c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const m=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let T=0;T<m;T++)_[T]=[T,0];n[u.id]=_}for(let T=0;T<m;T++){const E=_[T];E[0]=T,E[1]=f[T]}_.sort(Hg);for(let T=0;T<8;T++)T<m&&_[T][1]?(o[T][0]=_[T][0],o[T][1]=_[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(kg);const p=u.morphAttributes.position,v=u.morphAttributes.normal;let y=0;for(let T=0;T<8;T++){const E=o[T],b=E[0],w=E[1];b!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+T)!==p[b]&&u.setAttribute("morphTarget"+T,p[b]),v&&u.getAttribute("morphNormal"+T)!==v[b]&&u.setAttribute("morphNormal"+T,v[b]),r[T]=w,y+=w):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),v&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const g=u.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:h}}function Vg(i,t,e,n){let r=new WeakMap;function s(h){const l=n.render.frame,u=h.geometry,c=t.get(h,u);return r.get(c)!==l&&(t.update(c),r.set(c,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER)),c}function a(){r=new WeakMap}function o(h){const l=h.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const nd=new wn,id=new Xf,rd=new Im,sd=new Zf,zu=[],Vu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),Yu=new Float32Array(4);function Pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=zu[r];if(s===void 0&&(s=new Float32Array(r),zu[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wa(i,t){let e=Vu[t];e===void 0&&(e=new Int32Array(t),Vu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function qg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;Yu.set(n),i.uniformMatrix2fv(this.addr,!1,Yu),be(e,n)}}function $g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;Xu.set(n),i.uniformMatrix3fv(this.addr,!1,Xu),be(e,n)}}function Jg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;Wu.set(n),i.uniformMatrix4fv(this.addr,!1,Wu),be(e,n)}}function Kg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function e0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function s0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||nd,r)}function a0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rd,r)}function o0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||sd,r)}function h0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||id,r)}function l0(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return Yg;case 35666:return jg;case 35674:return qg;case 35675:return $g;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Qg;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return h0}}function u0(i,t){i.uniform1fv(this.addr,t)}function c0(i,t){const e=Pr(t,this.size,2);i.uniform2fv(this.addr,e)}function f0(i,t){const e=Pr(t,this.size,3);i.uniform3fv(this.addr,e)}function d0(i,t){const e=Pr(t,this.size,4);i.uniform4fv(this.addr,e)}function p0(i,t){const e=Pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function m0(i,t){const e=Pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function v0(i,t){const e=Pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _0(i,t){i.uniform1iv(this.addr,t)}function g0(i,t){i.uniform2iv(this.addr,t)}function y0(i,t){i.uniform3iv(this.addr,t)}function x0(i,t){i.uniform4iv(this.addr,t)}function E0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function b0(i,t){i.uniform3uiv(this.addr,t)}function S0(i,t){i.uniform4uiv(this.addr,t)}function M0(i,t,e){const n=this.cache,r=t.length,s=Wa(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||nd,s[a])}function w0(i,t,e){const n=this.cache,r=t.length,s=Wa(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||rd,s[a])}function A0(i,t,e){const n=this.cache,r=t.length,s=Wa(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||sd,s[a])}function R0(i,t,e){const n=this.cache,r=t.length,s=Wa(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||id,s[a])}function C0(i){switch(i){case 5126:return u0;case 35664:return c0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return v0;case 5124:case 35670:return _0;case 35667:case 35671:return g0;case 35668:case 35672:return y0;case 35669:case 35673:return x0;case 5125:return E0;case 36294:return T0;case 36295:return b0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}class P0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=l0(e.type)}}class I0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=C0(e.type)}}class L0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function ju(i,t){i.seq.push(t),i.map[t.id]=t}function O0(i,t,e){const n=i.name,r=n.length;for(Io.lastIndex=0;;){const s=Io.exec(n),a=Io.lastIndex;let o=s[1];const h=s[2]==="]",l=s[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===r){ju(e,l===void 0?new P0(o,i,t):new I0(o,i,t));break}else{let c=e.map[o];c===void 0&&(c=new L0(o),ju(e,c)),e=c}}}class Ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);O0(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function qu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let D0=0;function U0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function N0(i){switch(i){case Sn:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function $u(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+U0(i.getShaderSource(t),a)}else return r}function F0(i,t){const e=N0(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function B0(i,t){let e;switch(t){case $p:e="Linear";break;case Jp:e="Reinhard";break;case Kp:e="OptimizedCineon";break;case Zp:e="ACESFilmic";break;case Qp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function G0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function k0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Yr(i){return i!==""}function Ju(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(z0,V0)}function V0(i,t){const e=zt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Mh(e)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace(W0,X0)}function X0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ap?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function j0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tr:case br:t="ENVMAP_TYPE_CUBE";break;case za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function $0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ml:t="ENVMAP_BLENDING_MULTIPLY";break;case jp:t="ENVMAP_BLENDING_MIX";break;case qp:t="ENVMAP_BLENDING_ADD";break}return t}function J0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function K0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=Y0(e),l=j0(e),u=q0(e),c=$0(e),f=J0(e),d=e.isWebGL2?"":G0(e),m=k0(s),_=r.createProgram();let p,v,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Yr).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Yr).join(`
`),v.length>0&&(v+=`
`)):(p=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),v=[d,Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?B0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.encodings_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Mh(a),a=Ju(a,e),a=Ku(a,e),o=Mh(o),o=Ju(o,e),o=Ku(o,e),a=Zu(a),o=Zu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",e.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const g=y+p+a,T=y+v+o,E=qu(r,r.VERTEX_SHADER,g),b=qu(r,r.FRAGMENT_SHADER,T);if(r.attachShader(_,E),r.attachShader(_,b),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const x=r.getProgramInfoLog(_).trim(),S=r.getShaderInfoLog(E).trim(),F=r.getShaderInfoLog(b).trim();let H=!0,L=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,E,b);else{const G=$u(r,E,"vertex"),P=$u(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+G+`
`+P)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(S===""||F==="")&&(L=!1);L&&(this.diagnostics={runnable:H,programLog:x,vertexShader:{log:S,prefix:p},fragmentShader:{log:F,prefix:v}})}r.deleteShader(E),r.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new Ea(r,_)),w};let C;return this.getAttributes=function(){return C===void 0&&(C=H0(r,_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let Z0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ty(t),e.set(t,n)),n}}class ty{constructor(t){this.id=Z0++,this.code=t,this.usedTimes=0}}function ey(i,t,e,n,r,s,a){const o=new gl,h=new Q0,l=[],u=r.isWebGL2,c=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,S,F,H,L){const G=H.fog,P=L.geometry,B=x.isMeshStandardMaterial?H.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||B),Y=z&&z.mapping===za?z.image.height:null,K=m[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const U=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=U!==void 0?U.length:0;let O=0;P.morphAttributes.position!==void 0&&(O=1),P.morphAttributes.normal!==void 0&&(O=2),P.morphAttributes.color!==void 0&&(O=3);let j,$,et,tt;if(K){const me=vn[K];j=me.vertexShader,$=me.fragmentShader}else j=x.vertexShader,$=x.fragmentShader,h.update(x),et=h.getVertexShaderID(x),tt=h.getFragmentShaderID(x);const ht=i.getRenderTarget(),Et=L.isInstancedMesh===!0,vt=!!x.map,Gt=!!x.matcap,pt=!!z,D=!!x.aoMap,Nt=!!x.lightMap,st=!!x.bumpMap,St=!!x.normalMap,xt=!!x.displacementMap,Tt=!!x.emissiveMap,It=!!x.metalnessMap,Lt=!!x.roughnessMap,$t=x.anisotropy>0,pe=x.clearcoat>0,xe=x.iridescence>0,R=x.sheen>0,M=x.transmission>0,J=$t&&!!x.anisotropyMap,nt=pe&&!!x.clearcoatMap,it=pe&&!!x.clearcoatNormalMap,ut=pe&&!!x.clearcoatRoughnessMap,bt=xe&&!!x.iridescenceMap,ct=xe&&!!x.iridescenceThicknessMap,Q=R&&!!x.sheenColorMap,At=R&&!!x.sheenRoughnessMap,Rt=!!x.specularMap,Pt=!!x.specularColorMap,_t=!!x.specularIntensityMap,gt=M&&!!x.transmissionMap,Wt=M&&!!x.thicknessMap,te=!!x.gradientMap,I=!!x.alphaMap,lt=x.alphaTest>0,X=!!x.extensions,at=!!P.attributes.uv1,ft=!!P.attributes.uv2,Jt=!!P.attributes.uv3;return{isWebGL2:u,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:$,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Et,instancingColor:Et&&L.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Sn,map:vt,matcap:Gt,envMap:pt,envMapMode:pt&&z.mapping,envMapCubeUVHeight:Y,aoMap:D,lightMap:Nt,bumpMap:st,normalMap:St,displacementMap:f&&xt,emissiveMap:Tt,normalMapObjectSpace:St&&x.normalMapType===fm,normalMapTangentSpace:St&&x.normalMapType===kf,metalnessMap:It,roughnessMap:Lt,anisotropy:$t,anisotropyMap:J,clearcoat:pe,clearcoatMap:nt,clearcoatNormalMap:it,clearcoatRoughnessMap:ut,iridescence:xe,iridescenceMap:bt,iridescenceThicknessMap:ct,sheen:R,sheenColorMap:Q,sheenRoughnessMap:At,specularMap:Rt,specularColorMap:Pt,specularIntensityMap:_t,transmission:M,transmissionMap:gt,thicknessMap:Wt,gradientMap:te,opaque:x.transparent===!1&&x.blending===_r,alphaMap:I,alphaTest:lt,combine:x.combine,mapUv:vt&&_(x.map.channel),aoMapUv:D&&_(x.aoMap.channel),lightMapUv:Nt&&_(x.lightMap.channel),bumpMapUv:st&&_(x.bumpMap.channel),normalMapUv:St&&_(x.normalMap.channel),displacementMapUv:xt&&_(x.displacementMap.channel),emissiveMapUv:Tt&&_(x.emissiveMap.channel),metalnessMapUv:It&&_(x.metalnessMap.channel),roughnessMapUv:Lt&&_(x.roughnessMap.channel),anisotropyMapUv:J&&_(x.anisotropyMap.channel),clearcoatMapUv:nt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(x.sheenRoughnessMap.channel),specularMapUv:Rt&&_(x.specularMap.channel),specularColorMapUv:Pt&&_(x.specularColorMap.channel),specularIntensityMapUv:_t&&_(x.specularIntensityMap.channel),transmissionMapUv:gt&&_(x.transmissionMap.channel),thicknessMapUv:Wt&&_(x.thicknessMap.channel),alphaMapUv:I&&_(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(St||$t),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:at,vertexUv2s:ft,vertexUv3s:Jt,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(vt||I),fog:!!G,useFog:x.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:L.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:O,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:Xn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:X&&x.extensions.derivatives===!0,extensionFragDepth:X&&x.extensions.fragDepth===!0,extensionDrawBuffers:X&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:X&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function v(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)S.push(F),S.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(y(S,x),g(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),x.push(o.mask)}function T(x){const S=m[x.type];let F;if(S){const H=vn[S];F=Vm.clone(H.uniforms)}else F=x.uniforms;return F}function E(x,S){let F;for(let H=0,L=l.length;H<L;H++){const G=l[H];if(G.cacheKey===S){F=G,++F.usedTimes;break}}return F===void 0&&(F=new K0(i,S,x,s),l.push(F)),F}function b(x){if(--x.usedTimes===0){const S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),x.destroy()}}function w(x){h.remove(x)}function C(){h.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:T,acquireProgram:E,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:C}}function ny(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function iy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ec(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(c,f,d,m,_,p){let v=i[t];return v===void 0?(v={id:c.id,object:c,geometry:f,material:d,groupOrder:m,renderOrder:c.renderOrder,z:_,group:p},i[t]=v):(v.id=c.id,v.object=c,v.geometry=f,v.material=d,v.groupOrder=m,v.renderOrder=c.renderOrder,v.z=_,v.group=p),t++,v}function o(c,f,d,m,_,p){const v=a(c,f,d,m,_,p);d.transmission>0?n.push(v):d.transparent===!0?r.push(v):e.push(v)}function h(c,f,d,m,_,p){const v=a(c,f,d,m,_,p);d.transmission>0?n.unshift(v):d.transparent===!0?r.unshift(v):e.unshift(v)}function l(c,f){e.length>1&&e.sort(c||iy),n.length>1&&n.sort(f||tc),r.length>1&&r.sort(f||tc)}function u(){for(let c=t,f=i.length;c<f;c++){const d=i[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:h,finish:u,sort:l}}function ry(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new ec,i.set(n,[a])):r>=s.length?(a=new ec,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function sy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function ay(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let oy=0;function hy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ly(i,t){const e=new sy,n=ay(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,a=new ye,o=new ye;function h(u,c){let f=0,d=0,m=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let _=0,p=0,v=0,y=0,g=0,T=0,E=0,b=0,w=0,C=0;u.sort(hy);const x=c===!0?Math.PI:1;for(let F=0,H=u.length;F<H;F++){const L=u[F],G=L.color,P=L.intensity,B=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=G.r*P*x,d+=G.g*P*x,m+=G.b*P*x;else if(L.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(L.sh.coefficients[Y],P);else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const K=L.shadow,U=n.get(L);U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,r.directionalShadow[_]=U,r.directionalShadowMap[_]=z,r.directionalShadowMatrix[_]=L.shadow.matrix,T++}r.directional[_]=Y,_++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(G).multiplyScalar(P*x),Y.distance=B,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,r.spot[v]=Y;const K=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,K.updateMatrices(L),L.castShadow&&C++),r.spotLightMatrix[v]=K.matrix,L.castShadow){const U=n.get(L);U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,r.spotShadow[v]=U,r.spotShadowMap[v]=z,b++}v++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(G).multiplyScalar(P),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=Y,y++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*x),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const K=L.shadow,U=n.get(L);U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,U.shadowCameraNear=K.camera.near,U.shadowCameraFar=K.camera.far,r.pointShadow[p]=U,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=L.shadow.matrix,E++}r.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(P*x),Y.groundColor.copy(L.groundColor).multiplyScalar(P*x),r.hemi[g]=Y,g++}}y>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_FLOAT_1,r.rectAreaLTC2=ot.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_HALF_1,r.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=m;const S=r.hash;(S.directionalLength!==_||S.pointLength!==p||S.spotLength!==v||S.rectAreaLength!==y||S.hemiLength!==g||S.numDirectionalShadows!==T||S.numPointShadows!==E||S.numSpotShadows!==b||S.numSpotMaps!==w)&&(r.directional.length=_,r.spot.length=v,r.rectArea.length=y,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=b+w-C,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=C,S.directionalLength=_,S.pointLength=p,S.spotLength=v,S.rectAreaLength=y,S.hemiLength=g,S.numDirectionalShadows=T,S.numPointShadows=E,S.numSpotShadows=b,S.numSpotMaps=w,r.version=oy++)}function l(u,c){let f=0,d=0,m=0,_=0,p=0;const v=c.matrixWorldInverse;for(let y=0,g=u.length;y<g;y++){const T=u[y];if(T.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),f++}else if(T.isSpotLight){const E=r.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(v),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),m++}else if(T.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(v),o.identity(),a.copy(T.matrixWorld),a.premultiply(v),o.extractRotation(a),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(v),d++}else if(T.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(v),p++}}}return{setup:h,setupView:l,state:r}}function nc(i,t){const e=new ly(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function a(c){n.push(c)}function o(c){r.push(c)}function h(c){e.setup(n,c)}function l(c){e.setupView(n,c)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o}}function uy(i,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let h;return o===void 0?(h=new nc(i,t),e.set(s,[h])):a>=o.length?(h=new nc(i,t),o.push(h)):h=o[a],h}function r(){e=new WeakMap}return{get:n,dispose:r}}class cy extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fy extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,py=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function my(i,t,e){let n=new xl;const r=new yt,s=new yt,a=new Ce,o=new cy({depthPacking:cm}),h=new fy,l={},u=e.maxTextureSize,c={[li]:ze,[ze]:li,[Hn]:Hn},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:dy,fragmentShader:py}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new An;m.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gn(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let v=this.type;this.render=function(E,b,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const C=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),F=i.state;F.setBlending(si),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=v!==Gn&&this.type===Gn,L=v===Gn&&this.type!==Gn;for(let G=0,P=E.length;G<P;G++){const B=E[G],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Y=z.getFrameExtents();if(r.multiply(Y),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,z.mapSize.y=s.y)),z.map===null||H===!0||L===!0){const U=this.type!==Gn?{minFilter:He,magFilter:He}:{};z.map!==null&&z.map.dispose(),z.map=new Bi(r.x,r.y,U),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const K=z.getViewportCount();for(let U=0;U<K;U++){const W=z.getViewport(U);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),F.viewport(a),z.updateMatrices(B,U),n=z.getFrustum(),T(b,w,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Gn&&y(z,w),z.needsUpdate=!1}v=this.type,p.needsUpdate=!1,i.setRenderTarget(C,x,S)};function y(E,b){const w=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bi(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,w,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,w,d,_,null)}function g(E,b,w,C){let x=null;const S=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)x=S;else if(x=w.isPointLight===!0?h:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=x.uuid,H=b.uuid;let L=l[F];L===void 0&&(L={},l[F]=L);let G=L[H];G===void 0&&(G=x.clone(),L[H]=G),x=G}if(x.visible=b.visible,x.wireframe=b.wireframe,C===Gn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:c[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=w}return x}function T(E,b,w,C,x){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Gn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const H=t.update(E),L=E.material;if(Array.isArray(L)){const G=H.groups;for(let P=0,B=G.length;P<B;P++){const z=G[P],Y=L[z.materialIndex];if(Y&&Y.visible){const K=g(E,Y,C,x);i.renderBufferDirect(w,null,H,K,E,z)}}}else if(L.visible){const G=g(E,L,C,x);i.renderBufferDirect(w,null,H,G,E,null)}}const F=E.children;for(let H=0,L=F.length;H<L;H++)T(F[H],b,w,C,x)}}function vy(i,t,e){const n=e.isWebGL2;function r(){let I=!1;const lt=new Ce;let X=null;const at=new Ce(0,0,0,0);return{setMask:function(ft){X!==ft&&!I&&(i.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){I=ft},setClear:function(ft,Jt,he,me,fi){fi===!0&&(ft*=me,Jt*=me,he*=me),lt.set(ft,Jt,he,me),at.equals(lt)===!1&&(i.clearColor(ft,Jt,he,me),at.copy(lt))},reset:function(){I=!1,X=null,at.set(-1,0,0,0)}}}function s(){let I=!1,lt=null,X=null,at=null;return{setTest:function(ft){ft?ht(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ft){lt!==ft&&!I&&(i.depthMask(ft),lt=ft)},setFunc:function(ft){if(X!==ft){switch(ft){case kp:i.depthFunc(i.NEVER);break;case Hp:i.depthFunc(i.ALWAYS);break;case zp:i.depthFunc(i.LESS);break;case _h:i.depthFunc(i.LEQUAL);break;case Vp:i.depthFunc(i.EQUAL);break;case Wp:i.depthFunc(i.GEQUAL);break;case Xp:i.depthFunc(i.GREATER);break;case Yp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=ft}},setLocked:function(ft){I=ft},setClear:function(ft){at!==ft&&(i.clearDepth(ft),at=ft)},reset:function(){I=!1,lt=null,X=null,at=null}}}function a(){let I=!1,lt=null,X=null,at=null,ft=null,Jt=null,he=null,me=null,fi=null;return{setTest:function(le){I||(le?ht(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(le){lt!==le&&!I&&(i.stencilMask(le),lt=le)},setFunc:function(le,mn,Be){(X!==le||at!==mn||ft!==Be)&&(i.stencilFunc(le,mn,Be),X=le,at=mn,ft=Be)},setOp:function(le,mn,Be){(Jt!==le||he!==mn||me!==Be)&&(i.stencilOp(le,mn,Be),Jt=le,he=mn,me=Be)},setLocked:function(le){I=le},setClear:function(le){fi!==le&&(i.clearStencil(le),fi=le)},reset:function(){I=!1,lt=null,X=null,at=null,ft=null,Jt=null,he=null,me=null,fi=null}}}const o=new r,h=new s,l=new a,u=new WeakMap,c=new WeakMap;let f={},d={},m=new WeakMap,_=[],p=null,v=!1,y=null,g=null,T=null,E=null,b=null,w=null,C=null,x=!1,S=null,F=null,H=null,L=null,G=null;const P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,z=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=z>=2);let K=null,U={};const W=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),j=new Ce().fromArray(W),$=new Ce().fromArray(O);function et(I,lt,X,at){const ft=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(I,Jt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<X;he++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(lt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(lt+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return Jt}const tt={};tt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(tt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),l.setClear(0),ht(i.DEPTH_TEST),h.setFunc(_h),xt(!1),Tt(Hl),ht(i.CULL_FACE),st(si);function ht(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function Et(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function vt(I,lt){return d[I]!==lt?(i.bindFramebuffer(I,lt),d[I]=lt,n&&(I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt)),!0):!1}function Gt(I,lt){let X=_,at=!1;if(I)if(X=m.get(lt),X===void 0&&(X=[],m.set(lt,X)),I.isWebGLMultipleRenderTargets){const ft=I.texture;if(X.length!==ft.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,he=ft.length;Jt<he;Jt++)X[Jt]=i.COLOR_ATTACHMENT0+Jt;X.length=ft.length,at=!0}}else X[0]!==i.COLOR_ATTACHMENT0&&(X[0]=i.COLOR_ATTACHMENT0,at=!0);else X[0]!==i.BACK&&(X[0]=i.BACK,at=!0);at&&(e.isWebGL2?i.drawBuffers(X):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function pt(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const D={[ur]:i.FUNC_ADD,[Cp]:i.FUNC_SUBTRACT,[Pp]:i.FUNC_REVERSE_SUBTRACT};if(n)D[Xl]=i.MIN,D[Yl]=i.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(D[Xl]=I.MIN_EXT,D[Yl]=I.MAX_EXT)}const Nt={[Ip]:i.ZERO,[Lp]:i.ONE,[Op]:i.SRC_COLOR,[Pf]:i.SRC_ALPHA,[Gp]:i.SRC_ALPHA_SATURATE,[Fp]:i.DST_COLOR,[Up]:i.DST_ALPHA,[Dp]:i.ONE_MINUS_SRC_COLOR,[If]:i.ONE_MINUS_SRC_ALPHA,[Bp]:i.ONE_MINUS_DST_COLOR,[Np]:i.ONE_MINUS_DST_ALPHA};function st(I,lt,X,at,ft,Jt,he,me){if(I===si){v===!0&&(Et(i.BLEND),v=!1);return}if(v===!1&&(ht(i.BLEND),v=!0),I!==Rp){if(I!==y||me!==x){if((g!==ur||b!==ur)&&(i.blendEquation(i.FUNC_ADD),g=ur,b=ur),me)switch(I){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,w=null,C=null,y=I,x=me}return}ft=ft||lt,Jt=Jt||X,he=he||at,(lt!==g||ft!==b)&&(i.blendEquationSeparate(D[lt],D[ft]),g=lt,b=ft),(X!==T||at!==E||Jt!==w||he!==C)&&(i.blendFuncSeparate(Nt[X],Nt[at],Nt[Jt],Nt[he]),T=X,E=at,w=Jt,C=he),y=I,x=!1}function St(I,lt){I.side===Hn?Et(i.CULL_FACE):ht(i.CULL_FACE);let X=I.side===ze;lt&&(X=!X),xt(X),I.blending===_r&&I.transparent===!1?st(si):st(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),h.setFunc(I.depthFunc),h.setTest(I.depthTest),h.setMask(I.depthWrite),o.setMask(I.colorWrite);const at=I.stencilWrite;l.setTest(at),at&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function Tt(I){I!==Mp?(ht(i.CULL_FACE),I!==F&&(I===Hl?i.cullFace(i.BACK):I===wp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),F=I}function It(I){I!==H&&(B&&i.lineWidth(I),H=I)}function Lt(I,lt,X){I?(ht(i.POLYGON_OFFSET_FILL),(L!==lt||G!==X)&&(i.polygonOffset(lt,X),L=lt,G=X)):Et(i.POLYGON_OFFSET_FILL)}function $t(I){I?ht(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function pe(I){I===void 0&&(I=i.TEXTURE0+P-1),K!==I&&(i.activeTexture(I),K=I)}function xe(I,lt,X){X===void 0&&(K===null?X=i.TEXTURE0+P-1:X=K);let at=U[X];at===void 0&&(at={type:void 0,texture:void 0},U[X]=at),(at.type!==I||at.texture!==lt)&&(K!==X&&(i.activeTexture(X),K=X),i.bindTexture(I,lt||tt[I]),at.type=I,at.texture=lt)}function R(){const I=U[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){j.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),j.copy(I))}function _t(I){$.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function gt(I,lt){let X=c.get(lt);X===void 0&&(X=new WeakMap,c.set(lt,X));let at=X.get(I);at===void 0&&(at=i.getUniformBlockIndex(lt,I.name),X.set(I,at))}function Wt(I,lt){const at=c.get(lt).get(I);u.get(lt)!==at&&(i.uniformBlockBinding(lt,at,I.__bindingPointIndex),u.set(lt,at))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},K=null,U={},d={},m=new WeakMap,_=[],p=null,v=!1,y=null,g=null,T=null,E=null,b=null,w=null,C=null,x=!1,S=null,F=null,H=null,L=null,G=null,j.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),h.reset(),l.reset()}return{buffers:{color:o,depth:h,stencil:l},enable:ht,disable:Et,bindFramebuffer:vt,drawBuffers:Gt,useProgram:pt,setBlending:st,setMaterial:St,setFlipSided:xt,setCullFace:Tt,setLineWidth:It,setPolygonOffset:Lt,setScissorTest:$t,activeTexture:pe,bindTexture:xe,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:J,texImage2D:At,texImage3D:Rt,updateUBOMapping:gt,uniformBlockBinding:Wt,texStorage2D:ct,texStorage3D:Q,texSubImage2D:nt,texSubImage3D:it,compressedTexSubImage2D:ut,compressedTexSubImage3D:bt,scissor:Pt,viewport:_t,reset:te}}function _y(i,t,e,n,r,s,a){const o=r.isWebGL2,h=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,c=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,M){return v?new OffscreenCanvas(R,M):Qr("canvas")}function g(R,M,J,nt){let it=1;if((R.width>nt||R.height>nt)&&(it=nt/Math.max(R.width,R.height)),it<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ut=M?Sh:Math.floor,bt=ut(it*R.width),ct=ut(it*R.height);_===void 0&&(_=y(bt,ct));const Q=J?y(bt,ct):_;return Q.width=bt,Q.height=ct,Q.getContext("2d").drawImage(R,0,0,bt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+bt+"x"+ct+")."),Q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function T(R){return yu(R.width)&&yu(R.height)}function E(R){return o?!1:R.wrapS!==hn||R.wrapT!==hn||R.minFilter!==He&&R.minFilter!==$e}function b(R,M){return R.generateMipmaps&&M&&R.minFilter!==He&&R.minFilter!==$e}function w(R){i.generateMipmap(R)}function C(R,M,J,nt,it=!1){if(o===!1)return M;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ut=M;return M===i.RED&&(J===i.FLOAT&&(ut=i.R32F),J===i.HALF_FLOAT&&(ut=i.R16F),J===i.UNSIGNED_BYTE&&(ut=i.R8)),M===i.RG&&(J===i.FLOAT&&(ut=i.RG32F),J===i.HALF_FLOAT&&(ut=i.RG16F),J===i.UNSIGNED_BYTE&&(ut=i.RG8)),M===i.RGBA&&(J===i.FLOAT&&(ut=i.RGBA32F),J===i.HALF_FLOAT&&(ut=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ut=nt===Ht&&it===!1?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)),(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function x(R,M,J){return b(R,J)===!0||R.isFramebufferTexture&&R.minFilter!==He&&R.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function S(R){return R===He||R===jl||R===no?i.NEAREST:i.LINEAR}function F(R){const M=R.target;M.removeEventListener("dispose",F),L(M),M.isVideoTexture&&m.delete(M)}function H(R){const M=R.target;M.removeEventListener("dispose",H),P(M)}function L(R){const M=n.get(R);if(M.__webglInit===void 0)return;const J=R.source,nt=p.get(J);if(nt){const it=nt[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&G(R),Object.keys(nt).length===0&&p.delete(J)}n.remove(R)}function G(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const J=R.source,nt=p.get(J);delete nt[M.__cacheKey],a.memory.textures--}function P(R){const M=R.texture,J=n.get(R),nt=n.get(M);if(nt.__webglTexture!==void 0&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)i.deleteFramebuffer(J.__webglFramebuffer[it]),J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[it]);else{if(i.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let it=0;it<J.__webglColorRenderbuffer.length;it++)J.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[it]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let it=0,ut=M.length;it<ut;it++){const bt=n.get(M[it]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(M[it])}n.remove(M),n.remove(R)}let B=0;function z(){B=0}function Y(){const R=B;return R>=h&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+h),B+=1,R}function K(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function U(R,M){const J=n.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){const nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(J,R,M);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+M)}function W(R,M){const J=n.get(R);if(R.version>0&&J.__version!==R.version){vt(J,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+M)}function O(R,M){const J=n.get(R);if(R.version>0&&J.__version!==R.version){vt(J,R,M);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+M)}function j(R,M){const J=n.get(R);if(R.version>0&&J.__version!==R.version){Gt(J,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+M)}const $={[xh]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Eh]:i.MIRRORED_REPEAT},et={[He]:i.NEAREST,[jl]:i.NEAREST_MIPMAP_NEAREST,[no]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[tm]:i.LINEAR_MIPMAP_NEAREST,[Kr]:i.LINEAR_MIPMAP_LINEAR},tt={[pm]:i.NEVER,[Em]:i.ALWAYS,[mm]:i.LESS,[_m]:i.LEQUAL,[vm]:i.EQUAL,[xm]:i.GEQUAL,[gm]:i.GREATER,[ym]:i.NOTEQUAL};function ht(R,M,J){if(J?(i.texParameteri(R,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,$[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,et[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,et[M.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==hn||M.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,S(M.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==He&&M.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===He||M.minFilter!==no&&M.minFilter!==Kr||M.type===ii&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Zr&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(R,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Et(R,M){let J=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",F));const nt=M.source;let it=p.get(nt);it===void 0&&(it={},p.set(nt,it));const ut=K(M);if(ut!==R.__cacheKey){it[ut]===void 0&&(it[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),it[ut].usedTimes++;const bt=it[R.__cacheKey];bt!==void 0&&(it[R.__cacheKey].usedTimes--,bt.usedTimes===0&&G(M)),R.__cacheKey=ut,R.__webglTexture=it[ut].texture}return J}function vt(R,M,J){let nt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=i.TEXTURE_3D);const it=Et(R,M),ut=M.source;e.bindTexture(nt,R.__webglTexture,i.TEXTURE0+J);const bt=n.get(ut);if(ut.version!==bt.__version||it===!0){e.activeTexture(i.TEXTURE0+J),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ct=E(M)&&T(M.image)===!1;let Q=g(M.image,ct,!1,u);Q=xe(M,Q);const At=T(Q)||o,Rt=s.convert(M.format,M.colorSpace);let Pt=s.convert(M.type),_t=C(M.internalFormat,Rt,Pt,M.colorSpace);ht(nt,M,At);let gt;const Wt=M.mipmaps,te=o&&M.isVideoTexture!==!0,I=bt.__version===void 0||it===!0,lt=x(M,Q,At);if(M.isDepthTexture)_t=i.DEPTH_COMPONENT,o?M.type===ii?_t=i.DEPTH_COMPONENT32F:M.type===ni?_t=i.DEPTH_COMPONENT24:M.type===Li?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:M.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Oi&&_t===i.DEPTH_COMPONENT&&M.type!==vl&&M.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ni,Pt=s.convert(M.type)),M.format===Sr&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,M.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Li,Pt=s.convert(M.type))),I&&(te?e.texStorage2D(i.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,Rt,Pt,null));else if(M.isDataTexture)if(Wt.length>0&&At){te&&I&&e.texStorage2D(i.TEXTURE_2D,lt,_t,Wt[0].width,Wt[0].height);for(let X=0,at=Wt.length;X<at;X++)gt=Wt[X],te?e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,Rt,Pt,gt.data):e.texImage2D(i.TEXTURE_2D,X,_t,gt.width,gt.height,0,Rt,Pt,gt.data);M.generateMipmaps=!1}else te?(I&&e.texStorage2D(i.TEXTURE_2D,lt,_t,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Rt,Pt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,Rt,Pt,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){te&&I&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,_t,Wt[0].width,Wt[0].height,Q.depth);for(let X=0,at=Wt.length;X<at;X++)gt=Wt[X],M.format!==ln?Rt!==null?te?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,Q.depth,Rt,gt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,_t,gt.width,gt.height,Q.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,Q.depth,Rt,Pt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,_t,gt.width,gt.height,Q.depth,0,Rt,Pt,gt.data)}else{te&&I&&e.texStorage2D(i.TEXTURE_2D,lt,_t,Wt[0].width,Wt[0].height);for(let X=0,at=Wt.length;X<at;X++)gt=Wt[X],M.format!==ln?Rt!==null?te?e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,Rt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,_t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,Rt,Pt,gt.data):e.texImage2D(i.TEXTURE_2D,X,_t,gt.width,gt.height,0,Rt,Pt,gt.data)}else if(M.isDataArrayTexture)te?(I&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,_t,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Rt,Pt,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,Rt,Pt,Q.data);else if(M.isData3DTexture)te?(I&&e.texStorage3D(i.TEXTURE_3D,lt,_t,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Rt,Pt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,Rt,Pt,Q.data);else if(M.isFramebufferTexture){if(I)if(te)e.texStorage2D(i.TEXTURE_2D,lt,_t,Q.width,Q.height);else{let X=Q.width,at=Q.height;for(let ft=0;ft<lt;ft++)e.texImage2D(i.TEXTURE_2D,ft,_t,X,at,0,Rt,Pt,null),X>>=1,at>>=1}}else if(Wt.length>0&&At){te&&I&&e.texStorage2D(i.TEXTURE_2D,lt,_t,Wt[0].width,Wt[0].height);for(let X=0,at=Wt.length;X<at;X++)gt=Wt[X],te?e.texSubImage2D(i.TEXTURE_2D,X,0,0,Rt,Pt,gt):e.texImage2D(i.TEXTURE_2D,X,_t,Rt,Pt,gt);M.generateMipmaps=!1}else te?(I&&e.texStorage2D(i.TEXTURE_2D,lt,_t,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Pt,Q)):e.texImage2D(i.TEXTURE_2D,0,_t,Rt,Pt,Q);b(M,At)&&w(nt),bt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Gt(R,M,J){if(M.image.length!==6)return;const nt=Et(R,M),it=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+J);const ut=n.get(it);if(it.version!==ut.__version||nt===!0){e.activeTexture(i.TEXTURE0+J),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const bt=M.isCompressedTexture||M.image[0].isCompressedTexture,ct=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let X=0;X<6;X++)!bt&&!ct?Q[X]=g(M.image[X],!1,!0,l):Q[X]=ct?M.image[X].image:M.image[X],Q[X]=xe(M,Q[X]);const At=Q[0],Rt=T(At)||o,Pt=s.convert(M.format,M.colorSpace),_t=s.convert(M.type),gt=C(M.internalFormat,Pt,_t,M.colorSpace),Wt=o&&M.isVideoTexture!==!0,te=ut.__version===void 0||nt===!0;let I=x(M,At,Rt);ht(i.TEXTURE_CUBE_MAP,M,Rt);let lt;if(bt){Wt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,I,gt,At.width,At.height);for(let X=0;X<6;X++){lt=Q[X].mipmaps;for(let at=0;at<lt.length;at++){const ft=lt[at];M.format!==ln?Pt!==null?Wt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,0,0,ft.width,ft.height,Pt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,gt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,0,0,ft.width,ft.height,Pt,_t,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,gt,ft.width,ft.height,0,Pt,_t,ft.data)}}}else{lt=M.mipmaps,Wt&&te&&(lt.length>0&&I++,e.texStorage2D(i.TEXTURE_CUBE_MAP,I,gt,Q[0].width,Q[0].height));for(let X=0;X<6;X++)if(ct){Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Q[X].width,Q[X].height,Pt,_t,Q[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,gt,Q[X].width,Q[X].height,0,Pt,_t,Q[X].data);for(let at=0;at<lt.length;at++){const Jt=lt[at].image[X].image;Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,0,0,Jt.width,Jt.height,Pt,_t,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,gt,Jt.width,Jt.height,0,Pt,_t,Jt.data)}}else{Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Pt,_t,Q[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,gt,Pt,_t,Q[X]);for(let at=0;at<lt.length;at++){const ft=lt[at];Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,0,0,Pt,_t,ft.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,gt,Pt,_t,ft.image[X])}}}b(M,Rt)&&w(i.TEXTURE_CUBE_MAP),ut.__version=it.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function pt(R,M,J,nt,it){const ut=s.convert(J.format,J.colorSpace),bt=s.convert(J.type),ct=C(J.internalFormat,ut,bt,J.colorSpace);n.get(M).__hasExternalTextures||(it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,0,ct,M.width,M.height,M.depth,0,ut,bt,null):e.texImage2D(it,0,ct,M.width,M.height,0,ut,bt,null)),e.bindFramebuffer(i.FRAMEBUFFER,R),$t(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,it,n.get(J).__webglTexture,0,Lt(M)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,it,n.get(J).__webglTexture,0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(R,M,J){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let nt=i.DEPTH_COMPONENT16;if(J||$t(M)){const it=M.depthTexture;it&&it.isDepthTexture&&(it.type===ii?nt=i.DEPTH_COMPONENT32F:it.type===ni&&(nt=i.DEPTH_COMPONENT24));const ut=Lt(M);$t(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,nt,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,nt,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,nt,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const nt=Lt(M);J&&$t(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,M.width,M.height):$t(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const nt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let it=0;it<nt.length;it++){const ut=nt[it],bt=s.convert(ut.format,ut.colorSpace),ct=s.convert(ut.type),Q=C(ut.internalFormat,bt,ct,ut.colorSpace),At=Lt(M);J&&$t(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Q,M.width,M.height):$t(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const nt=n.get(M.depthTexture).__webglTexture,it=Lt(M);if(M.depthTexture.format===Oi)$t(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(M.depthTexture.format===Sr)$t(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function st(R){const M=n.get(R),J=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,R)}else if(J){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]=i.createRenderbuffer(),D(M.__webglDepthbuffer[nt],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),D(M.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(R,M,J){const nt=n.get(R);M!==void 0&&pt(nt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),J!==void 0&&st(R)}function xt(R){const M=R.texture,J=n.get(R),nt=n.get(M);R.addEventListener("dispose",H),R.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=M.version,a.memory.textures++);const it=R.isWebGLCubeRenderTarget===!0,ut=R.isWebGLMultipleRenderTargets===!0,bt=T(R)||o;if(it){J.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)J.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(J.__webglFramebuffer=i.createFramebuffer(),ut)if(r.drawBuffers){const ct=R.texture;for(let Q=0,At=ct.length;Q<At;Q++){const Rt=n.get(ct[Q]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&$t(R)===!1){const ct=ut?M:[M];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Q=0;Q<ct.length;Q++){const At=ct[Q];J.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Q]);const Rt=s.convert(At.format,At.colorSpace),Pt=s.convert(At.type),_t=C(At.internalFormat,Rt,Pt,At.colorSpace,R.isXRRenderTarget===!0),gt=Lt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,_t,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,J.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),D(J.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),ht(i.TEXTURE_CUBE_MAP,M,bt);for(let ct=0;ct<6;ct++)pt(J.__webglFramebuffer[ct],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct);b(M,bt)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){const ct=R.texture;for(let Q=0,At=ct.length;Q<At;Q++){const Rt=ct[Q],Pt=n.get(Rt);e.bindTexture(i.TEXTURE_2D,Pt.__webglTexture),ht(i.TEXTURE_2D,Rt,bt),pt(J.__webglFramebuffer,R,Rt,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D),b(Rt,bt)&&w(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,nt.__webglTexture),ht(ct,M,bt),pt(J.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ct),b(M,bt)&&w(ct),e.unbindTexture()}R.depthBuffer&&st(R)}function Tt(R){const M=T(R)||o,J=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let nt=0,it=J.length;nt<it;nt++){const ut=J[nt];if(b(ut,M)){const bt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ct=n.get(ut).__webglTexture;e.bindTexture(bt,ct),w(bt),e.unbindTexture()}}}function It(R){if(o&&R.samples>0&&$t(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],J=R.width,nt=R.height;let it=i.COLOR_BUFFER_BIT;const ut=[],bt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(R),Q=R.isWebGLMultipleRenderTargets===!0;if(Q)for(let At=0;At<M.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let At=0;At<M.length;At++){ut.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&ut.push(bt);const Rt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Rt===!1&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Q&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[At]),Rt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[bt])),Q){const Pt=n.get(M[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,J,nt,0,0,J,nt,it,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let At=0;At<M.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,ct.__webglColorRenderbuffer[At]);const Rt=n.get(M[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Lt(R){return Math.min(c,R.samples)}function $t(R){const M=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pe(R){const M=a.render.frame;m.get(R)!==M&&(m.set(R,M),R.update())}function xe(R,M){const J=R.colorSpace,nt=R.format,it=R.type;return R.isCompressedTexture===!0||R.format===Th||J!==Sn&&J!==Ui&&(J===Ht?o===!1?t.has("EXT_sRGB")===!0&&nt===ln?(R.format=Th,R.minFilter=$e,R.generateMipmaps=!1):M=Vf.sRGBToLinear(M):(nt!==ln||it!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),M}this.allocateTextureUnit=Y,this.resetTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=W,this.setTexture3D=O,this.setTextureCube=j,this.rebindTextures=St,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=$t}function gy(i,t,e){const n=e.isWebGL2;function r(s,a=Ui){let o;if(s===ai)return i.UNSIGNED_BYTE;if(s===Df)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Uf)return i.UNSIGNED_SHORT_5_5_5_1;if(s===em)return i.BYTE;if(s===nm)return i.SHORT;if(s===vl)return i.UNSIGNED_SHORT;if(s===Of)return i.INT;if(s===ni)return i.UNSIGNED_INT;if(s===ii)return i.FLOAT;if(s===Zr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===im)return i.ALPHA;if(s===ln)return i.RGBA;if(s===rm)return i.LUMINANCE;if(s===sm)return i.LUMINANCE_ALPHA;if(s===Oi)return i.DEPTH_COMPONENT;if(s===Sr)return i.DEPTH_STENCIL;if(s===Th)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===am)return i.RED;if(s===Nf)return i.RED_INTEGER;if(s===om)return i.RG;if(s===Ff)return i.RG_INTEGER;if(s===Bf)return i.RGBA_INTEGER;if(s===io||s===ro||s===so||s===ao)if(a===Ht)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===io)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===so)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===io)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===so)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ao)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ql||s===$l||s===Jl||s===Kl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hm)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zl||s===Ql)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Zl)return a===Ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ql)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tu||s===eu||s===nu||s===iu||s===ru||s===su||s===au||s===ou||s===hu||s===lu||s===uu||s===cu||s===fu||s===du)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===tu)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===eu)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nu)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===iu)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ru)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===su)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===au)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ou)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hu)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lu)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uu)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cu)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fu)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===du)return a===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===oo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===oo)return a===Ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===lm||s===pu||s===mu||s===vu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===oo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===pu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Li?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class yy extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xs extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),v=this._getHandJoint(l,_);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=p.radius),v.visible=p!==null}const u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return o!==null&&(o.visible=r!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ey extends wn{constructor(t,e,n,r,s,a,o,h,l,u){if(u=u!==void 0?u:Oi,u!==Oi&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Oi&&(n=ni),n===void 0&&u===Sr&&(n=Li),super(null,r,s,a,o,h,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=h!==void 0?h:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ty extends Rr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",h=1,l=null,u=null,c=null,f=null,d=null,m=null;const _=e.getContextAttributes();let p=null,v=null;const y=[],g=[];let T=null;const E=new Je;E.layers.enable(1),E.viewport=new Ce;const b=new Je;b.layers.enable(2),b.viewport=new Ce;const w=[E,b],C=new yy;C.layers.enable(1),C.layers.enable(2);let x=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(O){T=O},this.getController=function(O){let j=y[O];return j===void 0&&(j=new Lo,y[O]=j),j.getTargetRaySpace()},this.getControllerGrip=function(O){let j=y[O];return j===void 0&&(j=new Lo,y[O]=j),j.getGripSpace()},this.getHand=function(O){let j=y[O];return j===void 0&&(j=new Lo,y[O]=j),j.getHandSpace()};function F(O){const j=g.indexOf(O.inputSource);if(j===-1)return;const $=y[j];$!==void 0&&($.update(O.inputSource,O.frame,l||a),$.dispatchEvent({type:O.type,data:O.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",L);for(let O=0;O<y.length;O++){const j=g[O];j!==null&&(g[O]=null,y[O].disconnect(j))}x=null,S=null,t.setRenderTarget(p),d=null,f=null,c=null,r=null,v=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:d}),v=new Bi(d.framebufferWidth,d.framebufferHeight,{format:ln,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,$=null,et=null;_.depth&&(et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?Sr:Oi,$=_.stencil?Li:ni);const tt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:s};c=new XRWebGLBinding(r,e),f=c.createProjectionLayer(tt),r.updateRenderState({layers:[f]}),v=new Bi(f.textureWidth,f.textureHeight,{format:ln,type:ai,depthTexture:new Ey(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const ht=t.properties.get(v);ht.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await r.requestReferenceSpace(o),W.setContext(r),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(O){for(let j=0;j<O.removed.length;j++){const $=O.removed[j],et=g.indexOf($);et>=0&&(g[et]=null,y[et].disconnect($))}for(let j=0;j<O.added.length;j++){const $=O.added[j];let et=g.indexOf($);if(et===-1){for(let ht=0;ht<y.length;ht++)if(ht>=g.length){g.push($),et=ht;break}else if(g[ht]===null){g[ht]=$,et=ht;break}if(et===-1)break}const tt=y[et];tt&&tt.connect($)}}const G=new N,P=new N;function B(O,j,$){G.setFromMatrixPosition(j.matrixWorld),P.setFromMatrixPosition($.matrixWorld);const et=G.distanceTo(P),tt=j.projectionMatrix.elements,ht=$.projectionMatrix.elements,Et=tt[14]/(tt[10]-1),vt=tt[14]/(tt[10]+1),Gt=(tt[9]+1)/tt[5],pt=(tt[9]-1)/tt[5],D=(tt[8]-1)/tt[0],Nt=(ht[8]+1)/ht[0],st=Et*D,St=Et*Nt,xt=et/(-D+Nt),Tt=xt*-D;j.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Tt),O.translateZ(xt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const It=Et+xt,Lt=vt+xt,$t=st-Tt,pe=St+(et-Tt),xe=Gt*vt/Lt*It,R=pt*vt/Lt*It;O.projectionMatrix.makePerspective($t,pe,xe,R,It,Lt),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function z(O,j){j===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(j.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCameraXR=function(O){if(r===null)return O;T&&(O=T),C.near=b.near=E.near=O.near,C.far=b.far=E.far=O.far,(x!==C.near||S!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),x=C.near,S=C.far);const j=O.parent,$=C.cameras;z(C,j);for(let et=0;et<$.length;et++)z($[et],j);return $.length===2?B(C,E,b):C.projectionMatrix.copy(E.projectionMatrix),T&&Y(C,j),C};function Y(O,j){const $=T;j===null?$.matrix.copy(O.matrixWorld):($.matrix.copy(j.matrixWorld),$.matrix.invert(),$.matrix.multiply(O.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0);const et=$.children;for(let tt=0,ht=et.length;tt<ht;tt++)et[tt].updateMatrixWorld(!0);$.projectionMatrix.copy(O.projectionMatrix),$.projectionMatrixInverse.copy(O.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function(O){h=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let K=null;function U(O,j){if(u=j.getViewerPose(l||a),m=j,u!==null){const $=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let et=!1;$.length!==C.cameras.length&&(C.cameras.length=0,et=!0);for(let tt=0;tt<$.length;tt++){const ht=$[tt];let Et=null;if(d!==null)Et=d.getViewport(ht);else{const Gt=c.getViewSubImage(f,ht);Et=Gt.viewport,tt===0&&(t.setRenderTargetTextures(v,Gt.colorTexture,f.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(v))}let vt=w[tt];vt===void 0&&(vt=new Je,vt.layers.enable(tt),vt.viewport=new Ce,w[tt]=vt),vt.matrix.fromArray(ht.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(ht.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Et.x,Et.y,Et.width,Et.height),tt===0&&(C.matrix.copy(vt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),et===!0&&C.cameras.push(vt)}}for(let $=0;$<y.length;$++){const et=g[$],tt=y[$];et!==null&&tt!==void 0&&tt.update(et,j,l||a)}K&&K(O,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}const W=new Qf;W.setAnimationLoop(U),this.setAnimationLoop=function(O){K=O},this.dispose=function(){}}}function by(i,t){function e(p,v){p.matrixAutoUpdate===!0&&p.updateMatrix(),v.value.copy(p.matrix)}function n(p,v){v.color.getRGB(p.fogColor.value,Jf(i)),v.isFog?(p.fogNear.value=v.near,p.fogFar.value=v.far):v.isFogExp2&&(p.fogDensity.value=v.density)}function r(p,v,y,g,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(p,v):v.isMeshToonMaterial?(s(p,v),c(p,v)):v.isMeshPhongMaterial?(s(p,v),u(p,v)):v.isMeshStandardMaterial?(s(p,v),f(p,v),v.isMeshPhysicalMaterial&&d(p,v,T)):v.isMeshMatcapMaterial?(s(p,v),m(p,v)):v.isMeshDepthMaterial?s(p,v):v.isMeshDistanceMaterial?(s(p,v),_(p,v)):v.isMeshNormalMaterial?s(p,v):v.isLineBasicMaterial?(a(p,v),v.isLineDashedMaterial&&o(p,v)):v.isPointsMaterial?h(p,v,y,g):v.isSpriteMaterial?l(p,v):v.isShadowMaterial?(p.color.value.copy(v.color),p.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(p,v){p.opacity.value=v.opacity,v.color&&p.diffuse.value.copy(v.color),v.emissive&&p.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(p.map.value=v.map,e(v.map,p.mapTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,e(v.alphaMap,p.alphaMapTransform)),v.bumpMap&&(p.bumpMap.value=v.bumpMap,e(v.bumpMap,p.bumpMapTransform),p.bumpScale.value=v.bumpScale,v.side===ze&&(p.bumpScale.value*=-1)),v.normalMap&&(p.normalMap.value=v.normalMap,e(v.normalMap,p.normalMapTransform),p.normalScale.value.copy(v.normalScale),v.side===ze&&p.normalScale.value.negate()),v.displacementMap&&(p.displacementMap.value=v.displacementMap,e(v.displacementMap,p.displacementMapTransform),p.displacementScale.value=v.displacementScale,p.displacementBias.value=v.displacementBias),v.emissiveMap&&(p.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,p.emissiveMapTransform)),v.specularMap&&(p.specularMap.value=v.specularMap,e(v.specularMap,p.specularMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest);const y=t.get(v).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=v.reflectivity,p.ior.value=v.ior,p.refractionRatio.value=v.refractionRatio),v.lightMap){p.lightMap.value=v.lightMap;const g=i.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=v.lightMapIntensity*g,e(v.lightMap,p.lightMapTransform)}v.aoMap&&(p.aoMap.value=v.aoMap,p.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,p.aoMapTransform))}function a(p,v){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,v.map&&(p.map.value=v.map,e(v.map,p.mapTransform))}function o(p,v){p.dashSize.value=v.dashSize,p.totalSize.value=v.dashSize+v.gapSize,p.scale.value=v.scale}function h(p,v,y,g){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,p.size.value=v.size*y,p.scale.value=g*.5,v.map&&(p.map.value=v.map,e(v.map,p.uvTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,e(v.alphaMap,p.alphaMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest)}function l(p,v){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,p.rotation.value=v.rotation,v.map&&(p.map.value=v.map,e(v.map,p.mapTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,e(v.alphaMap,p.alphaMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest)}function u(p,v){p.specular.value.copy(v.specular),p.shininess.value=Math.max(v.shininess,1e-4)}function c(p,v){v.gradientMap&&(p.gradientMap.value=v.gradientMap)}function f(p,v){p.metalness.value=v.metalness,v.metalnessMap&&(p.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,p.metalnessMapTransform)),p.roughness.value=v.roughness,v.roughnessMap&&(p.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,p.roughnessMapTransform)),t.get(v).envMap&&(p.envMapIntensity.value=v.envMapIntensity)}function d(p,v,y){p.ior.value=v.ior,v.sheen>0&&(p.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),p.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(p.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,p.sheenColorMapTransform)),v.sheenRoughnessMap&&(p.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,p.sheenRoughnessMapTransform))),v.clearcoat>0&&(p.clearcoat.value=v.clearcoat,p.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(p.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,p.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(p.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ze&&p.clearcoatNormalScale.value.negate())),v.iridescence>0&&(p.iridescence.value=v.iridescence,p.iridescenceIOR.value=v.iridescenceIOR,p.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(p.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,p.iridescenceMapTransform)),v.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),v.transmission>0&&(p.transmission.value=v.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),v.transmissionMap&&(p.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,p.transmissionMapTransform)),p.thickness.value=v.thickness,v.thicknessMap&&(p.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=v.attenuationDistance,p.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(p.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(p.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=v.specularIntensity,p.specularColor.value.copy(v.specularColor),v.specularColorMap&&(p.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,p.specularColorMapTransform)),v.specularIntensityMap&&(p.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,v){v.matcap&&(p.matcap.value=v.matcap)}function _(p,v){const y=t.get(v).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sy(i,t,e,n){let r={},s={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(y,g){const T=g.program;n.uniformBlockBinding(y,T)}function l(y,g){let T=r[y.id];T===void 0&&(m(y),T=u(y),r[y.id]=T,y.addEventListener("dispose",p));const E=g.program;n.updateUBOMapping(y,E);const b=t.render.frame;s[y.id]!==b&&(f(y),s[y.id]=b)}function u(y){const g=c();y.__bindingPointIndex=g;const T=i.createBuffer(),E=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,T),T}function c(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const g=r[y.id],T=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let b=0,w=T.length;b<w;b++){const C=T[b];if(d(C,b,E)===!0){const x=C.__offset,S=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let H=0;H<S.length;H++){const L=S[H],G=_(L);typeof L=="number"?(C.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,x+F,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=L.elements[0],C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=L.elements[0],C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=L.elements[0]):(L.toArray(C.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,C.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,g,T){const E=y.value;if(T[g]===void 0){if(typeof E=="number")T[g]=E;else{const b=Array.isArray(E)?E:[E],w=[];for(let C=0;C<b.length;C++)w.push(b[C].clone());T[g]=w}return!0}else if(typeof E=="number"){if(T[g]!==E)return T[g]=E,!0}else{const b=Array.isArray(T[g])?T[g]:[T[g]],w=Array.isArray(E)?E:[E];for(let C=0;C<b.length;C++){const x=b[C];if(x.equals(w[C])===!1)return x.copy(w[C]),!0}}return!1}function m(y){const g=y.uniforms;let T=0;const E=16;let b=0;for(let w=0,C=g.length;w<C;w++){const x=g[w],S={boundary:0,storage:0},F=Array.isArray(x.value)?x.value:[x.value];for(let H=0,L=F.length;H<L;H++){const G=F[H],P=_(G);S.boundary+=P.boundary,S.storage+=P.storage}if(x.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=T,w>0){b=T%E;const H=E-b;b!==0&&H-S.boundary<0&&(T+=E-b,x.__offset=T)}T+=S.storage}return b=T%E,b>0&&(T+=E-b),y.__size=T,y.__cache={},this}function _(y){const g={boundary:0,storage:0};return typeof y=="number"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function p(y){const g=y.target;g.removeEventListener("dispose",p);const T=a.indexOf(g.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function v(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:h,update:l,dispose:v}}function My(){const i=Qr("canvas");return i.style.display="block",i}class ad{constructor(t={}){const{canvas:e=My(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ht,this.useLegacyLights=!0,this.toneMapping=Xn,this.toneMappingExposure=1;const g=this;let T=!1,E=0,b=0,w=null,C=-1,x=null;const S=new Ce,F=new Ce;let H=null;const L=new Zt(0);let G=0,P=e.width,B=e.height,z=1,Y=null,K=null;const U=new Ce(0,0,P,B),W=new Ce(0,0,P,B);let O=!1;const j=new xl;let $=!1,et=!1,tt=null;const ht=new ye,Et=new yt,vt=new N,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pt(){return w===null?z:1}let D=n;function Nt(A,V){for(let q=0;q<A.length;q++){const k=A[q],Z=e.getContext(k,V);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",at,!1),D===null){const V=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&V.shift(),D=Nt(V,A),D===null)throw Nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let st,St,xt,Tt,It,Lt,$t,pe,xe,R,M,J,nt,it,ut,bt,ct,Q,At,Rt,Pt,_t,gt,Wt;function te(){st=new Ng(D),St=new Pg(D,st,t),st.init(St),_t=new gy(D,st,St),xt=new vy(D,st,St),Tt=new Gg(D),It=new ny,Lt=new _y(D,st,xt,It,St,_t,Tt),$t=new Lg(g),pe=new Ug(g),xe=new Jm(D,St),gt=new Rg(D,st,xe,St),R=new Fg(D,xe,Tt,gt),M=new Vg(D,R,xe,Tt),At=new zg(D,St,Lt),bt=new Ig(It),J=new ey(g,$t,pe,st,St,gt,bt),nt=new by(g,It),it=new ry,ut=new uy(st,St),Q=new Ag(g,$t,pe,xt,M,f,h),ct=new my(g,M,St),Wt=new Sy(D,Tt,St,xt),Rt=new Cg(D,st,Tt,St),Pt=new Bg(D,st,Tt,St),Tt.programs=J.programs,g.capabilities=St,g.extensions=st,g.properties=It,g.renderLists=it,g.shadowMap=ct,g.state=xt,g.info=Tt}te();const I=new Ty(g,D);this.xr=I,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=st.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=st.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(P,B,!1))},this.getSize=function(A){return A.set(P,B)},this.setSize=function(A,V,q=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,B=V,e.width=Math.floor(A*z),e.height=Math.floor(V*z),q===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(P*z,B*z).floor()},this.setDrawingBufferSize=function(A,V,q){P=A,B=V,z=q,e.width=Math.floor(A*q),e.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,V,q,k){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,V,q,k),xt.viewport(S.copy(U).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,V,q,k){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,V,q,k),xt.scissor(F.copy(W).multiplyScalar(z).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(A){xt.setScissorTest(O=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(A=!0,V=!0,q=!0){let k=0;if(A){let Z=!1;if(w!==null){const mt=w.texture.format;Z=mt===Bf||mt===Ff||mt===Nf}if(Z){const mt=w.texture.type,Ct=mt===ai||mt===ni||mt===vl||mt===Li||mt===Df||mt===Uf,Ot=Q.getClearColor(),Dt=Q.getClearAlpha(),Xt=Ot.r,Ft=Ot.g,kt=Ot.b,ne=It.get(w).__webglFramebuffer;Ct?(d[0]=Xt,d[1]=Ft,d[2]=kt,d[3]=Dt,D.clearBufferuiv(D.COLOR,ne,d)):(m[0]=Xt,m[1]=Ft,m[2]=kt,m[3]=Dt,D.clearBufferiv(D.COLOR,ne,m))}else k|=D.COLOR_BUFFER_BIT}V&&(k|=D.DEPTH_BUFFER_BIT),q&&(k|=D.STENCIL_BUFFER_BIT),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",at,!1),it.dispose(),ut.dispose(),It.dispose(),$t.dispose(),pe.dispose(),M.dispose(),gt.dispose(),Wt.dispose(),J.dispose(),I.dispose(),I.removeEventListener("sessionstart",le),I.removeEventListener("sessionend",mn),tt&&(tt.dispose(),tt=null),Be.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Tt.autoReset,V=ct.enabled,q=ct.autoUpdate,k=ct.needsUpdate,Z=ct.type;te(),Tt.autoReset=A,ct.enabled=V,ct.autoUpdate=q,ct.needsUpdate=k,ct.type=Z}function at(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ft(A){const V=A.target;V.removeEventListener("dispose",ft),Jt(V)}function Jt(A){he(A),It.remove(A)}function he(A){const V=It.get(A).programs;V!==void 0&&(V.forEach(function(q){J.releaseProgram(q)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,k,Z,mt){V===null&&(V=Gt);const Ct=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=pp(A,V,q,k,Z);xt.setMaterial(k,Ct);let Dt=q.index,Xt=1;k.wireframe===!0&&(Dt=R.getWireframeAttribute(q),Xt=2);const Ft=q.drawRange,kt=q.attributes.position;let ne=Ft.start*Xt,ce=(Ft.start+Ft.count)*Xt;mt!==null&&(ne=Math.max(ne,mt.start*Xt),ce=Math.min(ce,(mt.start+mt.count)*Xt)),Dt!==null?(ne=Math.max(ne,0),ce=Math.min(ce,Dt.count)):kt!=null&&(ne=Math.max(ne,0),ce=Math.min(ce,kt.count));const Ke=ce-ne;if(Ke<0||Ke===1/0)return;gt.setup(Z,k,Ot,q,Dt);let Pn,ve=Rt;if(Dt!==null&&(Pn=xe.get(Dt),ve=Pt,ve.setIndex(Pn)),Z.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*pt()),ve.setMode(D.LINES)):ve.setMode(D.TRIANGLES);else if(Z.isLine){let Yt=k.linewidth;Yt===void 0&&(Yt=1),xt.setLineWidth(Yt*pt()),Z.isLineSegments?ve.setMode(D.LINES):Z.isLineLoop?ve.setMode(D.LINE_LOOP):ve.setMode(D.LINE_STRIP)}else Z.isPoints?ve.setMode(D.POINTS):Z.isSprite&&ve.setMode(D.TRIANGLES);if(Z.isInstancedMesh)ve.renderInstances(ne,Ke,Z.count);else if(q.isInstancedBufferGeometry){const Yt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ka=Math.min(q.instanceCount,Yt);ve.renderInstances(ne,Ke,Ka)}else ve.render(ne,Ke)},this.compile=function(A,V){function q(k,Z,mt){k.transparent===!0&&k.side===Hn&&k.forceSinglePass===!1?(k.side=ze,k.needsUpdate=!0,bs(k,Z,mt),k.side=li,k.needsUpdate=!0,bs(k,Z,mt),k.side=Hn):bs(k,Z,mt)}p=ut.get(A),p.init(),y.push(p),A.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(g.useLegacyLights),A.traverse(function(k){const Z=k.material;if(Z)if(Array.isArray(Z))for(let mt=0;mt<Z.length;mt++){const Ct=Z[mt];q(Ct,A,k)}else q(Z,A,k)}),y.pop(),p=null};let me=null;function fi(A){me&&me(A)}function le(){Be.stop()}function mn(){Be.start()}const Be=new Qf;Be.setAnimationLoop(fi),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(A){me=A,I.setAnimationLoop(A),A===null?Be.stop():Be.start()},I.addEventListener("sessionstart",le),I.addEventListener("sessionend",mn),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(V=I.updateCameraXR(V)),A.isScene===!0&&A.onBeforeRender(g,A,V,w),p=ut.get(A,y.length),p.init(),y.push(p),ht.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(ht),et=this.localClippingEnabled,$=bt.init(this.clippingPlanes,et),_=it.get(A,v.length),_.init(),v.push(_),Ul(A,V,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(Y,K),$===!0&&bt.beginShadows();const q=p.state.shadowsArray;if(ct.render(q,A,V),$===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,Q.render(_,A),p.setupLights(g.useLegacyLights),V.isArrayCamera){const k=V.cameras;for(let Z=0,mt=k.length;Z<mt;Z++){const Ct=k[Z];Nl(_,A,Ct,Ct.viewport)}}else Nl(_,A,V);w!==null&&(Lt.updateMultisampleRenderTarget(w),Lt.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(g,A,V),gt.resetDefaultState(),C=-1,x=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,v.pop(),v.length>0?_=v[v.length-1]:_=null};function Ul(A,V,q,k){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){k&&vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ht);const Ct=M.update(A),Ot=A.material;Ot.visible&&_.push(A,Ct,Ot,q,vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==Tt.render.frame&&(A.skeleton.update(),A.skeleton.frame=Tt.render.frame);const Ct=M.update(A),Ot=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),vt.copy(Ct.boundingSphere.center)),vt.applyMatrix4(A.matrixWorld).applyMatrix4(ht)),Array.isArray(Ot)){const Dt=Ct.groups;for(let Xt=0,Ft=Dt.length;Xt<Ft;Xt++){const kt=Dt[Xt],ne=Ot[kt.materialIndex];ne&&ne.visible&&_.push(A,Ct,ne,q,vt.z,kt)}}else Ot.visible&&_.push(A,Ct,Ot,q,vt.z,null)}}const mt=A.children;for(let Ct=0,Ot=mt.length;Ct<Ot;Ct++)Ul(mt[Ct],V,q,k)}function Nl(A,V,q,k){const Z=A.opaque,mt=A.transmissive,Ct=A.transparent;p.setupLightsView(q),$===!0&&bt.setGlobalState(g.clippingPlanes,q),mt.length>0&&dp(Z,mt,V,q),k&&xt.viewport(S.copy(k)),Z.length>0&&Ts(Z,V,q),mt.length>0&&Ts(mt,V,q),Ct.length>0&&Ts(Ct,V,q),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function dp(A,V,q,k){const Z=St.isWebGL2;tt===null&&(tt=new Bi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")?Zr:ai,minFilter:Kr,samples:Z&&o===!0?4:0})),g.getDrawingBufferSize(Et),Z?tt.setSize(Et.x,Et.y):tt.setSize(Sh(Et.x),Sh(Et.y));const mt=g.getRenderTarget();g.setRenderTarget(tt),g.getClearColor(L),G=g.getClearAlpha(),G<1&&g.setClearColor(16777215,.5),g.clear();const Ct=g.toneMapping;g.toneMapping=Xn,Ts(A,q,k),Lt.updateMultisampleRenderTarget(tt),Lt.updateRenderTargetMipmap(tt);let Ot=!1;for(let Dt=0,Xt=V.length;Dt<Xt;Dt++){const Ft=V[Dt],kt=Ft.object,ne=Ft.geometry,ce=Ft.material,Ke=Ft.group;if(ce.side===Hn&&kt.layers.test(k.layers)){const Pn=ce.side;ce.side=ze,ce.needsUpdate=!0,Fl(kt,q,k,ne,ce,Ke),ce.side=Pn,ce.needsUpdate=!0,Ot=!0}}Ot===!0&&(Lt.updateMultisampleRenderTarget(tt),Lt.updateRenderTargetMipmap(tt)),g.setRenderTarget(mt),g.setClearColor(L,G),g.toneMapping=Ct}function Ts(A,V,q){const k=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,mt=A.length;Z<mt;Z++){const Ct=A[Z],Ot=Ct.object,Dt=Ct.geometry,Xt=k===null?Ct.material:k,Ft=Ct.group;Ot.layers.test(q.layers)&&Fl(Ot,V,q,Dt,Xt,Ft)}}function Fl(A,V,q,k,Z,mt){A.onBeforeRender(g,V,q,k,Z,mt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(g,V,q,k,A,mt),Z.transparent===!0&&Z.side===Hn&&Z.forceSinglePass===!1?(Z.side=ze,Z.needsUpdate=!0,g.renderBufferDirect(q,V,k,Z,A,mt),Z.side=li,Z.needsUpdate=!0,g.renderBufferDirect(q,V,k,Z,A,mt),Z.side=Hn):g.renderBufferDirect(q,V,k,Z,A,mt),A.onAfterRender(g,V,q,k,Z,mt)}function bs(A,V,q){V.isScene!==!0&&(V=Gt);const k=It.get(A),Z=p.state.lights,mt=p.state.shadowsArray,Ct=Z.state.version,Ot=J.getParameters(A,Z.state,mt,V,q),Dt=J.getProgramCacheKey(Ot);let Xt=k.programs;k.environment=A.isMeshStandardMaterial?V.environment:null,k.fog=V.fog,k.envMap=(A.isMeshStandardMaterial?pe:$t).get(A.envMap||k.environment),Xt===void 0&&(A.addEventListener("dispose",ft),Xt=new Map,k.programs=Xt);let Ft=Xt.get(Dt);if(Ft!==void 0){if(k.currentProgram===Ft&&k.lightsStateVersion===Ct)return Bl(A,Ot),Ft}else Ot.uniforms=J.getUniforms(A),A.onBuild(q,Ot,g),A.onBeforeCompile(Ot,g),Ft=J.acquireProgram(Ot,Dt),Xt.set(Dt,Ft),k.uniforms=Ot.uniforms;const kt=k.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=bt.uniform),Bl(A,Ot),k.needsLights=vp(A),k.lightsStateVersion=Ct,k.needsLights&&(kt.ambientLightColor.value=Z.state.ambient,kt.lightProbe.value=Z.state.probe,kt.directionalLights.value=Z.state.directional,kt.directionalLightShadows.value=Z.state.directionalShadow,kt.spotLights.value=Z.state.spot,kt.spotLightShadows.value=Z.state.spotShadow,kt.rectAreaLights.value=Z.state.rectArea,kt.ltc_1.value=Z.state.rectAreaLTC1,kt.ltc_2.value=Z.state.rectAreaLTC2,kt.pointLights.value=Z.state.point,kt.pointLightShadows.value=Z.state.pointShadow,kt.hemisphereLights.value=Z.state.hemi,kt.directionalShadowMap.value=Z.state.directionalShadowMap,kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,kt.spotShadowMap.value=Z.state.spotShadowMap,kt.spotLightMatrix.value=Z.state.spotLightMatrix,kt.spotLightMap.value=Z.state.spotLightMap,kt.pointShadowMap.value=Z.state.pointShadowMap,kt.pointShadowMatrix.value=Z.state.pointShadowMatrix);const ne=Ft.getUniforms(),ce=Ea.seqWithValue(ne.seq,kt);return k.currentProgram=Ft,k.uniformsList=ce,Ft}function Bl(A,V){const q=It.get(A);q.outputColorSpace=V.outputColorSpace,q.instancing=V.instancing,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function pp(A,V,q,k,Z){V.isScene!==!0&&(V=Gt),Lt.resetTextureUnits();const mt=V.fog,Ct=k.isMeshStandardMaterial?V.environment:null,Ot=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Sn,Dt=(k.isMeshStandardMaterial?pe:$t).get(k.envMap||Ct),Xt=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ft=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),kt=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,ce=!!q.morphAttributes.color,Ke=k.toneMapped?g.toneMapping:Xn,Pn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ve=Pn!==void 0?Pn.length:0,Yt=It.get(k),Ka=p.state.lights;if($===!0&&(et===!0||A!==x)){const Ve=A===x&&k.id===C;bt.setState(k,A,Ve)}let we=!1;k.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ka.state.version||Yt.outputColorSpace!==Ot||Z.isInstancedMesh&&Yt.instancing===!1||!Z.isInstancedMesh&&Yt.instancing===!0||Z.isSkinnedMesh&&Yt.skinning===!1||!Z.isSkinnedMesh&&Yt.skinning===!0||Yt.envMap!==Dt||k.fog===!0&&Yt.fog!==mt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==Xt||Yt.vertexTangents!==Ft||Yt.morphTargets!==kt||Yt.morphNormals!==ne||Yt.morphColors!==ce||Yt.toneMapping!==Ke||St.isWebGL2===!0&&Yt.morphTargetsCount!==ve)&&(we=!0):(we=!0,Yt.__version=k.version);let di=Yt.currentProgram;we===!0&&(di=bs(k,V,Z));let Gl=!1,Lr=!1,Za=!1;const Ge=di.getUniforms(),pi=Yt.uniforms;if(xt.useProgram(di.program)&&(Gl=!0,Lr=!0,Za=!0),k.id!==C&&(C=k.id,Lr=!0),Gl||x!==A){if(Ge.setValue(D,"projectionMatrix",A.projectionMatrix),St.logarithmicDepthBuffer&&Ge.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,Lr=!0,Za=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Ve=Ge.map.cameraPosition;Ve!==void 0&&Ve.setValue(D,vt.setFromMatrixPosition(A.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ge.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Z.isSkinnedMesh)&&Ge.setValue(D,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){Ge.setOptional(D,Z,"bindMatrix"),Ge.setOptional(D,Z,"bindMatrixInverse");const Ve=Z.skeleton;Ve&&(St.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ge.setValue(D,"boneTexture",Ve.boneTexture,Lt),Ge.setValue(D,"boneTextureSize",Ve.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qa=q.morphAttributes;if((Qa.position!==void 0||Qa.normal!==void 0||Qa.color!==void 0&&St.isWebGL2===!0)&&At.update(Z,q,di),(Lr||Yt.receiveShadow!==Z.receiveShadow)&&(Yt.receiveShadow=Z.receiveShadow,Ge.setValue(D,"receiveShadow",Z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(pi.envMap.value=Dt,pi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Lr&&(Ge.setValue(D,"toneMappingExposure",g.toneMappingExposure),Yt.needsLights&&mp(pi,Za),mt&&k.fog===!0&&nt.refreshFogUniforms(pi,mt),nt.refreshMaterialUniforms(pi,k,z,B,tt),Ea.upload(D,Yt.uniformsList,pi,Lt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ea.upload(D,Yt.uniformsList,pi,Lt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ge.setValue(D,"center",Z.center),Ge.setValue(D,"modelViewMatrix",Z.modelViewMatrix),Ge.setValue(D,"normalMatrix",Z.normalMatrix),Ge.setValue(D,"modelMatrix",Z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ve=k.uniformsGroups;for(let to=0,_p=Ve.length;to<_p;to++)if(St.isWebGL2){const kl=Ve[to];Wt.update(kl,di),Wt.bind(kl,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function mp(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function vp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,V,q){It.get(A.texture).__webglTexture=V,It.get(A.depthTexture).__webglTexture=q;const k=It.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=q===void 0,k.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const q=It.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,q=0){w=A,E=V,b=q;let k=!0,Z=null,mt=!1,Ct=!1;if(A){const Dt=It.get(A);Dt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1):Dt.__webglFramebuffer===void 0?Lt.setupRenderTarget(A):Dt.__hasExternalTextures&&Lt.rebindTextures(A,It.get(A.texture).__webglTexture,It.get(A.depthTexture).__webglTexture);const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ct=!0);const Ft=It.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=Ft[V],mt=!0):St.isWebGL2&&A.samples>0&&Lt.useMultisampledRTT(A)===!1?Z=It.get(A).__webglMultisampledFramebuffer:Z=Ft,S.copy(A.viewport),F.copy(A.scissor),H=A.scissorTest}else S.copy(U).multiplyScalar(z).floor(),F.copy(W).multiplyScalar(z).floor(),H=O;if(xt.bindFramebuffer(D.FRAMEBUFFER,Z)&&St.drawBuffers&&k&&xt.drawBuffers(A,Z),xt.viewport(S),xt.scissor(F),xt.setScissorTest(H),mt){const Dt=It.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Dt.__webglTexture,q)}else if(Ct){const Dt=It.get(A.texture),Xt=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,q||0,Xt)}C=-1},this.readRenderTargetPixels=function(A,V,q,k,Z,mt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ot=Ot[Ct]),Ot){xt.bindFramebuffer(D.FRAMEBUFFER,Ot);try{const Dt=A.texture,Xt=Dt.format,Ft=Dt.type;if(Xt!==ln&&_t.convert(Xt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Ft===Zr&&(st.has("EXT_color_buffer_half_float")||St.isWebGL2&&st.has("EXT_color_buffer_float"));if(Ft!==ai&&_t.convert(Ft)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===ii&&(St.isWebGL2||st.has("OES_texture_float")||st.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-k&&q>=0&&q<=A.height-Z&&D.readPixels(V,q,k,Z,_t.convert(Xt),_t.convert(Ft),mt)}finally{const Dt=w!==null?It.get(w).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(A,V,q=0){const k=Math.pow(2,-q),Z=Math.floor(V.image.width*k),mt=Math.floor(V.image.height*k);Lt.setTexture2D(V,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,A.x,A.y,Z,mt),xt.unbindTexture()},this.copyTextureToTexture=function(A,V,q,k=0){const Z=V.image.width,mt=V.image.height,Ct=_t.convert(q.format),Ot=_t.convert(q.type);Lt.setTexture2D(q,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,A.x,A.y,Z,mt,Ct,Ot,V.image.data):V.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Ct,V.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,k,A.x,A.y,Ct,Ot,V.image),k===0&&q.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(A,V,q,k,Z=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=A.max.x-A.min.x+1,Ct=A.max.y-A.min.y+1,Ot=A.max.z-A.min.z+1,Dt=_t.convert(k.format),Xt=_t.convert(k.type);let Ft;if(k.isData3DTexture)Lt.setTexture3D(k,0),Ft=D.TEXTURE_3D;else if(k.isDataArrayTexture)Lt.setTexture2DArray(k,0),Ft=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const kt=D.getParameter(D.UNPACK_ROW_LENGTH),ne=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ce=D.getParameter(D.UNPACK_SKIP_PIXELS),Ke=D.getParameter(D.UNPACK_SKIP_ROWS),Pn=D.getParameter(D.UNPACK_SKIP_IMAGES),ve=q.isCompressedTexture?q.mipmaps[0]:q.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,A.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,A.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(Ft,Z,V.x,V.y,V.z,mt,Ct,Ot,Dt,Xt,ve.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ft,Z,V.x,V.y,V.z,mt,Ct,Ot,Dt,ve.data)):D.texSubImage3D(Ft,Z,V.x,V.y,V.z,mt,Ct,Ot,Dt,Xt,ve),D.pixelStorei(D.UNPACK_ROW_LENGTH,kt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ne),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pn),Z===0&&k.generateMipmaps&&D.generateMipmap(Ft),xt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Lt.setTextureCube(A,0):A.isData3DTexture?Lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Lt.setTexture2DArray(A,0):Lt.setTexture2D(A,0),xt.unbindTexture()},this.resetState=function(){E=0,b=0,w=null,xt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?Di:Gf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Di?Ht:Sn}}class wy extends ad{}wy.prototype.isWebGL1Renderer=!0;class Ay extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,h=s-1,l;for(;o<=h;)if(r=Math.floor(o+(h-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)h=r-1;else{h=r;break}if(r=h,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),h=e||(a.isVector2?new yt:new N);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,r=[],s=[],a=[],o=new N,h=new ye;for(let d=0;d<=t;d++){const m=d/t;r[d]=this.getTangentAt(m,new N)}s[0]=new N,a[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),c=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),c<=l&&(l=c,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Le(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(h.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Le(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(h.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tl extends Rn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=h}getPoint(t,e){const n=e||new yt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let h=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),f=h-this.aX,d=l-this.aY;h=f*u-d*c+this.aX,l=f*c+d*u+this.aY}return n.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ry extends Tl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function bl(){let i=0,t=0,e=0,n=0;function r(s,a,o,h){i=s,t=o,e=-3*s+3*a-2*o-h,n=2*s-2*a+o+h}return{initCatmullRom:function(s,a,o,h,l){r(a,o,l*(o-s),l*(h-a))},initNonuniformCatmullRom:function(s,a,o,h,l,u,c){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(h-a)/(u+c)+(h-o)/c;f*=u,d*=u,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Ys=new N,Oo=new bl,Do=new bl,Uo=new bl;class Cy extends Rn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new N){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Ys.subVectors(r[0],r[1]).add(r[0]),l=Ys);const c=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Ys.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(c),d),_=Math.pow(c.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Oo.initNonuniformCatmullRom(l.x,c.x,f.x,u.x,m,_,p),Do.initNonuniformCatmullRom(l.y,c.y,f.y,u.y,m,_,p),Uo.initNonuniformCatmullRom(l.z,c.z,f.z,u.z,m,_,p)}else this.curveType==="catmullrom"&&(Oo.initCatmullRom(l.x,c.x,f.x,u.x,this.tension),Do.initCatmullRom(l.y,c.y,f.y,u.y,this.tension),Uo.initCatmullRom(l.z,c.z,f.z,u.z,this.tension));return n.set(Oo.calc(h),Do.calc(h),Uo.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new N().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ic(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,h=i*o;return(2*e-2*n+s+a)*h+(-3*e+3*n-2*s-a)*o+s*i+e}function Py(i,t){const e=1-i;return e*e*t}function Iy(i,t){return 2*(1-i)*i*t}function Ly(i,t){return i*i*t}function qr(i,t,e,n){return Py(i,t)+Iy(i,e)+Ly(i,n)}function Oy(i,t){const e=1-i;return e*e*e*t}function Dy(i,t){const e=1-i;return 3*e*e*i*t}function Uy(i,t){return 3*(1-i)*i*i*t}function Ny(i,t){return i*i*i*t}function $r(i,t,e,n,r){return Oy(i,t)+Dy(i,e)+Uy(i,n)+Ny(i,r)}class od extends Rn{constructor(t=new yt,e=new yt,n=new yt,r=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new yt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set($r(t,r.x,s.x,a.x,o.x),$r(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fy extends Rn{constructor(t=new N,e=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new N){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set($r(t,r.x,s.x,a.x,o.x),$r(t,r.y,s.y,a.y,o.y),$r(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sl extends Rn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class By extends Rn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends Rn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(qr(t,r.x,s.x,a.x),qr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gy extends Rn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(qr(t,r.x,s.x,a.x),qr(t,r.y,s.y,a.y),qr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ld extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,h=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],c=r[a>r.length-3?r.length-1:a+2];return n.set(ic(o,h.x,l.x,u.x,c.x),ic(o,h.y,l.y,u.y,c.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new yt().fromArray(r))}return this}}var ky=Object.freeze({__proto__:null,ArcCurve:Ry,CatmullRomCurve3:Cy,CubicBezierCurve:od,CubicBezierCurve3:Fy,EllipseCurve:Tl,LineCurve:Sl,LineCurve3:By,QuadraticBezierCurve:hd,QuadraticBezierCurve3:Gy,SplineCurve:ld});class Hy extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Sl(e,t))}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],h=o.getLength(),l=h===0?0:1-a/h;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(o);for(let l=0;l<h.length;l++){const u=h[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ky[r.type]().fromJSON(r))}return this}}class zy extends Hy{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sl(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new hd(this.currentPoint.clone(),new yt(t,e),new yt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new od(this.currentPoint.clone(),new yt(t,e),new yt(n,r),new yt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ld(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,h){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,a,o,h),this}absellipse(t,e,n,r,s,a,o,h){const l=new Tl(t,e,n,r,s,a,o,h);if(this.curves.length>0){const c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ml extends An{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Le(r,0,Math.PI*2);const s=[],a=[],o=[],h=[],l=[],u=1/e,c=new N,f=new yt,d=new N,m=new N,_=new N;let p=0,v=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,v=t[y+1].y-t[y].y,d.x=v*1,d.y=-p,d.z=v*0,_.copy(d),d.normalize(),h.push(d.x,d.y,d.z);break;case t.length-1:h.push(_.x,_.y,_.z);break;default:p=t[y+1].x-t[y].x,v=t[y+1].y-t[y].y,d.x=v*1,d.y=-p,d.z=v*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),h.push(d.x,d.y,d.z),_.copy(m)}for(let y=0;y<=e;y++){const g=n+y*u*r,T=Math.sin(g),E=Math.cos(g);for(let b=0;b<=t.length-1;b++){c.x=t[b].x*T,c.y=t[b].y,c.z=t[b].x*E,a.push(c.x,c.y,c.z),f.x=y/e,f.y=b/(t.length-1),o.push(f.x,f.y);const w=h[3*b+0]*T,C=h[3*b+1],x=h[3*b+0]*E;l.push(w,C,x)}}for(let y=0;y<e;y++)for(let g=0;g<t.length-1;g++){const T=g+y*t.length,E=T,b=T+t.length,w=T+t.length+1,C=T+1;s.push(E,b,C),s.push(w,C,b)}this.setIndex(s),this.setAttribute("position",new Fe(a,3)),this.setAttribute("uv",new Fe(o,2)),this.setAttribute("normal",new Fe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.points,t.segments,t.phiStart,t.phiLength)}}class wl extends Ml{constructor(t=1,e=1,n=4,r=8){const s=new zy;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new wl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Al extends An{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:h};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],c=[],f=[],d=[];let m=0;const _=[],p=n/2;let v=0;y(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(d,2));function y(){const T=new N,E=new N;let b=0;const w=(e-t)/n;for(let C=0;C<=s;C++){const x=[],S=C/s,F=S*(e-t)+t;for(let H=0;H<=r;H++){const L=H/r,G=L*h+o,P=Math.sin(G),B=Math.cos(G);E.x=F*P,E.y=-S*n+p,E.z=F*B,c.push(E.x,E.y,E.z),T.set(P,w,B).normalize(),f.push(T.x,T.y,T.z),d.push(L,1-S),x.push(m++)}_.push(x)}for(let C=0;C<r;C++)for(let x=0;x<s;x++){const S=_[x][C],F=_[x+1][C],H=_[x+1][C+1],L=_[x][C+1];u.push(S,F,L),u.push(F,H,L),b+=6}l.addGroup(v,b,0),v+=b}function g(T){const E=m,b=new yt,w=new N;let C=0;const x=T===!0?t:e,S=T===!0?1:-1;for(let H=1;H<=r;H++)c.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),m++;const F=m;for(let H=0;H<=r;H++){const G=H/r*h+o,P=Math.cos(G),B=Math.sin(G);w.x=x*B,w.y=p*S,w.z=x*P,c.push(w.x,w.y,w.z),f.push(0,S,0),b.x=P*.5+.5,b.y=B*.5*S+.5,d.push(b.x,b.y),m++}for(let H=0;H<r;H++){const L=E+H,G=F+H;T===!0?u.push(G,G+1,L):u.push(G+1,G,L),C+=3}l.addGroup(v,C,T===!0?1:2),v+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xa extends An{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(a+o,Math.PI);let l=0;const u=[],c=new N,f=new N,d=[],m=[],_=[],p=[];for(let v=0;v<=n;v++){const y=[],g=v/n;let T=0;v===0&&a===0?T=.5/e:v===n&&h===Math.PI&&(T=-.5/e);for(let E=0;E<=e;E++){const b=E/e;c.x=-t*Math.cos(r+b*s)*Math.sin(a+g*o),c.y=t*Math.cos(a+g*o),c.z=t*Math.sin(r+b*s)*Math.sin(a+g*o),m.push(c.x,c.y,c.z),f.copy(c).normalize(),_.push(f.x,f.y,f.z),p.push(b+T,1-g),y.push(l++)}u.push(y)}for(let v=0;v<n;v++)for(let y=0;y<e;y++){const g=u[v][y+1],T=u[v][y],E=u[v+1][y],b=u[v+1][y+1];(v!==0||a>0)&&d.push(g,T,b),(v!==n-1||h<Math.PI)&&d.push(T,E,b)}this.setIndex(d),this.setAttribute("position",new Fe(m,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vy extends vs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const rc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Wy{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,h;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){const c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=l.length;c<f;c+=2){const d=l[c],m=l[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const Xy=new Wy;let ud=class{constructor(t){this.manager=t!==void 0?t:Xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};class Yy extends ud{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=rc.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Qr("img");function h(){u(),rc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(c){u(),r&&r(c),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",h,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}let jy=class extends ud{constructor(t){super(t)}load(t,e,n,r){const s=new wn,a=new Yy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};class cd extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const No=new ye,sc=new N,ac=new N;class qy{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(sc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $y extends qy{constructor(){super(new ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jy extends cd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new $y}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ky extends cd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zy{constructor(t,e,n=0,r=1/0){this.ray=new Yf(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return wh(t,this,n,e),n.sort(oc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)wh(t[r],this,n,e);return n.sort(oc),n}}function oc(i,t){return i.distance-t.distance}function wh(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)wh(r[s],t,e,!0)}}class Qy extends Xa{constructor(t,e,n,r,s,a,o){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(t,e,n,r,s,a,o)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);function tx(i){var t=this.constructor;return this.then(function(e){return t.resolve(i()).then(function(){return e})},function(e){return t.resolve(i()).then(function(){return t.reject(e)})})}function ex(i){var t=this;return new t(function(e,n){if(!(i&&typeof i.length<"u"))return n(new TypeError(typeof i+" "+i+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(i);if(r.length===0)return e([]);var s=r.length;function a(h,l){if(l&&(typeof l=="object"||typeof l=="function")){var u=l.then;if(typeof u=="function"){u.call(l,function(c){a(h,c)},function(c){r[h]={status:"rejected",reason:c},--s===0&&e(r)});return}}r[h]={status:"fulfilled",value:l},--s===0&&e(r)}for(var o=0;o<r.length;o++)a(o,r[o])})}function fd(i,t){this.name="AggregateError",this.errors=i,this.message=t||""}fd.prototype=Error.prototype;function nx(i){var t=this;return new t(function(e,n){if(!(i&&typeof i.length<"u"))return n(new TypeError("Promise.any accepts an array"));var r=Array.prototype.slice.call(i);if(r.length===0)return n();for(var s=[],a=0;a<r.length;a++)try{t.resolve(r[a]).then(e).catch(function(o){s.push(o),s.length===r.length&&n(new fd(s,"All promises were rejected"))})}catch(o){n(o)}})}var ix=setTimeout;function dd(i){return!!(i&&typeof i.length<"u")}function rx(){}function sx(i,t){return function(){i.apply(t,arguments)}}function oe(i){if(!(this instanceof oe))throw new TypeError("Promises must be constructed via new");if(typeof i!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],md(i,this)}function pd(i,t){for(;i._state===3;)i=i._value;if(i._state===0){i._deferreds.push(t);return}i._handled=!0,oe._immediateFn(function(){var e=i._state===1?t.onFulfilled:t.onRejected;if(e===null){(i._state===1?Ah:ts)(t.promise,i._value);return}var n;try{n=e(i._value)}catch(r){ts(t.promise,r);return}Ah(t.promise,n)})}function Ah(i,t){try{if(t===i)throw new TypeError("A promise cannot be resolved with itself.");if(t&&(typeof t=="object"||typeof t=="function")){var e=t.then;if(t instanceof oe){i._state=3,i._value=t,Rh(i);return}else if(typeof e=="function"){md(sx(e,t),i);return}}i._state=1,i._value=t,Rh(i)}catch(n){ts(i,n)}}function ts(i,t){i._state=2,i._value=t,Rh(i)}function Rh(i){i._state===2&&i._deferreds.length===0&&oe._immediateFn(function(){i._handled||oe._unhandledRejectionFn(i._value)});for(var t=0,e=i._deferreds.length;t<e;t++)pd(i,i._deferreds[t]);i._deferreds=null}function ax(i,t,e){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof t=="function"?t:null,this.promise=e}function md(i,t){var e=!1;try{i(function(n){e||(e=!0,Ah(t,n))},function(n){e||(e=!0,ts(t,n))})}catch(n){if(e)return;e=!0,ts(t,n)}}oe.prototype.catch=function(i){return this.then(null,i)};oe.prototype.then=function(i,t){var e=new this.constructor(rx);return pd(this,new ax(i,t,e)),e};oe.prototype.finally=tx;oe.all=function(i){return new oe(function(t,e){if(!dd(i))return e(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(i);if(n.length===0)return t([]);var r=n.length;function s(o,h){try{if(h&&(typeof h=="object"||typeof h=="function")){var l=h.then;if(typeof l=="function"){l.call(h,function(u){s(o,u)},e);return}}n[o]=h,--r===0&&t(n)}catch(u){e(u)}}for(var a=0;a<n.length;a++)s(a,n[a])})};oe.any=nx;oe.allSettled=ex;oe.resolve=function(i){return i&&typeof i=="object"&&i.constructor===oe?i:new oe(function(t){t(i)})};oe.reject=function(i){return new oe(function(t,e){e(i)})};oe.race=function(i){return new oe(function(t,e){if(!dd(i))return e(new TypeError("Promise.race accepts an array"));for(var n=0,r=i.length;n<r;n++)oe.resolve(i[n]).then(t,e)})};oe._immediateFn=typeof setImmediate=="function"&&function(i){setImmediate(i)}||function(i){ix(i,0)};oe._unhandledRejectionFn=function(t){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var hc=Object.getOwnPropertySymbols,ox=Object.prototype.hasOwnProperty,hx=Object.prototype.propertyIsEnumerable;function lx(i){if(i==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}function ux(){try{if(!Object.assign)return!1;var i=new String("abc");if(i[5]="de",Object.getOwnPropertyNames(i)[0]==="5")return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;var n=Object.getOwnPropertyNames(t).map(function(s){return t[s]});if(n.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(s){r[s]=s}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var cx=ux()?Object.assign:function(i,t){for(var e,n=lx(i),r,s=1;s<arguments.length;s++){e=Object(arguments[s]);for(var a in e)ox.call(e,a)&&(n[a]=e[a]);if(hc){r=hc(e);for(var o=0;o<r.length;o++)hx.call(e,r[o])&&(n[r[o]]=e[r[o]])}}return n};const fx=ka(cx);/*!
 * @pixi/polyfill - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */typeof globalThis>"u"&&(typeof self<"u"?self.globalThis=self:typeof global<"u"&&(global.globalThis=global));globalThis.Promise||(globalThis.Promise=oe);Object.assign||(Object.assign=fx);var dx=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(globalThis.performance&&globalThis.performance.now)){var px=Date.now();globalThis.performance||(globalThis.performance={}),globalThis.performance.now=function(){return Date.now()-px}}var Fo=Date.now(),lc=["ms","moz","webkit","o"];for(var Bo=0;Bo<lc.length&&!globalThis.requestAnimationFrame;++Bo){var Go=lc[Bo];globalThis.requestAnimationFrame=globalThis[Go+"RequestAnimationFrame"],globalThis.cancelAnimationFrame=globalThis[Go+"CancelAnimationFrame"]||globalThis[Go+"CancelRequestAnimationFrame"]}globalThis.requestAnimationFrame||(globalThis.requestAnimationFrame=function(i){if(typeof i!="function")throw new TypeError(i+"is not a function");var t=Date.now(),e=dx+Fo-t;return e<0&&(e=0),Fo=t,globalThis.self.setTimeout(function(){Fo=Date.now(),i(performance.now())},e)});globalThis.cancelAnimationFrame||(globalThis.cancelAnimationFrame=function(i){return clearTimeout(i)});Math.sign||(Math.sign=function(t){return t=Number(t),t===0||isNaN(t)?t:t>0?1:-1});Number.isInteger||(Number.isInteger=function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t});globalThis.ArrayBuffer||(globalThis.ArrayBuffer=Array);globalThis.Float32Array||(globalThis.Float32Array=Array);globalThis.Uint32Array||(globalThis.Uint32Array=Array);globalThis.Uint16Array||(globalThis.Uint16Array=Array);globalThis.Uint8Array||(globalThis.Uint8Array=Array);globalThis.Int32Array||(globalThis.Int32Array=Array);/*!
 * @pixi/constants - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Yn;(function(i){i[i.WEBGL_LEGACY=0]="WEBGL_LEGACY",i[i.WEBGL=1]="WEBGL",i[i.WEBGL2=2]="WEBGL2"})(Yn||(Yn={}));var es;(function(i){i[i.UNKNOWN=0]="UNKNOWN",i[i.WEBGL=1]="WEBGL",i[i.CANVAS=2]="CANVAS"})(es||(es={}));var wa;(function(i){i[i.COLOR=16384]="COLOR",i[i.DEPTH=256]="DEPTH",i[i.STENCIL=1024]="STENCIL"})(wa||(wa={}));var wt;(function(i){i[i.NORMAL=0]="NORMAL",i[i.ADD=1]="ADD",i[i.MULTIPLY=2]="MULTIPLY",i[i.SCREEN=3]="SCREEN",i[i.OVERLAY=4]="OVERLAY",i[i.DARKEN=5]="DARKEN",i[i.LIGHTEN=6]="LIGHTEN",i[i.COLOR_DODGE=7]="COLOR_DODGE",i[i.COLOR_BURN=8]="COLOR_BURN",i[i.HARD_LIGHT=9]="HARD_LIGHT",i[i.SOFT_LIGHT=10]="SOFT_LIGHT",i[i.DIFFERENCE=11]="DIFFERENCE",i[i.EXCLUSION=12]="EXCLUSION",i[i.HUE=13]="HUE",i[i.SATURATION=14]="SATURATION",i[i.COLOR=15]="COLOR",i[i.LUMINOSITY=16]="LUMINOSITY",i[i.NORMAL_NPM=17]="NORMAL_NPM",i[i.ADD_NPM=18]="ADD_NPM",i[i.SCREEN_NPM=19]="SCREEN_NPM",i[i.NONE=20]="NONE",i[i.SRC_OVER=0]="SRC_OVER",i[i.SRC_IN=21]="SRC_IN",i[i.SRC_OUT=22]="SRC_OUT",i[i.SRC_ATOP=23]="SRC_ATOP",i[i.DST_OVER=24]="DST_OVER",i[i.DST_IN=25]="DST_IN",i[i.DST_OUT=26]="DST_OUT",i[i.DST_ATOP=27]="DST_ATOP",i[i.ERASE=26]="ERASE",i[i.SUBTRACT=28]="SUBTRACT",i[i.XOR=29]="XOR"})(wt||(wt={}));var un;(function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(un||(un={}));var rt;(function(i){i[i.RGBA=6408]="RGBA",i[i.RGB=6407]="RGB",i[i.RG=33319]="RG",i[i.RED=6403]="RED",i[i.RGBA_INTEGER=36249]="RGBA_INTEGER",i[i.RGB_INTEGER=36248]="RGB_INTEGER",i[i.RG_INTEGER=33320]="RG_INTEGER",i[i.RED_INTEGER=36244]="RED_INTEGER",i[i.ALPHA=6406]="ALPHA",i[i.LUMINANCE=6409]="LUMINANCE",i[i.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",i[i.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",i[i.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(rt||(rt={}));var Ni;(function(i){i[i.TEXTURE_2D=3553]="TEXTURE_2D",i[i.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",i[i.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",i[i.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",i[i.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",i[i.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",i[i.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Ni||(Ni={}));var Mt;(function(i){i[i.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",i[i.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",i[i.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",i[i.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",i[i.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",i[i.UNSIGNED_INT=5125]="UNSIGNED_INT",i[i.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",i[i.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",i[i.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",i[i.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",i[i.BYTE=5120]="BYTE",i[i.SHORT=5122]="SHORT",i[i.INT=5124]="INT",i[i.FLOAT=5126]="FLOAT",i[i.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",i[i.HALF_FLOAT=36193]="HALF_FLOAT"})(Mt||(Mt={}));var Aa;(function(i){i[i.FLOAT=0]="FLOAT",i[i.INT=1]="INT",i[i.UINT=2]="UINT"})(Aa||(Aa={}));var yn;(function(i){i[i.NEAREST=0]="NEAREST",i[i.LINEAR=1]="LINEAR"})(yn||(yn={}));var Tn;(function(i){i[i.CLAMP=33071]="CLAMP",i[i.REPEAT=10497]="REPEAT",i[i.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Tn||(Tn={}));var dn;(function(i){i[i.OFF=0]="OFF",i[i.POW2=1]="POW2",i[i.ON=2]="ON",i[i.ON_MANUAL=3]="ON_MANUAL"})(dn||(dn={}));var pn;(function(i){i[i.NPM=0]="NPM",i[i.UNPACK=1]="UNPACK",i[i.PMA=2]="PMA",i[i.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",i[i.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",i[i.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",i[i.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(pn||(pn={}));var on;(function(i){i[i.NO=0]="NO",i[i.YES=1]="YES",i[i.AUTO=2]="AUTO",i[i.BLEND=0]="BLEND",i[i.CLEAR=1]="CLEAR",i[i.BLIT=2]="BLIT"})(on||(on={}));var Ra;(function(i){i[i.AUTO=0]="AUTO",i[i.MANUAL=1]="MANUAL"})(Ra||(Ra={}));var je;(function(i){i.LOW="lowp",i.MEDIUM="mediump",i.HIGH="highp"})(je||(je={}));var ge;(function(i){i[i.NONE=0]="NONE",i[i.SCISSOR=1]="SCISSOR",i[i.STENCIL=2]="STENCIL",i[i.SPRITE=3]="SPRITE",i[i.COLOR=4]="COLOR"})(ge||(ge={}));var uc;(function(i){i[i.RED=1]="RED",i[i.GREEN=2]="GREEN",i[i.BLUE=4]="BLUE",i[i.ALPHA=8]="ALPHA"})(uc||(uc={}));var re;(function(i){i[i.NONE=0]="NONE",i[i.LOW=2]="LOW",i[i.MEDIUM=4]="MEDIUM",i[i.HIGH=8]="HIGH"})(re||(re={}));var bn;(function(i){i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(bn||(bn={}));/*!
 * @pixi/settings - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var mx={createCanvas:function(i,t){var e=document.createElement("canvas");return e.width=i,e.height=t,e},getWebGLRenderingContext:function(){return WebGLRenderingContext},getNavigator:function(){return navigator},getBaseUrl:function(){var i;return(i=document.baseURI)!==null&&i!==void 0?i:window.location.href},fetch:function(i,t){return fetch(i,t)}},ko=/iPhone/i,cc=/iPod/i,fc=/iPad/i,dc=/\biOS-universal(?:.+)Mac\b/i,Ho=/\bAndroid(?:.+)Mobile\b/i,pc=/Android/i,or=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,js=/Silk/i,Fn=/Windows Phone/i,mc=/\bWindows(?:.+)ARM\b/i,vc=/BlackBerry/i,_c=/BB10/i,gc=/Opera Mini/i,yc=/\b(CriOS|Chrome)(?:.+)Mobile/i,xc=/Mobile(?:.+)Firefox\b/i,Ec=function(i){return typeof i<"u"&&i.platform==="MacIntel"&&typeof i.maxTouchPoints=="number"&&i.maxTouchPoints>1&&typeof MSStream>"u"};function vx(i){return function(t){return t.test(i)}}function _x(i){var t={userAgent:"",platform:"",maxTouchPoints:0};!i&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof i=="string"?t.userAgent=i:i&&i.userAgent&&(t={userAgent:i.userAgent,platform:i.platform,maxTouchPoints:i.maxTouchPoints||0});var e=t.userAgent,n=e.split("[FBAN");typeof n[1]<"u"&&(e=n[0]),n=e.split("Twitter"),typeof n[1]<"u"&&(e=n[0]);var r=vx(e),s={apple:{phone:r(ko)&&!r(Fn),ipod:r(cc),tablet:!r(ko)&&(r(fc)||Ec(t))&&!r(Fn),universal:r(dc),device:(r(ko)||r(cc)||r(fc)||r(dc)||Ec(t))&&!r(Fn)},amazon:{phone:r(or),tablet:!r(or)&&r(js),device:r(or)||r(js)},android:{phone:!r(Fn)&&r(or)||!r(Fn)&&r(Ho),tablet:!r(Fn)&&!r(or)&&!r(Ho)&&(r(js)||r(pc)),device:!r(Fn)&&(r(or)||r(js)||r(Ho)||r(pc))||r(/\bokhttp\b/i)},windows:{phone:r(Fn),tablet:r(mc),device:r(Fn)||r(mc)},other:{blackberry:r(vc),blackberry10:r(_c),opera:r(gc),firefox:r(xc),chrome:r(yc),device:r(vc)||r(_c)||r(gc)||r(xc)||r(yc)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}var xn=_x(globalThis.navigator);function gx(){return!xn.apple.device}function yx(i){var t=!0;if(xn.tablet||xn.phone){if(xn.apple.device){var e=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(e){var n=parseInt(e[1],10);n<11&&(t=!1)}}if(xn.android.device){var e=navigator.userAgent.match(/Android\s([0-9.]*)/);if(e){var n=parseInt(e[1],10);n<7&&(t=!1)}}}return t?i:4}var dt={ADAPTER:mx,MIPMAP_TEXTURES:dn.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:re.NONE,SPRITE_MAX_TEXTURES:yx(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:Ra.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:Tn.CLAMP,SCALE_MODE:yn.LINEAR,PRECISION_VERTEX:je.HIGH,PRECISION_FRAGMENT:xn.apple.device?je.HIGH:je.MEDIUM,CAN_UPLOAD_SAME_BUFFER:gx(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},vd={exports:{}};(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(h,l,u){this.fn=h,this.context=l,this.once=u||!1}function s(h,l,u,c,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new r(u,c||h,f),m=e?e+l:l;return h._events[m]?h._events[m].fn?h._events[m]=[h._events[m],d]:h._events[m].push(d):(h._events[m]=d,h._eventsCount++),h}function a(h,l){--h._eventsCount===0?h._events=new n:delete h._events[l]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],u,c;if(this._eventsCount===0)return l;for(c in u=this._events)t.call(u,c)&&l.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},o.prototype.listeners=function(l){var u=e?e+l:l,c=this._events[u];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,d=c.length,m=new Array(d);f<d;f++)m[f]=c[f].fn;return m},o.prototype.listenerCount=function(l){var u=e?e+l:l,c=this._events[u];return c?c.fn?1:c.length:0},o.prototype.emit=function(l,u,c,f,d,m){var _=e?e+l:l;if(!this._events[_])return!1;var p=this._events[_],v=arguments.length,y,g;if(p.fn){switch(p.once&&this.removeListener(l,p.fn,void 0,!0),v){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,c),!0;case 4:return p.fn.call(p.context,u,c,f),!0;case 5:return p.fn.call(p.context,u,c,f,d),!0;case 6:return p.fn.call(p.context,u,c,f,d,m),!0}for(g=1,y=new Array(v-1);g<v;g++)y[g-1]=arguments[g];p.fn.apply(p.context,y)}else{var T=p.length,E;for(g=0;g<T;g++)switch(p[g].once&&this.removeListener(l,p[g].fn,void 0,!0),v){case 1:p[g].fn.call(p[g].context);break;case 2:p[g].fn.call(p[g].context,u);break;case 3:p[g].fn.call(p[g].context,u,c);break;case 4:p[g].fn.call(p[g].context,u,c,f);break;default:if(!y)for(E=1,y=new Array(v-1);E<v;E++)y[E-1]=arguments[E];p[g].fn.apply(p[g].context,y)}}return!0},o.prototype.on=function(l,u,c){return s(this,l,u,c,!1)},o.prototype.once=function(l,u,c){return s(this,l,u,c,!0)},o.prototype.removeListener=function(l,u,c,f){var d=e?e+l:l;if(!this._events[d])return this;if(!u)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===u&&(!f||m.once)&&(!c||m.context===c)&&a(this,d);else{for(var _=0,p=[],v=m.length;_<v;_++)(m[_].fn!==u||f&&!m[_].once||c&&m[_].context!==c)&&p.push(m[_]);p.length?this._events[d]=p.length===1?p[0]:p:a(this,d)}return this},o.prototype.removeAllListeners=function(l){var u;return l?(u=e?e+l:l,this._events[u]&&a(this,u)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=e,o.EventEmitter=o,i.exports=o})(vd);var xx=vd.exports;const _s=ka(xx);var Rl={exports:{}};Rl.exports=Ya;Rl.exports.default=Ya;function Ya(i,t,e){e=e||2;var n=t&&t.length,r=n?t[0]*e:i.length,s=_d(i,0,r,e,!0),a=[];if(!s||s.next===s.prev)return a;var o,h,l,u,c,f,d;if(n&&(s=Mx(i,t,s,e)),i.length>80*e){o=l=i[0],h=u=i[1];for(var m=e;m<r;m+=e)c=i[m],f=i[m+1],c<o&&(o=c),f<h&&(h=f),c>l&&(l=c),f>u&&(u=f);d=Math.max(l-o,u-h),d=d!==0?32767/d:0}return ns(s,a,e,o,h,d,0),a}function _d(i,t,e,n,r){var s,a;if(r===Ih(i,t,e,n)>0)for(s=t;s<e;s+=n)a=Tc(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=Tc(s,i[s],i[s+1],a);return a&&ja(a,a.next)&&(rs(a),a=a.next),a}function ki(i,t){if(!i)return i;t||(t=i);var e=i,n;do if(n=!1,!e.steiner&&(ja(e,e.next)||ae(e.prev,e,e.next)===0)){if(rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ns(i,t,e,n,r,s,a){if(i){!a&&s&&Px(i,n,r,s);for(var o=i,h,l;i.prev!==i.next;){if(h=i.prev,l=i.next,s?Tx(i,n,r,s):Ex(i)){t.push(h.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),rs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=bx(ki(i),t,e),ns(i,t,e,n,r,s,2)):a===2&&Sx(i,t,e,n,r,s):ns(ki(i),t,e,n,r,s,1);break}}}}function Ex(i){var t=i.prev,e=i,n=i.next;if(ae(t,e,n)>=0)return!1;for(var r=t.x,s=e.x,a=n.x,o=t.y,h=e.y,l=n.y,u=r<s?r<a?r:a:s<a?s:a,c=o<h?o<l?o:l:h<l?h:l,f=r>s?r>a?r:a:s>a?s:a,d=o>h?o>l?o:l:h>l?h:l,m=n.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=c&&m.y<=d&&fr(r,o,s,h,a,l,m.x,m.y)&&ae(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Tx(i,t,e,n){var r=i.prev,s=i,a=i.next;if(ae(r,s,a)>=0)return!1;for(var o=r.x,h=s.x,l=a.x,u=r.y,c=s.y,f=a.y,d=o<h?o<l?o:l:h<l?h:l,m=u<c?u<f?u:f:c<f?c:f,_=o>h?o>l?o:l:h>l?h:l,p=u>c?u>f?u:f:c>f?c:f,v=Ch(d,m,t,e,n),y=Ch(_,p,t,e,n),g=i.prevZ,T=i.nextZ;g&&g.z>=v&&T&&T.z<=y;){if(g.x>=d&&g.x<=_&&g.y>=m&&g.y<=p&&g!==r&&g!==a&&fr(o,u,h,c,l,f,g.x,g.y)&&ae(g.prev,g,g.next)>=0||(g=g.prevZ,T.x>=d&&T.x<=_&&T.y>=m&&T.y<=p&&T!==r&&T!==a&&fr(o,u,h,c,l,f,T.x,T.y)&&ae(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;g&&g.z>=v;){if(g.x>=d&&g.x<=_&&g.y>=m&&g.y<=p&&g!==r&&g!==a&&fr(o,u,h,c,l,f,g.x,g.y)&&ae(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;T&&T.z<=y;){if(T.x>=d&&T.x<=_&&T.y>=m&&T.y<=p&&T!==r&&T!==a&&fr(o,u,h,c,l,f,T.x,T.y)&&ae(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function bx(i,t,e){var n=i;do{var r=n.prev,s=n.next.next;!ja(r,s)&&gd(r,n,n.next,s)&&is(r,s)&&is(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),rs(n),rs(n.next),n=i=s),n=n.next}while(n!==i);return ki(n)}function Sx(i,t,e,n,r,s){var a=i;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&Ox(a,o)){var h=yd(a,o);a=ki(a,a.next),h=ki(h,h.next),ns(a,t,e,n,r,s,0),ns(h,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Mx(i,t,e,n){var r=[],s,a,o,h,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,h=s<a-1?t[s+1]*n:i.length,l=_d(i,o,h,n,!1),l===l.next&&(l.steiner=!0),r.push(Lx(l));for(r.sort(wx),s=0;s<r.length;s++)e=Ax(r[s],e);return e}function wx(i,t){return i.x-t.x}function Ax(i,t){var e=Rx(i,t);if(!e)return t;var n=yd(e,i);return ki(n,n.next),ki(e,e.next)}function Rx(i,t){var e=t,n=i.x,r=i.y,s=-1/0,a;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){var o=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(o<=n&&o>s&&(s=o,a=e.x<e.next.x?e:e.next,o===n))return a}e=e.next}while(e!==t);if(!a)return null;var h=a,l=a.x,u=a.y,c=1/0,f;e=a;do n>=e.x&&e.x>=l&&n!==e.x&&fr(r<u?n:s,r,l,u,r<u?s:n,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(n-e.x),is(e,i)&&(f<c||f===c&&(e.x>a.x||e.x===a.x&&Cx(a,e)))&&(a=e,c=f)),e=e.next;while(e!==h);return a}function Cx(i,t){return ae(i.prev,i,t.prev)<0&&ae(t.next,i,i.next)<0}function Px(i,t,e,n){var r=i;do r.z===0&&(r.z=Ch(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Ix(r)}function Ix(i){var t,e,n,r,s,a,o,h,l=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(h=l;o>0||h>0&&n;)o!==0&&(h===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,h--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(a>1);return i}function Ch(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lx(i){var t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fr(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Ox(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Dx(i,t)&&(is(i,t)&&is(t,i)&&Ux(i,t)&&(ae(i.prev,i,t.prev)||ae(i,t.prev,t))||ja(i,t)&&ae(i.prev,i,i.next)>0&&ae(t.prev,t,t.next)>0)}function ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ja(i,t){return i.x===t.x&&i.y===t.y}function gd(i,t,e,n){var r=$s(ae(i,t,e)),s=$s(ae(i,t,n)),a=$s(ae(e,n,i)),o=$s(ae(e,n,t));return!!(r!==s&&a!==o||r===0&&qs(i,e,t)||s===0&&qs(i,n,t)||a===0&&qs(e,i,n)||o===0&&qs(e,t,n))}function qs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $s(i){return i>0?1:i<0?-1:0}function Dx(i,t){var e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function is(i,t){return ae(i.prev,i,i.next)<0?ae(i,t,i.next)>=0&&ae(i,i.prev,t)>=0:ae(i,t,i.prev)<0||ae(i,i.next,t)<0}function Ux(i,t){var e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yd(i,t){var e=new Ph(i.i,i.x,i.y),n=new Ph(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Tc(i,t,e,n){var r=new Ph(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ph(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ya.deviation=function(i,t,e,n){var r=t&&t.length,s=r?t[0]*e:i.length,a=Math.abs(Ih(i,0,s,e));if(r)for(var o=0,h=t.length;o<h;o++){var l=t[o]*e,u=o<h-1?t[o+1]*e:i.length;a-=Math.abs(Ih(i,l,u,e))}var c=0;for(o=0;o<n.length;o+=3){var f=n[o]*e,d=n[o+1]*e,m=n[o+2]*e;c+=Math.abs((i[f]-i[m])*(i[d+1]-i[f+1])-(i[f]-i[d])*(i[m+1]-i[f+1]))}return a===0&&c===0?0:Math.abs((c-a)/a)};function Ih(i,t,e,n){for(var r=0,s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}Ya.flatten=function(i){for(var t=i[0][0].length,e={vertices:[],holes:[],dimensions:t},n=0,r=0;r<i.length;r++){for(var s=0;s<i[r].length;s++)for(var a=0;a<t;a++)e.vertices.push(i[r][s][a]);r>0&&(n+=i[r-1].length,e.holes.push(n))}return e};var Nx=Rl.exports;const xd=ka(Nx);var Ca={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */Ca.exports;(function(i,t){(function(e){var n=t&&!t.nodeType&&t,r=i&&!i.nodeType&&i,s=typeof eo=="object"&&eo;(s.global===s||s.window===s||s.self===s)&&(e=s);var a,o=2147483647,h=36,l=1,u=26,c=38,f=700,d=72,m=128,_="-",p=/^xn--/,v=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,g={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},T=h-l,E=Math.floor,b=String.fromCharCode,w;function C(U){throw RangeError(g[U])}function x(U,W){for(var O=U.length,j=[];O--;)j[O]=W(U[O]);return j}function S(U,W){var O=U.split("@"),j="";O.length>1&&(j=O[0]+"@",U=O[1]),U=U.replace(y,".");var $=U.split("."),et=x($,W).join(".");return j+et}function F(U){for(var W=[],O=0,j=U.length,$,et;O<j;)$=U.charCodeAt(O++),$>=55296&&$<=56319&&O<j?(et=U.charCodeAt(O++),(et&64512)==56320?W.push((($&1023)<<10)+(et&1023)+65536):(W.push($),O--)):W.push($);return W}function H(U){return x(U,function(W){var O="";return W>65535&&(W-=65536,O+=b(W>>>10&1023|55296),W=56320|W&1023),O+=b(W),O}).join("")}function L(U){return U-48<10?U-22:U-65<26?U-65:U-97<26?U-97:h}function G(U,W){return U+22+75*(U<26)-((W!=0)<<5)}function P(U,W,O){var j=0;for(U=O?E(U/f):U>>1,U+=E(U/W);U>T*u>>1;j+=h)U=E(U/T);return E(j+(T+1)*U/(U+c))}function B(U){var W=[],O=U.length,j,$=0,et=m,tt=d,ht,Et,vt,Gt,pt,D,Nt,st,St;for(ht=U.lastIndexOf(_),ht<0&&(ht=0),Et=0;Et<ht;++Et)U.charCodeAt(Et)>=128&&C("not-basic"),W.push(U.charCodeAt(Et));for(vt=ht>0?ht+1:0;vt<O;){for(Gt=$,pt=1,D=h;vt>=O&&C("invalid-input"),Nt=L(U.charCodeAt(vt++)),(Nt>=h||Nt>E((o-$)/pt))&&C("overflow"),$+=Nt*pt,st=D<=tt?l:D>=tt+u?u:D-tt,!(Nt<st);D+=h)St=h-st,pt>E(o/St)&&C("overflow"),pt*=St;j=W.length+1,tt=P($-Gt,j,Gt==0),E($/j)>o-et&&C("overflow"),et+=E($/j),$%=j,W.splice($++,0,et)}return H(W)}function z(U){var W,O,j,$,et,tt,ht,Et,vt,Gt,pt,D=[],Nt,st,St,xt;for(U=F(U),Nt=U.length,W=m,O=0,et=d,tt=0;tt<Nt;++tt)pt=U[tt],pt<128&&D.push(b(pt));for(j=$=D.length,$&&D.push(_);j<Nt;){for(ht=o,tt=0;tt<Nt;++tt)pt=U[tt],pt>=W&&pt<ht&&(ht=pt);for(st=j+1,ht-W>E((o-O)/st)&&C("overflow"),O+=(ht-W)*st,W=ht,tt=0;tt<Nt;++tt)if(pt=U[tt],pt<W&&++O>o&&C("overflow"),pt==W){for(Et=O,vt=h;Gt=vt<=et?l:vt>=et+u?u:vt-et,!(Et<Gt);vt+=h)xt=Et-Gt,St=h-Gt,D.push(b(G(Gt+xt%St,0))),Et=E(xt/St);D.push(b(G(Et,0))),et=P(O,st,j==$),O=0,++j}++O,++W}return D.join("")}function Y(U){return S(U,function(W){return p.test(W)?B(W.slice(4).toLowerCase()):W})}function K(U){return S(U,function(W){return v.test(W)?"xn--"+z(W):W})}if(a={version:"1.3.2",ucs2:{decode:F,encode:H},decode:B,encode:z,toASCII:K,toUnicode:Y},n&&r)if(i.exports==n)r.exports=a;else for(w in a)a.hasOwnProperty(w)&&(n[w]=a[w]);else e.punycode=a})(eo)})(Ca,Ca.exports);var Fx=Ca.exports,Bx={isString:function(i){return typeof i=="string"},isObject:function(i){return typeof i=="object"&&i!==null},isNull:function(i){return i===null},isNullOrUndefined:function(i){return i==null}},ss={};function Gx(i,t){return Object.prototype.hasOwnProperty.call(i,t)}var kx=function(i,t,e,n){t=t||"&",e=e||"=";var r={};if(typeof i!="string"||i.length===0)return r;var s=/\+/g;i=i.split(t);var a=1e3;n&&typeof n.maxKeys=="number"&&(a=n.maxKeys);var o=i.length;a>0&&o>a&&(o=a);for(var h=0;h<o;++h){var l=i[h].replace(s,"%20"),u=l.indexOf(e),c,f,d,m;u>=0?(c=l.substr(0,u),f=l.substr(u+1)):(c=l,f=""),d=decodeURIComponent(c),m=decodeURIComponent(f),Gx(r,d)?Array.isArray(r[d])?r[d].push(m):r[d]=[r[d],m]:r[d]=m}return r},Fr=function(i){switch(typeof i){case"string":return i;case"boolean":return i?"true":"false";case"number":return isFinite(i)?i:"";default:return""}},Hx=function(i,t,e,n){return t=t||"&",e=e||"=",i===null&&(i=void 0),typeof i=="object"?Object.keys(i).map(function(r){var s=encodeURIComponent(Fr(r))+e;return Array.isArray(i[r])?i[r].map(function(a){return s+encodeURIComponent(Fr(a))}).join(t):s+encodeURIComponent(Fr(i[r]))}).join(t):n?encodeURIComponent(Fr(n))+e+encodeURIComponent(Fr(i)):""};ss.decode=ss.parse=kx;ss.encode=ss.stringify=Hx;var zx=Fx,_n=Bx,Vx=qa,Wx=eE,Xx=tE;function cn(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var Yx=/^([a-z0-9.+-]+:)/i,jx=/:[0-9]*$/,qx=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,$x=["<",">",'"',"`"," ","\r",`
`,"	"],Jx=["{","}","|","\\","^","`"].concat($x),Lh=["'"].concat(Jx),bc=["%","/","?",";","#"].concat(Lh),Sc=["/","?","#"],Kx=255,Mc=/^[+a-z0-9A-Z_-]{0,63}$/,Zx=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Qx={javascript:!0,"javascript:":!0},Oh={javascript:!0,"javascript:":!0},yr={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Dh=ss;function qa(i,t,e){if(i&&_n.isObject(i)&&i instanceof cn)return i;var n=new cn;return n.parse(i,t,e),n}cn.prototype.parse=function(i,t,e){if(!_n.isString(i))throw new TypeError("Parameter 'url' must be a string, not "+typeof i);var n=i.indexOf("?"),r=n!==-1&&n<i.indexOf("#")?"?":"#",s=i.split(r),a=/\\/g;s[0]=s[0].replace(a,"/"),i=s.join(r);var o=i;if(o=o.trim(),!e&&i.split("#").length===1){var h=qx.exec(o);if(h)return this.path=o,this.href=o,this.pathname=h[1],h[2]?(this.search=h[2],t?this.query=Dh.parse(this.search.substr(1)):this.query=this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=Yx.exec(o);if(l){l=l[0];var u=l.toLowerCase();this.protocol=u,o=o.substr(l.length)}if(e||l||o.match(/^\/\/[^@\/]+@[^@\/]+/)){var c=o.substr(0,2)==="//";c&&!(l&&Oh[l])&&(o=o.substr(2),this.slashes=!0)}if(!Oh[l]&&(c||l&&!yr[l])){for(var f=-1,d=0;d<Sc.length;d++){var m=o.indexOf(Sc[d]);m!==-1&&(f===-1||m<f)&&(f=m)}var _,p;f===-1?p=o.lastIndexOf("@"):p=o.lastIndexOf("@",f),p!==-1&&(_=o.slice(0,p),o=o.slice(p+1),this.auth=decodeURIComponent(_)),f=-1;for(var d=0;d<bc.length;d++){var m=o.indexOf(bc[d]);m!==-1&&(f===-1||m<f)&&(f=m)}f===-1&&(f=o.length),this.host=o.slice(0,f),o=o.slice(f),this.parseHost(),this.hostname=this.hostname||"";var v=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!v)for(var y=this.hostname.split(/\./),d=0,g=y.length;d<g;d++){var T=y[d];if(T&&!T.match(Mc)){for(var E="",b=0,w=T.length;b<w;b++)T.charCodeAt(b)>127?E+="x":E+=T[b];if(!E.match(Mc)){var C=y.slice(0,d),x=y.slice(d+1),S=T.match(Zx);S&&(C.push(S[1]),x.unshift(S[2])),x.length&&(o="/"+x.join(".")+o),this.hostname=C.join(".");break}}}this.hostname.length>Kx?this.hostname="":this.hostname=this.hostname.toLowerCase(),v||(this.hostname=zx.toASCII(this.hostname));var F=this.port?":"+this.port:"",H=this.hostname||"";this.host=H+F,this.href+=this.host,v&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),o[0]!=="/"&&(o="/"+o))}if(!Qx[u])for(var d=0,g=Lh.length;d<g;d++){var L=Lh[d];if(o.indexOf(L)!==-1){var G=encodeURIComponent(L);G===L&&(G=escape(L)),o=o.split(L).join(G)}}var P=o.indexOf("#");P!==-1&&(this.hash=o.substr(P),o=o.slice(0,P));var B=o.indexOf("?");if(B!==-1?(this.search=o.substr(B),this.query=o.substr(B+1),t&&(this.query=Dh.parse(this.query)),o=o.slice(0,B)):t&&(this.search="",this.query={}),o&&(this.pathname=o),yr[u]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var F=this.pathname||"",z=this.search||"";this.path=F+z}return this.href=this.format(),this};function tE(i){return _n.isString(i)&&(i=qa(i)),i instanceof cn?i.format():cn.prototype.format.call(i)}cn.prototype.format=function(){var i=this.auth||"";i&&(i=encodeURIComponent(i),i=i.replace(/%3A/i,":"),i+="@");var t=this.protocol||"",e=this.pathname||"",n=this.hash||"",r=!1,s="";this.host?r=i+this.host:this.hostname&&(r=i+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&_n.isObject(this.query)&&Object.keys(this.query).length&&(s=Dh.stringify(this.query));var a=this.search||s&&"?"+s||"";return t&&t.substr(-1)!==":"&&(t+=":"),this.slashes||(!t||yr[t])&&r!==!1?(r="//"+(r||""),e&&e.charAt(0)!=="/"&&(e="/"+e)):r||(r=""),n&&n.charAt(0)!=="#"&&(n="#"+n),a&&a.charAt(0)!=="?"&&(a="?"+a),e=e.replace(/[?#]/g,function(o){return encodeURIComponent(o)}),a=a.replace("#","%23"),t+r+e+a+n};function eE(i,t){return qa(i,!1,!0).resolve(t)}cn.prototype.resolve=function(i){return this.resolveObject(qa(i,!1,!0)).format()};cn.prototype.resolveObject=function(i){if(_n.isString(i)){var t=new cn;t.parse(i,!1,!0),i=t}for(var e=new cn,n=Object.keys(this),r=0;r<n.length;r++){var s=n[r];e[s]=this[s]}if(e.hash=i.hash,i.href==="")return e.href=e.format(),e;if(i.slashes&&!i.protocol){for(var a=Object.keys(i),o=0;o<a.length;o++){var h=a[o];h!=="protocol"&&(e[h]=i[h])}return yr[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e}if(i.protocol&&i.protocol!==e.protocol){if(!yr[i.protocol]){for(var l=Object.keys(i),u=0;u<l.length;u++){var c=l[u];e[c]=i[c]}return e.href=e.format(),e}if(e.protocol=i.protocol,!i.host&&!Oh[i.protocol]){for(var g=(i.pathname||"").split("/");g.length&&!(i.host=g.shift()););i.host||(i.host=""),i.hostname||(i.hostname=""),g[0]!==""&&g.unshift(""),g.length<2&&g.unshift(""),e.pathname=g.join("/")}else e.pathname=i.pathname;if(e.search=i.search,e.query=i.query,e.host=i.host||"",e.auth=i.auth,e.hostname=i.hostname||i.host,e.port=i.port,e.pathname||e.search){var f=e.pathname||"",d=e.search||"";e.path=f+d}return e.slashes=e.slashes||i.slashes,e.href=e.format(),e}var m=e.pathname&&e.pathname.charAt(0)==="/",_=i.host||i.pathname&&i.pathname.charAt(0)==="/",p=_||m||e.host&&i.pathname,v=p,y=e.pathname&&e.pathname.split("/")||[],g=i.pathname&&i.pathname.split("/")||[],T=e.protocol&&!yr[e.protocol];if(T&&(e.hostname="",e.port=null,e.host&&(y[0]===""?y[0]=e.host:y.unshift(e.host)),e.host="",i.protocol&&(i.hostname=null,i.port=null,i.host&&(g[0]===""?g[0]=i.host:g.unshift(i.host)),i.host=null),p=p&&(g[0]===""||y[0]==="")),_)e.host=i.host||i.host===""?i.host:e.host,e.hostname=i.hostname||i.hostname===""?i.hostname:e.hostname,e.search=i.search,e.query=i.query,y=g;else if(g.length)y||(y=[]),y.pop(),y=y.concat(g),e.search=i.search,e.query=i.query;else if(!_n.isNullOrUndefined(i.search)){if(T){e.hostname=e.host=y.shift();var E=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;E&&(e.auth=E.shift(),e.host=e.hostname=E.shift())}return e.search=i.search,e.query=i.query,(!_n.isNull(e.pathname)||!_n.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!y.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var b=y.slice(-1)[0],w=(e.host||i.host||y.length>1)&&(b==="."||b==="..")||b==="",C=0,x=y.length;x>=0;x--)b=y[x],b==="."?y.splice(x,1):b===".."?(y.splice(x,1),C++):C&&(y.splice(x,1),C--);if(!p&&!v)for(;C--;C)y.unshift("..");p&&y[0]!==""&&(!y[0]||y[0].charAt(0)!=="/")&&y.unshift(""),w&&y.join("/").substr(-1)!=="/"&&y.push("");var S=y[0]===""||y[0]&&y[0].charAt(0)==="/";if(T){e.hostname=e.host=S?"":y.length?y.shift():"";var E=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;E&&(e.auth=E.shift(),e.host=e.hostname=E.shift())}return p=p||e.host&&y.length,p&&!S&&y.unshift(""),y.length?e.pathname=y.join("/"):(e.pathname=null,e.path=null),(!_n.isNull(e.pathname)||!_n.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=i.auth||e.auth,e.slashes=e.slashes||i.slashes,e.href=e.format(),e};cn.prototype.parseHost=function(){var i=this.host,t=jx.exec(i);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),i=i.substr(0,i.length-t.length)),i&&(this.hostname=i)};/*!
 * @pixi/utils - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var dr={parse:Vx,format:Xx,resolve:Wx};dt.RETINA_PREFIX=/@([0-9\.]+)x/;dt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var wc=!1,Ac="6.5.9";function nE(i){var t;if(!wc){if(dt.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){var e=[`
 %c %c %c PixiJS `+Ac+" - ✰ "+i+` ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(t=globalThis.console).log.apply(t,e)}else globalThis.console&&globalThis.console.log("PixiJS "+Ac+" - "+i+" - http://www.pixijs.com/");wc=!0}}var zo;function iE(){return typeof zo>"u"&&(zo=function(){var t={stencil:!0,failIfMajorPerformanceCaveat:dt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!dt.ADAPTER.getWebGLRenderingContext())return!1;var e=dt.ADAPTER.createCanvas(),n=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),r=!!(n&&n.getContextAttributes().stencil);if(n){var s=n.getExtension("WEBGL_lose_context");s&&s.loseContext()}return n=null,r}catch{return!1}}()),zo}var rE="#f0f8ff",sE="#faebd7",aE="#00ffff",oE="#7fffd4",hE="#f0ffff",lE="#f5f5dc",uE="#ffe4c4",cE="#000000",fE="#ffebcd",dE="#0000ff",pE="#8a2be2",mE="#a52a2a",vE="#deb887",_E="#5f9ea0",gE="#7fff00",yE="#d2691e",xE="#ff7f50",EE="#6495ed",TE="#fff8dc",bE="#dc143c",SE="#00ffff",ME="#00008b",wE="#008b8b",AE="#b8860b",RE="#a9a9a9",CE="#006400",PE="#a9a9a9",IE="#bdb76b",LE="#8b008b",OE="#556b2f",DE="#ff8c00",UE="#9932cc",NE="#8b0000",FE="#e9967a",BE="#8fbc8f",GE="#483d8b",kE="#2f4f4f",HE="#2f4f4f",zE="#00ced1",VE="#9400d3",WE="#ff1493",XE="#00bfff",YE="#696969",jE="#696969",qE="#1e90ff",$E="#b22222",JE="#fffaf0",KE="#228b22",ZE="#ff00ff",QE="#dcdcdc",tT="#f8f8ff",eT="#daa520",nT="#ffd700",iT="#808080",rT="#008000",sT="#adff2f",aT="#808080",oT="#f0fff0",hT="#ff69b4",lT="#cd5c5c",uT="#4b0082",cT="#fffff0",fT="#f0e68c",dT="#fff0f5",pT="#e6e6fa",mT="#7cfc00",vT="#fffacd",_T="#add8e6",gT="#f08080",yT="#e0ffff",xT="#fafad2",ET="#d3d3d3",TT="#90ee90",bT="#d3d3d3",ST="#ffb6c1",MT="#ffa07a",wT="#20b2aa",AT="#87cefa",RT="#778899",CT="#778899",PT="#b0c4de",IT="#ffffe0",LT="#00ff00",OT="#32cd32",DT="#faf0e6",UT="#ff00ff",NT="#800000",FT="#66cdaa",BT="#0000cd",GT="#ba55d3",kT="#9370db",HT="#3cb371",zT="#7b68ee",VT="#00fa9a",WT="#48d1cc",XT="#c71585",YT="#191970",jT="#f5fffa",qT="#ffe4e1",$T="#ffe4b5",JT="#ffdead",KT="#000080",ZT="#fdf5e6",QT="#808000",tb="#6b8e23",eb="#ffa500",nb="#ff4500",ib="#da70d6",rb="#eee8aa",sb="#98fb98",ab="#afeeee",ob="#db7093",hb="#ffefd5",lb="#ffdab9",ub="#cd853f",cb="#ffc0cb",fb="#dda0dd",db="#b0e0e6",pb="#800080",mb="#663399",vb="#ff0000",_b="#bc8f8f",gb="#4169e1",yb="#8b4513",xb="#fa8072",Eb="#f4a460",Tb="#2e8b57",bb="#fff5ee",Sb="#a0522d",Mb="#c0c0c0",wb="#87ceeb",Ab="#6a5acd",Rb="#708090",Cb="#708090",Pb="#fffafa",Ib="#00ff7f",Lb="#4682b4",Ob="#d2b48c",Db="#008080",Ub="#d8bfd8",Nb="#ff6347",Fb="#40e0d0",Bb="#ee82ee",Gb="#f5deb3",kb="#ffffff",Hb="#f5f5f5",zb="#ffff00",Vb="#9acd32",Wb={aliceblue:rE,antiquewhite:sE,aqua:aE,aquamarine:oE,azure:hE,beige:lE,bisque:uE,black:cE,blanchedalmond:fE,blue:dE,blueviolet:pE,brown:mE,burlywood:vE,cadetblue:_E,chartreuse:gE,chocolate:yE,coral:xE,cornflowerblue:EE,cornsilk:TE,crimson:bE,cyan:SE,darkblue:ME,darkcyan:wE,darkgoldenrod:AE,darkgray:RE,darkgreen:CE,darkgrey:PE,darkkhaki:IE,darkmagenta:LE,darkolivegreen:OE,darkorange:DE,darkorchid:UE,darkred:NE,darksalmon:FE,darkseagreen:BE,darkslateblue:GE,darkslategray:kE,darkslategrey:HE,darkturquoise:zE,darkviolet:VE,deeppink:WE,deepskyblue:XE,dimgray:YE,dimgrey:jE,dodgerblue:qE,firebrick:$E,floralwhite:JE,forestgreen:KE,fuchsia:ZE,gainsboro:QE,ghostwhite:tT,goldenrod:eT,gold:nT,gray:iT,green:rT,greenyellow:sT,grey:aT,honeydew:oT,hotpink:hT,indianred:lT,indigo:uT,ivory:cT,khaki:fT,lavenderblush:dT,lavender:pT,lawngreen:mT,lemonchiffon:vT,lightblue:_T,lightcoral:gT,lightcyan:yT,lightgoldenrodyellow:xT,lightgray:ET,lightgreen:TT,lightgrey:bT,lightpink:ST,lightsalmon:MT,lightseagreen:wT,lightskyblue:AT,lightslategray:RT,lightslategrey:CT,lightsteelblue:PT,lightyellow:IT,lime:LT,limegreen:OT,linen:DT,magenta:UT,maroon:NT,mediumaquamarine:FT,mediumblue:BT,mediumorchid:GT,mediumpurple:kT,mediumseagreen:HT,mediumslateblue:zT,mediumspringgreen:VT,mediumturquoise:WT,mediumvioletred:XT,midnightblue:YT,mintcream:jT,mistyrose:qT,moccasin:$T,navajowhite:JT,navy:KT,oldlace:ZT,olive:QT,olivedrab:tb,orange:eb,orangered:nb,orchid:ib,palegoldenrod:rb,palegreen:sb,paleturquoise:ab,palevioletred:ob,papayawhip:hb,peachpuff:lb,peru:ub,pink:cb,plum:fb,powderblue:db,purple:pb,rebeccapurple:mb,red:vb,rosybrown:_b,royalblue:gb,saddlebrown:yb,salmon:xb,sandybrown:Eb,seagreen:Tb,seashell:bb,sienna:Sb,silver:Mb,skyblue:wb,slateblue:Ab,slategray:Rb,slategrey:Cb,snow:Pb,springgreen:Ib,steelblue:Lb,tan:Ob,teal:Db,thistle:Ub,tomato:Nb,turquoise:Fb,violet:Bb,wheat:Gb,white:kb,whitesmoke:Hb,yellow:zb,yellowgreen:Vb};function wr(i,t){return t===void 0&&(t=[]),t[0]=(i>>16&255)/255,t[1]=(i>>8&255)/255,t[2]=(i&255)/255,t}function Ed(i){var t=i.toString(16);return t="000000".substring(0,6-t.length)+t,"#"+t}function Td(i){return typeof i=="string"&&(i=Wb[i.toLowerCase()]||i,i[0]==="#"&&(i=i.slice(1))),parseInt(i,16)}function Xb(){for(var i=[],t=[],e=0;e<32;e++)i[e]=e,t[e]=e;i[wt.NORMAL_NPM]=wt.NORMAL,i[wt.ADD_NPM]=wt.ADD,i[wt.SCREEN_NPM]=wt.SCREEN,t[wt.NORMAL]=wt.NORMAL_NPM,t[wt.ADD]=wt.ADD_NPM,t[wt.SCREEN]=wt.SCREEN_NPM;var n=[];return n.push(t),n.push(i),n}var bd=Xb();function Sd(i,t){return bd[t?1:0][i]}function Yb(i,t,e,n){return e=e||new Float32Array(4),n||n===void 0?(e[0]=i[0]*t,e[1]=i[1]*t,e[2]=i[2]*t):(e[0]=i[0],e[1]=i[1],e[2]=i[2]),e[3]=t,e}function Cl(i,t){if(t===1)return(t*255<<24)+i;if(t===0)return 0;var e=i>>16&255,n=i>>8&255,r=i&255;return e=e*t+.5|0,n=n*t+.5|0,r=r*t+.5|0,(t*255<<24)+(e<<16)+(n<<8)+r}function Md(i,t,e,n){return e=e||new Float32Array(4),e[0]=(i>>16&255)/255,e[1]=(i>>8&255)/255,e[2]=(i&255)/255,(n||n===void 0)&&(e[0]*=t,e[1]*=t,e[2]*=t),e[3]=t,e}function jb(i,t){t===void 0&&(t=null);var e=i*6;if(t=t||new Uint16Array(e),t.length!==e)throw new Error("Out buffer length is incorrect, got "+t.length+" and expected "+e);for(var n=0,r=0;n<e;n+=6,r+=4)t[n+0]=r+0,t[n+1]=r+1,t[n+2]=r+2,t[n+3]=r+0,t[n+4]=r+2,t[n+5]=r+3;return t}function wd(i){if(i.BYTES_PER_ELEMENT===4)return i instanceof Float32Array?"Float32Array":i instanceof Uint32Array?"Uint32Array":"Int32Array";if(i.BYTES_PER_ELEMENT===2){if(i instanceof Uint16Array)return"Uint16Array"}else if(i.BYTES_PER_ELEMENT===1&&i instanceof Uint8Array)return"Uint8Array";return null}function Pa(i){return i+=i===0?1:0,--i,i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i+1}function Rc(i){return!(i&i-1)&&!!i}function Cc(i){var t=(i>65535?1:0)<<4;i>>>=t;var e=(i>255?1:0)<<3;return i>>>=e,t|=e,e=(i>15?1:0)<<2,i>>>=e,t|=e,e=(i>3?1:0)<<1,i>>>=e,t|=e,t|i>>1}function xr(i,t,e){var n=i.length,r;if(!(t>=n||e===0)){e=t+e>n?n-t:e;var s=n-e;for(r=t;r<s;++r)i[r]=i[r+e];i.length=s}}function pr(i){return i===0?0:i<0?-1:1}var qb=0;function Hi(){return++qb}var Pc={};function fn(i,t,e){if(e===void 0&&(e=3),!Pc[t]){var n=new Error().stack;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",t+`
Deprecated since v`+i):(n=n.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",t+`
Deprecated since v`+i),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",t+`
Deprecated since v`+i),console.warn(n))),Pc[t]=!0}}var Ic={},kn=Object.create(null),yi=Object.create(null),Lc=function(){function i(t,e,n){this.canvas=dt.ADAPTER.createCanvas(),this.context=this.canvas.getContext("2d"),this.resolution=n||dt.RESOLUTION,this.resize(t,e)}return i.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},i.prototype.resize=function(t,e){this.canvas.width=Math.round(t*this.resolution),this.canvas.height=Math.round(e*this.resolution)},i.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(i.prototype,"width",{get:function(){return this.canvas.width},set:function(t){this.canvas.width=Math.round(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"height",{get:function(){return this.canvas.height},set:function(t){this.canvas.height=Math.round(t)},enumerable:!1,configurable:!0}),i}();function $b(i){var t=i.width,e=i.height,n=i.getContext("2d",{willReadFrequently:!0}),r=n.getImageData(0,0,t,e),s=r.data,a=s.length,o={top:null,left:null,right:null,bottom:null},h=null,l,u,c;for(l=0;l<a;l+=4)s[l+3]!==0&&(u=l/4%t,c=~~(l/4/t),o.top===null&&(o.top=c),(o.left===null||u<o.left)&&(o.left=u),(o.right===null||o.right<u)&&(o.right=u+1),(o.bottom===null||o.bottom<c)&&(o.bottom=c));return o.top!==null&&(t=o.right-o.left,e=o.bottom-o.top+1,h=n.getImageData(o.left,o.top,t,e)),{height:e,width:t,data:h}}var Js;function Jb(i,t){if(t===void 0&&(t=globalThis.location),i.indexOf("data:")===0)return"";t=t||globalThis.location,Js||(Js=document.createElement("a")),Js.href=i;var e=dr.parse(Js.href),n=!e.port&&t.port===""||e.port===t.port;return e.hostname!==t.hostname||!n||e.protocol!==t.protocol?"anonymous":""}function Ia(i,t){var e=dt.RETINA_PREFIX.exec(i);return e?parseFloat(e[1]):t!==void 0?t:1}/*!
 * @pixi/math - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var La=Math.PI*2,Kb=180/Math.PI,Zb=Math.PI/180,Re;(function(i){i[i.POLY=0]="POLY",i[i.RECT=1]="RECT",i[i.CIRC=2]="CIRC",i[i.ELIP=3]="ELIP",i[i.RREC=4]="RREC"})(Re||(Re={}));var ie=function(){function i(t,e){t===void 0&&(t=0),e===void 0&&(e=0),this.x=0,this.y=0,this.x=t,this.y=e}return i.prototype.clone=function(){return new i(this.x,this.y)},i.prototype.copyFrom=function(t){return this.set(t.x,t.y),this},i.prototype.copyTo=function(t){return t.set(this.x,this.y),t},i.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},i.prototype.set=function(t,e){return t===void 0&&(t=0),e===void 0&&(e=t),this.x=t,this.y=e,this},i.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},i}(),Ks=[new ie,new ie,new ie,new ie],qt=function(){function i(t,e,n,r){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=0),this.x=Number(t),this.y=Number(e),this.width=Number(n),this.height=Number(r),this.type=Re.RECT}return Object.defineProperty(i.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(i,"EMPTY",{get:function(){return new i(0,0,0,0)},enumerable:!1,configurable:!0}),i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height)},i.prototype.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},i.prototype.copyTo=function(t){return t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t},i.prototype.contains=function(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height},i.prototype.intersects=function(t,e){if(!e){var n=this.x<t.x?t.x:this.x,r=this.right>t.right?t.right:this.right;if(r<=n)return!1;var s=this.y<t.y?t.y:this.y,a=this.bottom>t.bottom?t.bottom:this.bottom;return a>s}var o=this.left,h=this.right,l=this.top,u=this.bottom;if(h<=o||u<=l)return!1;var c=Ks[0].set(t.left,t.top),f=Ks[1].set(t.left,t.bottom),d=Ks[2].set(t.right,t.top),m=Ks[3].set(t.right,t.bottom);if(d.x<=c.x||f.y<=c.y)return!1;var _=Math.sign(e.a*e.d-e.b*e.c);if(_===0||(e.apply(c,c),e.apply(f,f),e.apply(d,d),e.apply(m,m),Math.max(c.x,f.x,d.x,m.x)<=o||Math.min(c.x,f.x,d.x,m.x)>=h||Math.max(c.y,f.y,d.y,m.y)<=l||Math.min(c.y,f.y,d.y,m.y)>=u))return!1;var p=_*(f.y-c.y),v=_*(c.x-f.x),y=p*o+v*l,g=p*h+v*l,T=p*o+v*u,E=p*h+v*u;if(Math.max(y,g,T,E)<=p*c.x+v*c.y||Math.min(y,g,T,E)>=p*m.x+v*m.y)return!1;var b=_*(c.y-d.y),w=_*(d.x-c.x),C=b*o+w*l,x=b*h+w*l,S=b*o+w*u,F=b*h+w*u;return!(Math.max(C,x,S,F)<=b*c.x+w*c.y||Math.min(C,x,S,F)>=b*m.x+w*m.y)},i.prototype.pad=function(t,e){return t===void 0&&(t=0),e===void 0&&(e=t),this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this},i.prototype.fit=function(t){var e=Math.max(this.x,t.x),n=Math.min(this.x+this.width,t.x+t.width),r=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(n-e,0),this.y=r,this.height=Math.max(s-r,0),this},i.prototype.ceil=function(t,e){t===void 0&&(t=1),e===void 0&&(e=.001);var n=Math.ceil((this.x+this.width-e)*t)/t,r=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=n-this.x,this.height=r-this.y,this},i.prototype.enlarge=function(t){var e=Math.min(this.x,t.x),n=Math.max(this.x+this.width,t.x+t.width),r=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=n-e,this.y=r,this.height=s-r,this},i.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},i}(),Qb=function(){function i(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.radius=n,this.type=Re.CIRC}return i.prototype.clone=function(){return new i(this.x,this.y,this.radius)},i.prototype.contains=function(t,e){if(this.radius<=0)return!1;var n=this.radius*this.radius,r=this.x-t,s=this.y-e;return r*=r,s*=s,r+s<=n},i.prototype.getBounds=function(){return new qt(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},i.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},i}(),tS=function(){function i(t,e,n,r){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=0),this.x=t,this.y=e,this.width=n,this.height=r,this.type=Re.ELIP}return i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height)},i.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;var n=(t-this.x)/this.width,r=(e-this.y)/this.height;return n*=n,r*=r,n+r<=1},i.prototype.getBounds=function(){return new qt(this.x-this.width,this.y-this.height,this.width,this.height)},i.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},i}(),Ta=function(){function i(){for(var t=arguments,e=[],n=0;n<arguments.length;n++)e[n]=t[n];var r=Array.isArray(e[0])?e[0]:e;if(typeof r[0]!="number"){for(var s=[],a=0,o=r.length;a<o;a++)s.push(r[a].x,r[a].y);r=s}this.points=r,this.type=Re.POLY,this.closeStroke=!0}return i.prototype.clone=function(){var t=this.points.slice(),e=new i(t);return e.closeStroke=this.closeStroke,e},i.prototype.contains=function(t,e){for(var n=!1,r=this.points.length/2,s=0,a=r-1;s<r;a=s++){var o=this.points[s*2],h=this.points[s*2+1],l=this.points[a*2],u=this.points[a*2+1],c=h>e!=u>e&&t<(l-o)*((e-h)/(u-h))+o;c&&(n=!n)}return n},i.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(t,e){return t+", "+e},"")+"]")},i}(),eS=function(){function i(t,e,n,r,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=0),s===void 0&&(s=20),this.x=t,this.y=e,this.width=n,this.height=r,this.radius=s,this.type=Re.RREC}return i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height,this.radius)},i.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){var n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+n&&e<=this.y+this.height-n||t>=this.x+n&&t<=this.x+this.width-n)return!0;var r=t-(this.x+n),s=e-(this.y+n),a=n*n;if(r*r+s*s<=a||(r=t-(this.x+this.width-n),r*r+s*s<=a)||(s=e-(this.y+this.height-n),r*r+s*s<=a)||(r=t-(this.x+n),r*r+s*s<=a))return!0}return!1},i.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},i}(),mr=function(){function i(t,e,n,r){n===void 0&&(n=0),r===void 0&&(r=0),this._x=n,this._y=r,this.cb=t,this.scope=e}return i.prototype.clone=function(t,e){return t===void 0&&(t=this.cb),e===void 0&&(e=this.scope),new i(t,e,this._x,this._y)},i.prototype.set=function(t,e){return t===void 0&&(t=0),e===void 0&&(e=t),(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this.cb.call(this.scope)),this},i.prototype.copyFrom=function(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this.cb.call(this.scope)),this},i.prototype.copyTo=function(t){return t.set(this._x,this._y),t},i.prototype.equals=function(t){return t.x===this._x&&t.y===this._y},i.prototype.toString=function(){return"[@pixi/math:ObservablePoint x=0 y=0 scope="+this.scope+"]"},Object.defineProperty(i.prototype,"x",{get:function(){return this._x},set:function(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"y",{get:function(){return this._y},set:function(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),i}(),Se=function(){function i(t,e,n,r,s,a){t===void 0&&(t=1),e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=1),s===void 0&&(s=0),a===void 0&&(a=0),this.array=null,this.a=t,this.b=e,this.c=n,this.d=r,this.tx=s,this.ty=a}return i.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},i.prototype.set=function(t,e,n,r,s,a){return this.a=t,this.b=e,this.c=n,this.d=r,this.tx=s,this.ty=a,this},i.prototype.toArray=function(t,e){this.array||(this.array=new Float32Array(9));var n=e||this.array;return t?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n},i.prototype.apply=function(t,e){e=e||new ie;var n=t.x,r=t.y;return e.x=this.a*n+this.c*r+this.tx,e.y=this.b*n+this.d*r+this.ty,e},i.prototype.applyInverse=function(t,e){e=e||new ie;var n=1/(this.a*this.d+this.c*-this.b),r=t.x,s=t.y;return e.x=this.d*n*r+-this.c*n*s+(this.ty*this.c-this.tx*this.d)*n,e.y=this.a*n*s+-this.b*n*r+(-this.ty*this.a+this.tx*this.b)*n,e},i.prototype.translate=function(t,e){return this.tx+=t,this.ty+=e,this},i.prototype.scale=function(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},i.prototype.rotate=function(t){var e=Math.cos(t),n=Math.sin(t),r=this.a,s=this.c,a=this.tx;return this.a=r*e-this.b*n,this.b=r*n+this.b*e,this.c=s*e-this.d*n,this.d=s*n+this.d*e,this.tx=a*e-this.ty*n,this.ty=a*n+this.ty*e,this},i.prototype.append=function(t){var e=this.a,n=this.b,r=this.c,s=this.d;return this.a=t.a*e+t.b*r,this.b=t.a*n+t.b*s,this.c=t.c*e+t.d*r,this.d=t.c*n+t.d*s,this.tx=t.tx*e+t.ty*r+this.tx,this.ty=t.tx*n+t.ty*s+this.ty,this},i.prototype.setTransform=function(t,e,n,r,s,a,o,h,l){return this.a=Math.cos(o+l)*s,this.b=Math.sin(o+l)*s,this.c=-Math.sin(o-h)*a,this.d=Math.cos(o-h)*a,this.tx=t-(n*this.a+r*this.c),this.ty=e-(n*this.b+r*this.d),this},i.prototype.prepend=function(t){var e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){var n=this.a,r=this.c;this.a=n*t.a+this.b*t.c,this.b=n*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this},i.prototype.decompose=function(t){var e=this.a,n=this.b,r=this.c,s=this.d,a=t.pivot,o=-Math.atan2(-r,s),h=Math.atan2(n,e),l=Math.abs(o+h);return l<1e-5||Math.abs(La-l)<1e-5?(t.rotation=h,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=o,t.skew.y=h),t.scale.x=Math.sqrt(e*e+n*n),t.scale.y=Math.sqrt(r*r+s*s),t.position.x=this.tx+(a.x*e+a.y*r),t.position.y=this.ty+(a.x*n+a.y*s),t},i.prototype.invert=function(){var t=this.a,e=this.b,n=this.c,r=this.d,s=this.tx,a=t*r-e*n;return this.a=r/a,this.b=-e/a,this.c=-n/a,this.d=t/a,this.tx=(n*this.ty-r*s)/a,this.ty=-(t*this.ty-e*s)/a,this},i.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},i.prototype.clone=function(){var t=new i;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},i.prototype.copyTo=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},i.prototype.copyFrom=function(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this},i.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(i,"IDENTITY",{get:function(){return new i},enumerable:!1,configurable:!0}),Object.defineProperty(i,"TEMP_MATRIX",{get:function(){return new i},enumerable:!1,configurable:!0}),i}(),wi=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Ai=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Ri=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Ci=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Uh=[],Ad=[],Zs=Math.sign;function nS(){for(var i=0;i<16;i++){var t=[];Uh.push(t);for(var e=0;e<16;e++)for(var n=Zs(wi[i]*wi[e]+Ri[i]*Ai[e]),r=Zs(Ai[i]*wi[e]+Ci[i]*Ai[e]),s=Zs(wi[i]*Ri[e]+Ri[i]*Ci[e]),a=Zs(Ai[i]*Ri[e]+Ci[i]*Ci[e]),o=0;o<16;o++)if(wi[o]===n&&Ai[o]===r&&Ri[o]===s&&Ci[o]===a){t.push(o);break}}for(var i=0;i<16;i++){var h=new Se;h.set(wi[i],Ai[i],Ri[i],Ci[i],0,0),Ad.push(h)}}nS();var se={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(i){return wi[i]},uY:function(i){return Ai[i]},vX:function(i){return Ri[i]},vY:function(i){return Ci[i]},inv:function(i){return i&8?i&15:-i&7},add:function(i,t){return Uh[i][t]},sub:function(i,t){return Uh[i][se.inv(t)]},rotate180:function(i){return i^4},isVertical:function(i){return(i&3)===2},byDirection:function(i,t){return Math.abs(i)*2<=Math.abs(t)?t>=0?se.S:se.N:Math.abs(t)*2<=Math.abs(i)?i>0?se.E:se.W:t>0?i>0?se.SE:se.SW:i>0?se.NE:se.NW},matrixAppendRotationInv:function(i,t,e,n){e===void 0&&(e=0),n===void 0&&(n=0);var r=Ad[se.inv(t)];r.tx=e,r.ty=n,i.append(r)}},Rd=function(){function i(){this.worldTransform=new Se,this.localTransform=new Se,this.position=new mr(this.onChange,this,0,0),this.scale=new mr(this.onChange,this,1,1),this.pivot=new mr(this.onChange,this,0,0),this.skew=new mr(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return i.prototype.onChange=function(){this._localID++},i.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},i.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},i.prototype.updateLocalTransform=function(){var t=this.localTransform;this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1)},i.prototype.updateTransform=function(t){var e=this.localTransform;if(this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==t._worldID){var n=t.worldTransform,r=this.worldTransform;r.a=e.a*n.a+e.b*n.c,r.b=e.a*n.b+e.b*n.d,r.c=e.c*n.a+e.d*n.c,r.d=e.c*n.b+e.d*n.d,r.tx=e.tx*n.a+e.ty*n.c+n.tx,r.ty=e.tx*n.b+e.ty*n.d+n.ty,this._parentID=t._worldID,this._worldID++}},i.prototype.setFromMatrix=function(t){t.decompose(this),this._localID++},Object.defineProperty(i.prototype,"rotation",{get:function(){return this._rotation},set:function(t){this._rotation!==t&&(this._rotation=t,this.updateSkew())},enumerable:!1,configurable:!0}),i.IDENTITY=new i,i}();/*!
 * @pixi/display - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */dt.SORTABLE_CHILDREN=!1;var Oa=function(){function i(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return i.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},i.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},i.prototype.getRectangle=function(t){return this.minX>this.maxX||this.minY>this.maxY?qt.EMPTY:(t=t||new qt(0,0,1,1),t.x=this.minX,t.y=this.minY,t.width=this.maxX-this.minX,t.height=this.maxY-this.minY,t)},i.prototype.addPoint=function(t){this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)},i.prototype.addPointMatrix=function(t,e){var n=t.a,r=t.b,s=t.c,a=t.d,o=t.tx,h=t.ty,l=n*e.x+s*e.y+o,u=r*e.x+a*e.y+h;this.minX=Math.min(this.minX,l),this.maxX=Math.max(this.maxX,l),this.minY=Math.min(this.minY,u),this.maxY=Math.max(this.maxY,u)},i.prototype.addQuad=function(t){var e=this.minX,n=this.minY,r=this.maxX,s=this.maxY,a=t[0],o=t[1];e=a<e?a:e,n=o<n?o:n,r=a>r?a:r,s=o>s?o:s,a=t[2],o=t[3],e=a<e?a:e,n=o<n?o:n,r=a>r?a:r,s=o>s?o:s,a=t[4],o=t[5],e=a<e?a:e,n=o<n?o:n,r=a>r?a:r,s=o>s?o:s,a=t[6],o=t[7],e=a<e?a:e,n=o<n?o:n,r=a>r?a:r,s=o>s?o:s,this.minX=e,this.minY=n,this.maxX=r,this.maxY=s},i.prototype.addFrame=function(t,e,n,r,s){this.addFrameMatrix(t.worldTransform,e,n,r,s)},i.prototype.addFrameMatrix=function(t,e,n,r,s){var a=t.a,o=t.b,h=t.c,l=t.d,u=t.tx,c=t.ty,f=this.minX,d=this.minY,m=this.maxX,_=this.maxY,p=a*e+h*n+u,v=o*e+l*n+c;f=p<f?p:f,d=v<d?v:d,m=p>m?p:m,_=v>_?v:_,p=a*r+h*n+u,v=o*r+l*n+c,f=p<f?p:f,d=v<d?v:d,m=p>m?p:m,_=v>_?v:_,p=a*e+h*s+u,v=o*e+l*s+c,f=p<f?p:f,d=v<d?v:d,m=p>m?p:m,_=v>_?v:_,p=a*r+h*s+u,v=o*r+l*s+c,f=p<f?p:f,d=v<d?v:d,m=p>m?p:m,_=v>_?v:_,this.minX=f,this.minY=d,this.maxX=m,this.maxY=_},i.prototype.addVertexData=function(t,e,n){for(var r=this.minX,s=this.minY,a=this.maxX,o=this.maxY,h=e;h<n;h+=2){var l=t[h],u=t[h+1];r=l<r?l:r,s=u<s?u:s,a=l>a?l:a,o=u>o?u:o}this.minX=r,this.minY=s,this.maxX=a,this.maxY=o},i.prototype.addVertices=function(t,e,n,r){this.addVerticesMatrix(t.worldTransform,e,n,r)},i.prototype.addVerticesMatrix=function(t,e,n,r,s,a){s===void 0&&(s=0),a===void 0&&(a=s);for(var o=t.a,h=t.b,l=t.c,u=t.d,c=t.tx,f=t.ty,d=this.minX,m=this.minY,_=this.maxX,p=this.maxY,v=n;v<r;v+=2){var y=e[v],g=e[v+1],T=o*y+l*g+c,E=u*g+h*y+f;d=Math.min(d,T-s),_=Math.max(_,T+s),m=Math.min(m,E-a),p=Math.max(p,E+a)}this.minX=d,this.minY=m,this.maxX=_,this.maxY=p},i.prototype.addBounds=function(t){var e=this.minX,n=this.minY,r=this.maxX,s=this.maxY;this.minX=t.minX<e?t.minX:e,this.minY=t.minY<n?t.minY:n,this.maxX=t.maxX>r?t.maxX:r,this.maxY=t.maxY>s?t.maxY:s},i.prototype.addBoundsMask=function(t,e){var n=t.minX>e.minX?t.minX:e.minX,r=t.minY>e.minY?t.minY:e.minY,s=t.maxX<e.maxX?t.maxX:e.maxX,a=t.maxY<e.maxY?t.maxY:e.maxY;if(n<=s&&r<=a){var o=this.minX,h=this.minY,l=this.maxX,u=this.maxY;this.minX=n<o?n:o,this.minY=r<h?r:h,this.maxX=s>l?s:l,this.maxY=a>u?a:u}},i.prototype.addBoundsMatrix=function(t,e){this.addFrameMatrix(e,t.minX,t.minY,t.maxX,t.maxY)},i.prototype.addBoundsArea=function(t,e){var n=t.minX>e.x?t.minX:e.x,r=t.minY>e.y?t.minY:e.y,s=t.maxX<e.x+e.width?t.maxX:e.x+e.width,a=t.maxY<e.y+e.height?t.maxY:e.y+e.height;if(n<=s&&r<=a){var o=this.minX,h=this.minY,l=this.maxX,u=this.maxY;this.minX=n<o?n:o,this.minY=r<h?r:h,this.maxX=s>l?s:l,this.maxY=a>u?a:u}},i.prototype.pad=function(t,e){t===void 0&&(t=0),e===void 0&&(e=t),this.isEmpty()||(this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e)},i.prototype.addFramePad=function(t,e,n,r,s,a){t-=s,e-=a,n+=s,r+=a,this.minX=this.minX<t?this.minX:t,this.maxX=this.maxX>n?this.maxX:n,this.minY=this.minY<e?this.minY:e,this.maxY=this.maxY>r?this.maxY:r},i}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Nh=function(i,t){return Nh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Nh(i,t)};function Pl(i,t){Nh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var fe=function(i){Pl(t,i);function t(){var e=i.call(this)||this;return e.tempDisplayObjectParent=null,e.transform=new Rd,e.alpha=1,e.visible=!0,e.renderable=!0,e.cullable=!1,e.cullArea=null,e.parent=null,e.worldAlpha=1,e._lastSortedIndex=0,e._zIndex=0,e.filterArea=null,e.filters=null,e._enabledFilters=null,e._bounds=new Oa,e._localBounds=null,e._boundsID=0,e._boundsRect=null,e._localBoundsRect=null,e._mask=null,e._maskRefCount=0,e._destroyed=!1,e.isSprite=!1,e.isMask=!1,e}return t.mixin=function(e){for(var n=Object.keys(e),r=0;r<n.length;++r){var s=n[r];Object.defineProperty(t.prototype,s,Object.getOwnPropertyDescriptor(e,s))}},Object.defineProperty(t.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),t.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},t.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},t.prototype.getBounds=function(e,n){return e||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),n||(this._boundsRect||(this._boundsRect=new qt),n=this._boundsRect),this._bounds.getRectangle(n)},t.prototype.getLocalBounds=function(e){e||(this._localBoundsRect||(this._localBoundsRect=new qt),e=this._localBoundsRect),this._localBounds||(this._localBounds=new Oa);var n=this.transform,r=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var s=this._bounds,a=this._boundsID;this._bounds=this._localBounds;var o=this.getBounds(!1,e);return this.parent=r,this.transform=n,this._bounds=s,this._bounds.updateID+=this._boundsID-a,o},t.prototype.toGlobal=function(e,n,r){return r===void 0&&(r=!1),r||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(e,n)},t.prototype.toLocal=function(e,n,r,s){return n&&(e=n.toGlobal(e,r,s)),s||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(e,r)},t.prototype.setParent=function(e){if(!e||!e.addChild)throw new Error("setParent: Argument must be a Container");return e.addChild(this),e},t.prototype.setTransform=function(e,n,r,s,a,o,h,l,u){return e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=1),s===void 0&&(s=1),a===void 0&&(a=0),o===void 0&&(o=0),h===void 0&&(h=0),l===void 0&&(l=0),u===void 0&&(u=0),this.position.x=e,this.position.y=n,this.scale.x=r||1,this.scale.y=s||1,this.rotation=a,this.skew.x=o,this.skew.y=h,this.pivot.x=l,this.pivot.y=u,this},t.prototype.destroy=function(e){this.parent&&this.parent.removeChild(this),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()},Object.defineProperty(t.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new Cd),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),t.prototype.enableTempParent=function(){var e=this.parent;return this.parent=this._tempDisplayObjectParent,e},t.prototype.disableTempParent=function(e){this.parent=e},Object.defineProperty(t.prototype,"x",{get:function(){return this.position.x},set:function(e){this.transform.position.x=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.position.y},set:function(e){this.transform.position.y=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this.transform.position},set:function(e){this.transform.position.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return this.transform.scale},set:function(e){this.transform.scale.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(e){this.transform.pivot.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"skew",{get:function(){return this.transform.skew},set:function(e){this.transform.skew.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(e){this.transform.rotation=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"angle",{get:function(){return this.transform.rotation*Kb},set:function(e){this.transform.rotation=e*Zb},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"zIndex",{get:function(){return this._zIndex},set:function(e){this._zIndex=e,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"worldVisible",{get:function(){var e=this;do{if(!e.visible)return!1;e=e.parent}while(e);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"mask",{get:function(){return this._mask},set:function(e){if(this._mask!==e){if(this._mask){var n=this._mask.isMaskData?this._mask.maskObject:this._mask;n&&(n._maskRefCount--,n._maskRefCount===0&&(n.renderable=!0,n.isMask=!1))}if(this._mask=e,this._mask){var n=this._mask.isMaskData?this._mask.maskObject:this._mask;n&&(n._maskRefCount===0&&(n.renderable=!1,n.isMask=!0),n._maskRefCount++)}}},enumerable:!1,configurable:!0}),t}(_s),Cd=function(i){Pl(t,i);function t(){var e=i!==null&&i.apply(this,arguments)||this;return e.sortDirty=null,e}return t}(fe);fe.prototype.displayObjectUpdateTransform=fe.prototype.updateTransform;function iS(i,t){return i.zIndex===t.zIndex?i._lastSortedIndex-t._lastSortedIndex:i.zIndex-t.zIndex}var Mn=function(i){Pl(t,i);function t(){var e=i.call(this)||this;return e.children=[],e.sortableChildren=dt.SORTABLE_CHILDREN,e.sortDirty=!1,e}return t.prototype.onChildrenChange=function(e){},t.prototype.addChild=function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];if(n.length>1)for(var s=0;s<n.length;s++)this.addChild(n[s]);else{var a=n[0];a.parent&&a.parent.removeChild(a),a.parent=this,this.sortDirty=!0,a.transform._parentID=-1,this.children.push(a),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",a,this,this.children.length-1),a.emit("added",this)}return n[0]},t.prototype.addChildAt=function(e,n){if(n<0||n>this.children.length)throw new Error(e+"addChildAt: The index "+n+" supplied is out of bounds "+this.children.length);return e.parent&&e.parent.removeChild(e),e.parent=this,this.sortDirty=!0,e.transform._parentID=-1,this.children.splice(n,0,e),this._boundsID++,this.onChildrenChange(n),e.emit("added",this),this.emit("childAdded",e,this,n),e},t.prototype.swapChildren=function(e,n){if(e!==n){var r=this.getChildIndex(e),s=this.getChildIndex(n);this.children[r]=n,this.children[s]=e,this.onChildrenChange(r<s?r:s)}},t.prototype.getChildIndex=function(e){var n=this.children.indexOf(e);if(n===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return n},t.prototype.setChildIndex=function(e,n){if(n<0||n>=this.children.length)throw new Error("The index "+n+" supplied is out of bounds "+this.children.length);var r=this.getChildIndex(e);xr(this.children,r,1),this.children.splice(n,0,e),this.onChildrenChange(n)},t.prototype.getChildAt=function(e){if(e<0||e>=this.children.length)throw new Error("getChildAt: Index ("+e+") does not exist.");return this.children[e]},t.prototype.removeChild=function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];if(n.length>1)for(var s=0;s<n.length;s++)this.removeChild(n[s]);else{var a=n[0],o=this.children.indexOf(a);if(o===-1)return null;a.parent=null,a.transform._parentID=-1,xr(this.children,o,1),this._boundsID++,this.onChildrenChange(o),a.emit("removed",this),this.emit("childRemoved",a,this,o)}return n[0]},t.prototype.removeChildAt=function(e){var n=this.getChildAt(e);return n.parent=null,n.transform._parentID=-1,xr(this.children,e,1),this._boundsID++,this.onChildrenChange(e),n.emit("removed",this),this.emit("childRemoved",n,this,e),n},t.prototype.removeChildren=function(e,n){e===void 0&&(e=0),n===void 0&&(n=this.children.length);var r=e,s=n,a=s-r,o;if(a>0&&a<=s){o=this.children.splice(r,a);for(var h=0;h<o.length;++h)o[h].parent=null,o[h].transform&&(o[h].transform._parentID=-1);this._boundsID++,this.onChildrenChange(e);for(var h=0;h<o.length;++h)o[h].emit("removed",this),this.emit("childRemoved",o[h],this,h);return o}else if(a===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},t.prototype.sortChildren=function(){for(var e=!1,n=0,r=this.children.length;n<r;++n){var s=this.children[n];s._lastSortedIndex=n,!e&&s.zIndex!==0&&(e=!0)}e&&this.children.length>1&&this.children.sort(iS),this.sortDirty=!1},t.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var e=0,n=this.children.length;e<n;++e){var r=this.children[e];r.visible&&r.updateTransform()}},t.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var e=0;e<this.children.length;e++){var n=this.children[e];if(!(!n.visible||!n.renderable))if(n.calculateBounds(),n._mask){var r=n._mask.isMaskData?n._mask.maskObject:n._mask;r?(r.calculateBounds(),this._bounds.addBoundsMask(n._bounds,r._bounds)):this._bounds.addBounds(n._bounds)}else n.filterArea?this._bounds.addBoundsArea(n._bounds,n.filterArea):this._bounds.addBounds(n._bounds)}this._bounds.updateID=this._boundsID},t.prototype.getLocalBounds=function(e,n){n===void 0&&(n=!1);var r=i.prototype.getLocalBounds.call(this,e);if(!n)for(var s=0,a=this.children.length;s<a;++s){var o=this.children[s];o.visible&&o.updateTransform()}return r},t.prototype._calculateBounds=function(){},t.prototype._renderWithCulling=function(e){var n=e.renderTexture.sourceFrame;if(n.width>0&&n.height>0){var r,s;if(this.cullArea?(r=this.cullArea,s=this.worldTransform):this._render!==t.prototype._render&&(r=this.getBounds(!0)),r&&n.intersects(r,s))this._render(e);else if(this.cullArea)return;for(var a=0,o=this.children.length;a<o;++a){var h=this.children[a],l=h.cullable;h.cullable=l||!this.cullArea,h.render(e),h.cullable=l}}},t.prototype.render=function(e){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(e);else if(this.cullable)this._renderWithCulling(e);else{this._render(e);for(var n=0,r=this.children.length;n<r;++n)this.children[n].render(e)}},t.prototype.renderAdvanced=function(e){var n=this.filters,r=this._mask;if(n){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var s=0;s<n.length;s++)n[s].enabled&&this._enabledFilters.push(n[s])}var a=n&&this._enabledFilters&&this._enabledFilters.length||r&&(!r.isMaskData||r.enabled&&(r.autoDetect||r.type!==ge.NONE));if(a&&e.batch.flush(),n&&this._enabledFilters&&this._enabledFilters.length&&e.filter.push(this,this._enabledFilters),r&&e.mask.push(this,this._mask),this.cullable)this._renderWithCulling(e);else{this._render(e);for(var s=0,o=this.children.length;s<o;++s)this.children[s].render(e)}a&&e.batch.flush(),r&&e.mask.pop(this),n&&this._enabledFilters&&this._enabledFilters.length&&e.filter.pop()},t.prototype._render=function(e){},t.prototype.destroy=function(e){i.prototype.destroy.call(this),this.sortDirty=!1;var n=typeof e=="boolean"?e:e&&e.children,r=this.removeChildren(0,this.children.length);if(n)for(var s=0;s<r.length;++s)r[s].destroy(e)},Object.defineProperty(t.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(e){var n=this.getLocalBounds().width;n!==0?this.scale.x=e/n:this.scale.x=1,this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(e){var n=this.getLocalBounds().height;n!==0?this.scale.y=e/n:this.scale.y=1,this._height=e},enumerable:!1,configurable:!0}),t}(fe);Mn.prototype.containerUpdateTransform=Mn.prototype.updateTransform;/*!
 * @pixi/extensions - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/extensions is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Jr=function(){return Jr=Object.assign||function(t){for(var e=arguments,n,r=1,s=arguments.length;r<s;r++){n=e[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Jr.apply(this,arguments)},Qt;(function(i){i.Application="application",i.RendererPlugin="renderer-webgl-plugin",i.CanvasRendererPlugin="renderer-canvas-plugin",i.Loader="loader",i.LoadParser="load-parser",i.ResolveParser="resolve-parser",i.CacheParser="cache-parser",i.DetectionParser="detection-parser"})(Qt||(Qt={}));var Oc=function(i){if(typeof i=="function"||typeof i=="object"&&i.extension){if(!i.extension)throw new Error("Extension class must have an extension object");var t=typeof i.extension!="object"?{type:i.extension}:i.extension;i=Jr(Jr({},t),{ref:i})}if(typeof i=="object")i=Jr({},i);else throw new Error("Invalid extension type");return typeof i.type=="string"&&(i.type=[i.type]),i},qn={_addHandlers:null,_removeHandlers:null,_queue:{},remove:function(){for(var i=arguments,t=this,e=[],n=0;n<arguments.length;n++)e[n]=i[n];return e.map(Oc).forEach(function(r){r.type.forEach(function(s){var a,o;return(o=(a=t._removeHandlers)[s])===null||o===void 0?void 0:o.call(a,r)})}),this},add:function(){for(var i=arguments,t=this,e=[],n=0;n<arguments.length;n++)e[n]=i[n];return e.map(Oc).forEach(function(r){r.type.forEach(function(s){var a=t._addHandlers,o=t._queue;a[s]?a[s](r):(o[s]=o[s]||[],o[s].push(r))})}),this},handle:function(i,t,e){var n=this._addHandlers=this._addHandlers||{},r=this._removeHandlers=this._removeHandlers||{};if(n[i]||r[i])throw new Error("Extension type "+i+" already has a handler");n[i]=t,r[i]=e;var s=this._queue;return s[i]&&(s[i].forEach(function(a){return t(a)}),delete s[i]),this},handleByMap:function(i,t){return this.handle(i,function(e){t[e.name]=e.ref},function(e){delete t[e.name]})},handleByList:function(i,t){return this.handle(i,function(e){var n,r;t.includes(e.ref)||(t.push(e.ref),i===Qt.Loader&&((r=(n=e.ref).add)===null||r===void 0||r.call(n)))},function(e){var n=t.indexOf(e.ref);n!==-1&&t.splice(n,1)})}};/*!
 * @pixi/runner - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ie=function(){function i(t){this.items=[],this._name=t,this._aliasCount=0}return i.prototype.emit=function(t,e,n,r,s,a,o,h){if(arguments.length>8)throw new Error("max arguments reached");var l=this,u=l.name,c=l.items;this._aliasCount++;for(var f=0,d=c.length;f<d;f++)c[f][u](t,e,n,r,s,a,o,h);return c===this.items&&this._aliasCount--,this},i.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},i.prototype.add=function(t){return t[this._name]&&(this.ensureNonAliasedItems(),this.remove(t),this.items.push(t)),this},i.prototype.remove=function(t){var e=this.items.indexOf(t);return e!==-1&&(this.ensureNonAliasedItems(),this.items.splice(e,1)),this},i.prototype.contains=function(t){return this.items.indexOf(t)!==-1},i.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},i.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(i.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),i}();Object.defineProperties(Ie.prototype,{dispatch:{value:Ie.prototype.emit},run:{value:Ie.prototype.emit}});/*!
 * @pixi/ticker - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */dt.TARGET_FPMS=.06;var jn;(function(i){i[i.INTERACTION=50]="INTERACTION",i[i.HIGH=25]="HIGH",i[i.NORMAL=0]="NORMAL",i[i.LOW=-25]="LOW",i[i.UTILITY=-50]="UTILITY"})(jn||(jn={}));var Vo=function(){function i(t,e,n,r){e===void 0&&(e=null),n===void 0&&(n=0),r===void 0&&(r=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=t,this.context=e,this.priority=n,this.once=r}return i.prototype.match=function(t,e){return e===void 0&&(e=null),this.fn===t&&this.context===e},i.prototype.emit=function(t){this.fn&&(this.context?this.fn.call(this.context,t):this.fn(t));var e=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),e},i.prototype.connect=function(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this},i.prototype.destroy=function(t){t===void 0&&(t=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var e=this.next;return this.next=t?null:e,this.previous=null,e},i}(),Oe=function(){function i(){var t=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Vo(null,null,1/0),this.deltaMS=1/dt.TARGET_FPMS,this.elapsedMS=1/dt.TARGET_FPMS,this._tick=function(e){t._requestId=null,t.started&&(t.update(e),t.started&&t._requestId===null&&t._head.next&&(t._requestId=requestAnimationFrame(t._tick)))}}return i.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},i.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},i.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},i.prototype.add=function(t,e,n){return n===void 0&&(n=jn.NORMAL),this._addListener(new Vo(t,e,n))},i.prototype.addOnce=function(t,e,n){return n===void 0&&(n=jn.NORMAL),this._addListener(new Vo(t,e,n,!0))},i.prototype._addListener=function(t){var e=this._head.next,n=this._head;if(!e)t.connect(n);else{for(;e;){if(t.priority>e.priority){t.connect(n);break}n=e,e=e.next}t.previous||t.connect(n)}return this._startIfPossible(),this},i.prototype.remove=function(t,e){for(var n=this._head.next;n;)n.match(t,e)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(i.prototype,"count",{get:function(){if(!this._head)return 0;for(var t=0,e=this._head;e=e.next;)t++;return t},enumerable:!1,configurable:!0}),i.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},i.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},i.prototype.destroy=function(){if(!this._protected){this.stop();for(var t=this._head.next;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}},i.prototype.update=function(t){t===void 0&&(t=performance.now());var e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){var n=t-this._lastFrame|0;if(n<this._minElapsedMS)return;this._lastFrame=t-n%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*dt.TARGET_FPMS;for(var r=this._head,s=r.next;s;)s=s.emit(this.deltaTime);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t},Object.defineProperty(i.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(t){var e=Math.min(this.maxFPS,t),n=Math.min(Math.max(0,e)/1e3,dt.TARGET_FPMS);this._maxElapsedMS=1/n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(t){if(t===0)this._minElapsedMS=0;else{var e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"shared",{get:function(){if(!i._shared){var t=i._shared=new i;t.autoStart=!0,t._protected=!0}return i._shared},enumerable:!1,configurable:!0}),Object.defineProperty(i,"system",{get:function(){if(!i._system){var t=i._system=new i;t.autoStart=!0,t._protected=!0}return i._system},enumerable:!1,configurable:!0}),i}(),rS=function(){function i(){}return i.init=function(t){var e=this;t=Object.assign({autoStart:!0,sharedTicker:!1},t),Object.defineProperty(this,"ticker",{set:function(n){this._ticker&&this._ticker.remove(this.render,this),this._ticker=n,n&&n.add(this.render,this,jn.LOW)},get:function(){return this._ticker}}),this.stop=function(){e._ticker.stop()},this.start=function(){e._ticker.start()},this._ticker=null,this.ticker=t.sharedTicker?Oe.shared:new Oe,t.autoStart&&this.start()},i.destroy=function(){if(this._ticker){var t=this._ticker;this.ticker=null,t.destroy()}},i.extension=Qt.Application,i}();/*!
 * @pixi/core - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */dt.PREFER_ENV=xn.any?Yn.WEBGL:Yn.WEBGL2;dt.STRICT_TEXTURE_CACHE=!1;var Fh=[];function Pd(i,t){if(!i)return null;var e="";if(typeof i=="string"){var n=/\.(\w{3,4})(?:$|\?|#)/i.exec(i);n&&(e=n[1].toLowerCase())}for(var r=Fh.length-1;r>=0;--r){var s=Fh[r];if(s.test&&s.test(i,e))return new s(i,t)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Bh=function(i,t){return Bh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Bh(i,t)};function ee(i,t){Bh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Gh=function(){return Gh=Object.assign||function(t){for(var e=arguments,n,r=1,s=arguments.length;r<s;r++){n=e[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Gh.apply(this,arguments)};function sS(i,t){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&t.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(e[n[r]]=i[n[r]]);return e}var as=function(){function i(t,e){t===void 0&&(t=0),e===void 0&&(e=0),this._width=t,this._height=e,this.destroyed=!1,this.internal=!1,this.onResize=new Ie("setRealSize"),this.onUpdate=new Ie("update"),this.onError=new Ie("onError")}return i.prototype.bind=function(t){this.onResize.add(t),this.onUpdate.add(t),this.onError.add(t),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},i.prototype.unbind=function(t){this.onResize.remove(t),this.onUpdate.remove(t),this.onError.remove(t)},i.prototype.resize=function(t,e){(t!==this._width||e!==this._height)&&(this._width=t,this._height=e,this.onResize.emit(t,e))},Object.defineProperty(i.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),i.prototype.update=function(){this.destroyed||this.onUpdate.emit()},i.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(i.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),i.prototype.style=function(t,e,n){return!1},i.prototype.dispose=function(){},i.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},i.test=function(t,e){return!1},i}(),gs=function(i){ee(t,i);function t(e,n){var r=this,s=n||{},a=s.width,o=s.height;if(!a||!o)throw new Error("BufferResource width or height invalid");return r=i.call(this,a,o)||this,r.data=e,r}return t.prototype.upload=function(e,n,r){var s=e.gl;s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===pn.UNPACK);var a=n.realWidth,o=n.realHeight;return r.width===a&&r.height===o?s.texSubImage2D(n.target,0,0,0,a,o,n.format,r.type,this.data):(r.width=a,r.height=o,s.texImage2D(n.target,0,r.internalFormat,a,o,0,n.format,r.type,this.data)),!0},t.prototype.dispose=function(){this.data=null},t.test=function(e){return e instanceof Float32Array||e instanceof Uint8Array||e instanceof Uint32Array},t}(as),aS={scaleMode:yn.NEAREST,format:rt.RGBA,alphaMode:pn.NPM},jt=function(i){ee(t,i);function t(e,n){e===void 0&&(e=null),n===void 0&&(n=null);var r=i.call(this)||this;n=n||{};var s=n.alphaMode,a=n.mipmap,o=n.anisotropicLevel,h=n.scaleMode,l=n.width,u=n.height,c=n.wrapMode,f=n.format,d=n.type,m=n.target,_=n.resolution,p=n.resourceOptions;return e&&!(e instanceof as)&&(e=Pd(e,p),e.internal=!0),r.resolution=_||dt.RESOLUTION,r.width=Math.round((l||0)*r.resolution)/r.resolution,r.height=Math.round((u||0)*r.resolution)/r.resolution,r._mipmap=a!==void 0?a:dt.MIPMAP_TEXTURES,r.anisotropicLevel=o!==void 0?o:dt.ANISOTROPIC_LEVEL,r._wrapMode=c||dt.WRAP_MODE,r._scaleMode=h!==void 0?h:dt.SCALE_MODE,r.format=f||rt.RGBA,r.type=d||Mt.UNSIGNED_BYTE,r.target=m||Ni.TEXTURE_2D,r.alphaMode=s!==void 0?s:pn.UNPACK,r.uid=Hi(),r.touched=0,r.isPowerOfTwo=!1,r._refreshPOT(),r._glTextures={},r.dirtyId=0,r.dirtyStyleId=0,r.cacheId=null,r.valid=l>0&&u>0,r.textureCacheIds=[],r.destroyed=!1,r.resource=null,r._batchEnabled=0,r._batchLocation=0,r.parentTextureArray=null,r.setResource(e),r}return Object.defineProperty(t.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"mipmap",{get:function(){return this._mipmap},set:function(e){this._mipmap!==e&&(this._mipmap=e,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(e){this._scaleMode!==e&&(this._scaleMode=e,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(e){this._wrapMode!==e&&(this._wrapMode=e,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),t.prototype.setStyle=function(e,n){var r;return e!==void 0&&e!==this.scaleMode&&(this.scaleMode=e,r=!0),n!==void 0&&n!==this.mipmap&&(this.mipmap=n,r=!0),r&&this.dirtyStyleId++,this},t.prototype.setSize=function(e,n,r){return r=r||this.resolution,this.setRealSize(e*r,n*r,r)},t.prototype.setRealSize=function(e,n,r){return this.resolution=r||this.resolution,this.width=Math.round(e)/this.resolution,this.height=Math.round(n)/this.resolution,this._refreshPOT(),this.update(),this},t.prototype._refreshPOT=function(){this.isPowerOfTwo=Rc(this.realWidth)&&Rc(this.realHeight)},t.prototype.setResolution=function(e){var n=this.resolution;return n===e?this:(this.resolution=e,this.valid&&(this.width=Math.round(this.width*n)/e,this.height=Math.round(this.height*n)/e,this.emit("update",this)),this._refreshPOT(),this)},t.prototype.setResource=function(e){if(this.resource===e)return this;if(this.resource)throw new Error("Resource can be set only once");return e.bind(this),this.resource=e,this},t.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},t.prototype.onError=function(e){this.emit("error",this,e)},t.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete yi[this.cacheId],delete kn[this.cacheId],this.cacheId=null),this.dispose(),t.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},t.prototype.dispose=function(){this.emit("dispose",this)},t.prototype.castToBaseTexture=function(){return this},t.from=function(e,n,r){r===void 0&&(r=dt.STRICT_TEXTURE_CACHE);var s=typeof e=="string",a=null;if(s)a=e;else{if(!e._pixiId){var o=n&&n.pixiIdPrefix||"pixiid";e._pixiId=o+"_"+Hi()}a=e._pixiId}var h=yi[a];if(s&&r&&!h)throw new Error('The cacheId "'+a+'" does not exist in BaseTextureCache.');return h||(h=new t(e,n),h.cacheId=a,t.addToCache(h,a)),h},t.fromBuffer=function(e,n,r,s){e=e||new Float32Array(n*r*4);var a=new gs(e,{width:n,height:r}),o=e instanceof Float32Array?Mt.FLOAT:Mt.UNSIGNED_BYTE;return new t(a,Object.assign({},aS,s||{width:n,height:r,type:o}))},t.addToCache=function(e,n){n&&(e.textureCacheIds.indexOf(n)===-1&&e.textureCacheIds.push(n),yi[n]&&console.warn("BaseTexture added to the cache with an id ["+n+"] that already had an entry"),yi[n]=e)},t.removeFromCache=function(e){if(typeof e=="string"){var n=yi[e];if(n){var r=n.textureCacheIds.indexOf(e);return r>-1&&n.textureCacheIds.splice(r,1),delete yi[e],n}}else if(e&&e.textureCacheIds){for(var s=0;s<e.textureCacheIds.length;++s)delete yi[e.textureCacheIds[s]];return e.textureCacheIds.length=0,e}return null},t._globalBatch=0,t}(_s),Id=function(i){ee(t,i);function t(e,n){var r=this,s=n||{},a=s.width,o=s.height;r=i.call(this,a,o)||this,r.items=[],r.itemDirtyIds=[];for(var h=0;h<e;h++){var l=new jt;r.items.push(l),r.itemDirtyIds.push(-2)}return r.length=e,r._load=null,r.baseTexture=null,r}return t.prototype.initFromArray=function(e,n){for(var r=0;r<this.length;r++)e[r]&&(e[r].castToBaseTexture?this.addBaseTextureAt(e[r].castToBaseTexture(),r):e[r]instanceof as?this.addResourceAt(e[r],r):this.addResourceAt(Pd(e[r],n),r))},t.prototype.dispose=function(){for(var e=0,n=this.length;e<n;e++)this.items[e].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},t.prototype.addResourceAt=function(e,n){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");return e.valid&&!this.valid&&this.resize(e.width,e.height),this.items[n].setResource(e),this},t.prototype.bind=function(e){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");i.prototype.bind.call(this,e);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=e,this.items[n].on("update",e.update,e)},t.prototype.unbind=function(e){i.prototype.unbind.call(this,e);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=null,this.items[n].off("update",e.update,e)},t.prototype.load=function(){var e=this;if(this._load)return this._load;var n=this.items.map(function(s){return s.resource}).filter(function(s){return s}),r=n.map(function(s){return s.load()});return this._load=Promise.all(r).then(function(){var s=e.items[0],a=s.realWidth,o=s.realHeight;return e.resize(a,o),Promise.resolve(e)}),this._load},t}(as),oS=function(i){ee(t,i);function t(e,n){var r=this,s=n||{},a=s.width,o=s.height,h,l;return Array.isArray(e)?(h=e,l=e.length):l=e,r=i.call(this,l,{width:a,height:o})||this,h&&r.initFromArray(h,n),r}return t.prototype.addBaseTextureAt=function(e,n){if(e.resource)this.addResourceAt(e.resource,n);else throw new Error("ArrayResource does not support RenderTexture");return this},t.prototype.bind=function(e){i.prototype.bind.call(this,e),e.target=Ni.TEXTURE_2D_ARRAY},t.prototype.upload=function(e,n,r){var s=this,a=s.length,o=s.itemDirtyIds,h=s.items,l=e.gl;r.dirtyId<0&&l.texImage3D(l.TEXTURE_2D_ARRAY,0,r.internalFormat,this._width,this._height,a,0,n.format,r.type,null);for(var u=0;u<a;u++){var c=h[u];o[u]<c.dirtyId&&(o[u]=c.dirtyId,c.valid&&l.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,u,c.resource.width,c.resource.height,1,n.format,r.type,c.resource.source))}return!0},t}(Id),ui=function(i){ee(t,i);function t(e){var n=this,r=e,s=r.naturalWidth||r.videoWidth||r.width,a=r.naturalHeight||r.videoHeight||r.height;return n=i.call(this,s,a)||this,n.source=e,n.noSubImage=!1,n}return t.crossOrigin=function(e,n,r){r===void 0&&n.indexOf("data:")!==0?e.crossOrigin=Jb(n):r!==!1&&(e.crossOrigin=typeof r=="string"?r:"anonymous")},t.prototype.upload=function(e,n,r,s){var a=e.gl,o=n.realWidth,h=n.realHeight;if(s=s||this.source,s instanceof HTMLImageElement){if(!s.complete||s.naturalWidth===0)return!1}else if(s instanceof HTMLVideoElement&&s.readyState<=1)return!1;return a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===pn.UNPACK),!this.noSubImage&&n.target===a.TEXTURE_2D&&r.width===o&&r.height===h?a.texSubImage2D(a.TEXTURE_2D,0,0,0,n.format,r.type,s):(r.width=o,r.height=h,a.texImage2D(n.target,0,r.internalFormat,n.format,r.type,s)),!0},t.prototype.update=function(){if(!this.destroyed){var e=this.source,n=e.naturalWidth||e.videoWidth||e.width,r=e.naturalHeight||e.videoHeight||e.height;this.resize(n,r),i.prototype.update.call(this)}},t.prototype.dispose=function(){this.source=null},t}(as),hS=function(i){ee(t,i);function t(e){return i.call(this,e)||this}return t.test=function(e){var n=globalThis.OffscreenCanvas;return n&&e instanceof n?!0:globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement},t}(ui),lS=function(i){ee(t,i);function t(e,n){var r=this,s=n||{},a=s.width,o=s.height,h=s.autoLoad,l=s.linkBaseTexture;if(e&&e.length!==t.SIDES)throw new Error("Invalid length. Got "+e.length+", expected 6");r=i.call(this,6,{width:a,height:o})||this;for(var u=0;u<t.SIDES;u++)r.items[u].target=Ni.TEXTURE_CUBE_MAP_POSITIVE_X+u;return r.linkBaseTexture=l!==!1,e&&r.initFromArray(e,n),h!==!1&&r.load(),r}return t.prototype.bind=function(e){i.prototype.bind.call(this,e),e.target=Ni.TEXTURE_CUBE_MAP},t.prototype.addBaseTextureAt=function(e,n,r){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");if(!this.linkBaseTexture||e.parentTextureArray||Object.keys(e._glTextures).length>0)if(e.resource)this.addResourceAt(e.resource,n);else throw new Error("CubeResource does not support copying of renderTexture.");else e.target=Ni.TEXTURE_CUBE_MAP_POSITIVE_X+n,e.parentTextureArray=this.baseTexture,this.items[n]=e;return e.valid&&!this.valid&&this.resize(e.realWidth,e.realHeight),this.items[n]=e,this},t.prototype.upload=function(e,n,r){for(var s=this.itemDirtyIds,a=0;a<t.SIDES;a++){var o=this.items[a];(s[a]<o.dirtyId||r.dirtyId<n.dirtyId)&&(o.valid&&o.resource?(o.resource.upload(e,o,r),s[a]=o.dirtyId):s[a]<-1&&(e.gl.texImage2D(o.target,0,r.internalFormat,n.realWidth,n.realHeight,0,n.format,r.type,null),s[a]=-1))}return!0},t.test=function(e){return Array.isArray(e)&&e.length===t.SIDES},t.SIDES=6,t}(Id),Ld=function(i){ee(t,i);function t(e,n){var r=this;if(n=n||{},!(e instanceof HTMLImageElement)){var s=new Image;ui.crossOrigin(s,e,n.crossorigin),s.src=e,e=s}return r=i.call(this,e)||this,!e.complete&&r._width&&r._height&&(r._width=0,r._height=0),r.url=e.src,r._process=null,r.preserveBitmap=!1,r.createBitmap=(n.createBitmap!==void 0?n.createBitmap:dt.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,r.alphaMode=typeof n.alphaMode=="number"?n.alphaMode:null,r.bitmap=null,r._load=null,n.autoLoad!==!1&&r.load(),r}return t.prototype.load=function(e){var n=this;return this._load?this._load:(e!==void 0&&(this.createBitmap=e),this._load=new Promise(function(r,s){var a=n.source;n.url=a.src;var o=function(){n.destroyed||(a.onload=null,a.onerror=null,n.resize(a.width,a.height),n._load=null,n.createBitmap?r(n.process()):r(n))};a.complete&&a.src?o():(a.onload=o,a.onerror=function(h){s(h),n.onError.emit(h)})}),this._load)},t.prototype.process=function(){var e=this,n=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!globalThis.createImageBitmap)return Promise.resolve(this);var r=globalThis.createImageBitmap,s=!n.crossOrigin||n.crossOrigin==="anonymous";return this._process=fetch(n.src,{mode:s?"cors":"no-cors"}).then(function(a){return a.blob()}).then(function(a){return r(a,0,0,n.width,n.height,{premultiplyAlpha:e.alphaMode===null||e.alphaMode===pn.UNPACK?"premultiply":"none"})}).then(function(a){return e.destroyed?Promise.reject():(e.bitmap=a,e.update(),e._process=null,Promise.resolve(e))}),this._process},t.prototype.upload=function(e,n,r){if(typeof this.alphaMode=="number"&&(n.alphaMode=this.alphaMode),!this.createBitmap)return i.prototype.upload.call(this,e,n,r);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(i.prototype.upload.call(this,e,n,r,this.bitmap),!this.preserveBitmap){var s=!0,a=n._glTextures;for(var o in a){var h=a[o];if(h!==r&&h.dirtyId!==n.dirtyId){s=!1;break}}s&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},t.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,i.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},t.test=function(e){return typeof e=="string"||e instanceof HTMLImageElement},t}(ui),uS=function(i){ee(t,i);function t(e,n){var r=this;return n=n||{},r=i.call(this,dt.ADAPTER.createCanvas())||this,r._width=0,r._height=0,r.svg=e,r.scale=n.scale||1,r._overrideWidth=n.width,r._overrideHeight=n.height,r._resolve=null,r._crossorigin=n.crossorigin,r._load=null,n.autoLoad!==!1&&r.load(),r}return t.prototype.load=function(){var e=this;return this._load?this._load:(this._load=new Promise(function(n){if(e._resolve=function(){e.resize(e.source.width,e.source.height),n(e)},t.SVG_XML.test(e.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");e.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(e.svg)))}e._loadSvg()}),this._load)},t.prototype._loadSvg=function(){var e=this,n=new Image;ui.crossOrigin(n,this.svg,this._crossorigin),n.src=this.svg,n.onerror=function(r){e._resolve&&(n.onerror=null,e.onError.emit(r))},n.onload=function(){if(e._resolve){var r=n.width,s=n.height;if(!r||!s)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var a=r*e.scale,o=s*e.scale;(e._overrideWidth||e._overrideHeight)&&(a=e._overrideWidth||e._overrideHeight/s*r,o=e._overrideHeight||e._overrideWidth/r*s),a=Math.round(a),o=Math.round(o);var h=e.source;h.width=a,h.height=o,h._pixiId="canvas_"+Hi(),h.getContext("2d").drawImage(n,0,0,r,s,0,0,a,o),e._resolve(),e._resolve=null}}},t.getSize=function(e){var n=t.SVG_SIZE.exec(e),r={};return n&&(r[n[1]]=Math.round(parseFloat(n[3])),r[n[5]]=Math.round(parseFloat(n[7]))),r},t.prototype.dispose=function(){i.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},t.test=function(e,n){return n==="svg"||typeof e=="string"&&e.startsWith("data:image/svg+xml")||typeof e=="string"&&t.SVG_XML.test(e)},t.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,t.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,t}(ui),cS=function(i){ee(t,i);function t(e,n){var r=this;if(n=n||{},!(e instanceof HTMLVideoElement)){var s=document.createElement("video");s.setAttribute("preload","auto"),s.setAttribute("webkit-playsinline",""),s.setAttribute("playsinline",""),typeof e=="string"&&(e=[e]);var a=e[0].src||e[0];ui.crossOrigin(s,a,n.crossorigin);for(var o=0;o<e.length;++o){var h=document.createElement("source"),l=e[o],u=l.src,c=l.mime;u=u||e[o];var f=u.split("?").shift().toLowerCase(),d=f.slice(f.lastIndexOf(".")+1);c=c||t.MIME_TYPES[d]||"video/"+d,h.src=u,h.type=c,s.appendChild(h)}e=s}return r=i.call(this,e)||this,r.noSubImage=!0,r._autoUpdate=!0,r._isConnectedToTicker=!1,r._updateFPS=n.updateFPS||0,r._msToNextUpdate=0,r.autoPlay=n.autoPlay!==!1,r._load=null,r._resolve=null,r._onCanPlay=r._onCanPlay.bind(r),r._onError=r._onError.bind(r),n.autoLoad!==!1&&r.load(),r}return t.prototype.update=function(e){if(!this.destroyed){var n=Oe.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-n),(!this._updateFPS||this._msToNextUpdate<=0)&&(i.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},t.prototype.load=function(){var e=this;if(this._load)return this._load;var n=this.source;return(n.readyState===n.HAVE_ENOUGH_DATA||n.readyState===n.HAVE_FUTURE_DATA)&&n.width&&n.height&&(n.complete=!0),n.addEventListener("play",this._onPlayStart.bind(this)),n.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(n.addEventListener("canplay",this._onCanPlay),n.addEventListener("canplaythrough",this._onCanPlay),n.addEventListener("error",this._onError,!0)),this._load=new Promise(function(r){e.valid?r(e):(e._resolve=r,n.load())}),this._load},t.prototype._onError=function(e){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(e)},t.prototype._isSourcePlaying=function(){var e=this.source;return!e.paused&&!e.ended&&this._isSourceReady()},t.prototype._isSourceReady=function(){var e=this.source;return e.readyState>2},t.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(Oe.shared.add(this.update,this),this._isConnectedToTicker=!0)},t.prototype._onPlayStop=function(){this._isConnectedToTicker&&(Oe.shared.remove(this.update,this),this._isConnectedToTicker=!1)},t.prototype._onCanPlay=function(){var e=this.source;e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlay);var n=this.valid;this.resize(e.videoWidth,e.videoHeight),!n&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&e.play()},t.prototype.dispose=function(){this._isConnectedToTicker&&(Oe.shared.remove(this.update,this),this._isConnectedToTicker=!1);var e=this.source;e&&(e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),i.prototype.dispose.call(this)},Object.defineProperty(t.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Oe.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(Oe.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(e){e!==this._updateFPS&&(this._updateFPS=e)},enumerable:!1,configurable:!0}),t.test=function(e,n){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement||t.TYPES.indexOf(n)>-1},t.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],t.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},t}(ui),fS=function(i){ee(t,i);function t(e){return i.call(this,e)||this}return t.test=function(e){return!!globalThis.createImageBitmap&&typeof ImageBitmap<"u"&&e instanceof ImageBitmap},t}(ui);Fh.push(Ld,fS,hS,cS,uS,gs,lS,oS);var dS=function(i){ee(t,i);function t(){return i!==null&&i.apply(this,arguments)||this}return t.prototype.upload=function(e,n,r){var s=e.gl;s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===pn.UNPACK);var a=n.realWidth,o=n.realHeight;return r.width===a&&r.height===o?s.texSubImage2D(n.target,0,0,0,a,o,n.format,r.type,this.data):(r.width=a,r.height=o,s.texImage2D(n.target,0,r.internalFormat,a,o,0,n.format,r.type,this.data)),!0},t}(gs),kh=function(){function i(t,e){this.width=Math.round(t||100),this.height=Math.round(e||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Ie("disposeFramebuffer"),this.multisample=re.NONE}return Object.defineProperty(i.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),i.prototype.addColorTexture=function(t,e){return t===void 0&&(t=0),this.colorTextures[t]=e||new jt(null,{scaleMode:yn.NEAREST,resolution:1,mipmap:dn.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},i.prototype.addDepthTexture=function(t){return this.depthTexture=t||new jt(new dS(null,{width:this.width,height:this.height}),{scaleMode:yn.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:dn.OFF,format:rt.DEPTH_COMPONENT,type:Mt.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},i.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},i.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},i.prototype.resize=function(t,e){if(t=Math.round(t),e=Math.round(e),!(t===this.width&&e===this.height)){this.width=t,this.height=e,this.dirtyId++,this.dirtySize++;for(var n=0;n<this.colorTextures.length;n++){var r=this.colorTextures[n],s=r.resolution;r.setSize(t/s,e/s)}if(this.depthTexture){var s=this.depthTexture.resolution;this.depthTexture.setSize(t/s,e/s)}}},i.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},i.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},i}(),Od=function(i){ee(t,i);function t(e){e===void 0&&(e={});var n=this;if(typeof e=="number"){var r=arguments[0],s=arguments[1],a=arguments[2],o=arguments[3];e={width:r,height:s,scaleMode:a,resolution:o}}return e.width=e.width||100,e.height=e.height||100,e.multisample=e.multisample!==void 0?e.multisample:re.NONE,n=i.call(this,null,e)||this,n.mipmap=dn.OFF,n.valid=!0,n.clearColor=[0,0,0,0],n.framebuffer=new kh(n.realWidth,n.realHeight).addColorTexture(0,n),n.framebuffer.multisample=e.multisample,n.maskStack=[],n.filterStack=[{}],n}return t.prototype.resize=function(e,n){this.framebuffer.resize(e*this.resolution,n*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},t.prototype.dispose=function(){this.framebuffer.dispose(),i.prototype.dispose.call(this)},t.prototype.destroy=function(){i.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},t}(jt),Dd=function(){function i(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return i.prototype.set=function(t,e,n){var r=e.width,s=e.height;if(n){var a=t.width/2/r,o=t.height/2/s,h=t.x/r+a,l=t.y/s+o;n=se.add(n,se.NW),this.x0=h+a*se.uX(n),this.y0=l+o*se.uY(n),n=se.add(n,2),this.x1=h+a*se.uX(n),this.y1=l+o*se.uY(n),n=se.add(n,2),this.x2=h+a*se.uX(n),this.y2=l+o*se.uY(n),n=se.add(n,2),this.x3=h+a*se.uX(n),this.y3=l+o*se.uY(n)}else this.x0=t.x/r,this.y0=t.y/s,this.x1=(t.x+t.width)/r,this.y1=t.y/s,this.x2=(t.x+t.width)/r,this.y2=(t.y+t.height)/s,this.x3=t.x/r,this.y3=(t.y+t.height)/s;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},i.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},i}(),Dc=new Dd;function Qs(i){i.destroy=function(){},i.on=function(){},i.once=function(){},i.emit=function(){}}var Ut=function(i){ee(t,i);function t(e,n,r,s,a,o){var h=i.call(this)||this;if(h.noFrame=!1,n||(h.noFrame=!0,n=new qt(0,0,1,1)),e instanceof t&&(e=e.baseTexture),h.baseTexture=e,h._frame=n,h.trim=s,h.valid=!1,h._uvs=Dc,h.uvMatrix=null,h.orig=r||n,h._rotate=Number(a||0),a===!0)h._rotate=2;else if(h._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return h.defaultAnchor=o?new ie(o.x,o.y):new ie(0,0),h._updateID=0,h.textureCacheIds=[],e.valid?h.noFrame?e.valid&&h.onBaseTextureUpdated(e):h.frame=n:e.once("loaded",h.onBaseTextureUpdated,h),h.noFrame&&e.on("update",h.onBaseTextureUpdated,h),h}return t.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},t.prototype.onBaseTextureUpdated=function(e){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=e.width,this._frame.height=e.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},t.prototype.destroy=function(e){if(this.baseTexture){if(e){var n=this.baseTexture.resource;n&&n.url&&kn[n.url]&&t.removeFromCache(n.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,t.removeFromCache(this),this.textureCacheIds=null},t.prototype.clone=function(){var e=this._frame.clone(),n=this._frame===this.orig?e:this.orig.clone(),r=new t(this.baseTexture,!this.noFrame&&e,n,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(r._frame=e),r},t.prototype.updateUvs=function(){this._uvs===Dc&&(this._uvs=new Dd),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},t.from=function(e,n,r){n===void 0&&(n={}),r===void 0&&(r=dt.STRICT_TEXTURE_CACHE);var s=typeof e=="string",a=null;if(s)a=e;else if(e instanceof jt){if(!e.cacheId){var o=n&&n.pixiIdPrefix||"pixiid";e.cacheId=o+"-"+Hi(),jt.addToCache(e,e.cacheId)}a=e.cacheId}else{if(!e._pixiId){var o=n&&n.pixiIdPrefix||"pixiid";e._pixiId=o+"_"+Hi()}a=e._pixiId}var h=kn[a];if(s&&r&&!h)throw new Error('The cacheId "'+a+'" does not exist in TextureCache.');return!h&&!(e instanceof jt)?(n.resolution||(n.resolution=Ia(e)),h=new t(new jt(e,n)),h.baseTexture.cacheId=a,jt.addToCache(h.baseTexture,a),t.addToCache(h,a)):!h&&e instanceof jt&&(h=new t(e),t.addToCache(h,a)),h},t.fromURL=function(e,n){var r=Object.assign({autoLoad:!1},n==null?void 0:n.resourceOptions),s=t.from(e,Object.assign({resourceOptions:r},n),!1),a=s.baseTexture.resource;return s.baseTexture.valid?Promise.resolve(s):a.load().then(function(){return Promise.resolve(s)})},t.fromBuffer=function(e,n,r,s){return new t(jt.fromBuffer(e,n,r,s))},t.fromLoader=function(e,n,r,s){var a=new jt(e,Object.assign({scaleMode:dt.SCALE_MODE,resolution:Ia(n)},s)),o=a.resource;o instanceof Ld&&(o.url=n);var h=new t(a);return r||(r=n),jt.addToCache(h.baseTexture,r),t.addToCache(h,r),r!==n&&(jt.addToCache(h.baseTexture,n),t.addToCache(h,n)),h.baseTexture.valid?Promise.resolve(h):new Promise(function(l){h.baseTexture.once("loaded",function(){return l(h)})})},t.addToCache=function(e,n){n&&(e.textureCacheIds.indexOf(n)===-1&&e.textureCacheIds.push(n),kn[n]&&console.warn("Texture added to the cache with an id ["+n+"] that already had an entry"),kn[n]=e)},t.removeFromCache=function(e){if(typeof e=="string"){var n=kn[e];if(n){var r=n.textureCacheIds.indexOf(e);return r>-1&&n.textureCacheIds.splice(r,1),delete kn[e],n}}else if(e&&e.textureCacheIds){for(var s=0;s<e.textureCacheIds.length;++s)kn[e.textureCacheIds[s]]===e&&delete kn[e.textureCacheIds[s]];return e.textureCacheIds.length=0,e}return null},Object.defineProperty(t.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"frame",{get:function(){return this._frame},set:function(e){this._frame=e,this.noFrame=!1;var n=e.x,r=e.y,s=e.width,a=e.height,o=n+s>this.baseTexture.width,h=r+a>this.baseTexture.height;if(o||h){var l=o&&h?"and":"or",u="X: "+n+" + "+s+" = "+(n+s)+" > "+this.baseTexture.width,c="Y: "+r+" + "+a+" = "+(r+a)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(u+" "+l+" "+c))}this.valid=s&&a&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=e),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotate",{get:function(){return this._rotate},set:function(e){this._rotate=e,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),t.prototype.castToBaseTexture=function(){return this.baseTexture},Object.defineProperty(t,"EMPTY",{get:function(){return t._EMPTY||(t._EMPTY=new t(new jt),Qs(t._EMPTY),Qs(t._EMPTY.baseTexture)),t._EMPTY},enumerable:!1,configurable:!0}),Object.defineProperty(t,"WHITE",{get:function(){if(!t._WHITE){var e=dt.ADAPTER.createCanvas(16,16),n=e.getContext("2d");e.width=16,e.height=16,n.fillStyle="white",n.fillRect(0,0,16,16),t._WHITE=new t(jt.from(e)),Qs(t._WHITE),Qs(t._WHITE.baseTexture)}return t._WHITE},enumerable:!1,configurable:!0}),t}(_s),zi=function(i){ee(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.valid=!0,r.filterFrame=null,r.filterPoolKey=null,r.updateUvs(),r}return Object.defineProperty(t.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(e){this.framebuffer.multisample=e},enumerable:!1,configurable:!0}),t.prototype.resize=function(e,n,r){r===void 0&&(r=!0);var s=this.baseTexture.resolution,a=Math.round(e*s)/s,o=Math.round(n*s)/s;this.valid=a>0&&o>0,this._frame.width=this.orig.width=a,this._frame.height=this.orig.height=o,r&&this.baseTexture.resize(a,o),this.updateUvs()},t.prototype.setResolution=function(e){var n=this.baseTexture;n.resolution!==e&&(n.setResolution(e),this.resize(n.width,n.height,!1))},t.create=function(e){for(var n=arguments,r=[],s=1;s<arguments.length;s++)r[s-1]=n[s];return typeof e=="number"&&(fn("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),e={width:e,height:r[0],scaleMode:r[1],resolution:r[2]}),new t(new Od(e))},t}(Ut),pS=function(){function i(t){this.texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return i.prototype.createTexture=function(t,e,n){n===void 0&&(n=re.NONE);var r=new Od(Object.assign({width:t,height:e,resolution:1,multisample:n},this.textureOptions));return new zi(r)},i.prototype.getOptimalTexture=function(t,e,n,r){n===void 0&&(n=1),r===void 0&&(r=re.NONE);var s;t=Math.ceil(t*n-1e-6),e=Math.ceil(e*n-1e-6),!this.enableFullScreen||t!==this._pixelsWidth||e!==this._pixelsHeight?(t=Pa(t),e=Pa(e),s=((t&65535)<<16|e&65535)>>>0,r>1&&(s+=r*4294967296)):s=r>1?-r:-1,this.texturePool[s]||(this.texturePool[s]=[]);var a=this.texturePool[s].pop();return a||(a=this.createTexture(t,e,r)),a.filterPoolKey=s,a.setResolution(n),a},i.prototype.getFilterTexture=function(t,e,n){var r=this.getOptimalTexture(t.width,t.height,e||t.resolution,n||re.NONE);return r.filterFrame=t.filterFrame,r},i.prototype.returnTexture=function(t){var e=t.filterPoolKey;t.filterFrame=null,this.texturePool[e].push(t)},i.prototype.returnFilterTexture=function(t){this.returnTexture(t)},i.prototype.clear=function(t){if(t=t!==!1,t)for(var e in this.texturePool){var n=this.texturePool[e];if(n)for(var r=0;r<n.length;r++)n[r].destroy(!0)}this.texturePool={}},i.prototype.setScreenSize=function(t){if(!(t.width===this._pixelsWidth&&t.height===this._pixelsHeight)){this.enableFullScreen=t.width>0&&t.height>0;for(var e in this.texturePool)if(Number(e)<0){var n=this.texturePool[e];if(n)for(var r=0;r<n.length;r++)n[r].destroy(!0);this.texturePool[e]=[]}this._pixelsWidth=t.width,this._pixelsHeight=t.height}},i.SCREEN_KEY=-1,i}(),Uc=function(){function i(t,e,n,r,s,a,o){e===void 0&&(e=0),n===void 0&&(n=!1),r===void 0&&(r=Mt.FLOAT),this.buffer=t,this.size=e,this.normalized=n,this.type=r,this.stride=s,this.start=a,this.instance=o}return i.prototype.destroy=function(){this.buffer=null},i.from=function(t,e,n,r,s){return new i(t,e,n,r,s)},i}(),mS=0,Ee=function(){function i(t,e,n){e===void 0&&(e=!0),n===void 0&&(n=!1),this.data=t||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=n,this.static=e,this.id=mS++,this.disposeRunner=new Ie("disposeBuffer")}return i.prototype.update=function(t){t instanceof Array&&(t=new Float32Array(t)),this.data=t||this.data,this._updateID++},i.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},i.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(i.prototype,"index",{get:function(){return this.type===bn.ELEMENT_ARRAY_BUFFER},set:function(t){this.type=t?bn.ELEMENT_ARRAY_BUFFER:bn.ARRAY_BUFFER},enumerable:!1,configurable:!0}),i.from=function(t){return t instanceof Array&&(t=new Float32Array(t)),new i(t)},i}(),vS={Float32Array,Uint32Array,Int32Array,Uint8Array};function _S(i,t){for(var e=0,n=0,r={},s=0;s<i.length;s++)n+=t[s],e+=i[s].length;for(var a=new ArrayBuffer(e*4),o=null,h=0,s=0;s<i.length;s++){var l=t[s],u=i[s],c=wd(u);r[c]||(r[c]=new vS[c](a)),o=r[c];for(var f=0;f<u.length;f++){var d=(f/l|0)*n+h,m=f%l;o[d+m]=u[f]}h+=l}return new Float32Array(a)}var Nc={5126:4,5123:2,5121:1},gS=0,yS={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},ys=function(){function i(t,e){t===void 0&&(t=[]),e===void 0&&(e={}),this.buffers=t,this.indexBuffer=null,this.attributes=e,this.glVertexArrayObjects={},this.id=gS++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Ie("disposeGeometry"),this.refCount=0}return i.prototype.addAttribute=function(t,e,n,r,s,a,o,h){if(n===void 0&&(n=0),r===void 0&&(r=!1),h===void 0&&(h=!1),!e)throw new Error("You must pass a buffer when creating an attribute");e instanceof Ee||(e instanceof Array&&(e=new Float32Array(e)),e=new Ee(e));var l=t.split("|");if(l.length>1){for(var u=0;u<l.length;u++)this.addAttribute(l[u],e,n,r,s);return this}var c=this.buffers.indexOf(e);return c===-1&&(this.buffers.push(e),c=this.buffers.length-1),this.attributes[t]=new Uc(c,n,r,s,a,o,h),this.instanced=this.instanced||h,this},i.prototype.getAttribute=function(t){return this.attributes[t]},i.prototype.getBuffer=function(t){return this.buffers[this.getAttribute(t).buffer]},i.prototype.addIndex=function(t){return t instanceof Ee||(t instanceof Array&&(t=new Uint16Array(t)),t=new Ee(t)),t.type=bn.ELEMENT_ARRAY_BUFFER,this.indexBuffer=t,this.buffers.indexOf(t)===-1&&this.buffers.push(t),this},i.prototype.getIndex=function(){return this.indexBuffer},i.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var t=[],e=[],n=new Ee,r;for(r in this.attributes){var s=this.attributes[r],a=this.buffers[s.buffer];t.push(a.data),e.push(s.size*Nc[s.type]/4),s.buffer=0}for(n.data=_S(t,e),r=0;r<this.buffers.length;r++)this.buffers[r]!==this.indexBuffer&&this.buffers[r].destroy();return this.buffers=[n],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},i.prototype.getSize=function(){for(var t in this.attributes){var e=this.attributes[t],n=this.buffers[e.buffer];return n.data.length/(e.stride/4||e.size)}return 0},i.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},i.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},i.prototype.clone=function(){for(var t=new i,e=0;e<this.buffers.length;e++)t.buffers[e]=new Ee(this.buffers[e].data.slice(0));for(var e in this.attributes){var n=this.attributes[e];t.attributes[e]=new Uc(n.buffer,n.size,n.normalized,n.type,n.stride,n.start,n.instance)}return this.indexBuffer&&(t.indexBuffer=t.buffers[this.buffers.indexOf(this.indexBuffer)],t.indexBuffer.type=bn.ELEMENT_ARRAY_BUFFER),t},i.merge=function(t){for(var e=new i,n=[],r=[],s=[],a,o=0;o<t.length;o++){a=t[o];for(var h=0;h<a.buffers.length;h++)r[h]=r[h]||0,r[h]+=a.buffers[h].data.length,s[h]=0}for(var o=0;o<a.buffers.length;o++)n[o]=new yS[wd(a.buffers[o].data)](r[o]),e.buffers[o]=new Ee(n[o]);for(var o=0;o<t.length;o++){a=t[o];for(var h=0;h<a.buffers.length;h++)n[h].set(a.buffers[h].data,s[h]),s[h]+=a.buffers[h].data.length}if(e.attributes=a.attributes,a.indexBuffer){e.indexBuffer=e.buffers[a.buffers.indexOf(a.indexBuffer)],e.indexBuffer.type=bn.ELEMENT_ARRAY_BUFFER;for(var l=0,u=0,c=0,f=0,o=0;o<a.buffers.length;o++)if(a.buffers[o]!==a.indexBuffer){f=o;break}for(var o in a.attributes){var d=a.attributes[o];(d.buffer|0)===f&&(u+=d.size*Nc[d.type]/4)}for(var o=0;o<t.length;o++){for(var m=t[o].indexBuffer.data,h=0;h<m.length;h++)e.indexBuffer.data[h+c]+=l;l+=t[o].buffers[f].data.length/u,c+=m.length}}return e},i}(),xS=function(i){ee(t,i);function t(){var e=i.call(this)||this;return e.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),e}return t}(ys),Ud=function(i){ee(t,i);function t(){var e=i.call(this)||this;return e.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),e.uvs=new Float32Array([0,0,1,0,1,1,0,1]),e.vertexBuffer=new Ee(e.vertices),e.uvBuffer=new Ee(e.uvs),e.addAttribute("aVertexPosition",e.vertexBuffer).addAttribute("aTextureCoord",e.uvBuffer).addIndex([0,1,2,0,2,3]),e}return t.prototype.map=function(e,n){var r=0,s=0;return this.uvs[0]=r,this.uvs[1]=s,this.uvs[2]=r+n.width/e.width,this.uvs[3]=s,this.uvs[4]=r+n.width/e.width,this.uvs[5]=s+n.height/e.height,this.uvs[6]=r,this.uvs[7]=s+n.height/e.height,r=n.x,s=n.y,this.vertices[0]=r,this.vertices[1]=s,this.vertices[2]=r+n.width,this.vertices[3]=s,this.vertices[4]=r+n.width,this.vertices[5]=s+n.height,this.vertices[6]=r,this.vertices[7]=s+n.height,this.invalidate(),this},t.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},t}(ys),ES=0,Fi=function(){function i(t,e,n){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=ES++,this.static=!!e,this.ubo=!!n,t instanceof Ee?(this.buffer=t,this.buffer.type=bn.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=t,this.ubo&&(this.buffer=new Ee(new Float32Array(1)),this.buffer.type=bn.UNIFORM_BUFFER,this.autoManage=!0))}return i.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},i.prototype.add=function(t,e,n){if(!this.ubo)this.uniforms[t]=new i(e,n);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},i.from=function(t,e,n){return new i(t,e,n)},i.uboFrom=function(t,e){return new i(t,e??!0,!0)},i}(),TS=function(){function i(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=re.NONE,this.sourceFrame=new qt,this.destinationFrame=new qt,this.bindingSourceFrame=new qt,this.bindingDestinationFrame=new qt,this.filters=[],this.transform=null}return i.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},i}(),ta=[new ie,new ie,new ie,new ie],Wo=new Se,bS=function(){function i(t){this.renderer=t,this.defaultFilterStack=[{}],this.texturePool=new pS,this.texturePool.setScreenSize(t.view),this.statePool=[],this.quad=new xS,this.quadUv=new Ud,this.tempRect=new qt,this.activeState={},this.globalUniforms=new Fi({outputFrame:new qt,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return i.prototype.push=function(t,e){for(var n,r,s=this.renderer,a=this.defaultFilterStack,o=this.statePool.pop()||new TS,h=this.renderer.renderTexture,l=e[0].resolution,u=e[0].multisample,c=e[0].padding,f=e[0].autoFit,d=(n=e[0].legacy)!==null&&n!==void 0?n:!0,m=1;m<e.length;m++){var _=e[m];l=Math.min(l,_.resolution),u=Math.min(u,_.multisample),c=this.useMaxPadding?Math.max(c,_.padding):c+_.padding,f=f&&_.autoFit,d=d||((r=_.legacy)!==null&&r!==void 0?r:!0)}a.length===1&&(this.defaultFilterStack[0].renderTexture=h.current),a.push(o),o.resolution=l,o.multisample=u,o.legacy=d,o.target=t,o.sourceFrame.copyFrom(t.filterArea||t.getBounds(!0)),o.sourceFrame.pad(c);var p=this.tempRect.copyFrom(h.sourceFrame);s.projection.transform&&this.transformAABB(Wo.copyFrom(s.projection.transform).invert(),p),f?(o.sourceFrame.fit(p),(o.sourceFrame.width<=0||o.sourceFrame.height<=0)&&(o.sourceFrame.width=0,o.sourceFrame.height=0)):o.sourceFrame.intersects(p)||(o.sourceFrame.width=0,o.sourceFrame.height=0),this.roundFrame(o.sourceFrame,h.current?h.current.resolution:s.resolution,h.sourceFrame,h.destinationFrame,s.projection.transform),o.renderTexture=this.getOptimalFilterTexture(o.sourceFrame.width,o.sourceFrame.height,l,u),o.filters=e,o.destinationFrame.width=o.renderTexture.width,o.destinationFrame.height=o.renderTexture.height;var v=this.tempRect;v.x=0,v.y=0,v.width=o.sourceFrame.width,v.height=o.sourceFrame.height,o.renderTexture.filterFrame=o.sourceFrame,o.bindingSourceFrame.copyFrom(h.sourceFrame),o.bindingDestinationFrame.copyFrom(h.destinationFrame),o.transform=s.projection.transform,s.projection.transform=null,h.bind(o.renderTexture,o.sourceFrame,v),s.framebuffer.clear(0,0,0,0)},i.prototype.pop=function(){var t=this.defaultFilterStack,e=t.pop(),n=e.filters;this.activeState=e;var r=this.globalUniforms.uniforms;r.outputFrame=e.sourceFrame,r.resolution=e.resolution;var s=r.inputSize,a=r.inputPixel,o=r.inputClamp;if(s[0]=e.destinationFrame.width,s[1]=e.destinationFrame.height,s[2]=1/s[0],s[3]=1/s[1],a[0]=Math.round(s[0]*e.resolution),a[1]=Math.round(s[1]*e.resolution),a[2]=1/a[0],a[3]=1/a[1],o[0]=.5*a[2],o[1]=.5*a[3],o[2]=e.sourceFrame.width*s[2]-.5*a[2],o[3]=e.sourceFrame.height*s[3]-.5*a[3],e.legacy){var h=r.filterArea;h[0]=e.destinationFrame.width,h[1]=e.destinationFrame.height,h[2]=e.sourceFrame.x,h[3]=e.sourceFrame.y,r.filterClamp=r.inputClamp}this.globalUniforms.update();var l=t[t.length-1];if(this.renderer.framebuffer.blit(),n.length===1)n[0].apply(this,e.renderTexture,l.renderTexture,on.BLEND,e),this.returnFilterTexture(e.renderTexture);else{var u=e.renderTexture,c=this.getOptimalFilterTexture(u.width,u.height,e.resolution);c.filterFrame=u.filterFrame;var f=0;for(f=0;f<n.length-1;++f){f===1&&e.multisample>1&&(c=this.getOptimalFilterTexture(u.width,u.height,e.resolution),c.filterFrame=u.filterFrame),n[f].apply(this,u,c,on.CLEAR,e);var d=u;u=c,c=d}n[f].apply(this,u,l.renderTexture,on.BLEND,e),f>1&&e.multisample>1&&this.returnFilterTexture(e.renderTexture),this.returnFilterTexture(u),this.returnFilterTexture(c)}e.clear(),this.statePool.push(e)},i.prototype.bindAndClear=function(t,e){e===void 0&&(e=on.CLEAR);var n=this.renderer,r=n.renderTexture,s=n.state;if(t===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,t&&t.filterFrame){var a=this.tempRect;a.x=0,a.y=0,a.width=t.filterFrame.width,a.height=t.filterFrame.height,r.bind(t,t.filterFrame,a)}else t!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?r.bind(t):this.renderer.renderTexture.bind(t,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var o=s.stateId&1||this.forceClear;(e===on.CLEAR||e===on.BLIT&&o)&&this.renderer.framebuffer.clear(0,0,0,0)},i.prototype.applyFilter=function(t,e,n,r){var s=this.renderer;s.state.set(t.state),this.bindAndClear(n,r),t.uniforms.uSampler=e,t.uniforms.filterGlobals=this.globalUniforms,s.shader.bind(t),t.legacy=!!t.program.attributeData.aTextureCoord,t.legacy?(this.quadUv.map(e._frame,e.filterFrame),s.geometry.bind(this.quadUv),s.geometry.draw(un.TRIANGLES)):(s.geometry.bind(this.quad),s.geometry.draw(un.TRIANGLE_STRIP))},i.prototype.calculateSpriteMatrix=function(t,e){var n=this.activeState,r=n.sourceFrame,s=n.destinationFrame,a=e._texture.orig,o=t.set(s.width,0,0,s.height,r.x,r.y),h=e.worldTransform.copyTo(Se.TEMP_MATRIX);return h.invert(),o.prepend(h),o.scale(1/a.width,1/a.height),o.translate(e.anchor.x,e.anchor.y),o},i.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},i.prototype.getOptimalFilterTexture=function(t,e,n,r){return n===void 0&&(n=1),r===void 0&&(r=re.NONE),this.texturePool.getOptimalTexture(t,e,n,r)},i.prototype.getFilterTexture=function(t,e,n){if(typeof t=="number"){var r=t;t=e,e=r}t=t||this.activeState.renderTexture;var s=this.texturePool.getOptimalTexture(t.width,t.height,e||t.resolution,n||re.NONE);return s.filterFrame=t.filterFrame,s},i.prototype.returnFilterTexture=function(t){this.texturePool.returnTexture(t)},i.prototype.emptyPool=function(){this.texturePool.clear(!0)},i.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},i.prototype.transformAABB=function(t,e){var n=ta[0],r=ta[1],s=ta[2],a=ta[3];n.set(e.left,e.top),r.set(e.left,e.bottom),s.set(e.right,e.top),a.set(e.right,e.bottom),t.apply(n,n),t.apply(r,r),t.apply(s,s),t.apply(a,a);var o=Math.min(n.x,r.x,s.x,a.x),h=Math.min(n.y,r.y,s.y,a.y),l=Math.max(n.x,r.x,s.x,a.x),u=Math.max(n.y,r.y,s.y,a.y);e.x=o,e.y=h,e.width=l-o,e.height=u-h},i.prototype.roundFrame=function(t,e,n,r,s){if(!(t.width<=0||t.height<=0||n.width<=0||n.height<=0)){if(s){var a=s.a,o=s.b,h=s.c,l=s.d;if((Math.abs(o)>1e-4||Math.abs(h)>1e-4)&&(Math.abs(a)>1e-4||Math.abs(l)>1e-4))return}s=s?Wo.copyFrom(s):Wo.identity(),s.translate(-n.x,-n.y).scale(r.width/n.width,r.height/n.height).translate(r.x,r.y),this.transformAABB(s,t),t.ceil(e),this.transformAABB(s.invert(),t)}},i}(),$a=function(){function i(t){this.renderer=t}return i.prototype.flush=function(){},i.prototype.destroy=function(){this.renderer=null},i.prototype.start=function(){},i.prototype.stop=function(){this.flush()},i.prototype.render=function(t){},i}(),SS=function(){function i(t){this.renderer=t,this.emptyRenderer=new $a(t),this.currentRenderer=this.emptyRenderer}return i.prototype.setObjectRenderer=function(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())},i.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},i.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},i.prototype.copyBoundTextures=function(t,e){for(var n=this.renderer.texture.boundTextures,r=e-1;r>=0;--r)t[r]=n[r]||null,t[r]&&(t[r]._batchLocation=r)},i.prototype.boundArray=function(t,e,n,r){for(var s=t.elements,a=t.ids,o=t.count,h=0,l=0;l<o;l++){var u=s[l],c=u._batchLocation;if(c>=0&&c<r&&e[c]===u){a[l]=c;continue}for(;h<r;){var f=e[h];if(f&&f._batchEnabled===n&&f._batchLocation===h){h++;continue}a[l]=h,u._batchLocation=h,e[h]=u;break}}},i.prototype.destroy=function(){this.renderer=null},i}(),Fc=0,MS=function(){function i(t){this.renderer=t,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),t.view.addEventListener("webglcontextlost",this.handleContextLost,!1),t.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(i.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),i.prototype.contextChange=function(t){this.gl=t,this.renderer.gl=t,this.renderer.CONTEXT_UID=Fc++},i.prototype.initFromContext=function(t){this.gl=t,this.validateContext(t),this.renderer.gl=t,this.renderer.CONTEXT_UID=Fc++,this.renderer.runners.contextChange.emit(t)},i.prototype.initFromOptions=function(t){var e=this.createContext(this.renderer.view,t);this.initFromContext(e)},i.prototype.createContext=function(t,e){var n;if(dt.PREFER_ENV>=Yn.WEBGL2&&(n=t.getContext("webgl2",e)),n)this.webGLVersion=2;else if(this.webGLVersion=1,n=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),!n)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=n,this.getExtensions(),this.gl},i.prototype.getExtensions=function(){var t=this.gl,e={loseContext:t.getExtension("WEBGL_lose_context"),anisotropicFiltering:t.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,e,{drawBuffers:t.getExtension("WEBGL_draw_buffers"),depthTexture:t.getExtension("WEBGL_depth_texture"),vertexArrayObject:t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:t.getExtension("OES_element_index_uint"),floatTexture:t.getExtension("OES_texture_float"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),textureHalfFloat:t.getExtension("OES_texture_half_float"),textureHalfFloatLinear:t.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,e,{colorBufferFloat:t.getExtension("EXT_color_buffer_float")})},i.prototype.handleContextLost=function(t){var e=this;t.preventDefault(),setTimeout(function(){e.gl.isContextLost()&&e.extensions.loseContext&&e.extensions.loseContext.restoreContext()},0)},i.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},i.prototype.destroy=function(){var t=this.renderer.view;this.renderer=null,t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},i.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},i.prototype.validateContext=function(t){var e=t.getContextAttributes(),n="WebGL2RenderingContext"in globalThis&&t instanceof globalThis.WebGL2RenderingContext;n&&(this.webGLVersion=2),e&&!e.stencil&&console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var r=n||!!t.getExtension("OES_element_index_uint");this.supports.uint32Indices=r,r||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},i}(),wS=function(){function i(t){this.framebuffer=t,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=re.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return i}(),AS=new qt,RS=function(){function i(t){this.renderer=t,this.managedFramebuffers=[],this.unknownFramebuffer=new kh(10,10),this.msaaSamples=null}return i.prototype.contextChange=function(){this.disposeAll(!0);var t=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new qt,this.hasMRT=!0,this.writeDepthTexture=!0,this.renderer.context.webGLVersion===1){var e=this.renderer.context.extensions.drawBuffers,n=this.renderer.context.extensions.depthTexture;dt.PREFER_ENV===Yn.WEBGL_LEGACY&&(e=null,n=null),e?t.drawBuffers=function(r){return e.drawBuffersWEBGL(r)}:(this.hasMRT=!1,t.drawBuffers=function(){}),n||(this.writeDepthTexture=!1)}else this.msaaSamples=t.getInternalformatParameter(t.RENDERBUFFER,t.RGBA8,t.SAMPLES)},i.prototype.bind=function(t,e,n){n===void 0&&(n=0);var r=this.gl;if(t){var s=t.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(t);this.current!==t&&(this.current=t,r.bindFramebuffer(r.FRAMEBUFFER,s.framebuffer)),s.mipLevel!==n&&(t.dirtyId++,t.dirtyFormat++,s.mipLevel=n),s.dirtyId!==t.dirtyId&&(s.dirtyId=t.dirtyId,s.dirtyFormat!==t.dirtyFormat?(s.dirtyFormat=t.dirtyFormat,s.dirtySize=t.dirtySize,this.updateFramebuffer(t,n)):s.dirtySize!==t.dirtySize&&(s.dirtySize=t.dirtySize,this.resizeFramebuffer(t)));for(var a=0;a<t.colorTextures.length;a++){var o=t.colorTextures[a];this.renderer.texture.unbind(o.parentTextureArray||o)}if(t.depthTexture&&this.renderer.texture.unbind(t.depthTexture),e){var h=e.width>>n,l=e.height>>n,u=h/e.width;this.setViewport(e.x*u,e.y*u,h,l)}else{var h=t.width>>n,l=t.height>>n;this.setViewport(0,0,h,l)}}else this.current&&(this.current=null,r.bindFramebuffer(r.FRAMEBUFFER,null)),e?this.setViewport(e.x,e.y,e.width,e.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},i.prototype.setViewport=function(t,e,n,r){var s=this.viewport;t=Math.round(t),e=Math.round(e),n=Math.round(n),r=Math.round(r),(s.width!==n||s.height!==r||s.x!==t||s.y!==e)&&(s.x=t,s.y=e,s.width=n,s.height=r,this.gl.viewport(t,e,n,r))},Object.defineProperty(i.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),i.prototype.clear=function(t,e,n,r,s){s===void 0&&(s=wa.COLOR|wa.DEPTH);var a=this.gl;a.clearColor(t,e,n,r),a.clear(s)},i.prototype.initFramebuffer=function(t){var e=this.gl,n=new wS(e.createFramebuffer());return n.multisample=this.detectSamples(t.multisample),t.glFramebuffers[this.CONTEXT_UID]=n,this.managedFramebuffers.push(t),t.disposeRunner.add(this),n},i.prototype.resizeFramebuffer=function(t){var e=this.gl,n=t.glFramebuffers[this.CONTEXT_UID];n.msaaBuffer&&(e.bindRenderbuffer(e.RENDERBUFFER,n.msaaBuffer),e.renderbufferStorageMultisample(e.RENDERBUFFER,n.multisample,e.RGBA8,t.width,t.height)),n.stencil&&(e.bindRenderbuffer(e.RENDERBUFFER,n.stencil),n.msaaBuffer?e.renderbufferStorageMultisample(e.RENDERBUFFER,n.multisample,e.DEPTH24_STENCIL8,t.width,t.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,t.width,t.height));var r=t.colorTextures,s=r.length;e.drawBuffers||(s=Math.min(s,1));for(var a=0;a<s;a++){var o=r[a],h=o.parentTextureArray||o;this.renderer.texture.bind(h,0)}t.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(t.depthTexture,0)},i.prototype.updateFramebuffer=function(t,e){var n=this.gl,r=t.glFramebuffers[this.CONTEXT_UID],s=t.colorTextures,a=s.length;n.drawBuffers||(a=Math.min(a,1)),r.multisample>1&&this.canMultisampleFramebuffer(t)?(r.msaaBuffer=r.msaaBuffer||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,r.msaaBuffer),n.renderbufferStorageMultisample(n.RENDERBUFFER,r.multisample,n.RGBA8,t.width,t.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,r.msaaBuffer)):r.msaaBuffer&&(n.deleteRenderbuffer(r.msaaBuffer),r.msaaBuffer=null,r.blitFramebuffer&&(r.blitFramebuffer.dispose(),r.blitFramebuffer=null));for(var o=[],h=0;h<a;h++){var l=s[h],u=l.parentTextureArray||l;this.renderer.texture.bind(u,0),!(h===0&&r.msaaBuffer)&&(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+h,l.target,u._glTextures[this.CONTEXT_UID].texture,e),o.push(n.COLOR_ATTACHMENT0+h))}if(o.length>1&&n.drawBuffers(o),t.depthTexture){var c=this.writeDepthTexture;if(c){var f=t.depthTexture;this.renderer.texture.bind(f,0),n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,f._glTextures[this.CONTEXT_UID].texture,e)}}(t.stencil||t.depth)&&!(t.depthTexture&&this.writeDepthTexture)?(r.stencil=r.stencil||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,r.stencil),r.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,r.multisample,n.DEPTH24_STENCIL8,t.width,t.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,t.width,t.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,r.stencil)):r.stencil&&(n.deleteRenderbuffer(r.stencil),r.stencil=null)},i.prototype.canMultisampleFramebuffer=function(t){return this.renderer.context.webGLVersion!==1&&t.colorTextures.length<=1&&!t.depthTexture},i.prototype.detectSamples=function(t){var e=this.msaaSamples,n=re.NONE;if(t<=1||e===null)return n;for(var r=0;r<e.length;r++)if(e[r]<=t){n=e[r];break}return n===1&&(n=re.NONE),n},i.prototype.blit=function(t,e,n){var r=this,s=r.current,a=r.renderer,o=r.gl,h=r.CONTEXT_UID;if(a.context.webGLVersion===2&&s){var l=s.glFramebuffers[h];if(l){if(!t){if(!l.msaaBuffer)return;var u=s.colorTextures[0];if(!u)return;l.blitFramebuffer||(l.blitFramebuffer=new kh(s.width,s.height),l.blitFramebuffer.addColorTexture(0,u)),t=l.blitFramebuffer,t.colorTextures[0]!==u&&(t.colorTextures[0]=u,t.dirtyId++,t.dirtyFormat++),(t.width!==s.width||t.height!==s.height)&&(t.width=s.width,t.height=s.height,t.dirtyId++,t.dirtySize++)}e||(e=AS,e.width=s.width,e.height=s.height),n||(n=e);var c=e.width===n.width&&e.height===n.height;this.bind(t),o.bindFramebuffer(o.READ_FRAMEBUFFER,l.framebuffer),o.blitFramebuffer(e.left,e.top,e.right,e.bottom,n.left,n.top,n.right,n.bottom,o.COLOR_BUFFER_BIT,c?o.NEAREST:o.LINEAR)}}},i.prototype.disposeFramebuffer=function(t,e){var n=t.glFramebuffers[this.CONTEXT_UID],r=this.gl;if(n){delete t.glFramebuffers[this.CONTEXT_UID];var s=this.managedFramebuffers.indexOf(t);s>=0&&this.managedFramebuffers.splice(s,1),t.disposeRunner.remove(this),e||(r.deleteFramebuffer(n.framebuffer),n.msaaBuffer&&r.deleteRenderbuffer(n.msaaBuffer),n.stencil&&r.deleteRenderbuffer(n.stencil)),n.blitFramebuffer&&n.blitFramebuffer.dispose()}},i.prototype.disposeAll=function(t){var e=this.managedFramebuffers;this.managedFramebuffers=[];for(var n=0;n<e.length;n++)this.disposeFramebuffer(e[n],t)},i.prototype.forceStencil=function(){var t=this.current;if(t){var e=t.glFramebuffers[this.CONTEXT_UID];if(!(!e||e.stencil)){t.stencil=!0;var n=t.width,r=t.height,s=this.gl,a=s.createRenderbuffer();s.bindRenderbuffer(s.RENDERBUFFER,a),e.msaaBuffer?s.renderbufferStorageMultisample(s.RENDERBUFFER,e.multisample,s.DEPTH24_STENCIL8,n,r):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,n,r),e.stencil=a,s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,a)}}},i.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new qt},i.prototype.destroy=function(){this.renderer=null},i}(),Xo={5126:4,5123:2,5121:1},CS=function(){function i(t){this.renderer=t,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return i.prototype.contextChange=function(){this.disposeAll(!0);var t=this.gl=this.renderer.gl,e=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,e.webGLVersion!==2){var n=this.renderer.context.extensions.vertexArrayObject;dt.PREFER_ENV===Yn.WEBGL_LEGACY&&(n=null),n?(t.createVertexArray=function(){return n.createVertexArrayOES()},t.bindVertexArray=function(s){return n.bindVertexArrayOES(s)},t.deleteVertexArray=function(s){return n.deleteVertexArrayOES(s)}):(this.hasVao=!1,t.createVertexArray=function(){return null},t.bindVertexArray=function(){return null},t.deleteVertexArray=function(){return null})}if(e.webGLVersion!==2){var r=t.getExtension("ANGLE_instanced_arrays");r?(t.vertexAttribDivisor=function(s,a){return r.vertexAttribDivisorANGLE(s,a)},t.drawElementsInstanced=function(s,a,o,h,l){return r.drawElementsInstancedANGLE(s,a,o,h,l)},t.drawArraysInstanced=function(s,a,o,h){return r.drawArraysInstancedANGLE(s,a,o,h)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=e.webGLVersion===2||!!e.extensions.uint32ElementIndex},i.prototype.bind=function(t,e){e=e||this.renderer.shader.shader;var n=this.gl,r=t.glVertexArrayObjects[this.CONTEXT_UID],s=!1;r||(this.managedGeometries[t.id]=t,t.disposeRunner.add(this),t.glVertexArrayObjects[this.CONTEXT_UID]=r={},s=!0);var a=r[e.program.id]||this.initGeometryVao(t,e,s);this._activeGeometry=t,this._activeVao!==a&&(this._activeVao=a,this.hasVao?n.bindVertexArray(a):this.activateVao(t,e.program)),this.updateBuffers()},i.prototype.reset=function(){this.unbind()},i.prototype.updateBuffers=function(){for(var t=this._activeGeometry,e=this.renderer.buffer,n=0;n<t.buffers.length;n++){var r=t.buffers[n];e.update(r)}},i.prototype.checkCompatibility=function(t,e){var n=t.attributes,r=e.attributeData;for(var s in r)if(!n[s])throw new Error('shader and geometry incompatible, geometry missing the "'+s+'" attribute')},i.prototype.getSignature=function(t,e){var n=t.attributes,r=e.attributeData,s=["g",t.id];for(var a in n)r[a]&&s.push(a,r[a].location);return s.join("-")},i.prototype.initGeometryVao=function(t,e,n){n===void 0&&(n=!0);var r=this.gl,s=this.CONTEXT_UID,a=this.renderer.buffer,o=e.program;o.glPrograms[s]||this.renderer.shader.generateProgram(e),this.checkCompatibility(t,o);var h=this.getSignature(t,o),l=t.glVertexArrayObjects[this.CONTEXT_UID],u=l[h];if(u)return l[o.id]=u,u;var c=t.buffers,f=t.attributes,d={},m={};for(var _ in c)d[_]=0,m[_]=0;for(var _ in f)!f[_].size&&o.attributeData[_]?f[_].size=o.attributeData[_].size:f[_].size||console.warn("PIXI Geometry attribute '"+_+"' size cannot be determined (likely the bound shader does not have the attribute)"),d[f[_].buffer]+=f[_].size*Xo[f[_].type];for(var _ in f){var p=f[_],v=p.size;p.stride===void 0&&(d[p.buffer]===v*Xo[p.type]?p.stride=0:p.stride=d[p.buffer]),p.start===void 0&&(p.start=m[p.buffer],m[p.buffer]+=v*Xo[p.type])}u=r.createVertexArray(),r.bindVertexArray(u);for(var y=0;y<c.length;y++){var g=c[y];a.bind(g),n&&g._glBuffers[s].refCount++}return this.activateVao(t,o),this._activeVao=u,l[o.id]=u,l[h]=u,u},i.prototype.disposeGeometry=function(t,e){var n;if(this.managedGeometries[t.id]){delete this.managedGeometries[t.id];var r=t.glVertexArrayObjects[this.CONTEXT_UID],s=this.gl,a=t.buffers,o=(n=this.renderer)===null||n===void 0?void 0:n.buffer;if(t.disposeRunner.remove(this),!!r){if(o)for(var h=0;h<a.length;h++){var l=a[h]._glBuffers[this.CONTEXT_UID];l&&(l.refCount--,l.refCount===0&&!e&&o.dispose(a[h],e))}if(!e){for(var u in r)if(u[0]==="g"){var c=r[u];this._activeVao===c&&this.unbind(),s.deleteVertexArray(c)}}delete t.glVertexArrayObjects[this.CONTEXT_UID]}}},i.prototype.disposeAll=function(t){for(var e=Object.keys(this.managedGeometries),n=0;n<e.length;n++)this.disposeGeometry(this.managedGeometries[e[n]],t)},i.prototype.activateVao=function(t,e){var n=this.gl,r=this.CONTEXT_UID,s=this.renderer.buffer,a=t.buffers,o=t.attributes;t.indexBuffer&&s.bind(t.indexBuffer);var h=null;for(var l in o){var u=o[l],c=a[u.buffer],f=c._glBuffers[r];if(e.attributeData[l]){h!==f&&(s.bind(c),h=f);var d=e.attributeData[l].location;if(n.enableVertexAttribArray(d),n.vertexAttribPointer(d,u.size,u.type||n.FLOAT,u.normalized,u.stride,u.start),u.instance)if(this.hasInstance)n.vertexAttribDivisor(d,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},i.prototype.draw=function(t,e,n,r){var s=this.gl,a=this._activeGeometry;if(a.indexBuffer){var o=a.indexBuffer.data.BYTES_PER_ELEMENT,h=o===2?s.UNSIGNED_SHORT:s.UNSIGNED_INT;o===2||o===4&&this.canUseUInt32ElementIndex?a.instanced?s.drawElementsInstanced(t,e||a.indexBuffer.data.length,h,(n||0)*o,r||1):s.drawElements(t,e||a.indexBuffer.data.length,h,(n||0)*o):console.warn("unsupported index buffer type: uint32")}else a.instanced?s.drawArraysInstanced(t,n,e||a.getSize(),r||1):s.drawArrays(t,n,e||a.getSize());return this},i.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},i.prototype.destroy=function(){this.renderer=null},i}(),PS=function(){function i(t){t===void 0&&(t=null),this.type=ge.NONE,this.autoDetect=!0,this.maskObject=t||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=dt.FILTER_MULTISAMPLE,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}return Object.defineProperty(i.prototype,"filter",{get:function(){return this._filters?this._filters[0]:null},set:function(t){t?this._filters?this._filters[0]=t:this._filters=[t]:this._filters=null},enumerable:!1,configurable:!0}),i.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=ge.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},i.prototype.copyCountersOrReset=function(t){t?(this._stencilCounter=t._stencilCounter,this._scissorCounter=t._scissorCounter,this._scissorRect=t._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},i}();function Bc(i,t,e){var n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function Gc(i,t){var e=i.getShaderSource(t).split(`
`).map(function(l,u){return u+": "+l}),n=i.getShaderInfoLog(t),r=n.split(`
`),s={},a=r.map(function(l){return parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(l){return l&&!s[l]?(s[l]=!0,!0):!1}),o=[""];a.forEach(function(l){e[l-1]="%c"+e[l-1]+"%c",o.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var h=e.join(`
`);o[0]=h,console.error(n),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,o),console.groupEnd()}function IS(i,t,e,n){i.getProgramParameter(t,i.LINK_STATUS)||(i.getShaderParameter(e,i.COMPILE_STATUS)||Gc(i,e),i.getShaderParameter(n,i.COMPILE_STATUS)||Gc(i,n),console.error("PixiJS Error: Could not initialize shader."),i.getProgramInfoLog(t)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",i.getProgramInfoLog(t)))}function Yo(i){for(var t=new Array(i),e=0;e<t.length;e++)t[e]=!1;return t}function Nd(i,t){switch(i){case"float":return 0;case"vec2":return new Float32Array(2*t);case"vec3":return new Float32Array(3*t);case"vec4":return new Float32Array(4*t);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*t);case"ivec3":return new Int32Array(3*t);case"ivec4":return new Int32Array(4*t);case"uvec2":return new Uint32Array(2*t);case"uvec3":return new Uint32Array(3*t);case"uvec4":return new Uint32Array(4*t);case"bool":return!1;case"bvec2":return Yo(2*t);case"bvec3":return Yo(3*t);case"bvec4":return Yo(4*t);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var Fd={},Br=Fd;function LS(){if(Br===Fd||Br&&Br.isContextLost()){var i=dt.ADAPTER.createCanvas(),t=void 0;dt.PREFER_ENV>=Yn.WEBGL2&&(t=i.getContext("webgl2",{})),t||(t=i.getContext("webgl",{})||i.getContext("experimental-webgl",{}),t?t.getExtension("WEBGL_draw_buffers"):t=null),Br=t}return Br}var ea;function OS(){if(!ea){ea=je.MEDIUM;var i=LS();if(i&&i.getShaderPrecisionFormat){var t=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT);ea=t.precision?je.HIGH:je.MEDIUM}}return ea}function kc(i,t,e){if(i.substring(0,9)!=="precision"){var n=t;return t===je.HIGH&&e!==je.HIGH&&(n=je.MEDIUM),"precision "+n+` float;
`+i}else if(e!==je.HIGH&&i.substring(0,15)==="precision highp")return i.replace("precision highp","precision mediump");return i}var DS={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Bd(i){return DS[i]}var na=null,Hc={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Gd(i,t){if(!na){var e=Object.keys(Hc);na={};for(var n=0;n<e.length;++n){var r=e[n];na[i[r]]=Hc[r]}}return na[t]}var Er=[{test:function(i){return i.type==="float"&&i.size===1&&!i.isArray},code:function(i){return`
            if(uv["`+i+'"] !== ud["'+i+`"].value)
            {
                ud["`+i+'"].value = uv["'+i+`"]
                gl.uniform1f(ud["`+i+'"].location, uv["'+i+`"])
            }
            `}},{test:function(i,t){return(i.type==="sampler2D"||i.type==="samplerCube"||i.type==="sampler2DArray")&&i.size===1&&!i.isArray&&(t==null||t.castToBaseTexture!==void 0)},code:function(i){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+i+`"], t);

            if(ud["`+i+`"].value !== t)
            {
                ud["`+i+`"].value = t;
                gl.uniform1i(ud["`+i+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(i,t){return i.type==="mat3"&&i.size===1&&!i.isArray&&t.a!==void 0},code:function(i){return`
            gl.uniformMatrix3fv(ud["`+i+'"].location, false, uv["'+i+`"].toArray(true));
            `},codeUbo:function(i){return`
                var `+i+"_matrix = uv."+i+`.toArray(true);

                data[offset] = `+i+`_matrix[0];
                data[offset+1] = `+i+`_matrix[1];
                data[offset+2] = `+i+`_matrix[2];
        
                data[offset + 4] = `+i+`_matrix[3];
                data[offset + 5] = `+i+`_matrix[4];
                data[offset + 6] = `+i+`_matrix[5];
        
                data[offset + 8] = `+i+`_matrix[6];
                data[offset + 9] = `+i+`_matrix[7];
                data[offset + 10] = `+i+`_matrix[8];
            `}},{test:function(i,t){return i.type==="vec2"&&i.size===1&&!i.isArray&&t.x!==void 0},code:function(i){return`
                cv = ud["`+i+`"].value;
                v = uv["`+i+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+i+`"].location, v.x, v.y);
                }`},codeUbo:function(i){return`
                v = uv.`+i+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(i){return i.type==="vec2"&&i.size===1&&!i.isArray},code:function(i){return`
                cv = ud["`+i+`"].value;
                v = uv["`+i+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+i+`"].location, v[0], v[1]);
                }
            `}},{test:function(i,t){return i.type==="vec4"&&i.size===1&&!i.isArray&&t.width!==void 0},code:function(i){return`
                cv = ud["`+i+`"].value;
                v = uv["`+i+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+i+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(i){return`
                    v = uv.`+i+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(i){return i.type==="vec4"&&i.size===1&&!i.isArray},code:function(i){return`
                cv = ud["`+i+`"].value;
                v = uv["`+i+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+i+`"].location, v[0], v[1], v[2], v[3])
                }`}}],US={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,samplerCube:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,sampler2DArray:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`},NS={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function FS(i,t){var e,n=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(var r in i.uniforms){var s=t[r];if(!s){!((e=i.uniforms[r])===null||e===void 0)&&e.group&&(i.uniforms[r].ubo?n.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+r+", '"+r+`');
                    `):n.push(`
                        renderer.shader.syncUniformGroup(uv.`+r+`, syncData);
                    `));continue}for(var a=i.uniforms[r],o=!1,h=0;h<Er.length;h++)if(Er[h].test(s,a)){n.push(Er[h].code(r,a)),o=!0;break}if(!o){var l=s.size===1&&!s.isArray?US:NS,u=l[s.type].replace("location",'ud["'+r+'"].location');n.push(`
            cu = ud["`+r+`"];
            cv = cu.value;
            v = uv["`+r+`"];
            `+u+";")}}return new Function("ud","uv","renderer","syncData",n.join(`
`))}var BS=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function GS(i){for(var t="",e=0;e<i;++e)e>0&&(t+=`
else `),e<i-1&&(t+="if(test == "+e+".0){}");return t}function kS(i,t){if(i===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var e=t.createShader(t.FRAGMENT_SHADER);;){var n=BS.replace(/%forloop%/gi,GS(i));if(t.shaderSource(e,n),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))i=i/2|0;else break}return i}var Gr;function HS(){if(typeof Gr=="boolean")return Gr;try{var i=new Function("param1","param2","param3","return param1[param2] === param3;");Gr=i({a:"b"},"a","b")===!0}catch{Gr=!1}return Gr}var zS=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,VS=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,WS=0,ia={},xs=function(){function i(t,e,n){n===void 0&&(n="pixi-shader"),this.id=WS++,this.vertexSrc=t||i.defaultVertexSrc,this.fragmentSrc=e||i.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(n=n.replace(/\s+/g,"-"),ia[n]?(ia[n]++,n+="-"+ia[n]):ia[n]=1,this.vertexSrc="#define SHADER_NAME "+n+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+n+`
`+this.fragmentSrc,this.vertexSrc=kc(this.vertexSrc,dt.PRECISION_VERTEX,je.HIGH),this.fragmentSrc=kc(this.fragmentSrc,dt.PRECISION_FRAGMENT,OS())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(i,"defaultVertexSrc",{get:function(){return VS},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultFragmentSrc",{get:function(){return zS},enumerable:!1,configurable:!0}),i.from=function(t,e,n){var r=t+e,s=Ic[r];return s||(Ic[r]=s=new i(t,e,n)),s},i}(),oi=function(){function i(t,e){this.uniformBindCount=0,this.program=t,e?e instanceof Fi?this.uniformGroup=e:this.uniformGroup=new Fi(e):this.uniformGroup=new Fi({}),this.disposeRunner=new Ie("disposeShader")}return i.prototype.checkUniformExists=function(t,e){if(e.uniforms[t])return!0;for(var n in e.uniforms){var r=e.uniforms[n];if(r.group&&this.checkUniformExists(t,r))return!0}return!1},i.prototype.destroy=function(){this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()},Object.defineProperty(i.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),i.from=function(t,e,n){var r=xs.from(t,e);return new i(r,n)},i}(),jo=0,qo=1,$o=2,Jo=3,Ko=4,Zo=5,Wi=function(){function i(){this.data=0,this.blendMode=wt.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(i.prototype,"blend",{get:function(){return!!(this.data&1<<jo)},set:function(t){!!(this.data&1<<jo)!==t&&(this.data^=1<<jo)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"offsets",{get:function(){return!!(this.data&1<<qo)},set:function(t){!!(this.data&1<<qo)!==t&&(this.data^=1<<qo)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"culling",{get:function(){return!!(this.data&1<<$o)},set:function(t){!!(this.data&1<<$o)!==t&&(this.data^=1<<$o)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"depthTest",{get:function(){return!!(this.data&1<<Jo)},set:function(t){!!(this.data&1<<Jo)!==t&&(this.data^=1<<Jo)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"depthMask",{get:function(){return!!(this.data&1<<Zo)},set:function(t){!!(this.data&1<<Zo)!==t&&(this.data^=1<<Zo)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<Ko)},set:function(t){!!(this.data&1<<Ko)!==t&&(this.data^=1<<Ko)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"blendMode",{get:function(){return this._blendMode},set:function(t){this.blend=t!==wt.NONE,this._blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(t){this.offsets=!!t,this._polygonOffset=t},enumerable:!1,configurable:!0}),i.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},i.for2d=function(){var t=new i;return t.depthTest=!1,t.blend=!0,t},i}(),XS=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,YS=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,ci=function(i){ee(t,i);function t(e,n,r){var s=this,a=xs.from(e||t.defaultVertexSrc,n||t.defaultFragmentSrc);return s=i.call(this,a,r)||this,s.padding=0,s.resolution=dt.FILTER_RESOLUTION,s.multisample=dt.FILTER_MULTISAMPLE,s.enabled=!0,s.autoFit=!0,s.state=new Wi,s}return t.prototype.apply=function(e,n,r,s,a){e.applyFilter(this,n,r,s)},Object.defineProperty(t.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(e){this.state.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultVertexSrc",{get:function(){return YS},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultFragmentSrc",{get:function(){return XS},enumerable:!1,configurable:!0}),t}(oi),jS=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`,qS=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,zc=new Se,Il=function(){function i(t,e){this._texture=t,this.mapCoord=new Se,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof e>"u"?.5:e,this.isSimple=!1}return Object.defineProperty(i.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture=t,this._textureID=-1},enumerable:!1,configurable:!0}),i.prototype.multiplyUvs=function(t,e){e===void 0&&(e=t);for(var n=this.mapCoord,r=0;r<t.length;r+=2){var s=t[r],a=t[r+1];e[r]=s*n.a+a*n.c+n.tx,e[r+1]=s*n.b+a*n.d+n.ty}return e},i.prototype.update=function(t){var e=this._texture;if(!e||!e.valid||!t&&this._textureID===e._updateID)return!1;this._textureID=e._updateID,this._updateID++;var n=e._uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);var r=e.orig,s=e.trim;s&&(zc.set(r.width/s.width,0,0,r.height/s.height,-s.x/s.width,-s.y/s.height),this.mapCoord.append(zc));var a=e.baseTexture,o=this.uClampFrame,h=this.clampMargin/a.resolution,l=this.clampOffset;return o[0]=(e._frame.x+h+l)/a.width,o[1]=(e._frame.y+h+l)/a.height,o[2]=(e._frame.x+e._frame.width-h+l)/a.width,o[3]=(e._frame.y+e._frame.height-h+l)/a.height,this.uClampOffset[0]=l/a.realWidth,this.uClampOffset[1]=l/a.realHeight,this.isSimple=e._frame.width===a.width&&e._frame.height===a.height&&e.rotate===0,!0},i}(),$S=function(i){ee(t,i);function t(e,n,r){var s=this,a=null;return typeof e!="string"&&n===void 0&&r===void 0&&(a=e,e=void 0,n=void 0,r=void 0),s=i.call(this,e||jS,n||qS,r)||this,s.maskSprite=a,s.maskMatrix=new Se,s}return Object.defineProperty(t.prototype,"maskSprite",{get:function(){return this._maskSprite},set:function(e){this._maskSprite=e,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),t.prototype.apply=function(e,n,r,s){var a=this._maskSprite,o=a._texture;o.valid&&(o.uvMatrix||(o.uvMatrix=new Il(o,0)),o.uvMatrix.update(),this.uniforms.npmAlpha=o.baseTexture.alphaMode?0:1,this.uniforms.mask=o,this.uniforms.otherMatrix=e.calculateSpriteMatrix(this.maskMatrix,a).prepend(o.uvMatrix.mapCoord),this.uniforms.alpha=a.worldAlpha,this.uniforms.maskClamp=o.uvMatrix.uClampFrame,e.applyFilter(this,n,r,s))},t}(ci),JS=function(){function i(t){this.renderer=t,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return i.prototype.setMaskStack=function(t){this.maskStack=t,this.renderer.scissor.setMaskStack(t),this.renderer.stencil.setMaskStack(t)},i.prototype.push=function(t,e){var n=e;if(!n.isMaskData){var r=this.maskDataPool.pop()||new PS;r.pooled=!0,r.maskObject=e,n=r}var s=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(n.copyCountersOrReset(s),n._colorMask=s?s._colorMask:15,n.autoDetect&&this.detect(n),n._target=t,n.type!==ge.SPRITE&&this.maskStack.push(n),n.enabled)switch(n.type){case ge.SCISSOR:this.renderer.scissor.push(n);break;case ge.STENCIL:this.renderer.stencil.push(n);break;case ge.SPRITE:n.copyCountersOrReset(null),this.pushSpriteMask(n);break;case ge.COLOR:this.pushColorMask(n);break}n.type===ge.SPRITE&&this.maskStack.push(n)},i.prototype.pop=function(t){var e=this.maskStack.pop();if(!(!e||e._target!==t)){if(e.enabled)switch(e.type){case ge.SCISSOR:this.renderer.scissor.pop(e);break;case ge.STENCIL:this.renderer.stencil.pop(e.maskObject);break;case ge.SPRITE:this.popSpriteMask(e);break;case ge.COLOR:this.popColorMask(e);break}if(e.reset(),e.pooled&&this.maskDataPool.push(e),this.maskStack.length!==0){var n=this.maskStack[this.maskStack.length-1];n.type===ge.SPRITE&&n._filters&&(n._filters[0].maskSprite=n.maskObject)}}},i.prototype.detect=function(t){var e=t.maskObject;e?e.isSprite?t.type=ge.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(t)?t.type=ge.SCISSOR:t.type=ge.STENCIL:t.type=ge.COLOR},i.prototype.pushSpriteMask=function(t){var e,n,r=t.maskObject,s=t._target,a=t._filters;a||(a=this.alphaMaskPool[this.alphaMaskIndex],a||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new $S]));var o=this.renderer,h=o.renderTexture,l,u;if(h.current){var c=h.current;l=t.resolution||c.resolution,u=(e=t.multisample)!==null&&e!==void 0?e:c.multisample}else l=t.resolution||o.resolution,u=(n=t.multisample)!==null&&n!==void 0?n:o.multisample;a[0].resolution=l,a[0].multisample=u,a[0].maskSprite=r;var f=s.filterArea;s.filterArea=r.getBounds(!0),o.filter.push(s,a),s.filterArea=f,t._filters||this.alphaMaskIndex++},i.prototype.popSpriteMask=function(t){this.renderer.filter.pop(),t._filters?t._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},i.prototype.pushColorMask=function(t){var e=t._colorMask,n=t._colorMask=e&t.colorMask;n!==e&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)},i.prototype.popColorMask=function(t){var e=t._colorMask,n=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;n!==e&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)},i.prototype.destroy=function(){this.renderer=null},i}(),kd=function(){function i(t){this.renderer=t,this.maskStack=[],this.glConst=0}return i.prototype.getStackLength=function(){return this.maskStack.length},i.prototype.setMaskStack=function(t){var e=this.renderer.gl,n=this.getStackLength();this.maskStack=t;var r=this.getStackLength();r!==n&&(r===0?e.disable(this.glConst):(e.enable(this.glConst),this._useCurrent()))},i.prototype._useCurrent=function(){},i.prototype.destroy=function(){this.renderer=null,this.maskStack=null},i}(),Vc=new Se,Wc=[],KS=function(i){ee(t,i);function t(e){var n=i.call(this,e)||this;return n.glConst=dt.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST,n}return t.prototype.getStackLength=function(){var e=this.maskStack[this.maskStack.length-1];return e?e._scissorCounter:0},t.prototype.calcScissorRect=function(e){var n;if(!e._scissorRectLocal){var r=e._scissorRect,s=e.maskObject,a=this.renderer,o=a.renderTexture,h=s.getBounds(!0,(n=Wc.pop())!==null&&n!==void 0?n:new qt);this.roundFrameToPixels(h,o.current?o.current.resolution:a.resolution,o.sourceFrame,o.destinationFrame,a.projection.transform),r&&h.fit(r),e._scissorRectLocal=h}},t.isMatrixRotated=function(e){if(!e)return!1;var n=e.a,r=e.b,s=e.c,a=e.d;return(Math.abs(r)>1e-4||Math.abs(s)>1e-4)&&(Math.abs(n)>1e-4||Math.abs(a)>1e-4)},t.prototype.testScissor=function(e){var n=e.maskObject;if(!n.isFastRect||!n.isFastRect()||t.isMatrixRotated(n.worldTransform)||t.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(e);var r=e._scissorRectLocal;return r.width>0&&r.height>0},t.prototype.roundFrameToPixels=function(e,n,r,s,a){t.isMatrixRotated(a)||(a=a?Vc.copyFrom(a):Vc.identity(),a.translate(-r.x,-r.y).scale(s.width/r.width,s.height/r.height).translate(s.x,s.y),this.renderer.filter.transformAABB(a,e),e.fit(s),e.x=Math.round(e.x*n),e.y=Math.round(e.y*n),e.width=Math.round(e.width*n),e.height=Math.round(e.height*n))},t.prototype.push=function(e){e._scissorRectLocal||this.calcScissorRect(e);var n=this.renderer.gl;e._scissorRect||n.enable(n.SCISSOR_TEST),e._scissorCounter++,e._scissorRect=e._scissorRectLocal,this._useCurrent()},t.prototype.pop=function(e){var n=this.renderer.gl;e&&Wc.push(e._scissorRectLocal),this.getStackLength()>0?this._useCurrent():n.disable(n.SCISSOR_TEST)},t.prototype._useCurrent=function(){var e=this.maskStack[this.maskStack.length-1]._scissorRect,n;this.renderer.renderTexture.current?n=e.y:n=this.renderer.height-e.height-e.y,this.renderer.gl.scissor(e.x,n,e.width,e.height)},t}(kd),ZS=function(i){ee(t,i);function t(e){var n=i.call(this,e)||this;return n.glConst=dt.ADAPTER.getWebGLRenderingContext().STENCIL_TEST,n}return t.prototype.getStackLength=function(){var e=this.maskStack[this.maskStack.length-1];return e?e._stencilCounter:0},t.prototype.push=function(e){var n=e.maskObject,r=this.renderer.gl,s=e._stencilCounter;s===0&&(this.renderer.framebuffer.forceStencil(),r.clearStencil(0),r.clear(r.STENCIL_BUFFER_BIT),r.enable(r.STENCIL_TEST)),e._stencilCounter++;var a=e._colorMask;a!==0&&(e._colorMask=0,r.colorMask(!1,!1,!1,!1)),r.stencilFunc(r.EQUAL,s,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.INCR),n.renderable=!0,n.render(this.renderer),this.renderer.batch.flush(),n.renderable=!1,a!==0&&(e._colorMask=a,r.colorMask((a&1)!==0,(a&2)!==0,(a&4)!==0,(a&8)!==0)),this._useCurrent()},t.prototype.pop=function(e){var n=this.renderer.gl;if(this.getStackLength()===0)n.disable(n.STENCIL_TEST);else{var r=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null,s=r?r._colorMask:15;s!==0&&(r._colorMask=0,n.colorMask(!1,!1,!1,!1)),n.stencilOp(n.KEEP,n.KEEP,n.DECR),e.renderable=!0,e.render(this.renderer),this.renderer.batch.flush(),e.renderable=!1,s!==0&&(r._colorMask=s,n.colorMask((s&1)!==0,(s&2)!==0,(s&4)!==0,(s&8)!==0)),this._useCurrent()}},t.prototype._useCurrent=function(){var e=this.renderer.gl;e.stencilFunc(e.EQUAL,this.getStackLength(),4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)},t}(kd),QS=function(){function i(t){this.renderer=t,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new Se,this.transform=null}return i.prototype.update=function(t,e,n,r){this.destinationFrame=t||this.destinationFrame||this.defaultFrame,this.sourceFrame=e||this.sourceFrame||t,this.calculateProjection(this.destinationFrame,this.sourceFrame,n,r),this.transform&&this.projectionMatrix.append(this.transform);var s=this.renderer;s.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,s.globalUniforms.update(),s.shader.shader&&s.shader.syncUniformGroup(s.shader.shader.uniforms.globals)},i.prototype.calculateProjection=function(t,e,n,r){var s=this.projectionMatrix,a=r?-1:1;s.identity(),s.a=1/e.width*2,s.d=a*(1/e.height*2),s.tx=-1-e.x*s.a,s.ty=-a-e.y*s.d},i.prototype.setTransform=function(t){},i.prototype.destroy=function(){this.renderer=null},i}(),xi=new qt,kr=new qt,tM=function(){function i(t){this.renderer=t,this.clearColor=t._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new qt,this.destinationFrame=new qt,this.viewportFrame=new qt}return i.prototype.bind=function(t,e,n){t===void 0&&(t=null);var r=this.renderer;this.current=t;var s,a,o;t?(s=t.baseTexture,o=s.resolution,e||(xi.width=t.frame.width,xi.height=t.frame.height,e=xi),n||(kr.x=t.frame.x,kr.y=t.frame.y,kr.width=e.width,kr.height=e.height,n=kr),a=s.framebuffer):(o=r.resolution,e||(xi.width=r.screen.width,xi.height=r.screen.height,e=xi),n||(n=xi,n.width=e.width,n.height=e.height));var h=this.viewportFrame;h.x=n.x*o,h.y=n.y*o,h.width=n.width*o,h.height=n.height*o,t||(h.y=r.view.height-(h.y+h.height)),h.ceil(),this.renderer.framebuffer.bind(a,h),this.renderer.projection.update(n,e,o,!a),t?this.renderer.mask.setMaskStack(s.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(e),this.destinationFrame.copyFrom(n)},i.prototype.clear=function(t,e){this.current?t=t||this.current.baseTexture.clearColor:t=t||this.clearColor;var n=this.destinationFrame,r=this.current?this.current.baseTexture:this.renderer.screen,s=n.width!==r.width||n.height!==r.height;if(s){var a=this.viewportFrame,o=a.x,h=a.y,l=a.width,u=a.height;o=Math.round(o),h=Math.round(h),l=Math.round(l),u=Math.round(u),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(o,h,l,u)}this.renderer.framebuffer.clear(t[0],t[1],t[2],t[3],e),s&&this.renderer.scissor.pop()},i.prototype.resize=function(){this.bind(null)},i.prototype.reset=function(){this.bind(null)},i.prototype.destroy=function(){this.renderer=null},i}();function eM(i,t,e,n,r){e.buffer.update(r)}var nM={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},Hd={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function iM(i){for(var t=i.map(function(h){return{data:h,offset:0,dataLen:0,dirty:0}}),e=0,n=0,r=0,s=0;s<t.length;s++){var a=t[s];if(e=Hd[a.data.type],a.data.size>1&&(e=Math.max(e,16)*a.data.size),a.dataLen=e,n%e!==0&&n<16){var o=n%e%16;n+=o,r+=o}n+e>16?(r=Math.ceil(r/16)*16,a.offset=r,r+=e,n=e):(a.offset=r,n+=e,r+=e)}return r=Math.ceil(r/16)*16,{uboElements:t,size:r}}function rM(i,t){var e=[];for(var n in i)t[n]&&e.push(t[n]);return e.sort(function(r,s){return r.index-s.index}),e}function sM(i,t){if(!i.autoManage)return{size:0,syncFunc:eM};for(var e=rM(i.uniforms,t),n=iM(e),r=n.uboElements,s=n.size,a=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],o=0;o<r.length;o++){for(var h=r[o],l=i.uniforms[h.data.name],u=h.data.name,c=!1,f=0;f<Er.length;f++){var d=Er[f];if(d.codeUbo&&d.test(h.data,l)){a.push("offset = "+h.offset/4+";",Er[f].codeUbo(h.data.name,l)),c=!0;break}}if(!c)if(h.data.size>1){var m=Bd(h.data.type),_=Math.max(Hd[h.data.type]/16,1),p=m/_,v=(4-p%4)%4;a.push(`
                cv = ud.`+u+`.value;
                v = uv.`+u+`;
                offset = `+h.offset/4+`;

                t = 0;

                for(var i=0; i < `+h.data.size*_+`; i++)
                {
                    for(var j = 0; j < `+p+`; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += `+v+`;
                }

                `)}else{var y=nM[h.data.type];a.push(`
                cv = ud.`+u+`.value;
                v = uv.`+u+`;
                offset = `+h.offset/4+`;
                `+y+`;
                `)}}return a.push(`
       renderer.buffer.update(buffer);
    `),{size:s,syncFunc:new Function("ud","uv","renderer","syncData","buffer",a.join(`
`))}}var aM=function(){function i(t,e){this.program=t,this.uniformData=e,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return i.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},i}();function oM(i,t){for(var e={},n=t.getProgramParameter(i,t.ACTIVE_ATTRIBUTES),r=0;r<n;r++){var s=t.getActiveAttrib(i,r);if(s.name.indexOf("gl_")!==0){var a=Gd(t,s.type),o={type:a,name:s.name,size:Bd(a),location:t.getAttribLocation(i,s.name)};e[s.name]=o}}return e}function hM(i,t){for(var e={},n=t.getProgramParameter(i,t.ACTIVE_UNIFORMS),r=0;r<n;r++){var s=t.getActiveUniform(i,r),a=s.name.replace(/\[.*?\]$/,""),o=!!s.name.match(/\[.*?\]$/),h=Gd(t,s.type);e[a]={name:a,index:r,type:h,size:s.size,isArray:o,value:Nd(h,s.size)}}return e}function lM(i,t){var e=Bc(i,i.VERTEX_SHADER,t.vertexSrc),n=Bc(i,i.FRAGMENT_SHADER,t.fragmentSrc),r=i.createProgram();if(i.attachShader(r,e),i.attachShader(r,n),i.linkProgram(r),i.getProgramParameter(r,i.LINK_STATUS)||IS(i,r,e,n),t.attributeData=oM(r,i),t.uniformData=hM(r,i),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)){var s=Object.keys(t.attributeData);s.sort(function(u,c){return u>c?1:-1});for(var a=0;a<s.length;a++)t.attributeData[s[a]].location=a,i.bindAttribLocation(r,a,s[a]);i.linkProgram(r)}i.deleteShader(e),i.deleteShader(n);var o={};for(var a in t.uniformData){var h=t.uniformData[a];o[a]={location:i.getUniformLocation(r,a),value:Nd(h.type,h.size)}}var l=new aM(r,o);return l}var uM=0,ra={textureCount:0,uboCount:0},cM=function(){function i(t){this.destroyed=!1,this.renderer=t,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=uM++}return i.prototype.systemCheck=function(){if(!HS())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},i.prototype.contextChange=function(t){this.gl=t,this.reset()},i.prototype.bind=function(t,e){t.disposeRunner.add(this),t.uniforms.globals=this.renderer.globalUniforms;var n=t.program,r=n.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(t);return this.shader=t,this.program!==n&&(this.program=n,this.gl.useProgram(r.program)),e||(ra.textureCount=0,ra.uboCount=0,this.syncUniformGroup(t.uniformGroup,ra)),r},i.prototype.setUniforms=function(t){var e=this.shader.program,n=e.glPrograms[this.renderer.CONTEXT_UID];e.syncUniforms(n.uniformData,t,this.renderer)},i.prototype.syncUniformGroup=function(t,e){var n=this.getGlProgram();(!t.static||t.dirtyId!==n.uniformDirtyGroups[t.id])&&(n.uniformDirtyGroups[t.id]=t.dirtyId,this.syncUniforms(t,n,e))},i.prototype.syncUniforms=function(t,e,n){var r=t.syncUniforms[this.shader.program.id]||this.createSyncGroups(t);r(e.uniformData,t.uniforms,this.renderer,n)},i.prototype.createSyncGroups=function(t){var e=this.getSignature(t,this.shader.program.uniformData,"u");return this.cache[e]||(this.cache[e]=FS(t,this.shader.program.uniformData)),t.syncUniforms[this.shader.program.id]=this.cache[e],t.syncUniforms[this.shader.program.id]},i.prototype.syncUniformBufferGroup=function(t,e){var n=this.getGlProgram();if(!t.static||t.dirtyId!==0||!n.uniformGroups[t.id]){t.dirtyId=0;var r=n.uniformGroups[t.id]||this.createSyncBufferGroup(t,n,e);t.buffer.update(),r(n.uniformData,t.uniforms,this.renderer,ra,t.buffer)}this.renderer.buffer.bindBufferBase(t.buffer,n.uniformBufferBindings[e])},i.prototype.createSyncBufferGroup=function(t,e,n){var r=this.renderer.gl;this.renderer.buffer.bind(t.buffer);var s=this.gl.getUniformBlockIndex(e.program,n);e.uniformBufferBindings[n]=this.shader.uniformBindCount,r.uniformBlockBinding(e.program,s,this.shader.uniformBindCount),this.shader.uniformBindCount++;var a=this.getSignature(t,this.shader.program.uniformData,"ubo"),o=this._uboCache[a];if(o||(o=this._uboCache[a]=sM(t,this.shader.program.uniformData)),t.autoManage){var h=new Float32Array(o.size/4);t.buffer.update(h)}return e.uniformGroups[t.id]=o.syncFunc,e.uniformGroups[t.id]},i.prototype.getSignature=function(t,e,n){var r=t.uniforms,s=[n+"-"];for(var a in r)s.push(a),e[a]&&s.push(e[a].type);return s.join("-")},i.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},i.prototype.generateProgram=function(t){var e=this.gl,n=t.program,r=lM(e,n);return n.glPrograms[this.renderer.CONTEXT_UID]=r,r},i.prototype.reset=function(){this.program=null,this.shader=null},i.prototype.disposeShader=function(t){this.shader===t&&(this.shader=null)},i.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},i}();function fM(i,t){return t===void 0&&(t=[]),t[wt.NORMAL]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.ADD]=[i.ONE,i.ONE],t[wt.MULTIPLY]=[i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.SCREEN]=[i.ONE,i.ONE_MINUS_SRC_COLOR,i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.OVERLAY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.DARKEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.LIGHTEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.COLOR_DODGE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.COLOR_BURN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.HARD_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.SOFT_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.DIFFERENCE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.EXCLUSION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.HUE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.SATURATION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.COLOR]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.LUMINOSITY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.NONE]=[0,0],t[wt.NORMAL_NPM]=[i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.ADD_NPM]=[i.SRC_ALPHA,i.ONE,i.ONE,i.ONE],t[wt.SCREEN_NPM]=[i.SRC_ALPHA,i.ONE_MINUS_SRC_COLOR,i.ONE,i.ONE_MINUS_SRC_ALPHA],t[wt.SRC_IN]=[i.DST_ALPHA,i.ZERO],t[wt.SRC_OUT]=[i.ONE_MINUS_DST_ALPHA,i.ZERO],t[wt.SRC_ATOP]=[i.DST_ALPHA,i.ONE_MINUS_SRC_ALPHA],t[wt.DST_OVER]=[i.ONE_MINUS_DST_ALPHA,i.ONE],t[wt.DST_IN]=[i.ZERO,i.SRC_ALPHA],t[wt.DST_OUT]=[i.ZERO,i.ONE_MINUS_SRC_ALPHA],t[wt.DST_ATOP]=[i.ONE_MINUS_DST_ALPHA,i.SRC_ALPHA],t[wt.XOR]=[i.ONE_MINUS_DST_ALPHA,i.ONE_MINUS_SRC_ALPHA],t[wt.SUBTRACT]=[i.ONE,i.ONE,i.ONE,i.ONE,i.FUNC_REVERSE_SUBTRACT,i.FUNC_ADD],t}var dM=0,pM=1,mM=2,vM=3,_M=4,gM=5,yM=function(){function i(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=wt.NONE,this._blendEq=!1,this.map=[],this.map[dM]=this.setBlend,this.map[pM]=this.setOffset,this.map[mM]=this.setCullFace,this.map[vM]=this.setDepthTest,this.map[_M]=this.setFrontFace,this.map[gM]=this.setDepthMask,this.checks=[],this.defaultState=new Wi,this.defaultState.blend=!0}return i.prototype.contextChange=function(t){this.gl=t,this.blendModes=fM(t),this.set(this.defaultState),this.reset()},i.prototype.set=function(t){if(t=t||this.defaultState,this.stateId!==t.data){for(var e=this.stateId^t.data,n=0;e;)e&1&&this.map[n].call(this,!!(t.data&1<<n)),e=e>>1,n++;this.stateId=t.data}for(var n=0;n<this.checks.length;n++)this.checks[n](this,t)},i.prototype.forceState=function(t){t=t||this.defaultState;for(var e=0;e<this.map.length;e++)this.map[e].call(this,!!(t.data&1<<e));for(var e=0;e<this.checks.length;e++)this.checks[e](this,t);this.stateId=t.data},i.prototype.setBlend=function(t){this.updateCheck(i.checkBlendMode,t),this.gl[t?"enable":"disable"](this.gl.BLEND)},i.prototype.setOffset=function(t){this.updateCheck(i.checkPolygonOffset,t),this.gl[t?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},i.prototype.setDepthTest=function(t){this.gl[t?"enable":"disable"](this.gl.DEPTH_TEST)},i.prototype.setDepthMask=function(t){this.gl.depthMask(t)},i.prototype.setCullFace=function(t){this.gl[t?"enable":"disable"](this.gl.CULL_FACE)},i.prototype.setFrontFace=function(t){this.gl.frontFace(this.gl[t?"CW":"CCW"])},i.prototype.setBlendMode=function(t){if(t!==this.blendMode){this.blendMode=t;var e=this.blendModes[t],n=this.gl;e.length===2?n.blendFunc(e[0],e[1]):n.blendFuncSeparate(e[0],e[1],e[2],e[3]),e.length===6?(this._blendEq=!0,n.blendEquationSeparate(e[4],e[5])):this._blendEq&&(this._blendEq=!1,n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD))}},i.prototype.setPolygonOffset=function(t,e){this.gl.polygonOffset(t,e)},i.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},i.prototype.updateCheck=function(t,e){var n=this.checks.indexOf(t);e&&n===-1?this.checks.push(t):!e&&n!==-1&&this.checks.splice(n,1)},i.checkBlendMode=function(t,e){t.setBlendMode(e.blendMode)},i.checkPolygonOffset=function(t,e){t.setPolygonOffset(1,e.polygonOffset)},i.prototype.destroy=function(){this.gl=null},i}(),xM=function(){function i(t){this.renderer=t,this.count=0,this.checkCount=0,this.maxIdle=dt.GC_MAX_IDLE,this.checkCountMax=dt.GC_MAX_CHECK_COUNT,this.mode=dt.GC_MODE}return i.prototype.postrender=function(){this.renderer.renderingToScreen&&(this.count++,this.mode!==Ra.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},i.prototype.run=function(){for(var t=this.renderer.texture,e=t.managedTextures,n=!1,r=0;r<e.length;r++){var s=e[r];!s.framebuffer&&this.count-s.touched>this.maxIdle&&(t.destroyTexture(s,!0),e[r]=null,n=!0)}if(n){for(var a=0,r=0;r<e.length;r++)e[r]!==null&&(e[a++]=e[r]);e.length=a}},i.prototype.unload=function(t){var e=this.renderer.texture,n=t._texture;n&&!n.framebuffer&&e.destroyTexture(n);for(var r=t.children.length-1;r>=0;r--)this.unload(t.children[r])},i.prototype.destroy=function(){this.renderer=null},i}();function EM(i){var t,e,n,r,s,a,o,h,l,u,c,f,d,m,_,p,v,y,g,T,E,b,w;return"WebGL2RenderingContext"in globalThis&&i instanceof globalThis.WebGL2RenderingContext?w=(t={},t[Mt.UNSIGNED_BYTE]=(e={},e[rt.RGBA]=i.RGBA8,e[rt.RGB]=i.RGB8,e[rt.RG]=i.RG8,e[rt.RED]=i.R8,e[rt.RGBA_INTEGER]=i.RGBA8UI,e[rt.RGB_INTEGER]=i.RGB8UI,e[rt.RG_INTEGER]=i.RG8UI,e[rt.RED_INTEGER]=i.R8UI,e[rt.ALPHA]=i.ALPHA,e[rt.LUMINANCE]=i.LUMINANCE,e[rt.LUMINANCE_ALPHA]=i.LUMINANCE_ALPHA,e),t[Mt.BYTE]=(n={},n[rt.RGBA]=i.RGBA8_SNORM,n[rt.RGB]=i.RGB8_SNORM,n[rt.RG]=i.RG8_SNORM,n[rt.RED]=i.R8_SNORM,n[rt.RGBA_INTEGER]=i.RGBA8I,n[rt.RGB_INTEGER]=i.RGB8I,n[rt.RG_INTEGER]=i.RG8I,n[rt.RED_INTEGER]=i.R8I,n),t[Mt.UNSIGNED_SHORT]=(r={},r[rt.RGBA_INTEGER]=i.RGBA16UI,r[rt.RGB_INTEGER]=i.RGB16UI,r[rt.RG_INTEGER]=i.RG16UI,r[rt.RED_INTEGER]=i.R16UI,r[rt.DEPTH_COMPONENT]=i.DEPTH_COMPONENT16,r),t[Mt.SHORT]=(s={},s[rt.RGBA_INTEGER]=i.RGBA16I,s[rt.RGB_INTEGER]=i.RGB16I,s[rt.RG_INTEGER]=i.RG16I,s[rt.RED_INTEGER]=i.R16I,s),t[Mt.UNSIGNED_INT]=(a={},a[rt.RGBA_INTEGER]=i.RGBA32UI,a[rt.RGB_INTEGER]=i.RGB32UI,a[rt.RG_INTEGER]=i.RG32UI,a[rt.RED_INTEGER]=i.R32UI,a[rt.DEPTH_COMPONENT]=i.DEPTH_COMPONENT24,a),t[Mt.INT]=(o={},o[rt.RGBA_INTEGER]=i.RGBA32I,o[rt.RGB_INTEGER]=i.RGB32I,o[rt.RG_INTEGER]=i.RG32I,o[rt.RED_INTEGER]=i.R32I,o),t[Mt.FLOAT]=(h={},h[rt.RGBA]=i.RGBA32F,h[rt.RGB]=i.RGB32F,h[rt.RG]=i.RG32F,h[rt.RED]=i.R32F,h[rt.DEPTH_COMPONENT]=i.DEPTH_COMPONENT32F,h),t[Mt.HALF_FLOAT]=(l={},l[rt.RGBA]=i.RGBA16F,l[rt.RGB]=i.RGB16F,l[rt.RG]=i.RG16F,l[rt.RED]=i.R16F,l),t[Mt.UNSIGNED_SHORT_5_6_5]=(u={},u[rt.RGB]=i.RGB565,u),t[Mt.UNSIGNED_SHORT_4_4_4_4]=(c={},c[rt.RGBA]=i.RGBA4,c),t[Mt.UNSIGNED_SHORT_5_5_5_1]=(f={},f[rt.RGBA]=i.RGB5_A1,f),t[Mt.UNSIGNED_INT_2_10_10_10_REV]=(d={},d[rt.RGBA]=i.RGB10_A2,d[rt.RGBA_INTEGER]=i.RGB10_A2UI,d),t[Mt.UNSIGNED_INT_10F_11F_11F_REV]=(m={},m[rt.RGB]=i.R11F_G11F_B10F,m),t[Mt.UNSIGNED_INT_5_9_9_9_REV]=(_={},_[rt.RGB]=i.RGB9_E5,_),t[Mt.UNSIGNED_INT_24_8]=(p={},p[rt.DEPTH_STENCIL]=i.DEPTH24_STENCIL8,p),t[Mt.FLOAT_32_UNSIGNED_INT_24_8_REV]=(v={},v[rt.DEPTH_STENCIL]=i.DEPTH32F_STENCIL8,v),t):w=(y={},y[Mt.UNSIGNED_BYTE]=(g={},g[rt.RGBA]=i.RGBA,g[rt.RGB]=i.RGB,g[rt.ALPHA]=i.ALPHA,g[rt.LUMINANCE]=i.LUMINANCE,g[rt.LUMINANCE_ALPHA]=i.LUMINANCE_ALPHA,g),y[Mt.UNSIGNED_SHORT_5_6_5]=(T={},T[rt.RGB]=i.RGB,T),y[Mt.UNSIGNED_SHORT_4_4_4_4]=(E={},E[rt.RGBA]=i.RGBA,E),y[Mt.UNSIGNED_SHORT_5_5_5_1]=(b={},b[rt.RGBA]=i.RGBA,b),y),w}var Qo=function(){function i(t){this.texture=t,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=Mt.UNSIGNED_BYTE,this.internalFormat=rt.RGBA,this.samplerType=0}return i}(),TM=function(){function i(t){this.renderer=t,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new jt,this.hasIntegerTextures=!1}return i.prototype.contextChange=function(){var t=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=EM(t);var e=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=e;for(var n=0;n<e;n++)this.boundTextures[n]=null;this.emptyTextures={};var r=new Qo(t.createTexture());t.bindTexture(t.TEXTURE_2D,r.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[t.TEXTURE_2D]=r,this.emptyTextures[t.TEXTURE_CUBE_MAP]=new Qo(t.createTexture()),t.bindTexture(t.TEXTURE_CUBE_MAP,this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);for(var n=0;n<6;n++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,null);t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR);for(var n=0;n<this.boundTextures.length;n++)this.bind(null,n)},i.prototype.bind=function(t,e){e===void 0&&(e=0);var n=this.gl;if(t=t==null?void 0:t.castToBaseTexture(),t&&t.valid&&!t.parentTextureArray){t.touched=this.renderer.textureGC.count;var r=t._glTextures[this.CONTEXT_UID]||this.initTexture(t);this.boundTextures[e]!==t&&(this.currentLocation!==e&&(this.currentLocation=e,n.activeTexture(n.TEXTURE0+e)),n.bindTexture(t.target,r.texture)),r.dirtyId!==t.dirtyId?(this.currentLocation!==e&&(this.currentLocation=e,n.activeTexture(n.TEXTURE0+e)),this.updateTexture(t)):r.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(t),this.boundTextures[e]=t}else this.currentLocation!==e&&(this.currentLocation=e,n.activeTexture(n.TEXTURE0+e)),n.bindTexture(n.TEXTURE_2D,this.emptyTextures[n.TEXTURE_2D].texture),this.boundTextures[e]=null},i.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var t=0;t<this.boundTextures.length;t++)this.boundTextures[t]=this.unknownTexture},i.prototype.unbind=function(t){var e=this,n=e.gl,r=e.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var s=0;s<r.length;s++)r[s]===this.unknownTexture&&this.bind(null,s)}for(var s=0;s<r.length;s++)r[s]===t&&(this.currentLocation!==s&&(n.activeTexture(n.TEXTURE0+s),this.currentLocation=s),n.bindTexture(t.target,this.emptyTextures[t.target].texture),r[s]=null)},i.prototype.ensureSamplerType=function(t){var e=this,n=e.boundTextures,r=e.hasIntegerTextures,s=e.CONTEXT_UID;if(r)for(var a=t-1;a>=0;--a){var o=n[a];if(o){var h=o._glTextures[s];h.samplerType!==Aa.FLOAT&&this.renderer.texture.unbind(o)}}},i.prototype.initTexture=function(t){var e=new Qo(this.gl.createTexture());return e.dirtyId=-1,t._glTextures[this.CONTEXT_UID]=e,this.managedTextures.push(t),t.on("dispose",this.destroyTexture,this),e},i.prototype.initTextureType=function(t,e){var n,r;e.internalFormat=(r=(n=this.internalFormats[t.type])===null||n===void 0?void 0:n[t.format])!==null&&r!==void 0?r:t.format,this.webGLVersion===2&&t.type===Mt.HALF_FLOAT?e.type=this.gl.HALF_FLOAT:e.type=t.type},i.prototype.updateTexture=function(t){var e=t._glTextures[this.CONTEXT_UID];if(e){var n=this.renderer;if(this.initTextureType(t,e),t.resource&&t.resource.upload(n,t,e))e.samplerType!==Aa.FLOAT&&(this.hasIntegerTextures=!0);else{var r=t.realWidth,s=t.realHeight,a=n.gl;(e.width!==r||e.height!==s||e.dirtyId<0)&&(e.width=r,e.height=s,a.texImage2D(t.target,0,e.internalFormat,r,s,0,t.format,e.type,null))}t.dirtyStyleId!==e.dirtyStyleId&&this.updateTextureStyle(t),e.dirtyId=t.dirtyId}},i.prototype.destroyTexture=function(t,e){var n=this.gl;if(t=t.castToBaseTexture(),t._glTextures[this.CONTEXT_UID]&&(this.unbind(t),n.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),t.off("dispose",this.destroyTexture,this),delete t._glTextures[this.CONTEXT_UID],!e)){var r=this.managedTextures.indexOf(t);r!==-1&&xr(this.managedTextures,r,1)}},i.prototype.updateTextureStyle=function(t){var e=t._glTextures[this.CONTEXT_UID];e&&((t.mipmap===dn.POW2||this.webGLVersion!==2)&&!t.isPowerOfTwo?e.mipmap=!1:e.mipmap=t.mipmap>=1,this.webGLVersion!==2&&!t.isPowerOfTwo?e.wrapMode=Tn.CLAMP:e.wrapMode=t.wrapMode,t.resource&&t.resource.style(this.renderer,t,e)||this.setStyle(t,e),e.dirtyStyleId=t.dirtyStyleId)},i.prototype.setStyle=function(t,e){var n=this.gl;if(e.mipmap&&t.mipmap!==dn.ON_MANUAL&&n.generateMipmap(t.target),n.texParameteri(t.target,n.TEXTURE_WRAP_S,e.wrapMode),n.texParameteri(t.target,n.TEXTURE_WRAP_T,e.wrapMode),e.mipmap){n.texParameteri(t.target,n.TEXTURE_MIN_FILTER,t.scaleMode===yn.LINEAR?n.LINEAR_MIPMAP_LINEAR:n.NEAREST_MIPMAP_NEAREST);var r=this.renderer.context.extensions.anisotropicFiltering;if(r&&t.anisotropicLevel>0&&t.scaleMode===yn.LINEAR){var s=Math.min(t.anisotropicLevel,n.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));n.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY_EXT,s)}}else n.texParameteri(t.target,n.TEXTURE_MIN_FILTER,t.scaleMode===yn.LINEAR?n.LINEAR:n.NEAREST);n.texParameteri(t.target,n.TEXTURE_MAG_FILTER,t.scaleMode===yn.LINEAR?n.LINEAR:n.NEAREST)},i.prototype.destroy=function(){this.renderer=null},i}(),th=new Se,bM=function(i){ee(t,i);function t(e,n){e===void 0&&(e=es.UNKNOWN);var r=i.call(this)||this;return n=Object.assign({},dt.RENDER_OPTIONS,n),r.options=n,r.type=e,r.screen=new qt(0,0,n.width,n.height),r.view=n.view||dt.ADAPTER.createCanvas(),r.resolution=n.resolution||dt.RESOLUTION,r.useContextAlpha=n.useContextAlpha,r.autoDensity=!!n.autoDensity,r.preserveDrawingBuffer=n.preserveDrawingBuffer,r.clearBeforeRender=n.clearBeforeRender,r._backgroundColor=0,r._backgroundColorRgba=[0,0,0,1],r._backgroundColorString="#000000",r.backgroundColor=n.backgroundColor||r._backgroundColor,r.backgroundAlpha=n.backgroundAlpha,n.transparent!==void 0&&(fn("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),r.useContextAlpha=n.transparent,r.backgroundAlpha=n.transparent?0:1),r._lastObjectRendered=null,r.plugins={},r}return t.prototype.initPlugins=function(e){for(var n in e)this.plugins[n]=new e[n](this)},Object.defineProperty(t.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),t.prototype.resize=function(e,n){this.view.width=Math.round(e*this.resolution),this.view.height=Math.round(n*this.resolution);var r=this.view.width/this.resolution,s=this.view.height/this.resolution;this.screen.width=r,this.screen.height=s,this.autoDensity&&(this.view.style.width=r+"px",this.view.style.height=s+"px"),this.emit("resize",r,s)},t.prototype.generateTexture=function(e,n,r,s){n===void 0&&(n={}),typeof n=="number"&&(fn("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),n={scaleMode:n,resolution:r,region:s});var a=n.region,o=sS(n,["region"]);s=a||e.getLocalBounds(null,!0),s.width===0&&(s.width=1),s.height===0&&(s.height=1);var h=zi.create(Gh({width:s.width,height:s.height},o));return th.tx=-s.x,th.ty=-s.y,this.render(e,{renderTexture:h,clear:!1,transform:th,skipUpdateTransform:!!e.parent}),h},t.prototype.destroy=function(e){for(var n in this.plugins)this.plugins[n].destroy(),this.plugins[n]=null;e&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var r=this;r.plugins=null,r.type=es.UNKNOWN,r.view=null,r.screen=null,r._tempDisplayObjectParent=null,r.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(t.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(e){this._backgroundColor=e,this._backgroundColorString=Ed(e),wr(e,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(e){this._backgroundColorRgba[3]=e},enumerable:!1,configurable:!0}),t}(_s),SM=function(){function i(t){this.buffer=t||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return i}(),MM=function(){function i(t){this.renderer=t,this.managedBuffers={},this.boundBufferBases={}}return i.prototype.destroy=function(){this.renderer=null},i.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},i.prototype.bind=function(t){var e=this,n=e.gl,r=e.CONTEXT_UID,s=t._glBuffers[r]||this.createGLBuffer(t);n.bindBuffer(t.type,s.buffer)},i.prototype.bindBufferBase=function(t,e){var n=this,r=n.gl,s=n.CONTEXT_UID;if(this.boundBufferBases[e]!==t){var a=t._glBuffers[s]||this.createGLBuffer(t);this.boundBufferBases[e]=t,r.bindBufferBase(r.UNIFORM_BUFFER,e,a.buffer)}},i.prototype.bindBufferRange=function(t,e,n){var r=this,s=r.gl,a=r.CONTEXT_UID;n=n||0;var o=t._glBuffers[a]||this.createGLBuffer(t);s.bindBufferRange(s.UNIFORM_BUFFER,e||0,o.buffer,n*256,256)},i.prototype.update=function(t){var e=this,n=e.gl,r=e.CONTEXT_UID,s=t._glBuffers[r];if(t._updateID!==s.updateID)if(s.updateID=t._updateID,n.bindBuffer(t.type,s.buffer),s.byteLength>=t.data.byteLength)n.bufferSubData(t.type,0,t.data);else{var a=t.static?n.STATIC_DRAW:n.DYNAMIC_DRAW;s.byteLength=t.data.byteLength,n.bufferData(t.type,t.data,a)}},i.prototype.dispose=function(t,e){if(this.managedBuffers[t.id]){delete this.managedBuffers[t.id];var n=t._glBuffers[this.CONTEXT_UID],r=this.gl;t.disposeRunner.remove(this),n&&(e||r.deleteBuffer(n.buffer),delete t._glBuffers[this.CONTEXT_UID])}},i.prototype.disposeAll=function(t){for(var e=Object.keys(this.managedBuffers),n=0;n<e.length;n++)this.dispose(this.managedBuffers[e[n]],t)},i.prototype.createGLBuffer=function(t){var e=this,n=e.CONTEXT_UID,r=e.gl;return t._glBuffers[n]=new SM(r.createBuffer()),this.managedBuffers[t.id]=t,t.disposeRunner.add(this),t._glBuffers[n]},i}(),zd=function(i){ee(t,i);function t(e){var n=i.call(this,es.WEBGL,e)||this;return e=n.options,n.gl=null,n.CONTEXT_UID=0,n.runners={destroy:new Ie("destroy"),contextChange:new Ie("contextChange"),reset:new Ie("reset"),update:new Ie("update"),postrender:new Ie("postrender"),prerender:new Ie("prerender"),resize:new Ie("resize")},n.runners.contextChange.add(n),n.globalUniforms=new Fi({projectionMatrix:new Se},!0),n.addSystem(JS,"mask").addSystem(MS,"context").addSystem(yM,"state").addSystem(cM,"shader").addSystem(TM,"texture").addSystem(MM,"buffer").addSystem(CS,"geometry").addSystem(RS,"framebuffer").addSystem(KS,"scissor").addSystem(ZS,"stencil").addSystem(QS,"projection").addSystem(xM,"textureGC").addSystem(bS,"filter").addSystem(tM,"renderTexture").addSystem(SS,"batch"),n.initPlugins(t.__plugins),n.multisample=void 0,e.context?n.context.initFromContext(e.context):n.context.initFromOptions({alpha:!!n.useContextAlpha,antialias:e.antialias,premultipliedAlpha:n.useContextAlpha&&n.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:e.preserveDrawingBuffer,powerPreference:n.options.powerPreference}),n.renderingToScreen=!0,nE(n.context.webGLVersion===2?"WebGL 2":"WebGL 1"),n.resize(n.options.width,n.options.height),n}return t.create=function(e){if(iE())return new t(e);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},t.prototype.contextChange=function(){var e=this.gl,n;if(this.context.webGLVersion===1){var r=e.getParameter(e.FRAMEBUFFER_BINDING);e.bindFramebuffer(e.FRAMEBUFFER,null),n=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.FRAMEBUFFER,r)}else{var r=e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),n=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,r)}n>=re.HIGH?this.multisample=re.HIGH:n>=re.MEDIUM?this.multisample=re.MEDIUM:n>=re.LOW?this.multisample=re.LOW:this.multisample=re.NONE},t.prototype.addSystem=function(e,n){var r=new e(this);if(this[n])throw new Error('Whoops! The name "'+n+'" is already in use');this[n]=r;for(var s in this.runners)this.runners[s].add(r);return this},t.prototype.render=function(e,n){var r,s,a,o;if(n&&(n instanceof zi?(fn("6.0.0","Renderer#render arguments changed, use options instead."),r=n,s=arguments[2],a=arguments[3],o=arguments[4]):(r=n.renderTexture,s=n.clear,a=n.transform,o=n.skipUpdateTransform)),this.renderingToScreen=!r,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=a,!this.context.isLost){if(r||(this._lastObjectRendered=e),!o){var h=e.enableTempParent();e.updateTransform(),e.disableTempParent(h)}this.renderTexture.bind(r),this.batch.currentRenderer.start(),(s!==void 0?s:this.clearBeforeRender)&&this.renderTexture.clear(),e.render(this),this.batch.currentRenderer.flush(),r&&r.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},t.prototype.generateTexture=function(e,n,r,s){n===void 0&&(n={});var a=i.prototype.generateTexture.call(this,e,n,r,s);return this.framebuffer.blit(),a},t.prototype.resize=function(e,n){i.prototype.resize.call(this,e,n),this.runners.resize.emit(this.screen.height,this.screen.width)},t.prototype.reset=function(){return this.runners.reset.emit(),this},t.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},t.prototype.destroy=function(e){this.runners.destroy.emit();for(var n in this.runners)this.runners[n].destroy();i.prototype.destroy.call(this,e),this.gl=null},Object.defineProperty(t.prototype,"extract",{get:function(){return fn("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),t.registerPlugin=function(e,n){fn("6.5.0","Renderer.registerPlugin() has been deprecated, please use extensions.add() instead."),qn.add({name:e,type:Qt.RendererPlugin,ref:n})},t.__plugins={},t}(bM);qn.handleByMap(Qt.RendererPlugin,zd.__plugins);function Vd(i){return zd.create(i)}var wM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,AM=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,RM=wM,Wd=AM,Hh=function(){function i(){this.texArray=null,this.blend=0,this.type=un.TRIANGLES,this.start=0,this.size=0,this.data=null}return i}(),zh=function(){function i(){this.elements=[],this.ids=[],this.count=0}return i.prototype.clear=function(){for(var t=0;t<this.count;t++)this.elements[t]=null;this.count=0},i}(),Vh=function(){function i(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(i.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),i.prototype.view=function(t){return this[t+"View"]},i.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},i.sizeOf=function(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(t+" isn't a valid view type")}},i}(),CM=function(i){ee(t,i);function t(e){var n=i.call(this,e)||this;return n.shaderGenerator=null,n.geometryClass=null,n.vertexSize=null,n.state=Wi.for2d(),n.size=dt.SPRITE_BATCH_SIZE*4,n._vertexCount=0,n._indexCount=0,n._bufferedElements=[],n._bufferedTextures=[],n._bufferSize=0,n._shader=null,n._packedGeometries=[],n._packedGeometryPoolSize=2,n._flushId=0,n._aBuffers={},n._iBuffers={},n.MAX_TEXTURES=1,n.renderer.on("prerender",n.onPrerender,n),e.runners.contextChange.add(n),n._dcIndex=0,n._aIndex=0,n._iIndex=0,n._attributeBuffer=null,n._indexBuffer=null,n._tempBoundTextures=[],n}return t.prototype.contextChange=function(){var e=this.renderer.gl;dt.PREFER_ENV===Yn.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),dt.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=kS(this.MAX_TEXTURES,e)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var n=0;n<this._packedGeometryPoolSize;n++)this._packedGeometries[n]=new this.geometryClass;this.initFlushBuffers()},t.prototype.initFlushBuffers=function(){for(var e=t._drawCallPool,n=t._textureArrayPool,r=this.size/4,s=Math.floor(r/this.MAX_TEXTURES)+1;e.length<r;)e.push(new Hh);for(;n.length<s;)n.push(new zh);for(var a=0;a<this.MAX_TEXTURES;a++)this._tempBoundTextures[a]=null},t.prototype.onPrerender=function(){this._flushId=0},t.prototype.render=function(e){e._texture.valid&&(this._vertexCount+e.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=e.vertexData.length/2,this._indexCount+=e.indices.length,this._bufferedTextures[this._bufferSize]=e._texture.baseTexture,this._bufferedElements[this._bufferSize++]=e)},t.prototype.buildTexturesAndDrawCalls=function(){var e=this,n=e._bufferedTextures,r=e.MAX_TEXTURES,s=t._textureArrayPool,a=this.renderer.batch,o=this._tempBoundTextures,h=this.renderer.textureGC.count,l=++jt._globalBatch,u=0,c=s[0],f=0;a.copyBoundTextures(o,r);for(var d=0;d<this._bufferSize;++d){var m=n[d];n[d]=null,m._batchEnabled!==l&&(c.count>=r&&(a.boundArray(c,o,l,r),this.buildDrawCalls(c,f,d),f=d,c=s[++u],++l),m._batchEnabled=l,m.touched=h,c.elements[c.count++]=m)}c.count>0&&(a.boundArray(c,o,l,r),this.buildDrawCalls(c,f,this._bufferSize),++u,++l);for(var d=0;d<o.length;d++)o[d]=null;jt._globalBatch=l},t.prototype.buildDrawCalls=function(e,n,r){var s=this,a=s._bufferedElements,o=s._attributeBuffer,h=s._indexBuffer,l=s.vertexSize,u=t._drawCallPool,c=this._dcIndex,f=this._aIndex,d=this._iIndex,m=u[c];m.start=this._iIndex,m.texArray=e;for(var _=n;_<r;++_){var p=a[_],v=p._texture.baseTexture,y=bd[v.alphaMode?1:0][p.blendMode];a[_]=null,n<_&&m.blend!==y&&(m.size=d-m.start,n=_,m=u[++c],m.texArray=e,m.start=d),this.packInterleavedGeometry(p,o,h,f,d),f+=p.vertexData.length/2*l,d+=p.indices.length,m.blend=y}n<r&&(m.size=d-m.start,++c),this._dcIndex=c,this._aIndex=f,this._iIndex=d},t.prototype.bindAndClearTexArray=function(e){for(var n=this.renderer.texture,r=0;r<e.count;r++)n.bind(e.elements[r],e.ids[r]),e.elements[r]=null;e.count=0},t.prototype.updateGeometry=function(){var e=this,n=e._packedGeometries,r=e._attributeBuffer,s=e._indexBuffer;dt.CAN_UPLOAD_SAME_BUFFER?(n[this._flushId]._buffer.update(r.rawBinaryData),n[this._flushId]._indexBuffer.update(s),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,n[this._flushId]=new this.geometryClass),n[this._flushId]._buffer.update(r.rawBinaryData),n[this._flushId]._indexBuffer.update(s),this.renderer.geometry.bind(n[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},t.prototype.drawBatches=function(){for(var e=this._dcIndex,n=this.renderer,r=n.gl,s=n.state,a=t._drawCallPool,o=null,h=0;h<e;h++){var l=a[h],u=l.texArray,c=l.type,f=l.size,d=l.start,m=l.blend;o!==u&&(o=u,this.bindAndClearTexArray(u)),this.state.blendMode=m,s.set(this.state),r.drawElements(c,f,r.UNSIGNED_SHORT,d*2)}},t.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},t.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),dt.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},t.prototype.stop=function(){this.flush()},t.prototype.destroy=function(){for(var e=0;e<this._packedGeometryPoolSize;e++)this._packedGeometries[e]&&this._packedGeometries[e].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),i.prototype.destroy.call(this)},t.prototype.getAttributeBuffer=function(e){var n=Pa(Math.ceil(e/8)),r=Cc(n),s=n*8;this._aBuffers.length<=r&&(this._iBuffers.length=r+1);var a=this._aBuffers[s];return a||(this._aBuffers[s]=a=new Vh(s*this.vertexSize*4)),a},t.prototype.getIndexBuffer=function(e){var n=Pa(Math.ceil(e/12)),r=Cc(n),s=n*12;this._iBuffers.length<=r&&(this._iBuffers.length=r+1);var a=this._iBuffers[r];return a||(this._iBuffers[r]=a=new Uint16Array(s)),a},t.prototype.packInterleavedGeometry=function(e,n,r,s,a){for(var o=n.uint32View,h=n.float32View,l=s/this.vertexSize,u=e.uvs,c=e.indices,f=e.vertexData,d=e._texture.baseTexture._batchLocation,m=Math.min(e.worldAlpha,1),_=m<1&&e._texture.baseTexture.alphaMode?Cl(e._tintRGB,m):e._tintRGB+(m*255<<24),p=0;p<f.length;p+=2)h[s++]=f[p],h[s++]=f[p+1],h[s++]=u[p],h[s++]=u[p+1],o[s++]=_,h[s++]=d;for(var p=0;p<c.length;p++)r[a++]=l+c[p]},t._drawCallPool=[],t._textureArrayPool=[],t}($a),PM=function(){function i(t,e){if(this.vertexSrc=t,this.fragTemplate=e,this.programCache={},this.defaultGroupCache={},e.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(e.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return i.prototype.generateShader=function(t){if(!this.programCache[t]){for(var e=new Int32Array(t),n=0;n<t;n++)e[n]=n;this.defaultGroupCache[t]=Fi.from({uSamplers:e},!0);var r=this.fragTemplate;r=r.replace(/%count%/gi,""+t),r=r.replace(/%forloop%/gi,this.generateSampleSrc(t)),this.programCache[t]=new xs(this.vertexSrc,r)}var s={tint:new Float32Array([1,1,1,1]),translationMatrix:new Se,default:this.defaultGroupCache[t]};return new oi(this.programCache[t],s)},i.prototype.generateSampleSrc=function(t){var e="";e+=`
`,e+=`
`;for(var n=0;n<t;n++)n>0&&(e+=`
else `),n<t-1&&(e+="if(vTextureId < "+n+".5)"),e+=`
{`,e+=`
	color = texture2D(uSamplers[`+n+"], vTextureCoord);",e+=`
}`;return e+=`
`,e+=`
`,e},i}(),Xd=function(i){ee(t,i);function t(e){e===void 0&&(e=!1);var n=i.call(this)||this;return n._buffer=new Ee(null,e,!1),n._indexBuffer=new Ee(null,e,!0),n.addAttribute("aVertexPosition",n._buffer,2,!1,Mt.FLOAT).addAttribute("aTextureCoord",n._buffer,2,!1,Mt.FLOAT).addAttribute("aColor",n._buffer,4,!0,Mt.UNSIGNED_BYTE).addAttribute("aTextureId",n._buffer,1,!0,Mt.FLOAT).addIndex(n._indexBuffer),n}return t}(ys),Xc=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`,Yc=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,IM=function(){function i(){}return i.create=function(t){var e=Object.assign({vertex:Xc,fragment:Yc,geometryClass:Xd,vertexSize:6},t),n=e.vertex,r=e.fragment,s=e.vertexSize,a=e.geometryClass;return function(o){ee(h,o);function h(l){var u=o.call(this,l)||this;return u.shaderGenerator=new PM(n,r),u.geometryClass=a,u.vertexSize=s,u}return h}(CM)},Object.defineProperty(i,"defaultVertexSrc",{get:function(){return Xc},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultFragmentTemplate",{get:function(){return Yc},enumerable:!1,configurable:!0}),i}(),Yd=IM.create();Object.assign(Yd,{extension:{name:"batch",type:Qt.RendererPlugin}});/*!
 * @pixi/accessibility - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var LM={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};fe.mixin(LM);var OM=9,sa=100,DM=0,UM=0,jc=2,qc=1,NM=-1e3,FM=-1e3,BM=2,GM=function(){function i(t){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(xn.tablet||xn.phone)&&this.createTouchHook();var e=document.createElement("div");e.style.width=sa+"px",e.style.height=sa+"px",e.style.position="absolute",e.style.top=DM+"px",e.style.left=UM+"px",e.style.zIndex=jc.toString(),this.div=e,this.renderer=t,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(i.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),i.prototype.createTouchHook=function(){var t=this,e=document.createElement("button");e.style.width=qc+"px",e.style.height=qc+"px",e.style.position="absolute",e.style.top=NM+"px",e.style.left=FM+"px",e.style.zIndex=BM.toString(),e.style.backgroundColor="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",function(){t._isMobileAccessibility=!0,t.activate(),t.destroyTouchHook()}),document.body.appendChild(e),this._hookDiv=e},i.prototype.destroyTouchHook=function(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)},i.prototype.activate=function(){var t;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(t=this.renderer.view.parentNode)===null||t===void 0||t.appendChild(this.div))},i.prototype.deactivate=function(){var t;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(t=this.div.parentNode)===null||t===void 0||t.removeChild(this.div))},i.prototype.updateAccessibleObjects=function(t){if(!(!t.visible||!t.accessibleChildren)){t.accessible&&t.interactive&&(t._accessibleActive||this.addChild(t),t.renderId=this.renderId);var e=t.children;if(e)for(var n=0;n<e.length;n++)this.updateAccessibleObjects(e[n])}},i.prototype.update=function(){var t=performance.now();if(!(xn.android.device&&t<this.androidUpdateCount)&&(this.androidUpdateCount=t+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var e=this.renderer.view.getBoundingClientRect(),n=e.left,r=e.top,s=e.width,a=e.height,o=this.renderer,h=o.width,l=o.height,u=o.resolution,c=s/h*u,f=a/l*u,d=this.div;d.style.left=n+"px",d.style.top=r+"px",d.style.width=h+"px",d.style.height=l+"px";for(var m=0;m<this.children.length;m++){var _=this.children[m];if(_.renderId!==this.renderId)_._accessibleActive=!1,xr(this.children,m,1),this.div.removeChild(_._accessibleDiv),this.pool.push(_._accessibleDiv),_._accessibleDiv=null,m--;else{d=_._accessibleDiv;var p=_.hitArea,v=_.worldTransform;_.hitArea?(d.style.left=(v.tx+p.x*v.a)*c+"px",d.style.top=(v.ty+p.y*v.d)*f+"px",d.style.width=p.width*v.a*c+"px",d.style.height=p.height*v.d*f+"px"):(p=_.getBounds(),this.capHitArea(p),d.style.left=p.x*c+"px",d.style.top=p.y*f+"px",d.style.width=p.width*c+"px",d.style.height=p.height*f+"px",d.title!==_.accessibleTitle&&_.accessibleTitle!==null&&(d.title=_.accessibleTitle),d.getAttribute("aria-label")!==_.accessibleHint&&_.accessibleHint!==null&&d.setAttribute("aria-label",_.accessibleHint)),(_.accessibleTitle!==d.title||_.tabIndex!==d.tabIndex)&&(d.title=_.accessibleTitle,d.tabIndex=_.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}},i.prototype.updateDebugHTML=function(t){t.innerHTML="type: "+t.type+"</br> title : "+t.title+"</br> tabIndex: "+t.tabIndex},i.prototype.capHitArea=function(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0);var e=this.renderer,n=e.width,r=e.height;t.x+t.width>n&&(t.width=n-t.x),t.y+t.height>r&&(t.height=r-t.y)},i.prototype.addChild=function(t){var e=this.pool.pop();e||(e=document.createElement("button"),e.style.width=sa+"px",e.style.height=sa+"px",e.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",e.style.position="absolute",e.style.zIndex=jc.toString(),e.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?e.setAttribute("aria-live","off"):e.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?e.setAttribute("aria-relevant","additions"):e.setAttribute("aria-relevant","text"),e.addEventListener("click",this._onClick.bind(this)),e.addEventListener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusOut.bind(this))),e.style.pointerEvents=t.accessiblePointerEvents,e.type=t.accessibleType,t.accessibleTitle&&t.accessibleTitle!==null?e.title=t.accessibleTitle:(!t.accessibleHint||t.accessibleHint===null)&&(e.title="displayObject "+t.tabIndex),t.accessibleHint&&t.accessibleHint!==null&&e.setAttribute("aria-label",t.accessibleHint),this.debug&&this.updateDebugHTML(e),t._accessibleActive=!0,t._accessibleDiv=e,e.displayObject=t,this.children.push(t),this.div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIndex=t.tabIndex},i.prototype._onClick=function(t){var e=this.renderer.plugins.interaction,n=t.target.displayObject,r=e.eventData;e.dispatchEvent(n,"click",r),e.dispatchEvent(n,"pointertap",r),e.dispatchEvent(n,"tap",r)},i.prototype._onFocus=function(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","assertive");var e=this.renderer.plugins.interaction,n=t.target.displayObject,r=e.eventData;e.dispatchEvent(n,"mouseover",r)},i.prototype._onFocusOut=function(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","polite");var e=this.renderer.plugins.interaction,n=t.target.displayObject,r=e.eventData;e.dispatchEvent(n,"mouseout",r)},i.prototype._onKeyDown=function(t){t.keyCode===OM&&this.activate()},i.prototype._onMouseMove=function(t){t.movementX===0&&t.movementY===0||this.deactivate()},i.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},i.extension={name:"accessibility",type:[Qt.RendererPlugin,Qt.CanvasRendererPlugin]},i}();/*!
 * @pixi/interaction - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var $c=function(){function i(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new ie,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(i.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),i.prototype.getLocalPosition=function(t,e,n){return t.worldTransform.applyInverse(n||this.global,e)},i.prototype.copyEvent=function(t){"isPrimary"in t&&t.isPrimary&&(this.isPrimary=!0),this.button="button"in t&&t.button;var e="buttons"in t&&t.buttons;this.buttons=Number.isInteger(e)?e:"which"in t&&t.which,this.width="width"in t&&t.width,this.height="height"in t&&t.height,this.tiltX="tiltX"in t&&t.tiltX,this.tiltY="tiltY"in t&&t.tiltY,this.pointerType="pointerType"in t&&t.pointerType,this.pressure="pressure"in t&&t.pressure,this.rotationAngle="rotationAngle"in t&&t.rotationAngle,this.twist="twist"in t&&t.twist||0,this.tangentialPressure="tangentialPressure"in t&&t.tangentialPressure||0},i.prototype.reset=function(){this.isPrimary=!1},i}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Wh=function(i,t){return Wh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Wh(i,t)};function kM(i,t){Wh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var HM=function(){function i(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return i.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},i.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},i}(),eh=function(){function i(t){this._pointerId=t,this._flags=i.FLAGS.NONE}return i.prototype._doSet=function(t,e){e?this._flags=this._flags|t:this._flags=this._flags&~t},Object.defineProperty(i.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"flags",{get:function(){return this._flags},set:function(t){this._flags=t},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"none",{get:function(){return this._flags===i.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"over",{get:function(){return(this._flags&i.FLAGS.OVER)!==0},set:function(t){this._doSet(i.FLAGS.OVER,t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rightDown",{get:function(){return(this._flags&i.FLAGS.RIGHT_DOWN)!==0},set:function(t){this._doSet(i.FLAGS.RIGHT_DOWN,t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"leftDown",{get:function(){return(this._flags&i.FLAGS.LEFT_DOWN)!==0},set:function(t){this._doSet(i.FLAGS.LEFT_DOWN,t)},enumerable:!1,configurable:!0}),i.FLAGS=Object.freeze({NONE:0,OVER:1,LEFT_DOWN:2,RIGHT_DOWN:4}),i}(),zM=function(){function i(){this._tempPoint=new ie}return i.prototype.recursiveFindHit=function(t,e,n,r,s){var a;if(!e||!e.visible)return!1;var o=t.data.global;s=e.interactive||s;var h=!1,l=s,u=!0;if(e.hitArea)r&&(e.worldTransform.applyInverse(o,this._tempPoint),e.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?h=!0:(r=!1,u=!1)),l=!1;else if(e._mask&&r){var c=e._mask.isMaskData?e._mask.maskObject:e._mask;c&&!(!((a=c.containsPoint)===null||a===void 0)&&a.call(c,o))&&(r=!1)}if(u&&e.interactiveChildren&&e.children)for(var f=e.children,d=f.length-1;d>=0;d--){var m=f[d],_=this.recursiveFindHit(t,m,n,r,l);if(_){if(!m.parent)continue;l=!1,_&&(t.target&&(r=!1),h=!0)}}return s&&(r&&!t.target&&!e.hitArea&&e.containsPoint&&e.containsPoint(o)&&(h=!0),e.interactive&&(h&&!t.target&&(t.target=e),n&&n(t,e,!!h))),h},i.prototype.findHit=function(t,e,n,r){this.recursiveFindHit(t,e,n,r,!1)},i}(),VM={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(i){i?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};fe.mixin(VM);var aa=1,oa={target:null,data:{global:null}},WM=function(i){kM(t,i);function t(e,n){var r=i.call(this)||this;return n=n||{},r.renderer=e,r.autoPreventDefault=n.autoPreventDefault!==void 0?n.autoPreventDefault:!0,r.interactionFrequency=n.interactionFrequency||10,r.mouse=new $c,r.mouse.identifier=aa,r.mouse.global.set(-999999),r.activeInteractionData={},r.activeInteractionData[aa]=r.mouse,r.interactionDataPool=[],r.eventData=new HM,r.interactionDOMElement=null,r.moveWhenInside=!1,r.eventsAdded=!1,r.tickerAdded=!1,r.mouseOverRenderer=!("PointerEvent"in globalThis),r.supportsTouchEvents="ontouchstart"in globalThis,r.supportsPointerEvents=!!globalThis.PointerEvent,r.onPointerUp=r.onPointerUp.bind(r),r.processPointerUp=r.processPointerUp.bind(r),r.onPointerCancel=r.onPointerCancel.bind(r),r.processPointerCancel=r.processPointerCancel.bind(r),r.onPointerDown=r.onPointerDown.bind(r),r.processPointerDown=r.processPointerDown.bind(r),r.onPointerMove=r.onPointerMove.bind(r),r.processPointerMove=r.processPointerMove.bind(r),r.onPointerOut=r.onPointerOut.bind(r),r.processPointerOverOut=r.processPointerOverOut.bind(r),r.onPointerOver=r.onPointerOver.bind(r),r.cursorStyles={default:"inherit",pointer:"pointer"},r.currentCursorMode=null,r.cursor=null,r.resolution=1,r.delayedEvents=[],r.search=new zM,r._tempDisplayObject=new Cd,r._eventListenerOptions={capture:!0,passive:!1},r._useSystemTicker=n.useSystemTicker!==void 0?n.useSystemTicker:!0,r.setTargetElement(r.renderer.view,r.renderer.resolution),r}return Object.defineProperty(t.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(e){this._useSystemTicker=e,e?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),t.prototype.hitTest=function(e,n){return oa.target=null,oa.data.global=e,n||(n=this.lastObjectRendered),this.processInteractive(oa,n,null,!0),oa.target},t.prototype.setTargetElement=function(e,n){n===void 0&&(n=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=e,this.resolution=n,this.addEvents(),this.addTickerListener()},t.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(Oe.system.add(this.tickerUpdate,this,jn.INTERACTION),this.tickerAdded=!0)},t.prototype.removeTickerListener=function(){this.tickerAdded&&(Oe.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},t.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var e=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(e.msContentZooming="none",e.msTouchAction="none"):this.supportsPointerEvents&&(e.touchAction="none"),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},t.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var e=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(e.msContentZooming="",e.msTouchAction=""):this.supportsPointerEvents&&(e.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},t.prototype.tickerUpdate=function(e){this._deltaTime+=e,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},t.prototype.update=function(){if(this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var e in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(e)){var n=this.activeInteractionData[e];if(n.originalEvent&&n.pointerType!=="touch"){var r=this.configureInteractionEventForDOMEvent(this.eventData,n.originalEvent,n);this.processInteractive(r,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},t.prototype.setCursorMode=function(e){e=e||"default";var n=!0;if(globalThis.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(n=!1),this.currentCursorMode!==e){this.currentCursorMode=e;var r=this.cursorStyles[e];if(r)switch(typeof r){case"string":n&&(this.interactionDOMElement.style.cursor=r);break;case"function":r(e);break;case"object":n&&Object.assign(this.interactionDOMElement.style,r);break}else n&&typeof e=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,e)&&(this.interactionDOMElement.style.cursor=e)}},t.prototype.dispatchEvent=function(e,n,r){(!r.stopPropagationHint||e===r.stopsPropagatingAt)&&(r.currentTarget=e,r.type=n,e.emit(n,r),e[n]&&e[n](r))},t.prototype.delayDispatchEvent=function(e,n,r){this.delayedEvents.push({displayObject:e,eventString:n,eventData:r})},t.prototype.mapPositionToPoint=function(e,n,r){var s;this.interactionDOMElement.parentElement?s=this.interactionDOMElement.getBoundingClientRect():s={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var a=1/this.resolution;e.x=(n-s.left)*(this.interactionDOMElement.width/s.width)*a,e.y=(r-s.top)*(this.interactionDOMElement.height/s.height)*a},t.prototype.processInteractive=function(e,n,r,s){var a=this.search.findHit(e,n,r,s),o=this.delayedEvents;if(!o.length)return a;e.stopPropagationHint=!1;var h=o.length;this.delayedEvents=[];for(var l=0;l<h;l++){var u=o[l],c=u.displayObject,f=u.eventString,d=u.eventData;d.stopsPropagatingAt===c&&(d.stopPropagationHint=!0),this.dispatchEvent(c,f,d)}return a},t.prototype.onPointerDown=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e);if(this.autoPreventDefault&&n[0].isNormalized){var r=e.cancelable||!("cancelable"in e);r&&e.preventDefault()}for(var s=n.length,a=0;a<s;a++){var o=n[a],h=this.getInteractionDataForPointerId(o),l=this.configureInteractionEventForDOMEvent(this.eventData,o,h);if(l.data.originalEvent=e,this.processInteractive(l,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",l),o.pointerType==="touch")this.emit("touchstart",l);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var u=o.button===2;this.emit(u?"rightdown":"mousedown",this.eventData)}}}},t.prototype.processPointerDown=function(e,n,r){var s=e.data,a=e.data.identifier;if(r){if(n.trackedPointers[a]||(n.trackedPointers[a]=new eh(a)),this.dispatchEvent(n,"pointerdown",e),s.pointerType==="touch")this.dispatchEvent(n,"touchstart",e);else if(s.pointerType==="mouse"||s.pointerType==="pen"){var o=s.button===2;o?n.trackedPointers[a].rightDown=!0:n.trackedPointers[a].leftDown=!0,this.dispatchEvent(n,o?"rightdown":"mousedown",e)}}},t.prototype.onPointerComplete=function(e,n,r){var s=this.normalizeToPointerData(e),a=s.length,o=e.target;e.composedPath&&e.composedPath().length>0&&(o=e.composedPath()[0]);for(var h=o!==this.interactionDOMElement?"outside":"",l=0;l<a;l++){var u=s[l],c=this.getInteractionDataForPointerId(u),f=this.configureInteractionEventForDOMEvent(this.eventData,u,c);if(f.data.originalEvent=e,this.processInteractive(f,this.lastObjectRendered,r,n||!h),this.emit(n?"pointercancel":"pointerup"+h,f),u.pointerType==="mouse"||u.pointerType==="pen"){var d=u.button===2;this.emit(d?"rightup"+h:"mouseup"+h,f)}else u.pointerType==="touch"&&(this.emit(n?"touchcancel":"touchend"+h,f),this.releaseInteractionDataForPointerId(u.pointerId))}},t.prototype.onPointerCancel=function(e){this.supportsTouchEvents&&e.pointerType==="touch"||this.onPointerComplete(e,!0,this.processPointerCancel)},t.prototype.processPointerCancel=function(e,n){var r=e.data,s=e.data.identifier;n.trackedPointers[s]!==void 0&&(delete n.trackedPointers[s],this.dispatchEvent(n,"pointercancel",e),r.pointerType==="touch"&&this.dispatchEvent(n,"touchcancel",e))},t.prototype.onPointerUp=function(e){this.supportsTouchEvents&&e.pointerType==="touch"||this.onPointerComplete(e,!1,this.processPointerUp)},t.prototype.processPointerUp=function(e,n,r){var s=e.data,a=e.data.identifier,o=n.trackedPointers[a],h=s.pointerType==="touch",l=s.pointerType==="mouse"||s.pointerType==="pen",u=!1;if(l){var c=s.button===2,f=eh.FLAGS,d=c?f.RIGHT_DOWN:f.LEFT_DOWN,m=o!==void 0&&o.flags&d;r?(this.dispatchEvent(n,c?"rightup":"mouseup",e),m&&(this.dispatchEvent(n,c?"rightclick":"click",e),u=!0)):m&&this.dispatchEvent(n,c?"rightupoutside":"mouseupoutside",e),o&&(c?o.rightDown=!1:o.leftDown=!1)}r?(this.dispatchEvent(n,"pointerup",e),h&&this.dispatchEvent(n,"touchend",e),o&&((!l||u)&&this.dispatchEvent(n,"pointertap",e),h&&(this.dispatchEvent(n,"tap",e),o.over=!1))):o&&(this.dispatchEvent(n,"pointerupoutside",e),h&&this.dispatchEvent(n,"touchendoutside",e)),o&&o.none&&delete n.trackedPointers[a]},t.prototype.onPointerMove=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e);(n[0].pointerType==="mouse"||n[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var r=n.length,s=0;s<r;s++){var a=n[s],o=this.getInteractionDataForPointerId(a),h=this.configureInteractionEventForDOMEvent(this.eventData,a,o);h.data.originalEvent=e,this.processInteractive(h,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",h),a.pointerType==="touch"&&this.emit("touchmove",h),(a.pointerType==="mouse"||a.pointerType==="pen")&&this.emit("mousemove",h)}n[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},t.prototype.processPointerMove=function(e,n,r){var s=e.data,a=s.pointerType==="touch",o=s.pointerType==="mouse"||s.pointerType==="pen";o&&this.processPointerOverOut(e,n,r),(!this.moveWhenInside||r)&&(this.dispatchEvent(n,"pointermove",e),a&&this.dispatchEvent(n,"touchmove",e),o&&this.dispatchEvent(n,"mousemove",e))},t.prototype.onPointerOut=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e),r=n[0];r.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var s=this.getInteractionDataForPointerId(r),a=this.configureInteractionEventForDOMEvent(this.eventData,r,s);a.data.originalEvent=r,this.processInteractive(a,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",a),r.pointerType==="mouse"||r.pointerType==="pen"?this.emit("mouseout",a):this.releaseInteractionDataForPointerId(s.identifier)}},t.prototype.processPointerOverOut=function(e,n,r){var s=e.data,a=e.data.identifier,o=s.pointerType==="mouse"||s.pointerType==="pen",h=n.trackedPointers[a];r&&!h&&(h=n.trackedPointers[a]=new eh(a)),h!==void 0&&(r&&this.mouseOverRenderer?(h.over||(h.over=!0,this.delayDispatchEvent(n,"pointerover",e),o&&this.delayDispatchEvent(n,"mouseover",e)),o&&this.cursor===null&&(this.cursor=n.cursor)):h.over&&(h.over=!1,this.dispatchEvent(n,"pointerout",this.eventData),o&&this.dispatchEvent(n,"mouseout",e),h.none&&delete n.trackedPointers[a]))},t.prototype.onPointerOver=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e),r=n[0],s=this.getInteractionDataForPointerId(r),a=this.configureInteractionEventForDOMEvent(this.eventData,r,s);a.data.originalEvent=r,r.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",a),(r.pointerType==="mouse"||r.pointerType==="pen")&&this.emit("mouseover",a)}},t.prototype.getInteractionDataForPointerId=function(e){var n=e.pointerId,r;return n===aa||e.pointerType==="mouse"?r=this.mouse:this.activeInteractionData[n]?r=this.activeInteractionData[n]:(r=this.interactionDataPool.pop()||new $c,r.identifier=n,this.activeInteractionData[n]=r),r.copyEvent(e),r},t.prototype.releaseInteractionDataForPointerId=function(e){var n=this.activeInteractionData[e];n&&(delete this.activeInteractionData[e],n.reset(),this.interactionDataPool.push(n))},t.prototype.configureInteractionEventForDOMEvent=function(e,n,r){return e.data=r,this.mapPositionToPoint(r.global,n.clientX,n.clientY),n.pointerType==="touch"&&(n.globalX=r.global.x,n.globalY=r.global.y),r.originalEvent=n,e.reset(),e},t.prototype.normalizeToPointerData=function(e){var n=[];if(this.supportsTouchEvents&&e instanceof TouchEvent)for(var r=0,s=e.changedTouches.length;r<s;r++){var a=e.changedTouches[r];typeof a.button>"u"&&(a.button=e.touches.length?1:0),typeof a.buttons>"u"&&(a.buttons=e.touches.length?1:0),typeof a.isPrimary>"u"&&(a.isPrimary=e.touches.length===1&&e.type==="touchstart"),typeof a.width>"u"&&(a.width=a.radiusX||1),typeof a.height>"u"&&(a.height=a.radiusY||1),typeof a.tiltX>"u"&&(a.tiltX=0),typeof a.tiltY>"u"&&(a.tiltY=0),typeof a.pointerType>"u"&&(a.pointerType="touch"),typeof a.pointerId>"u"&&(a.pointerId=a.identifier||0),typeof a.pressure>"u"&&(a.pressure=a.force||.5),typeof a.twist>"u"&&(a.twist=0),typeof a.tangentialPressure>"u"&&(a.tangentialPressure=0),typeof a.layerX>"u"&&(a.layerX=a.offsetX=a.clientX),typeof a.layerY>"u"&&(a.layerY=a.offsetY=a.clientY),a.isNormalized=!0,n.push(a)}else if(!globalThis.MouseEvent||e instanceof MouseEvent&&(!this.supportsPointerEvents||!(e instanceof globalThis.PointerEvent))){var o=e;typeof o.isPrimary>"u"&&(o.isPrimary=!0),typeof o.width>"u"&&(o.width=1),typeof o.height>"u"&&(o.height=1),typeof o.tiltX>"u"&&(o.tiltX=0),typeof o.tiltY>"u"&&(o.tiltY=0),typeof o.pointerType>"u"&&(o.pointerType="mouse"),typeof o.pointerId>"u"&&(o.pointerId=aa),typeof o.pressure>"u"&&(o.pressure=.5),typeof o.twist>"u"&&(o.twist=0),typeof o.tangentialPressure>"u"&&(o.tangentialPressure=0),o.isNormalized=!0,n.push(o)}else n.push(e);return n},t.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},t.extension={name:"interaction",type:[Qt.RendererPlugin,Qt.CanvasRendererPlugin]},t}(_s);/*!
 * @pixi/extract - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var XM=new qt,YM=4,jM=function(){function i(t){this.renderer=t}return i.prototype.image=function(t,e,n){var r=new Image;return r.src=this.base64(t,e,n),r},i.prototype.base64=function(t,e,n){return this.canvas(t).toDataURL(e,n)},i.prototype.canvas=function(t,e){var n=this._rawPixels(t,e),r=n.pixels,s=n.width,a=n.height,o=n.flipY,h=new Lc(s,a,1),l=h.context.getImageData(0,0,s,a);if(i.arrayPostDivide(r,l.data),h.context.putImageData(l,0,0),o){var u=new Lc(h.width,h.height,1);u.context.scale(1,-1),u.context.drawImage(h.canvas,0,-a),h.destroy(),h=u}return h.canvas},i.prototype.pixels=function(t,e){var n=this._rawPixels(t,e).pixels;return i.arrayPostDivide(n,n),n},i.prototype._rawPixels=function(t,e){var n=this.renderer,r,s=!1,a,o=!1;if(t)if(t instanceof zi)a=t;else{var h=n.context.webGLVersion>=2?n.multisample:re.NONE;if(a=this.renderer.generateTexture(t,{multisample:h}),h!==re.NONE){var l=zi.create({width:a.width,height:a.height});n.framebuffer.bind(a.framebuffer),n.framebuffer.blit(l.framebuffer),n.framebuffer.bind(null),a.destroy(!0),a=l}o=!0}a?(r=a.baseTexture.resolution,e=e??a.frame,s=!1,n.renderTexture.bind(a)):(r=n.resolution,e||(e=XM,e.width=n.width,e.height=n.height),s=!0,n.renderTexture.bind(null));var u=Math.round(e.width*r),c=Math.round(e.height*r),f=new Uint8Array(YM*u*c),d=n.gl;return d.readPixels(Math.round(e.x*r),Math.round(e.y*r),u,c,d.RGBA,d.UNSIGNED_BYTE,f),o&&a.destroy(!0),{pixels:f,width:u,height:c,flipY:s}},i.prototype.destroy=function(){this.renderer=null},i.arrayPostDivide=function(t,e){for(var n=0;n<t.length;n+=4){var r=e[n+3]=t[n+3];r!==0?(e[n]=Math.round(Math.min(t[n]*255/r,255)),e[n+1]=Math.round(Math.min(t[n+1]*255/r,255)),e[n+2]=Math.round(Math.min(t[n+2]*255/r,255))):(e[n]=t[n],e[n+1]=t[n+1],e[n+2]=t[n+2])}},i.extension={name:"extract",type:Qt.RendererPlugin},i}();/*!
 * @pixi/loaders - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ha=function(){function i(t,e,n){e===void 0&&(e=!1),this._fn=t,this._once=e,this._thisArg=n,this._next=this._prev=this._owner=null}return i.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},i}();function Jc(i,t){return i._head?(i._tail._next=t,t._prev=i._tail,i._tail=t):(i._head=t,i._tail=t),t._owner=i,t}var zn=function(){function i(){this._head=this._tail=void 0}return i.prototype.handlers=function(t){t===void 0&&(t=!1);var e=this._head;if(t)return!!e;for(var n=[];e;)n.push(e),e=e._next;return n},i.prototype.has=function(t){if(!(t instanceof ha))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return t._owner===this},i.prototype.dispatch=function(){for(var t=arguments,e=[],n=0;n<arguments.length;n++)e[n]=t[n];var r=this._head;if(!r)return!1;for(;r;)r._once&&this.detach(r),r._fn.apply(r._thisArg,e),r=r._next;return!0},i.prototype.add=function(t,e){if(e===void 0&&(e=null),typeof t!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return Jc(this,new ha(t,!1,e))},i.prototype.once=function(t,e){if(e===void 0&&(e=null),typeof t!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return Jc(this,new ha(t,!0,e))},i.prototype.detach=function(t){if(!(t instanceof ha))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return t._owner!==this?this:(t._prev&&(t._prev._next=t._next),t._next&&(t._next._prev=t._prev),t===this._head?(this._head=t._next,t._next===null&&(this._tail=null)):t===this._tail&&(this._tail=t._prev,this._tail._next=null),t._owner=null,this)},i.prototype.detachAll=function(){var t=this._head;if(!t)return this;for(this._head=this._tail=null;t;)t._owner=null,t=t._next;return this},i}();function jd(i,t){t=t||{};for(var e={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=e.parser[t.strictMode?"strict":"loose"].exec(i),r={},s=14;s--;)r[e.key[s]]=n[s]||"";return r[e.q.name]={},r[e.key[12]].replace(e.q.parser,function(a,o,h){o&&(r[e.q.name][o]=h)}),r}var nh,la=null,qM=0,Kc=200,$M=204,JM=1223,KM=2;function Zc(){}function Qc(i,t,e){t&&t.indexOf(".")===0&&(t=t.substring(1)),t&&(i[t]=e)}function ih(i){return i.toString().replace("object ","")}var ue=function(){function i(t,e,n){if(this._dequeue=Zc,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof t!="string"||typeof e!="string")throw new Error("Both name and url are required for constructing a resource.");n=n||{},this._flags=0,this._setFlag(i.STATUS_FLAGS.DATA_URL,e.indexOf("data:")===0),this.name=t,this.url=e,this.extension=this._getExtension(),this.data=null,this.crossOrigin=n.crossOrigin===!0?"anonymous":n.crossOrigin,this.timeout=n.timeout||0,this.loadType=n.loadType||this._determineLoadType(),this.xhrType=n.xhrType,this.metadata=n.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=i.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=Zc,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new zn,this.onProgress=new zn,this.onComplete=new zn,this.onAfterMiddleware=new zn}return i.setExtensionLoadType=function(t,e){Qc(i._loadTypeMap,t,e)},i.setExtensionXhrType=function(t,e){Qc(i._xhrTypeMap,t,e)},Object.defineProperty(i.prototype,"isDataUrl",{get:function(){return this._hasFlag(i.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isComplete",{get:function(){return this._hasFlag(i.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isLoading",{get:function(){return this._hasFlag(i.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),i.prototype.complete=function(){this._clearEvents(),this._finish()},i.prototype.abort=function(t){if(!this.error){if(this.error=new Error(t),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=i.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},i.prototype.load=function(t){var e=this;if(!this.isLoading){if(this.isComplete){t&&setTimeout(function(){return t(e)},1);return}else t&&this.onComplete.once(t);switch(this._setFlag(i.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case i.LOAD_TYPE.IMAGE:this.type=i.TYPE.IMAGE,this._loadElement("image");break;case i.LOAD_TYPE.AUDIO:this.type=i.TYPE.AUDIO,this._loadSourceElement("audio");break;case i.LOAD_TYPE.VIDEO:this.type=i.TYPE.VIDEO,this._loadSourceElement("video");break;case i.LOAD_TYPE.XHR:default:typeof nh>"u"&&(nh=!!(globalThis.XDomainRequest&&!("withCredentials"in new XMLHttpRequest))),nh&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},i.prototype._hasFlag=function(t){return(this._flags&t)!==0},i.prototype._setFlag=function(t,e){this._flags=e?this._flags|t:this._flags&~t},i.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},i.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(i.STATUS_FLAGS.COMPLETE,!0),this._setFlag(i.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},i.prototype._loadElement=function(t){this.metadata.loadElement?this.data=this.metadata.loadElement:t==="image"&&typeof globalThis.Image<"u"?this.data=new Image:this.data=document.createElement(t),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},i.prototype._loadSourceElement=function(t){if(this.metadata.loadElement?this.data=this.metadata.loadElement:t==="audio"&&typeof globalThis.Audio<"u"?this.data=new Audio:this.data=document.createElement(t),this.data===null){this.abort("Unsupported element: "+t);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var e=this.metadata.mimeType,n=0;n<this.url.length;++n)this.data.appendChild(this._createSource(t,this.url[n],Array.isArray(e)?e[n]:e));else{var e=this.metadata.mimeType;this.data.appendChild(this._createSource(t,this.url,Array.isArray(e)?e[0]:e))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},i.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XMLHttpRequest;this.crossOrigin==="use-credentials"&&(t.withCredentials=!0),t.open("GET",this.url,!0),t.timeout=this.timeout,this.xhrType===i.XHR_RESPONSE_TYPE.JSON||this.xhrType===i.XHR_RESPONSE_TYPE.DOCUMENT?t.responseType=i.XHR_RESPONSE_TYPE.TEXT:t.responseType=this.xhrType,t.addEventListener("error",this._boundXhrOnError,!1),t.addEventListener("timeout",this._boundXhrOnTimeout,!1),t.addEventListener("abort",this._boundXhrOnAbort,!1),t.addEventListener("progress",this._boundOnProgress,!1),t.addEventListener("load",this._boundXhrOnLoad,!1),t.send()},i.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var t=this.xhr=new globalThis.XDomainRequest;t.timeout=this.timeout||5e3,t.onerror=this._boundXhrOnError,t.ontimeout=this._boundXhrOnTimeout,t.onprogress=this._boundOnProgress,t.onload=this._boundXhrOnLoad,t.open("GET",this.url,!0),setTimeout(function(){return t.send()},1)},i.prototype._createSource=function(t,e,n){n||(n=t+"/"+this._getExtension(e));var r=document.createElement("source");return r.src=e,r.type=n,r},i.prototype._onError=function(t){this.abort("Failed to load element using: "+t.target.nodeName)},i.prototype._onProgress=function(t){t&&t.lengthComputable&&this.onProgress.dispatch(this,t.loaded/t.total)},i.prototype._onTimeout=function(){this.abort("Load timed out.")},i.prototype._xhrOnError=function(){var t=this.xhr;this.abort(ih(t)+" Request failed. Status: "+t.status+', text: "'+t.statusText+'"')},i.prototype._xhrOnTimeout=function(){var t=this.xhr;this.abort(ih(t)+" Request timed out.")},i.prototype._xhrOnAbort=function(){var t=this.xhr;this.abort(ih(t)+" Request was aborted by the user.")},i.prototype._xhrOnLoad=function(){var t=this.xhr,e="",n=typeof t.status>"u"?Kc:t.status;(t.responseType===""||t.responseType==="text"||typeof t.responseType>"u")&&(e=t.responseText),n===qM&&(e.length>0||t.responseType===i.XHR_RESPONSE_TYPE.BUFFER)?n=Kc:n===JM&&(n=$M);var r=n/100|0;if(r===KM)if(this.xhrType===i.XHR_RESPONSE_TYPE.TEXT)this.data=e,this.type=i.TYPE.TEXT;else if(this.xhrType===i.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(e),this.type=i.TYPE.JSON}catch(o){this.abort("Error trying to parse loaded json: "+o);return}else if(this.xhrType===i.XHR_RESPONSE_TYPE.DOCUMENT)try{if(globalThis.DOMParser){var s=new DOMParser;this.data=s.parseFromString(e,"text/xml")}else{var a=document.createElement("div");a.innerHTML=e,this.data=a}this.type=i.TYPE.XML}catch(o){this.abort("Error trying to parse loaded xml: "+o);return}else this.data=t.response||e;else{this.abort("["+t.status+"] "+t.statusText+": "+t.responseURL);return}this.complete()},i.prototype._determineCrossOrigin=function(t,e){if(t.indexOf("data:")===0)return"";if(globalThis.origin!==globalThis.location.origin)return"anonymous";e=e||globalThis.location,la||(la=document.createElement("a")),la.href=t;var n=jd(la.href,{strictMode:!0}),r=!n.port&&e.port===""||n.port===e.port,s=n.protocol?n.protocol+":":"";return n.host!==e.hostname||!r||s!==e.protocol?"anonymous":""},i.prototype._determineXhrType=function(){return i._xhrTypeMap[this.extension]||i.XHR_RESPONSE_TYPE.TEXT},i.prototype._determineLoadType=function(){return i._loadTypeMap[this.extension]||i.LOAD_TYPE.XHR},i.prototype._getExtension=function(t){t===void 0&&(t=this.url);var e="";if(this.isDataUrl){var n=t.indexOf("/");e=t.substring(n+1,t.indexOf(";",n))}else{var r=t.indexOf("?"),s=t.indexOf("#"),a=Math.min(r>-1?r:t.length,s>-1?s:t.length);t=t.substring(0,a),e=t.substring(t.lastIndexOf(".")+1)}return e.toLowerCase()},i.prototype._getMimeFromXhrType=function(t){switch(t){case i.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case i.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case i.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case i.XHR_RESPONSE_TYPE.JSON:return"application/json";case i.XHR_RESPONSE_TYPE.DEFAULT:case i.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},i}();(function(i){(function(t){t[t.NONE=0]="NONE",t[t.DATA_URL=1]="DATA_URL",t[t.COMPLETE=2]="COMPLETE",t[t.LOADING=4]="LOADING"})(i.STATUS_FLAGS||(i.STATUS_FLAGS={})),function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.JSON=1]="JSON",t[t.XML=2]="XML",t[t.IMAGE=3]="IMAGE",t[t.AUDIO=4]="AUDIO",t[t.VIDEO=5]="VIDEO",t[t.TEXT=6]="TEXT"}(i.TYPE||(i.TYPE={})),function(t){t[t.XHR=1]="XHR",t[t.IMAGE=2]="IMAGE",t[t.AUDIO=3]="AUDIO",t[t.VIDEO=4]="VIDEO"}(i.LOAD_TYPE||(i.LOAD_TYPE={})),function(t){t.DEFAULT="text",t.BUFFER="arraybuffer",t.BLOB="blob",t.DOCUMENT="document",t.JSON="json",t.TEXT="text"}(i.XHR_RESPONSE_TYPE||(i.XHR_RESPONSE_TYPE={})),i._loadTypeMap={gif:i.LOAD_TYPE.IMAGE,png:i.LOAD_TYPE.IMAGE,bmp:i.LOAD_TYPE.IMAGE,jpg:i.LOAD_TYPE.IMAGE,jpeg:i.LOAD_TYPE.IMAGE,tif:i.LOAD_TYPE.IMAGE,tiff:i.LOAD_TYPE.IMAGE,webp:i.LOAD_TYPE.IMAGE,tga:i.LOAD_TYPE.IMAGE,avif:i.LOAD_TYPE.IMAGE,svg:i.LOAD_TYPE.IMAGE,"svg+xml":i.LOAD_TYPE.IMAGE,mp3:i.LOAD_TYPE.AUDIO,ogg:i.LOAD_TYPE.AUDIO,wav:i.LOAD_TYPE.AUDIO,mp4:i.LOAD_TYPE.VIDEO,webm:i.LOAD_TYPE.VIDEO},i._xhrTypeMap={xhtml:i.XHR_RESPONSE_TYPE.DOCUMENT,html:i.XHR_RESPONSE_TYPE.DOCUMENT,htm:i.XHR_RESPONSE_TYPE.DOCUMENT,xml:i.XHR_RESPONSE_TYPE.DOCUMENT,tmx:i.XHR_RESPONSE_TYPE.DOCUMENT,svg:i.XHR_RESPONSE_TYPE.DOCUMENT,tsx:i.XHR_RESPONSE_TYPE.DOCUMENT,gif:i.XHR_RESPONSE_TYPE.BLOB,png:i.XHR_RESPONSE_TYPE.BLOB,bmp:i.XHR_RESPONSE_TYPE.BLOB,jpg:i.XHR_RESPONSE_TYPE.BLOB,jpeg:i.XHR_RESPONSE_TYPE.BLOB,tif:i.XHR_RESPONSE_TYPE.BLOB,tiff:i.XHR_RESPONSE_TYPE.BLOB,webp:i.XHR_RESPONSE_TYPE.BLOB,tga:i.XHR_RESPONSE_TYPE.BLOB,avif:i.XHR_RESPONSE_TYPE.BLOB,json:i.XHR_RESPONSE_TYPE.JSON,text:i.XHR_RESPONSE_TYPE.TEXT,txt:i.XHR_RESPONSE_TYPE.TEXT,ttf:i.XHR_RESPONSE_TYPE.BUFFER,otf:i.XHR_RESPONSE_TYPE.BUFFER},i.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(ue||(ue={}));function Ei(){}function ZM(i){return function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];if(i===null)throw new Error("Callback was already called.");var s=i;i=null,s.apply(this,n)}}var QM=function(){function i(t,e){this.data=t,this.callback=e}return i}(),rh=function(){function i(t,e){var n=this;if(e===void 0&&(e=1),this.workers=0,this.saturated=Ei,this.unsaturated=Ei,this.empty=Ei,this.drain=Ei,this.error=Ei,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(r,s,a){if(a&&typeof a!="function")throw new Error("task callback must be a function");if(n.started=!0,r==null&&n.idle()){setTimeout(function(){return n.drain()},1);return}var o=new QM(r,typeof a=="function"?a:Ei);s?n._tasks.unshift(o):n._tasks.push(o),setTimeout(n.process,1)},this.process=function(){for(;!n.paused&&n.workers<n.concurrency&&n._tasks.length;){var r=n._tasks.shift();n._tasks.length===0&&n.empty(),n.workers+=1,n.workers===n.concurrency&&n.saturated(),n._worker(r.data,ZM(n._next(r)))}},this._worker=t,e===0)throw new Error("Concurrency must not be zero");this.concurrency=e,this.buffer=e/4}return i.prototype._next=function(t){var e=this;return function(){for(var n=arguments,r=[],s=0;s<arguments.length;s++)r[s]=n[s];e.workers-=1,t.callback.apply(t,r),r[0]!=null&&e.error(r[0],t.data),e.workers<=e.concurrency-e.buffer&&e.unsaturated(),e.idle()&&e.drain(),e.process()}},i.prototype.push=function(t,e){this._insert(t,!1,e)},i.prototype.kill=function(){this.workers=0,this.drain=Ei,this.started=!1,this._tasks=[]},i.prototype.unshift=function(t,e){this._insert(t,!0,e)},i.prototype.length=function(){return this._tasks.length},i.prototype.running=function(){return this.workers},i.prototype.idle=function(){return this._tasks.length+this.workers===0},i.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},i.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var t=1;t<=this.concurrency;t++)this.process()}},i.eachSeries=function(t,e,n,r){var s=0,a=t.length;function o(h){if(h||s===a){n&&n(h);return}r?setTimeout(function(){e(t[s++],o)},1):e(t[s++],o)}o()},i.queue=function(t,e){return new i(t,e)},i}(),sh=100,tw=/(#[\w-]+)?$/,Da=function(){function i(t,e){var n=this;t===void 0&&(t=""),e===void 0&&(e=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(h,l){return n._loadResource(h,l)},this.resources={},this.baseUrl=t,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(h,l){return n._loadResource(h,l)},this._queue=rh.queue(this._boundLoadResource,e),this._queue.pause(),this.resources={},this.onProgress=new zn,this.onError=new zn,this.onLoad=new zn,this.onStart=new zn,this.onComplete=new zn;for(var r=0;r<i._plugins.length;++r){var s=i._plugins[r],a=s.pre,o=s.use;a&&this.pre(a),o&&this.use(o)}this._protected=!1}return i.prototype._add=function(t,e,n,r){if(this.loading&&(!n||!n.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[t])throw new Error('Resource named "'+t+'" already exists.');if(e=this._prepareUrl(e),this.resources[t]=new ue(t,e,n),typeof r=="function"&&this.resources[t].onAfterMiddleware.once(r),this.loading){for(var s=n.parentResource,a=[],o=0;o<s.children.length;++o)s.children[o].isComplete||a.push(s.children[o]);var h=s.progressChunk*(a.length+1),l=h/(a.length+2);s.children.push(this.resources[t]),s.progressChunk=l;for(var o=0;o<a.length;++o)a[o].progressChunk=l;this.resources[t].progressChunk=l}return this._queue.push(this.resources[t]),this},i.prototype.pre=function(t){return this._beforeMiddleware.push(t),this},i.prototype.use=function(t){return this._afterMiddleware.push(t),this},i.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var t in this.resources){var e=this.resources[t];e._onLoadBinding&&e._onLoadBinding.detach(),e.isLoading&&e.abort("loader reset")}return this.resources={},this},i.prototype.load=function(t){if(fn("6.5.0","@pixi/loaders is being replaced with @pixi/assets in the next major release."),typeof t=="function"&&this.onComplete.once(t),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var e=this._queue._tasks.length,n=sh/e,r=0;r<this._queue._tasks.length;++r)this._queue._tasks[r].data.progressChunk=n;this._onStart(),this._queue.resume()}return this},Object.defineProperty(i.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(t){this._queue.concurrency=t},enumerable:!1,configurable:!0}),i.prototype._prepareUrl=function(t){var e=jd(t,{strictMode:!0}),n;if(e.protocol||!e.path||t.indexOf("//")===0?n=t:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&t.charAt(0)!=="/"?n=this.baseUrl+"/"+t:n=this.baseUrl+t,this.defaultQueryString){var r=tw.exec(n)[0];n=n.slice(0,n.length-r.length),n.indexOf("?")!==-1?n+="&"+this.defaultQueryString:n+="?"+this.defaultQueryString,n+=r}return n},i.prototype._loadResource=function(t,e){var n=this;t._dequeue=e,rh.eachSeries(this._beforeMiddleware,function(r,s){r.call(n,t,function(){s(t.isComplete?{}:null)})},function(){t.isComplete?n._onLoad(t):(t._onLoadBinding=t.onComplete.once(n._onLoad,n),t.load())},!0)},i.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},i.prototype._onComplete=function(){this.progress=sh,this.loading=!1,this.onComplete.dispatch(this,this.resources)},i.prototype._onLoad=function(t){var e=this;t._onLoadBinding=null,this._resourcesParsing.push(t),t._dequeue(),rh.eachSeries(this._afterMiddleware,function(n,r){n.call(e,t,r)},function(){t.onAfterMiddleware.dispatch(t),e.progress=Math.min(sh,e.progress+t.progressChunk),e.onProgress.dispatch(e,t),t.error?e.onError.dispatch(t.error,e,t):e.onLoad.dispatch(e,t),e._resourcesParsing.splice(e._resourcesParsing.indexOf(t),1),e._queue.idle()&&e._resourcesParsing.length===0&&e._onComplete()},!0)},i.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(i,"shared",{get:function(){var t=i._shared;return t||(t=new i,t._protected=!0,i._shared=t),t},enumerable:!1,configurable:!0}),i.registerPlugin=function(t){return fn("6.5.0","Loader.registerPlugin() is deprecated, use extensions.add() instead."),qn.add({type:Qt.Loader,ref:t}),i},i._plugins=[],i}();qn.handleByList(Qt.Loader,Da._plugins);Da.prototype.add=function(t,e,n,r){if(Array.isArray(t)){for(var s=0;s<t.length;++s)this.add(t[s]);return this}if(typeof t=="object"&&(n=t,r=e||n.callback||n.onComplete,e=n.url,t=n.name||n.key||n.url),typeof e!="string"&&(r=n,n=e,e=t),typeof e!="string")throw new Error("No url passed to add resource to loader.");return typeof n=="function"&&(r=n,n=null),this._add(t,e,n,r)};var ew=function(){function i(){}return i.init=function(t){t=Object.assign({sharedLoader:!1},t),this.loader=t.sharedLoader?Da.shared:new Da},i.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},i.extension=Qt.Application,i}(),nw=function(){function i(){}return i.add=function(){ue.setExtensionLoadType("svg",ue.LOAD_TYPE.XHR),ue.setExtensionXhrType("svg",ue.XHR_RESPONSE_TYPE.TEXT)},i.use=function(t,e){if(t.data&&(t.type===ue.TYPE.IMAGE||t.extension==="svg")){var n=t.data,r=t.url,s=t.name,a=t.metadata;Ut.fromLoader(n,r,s,a).then(function(o){t.texture=o,e()}).catch(e)}else e()},i.extension=Qt.Loader,i}(),iw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function rw(i){for(var t="",e=0;e<i.length;){for(var n=[0,0,0],r=[0,0,0,0],s=0;s<n.length;++s)e<i.length?n[s]=i.charCodeAt(e++)&255:n[s]=0;r[0]=n[0]>>2,r[1]=(n[0]&3)<<4|n[1]>>4,r[2]=(n[1]&15)<<2|n[2]>>6,r[3]=n[2]&63;var a=e-(i.length-1);switch(a){case 2:r[3]=64,r[2]=64;break;case 1:r[3]=64;break}for(var s=0;s<r.length;++s)t+=iw.charAt(r[s])}return t}function sw(i,t){if(!i.data){t();return}if(i.xhr&&i.xhrType===ue.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof i.data=="string"){var e=i.xhr.getResponseHeader("content-type");if(e&&e.indexOf("image")===0){i.data=new Image,i.data.src="data:"+e+";base64,"+rw(i.xhr.responseText),i.type=ue.TYPE.IMAGE,i.data.onload=function(){i.data.onload=null,t()};return}}else if(i.data.type.indexOf("image")===0){var n=globalThis.URL||globalThis.webkitURL,r=n.createObjectURL(i.data);i.blob=i.data,i.data=new Image,i.data.src=r,i.type=ue.TYPE.IMAGE,i.data.onload=function(){n.revokeObjectURL(r),i.data.onload=null,t()};return}}t()}var aw=function(){function i(){}return i.extension=Qt.Loader,i.use=sw,i}();qn.add(nw,aw);/*!
 * @pixi/compressed-textures - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Kt,Bt;(function(i){i[i.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",i[i.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",i[i.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",i[i.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",i[i.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",i[i.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",i[i.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",i[i.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",i[i.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",i[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",i[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",i[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",i[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",i[i.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",i[i.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",i[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",i[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",i[i.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR"})(Bt||(Bt={}));var Ua=(Kt={},Kt[Bt.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,Kt[Bt.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,Kt[Bt.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,Kt[Bt.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,Kt[Bt.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,Kt[Bt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,Kt[Bt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,Kt[Bt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,Kt[Bt.COMPRESSED_R11_EAC]=.5,Kt[Bt.COMPRESSED_SIGNED_R11_EAC]=.5,Kt[Bt.COMPRESSED_RG11_EAC]=1,Kt[Bt.COMPRESSED_SIGNED_RG11_EAC]=1,Kt[Bt.COMPRESSED_RGB8_ETC2]=.5,Kt[Bt.COMPRESSED_RGBA8_ETC2_EAC]=1,Kt[Bt.COMPRESSED_SRGB8_ETC2]=.5,Kt[Bt.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,Kt[Bt.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,Kt[Bt.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,Kt[Bt.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,Kt[Bt.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,Kt[Bt.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,Kt[Bt.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,Kt[Bt.COMPRESSED_RGB_ETC1_WEBGL]=.5,Kt[Bt.COMPRESSED_RGB_ATC_WEBGL]=.5,Kt[Bt.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,Kt[Bt.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,Kt[Bt.COMPRESSED_RGBA_ASTC_4x4_KHR]=1,Kt);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xh=function(i,t){return Xh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Xh(i,t)};function qd(i,t){Xh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function ow(i,t,e,n){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(u){try{l(n.next(u))}catch(c){a(c)}}function h(u){try{l(n.throw(u))}catch(c){a(c)}}function l(u){u.done?s(u.value):r(u.value).then(o,h)}l((n=n.apply(i,t||[])).next())})}function hw(i,t){var e={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(l){return function(u){return h([l,u])}}function h(l){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,r=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(s=e.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){e.label=l[1];break}if(l[0]===6&&e.label<s[1]){e.label=s[1],s=l;break}if(s&&e.label<s[2]){e.label=s[2],e.ops.push(l);break}s[2]&&e.ops.pop(),e.trys.pop();continue}l=t.call(i,e)}catch(u){l=[6,u],r=0}finally{n=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var lw=function(i){qd(t,i);function t(e,n){n===void 0&&(n={width:1,height:1,autoLoad:!0});var r=this,s,a;return typeof e=="string"?(s=e,a=new Uint8Array):(s=null,a=e),r=i.call(this,a,n)||this,r.origin=s,r.buffer=a?new Vh(a):null,r.origin&&n.autoLoad!==!1&&r.load(),a&&a.length&&(r.loaded=!0,r.onBlobLoaded(r.buffer.rawBinaryData)),r}return t.prototype.onBlobLoaded=function(e){},t.prototype.load=function(){return ow(this,void 0,Promise,function(){var e,n,r;return hw(this,function(s){switch(s.label){case 0:return[4,fetch(this.origin)];case 1:return e=s.sent(),[4,e.blob()];case 2:return n=s.sent(),[4,n.arrayBuffer()];case 3:return r=s.sent(),this.data=new Uint32Array(r),this.buffer=new Vh(r),this.loaded=!0,this.onBlobLoaded(r),this.update(),[2,this]}})})},t}(gs),Yh=function(i){qd(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.format=n.format,r.levels=n.levels||1,r._width=n.width,r._height=n.height,r._extension=t._formatToExtension(r.format),(n.levelBuffers||r.buffer)&&(r._levelBuffers=n.levelBuffers||t._createLevelBuffers(e instanceof Uint8Array?e:r.buffer.uint8View,r.format,r.levels,4,4,r.width,r.height)),r}return t.prototype.upload=function(e,n,r){var s=e.gl,a=e.context.extensions[this._extension];if(!a)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var o=0,h=this.levels;o<h;o++){var l=this._levelBuffers[o],u=l.levelID,c=l.levelWidth,f=l.levelHeight,d=l.levelBuffer;s.compressedTexImage2D(s.TEXTURE_2D,u,this.format,c,f,0,d)}return!0},t.prototype.onBlobLoaded=function(){this._levelBuffers=t._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},t._formatToExtension=function(e){if(e>=33776&&e<=33779)return"s3tc";if(e>=37488&&e<=37497)return"etc";if(e>=35840&&e<=35843)return"pvrtc";if(e>=36196)return"etc1";if(e>=35986&&e<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},t._createLevelBuffers=function(e,n,r,s,a,o,h){for(var l=new Array(r),u=e.byteOffset,c=o,f=h,d=c+s-1&~(s-1),m=f+a-1&~(a-1),_=d*m*Ua[n],p=0;p<r;p++)l[p]={levelID:p,levelWidth:r>1?c:d,levelHeight:r>1?f:m,levelBuffer:new Uint8Array(e.buffer,u,_)},u+=_,c=c>>1||1,f=f>>1||1,d=c+s-1&~(s-1),m=f+a-1&~(a-1),_=d*m*Ua[n];return l},t}(lw),uw=function(){function i(){}return i.use=function(t,e){var n=t.data,r=this;if(t.type===ue.TYPE.JSON&&n&&n.cacheID&&n.textures){for(var s=n.textures,a=void 0,o=void 0,h=0,l=s.length;h<l;h++){var u=s[h],c=u.src,f=u.format;if(f||(o=c),i.textureFormats[f]){a=c;break}}if(a=a||o,!a){e(new Error("Cannot load compressed-textures in "+t.url+", make sure you provide a fallback"));return}if(a===t.url){e(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var d={crossOrigin:t.crossOrigin,metadata:t.metadata.imageMetadata,parentResource:t},m=dr.resolve(t.url.replace(r.baseUrl,""),a),_=n.cacheID;r.add(_,m,d,function(p){if(p.error){e(p.error);return}var v=p.texture,y=v===void 0?null:v,g=p.textures,T=g===void 0?{}:g;Object.assign(t,{texture:y,textures:T}),e()})}else e()},Object.defineProperty(i,"textureExtensions",{get:function(){if(!i._textureExtensions){var t=dt.ADAPTER.createCanvas(),e=t.getContext("webgl");if(!e)return console.warn("WebGL not available for compressed textures. Silently failing."),{};var n={s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};i._textureExtensions=n}return i._textureExtensions},enumerable:!1,configurable:!0}),Object.defineProperty(i,"textureFormats",{get:function(){if(!i._textureFormats){var t=i.textureExtensions;i._textureFormats={};for(var e in t){var n=t[e];n&&Object.assign(i._textureFormats,Object.getPrototypeOf(n))}}return i._textureFormats},enumerable:!1,configurable:!0}),i.extension=Qt.Loader,i}();function $d(i,t,e){var n={textures:{},texture:null};if(!t)return n;var r=t.map(function(s){return new Ut(new jt(s,Object.assign({mipmap:dn.OFF,alphaMode:pn.NO_PREMULTIPLIED_ALPHA},e)))});return r.forEach(function(s,a){var o=s.baseTexture,h=i+"-"+(a+1);jt.addToCache(o,h),Ut.addToCache(s,h),a===0&&(jt.addToCache(o,i),Ut.addToCache(s,i),n.texture=s),n.textures[h]=s}),n}var Hr,nn,ah=4,ua=124,cw=32,tf=20,fw=542327876,ca={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},dw={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},fa={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},sn;(function(i){i[i.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",i[i.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",i[i.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",i[i.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",i[i.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",i[i.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",i[i.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",i[i.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",i[i.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",i[i.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",i[i.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",i[i.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",i[i.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",i[i.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",i[i.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",i[i.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",i[i.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",i[i.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",i[i.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",i[i.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",i[i.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",i[i.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",i[i.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",i[i.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",i[i.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",i[i.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",i[i.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",i[i.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",i[i.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",i[i.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",i[i.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",i[i.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",i[i.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",i[i.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",i[i.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",i[i.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",i[i.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",i[i.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",i[i.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",i[i.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",i[i.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",i[i.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",i[i.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",i[i.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",i[i.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",i[i.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",i[i.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",i[i.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",i[i.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",i[i.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",i[i.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",i[i.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",i[i.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",i[i.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",i[i.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",i[i.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",i[i.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",i[i.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",i[i.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",i[i.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",i[i.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",i[i.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",i[i.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",i[i.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",i[i.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",i[i.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",i[i.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",i[i.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",i[i.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",i[i.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",i[i.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",i[i.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",i[i.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",i[i.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",i[i.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",i[i.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",i[i.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",i[i.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",i[i.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",i[i.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",i[i.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",i[i.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",i[i.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",i[i.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",i[i.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",i[i.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",i[i.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",i[i.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",i[i.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",i[i.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",i[i.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",i[i.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",i[i.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",i[i.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",i[i.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",i[i.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",i[i.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",i[i.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",i[i.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",i[i.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",i[i.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",i[i.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",i[i.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",i[i.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",i[i.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",i[i.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",i[i.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",i[i.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",i[i.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",i[i.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",i[i.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",i[i.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",i[i.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",i[i.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",i[i.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",i[i.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",i[i.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",i[i.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",i[i.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",i[i.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",i[i.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",i[i.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(sn||(sn={}));var jh;(function(i){i[i.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",i[i.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",i[i.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(jh||(jh={}));var pw=1,mw=2,vw=4,_w=64,gw=512,yw=131072,xw=827611204,Ew=861165636,Tw=894720068,bw=808540228,Sw=4,Mw=(Hr={},Hr[xw]=Bt.COMPRESSED_RGBA_S3TC_DXT1_EXT,Hr[Ew]=Bt.COMPRESSED_RGBA_S3TC_DXT3_EXT,Hr[Tw]=Bt.COMPRESSED_RGBA_S3TC_DXT5_EXT,Hr),ww=(nn={},nn[sn.DXGI_FORMAT_BC1_TYPELESS]=Bt.COMPRESSED_RGBA_S3TC_DXT1_EXT,nn[sn.DXGI_FORMAT_BC1_UNORM]=Bt.COMPRESSED_RGBA_S3TC_DXT1_EXT,nn[sn.DXGI_FORMAT_BC2_TYPELESS]=Bt.COMPRESSED_RGBA_S3TC_DXT3_EXT,nn[sn.DXGI_FORMAT_BC2_UNORM]=Bt.COMPRESSED_RGBA_S3TC_DXT3_EXT,nn[sn.DXGI_FORMAT_BC3_TYPELESS]=Bt.COMPRESSED_RGBA_S3TC_DXT5_EXT,nn[sn.DXGI_FORMAT_BC3_UNORM]=Bt.COMPRESSED_RGBA_S3TC_DXT5_EXT,nn[sn.DXGI_FORMAT_BC1_UNORM_SRGB]=Bt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,nn[sn.DXGI_FORMAT_BC2_UNORM_SRGB]=Bt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,nn[sn.DXGI_FORMAT_BC3_UNORM_SRGB]=Bt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,nn);function Aw(i){var t=new Uint32Array(i),e=t[0];if(e!==fw)throw new Error("Invalid DDS file magic word");var n=new Uint32Array(i,0,ua/Uint32Array.BYTES_PER_ELEMENT),r=n[ca.HEIGHT],s=n[ca.WIDTH],a=n[ca.MIPMAP_COUNT],o=new Uint32Array(i,ca.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,cw/Uint32Array.BYTES_PER_ELEMENT),h=o[pw];if(h&vw){var l=o[dw.FOURCC];if(l!==bw){var u=Mw[l],c=ah+ua,f=new Uint8Array(i,c),d=new Yh(f,{format:u,width:s,height:r,levels:a});return[d]}var m=ah+ua,_=new Uint32Array(t.buffer,m,tf/Uint32Array.BYTES_PER_ELEMENT),p=_[fa.DXGI_FORMAT],v=_[fa.RESOURCE_DIMENSION],y=_[fa.MISC_FLAG],g=_[fa.ARRAY_SIZE],T=ww[p];if(T===void 0)throw new Error("DDSParser cannot parse texture data with DXGI format "+p);if(y===Sw)throw new Error("DDSParser does not support cubemap textures");if(v===jh.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSParser does not supported 3D texture data");var E=new Array,b=ah+ua+tf;if(g===1)E.push(new Uint8Array(i,b));else{for(var w=Ua[T],C=0,x=s,S=r,F=0;F<a;F++){var H=Math.max(1,x+3&-4),L=Math.max(1,S+3&-4),G=H*L*w;C+=G,x=x>>>1,S=S>>>1}for(var P=b,F=0;F<g;F++)E.push(new Uint8Array(i,P,C)),P+=C}return E.map(function(B){return new Yh(B,{format:T,width:s,height:r,levels:a})})}throw h&_w?new Error("DDSParser does not support uncompressed texture data."):h&gw?new Error("DDSParser does not supported YUV uncompressed texture data."):h&yw?new Error("DDSParser does not support single-channel (lumninance) texture data!"):h&mw?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}var ti,Bn,zr,ef=[171,75,84,88,32,49,49,187,13,10,26,10],Rw=67305985,rn={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},qh=64,nf=(ti={},ti[Mt.UNSIGNED_BYTE]=1,ti[Mt.UNSIGNED_SHORT]=2,ti[Mt.INT]=4,ti[Mt.UNSIGNED_INT]=4,ti[Mt.FLOAT]=4,ti[Mt.HALF_FLOAT]=8,ti),Cw=(Bn={},Bn[rt.RGBA]=4,Bn[rt.RGB]=3,Bn[rt.RG]=2,Bn[rt.RED]=1,Bn[rt.LUMINANCE]=1,Bn[rt.LUMINANCE_ALPHA]=2,Bn[rt.ALPHA]=1,Bn),Pw=(zr={},zr[Mt.UNSIGNED_SHORT_4_4_4_4]=2,zr[Mt.UNSIGNED_SHORT_5_5_5_1]=2,zr[Mt.UNSIGNED_SHORT_5_6_5]=2,zr);function Iw(i,t,e){e===void 0&&(e=!1);var n=new DataView(t);if(!Lw(i,n))return null;var r=n.getUint32(rn.ENDIANNESS,!0)===Rw,s=n.getUint32(rn.GL_TYPE,r),a=n.getUint32(rn.GL_FORMAT,r),o=n.getUint32(rn.GL_INTERNAL_FORMAT,r),h=n.getUint32(rn.PIXEL_WIDTH,r),l=n.getUint32(rn.PIXEL_HEIGHT,r)||1,u=n.getUint32(rn.PIXEL_DEPTH,r)||1,c=n.getUint32(rn.NUMBER_OF_ARRAY_ELEMENTS,r)||1,f=n.getUint32(rn.NUMBER_OF_FACES,r),d=n.getUint32(rn.NUMBER_OF_MIPMAP_LEVELS,r),m=n.getUint32(rn.BYTES_OF_KEY_VALUE_DATA,r);if(l===0||u!==1)throw new Error("Only 2D textures are supported");if(f!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(c!==1)throw new Error("WebGL does not support array textures");var _=4,p=4,v=h+3&-4,y=l+3&-4,g=new Array(c),T=h*l;s===0&&(T=v*y);var E;if(s!==0?nf[s]?E=nf[s]*Cw[a]:E=Pw[s]:E=Ua[o],E===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var b=e?Dw(n,m,r):null,w=T*E,C=w,x=h,S=l,F=v,H=y,L=qh+m,G=0;G<d;G++){for(var P=n.getUint32(L,r),B=L+4,z=0;z<c;z++){var Y=g[z];Y||(Y=g[z]=new Array(d)),Y[G]={levelID:G,levelWidth:d>1||s!==0?x:F,levelHeight:d>1||s!==0?S:H,levelBuffer:new Uint8Array(t,B,C)},B+=C}L+=P+4,L=L%4!==0?L+4-L%4:L,x=x>>1||1,S=S>>1||1,F=x+_-1&~(_-1),H=S+p-1&~(p-1),C=F*H*E}return s!==0?{uncompressed:g.map(function(K){var U=K[0].levelBuffer,W=!1;return s===Mt.FLOAT?U=new Float32Array(K[0].levelBuffer.buffer,K[0].levelBuffer.byteOffset,K[0].levelBuffer.byteLength/4):s===Mt.UNSIGNED_INT?(W=!0,U=new Uint32Array(K[0].levelBuffer.buffer,K[0].levelBuffer.byteOffset,K[0].levelBuffer.byteLength/4)):s===Mt.INT&&(W=!0,U=new Int32Array(K[0].levelBuffer.buffer,K[0].levelBuffer.byteOffset,K[0].levelBuffer.byteLength/4)),{resource:new gs(U,{width:K[0].levelWidth,height:K[0].levelHeight}),type:s,format:W?Ow(a):a}}),kvData:b}:{compressed:g.map(function(K){return new Yh(null,{format:o,width:h,height:l,levels:d,levelBuffers:K})}),kvData:b}}function Lw(i,t){for(var e=0;e<ef.length;e++)if(t.getUint8(e)!==ef[e])return console.error(i+" is not a valid *.ktx file!"),!1;return!0}function Ow(i){switch(i){case rt.RGBA:return rt.RGBA_INTEGER;case rt.RGB:return rt.RGB_INTEGER;case rt.RG:return rt.RG_INTEGER;case rt.RED:return rt.RED_INTEGER;default:return i}}function Dw(i,t,e){for(var n=new Map,r=0;r<t;){var s=i.getUint32(qh+r,e),a=qh+r+4,o=3-(s+3)%4;if(s===0||s>t-r){console.error("KTXLoader: keyAndValueByteSize out of bounds");break}for(var h=0;h<s&&i.getUint8(a+h)!==0;h++);if(h===-1){console.error("KTXLoader: Failed to find null byte terminating kvData key");break}var l=new TextDecoder().decode(new Uint8Array(i.buffer,a,h)),u=new DataView(i.buffer,a+h+1,s-h-1);n.set(l,u),r+=4+s+o}return n}ue.setExtensionXhrType("dds",ue.XHR_RESPONSE_TYPE.BUFFER);var Uw=function(){function i(){}return i.use=function(t,e){if(t.extension==="dds"&&t.data)try{Object.assign(t,$d(t.name||t.url,Aw(t.data),t.metadata))}catch(n){e(n);return}e()},i.extension=Qt.Loader,i}();ue.setExtensionXhrType("ktx",ue.XHR_RESPONSE_TYPE.BUFFER);var Nw=function(){function i(){}return i.use=function(t,e){if(t.extension==="ktx"&&t.data)try{var n=t.name||t.url,r=Iw(n,t.data,this.loadKeyValueData),s=r.compressed,a=r.uncompressed,o=r.kvData;if(s){var h=$d(n,s,t.metadata);if(o&&h.textures)for(var l in h.textures)h.textures[l].baseTexture.ktxKeyValueData=o;Object.assign(t,h)}else if(a){var u={};a.forEach(function(c,f){var d=new Ut(new jt(c.resource,{mipmap:dn.OFF,alphaMode:pn.NO_PREMULTIPLIED_ALPHA,type:c.type,format:c.format})),m=n+"-"+(f+1);o&&(d.baseTexture.ktxKeyValueData=o),jt.addToCache(d.baseTexture,m),Ut.addToCache(d,m),f===0&&(u[n]=d,jt.addToCache(d.baseTexture,n),Ut.addToCache(d,n)),u[m]=d}),Object.assign(t,{textures:u})}}catch(c){e(c);return}e()},i.extension=Qt.Loader,i.loadKeyValueData=!1,i}();/*!
 * @pixi/particle-container - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/particle-container is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $h=function(i,t){return $h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},$h(i,t)};function Jd(i,t){$h(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}(function(i){Jd(t,i);function t(e,n,r,s){e===void 0&&(e=1500),r===void 0&&(r=16384),s===void 0&&(s=!1);var a=i.call(this)||this,o=16384;return r>o&&(r=o),a._properties=[!1,!0,!1,!1,!1],a._maxSize=e,a._batchSize=r,a._buffers=null,a._bufferUpdateIDs=[],a._updateID=0,a.interactiveChildren=!1,a.blendMode=wt.NORMAL,a.autoResize=s,a.roundPixels=!0,a.baseTexture=null,a.setProperties(n),a._tint=0,a.tintRgb=new Float32Array(4),a.tint=16777215,a}return t.prototype.setProperties=function(e){e&&(this._properties[0]="vertices"in e||"scale"in e?!!e.vertices||!!e.scale:this._properties[0],this._properties[1]="position"in e?!!e.position:this._properties[1],this._properties[2]="rotation"in e?!!e.rotation:this._properties[2],this._properties[3]="uvs"in e?!!e.uvs:this._properties[3],this._properties[4]="tint"in e||"alpha"in e?!!e.tint||!!e.alpha:this._properties[4])},t.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){this._tint=e,wr(e,this.tintRgb)},enumerable:!1,configurable:!0}),t.prototype.render=function(e){var n=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return n.onChildrenChange(0)})),e.batch.setObjectRenderer(e.plugins.particle),e.plugins.particle.render(this))},t.prototype.onChildrenChange=function(e){for(var n=Math.floor(e/this._batchSize);this._bufferUpdateIDs.length<n;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[n]=++this._updateID},t.prototype.dispose=function(){if(this._buffers){for(var e=0;e<this._buffers.length;++e)this._buffers[e].destroy();this._buffers=null}},t.prototype.destroy=function(e){i.prototype.destroy.call(this,e),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},t})(Mn);var rf=function(){function i(t,e,n){this.geometry=new ys,this.indexBuffer=null,this.size=n,this.dynamicProperties=[],this.staticProperties=[];for(var r=0;r<t.length;++r){var s=t[r];s={attributeName:s.attributeName,size:s.size,uploadFunction:s.uploadFunction,type:s.type||Mt.FLOAT,offset:s.offset},e[r]?this.dynamicProperties.push(s):this.staticProperties.push(s)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return i.prototype.initBuffers=function(){var t=this.geometry,e=0;this.indexBuffer=new Ee(jb(this.size),!0,!0),t.addIndex(this.indexBuffer),this.dynamicStride=0;for(var n=0;n<this.dynamicProperties.length;++n){var r=this.dynamicProperties[n];r.offset=e,e+=r.size,this.dynamicStride+=r.size}var s=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(s),this.dynamicDataUint32=new Uint32Array(s),this.dynamicBuffer=new Ee(this.dynamicData,!1,!1);var a=0;this.staticStride=0;for(var n=0;n<this.staticProperties.length;++n){var r=this.staticProperties[n];r.offset=a,a+=r.size,this.staticStride+=r.size}var o=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(o),this.staticDataUint32=new Uint32Array(o),this.staticBuffer=new Ee(this.staticData,!0,!1);for(var n=0;n<this.dynamicProperties.length;++n){var r=this.dynamicProperties[n];t.addAttribute(r.attributeName,this.dynamicBuffer,0,r.type===Mt.UNSIGNED_BYTE,r.type,this.dynamicStride*4,r.offset*4)}for(var n=0;n<this.staticProperties.length;++n){var r=this.staticProperties[n];t.addAttribute(r.attributeName,this.staticBuffer,0,r.type===Mt.UNSIGNED_BYTE,r.type,this.staticStride*4,r.offset*4)}},i.prototype.uploadDynamic=function(t,e,n){for(var r=0;r<this.dynamicProperties.length;r++){var s=this.dynamicProperties[r];s.uploadFunction(t,e,n,s.type===Mt.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,s.offset)}this.dynamicBuffer._updateID++},i.prototype.uploadStatic=function(t,e,n){for(var r=0;r<this.staticProperties.length;r++){var s=this.staticProperties[r];s.uploadFunction(t,e,n,s.type===Mt.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,s.offset)}this.staticBuffer._updateID++},i.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},i}(),Fw=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,Bw=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`,Gw=function(i){Jd(t,i);function t(e){var n=i.call(this,e)||this;return n.shader=null,n.properties=null,n.tempMatrix=new Se,n.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:n.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:n.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:n.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:n.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:Mt.UNSIGNED_BYTE,uploadFunction:n.uploadTint,offset:0}],n.shader=oi.from(Bw,Fw,{}),n.state=Wi.for2d(),n}return t.prototype.render=function(e){var n=e.children,r=e._maxSize,s=e._batchSize,a=this.renderer,o=n.length;if(o!==0){o>r&&!e.autoResize&&(o=r);var h=e._buffers;h||(h=e._buffers=this.generateBuffers(e));var l=n[0]._texture.baseTexture,u=l.alphaMode>0;this.state.blendMode=Sd(e.blendMode,u),a.state.set(this.state);var c=a.gl,f=e.worldTransform.copyTo(this.tempMatrix);f.prepend(a.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=f.toArray(!0),this.shader.uniforms.uColor=Yb(e.tintRgb,e.worldAlpha,this.shader.uniforms.uColor,u),this.shader.uniforms.uSampler=l,this.renderer.shader.bind(this.shader);for(var d=!1,m=0,_=0;m<o;m+=s,_+=1){var p=o-m;p>s&&(p=s),_>=h.length&&h.push(this._generateOneMoreBuffer(e));var v=h[_];v.uploadDynamic(n,m,p);var y=e._bufferUpdateIDs[_]||0;d=d||v._updateID<y,d&&(v._updateID=e._updateID,v.uploadStatic(n,m,p)),a.geometry.bind(v.geometry),c.drawElements(c.TRIANGLES,p*6,c.UNSIGNED_SHORT,0)}}},t.prototype.generateBuffers=function(e){for(var n=[],r=e._maxSize,s=e._batchSize,a=e._properties,o=0;o<r;o+=s)n.push(new rf(this.properties,a,s));return n},t.prototype._generateOneMoreBuffer=function(e){var n=e._batchSize,r=e._properties;return new rf(this.properties,r,n)},t.prototype.uploadVertices=function(e,n,r,s,a,o){for(var h=0,l=0,u=0,c=0,f=0;f<r;++f){var d=e[n+f],m=d._texture,_=d.scale.x,p=d.scale.y,v=m.trim,y=m.orig;v?(l=v.x-d.anchor.x*y.width,h=l+v.width,c=v.y-d.anchor.y*y.height,u=c+v.height):(h=y.width*(1-d.anchor.x),l=y.width*-d.anchor.x,u=y.height*(1-d.anchor.y),c=y.height*-d.anchor.y),s[o]=l*_,s[o+1]=c*p,s[o+a]=h*_,s[o+a+1]=c*p,s[o+a*2]=h*_,s[o+a*2+1]=u*p,s[o+a*3]=l*_,s[o+a*3+1]=u*p,o+=a*4}},t.prototype.uploadPosition=function(e,n,r,s,a,o){for(var h=0;h<r;h++){var l=e[n+h].position;s[o]=l.x,s[o+1]=l.y,s[o+a]=l.x,s[o+a+1]=l.y,s[o+a*2]=l.x,s[o+a*2+1]=l.y,s[o+a*3]=l.x,s[o+a*3+1]=l.y,o+=a*4}},t.prototype.uploadRotation=function(e,n,r,s,a,o){for(var h=0;h<r;h++){var l=e[n+h].rotation;s[o]=l,s[o+a]=l,s[o+a*2]=l,s[o+a*3]=l,o+=a*4}},t.prototype.uploadUvs=function(e,n,r,s,a,o){for(var h=0;h<r;++h){var l=e[n+h]._texture._uvs;l?(s[o]=l.x0,s[o+1]=l.y0,s[o+a]=l.x1,s[o+a+1]=l.y1,s[o+a*2]=l.x2,s[o+a*2+1]=l.y2,s[o+a*3]=l.x3,s[o+a*3+1]=l.y3,o+=a*4):(s[o]=0,s[o+1]=0,s[o+a]=0,s[o+a+1]=0,s[o+a*2]=0,s[o+a*2+1]=0,s[o+a*3]=0,s[o+a*3+1]=0,o+=a*4)}},t.prototype.uploadTint=function(e,n,r,s,a,o){for(var h=0;h<r;++h){var l=e[n+h],u=l._texture.baseTexture.alphaMode>0,c=l.alpha,f=c<1&&u?Cl(l._tintRGB,c):l._tintRGB+(c*255<<24);s[o]=f,s[o+a]=f,s[o+a*2]=f,s[o+a*3]=f,o+=a*4}},t.prototype.destroy=function(){i.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},t.extension={name:"particle",type:Qt.RendererPlugin},t}($a);/*!
 * @pixi/graphics - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Vn;(function(i){i.MITER="miter",i.BEVEL="bevel",i.ROUND="round"})(Vn||(Vn={}));var ri;(function(i){i.BUTT="butt",i.ROUND="round",i.SQUARE="square"})(ri||(ri={}));var os={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(i,t){if(t===void 0&&(t=20),!this.adaptive||!i||isNaN(i))return t;var e=Math.ceil(i/this.maxLength);return e<this.minSegments?e=this.minSegments:e>this.maxSegments&&(e=this.maxSegments),e}},Kd=function(){function i(){this.color=16777215,this.alpha=1,this.texture=Ut.WHITE,this.matrix=null,this.visible=!1,this.reset()}return i.prototype.clone=function(){var t=new i;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t},i.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=Ut.WHITE,this.matrix=null,this.visible=!1},i.prototype.destroy=function(){this.texture=null,this.matrix=null},i}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Jh=function(i,t){return Jh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Jh(i,t)};function Ll(i,t){Jh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function sf(i,t){var e,n;t===void 0&&(t=!1);var r=i.length;if(!(r<6)){for(var s=0,a=0,o=i[r-2],h=i[r-1];a<r;a+=2){var l=i[a],u=i[a+1];s+=(l-o)*(u+h),o=l,h=u}if(!t&&s>0||t&&s<=0)for(var c=r/2,a=c+c%2;a<r;a+=2){var f=r-a-2,d=r-a-1,m=a,_=a+1;e=[i[m],i[f]],i[f]=e[0],i[m]=e[1],n=[i[_],i[d]],i[d]=n[0],i[_]=n[1]}}}var Zd={build:function(i){i.points=i.shape.points.slice()},triangulate:function(i,t){var e=i.points,n=i.holes,r=t.points,s=t.indices;if(e.length>=6){sf(e,!1);for(var a=[],o=0;o<n.length;o++){var h=n[o];sf(h.points,!0),a.push(e.length/2),e=e.concat(h.points)}var l=xd(e,a,2);if(!l)return;for(var u=r.length/2,o=0;o<l.length;o+=3)s.push(l[o]+u),s.push(l[o+1]+u),s.push(l[o+2]+u);for(var o=0;o<e.length;o++)r.push(e[o])}}},Na={build:function(i){var t=i.points,e,n,r,s,a,o;if(i.type===Re.CIRC){var h=i.shape;e=h.x,n=h.y,a=o=h.radius,r=s=0}else if(i.type===Re.ELIP){var l=i.shape;e=l.x,n=l.y,a=l.width,o=l.height,r=s=0}else{var u=i.shape,c=u.width/2,f=u.height/2;e=u.x+c,n=u.y+f,a=o=Math.max(0,Math.min(u.radius,Math.min(c,f))),r=c-a,s=f-o}if(!(a>=0&&o>=0&&r>=0&&s>=0)){t.length=0;return}var d=Math.ceil(2.3*Math.sqrt(a+o)),m=d*8+(r?4:0)+(s?4:0);if(t.length=m,m!==0){if(d===0){t.length=8,t[0]=t[6]=e+r,t[1]=t[3]=n+s,t[2]=t[4]=e-r,t[5]=t[7]=n-s;return}var _=0,p=d*4+(r?2:0)+2,v=p,y=m;{var g=r+a,T=s,E=e+g,b=e-g,w=n+T;if(t[_++]=E,t[_++]=w,t[--p]=w,t[--p]=b,s){var C=n-T;t[v++]=b,t[v++]=C,t[--y]=C,t[--y]=E}}for(var x=1;x<d;x++){var S=Math.PI/2*(x/d),g=r+Math.cos(S)*a,T=s+Math.sin(S)*o,E=e+g,b=e-g,w=n+T,C=n-T;t[_++]=E,t[_++]=w,t[--p]=w,t[--p]=b,t[v++]=b,t[v++]=C,t[--y]=C,t[--y]=E}{var g=r,T=s+o,E=e+g,b=e-g,w=n+T,C=n-T;t[_++]=E,t[_++]=w,t[--y]=C,t[--y]=E,r&&(t[_++]=b,t[_++]=w,t[--y]=C,t[--y]=b)}}},triangulate:function(i,t){var e=i.points,n=t.points,r=t.indices;if(e.length!==0){var s=n.length/2,a=s,o,h;if(i.type!==Re.RREC){var l=i.shape;o=l.x,h=l.y}else{var u=i.shape;o=u.x+u.width/2,h=u.y+u.height/2}var c=i.matrix;n.push(i.matrix?c.a*o+c.c*h+c.tx:o,i.matrix?c.b*o+c.d*h+c.ty:h),s++,n.push(e[0],e[1]);for(var f=2;f<e.length;f+=2)n.push(e[f],e[f+1]),r.push(s++,a,s);r.push(a+1,a,s)}}},kw={build:function(i){var t=i.shape,e=t.x,n=t.y,r=t.width,s=t.height,a=i.points;a.length=0,a.push(e,n,e+r,n,e+r,n+s,e,n+s)},triangulate:function(i,t){var e=i.points,n=t.points,r=n.length/2;n.push(e[0],e[1],e[2],e[3],e[6],e[7],e[4],e[5]),t.indices.push(r,r+1,r+2,r+1,r+2,r+3)}};function hr(i,t,e){var n=t-i;return i+n*e}function da(i,t,e,n,r,s,a){a===void 0&&(a=[]);for(var o=20,h=a,l=0,u=0,c=0,f=0,d=0,m=0,_=0,p=0;_<=o;++_)p=_/o,l=hr(i,e,p),u=hr(t,n,p),c=hr(e,r,p),f=hr(n,s,p),d=hr(l,c,p),m=hr(u,f,p),!(_===0&&h[h.length-2]===d&&h[h.length-1]===m)&&h.push(d,m);return h}var Hw={build:function(i){if(Fa.nextRoundedRectBehavior){Na.build(i);return}var t=i.shape,e=i.points,n=t.x,r=t.y,s=t.width,a=t.height,o=Math.max(0,Math.min(t.radius,Math.min(s,a)/2));e.length=0,o?(da(n,r+o,n,r,n+o,r,e),da(n+s-o,r,n+s,r,n+s,r+o,e),da(n+s,r+a-o,n+s,r+a,n+s-o,r+a,e),da(n+o,r+a,n,r+a,n,r+a-o,e)):e.push(n,r,n+s,r,n+s,r+a,n,r+a)},triangulate:function(i,t){if(Fa.nextRoundedRectBehavior){Na.triangulate(i,t);return}for(var e=i.points,n=t.points,r=t.indices,s=n.length/2,a=xd(e,null,2),o=0,h=a.length;o<h;o+=3)r.push(a[o]+s),r.push(a[o+1]+s),r.push(a[o+2]+s);for(var o=0,h=e.length;o<h;o++)n.push(e[o],e[++o])}};function af(i,t,e,n,r,s,a,o){var h=i-e*r,l=t-n*r,u=i+e*s,c=t+n*s,f,d;a?(f=n,d=-e):(f=-n,d=e);var m=h+f,_=l+d,p=u+f,v=c+d;return o.push(m,_),o.push(p,v),2}function Ti(i,t,e,n,r,s,a,o){var h=e-i,l=n-t,u=Math.atan2(h,l),c=Math.atan2(r-i,s-t);o&&u<c?u+=Math.PI*2:!o&&u>c&&(c+=Math.PI*2);var f=u,d=c-u,m=Math.abs(d),_=Math.sqrt(h*h+l*l),p=(15*m*Math.sqrt(_)/Math.PI>>0)+1,v=d/p;if(f+=v,o){a.push(i,t),a.push(e,n);for(var y=1,g=f;y<p;y++,g+=v)a.push(i,t),a.push(i+Math.sin(g)*_,t+Math.cos(g)*_);a.push(i,t),a.push(r,s)}else{a.push(e,n),a.push(i,t);for(var y=1,g=f;y<p;y++,g+=v)a.push(i+Math.sin(g)*_,t+Math.cos(g)*_),a.push(i,t);a.push(r,s),a.push(i,t)}return p*2}function zw(i,t){var e=i.shape,n=i.points||e.points.slice(),r=t.closePointEps;if(n.length!==0){var s=i.lineStyle,a=new ie(n[0],n[1]),o=new ie(n[n.length-2],n[n.length-1]),h=e.type!==Re.POLY||e.closeStroke,l=Math.abs(a.x-o.x)<r&&Math.abs(a.y-o.y)<r;if(h){n=n.slice(),l&&(n.pop(),n.pop(),o.set(n[n.length-2],n[n.length-1]));var u=(a.x+o.x)*.5,c=(o.y+a.y)*.5;n.unshift(u,c),n.push(u,c)}var f=t.points,d=n.length/2,m=n.length,_=f.length/2,p=s.width/2,v=p*p,y=s.miterLimit*s.miterLimit,g=n[0],T=n[1],E=n[2],b=n[3],w=0,C=0,x=-(T-b),S=g-E,F=0,H=0,L=Math.sqrt(x*x+S*S);x/=L,S/=L,x*=p,S*=p;var G=s.alignment,P=(1-G)*2,B=G*2;h||(s.cap===ri.ROUND?m+=Ti(g-x*(P-B)*.5,T-S*(P-B)*.5,g-x*P,T-S*P,g+x*B,T+S*B,f,!0)+2:s.cap===ri.SQUARE&&(m+=af(g,T,x,S,P,B,!0,f))),f.push(g-x*P,T-S*P),f.push(g+x*B,T+S*B);for(var z=1;z<d-1;++z){g=n[(z-1)*2],T=n[(z-1)*2+1],E=n[z*2],b=n[z*2+1],w=n[(z+1)*2],C=n[(z+1)*2+1],x=-(T-b),S=g-E,L=Math.sqrt(x*x+S*S),x/=L,S/=L,x*=p,S*=p,F=-(b-C),H=E-w,L=Math.sqrt(F*F+H*H),F/=L,H/=L,F*=p,H*=p;var Y=E-g,K=T-b,U=E-w,W=C-b,O=Y*U+K*W,j=K*U-W*Y,$=j<0;if(Math.abs(j)<.001*Math.abs(O)){f.push(E-x*P,b-S*P),f.push(E+x*B,b+S*B),O>=0&&(s.join===Vn.ROUND?m+=Ti(E,b,E-x*P,b-S*P,E-F*P,b-H*P,f,!1)+4:m+=2,f.push(E-F*B,b-H*B),f.push(E+F*P,b+H*P));continue}var et=(-x+g)*(-S+b)-(-x+E)*(-S+T),tt=(-F+w)*(-H+b)-(-F+E)*(-H+C),ht=(Y*tt-U*et)/j,Et=(W*et-K*tt)/j,vt=(ht-E)*(ht-E)+(Et-b)*(Et-b),Gt=E+(ht-E)*P,pt=b+(Et-b)*P,D=E-(ht-E)*B,Nt=b-(Et-b)*B,st=Math.min(Y*Y+K*K,U*U+W*W),St=$?P:B,xt=st+St*St*v,Tt=vt<=xt;Tt?s.join===Vn.BEVEL||vt/v>y?($?(f.push(Gt,pt),f.push(E+x*B,b+S*B),f.push(Gt,pt),f.push(E+F*B,b+H*B)):(f.push(E-x*P,b-S*P),f.push(D,Nt),f.push(E-F*P,b-H*P),f.push(D,Nt)),m+=2):s.join===Vn.ROUND?$?(f.push(Gt,pt),f.push(E+x*B,b+S*B),m+=Ti(E,b,E+x*B,b+S*B,E+F*B,b+H*B,f,!0)+4,f.push(Gt,pt),f.push(E+F*B,b+H*B)):(f.push(E-x*P,b-S*P),f.push(D,Nt),m+=Ti(E,b,E-x*P,b-S*P,E-F*P,b-H*P,f,!1)+4,f.push(E-F*P,b-H*P),f.push(D,Nt)):(f.push(Gt,pt),f.push(D,Nt)):(f.push(E-x*P,b-S*P),f.push(E+x*B,b+S*B),s.join===Vn.ROUND?$?m+=Ti(E,b,E+x*B,b+S*B,E+F*B,b+H*B,f,!0)+2:m+=Ti(E,b,E-x*P,b-S*P,E-F*P,b-H*P,f,!1)+2:s.join===Vn.MITER&&vt/v<=y&&($?(f.push(D,Nt),f.push(D,Nt)):(f.push(Gt,pt),f.push(Gt,pt)),m+=2),f.push(E-F*P,b-H*P),f.push(E+F*B,b+H*B),m+=2)}g=n[(d-2)*2],T=n[(d-2)*2+1],E=n[(d-1)*2],b=n[(d-1)*2+1],x=-(T-b),S=g-E,L=Math.sqrt(x*x+S*S),x/=L,S/=L,x*=p,S*=p,f.push(E-x*P,b-S*P),f.push(E+x*B,b+S*B),h||(s.cap===ri.ROUND?m+=Ti(E-x*(P-B)*.5,b-S*(P-B)*.5,E-x*P,b-S*P,E+x*B,b+S*B,f,!1)+2:s.cap===ri.SQUARE&&(m+=af(E,b,x,S,P,B,!1,f)));for(var It=t.indices,Lt=os.epsilon*os.epsilon,z=_;z<m+_-2;++z)g=f[z*2],T=f[z*2+1],E=f[(z+1)*2],b=f[(z+1)*2+1],w=f[(z+2)*2],C=f[(z+2)*2+1],!(Math.abs(g*(b-C)+E*(C-T)+w*(T-b))<Lt)&&It.push(z,z+1,z+2)}}function Vw(i,t){var e=0,n=i.shape,r=i.points||n.points,s=n.type!==Re.POLY||n.closeStroke;if(r.length!==0){var a=t.points,o=t.indices,h=r.length/2,l=a.length/2,u=l;for(a.push(r[0],r[1]),e=1;e<h;e++)a.push(r[e*2],r[e*2+1]),o.push(u,u+1),u++;s&&o.push(u,l)}}function of(i,t){i.lineStyle.native?Vw(i,t):zw(i,t)}var hf=function(){function i(){}return i.curveTo=function(t,e,n,r,s,a){var o=a[a.length-2],h=a[a.length-1],l=h-e,u=o-t,c=r-e,f=n-t,d=Math.abs(l*f-u*c);if(d<1e-8||s===0)return(a[a.length-2]!==t||a[a.length-1]!==e)&&a.push(t,e),null;var m=l*l+u*u,_=c*c+f*f,p=l*c+u*f,v=s*Math.sqrt(m)/d,y=s*Math.sqrt(_)/d,g=v*p/m,T=y*p/_,E=v*f+y*u,b=v*c+y*l,w=u*(y+g),C=l*(y+g),x=f*(v+T),S=c*(v+T),F=Math.atan2(C-b,w-E),H=Math.atan2(S-b,x-E);return{cx:E+t,cy:b+e,radius:s,startAngle:F,endAngle:H,anticlockwise:u*c>f*l}},i.arc=function(t,e,n,r,s,a,o,h,l){for(var u=o-a,c=os._segmentsCount(Math.abs(u)*s,Math.ceil(Math.abs(u)/La)*40),f=u/(c*2),d=f*2,m=Math.cos(f),_=Math.sin(f),p=c-1,v=p%1/p,y=0;y<=p;++y){var g=y+v*y,T=f+a+d*g,E=Math.cos(T),b=-Math.sin(T);l.push((m*E+_*b)*s+n,(m*-b+_*E)*s+r)}},i}(),Ww=function(){function i(){}return i.curveLength=function(t,e,n,r,s,a,o,h){for(var l=10,u=0,c=0,f=0,d=0,m=0,_=0,p=0,v=0,y=0,g=0,T=0,E=t,b=e,w=1;w<=l;++w)c=w/l,f=c*c,d=f*c,m=1-c,_=m*m,p=_*m,v=p*t+3*_*c*n+3*m*f*s+d*o,y=p*e+3*_*c*r+3*m*f*a+d*h,g=E-v,T=b-y,E=v,b=y,u+=Math.sqrt(g*g+T*T);return u},i.curveTo=function(t,e,n,r,s,a,o){var h=o[o.length-2],l=o[o.length-1];o.length-=2;var u=os._segmentsCount(i.curveLength(h,l,t,e,n,r,s,a)),c=0,f=0,d=0,m=0,_=0;o.push(h,l);for(var p=1,v=0;p<=u;++p)v=p/u,c=1-v,f=c*c,d=f*c,m=v*v,_=m*v,o.push(d*h+3*f*v*t+3*c*m*n+_*s,d*l+3*f*v*e+3*c*m*r+_*a)},i}(),Xw=function(){function i(){}return i.curveLength=function(t,e,n,r,s,a){var o=t-2*n+s,h=e-2*r+a,l=2*n-2*t,u=2*r-2*e,c=4*(o*o+h*h),f=4*(o*l+h*u),d=l*l+u*u,m=2*Math.sqrt(c+f+d),_=Math.sqrt(c),p=2*c*_,v=2*Math.sqrt(d),y=f/_;return(p*m+_*f*(m-v)+(4*d*c-f*f)*Math.log((2*_+y+m)/(y+v)))/(4*p)},i.curveTo=function(t,e,n,r,s){for(var a=s[s.length-2],o=s[s.length-1],h=os._segmentsCount(i.curveLength(a,o,t,e,n,r)),l=0,u=0,c=1;c<=h;++c){var f=c/h;l=a+(t-a)*f,u=o+(e-o)*f,s.push(l+(t+(n-t)*f-l)*f,u+(e+(r-e)*f-u)*f)}},i}(),Yw=function(){function i(){this.reset()}return i.prototype.begin=function(t,e,n){this.reset(),this.style=t,this.start=e,this.attribStart=n},i.prototype.end=function(t,e){this.attribSize=e-this.attribStart,this.size=t-this.start},i.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},i}(),bi,oh=(bi={},bi[Re.POLY]=Zd,bi[Re.CIRC]=Na,bi[Re.ELIP]=Na,bi[Re.RECT]=kw,bi[Re.RREC]=Hw,bi),lf=[],pa=[],uf=function(){function i(t,e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=null),this.points=[],this.holes=[],this.shape=t,this.lineStyle=n,this.fillStyle=e,this.matrix=r,this.type=t.type}return i.prototype.clone=function(){return new i(this.shape,this.fillStyle,this.lineStyle,this.matrix)},i.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},i}(),lr=new ie,jw=function(i){Ll(t,i);function t(){var e=i.call(this)||this;return e.closePointEps=1e-4,e.boundsPadding=0,e.uvsFloat32=null,e.indicesUint16=null,e.batchable=!1,e.points=[],e.colors=[],e.uvs=[],e.indices=[],e.textureIds=[],e.graphicsData=[],e.drawCalls=[],e.batchDirty=-1,e.batches=[],e.dirty=0,e.cacheDirty=-1,e.clearDirty=0,e.shapeIndex=0,e._bounds=new Oa,e.boundsDirty=-1,e}return Object.defineProperty(t.prototype,"bounds",{get:function(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),t.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var e=0;e<this.drawCalls.length;e++)this.drawCalls[e].texArray.clear(),pa.push(this.drawCalls[e]);this.drawCalls.length=0;for(var e=0;e<this.batches.length;e++){var n=this.batches[e];n.reset(),lf.push(n)}this.batches.length=0},t.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},t.prototype.drawShape=function(e,n,r,s){n===void 0&&(n=null),r===void 0&&(r=null),s===void 0&&(s=null);var a=new uf(e,n,r,s);return this.graphicsData.push(a),this.dirty++,this},t.prototype.drawHole=function(e,n){if(n===void 0&&(n=null),!this.graphicsData.length)return null;var r=new uf(e,null,null,n),s=this.graphicsData[this.graphicsData.length-1];return r.lineStyle=s.lineStyle,s.holes.push(r),this.dirty++,this},t.prototype.destroy=function(){i.prototype.destroy.call(this);for(var e=0;e<this.graphicsData.length;++e)this.graphicsData[e].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},t.prototype.containsPoint=function(e){for(var n=this.graphicsData,r=0;r<n.length;++r){var s=n[r];if(s.fillStyle.visible&&s.shape&&(s.matrix?s.matrix.applyInverse(e,lr):lr.copyFrom(e),s.shape.contains(lr.x,lr.y))){var a=!1;if(s.holes)for(var o=0;o<s.holes.length;o++){var h=s.holes[o];if(h.shape.contains(lr.x,lr.y)){a=!0;break}}if(!a)return!0}}return!1},t.prototype.updateBatches=function(){if(!this.graphicsData.length){this.batchable=!0;return}if(this.validateBatching()){this.cacheDirty=this.dirty;var e=this.uvs,n=this.graphicsData,r=null,s=null;this.batches.length>0&&(r=this.batches[this.batches.length-1],s=r.style);for(var a=this.shapeIndex;a<n.length;a++){this.shapeIndex++;var o=n[a],h=o.fillStyle,l=o.lineStyle,u=oh[o.type];u.build(o),o.matrix&&this.transformPoints(o.points,o.matrix),(h.visible||l.visible)&&this.processHoles(o.holes);for(var c=0;c<2;c++){var f=c===0?h:l;if(f.visible){var d=f.texture.baseTexture,m=this.indices.length,_=this.points.length/2;d.wrapMode=Tn.REPEAT,c===0?this.processFill(o):this.processLine(o);var p=this.points.length/2-_;p!==0&&(r&&!this._compareStyles(s,f)&&(r.end(m,_),r=null),r||(r=lf.pop()||new Yw,r.begin(f,m,_),this.batches.push(r),s=f),this.addUvs(this.points,e,f.texture,_,p,f.matrix))}}}var v=this.indices.length,y=this.points.length/2;if(r&&r.end(v,y),this.batches.length===0){this.batchable=!0;return}var g=y>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&g===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=g?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},t.prototype._compareStyles=function(e,n){return!(!e||!n||e.texture.baseTexture!==n.texture.baseTexture||e.color+e.alpha!==n.color+n.alpha||!!e.native!=!!n.native)},t.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var e=0,n=this.graphicsData.length;e<n;e++){var r=this.graphicsData[e],s=r.fillStyle,a=r.lineStyle;if(s&&!s.texture.baseTexture.valid||a&&!a.texture.baseTexture.valid)return!1}return!0},t.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var e=this.batches,n=0,r=e.length;n<r;n++)for(var s=e[n],a=0;a<s.size;a++){var o=s.start+a;this.indicesUint16[o]=this.indicesUint16[o]-s.attribStart}},t.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var e=this.batches,n=0;n<e.length;n++)if(e[n].style.native)return!1;return this.points.length<t.BATCHABLE_SIZE*2},t.prototype.buildDrawCalls=function(){for(var e=++jt._globalBatch,n=0;n<this.drawCalls.length;n++)this.drawCalls[n].texArray.clear(),pa.push(this.drawCalls[n]);this.drawCalls.length=0;var r=this.colors,s=this.textureIds,a=pa.pop();a||(a=new Hh,a.texArray=new zh),a.texArray.count=0,a.start=0,a.size=0,a.type=un.TRIANGLES;var o=0,h=null,l=0,u=!1,c=un.TRIANGLES,f=0;this.drawCalls.push(a);for(var n=0;n<this.batches.length;n++){var d=this.batches[n],m=8,_=d.style,p=_.texture.baseTexture;u!==!!_.native&&(u=!!_.native,c=u?un.LINES:un.TRIANGLES,h=null,o=m,e++),h!==p&&(h=p,p._batchEnabled!==e&&(o===m&&(e++,o=0,a.size>0&&(a=pa.pop(),a||(a=new Hh,a.texArray=new zh),this.drawCalls.push(a)),a.start=f,a.size=0,a.texArray.count=0,a.type=c),p.touched=1,p._batchEnabled=e,p._batchLocation=o,p.wrapMode=Tn.REPEAT,a.texArray.elements[a.texArray.count++]=p,o++)),a.size+=d.size,f+=d.size,l=p._batchLocation,this.addColors(r,_.color,_.alpha,d.attribSize,d.attribStart),this.addTextureIds(s,l,d.attribSize,d.attribStart)}jt._globalBatch=e,this.packAttributes()},t.prototype.packAttributes=function(){for(var e=this.points,n=this.uvs,r=this.colors,s=this.textureIds,a=new ArrayBuffer(e.length*3*4),o=new Float32Array(a),h=new Uint32Array(a),l=0,u=0;u<e.length/2;u++)o[l++]=e[u*2],o[l++]=e[u*2+1],o[l++]=n[u*2],o[l++]=n[u*2+1],h[l++]=r[u],o[l++]=s[u];this._buffer.update(a),this._indexBuffer.update(this.indicesUint16)},t.prototype.processFill=function(e){if(e.holes.length)Zd.triangulate(e,this);else{var n=oh[e.type];n.triangulate(e,this)}},t.prototype.processLine=function(e){of(e,this);for(var n=0;n<e.holes.length;n++)of(e.holes[n],this)},t.prototype.processHoles=function(e){for(var n=0;n<e.length;n++){var r=e[n],s=oh[r.type];s.build(r),r.matrix&&this.transformPoints(r.points,r.matrix)}},t.prototype.calculateBounds=function(){var e=this._bounds;e.clear(),e.addVertexData(this.points,0,this.points.length),e.pad(this.boundsPadding,this.boundsPadding)},t.prototype.transformPoints=function(e,n){for(var r=0;r<e.length/2;r++){var s=e[r*2],a=e[r*2+1];e[r*2]=n.a*s+n.c*a+n.tx,e[r*2+1]=n.b*s+n.d*a+n.ty}},t.prototype.addColors=function(e,n,r,s,a){a===void 0&&(a=0);var o=(n>>16)+(n&65280)+((n&255)<<16),h=Cl(o,r);e.length=Math.max(e.length,a+s);for(var l=0;l<s;l++)e[a+l]=h},t.prototype.addTextureIds=function(e,n,r,s){s===void 0&&(s=0),e.length=Math.max(e.length,s+r);for(var a=0;a<r;a++)e[s+a]=n},t.prototype.addUvs=function(e,n,r,s,a,o){o===void 0&&(o=null);for(var h=0,l=n.length,u=r.frame;h<a;){var c=e[(s+h)*2],f=e[(s+h)*2+1];if(o){var d=o.a*c+o.c*f+o.tx;f=o.b*c+o.d*f+o.ty,c=d}h++,n.push(c/u.width,f/u.height)}var m=r.baseTexture;(u.width<m.width||u.height<m.height)&&this.adjustUvs(n,r,l,a)},t.prototype.adjustUvs=function(e,n,r,s){for(var a=n.baseTexture,o=1e-6,h=r+s*2,l=n.frame,u=l.width/a.width,c=l.height/a.height,f=l.x/l.width,d=l.y/l.height,m=Math.floor(e[r]+o),_=Math.floor(e[r+1]+o),p=r+2;p<h;p+=2)m=Math.min(m,Math.floor(e[p]+o)),_=Math.min(_,Math.floor(e[p+1]+o));f-=m,d-=_;for(var p=r;p<h;p+=2)e[p]=(e[p]+f)*u,e[p+1]=(e[p+1]+d)*c},t.BATCHABLE_SIZE=100,t}(Xd),qw=function(i){Ll(t,i);function t(){var e=i!==null&&i.apply(this,arguments)||this;return e.width=0,e.alignment=.5,e.native=!1,e.cap=ri.BUTT,e.join=Vn.MITER,e.miterLimit=10,e}return t.prototype.clone=function(){var e=new t;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e.width=this.width,e.alignment=this.alignment,e.native=this.native,e.cap=this.cap,e.join=this.join,e.miterLimit=this.miterLimit,e},t.prototype.reset=function(){i.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},t}(Kd),$w=new Float32Array(3),hh={},Fa=function(i){Ll(t,i);function t(e){e===void 0&&(e=null);var n=i.call(this)||this;return n.shader=null,n.pluginName="batch",n.currentPath=null,n.batches=[],n.batchTint=-1,n.batchDirty=-1,n.vertexData=null,n._fillStyle=new Kd,n._lineStyle=new qw,n._matrix=null,n._holeMode=!1,n.state=Wi.for2d(),n._geometry=e||new jw,n._geometry.refCount++,n._transformID=-1,n.tint=16777215,n.blendMode=wt.NORMAL,n}return Object.defineProperty(t.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return this.finishPoly(),new t(this._geometry)},Object.defineProperty(t.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(e){this.state.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){this._tint=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),t.prototype.lineStyle=function(e,n,r,s,a){return e===void 0&&(e=null),n===void 0&&(n=0),r===void 0&&(r=1),s===void 0&&(s=.5),a===void 0&&(a=!1),typeof e=="number"&&(e={width:e,color:n,alpha:r,alignment:s,native:a}),this.lineTextureStyle(e)},t.prototype.lineTextureStyle=function(e){e=Object.assign({width:0,texture:Ut.WHITE,color:e&&e.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:ri.BUTT,join:Vn.MITER,miterLimit:10},e),this.currentPath&&this.startPoly();var n=e.width>0&&e.alpha>0;return n?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._lineStyle,{visible:n},e)):this._lineStyle.reset(),this},t.prototype.startPoly=function(){if(this.currentPath){var e=this.currentPath.points,n=this.currentPath.points.length;n>2&&(this.drawShape(this.currentPath),this.currentPath=new Ta,this.currentPath.closeStroke=!1,this.currentPath.points.push(e[n-2],e[n-1]))}else this.currentPath=new Ta,this.currentPath.closeStroke=!1},t.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},t.prototype.moveTo=function(e,n){return this.startPoly(),this.currentPath.points[0]=e,this.currentPath.points[1]=n,this},t.prototype.lineTo=function(e,n){this.currentPath||this.moveTo(0,0);var r=this.currentPath.points,s=r[r.length-2],a=r[r.length-1];return(s!==e||a!==n)&&r.push(e,n),this},t.prototype._initCurve=function(e,n){e===void 0&&(e=0),n===void 0&&(n=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[e,n]):this.moveTo(e,n)},t.prototype.quadraticCurveTo=function(e,n,r,s){this._initCurve();var a=this.currentPath.points;return a.length===0&&this.moveTo(0,0),Xw.curveTo(e,n,r,s,a),this},t.prototype.bezierCurveTo=function(e,n,r,s,a,o){return this._initCurve(),Ww.curveTo(e,n,r,s,a,o,this.currentPath.points),this},t.prototype.arcTo=function(e,n,r,s,a){this._initCurve(e,n);var o=this.currentPath.points,h=hf.curveTo(e,n,r,s,a,o);if(h){var l=h.cx,u=h.cy,c=h.radius,f=h.startAngle,d=h.endAngle,m=h.anticlockwise;this.arc(l,u,c,f,d,m)}return this},t.prototype.arc=function(e,n,r,s,a,o){if(o===void 0&&(o=!1),s===a)return this;!o&&a<=s?a+=La:o&&s<=a&&(s+=La);var h=a-s;if(h===0)return this;var l=e+Math.cos(s)*r,u=n+Math.sin(s)*r,c=this._geometry.closePointEps,f=this.currentPath?this.currentPath.points:null;if(f){var d=Math.abs(f[f.length-2]-l),m=Math.abs(f[f.length-1]-u);d<c&&m<c||f.push(l,u)}else this.moveTo(l,u),f=this.currentPath.points;return hf.arc(l,u,e,n,r,s,a,o,f),this},t.prototype.beginFill=function(e,n){return e===void 0&&(e=0),n===void 0&&(n=1),this.beginTextureFill({texture:Ut.WHITE,color:e,alpha:n})},t.prototype.beginTextureFill=function(e){e=Object.assign({texture:Ut.WHITE,color:16777215,alpha:1,matrix:null},e),this.currentPath&&this.startPoly();var n=e.alpha>0;return n?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._fillStyle,{visible:n},e)):this._fillStyle.reset(),this},t.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},t.prototype.drawRect=function(e,n,r,s){return this.drawShape(new qt(e,n,r,s))},t.prototype.drawRoundedRect=function(e,n,r,s,a){return this.drawShape(new eS(e,n,r,s,a))},t.prototype.drawCircle=function(e,n,r){return this.drawShape(new Qb(e,n,r))},t.prototype.drawEllipse=function(e,n,r,s){return this.drawShape(new tS(e,n,r,s))},t.prototype.drawPolygon=function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];var s,a=!0,o=n[0];o.points?(a=o.closeStroke,s=o.points):Array.isArray(n[0])?s=n[0]:s=n;var h=new Ta(s);return h.closeStroke=a,this.drawShape(h),this},t.prototype.drawShape=function(e){return this._holeMode?this._geometry.drawHole(e,this._matrix):this._geometry.drawShape(e,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},t.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},t.prototype.isFastRect=function(){var e=this._geometry.graphicsData;return e.length===1&&e[0].shape.type===Re.RECT&&!e[0].matrix&&!e[0].holes.length&&!(e[0].lineStyle.visible&&e[0].lineStyle.width)},t.prototype._render=function(e){this.finishPoly();var n=this._geometry;n.updateBatches(),n.batchable?(this.batchDirty!==n.batchDirty&&this._populateBatches(),this._renderBatched(e)):(e.batch.flush(),this._renderDirect(e))},t.prototype._populateBatches=function(){var e=this._geometry,n=this.blendMode,r=e.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=e.batchDirty,this.batches.length=r,this.vertexData=new Float32Array(e.points);for(var s=0;s<r;s++){var a=e.batches[s],o=a.style.color,h=new Float32Array(this.vertexData.buffer,a.attribStart*4*2,a.attribSize*2),l=new Float32Array(e.uvsFloat32.buffer,a.attribStart*4*2,a.attribSize*2),u=new Uint16Array(e.indicesUint16.buffer,a.start*2,a.size),c={vertexData:h,blendMode:n,indices:u,uvs:l,_batchRGB:wr(o),_tintRGB:o,_texture:a.style.texture,alpha:a.style.alpha,worldAlpha:1};this.batches[s]=c}},t.prototype._renderBatched=function(e){if(this.batches.length){e.batch.setObjectRenderer(e.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var n=0,r=this.batches.length;n<r;n++){var s=this.batches[n];s.worldAlpha=this.worldAlpha*s.alpha,e.plugins[this.pluginName].render(s)}}},t.prototype._renderDirect=function(e){var n=this._resolveDirectShader(e),r=this._geometry,s=this.tint,a=this.worldAlpha,o=n.uniforms,h=r.drawCalls;o.translationMatrix=this.transform.worldTransform,o.tint[0]=(s>>16&255)/255*a,o.tint[1]=(s>>8&255)/255*a,o.tint[2]=(s&255)/255*a,o.tint[3]=a,e.shader.bind(n),e.geometry.bind(r,n),e.state.set(this.state);for(var l=0,u=h.length;l<u;l++)this._renderDrawCallDirect(e,r.drawCalls[l])},t.prototype._renderDrawCallDirect=function(e,n){for(var r=n.texArray,s=n.type,a=n.size,o=n.start,h=r.count,l=0;l<h;l++)e.texture.bind(r.elements[l],l);e.geometry.draw(s,a,o)},t.prototype._resolveDirectShader=function(e){var n=this.shader,r=this.pluginName;if(!n){if(!hh[r]){for(var s=e.plugins[r].MAX_TEXTURES,a=new Int32Array(s),o=0;o<s;o++)a[o]=o;var h={tint:new Float32Array([1,1,1,1]),translationMatrix:new Se,default:Fi.from({uSamplers:a},!0)},l=e.plugins[r]._shader.program;hh[r]=new oi(l,h)}n=hh[r]}return n},t.prototype._calculateBounds=function(){this.finishPoly();var e=this._geometry;if(e.graphicsData.length){var n=e.bounds,r=n.minX,s=n.minY,a=n.maxX,o=n.maxY;this._bounds.addFrame(this.transform,r,s,a,o)}},t.prototype.containsPoint=function(e){return this.worldTransform.applyInverse(e,t._TEMP_POINT),this._geometry.containsPoint(t._TEMP_POINT)},t.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var e=wr(this.tint,$w),n=0;n<this.batches.length;n++){var r=this.batches[n],s=r._batchRGB,a=e[0]*s[0]*255,o=e[1]*s[1]*255,h=e[2]*s[2]*255,l=(a<<16)+(o<<8)+(h|0);r._tintRGB=(l>>16)+(l&65280)+((l&255)<<16)}}},t.prototype.calculateVertices=function(){var e=this.transform._worldID;if(this._transformID!==e){this._transformID=e;for(var n=this.transform.worldTransform,r=n.a,s=n.b,a=n.c,o=n.d,h=n.tx,l=n.ty,u=this._geometry.points,c=this.vertexData,f=0,d=0;d<u.length;d+=2){var m=u[d],_=u[d+1];c[f++]=r*m+a*_+h,c[f++]=o*_+s*m+l}}},t.prototype.closePath=function(){var e=this.currentPath;return e&&(e.closeStroke=!0,this.finishPoly()),this},t.prototype.setMatrix=function(e){return this._matrix=e,this},t.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},t.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},t.prototype.destroy=function(e){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,i.prototype.destroy.call(this,e)},t.nextRoundedRectBehavior=!1,t._TEMP_POINT=new ie,t}(Mn);/*!
 * @pixi/sprite - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Kh=function(i,t){return Kh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Kh(i,t)};function Jw(i,t){Kh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Vr=new ie,Kw=new Uint16Array([0,1,2,0,2,3]),Es=function(i){Jw(t,i);function t(e){var n=i.call(this)||this;return n._anchor=new mr(n._onAnchorUpdate,n,e?e.defaultAnchor.x:0,e?e.defaultAnchor.y:0),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=null,n.tint=16777215,n.blendMode=wt.NORMAL,n._cachedTint=16777215,n.uvs=null,n.texture=e||Ut.EMPTY,n.vertexData=new Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n._transformTrimmedID=-1,n._textureTrimmedID=-1,n.indices=Kw,n.pluginName="batch",n.isSprite=!0,n._roundPixels=dt.ROUND_PIXELS,n}return t.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=pr(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=pr(this.scale.y)*this._height/this._texture.orig.height)},t.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},t.prototype.calculateVertices=function(){var e=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===e._updateID)){this._textureID!==e._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=e._updateID;var n=this.transform.worldTransform,r=n.a,s=n.b,a=n.c,o=n.d,h=n.tx,l=n.ty,u=this.vertexData,c=e.trim,f=e.orig,d=this._anchor,m=0,_=0,p=0,v=0;if(c?(_=c.x-d._x*f.width,m=_+c.width,v=c.y-d._y*f.height,p=v+c.height):(_=-d._x*f.width,m=_+f.width,v=-d._y*f.height,p=v+f.height),u[0]=r*_+a*v+h,u[1]=o*v+s*_+l,u[2]=r*m+a*v+h,u[3]=o*v+s*m+l,u[4]=r*m+a*p+h,u[5]=o*p+s*m+l,u[6]=r*_+a*p+h,u[7]=o*p+s*_+l,this._roundPixels)for(var y=dt.RESOLUTION,g=0;g<u.length;++g)u[g]=Math.round((u[g]*y|0)/y)}},t.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var e=this._texture,n=this.vertexTrimmedData,r=e.orig,s=this._anchor,a=this.transform.worldTransform,o=a.a,h=a.b,l=a.c,u=a.d,c=a.tx,f=a.ty,d=-s._x*r.width,m=d+r.width,_=-s._y*r.height,p=_+r.height;n[0]=o*d+l*_+c,n[1]=u*_+h*d+f,n[2]=o*m+l*_+c,n[3]=u*_+h*m+f,n[4]=o*m+l*p+c,n[5]=u*p+h*m+f,n[6]=o*d+l*p+c,n[7]=u*p+h*d+f},t.prototype._render=function(e){this.calculateVertices(),e.batch.setObjectRenderer(e.plugins[this.pluginName]),e.plugins[this.pluginName].render(this)},t.prototype._calculateBounds=function(){var e=this._texture.trim,n=this._texture.orig;!e||e.width===n.width&&e.height===n.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},t.prototype.getLocalBounds=function(e){return this.children.length===0?(this._localBounds||(this._localBounds=new Oa),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new qt),e=this._localBoundsRect),this._localBounds.getRectangle(e)):i.prototype.getLocalBounds.call(this,e)},t.prototype.containsPoint=function(e){this.worldTransform.applyInverse(e,Vr);var n=this._texture.orig.width,r=this._texture.orig.height,s=-n*this.anchor.x,a=0;return Vr.x>=s&&Vr.x<s+n&&(a=-r*this.anchor.y,Vr.y>=a&&Vr.y<a+r)},t.prototype.destroy=function(e){i.prototype.destroy.call(this,e),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var n=typeof e=="boolean"?e:e&&e.texture;if(n){var r=typeof e=="boolean"?e:e&&e.baseTexture;this._texture.destroy(!!r)}this._texture=null},t.from=function(e,n){var r=e instanceof Ut?e:Ut.from(e,n);return new t(r)},Object.defineProperty(t.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(e){this._roundPixels!==e&&(this._transformID=-1),this._roundPixels=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(e){var n=pr(this.scale.x)||1;this.scale.x=n*e/this._texture.orig.width,this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(e){var n=pr(this.scale.y)||1;this.scale.y=n*e/this._texture.orig.height,this._height=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"anchor",{get:function(){return this._anchor},set:function(e){this._anchor.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){this._tint=e,this._tintRGB=(e>>16)+(e&65280)+((e&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"texture",{get:function(){return this._texture},set:function(e){this._texture!==e&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=e||Ut.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,e&&(e.baseTexture.valid?this._onTextureUpdate():e.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),t}(Mn);/*!
 * @pixi/text - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/text is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zh=function(i,t){return Zh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Zh(i,t)};function Zw(i,t){Zh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var hs;(function(i){i[i.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",i[i.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(hs||(hs={}));var lh={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:hs.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},Qw=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],Ar=function(){function i(t){this.styleID=0,this.reset(),ch(this,t,t)}return i.prototype.clone=function(){var t={};return ch(t,this,lh),new i(t)},i.prototype.reset=function(){ch(this,lh,lh)},Object.defineProperty(i.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"breakWords",{get:function(){return this._breakWords},set:function(t){this._breakWords!==t&&(this._breakWords=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(t){this._dropShadow!==t&&(this._dropShadow=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(t){this._dropShadowAlpha!==t&&(this._dropShadowAlpha=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(t){this._dropShadowAngle!==t&&(this._dropShadowAngle=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(t){this._dropShadowBlur!==t&&(this._dropShadowBlur=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(t){var e=uh(t);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(t){this._dropShadowDistance!==t&&(this._dropShadowDistance=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fill",{get:function(){return this._fill},set:function(t){var e=uh(t);this._fill!==e&&(this._fill=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(t){this._fillGradientType!==t&&(this._fillGradientType=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(t){tA(this._fillGradientStops,t)||(this._fillGradientStops=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(t){this.fontFamily!==t&&(this._fontFamily=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(t){this._fontVariant!==t&&(this._fontVariant=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(t){this._lineHeight!==t&&(this._lineHeight=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"leading",{get:function(){return this._leading},set:function(t){this._leading!==t&&(this._leading=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(t){this._lineJoin!==t&&(this._lineJoin=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(t){this._miterLimit!==t&&(this._miterLimit=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"padding",{get:function(){return this._padding},set:function(t){this._padding!==t&&(this._padding=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"stroke",{get:function(){return this._stroke},set:function(t){var e=uh(t);this._stroke!==e&&(this._stroke=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(t){this._strokeThickness!==t&&(this._strokeThickness=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(t){this._textBaseline!==t&&(this._textBaseline=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"trim",{get:function(){return this._trim},set:function(t){this._trim!==t&&(this._trim=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(t){this._whiteSpace!==t&&(this._whiteSpace=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(t){this._wordWrap!==t&&(this._wordWrap=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.styleID++)},enumerable:!1,configurable:!0}),i.prototype.toFontString=function(){var t=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,e=this.fontFamily;Array.isArray(this.fontFamily)||(e=this.fontFamily.split(","));for(var n=e.length-1;n>=0;n--){var r=e[n].trim();!/([\"\'])[^\'\"]+\1/.test(r)&&Qw.indexOf(r)<0&&(r='"'+r+'"'),e[n]=r}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+t+" "+e.join(",")},i}();function cf(i){return typeof i=="number"?Ed(i):(typeof i=="string"&&i.indexOf("0x")===0&&(i=i.replace("0x","#")),i)}function uh(i){if(Array.isArray(i)){for(var t=0;t<i.length;++t)i[t]=cf(i[t]);return i}else return cf(i)}function tA(i,t){if(!Array.isArray(i)||!Array.isArray(t)||i.length!==t.length)return!1;for(var e=0;e<i.length;++e)if(i[e]!==t[e])return!1;return!0}function ch(i,t,e){for(var n in e)Array.isArray(t[n])?i[n]=t[n].slice():i[n]=t[n]}var ma={willReadFrequently:!0},Cn=function(){function i(t,e,n,r,s,a,o,h,l){this.text=t,this.style=e,this.width=n,this.height=r,this.lines=s,this.lineWidths=a,this.lineHeight=o,this.maxLineWidth=h,this.fontProperties=l}return i.measureText=function(t,e,n,r){r===void 0&&(r=i._canvas),n=n??e.wordWrap;var s=e.toFontString(),a=i.measureFont(s);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);var o=r.getContext("2d",ma);o.font=s;for(var h=n?i.wordWrap(t,e,r):t,l=h.split(/(?:\r\n|\r|\n)/),u=new Array(l.length),c=0,f=0;f<l.length;f++){var d=o.measureText(l[f]).width+(l[f].length-1)*e.letterSpacing;u[f]=d,c=Math.max(c,d)}var m=c+e.strokeThickness;e.dropShadow&&(m+=e.dropShadowDistance);var _=e.lineHeight||a.fontSize+e.strokeThickness,p=Math.max(_,a.fontSize+e.strokeThickness)+(l.length-1)*(_+e.leading);return e.dropShadow&&(p+=e.dropShadowDistance),new i(t,e,m,p,l,u,_+e.leading,c,a)},i.wordWrap=function(t,e,n){n===void 0&&(n=i._canvas);for(var r=n.getContext("2d",ma),s=0,a="",o="",h=Object.create(null),l=e.letterSpacing,u=e.whiteSpace,c=i.collapseSpaces(u),f=i.collapseNewlines(u),d=!c,m=e.wordWrapWidth+l,_=i.tokenize(t),p=0;p<_.length;p++){var v=_[p];if(i.isNewline(v)){if(!f){o+=i.addLine(a),d=!c,a="",s=0;continue}v=" "}if(c){var y=i.isBreakingSpace(v),g=i.isBreakingSpace(a[a.length-1]);if(y&&g)continue}var T=i.getFromCache(v,l,h,r);if(T>m)if(a!==""&&(o+=i.addLine(a),a="",s=0),i.canBreakWords(v,e.breakWords))for(var E=i.wordWrapSplit(v),b=0;b<E.length;b++){for(var w=E[b],C=1;E[b+C];){var x=E[b+C],S=w[w.length-1];if(!i.canBreakChars(S,x,v,b,e.breakWords))w+=x;else break;C++}b+=w.length-1;var F=i.getFromCache(w,l,h,r);F+s>m&&(o+=i.addLine(a),d=!1,a="",s=0),a+=w,s+=F}else{a.length>0&&(o+=i.addLine(a),a="",s=0);var H=p===_.length-1;o+=i.addLine(v,!H),d=!1,a="",s=0}else T+s>m&&(d=!1,o+=i.addLine(a),a="",s=0),(a.length>0||!i.isBreakingSpace(v)||d)&&(a+=v,s+=T)}return o+=i.addLine(a,!1),o},i.addLine=function(t,e){return e===void 0&&(e=!0),t=i.trimRight(t),t=e?t+`
`:t,t},i.getFromCache=function(t,e,n,r){var s=n[t];if(typeof s!="number"){var a=t.length*e;s=r.measureText(t).width+a,n[t]=s}return s},i.collapseSpaces=function(t){return t==="normal"||t==="pre-line"},i.collapseNewlines=function(t){return t==="normal"},i.trimRight=function(t){if(typeof t!="string")return"";for(var e=t.length-1;e>=0;e--){var n=t[e];if(!i.isBreakingSpace(n))break;t=t.slice(0,-1)}return t},i.isNewline=function(t){return typeof t!="string"?!1:i._newlines.indexOf(t.charCodeAt(0))>=0},i.isBreakingSpace=function(t,e){return typeof t!="string"?!1:i._breakingSpaces.indexOf(t.charCodeAt(0))>=0},i.tokenize=function(t){var e=[],n="";if(typeof t!="string")return e;for(var r=0;r<t.length;r++){var s=t[r],a=t[r+1];if(i.isBreakingSpace(s,a)||i.isNewline(s)){n!==""&&(e.push(n),n=""),e.push(s);continue}n+=s}return n!==""&&e.push(n),e},i.canBreakWords=function(t,e){return e},i.canBreakChars=function(t,e,n,r,s){return!0},i.wordWrapSplit=function(t){return t.split("")},i.measureFont=function(t){if(i._fonts[t])return i._fonts[t];var e={ascent:0,descent:0,fontSize:0},n=i._canvas,r=i._context;r.font=t;var s=i.METRICS_STRING+i.BASELINE_SYMBOL,a=Math.ceil(r.measureText(s).width),o=Math.ceil(r.measureText(i.BASELINE_SYMBOL).width),h=Math.ceil(i.HEIGHT_MULTIPLIER*o);o=o*i.BASELINE_MULTIPLIER|0,n.width=a,n.height=h,r.fillStyle="#f00",r.fillRect(0,0,a,h),r.font=t,r.textBaseline="alphabetic",r.fillStyle="#000",r.fillText(s,0,o);var l=r.getImageData(0,0,a,h).data,u=l.length,c=a*4,f=0,d=0,m=!1;for(f=0;f<o;++f){for(var _=0;_<c;_+=4)if(l[d+_]!==255){m=!0;break}if(!m)d+=c;else break}for(e.ascent=o-f,d=u-c,m=!1,f=h;f>o;--f){for(var _=0;_<c;_+=4)if(l[d+_]!==255){m=!0;break}if(!m)d-=c;else break}return e.descent=f-o,e.fontSize=e.ascent+e.descent,i._fonts[t]=e,e},i.clearMetrics=function(t){t===void 0&&(t=""),t?delete i._fonts[t]:i._fonts={}},Object.defineProperty(i,"_canvas",{get:function(){if(!i.__canvas){var t=void 0;try{var e=new OffscreenCanvas(0,0),n=e.getContext("2d",ma);if(n&&n.measureText)return i.__canvas=e,e;t=dt.ADAPTER.createCanvas()}catch{t=dt.ADAPTER.createCanvas()}t.width=t.height=10,i.__canvas=t}return i.__canvas},enumerable:!1,configurable:!0}),Object.defineProperty(i,"_context",{get:function(){return i.__context||(i.__context=i._canvas.getContext("2d",ma)),i.__context},enumerable:!1,configurable:!0}),i}();Cn._fonts={};Cn.METRICS_STRING="|ÉqÅ";Cn.BASELINE_SYMBOL="M";Cn.BASELINE_MULTIPLIER=1.4;Cn.HEIGHT_MULTIPLIER=2;Cn._newlines=[10,13];Cn._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var eA={texture:!0,children:!1,baseTexture:!0},Qd=function(i){Zw(t,i);function t(e,n,r){var s=this,a=!1;r||(r=dt.ADAPTER.createCanvas(),a=!0),r.width=3,r.height=3;var o=Ut.from(r);return o.orig=new qt,o.trim=new qt,s=i.call(this,o)||this,s._ownCanvas=a,s.canvas=r,s.context=r.getContext("2d",{willReadFrequently:!0}),s._resolution=dt.RESOLUTION,s._autoResolution=!0,s._text=null,s._style=null,s._styleListener=null,s._font="",s.text=e,s.style=n,s.localStyleID=-1,s}return t.prototype.updateText=function(e){var n=this._style;if(this.localStyleID!==n.styleID&&(this.dirty=!0,this.localStyleID=n.styleID),!(!this.dirty&&e)){this._font=this._style.toFontString();var r=this.context,s=Cn.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),a=s.width,o=s.height,h=s.lines,l=s.lineHeight,u=s.lineWidths,c=s.maxLineWidth,f=s.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,a)+n.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,o)+n.padding*2)*this._resolution),r.scale(this._resolution,this._resolution),r.clearRect(0,0,this.canvas.width,this.canvas.height),r.font=this._font,r.lineWidth=n.strokeThickness,r.textBaseline=n.textBaseline,r.lineJoin=n.lineJoin,r.miterLimit=n.miterLimit;for(var d,m,_=n.dropShadow?2:1,p=0;p<_;++p){var v=n.dropShadow&&p===0,y=v?Math.ceil(Math.max(1,o)+n.padding*2):0,g=y*this._resolution;if(v){r.fillStyle="black",r.strokeStyle="black";var T=n.dropShadowColor,E=wr(typeof T=="number"?T:Td(T)),b=n.dropShadowBlur*this._resolution,w=n.dropShadowDistance*this._resolution;r.shadowColor="rgba("+E[0]*255+","+E[1]*255+","+E[2]*255+","+n.dropShadowAlpha+")",r.shadowBlur=b,r.shadowOffsetX=Math.cos(n.dropShadowAngle)*w,r.shadowOffsetY=Math.sin(n.dropShadowAngle)*w+g}else r.fillStyle=this._generateFillStyle(n,h,s),r.strokeStyle=n.stroke,r.shadowColor="black",r.shadowBlur=0,r.shadowOffsetX=0,r.shadowOffsetY=0;var C=(l-f.fontSize)/2;(!t.nextLineHeightBehavior||l-f.fontSize<0)&&(C=0);for(var x=0;x<h.length;x++)d=n.strokeThickness/2,m=n.strokeThickness/2+x*l+f.ascent+C,n.align==="right"?d+=c-u[x]:n.align==="center"&&(d+=(c-u[x])/2),n.stroke&&n.strokeThickness&&this.drawLetterSpacing(h[x],d+n.padding,m+n.padding-y,!0),n.fill&&this.drawLetterSpacing(h[x],d+n.padding,m+n.padding-y)}this.updateTexture()}},t.prototype.drawLetterSpacing=function(e,n,r,s){s===void 0&&(s=!1);var a=this._style,o=a.letterSpacing,h=t.experimentalLetterSpacing&&("letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype);if(o===0||h){h&&(this.context.letterSpacing=o,this.context.textLetterSpacing=o),s?this.context.strokeText(e,n,r):this.context.fillText(e,n,r);return}for(var l=n,u=Array.from?Array.from(e):e.split(""),c=this.context.measureText(e).width,f=0,d=0;d<u.length;++d){var m=u[d];s?this.context.strokeText(m,l,r):this.context.fillText(m,l,r);for(var _="",p=d+1;p<u.length;++p)_+=u[p];f=this.context.measureText(_).width,l+=c-f+o,c=f}},t.prototype.updateTexture=function(){var e=this.canvas;if(this._style.trim){var n=$b(e);n.data&&(e.width=n.width,e.height=n.height,this.context.putImageData(n.data,0,0))}var r=this._texture,s=this._style,a=s.trim?0:s.padding,o=r.baseTexture;r.trim.width=r._frame.width=e.width/this._resolution,r.trim.height=r._frame.height=e.height/this._resolution,r.trim.x=-a,r.trim.y=-a,r.orig.width=r._frame.width-a*2,r.orig.height=r._frame.height-a*2,this._onTextureUpdate(),o.setRealSize(e.width,e.height,this._resolution),r.updateUvs(),this.dirty=!1},t.prototype._render=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),i.prototype._render.call(this,e)},t.prototype.updateTransform=function(){this.updateText(!0),i.prototype.updateTransform.call(this)},t.prototype.getBounds=function(e,n){return this.updateText(!0),this._textureID===-1&&(e=!1),i.prototype.getBounds.call(this,e,n)},t.prototype.getLocalBounds=function(e){return this.updateText(!0),i.prototype.getLocalBounds.call(this,e)},t.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)},t.prototype._generateFillStyle=function(e,n,r){var s=e.fill;if(Array.isArray(s)){if(s.length===1)return s[0]}else return s;var a,o=e.dropShadow?e.dropShadowDistance:0,h=e.padding||0,l=this.canvas.width/this._resolution-o-h*2,u=this.canvas.height/this._resolution-o-h*2,c=s.slice(),f=e.fillGradientStops.slice();if(!f.length)for(var d=c.length+1,m=1;m<d;++m)f.push(m/d);if(c.unshift(s[0]),f.unshift(0),c.push(s[s.length-1]),f.push(1),e.fillGradientType===hs.LINEAR_VERTICAL){a=this.context.createLinearGradient(l/2,h,l/2,u+h);for(var _=r.fontProperties.fontSize+e.strokeThickness,m=0;m<n.length;m++){var p=r.lineHeight*(m-1)+_,v=r.lineHeight*m,y=v;m>0&&p>v&&(y=(v+p)/2);var g=v+_,T=r.lineHeight*(m+1),E=g;m+1<n.length&&T<g&&(E=(g+T)/2);for(var b=(E-y)/u,w=0;w<c.length;w++){var C=0;typeof f[w]=="number"?C=f[w]:C=w/c.length;var x=Math.min(1,Math.max(0,y/u+C*b));x=Number(x.toFixed(5)),a.addColorStop(x,c[w])}}}else{a=this.context.createLinearGradient(h,u/2,l+h,u/2);for(var S=c.length+1,F=1,m=0;m<c.length;m++){var H=void 0;typeof f[m]=="number"?H=f[m]:H=F/S,a.addColorStop(H,c[m]),F++}}return a},t.prototype.destroy=function(e){typeof e=="boolean"&&(e={children:e}),e=Object.assign({},eA,e),i.prototype.destroy.call(this,e),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(t.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(e){this.updateText(!0);var n=pr(this.scale.x)||1;this.scale.x=n*e/this._texture.orig.width,this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(e){this.updateText(!0);var n=pr(this.scale.y)||1;this.scale.y=n*e/this._texture.orig.height,this._height=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"style",{get:function(){return this._style},set:function(e){e=e||{},e instanceof Ar?this._style=e:this._style=new Ar(e),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(e){e=String(e??""),this._text!==e&&(this._text=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)},enumerable:!1,configurable:!0}),t.nextLineHeightBehavior=!1,t.experimentalLetterSpacing=!1,t}(Es);/*!
 * @pixi/prepare - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */dt.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qh=function(i,t){return Qh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Qh(i,t)};function nA(i,t){Qh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var iA=function(){function i(t){this.maxItemsPerFrame=t,this.itemsLeft=0}return i.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},i.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},i}();function rA(i,t){var e=!1;if(i&&i._textures&&i._textures.length){for(var n=0;n<i._textures.length;n++)if(i._textures[n]instanceof Ut){var r=i._textures[n].baseTexture;t.indexOf(r)===-1&&(t.push(r),e=!0)}}return e}function sA(i,t){if(i.baseTexture instanceof jt){var e=i.baseTexture;return t.indexOf(e)===-1&&t.push(e),!0}return!1}function aA(i,t){if(i._texture&&i._texture instanceof Ut){var e=i._texture.baseTexture;return t.indexOf(e)===-1&&t.push(e),!0}return!1}function oA(i,t){return t instanceof Qd?(t.updateText(!0),!0):!1}function hA(i,t){if(t instanceof Ar){var e=t.toFontString();return Cn.measureFont(e),!0}return!1}function lA(i,t){if(i instanceof Qd){t.indexOf(i.style)===-1&&t.push(i.style),t.indexOf(i)===-1&&t.push(i);var e=i._texture.baseTexture;return t.indexOf(e)===-1&&t.push(e),!0}return!1}function uA(i,t){return i instanceof Ar?(t.indexOf(i)===-1&&t.push(i),!0):!1}var cA=function(){function i(t){var e=this;this.limiter=new iA(dt.UPLOADS_PER_FRAME),this.renderer=t,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){e.queue&&e.prepareItems()},this.registerFindHook(lA),this.registerFindHook(uA),this.registerFindHook(rA),this.registerFindHook(sA),this.registerFindHook(aA),this.registerUploadHook(oA),this.registerUploadHook(hA)}return i.prototype.upload=function(t,e){var n=this;return typeof t=="function"&&(e=t,t=null),e&&fn("6.5.0","BasePrepare.upload callback is deprecated, use the return Promise instead."),new Promise(function(r){t&&n.add(t);var s=function(){e==null||e(),r()};n.queue.length?(n.completes.push(s),n.ticking||(n.ticking=!0,Oe.system.addOnce(n.tick,n,jn.UTILITY))):s()})},i.prototype.tick=function(){setTimeout(this.delayedTick,0)},i.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var t=this.queue[0],e=!1;if(t&&!t._destroyed){for(var n=0,r=this.uploadHooks.length;n<r;n++)if(this.uploadHooks[n](this.uploadHookHelper,t)){this.queue.shift(),e=!0;break}}e||this.queue.shift()}if(this.queue.length)Oe.system.addOnce(this.tick,this,jn.UTILITY);else{this.ticking=!1;var s=this.completes.slice(0);this.completes.length=0;for(var n=0,r=s.length;n<r;n++)s[n]()}},i.prototype.registerFindHook=function(t){return t&&this.addHooks.push(t),this},i.prototype.registerUploadHook=function(t){return t&&this.uploadHooks.push(t),this},i.prototype.add=function(t){for(var e=0,n=this.addHooks.length;e<n&&!this.addHooks[e](t,this.queue);e++);if(t instanceof Mn)for(var e=t.children.length-1;e>=0;e--)this.add(t.children[e]);return this},i.prototype.destroy=function(){this.ticking&&Oe.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},i}();function tp(i,t){return t instanceof jt?(t._glTextures[i.CONTEXT_UID]||i.texture.bind(t),!0):!1}function fA(i,t){if(!(t instanceof Fa))return!1;var e=t.geometry;t.finishPoly(),e.updateBatches();for(var n=e.batches,r=0;r<n.length;r++){var s=n[r].style.texture;s&&tp(i,s.baseTexture)}return e.batchable||i.geometry.bind(e,t._resolveDirectShader(i)),!0}function dA(i,t){return i instanceof Fa?(t.push(i),!0):!1}var pA=function(i){nA(t,i);function t(e){var n=i.call(this,e)||this;return n.uploadHookHelper=n.renderer,n.registerFindHook(dA),n.registerUploadHook(tp),n.registerUploadHook(fA),n}return t.extension={name:"prepare",type:Qt.RendererPlugin},t}(cA);/*!
 * @pixi/spritesheet - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var mA=function(){function i(t,e,n){n===void 0&&(n=null),this.linkedSheets=[],this._texture=t instanceof Ut?t:null,this.baseTexture=t instanceof jt?t:this._texture.baseTexture,this.textures={},this.animations={},this.data=e;var r=this.baseTexture.resource;this.resolution=this._updateResolution(n||(r?r.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return i.prototype._updateResolution=function(t){t===void 0&&(t=null);var e=this.data.meta.scale,n=Ia(t,null);return n===null&&(n=e!==void 0?parseFloat(e):1),n!==1&&this.baseTexture.setResolution(n),n},i.prototype.parse=function(t){var e=this;return t&&fn("6.5.0","Spritesheet.parse callback is deprecated, use the return Promise instead."),new Promise(function(n){e._callback=function(r){t==null||t(r),n(r)},e._batchIndex=0,e._frameKeys.length<=i.BATCH_SIZE?(e._processFrames(0),e._processAnimations(),e._parseComplete()):e._nextBatch()})},i.prototype._processFrames=function(t){for(var e=t,n=i.BATCH_SIZE;e-t<n&&e<this._frameKeys.length;){var r=this._frameKeys[e],s=this._frames[r],a=s.frame;if(a){var o=null,h=null,l=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,u=new qt(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);s.rotated?o=new qt(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):o=new qt(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(h=new qt(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[r]=new Ut(this.baseTexture,o,u,h,s.rotated?2:0,s.anchor),Ut.addToCache(this.textures[r],r)}e++}},i.prototype._processAnimations=function(){var t=this.data.animations||{};for(var e in t){this.animations[e]=[];for(var n=0;n<t[e].length;n++){var r=t[e][n];this.animations[e].push(this.textures[r])}}},i.prototype._parseComplete=function(){var t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)},i.prototype._nextBatch=function(){var t=this;this._processFrames(this._batchIndex*i.BATCH_SIZE),this._batchIndex++,setTimeout(function(){t._batchIndex*i.BATCH_SIZE<t._frameKeys.length?t._nextBatch():(t._processAnimations(),t._parseComplete())},0)},i.prototype.destroy=function(t){var e;t===void 0&&(t=!1);for(var n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)===null||e===void 0||e.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]},i.BATCH_SIZE=1e3,i}(),vA=function(){function i(){}return i.use=function(t,e){var n,r,s=this,a=t.name+"_image";if(!t.data||t.type!==ue.TYPE.JSON||!t.data.frames||s.resources[a]){e();return}var o=(r=(n=t.data)===null||n===void 0?void 0:n.meta)===null||r===void 0?void 0:r.related_multi_packs;if(Array.isArray(o))for(var h=function(m){if(typeof m!="string")return"continue";var _=m.replace(".json",""),p=dr.resolve(t.url.replace(s.baseUrl,""),m);if(s.resources[_]||Object.values(s.resources).some(function(y){return dr.format(dr.parse(y.url))===p}))return"continue";var v={crossOrigin:t.crossOrigin,loadType:ue.LOAD_TYPE.XHR,xhrType:ue.XHR_RESPONSE_TYPE.JSON,parentResource:t,metadata:t.metadata};s.add(_,p,v)},l=0,u=o;l<u.length;l++){var c=u[l];h(c)}var f={crossOrigin:t.crossOrigin,metadata:t.metadata.imageMetadata,parentResource:t},d=i.getResourcePath(t,s.baseUrl);s.add(a,d,f,function(_){if(_.error){e(_.error);return}var p=new mA(_.texture,t.data,t.url);p.parse().then(function(){t.spritesheet=p,t.textures=p.textures,e()})})},i.getResourcePath=function(t,e){return t.isDataUrl?t.data.meta.image:dr.resolve(t.url.replace(e,""),t.data.meta.image)},i.extension=Qt.Loader,i}();/*!
 * @pixi/sprite-tiling - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/sprite-tiling is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var tl=function(i,t){return tl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},tl(i,t)};function ep(i,t){tl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Wr=new ie;(function(i){ep(t,i);function t(e,n,r){n===void 0&&(n=100),r===void 0&&(r=100);var s=i.call(this,e)||this;return s.tileTransform=new Rd,s._width=n,s._height=r,s.uvMatrix=s.texture.uvMatrix||new Il(e),s.pluginName="tilingSprite",s.uvRespectAnchor=!1,s}return Object.defineProperty(t.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(e){this.uvMatrix.clampMargin=e,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(e){this.tileTransform.scale.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(e){this.tileTransform.position.copyFrom(e)},enumerable:!1,configurable:!0}),t.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},t.prototype._render=function(e){var n=this._texture;!n||!n.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),e.batch.setObjectRenderer(e.plugins[this.pluginName]),e.plugins[this.pluginName].render(this))},t.prototype._calculateBounds=function(){var e=this._width*-this._anchor._x,n=this._height*-this._anchor._y,r=this._width*(1-this._anchor._x),s=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,e,n,r,s)},t.prototype.getLocalBounds=function(e){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new qt),e=this._localBoundsRect),this._bounds.getRectangle(e)):i.prototype.getLocalBounds.call(this,e)},t.prototype.containsPoint=function(e){this.worldTransform.applyInverse(e,Wr);var n=this._width,r=this._height,s=-n*this.anchor._x;if(Wr.x>=s&&Wr.x<s+n){var a=-r*this.anchor._y;if(Wr.y>=a&&Wr.y<a+r)return!0}return!1},t.prototype.destroy=function(e){i.prototype.destroy.call(this,e),this.tileTransform=null,this.uvMatrix=null},t.from=function(e,n){var r=e instanceof Ut?e:Ut.from(e,n);return new t(r,n.width,n.height)},Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e},enumerable:!1,configurable:!0}),t})(Es);var _A=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`,ff=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,gA=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,yA=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,xA=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,va=new Se,EA=function(i){ep(t,i);function t(e){var n=i.call(this,e)||this;return e.runners.contextChange.add(n),n.quad=new Ud,n.state=Wi.for2d(),n}return t.prototype.contextChange=function(){var e=this.renderer,n={globals:e.globalUniforms};this.simpleShader=oi.from(ff,_A,n),this.shader=e.context.webGLVersion>1?oi.from(yA,xA,n):oi.from(ff,gA,n)},t.prototype.render=function(e){var n=this.renderer,r=this.quad,s=r.vertices;s[0]=s[6]=e._width*-e.anchor.x,s[1]=s[3]=e._height*-e.anchor.y,s[2]=s[4]=e._width*(1-e.anchor.x),s[5]=s[7]=e._height*(1-e.anchor.y);var a=e.uvRespectAnchor?e.anchor.x:0,o=e.uvRespectAnchor?e.anchor.y:0;s=r.uvs,s[0]=s[6]=-a,s[1]=s[3]=-o,s[2]=s[4]=1-a,s[5]=s[7]=1-o,r.invalidate();var h=e._texture,l=h.baseTexture,u=l.alphaMode>0,c=e.tileTransform.localTransform,f=e.uvMatrix,d=l.isPowerOfTwo&&h.frame.width===l.width&&h.frame.height===l.height;d&&(l._glTextures[n.CONTEXT_UID]?d=l.wrapMode!==Tn.CLAMP:l.wrapMode===Tn.CLAMP&&(l.wrapMode=Tn.REPEAT));var m=d?this.simpleShader:this.shader,_=h.width,p=h.height,v=e._width,y=e._height;va.set(c.a*_/v,c.b*_/y,c.c*p/v,c.d*p/y,c.tx/v,c.ty/y),va.invert(),d?va.prepend(f.mapCoord):(m.uniforms.uMapCoord=f.mapCoord.toArray(!0),m.uniforms.uClampFrame=f.uClampFrame,m.uniforms.uClampOffset=f.uClampOffset),m.uniforms.uTransform=va.toArray(!0),m.uniforms.uColor=Md(e.tint,e.worldAlpha,m.uniforms.uColor,u),m.uniforms.translationMatrix=e.transform.worldTransform.toArray(!0),m.uniforms.uSampler=h,n.shader.bind(m),n.geometry.bind(r),this.state.blendMode=Sd(e.blendMode,u),n.state.set(this.state),n.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},t.extension={name:"tilingSprite",type:Qt.RendererPlugin},t}($a);/*!
 * @pixi/mesh - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/mesh is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var el=function(i,t){return el=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},el(i,t)};function Ol(i,t){el(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var TA=function(){function i(t,e){this.uvBuffer=t,this.uvMatrix=e,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return i.prototype.update=function(t){if(!(!t&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var e=this.uvBuffer.data;(!this.data||this.data.length!==e.length)&&(this.data=new Float32Array(e.length)),this.uvMatrix.multiplyUvs(e,this.data),this._updateID++}},i}(),fh=new ie,df=new Ta,ls=function(i){Ol(t,i);function t(e,n,r,s){s===void 0&&(s=un.TRIANGLES);var a=i.call(this)||this;return a.geometry=e,a.shader=n,a.state=r||Wi.for2d(),a.drawMode=s,a.start=0,a.size=0,a.uvs=null,a.indices=null,a.vertexData=new Float32Array(1),a.vertexDirty=-1,a._transformID=-1,a._roundPixels=dt.ROUND_PIXELS,a.batchUvs=null,a}return Object.defineProperty(t.prototype,"geometry",{get:function(){return this._geometry},set:function(e){this._geometry!==e&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=e,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"material",{get:function(){return this.shader},set:function(e){this.shader=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(e){this.state.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(e){this._roundPixels!==e&&(this._transformID=-1),this._roundPixels=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(e){this.shader.tint=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(e){this.shader.texture=e},enumerable:!1,configurable:!0}),t.prototype._render=function(e){var n=this.geometry.buffers[0].data,r=this.shader;r.batchable&&this.drawMode===un.TRIANGLES&&n.length<t.BATCHABLE_SIZE*2?this._renderToBatch(e):this._renderDefault(e)},t.prototype._renderDefault=function(e){var n=this.shader;n.alpha=this.worldAlpha,n.update&&n.update(),e.batch.flush(),n.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),e.shader.bind(n),e.state.set(this.state),e.geometry.bind(this.geometry,n),e.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},t.prototype._renderToBatch=function(e){var n=this.geometry,r=this.shader;r.uvMatrix&&(r.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=n.indexBuffer.data,this._tintRGB=r._tintRGB,this._texture=r.texture;var s=this.material.pluginName;e.batch.setObjectRenderer(e.plugins[s]),e.plugins[s].render(this)},t.prototype.calculateVertices=function(){var e=this.geometry,n=e.buffers[0],r=n.data,s=n._updateID;if(!(s===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==r.length&&(this.vertexData=new Float32Array(r.length));for(var a=this.transform.worldTransform,o=a.a,h=a.b,l=a.c,u=a.d,c=a.tx,f=a.ty,d=this.vertexData,m=0;m<d.length/2;m++){var _=r[m*2],p=r[m*2+1];d[m*2]=o*_+l*p+c,d[m*2+1]=h*_+u*p+f}if(this._roundPixels)for(var v=dt.RESOLUTION,m=0;m<d.length;++m)d[m]=Math.round((d[m]*v|0)/v);this.vertexDirty=s}},t.prototype.calculateUvs=function(){var e=this.geometry.buffers[1],n=this.shader;n.uvMatrix.isSimple?this.uvs=e.data:(this.batchUvs||(this.batchUvs=new TA(e,n.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},t.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},t.prototype.containsPoint=function(e){if(!this.getBounds().contains(e.x,e.y))return!1;this.worldTransform.applyInverse(e,fh);for(var n=this.geometry.getBuffer("aVertexPosition").data,r=df.points,s=this.geometry.getIndex().data,a=s.length,o=this.drawMode===4?3:1,h=0;h+2<a;h+=o){var l=s[h]*2,u=s[h+1]*2,c=s[h+2]*2;if(r[0]=n[l],r[1]=n[l+1],r[2]=n[u],r[3]=n[u+1],r[4]=n[c],r[5]=n[c+1],df.contains(fh.x,fh.y))return!0}return!1},t.prototype.destroy=function(e){i.prototype.destroy.call(this,e),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},t.BATCHABLE_SIZE=100,t}(Mn),bA=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,SA=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`,us=function(i){Ol(t,i);function t(e,n){var r=this,s={uSampler:e,alpha:1,uTextureMatrix:Se.IDENTITY,uColor:new Float32Array([1,1,1,1])};return n=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},n),n.uniforms&&Object.assign(s,n.uniforms),r=i.call(this,n.program||xs.from(SA,bA),s)||this,r._colorDirty=!1,r.uvMatrix=new Il(e),r.batchable=n.program===void 0,r.pluginName=n.pluginName,r.tint=n.tint,r.alpha=n.alpha,r}return Object.defineProperty(t.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(e){this.uniforms.uSampler!==e&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!e.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=e,this.uvMatrix.texture=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._alpha},set:function(e){e!==this._alpha&&(this._alpha=e,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){e!==this._tint&&(this._tint=e,this._tintRGB=(e>>16)+(e&65280)+((e&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),t.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var e=this.texture.baseTexture;Md(this._tint,this._alpha,this.uniforms.uColor,e.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},t}(oi),Ja=function(i){Ol(t,i);function t(e,n,r){var s=i.call(this)||this,a=new Ee(e),o=new Ee(n,!0),h=new Ee(r,!0,!0);return s.addAttribute("aVertexPosition",a,2,!1,Mt.FLOAT).addAttribute("aTextureCoord",o,2,!1,Mt.FLOAT).addIndex(h),s._updateId=-1,s}return Object.defineProperty(t.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),t}(ys);/*!
 * @pixi/text-bitmap - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/text-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var nl=function(i,t){return nl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},nl(i,t)};function MA(i,t){nl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Ba=function(){function i(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}return i}(),wA=function(){function i(){}return i.test=function(t){return typeof t=="string"&&t.indexOf("info face=")===0},i.parse=function(t){var e=t.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var r in e){var s=e[r].match(/^[a-z]+/gm)[0],a=e[r].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),o={};for(var h in a){var l=a[h].split("="),u=l[0],c=l[1].replace(/"/gm,""),f=parseFloat(c),d=isNaN(f)?c:f;o[u]=d}n[s].push(o)}var m=new Ba;return n.info.forEach(function(_){return m.info.push({face:_.face,size:parseInt(_.size,10)})}),n.common.forEach(function(_){return m.common.push({lineHeight:parseInt(_.lineHeight,10)})}),n.page.forEach(function(_){return m.page.push({id:parseInt(_.id,10),file:_.file})}),n.char.forEach(function(_){return m.char.push({id:parseInt(_.id,10),page:parseInt(_.page,10),x:parseInt(_.x,10),y:parseInt(_.y,10),width:parseInt(_.width,10),height:parseInt(_.height,10),xoffset:parseInt(_.xoffset,10),yoffset:parseInt(_.yoffset,10),xadvance:parseInt(_.xadvance,10)})}),n.kerning.forEach(function(_){return m.kerning.push({first:parseInt(_.first,10),second:parseInt(_.second,10),amount:parseInt(_.amount,10)})}),n.distanceField.forEach(function(_){return m.distanceField.push({distanceRange:parseInt(_.distanceRange,10),fieldType:_.fieldType})}),m},i}(),il=function(){function i(){}return i.test=function(t){return t instanceof XMLDocument&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},i.parse=function(t){for(var e=new Ba,n=t.getElementsByTagName("info"),r=t.getElementsByTagName("common"),s=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),o=t.getElementsByTagName("kerning"),h=t.getElementsByTagName("distanceField"),l=0;l<n.length;l++)e.info.push({face:n[l].getAttribute("face"),size:parseInt(n[l].getAttribute("size"),10)});for(var l=0;l<r.length;l++)e.common.push({lineHeight:parseInt(r[l].getAttribute("lineHeight"),10)});for(var l=0;l<s.length;l++)e.page.push({id:parseInt(s[l].getAttribute("id"),10)||0,file:s[l].getAttribute("file")});for(var l=0;l<a.length;l++){var u=a[l];e.char.push({id:parseInt(u.getAttribute("id"),10),page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xoffset:parseInt(u.getAttribute("xoffset"),10),yoffset:parseInt(u.getAttribute("yoffset"),10),xadvance:parseInt(u.getAttribute("xadvance"),10)})}for(var l=0;l<o.length;l++)e.kerning.push({first:parseInt(o[l].getAttribute("first"),10),second:parseInt(o[l].getAttribute("second"),10),amount:parseInt(o[l].getAttribute("amount"),10)});for(var l=0;l<h.length;l++)e.distanceField.push({fieldType:h[l].getAttribute("fieldType"),distanceRange:parseInt(h[l].getAttribute("distanceRange"),10)});return e},i}(),AA=function(){function i(){}return i.test=function(t){if(typeof t=="string"&&t.indexOf("<font>")>-1){var e=new globalThis.DOMParser().parseFromString(t,"text/xml");return il.test(e)}return!1},i.parse=function(t){var e=new globalThis.DOMParser().parseFromString(t,"text/xml");return il.parse(e)},i}(),dh=[wA,il,AA];function np(i){for(var t=0;t<dh.length;t++)if(dh[t].test(i))return dh[t];return null}function RA(i,t,e,n,r,s){var a=e.fill;if(Array.isArray(a)){if(a.length===1)return a[0]}else return a;var o,h=e.dropShadow?e.dropShadowDistance:0,l=e.padding||0,u=i.width/n-h-l*2,c=i.height/n-h-l*2,f=a.slice(),d=e.fillGradientStops.slice();if(!d.length)for(var m=f.length+1,_=1;_<m;++_)d.push(_/m);if(f.unshift(a[0]),d.unshift(0),f.push(a[a.length-1]),d.push(1),e.fillGradientType===hs.LINEAR_VERTICAL){o=t.createLinearGradient(u/2,l,u/2,c+l);for(var p=0,v=s.fontProperties.fontSize+e.strokeThickness,y=v/c,_=0;_<r.length;_++)for(var g=s.lineHeight*_,T=0;T<f.length;T++){var E=0;typeof d[T]=="number"?E=d[T]:E=T/f.length;var b=g/c+E*y,w=Math.max(p,b);w=Math.min(w,1),o.addColorStop(w,f[T]),p=w}}else{o=t.createLinearGradient(l,c/2,u+l,c/2);for(var C=f.length+1,x=1,_=0;_<f.length;_++){var S=void 0;typeof d[_]=="number"?S=d[_]:S=x/C,o.addColorStop(S,f[_]),x++}}return o}function CA(i,t,e,n,r,s,a){var o=e.text,h=e.fontProperties;t.translate(n,r),t.scale(s,s);var l=a.strokeThickness/2,u=-(a.strokeThickness/2);if(t.font=a.toFontString(),t.lineWidth=a.strokeThickness,t.textBaseline=a.textBaseline,t.lineJoin=a.lineJoin,t.miterLimit=a.miterLimit,t.fillStyle=RA(i,t,a,s,[o],e),t.strokeStyle=a.stroke,a.dropShadow){var c=a.dropShadowColor,f=wr(typeof c=="number"?c:Td(c)),d=a.dropShadowBlur*s,m=a.dropShadowDistance*s;t.shadowColor="rgba("+f[0]*255+","+f[1]*255+","+f[2]*255+","+a.dropShadowAlpha+")",t.shadowBlur=d,t.shadowOffsetX=Math.cos(a.dropShadowAngle)*m,t.shadowOffsetY=Math.sin(a.dropShadowAngle)*m}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0;a.stroke&&a.strokeThickness&&t.strokeText(o,l,u+e.lineHeight-h.descent),a.fill&&t.fillText(o,l,u+e.lineHeight-h.descent),t.setTransform(1,0,0,1,0,0),t.fillStyle="rgba(0, 0, 0, 0)"}function ip(i){return Array.from?Array.from(i):i.split("")}function PA(i){typeof i=="string"&&(i=[i]);for(var t=[],e=0,n=i.length;e<n;e++){var r=i[e];if(Array.isArray(r)){if(r.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+r.length+".");var s=r[0].charCodeAt(0),a=r[1].charCodeAt(0);if(a<s)throw new Error("[BitmapFont]: Invalid character range.");for(var o=s,h=a;o<=h;o++)t.push(String.fromCharCode(o))}else t.push.apply(t,ip(r))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}function ba(i){return i.codePointAt?i.codePointAt(0):i.charCodeAt(0)}var ei=function(){function i(t,e,n){var r,s,a=t.info[0],o=t.common[0],h=t.page[0],l=t.distanceField[0],u=Ia(h.file),c={};this._ownsTextures=n,this.font=a.face,this.size=a.size,this.lineHeight=o.lineHeight/u,this.chars={},this.pageTextures=c;for(var f=0;f<t.page.length;f++){var d=t.page[f],m=d.id,_=d.file;c[m]=e instanceof Array?e[f]:e[_],l!=null&&l.fieldType&&l.fieldType!=="none"&&(c[m].baseTexture.alphaMode=pn.NO_PREMULTIPLIED_ALPHA,c[m].baseTexture.mipmap=dn.OFF)}for(var f=0;f<t.char.length;f++){var p=t.char[f],m=p.id,v=p.page,y=t.char[f],g=y.x,T=y.y,E=y.width,b=y.height,w=y.xoffset,C=y.yoffset,x=y.xadvance;g/=u,T/=u,E/=u,b/=u,w/=u,C/=u,x/=u;var S=new qt(g+c[v].frame.x/u,T+c[v].frame.y/u,E,b);this.chars[m]={xOffset:w,yOffset:C,xAdvance:x,kerning:{},texture:new Ut(c[v].baseTexture,S),page:v}}for(var f=0;f<t.kerning.length;f++){var F=t.kerning[f],H=F.first,L=F.second,G=F.amount;H/=u,L/=u,G/=u,this.chars[L]&&(this.chars[L].kerning[H]=G)}this.distanceFieldRange=l==null?void 0:l.distanceRange,this.distanceFieldType=(s=(r=l==null?void 0:l.fieldType)===null||r===void 0?void 0:r.toLowerCase())!==null&&s!==void 0?s:"none"}return i.prototype.destroy=function(){for(var t in this.chars)this.chars[t].texture.destroy(),this.chars[t].texture=null;for(var t in this.pageTextures)this._ownsTextures&&this.pageTextures[t].destroy(!0),this.pageTextures[t]=null;this.chars=null,this.pageTextures=null},i.install=function(t,e,n){var r;if(t instanceof Ba)r=t;else{var s=np(t);if(!s)throw new Error("Unrecognized data format for font.");r=s.parse(t)}e instanceof Ut&&(e=[e]);var a=new i(r,e,n);return i.available[a.font]=a,a},i.uninstall=function(t){var e=i.available[t];if(!e)throw new Error("No font found named '"+t+"'");e.destroy(),delete i.available[t]},i.from=function(t,e,n){if(!t)throw new Error("[BitmapFont] Property `name` is required.");var r=Object.assign({},i.defaultOptions,n),s=r.chars,a=r.padding,o=r.resolution,h=r.textureWidth,l=r.textureHeight,u=PA(s),c=e instanceof Ar?e:new Ar(e),f=h,d=new Ba;d.info[0]={face:c.fontFamily,size:c.fontSize},d.common[0]={lineHeight:c.fontSize};for(var m=0,_=0,p,v,y,g=0,T=[],E=0;E<u.length;E++){p||(p=dt.ADAPTER.createCanvas(),p.width=h,p.height=l,v=p.getContext("2d"),y=new jt(p,{resolution:o}),T.push(new Ut(y)),d.page.push({id:T.length-1,file:""}));var b=u[E],w=Cn.measureText(b,c,!1,p),C=w.width,x=Math.ceil(w.height),S=Math.ceil((c.fontStyle==="italic"?2:1)*C);if(_>=l-x*o){if(_===0)throw new Error("[BitmapFont] textureHeight "+l+"px is too small "+("(fontFamily: '"+c.fontFamily+"', fontSize: "+c.fontSize+"px, char: '"+b+"')"));--E,p=null,v=null,y=null,_=0,m=0,g=0;continue}if(g=Math.max(x+w.fontProperties.descent,g),S*o+m>=f){if(m===0)throw new Error("[BitmapFont] textureWidth "+h+"px is too small "+("(fontFamily: '"+c.fontFamily+"', fontSize: "+c.fontSize+"px, char: '"+b+"')"));--E,_+=g*o,_=Math.ceil(_),m=0,g=0;continue}CA(p,v,w,m,_,o,c);var F=ba(w.text);d.char.push({id:F,page:T.length-1,x:m/o,y:_/o,width:S,height:x,xoffset:0,yoffset:0,xadvance:Math.ceil(C-(c.dropShadow?c.dropShadowDistance:0)-(c.stroke?c.strokeThickness:0))}),m+=(S+2*a)*o,m=Math.ceil(m)}for(var E=0,H=u.length;E<H;E++)for(var L=u[E],G=0;G<H;G++){var P=u[G],B=v.measureText(L).width,z=v.measureText(P).width,Y=v.measureText(L+P).width,K=Y-(B+z);K&&d.kerning.push({first:ba(L),second:ba(P),amount:K})}var U=new i(d,T,!0);return i.available[t]!==void 0&&i.uninstall(t),i.available[t]=U,U},i.ALPHA=[["a","z"],["A","Z"]," "],i.NUMERIC=[["0","9"]],i.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],i.ASCII=[[" ","~"]],i.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:i.ALPHANUMERIC},i.available={},i}(),IA=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`,LA=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`,pf=[],mf=[],vf=[];(function(i){MA(t,i);function t(e,n){n===void 0&&(n={});var r=i.call(this)||this;r._tint=16777215;var s=Object.assign({},t.styleDefaults,n),a=s.align,o=s.tint,h=s.maxWidth,l=s.letterSpacing,u=s.fontName,c=s.fontSize;if(!ei.available[u])throw new Error('Missing BitmapFont "'+u+'"');return r._activePagesMeshData=[],r._textWidth=0,r._textHeight=0,r._align=a,r._tint=o,r._font=void 0,r._fontName=u,r._fontSize=c,r.text=e,r._maxWidth=h,r._maxLineHeight=0,r._letterSpacing=l,r._anchor=new mr(function(){r.dirty=!0},r,0,0),r._roundPixels=dt.ROUND_PIXELS,r.dirty=!0,r._resolution=dt.RESOLUTION,r._autoResolution=!0,r._textureCache={},r}return t.prototype.updateText=function(){for(var e,n=ei.available[this._fontName],r=this.fontSize,s=r/n.size,a=new ie,o=[],h=[],l=[],u=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",c=ip(u),f=this._maxWidth*n.size/r,d=n.distanceFieldType==="none"?pf:mf,m=null,_=0,p=0,v=0,y=-1,g=0,T=0,E=0,b=0,w=0;w<c.length;w++){var C=c[w],x=ba(C);if(/(?:\s)/.test(C)&&(y=w,g=_,b++),C==="\r"||C===`
`){h.push(_),l.push(-1),p=Math.max(p,_),++v,++T,a.x=0,a.y+=n.lineHeight,m=null,b=0;continue}var S=n.chars[x];if(S){m&&S.kerning[m]&&(a.x+=S.kerning[m]);var F=vf.pop()||{texture:Ut.EMPTY,line:0,charCode:0,prevSpaces:0,position:new ie};F.texture=S.texture,F.line=v,F.charCode=x,F.position.x=a.x+S.xOffset+this._letterSpacing/2,F.position.y=a.y+S.yOffset,F.prevSpaces=b,o.push(F),_=F.position.x+Math.max(S.xAdvance-S.xOffset,S.texture.orig.width),a.x+=S.xAdvance+this._letterSpacing,E=Math.max(E,S.yOffset+S.texture.height),m=x,y!==-1&&f>0&&a.x>f&&(++T,xr(o,1+y-T,1+w-y),w=y,y=-1,h.push(g),l.push(o.length>0?o[o.length-1].prevSpaces:0),p=Math.max(p,g),v++,a.x=0,a.y+=n.lineHeight,m=null,b=0)}}var H=c[c.length-1];H!=="\r"&&H!==`
`&&(/(?:\s)/.test(H)&&(_=g),h.push(_),p=Math.max(p,_),l.push(-1));for(var L=[],w=0;w<=v;w++){var G=0;this._align==="right"?G=p-h[w]:this._align==="center"?G=(p-h[w])/2:this._align==="justify"&&(G=l[w]<0?0:(p-h[w])/l[w]),L.push(G)}var P=o.length,B={},z=[],Y=this._activePagesMeshData;d.push.apply(d,Y);for(var w=0;w<P;w++){var K=o[w].texture,U=K.baseTexture.uid;if(!B[U]){var W=d.pop();if(!W){var O=new Ja,j=void 0,$=void 0;n.distanceFieldType==="none"?(j=new us(Ut.EMPTY),$=wt.NORMAL):(j=new us(Ut.EMPTY,{program:xs.from(LA,IA),uniforms:{uFWidth:0}}),$=wt.NORMAL_NPM);var et=new ls(O,j);et.blendMode=$,W={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:et,vertices:null,uvs:null,indices:null}}W.index=0,W.indexCount=0,W.vertexCount=0,W.uvsCount=0,W.total=0;var tt=this._textureCache;tt[U]=tt[U]||new Ut(K.baseTexture),W.mesh.texture=tt[U],W.mesh.tint=this._tint,z.push(W),B[U]=W}B[U].total++}for(var w=0;w<Y.length;w++)z.indexOf(Y[w])===-1&&this.removeChild(Y[w].mesh);for(var w=0;w<z.length;w++)z[w].mesh.parent!==this&&this.addChild(z[w].mesh);this._activePagesMeshData=z;for(var w in B){var W=B[w],ht=W.total;if(!(((e=W.indices)===null||e===void 0?void 0:e.length)>6*ht)||W.vertices.length<ls.BATCHABLE_SIZE*2)W.vertices=new Float32Array(4*2*ht),W.uvs=new Float32Array(4*2*ht),W.indices=new Uint16Array(6*ht);else for(var Et=W.total,vt=W.vertices,Gt=Et*4*2;Gt<vt.length;Gt++)vt[Gt]=0;W.mesh.size=6*ht}for(var w=0;w<P;w++){var C=o[w],pt=C.position.x+L[C.line]*(this._align==="justify"?C.prevSpaces:1);this._roundPixels&&(pt=Math.round(pt));var D=pt*s,Nt=C.position.y*s,K=C.texture,st=B[K.baseTexture.uid],St=K.frame,xt=K._uvs,Tt=st.index++;st.indices[Tt*6+0]=0+Tt*4,st.indices[Tt*6+1]=1+Tt*4,st.indices[Tt*6+2]=2+Tt*4,st.indices[Tt*6+3]=0+Tt*4,st.indices[Tt*6+4]=2+Tt*4,st.indices[Tt*6+5]=3+Tt*4,st.vertices[Tt*8+0]=D,st.vertices[Tt*8+1]=Nt,st.vertices[Tt*8+2]=D+St.width*s,st.vertices[Tt*8+3]=Nt,st.vertices[Tt*8+4]=D+St.width*s,st.vertices[Tt*8+5]=Nt+St.height*s,st.vertices[Tt*8+6]=D,st.vertices[Tt*8+7]=Nt+St.height*s,st.uvs[Tt*8+0]=xt.x0,st.uvs[Tt*8+1]=xt.y0,st.uvs[Tt*8+2]=xt.x1,st.uvs[Tt*8+3]=xt.y1,st.uvs[Tt*8+4]=xt.x2,st.uvs[Tt*8+5]=xt.y2,st.uvs[Tt*8+6]=xt.x3,st.uvs[Tt*8+7]=xt.y3}this._textWidth=p*s,this._textHeight=(a.y+n.lineHeight)*s;for(var w in B){var W=B[w];if(this.anchor.x!==0||this.anchor.y!==0)for(var It=0,Lt=this._textWidth*this.anchor.x,$t=this._textHeight*this.anchor.y,pe=0;pe<W.total;pe++)W.vertices[It++]-=Lt,W.vertices[It++]-=$t,W.vertices[It++]-=Lt,W.vertices[It++]-=$t,W.vertices[It++]-=Lt,W.vertices[It++]-=$t,W.vertices[It++]-=Lt,W.vertices[It++]-=$t;this._maxLineHeight=E*s;var xe=W.mesh.geometry.getBuffer("aVertexPosition"),R=W.mesh.geometry.getBuffer("aTextureCoord"),M=W.mesh.geometry.getIndex();xe.data=W.vertices,R.data=W.uvs,M.data=W.indices,xe.update(),R.update(),M.update()}for(var w=0;w<o.length;w++)vf.push(o[w]);this._font=n,this.dirty=!1},t.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},t.prototype._render=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0);var n=ei.available[this._fontName],r=n.distanceFieldRange,s=n.distanceFieldType,a=n.size;if(s!=="none")for(var o=this.worldTransform,h=o.a,l=o.b,u=o.c,c=o.d,f=Math.sqrt(h*h+l*l),d=Math.sqrt(u*u+c*c),m=(Math.abs(f)+Math.abs(d))/2,_=this.fontSize/a,p=0,v=this._activePagesMeshData;p<v.length;p++){var y=v[p];y.mesh.shader.uniforms.uFWidth=m*r*_*this._resolution}i.prototype._render.call(this,e)},t.prototype.getLocalBounds=function(){return this.validate(),i.prototype.getLocalBounds.call(this)},t.prototype.validate=function(){var e=ei.available[this._fontName];if(!e)throw new Error('Missing BitmapFont "'+this._fontName+'"');this._font!==e&&(this.dirty=!0),this.dirty&&this.updateText()},Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){if(this._tint!==e){this._tint=e;for(var n=0;n<this._activePagesMeshData.length;n++)this._activePagesMeshData[n].mesh.tint=e}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"align",{get:function(){return this._align},set:function(e){this._align!==e&&(this._align=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontName",{get:function(){return this._fontName},set:function(e){if(!ei.available[e])throw new Error('Missing BitmapFont "'+e+'"');this._fontName!==e&&(this._fontName=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{get:function(){var e;return(e=this._fontSize)!==null&&e!==void 0?e:ei.available[this._fontName].size},set:function(e){this._fontSize!==e&&(this._fontSize=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"anchor",{get:function(){return this._anchor},set:function(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(e){e=String(e??""),this._text!==e&&(this._text=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(e){this._maxWidth!==e&&(this._maxWidth=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(e){e!==this._roundPixels&&(this._roundPixels=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)},enumerable:!1,configurable:!0}),t.prototype.destroy=function(e){var n=this._textureCache,r=ei.available[this._fontName],s=r.distanceFieldType==="none"?pf:mf;s.push.apply(s,this._activePagesMeshData);for(var a=0,o=this._activePagesMeshData;a<o.length;a++){var h=o[a];this.removeChild(h.mesh)}this._activePagesMeshData=[],s.filter(function(c){return n[c.mesh.texture.baseTexture.uid]}).forEach(function(c){c.mesh.texture=Ut.EMPTY});for(var l in n){var u=n[l];u.destroy(),delete n[l]}this._font=null,this._textureCache=null,i.prototype.destroy.call(this,e)},t.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},t})(Mn);var OA=function(){function i(){}return i.add=function(){ue.setExtensionXhrType("fnt",ue.XHR_RESPONSE_TYPE.TEXT)},i.use=function(t,e){var n=np(t.data);if(!n){e();return}for(var r=i.getBaseUrl(this,t),s=n.parse(t.data),a={},o=function(_){a[_.metadata.pageFile]=_.texture,Object.keys(a).length===s.page.length&&(t.bitmapFont=ei.install(s,a,!0),e())},h=0;h<s.page.length;++h){var l=s.page[h].file,u=r+l,c=!1;for(var f in this.resources){var d=this.resources[f];if(d.url===u){d.metadata.pageFile=l,d.texture?o(d):d.onAfterMiddleware.add(o),c=!0;break}}if(!c){var m={crossOrigin:t.crossOrigin,loadType:ue.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:l},t.metadata.imageMetadata),parentResource:t};this.add(u,m,o)}}},i.getBaseUrl=function(t,e){var n=e.isDataUrl?"":i.dirname(e.url);return e.isDataUrl&&(n==="."&&(n=""),t.baseUrl&&n&&t.baseUrl.charAt(t.baseUrl.length-1)==="/"&&(n+="/")),n=n.replace(t.baseUrl,""),n&&n.charAt(n.length-1)!=="/"&&(n+="/"),n},i.dirname=function(t){var e=t.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return e===t?".":e===""?"/":e},i.extension=Qt.Loader,i}();/*!
 * @pixi/filter-alpha - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var rl=function(i,t){return rl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},rl(i,t)};function DA(i,t){rl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var UA=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;(function(i){DA(t,i);function t(e){e===void 0&&(e=1);var n=i.call(this,RM,UA,{uAlpha:1})||this;return n.alpha=e,n}return Object.defineProperty(t.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(e){this.uniforms.uAlpha=e},enumerable:!1,configurable:!0}),t})(ci);/*!
 * @pixi/filter-blur - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var sl=function(i,t){return sl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},sl(i,t)};function rp(i,t){sl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var NA=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function FA(i,t){var e=Math.ceil(i/2),n=NA,r="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<i;a++){var o=s.replace("%index%",a.toString());o=o.replace("%sampleIndex%",a-(e-1)+".0"),r+=o,r+=`
`}return n=n.replace("%blur%",r),n=n.replace("%size%",i.toString()),n}var BA={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},GA=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function kA(i){for(var t=BA[i],e=t.length,n=GA,r="",s="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",a,o=0;o<i;o++){var h=s.replace("%index%",o.toString());a=o,o>=e&&(a=i-o-1),h=h.replace("%value%",t[a].toString()),r+=h,r+=`
`}return n=n.replace("%blur%",r),n=n.replace("%size%",i.toString()),n}var _f=function(i){rp(t,i);function t(e,n,r,s,a){n===void 0&&(n=8),r===void 0&&(r=4),s===void 0&&(s=dt.FILTER_RESOLUTION),a===void 0&&(a=5);var o=this,h=FA(a,e),l=kA(a);return o=i.call(this,h,l)||this,o.horizontal=e,o.resolution=s,o._quality=0,o.quality=r,o.blur=n,o}return t.prototype.apply=function(e,n,r,s){if(r?this.horizontal?this.uniforms.strength=1/r.width*(r.width/n.width):this.uniforms.strength=1/r.height*(r.height/n.height):this.horizontal?this.uniforms.strength=1/e.renderer.width*(e.renderer.width/n.width):this.uniforms.strength=1/e.renderer.height*(e.renderer.height/n.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)e.applyFilter(this,n,r,s);else{var a=e.getFilterTexture(),o=e.renderer,h=n,l=a;this.state.blend=!1,e.applyFilter(this,h,l,on.CLEAR);for(var u=1;u<this.passes-1;u++){e.bindAndClear(h,on.BLIT),this.uniforms.uSampler=l;var c=l;l=h,h=c,o.shader.bind(this),o.geometry.draw(5)}this.state.blend=!0,e.applyFilter(this,l,r,s),e.returnFilterTexture(a)}},Object.defineProperty(t.prototype,"blur",{get:function(){return this.strength},set:function(e){this.padding=1+Math.abs(e)*2,this.strength=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=e,this.passes=e},enumerable:!1,configurable:!0}),t}(ci);(function(i){rp(t,i);function t(e,n,r,s){e===void 0&&(e=8),n===void 0&&(n=4),r===void 0&&(r=dt.FILTER_RESOLUTION),s===void 0&&(s=5);var a=i.call(this)||this;return a.blurXFilter=new _f(!0,e,n,r,s),a.blurYFilter=new _f(!1,e,n,r,s),a.resolution=r,a.quality=n,a.blur=e,a.repeatEdgePixels=!1,a}return t.prototype.apply=function(e,n,r,s){var a=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(a&&o){var h=e.getFilterTexture();this.blurXFilter.apply(e,n,h,on.CLEAR),this.blurYFilter.apply(e,h,r,s),e.returnFilterTexture(h)}else o?this.blurYFilter.apply(e,n,r,s):this.blurXFilter.apply(e,n,r,s)},t.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(t.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(e){this.blurXFilter.quality=this.blurYFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(e){this.blurYFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(e){this.blurYFilter.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(e){this._repeatEdgePixels=e,this.updatePadding()},enumerable:!1,configurable:!0}),t})(ci);/*!
 * @pixi/filter-color-matrix - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var al=function(i,t){return al=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},al(i,t)};function HA(i,t){al(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var zA=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,gf=function(i){HA(t,i);function t(){var e=this,n={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return e=i.call(this,Wd,zA,n)||this,e.alpha=1,e}return t.prototype._loadMatrix=function(e,n){n===void 0&&(n=!1);var r=e;n&&(this._multiply(r,this.uniforms.m,e),r=this._colorMatrix(r)),this.uniforms.m=r},t.prototype._multiply=function(e,n,r){return e[0]=n[0]*r[0]+n[1]*r[5]+n[2]*r[10]+n[3]*r[15],e[1]=n[0]*r[1]+n[1]*r[6]+n[2]*r[11]+n[3]*r[16],e[2]=n[0]*r[2]+n[1]*r[7]+n[2]*r[12]+n[3]*r[17],e[3]=n[0]*r[3]+n[1]*r[8]+n[2]*r[13]+n[3]*r[18],e[4]=n[0]*r[4]+n[1]*r[9]+n[2]*r[14]+n[3]*r[19]+n[4],e[5]=n[5]*r[0]+n[6]*r[5]+n[7]*r[10]+n[8]*r[15],e[6]=n[5]*r[1]+n[6]*r[6]+n[7]*r[11]+n[8]*r[16],e[7]=n[5]*r[2]+n[6]*r[7]+n[7]*r[12]+n[8]*r[17],e[8]=n[5]*r[3]+n[6]*r[8]+n[7]*r[13]+n[8]*r[18],e[9]=n[5]*r[4]+n[6]*r[9]+n[7]*r[14]+n[8]*r[19]+n[9],e[10]=n[10]*r[0]+n[11]*r[5]+n[12]*r[10]+n[13]*r[15],e[11]=n[10]*r[1]+n[11]*r[6]+n[12]*r[11]+n[13]*r[16],e[12]=n[10]*r[2]+n[11]*r[7]+n[12]*r[12]+n[13]*r[17],e[13]=n[10]*r[3]+n[11]*r[8]+n[12]*r[13]+n[13]*r[18],e[14]=n[10]*r[4]+n[11]*r[9]+n[12]*r[14]+n[13]*r[19]+n[14],e[15]=n[15]*r[0]+n[16]*r[5]+n[17]*r[10]+n[18]*r[15],e[16]=n[15]*r[1]+n[16]*r[6]+n[17]*r[11]+n[18]*r[16],e[17]=n[15]*r[2]+n[16]*r[7]+n[17]*r[12]+n[18]*r[17],e[18]=n[15]*r[3]+n[16]*r[8]+n[17]*r[13]+n[18]*r[18],e[19]=n[15]*r[4]+n[16]*r[9]+n[17]*r[14]+n[18]*r[19]+n[19],e},t.prototype._colorMatrix=function(e){var n=new Float32Array(e);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n},t.prototype.brightness=function(e,n){var r=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(r,n)},t.prototype.tint=function(e,n){var r=e>>16&255,s=e>>8&255,a=e&255,o=[r/255,0,0,0,0,0,s/255,0,0,0,0,0,a/255,0,0,0,0,0,1,0];this._loadMatrix(o,n)},t.prototype.greyscale=function(e,n){var r=[e,e,e,0,0,e,e,e,0,0,e,e,e,0,0,0,0,0,1,0];this._loadMatrix(r,n)},t.prototype.blackAndWhite=function(e){var n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.hue=function(e,n){e=(e||0)/180*Math.PI;var r=Math.cos(e),s=Math.sin(e),a=Math.sqrt,o=1/3,h=a(o),l=r+(1-r)*o,u=o*(1-r)-h*s,c=o*(1-r)+h*s,f=o*(1-r)+h*s,d=r+o*(1-r),m=o*(1-r)-h*s,_=o*(1-r)-h*s,p=o*(1-r)+h*s,v=r+o*(1-r),y=[l,u,c,0,0,f,d,m,0,0,_,p,v,0,0,0,0,0,1,0];this._loadMatrix(y,n)},t.prototype.contrast=function(e,n){var r=(e||0)+1,s=-.5*(r-1),a=[r,0,0,0,s,0,r,0,0,s,0,0,r,0,s,0,0,0,1,0];this._loadMatrix(a,n)},t.prototype.saturate=function(e,n){e===void 0&&(e=0);var r=e*2/3+1,s=(r-1)*-.5,a=[r,s,s,0,0,s,r,s,0,0,s,s,r,0,0,0,0,0,1,0];this._loadMatrix(a,n)},t.prototype.desaturate=function(){this.saturate(-1)},t.prototype.negative=function(e){var n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.sepia=function(e){var n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.technicolor=function(e){var n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.polaroid=function(e){var n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.toBGR=function(e){var n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.kodachrome=function(e){var n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.browni=function(e){var n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.vintage=function(e){var n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.colorTone=function(e,n,r,s,a){e=e||.2,n=n||.15,r=r||16770432,s=s||3375104;var o=(r>>16&255)/255,h=(r>>8&255)/255,l=(r&255)/255,u=(s>>16&255)/255,c=(s>>8&255)/255,f=(s&255)/255,d=[.3,.59,.11,0,0,o,h,l,e,0,u,c,f,n,0,o-u,h-c,l-f,0,0];this._loadMatrix(d,a)},t.prototype.night=function(e,n){e=e||.1;var r=[e*-2,-e,0,0,0,-e,0,e,0,0,0,e,e*2,0,0,0,0,0,1,0];this._loadMatrix(r,n)},t.prototype.predator=function(e,n){var r=[11.224130630493164*e,-4.794486999511719*e,-2.8746118545532227*e,0*e,.40342438220977783*e,-3.6330697536468506*e,9.193157196044922*e,-2.951810836791992*e,0*e,-1.316135048866272*e,-3.2184197902679443*e,-4.2375030517578125*e,7.476448059082031*e,0*e,.8044459223747253*e,0,0,0,1,0];this._loadMatrix(r,n)},t.prototype.lsd=function(e){var n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.reset=function(){var e=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(e,!1)},Object.defineProperty(t.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(e){this.uniforms.m=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(e){this.uniforms.uAlpha=e},enumerable:!1,configurable:!0}),t}(ci);gf.prototype.grayscale=gf.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ol=function(i,t){return ol=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},ol(i,t)};function VA(i,t){ol(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var WA=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,XA=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;(function(i){VA(t,i);function t(e,n){var r=this,s=new Se;return e.renderable=!1,r=i.call(this,XA,WA,{mapSampler:e._texture,filterMatrix:s,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,r.maskSprite=e,r.maskMatrix=s,n==null&&(n=20),r.scale=new ie(n,n),r}return t.prototype.apply=function(e,n,r,s){this.uniforms.filterMatrix=e.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var a=this.maskSprite.worldTransform,o=Math.sqrt(a.a*a.a+a.b*a.b),h=Math.sqrt(a.c*a.c+a.d*a.d);o!==0&&h!==0&&(this.uniforms.rotation[0]=a.a/o,this.uniforms.rotation[1]=a.b/o,this.uniforms.rotation[2]=a.c/h,this.uniforms.rotation[3]=a.d/h),e.applyFilter(this,n,r,s)},Object.defineProperty(t.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(e){this.uniforms.mapSampler=e},enumerable:!1,configurable:!0}),t})(ci);/*!
 * @pixi/filter-fxaa - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var hl=function(i,t){return hl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},hl(i,t)};function YA(i,t){hl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var jA=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,qA=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`;(function(i){YA(t,i);function t(){return i.call(this,jA,qA)||this}return t})(ci);/*!
 * @pixi/filter-noise - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ll=function(i,t){return ll=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},ll(i,t)};function $A(i,t){ll(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var JA=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;(function(i){$A(t,i);function t(e,n){e===void 0&&(e=.5),n===void 0&&(n=Math.random());var r=i.call(this,Wd,JA,{uNoise:0,uSeed:0})||this;return r.noise=e,r.seed=n,r}return Object.defineProperty(t.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(e){this.uniforms.uNoise=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(e){this.uniforms.uSeed=e},enumerable:!1,configurable:!0}),t})(ci);/*!
 * @pixi/mixin-cache-as-bitmap - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var sp=new Se;fe.prototype._cacheAsBitmap=!1;fe.prototype._cacheData=null;fe.prototype._cacheAsBitmapResolution=null;fe.prototype._cacheAsBitmapMultisample=re.NONE;var KA=function(){function i(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return i}();Object.defineProperties(fe.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(i){i!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=i,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(i){i!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=i,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(i){if(this._cacheAsBitmap!==i){this._cacheAsBitmap=i;var t;i?(this._cacheData||(this._cacheData=new KA),t=this._cacheData,t.originalRender=this.render,t.originalRenderCanvas=this.renderCanvas,t.originalUpdateTransform=this.updateTransform,t.originalCalculateBounds=this.calculateBounds,t.originalGetLocalBounds=this.getLocalBounds,t.originalDestroy=this.destroy,t.originalContainsPoint=this.containsPoint,t.originalMask=this._mask,t.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(t=this._cacheData,t.sprite&&this._destroyCachedDisplayObject(),this.render=t.originalRender,this.renderCanvas=t.originalRenderCanvas,this.calculateBounds=t.originalCalculateBounds,this.getLocalBounds=t.originalGetLocalBounds,this.destroy=t.originalDestroy,this.updateTransform=t.originalUpdateTransform,this.containsPoint=t.originalContainsPoint,this._mask=t.originalMask,this.filterArea=t.originalFilterArea)}}}});fe.prototype._renderCached=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(t))};fe.prototype._initCachedDisplayObject=function(t){var e;if(!(this._cacheData&&this._cacheData.sprite)){var n=this.alpha;this.alpha=1,t.batch.flush();var r=this.getLocalBounds(null,!0).clone();if(this.filters&&this.filters.length){var s=this.filters[0].padding;r.pad(s)}r.ceil(dt.RESOLUTION);var a=t.renderTexture.current,o=t.renderTexture.sourceFrame.clone(),h=t.renderTexture.destinationFrame.clone(),l=t.projection.transform,u=zi.create({width:r.width,height:r.height,resolution:this.cacheAsBitmapResolution||t.resolution,multisample:(e=this.cacheAsBitmapMultisample)!==null&&e!==void 0?e:t.multisample}),c="cacheAsBitmap_"+Hi();this._cacheData.textureCacheId=c,jt.addToCache(u.baseTexture,c),Ut.addToCache(u,c);var f=this.transform.localTransform.copyTo(sp).invert().translate(-r.x,-r.y);this.render=this._cacheData.originalRender,t.render(this,{renderTexture:u,clear:!0,transform:f,skipUpdateTransform:!1}),t.framebuffer.blit(),t.projection.transform=l,t.renderTexture.bind(a,o,h),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var d=new Es(u);d.transform.worldTransform=this.transform.worldTransform,d.anchor.x=-(r.x/r.width),d.anchor.y=-(r.y/r.height),d.alpha=n,d._bounds=this._bounds,this._cacheData.sprite=d,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=d.containsPoint.bind(d)}};fe.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(t))};fe.prototype._initCachedDisplayObjectCanvas=function(t){if(!(this._cacheData&&this._cacheData.sprite)){var e=this.getLocalBounds(null,!0),n=this.alpha;this.alpha=1;var r=t.context,s=t._projTransform;e.ceil(dt.RESOLUTION);var a=zi.create({width:e.width,height:e.height}),o="cacheAsBitmap_"+Hi();this._cacheData.textureCacheId=o,jt.addToCache(a.baseTexture,o),Ut.addToCache(a,o);var h=sp;this.transform.localTransform.copyTo(h),h.invert(),h.tx-=e.x,h.ty-=e.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,{renderTexture:a,clear:!0,transform:h,skipUpdateTransform:!1}),t.context=r,t._projTransform=s,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var l=new Es(a);l.transform.worldTransform=this.transform.worldTransform,l.anchor.x=-(e.x/e.width),l.anchor.y=-(e.y/e.height),l.alpha=n,l._bounds=this._bounds,this._cacheData.sprite=l,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=l.containsPoint.bind(l)}};fe.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};fe.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};fe.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,jt.removeFromCache(this._cacheData.textureCacheId),Ut.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};fe.prototype._cacheAsBitmapDestroy=function(t){this.cacheAsBitmap=!1,this.destroy(t)};/*!
 * @pixi/mixin-get-child-by-name - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */fe.prototype.name=null;Mn.prototype.getChildByName=function(t,e){for(var n=0,r=this.children.length;n<r;n++)if(this.children[n].name===t)return this.children[n];if(e)for(var n=0,r=this.children.length;n<r;n++){var s=this.children[n];if(s.getChildByName){var a=s.getChildByName(t,!0);if(a)return a}}return null};/*!
 * @pixi/mixin-get-global-position - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */fe.prototype.getGlobalPosition=function(t,e){return t===void 0&&(t=new ie),e===void 0&&(e=!1),this.parent?this.parent.toGlobal(this.position,t,e):(t.x=this.position.x,t.y=this.position.y),t};/*!
 * @pixi/app - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ZA=function(){function i(){}return i.init=function(t){var e=this;Object.defineProperty(this,"resizeTo",{set:function(n){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=n,n&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){e._resizeTo&&(e.cancelResize(),e._resizeId=requestAnimationFrame(function(){return e.resize()}))},this.cancelResize=function(){e._resizeId&&(cancelAnimationFrame(e._resizeId),e._resizeId=null)},this.resize=function(){if(e._resizeTo){e.cancelResize();var n,r;if(e._resizeTo===globalThis.window)n=globalThis.innerWidth,r=globalThis.innerHeight;else{var s=e._resizeTo,a=s.clientWidth,o=s.clientHeight;n=a,r=o}e.renderer.resize(n,r)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=t.resizeTo||null},i.destroy=function(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},i.extension=Qt.Application,i}(),QA=function(){function i(t){var e=this;this.stage=new Mn,t=Object.assign({forceCanvas:!1},t),this.renderer=Vd(t),i._plugins.forEach(function(n){n.init.call(e,t)})}return i.registerPlugin=function(t){fn("6.5.0","Application.registerPlugin() is deprecated, use extensions.add()"),qn.add({type:Qt.Application,ref:t})},i.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(i.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),i.prototype.destroy=function(t,e){var n=this,r=i._plugins.slice(0);r.reverse(),r.forEach(function(s){s.destroy.call(n)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null},i._plugins=[],i}();qn.handleByList(Qt.Application,QA._plugins);qn.add(ZA);/*!
 * @pixi/mesh-extras - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ul=function(i,t){return ul=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},ul(i,t)};function Ir(i,t){ul(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var t1=function(i){Ir(t,i);function t(e,n,r,s){e===void 0&&(e=100),n===void 0&&(n=100),r===void 0&&(r=10),s===void 0&&(s=10);var a=i.call(this)||this;return a.segWidth=r,a.segHeight=s,a.width=e,a.height=n,a.build(),a}return t.prototype.build=function(){for(var e=this.segWidth*this.segHeight,n=[],r=[],s=[],a=this.segWidth-1,o=this.segHeight-1,h=this.width/a,l=this.height/o,u=0;u<e;u++){var c=u%this.segWidth,f=u/this.segWidth|0;n.push(c*h,f*l),r.push(c/a,f/o)}for(var d=a*o,u=0;u<d;u++){var m=u%a,_=u/a|0,p=_*this.segWidth+m,v=_*this.segWidth+m+1,y=(_+1)*this.segWidth+m,g=(_+1)*this.segWidth+m+1;s.push(p,v,y,v,g,y)}this.buffers[0].data=new Float32Array(n),this.buffers[1].data=new Float32Array(r),this.indexBuffer.data=new Uint16Array(s),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},t}(Ja),e1=function(i){Ir(t,i);function t(e,n,r){e===void 0&&(e=200),r===void 0&&(r=0);var s=i.call(this,new Float32Array(n.length*4),new Float32Array(n.length*4),new Uint16Array((n.length-1)*6))||this;return s.points=n,s._width=e,s.textureScale=r,s.build(),s}return Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),t.prototype.build=function(){var e=this.points;if(e){var n=this.getBuffer("aVertexPosition"),r=this.getBuffer("aTextureCoord"),s=this.getIndex();if(!(e.length<1)){n.data.length/4!==e.length&&(n.data=new Float32Array(e.length*4),r.data=new Float32Array(e.length*4),s.data=new Uint16Array((e.length-1)*6));var a=r.data,o=s.data;a[0]=0,a[1]=0,a[2]=0,a[3]=1;for(var h=0,l=e[0],u=this._width*this.textureScale,c=e.length,f=0;f<c;f++){var d=f*4;if(this.textureScale>0){var m=l.x-e[f].x,_=l.y-e[f].y,p=Math.sqrt(m*m+_*_);l=e[f],h+=p/u}else h=f/(c-1);a[d]=h,a[d+1]=0,a[d+2]=h,a[d+3]=1}for(var v=0,f=0;f<c-1;f++){var d=f*2;o[v++]=d,o[v++]=d+1,o[v++]=d+2,o[v++]=d+2,o[v++]=d+1,o[v++]=d+3}r.update(),s.update(),this.updateVertices()}}},t.prototype.updateVertices=function(){var e=this.points;if(!(e.length<1)){for(var n=e[0],r,s=0,a=0,o=this.buffers[0].data,h=e.length,l=0;l<h;l++){var u=e[l],c=l*4;l<e.length-1?r=e[l+1]:r=u,a=-(r.x-n.x),s=r.y-n.y;var f=Math.sqrt(s*s+a*a),d=this.textureScale>0?this.textureScale*this._width/2:this._width/2;s/=f,a/=f,s*=d,a*=d,o[c]=u.x+s,o[c+1]=u.y+a,o[c+2]=u.x-s,o[c+3]=u.y-a,n=u}this.buffers[0].update()}},t.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},t}(Ja);(function(i){Ir(t,i);function t(e,n,r){r===void 0&&(r=0);var s=this,a=new e1(e.height,n,r),o=new us(e);return r>0&&(e.baseTexture.wrapMode=Tn.REPEAT),s=i.call(this,a,o)||this,s.autoUpdate=!0,s}return t.prototype._render=function(e){var n=this.geometry;(this.autoUpdate||n._width!==this.shader.texture.height)&&(n._width=this.shader.texture.height,n.update()),i.prototype._render.call(this,e)},t})(ls);var n1=function(i){Ir(t,i);function t(e,n,r){var s=this,a=new t1(e.width,e.height,n,r),o=new us(Ut.WHITE);return s=i.call(this,a,o)||this,s.texture=e,s.autoResize=!0,s}return t.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var e=this.geometry,n=this.shader.texture,r=n.width,s=n.height;this.autoResize&&(e.width!==r||e.height!==s)&&(e.width=this.shader.texture.width,e.height=this.shader.texture.height,e.build())},Object.defineProperty(t.prototype,"texture",{get:function(){return this.shader.texture},set:function(e){this.shader.texture!==e&&(this.shader.texture=e,this._textureID=-1,e.baseTexture.valid?this.textureUpdated():e.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),t.prototype._render=function(e){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),i.prototype._render.call(this,e)},t.prototype.destroy=function(e){this.shader.texture.off("update",this.textureUpdated,this),i.prototype.destroy.call(this,e)},t}(ls);(function(i){Ir(t,i);function t(e,n,r,s,a){e===void 0&&(e=Ut.EMPTY);var o=this,h=new Ja(n,r,s);h.getBuffer("aVertexPosition").static=!1;var l=new us(e);return o=i.call(this,h,l,null,a)||this,o.autoUpdate=!0,o}return Object.defineProperty(t.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(e){this.geometry.getBuffer("aVertexPosition").data=e},enumerable:!1,configurable:!0}),t.prototype._render=function(e){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),i.prototype._render.call(this,e)},t})(ls);var _a=10;(function(i){Ir(t,i);function t(e,n,r,s,a){n===void 0&&(n=_a),r===void 0&&(r=_a),s===void 0&&(s=_a),a===void 0&&(a=_a);var o=i.call(this,Ut.WHITE,4,4)||this;return o._origWidth=e.orig.width,o._origHeight=e.orig.height,o._width=o._origWidth,o._height=o._origHeight,o._leftWidth=n,o._rightWidth=s,o._topHeight=r,o._bottomHeight=a,o.texture=e,o}return t.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(t.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(e){this.geometry.getBuffer("aVertexPosition").data=e},enumerable:!1,configurable:!0}),t.prototype.updateHorizontalVertices=function(){var e=this.vertices,n=this._getMinScale();e[9]=e[11]=e[13]=e[15]=this._topHeight*n,e[17]=e[19]=e[21]=e[23]=this._height-this._bottomHeight*n,e[25]=e[27]=e[29]=e[31]=this._height},t.prototype.updateVerticalVertices=function(){var e=this.vertices,n=this._getMinScale();e[2]=e[10]=e[18]=e[26]=this._leftWidth*n,e[4]=e[12]=e[20]=e[28]=this._width-this._rightWidth*n,e[6]=e[14]=e[22]=e[30]=this._width},t.prototype._getMinScale=function(){var e=this._leftWidth+this._rightWidth,n=this._width>e?1:this._width/e,r=this._topHeight+this._bottomHeight,s=this._height>r?1:this._height/r,a=Math.min(n,s);return a},Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(e){this._leftWidth=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(e){this._rightWidth=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"topHeight",{get:function(){return this._topHeight},set:function(e){this._topHeight=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(e){this._bottomHeight=e,this._refresh()},enumerable:!1,configurable:!0}),t.prototype._refresh=function(){var e=this.texture,n=this.geometry.buffers[1].data;this._origWidth=e.orig.width,this._origHeight=e.orig.height;var r=1/this._origWidth,s=1/this._origHeight;n[0]=n[8]=n[16]=n[24]=0,n[1]=n[3]=n[5]=n[7]=0,n[6]=n[14]=n[22]=n[30]=1,n[25]=n[27]=n[29]=n[31]=1,n[2]=n[10]=n[18]=n[26]=r*this._leftWidth,n[4]=n[12]=n[20]=n[28]=1-r*this._rightWidth,n[9]=n[11]=n[13]=n[15]=s*this._topHeight,n[17]=n[19]=n[21]=n[23]=1-s*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},t})(n1);/*!
 * @pixi/sprite-animated - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var cl=function(i,t){return cl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},cl(i,t)};function i1(i,t){cl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}(function(i){i1(t,i);function t(e,n){n===void 0&&(n=!0);var r=i.call(this,e[0]instanceof Ut?e[0]:e[0].texture)||this;return r._textures=null,r._durations=null,r._autoUpdate=n,r._isConnectedToTicker=!1,r.animationSpeed=1,r.loop=!0,r.updateAnchor=!1,r.onComplete=null,r.onFrameChange=null,r.onLoop=null,r._currentTime=0,r._playing=!1,r._previousFrame=null,r.textures=e,r}return t.prototype.stop=function(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Oe.shared.remove(this.update,this),this._isConnectedToTicker=!1))},t.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Oe.shared.add(this.update,this,jn.HIGH),this._isConnectedToTicker=!0))},t.prototype.gotoAndStop=function(e){this.stop();var n=this.currentFrame;this._currentTime=e,n!==this.currentFrame&&this.updateTexture()},t.prototype.gotoAndPlay=function(e){var n=this.currentFrame;this._currentTime=e,n!==this.currentFrame&&this.updateTexture(),this.play()},t.prototype.update=function(e){if(this._playing){var n=this.animationSpeed*e,r=this.currentFrame;if(this._durations!==null){var s=this._currentTime%1*this._durations[this.currentFrame];for(s+=n/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];var a=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*a,this._currentTime+=a;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r?this.onLoop():this.animationSpeed<0&&this.currentFrame>r&&this.onLoop()),this.updateTexture())}},t.prototype.updateTexture=function(){var e=this.currentFrame;this._previousFrame!==e&&(this._previousFrame=e,this._texture=this._textures[e],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},t.prototype.destroy=function(e){this.stop(),i.prototype.destroy.call(this,e),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},t.fromFrames=function(e){for(var n=[],r=0;r<e.length;++r)n.push(Ut.from(e[r]));return new t(n)},t.fromImages=function(e){for(var n=[],r=0;r<e.length;++r)n.push(Ut.from(e[r]));return new t(n)},Object.defineProperty(t.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textures",{get:function(){return this._textures},set:function(e){if(e[0]instanceof Ut)this._textures=e,this._durations=null;else{this._textures=[],this._durations=[];for(var n=0;n<e.length;n++)this._textures.push(e[n].texture),this._durations.push(e[n].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"currentFrame",{get:function(){var e=Math.floor(this._currentTime)%this._textures.length;return e<0&&(e+=this._textures.length),e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Oe.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Oe.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),t})(Es);/*!
 * pixi.js - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */qn.add(GM,jM,WM,Gw,pA,Yd,EA,OA,uw,Uw,Nw,vA,rS,ew);const Sa=(i,t)=>{const e=t.x-i.x,n=t.y-i.y;return Math.sqrt(e*e+n*n)},r1=(i,t)=>{const e=t.x-i.x,n=t.y-i.y;return a1(Math.atan2(n,e))},s1=(i,t,e)=>{const n={x:0,y:0};return e=fl(e),n.x=i.x-t*Math.cos(e),n.y=i.y-t*Math.sin(e),n},fl=i=>i*(Math.PI/180),a1=i=>i*(180/Math.PI),o1=i=>isNaN(i.buttons)?i.pressure!==0:i.buttons!==0,ph=new Map,yf=i=>{ph.has(i)&&clearTimeout(ph.get(i)),ph.set(i,setTimeout(i,100))},Ga=(i,t,e)=>{const n=t.split(/[ ,]+/g);let r;for(let s=0;s<n.length;s+=1)r=n[s],i.addEventListener?i.addEventListener(r,e,!1):i.attachEvent&&i.attachEvent(r,e)},xf=(i,t,e)=>{const n=t.split(/[ ,]+/g);let r;for(let s=0;s<n.length;s+=1)r=n[s],i.removeEventListener?i.removeEventListener(r,e):i.detachEvent&&i.detachEvent(r,e)},ap=i=>(i.preventDefault(),i.type.match(/^touch/)?i.changedTouches:i),Ef=()=>{const i=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:i,y:t}},Tf=(i,t)=>{t.top||t.right||t.bottom||t.left?(i.style.top=t.top,i.style.right=t.right,i.style.bottom=t.bottom,i.style.left=t.left):(i.style.left=t.x+"px",i.style.top=t.y+"px")},Dl=(i,t,e)=>{const n=op(i);for(let r in n)if(n.hasOwnProperty(r))if(typeof t=="string")n[r]=t+" "+e;else{let s="";for(let a=0,o=t.length;a<o;a+=1)s+=t[a]+" "+e+", ";n[r]=s.slice(0,-2)}return n},h1=(i,t)=>{const e=op(i);for(let n in e)e.hasOwnProperty(n)&&(e[n]=t);return e},op=i=>{const t={};return t[i]="",["webkit","Moz","o"].forEach(function(n){t[n+i.charAt(0).toUpperCase()+i.slice(1)]=""}),t},mh=(i,t)=>{for(let e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i},l1=(i,t)=>{const e={};for(let n in i)i.hasOwnProperty(n)&&t.hasOwnProperty(n)?e[n]=t[n]:i.hasOwnProperty(n)&&(e[n]=i[n]);return e},dl=(i,t)=>{if(i.length)for(let e=0,n=i.length;e<n;e+=1)t(i[e]);else t(i)},u1=(i,t,e)=>({x:Math.min(Math.max(i.x,t.x-e),t.x+e),y:Math.min(Math.max(i.y,t.y-e),t.y+e)});var c1="ontouchstart"in window,f1=!!window.PointerEvent,d1=!!window.MSPointerEvent,Xr={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},vr,cs={};f1?vr=Xr.pointer:d1?vr=Xr.MSPointer:c1?(vr=Xr.touch,cs=Xr.mouse):vr=Xr.mouse;function $n(){}$n.prototype.on=function(i,t){var e=this,n=i.split(/[ ,]+/g),r;e._handlers_=e._handlers_||{};for(var s=0;s<n.length;s+=1)r=n[s],e._handlers_[r]=e._handlers_[r]||[],e._handlers_[r].push(t);return e};$n.prototype.off=function(i,t){var e=this;return e._handlers_=e._handlers_||{},i===void 0?e._handlers_={}:t===void 0?e._handlers_[i]=null:e._handlers_[i]&&e._handlers_[i].indexOf(t)>=0&&e._handlers_[i].splice(e._handlers_[i].indexOf(t),1),e};$n.prototype.trigger=function(i,t){var e=this,n=i.split(/[ ,]+/g),r;e._handlers_=e._handlers_||{};for(var s=0;s<n.length;s+=1)r=n[s],e._handlers_[r]&&e._handlers_[r].length&&e._handlers_[r].forEach(function(a){a.call(e,{type:r,target:e},t)})};$n.prototype.config=function(i){var t=this;t.options=t.defaults||{},i&&(t.options=l1(t.options,i))};$n.prototype.bindEvt=function(i,t){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[t]=function(){typeof e["on"+t]=="function"?e["on"+t].apply(e,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},Ga(i,vr[t],e._domHandlers_[t]),cs[t]&&Ga(i,cs[t],e._domHandlers_[t]),e};$n.prototype.unbindEvt=function(i,t){var e=this;return e._domHandlers_=e._domHandlers_||{},xf(i,vr[t],e._domHandlers_[t]),cs[t]&&xf(i,cs[t],e._domHandlers_[t]),delete e._domHandlers_[t],this};function Me(i,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=i,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Me.id,Me.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Me.prototype=new $n;Me.constructor=Me;Me.id=0;Me.prototype.buildEl=function(i){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Me.prototype.stylize=function(){if(this.options.dataOnly)return this;var i=this.options.fadeTime+"ms",t=h1("borderRadius","50%"),e=Dl("transition","opacity",i),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},mh(n.el,e),this.options.shape==="circle"&&mh(n.back,t),mh(n.front,t),this.applyStyles(n),this};Me.prototype.applyStyles=function(i){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var e in i[t])this.ui[t].style[e]=i[t][e];return this};Me.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Me.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Me.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Me.prototype.show=function(i){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof i=="function"&&i.call(this)},t.options.fadeTime)),t};Me.prototype.hide=function(i){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var e=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=e,typeof i=="function"&&i.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const e=t.options.restJoystick,n={};n.x=e===!0||e.x!==!1?0:t.instance.frontPosition.x,n.y=e===!0||e.y!==!1?0:t.instance.frontPosition.y,t.setPosition(i,n)}return t};Me.prototype.setPosition=function(i,t){var e=this;e.frontPosition={x:t.x,y:t.y};var n=e.options.fadeTime+"ms",r={};r.front=Dl("transition",["transform"],n);var s={front:{}};s.front={transform:"translate("+e.frontPosition.x+"px,"+e.frontPosition.y+"px)"},e.applyStyles(r),e.applyStyles(s),e.restTimeout=setTimeout(function(){typeof i=="function"&&i.call(e),e.restCallback()},e.options.fadeTime)};Me.prototype.restCallback=function(){var i=this,t={};t.front=Dl("transition","none",""),i.applyStyles(t),i.trigger("rested",i.instance)};Me.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Me.prototype.computeDirection=function(i){var t=i.angle.radian,e=Math.PI/4,n=Math.PI/2,r,s,a;if(t>e&&t<e*3&&!i.lockX?r="up":t>-e&&t<=e&&!i.lockY?r="left":t>-e*3&&t<=-e&&!i.lockX?r="down":i.lockY||(r="right"),i.lockY||(t>-n&&t<n?s="left":s="right"),i.lockX||(t>0?a="up":a="down"),i.force>this.options.threshold){var o={},h;for(h in this.direction)this.direction.hasOwnProperty(h)&&(o[h]=this.direction[h]);var l={};this.direction={x:s,y:a,angle:r},i.direction=this.direction;for(h in o)o[h]===this.direction[h]&&(l[h]=!0);if(l.x&&l.y&&l.angle)return i;(!l.x||!l.y)&&this.trigger("plain",i),l.x||this.trigger("plain:"+s,i),l.y||this.trigger("plain:"+a,i),l.angle||this.trigger("dir dir:"+r,i)}else this.resetDirection();return i};function de(i,t){var e=this;e.nipples=[],e.idles=[],e.actives=[],e.ids=[],e.pressureIntervals={},e.manager=i,e.id=de.id,de.id+=1,e.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},e.config(t),(e.options.mode==="static"||e.options.mode==="semi")&&(e.options.multitouch=!1),e.options.multitouch||(e.options.maxNumberOfNipples=1);const n=getComputedStyle(e.options.zone.parentElement);return n&&n.display==="flex"&&(e.parentIsFlex=!0),e.updateBox(),e.prepareNipples(),e.bindings(),e.begin(),e.nipples}de.prototype=new $n;de.constructor=de;de.id=0;de.prototype.prepareNipples=function(){var i=this,t=i.nipples;t.on=i.on.bind(i),t.off=i.off.bind(i),t.options=i.options,t.destroy=i.destroy.bind(i),t.ids=i.ids,t.id=i.id,t.processOnMove=i.processOnMove.bind(i),t.processOnEnd=i.processOnEnd.bind(i),t.get=function(e){if(e===void 0)return t[0];for(var n=0,r=t.length;n<r;n+=1)if(t[n].identifier===e)return t[n];return!1}};de.prototype.bindings=function(){var i=this;i.bindEvt(i.options.zone,"start"),i.options.zone.style.touchAction="none",i.options.zone.style.msTouchAction="none"};de.prototype.begin=function(){var i=this,t=i.options;if(t.mode==="static"){var e=i.createNipple(t.position,i.manager.getIdentifier());e.add(),i.idles.push(e)}};de.prototype.createNipple=function(i,t){var e=this,n=e.manager.scroll,r={},s=e.options,a={x:e.parentIsFlex?n.x:n.x+e.box.left,y:e.parentIsFlex?n.y:n.y+e.box.top};if(i.x&&i.y)r={x:i.x-a.x,y:i.y-a.y};else if(i.top||i.right||i.bottom||i.left){var o=document.createElement("DIV");o.style.display="hidden",o.style.top=i.top,o.style.right=i.right,o.style.bottom=i.bottom,o.style.left=i.left,o.style.position="absolute",s.zone.appendChild(o);var h=o.getBoundingClientRect();s.zone.removeChild(o),r=i,i={x:h.left+n.x,y:h.top+n.y}}var l=new Me(e,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:t,position:i,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(Tf(l.ui.el,r),Tf(l.ui.front,l.frontPosition)),e.nipples.push(l),e.trigger("added "+l.identifier+":added",l),e.manager.trigger("added "+l.identifier+":added",l),e.bindNipple(l),l};de.prototype.updateBox=function(){var i=this;i.box=i.options.zone.getBoundingClientRect()};de.prototype.bindNipple=function(i){var t=this,e,n=function(r,s){e=r.type+" "+s.id+":"+r.type,t.trigger(e,s)};i.on("destroyed",t.onDestroyed.bind(t)),i.on("shown hidden rested dir plain",n),i.on("dir:up dir:right dir:down dir:left",n),i.on("plain:up plain:right plain:down plain:left",n)};de.prototype.pressureFn=function(i,t,e){var n=this,r=0;clearInterval(n.pressureIntervals[e]),n.pressureIntervals[e]=setInterval(function(){var s=i.force||i.pressure||i.webkitForce||0;s!==r&&(t.trigger("pressure",s),n.trigger("pressure "+t.identifier+":pressure",s),r=s)}.bind(n),100)};de.prototype.onstart=function(i){var t=this,e=t.options,n=i;i=ap(i),t.updateBox();var r=function(s){t.actives.length<e.maxNumberOfNipples?t.processOnStart(s):n.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(a){if(Object.values(n.touches).findIndex(function(h){return h.identifier===a})<0){var o=[i[0]];o.identifier=a,t.processOnEnd(o)}}),t.actives.length<e.maxNumberOfNipples&&t.processOnStart(s))};return dl(i,r),t.manager.bindDocument(),!1};de.prototype.processOnStart=function(i){var t=this,e=t.options,n,r=t.manager.getIdentifier(i),s=i.force||i.pressure||i.webkitForce||0,a={x:i.pageX,y:i.pageY},o=t.getOrCreate(r,a);o.identifier!==r&&t.manager.removeIdentifier(o.identifier),o.identifier=r;var h=function(u){u.trigger("start",u),t.trigger("start "+u.id+":start",u),u.show(),s>0&&t.pressureFn(i,u,u.identifier),t.processOnMove(i)};if((n=t.idles.indexOf(o))>=0&&t.idles.splice(n,1),t.actives.push(o),t.ids.push(o.identifier),e.mode!=="semi")h(o);else{var l=Sa(a,o.position);if(l<=e.catchDistance)h(o);else{o.destroy(),t.processOnStart(i);return}}return o};de.prototype.getOrCreate=function(i,t){var e=this,n=e.options,r;return/(semi|static)/.test(n.mode)?(r=e.idles[0],r?(e.idles.splice(0,1),r):n.mode==="semi"?e.createNipple(t,i):(console.warn("Coudln't find the needed nipple."),!1)):(r=e.createNipple(t,i),r)};de.prototype.processOnMove=function(i){var t=this,e=t.options,n=t.manager.getIdentifier(i),r=t.nipples.get(n),s=t.manager.scroll;if(!o1(i)){this.processOnEnd(i);return}if(!r){console.error("Found zombie joystick with ID "+n),t.manager.removeIdentifier(n);return}if(e.dynamicPage){var a=r.el.getBoundingClientRect();r.position={x:s.x+a.left,y:s.y+a.top}}r.identifier=n;var o=r.options.size/2,h={x:i.pageX,y:i.pageY};e.lockX&&(h.y=r.position.y),e.lockY&&(h.x=r.position.x);var l=Sa(h,r.position),u=r1(h,r.position),c=fl(u),f=l/o,d={distance:l,position:h},m,_;if(r.options.shape==="circle"?(m=Math.min(l,o),_=s1(r.position,m,u)):(_=u1(h,r.position,o),m=Sa(_,r.position)),e.follow){if(l>o){let g=h.x-_.x,T=h.y-_.y;r.position.x+=g,r.position.y+=T,r.el.style.top=r.position.y-(t.box.top+s.y)+"px",r.el.style.left=r.position.x-(t.box.left+s.x)+"px",l=Sa(h,r.position)}}else h=_,l=m;var p=h.x-r.position.x,v=h.y-r.position.y;r.frontPosition={x:p,y:v},e.dataOnly||(r.ui.front.style.transform="translate("+p+"px,"+v+"px)");var y={identifier:r.identifier,position:h,force:f,pressure:i.force||i.pressure||i.webkitForce||0,distance:l,angle:{radian:c,degree:u},vector:{x:p/o,y:-v/o},raw:d,instance:r,lockX:e.lockX,lockY:e.lockY};y=r.computeDirection(y),y.angle={radian:fl(180-u),degree:180-u},r.trigger("move",y),t.trigger("move "+r.id+":move",y)};de.prototype.processOnEnd=function(i){var t=this,e=t.options,n=t.manager.getIdentifier(i),r=t.nipples.get(n),s=t.manager.removeIdentifier(r.identifier);r&&(e.dataOnly||r.hide(function(){e.mode==="dynamic"&&(r.trigger("removed",r),t.trigger("removed "+r.id+":removed",r),t.manager.trigger("removed "+r.id+":removed",r),r.destroy())}),clearInterval(t.pressureIntervals[r.identifier]),r.resetDirection(),r.trigger("end",r),t.trigger("end "+r.id+":end",r),t.ids.indexOf(r.identifier)>=0&&t.ids.splice(t.ids.indexOf(r.identifier),1),t.actives.indexOf(r)>=0&&t.actives.splice(t.actives.indexOf(r),1),/(semi|static)/.test(e.mode)?t.idles.push(r):t.nipples.indexOf(r)>=0&&t.nipples.splice(t.nipples.indexOf(r),1),t.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(t.manager.ids[s.id]=s.identifier))};de.prototype.onDestroyed=function(i,t){var e=this;e.nipples.indexOf(t)>=0&&e.nipples.splice(e.nipples.indexOf(t),1),e.actives.indexOf(t)>=0&&e.actives.splice(e.actives.indexOf(t),1),e.idles.indexOf(t)>=0&&e.idles.splice(e.idles.indexOf(t),1),e.ids.indexOf(t.identifier)>=0&&e.ids.splice(e.ids.indexOf(t.identifier),1),e.manager.removeIdentifier(t.identifier),e.manager.unbindDocument()};de.prototype.destroy=function(){var i=this;i.unbindEvt(i.options.zone,"start"),i.nipples.forEach(function(e){e.destroy()});for(var t in i.pressureIntervals)i.pressureIntervals.hasOwnProperty(t)&&clearInterval(i.pressureIntervals[t]);i.trigger("destroyed",i.nipples),i.manager.unbindDocument(),i.off()};function Pe(i){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=Ef(),t.config(i),t.prepareCollections();var e=function(){var r;t.collections.forEach(function(s){s.forEach(function(a){r=a.el.getBoundingClientRect(),a.position={x:t.scroll.x+r.left,y:t.scroll.y+r.top}})})};Ga(window,"resize",function(){yf(e)});var n=function(){t.scroll=Ef()};return Ga(window,"scroll",function(){yf(n)}),t.collections}Pe.prototype=new $n;Pe.constructor=Pe;Pe.prototype.prepareCollections=function(){var i=this;i.collections.create=i.create.bind(i),i.collections.on=i.on.bind(i),i.collections.off=i.off.bind(i),i.collections.destroy=i.destroy.bind(i),i.collections.get=function(t){var e;return i.collections.every(function(n){return e=n.get(t),!e}),e}};Pe.prototype.create=function(i){return this.createCollection(i)};Pe.prototype.createCollection=function(i){var t=this,e=new de(t,i);return t.bindCollection(e),t.collections.push(e),e};Pe.prototype.bindCollection=function(i){var t=this,e,n=function(r,s){e=r.type+" "+s.id+":"+r.type,t.trigger(e,s)};i.on("destroyed",t.onDestroyed.bind(t)),i.on("shown hidden rested dir plain",n),i.on("dir:up dir:right dir:down dir:left",n),i.on("plain:up plain:right plain:down plain:left",n)};Pe.prototype.bindDocument=function(){var i=this;i.binded||(i.bindEvt(document,"move").bindEvt(document,"end"),i.binded=!0)};Pe.prototype.unbindDocument=function(i){var t=this;(!Object.keys(t.ids).length||i===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};Pe.prototype.getIdentifier=function(i){var t;return i?(t=i.identifier===void 0?i.pointerId:i.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};Pe.prototype.removeIdentifier=function(i){var t={};for(var e in this.ids)if(this.ids[e]===i){t.id=e,t.identifier=this.ids[e],delete this.ids[e];break}return t};Pe.prototype.onmove=function(i){var t=this;return t.onAny("move",i),!1};Pe.prototype.onend=function(i){var t=this;return t.onAny("end",i),!1};Pe.prototype.oncancel=function(i){var t=this;return t.onAny("end",i),!1};Pe.prototype.onAny=function(i,t){var e=this,n,r="processOn"+i.charAt(0).toUpperCase()+i.slice(1);t=ap(t);var s=function(o,h,l){l.ids.indexOf(h)>=0&&(l[r](o),o._found_=!0)},a=function(o){n=e.getIdentifier(o),dl(e.collections,s.bind(null,o,n)),o._found_||e.removeIdentifier(n)};return dl(t,a),!1};Pe.prototype.destroy=function(){var i=this;i.unbindDocument(!0),i.ids={},i.index=0,i.collections.forEach(function(t){t.destroy()}),i.off()};Pe.prototype.onDestroyed=function(i,t){var e=this;if(e.collections.indexOf(t)<0)return!1;e.collections.splice(e.collections.indexOf(t),1)};const bf=new Pe,Sf={create:function(i){return bf.create(i)},factory:bf};class Mf{constructor(){this.front=0,this.back=0,this.left=0,this.right=0}}class p1{constructor(t){this.view=t,this.moveJoystirckState=new Mf,this.rotateJoystirckState=new Mf,this.moveVector=new N,this.rotateVector=new N,this.upVector=new N(0,1,0);const e={zone:document.getElementById("moveJoystickDiv"),size:120,multitouch:!0,maxNumberOfNipples:2,mode:"static",restJoystick:!0,shape:"circle",position:{bottom:"80px",left:"100px"},dynamicPage:!0},n={zone:document.getElementById("rotateJoystickDiv"),size:120,multitouch:!0,maxNumberOfNipples:2,mode:"static",restJoystick:!0,shape:"circle",position:{bottom:"80px",right:"100px"},dynamicPage:!0};this.moveJoystick=Sf.create(e),this.rotateJoystick=Sf.create(n),this.moveJoystick[0].on("move",this.onJoystickMove.bind(this)),this.rotateJoystick[0].on("move",this.onJoystickRotate.bind(this)),this.moveJoystick[0].on("end",this.onMoveEnd.bind(this)),this.rotateJoystick[0].on("end",this.onRotateEnd.bind(this))}onMoveEnd(t){}onRotateEnd(t){}onJoystickRotate(t,e){const n=e.vector.y,r=e.vector.x;n>0?(this.rotateJoystirckState.front=Math.abs(n),this.rotateJoystirckState.back=0):n<0&&(this.rotateJoystirckState.front=0,this.rotateJoystirckState.back=Math.abs(n)),r>0?(this.rotateJoystirckState.left=0,this.rotateJoystirckState.right=Math.abs(r)):r<0&&(this.rotateJoystirckState.left=Math.abs(r),this.rotateJoystirckState.right=0)}onJoystickMove(t,e){const n=e.vector.y,r=e.vector.x;n>0?(this.moveJoystirckState.front=Math.abs(n),this.moveJoystirckState.back=0):n<0&&(this.moveJoystirckState.front=0,this.moveJoystirckState.back=Math.abs(n)),r>0?(this.moveJoystirckState.left=0,this.moveJoystirckState.right=Math.abs(r)):r<0&&(this.moveJoystirckState.left=Math.abs(r),this.moveJoystirckState.right=0)}}class hp extends Sp{constructor(t){super(t),this.pointer=new yt,this.radius=100,Vd({backgroundAlpha:0,width:window.innerWidth,height:window.innerWidth}),this.scene=new Ay,this.scene.background=new Zt(15790320),this.camera=new Je(75,window.innerWidth/window.innerHeight,1,1e4),this.renderer=new ad,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.div=document.getElementById("three"),this.div.appendChild(this.renderer.domElement);const e=new Jy(16777215,1);e.position.set(1,1,1).normalize(),this.scene.add(e);let n=new Ky("#ffffff",.1);n.position.set(0,20,20),this.scene.add(n);const s=new jy().load("https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg");s.anisotropy=16;let a=new Qy(2e3,40,40),o=new yl({side:ze,map:s});const h=new gn(a,o);this.scene.add(h);const l=new Cr(20,20,20),u=new Al(5,5,20,32),c=new wl(10,20,5,10),f=new Xa(10,16,16),d=[l,u,c,f];for(let m=0;m<2e3;m++){const _=Math.floor(Math.random()*d.length),p=d[_],v=new gn(p,new Vy({color:Math.random()*16777215}));v.position.x=Math.random()*800-400,v.position.y=Math.random()*800-400,v.position.z=Math.random()*800-400,v.rotation.x=Math.random()*2*Math.PI,v.rotation.y=Math.random()*2*Math.PI,v.rotation.z=Math.random()*2*Math.PI,this.scene.add(v)}this.raycaster=new Zy,this.joystickView=new p1(this)}}class lp{constructor(t,e){this.model=t,this.view=e,hi.mapObjectToGlobalId(this,this.constructor.name,"c")}destroy(){this.model=null,this.view=null}}class m1 extends lp{constructor(t,e){super(t,e),this.controllers={}}add(t){let e=t[t.toString()];if(e)throw new Error(this+" already has controller with name : "+e);e=Ii(t,[this.model,this.view]),this.controllers[t.toString()]=e,e.initialize()}removeController(t){t[t.toString()].destroy(),delete t[t.toString()]}removeAllControllers(){for(const t of Object.keys(this.controllers)){const e=this.controllers[t];e&&(e.destroy(),delete this.controllers[t])}}}class up extends lp{constructor(){super(...arguments),this.timerModel=Ii(Ha)}initialize(){this.joystickView=this.view.joystickView,this.moveJoystickState=this.joystickView.moveJoystirckState,this.rotateJoystickState=this.joystickView.rotateJoystirckState,this.scene=this.view.scene,this.camera=this.view.camera,this.renderer=this.view.renderer,this.raycaster=this.view.raycaster,this.moveVector=this.joystickView.moveVector,this.rotateVector=this.joystickView.rotateVector,this.startRendering()}startRendering(){this.timerModel.reset(),requestAnimationFrame(this.animate.bind(this))}animate(t=0){this.timerModel.update(t),requestAnimationFrame(this.animate.bind(this)),this.render()}render(){this.updatePlayer(),this.camera.updateMatrixWorld(),this.renderer.render(this.scene,this.camera)}updatePlayer(){this.rotateJoystickState.front>0&&(this.rotateVector.set(0,0,-this.rotateJoystickState.front),this.camera.rotation.x+=this.rotateJoystickState.front/100),this.rotateJoystickState.back>0&&(this.rotateVector.set(0,0,this.rotateJoystickState.back),this.camera.rotation.x-=this.rotateJoystickState.back/100),this.rotateJoystickState.left>0&&(this.rotateVector.set(-this.rotateJoystickState.left,0,0),this.camera.rotation.y+=this.rotateJoystickState.left/100),this.rotateJoystickState.right>0&&(this.rotateVector.set(this.rotateJoystickState.right,0,0),this.camera.rotation.y-=this.rotateJoystickState.right/100),this.moveJoystickState.front>0&&(this.moveVector.set(0,0,-this.moveJoystickState.front),this.camera.position.addScaledVector(this.moveVector,1)),this.moveJoystickState.back>0&&(this.moveVector.set(0,0,this.moveJoystickState.back),this.camera.position.addScaledVector(this.moveVector,1)),this.moveJoystickState.left>0&&(this.moveVector.set(-this.moveJoystickState.left,0,0),this.camera.position.addScaledVector(this.moveVector,1)),this.moveJoystickState.right>0&&(this.moveVector.set(this.moveJoystickState.right,0,0),this.camera.position.addScaledVector(this.moveVector,1))}}class cp extends m1{initialize(){console.log("initialize"),this.add(up),document.addEventListener("mousemove",this.onPointerMove.bind(this)),window.addEventListener("resize",this.onWindowResize.bind(this))}onPointerMove(t){this.view.pointer.x=t.clientX/window.innerWidth*2-1,this.view.pointer.y=-(t.clientY/window.innerHeight)*2+1}onWindowResize(){this.view.camera.aspect=window.innerWidth/window.innerHeight,this.view.camera.updateProjectionMatrix(),this.view.renderer.setSize(window.innerWidth,window.innerHeight)}}class v1{constructor(t,e,n){this.model=Ii(t,[this]),this.view=Ii(e,[this.model]),this.controllerBase=Ii(n,[this.model,this.view]),this.controllerBase.initialize(),hi.mapObjectToGlobalId(this,this.constructor.name,"p")}getModel(){return this.model}}class fp extends v1{constructor(){super(Rf,hp,cp)}}console.log("main4");Vi(Af).asSingletone();Vi(Rf).asSingletone();Vi(Ha).asSingletone();Vi(hp).asSingletone();Vi(cp).asSingletone();Vi(up).asSingletone();Vi(fp).asSingletone();Ii(fp);
