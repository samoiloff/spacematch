(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Er=class Er{static mapObjectToGlobalId(t,e,n){const r=`${n}_${e}`;t[Er.key]=r,window[r]=t}static unmapObjectToGlobalId(t){const e=t[Er.key];e&&window[e]&&(delete t[Er.key],delete window[e])}};Er.key="__windowId__";let Rr=Er;class Gp{constructor(){this.data=new Map}instantiate(t,e){if(!t.instance)if(t.isSingletone)t.instance=this.createInstance(t,e);else return this.createInstance(t,e);return t.instance}createInstance(t,e){let n;return e?n=new t.instanceCls(...e):t.initParams?n=new t.instanceCls(...t.initParams):n=new t.instanceCls,t.isSingletone&&Rr.mapObjectToGlobalId(n,t.injectionId,"d"),n}}const Bi=class Bi{static getContext(t){t||(t=Bi.DEFAULT);let e=Bi.contexts.get(t);return e||(e=new Gp,Bi.contexts.set(t,e)),e}};Bi.DEFAULT="default",Bi.contexts=new Map;let as=Bi;class kp{destroy(){this.injectionId=null,this.instanceCls=null,this.initParams=null,this.instance&&(Rr.unmapObjectToGlobalId(this.instance),this.instance.hasOwnProperty("destroy")&&(this.instance.destroy(),this.instance=null))}clearInstance(){this.instance&&(Rr.unmapObjectToGlobalId(this.instance),this.instance=null)}asSingletone(t=!0){return this.isSingletone=t,this}withParams(t){return this.initParams=t,this}toClass(t){return this.instanceCls=t,this}toInstance(t){return this.instance=t,this}}const Hp=(i,t,e=null)=>{const n=as.getContext(e);let r=n.data.get(i);return r||(r=new kp,r.injectionId=i,r.instanceCls=t,n.data.set(i,r)),r},jn=(i,t=null)=>{if(typeof i=="string"){const e=i;return as.getContext(t).data.get(e)}else{const e=i.name;return Hp(e,i,t)}};var mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function to(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var qf={exports:{}};(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(h,l,u){this.fn=h,this.context=l,this.once=u||!1}function s(h,l,u,c,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new r(u,c||h,f),m=e?e+l:l;return h._events[m]?h._events[m].fn?h._events[m]=[h._events[m],d]:h._events[m].push(d):(h._events[m]=d,h._eventsCount++),h}function a(h,l){--h._eventsCount===0?h._events=new n:delete h._events[l]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],u,c;if(this._eventsCount===0)return l;for(c in u=this._events)t.call(u,c)&&l.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},o.prototype.listeners=function(l){var u=e?e+l:l,c=this._events[u];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,d=c.length,m=new Array(d);f<d;f++)m[f]=c[f].fn;return m},o.prototype.listenerCount=function(l){var u=e?e+l:l,c=this._events[u];return c?c.fn?1:c.length:0},o.prototype.emit=function(l,u,c,f,d,m){var _=e?e+l:l;if(!this._events[_])return!1;var p=this._events[_],v=arguments.length,y,g;if(p.fn){switch(p.once&&this.removeListener(l,p.fn,void 0,!0),v){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,c),!0;case 4:return p.fn.call(p.context,u,c,f),!0;case 5:return p.fn.call(p.context,u,c,f,d),!0;case 6:return p.fn.call(p.context,u,c,f,d,m),!0}for(g=1,y=new Array(v-1);g<v;g++)y[g-1]=arguments[g];p.fn.apply(p.context,y)}else{var T=p.length,w;for(g=0;g<T;g++)switch(p[g].once&&this.removeListener(l,p[g].fn,void 0,!0),v){case 1:p[g].fn.call(p[g].context);break;case 2:p[g].fn.call(p[g].context,u);break;case 3:p[g].fn.call(p[g].context,u,c);break;case 4:p[g].fn.call(p[g].context,u,c,f);break;default:if(!y)for(w=1,y=new Array(v-1);w<v;w++)y[w-1]=arguments[w];p[g].fn.apply(p[g].context,y)}}return!0},o.prototype.on=function(l,u,c){return s(this,l,u,c,!1)},o.prototype.once=function(l,u,c){return s(this,l,u,c,!0)},o.prototype.removeListener=function(l,u,c,f){var d=e?e+l:l;if(!this._events[d])return this;if(!u)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===u&&(!f||m.once)&&(!c||m.context===c)&&a(this,d);else{for(var _=0,p=[],v=m.length;_<v;_++)(m[_].fn!==u||f&&!m[_].once||c&&m[_].context!==c)&&p.push(m[_]);p.length?this._events[d]=p.length===1?p[0]:p:a(this,d)}return this},o.prototype.removeAllListeners=function(l){var u;return l?(u=e?e+l:l,this._events[u]&&a(this,u)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=e,o.EventEmitter=o,i.exports=o})(qf);var zp=qf.exports;const $f=to(zp);let Vp=class extends $f{constructor(){super(...arguments),this.logEventsEnabled=!1,this.instanceId="EventDispatcher"}dispatch(t,...e){return this.logEvent(t,e?e[0]:null),super.emit(t,...e)}emit(t,...e){return this.logEvent(t,e?e[0]:null),super.emit(t,...e)}logEvent(t,e){console.groupCollapsed(`${this.instanceId}: ${t.toString()}`),console.log(e||"-=NO_DATA=-"),console.trace(),console.groupEnd()}};class Xp extends Vp{constructor(t){super(),this.component=t,Rr.mapObjectToGlobalId(this,this.constructor.name,"m")}destroy(){this.component=null,super.removeAllListeners()}}const ss=class ss{constructor(){this._time=-1,this._delta=-1}reset(){this._time=-1,this._delta=-1}update(t){this._time<0?(this._time=t,this._delta=0):(this._delta=t-this._time,this._time=t,this._delta>ss.MAX_DELTA&&(this._delta=ss.MAX_DELTA))}get delta(){return this._delta}get time(){return this._time}};ss.MAX_DELTA=100;let os=ss;const Je=(i,t,e)=>{const n=typeof i=="string"?i:i.name,r=as.getContext(e),s=r.data.get(n);if(s)return r.instantiate(s,t);throw new Error("Injection not found : "+n)};class eo extends Xp{constructor(t){super(t),this.timerModel=Je(os,[this])}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="163",Wp=0,ru=1,Yp=2,Jf=1,jp=2,Gn=3,fi=0,He=1,Hn=2,hi=0,Sr=1,su=2,au=3,ou=4,qp=5,Ui=100,$p=101,Jp=102,Kp=103,Zp=104,Qp=200,tm=201,em=202,nm=203,Oh=204,Dh=205,im=206,rm=207,sm=208,am=209,om=210,hm=211,lm=212,um=213,cm=214,fm=0,dm=1,pm=2,La=3,mm=4,vm=5,_m=6,gm=7,Cl=0,ym=1,xm=2,li=0,Em=1,Sm=2,Tm=3,bm=4,Mm=5,wm=6,Am=7,Kf=300,Cr=301,Pr=302,Lh=303,Nh=304,no=306,Uh=1e3,Gi=1001,Fh=1002,Ke=1003,Rm=1004,Ls=1005,an=1006,vo=1007,ki=1008,ui=1009,Cm=1010,Pm=1011,Zf=1012,Qf=1013,Ir=1014,ai=1015,Na=1016,td=1017,ed=1018,Ts=1020,Im=35902,Om=1021,Dm=1022,xn=1023,Lm=1024,Nm=1025,Tr=1026,hs=1027,Um=1028,nd=1029,Fm=1030,id=1031,rd=1033,_o=33776,go=33777,yo=33778,xo=33779,hu=35840,lu=35841,uu=35842,cu=35843,sd=36196,fu=37492,du=37496,pu=37808,mu=37809,vu=37810,_u=37811,gu=37812,yu=37813,xu=37814,Eu=37815,Su=37816,Tu=37817,bu=37818,Mu=37819,wu=37820,Au=37821,Eo=36492,Ru=36494,Cu=36495,Bm=36283,Pu=36284,Iu=36285,Ou=36286,Gm=3200,km=3201,ad=0,Hm=1,si="",vn="srgb",mi="srgb-linear",Pl="display-p3",io="display-p3-linear",Ua="linear",ie="srgb",Fa="rec709",Ba="p3",$i=7680,Du=519,zm=512,Vm=513,Xm=514,od=515,Wm=516,Ym=517,jm=518,qm=519,Lu=35044,Nu="300 es",Xn=2e3,Ga=2001;class Nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],So=Math.PI/180,Bh=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function $m(i,t){return(i%t+t)%t}function To(i,t,e){return(1-e)*i+e*t}function kr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,r,s,a,o,h,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,h,l)}set(t,e,n,r,s,a,o,h,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=h,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],h=n[6],l=n[1],u=n[4],c=n[7],f=n[2],d=n[5],m=n[8],_=r[0],p=r[3],v=r[6],y=r[1],g=r[4],T=r[7],w=r[2],b=r[5],M=r[8];return s[0]=a*_+o*y+h*w,s[3]=a*p+o*g+h*b,s[6]=a*v+o*T+h*M,s[1]=l*_+u*y+c*w,s[4]=l*p+u*g+c*b,s[7]=l*v+u*T+c*M,s[2]=f*_+d*y+m*w,s[5]=f*p+d*g+m*b,s[8]=f*v+d*T+m*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*h+r*s*l-r*a*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],c=u*a-o*l,f=o*h-u*s,d=l*s-a*h,m=e*c+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=c*_,t[1]=(r*l-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=f*_,t[4]=(u*e-r*h)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(n*h-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const h=Math.cos(s),l=Math.sin(s);return this.set(n*h,n*l,-n*(h*a+l*o)+a+t,-r*l,r*h,-r*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(bo.makeScale(t,e)),this}rotate(t){return this.premultiply(bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bo=new Vt;function hd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jm(){const i=ls("canvas");return i.style.display="block",i}const Uu={};function Km(i){i in Uu||(Uu[i]=!0,console.warn(i))}const Fu=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bu=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ns={[mi]:{transfer:Ua,primaries:Fa,toReference:i=>i,fromReference:i=>i},[vn]:{transfer:ie,primaries:Fa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[io]:{transfer:Ua,primaries:Ba,toReference:i=>i.applyMatrix3(Bu),fromReference:i=>i.applyMatrix3(Fu)},[Pl]:{transfer:ie,primaries:Ba,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bu),fromReference:i=>i.applyMatrix3(Fu).convertLinearToSRGB()}},Zm=new Set([mi,io]),Zt={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ns[t].toReference,r=Ns[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ns[i].primaries},getTransfer:function(i){return i===si?Ua:Ns[i].transfer}};function br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ji;class Qm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=ls("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=br(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(br(e[n]/255)*255):e[n]=br(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tv=0;class ld{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(wo(r[a].image)):s.push(wo(r[a]))}else s=wo(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ev=0,dn=class Ca extends Nr{constructor(t=Ca.DEFAULT_IMAGE,e=Ca.DEFAULT_MAPPING,n=Gi,r=Gi,s=an,a=ki,o=xn,h=ui,l=Ca.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=bs(),this.name="",this.source=new ld(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uh:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uh:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Kf;dn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,r=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const h=t.elements,l=h[0],u=h[4],c=h[8],f=h[1],d=h[5],m=h[9],_=h[2],p=h[6],v=h[10];if(Math.abs(u-f)<.01&&Math.abs(c-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,T=(d+1)/2,w=(v+1)/2,b=(u+f)/4,M=(c+_)/4,I=(m+p)/4;return g>T&&g>w?g<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(g),r=b/n,s=M/n):T>w?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=b/r,s=I/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=M/s,r=I/s),this.set(n,r,s,e),this}let y=Math.sqrt((p-m)*(p-m)+(c-_)*(c-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(c-_)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nv extends Nr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ld(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends nv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ud extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iv extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let h=n[r+0],l=n[r+1],u=n[r+2],c=n[r+3];const f=s[a+0],d=s[a+1],m=s[a+2],_=s[a+3];if(o===0){t[e+0]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(c!==_||h!==f||l!==d||u!==m){let p=1-o;const v=h*f+l*d+u*m+c*_,y=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){const w=Math.sqrt(g),b=Math.atan2(w,v*y);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w}const T=o*y;if(h=h*p+f*T,l=l*p+d*T,u=u*p+m*T,c=c*p+_*T,p===1-o){const w=1/Math.sqrt(h*h+l*l+u*u+c*c);h*=w,l*=w,u*=w,c*=w}}t[e]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],h=n[r+1],l=n[r+2],u=n[r+3],c=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return t[e]=o*m+u*c+h*d-l*f,t[e+1]=h*m+u*f+l*c-o*d,t[e+2]=l*m+u*d+o*f-h*c,t[e+3]=u*m-o*c-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(n/2),u=o(r/2),c=o(s/2),f=h(n/2),d=h(r/2),m=h(s/2);switch(a){case"XYZ":this._x=f*u*c+l*d*m,this._y=l*d*c-f*u*m,this._z=l*u*m+f*d*c,this._w=l*u*c-f*d*m;break;case"YXZ":this._x=f*u*c+l*d*m,this._y=l*d*c-f*u*m,this._z=l*u*m-f*d*c,this._w=l*u*c+f*d*m;break;case"ZXY":this._x=f*u*c-l*d*m,this._y=l*d*c+f*u*m,this._z=l*u*m+f*d*c,this._w=l*u*c-f*d*m;break;case"ZYX":this._x=f*u*c-l*d*m,this._y=l*d*c+f*u*m,this._z=l*u*m-f*d*c,this._w=l*u*c+f*d*m;break;case"YZX":this._x=f*u*c+l*d*m,this._y=l*d*c+f*u*m,this._z=l*u*m-f*d*c,this._w=l*u*c-f*d*m;break;case"XZY":this._x=f*u*c-l*d*m,this._y=l*d*c-f*u*m,this._z=l*u*m+f*d*c,this._w=l*u*c+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],h=e[9],l=e[2],u=e[6],c=e[10],f=n+o+c;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-h)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>c){const d=2*Math.sqrt(1+n-o-c);this._w=(u-h)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>c){const d=2*Math.sqrt(1+o-n-c);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(h+u)/d}else{const d=2*Math.sqrt(1+c-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(h+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,h=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*h,this._y=r*u+a*h+s*o-n*l,this._z=s*u+a*l+n*h-r*o,this._w=a*u-n*o-r*h-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const h=1-o*o;if(h<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(h),u=Math.atan2(l,o),c=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*c+this._w*f,this._x=n*c+this._x*f,this._y=r*c+this._y*f,this._z=s*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,h=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),c=2*(s*n-a*e);return this.x=e+h*l+a*c-o*u,this.y=n+h*u+o*l-s*c,this.z=r+h*c+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,h=e.z;return this.x=r*h-s*o,this.y=s*a-n*h,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new D,Gu=new Xi;class Ms{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(s,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Fs.subVectors(this.max,Hr),Ki.subVectors(t.a,Hr),Zi.subVectors(t.b,Hr),Qi.subVectors(t.c,Hr),Kn.subVectors(Zi,Ki),Zn.subVectors(Qi,Zi),yi.subVectors(Ki,Qi);let e=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-yi.z,yi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,yi.z,0,-yi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-yi.y,yi.x,0];return!Ro(e,Ki,Zi,Qi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Ki,Zi,Qi,Fs))?!1:(Bs.crossVectors(Kn,Zn),e=[Bs.x,Bs.y,Bs.z],Ro(e,Ki,Zi,Qi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new D,new D,new D,new D,new D,new D,new D,new D],Ze=new D,Us=new Ms,Ki=new D,Zi=new D,Qi=new D,Kn=new D,Zn=new D,yi=new D,Hr=new D,Fs=new D,Bs=new D,xi=new D;function Ro(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){xi.fromArray(i,s);const o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),h=t.dot(xi),l=e.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>o)return!1}return!0}const rv=new Ms,zr=new D,Co=new D;class Il{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(zr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Co)),this.expandByPoint(zr.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new D,Po=new D,Gs=new D,Qn=new D,Io=new D,ks=new D,Oo=new D;class cd{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Po.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Po);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Gs),o=Qn.dot(this.direction),h=-Qn.dot(Gs),l=Qn.lengthSq(),u=Math.abs(1-a*a);let c,f,d,m;if(u>0)if(c=a*h-o,f=a*o-h,m=s*u,c>=0)if(f>=-m)if(f<=m){const _=1/u;c*=_,f*=_,d=c*(c+a*f+2*o)+f*(a*c+f+2*h)+l}else f=s,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*h)+l;else f=-s,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*h)+l;else f<=-m?(c=Math.max(0,-(-a*s+o)),f=c>0?-s:Math.min(Math.max(-s,-h),s),d=-c*c+f*(f+2*h)+l):f<=m?(c=0,f=Math.min(Math.max(-s,-h),s),d=f*(f+2*h)+l):(c=Math.max(0,-(a*s+o)),f=c>0?s:Math.min(Math.max(-s,-h),s),d=-c*c+f*(f+2*h)+l);else f=a>0?-s:s,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Po).addScaledVector(Gs,f),d}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),r=Dn.dot(Dn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,h;const l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),c>=0?(o=(t.min.z-f.z)*c,h=(t.max.z-f.z)*c):(o=(t.max.z-f.z)*c,h=(t.min.z-f.z)*c),n>h||o>r)||((o>n||n!==n)&&(n=o),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,r,s){Io.subVectors(e,t),ks.subVectors(n,t),Oo.crossVectors(Io,ks);let a=this.direction.dot(Oo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const h=o*this.direction.dot(ks.crossVectors(Qn,ks));if(h<0)return null;const l=o*this.direction.dot(Io.cross(Qn));if(l<0||h+l>a)return null;const u=-o*Qn.dot(Oo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,r,s,a,o,h,l,u,c,f,d,m,_,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,h,l,u,c,f,d,m,_,p)}set(t,e,n,r,s,a,o,h,l,u,c,f,d,m,_,p){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=h,v[2]=l,v[6]=u,v[10]=c,v[14]=f,v[3]=d,v[7]=m,v[11]=_,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/tr.setFromMatrixColumn(t,0).length(),s=1/tr.setFromMatrixColumn(t,1).length(),a=1/tr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(r),l=Math.sin(r),u=Math.cos(s),c=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*c,m=o*u,_=o*c;e[0]=h*u,e[4]=-h*c,e[8]=l,e[1]=d+m*l,e[5]=f-_*l,e[9]=-o*h,e[2]=_-f*l,e[6]=m+d*l,e[10]=a*h}else if(t.order==="YXZ"){const f=h*u,d=h*c,m=l*u,_=l*c;e[0]=f+_*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*c,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=_+f*o,e[10]=a*h}else if(t.order==="ZXY"){const f=h*u,d=h*c,m=l*u,_=l*c;e[0]=f-_*o,e[4]=-a*c,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const f=a*u,d=a*c,m=o*u,_=o*c;e[0]=h*u,e[4]=m*l-d,e[8]=f*l+_,e[1]=h*c,e[5]=_*l+f,e[9]=d*l-m,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const f=a*h,d=a*l,m=o*h,_=o*l;e[0]=h*u,e[4]=_-f*c,e[8]=m*c+d,e[1]=c,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*c+m,e[10]=f-_*c}else if(t.order==="XZY"){const f=a*h,d=a*l,m=o*h,_=o*l;e[0]=h*u,e[4]=-c,e[8]=l*u,e[1]=f*c+_,e[5]=a*u,e[9]=d*c-m,e[2]=m*c-d,e[6]=o*u,e[10]=_*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sv,t,av)}lookAt(t,e,n){const r=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),ti.crossVectors(n,Xe),ti.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),ti.crossVectors(n,Xe)),ti.normalize(),Hs.crossVectors(Xe,ti),r[0]=ti.x,r[4]=Hs.x,r[8]=Xe.x,r[1]=ti.y,r[5]=Hs.y,r[9]=Xe.y,r[2]=ti.z,r[6]=Hs.z,r[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],h=n[8],l=n[12],u=n[1],c=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],v=n[14],y=n[3],g=n[7],T=n[11],w=n[15],b=r[0],M=r[4],I=r[8],E=r[12],x=r[1],O=r[5],N=r[9],P=r[13],H=r[2],L=r[6],G=r[10],q=r[14],z=r[3],$=r[7],B=r[11],V=r[15];return s[0]=a*b+o*x+h*H+l*z,s[4]=a*M+o*O+h*L+l*$,s[8]=a*I+o*N+h*G+l*B,s[12]=a*E+o*P+h*q+l*V,s[1]=u*b+c*x+f*H+d*z,s[5]=u*M+c*O+f*L+d*$,s[9]=u*I+c*N+f*G+d*B,s[13]=u*E+c*P+f*q+d*V,s[2]=m*b+_*x+p*H+v*z,s[6]=m*M+_*O+p*L+v*$,s[10]=m*I+_*N+p*G+v*B,s[14]=m*E+_*P+p*q+v*V,s[3]=y*b+g*x+T*H+w*z,s[7]=y*M+g*O+T*L+w*$,s[11]=y*I+g*N+T*G+w*B,s[15]=y*E+g*P+T*q+w*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],h=t[9],l=t[13],u=t[2],c=t[6],f=t[10],d=t[14],m=t[3],_=t[7],p=t[11],v=t[15];return m*(+s*h*c-r*l*c-s*o*f+n*l*f+r*o*d-n*h*d)+_*(+e*h*d-e*l*f+s*a*f-r*a*d+r*l*u-s*h*u)+p*(+e*l*c-e*o*d-s*a*c+n*a*d+s*o*u-n*l*u)+v*(-r*o*u-e*h*c+e*o*f+r*a*c-n*a*f+n*h*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],c=t[9],f=t[10],d=t[11],m=t[12],_=t[13],p=t[14],v=t[15],y=c*p*l-_*f*l+_*h*d-o*p*d-c*h*v+o*f*v,g=m*f*l-u*p*l-m*h*d+a*p*d+u*h*v-a*f*v,T=u*_*l-m*c*l+m*o*d-a*_*d-u*o*v+a*c*v,w=m*c*h-u*_*h-m*o*f+a*_*f+u*o*p-a*c*p,b=e*y+n*g+r*T+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/b;return t[0]=y*M,t[1]=(_*f*s-c*p*s-_*r*d+n*p*d+c*r*v-n*f*v)*M,t[2]=(o*p*s-_*h*s+_*r*l-n*p*l-o*r*v+n*h*v)*M,t[3]=(c*h*s-o*f*s-c*r*l+n*f*l+o*r*d-n*h*d)*M,t[4]=g*M,t[5]=(u*p*s-m*f*s+m*r*d-e*p*d-u*r*v+e*f*v)*M,t[6]=(m*h*s-a*p*s-m*r*l+e*p*l+a*r*v-e*h*v)*M,t[7]=(a*f*s-u*h*s+u*r*l-e*f*l-a*r*d+e*h*d)*M,t[8]=T*M,t[9]=(m*c*s-u*_*s-m*n*d+e*_*d+u*n*v-e*c*v)*M,t[10]=(a*_*s-m*o*s+m*n*l-e*_*l-a*n*v+e*o*v)*M,t[11]=(u*o*s-a*c*s-u*n*l+e*c*l+a*n*d-e*o*d)*M,t[12]=w*M,t[13]=(u*_*r-m*c*r+m*n*f-e*_*f-u*n*p+e*c*p)*M,t[14]=(m*o*r-a*_*r-m*n*h+e*_*h+a*n*p-e*o*p)*M,t[15]=(a*c*r-u*o*r+u*n*h-e*c*h-a*n*f+e*o*f)*M,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,h=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*h,l*h+r*o,0,l*o+r*h,u*o+n,u*h-r*a,0,l*h-r*o,u*h+r*a,s*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,h=e._w,l=s+s,u=a+a,c=o+o,f=s*l,d=s*u,m=s*c,_=a*u,p=a*c,v=o*c,y=h*l,g=h*u,T=h*c,w=n.x,b=n.y,M=n.z;return r[0]=(1-(_+v))*w,r[1]=(d+T)*w,r[2]=(m-g)*w,r[3]=0,r[4]=(d-T)*b,r[5]=(1-(f+v))*b,r[6]=(p+y)*b,r[7]=0,r[8]=(m+g)*M,r[9]=(p-y)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=tr.set(r[0],r[1],r[2]).length();const a=tr.set(r[4],r[5],r[6]).length(),o=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Qe.copy(this);const l=1/s,u=1/a,c=1/o;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=u,Qe.elements[5]*=u,Qe.elements[6]*=u,Qe.elements[8]*=c,Qe.elements[9]*=c,Qe.elements[10]*=c,e.setFromRotationMatrix(Qe),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Xn){const h=this.elements,l=2*s/(e-t),u=2*s/(n-r),c=(e+t)/(e-t),f=(n+r)/(n-r);let d,m;if(o===Xn)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Ga)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Xn){const h=this.elements,l=1/(e-t),u=1/(n-r),c=1/(a-s),f=(e+t)*l,d=(n+r)*u;let m,_;if(o===Xn)m=(a+s)*c,_=-2*c;else if(o===Ga)m=s*c,_=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*u,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=_,h[14]=-m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const tr=new D,Qe=new de,sv=new D(0,0,0),av=new D(1,1,1),ti=new D,Hs=new D,Xe=new D,ku=new de,Hu=new Xi;class wn{constructor(t=0,e=0,n=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],h=r[1],l=r[5],u=r[9],c=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ov=0;const zu=new D,er=new Xi,Ln=new de,zs=new D,Vr=new D,hv=new D,lv=new Xi,Vu=new D(1,0,0),Xu=new D(0,1,0),Wu=new D(0,0,1),Yu={type:"added"},uv={type:"removed"},nr={type:"childadded",child:null},Do={type:"childremoved",child:null};class Be extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new D,e=new wn,n=new Xi,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new Vt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.multiply(er),this}rotateOnWorldAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.premultiply(er),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(Xu,t)}rotateZ(t){return this.rotateOnAxis(Wu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(Xu,t)}translateZ(t){return this.translateOnAxis(Wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Vr,zs,this.up):Ln.lookAt(zs,Vr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),er.setFromRotationMatrix(Ln),this.quaternion.premultiply(er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yu),nr.child=t,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uv),Do.child=t,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yu),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,hv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,lv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){const c=h[l];s(t.shapes,c)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(s(t.materials,this.material[h]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];r.animations.push(s(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),l=a(t.textures),u=a(t.images),c=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const h=[];for(const l in o){const u=o[l];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Be.DEFAULT_UP=new D(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new D,Nn=new D,Lo=new D,Un=new D,ir=new D,rr=new D,ju=new D,No=new D,Uo=new D,Fo=new D;class yn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),tn.subVectors(t,e),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){tn.subVectors(r,e),Nn.subVectors(n,e),Lo.subVectors(t,e);const a=tn.dot(tn),o=tn.dot(Nn),h=tn.dot(Lo),l=Nn.dot(Nn),u=Nn.dot(Lo),c=a*l-o*o;if(c===0)return s.set(0,0,0),null;const f=1/c,d=(l*h-o*u)*f,m=(a*u-o*h)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,r,s,a,o,h){return this.getBarycoord(t,e,n,r,Un)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Un.x),h.addScaledVector(a,Un.y),h.addScaledVector(o,Un.z),h)}static isFrontFacing(t,e,n,r){return tn.subVectors(n,e),Nn.subVectors(t,e),tn.cross(Nn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),tn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;ir.subVectors(r,n),rr.subVectors(s,n),No.subVectors(t,n);const h=ir.dot(No),l=rr.dot(No);if(h<=0&&l<=0)return e.copy(n);Uo.subVectors(t,r);const u=ir.dot(Uo),c=rr.dot(Uo);if(u>=0&&c<=u)return e.copy(r);const f=h*c-u*l;if(f<=0&&h>=0&&u<=0)return a=h/(h-u),e.copy(n).addScaledVector(ir,a);Fo.subVectors(t,s);const d=ir.dot(Fo),m=rr.dot(Fo);if(m>=0&&d<=m)return e.copy(s);const _=d*l-h*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(rr,o);const p=u*m-d*c;if(p<=0&&c-u>=0&&d-m>=0)return ju.subVectors(s,r),o=(c-u)/(c-u+(d-m)),e.copy(r).addScaledVector(ju,o);const v=1/(p+_+f);return a=_*v,o=f*v,e.copy(n).addScaledVector(ir,a).addScaledVector(rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Zt.workingColorSpace){if(t=$m(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Bo(a,s,t+1/3),this.g=Bo(a,s,t),this.b=Bo(a,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){const n=fd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return Zt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Oe(Fe.r*255,0,255))*65536+Math.round(Oe(Fe.g*255,0,255))*256+Math.round(Oe(Fe.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,r=Fe.g,s=Fe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let h,l;const u=(o+a)/2;if(o===a)h=0,l=0;else{const c=a-o;switch(l=u<=.5?c/(a+o):c/(2-a-o),a){case n:h=(r-s)/c+(r<s?6:0);break;case r:h=(s-n)/c+2;break;case s:h=(n-r)/c+4;break}h/=6}return t.h=h,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=vn){Zt.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,r=Fe.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Vs);const n=To(ei.h,Vs.h,e),r=To(ei.s,Vs.s,e),s=To(ei.l,Vs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new qt;qt.NAMES=fd;let cv=0;class ws extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Sr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Dh,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oh&&(n.blendSrc=this.blendSrc),this.blendDst!==Dh&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const h=s[o];delete h.metadata,a.push(h)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dl extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new D,Xs=new ft;class Tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Km("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lu&&(t.usage=this.usage),t}}class dd extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pd extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ge extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fv=0;const qe=new de,Go=new Be,sr=new D,We=new Ms,Xr=new Ms,Ae=new D;class Rn extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hd(t)?pd:dd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(We.min,Xr.min),We.expandByPoint(Ae),Ae.addVectors(We.max,Xr.max),We.expandByPoint(Ae)):(We.expandByPoint(Xr.min),We.expandByPoint(Xr.max))}We.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],h=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ae.fromBufferAttribute(o,l),h&&(sr.fromBufferAttribute(t,l),Ae.add(sr)),r=Math.max(r,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],h=[];for(let I=0;I<n.count;I++)o[I]=new D,h[I]=new D;const l=new D,u=new D,c=new D,f=new ft,d=new ft,m=new ft,_=new D,p=new D;function v(I,E,x){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),c.fromBufferAttribute(n,x),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,x),u.sub(l),c.sub(l),d.sub(f),m.sub(f);const O=1/(d.x*m.y-m.x*d.y);isFinite(O)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(c,-d.y).multiplyScalar(O),p.copy(c).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(O),o[I].add(_),o[E].add(_),o[x].add(_),h[I].add(p),h[E].add(p),h[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,E=y.length;I<E;++I){const x=y[I],O=x.start,N=x.count;for(let P=O,H=O+N;P<H;P+=3)v(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const g=new D,T=new D,w=new D,b=new D;function M(I){w.fromBufferAttribute(r,I),b.copy(w);const E=o[I];g.copy(E),g.sub(w.multiplyScalar(w.dot(E))).normalize(),T.crossVectors(b,E);const O=T.dot(h[I])<0?-1:1;a.setXYZW(I,g.x,g.y,g.z,O)}for(let I=0,E=y.length;I<E;++I){const x=y[I],O=x.start,N=x.count;for(let P=O,H=O+N;P<H;P+=3)M(t.getX(P+0)),M(t.getX(P+1)),M(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,h=new D,l=new D,u=new D,c=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),c.subVectors(r,s),u.cross(c),o.fromBufferAttribute(n,m),h.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),h.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),c.subVectors(r,s),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,h){const l=o.array,u=o.itemSize,c=o.normalized,f=new l.constructor(h.length*u);let d=0,m=0;for(let _=0,p=h.length;_<p;_++){o.isInterleavedBufferAttribute?d=h[_]*o.data.stride+o.offset:d=h[_]*u;for(let v=0;v<u;v++)f[m++]=l[d++]}return new Tn(f,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Rn,n=this.index.array,r=this.attributes;for(const o in r){const h=r[o],l=t(h,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const h=[],l=s[o];for(let u=0,c=l.length;u<c;u++){const f=l[u],d=t(f,n);h.push(d)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const r={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],u=[];for(let c=0,f=l.length;c<f;c++){const d=l[c];u.push(d.toJSON(t.data))}u.length>0&&(r[h]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],c=s[l];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const c=a[l];this.addGroup(c.start,c.count,c.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new de,Ei=new cd,Ws=new Il,$u=new D,ar=new D,or=new D,hr=new D,ko=new D,Ys=new D,js=new ft,qs=new ft,$s=new ft,Ju=new D,Ku=new D,Zu=new D,Js=new D,Ks=new D;let on=class extends Be{constructor(t=new Rn,e=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ys.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const u=o[h],c=s[h];u!==0&&(ko.fromBufferAttribute(c,t),a?Ys.addScaledVector(ko,u):Ys.addScaledVector(ko.sub(e),u))}e.add(Ys)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ei.copy(t.ray).recast(t.near),!(Ws.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ws,$u)===null||Ei.origin.distanceToSquared($u)>(t.far-t.near)**2))&&(qu.copy(s).invert(),Ei.copy(t.ray).applyMatrix4(qu),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,h=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],v=a[p.materialIndex],y=Math.max(p.start,d.start),g=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let T=y,w=g;T<w;T+=3){const b=o.getX(T),M=o.getX(T+1),I=o.getX(T+2);r=Zs(this,v,t,n,l,u,c,b,M,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=m,v=_;p<v;p+=3){const y=o.getX(p),g=o.getX(p+1),T=o.getX(p+2);r=Zs(this,a,t,n,l,u,c,y,g,T),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],v=a[p.materialIndex],y=Math.max(p.start,d.start),g=Math.min(h.count,Math.min(p.start+p.count,d.start+d.count));for(let T=y,w=g;T<w;T+=3){const b=T,M=T+1,I=T+2;r=Zs(this,v,t,n,l,u,c,b,M,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(h.count,d.start+d.count);for(let p=m,v=_;p<v;p+=3){const y=p,g=p+1,T=p+2;r=Zs(this,a,t,n,l,u,c,y,g,T),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function dv(i,t,e,n,r,s,a,o){let h;if(t.side===He?h=n.intersectTriangle(a,s,r,!0,o):h=n.intersectTriangle(r,s,a,t.side===fi,o),h===null)return null;Ks.copy(o),Ks.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ks);return l<e.near||l>e.far?null:{distance:l,point:Ks.clone(),object:i}}function Zs(i,t,e,n,r,s,a,o,h,l){i.getVertexPosition(o,ar),i.getVertexPosition(h,or),i.getVertexPosition(l,hr);const u=dv(i,t,e,n,ar,or,hr,Js);if(u){r&&(js.fromBufferAttribute(r,o),qs.fromBufferAttribute(r,h),$s.fromBufferAttribute(r,l),u.uv=yn.getInterpolation(Js,ar,or,hr,js,qs,$s,new ft)),s&&(js.fromBufferAttribute(s,o),qs.fromBufferAttribute(s,h),$s.fromBufferAttribute(s,l),u.uv1=yn.getInterpolation(Js,ar,or,hr,js,qs,$s,new ft)),a&&(Ju.fromBufferAttribute(a,o),Ku.fromBufferAttribute(a,h),Zu.fromBufferAttribute(a,l),u.normal=yn.getInterpolation(Js,ar,or,hr,Ju,Ku,Zu,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:h,c:l,normal:new D,materialIndex:0};yn.getNormal(ar,or,hr,c.normal),u.face=c}return u}class Ur extends Rn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const h=[],l=[],u=[],c=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,r,a,2),m("x","z","y",1,-1,t,n,-e,r,a,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(c,2));function m(_,p,v,y,g,T,w,b,M,I,E){const x=T/M,O=w/I,N=T/2,P=w/2,H=b/2,L=M+1,G=I+1;let q=0,z=0;const $=new D;for(let B=0;B<G;B++){const V=B*O-P;for(let ht=0;ht<L;ht++){const mt=ht*x-N;$[_]=mt*y,$[p]=V*g,$[v]=H,l.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[v]=b>0?1:-1,u.push($.x,$.y,$.z),c.push(ht/M),c.push(1-B/I),q+=1}}for(let B=0;B<I;B++)for(let V=0;V<M;V++){const ht=f+V+L*B,mt=f+V+L*(B+1),k=f+(V+1)+L*(B+1),K=f+(V+1)+L*B;h.push(ht,mt,K),h.push(mt,k,K),z+=6}o.addGroup(d,z,E),d+=z,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=Or(i[e]);for(const r in n)t[r]=n[r]}return t}function pv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function md(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const mv={clone:Or,merge:ke};var vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_v=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vv,this.fragmentShader=_v,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=pv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vd extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new D,Qu=new ft,tc=new ft;class $e extends vd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bh*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Qu,tc),e.subVectors(tc,Qu)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(So*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/h,e-=a.offsetY*n/l,r*=a.width/h,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const lr=-90,ur=1;class gv extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(lr,ur,t,e);r.layers=this.layers,this.add(r);const s=new $e(lr,ur,t,e);s.layers=this.layers,this.add(s);const a=new $e(lr,ur,t,e);a.layers=this.layers,this.add(a);const o=new $e(lr,ur,t,e);o.layers=this.layers,this.add(o);const h=new $e(lr,ur,t,e);h.layers=this.layers,this.add(h);const l=new $e(lr,ur,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,h]=e;for(const l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,h,l,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class _d extends dn{constructor(t,e,n,r,s,a,o,h,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Cr,super(t,e,n,r,s,a,o,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yv extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new _d(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ur(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:hi});s.uniforms.tEquirect.value=e;const a=new on(r,s),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=an),new gv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Ho=new D,xv=new D,Ev=new Vt;class Pi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ho.subVectors(n,e).cross(xv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ho),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ev.getNormalMatrix(t),r=this.coplanarPoint(Ho).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Il,Qs=new D;class Ll{constructor(t=new Pi,e=new Pi,n=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],h=r[3],l=r[4],u=r[5],c=r[6],f=r[7],d=r[8],m=r[9],_=r[10],p=r[11],v=r[12],y=r[13],g=r[14],T=r[15];if(n[0].setComponents(h-s,f-l,p-d,T-v).normalize(),n[1].setComponents(h+s,f+l,p+d,T+v).normalize(),n[2].setComponents(h+a,f+u,p+m,T+y).normalize(),n[3].setComponents(h-a,f-u,p-m,T-y).normalize(),n[4].setComponents(h-o,f-c,p-_,T-g).normalize(),e===Xn)n[5].setComponents(h+o,f+c,p+_,T+g).normalize();else if(e===Ga)n[5].setComponents(o,c,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Qs.x=r.normal.x>0?t.max.x:t.min.x,Qs.y=r.normal.y>0?t.max.y:t.min.y,Qs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gd(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Sv(i){const t=new WeakMap;function e(o,h){const l=o.array,u=o.usage,c=l.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:c}}function n(o,h,l){const u=h.array,c=h._updateRange,f=h.updateRanges;if(i.bindBuffer(l,o),c.count===-1&&f.length===0&&i.bufferSubData(l,0,u),f.length!==0){for(let d=0,m=f.length;d<m;d++){const _=f[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}h.clearUpdateRanges()}c.count!==-1&&(i.bufferSubData(l,c.offset*u.BYTES_PER_ELEMENT,u,c.offset,c.count),c.count=-1),h.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,h),l.version=o.version}}return{get:r,remove:s,update:a}}let yd=class xd extends Rn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),h=Math.floor(r),l=o+1,u=h+1,c=t/o,f=e/h,d=[],m=[],_=[],p=[];for(let v=0;v<u;v++){const y=v*f-a;for(let g=0;g<l;g++){const T=g*c-s;m.push(T,-y,0),_.push(0,0,1),p.push(g/o),p.push(1-v/h)}}for(let v=0;v<h;v++)for(let y=0;y<o;y++){const g=y+l*v,T=y+l*(v+1),w=y+1+l*(v+1),b=y+1+l*v;d.push(g,T,b),d.push(T,w,b)}this.setIndex(d),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xd(t.width,t.height,t.widthSegments,t.heightSegments)}};var Tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uv=`#ifdef USE_IRIDESCENCE
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
#endif`,Fv=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yv=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,jv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,qv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",t_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,e_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,n_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,r_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u_=`#ifdef USE_GRADIENTMAP
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
}`,c_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,v_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,__=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,S_=`struct PhysicalMaterial {
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,T_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D_=`#if defined( USE_POINTS_UV )
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
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B_=`#ifdef USE_MORPHNORMALS
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
#endif`,G_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,k_=`#ifdef USE_MORPHTARGETS
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
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
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
#endif`,j_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Og=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bg=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kg=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zg=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Xg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Yg=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,qg=`#define STANDARD
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Jg=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,t0=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e0=`uniform float rotation;
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
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Tv,alphahash_pars_fragment:bv,alphamap_fragment:Mv,alphamap_pars_fragment:wv,alphatest_fragment:Av,alphatest_pars_fragment:Rv,aomap_fragment:Cv,aomap_pars_fragment:Pv,batching_pars_vertex:Iv,batching_vertex:Ov,begin_vertex:Dv,beginnormal_vertex:Lv,bsdfs:Nv,iridescence_fragment:Uv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Bv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:Hv,color_fragment:zv,color_pars_fragment:Vv,color_pars_vertex:Xv,color_vertex:Wv,common:Yv,cube_uv_reflection_fragment:jv,defaultnormal_vertex:qv,displacementmap_pars_vertex:$v,displacementmap_vertex:Jv,emissivemap_fragment:Kv,emissivemap_pars_fragment:Zv,colorspace_fragment:Qv,colorspace_pars_fragment:t_,envmap_fragment:e_,envmap_common_pars_fragment:n_,envmap_pars_fragment:i_,envmap_pars_vertex:r_,envmap_physical_pars_fragment:v_,envmap_vertex:s_,fog_vertex:a_,fog_pars_vertex:o_,fog_fragment:h_,fog_pars_fragment:l_,gradientmap_pars_fragment:u_,lightmap_fragment:c_,lightmap_pars_fragment:f_,lights_lambert_fragment:d_,lights_lambert_pars_fragment:p_,lights_pars_begin:m_,lights_toon_fragment:__,lights_toon_pars_fragment:g_,lights_phong_fragment:y_,lights_phong_pars_fragment:x_,lights_physical_fragment:E_,lights_physical_pars_fragment:S_,lights_fragment_begin:T_,lights_fragment_maps:b_,lights_fragment_end:M_,logdepthbuf_fragment:w_,logdepthbuf_pars_fragment:A_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:C_,map_fragment:P_,map_pars_fragment:I_,map_particle_fragment:O_,map_particle_pars_fragment:D_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:N_,morphinstance_vertex:U_,morphcolor_vertex:F_,morphnormal_vertex:B_,morphtarget_pars_vertex:G_,morphtarget_vertex:k_,normal_fragment_begin:H_,normal_fragment_maps:z_,normal_pars_fragment:V_,normal_pars_vertex:X_,normal_vertex:W_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:j_,clearcoat_normal_fragment_maps:q_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:J_,opaque_fragment:K_,packing:Z_,premultiplied_alpha_fragment:Q_,project_vertex:tg,dithering_fragment:eg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:sg,shadowmap_pars_vertex:ag,shadowmap_vertex:og,shadowmask_pars_fragment:hg,skinbase_vertex:lg,skinning_pars_vertex:ug,skinning_vertex:cg,skinnormal_vertex:fg,specularmap_fragment:dg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:vg,transmission_fragment:_g,transmission_pars_fragment:gg,uv_pars_fragment:yg,uv_pars_vertex:xg,uv_vertex:Eg,worldpos_vertex:Sg,background_vert:Tg,background_frag:bg,backgroundCube_vert:Mg,backgroundCube_frag:wg,cube_vert:Ag,cube_frag:Rg,depth_vert:Cg,depth_frag:Pg,distanceRGBA_vert:Ig,distanceRGBA_frag:Og,equirect_vert:Dg,equirect_frag:Lg,linedashed_vert:Ng,linedashed_frag:Ug,meshbasic_vert:Fg,meshbasic_frag:Bg,meshlambert_vert:Gg,meshlambert_frag:kg,meshmatcap_vert:Hg,meshmatcap_frag:zg,meshnormal_vert:Vg,meshnormal_frag:Xg,meshphong_vert:Wg,meshphong_frag:Yg,meshphysical_vert:jg,meshphysical_frag:qg,meshtoon_vert:$g,meshtoon_frag:Jg,points_vert:Kg,points_frag:Zg,shadow_vert:Qg,shadow_frag:t0,sprite_vert:e0,sprite_frag:n0},ot={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},_n={basic:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ke([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ke([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ke([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ke([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ke([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ke([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ke([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ke([ot.lights,ot.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};_n.physical={uniforms:ke([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const ta={r:0,b:0,g:0},Ti=new wn,i0=new de;function r0(i,t,e,n,r,s,a){const o=new qt(0);let h=s===!0?0:1,l,u,c=null,f=0,d=null;function m(p,v){let y=!1,g=v.isScene===!0?v.background:null;g&&g.isTexture&&(g=(v.backgroundBlurriness>0?e:t).get(g)),g===null?_(o,h):g&&g.isColor&&(_(g,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===no)?(u===void 0&&(u=new on(new Ur(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Or(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ti.copy(v.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(i0.makeRotationFromEuler(Ti)),u.material.toneMapped=Zt.getTransfer(g.colorSpace)!==ie,(c!==g||f!==g.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,c=g,f=g.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new on(new yd(2,2),new di({name:"BackgroundMaterial",uniforms:Or(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(g.colorSpace)!==ie,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(c!==g||f!==g.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,c=g,f=g.version,d=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,v){p.getRGB(ta,md(i)),n.buffers.color.setClear(ta.r,ta.g,ta.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),h=v,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,_(o,h)},render:m}}function s0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(x,O,N,P,H){let L=!1;const G=c(P,N,O);s!==G&&(s=G,l(s.object)),L=d(x,P,N,H),L&&m(x,P,N,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,T(x,O,N,P),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function h(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function c(x,O,N){const P=N.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let L=H[O.id];L===void 0&&(L={},H[O.id]=L);let G=L[P];return G===void 0&&(G=f(h()),L[P]=G),G}function f(x){const O=[],N=[],P=[];for(let H=0;H<e;H++)O[H]=0,N[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:P,object:x,attributes:{},index:null}}function d(x,O,N,P){const H=s.attributes,L=O.attributes;let G=0;const q=N.getAttributes();for(const z in q)if(q[z].location>=0){const B=H[z];let V=L[z];if(V===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(V=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(V=x.instanceColor)),B===void 0||B.attribute!==V||V&&B.data!==V.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function m(x,O,N,P){const H={},L=O.attributes;let G=0;const q=N.getAttributes();for(const z in q)if(q[z].location>=0){let B=L[z];B===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(B=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(B=x.instanceColor));const V={};V.attribute=B,B&&B.data&&(V.data=B.data),H[z]=V,G++}s.attributes=H,s.attributesNum=G,s.index=P}function _(){const x=s.newAttributes;for(let O=0,N=x.length;O<N;O++)x[O]=0}function p(x){v(x,0)}function v(x,O){const N=s.newAttributes,P=s.enabledAttributes,H=s.attributeDivisors;N[x]=1,P[x]===0&&(i.enableVertexAttribArray(x),P[x]=1),H[x]!==O&&(i.vertexAttribDivisor(x,O),H[x]=O)}function y(){const x=s.newAttributes,O=s.enabledAttributes;for(let N=0,P=O.length;N<P;N++)O[N]!==x[N]&&(i.disableVertexAttribArray(N),O[N]=0)}function g(x,O,N,P,H,L,G){G===!0?i.vertexAttribIPointer(x,O,N,H,L):i.vertexAttribPointer(x,O,N,P,H,L)}function T(x,O,N,P){_();const H=P.attributes,L=N.getAttributes(),G=O.defaultAttributeValues;for(const q in L){const z=L[q];if(z.location>=0){let $=H[q];if($===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),$!==void 0){const B=$.normalized,V=$.itemSize,ht=t.get($);if(ht===void 0)continue;const mt=ht.buffer,k=ht.type,K=ht.bytesPerElement,nt=k===i.INT||k===i.UNSIGNED_INT||$.gpuType===Qf;if($.isInterleavedBufferAttribute){const tt=$.data,vt=tt.stride,yt=$.offset;if(tt.isInstancedInterleavedBuffer){for(let Et=0;Et<z.locationSize;Et++)v(z.location+Et,tt.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Et=0;Et<z.locationSize;Et++)p(z.location+Et);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Et=0;Et<z.locationSize;Et++)g(z.location+Et,V/z.locationSize,k,B,vt*K,(yt+V/z.locationSize*Et)*K,nt)}else{if($.isInstancedBufferAttribute){for(let tt=0;tt<z.locationSize;tt++)v(z.location+tt,$.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let tt=0;tt<z.locationSize;tt++)p(z.location+tt);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let tt=0;tt<z.locationSize;tt++)g(z.location+tt,V/z.locationSize,k,B,V*K,V/z.locationSize*tt*K,nt)}}else if(G!==void 0){const B=G[q];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(z.location,B);break;case 3:i.vertexAttrib3fv(z.location,B);break;case 4:i.vertexAttrib4fv(z.location,B);break;default:i.vertexAttrib1fv(z.location,B)}}}}y()}function w(){I();for(const x in n){const O=n[x];for(const N in O){const P=O[N];for(const H in P)u(P[H].object),delete P[H];delete O[N]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const O=n[x.id];for(const N in O){const P=O[N];for(const H in P)u(P[H].object),delete P[H];delete O[N]}delete n[x.id]}function M(x){for(const O in n){const N=n[O];if(N[x.id]===void 0)continue;const P=N[x.id];for(const H in P)u(P[H].object),delete P[H];delete N[x.id]}}function I(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function a0(i,t,e){let n;function r(h){n=h}function s(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),e.update(l,n,u))}function o(h,l,u){if(u===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let f=0;f<u;f++)this.render(h[f],l[f]);else{c.multiDrawArraysWEBGL(n,h,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];e.update(f,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function o0(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const h=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),c=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:l,maxVertexTextures:u,maxTextureSize:c,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:v,maxSamples:y}}function h0(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Pi,o=new Vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){const d=c.length!==0||f||n!==0||r;return r=f,n=c.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){const m=c.clippingPlanes,_=c.clipIntersection,p=c.clipShadows,v=i.get(c);if(!r||m===null||m.length===0||s&&!p)s?u(null):l();else{const y=s?0:n,g=y*4;let T=v.clippingState||null;h.value=T,T=u(m,f,g,d);for(let w=0;w!==g;++w)T[w]=e[w];v.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,f,d,m){const _=c!==null?c.length:0;let p=null;if(_!==0){if(p=h.value,m!==!0||p===null){const v=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<v)&&(p=new Float32Array(v));for(let g=0,T=d;g!==_;++g,T+=4)a.copy(c[g]).applyMatrix4(y,o),a.normal.toArray(p,T),p[T+3]=a.constant}h.value=p,h.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function l0(i){let t=new WeakMap;function e(a,o){return o===Lh?a.mapping=Cr:o===Nh&&(a.mapping=Pr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lh||o===Nh)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const l=new yv(h.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ed extends vd{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mr=4,ec=[.125,.215,.35,.446,.526,.582],Fi=20,zo=new Ed,nc=new qt;let Vo=null,Xo=0,Wo=0,Yo=!1;const Ii=(1+Math.sqrt(5))/2,cr=1/Ii,ic=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ii,cr),new D(0,Ii,-cr),new D(cr,0,Ii),new D(-cr,0,Ii),new D(Ii,cr,0),new D(-Ii,cr,0)];class rc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Vo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vo,Xo,Wo),this._renderer.xr.enabled=Yo,t.scissorTest=!1,ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cr||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Na,format:xn,colorSpace:mi,depthBuffer:!1},r=sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u0(s)),this._blurMaterial=c0(s,t,e)}return r}_compileMaterial(t){const e=new on(this._lodPlanes[0],t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,n,r){const o=new $e(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor(nc),u.toneMapping=li,u.autoClear=!1;const d=new Dl({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),m=new on(new Ur,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(nc),_=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(o.up.set(0,h[v],0),o.lookAt(l[v],0,0)):y===1?(o.up.set(0,0,h[v]),o.lookAt(0,l[v],0)):(o.up.set(0,h[v],0),o.lookAt(0,0,l[v]));const g=this._cubeSize;ea(r,y*g,v>2?g:0,g,g),u.setRenderTarget(r),_&&u.render(m,o),u.render(t,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=c,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Cr||t.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new on(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const h=this._cubeSize;ea(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ic[(r-1)%ic.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const h=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new on(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):Fi;p>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fi}`);const v=[];let y=0;for(let M=0;M<Fi;++M){const I=M/_,E=Math.exp(-I*I/2);v.push(E),M===0?y+=E:M<p&&(y+=2*E)}for(let M=0;M<v.length;M++)v[M]=v[M]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=m,f.mipInt.value=g-n;const T=this._sizeLods[r],w=3*T*(r>g-mr?r-g+mr:0),b=4*(this._cubeSize-T);ea(e,w,b,3*T,2*T),h.setRenderTarget(e),h.render(c,zo)}}function u0(i){const t=[],e=[],n=[];let r=i;const s=i-mr+1+ec.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let h=1/o;a>i-mr?h=ec[a-i+mr-1]:a===0&&(h=0),n.push(h);const l=1/(o-2),u=-l,c=1+l,f=[u,u,c,u,c,c,u,u,c,c,u,c],d=6,m=6,_=3,p=2,v=1,y=new Float32Array(_*m*d),g=new Float32Array(p*m*d),T=new Float32Array(v*m*d);for(let b=0;b<d;b++){const M=b%3*2/3-1,I=b>2?0:-1,E=[M,I,0,M+2/3,I,0,M+2/3,I+1,0,M,I,0,M+2/3,I+1,0,M,I+1,0];y.set(E,_*m*b),g.set(f,p*m*b);const x=[b,b,b,b,b,b];T.set(x,v*m*b)}const w=new Rn;w.setAttribute("position",new Tn(y,_)),w.setAttribute("uv",new Tn(g,p)),w.setAttribute("faceIndex",new Tn(T,v)),t.push(w),r>mr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sc(i,t,e){const n=new Vi(i,t,e);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function c0(i,t,e){const n=new Float32Array(Fi),r=new D(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ac(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function oc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function f0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const h=o.mapping,l=h===Lh||h===Nh,u=h===Cr||h===Pr;if(l||u){let c=t.get(o);const f=c!==void 0?c.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new rc(i)),c=l?e.fromEquirectangular(o,c):e.fromCubemap(o,c),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),c.texture;if(c!==void 0)return c.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new rc(i)),c=l?e.fromEquirectangular(o):e.fromCubemap(o),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),o.addEventListener("dispose",s),c.texture):null}}}return o}function r(o){let h=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&h++;return h===l}function s(o){const h=o.target;h.removeEventListener("dispose",s);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function d0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function p0(i,t,e,n){const r={},s=new WeakMap;function a(c){const f=c.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let p=0,v=_.length;p<v;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(c,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function h(c){const f=c.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER);const d=c.morphAttributes;for(const m in d){const _=d[m];for(let p=0,v=_.length;p<v;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(c){const f=[],d=c.index,m=c.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let g=0,T=y.length;g<T;g+=3){const w=y[g+0],b=y[g+1],M=y[g+2];f.push(w,b,b,M,M,w)}}else if(m!==void 0){const y=m.array;_=m.version;for(let g=0,T=y.length/3-1;g<T;g+=3){const w=g+0,b=g+1,M=g+2;f.push(w,b,b,M,M,w)}}else return;const p=new(hd(f)?pd:dd)(f,1);p.version=_;const v=s.get(c);v&&t.remove(v),s.set(c,p)}function u(c){const f=s.get(c);if(f){const d=c.index;d!==null&&f.version<d.version&&l(c)}else l(c);return s.get(c)}return{get:o,update:h,getWireframeAttribute:u}}function m0(i,t,e){let n;function r(c){n=c}let s,a;function o(c){s=c.type,a=c.bytesPerElement}function h(c,f){i.drawElements(n,f,s,c*a),e.update(f,n,1)}function l(c,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,c*a,d),e.update(f,n,d))}function u(c,f,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(c[_]/a,f[_]);else{m.multiDrawElementsWEBGL(n,f,0,s,c,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];e.update(_,n,1)}}this.setMode=r,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=u}function v0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function _0(i,t,e){const n=new WeakMap,r=new Ce;function s(a,o,h){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==c){let x=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let w=o.attributes.position.count*T,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const M=new Float32Array(w*b*4*c),I=new ud(M,w,b,c);I.type=ai,I.needsUpdate=!0;const E=T*4;for(let O=0;O<c;O++){const N=v[O],P=y[O],H=g[O],L=w*b*4*O;for(let G=0;G<N.count;G++){const q=G*E;m===!0&&(r.fromBufferAttribute(N,G),M[L+q+0]=r.x,M[L+q+1]=r.y,M[L+q+2]=r.z,M[L+q+3]=0),_===!0&&(r.fromBufferAttribute(P,G),M[L+q+4]=r.x,M[L+q+5]=r.y,M[L+q+6]=r.z,M[L+q+7]=0),p===!0&&(r.fromBufferAttribute(H,G),M[L+q+8]=r.x,M[L+q+9]=r.y,M[L+q+10]=r.z,M[L+q+11]=H.itemSize===4?r.w:1)}}f={count:c,texture:I,size:new ft(w,b)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let p=0;p<l.length;p++)m+=l[p];const _=o.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function g0(i,t,e,n){let r=new WeakMap;function s(h){const l=n.render.frame,u=h.geometry,c=t.get(h,u);if(r.get(c)!==l&&(t.update(c),r.set(c,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==l&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return c}function a(){r=new WeakMap}function o(h){const l=h.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Sd extends dn{constructor(t,e,n,r,s,a,o,h,l,u){if(u=u!==void 0?u:Tr,u!==Tr&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Tr&&(n=Ir),n===void 0&&u===hs&&(n=Ts),super(null,r,s,a,o,h,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=h!==void 0?h:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Td=new dn,bd=new Sd(1,1);bd.compareFunction=od;const Md=new ud,wd=new iv,Ad=new _d,hc=[],lc=[],uc=new Float32Array(16),cc=new Float32Array(9),fc=new Float32Array(4);function Fr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=hc[r];if(s===void 0&&(s=new Float32Array(r),hc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ro(i,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Se(e,n))return;fc.set(n),i.uniformMatrix2fv(this.addr,!1,fc),Te(e,n)}}function b0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Se(e,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),Te(e,n)}}function M0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Se(e,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),Te(e,n)}}function w0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function P0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function L0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?bd:Td;e.setTexture2D(t||s,r)}function N0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||wd,r)}function U0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ad,r)}function F0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Md,r)}function B0(i){switch(i){case 5126:return y0;case 35664:return x0;case 35665:return E0;case 35666:return S0;case 35674:return T0;case 35675:return b0;case 35676:return M0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return I0;case 36295:return O0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return F0}}function G0(i,t){i.uniform1fv(this.addr,t)}function k0(i,t){const e=Fr(t,this.size,2);i.uniform2fv(this.addr,e)}function H0(i,t){const e=Fr(t,this.size,3);i.uniform3fv(this.addr,e)}function z0(i,t){const e=Fr(t,this.size,4);i.uniform4fv(this.addr,e)}function V0(i,t){const e=Fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function X0(i,t){const e=Fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function W0(i,t){const e=Fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Y0(i,t){i.uniform1iv(this.addr,t)}function j0(i,t){i.uniform2iv(this.addr,t)}function q0(i,t){i.uniform3iv(this.addr,t)}function $0(i,t){i.uniform4iv(this.addr,t)}function J0(i,t){i.uniform1uiv(this.addr,t)}function K0(i,t){i.uniform2uiv(this.addr,t)}function Z0(i,t){i.uniform3uiv(this.addr,t)}function Q0(i,t){i.uniform4uiv(this.addr,t)}function ty(i,t,e){const n=this.cache,r=t.length,s=ro(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Td,s[a])}function ey(i,t,e){const n=this.cache,r=t.length,s=ro(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||wd,s[a])}function ny(i,t,e){const n=this.cache,r=t.length,s=ro(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ad,s[a])}function iy(i,t,e){const n=this.cache,r=t.length,s=ro(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Md,s[a])}function ry(i){switch(i){case 5126:return G0;case 35664:return k0;case 35665:return H0;case 35666:return z0;case 35674:return V0;case 35675:return X0;case 35676:return W0;case 5124:case 35670:return Y0;case 35667:case 35671:return j0;case 35668:case 35672:return q0;case 35669:case 35673:return $0;case 5125:return J0;case 36294:return K0;case 36295:return Z0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}class sy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=B0(e.type)}}class ay{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ry(e.type)}}class oy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function dc(i,t){i.seq.push(t),i.map[t.id]=t}function hy(i,t,e){const n=i.name,r=n.length;for(jo.lastIndex=0;;){const s=jo.exec(n),a=jo.lastIndex;let o=s[1];const h=s[2]==="]",l=s[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===r){dc(e,l===void 0?new sy(o,i,t):new ay(o,i,t));break}else{let c=e.map[o];c===void 0&&(c=new oy(o),dc(e,c)),e=c}}}class Pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);hy(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ly=37297;let uy=0;function cy(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function fy(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===Ba&&e===Fa?n="LinearDisplayP3ToLinearSRGB":t===Fa&&e===Ba&&(n="LinearSRGBToLinearDisplayP3"),i){case mi:case io:return[n,"LinearTransferOETF"];case vn:case Pl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+cy(i.getShaderSource(t),a)}else return r}function dy(i,t){const e=fy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function py(i,t){let e;switch(t){case Em:e="Linear";break;case Sm:e="Reinhard";break;case Tm:e="OptimizedCineon";break;case bm:e="ACESFilmic";break;case wm:e="AgX";break;case Am:e="Neutral";break;case Mm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function my(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function vy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _y(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ts(i){return i!==""}function vc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(i){return i.replace(gy,xy)}const yy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xy(i,t){let e=zt[t];if(e===void 0){const n=yy.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gh(e)}const Ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(i){return i.replace(Ey,Sy)}function Sy(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ty(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function by(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cr:case Pr:t="ENVMAP_TYPE_CUBE";break;case no:t="ENVMAP_TYPE_CUBE_UV";break}return t}function My(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function wy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cl:t="ENVMAP_BLENDING_MULTIPLY";break;case ym:t="ENVMAP_BLENDING_MIX";break;case xm:t="ENVMAP_BLENDING_ADD";break}return t}function Ay(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ry(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=Ty(e),l=by(e),u=My(e),c=wy(e),f=Ay(e),d=my(e),m=vy(s),_=r.createProgram();let p,v,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ts).join(`
`),p.length>0&&(p+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ts).join(`
`),v.length>0&&(v+=`
`)):(p=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),v=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?zt.tonemapping_pars_fragment:"",e.toneMapping!==li?py("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,dy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),a=Gh(a),a=vc(a,e),a=_c(a,e),o=Gh(o),o=vc(o,e),o=_c(o,e),a=gc(a),o=gc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",e.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const g=y+p+a,T=y+v+o,w=pc(r,r.VERTEX_SHADER,g),b=pc(r,r.FRAGMENT_SHADER,T);r.attachShader(_,w),r.attachShader(_,b),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(O){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),P=r.getShaderInfoLog(w).trim(),H=r.getShaderInfoLog(b).trim();let L=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,b);else{const q=mc(r,w,"vertex"),z=mc(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+N+`
`+q+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||H==="")&&(G=!1);G&&(O.diagnostics={runnable:L,programLog:N,vertexShader:{log:P,prefix:p},fragmentShader:{log:H,prefix:v}})}r.deleteShader(w),r.deleteShader(b),I=new Pa(r,_),E=_y(r,_)}let I;this.getUniforms=function(){return I===void 0&&M(this),I};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,ly)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=b,this}let Cy=0;class Py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Iy(t),e.set(t,n)),n}}class Iy{constructor(t){this.id=Cy++,this.code=t,this.usedTimes=0}}function Oy(i,t,e,n,r,s,a){const o=new Ol,h=new Py,l=new Set,u=[],c=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,x,O,N,P){const H=N.fog,L=P.geometry,G=E.isMeshStandardMaterial?N.environment:null,q=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),z=q&&q.mapping===no?q.image.height:null,$=m[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const B=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,V=B!==void 0?B.length:0;let ht=0;L.morphAttributes.position!==void 0&&(ht=1),L.morphAttributes.normal!==void 0&&(ht=2),L.morphAttributes.color!==void 0&&(ht=3);let mt,k,K,nt;if($){const Le=_n[$];mt=Le.vertexShader,k=Le.fragmentShader}else mt=E.vertexShader,k=E.fragmentShader,h.update(E),K=h.getVertexShaderID(E),nt=h.getFragmentShaderID(E);const tt=i.getRenderTarget(),vt=P.isInstancedMesh===!0,yt=P.isBatchedMesh===!0,Et=!!E.map,U=!!E.matcap,dt=!!q,ut=!!E.aoMap,Tt=!!E.lightMap,_t=!!E.bumpMap,Nt=!!E.normalMap,R=!!E.displacementMap,S=!!E.emissiveMap,W=!!E.metalnessMap,J=!!E.roughnessMap,Z=E.anisotropy>0,Q=E.clearcoat>0,Ct=E.iridescence>0,et=E.sheen>0,At=E.transmission>0,Ot=Z&&!!E.anisotropyMap,at=Q&&!!E.clearcoatMap,pt=Q&&!!E.clearcoatNormalMap,Ut=Q&&!!E.clearcoatRoughnessMap,gt=Ct&&!!E.iridescenceMap,xt=Ct&&!!E.iridescenceThicknessMap,Xt=et&&!!E.sheenColorMap,jt=et&&!!E.sheenRoughnessMap,Jt=!!E.specularMap,$t=!!E.specularColorMap,se=!!E.specularIntensityMap,bt=At&&!!E.transmissionMap,C=At&&!!E.thicknessMap,st=!!E.gradientMap,rt=!!E.alphaMap,Mt=E.alphaTest>0,Pt=!!E.alphaHash,te=!!E.extensions;let ae=li;E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ae=i.toneMapping);const le={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:mt,fragmentShader:k,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:nt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:yt,instancing:vt,instancingColor:vt&&P.instanceColor!==null,instancingMorph:vt&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:mi,alphaToCoverage:!!E.alphaToCoverage,map:Et,matcap:U,envMap:dt,envMapMode:dt&&q.mapping,envMapCubeUVHeight:z,aoMap:ut,lightMap:Tt,bumpMap:_t,normalMap:Nt,displacementMap:f&&R,emissiveMap:S,normalMapObjectSpace:Nt&&E.normalMapType===Hm,normalMapTangentSpace:Nt&&E.normalMapType===ad,metalnessMap:W,roughnessMap:J,anisotropy:Z,anisotropyMap:Ot,clearcoat:Q,clearcoatMap:at,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ut,iridescence:Ct,iridescenceMap:gt,iridescenceThicknessMap:xt,sheen:et,sheenColorMap:Xt,sheenRoughnessMap:jt,specularMap:Jt,specularColorMap:$t,specularIntensityMap:se,transmission:At,transmissionMap:bt,thicknessMap:C,gradientMap:st,opaque:E.transparent===!1&&E.blending===Sr&&E.alphaToCoverage===!1,alphaMap:rt,alphaTest:Mt,alphaHash:Pt,combine:E.combine,mapUv:Et&&_(E.map.channel),aoMapUv:ut&&_(E.aoMap.channel),lightMapUv:Tt&&_(E.lightMap.channel),bumpMapUv:_t&&_(E.bumpMap.channel),normalMapUv:Nt&&_(E.normalMap.channel),displacementMapUv:R&&_(E.displacementMap.channel),emissiveMapUv:S&&_(E.emissiveMap.channel),metalnessMapUv:W&&_(E.metalnessMap.channel),roughnessMapUv:J&&_(E.roughnessMap.channel),anisotropyMapUv:Ot&&_(E.anisotropyMap.channel),clearcoatMapUv:at&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:pt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:jt&&_(E.sheenRoughnessMap.channel),specularMapUv:Jt&&_(E.specularMap.channel),specularColorMapUv:$t&&_(E.specularColorMap.channel),specularIntensityMapUv:se&&_(E.specularIntensityMap.channel),transmissionMapUv:bt&&_(E.transmissionMap.channel),thicknessMapUv:C&&_(E.thicknessMap.channel),alphaMapUv:rt&&_(E.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Nt||Z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Et||rt),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:P.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ht,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&Zt.getTransfer(E.map.colorSpace)===ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hn,flipSided:E.side===He,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:te&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:te&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function v(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)x.push(O),x.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(y(x,E),g(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function y(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function g(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),E.push(o.mask)}function T(E){const x=m[E.type];let O;if(x){const N=_n[x];O=mv.clone(N.uniforms)}else O=E.uniforms;return O}function w(E,x){let O;for(let N=0,P=u.length;N<P;N++){const H=u[N];if(H.cacheKey===x){O=H,++O.usedTimes;break}}return O===void 0&&(O=new Ry(i,x,E,s),u.push(O)),O}function b(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function M(E){h.remove(E)}function I(){h.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:T,acquireProgram:w,releaseProgram:b,releaseShaderCache:M,programs:u,dispose:I}}function Dy(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Ly(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ec(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(c,f,d,m,_,p){let v=i[t];return v===void 0?(v={id:c.id,object:c,geometry:f,material:d,groupOrder:m,renderOrder:c.renderOrder,z:_,group:p},i[t]=v):(v.id=c.id,v.object=c,v.geometry=f,v.material=d,v.groupOrder=m,v.renderOrder=c.renderOrder,v.z=_,v.group=p),t++,v}function o(c,f,d,m,_,p){const v=a(c,f,d,m,_,p);d.transmission>0?n.push(v):d.transparent===!0?r.push(v):e.push(v)}function h(c,f,d,m,_,p){const v=a(c,f,d,m,_,p);d.transmission>0?n.unshift(v):d.transparent===!0?r.unshift(v):e.unshift(v)}function l(c,f){e.length>1&&e.sort(c||Ly),n.length>1&&n.sort(f||xc),r.length>1&&r.sort(f||xc)}function u(){for(let c=t,f=i.length;c<f;c++){const d=i[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:h,finish:u,sort:l}}function Ny(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ec,i.set(n,[a])):r>=s.length?(a=new Ec,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new qt};break;case"SpotLight":e={position:new D,direction:new D,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Fy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let By=0;function Gy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ky(i){const t=new Uy,e=Fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,s=new de,a=new de;function o(l,u){let c=0,f=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,_=0,p=0,v=0,y=0,g=0,T=0,w=0,b=0,M=0,I=0;l.sort(Gy);const E=u===!0?Math.PI:1;for(let O=0,N=l.length;O<N;O++){const P=l[O],H=P.color,L=P.intensity,G=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=H.r*L*E,f+=H.g*L*E,d+=H.b*L*E;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],L);I++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const $=P.shadow,B=e.get(P);B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=P.shadow.matrix,g++}n.directional[m]=z,m++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(H).multiplyScalar(L*E),z.distance=G,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[p]=z;const $=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,$.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[p]=$.matrix,P.castShadow){const B=e.get(P);B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[p]=B,n.spotShadowMap[p]=q,w++}p++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(H).multiplyScalar(L),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=z,v++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*E),z.distance=P.distance,z.decay=P.decay,P.castShadow){const $=P.shadow,B=e.get(P);B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,T++}n.point[_]=z,_++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(L*E),z.groundColor.copy(P.groundColor).multiplyScalar(L*E),n.hemi[y]=z,y++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=f,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==p||x.rectAreaLength!==v||x.hemiLength!==y||x.numDirectionalShadows!==g||x.numPointShadows!==T||x.numSpotShadows!==w||x.numSpotMaps!==b||x.numLightProbes!==I)&&(n.directional.length=m,n.spot.length=p,n.rectArea.length=v,n.point.length=_,n.hemi.length=y,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=w+b-M,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=I,x.directionalLength=m,x.pointLength=_,x.spotLength=p,x.rectAreaLength=v,x.hemiLength=y,x.numDirectionalShadows=g,x.numPointShadows=T,x.numSpotShadows=w,x.numSpotMaps=b,x.numLightProbes=I,n.version=By++)}function h(l,u){let c=0,f=0,d=0,m=0,_=0;const p=u.matrixWorldInverse;for(let v=0,y=l.length;v<y;v++){const g=l[v];if(g.isDirectionalLight){const T=n.directional[c];T.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),c++}else if(g.isSpotLight){const T=n.spot[d];T.position.setFromMatrixPosition(g.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(g.isRectAreaLight){const T=n.rectArea[m];T.position.setFromMatrixPosition(g.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(g.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(g.width*.5,0,0),T.halfHeight.set(0,g.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(g.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(g.matrixWorld),T.position.applyMatrix4(p),f++}else if(g.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(g.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:o,setupView:h,state:n}}function Sc(i){const t=new ky(i),e=[],n=[];function r(){e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(u){t.setup(e,u)}function h(u){t.setupView(e,u)}return{init:r,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:h,pushLight:s,pushShadow:a}}function Hy(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Sc(i),t.set(r,[o])):s>=a.length?(o=new Sc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class zy extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vy extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
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
}`;function Yy(i,t,e){let n=new Ll;const r=new ft,s=new ft,a=new Ce,o=new zy({depthPacking:km}),h=new Vy,l={},u=e.maxTextureSize,c={[fi]:He,[He]:fi,[Hn]:Hn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Xy,fragmentShader:Wy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Rn;m.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new on(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let v=this.type;this.render=function(b,M,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),N=i.state;N.setBlending(hi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const P=v!==Gn&&this.type===Gn,H=v===Gn&&this.type!==Gn;for(let L=0,G=b.length;L<G;L++){const q=b[L],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null||P===!0||H===!0){const V=this.type!==Gn?{minFilter:Ke,magFilter:Ke}:{};z.map!==null&&z.map.dispose(),z.map=new Vi(r.x,r.y,V),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const B=z.getViewportCount();for(let V=0;V<B;V++){const ht=z.getViewport(V);a.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),N.viewport(a),z.updateMatrices(q,V),n=z.getFrustum(),T(M,I,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Gn&&y(z,I),z.needsUpdate=!1}v=this.type,p.needsUpdate=!1,i.setRenderTarget(E,x,O)};function y(b,M){const I=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vi(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,I,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,I,d,_,null)}function g(b,M,I,E){let x=null;const O=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)x=O;else if(x=I.isPointLight===!0?h:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=x.uuid,P=M.uuid;let H=l[N];H===void 0&&(H={},l[N]=H);let L=H[P];L===void 0&&(L=x.clone(),H[P]=L,M.addEventListener("dispose",w)),x=L}if(x.visible=M.visible,x.wireframe=M.wireframe,E===Gn?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:c[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=i.properties.get(x);N.light=I}return x}function T(b,M,I,E,x){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Gn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const P=t.update(b),H=b.material;if(Array.isArray(H)){const L=P.groups;for(let G=0,q=L.length;G<q;G++){const z=L[G],$=H[z.materialIndex];if($&&$.visible){const B=g(b,$,E,x);b.onBeforeShadow(i,b,M,I,P,B,z),i.renderBufferDirect(I,null,P,B,b,z),b.onAfterShadow(i,b,M,I,P,B,z)}}}else if(H.visible){const L=g(b,H,E,x);b.onBeforeShadow(i,b,M,I,P,L,null),i.renderBufferDirect(I,null,P,L,b,null),b.onAfterShadow(i,b,M,I,P,L,null)}}const N=b.children;for(let P=0,H=N.length;P<H;P++)T(N[P],M,I,E,x)}function w(b){b.target.removeEventListener("dispose",w);for(const I in l){const E=l[I],x=b.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function jy(i){function t(){let C=!1;const st=new Ce;let rt=null;const Mt=new Ce(0,0,0,0);return{setMask:function(Pt){rt!==Pt&&!C&&(i.colorMask(Pt,Pt,Pt,Pt),rt=Pt)},setLocked:function(Pt){C=Pt},setClear:function(Pt,te,ae,le,Le){Le===!0&&(Pt*=le,te*=le,ae*=le),st.set(Pt,te,ae,le),Mt.equals(st)===!1&&(i.clearColor(Pt,te,ae,le),Mt.copy(st))},reset:function(){C=!1,rt=null,Mt.set(-1,0,0,0)}}}function e(){let C=!1,st=null,rt=null,Mt=null;return{setTest:function(Pt){Pt?nt(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(Pt){st!==Pt&&!C&&(i.depthMask(Pt),st=Pt)},setFunc:function(Pt){if(rt!==Pt){switch(Pt){case fm:i.depthFunc(i.NEVER);break;case dm:i.depthFunc(i.ALWAYS);break;case pm:i.depthFunc(i.LESS);break;case La:i.depthFunc(i.LEQUAL);break;case mm:i.depthFunc(i.EQUAL);break;case vm:i.depthFunc(i.GEQUAL);break;case _m:i.depthFunc(i.GREATER);break;case gm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=Pt}},setLocked:function(Pt){C=Pt},setClear:function(Pt){Mt!==Pt&&(i.clearDepth(Pt),Mt=Pt)},reset:function(){C=!1,st=null,rt=null,Mt=null}}}function n(){let C=!1,st=null,rt=null,Mt=null,Pt=null,te=null,ae=null,le=null,Le=null;return{setTest:function(ne){C||(ne?nt(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(ne){st!==ne&&!C&&(i.stencilMask(ne),st=ne)},setFunc:function(ne,pn,mn){(rt!==ne||Mt!==pn||Pt!==mn)&&(i.stencilFunc(ne,pn,mn),rt=ne,Mt=pn,Pt=mn)},setOp:function(ne,pn,mn){(te!==ne||ae!==pn||le!==mn)&&(i.stencilOp(ne,pn,mn),te=ne,ae=pn,le=mn)},setLocked:function(ne){C=ne},setClear:function(ne){Le!==ne&&(i.clearStencil(ne),Le=ne)},reset:function(){C=!1,st=null,rt=null,Mt=null,Pt=null,te=null,ae=null,le=null,Le=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,h=new WeakMap;let l={},u={},c=new WeakMap,f=[],d=null,m=!1,_=null,p=null,v=null,y=null,g=null,T=null,w=null,b=new qt(0,0,0),M=0,I=!1,E=null,x=null,O=null,N=null,P=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,G=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),L=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),L=G>=2);let z=null,$={};const B=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),ht=new Ce().fromArray(B),mt=new Ce().fromArray(V);function k(C,st,rt,Mt){const Pt=new Uint8Array(4),te=i.createTexture();i.bindTexture(C,te),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<rt;ae++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(st+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return te}const K={};K[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),s.setFunc(La),_t(!1),Nt(ru),nt(i.CULL_FACE),ut(hi);function nt(C){l[C]!==!0&&(i.enable(C),l[C]=!0)}function tt(C){l[C]!==!1&&(i.disable(C),l[C]=!1)}function vt(C,st){return u[C]!==st?(i.bindFramebuffer(C,st),u[C]=st,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function yt(C,st){let rt=f,Mt=!1;if(C){rt=c.get(st),rt===void 0&&(rt=[],c.set(st,rt));const Pt=C.textures;if(rt.length!==Pt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let te=0,ae=Pt.length;te<ae;te++)rt[te]=i.COLOR_ATTACHMENT0+te;rt.length=Pt.length,Mt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(rt)}function Et(C){return d!==C?(i.useProgram(C),d=C,!0):!1}const U={[Ui]:i.FUNC_ADD,[$p]:i.FUNC_SUBTRACT,[Jp]:i.FUNC_REVERSE_SUBTRACT};U[Kp]=i.MIN,U[Zp]=i.MAX;const dt={[Qp]:i.ZERO,[tm]:i.ONE,[em]:i.SRC_COLOR,[Oh]:i.SRC_ALPHA,[om]:i.SRC_ALPHA_SATURATE,[sm]:i.DST_COLOR,[im]:i.DST_ALPHA,[nm]:i.ONE_MINUS_SRC_COLOR,[Dh]:i.ONE_MINUS_SRC_ALPHA,[am]:i.ONE_MINUS_DST_COLOR,[rm]:i.ONE_MINUS_DST_ALPHA,[hm]:i.CONSTANT_COLOR,[lm]:i.ONE_MINUS_CONSTANT_COLOR,[um]:i.CONSTANT_ALPHA,[cm]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(C,st,rt,Mt,Pt,te,ae,le,Le,ne){if(C===hi){m===!0&&(tt(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),C!==qp){if(C!==_||ne!==I){if((p!==Ui||g!==Ui)&&(i.blendEquation(i.FUNC_ADD),p=Ui,g=Ui),ne)switch(C){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}v=null,y=null,T=null,w=null,b.set(0,0,0),M=0,_=C,I=ne}return}Pt=Pt||st,te=te||rt,ae=ae||Mt,(st!==p||Pt!==g)&&(i.blendEquationSeparate(U[st],U[Pt]),p=st,g=Pt),(rt!==v||Mt!==y||te!==T||ae!==w)&&(i.blendFuncSeparate(dt[rt],dt[Mt],dt[te],dt[ae]),v=rt,y=Mt,T=te,w=ae),(le.equals(b)===!1||Le!==M)&&(i.blendColor(le.r,le.g,le.b,Le),b.copy(le),M=Le),_=C,I=!1}function Tt(C,st){C.side===Hn?tt(i.CULL_FACE):nt(i.CULL_FACE);let rt=C.side===He;st&&(rt=!rt),_t(rt),C.blending===Sr&&C.transparent===!1?ut(hi):ut(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const Mt=C.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),S(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(C){E!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),E=C)}function Nt(C){C!==Wp?(nt(i.CULL_FACE),C!==x&&(C===ru?i.cullFace(i.BACK):C===Yp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),x=C}function R(C){C!==O&&(L&&i.lineWidth(C),O=C)}function S(C,st,rt){C?(nt(i.POLYGON_OFFSET_FILL),(N!==st||P!==rt)&&(i.polygonOffset(st,rt),N=st,P=rt)):tt(i.POLYGON_OFFSET_FILL)}function W(C){C?nt(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function J(C){C===void 0&&(C=i.TEXTURE0+H-1),z!==C&&(i.activeTexture(C),z=C)}function Z(C,st,rt){rt===void 0&&(z===null?rt=i.TEXTURE0+H-1:rt=z);let Mt=$[rt];Mt===void 0&&(Mt={type:void 0,texture:void 0},$[rt]=Mt),(Mt.type!==C||Mt.texture!==st)&&(z!==rt&&(i.activeTexture(rt),z=rt),i.bindTexture(C,st||K[C]),Mt.type=C,Mt.texture=st)}function Q(){const C=$[z];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ut(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function jt(C){ht.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ht.copy(C))}function Jt(C){mt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),mt.copy(C))}function $t(C,st){let rt=h.get(st);rt===void 0&&(rt=new WeakMap,h.set(st,rt));let Mt=rt.get(C);Mt===void 0&&(Mt=i.getUniformBlockIndex(st,C.name),rt.set(C,Mt))}function se(C,st){const Mt=h.get(st).get(C);o.get(st)!==Mt&&(i.uniformBlockBinding(st,Mt,C.__bindingPointIndex),o.set(st,Mt))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},z=null,$={},u={},c=new WeakMap,f=[],d=null,m=!1,_=null,p=null,v=null,y=null,g=null,T=null,w=null,b=new qt(0,0,0),M=0,I=!1,E=null,x=null,O=null,N=null,P=null,ht.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:nt,disable:tt,bindFramebuffer:vt,drawBuffers:yt,useProgram:Et,setBlending:ut,setMaterial:Tt,setFlipSided:_t,setCullFace:Nt,setLineWidth:R,setPolygonOffset:S,setScissorTest:W,activeTexture:J,bindTexture:Z,unbindTexture:Q,compressedTexImage2D:Ct,compressedTexImage3D:et,texImage2D:xt,texImage3D:Xt,updateUBOMapping:$t,uniformBlockBinding:se,texStorage2D:Ut,texStorage3D:gt,texSubImage2D:At,texSubImage3D:Ot,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:jt,viewport:Jt,reset:bt}}function qy(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let c;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return d?new OffscreenCanvas(R,S):ls("canvas")}function _(R,S,W){let J=1;const Z=Nt(R);if((Z.width>W||Z.height>W)&&(J=W/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*Z.width),Ct=Math.floor(J*Z.height);c===void 0&&(c=m(Q,Ct));const et=S?m(Q,Ct):c;return et.width=Q,et.height=Ct,et.getContext("2d").drawImage(R,0,0,Q,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Q+"x"+Ct+")."),et}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Ke&&R.minFilter!==an}function v(R){i.generateMipmap(R)}function y(R,S,W,J,Z=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),S===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),S===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),S===i.RGBA){const Ct=Z?Ua:Zt.getTransfer(J);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=Ct===ie?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function g(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ke&&R.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),b(S),S.isVideoTexture&&u.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),I(S)}function b(R){const S=n.get(R);if(S.__webglInit===void 0)return;const W=R.source,J=f.get(W);if(J){const Z=J[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(R),Object.keys(J).length===0&&f.delete(W)}n.remove(R)}function M(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const W=R.source,J=f.get(W);delete J[S.__cacheKey],a.memory.textures--}function I(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let Z=0;Z<S.__webglFramebuffer[J].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[J][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=R.textures;for(let J=0,Z=W.length;J<Z;J++){const Q=n.get(W[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(W[J])}n.remove(R)}let E=0;function x(){E=0}function O(){const R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function N(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function P(R,S){const W=n.get(R);if(R.isVideoTexture&&Tt(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(W,R,S);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function H(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ht(W,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function L(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ht(W,R,S);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function G(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){mt(W,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const q={[Uh]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[Fh]:i.MIRRORED_REPEAT},z={[Ke]:i.NEAREST,[Rm]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},$={[zm]:i.NEVER,[qm]:i.ALWAYS,[Vm]:i.LESS,[od]:i.LEQUAL,[Xm]:i.EQUAL,[jm]:i.GEQUAL,[Wm]:i.GREATER,[Ym]:i.NOTEQUAL};function B(R,S){if(S.type===ai&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===vo||S.magFilter===Ls||S.magFilter===ki||S.minFilter===an||S.minFilter===vo||S.minFilter===Ls||S.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,q[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,q[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,q[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,z[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,z[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ke||S.minFilter!==Ls&&S.minFilter!==ki||S.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function V(R,S){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const J=S.source;let Z=f.get(J);Z===void 0&&(Z={},f.set(J,Z));const Q=N(S);if(Q!==R.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Z[Q].usedTimes++;const Ct=Z[R.__cacheKey];Ct!==void 0&&(Z[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&M(S)),R.__cacheKey=Q,R.__webglTexture=Z[Q].texture}return W}function ht(R,S,W){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const Z=V(R,S),Q=S.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+W);const Ct=n.get(Q);if(Q.version!==Ct.__version||Z===!0){e.activeTexture(i.TEXTURE0+W);const et=Zt.getPrimaries(Zt.workingColorSpace),At=S.colorSpace===si?null:Zt.getPrimaries(S.colorSpace),Ot=S.colorSpace===si||et===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let at=_(S.image,!1,r.maxTextureSize);at=_t(S,at);const pt=s.convert(S.format,S.colorSpace),Ut=s.convert(S.type);let gt=y(S.internalFormat,pt,Ut,S.colorSpace,S.isVideoTexture);B(J,S);let xt;const Xt=S.mipmaps,jt=S.isVideoTexture!==!0&&gt!==sd,Jt=Ct.__version===void 0||Z===!0,$t=Q.dataReady,se=g(S,at);if(S.isDepthTexture)gt=i.DEPTH_COMPONENT16,S.type===ai?gt=i.DEPTH_COMPONENT32F:S.type===Ir?gt=i.DEPTH_COMPONENT24:S.type===Ts&&(gt=i.DEPTH24_STENCIL8),Jt&&(jt?e.texStorage2D(i.TEXTURE_2D,1,gt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,gt,at.width,at.height,0,pt,Ut,null));else if(S.isDataTexture)if(Xt.length>0){jt&&Jt&&e.texStorage2D(i.TEXTURE_2D,se,gt,Xt[0].width,Xt[0].height);for(let bt=0,C=Xt.length;bt<C;bt++)xt=Xt[bt],jt?$t&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,xt.width,xt.height,pt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,bt,gt,xt.width,xt.height,0,pt,Ut,xt.data);S.generateMipmaps=!1}else jt?(Jt&&e.texStorage2D(i.TEXTURE_2D,se,gt,at.width,at.height),$t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,pt,Ut,at.data)):e.texImage2D(i.TEXTURE_2D,0,gt,at.width,at.height,0,pt,Ut,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){jt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,se,gt,Xt[0].width,Xt[0].height,at.depth);for(let bt=0,C=Xt.length;bt<C;bt++)xt=Xt[bt],S.format!==xn?pt!==null?jt?$t&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,xt.width,xt.height,at.depth,pt,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,bt,gt,xt.width,xt.height,at.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?$t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,xt.width,xt.height,at.depth,pt,Ut,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,bt,gt,xt.width,xt.height,at.depth,0,pt,Ut,xt.data)}else{jt&&Jt&&e.texStorage2D(i.TEXTURE_2D,se,gt,Xt[0].width,Xt[0].height);for(let bt=0,C=Xt.length;bt<C;bt++)xt=Xt[bt],S.format!==xn?pt!==null?jt?$t&&e.compressedTexSubImage2D(i.TEXTURE_2D,bt,0,0,xt.width,xt.height,pt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,bt,gt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?$t&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,xt.width,xt.height,pt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,bt,gt,xt.width,xt.height,0,pt,Ut,xt.data)}else if(S.isDataArrayTexture)jt?(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,se,gt,at.width,at.height,at.depth),$t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,pt,Ut,at.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,at.width,at.height,at.depth,0,pt,Ut,at.data);else if(S.isData3DTexture)jt?(Jt&&e.texStorage3D(i.TEXTURE_3D,se,gt,at.width,at.height,at.depth),$t&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,pt,Ut,at.data)):e.texImage3D(i.TEXTURE_3D,0,gt,at.width,at.height,at.depth,0,pt,Ut,at.data);else if(S.isFramebufferTexture){if(Jt)if(jt)e.texStorage2D(i.TEXTURE_2D,se,gt,at.width,at.height);else{let bt=at.width,C=at.height;for(let st=0;st<se;st++)e.texImage2D(i.TEXTURE_2D,st,gt,bt,C,0,pt,Ut,null),bt>>=1,C>>=1}}else if(Xt.length>0){if(jt&&Jt){const bt=Nt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,se,gt,bt.width,bt.height)}for(let bt=0,C=Xt.length;bt<C;bt++)xt=Xt[bt],jt?$t&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,pt,Ut,xt):e.texImage2D(i.TEXTURE_2D,bt,gt,pt,Ut,xt);S.generateMipmaps=!1}else if(jt){if(Jt){const bt=Nt(at);e.texStorage2D(i.TEXTURE_2D,se,gt,bt.width,bt.height)}$t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ut,at)}else e.texImage2D(i.TEXTURE_2D,0,gt,pt,Ut,at);p(S)&&v(J),Ct.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function mt(R,S,W){if(S.image.length!==6)return;const J=V(R,S),Z=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const Q=n.get(Z);if(Z.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+W);const Ct=Zt.getPrimaries(Zt.workingColorSpace),et=S.colorSpace===si?null:Zt.getPrimaries(S.colorSpace),At=S.colorSpace===si||Ct===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ot=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let C=0;C<6;C++)!Ot&&!at?pt[C]=_(S.image[C],!0,r.maxCubemapSize):pt[C]=at?S.image[C].image:S.image[C],pt[C]=_t(S,pt[C]);const Ut=pt[0],gt=s.convert(S.format,S.colorSpace),xt=s.convert(S.type),Xt=y(S.internalFormat,gt,xt,S.colorSpace),jt=S.isVideoTexture!==!0,Jt=Q.__version===void 0||J===!0,$t=Z.dataReady;let se=g(S,Ut);B(i.TEXTURE_CUBE_MAP,S);let bt;if(Ot){jt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,se,Xt,Ut.width,Ut.height);for(let C=0;C<6;C++){bt=pt[C].mipmaps;for(let st=0;st<bt.length;st++){const rt=bt[st];S.format!==xn?gt!==null?jt?$t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,st,0,0,rt.width,rt.height,gt,rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,st,Xt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?$t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,st,0,0,rt.width,rt.height,gt,xt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,st,Xt,rt.width,rt.height,0,gt,xt,rt.data)}}}else{if(bt=S.mipmaps,jt&&Jt){bt.length>0&&se++;const C=Nt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,se,Xt,C.width,C.height)}for(let C=0;C<6;C++)if(at){jt?$t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,pt[C].width,pt[C].height,gt,xt,pt[C].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Xt,pt[C].width,pt[C].height,0,gt,xt,pt[C].data);for(let st=0;st<bt.length;st++){const Mt=bt[st].image[C].image;jt?$t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,st+1,0,0,Mt.width,Mt.height,gt,xt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,st+1,Xt,Mt.width,Mt.height,0,gt,xt,Mt.data)}}else{jt?$t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,gt,xt,pt[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Xt,gt,xt,pt[C]);for(let st=0;st<bt.length;st++){const rt=bt[st];jt?$t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,st+1,0,0,gt,xt,rt.image[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,st+1,Xt,gt,xt,rt.image[C])}}}p(S)&&v(i.TEXTURE_CUBE_MAP),Q.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function k(R,S,W,J,Z,Q){const Ct=s.convert(W.format,W.colorSpace),et=s.convert(W.type),At=y(W.internalFormat,Ct,et,W.colorSpace);if(!n.get(S).__hasExternalTextures){const at=Math.max(1,S.width>>Q),pt=Math.max(1,S.height>>Q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Q,At,at,pt,S.depth,0,Ct,et,null):e.texImage2D(Z,Q,At,at,pt,0,Ct,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ut(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,n.get(W).__webglTexture,0,dt(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,n.get(W).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(R,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let J=i.DEPTH_COMPONENT24;if(W||ut(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===ai?J=i.DEPTH_COMPONENT32F:Z.type===Ir&&(J=i.DEPTH_COMPONENT24));const Q=dt(S);ut(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,J,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,J,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const J=dt(S);W&&ut(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,S.width,S.height):ut(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const J=S.textures;for(let Z=0;Z<J.length;Z++){const Q=J[Z],Ct=s.convert(Q.format,Q.colorSpace),et=s.convert(Q.type),At=y(Q.internalFormat,Ct,et,Q.colorSpace),Ot=dt(S);W&&ut(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,At,S.width,S.height):ut(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,Z=dt(S);if(S.depthTexture.format===Tr)ut(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===hs)ut(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function tt(R){const S=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");nt(S.__webglFramebuffer,R)}else if(W){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=i.createRenderbuffer(),K(S.__webglDepthbuffer[J],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),K(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(R,S,W){const J=n.get(R);S!==void 0&&k(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&tt(R)}function yt(R){const S=R.texture,W=n.get(R),J=n.get(S);R.addEventListener("dispose",w);const Z=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Ct=Z.length>1;if(Ct||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,a.memory.textures++),Q){W.__webglFramebuffer=[];for(let et=0;et<6;et++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[et]=[];for(let At=0;At<S.mipmaps.length;At++)W.__webglFramebuffer[et][At]=i.createFramebuffer()}else W.__webglFramebuffer[et]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let et=0;et<S.mipmaps.length;et++)W.__webglFramebuffer[et]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let et=0,At=Z.length;et<At;et++){const Ot=n.get(Z[et]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ut(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let et=0;et<Z.length;et++){const At=Z[et];W.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[et]);const Ot=s.convert(At.format,At.colorSpace),at=s.convert(At.type),pt=y(At.internalFormat,Ot,at,At.colorSpace,R.isXRRenderTarget===!0),Ut=dt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,pt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,W.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),K(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),B(i.TEXTURE_CUBE_MAP,S);for(let et=0;et<6;et++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)k(W.__webglFramebuffer[et][At],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,At);else k(W.__webglFramebuffer[et],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(S)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let et=0,At=Z.length;et<At;et++){const Ot=Z[et],at=n.get(Ot);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),B(i.TEXTURE_2D,Ot),k(W.__webglFramebuffer,R,Ot,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,0),p(Ot)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,J.__webglTexture),B(et,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)k(W.__webglFramebuffer[At],R,S,i.COLOR_ATTACHMENT0,et,At);else k(W.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,et,0);p(S)&&v(et),e.unbindTexture()}R.depthBuffer&&tt(R)}function Et(R){const S=R.textures;for(let W=0,J=S.length;W<J;W++){const Z=S[W];if(p(Z)){const Q=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ct=n.get(Z).__webglTexture;e.bindTexture(Q,Ct),v(Q),e.unbindTexture()}}}function U(R){if(R.samples>0&&ut(R)===!1){const S=R.textures,W=R.width,J=R.height;let Z=i.COLOR_BUFFER_BIT;const Q=[],Ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=n.get(R),At=S.length>1;if(At)for(let Ot=0;Ot<S.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let Ot=0;Ot<S.length;Ot++){Q.push(i.COLOR_ATTACHMENT0+Ot),R.depthBuffer&&Q.push(Ct);const at=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(at===!1&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&et.__isTransmissionRenderTarget!==!0&&(Z|=i.STENCIL_BUFFER_BIT)),At&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,et.__webglColorRenderbuffer[Ot]),at===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ct]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ct])),At){const pt=n.get(S[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,W,J,0,0,W,J,Z,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let Ot=0;Ot<S.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,et.__webglColorRenderbuffer[Ot]);const at=n.get(S[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function dt(R){return Math.min(r.maxSamples,R.samples)}function ut(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function _t(R,S){const W=R.colorSpace,J=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==mi&&W!==si&&(Zt.getTransfer(W)===ie?(J!==xn||Z!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function Nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=x,this.setTexture2D=P,this.setTexture2DArray=H,this.setTexture3D=L,this.setTextureCube=G,this.rebindTextures=vt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=k,this.useMultisampledRTT=ut}function $y(i,t){function e(n,r=si){let s;const a=Zt.getTransfer(r);if(n===ui)return i.UNSIGNED_BYTE;if(n===td)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ed)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Im)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cm)return i.BYTE;if(n===Pm)return i.SHORT;if(n===Zf)return i.UNSIGNED_SHORT;if(n===Qf)return i.INT;if(n===Ir)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===Na)return i.HALF_FLOAT;if(n===Om)return i.ALPHA;if(n===Dm)return i.RGB;if(n===xn)return i.RGBA;if(n===Lm)return i.LUMINANCE;if(n===Nm)return i.LUMINANCE_ALPHA;if(n===Tr)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Um)return i.RED;if(n===nd)return i.RED_INTEGER;if(n===Fm)return i.RG;if(n===id)return i.RG_INTEGER;if(n===rd)return i.RGBA_INTEGER;if(n===_o||n===go||n===yo||n===xo)if(a===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hu||n===lu||n===uu||n===cu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sd)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===fu||n===du)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fu)return a===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===du)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pu||n===mu||n===vu||n===_u||n===gu||n===yu||n===xu||n===Eu||n===Su||n===Tu||n===bu||n===Mu||n===wu||n===Au)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_u)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Su)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Ru||n===Cu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Eo)return a===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ru)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bm||n===Pu||n===Iu||n===Ou)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ou)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Jy extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class na extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ky={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),v=this._getHandJoint(l,_);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=p.radius),v.visible=p!==null}const u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return o!==null&&(o.visible=r!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new na;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new dn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new di({vertexShader:Zy,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new on(new yd(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class ex extends Nr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",h=1,l=null,u=null,c=null,f=null,d=null,m=null;const _=new tx,p=e.getContextAttributes();let v=null,y=null;const g=[],T=[],w=new ft;let b=null;const M=new $e;M.layers.enable(1),M.viewport=new Ce;const I=new $e;I.layers.enable(2),I.viewport=new Ce;const E=[M,I],x=new Jy;x.layers.enable(1),x.layers.enable(2);let O=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=g[k];return K===void 0&&(K=new qo,g[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=g[k];return K===void 0&&(K=new qo,g[k]=K),K.getGripSpace()},this.getHand=function(k){let K=g[k];return K===void 0&&(K=new qo,g[k]=K),K.getHandSpace()};function P(k){const K=T.indexOf(k.inputSource);if(K===-1)return;const nt=g[K];nt!==void 0&&(nt.update(k.inputSource,k.frame,l||a),nt.dispatchEvent({type:k.type,data:k.inputSource}))}function H(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",L);for(let k=0;k<g.length;k++){const K=T[k];K!==null&&(T[k]=null,g[k].disconnect(K))}O=null,N=null,_.reset(),t.setRenderTarget(v),d=null,f=null,c=null,r=null,y=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",H),r.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(w),r.renderState.layers===void 0){const K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Vi(d.framebufferWidth,d.framebufferHeight,{format:xn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,nt=null,tt=null;p.depth&&(tt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?hs:Tr,nt=p.stencil?Ts:Ir);const vt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};c=new XRWebGLBinding(r,e),f=c.createProjectionLayer(vt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Vi(f.textureWidth,f.textureHeight,{format:xn,type:ui,depthTexture:new Sd(f.textureWidth,f.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const yt=t.properties.get(y);yt.__ignoreDepthValues=f.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await r.requestReferenceSpace(o),mt.setContext(r),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(k){for(let K=0;K<k.removed.length;K++){const nt=k.removed[K],tt=T.indexOf(nt);tt>=0&&(T[tt]=null,g[tt].disconnect(nt))}for(let K=0;K<k.added.length;K++){const nt=k.added[K];let tt=T.indexOf(nt);if(tt===-1){for(let yt=0;yt<g.length;yt++)if(yt>=T.length){T.push(nt),tt=yt;break}else if(T[yt]===null){T[yt]=nt,tt=yt;break}if(tt===-1)break}const vt=g[tt];vt&&vt.connect(nt)}}const G=new D,q=new D;function z(k,K,nt){G.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(nt.matrixWorld);const tt=G.distanceTo(q),vt=K.projectionMatrix.elements,yt=nt.projectionMatrix.elements,Et=vt[14]/(vt[10]-1),U=vt[14]/(vt[10]+1),dt=(vt[9]+1)/vt[5],ut=(vt[9]-1)/vt[5],Tt=(vt[8]-1)/vt[0],_t=(yt[8]+1)/yt[0],Nt=Et*Tt,R=Et*_t,S=tt/(-Tt+_t),W=S*-Tt;K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(W),k.translateZ(S),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const J=Et+S,Z=U+S,Q=Nt-W,Ct=R+(tt-W),et=dt*U/Z*J,At=ut*U/Z*J;k.projectionMatrix.makePerspective(Q,Ct,et,At,J,Z),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function $(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;_.texture!==null&&(k.near=_.depthNear,k.far=_.depthFar),x.near=I.near=M.near=k.near,x.far=I.far=M.far=k.far,(O!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),O=x.near,N=x.far,M.near=O,M.far=N,I.near=O,I.far=N,M.updateProjectionMatrix(),I.updateProjectionMatrix(),k.updateProjectionMatrix());const K=k.parent,nt=x.cameras;$(x,K);for(let tt=0;tt<nt.length;tt++)$(nt[tt],K);nt.length===2?z(x,M,I):x.projectionMatrix.copy(M.projectionMatrix),B(k,x,K)};function B(k,K,nt){nt===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(nt.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Bh*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function(k){h=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null};let V=null;function ht(k,K){if(u=K.getViewerPose(l||a),m=K,u!==null){const nt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let tt=!1;nt.length!==x.cameras.length&&(x.cameras.length=0,tt=!0);for(let yt=0;yt<nt.length;yt++){const Et=nt[yt];let U=null;if(d!==null)U=d.getViewport(Et);else{const ut=c.getViewSubImage(f,Et);U=ut.viewport,yt===0&&(t.setRenderTargetTextures(y,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(y))}let dt=E[yt];dt===void 0&&(dt=new $e,dt.layers.enable(yt),dt.viewport=new Ce,E[yt]=dt),dt.matrix.fromArray(Et.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Et.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(U.x,U.y,U.width,U.height),yt===0&&(x.matrix.copy(dt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),tt===!0&&x.cameras.push(dt)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const yt=c.getDepthInformation(nt[0]);yt&&yt.isValid&&yt.texture&&_.init(t,yt,r.renderState)}}for(let nt=0;nt<g.length;nt++){const tt=T[nt],vt=g[nt];tt!==null&&vt!==void 0&&vt.update(tt,K,l||a)}_.render(t,x),V&&V(k,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}const mt=new gd;mt.setAnimationLoop(ht),this.setAnimationLoop=function(k){V=k},this.dispose=function(){}}}const bi=new wn,nx=new de;function ix(i,t){function e(p,v){p.matrixAutoUpdate===!0&&p.updateMatrix(),v.value.copy(p.matrix)}function n(p,v){v.color.getRGB(p.fogColor.value,md(i)),v.isFog?(p.fogNear.value=v.near,p.fogFar.value=v.far):v.isFogExp2&&(p.fogDensity.value=v.density)}function r(p,v,y,g,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(p,v):v.isMeshToonMaterial?(s(p,v),c(p,v)):v.isMeshPhongMaterial?(s(p,v),u(p,v)):v.isMeshStandardMaterial?(s(p,v),f(p,v),v.isMeshPhysicalMaterial&&d(p,v,T)):v.isMeshMatcapMaterial?(s(p,v),m(p,v)):v.isMeshDepthMaterial?s(p,v):v.isMeshDistanceMaterial?(s(p,v),_(p,v)):v.isMeshNormalMaterial?s(p,v):v.isLineBasicMaterial?(a(p,v),v.isLineDashedMaterial&&o(p,v)):v.isPointsMaterial?h(p,v,y,g):v.isSpriteMaterial?l(p,v):v.isShadowMaterial?(p.color.value.copy(v.color),p.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(p,v){p.opacity.value=v.opacity,v.color&&p.diffuse.value.copy(v.color),v.emissive&&p.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(p.map.value=v.map,e(v.map,p.mapTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,e(v.alphaMap,p.alphaMapTransform)),v.bumpMap&&(p.bumpMap.value=v.bumpMap,e(v.bumpMap,p.bumpMapTransform),p.bumpScale.value=v.bumpScale,v.side===He&&(p.bumpScale.value*=-1)),v.normalMap&&(p.normalMap.value=v.normalMap,e(v.normalMap,p.normalMapTransform),p.normalScale.value.copy(v.normalScale),v.side===He&&p.normalScale.value.negate()),v.displacementMap&&(p.displacementMap.value=v.displacementMap,e(v.displacementMap,p.displacementMapTransform),p.displacementScale.value=v.displacementScale,p.displacementBias.value=v.displacementBias),v.emissiveMap&&(p.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,p.emissiveMapTransform)),v.specularMap&&(p.specularMap.value=v.specularMap,e(v.specularMap,p.specularMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest);const y=t.get(v),g=y.envMap,T=y.envMapRotation;if(g&&(p.envMap.value=g,bi.copy(T),bi.x*=-1,bi.y*=-1,bi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),p.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(bi)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=v.reflectivity,p.ior.value=v.ior,p.refractionRatio.value=v.refractionRatio),v.lightMap){p.lightMap.value=v.lightMap;const w=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=v.lightMapIntensity*w,e(v.lightMap,p.lightMapTransform)}v.aoMap&&(p.aoMap.value=v.aoMap,p.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,p.aoMapTransform))}function a(p,v){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,v.map&&(p.map.value=v.map,e(v.map,p.mapTransform))}function o(p,v){p.dashSize.value=v.dashSize,p.totalSize.value=v.dashSize+v.gapSize,p.scale.value=v.scale}function h(p,v,y,g){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,p.size.value=v.size*y,p.scale.value=g*.5,v.map&&(p.map.value=v.map,e(v.map,p.uvTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,e(v.alphaMap,p.alphaMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest)}function l(p,v){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,p.rotation.value=v.rotation,v.map&&(p.map.value=v.map,e(v.map,p.mapTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,e(v.alphaMap,p.alphaMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest)}function u(p,v){p.specular.value.copy(v.specular),p.shininess.value=Math.max(v.shininess,1e-4)}function c(p,v){v.gradientMap&&(p.gradientMap.value=v.gradientMap)}function f(p,v){p.metalness.value=v.metalness,v.metalnessMap&&(p.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,p.metalnessMapTransform)),p.roughness.value=v.roughness,v.roughnessMap&&(p.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,p.roughnessMapTransform)),v.envMap&&(p.envMapIntensity.value=v.envMapIntensity)}function d(p,v,y){p.ior.value=v.ior,v.sheen>0&&(p.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),p.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(p.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,p.sheenColorMapTransform)),v.sheenRoughnessMap&&(p.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,p.sheenRoughnessMapTransform))),v.clearcoat>0&&(p.clearcoat.value=v.clearcoat,p.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(p.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,p.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(p.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===He&&p.clearcoatNormalScale.value.negate())),v.iridescence>0&&(p.iridescence.value=v.iridescence,p.iridescenceIOR.value=v.iridescenceIOR,p.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(p.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,p.iridescenceMapTransform)),v.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),v.transmission>0&&(p.transmission.value=v.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),v.transmissionMap&&(p.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,p.transmissionMapTransform)),p.thickness.value=v.thickness,v.thicknessMap&&(p.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=v.attenuationDistance,p.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(p.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(p.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=v.specularIntensity,p.specularColor.value.copy(v.specularColor),v.specularColorMap&&(p.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,p.specularColorMapTransform)),v.specularIntensityMap&&(p.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,v){v.matcap&&(p.matcap.value=v.matcap)}function _(p,v){const y=t.get(v).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function rx(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(y,g){const T=g.program;n.uniformBlockBinding(y,T)}function l(y,g){let T=r[y.id];T===void 0&&(m(y),T=u(y),r[y.id]=T,y.addEventListener("dispose",p));const w=g.program;n.updateUBOMapping(y,w);const b=t.render.frame;s[y.id]!==b&&(f(y),s[y.id]=b)}function u(y){const g=c();y.__bindingPointIndex=g;const T=i.createBuffer(),w=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,T),T}function c(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const g=r[y.id],T=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let b=0,M=T.length;b<M;b++){const I=Array.isArray(T[b])?T[b]:[T[b]];for(let E=0,x=I.length;E<x;E++){const O=I[E];if(d(O,b,E,w)===!0){const N=O.__offset,P=Array.isArray(O.value)?O.value:[O.value];let H=0;for(let L=0;L<P.length;L++){const G=P[L],q=_(G);typeof G=="number"||typeof G=="boolean"?(O.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+H,O.__data)):G.isMatrix3?(O.__data[0]=G.elements[0],O.__data[1]=G.elements[1],O.__data[2]=G.elements[2],O.__data[3]=0,O.__data[4]=G.elements[3],O.__data[5]=G.elements[4],O.__data[6]=G.elements[5],O.__data[7]=0,O.__data[8]=G.elements[6],O.__data[9]=G.elements[7],O.__data[10]=G.elements[8],O.__data[11]=0):(G.toArray(O.__data,H),H+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,g,T,w){const b=y.value,M=g+"_"+T;if(w[M]===void 0)return typeof b=="number"||typeof b=="boolean"?w[M]=b:w[M]=b.clone(),!0;{const I=w[M];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return w[M]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function m(y){const g=y.uniforms;let T=0;const w=16;for(let M=0,I=g.length;M<I;M++){const E=Array.isArray(g[M])?g[M]:[g[M]];for(let x=0,O=E.length;x<O;x++){const N=E[x],P=Array.isArray(N.value)?N.value:[N.value];for(let H=0,L=P.length;H<L;H++){const G=P[H],q=_(G),z=T%w;z!==0&&w-z<q.boundary&&(T+=w-z),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=q.storage}}}const b=T%w;return b>0&&(T+=w-b),y.__size=T,y.__cache={},this}function _(y){const g={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function p(y){const g=y.target;g.removeEventListener("dispose",p);const T=a.indexOf(g.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function v(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:h,update:l,dispose:v}}class sx{constructor(t={}){const{canvas:e=Jm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=li,this.toneMappingExposure=1;const g=this;let T=!1,w=0,b=0,M=null,I=-1,E=null;const x=new Ce,O=new Ce;let N=null;const P=new qt(0);let H=0,L=e.width,G=e.height,q=1,z=null,$=null;const B=new Ce(0,0,L,G),V=new Ce(0,0,L,G);let ht=!1;const mt=new Ll;let k=!1,K=!1;const nt=new de,tt=new ft,vt=new D,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return M===null?q:1}let U=n;function dt(A,F){const Y=e.getContext(A,F);return Y!==null?Y:null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),U===null){const F="webgl2";if(U=dt(F,A),U===null)throw dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ut,Tt,_t,Nt,R,S,W,J,Z,Q,Ct,et,At,Ot,at,pt,Ut,gt,xt,Xt,jt,Jt,$t,se;function bt(){ut=new d0(U),ut.init(),Tt=new o0(U,ut,t),Jt=new $y(U,ut),_t=new jy(U),Nt=new v0(U),R=new Dy,S=new qy(U,ut,_t,R,Tt,Jt,Nt),W=new l0(g),J=new f0(g),Z=new Sv(U),$t=new s0(U,Z),Q=new p0(U,Z,Nt,$t),Ct=new g0(U,Q,Z,Nt),xt=new _0(U,Tt,S),pt=new h0(R),et=new Oy(g,W,J,ut,Tt,$t,pt),At=new ix(g,R),Ot=new Ny,at=new Hy(ut),gt=new r0(g,W,J,_t,Ct,f,h),Ut=new Yy(g,Ct,Tt),se=new rx(U,Nt,Tt,_t),Xt=new a0(U,ut,Nt),jt=new m0(U,ut,Nt),Nt.programs=et.programs,g.capabilities=Tt,g.extensions=ut,g.properties=R,g.renderLists=Ot,g.shadowMap=Ut,g.state=_t,g.info=Nt}bt();const C=new ex(g,U);this.xr=C,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(L,G,!1))},this.getSize=function(A){return A.set(L,G)},this.setSize=function(A,F,Y=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,G=F,e.width=Math.floor(A*q),e.height=Math.floor(F*q),Y===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(L*q,G*q).floor()},this.setDrawingBufferSize=function(A,F,Y){L=A,G=F,q=Y,e.width=Math.floor(A*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,F,Y,j){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,F,Y,j),_t.viewport(x.copy(B).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(V)},this.setScissor=function(A,F,Y,j){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,F,Y,j),_t.scissor(O.copy(V).multiplyScalar(q).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){_t.setScissorTest(ht=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(A=!0,F=!0,Y=!0){let j=0;if(A){let X=!1;if(M!==null){const lt=M.texture.format;X=lt===rd||lt===id||lt===nd}if(X){const lt=M.texture.type,St=lt===ui||lt===Ir||lt===Zf||lt===Ts||lt===td||lt===ed,It=gt.getClearColor(),Dt=gt.getClearAlpha(),Bt=It.r,Ft=It.g,Gt=It.b;St?(d[0]=Bt,d[1]=Ft,d[2]=Gt,d[3]=Dt,U.clearBufferuiv(U.COLOR,0,d)):(m[0]=Bt,m[1]=Ft,m[2]=Gt,m[3]=Dt,U.clearBufferiv(U.COLOR,0,m))}else j|=U.COLOR_BUFFER_BIT}F&&(j|=U.DEPTH_BUFFER_BIT),Y&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Ot.dispose(),at.dispose(),R.dispose(),W.dispose(),J.dispose(),Ct.dispose(),$t.dispose(),se.dispose(),et.dispose(),C.dispose(),C.removeEventListener("sessionstart",pn),C.removeEventListener("sessionend",mn),_i.stop()};function st(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Nt.autoReset,F=Ut.enabled,Y=Ut.autoUpdate,j=Ut.needsUpdate,X=Ut.type;bt(),Nt.autoReset=A,Ut.enabled=F,Ut.autoUpdate=Y,Ut.needsUpdate=j,Ut.type=X}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pt(A){const F=A.target;F.removeEventListener("dispose",Pt),te(F)}function te(A){ae(A),R.remove(A)}function ae(A){const F=R.get(A).programs;F!==void 0&&(F.forEach(function(Y){et.releaseProgram(Y)}),A.isShaderMaterial&&et.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Y,j,X,lt){F===null&&(F=yt);const St=X.isMesh&&X.matrixWorld.determinant()<0,It=Np(A,F,Y,j,X);_t.setMaterial(j,St);let Dt=Y.index,Bt=1;if(j.wireframe===!0){if(Dt=Q.getWireframeAttribute(Y),Dt===void 0)return;Bt=2}const Ft=Y.drawRange,Gt=Y.attributes.position;let ve=Ft.start*Bt,Ve=(Ft.start+Ft.count)*Bt;lt!==null&&(ve=Math.max(ve,lt.start*Bt),Ve=Math.min(Ve,(lt.start+lt.count)*Bt)),Dt!==null?(ve=Math.max(ve,0),Ve=Math.min(Ve,Dt.count)):Gt!=null&&(ve=Math.max(ve,0),Ve=Math.min(Ve,Gt.count));const we=Ve-ve;if(we<0||we===1/0)return;$t.setup(X,j,It,Y,Dt);let In,ue=Xt;if(Dt!==null&&(In=Z.get(Dt),ue=jt,ue.setIndex(In)),X.isMesh)j.wireframe===!0?(_t.setLineWidth(j.wireframeLinewidth*Et()),ue.setMode(U.LINES)):ue.setMode(U.TRIANGLES);else if(X.isLine){let Ht=j.linewidth;Ht===void 0&&(Ht=1),_t.setLineWidth(Ht*Et()),X.isLineSegments?ue.setMode(U.LINES):X.isLineLoop?ue.setMode(U.LINE_LOOP):ue.setMode(U.LINE_STRIP)}else X.isPoints?ue.setMode(U.POINTS):X.isSprite&&ue.setMode(U.TRIANGLES);if(X.isBatchedMesh)ue.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ue.renderInstances(ve,we,X.count);else if(Y.isInstancedBufferGeometry){const Ht=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,uo=Math.min(Y.instanceCount,Ht);ue.renderInstances(ve,we,uo)}else ue.render(ve,we)};function le(A,F,Y){A.transparent===!0&&A.side===Hn&&A.forceSinglePass===!1?(A.side=He,A.needsUpdate=!0,Ds(A,F,Y),A.side=fi,A.needsUpdate=!0,Ds(A,F,Y),A.side=Hn):Ds(A,F,Y)}this.compile=function(A,F,Y=null){Y===null&&(Y=A),p=at.get(Y),p.init(),y.push(p),Y.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),A!==Y&&A.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(g._useLegacyLights);const j=new Set;return A.traverse(function(X){const lt=X.material;if(lt)if(Array.isArray(lt))for(let St=0;St<lt.length;St++){const It=lt[St];le(It,Y,X),j.add(It)}else le(lt,Y,X),j.add(lt)}),y.pop(),p=null,j},this.compileAsync=function(A,F,Y=null){const j=this.compile(A,F,Y);return new Promise(X=>{function lt(){if(j.forEach(function(St){R.get(St).currentProgram.isReady()&&j.delete(St)}),j.size===0){X(A);return}setTimeout(lt,10)}ut.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Le=null;function ne(A){Le&&Le(A)}function pn(){_i.stop()}function mn(){_i.start()}const _i=new gd;_i.setAnimationLoop(ne),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(A){Le=A,C.setAnimationLoop(A),A===null?_i.stop():_i.start()},C.addEventListener("sessionstart",pn),C.addEventListener("sessionend",mn),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(F),F=C.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,F,M),p=at.get(A,y.length),p.init(),y.push(p),nt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),mt.setFromProjectionMatrix(nt),K=this.localClippingEnabled,k=pt.init(this.clippingPlanes,K),_=Ot.get(A,v.length),_.init(),v.push(_),Kl(A,F,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(z,$),this.info.render.frame++,k===!0&&pt.beginShadows();const Y=p.state.shadowsArray;if(Ut.render(Y,A,F),k===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1)&&gt.render(_,A),p.setupLights(g._useLegacyLights),F.isArrayCamera){const j=F.cameras;for(let X=0,lt=j.length;X<lt;X++){const St=j[X];Zl(_,A,St,St.viewport)}}else Zl(_,A,F);M!==null&&(S.updateMultisampleRenderTarget(M),S.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(g,A,F),$t.resetDefaultState(),I=-1,E=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,v.pop(),v.length>0?_=v[v.length-1]:_=null};function Kl(A,F,Y,j){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||mt.intersectsSprite(A)){j&&vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nt);const St=Ct.update(A),It=A.material;It.visible&&_.push(A,St,It,Y,vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||mt.intersectsObject(A))){const St=Ct.update(A),It=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),vt.copy(St.boundingSphere.center)),vt.applyMatrix4(A.matrixWorld).applyMatrix4(nt)),Array.isArray(It)){const Dt=St.groups;for(let Bt=0,Ft=Dt.length;Bt<Ft;Bt++){const Gt=Dt[Bt],ve=It[Gt.materialIndex];ve&&ve.visible&&_.push(A,St,ve,Y,vt.z,Gt)}}else It.visible&&_.push(A,St,It,Y,vt.z,null)}}const lt=A.children;for(let St=0,It=lt.length;St<It;St++)Kl(lt[St],F,Y,j)}function Zl(A,F,Y,j){const X=A.opaque,lt=A.transmissive,St=A.transparent;p.setupLightsView(Y),k===!0&&pt.setGlobalState(g.clippingPlanes,Y),lt.length>0&&Lp(X,lt,F,Y),j&&_t.viewport(x.copy(j)),X.length>0&&Os(X,F,Y),lt.length>0&&Os(lt,F,Y),St.length>0&&Os(St,F,Y),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Lp(A,F,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Vi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Na:ui,minFilter:ki,samples:4,stencilBuffer:s});const Bt=R.get(p.state.transmissionRenderTarget);Bt.__isTransmissionRenderTarget=!0}const lt=p.state.transmissionRenderTarget;g.getDrawingBufferSize(tt),lt.setSize(tt.x,tt.y);const St=g.getRenderTarget();g.setRenderTarget(lt),g.getClearColor(P),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear();const It=g.toneMapping;g.toneMapping=li,Os(A,Y,j),S.updateMultisampleRenderTarget(lt),S.updateRenderTargetMipmap(lt);let Dt=!1;for(let Bt=0,Ft=F.length;Bt<Ft;Bt++){const Gt=F[Bt],ve=Gt.object,Ve=Gt.geometry,we=Gt.material,In=Gt.group;if(we.side===Hn&&ve.layers.test(j.layers)){const ue=we.side;we.side=He,we.needsUpdate=!0,Ql(ve,Y,j,Ve,we,In),we.side=ue,we.needsUpdate=!0,Dt=!0}}Dt===!0&&(S.updateMultisampleRenderTarget(lt),S.updateRenderTargetMipmap(lt)),g.setRenderTarget(St),g.setClearColor(P,H),g.toneMapping=It}function Os(A,F,Y){const j=F.isScene===!0?F.overrideMaterial:null;for(let X=0,lt=A.length;X<lt;X++){const St=A[X],It=St.object,Dt=St.geometry,Bt=j===null?St.material:j,Ft=St.group;It.layers.test(Y.layers)&&Ql(It,F,Y,Dt,Bt,Ft)}}function Ql(A,F,Y,j,X,lt){A.onBeforeRender(g,F,Y,j,X,lt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(g,F,Y,j,A,lt),X.transparent===!0&&X.side===Hn&&X.forceSinglePass===!1?(X.side=He,X.needsUpdate=!0,g.renderBufferDirect(Y,F,j,X,A,lt),X.side=fi,X.needsUpdate=!0,g.renderBufferDirect(Y,F,j,X,A,lt),X.side=Hn):g.renderBufferDirect(Y,F,j,X,A,lt),A.onAfterRender(g,F,Y,j,X,lt)}function Ds(A,F,Y){F.isScene!==!0&&(F=yt);const j=R.get(A),X=p.state.lights,lt=p.state.shadowsArray,St=X.state.version,It=et.getParameters(A,X.state,lt,F,Y),Dt=et.getProgramCacheKey(It);let Bt=j.programs;j.environment=A.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(A.isMeshStandardMaterial?J:W).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",Pt),Bt=new Map,j.programs=Bt);let Ft=Bt.get(Dt);if(Ft!==void 0){if(j.currentProgram===Ft&&j.lightsStateVersion===St)return eu(A,It),Ft}else It.uniforms=et.getUniforms(A),A.onBuild(Y,It,g),A.onBeforeCompile(It,g),Ft=et.acquireProgram(It,Dt),Bt.set(Dt,Ft),j.uniforms=It.uniforms;const Gt=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Gt.clippingPlanes=pt.uniform),eu(A,It),j.needsLights=Fp(A),j.lightsStateVersion=St,j.needsLights&&(Gt.ambientLightColor.value=X.state.ambient,Gt.lightProbe.value=X.state.probe,Gt.directionalLights.value=X.state.directional,Gt.directionalLightShadows.value=X.state.directionalShadow,Gt.spotLights.value=X.state.spot,Gt.spotLightShadows.value=X.state.spotShadow,Gt.rectAreaLights.value=X.state.rectArea,Gt.ltc_1.value=X.state.rectAreaLTC1,Gt.ltc_2.value=X.state.rectAreaLTC2,Gt.pointLights.value=X.state.point,Gt.pointLightShadows.value=X.state.pointShadow,Gt.hemisphereLights.value=X.state.hemi,Gt.directionalShadowMap.value=X.state.directionalShadowMap,Gt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Gt.spotShadowMap.value=X.state.spotShadowMap,Gt.spotLightMatrix.value=X.state.spotLightMatrix,Gt.spotLightMap.value=X.state.spotLightMap,Gt.pointShadowMap.value=X.state.pointShadowMap,Gt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Ft,j.uniformsList=null,Ft}function tu(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Pa.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function eu(A,F){const Y=R.get(A);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Np(A,F,Y,j,X){F.isScene!==!0&&(F=yt),S.resetTextureUnits();const lt=F.fog,St=j.isMeshStandardMaterial?F.environment:null,It=M===null?g.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:mi,Dt=(j.isMeshStandardMaterial?J:W).get(j.envMap||St),Bt=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ft=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Gt=!!Y.morphAttributes.position,ve=!!Y.morphAttributes.normal,Ve=!!Y.morphAttributes.color;let we=li;j.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(we=g.toneMapping);const In=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=In!==void 0?In.length:0,Ht=R.get(j),uo=p.state.lights;if(k===!0&&(K===!0||A!==E)){const je=A===E&&j.id===I;pt.setState(j,A,je)}let oe=!1;j.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==uo.state.version||Ht.outputColorSpace!==It||X.isBatchedMesh&&Ht.batching===!1||!X.isBatchedMesh&&Ht.batching===!0||X.isInstancedMesh&&Ht.instancing===!1||!X.isInstancedMesh&&Ht.instancing===!0||X.isSkinnedMesh&&Ht.skinning===!1||!X.isSkinnedMesh&&Ht.skinning===!0||X.isInstancedMesh&&Ht.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ht.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ht.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ht.instancingMorph===!1&&X.morphTexture!==null||Ht.envMap!==Dt||j.fog===!0&&Ht.fog!==lt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==pt.numPlanes||Ht.numIntersection!==pt.numIntersection)||Ht.vertexAlphas!==Bt||Ht.vertexTangents!==Ft||Ht.morphTargets!==Gt||Ht.morphNormals!==ve||Ht.morphColors!==Ve||Ht.toneMapping!==we||Ht.morphTargetsCount!==ue)&&(oe=!0):(oe=!0,Ht.__version=j.version);let gi=Ht.currentProgram;oe===!0&&(gi=Ds(j,F,X));let nu=!1,Gr=!1,co=!1;const Ne=gi.getUniforms(),Jn=Ht.uniforms;if(_t.useProgram(gi.program)&&(nu=!0,Gr=!0,co=!0),j.id!==I&&(I=j.id,Gr=!0),nu||E!==A){Ne.setValue(U,"projectionMatrix",A.projectionMatrix),Ne.setValue(U,"viewMatrix",A.matrixWorldInverse);const je=Ne.map.cameraPosition;je!==void 0&&je.setValue(U,vt.setFromMatrixPosition(A.matrixWorld)),Tt.logarithmicDepthBuffer&&Ne.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ne.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Gr=!0,co=!0)}if(X.isSkinnedMesh){Ne.setOptional(U,X,"bindMatrix"),Ne.setOptional(U,X,"bindMatrixInverse");const je=X.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Ne.setValue(U,"boneTexture",je.boneTexture,S))}X.isBatchedMesh&&(Ne.setOptional(U,X,"batchingTexture"),Ne.setValue(U,"batchingTexture",X._matricesTexture,S));const fo=Y.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0)&&xt.update(X,Y,gi),(Gr||Ht.receiveShadow!==X.receiveShadow)&&(Ht.receiveShadow=X.receiveShadow,Ne.setValue(U,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Jn.envMap.value=Dt,Jn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(Jn.envMapIntensity.value=F.environmentIntensity),Gr&&(Ne.setValue(U,"toneMappingExposure",g.toneMappingExposure),Ht.needsLights&&Up(Jn,co),lt&&j.fog===!0&&At.refreshFogUniforms(Jn,lt),At.refreshMaterialUniforms(Jn,j,q,G,p.state.transmissionRenderTarget),Pa.upload(U,tu(Ht),Jn,S)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Pa.upload(U,tu(Ht),Jn,S),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ne.setValue(U,"center",X.center),Ne.setValue(U,"modelViewMatrix",X.modelViewMatrix),Ne.setValue(U,"normalMatrix",X.normalMatrix),Ne.setValue(U,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const je=j.uniformsGroups;for(let po=0,Bp=je.length;po<Bp;po++){const iu=je[po];se.update(iu,gi),se.bind(iu,gi)}}return gi}function Up(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Fp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,F,Y){R.get(A.texture).__webglTexture=F,R.get(A.depthTexture).__webglTexture=Y;const j=R.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const Y=R.get(A);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Y=0){M=A,w=F,b=Y;let j=!0,X=null,lt=!1,St=!1;if(A){const Dt=R.get(A);Dt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(U.FRAMEBUFFER,null),j=!1):Dt.__webglFramebuffer===void 0?S.setupRenderTarget(A):Dt.__hasExternalTextures&&S.rebindTextures(A,R.get(A.texture).__webglTexture,R.get(A.depthTexture).__webglTexture);const Bt=A.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(St=!0);const Ft=R.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?X=Ft[F][Y]:X=Ft[F],lt=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?X=R.get(A).__webglMultisampledFramebuffer:Array.isArray(Ft)?X=Ft[Y]:X=Ft,x.copy(A.viewport),O.copy(A.scissor),N=A.scissorTest}else x.copy(B).multiplyScalar(q).floor(),O.copy(V).multiplyScalar(q).floor(),N=ht;if(_t.bindFramebuffer(U.FRAMEBUFFER,X)&&j&&_t.drawBuffers(A,X),_t.viewport(x),_t.scissor(O),_t.setScissorTest(N),lt){const Dt=R.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Dt.__webglTexture,Y)}else if(St){const Dt=R.get(A.texture),Bt=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.__webglTexture,Y||0,Bt)}I=-1},this.readRenderTargetPixels=function(A,F,Y,j,X,lt,St){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It){_t.bindFramebuffer(U.FRAMEBUFFER,It);try{const Dt=A.texture,Bt=Dt.format,Ft=Dt.type;if(Bt!==xn&&Jt.convert(Bt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Ft===Na&&(ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float"));if(Ft!==ui&&Jt.convert(Ft)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&Ft!==ai&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-j&&Y>=0&&Y<=A.height-X&&U.readPixels(F,Y,j,X,Jt.convert(Bt),Jt.convert(Ft),lt)}finally{const Dt=M!==null?R.get(M).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(A,F,Y=0){const j=Math.pow(2,-Y),X=Math.floor(F.image.width*j),lt=Math.floor(F.image.height*j);S.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,A.x,A.y,X,lt),_t.unbindTexture()},this.copyTextureToTexture=function(A,F,Y,j=0){const X=F.image.width,lt=F.image.height,St=Jt.convert(Y.format),It=Jt.convert(Y.type);S.setTexture2D(Y,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,j,A.x,A.y,X,lt,St,It,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,j,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,St,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,j,A.x,A.y,St,It,F.image),j===0&&Y.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(A,F,Y,j,X=0){const lt=Math.round(A.max.x-A.min.x),St=Math.round(A.max.y-A.min.y),It=A.max.z-A.min.z+1,Dt=Jt.convert(j.format),Bt=Jt.convert(j.type);let Ft;if(j.isData3DTexture)S.setTexture3D(j,0),Ft=U.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)S.setTexture2DArray(j,0),Ft=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const Gt=U.getParameter(U.UNPACK_ROW_LENGTH),ve=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ve=U.getParameter(U.UNPACK_SKIP_PIXELS),we=U.getParameter(U.UNPACK_SKIP_ROWS),In=U.getParameter(U.UNPACK_SKIP_IMAGES),ue=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ue.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,A.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,A.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?U.texSubImage3D(Ft,X,F.x,F.y,F.z,lt,St,It,Dt,Bt,ue.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,X,F.x,F.y,F.z,lt,St,It,Dt,ue.data):U.texSubImage3D(Ft,X,F.x,F.y,F.z,lt,St,It,Dt,Bt,ue),U.pixelStorei(U.UNPACK_ROW_LENGTH,Gt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,we),U.pixelStorei(U.UNPACK_SKIP_IMAGES,In),X===0&&j.generateMipmaps&&U.generateMipmap(Ft),_t.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){w=0,b=0,M=null,_t.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pl?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===io?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ax extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,h=s-1,l;for(;o<=h;)if(r=Math.floor(o+(h-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)h=r-1;else{h=r;break}if(r=h,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),h=e||(a.isVector2?new ft:new D);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],a=[],o=new D,h=new de;for(let d=0;d<=t;d++){const m=d/t;r[d]=this.getTangentAt(m,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),c=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),c<=l&&(l=c,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Oe(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(h.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Oe(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(h.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ul extends Cn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=h}getPoint(t,e=new ft){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let h=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),f=h-this.aX,d=l-this.aY;h=f*u-d*c+this.aX,l=f*c+d*u+this.aY}return n.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ox extends Ul{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fl(){let i=0,t=0,e=0,n=0;function r(s,a,o,h){i=s,t=o,e=-3*s+3*a-2*o-h,n=2*s-2*a+o+h}return{initCatmullRom:function(s,a,o,h,l){r(a,o,l*(o-s),l*(h-a))},initNonuniformCatmullRom:function(s,a,o,h,l,u,c){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(h-a)/(u+c)+(h-o)/c;f*=u,d*=u,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const ia=new D,$o=new Fl,Jo=new Fl,Ko=new Fl;class hx extends Cn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(ia.subVectors(r[0],r[1]).add(r[0]),l=ia);const c=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(ia.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ia),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(c),d),_=Math.pow(c.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),$o.initNonuniformCatmullRom(l.x,c.x,f.x,u.x,m,_,p),Jo.initNonuniformCatmullRom(l.y,c.y,f.y,u.y,m,_,p),Ko.initNonuniformCatmullRom(l.z,c.z,f.z,u.z,m,_,p)}else this.curveType==="catmullrom"&&($o.initCatmullRom(l.x,c.x,f.x,u.x,this.tension),Jo.initCatmullRom(l.y,c.y,f.y,u.y,this.tension),Ko.initCatmullRom(l.z,c.z,f.z,u.z,this.tension));return n.set($o.calc(h),Jo.calc(h),Ko.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,h=i*o;return(2*e-2*n+s+a)*h+(-3*e+3*n-2*s-a)*o+s*i+e}function lx(i,t){const e=1-i;return e*e*t}function ux(i,t){return 2*(1-i)*i*t}function cx(i,t){return i*i*t}function es(i,t,e,n){return lx(i,t)+ux(i,e)+cx(i,n)}function fx(i,t){const e=1-i;return e*e*e*t}function dx(i,t){const e=1-i;return 3*e*e*i*t}function px(i,t){return 3*(1-i)*i*i*t}function mx(i,t){return i*i*i*t}function ns(i,t,e,n,r){return fx(i,t)+dx(i,e)+px(i,n)+mx(i,r)}class Rd extends Cn{constructor(t=new ft,e=new ft,n=new ft,r=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ft){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ns(t,r.x,s.x,a.x,o.x),ns(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vx extends Cn{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ns(t,r.x,s.x,a.x,o.x),ns(t,r.y,s.y,a.y,o.y),ns(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cd extends Cn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _x extends Cn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pd extends Cn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(es(t,r.x,s.x,a.x),es(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gx extends Cn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(es(t,r.x,s.x,a.x),es(t,r.y,s.y,a.y),es(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Id extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,h=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],c=r[a>r.length-3?r.length-1:a+2];return n.set(Tc(o,h.x,l.x,u.x,c.x),Tc(o,h.y,l.y,u.y,c.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ft().fromArray(r))}return this}}var bc=Object.freeze({__proto__:null,ArcCurve:ox,CatmullRomCurve3:hx,CubicBezierCurve:Rd,CubicBezierCurve3:vx,EllipseCurve:Ul,LineCurve:Cd,LineCurve3:_x,QuadraticBezierCurve:Pd,QuadraticBezierCurve3:gx,SplineCurve:Id});class yx extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],h=o.getLength(),l=h===0?0:1-a/h;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(o);for(let l=0;l<h.length;l++){const u=h[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new bc[r.type]().fromJSON(r))}return this}}class xx extends yx{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Cd(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Pd(this.currentPoint.clone(),new ft(t,e),new ft(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Rd(this.currentPoint.clone(),new ft(t,e),new ft(n,r),new ft(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Id(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,h){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,a,o,h),this}absellipse(t,e,n,r,s,a,o,h){const l=new Ul(t,e,n,r,s,a,o,h);if(this.curves.length>0){const c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bl extends Rn{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Oe(r,0,Math.PI*2);const s=[],a=[],o=[],h=[],l=[],u=1/e,c=new D,f=new ft,d=new D,m=new D,_=new D;let p=0,v=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,v=t[y+1].y-t[y].y,d.x=v*1,d.y=-p,d.z=v*0,_.copy(d),d.normalize(),h.push(d.x,d.y,d.z);break;case t.length-1:h.push(_.x,_.y,_.z);break;default:p=t[y+1].x-t[y].x,v=t[y+1].y-t[y].y,d.x=v*1,d.y=-p,d.z=v*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),h.push(d.x,d.y,d.z),_.copy(m)}for(let y=0;y<=e;y++){const g=n+y*u*r,T=Math.sin(g),w=Math.cos(g);for(let b=0;b<=t.length-1;b++){c.x=t[b].x*T,c.y=t[b].y,c.z=t[b].x*w,a.push(c.x,c.y,c.z),f.x=y/e,f.y=b/(t.length-1),o.push(f.x,f.y);const M=h[3*b+0]*T,I=h[3*b+1],E=h[3*b+0]*w;l.push(M,I,E)}}for(let y=0;y<e;y++)for(let g=0;g<t.length-1;g++){const T=g+y*t.length,w=T,b=T+t.length,M=T+t.length+1,I=T+1;s.push(w,b,I),s.push(M,I,b)}this.setIndex(s),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.points,t.segments,t.phiStart,t.phiLength)}}class Gl extends Bl{constructor(t=1,e=1,n=4,r=8){const s=new xx;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new Gl(t.radius,t.length,t.capSegments,t.radialSegments)}}class kl extends Rn{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:h};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],c=[],f=[],d=[];let m=0;const _=[],p=n/2;let v=0;y(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(d,2));function y(){const T=new D,w=new D;let b=0;const M=(e-t)/n;for(let I=0;I<=s;I++){const E=[],x=I/s,O=x*(e-t)+t;for(let N=0;N<=r;N++){const P=N/r,H=P*h+o,L=Math.sin(H),G=Math.cos(H);w.x=O*L,w.y=-x*n+p,w.z=O*G,c.push(w.x,w.y,w.z),T.set(L,M,G).normalize(),f.push(T.x,T.y,T.z),d.push(P,1-x),E.push(m++)}_.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const x=_[E][I],O=_[E+1][I],N=_[E+1][I+1],P=_[E][I+1];u.push(x,O,P),u.push(O,N,P),b+=6}l.addGroup(v,b,0),v+=b}function g(T){const w=m,b=new ft,M=new D;let I=0;const E=T===!0?t:e,x=T===!0?1:-1;for(let N=1;N<=r;N++)c.push(0,p*x,0),f.push(0,x,0),d.push(.5,.5),m++;const O=m;for(let N=0;N<=r;N++){const H=N/r*h+o,L=Math.cos(H),G=Math.sin(H);M.x=E*G,M.y=p*x,M.z=E*L,c.push(M.x,M.y,M.z),f.push(0,x,0),b.x=L*.5+.5,b.y=G*.5*x+.5,d.push(b.x,b.y),m++}for(let N=0;N<r;N++){const P=w+N,H=O+N;T===!0?u.push(H,H+1,P):u.push(H+1,H,P),I+=3}l.addGroup(v,I,T===!0?1:2),v+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ka extends Rn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(a+o,Math.PI);let l=0;const u=[],c=new D,f=new D,d=[],m=[],_=[],p=[];for(let v=0;v<=n;v++){const y=[],g=v/n;let T=0;v===0&&a===0?T=.5/e:v===n&&h===Math.PI&&(T=-.5/e);for(let w=0;w<=e;w++){const b=w/e;c.x=-t*Math.cos(r+b*s)*Math.sin(a+g*o),c.y=t*Math.cos(a+g*o),c.z=t*Math.sin(r+b*s)*Math.sin(a+g*o),m.push(c.x,c.y,c.z),f.copy(c).normalize(),_.push(f.x,f.y,f.z),p.push(b+T,1-g),y.push(l++)}u.push(y)}for(let v=0;v<n;v++)for(let y=0;y<e;y++){const g=u[v][y+1],T=u[v][y],w=u[v+1][y],b=u[v+1][y+1];(v!==0||a>0)&&d.push(g,T,b),(v!==n-1||h<Math.PI)&&d.push(T,w,b)}this.setIndex(d),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ex extends ws{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Mc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Sx{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,h;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){const c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=l.length;c<f;c+=2){const d=l[c],m=l[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const Tx=new Sx;let Hl=class{constructor(t){this.manager=t!==void 0?t:Tx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";class bx extends Hl{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Mc.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=ls("img");function h(){u(),Mc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(c){u(),r&&r(c),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",h,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}let Mx=class extends Hl{constructor(t){super(t)}load(t,e,n,r){const s=new dn,a=new bx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};class Od extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Zo=new de,wc=new D,Ac=new D;class wx{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(wc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ax extends wx{constructor(){super(new Ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rx extends Od{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Ax}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cx extends Od{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Rc=new de;class Px{constructor(t,e,n=0,r=1/0){this.ray=new cd(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rc),this}intersectObject(t,e=!0,n=[]){return kh(t,this,n,e),n.sort(Cc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)kh(t[r],this,n,e);return n.sort(Cc),n}}function Cc(i,t){return i.distance-t.distance}function kh(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)kh(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);const Ia=(i,t)=>{const e=t.x-i.x,n=t.y-i.y;return Math.sqrt(e*e+n*n)},Ix=(i,t)=>{const e=t.x-i.x,n=t.y-i.y;return Dx(Math.atan2(n,e))},Ox=(i,t,e)=>{const n={x:0,y:0};return e=Hh(e),n.x=i.x-t*Math.cos(e),n.y=i.y-t*Math.sin(e),n},Hh=i=>i*(Math.PI/180),Dx=i=>i*(180/Math.PI),Lx=i=>isNaN(i.buttons)?i.pressure!==0:i.buttons!==0,Qo=new Map,Pc=i=>{Qo.has(i)&&clearTimeout(Qo.get(i)),Qo.set(i,setTimeout(i,100))},Ha=(i,t,e)=>{const n=t.split(/[ ,]+/g);let r;for(let s=0;s<n.length;s+=1)r=n[s],i.addEventListener?i.addEventListener(r,e,!1):i.attachEvent&&i.attachEvent(r,e)},Ic=(i,t,e)=>{const n=t.split(/[ ,]+/g);let r;for(let s=0;s<n.length;s+=1)r=n[s],i.removeEventListener?i.removeEventListener(r,e):i.detachEvent&&i.detachEvent(r,e)},Dd=i=>(i.preventDefault(),i.type.match(/^touch/)?i.changedTouches:i),Oc=()=>{const i=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:i,y:t}},Dc=(i,t)=>{t.top||t.right||t.bottom||t.left?(i.style.top=t.top,i.style.right=t.right,i.style.bottom=t.bottom,i.style.left=t.left):(i.style.left=t.x+"px",i.style.top=t.y+"px")},zl=(i,t,e)=>{const n=Ld(i);for(let r in n)if(n.hasOwnProperty(r))if(typeof t=="string")n[r]=t+" "+e;else{let s="";for(let a=0,o=t.length;a<o;a+=1)s+=t[a]+" "+e+", ";n[r]=s.slice(0,-2)}return n},Nx=(i,t)=>{const e=Ld(i);for(let n in e)e.hasOwnProperty(n)&&(e[n]=t);return e},Ld=i=>{const t={};return t[i]="",["webkit","Moz","o"].forEach(function(n){t[n+i.charAt(0).toUpperCase()+i.slice(1)]=""}),t},th=(i,t)=>{for(let e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i},Ux=(i,t)=>{const e={};for(let n in i)i.hasOwnProperty(n)&&t.hasOwnProperty(n)?e[n]=t[n]:i.hasOwnProperty(n)&&(e[n]=i[n]);return e},zh=(i,t)=>{if(i.length)for(let e=0,n=i.length;e<n;e+=1)t(i[e]);else t(i)},Fx=(i,t,e)=>({x:Math.min(Math.max(i.x,t.x-e),t.x+e),y:Math.min(Math.max(i.y,t.y-e),t.y+e)});var Bx="ontouchstart"in window,Gx=!!window.PointerEvent,kx=!!window.MSPointerEvent,Wr={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},vr,us={};Gx?vr=Wr.pointer:kx?vr=Wr.MSPointer:Bx?(vr=Wr.touch,us=Wr.mouse):vr=Wr.mouse;function qn(){}qn.prototype.on=function(i,t){var e=this,n=i.split(/[ ,]+/g),r;e._handlers_=e._handlers_||{};for(var s=0;s<n.length;s+=1)r=n[s],e._handlers_[r]=e._handlers_[r]||[],e._handlers_[r].push(t);return e};qn.prototype.off=function(i,t){var e=this;return e._handlers_=e._handlers_||{},i===void 0?e._handlers_={}:t===void 0?e._handlers_[i]=null:e._handlers_[i]&&e._handlers_[i].indexOf(t)>=0&&e._handlers_[i].splice(e._handlers_[i].indexOf(t),1),e};qn.prototype.trigger=function(i,t){var e=this,n=i.split(/[ ,]+/g),r;e._handlers_=e._handlers_||{};for(var s=0;s<n.length;s+=1)r=n[s],e._handlers_[r]&&e._handlers_[r].length&&e._handlers_[r].forEach(function(a){a.call(e,{type:r,target:e},t)})};qn.prototype.config=function(i){var t=this;t.options=t.defaults||{},i&&(t.options=Ux(t.options,i))};qn.prototype.bindEvt=function(i,t){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[t]=function(){typeof e["on"+t]=="function"?e["on"+t].apply(e,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},Ha(i,vr[t],e._domHandlers_[t]),us[t]&&Ha(i,us[t],e._domHandlers_[t]),e};qn.prototype.unbindEvt=function(i,t){var e=this;return e._domHandlers_=e._domHandlers_||{},Ic(i,vr[t],e._domHandlers_[t]),us[t]&&Ic(i,us[t],e._domHandlers_[t]),delete e._domHandlers_[t],this};function be(i,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=i,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=be.id,be.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}be.prototype=new qn;be.constructor=be;be.id=0;be.prototype.buildEl=function(i){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};be.prototype.stylize=function(){if(this.options.dataOnly)return this;var i=this.options.fadeTime+"ms",t=Nx("borderRadius","50%"),e=zl("transition","opacity",i),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},th(n.el,e),this.options.shape==="circle"&&th(n.back,t),th(n.front,t),this.applyStyles(n),this};be.prototype.applyStyles=function(i){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var e in i[t])this.ui[t].style[e]=i[t][e];return this};be.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};be.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};be.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};be.prototype.show=function(i){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof i=="function"&&i.call(this)},t.options.fadeTime)),t};be.prototype.hide=function(i){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var e=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=e,typeof i=="function"&&i.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const e=t.options.restJoystick,n={};n.x=e===!0||e.x!==!1?0:t.instance.frontPosition.x,n.y=e===!0||e.y!==!1?0:t.instance.frontPosition.y,t.setPosition(i,n)}return t};be.prototype.setPosition=function(i,t){var e=this;e.frontPosition={x:t.x,y:t.y};var n=e.options.fadeTime+"ms",r={};r.front=zl("transition",["transform"],n);var s={front:{}};s.front={transform:"translate("+e.frontPosition.x+"px,"+e.frontPosition.y+"px)"},e.applyStyles(r),e.applyStyles(s),e.restTimeout=setTimeout(function(){typeof i=="function"&&i.call(e),e.restCallback()},e.options.fadeTime)};be.prototype.restCallback=function(){var i=this,t={};t.front=zl("transition","none",""),i.applyStyles(t),i.trigger("rested",i.instance)};be.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};be.prototype.computeDirection=function(i){var t=i.angle.radian,e=Math.PI/4,n=Math.PI/2,r,s,a;if(t>e&&t<e*3&&!i.lockX?r="up":t>-e&&t<=e&&!i.lockY?r="left":t>-e*3&&t<=-e&&!i.lockX?r="down":i.lockY||(r="right"),i.lockY||(t>-n&&t<n?s="left":s="right"),i.lockX||(t>0?a="up":a="down"),i.force>this.options.threshold){var o={},h;for(h in this.direction)this.direction.hasOwnProperty(h)&&(o[h]=this.direction[h]);var l={};this.direction={x:s,y:a,angle:r},i.direction=this.direction;for(h in o)o[h]===this.direction[h]&&(l[h]=!0);if(l.x&&l.y&&l.angle)return i;(!l.x||!l.y)&&this.trigger("plain",i),l.x||this.trigger("plain:"+s,i),l.y||this.trigger("plain:"+a,i),l.angle||this.trigger("dir dir:"+r,i)}else this.resetDirection();return i};function _e(i,t){var e=this;e.nipples=[],e.idles=[],e.actives=[],e.ids=[],e.pressureIntervals={},e.manager=i,e.id=_e.id,_e.id+=1,e.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},e.config(t),(e.options.mode==="static"||e.options.mode==="semi")&&(e.options.multitouch=!1),e.options.multitouch||(e.options.maxNumberOfNipples=1);const n=getComputedStyle(e.options.zone.parentElement);return n&&n.display==="flex"&&(e.parentIsFlex=!0),e.updateBox(),e.prepareNipples(),e.bindings(),e.begin(),e.nipples}_e.prototype=new qn;_e.constructor=_e;_e.id=0;_e.prototype.prepareNipples=function(){var i=this,t=i.nipples;t.on=i.on.bind(i),t.off=i.off.bind(i),t.options=i.options,t.destroy=i.destroy.bind(i),t.ids=i.ids,t.id=i.id,t.processOnMove=i.processOnMove.bind(i),t.processOnEnd=i.processOnEnd.bind(i),t.get=function(e){if(e===void 0)return t[0];for(var n=0,r=t.length;n<r;n+=1)if(t[n].identifier===e)return t[n];return!1}};_e.prototype.bindings=function(){var i=this;i.bindEvt(i.options.zone,"start"),i.options.zone.style.touchAction="none",i.options.zone.style.msTouchAction="none"};_e.prototype.begin=function(){var i=this,t=i.options;if(t.mode==="static"){var e=i.createNipple(t.position,i.manager.getIdentifier());e.add(),i.idles.push(e)}};_e.prototype.createNipple=function(i,t){var e=this,n=e.manager.scroll,r={},s=e.options,a={x:e.parentIsFlex?n.x:n.x+e.box.left,y:e.parentIsFlex?n.y:n.y+e.box.top};if(i.x&&i.y)r={x:i.x-a.x,y:i.y-a.y};else if(i.top||i.right||i.bottom||i.left){var o=document.createElement("DIV");o.style.display="hidden",o.style.top=i.top,o.style.right=i.right,o.style.bottom=i.bottom,o.style.left=i.left,o.style.position="absolute",s.zone.appendChild(o);var h=o.getBoundingClientRect();s.zone.removeChild(o),r=i,i={x:h.left+n.x,y:h.top+n.y}}var l=new be(e,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:t,position:i,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(Dc(l.ui.el,r),Dc(l.ui.front,l.frontPosition)),e.nipples.push(l),e.trigger("added "+l.identifier+":added",l),e.manager.trigger("added "+l.identifier+":added",l),e.bindNipple(l),l};_e.prototype.updateBox=function(){var i=this;i.box=i.options.zone.getBoundingClientRect()};_e.prototype.bindNipple=function(i){var t=this,e,n=function(r,s){e=r.type+" "+s.id+":"+r.type,t.trigger(e,s)};i.on("destroyed",t.onDestroyed.bind(t)),i.on("shown hidden rested dir plain",n),i.on("dir:up dir:right dir:down dir:left",n),i.on("plain:up plain:right plain:down plain:left",n)};_e.prototype.pressureFn=function(i,t,e){var n=this,r=0;clearInterval(n.pressureIntervals[e]),n.pressureIntervals[e]=setInterval((function(){var s=i.force||i.pressure||i.webkitForce||0;s!==r&&(t.trigger("pressure",s),n.trigger("pressure "+t.identifier+":pressure",s),r=s)}).bind(n),100)};_e.prototype.onstart=function(i){var t=this,e=t.options,n=i;i=Dd(i),t.updateBox();var r=function(s){t.actives.length<e.maxNumberOfNipples?t.processOnStart(s):n.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(a){if(Object.values(n.touches).findIndex(function(h){return h.identifier===a})<0){var o=[i[0]];o.identifier=a,t.processOnEnd(o)}}),t.actives.length<e.maxNumberOfNipples&&t.processOnStart(s))};return zh(i,r),t.manager.bindDocument(),!1};_e.prototype.processOnStart=function(i){var t=this,e=t.options,n,r=t.manager.getIdentifier(i),s=i.force||i.pressure||i.webkitForce||0,a={x:i.pageX,y:i.pageY},o=t.getOrCreate(r,a);o.identifier!==r&&t.manager.removeIdentifier(o.identifier),o.identifier=r;var h=function(u){u.trigger("start",u),t.trigger("start "+u.id+":start",u),u.show(),s>0&&t.pressureFn(i,u,u.identifier),t.processOnMove(i)};if((n=t.idles.indexOf(o))>=0&&t.idles.splice(n,1),t.actives.push(o),t.ids.push(o.identifier),e.mode!=="semi")h(o);else{var l=Ia(a,o.position);if(l<=e.catchDistance)h(o);else{o.destroy(),t.processOnStart(i);return}}return o};_e.prototype.getOrCreate=function(i,t){var e=this,n=e.options,r;return/(semi|static)/.test(n.mode)?(r=e.idles[0],r?(e.idles.splice(0,1),r):n.mode==="semi"?e.createNipple(t,i):(console.warn("Coudln't find the needed nipple."),!1)):(r=e.createNipple(t,i),r)};_e.prototype.processOnMove=function(i){var t=this,e=t.options,n=t.manager.getIdentifier(i),r=t.nipples.get(n),s=t.manager.scroll;if(!Lx(i)){this.processOnEnd(i);return}if(!r){console.error("Found zombie joystick with ID "+n),t.manager.removeIdentifier(n);return}if(e.dynamicPage){var a=r.el.getBoundingClientRect();r.position={x:s.x+a.left,y:s.y+a.top}}r.identifier=n;var o=r.options.size/2,h={x:i.pageX,y:i.pageY};e.lockX&&(h.y=r.position.y),e.lockY&&(h.x=r.position.x);var l=Ia(h,r.position),u=Ix(h,r.position),c=Hh(u),f=l/o,d={distance:l,position:h},m,_;if(r.options.shape==="circle"?(m=Math.min(l,o),_=Ox(r.position,m,u)):(_=Fx(h,r.position,o),m=Ia(_,r.position)),e.follow){if(l>o){let g=h.x-_.x,T=h.y-_.y;r.position.x+=g,r.position.y+=T,r.el.style.top=r.position.y-(t.box.top+s.y)+"px",r.el.style.left=r.position.x-(t.box.left+s.x)+"px",l=Ia(h,r.position)}}else h=_,l=m;var p=h.x-r.position.x,v=h.y-r.position.y;r.frontPosition={x:p,y:v},e.dataOnly||(r.ui.front.style.transform="translate("+p+"px,"+v+"px)");var y={identifier:r.identifier,position:h,force:f,pressure:i.force||i.pressure||i.webkitForce||0,distance:l,angle:{radian:c,degree:u},vector:{x:p/o,y:-v/o},raw:d,instance:r,lockX:e.lockX,lockY:e.lockY};y=r.computeDirection(y),y.angle={radian:Hh(180-u),degree:180-u},r.trigger("move",y),t.trigger("move "+r.id+":move",y)};_e.prototype.processOnEnd=function(i){var t=this,e=t.options,n=t.manager.getIdentifier(i),r=t.nipples.get(n),s=t.manager.removeIdentifier(r.identifier);r&&(e.dataOnly||r.hide(function(){e.mode==="dynamic"&&(r.trigger("removed",r),t.trigger("removed "+r.id+":removed",r),t.manager.trigger("removed "+r.id+":removed",r),r.destroy())}),clearInterval(t.pressureIntervals[r.identifier]),r.resetDirection(),r.trigger("end",r),t.trigger("end "+r.id+":end",r),t.ids.indexOf(r.identifier)>=0&&t.ids.splice(t.ids.indexOf(r.identifier),1),t.actives.indexOf(r)>=0&&t.actives.splice(t.actives.indexOf(r),1),/(semi|static)/.test(e.mode)?t.idles.push(r):t.nipples.indexOf(r)>=0&&t.nipples.splice(t.nipples.indexOf(r),1),t.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(t.manager.ids[s.id]=s.identifier))};_e.prototype.onDestroyed=function(i,t){var e=this;e.nipples.indexOf(t)>=0&&e.nipples.splice(e.nipples.indexOf(t),1),e.actives.indexOf(t)>=0&&e.actives.splice(e.actives.indexOf(t),1),e.idles.indexOf(t)>=0&&e.idles.splice(e.idles.indexOf(t),1),e.ids.indexOf(t.identifier)>=0&&e.ids.splice(e.ids.indexOf(t.identifier),1),e.manager.removeIdentifier(t.identifier),e.manager.unbindDocument()};_e.prototype.destroy=function(){var i=this;i.unbindEvt(i.options.zone,"start"),i.nipples.forEach(function(e){e.destroy()});for(var t in i.pressureIntervals)i.pressureIntervals.hasOwnProperty(t)&&clearInterval(i.pressureIntervals[t]);i.trigger("destroyed",i.nipples),i.manager.unbindDocument(),i.off()};function Pe(i){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=Oc(),t.config(i),t.prepareCollections();var e=function(){var r;t.collections.forEach(function(s){s.forEach(function(a){r=a.el.getBoundingClientRect(),a.position={x:t.scroll.x+r.left,y:t.scroll.y+r.top}})})};Ha(window,"resize",function(){Pc(e)});var n=function(){t.scroll=Oc()};return Ha(window,"scroll",function(){Pc(n)}),t.collections}Pe.prototype=new qn;Pe.constructor=Pe;Pe.prototype.prepareCollections=function(){var i=this;i.collections.create=i.create.bind(i),i.collections.on=i.on.bind(i),i.collections.off=i.off.bind(i),i.collections.destroy=i.destroy.bind(i),i.collections.get=function(t){var e;return i.collections.every(function(n){return e=n.get(t),!e}),e}};Pe.prototype.create=function(i){return this.createCollection(i)};Pe.prototype.createCollection=function(i){var t=this,e=new _e(t,i);return t.bindCollection(e),t.collections.push(e),e};Pe.prototype.bindCollection=function(i){var t=this,e,n=function(r,s){e=r.type+" "+s.id+":"+r.type,t.trigger(e,s)};i.on("destroyed",t.onDestroyed.bind(t)),i.on("shown hidden rested dir plain",n),i.on("dir:up dir:right dir:down dir:left",n),i.on("plain:up plain:right plain:down plain:left",n)};Pe.prototype.bindDocument=function(){var i=this;i.binded||(i.bindEvt(document,"move").bindEvt(document,"end"),i.binded=!0)};Pe.prototype.unbindDocument=function(i){var t=this;(!Object.keys(t.ids).length||i===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};Pe.prototype.getIdentifier=function(i){var t;return i?(t=i.identifier===void 0?i.pointerId:i.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};Pe.prototype.removeIdentifier=function(i){var t={};for(var e in this.ids)if(this.ids[e]===i){t.id=e,t.identifier=this.ids[e],delete this.ids[e];break}return t};Pe.prototype.onmove=function(i){var t=this;return t.onAny("move",i),!1};Pe.prototype.onend=function(i){var t=this;return t.onAny("end",i),!1};Pe.prototype.oncancel=function(i){var t=this;return t.onAny("end",i),!1};Pe.prototype.onAny=function(i,t){var e=this,n,r="processOn"+i.charAt(0).toUpperCase()+i.slice(1);t=Dd(t);var s=function(o,h,l){l.ids.indexOf(h)>=0&&(l[r](o),o._found_=!0)},a=function(o){n=e.getIdentifier(o),zh(e.collections,s.bind(null,o,n)),o._found_||e.removeIdentifier(n)};return zh(t,a),!1};Pe.prototype.destroy=function(){var i=this;i.unbindDocument(!0),i.ids={},i.index=0,i.collections.forEach(function(t){t.destroy()}),i.off()};Pe.prototype.onDestroyed=function(i,t){var e=this;if(e.collections.indexOf(t)<0)return!1;e.collections.splice(e.collections.indexOf(t),1)};const Lc=new Pe,Nc={create:function(i){return Lc.create(i)},factory:Lc};class Uc{constructor(){this.front=0,this.back=0,this.left=0,this.right=0}}class Hx{constructor(t){this.view=t,this.moveJoystirckState=new Uc,this.rotateJoystirckState=new Uc,this.moveVector=new D,this.rotateVector=new D,this.upVector=new D(0,1,0);const e={zone:document.getElementById("moveJoystickDiv"),size:120,multitouch:!0,maxNumberOfNipples:2,mode:"static",restJoystick:!0,shape:"circle",position:{bottom:"80px",left:"100px"},dynamicPage:!0},n={zone:document.getElementById("rotateJoystickDiv"),size:120,multitouch:!0,maxNumberOfNipples:2,mode:"static",restJoystick:!0,shape:"circle",position:{bottom:"80px",right:"100px"},dynamicPage:!0};this.moveJoystick=Nc.create(e),this.rotateJoystick=Nc.create(n),this.moveJoystick[0].on("move",this.onJoystickMove.bind(this)),this.rotateJoystick[0].on("move",this.onJoystickRotate.bind(this)),this.moveJoystick[0].on("end",this.onMoveEnd.bind(this)),this.rotateJoystick[0].on("end",this.onRotateEnd.bind(this))}onMoveEnd(t){}onRotateEnd(t){}onJoystickRotate(t,e){const n=e.vector.y,r=e.vector.x;n>0?(this.rotateJoystirckState.front=Math.abs(n),this.rotateJoystirckState.back=0):n<0&&(this.rotateJoystirckState.front=0,this.rotateJoystirckState.back=Math.abs(n)),r>0?(this.rotateJoystirckState.left=0,this.rotateJoystirckState.right=Math.abs(r)):r<0&&(this.rotateJoystirckState.left=Math.abs(r),this.rotateJoystirckState.right=0)}onJoystickMove(t,e){const n=e.vector.y,r=e.vector.x;n>0?(this.moveJoystirckState.front=Math.abs(n),this.moveJoystirckState.back=0):n<0&&(this.moveJoystirckState.front=0,this.moveJoystirckState.back=Math.abs(n)),r>0?(this.moveJoystirckState.left=0,this.moveJoystirckState.right=Math.abs(r)):r<0&&(this.moveJoystirckState.left=Math.abs(r),this.moveJoystirckState.right=0)}}var is=function(){var i=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(u){u.preventDefault(),n(++i%t.children.length)},!1);function e(u){return t.appendChild(u.dom),u}function n(u){for(var c=0;c<t.children.length;c++)t.children[c].style.display=c===u?"block":"none";i=u}var r=(performance||Date).now(),s=r,a=0,o=e(new is.Panel("FPS","#0ff","#002")),h=e(new is.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new is.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(h.update(u-r,200),u>=s+1e3&&(o.update(a*1e3/(u-s),100),s=u,a=0,l)){var c=performance.memory;l.update(c.usedJSHeapSize/1048576,c.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:t,setMode:n}};is.Panel=function(i,t,e){var n=1/0,r=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,h=48*a,l=3*a,u=2*a,c=3*a,f=15*a,d=74*a,m=30*a,_=document.createElement("canvas");_.width=o,_.height=h,_.style.cssText="width:80px;height:48px";var p=_.getContext("2d");return p.font="bold "+9*a+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=e,p.fillRect(0,0,o,h),p.fillStyle=t,p.fillText(i,l,u),p.fillRect(c,f,d,m),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(c,f,d,m),{dom:_,update:function(v,y){n=Math.min(n,v),r=Math.max(r,v),p.fillStyle=e,p.globalAlpha=1,p.fillRect(0,0,o,f),p.fillStyle=t,p.fillText(s(v)+" "+i+" ("+s(n)+"-"+s(r)+")",l,u),p.drawImage(_,c+a,f,d-a,m,c,f,d-a,m),p.fillRect(c+d-a,f,a,m),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(c+d-a,f,a,s((1-v/y)*m))}}};class Vl{constructor(){this.model=Je(eo),this.pointer=new ft,this.radius=100,this.activeObjects=[],this.scene=new ax,this.scene.background=new qt(15790320),this.camera=new $e(75,window.innerWidth/window.innerHeight,1,1e4),this.renderer=new sx,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.div=document.getElementById("three"),this.div.appendChild(this.renderer.domElement),this.stats=new is,this.div.appendChild(this.stats.dom);const t=new Rx(16777215,1);t.position.set(1,1,1).normalize(),this.scene.add(t);let e=new Cx("#ffffff",.1);e.position.set(0,20,20),this.scene.add(e);const r=new Mx().load("https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg");r.anisotropy=16;let s=new ka(2e3,40,40),a=new Dl({side:He,map:r});const o=new on(s,a);this.scene.add(o);const h=new Ur(20,20,20),l=new kl(5,5,20,32),u=new Gl(10,20,5,10),c=new ka(10,16,16),f=[h,l,u,c];for(let d=0;d<2e3;d++){const m=Math.floor(Math.random()*f.length),_=f[m],p=new on(_,new Ex({color:Math.random()*16777215}));p.position.x=Math.random()*800-400,p.position.y=Math.random()*800-400,p.position.z=Math.random()*800-400,p.rotation.x=Math.random()*2*Math.PI,p.rotation.y=Math.random()*2*Math.PI,p.rotation.z=Math.random()*2*Math.PI,this.scene.add(p),this.activeObjects.push(p)}this.raycaster=new Px,this.joystickView=new Hx(this)}}class Xl{constructor(){this.model=Je(eo),this.view=Je(Vl)}}class Nd extends Xl{constructor(){super(...arguments),this.timerModel=Je(os),this.localAxisX=new D(1,0,0),this.localAxisY=new D(0,1,0),this.localAxisZ=new D(0,0,1),this.axisX=new D,this.axisY=new D,this.axisZ=new D,this.tempVector=new D,this.angle=new ft,this.speed=new ft,this.quaternionX=new Xi,this.quaternionY=new Xi}initialize(){this.joystickView=this.view.joystickView,this.moveJoystickState=this.joystickView.moveJoystirckState,this.rotateJoystickState=this.joystickView.rotateJoystirckState,this.scene=this.view.scene,this.camera=this.view.camera,this.renderer=this.view.renderer,this.raycaster=this.view.raycaster,this.moveVector=this.joystickView.moveVector,this.rotateVector=this.joystickView.rotateVector,this.startRendering()}startRendering(){this.timerModel.reset(),requestAnimationFrame(this.animate.bind(this))}animate(t=0){this.timerModel.update(t),requestAnimationFrame(this.animate.bind(this)),this.render(),this.view.stats.update()}render(){this.updatePlayer(),this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(this.view.pointer,this.camera),this.renderer.render(this.scene,this.camera)}updateVector(t){t.x=Math.round(t.x*100)/100,t.y=Math.round(t.y*100)/100,t.z=Math.round(t.z*100)/100}updatePlayer(){this.axisX=this.camera.localToWorld(this.localAxisX.clone()).sub(this.camera.position).normalize(),this.axisY=this.camera.localToWorld(this.localAxisY.clone()).sub(this.camera.position).normalize(),this.axisZ=this.camera.localToWorld(this.localAxisZ.clone()).sub(this.camera.position).normalize(),this.angle.set(0,0),this.rotateJoystickState.front>0&&(this.angle.x+=this.rotateJoystickState.front*this.timerModel.delta*15e-5),this.rotateJoystickState.back>0&&(this.angle.x-=this.rotateJoystickState.back*this.timerModel.delta*15e-5),this.rotateJoystickState.left>0&&(this.angle.y+=this.rotateJoystickState.left*this.timerModel.delta*15e-5),this.rotateJoystickState.right>0&&(this.angle.y-=this.rotateJoystickState.right*this.timerModel.delta*15e-5),this.quaternionX.setFromAxisAngle(this.axisX,this.angle.x),this.quaternionY.setFromAxisAngle(this.axisY,this.angle.y),this.camera.applyQuaternion(this.quaternionX.multiply(this.quaternionY)),this.speed.set(0,0),this.moveJoystickState.front>0&&(this.speed.x+=this.moveJoystickState.front*this.timerModel.delta*.05),this.moveJoystickState.back>0&&(this.speed.x-=this.moveJoystickState.back*this.timerModel.delta*.05),this.camera.position.sub(this.axisZ.multiplyScalar(this.speed.x)),this.moveJoystickState.left>0&&(this.speed.y+=this.moveJoystickState.left*this.timerModel.delta*.05),this.moveJoystickState.right>0&&(this.speed.y-=this.moveJoystickState.right*this.timerModel.delta*.05),this.camera.position.sub(this.axisX.multiplyScalar(this.speed.y))}}class Ud extends Xl{constructor(){super(...arguments),this.pointer=new ft}initialize(){document.addEventListener("pointerdown",this.onPointerDown.bind(this))}onPointerDown(t){this.pointer.set(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),this.view.raycaster.setFromCamera(this.pointer,this.view.camera);const e=this.view.raycaster.intersectObjects(this.view.activeObjects,!1);if(e.length>0){const r=e[0].object,s=this.view.activeObjects.indexOf(r);this.view.activeObjects.splice(s,1),this.view.scene.remove(r)}}}class Fd extends Xl{constructor(){super(...arguments),this.controllers=[]}initialize(){this.add(Je(Nd)),this.add(Je(Ud)),document.addEventListener("mousemove",this.onPointerMove.bind(this)),window.addEventListener("resize",this.onWindowResize.bind(this))}onPointerMove(t){this.view.pointer.x=t.clientX/window.innerWidth*2-1,this.view.pointer.y=-(t.clientY/window.innerHeight)*2+1}onWindowResize(){this.view.camera.aspect=window.innerWidth/window.innerHeight,this.view.camera.updateProjectionMatrix(),this.view.renderer.setSize(window.innerWidth,window.innerHeight)}add(t){this.controllers.push(t),t.initialize()}}function zx(i){var t=this.constructor;return this.then(function(e){return t.resolve(i()).then(function(){return e})},function(e){return t.resolve(i()).then(function(){return t.reject(e)})})}function Vx(i){var t=this;return new t(function(e,n){if(!(i&&typeof i.length<"u"))return n(new TypeError(typeof i+" "+i+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(i);if(r.length===0)return e([]);var s=r.length;function a(h,l){if(l&&(typeof l=="object"||typeof l=="function")){var u=l.then;if(typeof u=="function"){u.call(l,function(c){a(h,c)},function(c){r[h]={status:"rejected",reason:c},--s===0&&e(r)});return}}r[h]={status:"fulfilled",value:l},--s===0&&e(r)}for(var o=0;o<r.length;o++)a(o,r[o])})}function Bd(i,t){this.name="AggregateError",this.errors=i,this.message=t||""}Bd.prototype=Error.prototype;function Xx(i){var t=this;return new t(function(e,n){if(!(i&&typeof i.length<"u"))return n(new TypeError("Promise.any accepts an array"));var r=Array.prototype.slice.call(i);if(r.length===0)return n();for(var s=[],a=0;a<r.length;a++)try{t.resolve(r[a]).then(e).catch(function(o){s.push(o),s.length===r.length&&n(new Bd(s,"All promises were rejected"))})}catch(o){n(o)}})}var Wx=setTimeout;function Gd(i){return!!(i&&typeof i.length<"u")}function Yx(){}function jx(i,t){return function(){i.apply(t,arguments)}}function pe(i){if(!(this instanceof pe))throw new TypeError("Promises must be constructed via new");if(typeof i!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],Hd(i,this)}function kd(i,t){for(;i._state===3;)i=i._value;if(i._state===0){i._deferreds.push(t);return}i._handled=!0,pe._immediateFn(function(){var e=i._state===1?t.onFulfilled:t.onRejected;if(e===null){(i._state===1?Vh:cs)(t.promise,i._value);return}var n;try{n=e(i._value)}catch(r){cs(t.promise,r);return}Vh(t.promise,n)})}function Vh(i,t){try{if(t===i)throw new TypeError("A promise cannot be resolved with itself.");if(t&&(typeof t=="object"||typeof t=="function")){var e=t.then;if(t instanceof pe){i._state=3,i._value=t,Xh(i);return}else if(typeof e=="function"){Hd(jx(e,t),i);return}}i._state=1,i._value=t,Xh(i)}catch(n){cs(i,n)}}function cs(i,t){i._state=2,i._value=t,Xh(i)}function Xh(i){i._state===2&&i._deferreds.length===0&&pe._immediateFn(function(){i._handled||pe._unhandledRejectionFn(i._value)});for(var t=0,e=i._deferreds.length;t<e;t++)kd(i,i._deferreds[t]);i._deferreds=null}function qx(i,t,e){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof t=="function"?t:null,this.promise=e}function Hd(i,t){var e=!1;try{i(function(n){e||(e=!0,Vh(t,n))},function(n){e||(e=!0,cs(t,n))})}catch(n){if(e)return;e=!0,cs(t,n)}}pe.prototype.catch=function(i){return this.then(null,i)};pe.prototype.then=function(i,t){var e=new this.constructor(Yx);return kd(this,new qx(i,t,e)),e};pe.prototype.finally=zx;pe.all=function(i){return new pe(function(t,e){if(!Gd(i))return e(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(i);if(n.length===0)return t([]);var r=n.length;function s(o,h){try{if(h&&(typeof h=="object"||typeof h=="function")){var l=h.then;if(typeof l=="function"){l.call(h,function(u){s(o,u)},e);return}}n[o]=h,--r===0&&t(n)}catch(u){e(u)}}for(var a=0;a<n.length;a++)s(a,n[a])})};pe.any=Xx;pe.allSettled=Vx;pe.resolve=function(i){return i&&typeof i=="object"&&i.constructor===pe?i:new pe(function(t){t(i)})};pe.reject=function(i){return new pe(function(t,e){e(i)})};pe.race=function(i){return new pe(function(t,e){if(!Gd(i))return e(new TypeError("Promise.race accepts an array"));for(var n=0,r=i.length;n<r;n++)pe.resolve(i[n]).then(t,e)})};pe._immediateFn=typeof setImmediate=="function"&&function(i){setImmediate(i)}||function(i){Wx(i,0)};pe._unhandledRejectionFn=function(t){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Fc=Object.getOwnPropertySymbols,$x=Object.prototype.hasOwnProperty,Jx=Object.prototype.propertyIsEnumerable;function Kx(i){if(i==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}function Zx(){try{if(!Object.assign)return!1;var i=new String("abc");if(i[5]="de",Object.getOwnPropertyNames(i)[0]==="5")return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;var n=Object.getOwnPropertyNames(t).map(function(s){return t[s]});if(n.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(s){r[s]=s}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Qx=Zx()?Object.assign:function(i,t){for(var e,n=Kx(i),r,s=1;s<arguments.length;s++){e=Object(arguments[s]);for(var a in e)$x.call(e,a)&&(n[a]=e[a]);if(Fc){r=Fc(e);for(var o=0;o<r.length;o++)Jx.call(e,r[o])&&(n[r[o]]=e[r[o]])}}return n};const tE=to(Qx);/*!
 * @pixi/polyfill - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */typeof globalThis>"u"&&(typeof self<"u"?self.globalThis=self:typeof global<"u"&&(global.globalThis=global));globalThis.Promise||(globalThis.Promise=pe);Object.assign||(Object.assign=tE);var eE=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(globalThis.performance&&globalThis.performance.now)){var nE=Date.now();globalThis.performance||(globalThis.performance={}),globalThis.performance.now=function(){return Date.now()-nE}}var eh=Date.now(),Bc=["ms","moz","webkit","o"];for(var nh=0;nh<Bc.length&&!globalThis.requestAnimationFrame;++nh){var ih=Bc[nh];globalThis.requestAnimationFrame=globalThis[ih+"RequestAnimationFrame"],globalThis.cancelAnimationFrame=globalThis[ih+"CancelAnimationFrame"]||globalThis[ih+"CancelRequestAnimationFrame"]}globalThis.requestAnimationFrame||(globalThis.requestAnimationFrame=function(i){if(typeof i!="function")throw new TypeError(i+"is not a function");var t=Date.now(),e=eE+eh-t;return e<0&&(e=0),eh=t,globalThis.self.setTimeout(function(){eh=Date.now(),i(performance.now())},e)});globalThis.cancelAnimationFrame||(globalThis.cancelAnimationFrame=function(i){return clearTimeout(i)});Math.sign||(Math.sign=function(t){return t=Number(t),t===0||isNaN(t)?t:t>0?1:-1});Number.isInteger||(Number.isInteger=function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t});globalThis.ArrayBuffer||(globalThis.ArrayBuffer=Array);globalThis.Float32Array||(globalThis.Float32Array=Array);globalThis.Uint32Array||(globalThis.Uint32Array=Array);globalThis.Uint16Array||(globalThis.Uint16Array=Array);globalThis.Uint8Array||(globalThis.Uint8Array=Array);globalThis.Int32Array||(globalThis.Int32Array=Array);/*!
 * @pixi/constants - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Wn;(function(i){i[i.WEBGL_LEGACY=0]="WEBGL_LEGACY",i[i.WEBGL=1]="WEBGL",i[i.WEBGL2=2]="WEBGL2"})(Wn||(Wn={}));var fs;(function(i){i[i.UNKNOWN=0]="UNKNOWN",i[i.WEBGL=1]="WEBGL",i[i.CANVAS=2]="CANVAS"})(fs||(fs={}));var za;(function(i){i[i.COLOR=16384]="COLOR",i[i.DEPTH=256]="DEPTH",i[i.STENCIL=1024]="STENCIL"})(za||(za={}));var Rt;(function(i){i[i.NORMAL=0]="NORMAL",i[i.ADD=1]="ADD",i[i.MULTIPLY=2]="MULTIPLY",i[i.SCREEN=3]="SCREEN",i[i.OVERLAY=4]="OVERLAY",i[i.DARKEN=5]="DARKEN",i[i.LIGHTEN=6]="LIGHTEN",i[i.COLOR_DODGE=7]="COLOR_DODGE",i[i.COLOR_BURN=8]="COLOR_BURN",i[i.HARD_LIGHT=9]="HARD_LIGHT",i[i.SOFT_LIGHT=10]="SOFT_LIGHT",i[i.DIFFERENCE=11]="DIFFERENCE",i[i.EXCLUSION=12]="EXCLUSION",i[i.HUE=13]="HUE",i[i.SATURATION=14]="SATURATION",i[i.COLOR=15]="COLOR",i[i.LUMINOSITY=16]="LUMINOSITY",i[i.NORMAL_NPM=17]="NORMAL_NPM",i[i.ADD_NPM=18]="ADD_NPM",i[i.SCREEN_NPM=19]="SCREEN_NPM",i[i.NONE=20]="NONE",i[i.SRC_OVER=0]="SRC_OVER",i[i.SRC_IN=21]="SRC_IN",i[i.SRC_OUT=22]="SRC_OUT",i[i.SRC_ATOP=23]="SRC_ATOP",i[i.DST_OVER=24]="DST_OVER",i[i.DST_IN=25]="DST_IN",i[i.DST_OUT=26]="DST_OUT",i[i.DST_ATOP=27]="DST_ATOP",i[i.ERASE=26]="ERASE",i[i.SUBTRACT=28]="SUBTRACT",i[i.XOR=29]="XOR"})(Rt||(Rt={}));var hn;(function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(hn||(hn={}));var it;(function(i){i[i.RGBA=6408]="RGBA",i[i.RGB=6407]="RGB",i[i.RG=33319]="RG",i[i.RED=6403]="RED",i[i.RGBA_INTEGER=36249]="RGBA_INTEGER",i[i.RGB_INTEGER=36248]="RGB_INTEGER",i[i.RG_INTEGER=33320]="RG_INTEGER",i[i.RED_INTEGER=36244]="RED_INTEGER",i[i.ALPHA=6406]="ALPHA",i[i.LUMINANCE=6409]="LUMINANCE",i[i.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",i[i.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",i[i.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(it||(it={}));var Hi;(function(i){i[i.TEXTURE_2D=3553]="TEXTURE_2D",i[i.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",i[i.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",i[i.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",i[i.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",i[i.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",i[i.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Hi||(Hi={}));var wt;(function(i){i[i.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",i[i.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",i[i.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",i[i.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",i[i.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",i[i.UNSIGNED_INT=5125]="UNSIGNED_INT",i[i.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",i[i.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",i[i.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",i[i.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",i[i.BYTE=5120]="BYTE",i[i.SHORT=5122]="SHORT",i[i.INT=5124]="INT",i[i.FLOAT=5126]="FLOAT",i[i.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",i[i.HALF_FLOAT=36193]="HALF_FLOAT"})(wt||(wt={}));var Va;(function(i){i[i.FLOAT=0]="FLOAT",i[i.INT=1]="INT",i[i.UINT=2]="UINT"})(Va||(Va={}));var En;(function(i){i[i.NEAREST=0]="NEAREST",i[i.LINEAR=1]="LINEAR"})(En||(En={}));var bn;(function(i){i[i.CLAMP=33071]="CLAMP",i[i.REPEAT=10497]="REPEAT",i[i.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(bn||(bn={}));var cn;(function(i){i[i.OFF=0]="OFF",i[i.POW2=1]="POW2",i[i.ON=2]="ON",i[i.ON_MANUAL=3]="ON_MANUAL"})(cn||(cn={}));var fn;(function(i){i[i.NPM=0]="NPM",i[i.UNPACK=1]="UNPACK",i[i.PMA=2]="PMA",i[i.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",i[i.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",i[i.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",i[i.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(fn||(fn={}));var sn;(function(i){i[i.NO=0]="NO",i[i.YES=1]="YES",i[i.AUTO=2]="AUTO",i[i.BLEND=0]="BLEND",i[i.CLEAR=1]="CLEAR",i[i.BLIT=2]="BLIT"})(sn||(sn={}));var Xa;(function(i){i[i.AUTO=0]="AUTO",i[i.MANUAL=1]="MANUAL"})(Xa||(Xa={}));var Ye;(function(i){i.LOW="lowp",i.MEDIUM="mediump",i.HIGH="highp"})(Ye||(Ye={}));var xe;(function(i){i[i.NONE=0]="NONE",i[i.SCISSOR=1]="SCISSOR",i[i.STENCIL=2]="STENCIL",i[i.SPRITE=3]="SPRITE",i[i.COLOR=4]="COLOR"})(xe||(xe={}));var Gc;(function(i){i[i.RED=1]="RED",i[i.GREEN=2]="GREEN",i[i.BLUE=4]="BLUE",i[i.ALPHA=8]="ALPHA"})(Gc||(Gc={}));var he;(function(i){i[i.NONE=0]="NONE",i[i.LOW=2]="LOW",i[i.MEDIUM=4]="MEDIUM",i[i.HIGH=8]="HIGH"})(he||(he={}));var Mn;(function(i){i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Mn||(Mn={}));/*!
 * @pixi/settings - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var iE={createCanvas:function(i,t){var e=document.createElement("canvas");return e.width=i,e.height=t,e},getWebGLRenderingContext:function(){return WebGLRenderingContext},getNavigator:function(){return navigator},getBaseUrl:function(){var i;return(i=document.baseURI)!==null&&i!==void 0?i:window.location.href},fetch:function(i,t){return fetch(i,t)}},rh=/iPhone/i,kc=/iPod/i,Hc=/iPad/i,zc=/\biOS-universal(?:.+)Mac\b/i,sh=/\bAndroid(?:.+)Mobile\b/i,Vc=/Android/i,fr=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,ra=/Silk/i,Fn=/Windows Phone/i,Xc=/\bWindows(?:.+)ARM\b/i,Wc=/BlackBerry/i,Yc=/BB10/i,jc=/Opera Mini/i,qc=/\b(CriOS|Chrome)(?:.+)Mobile/i,$c=/Mobile(?:.+)Firefox\b/i,Jc=function(i){return typeof i<"u"&&i.platform==="MacIntel"&&typeof i.maxTouchPoints=="number"&&i.maxTouchPoints>1&&typeof MSStream>"u"};function rE(i){return function(t){return t.test(i)}}function sE(i){var t={userAgent:"",platform:"",maxTouchPoints:0};!i&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof i=="string"?t.userAgent=i:i&&i.userAgent&&(t={userAgent:i.userAgent,platform:i.platform,maxTouchPoints:i.maxTouchPoints||0});var e=t.userAgent,n=e.split("[FBAN");typeof n[1]<"u"&&(e=n[0]),n=e.split("Twitter"),typeof n[1]<"u"&&(e=n[0]);var r=rE(e),s={apple:{phone:r(rh)&&!r(Fn),ipod:r(kc),tablet:!r(rh)&&(r(Hc)||Jc(t))&&!r(Fn),universal:r(zc),device:(r(rh)||r(kc)||r(Hc)||r(zc)||Jc(t))&&!r(Fn)},amazon:{phone:r(fr),tablet:!r(fr)&&r(ra),device:r(fr)||r(ra)},android:{phone:!r(Fn)&&r(fr)||!r(Fn)&&r(sh),tablet:!r(Fn)&&!r(fr)&&!r(sh)&&(r(ra)||r(Vc)),device:!r(Fn)&&(r(fr)||r(ra)||r(sh)||r(Vc))||r(/\bokhttp\b/i)},windows:{phone:r(Fn),tablet:r(Xc),device:r(Fn)||r(Xc)},other:{blackberry:r(Wc),blackberry10:r(Yc),opera:r(jc),firefox:r($c),chrome:r(qc),device:r(Wc)||r(Yc)||r(jc)||r($c)||r(qc)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}var Sn=sE(globalThis.navigator);function aE(){return!Sn.apple.device}function oE(i){var t=!0;if(Sn.tablet||Sn.phone){if(Sn.apple.device){var e=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(e){var n=parseInt(e[1],10);n<11&&(t=!1)}}if(Sn.android.device){var e=navigator.userAgent.match(/Android\s([0-9.]*)/);if(e){var n=parseInt(e[1],10);n<7&&(t=!1)}}}return t?i:4}var ct={ADAPTER:iE,MIPMAP_TEXTURES:cn.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:he.NONE,SPRITE_MAX_TEXTURES:oE(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:Xa.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:bn.CLAMP,SCALE_MODE:En.LINEAR,PRECISION_VERTEX:Ye.HIGH,PRECISION_FRAGMENT:Sn.apple.device?Ye.HIGH:Ye.MEDIUM,CAN_UPLOAD_SAME_BUFFER:aE(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},zd={exports:{}};(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(h,l,u){this.fn=h,this.context=l,this.once=u||!1}function s(h,l,u,c,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new r(u,c||h,f),m=e?e+l:l;return h._events[m]?h._events[m].fn?h._events[m]=[h._events[m],d]:h._events[m].push(d):(h._events[m]=d,h._eventsCount++),h}function a(h,l){--h._eventsCount===0?h._events=new n:delete h._events[l]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],u,c;if(this._eventsCount===0)return l;for(c in u=this._events)t.call(u,c)&&l.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},o.prototype.listeners=function(l){var u=e?e+l:l,c=this._events[u];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,d=c.length,m=new Array(d);f<d;f++)m[f]=c[f].fn;return m},o.prototype.listenerCount=function(l){var u=e?e+l:l,c=this._events[u];return c?c.fn?1:c.length:0},o.prototype.emit=function(l,u,c,f,d,m){var _=e?e+l:l;if(!this._events[_])return!1;var p=this._events[_],v=arguments.length,y,g;if(p.fn){switch(p.once&&this.removeListener(l,p.fn,void 0,!0),v){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,c),!0;case 4:return p.fn.call(p.context,u,c,f),!0;case 5:return p.fn.call(p.context,u,c,f,d),!0;case 6:return p.fn.call(p.context,u,c,f,d,m),!0}for(g=1,y=new Array(v-1);g<v;g++)y[g-1]=arguments[g];p.fn.apply(p.context,y)}else{var T=p.length,w;for(g=0;g<T;g++)switch(p[g].once&&this.removeListener(l,p[g].fn,void 0,!0),v){case 1:p[g].fn.call(p[g].context);break;case 2:p[g].fn.call(p[g].context,u);break;case 3:p[g].fn.call(p[g].context,u,c);break;case 4:p[g].fn.call(p[g].context,u,c,f);break;default:if(!y)for(w=1,y=new Array(v-1);w<v;w++)y[w-1]=arguments[w];p[g].fn.apply(p[g].context,y)}}return!0},o.prototype.on=function(l,u,c){return s(this,l,u,c,!1)},o.prototype.once=function(l,u,c){return s(this,l,u,c,!0)},o.prototype.removeListener=function(l,u,c,f){var d=e?e+l:l;if(!this._events[d])return this;if(!u)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===u&&(!f||m.once)&&(!c||m.context===c)&&a(this,d);else{for(var _=0,p=[],v=m.length;_<v;_++)(m[_].fn!==u||f&&!m[_].once||c&&m[_].context!==c)&&p.push(m[_]);p.length?this._events[d]=p.length===1?p[0]:p:a(this,d)}return this},o.prototype.removeAllListeners=function(l){var u;return l?(u=e?e+l:l,this._events[u]&&a(this,u)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=e,o.EventEmitter=o,i.exports=o})(zd);var hE=zd.exports;const As=to(hE);var Wl={exports:{}};Wl.exports=so;Wl.exports.default=so;function so(i,t,e){e=e||2;var n=t&&t.length,r=n?t[0]*e:i.length,s=Vd(i,0,r,e,!0),a=[];if(!s||s.next===s.prev)return a;var o,h,l,u,c,f,d;if(n&&(s=dE(i,t,s,e)),i.length>80*e){o=l=i[0],h=u=i[1];for(var m=e;m<r;m+=e)c=i[m],f=i[m+1],c<o&&(o=c),f<h&&(h=f),c>l&&(l=c),f>u&&(u=f);d=Math.max(l-o,u-h),d=d!==0?32767/d:0}return ds(s,a,e,o,h,d,0),a}function Vd(i,t,e,n,r){var s,a;if(r===jh(i,t,e,n)>0)for(s=t;s<e;s+=n)a=Kc(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=Kc(s,i[s],i[s+1],a);return a&&ao(a,a.next)&&(ms(a),a=a.next),a}function Wi(i,t){if(!i)return i;t||(t=i);var e=i,n;do if(n=!1,!e.steiner&&(ao(e,e.next)||fe(e.prev,e,e.next)===0)){if(ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ds(i,t,e,n,r,s,a){if(i){!a&&s&&gE(i,n,r,s);for(var o=i,h,l;i.prev!==i.next;){if(h=i.prev,l=i.next,s?uE(i,n,r,s):lE(i)){t.push(h.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ms(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=cE(Wi(i),t,e),ds(i,t,e,n,r,s,2)):a===2&&fE(i,t,e,n,r,s):ds(Wi(i),t,e,n,r,s,1);break}}}}function lE(i){var t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;for(var r=t.x,s=e.x,a=n.x,o=t.y,h=e.y,l=n.y,u=r<s?r<a?r:a:s<a?s:a,c=o<h?o<l?o:l:h<l?h:l,f=r>s?r>a?r:a:s>a?s:a,d=o>h?o>l?o:l:h>l?h:l,m=n.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=c&&m.y<=d&&_r(r,o,s,h,a,l,m.x,m.y)&&fe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function uE(i,t,e,n){var r=i.prev,s=i,a=i.next;if(fe(r,s,a)>=0)return!1;for(var o=r.x,h=s.x,l=a.x,u=r.y,c=s.y,f=a.y,d=o<h?o<l?o:l:h<l?h:l,m=u<c?u<f?u:f:c<f?c:f,_=o>h?o>l?o:l:h>l?h:l,p=u>c?u>f?u:f:c>f?c:f,v=Wh(d,m,t,e,n),y=Wh(_,p,t,e,n),g=i.prevZ,T=i.nextZ;g&&g.z>=v&&T&&T.z<=y;){if(g.x>=d&&g.x<=_&&g.y>=m&&g.y<=p&&g!==r&&g!==a&&_r(o,u,h,c,l,f,g.x,g.y)&&fe(g.prev,g,g.next)>=0||(g=g.prevZ,T.x>=d&&T.x<=_&&T.y>=m&&T.y<=p&&T!==r&&T!==a&&_r(o,u,h,c,l,f,T.x,T.y)&&fe(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;g&&g.z>=v;){if(g.x>=d&&g.x<=_&&g.y>=m&&g.y<=p&&g!==r&&g!==a&&_r(o,u,h,c,l,f,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;T&&T.z<=y;){if(T.x>=d&&T.x<=_&&T.y>=m&&T.y<=p&&T!==r&&T!==a&&_r(o,u,h,c,l,f,T.x,T.y)&&fe(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function cE(i,t,e){var n=i;do{var r=n.prev,s=n.next.next;!ao(r,s)&&Xd(r,n,n.next,s)&&ps(r,s)&&ps(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ms(n),ms(n.next),n=i=s),n=n.next}while(n!==i);return Wi(n)}function fE(i,t,e,n,r,s){var a=i;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&EE(a,o)){var h=Wd(a,o);a=Wi(a,a.next),h=Wi(h,h.next),ds(a,t,e,n,r,s,0),ds(h,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function dE(i,t,e,n){var r=[],s,a,o,h,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,h=s<a-1?t[s+1]*n:i.length,l=Vd(i,o,h,n,!1),l===l.next&&(l.steiner=!0),r.push(xE(l));for(r.sort(pE),s=0;s<r.length;s++)e=mE(r[s],e);return e}function pE(i,t){return i.x-t.x}function mE(i,t){var e=vE(i,t);if(!e)return t;var n=Wd(e,i);return Wi(n,n.next),Wi(e,e.next)}function vE(i,t){var e=t,n=i.x,r=i.y,s=-1/0,a;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){var o=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(o<=n&&o>s&&(s=o,a=e.x<e.next.x?e:e.next,o===n))return a}e=e.next}while(e!==t);if(!a)return null;var h=a,l=a.x,u=a.y,c=1/0,f;e=a;do n>=e.x&&e.x>=l&&n!==e.x&&_r(r<u?n:s,r,l,u,r<u?s:n,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(n-e.x),ps(e,i)&&(f<c||f===c&&(e.x>a.x||e.x===a.x&&_E(a,e)))&&(a=e,c=f)),e=e.next;while(e!==h);return a}function _E(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function gE(i,t,e,n){var r=i;do r.z===0&&(r.z=Wh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,yE(r)}function yE(i){var t,e,n,r,s,a,o,h,l=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(h=l;o>0||h>0&&n;)o!==0&&(h===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,h--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(a>1);return i}function Wh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xE(i){var t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _r(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function EE(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!SE(i,t)&&(ps(i,t)&&ps(t,i)&&TE(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||ao(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ao(i,t){return i.x===t.x&&i.y===t.y}function Xd(i,t,e,n){var r=aa(fe(i,t,e)),s=aa(fe(i,t,n)),a=aa(fe(e,n,i)),o=aa(fe(e,n,t));return!!(r!==s&&a!==o||r===0&&sa(i,e,t)||s===0&&sa(i,n,t)||a===0&&sa(e,i,n)||o===0&&sa(e,t,n))}function sa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function aa(i){return i>0?1:i<0?-1:0}function SE(i,t){var e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ps(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function TE(i,t){var e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wd(i,t){var e=new Yh(i.i,i.x,i.y),n=new Yh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Kc(i,t,e,n){var r=new Yh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}so.deviation=function(i,t,e,n){var r=t&&t.length,s=r?t[0]*e:i.length,a=Math.abs(jh(i,0,s,e));if(r)for(var o=0,h=t.length;o<h;o++){var l=t[o]*e,u=o<h-1?t[o+1]*e:i.length;a-=Math.abs(jh(i,l,u,e))}var c=0;for(o=0;o<n.length;o+=3){var f=n[o]*e,d=n[o+1]*e,m=n[o+2]*e;c+=Math.abs((i[f]-i[m])*(i[d+1]-i[f+1])-(i[f]-i[d])*(i[m+1]-i[f+1]))}return a===0&&c===0?0:Math.abs((c-a)/a)};function jh(i,t,e,n){for(var r=0,s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}so.flatten=function(i){for(var t=i[0][0].length,e={vertices:[],holes:[],dimensions:t},n=0,r=0;r<i.length;r++){for(var s=0;s<i[r].length;s++)for(var a=0;a<t;a++)e.vertices.push(i[r][s][a]);r>0&&(n+=i[r-1].length,e.holes.push(n))}return e};var bE=Wl.exports;const Yd=to(bE);var Wa={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */Wa.exports;(function(i,t){(function(e){var n=t&&!t.nodeType&&t,r=i&&!i.nodeType&&i,s=typeof mo=="object"&&mo;(s.global===s||s.window===s||s.self===s)&&(e=s);var a,o=2147483647,h=36,l=1,u=26,c=38,f=700,d=72,m=128,_="-",p=/^xn--/,v=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,g={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},T=h-l,w=Math.floor,b=String.fromCharCode,M;function I(B){throw RangeError(g[B])}function E(B,V){for(var ht=B.length,mt=[];ht--;)mt[ht]=V(B[ht]);return mt}function x(B,V){var ht=B.split("@"),mt="";ht.length>1&&(mt=ht[0]+"@",B=ht[1]),B=B.replace(y,".");var k=B.split("."),K=E(k,V).join(".");return mt+K}function O(B){for(var V=[],ht=0,mt=B.length,k,K;ht<mt;)k=B.charCodeAt(ht++),k>=55296&&k<=56319&&ht<mt?(K=B.charCodeAt(ht++),(K&64512)==56320?V.push(((k&1023)<<10)+(K&1023)+65536):(V.push(k),ht--)):V.push(k);return V}function N(B){return E(B,function(V){var ht="";return V>65535&&(V-=65536,ht+=b(V>>>10&1023|55296),V=56320|V&1023),ht+=b(V),ht}).join("")}function P(B){return B-48<10?B-22:B-65<26?B-65:B-97<26?B-97:h}function H(B,V){return B+22+75*(B<26)-((V!=0)<<5)}function L(B,V,ht){var mt=0;for(B=ht?w(B/f):B>>1,B+=w(B/V);B>T*u>>1;mt+=h)B=w(B/T);return w(mt+(T+1)*B/(B+c))}function G(B){var V=[],ht=B.length,mt,k=0,K=m,nt=d,tt,vt,yt,Et,U,dt,ut,Tt,_t;for(tt=B.lastIndexOf(_),tt<0&&(tt=0),vt=0;vt<tt;++vt)B.charCodeAt(vt)>=128&&I("not-basic"),V.push(B.charCodeAt(vt));for(yt=tt>0?tt+1:0;yt<ht;){for(Et=k,U=1,dt=h;yt>=ht&&I("invalid-input"),ut=P(B.charCodeAt(yt++)),(ut>=h||ut>w((o-k)/U))&&I("overflow"),k+=ut*U,Tt=dt<=nt?l:dt>=nt+u?u:dt-nt,!(ut<Tt);dt+=h)_t=h-Tt,U>w(o/_t)&&I("overflow"),U*=_t;mt=V.length+1,nt=L(k-Et,mt,Et==0),w(k/mt)>o-K&&I("overflow"),K+=w(k/mt),k%=mt,V.splice(k++,0,K)}return N(V)}function q(B){var V,ht,mt,k,K,nt,tt,vt,yt,Et,U,dt=[],ut,Tt,_t,Nt;for(B=O(B),ut=B.length,V=m,ht=0,K=d,nt=0;nt<ut;++nt)U=B[nt],U<128&&dt.push(b(U));for(mt=k=dt.length,k&&dt.push(_);mt<ut;){for(tt=o,nt=0;nt<ut;++nt)U=B[nt],U>=V&&U<tt&&(tt=U);for(Tt=mt+1,tt-V>w((o-ht)/Tt)&&I("overflow"),ht+=(tt-V)*Tt,V=tt,nt=0;nt<ut;++nt)if(U=B[nt],U<V&&++ht>o&&I("overflow"),U==V){for(vt=ht,yt=h;Et=yt<=K?l:yt>=K+u?u:yt-K,!(vt<Et);yt+=h)Nt=vt-Et,_t=h-Et,dt.push(b(H(Et+Nt%_t,0))),vt=w(Nt/_t);dt.push(b(H(vt,0))),K=L(ht,Tt,mt==k),ht=0,++mt}++ht,++V}return dt.join("")}function z(B){return x(B,function(V){return p.test(V)?G(V.slice(4).toLowerCase()):V})}function $(B){return x(B,function(V){return v.test(V)?"xn--"+q(V):V})}if(a={version:"1.3.2",ucs2:{decode:O,encode:N},decode:G,encode:q,toASCII:$,toUnicode:z},n&&r)if(i.exports==n)r.exports=a;else for(M in a)a.hasOwnProperty(M)&&(n[M]=a[M]);else e.punycode=a})(mo)})(Wa,Wa.exports);var ME=Wa.exports,wE={isString:function(i){return typeof i=="string"},isObject:function(i){return typeof i=="object"&&i!==null},isNull:function(i){return i===null},isNullOrUndefined:function(i){return i==null}},vs={};function AE(i,t){return Object.prototype.hasOwnProperty.call(i,t)}var RE=function(i,t,e,n){t=t||"&",e=e||"=";var r={};if(typeof i!="string"||i.length===0)return r;var s=/\+/g;i=i.split(t);var a=1e3;n&&typeof n.maxKeys=="number"&&(a=n.maxKeys);var o=i.length;a>0&&o>a&&(o=a);for(var h=0;h<o;++h){var l=i[h].replace(s,"%20"),u=l.indexOf(e),c,f,d,m;u>=0?(c=l.substr(0,u),f=l.substr(u+1)):(c=l,f=""),d=decodeURIComponent(c),m=decodeURIComponent(f),AE(r,d)?Array.isArray(r[d])?r[d].push(m):r[d]=[r[d],m]:r[d]=m}return r},Yr=function(i){switch(typeof i){case"string":return i;case"boolean":return i?"true":"false";case"number":return isFinite(i)?i:"";default:return""}},CE=function(i,t,e,n){return t=t||"&",e=e||"=",i===null&&(i=void 0),typeof i=="object"?Object.keys(i).map(function(r){var s=encodeURIComponent(Yr(r))+e;return Array.isArray(i[r])?i[r].map(function(a){return s+encodeURIComponent(Yr(a))}).join(t):s+encodeURIComponent(Yr(i[r]))}).join(t):n?encodeURIComponent(Yr(n))+e+encodeURIComponent(Yr(i)):""};vs.decode=vs.parse=RE;vs.encode=vs.stringify=CE;var PE=ME,gn=wE,IE=oo,OE=VE,DE=zE;function ln(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var LE=/^([a-z0-9.+-]+:)/i,NE=/:[0-9]*$/,UE=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,FE=["<",">",'"',"`"," ","\r",`
`,"	"],BE=["{","}","|","\\","^","`"].concat(FE),qh=["'"].concat(BE),Zc=["%","/","?",";","#"].concat(qh),Qc=["/","?","#"],GE=255,tf=/^[+a-z0-9A-Z_-]{0,63}$/,kE=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,HE={javascript:!0,"javascript:":!0},$h={javascript:!0,"javascript:":!0},Mr={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Jh=vs;function oo(i,t,e){if(i&&gn.isObject(i)&&i instanceof ln)return i;var n=new ln;return n.parse(i,t,e),n}ln.prototype.parse=function(i,t,e){if(!gn.isString(i))throw new TypeError("Parameter 'url' must be a string, not "+typeof i);var n=i.indexOf("?"),r=n!==-1&&n<i.indexOf("#")?"?":"#",s=i.split(r),a=/\\/g;s[0]=s[0].replace(a,"/"),i=s.join(r);var o=i;if(o=o.trim(),!e&&i.split("#").length===1){var h=UE.exec(o);if(h)return this.path=o,this.href=o,this.pathname=h[1],h[2]?(this.search=h[2],t?this.query=Jh.parse(this.search.substr(1)):this.query=this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=LE.exec(o);if(l){l=l[0];var u=l.toLowerCase();this.protocol=u,o=o.substr(l.length)}if(e||l||o.match(/^\/\/[^@\/]+@[^@\/]+/)){var c=o.substr(0,2)==="//";c&&!(l&&$h[l])&&(o=o.substr(2),this.slashes=!0)}if(!$h[l]&&(c||l&&!Mr[l])){for(var f=-1,d=0;d<Qc.length;d++){var m=o.indexOf(Qc[d]);m!==-1&&(f===-1||m<f)&&(f=m)}var _,p;f===-1?p=o.lastIndexOf("@"):p=o.lastIndexOf("@",f),p!==-1&&(_=o.slice(0,p),o=o.slice(p+1),this.auth=decodeURIComponent(_)),f=-1;for(var d=0;d<Zc.length;d++){var m=o.indexOf(Zc[d]);m!==-1&&(f===-1||m<f)&&(f=m)}f===-1&&(f=o.length),this.host=o.slice(0,f),o=o.slice(f),this.parseHost(),this.hostname=this.hostname||"";var v=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!v)for(var y=this.hostname.split(/\./),d=0,g=y.length;d<g;d++){var T=y[d];if(T&&!T.match(tf)){for(var w="",b=0,M=T.length;b<M;b++)T.charCodeAt(b)>127?w+="x":w+=T[b];if(!w.match(tf)){var I=y.slice(0,d),E=y.slice(d+1),x=T.match(kE);x&&(I.push(x[1]),E.unshift(x[2])),E.length&&(o="/"+E.join(".")+o),this.hostname=I.join(".");break}}}this.hostname.length>GE?this.hostname="":this.hostname=this.hostname.toLowerCase(),v||(this.hostname=PE.toASCII(this.hostname));var O=this.port?":"+this.port:"",N=this.hostname||"";this.host=N+O,this.href+=this.host,v&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),o[0]!=="/"&&(o="/"+o))}if(!HE[u])for(var d=0,g=qh.length;d<g;d++){var P=qh[d];if(o.indexOf(P)!==-1){var H=encodeURIComponent(P);H===P&&(H=escape(P)),o=o.split(P).join(H)}}var L=o.indexOf("#");L!==-1&&(this.hash=o.substr(L),o=o.slice(0,L));var G=o.indexOf("?");if(G!==-1?(this.search=o.substr(G),this.query=o.substr(G+1),t&&(this.query=Jh.parse(this.query)),o=o.slice(0,G)):t&&(this.search="",this.query={}),o&&(this.pathname=o),Mr[u]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var O=this.pathname||"",q=this.search||"";this.path=O+q}return this.href=this.format(),this};function zE(i){return gn.isString(i)&&(i=oo(i)),i instanceof ln?i.format():ln.prototype.format.call(i)}ln.prototype.format=function(){var i=this.auth||"";i&&(i=encodeURIComponent(i),i=i.replace(/%3A/i,":"),i+="@");var t=this.protocol||"",e=this.pathname||"",n=this.hash||"",r=!1,s="";this.host?r=i+this.host:this.hostname&&(r=i+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&gn.isObject(this.query)&&Object.keys(this.query).length&&(s=Jh.stringify(this.query));var a=this.search||s&&"?"+s||"";return t&&t.substr(-1)!==":"&&(t+=":"),this.slashes||(!t||Mr[t])&&r!==!1?(r="//"+(r||""),e&&e.charAt(0)!=="/"&&(e="/"+e)):r||(r=""),n&&n.charAt(0)!=="#"&&(n="#"+n),a&&a.charAt(0)!=="?"&&(a="?"+a),e=e.replace(/[?#]/g,function(o){return encodeURIComponent(o)}),a=a.replace("#","%23"),t+r+e+a+n};function VE(i,t){return oo(i,!1,!0).resolve(t)}ln.prototype.resolve=function(i){return this.resolveObject(oo(i,!1,!0)).format()};ln.prototype.resolveObject=function(i){if(gn.isString(i)){var t=new ln;t.parse(i,!1,!0),i=t}for(var e=new ln,n=Object.keys(this),r=0;r<n.length;r++){var s=n[r];e[s]=this[s]}if(e.hash=i.hash,i.href==="")return e.href=e.format(),e;if(i.slashes&&!i.protocol){for(var a=Object.keys(i),o=0;o<a.length;o++){var h=a[o];h!=="protocol"&&(e[h]=i[h])}return Mr[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e}if(i.protocol&&i.protocol!==e.protocol){if(!Mr[i.protocol]){for(var l=Object.keys(i),u=0;u<l.length;u++){var c=l[u];e[c]=i[c]}return e.href=e.format(),e}if(e.protocol=i.protocol,!i.host&&!$h[i.protocol]){for(var g=(i.pathname||"").split("/");g.length&&!(i.host=g.shift()););i.host||(i.host=""),i.hostname||(i.hostname=""),g[0]!==""&&g.unshift(""),g.length<2&&g.unshift(""),e.pathname=g.join("/")}else e.pathname=i.pathname;if(e.search=i.search,e.query=i.query,e.host=i.host||"",e.auth=i.auth,e.hostname=i.hostname||i.host,e.port=i.port,e.pathname||e.search){var f=e.pathname||"",d=e.search||"";e.path=f+d}return e.slashes=e.slashes||i.slashes,e.href=e.format(),e}var m=e.pathname&&e.pathname.charAt(0)==="/",_=i.host||i.pathname&&i.pathname.charAt(0)==="/",p=_||m||e.host&&i.pathname,v=p,y=e.pathname&&e.pathname.split("/")||[],g=i.pathname&&i.pathname.split("/")||[],T=e.protocol&&!Mr[e.protocol];if(T&&(e.hostname="",e.port=null,e.host&&(y[0]===""?y[0]=e.host:y.unshift(e.host)),e.host="",i.protocol&&(i.hostname=null,i.port=null,i.host&&(g[0]===""?g[0]=i.host:g.unshift(i.host)),i.host=null),p=p&&(g[0]===""||y[0]==="")),_)e.host=i.host||i.host===""?i.host:e.host,e.hostname=i.hostname||i.hostname===""?i.hostname:e.hostname,e.search=i.search,e.query=i.query,y=g;else if(g.length)y||(y=[]),y.pop(),y=y.concat(g),e.search=i.search,e.query=i.query;else if(!gn.isNullOrUndefined(i.search)){if(T){e.hostname=e.host=y.shift();var w=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;w&&(e.auth=w.shift(),e.host=e.hostname=w.shift())}return e.search=i.search,e.query=i.query,(!gn.isNull(e.pathname)||!gn.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!y.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var b=y.slice(-1)[0],M=(e.host||i.host||y.length>1)&&(b==="."||b==="..")||b==="",I=0,E=y.length;E>=0;E--)b=y[E],b==="."?y.splice(E,1):b===".."?(y.splice(E,1),I++):I&&(y.splice(E,1),I--);if(!p&&!v)for(;I--;I)y.unshift("..");p&&y[0]!==""&&(!y[0]||y[0].charAt(0)!=="/")&&y.unshift(""),M&&y.join("/").substr(-1)!=="/"&&y.push("");var x=y[0]===""||y[0]&&y[0].charAt(0)==="/";if(T){e.hostname=e.host=x?"":y.length?y.shift():"";var w=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;w&&(e.auth=w.shift(),e.host=e.hostname=w.shift())}return p=p||e.host&&y.length,p&&!x&&y.unshift(""),y.length?e.pathname=y.join("/"):(e.pathname=null,e.path=null),(!gn.isNull(e.pathname)||!gn.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=i.auth||e.auth,e.slashes=e.slashes||i.slashes,e.href=e.format(),e};ln.prototype.parseHost=function(){var i=this.host,t=NE.exec(i);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),i=i.substr(0,i.length-t.length)),i&&(this.hostname=i)};/*!
 * @pixi/utils - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var gr={parse:IE,format:DE,resolve:OE};ct.RETINA_PREFIX=/@([0-9\.]+)x/;ct.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var ef=!1,nf="6.5.9";function XE(i){var t;if(!ef){if(ct.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){var e=[`
 %c %c %c PixiJS `+nf+" - ✰ "+i+` ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(t=globalThis.console).log.apply(t,e)}else globalThis.console&&globalThis.console.log("PixiJS "+nf+" - "+i+" - http://www.pixijs.com/");ef=!0}}var ah;function WE(){return typeof ah>"u"&&(ah=function(){var t={stencil:!0,failIfMajorPerformanceCaveat:ct.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!ct.ADAPTER.getWebGLRenderingContext())return!1;var e=ct.ADAPTER.createCanvas(),n=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),r=!!(n&&n.getContextAttributes().stencil);if(n){var s=n.getExtension("WEBGL_lose_context");s&&s.loseContext()}return n=null,r}catch{return!1}}()),ah}var YE="#f0f8ff",jE="#faebd7",qE="#00ffff",$E="#7fffd4",JE="#f0ffff",KE="#f5f5dc",ZE="#ffe4c4",QE="#000000",tS="#ffebcd",eS="#0000ff",nS="#8a2be2",iS="#a52a2a",rS="#deb887",sS="#5f9ea0",aS="#7fff00",oS="#d2691e",hS="#ff7f50",lS="#6495ed",uS="#fff8dc",cS="#dc143c",fS="#00ffff",dS="#00008b",pS="#008b8b",mS="#b8860b",vS="#a9a9a9",_S="#006400",gS="#a9a9a9",yS="#bdb76b",xS="#8b008b",ES="#556b2f",SS="#ff8c00",TS="#9932cc",bS="#8b0000",MS="#e9967a",wS="#8fbc8f",AS="#483d8b",RS="#2f4f4f",CS="#2f4f4f",PS="#00ced1",IS="#9400d3",OS="#ff1493",DS="#00bfff",LS="#696969",NS="#696969",US="#1e90ff",FS="#b22222",BS="#fffaf0",GS="#228b22",kS="#ff00ff",HS="#dcdcdc",zS="#f8f8ff",VS="#daa520",XS="#ffd700",WS="#808080",YS="#008000",jS="#adff2f",qS="#808080",$S="#f0fff0",JS="#ff69b4",KS="#cd5c5c",ZS="#4b0082",QS="#fffff0",tT="#f0e68c",eT="#fff0f5",nT="#e6e6fa",iT="#7cfc00",rT="#fffacd",sT="#add8e6",aT="#f08080",oT="#e0ffff",hT="#fafad2",lT="#d3d3d3",uT="#90ee90",cT="#d3d3d3",fT="#ffb6c1",dT="#ffa07a",pT="#20b2aa",mT="#87cefa",vT="#778899",_T="#778899",gT="#b0c4de",yT="#ffffe0",xT="#00ff00",ET="#32cd32",ST="#faf0e6",TT="#ff00ff",bT="#800000",MT="#66cdaa",wT="#0000cd",AT="#ba55d3",RT="#9370db",CT="#3cb371",PT="#7b68ee",IT="#00fa9a",OT="#48d1cc",DT="#c71585",LT="#191970",NT="#f5fffa",UT="#ffe4e1",FT="#ffe4b5",BT="#ffdead",GT="#000080",kT="#fdf5e6",HT="#808000",zT="#6b8e23",VT="#ffa500",XT="#ff4500",WT="#da70d6",YT="#eee8aa",jT="#98fb98",qT="#afeeee",$T="#db7093",JT="#ffefd5",KT="#ffdab9",ZT="#cd853f",QT="#ffc0cb",tb="#dda0dd",eb="#b0e0e6",nb="#800080",ib="#663399",rb="#ff0000",sb="#bc8f8f",ab="#4169e1",ob="#8b4513",hb="#fa8072",lb="#f4a460",ub="#2e8b57",cb="#fff5ee",fb="#a0522d",db="#c0c0c0",pb="#87ceeb",mb="#6a5acd",vb="#708090",_b="#708090",gb="#fffafa",yb="#00ff7f",xb="#4682b4",Eb="#d2b48c",Sb="#008080",Tb="#d8bfd8",bb="#ff6347",Mb="#40e0d0",wb="#ee82ee",Ab="#f5deb3",Rb="#ffffff",Cb="#f5f5f5",Pb="#ffff00",Ib="#9acd32",Ob={aliceblue:YE,antiquewhite:jE,aqua:qE,aquamarine:$E,azure:JE,beige:KE,bisque:ZE,black:QE,blanchedalmond:tS,blue:eS,blueviolet:nS,brown:iS,burlywood:rS,cadetblue:sS,chartreuse:aS,chocolate:oS,coral:hS,cornflowerblue:lS,cornsilk:uS,crimson:cS,cyan:fS,darkblue:dS,darkcyan:pS,darkgoldenrod:mS,darkgray:vS,darkgreen:_S,darkgrey:gS,darkkhaki:yS,darkmagenta:xS,darkolivegreen:ES,darkorange:SS,darkorchid:TS,darkred:bS,darksalmon:MS,darkseagreen:wS,darkslateblue:AS,darkslategray:RS,darkslategrey:CS,darkturquoise:PS,darkviolet:IS,deeppink:OS,deepskyblue:DS,dimgray:LS,dimgrey:NS,dodgerblue:US,firebrick:FS,floralwhite:BS,forestgreen:GS,fuchsia:kS,gainsboro:HS,ghostwhite:zS,goldenrod:VS,gold:XS,gray:WS,green:YS,greenyellow:jS,grey:qS,honeydew:$S,hotpink:JS,indianred:KS,indigo:ZS,ivory:QS,khaki:tT,lavenderblush:eT,lavender:nT,lawngreen:iT,lemonchiffon:rT,lightblue:sT,lightcoral:aT,lightcyan:oT,lightgoldenrodyellow:hT,lightgray:lT,lightgreen:uT,lightgrey:cT,lightpink:fT,lightsalmon:dT,lightseagreen:pT,lightskyblue:mT,lightslategray:vT,lightslategrey:_T,lightsteelblue:gT,lightyellow:yT,lime:xT,limegreen:ET,linen:ST,magenta:TT,maroon:bT,mediumaquamarine:MT,mediumblue:wT,mediumorchid:AT,mediumpurple:RT,mediumseagreen:CT,mediumslateblue:PT,mediumspringgreen:IT,mediumturquoise:OT,mediumvioletred:DT,midnightblue:LT,mintcream:NT,mistyrose:UT,moccasin:FT,navajowhite:BT,navy:GT,oldlace:kT,olive:HT,olivedrab:zT,orange:VT,orangered:XT,orchid:WT,palegoldenrod:YT,palegreen:jT,paleturquoise:qT,palevioletred:$T,papayawhip:JT,peachpuff:KT,peru:ZT,pink:QT,plum:tb,powderblue:eb,purple:nb,rebeccapurple:ib,red:rb,rosybrown:sb,royalblue:ab,saddlebrown:ob,salmon:hb,sandybrown:lb,seagreen:ub,seashell:cb,sienna:fb,silver:db,skyblue:pb,slateblue:mb,slategray:vb,slategrey:_b,snow:gb,springgreen:yb,steelblue:xb,tan:Eb,teal:Sb,thistle:Tb,tomato:bb,turquoise:Mb,violet:wb,wheat:Ab,white:Rb,whitesmoke:Cb,yellow:Pb,yellowgreen:Ib};function Dr(i,t){return t===void 0&&(t=[]),t[0]=(i>>16&255)/255,t[1]=(i>>8&255)/255,t[2]=(i&255)/255,t}function jd(i){var t=i.toString(16);return t="000000".substring(0,6-t.length)+t,"#"+t}function qd(i){return typeof i=="string"&&(i=Ob[i.toLowerCase()]||i,i[0]==="#"&&(i=i.slice(1))),parseInt(i,16)}function Db(){for(var i=[],t=[],e=0;e<32;e++)i[e]=e,t[e]=e;i[Rt.NORMAL_NPM]=Rt.NORMAL,i[Rt.ADD_NPM]=Rt.ADD,i[Rt.SCREEN_NPM]=Rt.SCREEN,t[Rt.NORMAL]=Rt.NORMAL_NPM,t[Rt.ADD]=Rt.ADD_NPM,t[Rt.SCREEN]=Rt.SCREEN_NPM;var n=[];return n.push(t),n.push(i),n}var $d=Db();function Jd(i,t){return $d[t?1:0][i]}function Lb(i,t,e,n){return e=e||new Float32Array(4),n||n===void 0?(e[0]=i[0]*t,e[1]=i[1]*t,e[2]=i[2]*t):(e[0]=i[0],e[1]=i[1],e[2]=i[2]),e[3]=t,e}function Yl(i,t){if(t===1)return(t*255<<24)+i;if(t===0)return 0;var e=i>>16&255,n=i>>8&255,r=i&255;return e=e*t+.5|0,n=n*t+.5|0,r=r*t+.5|0,(t*255<<24)+(e<<16)+(n<<8)+r}function Kd(i,t,e,n){return e=e||new Float32Array(4),e[0]=(i>>16&255)/255,e[1]=(i>>8&255)/255,e[2]=(i&255)/255,(n||n===void 0)&&(e[0]*=t,e[1]*=t,e[2]*=t),e[3]=t,e}function Nb(i,t){t===void 0&&(t=null);var e=i*6;if(t=t||new Uint16Array(e),t.length!==e)throw new Error("Out buffer length is incorrect, got "+t.length+" and expected "+e);for(var n=0,r=0;n<e;n+=6,r+=4)t[n+0]=r+0,t[n+1]=r+1,t[n+2]=r+2,t[n+3]=r+0,t[n+4]=r+2,t[n+5]=r+3;return t}function Zd(i){if(i.BYTES_PER_ELEMENT===4)return i instanceof Float32Array?"Float32Array":i instanceof Uint32Array?"Uint32Array":"Int32Array";if(i.BYTES_PER_ELEMENT===2){if(i instanceof Uint16Array)return"Uint16Array"}else if(i.BYTES_PER_ELEMENT===1&&i instanceof Uint8Array)return"Uint8Array";return null}function Ya(i){return i+=i===0?1:0,--i,i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i+1}function rf(i){return!(i&i-1)&&!!i}function sf(i){var t=(i>65535?1:0)<<4;i>>>=t;var e=(i>255?1:0)<<3;return i>>>=e,t|=e,e=(i>15?1:0)<<2,i>>>=e,t|=e,e=(i>3?1:0)<<1,i>>>=e,t|=e,t|i>>1}function wr(i,t,e){var n=i.length,r;if(!(t>=n||e===0)){e=t+e>n?n-t:e;var s=n-e;for(r=t;r<s;++r)i[r]=i[r+e];i.length=s}}function yr(i){return i===0?0:i<0?-1:1}var Ub=0;function Yi(){return++Ub}var af={};function un(i,t,e){if(e===void 0&&(e=3),!af[t]){var n=new Error().stack;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",t+`
Deprecated since v`+i):(n=n.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",t+`
Deprecated since v`+i),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",t+`
Deprecated since v`+i),console.warn(n))),af[t]=!0}}var of={},kn=Object.create(null),Mi=Object.create(null),hf=function(){function i(t,e,n){this.canvas=ct.ADAPTER.createCanvas(),this.context=this.canvas.getContext("2d"),this.resolution=n||ct.RESOLUTION,this.resize(t,e)}return i.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},i.prototype.resize=function(t,e){this.canvas.width=Math.round(t*this.resolution),this.canvas.height=Math.round(e*this.resolution)},i.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(i.prototype,"width",{get:function(){return this.canvas.width},set:function(t){this.canvas.width=Math.round(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"height",{get:function(){return this.canvas.height},set:function(t){this.canvas.height=Math.round(t)},enumerable:!1,configurable:!0}),i}();function Fb(i){var t=i.width,e=i.height,n=i.getContext("2d",{willReadFrequently:!0}),r=n.getImageData(0,0,t,e),s=r.data,a=s.length,o={top:null,left:null,right:null,bottom:null},h=null,l,u,c;for(l=0;l<a;l+=4)s[l+3]!==0&&(u=l/4%t,c=~~(l/4/t),o.top===null&&(o.top=c),(o.left===null||u<o.left)&&(o.left=u),(o.right===null||o.right<u)&&(o.right=u+1),(o.bottom===null||o.bottom<c)&&(o.bottom=c));return o.top!==null&&(t=o.right-o.left,e=o.bottom-o.top+1,h=n.getImageData(o.left,o.top,t,e)),{height:e,width:t,data:h}}var oa;function Bb(i,t){if(t===void 0&&(t=globalThis.location),i.indexOf("data:")===0)return"";t=t||globalThis.location,oa||(oa=document.createElement("a")),oa.href=i;var e=gr.parse(oa.href),n=!e.port&&t.port===""||e.port===t.port;return e.hostname!==t.hostname||!n||e.protocol!==t.protocol?"anonymous":""}function ja(i,t){var e=ct.RETINA_PREFIX.exec(i);return e?parseFloat(e[1]):t!==void 0?t:1}/*!
 * @pixi/math - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var qa=Math.PI*2,Gb=180/Math.PI,kb=Math.PI/180,Re;(function(i){i[i.POLY=0]="POLY",i[i.RECT=1]="RECT",i[i.CIRC=2]="CIRC",i[i.ELIP=3]="ELIP",i[i.RREC=4]="RREC"})(Re||(Re={}));var re=function(){function i(t,e){t===void 0&&(t=0),e===void 0&&(e=0),this.x=0,this.y=0,this.x=t,this.y=e}return i.prototype.clone=function(){return new i(this.x,this.y)},i.prototype.copyFrom=function(t){return this.set(t.x,t.y),this},i.prototype.copyTo=function(t){return t.set(this.x,this.y),t},i.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},i.prototype.set=function(t,e){return t===void 0&&(t=0),e===void 0&&(e=t),this.x=t,this.y=e,this},i.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},i}(),ha=[new re,new re,new re,new re],Yt=function(){function i(t,e,n,r){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=0),this.x=Number(t),this.y=Number(e),this.width=Number(n),this.height=Number(r),this.type=Re.RECT}return Object.defineProperty(i.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(i,"EMPTY",{get:function(){return new i(0,0,0,0)},enumerable:!1,configurable:!0}),i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height)},i.prototype.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},i.prototype.copyTo=function(t){return t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t},i.prototype.contains=function(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height},i.prototype.intersects=function(t,e){if(!e){var n=this.x<t.x?t.x:this.x,r=this.right>t.right?t.right:this.right;if(r<=n)return!1;var s=this.y<t.y?t.y:this.y,a=this.bottom>t.bottom?t.bottom:this.bottom;return a>s}var o=this.left,h=this.right,l=this.top,u=this.bottom;if(h<=o||u<=l)return!1;var c=ha[0].set(t.left,t.top),f=ha[1].set(t.left,t.bottom),d=ha[2].set(t.right,t.top),m=ha[3].set(t.right,t.bottom);if(d.x<=c.x||f.y<=c.y)return!1;var _=Math.sign(e.a*e.d-e.b*e.c);if(_===0||(e.apply(c,c),e.apply(f,f),e.apply(d,d),e.apply(m,m),Math.max(c.x,f.x,d.x,m.x)<=o||Math.min(c.x,f.x,d.x,m.x)>=h||Math.max(c.y,f.y,d.y,m.y)<=l||Math.min(c.y,f.y,d.y,m.y)>=u))return!1;var p=_*(f.y-c.y),v=_*(c.x-f.x),y=p*o+v*l,g=p*h+v*l,T=p*o+v*u,w=p*h+v*u;if(Math.max(y,g,T,w)<=p*c.x+v*c.y||Math.min(y,g,T,w)>=p*m.x+v*m.y)return!1;var b=_*(c.y-d.y),M=_*(d.x-c.x),I=b*o+M*l,E=b*h+M*l,x=b*o+M*u,O=b*h+M*u;return!(Math.max(I,E,x,O)<=b*c.x+M*c.y||Math.min(I,E,x,O)>=b*m.x+M*m.y)},i.prototype.pad=function(t,e){return t===void 0&&(t=0),e===void 0&&(e=t),this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this},i.prototype.fit=function(t){var e=Math.max(this.x,t.x),n=Math.min(this.x+this.width,t.x+t.width),r=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(n-e,0),this.y=r,this.height=Math.max(s-r,0),this},i.prototype.ceil=function(t,e){t===void 0&&(t=1),e===void 0&&(e=.001);var n=Math.ceil((this.x+this.width-e)*t)/t,r=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=n-this.x,this.height=r-this.y,this},i.prototype.enlarge=function(t){var e=Math.min(this.x,t.x),n=Math.max(this.x+this.width,t.x+t.width),r=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=n-e,this.y=r,this.height=s-r,this},i.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},i}(),Hb=function(){function i(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.radius=n,this.type=Re.CIRC}return i.prototype.clone=function(){return new i(this.x,this.y,this.radius)},i.prototype.contains=function(t,e){if(this.radius<=0)return!1;var n=this.radius*this.radius,r=this.x-t,s=this.y-e;return r*=r,s*=s,r+s<=n},i.prototype.getBounds=function(){return new Yt(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},i.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},i}(),zb=function(){function i(t,e,n,r){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=0),this.x=t,this.y=e,this.width=n,this.height=r,this.type=Re.ELIP}return i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height)},i.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;var n=(t-this.x)/this.width,r=(e-this.y)/this.height;return n*=n,r*=r,n+r<=1},i.prototype.getBounds=function(){return new Yt(this.x-this.width,this.y-this.height,this.width,this.height)},i.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},i}(),Oa=function(){function i(){for(var t=arguments,e=[],n=0;n<arguments.length;n++)e[n]=t[n];var r=Array.isArray(e[0])?e[0]:e;if(typeof r[0]!="number"){for(var s=[],a=0,o=r.length;a<o;a++)s.push(r[a].x,r[a].y);r=s}this.points=r,this.type=Re.POLY,this.closeStroke=!0}return i.prototype.clone=function(){var t=this.points.slice(),e=new i(t);return e.closeStroke=this.closeStroke,e},i.prototype.contains=function(t,e){for(var n=!1,r=this.points.length/2,s=0,a=r-1;s<r;a=s++){var o=this.points[s*2],h=this.points[s*2+1],l=this.points[a*2],u=this.points[a*2+1],c=h>e!=u>e&&t<(l-o)*((e-h)/(u-h))+o;c&&(n=!n)}return n},i.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(t,e){return t+", "+e},"")+"]")},i}(),Vb=function(){function i(t,e,n,r,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=0),s===void 0&&(s=20),this.x=t,this.y=e,this.width=n,this.height=r,this.radius=s,this.type=Re.RREC}return i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height,this.radius)},i.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){var n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+n&&e<=this.y+this.height-n||t>=this.x+n&&t<=this.x+this.width-n)return!0;var r=t-(this.x+n),s=e-(this.y+n),a=n*n;if(r*r+s*s<=a||(r=t-(this.x+this.width-n),r*r+s*s<=a)||(s=e-(this.y+this.height-n),r*r+s*s<=a)||(r=t-(this.x+n),r*r+s*s<=a))return!0}return!1},i.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},i}(),xr=function(){function i(t,e,n,r){n===void 0&&(n=0),r===void 0&&(r=0),this._x=n,this._y=r,this.cb=t,this.scope=e}return i.prototype.clone=function(t,e){return t===void 0&&(t=this.cb),e===void 0&&(e=this.scope),new i(t,e,this._x,this._y)},i.prototype.set=function(t,e){return t===void 0&&(t=0),e===void 0&&(e=t),(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this.cb.call(this.scope)),this},i.prototype.copyFrom=function(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this.cb.call(this.scope)),this},i.prototype.copyTo=function(t){return t.set(this._x,this._y),t},i.prototype.equals=function(t){return t.x===this._x&&t.y===this._y},i.prototype.toString=function(){return"[@pixi/math:ObservablePoint x=0 y=0 scope="+this.scope+"]"},Object.defineProperty(i.prototype,"x",{get:function(){return this._x},set:function(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"y",{get:function(){return this._y},set:function(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),i}(),Me=function(){function i(t,e,n,r,s,a){t===void 0&&(t=1),e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=1),s===void 0&&(s=0),a===void 0&&(a=0),this.array=null,this.a=t,this.b=e,this.c=n,this.d=r,this.tx=s,this.ty=a}return i.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},i.prototype.set=function(t,e,n,r,s,a){return this.a=t,this.b=e,this.c=n,this.d=r,this.tx=s,this.ty=a,this},i.prototype.toArray=function(t,e){this.array||(this.array=new Float32Array(9));var n=e||this.array;return t?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n},i.prototype.apply=function(t,e){e=e||new re;var n=t.x,r=t.y;return e.x=this.a*n+this.c*r+this.tx,e.y=this.b*n+this.d*r+this.ty,e},i.prototype.applyInverse=function(t,e){e=e||new re;var n=1/(this.a*this.d+this.c*-this.b),r=t.x,s=t.y;return e.x=this.d*n*r+-this.c*n*s+(this.ty*this.c-this.tx*this.d)*n,e.y=this.a*n*s+-this.b*n*r+(-this.ty*this.a+this.tx*this.b)*n,e},i.prototype.translate=function(t,e){return this.tx+=t,this.ty+=e,this},i.prototype.scale=function(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},i.prototype.rotate=function(t){var e=Math.cos(t),n=Math.sin(t),r=this.a,s=this.c,a=this.tx;return this.a=r*e-this.b*n,this.b=r*n+this.b*e,this.c=s*e-this.d*n,this.d=s*n+this.d*e,this.tx=a*e-this.ty*n,this.ty=a*n+this.ty*e,this},i.prototype.append=function(t){var e=this.a,n=this.b,r=this.c,s=this.d;return this.a=t.a*e+t.b*r,this.b=t.a*n+t.b*s,this.c=t.c*e+t.d*r,this.d=t.c*n+t.d*s,this.tx=t.tx*e+t.ty*r+this.tx,this.ty=t.tx*n+t.ty*s+this.ty,this},i.prototype.setTransform=function(t,e,n,r,s,a,o,h,l){return this.a=Math.cos(o+l)*s,this.b=Math.sin(o+l)*s,this.c=-Math.sin(o-h)*a,this.d=Math.cos(o-h)*a,this.tx=t-(n*this.a+r*this.c),this.ty=e-(n*this.b+r*this.d),this},i.prototype.prepend=function(t){var e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){var n=this.a,r=this.c;this.a=n*t.a+this.b*t.c,this.b=n*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this},i.prototype.decompose=function(t){var e=this.a,n=this.b,r=this.c,s=this.d,a=t.pivot,o=-Math.atan2(-r,s),h=Math.atan2(n,e),l=Math.abs(o+h);return l<1e-5||Math.abs(qa-l)<1e-5?(t.rotation=h,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=o,t.skew.y=h),t.scale.x=Math.sqrt(e*e+n*n),t.scale.y=Math.sqrt(r*r+s*s),t.position.x=this.tx+(a.x*e+a.y*r),t.position.y=this.ty+(a.x*n+a.y*s),t},i.prototype.invert=function(){var t=this.a,e=this.b,n=this.c,r=this.d,s=this.tx,a=t*r-e*n;return this.a=r/a,this.b=-e/a,this.c=-n/a,this.d=t/a,this.tx=(n*this.ty-r*s)/a,this.ty=-(t*this.ty-e*s)/a,this},i.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},i.prototype.clone=function(){var t=new i;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},i.prototype.copyTo=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},i.prototype.copyFrom=function(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this},i.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(i,"IDENTITY",{get:function(){return new i},enumerable:!1,configurable:!0}),Object.defineProperty(i,"TEMP_MATRIX",{get:function(){return new i},enumerable:!1,configurable:!0}),i}(),Oi=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Di=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Li=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Ni=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Kh=[],Qd=[],la=Math.sign;function Xb(){for(var i=0;i<16;i++){var t=[];Kh.push(t);for(var e=0;e<16;e++)for(var n=la(Oi[i]*Oi[e]+Li[i]*Di[e]),r=la(Di[i]*Oi[e]+Ni[i]*Di[e]),s=la(Oi[i]*Li[e]+Li[i]*Ni[e]),a=la(Di[i]*Li[e]+Ni[i]*Ni[e]),o=0;o<16;o++)if(Oi[o]===n&&Di[o]===r&&Li[o]===s&&Ni[o]===a){t.push(o);break}}for(var i=0;i<16;i++){var h=new Me;h.set(Oi[i],Di[i],Li[i],Ni[i],0,0),Qd.push(h)}}Xb();var ce={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(i){return Oi[i]},uY:function(i){return Di[i]},vX:function(i){return Li[i]},vY:function(i){return Ni[i]},inv:function(i){return i&8?i&15:-i&7},add:function(i,t){return Kh[i][t]},sub:function(i,t){return Kh[i][ce.inv(t)]},rotate180:function(i){return i^4},isVertical:function(i){return(i&3)===2},byDirection:function(i,t){return Math.abs(i)*2<=Math.abs(t)?t>=0?ce.S:ce.N:Math.abs(t)*2<=Math.abs(i)?i>0?ce.E:ce.W:t>0?i>0?ce.SE:ce.SW:i>0?ce.NE:ce.NW},matrixAppendRotationInv:function(i,t,e,n){e===void 0&&(e=0),n===void 0&&(n=0);var r=Qd[ce.inv(t)];r.tx=e,r.ty=n,i.append(r)}},tp=function(){function i(){this.worldTransform=new Me,this.localTransform=new Me,this.position=new xr(this.onChange,this,0,0),this.scale=new xr(this.onChange,this,1,1),this.pivot=new xr(this.onChange,this,0,0),this.skew=new xr(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return i.prototype.onChange=function(){this._localID++},i.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},i.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},i.prototype.updateLocalTransform=function(){var t=this.localTransform;this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1)},i.prototype.updateTransform=function(t){var e=this.localTransform;if(this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==t._worldID){var n=t.worldTransform,r=this.worldTransform;r.a=e.a*n.a+e.b*n.c,r.b=e.a*n.b+e.b*n.d,r.c=e.c*n.a+e.d*n.c,r.d=e.c*n.b+e.d*n.d,r.tx=e.tx*n.a+e.ty*n.c+n.tx,r.ty=e.tx*n.b+e.ty*n.d+n.ty,this._parentID=t._worldID,this._worldID++}},i.prototype.setFromMatrix=function(t){t.decompose(this),this._localID++},Object.defineProperty(i.prototype,"rotation",{get:function(){return this._rotation},set:function(t){this._rotation!==t&&(this._rotation=t,this.updateSkew())},enumerable:!1,configurable:!0}),i.IDENTITY=new i,i}();/*!
 * @pixi/display - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ct.SORTABLE_CHILDREN=!1;var $a=function(){function i(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return i.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},i.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},i.prototype.getRectangle=function(t){return this.minX>this.maxX||this.minY>this.maxY?Yt.EMPTY:(t=t||new Yt(0,0,1,1),t.x=this.minX,t.y=this.minY,t.width=this.maxX-this.minX,t.height=this.maxY-this.minY,t)},i.prototype.addPoint=function(t){this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)},i.prototype.addPointMatrix=function(t,e){var n=t.a,r=t.b,s=t.c,a=t.d,o=t.tx,h=t.ty,l=n*e.x+s*e.y+o,u=r*e.x+a*e.y+h;this.minX=Math.min(this.minX,l),this.maxX=Math.max(this.maxX,l),this.minY=Math.min(this.minY,u),this.maxY=Math.max(this.maxY,u)},i.prototype.addQuad=function(t){var e=this.minX,n=this.minY,r=this.maxX,s=this.maxY,a=t[0],o=t[1];e=a<e?a:e,n=o<n?o:n,r=a>r?a:r,s=o>s?o:s,a=t[2],o=t[3],e=a<e?a:e,n=o<n?o:n,r=a>r?a:r,s=o>s?o:s,a=t[4],o=t[5],e=a<e?a:e,n=o<n?o:n,r=a>r?a:r,s=o>s?o:s,a=t[6],o=t[7],e=a<e?a:e,n=o<n?o:n,r=a>r?a:r,s=o>s?o:s,this.minX=e,this.minY=n,this.maxX=r,this.maxY=s},i.prototype.addFrame=function(t,e,n,r,s){this.addFrameMatrix(t.worldTransform,e,n,r,s)},i.prototype.addFrameMatrix=function(t,e,n,r,s){var a=t.a,o=t.b,h=t.c,l=t.d,u=t.tx,c=t.ty,f=this.minX,d=this.minY,m=this.maxX,_=this.maxY,p=a*e+h*n+u,v=o*e+l*n+c;f=p<f?p:f,d=v<d?v:d,m=p>m?p:m,_=v>_?v:_,p=a*r+h*n+u,v=o*r+l*n+c,f=p<f?p:f,d=v<d?v:d,m=p>m?p:m,_=v>_?v:_,p=a*e+h*s+u,v=o*e+l*s+c,f=p<f?p:f,d=v<d?v:d,m=p>m?p:m,_=v>_?v:_,p=a*r+h*s+u,v=o*r+l*s+c,f=p<f?p:f,d=v<d?v:d,m=p>m?p:m,_=v>_?v:_,this.minX=f,this.minY=d,this.maxX=m,this.maxY=_},i.prototype.addVertexData=function(t,e,n){for(var r=this.minX,s=this.minY,a=this.maxX,o=this.maxY,h=e;h<n;h+=2){var l=t[h],u=t[h+1];r=l<r?l:r,s=u<s?u:s,a=l>a?l:a,o=u>o?u:o}this.minX=r,this.minY=s,this.maxX=a,this.maxY=o},i.prototype.addVertices=function(t,e,n,r){this.addVerticesMatrix(t.worldTransform,e,n,r)},i.prototype.addVerticesMatrix=function(t,e,n,r,s,a){s===void 0&&(s=0),a===void 0&&(a=s);for(var o=t.a,h=t.b,l=t.c,u=t.d,c=t.tx,f=t.ty,d=this.minX,m=this.minY,_=this.maxX,p=this.maxY,v=n;v<r;v+=2){var y=e[v],g=e[v+1],T=o*y+l*g+c,w=u*g+h*y+f;d=Math.min(d,T-s),_=Math.max(_,T+s),m=Math.min(m,w-a),p=Math.max(p,w+a)}this.minX=d,this.minY=m,this.maxX=_,this.maxY=p},i.prototype.addBounds=function(t){var e=this.minX,n=this.minY,r=this.maxX,s=this.maxY;this.minX=t.minX<e?t.minX:e,this.minY=t.minY<n?t.minY:n,this.maxX=t.maxX>r?t.maxX:r,this.maxY=t.maxY>s?t.maxY:s},i.prototype.addBoundsMask=function(t,e){var n=t.minX>e.minX?t.minX:e.minX,r=t.minY>e.minY?t.minY:e.minY,s=t.maxX<e.maxX?t.maxX:e.maxX,a=t.maxY<e.maxY?t.maxY:e.maxY;if(n<=s&&r<=a){var o=this.minX,h=this.minY,l=this.maxX,u=this.maxY;this.minX=n<o?n:o,this.minY=r<h?r:h,this.maxX=s>l?s:l,this.maxY=a>u?a:u}},i.prototype.addBoundsMatrix=function(t,e){this.addFrameMatrix(e,t.minX,t.minY,t.maxX,t.maxY)},i.prototype.addBoundsArea=function(t,e){var n=t.minX>e.x?t.minX:e.x,r=t.minY>e.y?t.minY:e.y,s=t.maxX<e.x+e.width?t.maxX:e.x+e.width,a=t.maxY<e.y+e.height?t.maxY:e.y+e.height;if(n<=s&&r<=a){var o=this.minX,h=this.minY,l=this.maxX,u=this.maxY;this.minX=n<o?n:o,this.minY=r<h?r:h,this.maxX=s>l?s:l,this.maxY=a>u?a:u}},i.prototype.pad=function(t,e){t===void 0&&(t=0),e===void 0&&(e=t),this.isEmpty()||(this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e)},i.prototype.addFramePad=function(t,e,n,r,s,a){t-=s,e-=a,n+=s,r+=a,this.minX=this.minX<t?this.minX:t,this.maxX=this.maxX>n?this.maxX:n,this.minY=this.minY<e?this.minY:e,this.maxY=this.maxY>r?this.maxY:r},i}();/*! *****************************************************************************
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
***************************************************************************** */var Zh=function(i,t){return Zh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Zh(i,t)};function jl(i,t){Zh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var ge=function(i){jl(t,i);function t(){var e=i.call(this)||this;return e.tempDisplayObjectParent=null,e.transform=new tp,e.alpha=1,e.visible=!0,e.renderable=!0,e.cullable=!1,e.cullArea=null,e.parent=null,e.worldAlpha=1,e._lastSortedIndex=0,e._zIndex=0,e.filterArea=null,e.filters=null,e._enabledFilters=null,e._bounds=new $a,e._localBounds=null,e._boundsID=0,e._boundsRect=null,e._localBoundsRect=null,e._mask=null,e._maskRefCount=0,e._destroyed=!1,e.isSprite=!1,e.isMask=!1,e}return t.mixin=function(e){for(var n=Object.keys(e),r=0;r<n.length;++r){var s=n[r];Object.defineProperty(t.prototype,s,Object.getOwnPropertyDescriptor(e,s))}},Object.defineProperty(t.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),t.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},t.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},t.prototype.getBounds=function(e,n){return e||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),n||(this._boundsRect||(this._boundsRect=new Yt),n=this._boundsRect),this._bounds.getRectangle(n)},t.prototype.getLocalBounds=function(e){e||(this._localBoundsRect||(this._localBoundsRect=new Yt),e=this._localBoundsRect),this._localBounds||(this._localBounds=new $a);var n=this.transform,r=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var s=this._bounds,a=this._boundsID;this._bounds=this._localBounds;var o=this.getBounds(!1,e);return this.parent=r,this.transform=n,this._bounds=s,this._bounds.updateID+=this._boundsID-a,o},t.prototype.toGlobal=function(e,n,r){return r===void 0&&(r=!1),r||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(e,n)},t.prototype.toLocal=function(e,n,r,s){return n&&(e=n.toGlobal(e,r,s)),s||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(e,r)},t.prototype.setParent=function(e){if(!e||!e.addChild)throw new Error("setParent: Argument must be a Container");return e.addChild(this),e},t.prototype.setTransform=function(e,n,r,s,a,o,h,l,u){return e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=1),s===void 0&&(s=1),a===void 0&&(a=0),o===void 0&&(o=0),h===void 0&&(h=0),l===void 0&&(l=0),u===void 0&&(u=0),this.position.x=e,this.position.y=n,this.scale.x=r||1,this.scale.y=s||1,this.rotation=a,this.skew.x=o,this.skew.y=h,this.pivot.x=l,this.pivot.y=u,this},t.prototype.destroy=function(e){this.parent&&this.parent.removeChild(this),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()},Object.defineProperty(t.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new ep),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),t.prototype.enableTempParent=function(){var e=this.parent;return this.parent=this._tempDisplayObjectParent,e},t.prototype.disableTempParent=function(e){this.parent=e},Object.defineProperty(t.prototype,"x",{get:function(){return this.position.x},set:function(e){this.transform.position.x=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.position.y},set:function(e){this.transform.position.y=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this.transform.position},set:function(e){this.transform.position.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return this.transform.scale},set:function(e){this.transform.scale.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(e){this.transform.pivot.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"skew",{get:function(){return this.transform.skew},set:function(e){this.transform.skew.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(e){this.transform.rotation=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"angle",{get:function(){return this.transform.rotation*Gb},set:function(e){this.transform.rotation=e*kb},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"zIndex",{get:function(){return this._zIndex},set:function(e){this._zIndex=e,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"worldVisible",{get:function(){var e=this;do{if(!e.visible)return!1;e=e.parent}while(e);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"mask",{get:function(){return this._mask},set:function(e){if(this._mask!==e){if(this._mask){var n=this._mask.isMaskData?this._mask.maskObject:this._mask;n&&(n._maskRefCount--,n._maskRefCount===0&&(n.renderable=!0,n.isMask=!1))}if(this._mask=e,this._mask){var n=this._mask.isMaskData?this._mask.maskObject:this._mask;n&&(n._maskRefCount===0&&(n.renderable=!1,n.isMask=!0),n._maskRefCount++)}}},enumerable:!1,configurable:!0}),t}(As),ep=function(i){jl(t,i);function t(){var e=i!==null&&i.apply(this,arguments)||this;return e.sortDirty=null,e}return t}(ge);ge.prototype.displayObjectUpdateTransform=ge.prototype.updateTransform;function Wb(i,t){return i.zIndex===t.zIndex?i._lastSortedIndex-t._lastSortedIndex:i.zIndex-t.zIndex}var An=function(i){jl(t,i);function t(){var e=i.call(this)||this;return e.children=[],e.sortableChildren=ct.SORTABLE_CHILDREN,e.sortDirty=!1,e}return t.prototype.onChildrenChange=function(e){},t.prototype.addChild=function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];if(n.length>1)for(var s=0;s<n.length;s++)this.addChild(n[s]);else{var a=n[0];a.parent&&a.parent.removeChild(a),a.parent=this,this.sortDirty=!0,a.transform._parentID=-1,this.children.push(a),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",a,this,this.children.length-1),a.emit("added",this)}return n[0]},t.prototype.addChildAt=function(e,n){if(n<0||n>this.children.length)throw new Error(e+"addChildAt: The index "+n+" supplied is out of bounds "+this.children.length);return e.parent&&e.parent.removeChild(e),e.parent=this,this.sortDirty=!0,e.transform._parentID=-1,this.children.splice(n,0,e),this._boundsID++,this.onChildrenChange(n),e.emit("added",this),this.emit("childAdded",e,this,n),e},t.prototype.swapChildren=function(e,n){if(e!==n){var r=this.getChildIndex(e),s=this.getChildIndex(n);this.children[r]=n,this.children[s]=e,this.onChildrenChange(r<s?r:s)}},t.prototype.getChildIndex=function(e){var n=this.children.indexOf(e);if(n===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return n},t.prototype.setChildIndex=function(e,n){if(n<0||n>=this.children.length)throw new Error("The index "+n+" supplied is out of bounds "+this.children.length);var r=this.getChildIndex(e);wr(this.children,r,1),this.children.splice(n,0,e),this.onChildrenChange(n)},t.prototype.getChildAt=function(e){if(e<0||e>=this.children.length)throw new Error("getChildAt: Index ("+e+") does not exist.");return this.children[e]},t.prototype.removeChild=function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];if(n.length>1)for(var s=0;s<n.length;s++)this.removeChild(n[s]);else{var a=n[0],o=this.children.indexOf(a);if(o===-1)return null;a.parent=null,a.transform._parentID=-1,wr(this.children,o,1),this._boundsID++,this.onChildrenChange(o),a.emit("removed",this),this.emit("childRemoved",a,this,o)}return n[0]},t.prototype.removeChildAt=function(e){var n=this.getChildAt(e);return n.parent=null,n.transform._parentID=-1,wr(this.children,e,1),this._boundsID++,this.onChildrenChange(e),n.emit("removed",this),this.emit("childRemoved",n,this,e),n},t.prototype.removeChildren=function(e,n){e===void 0&&(e=0),n===void 0&&(n=this.children.length);var r=e,s=n,a=s-r,o;if(a>0&&a<=s){o=this.children.splice(r,a);for(var h=0;h<o.length;++h)o[h].parent=null,o[h].transform&&(o[h].transform._parentID=-1);this._boundsID++,this.onChildrenChange(e);for(var h=0;h<o.length;++h)o[h].emit("removed",this),this.emit("childRemoved",o[h],this,h);return o}else if(a===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},t.prototype.sortChildren=function(){for(var e=!1,n=0,r=this.children.length;n<r;++n){var s=this.children[n];s._lastSortedIndex=n,!e&&s.zIndex!==0&&(e=!0)}e&&this.children.length>1&&this.children.sort(Wb),this.sortDirty=!1},t.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var e=0,n=this.children.length;e<n;++e){var r=this.children[e];r.visible&&r.updateTransform()}},t.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var e=0;e<this.children.length;e++){var n=this.children[e];if(!(!n.visible||!n.renderable))if(n.calculateBounds(),n._mask){var r=n._mask.isMaskData?n._mask.maskObject:n._mask;r?(r.calculateBounds(),this._bounds.addBoundsMask(n._bounds,r._bounds)):this._bounds.addBounds(n._bounds)}else n.filterArea?this._bounds.addBoundsArea(n._bounds,n.filterArea):this._bounds.addBounds(n._bounds)}this._bounds.updateID=this._boundsID},t.prototype.getLocalBounds=function(e,n){n===void 0&&(n=!1);var r=i.prototype.getLocalBounds.call(this,e);if(!n)for(var s=0,a=this.children.length;s<a;++s){var o=this.children[s];o.visible&&o.updateTransform()}return r},t.prototype._calculateBounds=function(){},t.prototype._renderWithCulling=function(e){var n=e.renderTexture.sourceFrame;if(n.width>0&&n.height>0){var r,s;if(this.cullArea?(r=this.cullArea,s=this.worldTransform):this._render!==t.prototype._render&&(r=this.getBounds(!0)),r&&n.intersects(r,s))this._render(e);else if(this.cullArea)return;for(var a=0,o=this.children.length;a<o;++a){var h=this.children[a],l=h.cullable;h.cullable=l||!this.cullArea,h.render(e),h.cullable=l}}},t.prototype.render=function(e){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(e);else if(this.cullable)this._renderWithCulling(e);else{this._render(e);for(var n=0,r=this.children.length;n<r;++n)this.children[n].render(e)}},t.prototype.renderAdvanced=function(e){var n=this.filters,r=this._mask;if(n){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var s=0;s<n.length;s++)n[s].enabled&&this._enabledFilters.push(n[s])}var a=n&&this._enabledFilters&&this._enabledFilters.length||r&&(!r.isMaskData||r.enabled&&(r.autoDetect||r.type!==xe.NONE));if(a&&e.batch.flush(),n&&this._enabledFilters&&this._enabledFilters.length&&e.filter.push(this,this._enabledFilters),r&&e.mask.push(this,this._mask),this.cullable)this._renderWithCulling(e);else{this._render(e);for(var s=0,o=this.children.length;s<o;++s)this.children[s].render(e)}a&&e.batch.flush(),r&&e.mask.pop(this),n&&this._enabledFilters&&this._enabledFilters.length&&e.filter.pop()},t.prototype._render=function(e){},t.prototype.destroy=function(e){i.prototype.destroy.call(this),this.sortDirty=!1;var n=typeof e=="boolean"?e:e&&e.children,r=this.removeChildren(0,this.children.length);if(n)for(var s=0;s<r.length;++s)r[s].destroy(e)},Object.defineProperty(t.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(e){var n=this.getLocalBounds().width;n!==0?this.scale.x=e/n:this.scale.x=1,this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(e){var n=this.getLocalBounds().height;n!==0?this.scale.y=e/n:this.scale.y=1,this._height=e},enumerable:!1,configurable:!0}),t}(ge);An.prototype.containerUpdateTransform=An.prototype.updateTransform;/*!
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
***************************************************************************** */var rs=function(){return rs=Object.assign||function(t){for(var e=arguments,n,r=1,s=arguments.length;r<s;r++){n=e[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},rs.apply(this,arguments)},Qt;(function(i){i.Application="application",i.RendererPlugin="renderer-webgl-plugin",i.CanvasRendererPlugin="renderer-canvas-plugin",i.Loader="loader",i.LoadParser="load-parser",i.ResolveParser="resolve-parser",i.CacheParser="cache-parser",i.DetectionParser="detection-parser"})(Qt||(Qt={}));var lf=function(i){if(typeof i=="function"||typeof i=="object"&&i.extension){if(!i.extension)throw new Error("Extension class must have an extension object");var t=typeof i.extension!="object"?{type:i.extension}:i.extension;i=rs(rs({},t),{ref:i})}if(typeof i=="object")i=rs({},i);else throw new Error("Invalid extension type");return typeof i.type=="string"&&(i.type=[i.type]),i},$n={_addHandlers:null,_removeHandlers:null,_queue:{},remove:function(){for(var i=arguments,t=this,e=[],n=0;n<arguments.length;n++)e[n]=i[n];return e.map(lf).forEach(function(r){r.type.forEach(function(s){var a,o;return(o=(a=t._removeHandlers)[s])===null||o===void 0?void 0:o.call(a,r)})}),this},add:function(){for(var i=arguments,t=this,e=[],n=0;n<arguments.length;n++)e[n]=i[n];return e.map(lf).forEach(function(r){r.type.forEach(function(s){var a=t._addHandlers,o=t._queue;a[s]?a[s](r):(o[s]=o[s]||[],o[s].push(r))})}),this},handle:function(i,t,e){var n=this._addHandlers=this._addHandlers||{},r=this._removeHandlers=this._removeHandlers||{};if(n[i]||r[i])throw new Error("Extension type "+i+" already has a handler");n[i]=t,r[i]=e;var s=this._queue;return s[i]&&(s[i].forEach(function(a){return t(a)}),delete s[i]),this},handleByMap:function(i,t){return this.handle(i,function(e){t[e.name]=e.ref},function(e){delete t[e.name]})},handleByList:function(i,t){return this.handle(i,function(e){var n,r;t.includes(e.ref)||(t.push(e.ref),i===Qt.Loader&&((r=(n=e.ref).add)===null||r===void 0||r.call(n)))},function(e){var n=t.indexOf(e.ref);n!==-1&&t.splice(n,1)})}};/*!
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
 */ct.TARGET_FPMS=.06;var Yn;(function(i){i[i.INTERACTION=50]="INTERACTION",i[i.HIGH=25]="HIGH",i[i.NORMAL=0]="NORMAL",i[i.LOW=-25]="LOW",i[i.UTILITY=-50]="UTILITY"})(Yn||(Yn={}));var oh=function(){function i(t,e,n,r){e===void 0&&(e=null),n===void 0&&(n=0),r===void 0&&(r=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=t,this.context=e,this.priority=n,this.once=r}return i.prototype.match=function(t,e){return e===void 0&&(e=null),this.fn===t&&this.context===e},i.prototype.emit=function(t){this.fn&&(this.context?this.fn.call(this.context,t):this.fn(t));var e=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),e},i.prototype.connect=function(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this},i.prototype.destroy=function(t){t===void 0&&(t=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var e=this.next;return this.next=t?null:e,this.previous=null,e},i}(),De=function(){function i(){var t=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new oh(null,null,1/0),this.deltaMS=1/ct.TARGET_FPMS,this.elapsedMS=1/ct.TARGET_FPMS,this._tick=function(e){t._requestId=null,t.started&&(t.update(e),t.started&&t._requestId===null&&t._head.next&&(t._requestId=requestAnimationFrame(t._tick)))}}return i.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},i.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},i.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},i.prototype.add=function(t,e,n){return n===void 0&&(n=Yn.NORMAL),this._addListener(new oh(t,e,n))},i.prototype.addOnce=function(t,e,n){return n===void 0&&(n=Yn.NORMAL),this._addListener(new oh(t,e,n,!0))},i.prototype._addListener=function(t){var e=this._head.next,n=this._head;if(!e)t.connect(n);else{for(;e;){if(t.priority>e.priority){t.connect(n);break}n=e,e=e.next}t.previous||t.connect(n)}return this._startIfPossible(),this},i.prototype.remove=function(t,e){for(var n=this._head.next;n;)n.match(t,e)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(i.prototype,"count",{get:function(){if(!this._head)return 0;for(var t=0,e=this._head;e=e.next;)t++;return t},enumerable:!1,configurable:!0}),i.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},i.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},i.prototype.destroy=function(){if(!this._protected){this.stop();for(var t=this._head.next;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}},i.prototype.update=function(t){t===void 0&&(t=performance.now());var e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){var n=t-this._lastFrame|0;if(n<this._minElapsedMS)return;this._lastFrame=t-n%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*ct.TARGET_FPMS;for(var r=this._head,s=r.next;s;)s=s.emit(this.deltaTime);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t},Object.defineProperty(i.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(t){var e=Math.min(this.maxFPS,t),n=Math.min(Math.max(0,e)/1e3,ct.TARGET_FPMS);this._maxElapsedMS=1/n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(t){if(t===0)this._minElapsedMS=0;else{var e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"shared",{get:function(){if(!i._shared){var t=i._shared=new i;t.autoStart=!0,t._protected=!0}return i._shared},enumerable:!1,configurable:!0}),Object.defineProperty(i,"system",{get:function(){if(!i._system){var t=i._system=new i;t.autoStart=!0,t._protected=!0}return i._system},enumerable:!1,configurable:!0}),i}(),Yb=function(){function i(){}return i.init=function(t){var e=this;t=Object.assign({autoStart:!0,sharedTicker:!1},t),Object.defineProperty(this,"ticker",{set:function(n){this._ticker&&this._ticker.remove(this.render,this),this._ticker=n,n&&n.add(this.render,this,Yn.LOW)},get:function(){return this._ticker}}),this.stop=function(){e._ticker.stop()},this.start=function(){e._ticker.start()},this._ticker=null,this.ticker=t.sharedTicker?De.shared:new De,t.autoStart&&this.start()},i.destroy=function(){if(this._ticker){var t=this._ticker;this.ticker=null,t.destroy()}},i.extension=Qt.Application,i}();/*!
 * @pixi/core - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ct.PREFER_ENV=Sn.any?Wn.WEBGL:Wn.WEBGL2;ct.STRICT_TEXTURE_CACHE=!1;var Qh=[];function np(i,t){if(!i)return null;var e="";if(typeof i=="string"){var n=/\.(\w{3,4})(?:$|\?|#)/i.exec(i);n&&(e=n[1].toLowerCase())}for(var r=Qh.length-1;r>=0;--r){var s=Qh[r];if(s.test&&s.test(i,e))return new s(i,t)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
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
***************************************************************************** */var tl=function(i,t){return tl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},tl(i,t)};function ee(i,t){tl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var el=function(){return el=Object.assign||function(t){for(var e=arguments,n,r=1,s=arguments.length;r<s;r++){n=e[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},el.apply(this,arguments)};function jb(i,t){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&t.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(e[n[r]]=i[n[r]]);return e}var _s=function(){function i(t,e){t===void 0&&(t=0),e===void 0&&(e=0),this._width=t,this._height=e,this.destroyed=!1,this.internal=!1,this.onResize=new Ie("setRealSize"),this.onUpdate=new Ie("update"),this.onError=new Ie("onError")}return i.prototype.bind=function(t){this.onResize.add(t),this.onUpdate.add(t),this.onError.add(t),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},i.prototype.unbind=function(t){this.onResize.remove(t),this.onUpdate.remove(t),this.onError.remove(t)},i.prototype.resize=function(t,e){(t!==this._width||e!==this._height)&&(this._width=t,this._height=e,this.onResize.emit(t,e))},Object.defineProperty(i.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),i.prototype.update=function(){this.destroyed||this.onUpdate.emit()},i.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(i.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),i.prototype.style=function(t,e,n){return!1},i.prototype.dispose=function(){},i.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},i.test=function(t,e){return!1},i}(),Rs=function(i){ee(t,i);function t(e,n){var r=this,s=n||{},a=s.width,o=s.height;if(!a||!o)throw new Error("BufferResource width or height invalid");return r=i.call(this,a,o)||this,r.data=e,r}return t.prototype.upload=function(e,n,r){var s=e.gl;s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===fn.UNPACK);var a=n.realWidth,o=n.realHeight;return r.width===a&&r.height===o?s.texSubImage2D(n.target,0,0,0,a,o,n.format,r.type,this.data):(r.width=a,r.height=o,s.texImage2D(n.target,0,r.internalFormat,a,o,0,n.format,r.type,this.data)),!0},t.prototype.dispose=function(){this.data=null},t.test=function(e){return e instanceof Float32Array||e instanceof Uint8Array||e instanceof Uint32Array},t}(_s),qb={scaleMode:En.NEAREST,format:it.RGBA,alphaMode:fn.NPM},Wt=function(i){ee(t,i);function t(e,n){e===void 0&&(e=null),n===void 0&&(n=null);var r=i.call(this)||this;n=n||{};var s=n.alphaMode,a=n.mipmap,o=n.anisotropicLevel,h=n.scaleMode,l=n.width,u=n.height,c=n.wrapMode,f=n.format,d=n.type,m=n.target,_=n.resolution,p=n.resourceOptions;return e&&!(e instanceof _s)&&(e=np(e,p),e.internal=!0),r.resolution=_||ct.RESOLUTION,r.width=Math.round((l||0)*r.resolution)/r.resolution,r.height=Math.round((u||0)*r.resolution)/r.resolution,r._mipmap=a!==void 0?a:ct.MIPMAP_TEXTURES,r.anisotropicLevel=o!==void 0?o:ct.ANISOTROPIC_LEVEL,r._wrapMode=c||ct.WRAP_MODE,r._scaleMode=h!==void 0?h:ct.SCALE_MODE,r.format=f||it.RGBA,r.type=d||wt.UNSIGNED_BYTE,r.target=m||Hi.TEXTURE_2D,r.alphaMode=s!==void 0?s:fn.UNPACK,r.uid=Yi(),r.touched=0,r.isPowerOfTwo=!1,r._refreshPOT(),r._glTextures={},r.dirtyId=0,r.dirtyStyleId=0,r.cacheId=null,r.valid=l>0&&u>0,r.textureCacheIds=[],r.destroyed=!1,r.resource=null,r._batchEnabled=0,r._batchLocation=0,r.parentTextureArray=null,r.setResource(e),r}return Object.defineProperty(t.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"mipmap",{get:function(){return this._mipmap},set:function(e){this._mipmap!==e&&(this._mipmap=e,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(e){this._scaleMode!==e&&(this._scaleMode=e,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(e){this._wrapMode!==e&&(this._wrapMode=e,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),t.prototype.setStyle=function(e,n){var r;return e!==void 0&&e!==this.scaleMode&&(this.scaleMode=e,r=!0),n!==void 0&&n!==this.mipmap&&(this.mipmap=n,r=!0),r&&this.dirtyStyleId++,this},t.prototype.setSize=function(e,n,r){return r=r||this.resolution,this.setRealSize(e*r,n*r,r)},t.prototype.setRealSize=function(e,n,r){return this.resolution=r||this.resolution,this.width=Math.round(e)/this.resolution,this.height=Math.round(n)/this.resolution,this._refreshPOT(),this.update(),this},t.prototype._refreshPOT=function(){this.isPowerOfTwo=rf(this.realWidth)&&rf(this.realHeight)},t.prototype.setResolution=function(e){var n=this.resolution;return n===e?this:(this.resolution=e,this.valid&&(this.width=Math.round(this.width*n)/e,this.height=Math.round(this.height*n)/e,this.emit("update",this)),this._refreshPOT(),this)},t.prototype.setResource=function(e){if(this.resource===e)return this;if(this.resource)throw new Error("Resource can be set only once");return e.bind(this),this.resource=e,this},t.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},t.prototype.onError=function(e){this.emit("error",this,e)},t.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete Mi[this.cacheId],delete kn[this.cacheId],this.cacheId=null),this.dispose(),t.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},t.prototype.dispose=function(){this.emit("dispose",this)},t.prototype.castToBaseTexture=function(){return this},t.from=function(e,n,r){r===void 0&&(r=ct.STRICT_TEXTURE_CACHE);var s=typeof e=="string",a=null;if(s)a=e;else{if(!e._pixiId){var o=n&&n.pixiIdPrefix||"pixiid";e._pixiId=o+"_"+Yi()}a=e._pixiId}var h=Mi[a];if(s&&r&&!h)throw new Error('The cacheId "'+a+'" does not exist in BaseTextureCache.');return h||(h=new t(e,n),h.cacheId=a,t.addToCache(h,a)),h},t.fromBuffer=function(e,n,r,s){e=e||new Float32Array(n*r*4);var a=new Rs(e,{width:n,height:r}),o=e instanceof Float32Array?wt.FLOAT:wt.UNSIGNED_BYTE;return new t(a,Object.assign({},qb,s||{width:n,height:r,type:o}))},t.addToCache=function(e,n){n&&(e.textureCacheIds.indexOf(n)===-1&&e.textureCacheIds.push(n),Mi[n]&&console.warn("BaseTexture added to the cache with an id ["+n+"] that already had an entry"),Mi[n]=e)},t.removeFromCache=function(e){if(typeof e=="string"){var n=Mi[e];if(n){var r=n.textureCacheIds.indexOf(e);return r>-1&&n.textureCacheIds.splice(r,1),delete Mi[e],n}}else if(e&&e.textureCacheIds){for(var s=0;s<e.textureCacheIds.length;++s)delete Mi[e.textureCacheIds[s]];return e.textureCacheIds.length=0,e}return null},t._globalBatch=0,t}(As),ip=function(i){ee(t,i);function t(e,n){var r=this,s=n||{},a=s.width,o=s.height;r=i.call(this,a,o)||this,r.items=[],r.itemDirtyIds=[];for(var h=0;h<e;h++){var l=new Wt;r.items.push(l),r.itemDirtyIds.push(-2)}return r.length=e,r._load=null,r.baseTexture=null,r}return t.prototype.initFromArray=function(e,n){for(var r=0;r<this.length;r++)e[r]&&(e[r].castToBaseTexture?this.addBaseTextureAt(e[r].castToBaseTexture(),r):e[r]instanceof _s?this.addResourceAt(e[r],r):this.addResourceAt(np(e[r],n),r))},t.prototype.dispose=function(){for(var e=0,n=this.length;e<n;e++)this.items[e].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},t.prototype.addResourceAt=function(e,n){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");return e.valid&&!this.valid&&this.resize(e.width,e.height),this.items[n].setResource(e),this},t.prototype.bind=function(e){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");i.prototype.bind.call(this,e);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=e,this.items[n].on("update",e.update,e)},t.prototype.unbind=function(e){i.prototype.unbind.call(this,e);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=null,this.items[n].off("update",e.update,e)},t.prototype.load=function(){var e=this;if(this._load)return this._load;var n=this.items.map(function(s){return s.resource}).filter(function(s){return s}),r=n.map(function(s){return s.load()});return this._load=Promise.all(r).then(function(){var s=e.items[0],a=s.realWidth,o=s.realHeight;return e.resize(a,o),Promise.resolve(e)}),this._load},t}(_s),$b=function(i){ee(t,i);function t(e,n){var r=this,s=n||{},a=s.width,o=s.height,h,l;return Array.isArray(e)?(h=e,l=e.length):l=e,r=i.call(this,l,{width:a,height:o})||this,h&&r.initFromArray(h,n),r}return t.prototype.addBaseTextureAt=function(e,n){if(e.resource)this.addResourceAt(e.resource,n);else throw new Error("ArrayResource does not support RenderTexture");return this},t.prototype.bind=function(e){i.prototype.bind.call(this,e),e.target=Hi.TEXTURE_2D_ARRAY},t.prototype.upload=function(e,n,r){var s=this,a=s.length,o=s.itemDirtyIds,h=s.items,l=e.gl;r.dirtyId<0&&l.texImage3D(l.TEXTURE_2D_ARRAY,0,r.internalFormat,this._width,this._height,a,0,n.format,r.type,null);for(var u=0;u<a;u++){var c=h[u];o[u]<c.dirtyId&&(o[u]=c.dirtyId,c.valid&&l.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,u,c.resource.width,c.resource.height,1,n.format,r.type,c.resource.source))}return!0},t}(ip),pi=function(i){ee(t,i);function t(e){var n=this,r=e,s=r.naturalWidth||r.videoWidth||r.width,a=r.naturalHeight||r.videoHeight||r.height;return n=i.call(this,s,a)||this,n.source=e,n.noSubImage=!1,n}return t.crossOrigin=function(e,n,r){r===void 0&&n.indexOf("data:")!==0?e.crossOrigin=Bb(n):r!==!1&&(e.crossOrigin=typeof r=="string"?r:"anonymous")},t.prototype.upload=function(e,n,r,s){var a=e.gl,o=n.realWidth,h=n.realHeight;if(s=s||this.source,s instanceof HTMLImageElement){if(!s.complete||s.naturalWidth===0)return!1}else if(s instanceof HTMLVideoElement&&s.readyState<=1)return!1;return a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===fn.UNPACK),!this.noSubImage&&n.target===a.TEXTURE_2D&&r.width===o&&r.height===h?a.texSubImage2D(a.TEXTURE_2D,0,0,0,n.format,r.type,s):(r.width=o,r.height=h,a.texImage2D(n.target,0,r.internalFormat,n.format,r.type,s)),!0},t.prototype.update=function(){if(!this.destroyed){var e=this.source,n=e.naturalWidth||e.videoWidth||e.width,r=e.naturalHeight||e.videoHeight||e.height;this.resize(n,r),i.prototype.update.call(this)}},t.prototype.dispose=function(){this.source=null},t}(_s),Jb=function(i){ee(t,i);function t(e){return i.call(this,e)||this}return t.test=function(e){var n=globalThis.OffscreenCanvas;return n&&e instanceof n?!0:globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement},t}(pi),Kb=function(i){ee(t,i);function t(e,n){var r=this,s=n||{},a=s.width,o=s.height,h=s.autoLoad,l=s.linkBaseTexture;if(e&&e.length!==t.SIDES)throw new Error("Invalid length. Got "+e.length+", expected 6");r=i.call(this,6,{width:a,height:o})||this;for(var u=0;u<t.SIDES;u++)r.items[u].target=Hi.TEXTURE_CUBE_MAP_POSITIVE_X+u;return r.linkBaseTexture=l!==!1,e&&r.initFromArray(e,n),h!==!1&&r.load(),r}return t.prototype.bind=function(e){i.prototype.bind.call(this,e),e.target=Hi.TEXTURE_CUBE_MAP},t.prototype.addBaseTextureAt=function(e,n,r){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");if(!this.linkBaseTexture||e.parentTextureArray||Object.keys(e._glTextures).length>0)if(e.resource)this.addResourceAt(e.resource,n);else throw new Error("CubeResource does not support copying of renderTexture.");else e.target=Hi.TEXTURE_CUBE_MAP_POSITIVE_X+n,e.parentTextureArray=this.baseTexture,this.items[n]=e;return e.valid&&!this.valid&&this.resize(e.realWidth,e.realHeight),this.items[n]=e,this},t.prototype.upload=function(e,n,r){for(var s=this.itemDirtyIds,a=0;a<t.SIDES;a++){var o=this.items[a];(s[a]<o.dirtyId||r.dirtyId<n.dirtyId)&&(o.valid&&o.resource?(o.resource.upload(e,o,r),s[a]=o.dirtyId):s[a]<-1&&(e.gl.texImage2D(o.target,0,r.internalFormat,n.realWidth,n.realHeight,0,n.format,r.type,null),s[a]=-1))}return!0},t.test=function(e){return Array.isArray(e)&&e.length===t.SIDES},t.SIDES=6,t}(ip),rp=function(i){ee(t,i);function t(e,n){var r=this;if(n=n||{},!(e instanceof HTMLImageElement)){var s=new Image;pi.crossOrigin(s,e,n.crossorigin),s.src=e,e=s}return r=i.call(this,e)||this,!e.complete&&r._width&&r._height&&(r._width=0,r._height=0),r.url=e.src,r._process=null,r.preserveBitmap=!1,r.createBitmap=(n.createBitmap!==void 0?n.createBitmap:ct.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,r.alphaMode=typeof n.alphaMode=="number"?n.alphaMode:null,r.bitmap=null,r._load=null,n.autoLoad!==!1&&r.load(),r}return t.prototype.load=function(e){var n=this;return this._load?this._load:(e!==void 0&&(this.createBitmap=e),this._load=new Promise(function(r,s){var a=n.source;n.url=a.src;var o=function(){n.destroyed||(a.onload=null,a.onerror=null,n.resize(a.width,a.height),n._load=null,n.createBitmap?r(n.process()):r(n))};a.complete&&a.src?o():(a.onload=o,a.onerror=function(h){s(h),n.onError.emit(h)})}),this._load)},t.prototype.process=function(){var e=this,n=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!globalThis.createImageBitmap)return Promise.resolve(this);var r=globalThis.createImageBitmap,s=!n.crossOrigin||n.crossOrigin==="anonymous";return this._process=fetch(n.src,{mode:s?"cors":"no-cors"}).then(function(a){return a.blob()}).then(function(a){return r(a,0,0,n.width,n.height,{premultiplyAlpha:e.alphaMode===null||e.alphaMode===fn.UNPACK?"premultiply":"none"})}).then(function(a){return e.destroyed?Promise.reject():(e.bitmap=a,e.update(),e._process=null,Promise.resolve(e))}),this._process},t.prototype.upload=function(e,n,r){if(typeof this.alphaMode=="number"&&(n.alphaMode=this.alphaMode),!this.createBitmap)return i.prototype.upload.call(this,e,n,r);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(i.prototype.upload.call(this,e,n,r,this.bitmap),!this.preserveBitmap){var s=!0,a=n._glTextures;for(var o in a){var h=a[o];if(h!==r&&h.dirtyId!==n.dirtyId){s=!1;break}}s&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},t.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,i.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},t.test=function(e){return typeof e=="string"||e instanceof HTMLImageElement},t}(pi),Zb=function(i){ee(t,i);function t(e,n){var r=this;return n=n||{},r=i.call(this,ct.ADAPTER.createCanvas())||this,r._width=0,r._height=0,r.svg=e,r.scale=n.scale||1,r._overrideWidth=n.width,r._overrideHeight=n.height,r._resolve=null,r._crossorigin=n.crossorigin,r._load=null,n.autoLoad!==!1&&r.load(),r}return t.prototype.load=function(){var e=this;return this._load?this._load:(this._load=new Promise(function(n){if(e._resolve=function(){e.resize(e.source.width,e.source.height),n(e)},t.SVG_XML.test(e.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");e.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(e.svg)))}e._loadSvg()}),this._load)},t.prototype._loadSvg=function(){var e=this,n=new Image;pi.crossOrigin(n,this.svg,this._crossorigin),n.src=this.svg,n.onerror=function(r){e._resolve&&(n.onerror=null,e.onError.emit(r))},n.onload=function(){if(e._resolve){var r=n.width,s=n.height;if(!r||!s)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var a=r*e.scale,o=s*e.scale;(e._overrideWidth||e._overrideHeight)&&(a=e._overrideWidth||e._overrideHeight/s*r,o=e._overrideHeight||e._overrideWidth/r*s),a=Math.round(a),o=Math.round(o);var h=e.source;h.width=a,h.height=o,h._pixiId="canvas_"+Yi(),h.getContext("2d").drawImage(n,0,0,r,s,0,0,a,o),e._resolve(),e._resolve=null}}},t.getSize=function(e){var n=t.SVG_SIZE.exec(e),r={};return n&&(r[n[1]]=Math.round(parseFloat(n[3])),r[n[5]]=Math.round(parseFloat(n[7]))),r},t.prototype.dispose=function(){i.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},t.test=function(e,n){return n==="svg"||typeof e=="string"&&e.startsWith("data:image/svg+xml")||typeof e=="string"&&t.SVG_XML.test(e)},t.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,t.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,t}(pi),Qb=function(i){ee(t,i);function t(e,n){var r=this;if(n=n||{},!(e instanceof HTMLVideoElement)){var s=document.createElement("video");s.setAttribute("preload","auto"),s.setAttribute("webkit-playsinline",""),s.setAttribute("playsinline",""),typeof e=="string"&&(e=[e]);var a=e[0].src||e[0];pi.crossOrigin(s,a,n.crossorigin);for(var o=0;o<e.length;++o){var h=document.createElement("source"),l=e[o],u=l.src,c=l.mime;u=u||e[o];var f=u.split("?").shift().toLowerCase(),d=f.slice(f.lastIndexOf(".")+1);c=c||t.MIME_TYPES[d]||"video/"+d,h.src=u,h.type=c,s.appendChild(h)}e=s}return r=i.call(this,e)||this,r.noSubImage=!0,r._autoUpdate=!0,r._isConnectedToTicker=!1,r._updateFPS=n.updateFPS||0,r._msToNextUpdate=0,r.autoPlay=n.autoPlay!==!1,r._load=null,r._resolve=null,r._onCanPlay=r._onCanPlay.bind(r),r._onError=r._onError.bind(r),n.autoLoad!==!1&&r.load(),r}return t.prototype.update=function(e){if(!this.destroyed){var n=De.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-n),(!this._updateFPS||this._msToNextUpdate<=0)&&(i.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},t.prototype.load=function(){var e=this;if(this._load)return this._load;var n=this.source;return(n.readyState===n.HAVE_ENOUGH_DATA||n.readyState===n.HAVE_FUTURE_DATA)&&n.width&&n.height&&(n.complete=!0),n.addEventListener("play",this._onPlayStart.bind(this)),n.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(n.addEventListener("canplay",this._onCanPlay),n.addEventListener("canplaythrough",this._onCanPlay),n.addEventListener("error",this._onError,!0)),this._load=new Promise(function(r){e.valid?r(e):(e._resolve=r,n.load())}),this._load},t.prototype._onError=function(e){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(e)},t.prototype._isSourcePlaying=function(){var e=this.source;return!e.paused&&!e.ended&&this._isSourceReady()},t.prototype._isSourceReady=function(){var e=this.source;return e.readyState>2},t.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(De.shared.add(this.update,this),this._isConnectedToTicker=!0)},t.prototype._onPlayStop=function(){this._isConnectedToTicker&&(De.shared.remove(this.update,this),this._isConnectedToTicker=!1)},t.prototype._onCanPlay=function(){var e=this.source;e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlay);var n=this.valid;this.resize(e.videoWidth,e.videoHeight),!n&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&e.play()},t.prototype.dispose=function(){this._isConnectedToTicker&&(De.shared.remove(this.update,this),this._isConnectedToTicker=!1);var e=this.source;e&&(e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),i.prototype.dispose.call(this)},Object.defineProperty(t.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(De.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(De.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(e){e!==this._updateFPS&&(this._updateFPS=e)},enumerable:!1,configurable:!0}),t.test=function(e,n){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement||t.TYPES.indexOf(n)>-1},t.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],t.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},t}(pi),tM=function(i){ee(t,i);function t(e){return i.call(this,e)||this}return t.test=function(e){return!!globalThis.createImageBitmap&&typeof ImageBitmap<"u"&&e instanceof ImageBitmap},t}(pi);Qh.push(rp,tM,Jb,Qb,Zb,Rs,Kb,$b);var eM=function(i){ee(t,i);function t(){return i!==null&&i.apply(this,arguments)||this}return t.prototype.upload=function(e,n,r){var s=e.gl;s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===fn.UNPACK);var a=n.realWidth,o=n.realHeight;return r.width===a&&r.height===o?s.texSubImage2D(n.target,0,0,0,a,o,n.format,r.type,this.data):(r.width=a,r.height=o,s.texImage2D(n.target,0,r.internalFormat,a,o,0,n.format,r.type,this.data)),!0},t}(Rs),nl=function(){function i(t,e){this.width=Math.round(t||100),this.height=Math.round(e||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Ie("disposeFramebuffer"),this.multisample=he.NONE}return Object.defineProperty(i.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),i.prototype.addColorTexture=function(t,e){return t===void 0&&(t=0),this.colorTextures[t]=e||new Wt(null,{scaleMode:En.NEAREST,resolution:1,mipmap:cn.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},i.prototype.addDepthTexture=function(t){return this.depthTexture=t||new Wt(new eM(null,{width:this.width,height:this.height}),{scaleMode:En.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:cn.OFF,format:it.DEPTH_COMPONENT,type:wt.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},i.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},i.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},i.prototype.resize=function(t,e){if(t=Math.round(t),e=Math.round(e),!(t===this.width&&e===this.height)){this.width=t,this.height=e,this.dirtyId++,this.dirtySize++;for(var n=0;n<this.colorTextures.length;n++){var r=this.colorTextures[n],s=r.resolution;r.setSize(t/s,e/s)}if(this.depthTexture){var s=this.depthTexture.resolution;this.depthTexture.setSize(t/s,e/s)}}},i.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},i.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},i}(),sp=function(i){ee(t,i);function t(e){e===void 0&&(e={});var n=this;if(typeof e=="number"){var r=arguments[0],s=arguments[1],a=arguments[2],o=arguments[3];e={width:r,height:s,scaleMode:a,resolution:o}}return e.width=e.width||100,e.height=e.height||100,e.multisample=e.multisample!==void 0?e.multisample:he.NONE,n=i.call(this,null,e)||this,n.mipmap=cn.OFF,n.valid=!0,n.clearColor=[0,0,0,0],n.framebuffer=new nl(n.realWidth,n.realHeight).addColorTexture(0,n),n.framebuffer.multisample=e.multisample,n.maskStack=[],n.filterStack=[{}],n}return t.prototype.resize=function(e,n){this.framebuffer.resize(e*this.resolution,n*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},t.prototype.dispose=function(){this.framebuffer.dispose(),i.prototype.dispose.call(this)},t.prototype.destroy=function(){i.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},t}(Wt),ap=function(){function i(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return i.prototype.set=function(t,e,n){var r=e.width,s=e.height;if(n){var a=t.width/2/r,o=t.height/2/s,h=t.x/r+a,l=t.y/s+o;n=ce.add(n,ce.NW),this.x0=h+a*ce.uX(n),this.y0=l+o*ce.uY(n),n=ce.add(n,2),this.x1=h+a*ce.uX(n),this.y1=l+o*ce.uY(n),n=ce.add(n,2),this.x2=h+a*ce.uX(n),this.y2=l+o*ce.uY(n),n=ce.add(n,2),this.x3=h+a*ce.uX(n),this.y3=l+o*ce.uY(n)}else this.x0=t.x/r,this.y0=t.y/s,this.x1=(t.x+t.width)/r,this.y1=t.y/s,this.x2=(t.x+t.width)/r,this.y2=(t.y+t.height)/s,this.x3=t.x/r,this.y3=(t.y+t.height)/s;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},i.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},i}(),uf=new ap;function ua(i){i.destroy=function(){},i.on=function(){},i.once=function(){},i.emit=function(){}}var Lt=function(i){ee(t,i);function t(e,n,r,s,a,o){var h=i.call(this)||this;if(h.noFrame=!1,n||(h.noFrame=!0,n=new Yt(0,0,1,1)),e instanceof t&&(e=e.baseTexture),h.baseTexture=e,h._frame=n,h.trim=s,h.valid=!1,h._uvs=uf,h.uvMatrix=null,h.orig=r||n,h._rotate=Number(a||0),a===!0)h._rotate=2;else if(h._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return h.defaultAnchor=o?new re(o.x,o.y):new re(0,0),h._updateID=0,h.textureCacheIds=[],e.valid?h.noFrame?e.valid&&h.onBaseTextureUpdated(e):h.frame=n:e.once("loaded",h.onBaseTextureUpdated,h),h.noFrame&&e.on("update",h.onBaseTextureUpdated,h),h}return t.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},t.prototype.onBaseTextureUpdated=function(e){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=e.width,this._frame.height=e.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},t.prototype.destroy=function(e){if(this.baseTexture){if(e){var n=this.baseTexture.resource;n&&n.url&&kn[n.url]&&t.removeFromCache(n.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,t.removeFromCache(this),this.textureCacheIds=null},t.prototype.clone=function(){var e=this._frame.clone(),n=this._frame===this.orig?e:this.orig.clone(),r=new t(this.baseTexture,!this.noFrame&&e,n,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(r._frame=e),r},t.prototype.updateUvs=function(){this._uvs===uf&&(this._uvs=new ap),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},t.from=function(e,n,r){n===void 0&&(n={}),r===void 0&&(r=ct.STRICT_TEXTURE_CACHE);var s=typeof e=="string",a=null;if(s)a=e;else if(e instanceof Wt){if(!e.cacheId){var o=n&&n.pixiIdPrefix||"pixiid";e.cacheId=o+"-"+Yi(),Wt.addToCache(e,e.cacheId)}a=e.cacheId}else{if(!e._pixiId){var o=n&&n.pixiIdPrefix||"pixiid";e._pixiId=o+"_"+Yi()}a=e._pixiId}var h=kn[a];if(s&&r&&!h)throw new Error('The cacheId "'+a+'" does not exist in TextureCache.');return!h&&!(e instanceof Wt)?(n.resolution||(n.resolution=ja(e)),h=new t(new Wt(e,n)),h.baseTexture.cacheId=a,Wt.addToCache(h.baseTexture,a),t.addToCache(h,a)):!h&&e instanceof Wt&&(h=new t(e),t.addToCache(h,a)),h},t.fromURL=function(e,n){var r=Object.assign({autoLoad:!1},n==null?void 0:n.resourceOptions),s=t.from(e,Object.assign({resourceOptions:r},n),!1),a=s.baseTexture.resource;return s.baseTexture.valid?Promise.resolve(s):a.load().then(function(){return Promise.resolve(s)})},t.fromBuffer=function(e,n,r,s){return new t(Wt.fromBuffer(e,n,r,s))},t.fromLoader=function(e,n,r,s){var a=new Wt(e,Object.assign({scaleMode:ct.SCALE_MODE,resolution:ja(n)},s)),o=a.resource;o instanceof rp&&(o.url=n);var h=new t(a);return r||(r=n),Wt.addToCache(h.baseTexture,r),t.addToCache(h,r),r!==n&&(Wt.addToCache(h.baseTexture,n),t.addToCache(h,n)),h.baseTexture.valid?Promise.resolve(h):new Promise(function(l){h.baseTexture.once("loaded",function(){return l(h)})})},t.addToCache=function(e,n){n&&(e.textureCacheIds.indexOf(n)===-1&&e.textureCacheIds.push(n),kn[n]&&console.warn("Texture added to the cache with an id ["+n+"] that already had an entry"),kn[n]=e)},t.removeFromCache=function(e){if(typeof e=="string"){var n=kn[e];if(n){var r=n.textureCacheIds.indexOf(e);return r>-1&&n.textureCacheIds.splice(r,1),delete kn[e],n}}else if(e&&e.textureCacheIds){for(var s=0;s<e.textureCacheIds.length;++s)kn[e.textureCacheIds[s]]===e&&delete kn[e.textureCacheIds[s]];return e.textureCacheIds.length=0,e}return null},Object.defineProperty(t.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"frame",{get:function(){return this._frame},set:function(e){this._frame=e,this.noFrame=!1;var n=e.x,r=e.y,s=e.width,a=e.height,o=n+s>this.baseTexture.width,h=r+a>this.baseTexture.height;if(o||h){var l=o&&h?"and":"or",u="X: "+n+" + "+s+" = "+(n+s)+" > "+this.baseTexture.width,c="Y: "+r+" + "+a+" = "+(r+a)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(u+" "+l+" "+c))}this.valid=s&&a&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=e),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotate",{get:function(){return this._rotate},set:function(e){this._rotate=e,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),t.prototype.castToBaseTexture=function(){return this.baseTexture},Object.defineProperty(t,"EMPTY",{get:function(){return t._EMPTY||(t._EMPTY=new t(new Wt),ua(t._EMPTY),ua(t._EMPTY.baseTexture)),t._EMPTY},enumerable:!1,configurable:!0}),Object.defineProperty(t,"WHITE",{get:function(){if(!t._WHITE){var e=ct.ADAPTER.createCanvas(16,16),n=e.getContext("2d");e.width=16,e.height=16,n.fillStyle="white",n.fillRect(0,0,16,16),t._WHITE=new t(Wt.from(e)),ua(t._WHITE),ua(t._WHITE.baseTexture)}return t._WHITE},enumerable:!1,configurable:!0}),t}(As),ji=function(i){ee(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.valid=!0,r.filterFrame=null,r.filterPoolKey=null,r.updateUvs(),r}return Object.defineProperty(t.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(e){this.framebuffer.multisample=e},enumerable:!1,configurable:!0}),t.prototype.resize=function(e,n,r){r===void 0&&(r=!0);var s=this.baseTexture.resolution,a=Math.round(e*s)/s,o=Math.round(n*s)/s;this.valid=a>0&&o>0,this._frame.width=this.orig.width=a,this._frame.height=this.orig.height=o,r&&this.baseTexture.resize(a,o),this.updateUvs()},t.prototype.setResolution=function(e){var n=this.baseTexture;n.resolution!==e&&(n.setResolution(e),this.resize(n.width,n.height,!1))},t.create=function(e){for(var n=arguments,r=[],s=1;s<arguments.length;s++)r[s-1]=n[s];return typeof e=="number"&&(un("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),e={width:e,height:r[0],scaleMode:r[1],resolution:r[2]}),new t(new sp(e))},t}(Lt),nM=function(){function i(t){this.texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return i.prototype.createTexture=function(t,e,n){n===void 0&&(n=he.NONE);var r=new sp(Object.assign({width:t,height:e,resolution:1,multisample:n},this.textureOptions));return new ji(r)},i.prototype.getOptimalTexture=function(t,e,n,r){n===void 0&&(n=1),r===void 0&&(r=he.NONE);var s;t=Math.ceil(t*n-1e-6),e=Math.ceil(e*n-1e-6),!this.enableFullScreen||t!==this._pixelsWidth||e!==this._pixelsHeight?(t=Ya(t),e=Ya(e),s=((t&65535)<<16|e&65535)>>>0,r>1&&(s+=r*4294967296)):s=r>1?-r:-1,this.texturePool[s]||(this.texturePool[s]=[]);var a=this.texturePool[s].pop();return a||(a=this.createTexture(t,e,r)),a.filterPoolKey=s,a.setResolution(n),a},i.prototype.getFilterTexture=function(t,e,n){var r=this.getOptimalTexture(t.width,t.height,e||t.resolution,n||he.NONE);return r.filterFrame=t.filterFrame,r},i.prototype.returnTexture=function(t){var e=t.filterPoolKey;t.filterFrame=null,this.texturePool[e].push(t)},i.prototype.returnFilterTexture=function(t){this.returnTexture(t)},i.prototype.clear=function(t){if(t=t!==!1,t)for(var e in this.texturePool){var n=this.texturePool[e];if(n)for(var r=0;r<n.length;r++)n[r].destroy(!0)}this.texturePool={}},i.prototype.setScreenSize=function(t){if(!(t.width===this._pixelsWidth&&t.height===this._pixelsHeight)){this.enableFullScreen=t.width>0&&t.height>0;for(var e in this.texturePool)if(Number(e)<0){var n=this.texturePool[e];if(n)for(var r=0;r<n.length;r++)n[r].destroy(!0);this.texturePool[e]=[]}this._pixelsWidth=t.width,this._pixelsHeight=t.height}},i.SCREEN_KEY=-1,i}(),cf=function(){function i(t,e,n,r,s,a,o){e===void 0&&(e=0),n===void 0&&(n=!1),r===void 0&&(r=wt.FLOAT),this.buffer=t,this.size=e,this.normalized=n,this.type=r,this.stride=s,this.start=a,this.instance=o}return i.prototype.destroy=function(){this.buffer=null},i.from=function(t,e,n,r,s){return new i(t,e,n,r,s)},i}(),iM=0,Ee=function(){function i(t,e,n){e===void 0&&(e=!0),n===void 0&&(n=!1),this.data=t||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=n,this.static=e,this.id=iM++,this.disposeRunner=new Ie("disposeBuffer")}return i.prototype.update=function(t){t instanceof Array&&(t=new Float32Array(t)),this.data=t||this.data,this._updateID++},i.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},i.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(i.prototype,"index",{get:function(){return this.type===Mn.ELEMENT_ARRAY_BUFFER},set:function(t){this.type=t?Mn.ELEMENT_ARRAY_BUFFER:Mn.ARRAY_BUFFER},enumerable:!1,configurable:!0}),i.from=function(t){return t instanceof Array&&(t=new Float32Array(t)),new i(t)},i}(),rM={Float32Array,Uint32Array,Int32Array,Uint8Array};function sM(i,t){for(var e=0,n=0,r={},s=0;s<i.length;s++)n+=t[s],e+=i[s].length;for(var a=new ArrayBuffer(e*4),o=null,h=0,s=0;s<i.length;s++){var l=t[s],u=i[s],c=Zd(u);r[c]||(r[c]=new rM[c](a)),o=r[c];for(var f=0;f<u.length;f++){var d=(f/l|0)*n+h,m=f%l;o[d+m]=u[f]}h+=l}return new Float32Array(a)}var ff={5126:4,5123:2,5121:1},aM=0,oM={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},Cs=function(){function i(t,e){t===void 0&&(t=[]),e===void 0&&(e={}),this.buffers=t,this.indexBuffer=null,this.attributes=e,this.glVertexArrayObjects={},this.id=aM++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Ie("disposeGeometry"),this.refCount=0}return i.prototype.addAttribute=function(t,e,n,r,s,a,o,h){if(n===void 0&&(n=0),r===void 0&&(r=!1),h===void 0&&(h=!1),!e)throw new Error("You must pass a buffer when creating an attribute");e instanceof Ee||(e instanceof Array&&(e=new Float32Array(e)),e=new Ee(e));var l=t.split("|");if(l.length>1){for(var u=0;u<l.length;u++)this.addAttribute(l[u],e,n,r,s);return this}var c=this.buffers.indexOf(e);return c===-1&&(this.buffers.push(e),c=this.buffers.length-1),this.attributes[t]=new cf(c,n,r,s,a,o,h),this.instanced=this.instanced||h,this},i.prototype.getAttribute=function(t){return this.attributes[t]},i.prototype.getBuffer=function(t){return this.buffers[this.getAttribute(t).buffer]},i.prototype.addIndex=function(t){return t instanceof Ee||(t instanceof Array&&(t=new Uint16Array(t)),t=new Ee(t)),t.type=Mn.ELEMENT_ARRAY_BUFFER,this.indexBuffer=t,this.buffers.indexOf(t)===-1&&this.buffers.push(t),this},i.prototype.getIndex=function(){return this.indexBuffer},i.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var t=[],e=[],n=new Ee,r;for(r in this.attributes){var s=this.attributes[r],a=this.buffers[s.buffer];t.push(a.data),e.push(s.size*ff[s.type]/4),s.buffer=0}for(n.data=sM(t,e),r=0;r<this.buffers.length;r++)this.buffers[r]!==this.indexBuffer&&this.buffers[r].destroy();return this.buffers=[n],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},i.prototype.getSize=function(){for(var t in this.attributes){var e=this.attributes[t],n=this.buffers[e.buffer];return n.data.length/(e.stride/4||e.size)}return 0},i.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},i.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},i.prototype.clone=function(){for(var t=new i,e=0;e<this.buffers.length;e++)t.buffers[e]=new Ee(this.buffers[e].data.slice(0));for(var e in this.attributes){var n=this.attributes[e];t.attributes[e]=new cf(n.buffer,n.size,n.normalized,n.type,n.stride,n.start,n.instance)}return this.indexBuffer&&(t.indexBuffer=t.buffers[this.buffers.indexOf(this.indexBuffer)],t.indexBuffer.type=Mn.ELEMENT_ARRAY_BUFFER),t},i.merge=function(t){for(var e=new i,n=[],r=[],s=[],a,o=0;o<t.length;o++){a=t[o];for(var h=0;h<a.buffers.length;h++)r[h]=r[h]||0,r[h]+=a.buffers[h].data.length,s[h]=0}for(var o=0;o<a.buffers.length;o++)n[o]=new oM[Zd(a.buffers[o].data)](r[o]),e.buffers[o]=new Ee(n[o]);for(var o=0;o<t.length;o++){a=t[o];for(var h=0;h<a.buffers.length;h++)n[h].set(a.buffers[h].data,s[h]),s[h]+=a.buffers[h].data.length}if(e.attributes=a.attributes,a.indexBuffer){e.indexBuffer=e.buffers[a.buffers.indexOf(a.indexBuffer)],e.indexBuffer.type=Mn.ELEMENT_ARRAY_BUFFER;for(var l=0,u=0,c=0,f=0,o=0;o<a.buffers.length;o++)if(a.buffers[o]!==a.indexBuffer){f=o;break}for(var o in a.attributes){var d=a.attributes[o];(d.buffer|0)===f&&(u+=d.size*ff[d.type]/4)}for(var o=0;o<t.length;o++){for(var m=t[o].indexBuffer.data,h=0;h<m.length;h++)e.indexBuffer.data[h+c]+=l;l+=t[o].buffers[f].data.length/u,c+=m.length}}return e},i}(),hM=function(i){ee(t,i);function t(){var e=i.call(this)||this;return e.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),e}return t}(Cs),op=function(i){ee(t,i);function t(){var e=i.call(this)||this;return e.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),e.uvs=new Float32Array([0,0,1,0,1,1,0,1]),e.vertexBuffer=new Ee(e.vertices),e.uvBuffer=new Ee(e.uvs),e.addAttribute("aVertexPosition",e.vertexBuffer).addAttribute("aTextureCoord",e.uvBuffer).addIndex([0,1,2,0,2,3]),e}return t.prototype.map=function(e,n){var r=0,s=0;return this.uvs[0]=r,this.uvs[1]=s,this.uvs[2]=r+n.width/e.width,this.uvs[3]=s,this.uvs[4]=r+n.width/e.width,this.uvs[5]=s+n.height/e.height,this.uvs[6]=r,this.uvs[7]=s+n.height/e.height,r=n.x,s=n.y,this.vertices[0]=r,this.vertices[1]=s,this.vertices[2]=r+n.width,this.vertices[3]=s,this.vertices[4]=r+n.width,this.vertices[5]=s+n.height,this.vertices[6]=r,this.vertices[7]=s+n.height,this.invalidate(),this},t.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},t}(Cs),lM=0,zi=function(){function i(t,e,n){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=lM++,this.static=!!e,this.ubo=!!n,t instanceof Ee?(this.buffer=t,this.buffer.type=Mn.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=t,this.ubo&&(this.buffer=new Ee(new Float32Array(1)),this.buffer.type=Mn.UNIFORM_BUFFER,this.autoManage=!0))}return i.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},i.prototype.add=function(t,e,n){if(!this.ubo)this.uniforms[t]=new i(e,n);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},i.from=function(t,e,n){return new i(t,e,n)},i.uboFrom=function(t,e){return new i(t,e??!0,!0)},i}(),uM=function(){function i(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=he.NONE,this.sourceFrame=new Yt,this.destinationFrame=new Yt,this.bindingSourceFrame=new Yt,this.bindingDestinationFrame=new Yt,this.filters=[],this.transform=null}return i.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},i}(),ca=[new re,new re,new re,new re],hh=new Me,cM=function(){function i(t){this.renderer=t,this.defaultFilterStack=[{}],this.texturePool=new nM,this.texturePool.setScreenSize(t.view),this.statePool=[],this.quad=new hM,this.quadUv=new op,this.tempRect=new Yt,this.activeState={},this.globalUniforms=new zi({outputFrame:new Yt,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return i.prototype.push=function(t,e){for(var n,r,s=this.renderer,a=this.defaultFilterStack,o=this.statePool.pop()||new uM,h=this.renderer.renderTexture,l=e[0].resolution,u=e[0].multisample,c=e[0].padding,f=e[0].autoFit,d=(n=e[0].legacy)!==null&&n!==void 0?n:!0,m=1;m<e.length;m++){var _=e[m];l=Math.min(l,_.resolution),u=Math.min(u,_.multisample),c=this.useMaxPadding?Math.max(c,_.padding):c+_.padding,f=f&&_.autoFit,d=d||((r=_.legacy)!==null&&r!==void 0?r:!0)}a.length===1&&(this.defaultFilterStack[0].renderTexture=h.current),a.push(o),o.resolution=l,o.multisample=u,o.legacy=d,o.target=t,o.sourceFrame.copyFrom(t.filterArea||t.getBounds(!0)),o.sourceFrame.pad(c);var p=this.tempRect.copyFrom(h.sourceFrame);s.projection.transform&&this.transformAABB(hh.copyFrom(s.projection.transform).invert(),p),f?(o.sourceFrame.fit(p),(o.sourceFrame.width<=0||o.sourceFrame.height<=0)&&(o.sourceFrame.width=0,o.sourceFrame.height=0)):o.sourceFrame.intersects(p)||(o.sourceFrame.width=0,o.sourceFrame.height=0),this.roundFrame(o.sourceFrame,h.current?h.current.resolution:s.resolution,h.sourceFrame,h.destinationFrame,s.projection.transform),o.renderTexture=this.getOptimalFilterTexture(o.sourceFrame.width,o.sourceFrame.height,l,u),o.filters=e,o.destinationFrame.width=o.renderTexture.width,o.destinationFrame.height=o.renderTexture.height;var v=this.tempRect;v.x=0,v.y=0,v.width=o.sourceFrame.width,v.height=o.sourceFrame.height,o.renderTexture.filterFrame=o.sourceFrame,o.bindingSourceFrame.copyFrom(h.sourceFrame),o.bindingDestinationFrame.copyFrom(h.destinationFrame),o.transform=s.projection.transform,s.projection.transform=null,h.bind(o.renderTexture,o.sourceFrame,v),s.framebuffer.clear(0,0,0,0)},i.prototype.pop=function(){var t=this.defaultFilterStack,e=t.pop(),n=e.filters;this.activeState=e;var r=this.globalUniforms.uniforms;r.outputFrame=e.sourceFrame,r.resolution=e.resolution;var s=r.inputSize,a=r.inputPixel,o=r.inputClamp;if(s[0]=e.destinationFrame.width,s[1]=e.destinationFrame.height,s[2]=1/s[0],s[3]=1/s[1],a[0]=Math.round(s[0]*e.resolution),a[1]=Math.round(s[1]*e.resolution),a[2]=1/a[0],a[3]=1/a[1],o[0]=.5*a[2],o[1]=.5*a[3],o[2]=e.sourceFrame.width*s[2]-.5*a[2],o[3]=e.sourceFrame.height*s[3]-.5*a[3],e.legacy){var h=r.filterArea;h[0]=e.destinationFrame.width,h[1]=e.destinationFrame.height,h[2]=e.sourceFrame.x,h[3]=e.sourceFrame.y,r.filterClamp=r.inputClamp}this.globalUniforms.update();var l=t[t.length-1];if(this.renderer.framebuffer.blit(),n.length===1)n[0].apply(this,e.renderTexture,l.renderTexture,sn.BLEND,e),this.returnFilterTexture(e.renderTexture);else{var u=e.renderTexture,c=this.getOptimalFilterTexture(u.width,u.height,e.resolution);c.filterFrame=u.filterFrame;var f=0;for(f=0;f<n.length-1;++f){f===1&&e.multisample>1&&(c=this.getOptimalFilterTexture(u.width,u.height,e.resolution),c.filterFrame=u.filterFrame),n[f].apply(this,u,c,sn.CLEAR,e);var d=u;u=c,c=d}n[f].apply(this,u,l.renderTexture,sn.BLEND,e),f>1&&e.multisample>1&&this.returnFilterTexture(e.renderTexture),this.returnFilterTexture(u),this.returnFilterTexture(c)}e.clear(),this.statePool.push(e)},i.prototype.bindAndClear=function(t,e){e===void 0&&(e=sn.CLEAR);var n=this.renderer,r=n.renderTexture,s=n.state;if(t===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,t&&t.filterFrame){var a=this.tempRect;a.x=0,a.y=0,a.width=t.filterFrame.width,a.height=t.filterFrame.height,r.bind(t,t.filterFrame,a)}else t!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?r.bind(t):this.renderer.renderTexture.bind(t,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var o=s.stateId&1||this.forceClear;(e===sn.CLEAR||e===sn.BLIT&&o)&&this.renderer.framebuffer.clear(0,0,0,0)},i.prototype.applyFilter=function(t,e,n,r){var s=this.renderer;s.state.set(t.state),this.bindAndClear(n,r),t.uniforms.uSampler=e,t.uniforms.filterGlobals=this.globalUniforms,s.shader.bind(t),t.legacy=!!t.program.attributeData.aTextureCoord,t.legacy?(this.quadUv.map(e._frame,e.filterFrame),s.geometry.bind(this.quadUv),s.geometry.draw(hn.TRIANGLES)):(s.geometry.bind(this.quad),s.geometry.draw(hn.TRIANGLE_STRIP))},i.prototype.calculateSpriteMatrix=function(t,e){var n=this.activeState,r=n.sourceFrame,s=n.destinationFrame,a=e._texture.orig,o=t.set(s.width,0,0,s.height,r.x,r.y),h=e.worldTransform.copyTo(Me.TEMP_MATRIX);return h.invert(),o.prepend(h),o.scale(1/a.width,1/a.height),o.translate(e.anchor.x,e.anchor.y),o},i.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},i.prototype.getOptimalFilterTexture=function(t,e,n,r){return n===void 0&&(n=1),r===void 0&&(r=he.NONE),this.texturePool.getOptimalTexture(t,e,n,r)},i.prototype.getFilterTexture=function(t,e,n){if(typeof t=="number"){var r=t;t=e,e=r}t=t||this.activeState.renderTexture;var s=this.texturePool.getOptimalTexture(t.width,t.height,e||t.resolution,n||he.NONE);return s.filterFrame=t.filterFrame,s},i.prototype.returnFilterTexture=function(t){this.texturePool.returnTexture(t)},i.prototype.emptyPool=function(){this.texturePool.clear(!0)},i.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},i.prototype.transformAABB=function(t,e){var n=ca[0],r=ca[1],s=ca[2],a=ca[3];n.set(e.left,e.top),r.set(e.left,e.bottom),s.set(e.right,e.top),a.set(e.right,e.bottom),t.apply(n,n),t.apply(r,r),t.apply(s,s),t.apply(a,a);var o=Math.min(n.x,r.x,s.x,a.x),h=Math.min(n.y,r.y,s.y,a.y),l=Math.max(n.x,r.x,s.x,a.x),u=Math.max(n.y,r.y,s.y,a.y);e.x=o,e.y=h,e.width=l-o,e.height=u-h},i.prototype.roundFrame=function(t,e,n,r,s){if(!(t.width<=0||t.height<=0||n.width<=0||n.height<=0)){if(s){var a=s.a,o=s.b,h=s.c,l=s.d;if((Math.abs(o)>1e-4||Math.abs(h)>1e-4)&&(Math.abs(a)>1e-4||Math.abs(l)>1e-4))return}s=s?hh.copyFrom(s):hh.identity(),s.translate(-n.x,-n.y).scale(r.width/n.width,r.height/n.height).translate(r.x,r.y),this.transformAABB(s,t),t.ceil(e),this.transformAABB(s.invert(),t)}},i}(),ho=function(){function i(t){this.renderer=t}return i.prototype.flush=function(){},i.prototype.destroy=function(){this.renderer=null},i.prototype.start=function(){},i.prototype.stop=function(){this.flush()},i.prototype.render=function(t){},i}(),fM=function(){function i(t){this.renderer=t,this.emptyRenderer=new ho(t),this.currentRenderer=this.emptyRenderer}return i.prototype.setObjectRenderer=function(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())},i.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},i.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},i.prototype.copyBoundTextures=function(t,e){for(var n=this.renderer.texture.boundTextures,r=e-1;r>=0;--r)t[r]=n[r]||null,t[r]&&(t[r]._batchLocation=r)},i.prototype.boundArray=function(t,e,n,r){for(var s=t.elements,a=t.ids,o=t.count,h=0,l=0;l<o;l++){var u=s[l],c=u._batchLocation;if(c>=0&&c<r&&e[c]===u){a[l]=c;continue}for(;h<r;){var f=e[h];if(f&&f._batchEnabled===n&&f._batchLocation===h){h++;continue}a[l]=h,u._batchLocation=h,e[h]=u;break}}},i.prototype.destroy=function(){this.renderer=null},i}(),df=0,dM=function(){function i(t){this.renderer=t,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),t.view.addEventListener("webglcontextlost",this.handleContextLost,!1),t.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(i.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),i.prototype.contextChange=function(t){this.gl=t,this.renderer.gl=t,this.renderer.CONTEXT_UID=df++},i.prototype.initFromContext=function(t){this.gl=t,this.validateContext(t),this.renderer.gl=t,this.renderer.CONTEXT_UID=df++,this.renderer.runners.contextChange.emit(t)},i.prototype.initFromOptions=function(t){var e=this.createContext(this.renderer.view,t);this.initFromContext(e)},i.prototype.createContext=function(t,e){var n;if(ct.PREFER_ENV>=Wn.WEBGL2&&(n=t.getContext("webgl2",e)),n)this.webGLVersion=2;else if(this.webGLVersion=1,n=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),!n)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=n,this.getExtensions(),this.gl},i.prototype.getExtensions=function(){var t=this.gl,e={loseContext:t.getExtension("WEBGL_lose_context"),anisotropicFiltering:t.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,e,{drawBuffers:t.getExtension("WEBGL_draw_buffers"),depthTexture:t.getExtension("WEBGL_depth_texture"),vertexArrayObject:t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:t.getExtension("OES_element_index_uint"),floatTexture:t.getExtension("OES_texture_float"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),textureHalfFloat:t.getExtension("OES_texture_half_float"),textureHalfFloatLinear:t.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,e,{colorBufferFloat:t.getExtension("EXT_color_buffer_float")})},i.prototype.handleContextLost=function(t){var e=this;t.preventDefault(),setTimeout(function(){e.gl.isContextLost()&&e.extensions.loseContext&&e.extensions.loseContext.restoreContext()},0)},i.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},i.prototype.destroy=function(){var t=this.renderer.view;this.renderer=null,t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},i.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},i.prototype.validateContext=function(t){var e=t.getContextAttributes(),n="WebGL2RenderingContext"in globalThis&&t instanceof globalThis.WebGL2RenderingContext;n&&(this.webGLVersion=2),e&&!e.stencil&&console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var r=n||!!t.getExtension("OES_element_index_uint");this.supports.uint32Indices=r,r||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},i}(),pM=function(){function i(t){this.framebuffer=t,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=he.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return i}(),mM=new Yt,vM=function(){function i(t){this.renderer=t,this.managedFramebuffers=[],this.unknownFramebuffer=new nl(10,10),this.msaaSamples=null}return i.prototype.contextChange=function(){this.disposeAll(!0);var t=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new Yt,this.hasMRT=!0,this.writeDepthTexture=!0,this.renderer.context.webGLVersion===1){var e=this.renderer.context.extensions.drawBuffers,n=this.renderer.context.extensions.depthTexture;ct.PREFER_ENV===Wn.WEBGL_LEGACY&&(e=null,n=null),e?t.drawBuffers=function(r){return e.drawBuffersWEBGL(r)}:(this.hasMRT=!1,t.drawBuffers=function(){}),n||(this.writeDepthTexture=!1)}else this.msaaSamples=t.getInternalformatParameter(t.RENDERBUFFER,t.RGBA8,t.SAMPLES)},i.prototype.bind=function(t,e,n){n===void 0&&(n=0);var r=this.gl;if(t){var s=t.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(t);this.current!==t&&(this.current=t,r.bindFramebuffer(r.FRAMEBUFFER,s.framebuffer)),s.mipLevel!==n&&(t.dirtyId++,t.dirtyFormat++,s.mipLevel=n),s.dirtyId!==t.dirtyId&&(s.dirtyId=t.dirtyId,s.dirtyFormat!==t.dirtyFormat?(s.dirtyFormat=t.dirtyFormat,s.dirtySize=t.dirtySize,this.updateFramebuffer(t,n)):s.dirtySize!==t.dirtySize&&(s.dirtySize=t.dirtySize,this.resizeFramebuffer(t)));for(var a=0;a<t.colorTextures.length;a++){var o=t.colorTextures[a];this.renderer.texture.unbind(o.parentTextureArray||o)}if(t.depthTexture&&this.renderer.texture.unbind(t.depthTexture),e){var h=e.width>>n,l=e.height>>n,u=h/e.width;this.setViewport(e.x*u,e.y*u,h,l)}else{var h=t.width>>n,l=t.height>>n;this.setViewport(0,0,h,l)}}else this.current&&(this.current=null,r.bindFramebuffer(r.FRAMEBUFFER,null)),e?this.setViewport(e.x,e.y,e.width,e.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},i.prototype.setViewport=function(t,e,n,r){var s=this.viewport;t=Math.round(t),e=Math.round(e),n=Math.round(n),r=Math.round(r),(s.width!==n||s.height!==r||s.x!==t||s.y!==e)&&(s.x=t,s.y=e,s.width=n,s.height=r,this.gl.viewport(t,e,n,r))},Object.defineProperty(i.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),i.prototype.clear=function(t,e,n,r,s){s===void 0&&(s=za.COLOR|za.DEPTH);var a=this.gl;a.clearColor(t,e,n,r),a.clear(s)},i.prototype.initFramebuffer=function(t){var e=this.gl,n=new pM(e.createFramebuffer());return n.multisample=this.detectSamples(t.multisample),t.glFramebuffers[this.CONTEXT_UID]=n,this.managedFramebuffers.push(t),t.disposeRunner.add(this),n},i.prototype.resizeFramebuffer=function(t){var e=this.gl,n=t.glFramebuffers[this.CONTEXT_UID];n.msaaBuffer&&(e.bindRenderbuffer(e.RENDERBUFFER,n.msaaBuffer),e.renderbufferStorageMultisample(e.RENDERBUFFER,n.multisample,e.RGBA8,t.width,t.height)),n.stencil&&(e.bindRenderbuffer(e.RENDERBUFFER,n.stencil),n.msaaBuffer?e.renderbufferStorageMultisample(e.RENDERBUFFER,n.multisample,e.DEPTH24_STENCIL8,t.width,t.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,t.width,t.height));var r=t.colorTextures,s=r.length;e.drawBuffers||(s=Math.min(s,1));for(var a=0;a<s;a++){var o=r[a],h=o.parentTextureArray||o;this.renderer.texture.bind(h,0)}t.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(t.depthTexture,0)},i.prototype.updateFramebuffer=function(t,e){var n=this.gl,r=t.glFramebuffers[this.CONTEXT_UID],s=t.colorTextures,a=s.length;n.drawBuffers||(a=Math.min(a,1)),r.multisample>1&&this.canMultisampleFramebuffer(t)?(r.msaaBuffer=r.msaaBuffer||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,r.msaaBuffer),n.renderbufferStorageMultisample(n.RENDERBUFFER,r.multisample,n.RGBA8,t.width,t.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,r.msaaBuffer)):r.msaaBuffer&&(n.deleteRenderbuffer(r.msaaBuffer),r.msaaBuffer=null,r.blitFramebuffer&&(r.blitFramebuffer.dispose(),r.blitFramebuffer=null));for(var o=[],h=0;h<a;h++){var l=s[h],u=l.parentTextureArray||l;this.renderer.texture.bind(u,0),!(h===0&&r.msaaBuffer)&&(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+h,l.target,u._glTextures[this.CONTEXT_UID].texture,e),o.push(n.COLOR_ATTACHMENT0+h))}if(o.length>1&&n.drawBuffers(o),t.depthTexture){var c=this.writeDepthTexture;if(c){var f=t.depthTexture;this.renderer.texture.bind(f,0),n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,f._glTextures[this.CONTEXT_UID].texture,e)}}(t.stencil||t.depth)&&!(t.depthTexture&&this.writeDepthTexture)?(r.stencil=r.stencil||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,r.stencil),r.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,r.multisample,n.DEPTH24_STENCIL8,t.width,t.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,t.width,t.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,r.stencil)):r.stencil&&(n.deleteRenderbuffer(r.stencil),r.stencil=null)},i.prototype.canMultisampleFramebuffer=function(t){return this.renderer.context.webGLVersion!==1&&t.colorTextures.length<=1&&!t.depthTexture},i.prototype.detectSamples=function(t){var e=this.msaaSamples,n=he.NONE;if(t<=1||e===null)return n;for(var r=0;r<e.length;r++)if(e[r]<=t){n=e[r];break}return n===1&&(n=he.NONE),n},i.prototype.blit=function(t,e,n){var r=this,s=r.current,a=r.renderer,o=r.gl,h=r.CONTEXT_UID;if(a.context.webGLVersion===2&&s){var l=s.glFramebuffers[h];if(l){if(!t){if(!l.msaaBuffer)return;var u=s.colorTextures[0];if(!u)return;l.blitFramebuffer||(l.blitFramebuffer=new nl(s.width,s.height),l.blitFramebuffer.addColorTexture(0,u)),t=l.blitFramebuffer,t.colorTextures[0]!==u&&(t.colorTextures[0]=u,t.dirtyId++,t.dirtyFormat++),(t.width!==s.width||t.height!==s.height)&&(t.width=s.width,t.height=s.height,t.dirtyId++,t.dirtySize++)}e||(e=mM,e.width=s.width,e.height=s.height),n||(n=e);var c=e.width===n.width&&e.height===n.height;this.bind(t),o.bindFramebuffer(o.READ_FRAMEBUFFER,l.framebuffer),o.blitFramebuffer(e.left,e.top,e.right,e.bottom,n.left,n.top,n.right,n.bottom,o.COLOR_BUFFER_BIT,c?o.NEAREST:o.LINEAR)}}},i.prototype.disposeFramebuffer=function(t,e){var n=t.glFramebuffers[this.CONTEXT_UID],r=this.gl;if(n){delete t.glFramebuffers[this.CONTEXT_UID];var s=this.managedFramebuffers.indexOf(t);s>=0&&this.managedFramebuffers.splice(s,1),t.disposeRunner.remove(this),e||(r.deleteFramebuffer(n.framebuffer),n.msaaBuffer&&r.deleteRenderbuffer(n.msaaBuffer),n.stencil&&r.deleteRenderbuffer(n.stencil)),n.blitFramebuffer&&n.blitFramebuffer.dispose()}},i.prototype.disposeAll=function(t){var e=this.managedFramebuffers;this.managedFramebuffers=[];for(var n=0;n<e.length;n++)this.disposeFramebuffer(e[n],t)},i.prototype.forceStencil=function(){var t=this.current;if(t){var e=t.glFramebuffers[this.CONTEXT_UID];if(!(!e||e.stencil)){t.stencil=!0;var n=t.width,r=t.height,s=this.gl,a=s.createRenderbuffer();s.bindRenderbuffer(s.RENDERBUFFER,a),e.msaaBuffer?s.renderbufferStorageMultisample(s.RENDERBUFFER,e.multisample,s.DEPTH24_STENCIL8,n,r):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,n,r),e.stencil=a,s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,a)}}},i.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new Yt},i.prototype.destroy=function(){this.renderer=null},i}(),lh={5126:4,5123:2,5121:1},_M=function(){function i(t){this.renderer=t,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return i.prototype.contextChange=function(){this.disposeAll(!0);var t=this.gl=this.renderer.gl,e=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,e.webGLVersion!==2){var n=this.renderer.context.extensions.vertexArrayObject;ct.PREFER_ENV===Wn.WEBGL_LEGACY&&(n=null),n?(t.createVertexArray=function(){return n.createVertexArrayOES()},t.bindVertexArray=function(s){return n.bindVertexArrayOES(s)},t.deleteVertexArray=function(s){return n.deleteVertexArrayOES(s)}):(this.hasVao=!1,t.createVertexArray=function(){return null},t.bindVertexArray=function(){return null},t.deleteVertexArray=function(){return null})}if(e.webGLVersion!==2){var r=t.getExtension("ANGLE_instanced_arrays");r?(t.vertexAttribDivisor=function(s,a){return r.vertexAttribDivisorANGLE(s,a)},t.drawElementsInstanced=function(s,a,o,h,l){return r.drawElementsInstancedANGLE(s,a,o,h,l)},t.drawArraysInstanced=function(s,a,o,h){return r.drawArraysInstancedANGLE(s,a,o,h)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=e.webGLVersion===2||!!e.extensions.uint32ElementIndex},i.prototype.bind=function(t,e){e=e||this.renderer.shader.shader;var n=this.gl,r=t.glVertexArrayObjects[this.CONTEXT_UID],s=!1;r||(this.managedGeometries[t.id]=t,t.disposeRunner.add(this),t.glVertexArrayObjects[this.CONTEXT_UID]=r={},s=!0);var a=r[e.program.id]||this.initGeometryVao(t,e,s);this._activeGeometry=t,this._activeVao!==a&&(this._activeVao=a,this.hasVao?n.bindVertexArray(a):this.activateVao(t,e.program)),this.updateBuffers()},i.prototype.reset=function(){this.unbind()},i.prototype.updateBuffers=function(){for(var t=this._activeGeometry,e=this.renderer.buffer,n=0;n<t.buffers.length;n++){var r=t.buffers[n];e.update(r)}},i.prototype.checkCompatibility=function(t,e){var n=t.attributes,r=e.attributeData;for(var s in r)if(!n[s])throw new Error('shader and geometry incompatible, geometry missing the "'+s+'" attribute')},i.prototype.getSignature=function(t,e){var n=t.attributes,r=e.attributeData,s=["g",t.id];for(var a in n)r[a]&&s.push(a,r[a].location);return s.join("-")},i.prototype.initGeometryVao=function(t,e,n){n===void 0&&(n=!0);var r=this.gl,s=this.CONTEXT_UID,a=this.renderer.buffer,o=e.program;o.glPrograms[s]||this.renderer.shader.generateProgram(e),this.checkCompatibility(t,o);var h=this.getSignature(t,o),l=t.glVertexArrayObjects[this.CONTEXT_UID],u=l[h];if(u)return l[o.id]=u,u;var c=t.buffers,f=t.attributes,d={},m={};for(var _ in c)d[_]=0,m[_]=0;for(var _ in f)!f[_].size&&o.attributeData[_]?f[_].size=o.attributeData[_].size:f[_].size||console.warn("PIXI Geometry attribute '"+_+"' size cannot be determined (likely the bound shader does not have the attribute)"),d[f[_].buffer]+=f[_].size*lh[f[_].type];for(var _ in f){var p=f[_],v=p.size;p.stride===void 0&&(d[p.buffer]===v*lh[p.type]?p.stride=0:p.stride=d[p.buffer]),p.start===void 0&&(p.start=m[p.buffer],m[p.buffer]+=v*lh[p.type])}u=r.createVertexArray(),r.bindVertexArray(u);for(var y=0;y<c.length;y++){var g=c[y];a.bind(g),n&&g._glBuffers[s].refCount++}return this.activateVao(t,o),this._activeVao=u,l[o.id]=u,l[h]=u,u},i.prototype.disposeGeometry=function(t,e){var n;if(this.managedGeometries[t.id]){delete this.managedGeometries[t.id];var r=t.glVertexArrayObjects[this.CONTEXT_UID],s=this.gl,a=t.buffers,o=(n=this.renderer)===null||n===void 0?void 0:n.buffer;if(t.disposeRunner.remove(this),!!r){if(o)for(var h=0;h<a.length;h++){var l=a[h]._glBuffers[this.CONTEXT_UID];l&&(l.refCount--,l.refCount===0&&!e&&o.dispose(a[h],e))}if(!e){for(var u in r)if(u[0]==="g"){var c=r[u];this._activeVao===c&&this.unbind(),s.deleteVertexArray(c)}}delete t.glVertexArrayObjects[this.CONTEXT_UID]}}},i.prototype.disposeAll=function(t){for(var e=Object.keys(this.managedGeometries),n=0;n<e.length;n++)this.disposeGeometry(this.managedGeometries[e[n]],t)},i.prototype.activateVao=function(t,e){var n=this.gl,r=this.CONTEXT_UID,s=this.renderer.buffer,a=t.buffers,o=t.attributes;t.indexBuffer&&s.bind(t.indexBuffer);var h=null;for(var l in o){var u=o[l],c=a[u.buffer],f=c._glBuffers[r];if(e.attributeData[l]){h!==f&&(s.bind(c),h=f);var d=e.attributeData[l].location;if(n.enableVertexAttribArray(d),n.vertexAttribPointer(d,u.size,u.type||n.FLOAT,u.normalized,u.stride,u.start),u.instance)if(this.hasInstance)n.vertexAttribDivisor(d,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},i.prototype.draw=function(t,e,n,r){var s=this.gl,a=this._activeGeometry;if(a.indexBuffer){var o=a.indexBuffer.data.BYTES_PER_ELEMENT,h=o===2?s.UNSIGNED_SHORT:s.UNSIGNED_INT;o===2||o===4&&this.canUseUInt32ElementIndex?a.instanced?s.drawElementsInstanced(t,e||a.indexBuffer.data.length,h,(n||0)*o,r||1):s.drawElements(t,e||a.indexBuffer.data.length,h,(n||0)*o):console.warn("unsupported index buffer type: uint32")}else a.instanced?s.drawArraysInstanced(t,n,e||a.getSize(),r||1):s.drawArrays(t,n,e||a.getSize());return this},i.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},i.prototype.destroy=function(){this.renderer=null},i}(),gM=function(){function i(t){t===void 0&&(t=null),this.type=xe.NONE,this.autoDetect=!0,this.maskObject=t||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=ct.FILTER_MULTISAMPLE,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}return Object.defineProperty(i.prototype,"filter",{get:function(){return this._filters?this._filters[0]:null},set:function(t){t?this._filters?this._filters[0]=t:this._filters=[t]:this._filters=null},enumerable:!1,configurable:!0}),i.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=xe.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},i.prototype.copyCountersOrReset=function(t){t?(this._stencilCounter=t._stencilCounter,this._scissorCounter=t._scissorCounter,this._scissorRect=t._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},i}();function pf(i,t,e){var n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function mf(i,t){var e=i.getShaderSource(t).split(`
`).map(function(l,u){return u+": "+l}),n=i.getShaderInfoLog(t),r=n.split(`
`),s={},a=r.map(function(l){return parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(l){return l&&!s[l]?(s[l]=!0,!0):!1}),o=[""];a.forEach(function(l){e[l-1]="%c"+e[l-1]+"%c",o.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var h=e.join(`
`);o[0]=h,console.error(n),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,o),console.groupEnd()}function yM(i,t,e,n){i.getProgramParameter(t,i.LINK_STATUS)||(i.getShaderParameter(e,i.COMPILE_STATUS)||mf(i,e),i.getShaderParameter(n,i.COMPILE_STATUS)||mf(i,n),console.error("PixiJS Error: Could not initialize shader."),i.getProgramInfoLog(t)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",i.getProgramInfoLog(t)))}function uh(i){for(var t=new Array(i),e=0;e<t.length;e++)t[e]=!1;return t}function hp(i,t){switch(i){case"float":return 0;case"vec2":return new Float32Array(2*t);case"vec3":return new Float32Array(3*t);case"vec4":return new Float32Array(4*t);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*t);case"ivec3":return new Int32Array(3*t);case"ivec4":return new Int32Array(4*t);case"uvec2":return new Uint32Array(2*t);case"uvec3":return new Uint32Array(3*t);case"uvec4":return new Uint32Array(4*t);case"bool":return!1;case"bvec2":return uh(2*t);case"bvec3":return uh(3*t);case"bvec4":return uh(4*t);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var lp={},jr=lp;function xM(){if(jr===lp||jr&&jr.isContextLost()){var i=ct.ADAPTER.createCanvas(),t=void 0;ct.PREFER_ENV>=Wn.WEBGL2&&(t=i.getContext("webgl2",{})),t||(t=i.getContext("webgl",{})||i.getContext("experimental-webgl",{}),t?t.getExtension("WEBGL_draw_buffers"):t=null),jr=t}return jr}var fa;function EM(){if(!fa){fa=Ye.MEDIUM;var i=xM();if(i&&i.getShaderPrecisionFormat){var t=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT);fa=t.precision?Ye.HIGH:Ye.MEDIUM}}return fa}function vf(i,t,e){if(i.substring(0,9)!=="precision"){var n=t;return t===Ye.HIGH&&e!==Ye.HIGH&&(n=Ye.MEDIUM),"precision "+n+` float;
`+i}else if(e!==Ye.HIGH&&i.substring(0,15)==="precision highp")return i.replace("precision highp","precision mediump");return i}var SM={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function up(i){return SM[i]}var da=null,_f={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function cp(i,t){if(!da){var e=Object.keys(_f);da={};for(var n=0;n<e.length;++n){var r=e[n];da[i[r]]=_f[r]}}return da[t]}var Ar=[{test:function(i){return i.type==="float"&&i.size===1&&!i.isArray},code:function(i){return`
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
                }`}}],TM={float:`
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
    }`},bM={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function MM(i,t){var e,n=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(var r in i.uniforms){var s=t[r];if(!s){!((e=i.uniforms[r])===null||e===void 0)&&e.group&&(i.uniforms[r].ubo?n.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+r+", '"+r+`');
                    `):n.push(`
                        renderer.shader.syncUniformGroup(uv.`+r+`, syncData);
                    `));continue}for(var a=i.uniforms[r],o=!1,h=0;h<Ar.length;h++)if(Ar[h].test(s,a)){n.push(Ar[h].code(r,a)),o=!0;break}if(!o){var l=s.size===1&&!s.isArray?TM:bM,u=l[s.type].replace("location",'ud["'+r+'"].location');n.push(`
            cu = ud["`+r+`"];
            cv = cu.value;
            v = uv["`+r+`"];
            `+u+";")}}return new Function("ud","uv","renderer","syncData",n.join(`
`))}var wM=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function AM(i){for(var t="",e=0;e<i;++e)e>0&&(t+=`
else `),e<i-1&&(t+="if(test == "+e+".0){}");return t}function RM(i,t){if(i===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var e=t.createShader(t.FRAGMENT_SHADER);;){var n=wM.replace(/%forloop%/gi,AM(i));if(t.shaderSource(e,n),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))i=i/2|0;else break}return i}var qr;function CM(){if(typeof qr=="boolean")return qr;try{var i=new Function("param1","param2","param3","return param1[param2] === param3;");qr=i({a:"b"},"a","b")===!0}catch{qr=!1}return qr}var PM=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,IM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,OM=0,pa={},Ps=function(){function i(t,e,n){n===void 0&&(n="pixi-shader"),this.id=OM++,this.vertexSrc=t||i.defaultVertexSrc,this.fragmentSrc=e||i.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(n=n.replace(/\s+/g,"-"),pa[n]?(pa[n]++,n+="-"+pa[n]):pa[n]=1,this.vertexSrc="#define SHADER_NAME "+n+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+n+`
`+this.fragmentSrc,this.vertexSrc=vf(this.vertexSrc,ct.PRECISION_VERTEX,Ye.HIGH),this.fragmentSrc=vf(this.fragmentSrc,ct.PRECISION_FRAGMENT,EM())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(i,"defaultVertexSrc",{get:function(){return IM},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultFragmentSrc",{get:function(){return PM},enumerable:!1,configurable:!0}),i.from=function(t,e,n){var r=t+e,s=of[r];return s||(of[r]=s=new i(t,e,n)),s},i}(),ci=function(){function i(t,e){this.uniformBindCount=0,this.program=t,e?e instanceof zi?this.uniformGroup=e:this.uniformGroup=new zi(e):this.uniformGroup=new zi({}),this.disposeRunner=new Ie("disposeShader")}return i.prototype.checkUniformExists=function(t,e){if(e.uniforms[t])return!0;for(var n in e.uniforms){var r=e.uniforms[n];if(r.group&&this.checkUniformExists(t,r))return!0}return!1},i.prototype.destroy=function(){this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()},Object.defineProperty(i.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),i.from=function(t,e,n){var r=Ps.from(t,e);return new i(r,n)},i}(),ch=0,fh=1,dh=2,ph=3,mh=4,vh=5,qi=function(){function i(){this.data=0,this.blendMode=Rt.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(i.prototype,"blend",{get:function(){return!!(this.data&1<<ch)},set:function(t){!!(this.data&1<<ch)!==t&&(this.data^=1<<ch)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"offsets",{get:function(){return!!(this.data&1<<fh)},set:function(t){!!(this.data&1<<fh)!==t&&(this.data^=1<<fh)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"culling",{get:function(){return!!(this.data&1<<dh)},set:function(t){!!(this.data&1<<dh)!==t&&(this.data^=1<<dh)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"depthTest",{get:function(){return!!(this.data&1<<ph)},set:function(t){!!(this.data&1<<ph)!==t&&(this.data^=1<<ph)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"depthMask",{get:function(){return!!(this.data&1<<vh)},set:function(t){!!(this.data&1<<vh)!==t&&(this.data^=1<<vh)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<mh)},set:function(t){!!(this.data&1<<mh)!==t&&(this.data^=1<<mh)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"blendMode",{get:function(){return this._blendMode},set:function(t){this.blend=t!==Rt.NONE,this._blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(t){this.offsets=!!t,this._polygonOffset=t},enumerable:!1,configurable:!0}),i.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},i.for2d=function(){var t=new i;return t.depthTest=!1,t.blend=!0,t},i}(),DM=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,LM=`attribute vec2 aVertexPosition;

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
`,vi=function(i){ee(t,i);function t(e,n,r){var s=this,a=Ps.from(e||t.defaultVertexSrc,n||t.defaultFragmentSrc);return s=i.call(this,a,r)||this,s.padding=0,s.resolution=ct.FILTER_RESOLUTION,s.multisample=ct.FILTER_MULTISAMPLE,s.enabled=!0,s.autoFit=!0,s.state=new qi,s}return t.prototype.apply=function(e,n,r,s,a){e.applyFilter(this,n,r,s)},Object.defineProperty(t.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(e){this.state.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultVertexSrc",{get:function(){return LM},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultFragmentSrc",{get:function(){return DM},enumerable:!1,configurable:!0}),t}(ci),NM=`attribute vec2 aVertexPosition;
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
`,UM=`varying vec2 vMaskCoord;
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
`,gf=new Me,ql=function(){function i(t,e){this._texture=t,this.mapCoord=new Me,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof e>"u"?.5:e,this.isSimple=!1}return Object.defineProperty(i.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture=t,this._textureID=-1},enumerable:!1,configurable:!0}),i.prototype.multiplyUvs=function(t,e){e===void 0&&(e=t);for(var n=this.mapCoord,r=0;r<t.length;r+=2){var s=t[r],a=t[r+1];e[r]=s*n.a+a*n.c+n.tx,e[r+1]=s*n.b+a*n.d+n.ty}return e},i.prototype.update=function(t){var e=this._texture;if(!e||!e.valid||!t&&this._textureID===e._updateID)return!1;this._textureID=e._updateID,this._updateID++;var n=e._uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);var r=e.orig,s=e.trim;s&&(gf.set(r.width/s.width,0,0,r.height/s.height,-s.x/s.width,-s.y/s.height),this.mapCoord.append(gf));var a=e.baseTexture,o=this.uClampFrame,h=this.clampMargin/a.resolution,l=this.clampOffset;return o[0]=(e._frame.x+h+l)/a.width,o[1]=(e._frame.y+h+l)/a.height,o[2]=(e._frame.x+e._frame.width-h+l)/a.width,o[3]=(e._frame.y+e._frame.height-h+l)/a.height,this.uClampOffset[0]=l/a.realWidth,this.uClampOffset[1]=l/a.realHeight,this.isSimple=e._frame.width===a.width&&e._frame.height===a.height&&e.rotate===0,!0},i}(),FM=function(i){ee(t,i);function t(e,n,r){var s=this,a=null;return typeof e!="string"&&n===void 0&&r===void 0&&(a=e,e=void 0,n=void 0,r=void 0),s=i.call(this,e||NM,n||UM,r)||this,s.maskSprite=a,s.maskMatrix=new Me,s}return Object.defineProperty(t.prototype,"maskSprite",{get:function(){return this._maskSprite},set:function(e){this._maskSprite=e,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),t.prototype.apply=function(e,n,r,s){var a=this._maskSprite,o=a._texture;o.valid&&(o.uvMatrix||(o.uvMatrix=new ql(o,0)),o.uvMatrix.update(),this.uniforms.npmAlpha=o.baseTexture.alphaMode?0:1,this.uniforms.mask=o,this.uniforms.otherMatrix=e.calculateSpriteMatrix(this.maskMatrix,a).prepend(o.uvMatrix.mapCoord),this.uniforms.alpha=a.worldAlpha,this.uniforms.maskClamp=o.uvMatrix.uClampFrame,e.applyFilter(this,n,r,s))},t}(vi),BM=function(){function i(t){this.renderer=t,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return i.prototype.setMaskStack=function(t){this.maskStack=t,this.renderer.scissor.setMaskStack(t),this.renderer.stencil.setMaskStack(t)},i.prototype.push=function(t,e){var n=e;if(!n.isMaskData){var r=this.maskDataPool.pop()||new gM;r.pooled=!0,r.maskObject=e,n=r}var s=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(n.copyCountersOrReset(s),n._colorMask=s?s._colorMask:15,n.autoDetect&&this.detect(n),n._target=t,n.type!==xe.SPRITE&&this.maskStack.push(n),n.enabled)switch(n.type){case xe.SCISSOR:this.renderer.scissor.push(n);break;case xe.STENCIL:this.renderer.stencil.push(n);break;case xe.SPRITE:n.copyCountersOrReset(null),this.pushSpriteMask(n);break;case xe.COLOR:this.pushColorMask(n);break}n.type===xe.SPRITE&&this.maskStack.push(n)},i.prototype.pop=function(t){var e=this.maskStack.pop();if(!(!e||e._target!==t)){if(e.enabled)switch(e.type){case xe.SCISSOR:this.renderer.scissor.pop(e);break;case xe.STENCIL:this.renderer.stencil.pop(e.maskObject);break;case xe.SPRITE:this.popSpriteMask(e);break;case xe.COLOR:this.popColorMask(e);break}if(e.reset(),e.pooled&&this.maskDataPool.push(e),this.maskStack.length!==0){var n=this.maskStack[this.maskStack.length-1];n.type===xe.SPRITE&&n._filters&&(n._filters[0].maskSprite=n.maskObject)}}},i.prototype.detect=function(t){var e=t.maskObject;e?e.isSprite?t.type=xe.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(t)?t.type=xe.SCISSOR:t.type=xe.STENCIL:t.type=xe.COLOR},i.prototype.pushSpriteMask=function(t){var e,n,r=t.maskObject,s=t._target,a=t._filters;a||(a=this.alphaMaskPool[this.alphaMaskIndex],a||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new FM]));var o=this.renderer,h=o.renderTexture,l,u;if(h.current){var c=h.current;l=t.resolution||c.resolution,u=(e=t.multisample)!==null&&e!==void 0?e:c.multisample}else l=t.resolution||o.resolution,u=(n=t.multisample)!==null&&n!==void 0?n:o.multisample;a[0].resolution=l,a[0].multisample=u,a[0].maskSprite=r;var f=s.filterArea;s.filterArea=r.getBounds(!0),o.filter.push(s,a),s.filterArea=f,t._filters||this.alphaMaskIndex++},i.prototype.popSpriteMask=function(t){this.renderer.filter.pop(),t._filters?t._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},i.prototype.pushColorMask=function(t){var e=t._colorMask,n=t._colorMask=e&t.colorMask;n!==e&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)},i.prototype.popColorMask=function(t){var e=t._colorMask,n=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;n!==e&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)},i.prototype.destroy=function(){this.renderer=null},i}(),fp=function(){function i(t){this.renderer=t,this.maskStack=[],this.glConst=0}return i.prototype.getStackLength=function(){return this.maskStack.length},i.prototype.setMaskStack=function(t){var e=this.renderer.gl,n=this.getStackLength();this.maskStack=t;var r=this.getStackLength();r!==n&&(r===0?e.disable(this.glConst):(e.enable(this.glConst),this._useCurrent()))},i.prototype._useCurrent=function(){},i.prototype.destroy=function(){this.renderer=null,this.maskStack=null},i}(),yf=new Me,xf=[],GM=function(i){ee(t,i);function t(e){var n=i.call(this,e)||this;return n.glConst=ct.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST,n}return t.prototype.getStackLength=function(){var e=this.maskStack[this.maskStack.length-1];return e?e._scissorCounter:0},t.prototype.calcScissorRect=function(e){var n;if(!e._scissorRectLocal){var r=e._scissorRect,s=e.maskObject,a=this.renderer,o=a.renderTexture,h=s.getBounds(!0,(n=xf.pop())!==null&&n!==void 0?n:new Yt);this.roundFrameToPixels(h,o.current?o.current.resolution:a.resolution,o.sourceFrame,o.destinationFrame,a.projection.transform),r&&h.fit(r),e._scissorRectLocal=h}},t.isMatrixRotated=function(e){if(!e)return!1;var n=e.a,r=e.b,s=e.c,a=e.d;return(Math.abs(r)>1e-4||Math.abs(s)>1e-4)&&(Math.abs(n)>1e-4||Math.abs(a)>1e-4)},t.prototype.testScissor=function(e){var n=e.maskObject;if(!n.isFastRect||!n.isFastRect()||t.isMatrixRotated(n.worldTransform)||t.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(e);var r=e._scissorRectLocal;return r.width>0&&r.height>0},t.prototype.roundFrameToPixels=function(e,n,r,s,a){t.isMatrixRotated(a)||(a=a?yf.copyFrom(a):yf.identity(),a.translate(-r.x,-r.y).scale(s.width/r.width,s.height/r.height).translate(s.x,s.y),this.renderer.filter.transformAABB(a,e),e.fit(s),e.x=Math.round(e.x*n),e.y=Math.round(e.y*n),e.width=Math.round(e.width*n),e.height=Math.round(e.height*n))},t.prototype.push=function(e){e._scissorRectLocal||this.calcScissorRect(e);var n=this.renderer.gl;e._scissorRect||n.enable(n.SCISSOR_TEST),e._scissorCounter++,e._scissorRect=e._scissorRectLocal,this._useCurrent()},t.prototype.pop=function(e){var n=this.renderer.gl;e&&xf.push(e._scissorRectLocal),this.getStackLength()>0?this._useCurrent():n.disable(n.SCISSOR_TEST)},t.prototype._useCurrent=function(){var e=this.maskStack[this.maskStack.length-1]._scissorRect,n;this.renderer.renderTexture.current?n=e.y:n=this.renderer.height-e.height-e.y,this.renderer.gl.scissor(e.x,n,e.width,e.height)},t}(fp),kM=function(i){ee(t,i);function t(e){var n=i.call(this,e)||this;return n.glConst=ct.ADAPTER.getWebGLRenderingContext().STENCIL_TEST,n}return t.prototype.getStackLength=function(){var e=this.maskStack[this.maskStack.length-1];return e?e._stencilCounter:0},t.prototype.push=function(e){var n=e.maskObject,r=this.renderer.gl,s=e._stencilCounter;s===0&&(this.renderer.framebuffer.forceStencil(),r.clearStencil(0),r.clear(r.STENCIL_BUFFER_BIT),r.enable(r.STENCIL_TEST)),e._stencilCounter++;var a=e._colorMask;a!==0&&(e._colorMask=0,r.colorMask(!1,!1,!1,!1)),r.stencilFunc(r.EQUAL,s,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.INCR),n.renderable=!0,n.render(this.renderer),this.renderer.batch.flush(),n.renderable=!1,a!==0&&(e._colorMask=a,r.colorMask((a&1)!==0,(a&2)!==0,(a&4)!==0,(a&8)!==0)),this._useCurrent()},t.prototype.pop=function(e){var n=this.renderer.gl;if(this.getStackLength()===0)n.disable(n.STENCIL_TEST);else{var r=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null,s=r?r._colorMask:15;s!==0&&(r._colorMask=0,n.colorMask(!1,!1,!1,!1)),n.stencilOp(n.KEEP,n.KEEP,n.DECR),e.renderable=!0,e.render(this.renderer),this.renderer.batch.flush(),e.renderable=!1,s!==0&&(r._colorMask=s,n.colorMask((s&1)!==0,(s&2)!==0,(s&4)!==0,(s&8)!==0)),this._useCurrent()}},t.prototype._useCurrent=function(){var e=this.renderer.gl;e.stencilFunc(e.EQUAL,this.getStackLength(),4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)},t}(fp),HM=function(){function i(t){this.renderer=t,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new Me,this.transform=null}return i.prototype.update=function(t,e,n,r){this.destinationFrame=t||this.destinationFrame||this.defaultFrame,this.sourceFrame=e||this.sourceFrame||t,this.calculateProjection(this.destinationFrame,this.sourceFrame,n,r),this.transform&&this.projectionMatrix.append(this.transform);var s=this.renderer;s.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,s.globalUniforms.update(),s.shader.shader&&s.shader.syncUniformGroup(s.shader.shader.uniforms.globals)},i.prototype.calculateProjection=function(t,e,n,r){var s=this.projectionMatrix,a=r?-1:1;s.identity(),s.a=1/e.width*2,s.d=a*(1/e.height*2),s.tx=-1-e.x*s.a,s.ty=-a-e.y*s.d},i.prototype.setTransform=function(t){},i.prototype.destroy=function(){this.renderer=null},i}(),wi=new Yt,$r=new Yt,zM=function(){function i(t){this.renderer=t,this.clearColor=t._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new Yt,this.destinationFrame=new Yt,this.viewportFrame=new Yt}return i.prototype.bind=function(t,e,n){t===void 0&&(t=null);var r=this.renderer;this.current=t;var s,a,o;t?(s=t.baseTexture,o=s.resolution,e||(wi.width=t.frame.width,wi.height=t.frame.height,e=wi),n||($r.x=t.frame.x,$r.y=t.frame.y,$r.width=e.width,$r.height=e.height,n=$r),a=s.framebuffer):(o=r.resolution,e||(wi.width=r.screen.width,wi.height=r.screen.height,e=wi),n||(n=wi,n.width=e.width,n.height=e.height));var h=this.viewportFrame;h.x=n.x*o,h.y=n.y*o,h.width=n.width*o,h.height=n.height*o,t||(h.y=r.view.height-(h.y+h.height)),h.ceil(),this.renderer.framebuffer.bind(a,h),this.renderer.projection.update(n,e,o,!a),t?this.renderer.mask.setMaskStack(s.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(e),this.destinationFrame.copyFrom(n)},i.prototype.clear=function(t,e){this.current?t=t||this.current.baseTexture.clearColor:t=t||this.clearColor;var n=this.destinationFrame,r=this.current?this.current.baseTexture:this.renderer.screen,s=n.width!==r.width||n.height!==r.height;if(s){var a=this.viewportFrame,o=a.x,h=a.y,l=a.width,u=a.height;o=Math.round(o),h=Math.round(h),l=Math.round(l),u=Math.round(u),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(o,h,l,u)}this.renderer.framebuffer.clear(t[0],t[1],t[2],t[3],e),s&&this.renderer.scissor.pop()},i.prototype.resize=function(){this.bind(null)},i.prototype.reset=function(){this.bind(null)},i.prototype.destroy=function(){this.renderer=null},i}();function VM(i,t,e,n,r){e.buffer.update(r)}var XM={float:`
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
    `},dp={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function WM(i){for(var t=i.map(function(h){return{data:h,offset:0,dataLen:0,dirty:0}}),e=0,n=0,r=0,s=0;s<t.length;s++){var a=t[s];if(e=dp[a.data.type],a.data.size>1&&(e=Math.max(e,16)*a.data.size),a.dataLen=e,n%e!==0&&n<16){var o=n%e%16;n+=o,r+=o}n+e>16?(r=Math.ceil(r/16)*16,a.offset=r,r+=e,n=e):(a.offset=r,n+=e,r+=e)}return r=Math.ceil(r/16)*16,{uboElements:t,size:r}}function YM(i,t){var e=[];for(var n in i)t[n]&&e.push(t[n]);return e.sort(function(r,s){return r.index-s.index}),e}function jM(i,t){if(!i.autoManage)return{size:0,syncFunc:VM};for(var e=YM(i.uniforms,t),n=WM(e),r=n.uboElements,s=n.size,a=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],o=0;o<r.length;o++){for(var h=r[o],l=i.uniforms[h.data.name],u=h.data.name,c=!1,f=0;f<Ar.length;f++){var d=Ar[f];if(d.codeUbo&&d.test(h.data,l)){a.push("offset = "+h.offset/4+";",Ar[f].codeUbo(h.data.name,l)),c=!0;break}}if(!c)if(h.data.size>1){var m=up(h.data.type),_=Math.max(dp[h.data.type]/16,1),p=m/_,v=(4-p%4)%4;a.push(`
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

                `)}else{var y=XM[h.data.type];a.push(`
                cv = ud.`+u+`.value;
                v = uv.`+u+`;
                offset = `+h.offset/4+`;
                `+y+`;
                `)}}return a.push(`
       renderer.buffer.update(buffer);
    `),{size:s,syncFunc:new Function("ud","uv","renderer","syncData","buffer",a.join(`
`))}}var qM=function(){function i(t,e){this.program=t,this.uniformData=e,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return i.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},i}();function $M(i,t){for(var e={},n=t.getProgramParameter(i,t.ACTIVE_ATTRIBUTES),r=0;r<n;r++){var s=t.getActiveAttrib(i,r);if(s.name.indexOf("gl_")!==0){var a=cp(t,s.type),o={type:a,name:s.name,size:up(a),location:t.getAttribLocation(i,s.name)};e[s.name]=o}}return e}function JM(i,t){for(var e={},n=t.getProgramParameter(i,t.ACTIVE_UNIFORMS),r=0;r<n;r++){var s=t.getActiveUniform(i,r),a=s.name.replace(/\[.*?\]$/,""),o=!!s.name.match(/\[.*?\]$/),h=cp(t,s.type);e[a]={name:a,index:r,type:h,size:s.size,isArray:o,value:hp(h,s.size)}}return e}function KM(i,t){var e=pf(i,i.VERTEX_SHADER,t.vertexSrc),n=pf(i,i.FRAGMENT_SHADER,t.fragmentSrc),r=i.createProgram();if(i.attachShader(r,e),i.attachShader(r,n),i.linkProgram(r),i.getProgramParameter(r,i.LINK_STATUS)||yM(i,r,e,n),t.attributeData=$M(r,i),t.uniformData=JM(r,i),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)){var s=Object.keys(t.attributeData);s.sort(function(u,c){return u>c?1:-1});for(var a=0;a<s.length;a++)t.attributeData[s[a]].location=a,i.bindAttribLocation(r,a,s[a]);i.linkProgram(r)}i.deleteShader(e),i.deleteShader(n);var o={};for(var a in t.uniformData){var h=t.uniformData[a];o[a]={location:i.getUniformLocation(r,a),value:hp(h.type,h.size)}}var l=new qM(r,o);return l}var ZM=0,ma={textureCount:0,uboCount:0},QM=function(){function i(t){this.destroyed=!1,this.renderer=t,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=ZM++}return i.prototype.systemCheck=function(){if(!CM())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},i.prototype.contextChange=function(t){this.gl=t,this.reset()},i.prototype.bind=function(t,e){t.disposeRunner.add(this),t.uniforms.globals=this.renderer.globalUniforms;var n=t.program,r=n.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(t);return this.shader=t,this.program!==n&&(this.program=n,this.gl.useProgram(r.program)),e||(ma.textureCount=0,ma.uboCount=0,this.syncUniformGroup(t.uniformGroup,ma)),r},i.prototype.setUniforms=function(t){var e=this.shader.program,n=e.glPrograms[this.renderer.CONTEXT_UID];e.syncUniforms(n.uniformData,t,this.renderer)},i.prototype.syncUniformGroup=function(t,e){var n=this.getGlProgram();(!t.static||t.dirtyId!==n.uniformDirtyGroups[t.id])&&(n.uniformDirtyGroups[t.id]=t.dirtyId,this.syncUniforms(t,n,e))},i.prototype.syncUniforms=function(t,e,n){var r=t.syncUniforms[this.shader.program.id]||this.createSyncGroups(t);r(e.uniformData,t.uniforms,this.renderer,n)},i.prototype.createSyncGroups=function(t){var e=this.getSignature(t,this.shader.program.uniformData,"u");return this.cache[e]||(this.cache[e]=MM(t,this.shader.program.uniformData)),t.syncUniforms[this.shader.program.id]=this.cache[e],t.syncUniforms[this.shader.program.id]},i.prototype.syncUniformBufferGroup=function(t,e){var n=this.getGlProgram();if(!t.static||t.dirtyId!==0||!n.uniformGroups[t.id]){t.dirtyId=0;var r=n.uniformGroups[t.id]||this.createSyncBufferGroup(t,n,e);t.buffer.update(),r(n.uniformData,t.uniforms,this.renderer,ma,t.buffer)}this.renderer.buffer.bindBufferBase(t.buffer,n.uniformBufferBindings[e])},i.prototype.createSyncBufferGroup=function(t,e,n){var r=this.renderer.gl;this.renderer.buffer.bind(t.buffer);var s=this.gl.getUniformBlockIndex(e.program,n);e.uniformBufferBindings[n]=this.shader.uniformBindCount,r.uniformBlockBinding(e.program,s,this.shader.uniformBindCount),this.shader.uniformBindCount++;var a=this.getSignature(t,this.shader.program.uniformData,"ubo"),o=this._uboCache[a];if(o||(o=this._uboCache[a]=jM(t,this.shader.program.uniformData)),t.autoManage){var h=new Float32Array(o.size/4);t.buffer.update(h)}return e.uniformGroups[t.id]=o.syncFunc,e.uniformGroups[t.id]},i.prototype.getSignature=function(t,e,n){var r=t.uniforms,s=[n+"-"];for(var a in r)s.push(a),e[a]&&s.push(e[a].type);return s.join("-")},i.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},i.prototype.generateProgram=function(t){var e=this.gl,n=t.program,r=KM(e,n);return n.glPrograms[this.renderer.CONTEXT_UID]=r,r},i.prototype.reset=function(){this.program=null,this.shader=null},i.prototype.disposeShader=function(t){this.shader===t&&(this.shader=null)},i.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},i}();function tw(i,t){return t===void 0&&(t=[]),t[Rt.NORMAL]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.ADD]=[i.ONE,i.ONE],t[Rt.MULTIPLY]=[i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.SCREEN]=[i.ONE,i.ONE_MINUS_SRC_COLOR,i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.OVERLAY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.DARKEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.LIGHTEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.COLOR_DODGE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.COLOR_BURN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.HARD_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.SOFT_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.DIFFERENCE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.EXCLUSION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.HUE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.SATURATION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.COLOR]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.LUMINOSITY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.NONE]=[0,0],t[Rt.NORMAL_NPM]=[i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.ADD_NPM]=[i.SRC_ALPHA,i.ONE,i.ONE,i.ONE],t[Rt.SCREEN_NPM]=[i.SRC_ALPHA,i.ONE_MINUS_SRC_COLOR,i.ONE,i.ONE_MINUS_SRC_ALPHA],t[Rt.SRC_IN]=[i.DST_ALPHA,i.ZERO],t[Rt.SRC_OUT]=[i.ONE_MINUS_DST_ALPHA,i.ZERO],t[Rt.SRC_ATOP]=[i.DST_ALPHA,i.ONE_MINUS_SRC_ALPHA],t[Rt.DST_OVER]=[i.ONE_MINUS_DST_ALPHA,i.ONE],t[Rt.DST_IN]=[i.ZERO,i.SRC_ALPHA],t[Rt.DST_OUT]=[i.ZERO,i.ONE_MINUS_SRC_ALPHA],t[Rt.DST_ATOP]=[i.ONE_MINUS_DST_ALPHA,i.SRC_ALPHA],t[Rt.XOR]=[i.ONE_MINUS_DST_ALPHA,i.ONE_MINUS_SRC_ALPHA],t[Rt.SUBTRACT]=[i.ONE,i.ONE,i.ONE,i.ONE,i.FUNC_REVERSE_SUBTRACT,i.FUNC_ADD],t}var ew=0,nw=1,iw=2,rw=3,sw=4,aw=5,ow=function(){function i(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=Rt.NONE,this._blendEq=!1,this.map=[],this.map[ew]=this.setBlend,this.map[nw]=this.setOffset,this.map[iw]=this.setCullFace,this.map[rw]=this.setDepthTest,this.map[sw]=this.setFrontFace,this.map[aw]=this.setDepthMask,this.checks=[],this.defaultState=new qi,this.defaultState.blend=!0}return i.prototype.contextChange=function(t){this.gl=t,this.blendModes=tw(t),this.set(this.defaultState),this.reset()},i.prototype.set=function(t){if(t=t||this.defaultState,this.stateId!==t.data){for(var e=this.stateId^t.data,n=0;e;)e&1&&this.map[n].call(this,!!(t.data&1<<n)),e=e>>1,n++;this.stateId=t.data}for(var n=0;n<this.checks.length;n++)this.checks[n](this,t)},i.prototype.forceState=function(t){t=t||this.defaultState;for(var e=0;e<this.map.length;e++)this.map[e].call(this,!!(t.data&1<<e));for(var e=0;e<this.checks.length;e++)this.checks[e](this,t);this.stateId=t.data},i.prototype.setBlend=function(t){this.updateCheck(i.checkBlendMode,t),this.gl[t?"enable":"disable"](this.gl.BLEND)},i.prototype.setOffset=function(t){this.updateCheck(i.checkPolygonOffset,t),this.gl[t?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},i.prototype.setDepthTest=function(t){this.gl[t?"enable":"disable"](this.gl.DEPTH_TEST)},i.prototype.setDepthMask=function(t){this.gl.depthMask(t)},i.prototype.setCullFace=function(t){this.gl[t?"enable":"disable"](this.gl.CULL_FACE)},i.prototype.setFrontFace=function(t){this.gl.frontFace(this.gl[t?"CW":"CCW"])},i.prototype.setBlendMode=function(t){if(t!==this.blendMode){this.blendMode=t;var e=this.blendModes[t],n=this.gl;e.length===2?n.blendFunc(e[0],e[1]):n.blendFuncSeparate(e[0],e[1],e[2],e[3]),e.length===6?(this._blendEq=!0,n.blendEquationSeparate(e[4],e[5])):this._blendEq&&(this._blendEq=!1,n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD))}},i.prototype.setPolygonOffset=function(t,e){this.gl.polygonOffset(t,e)},i.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},i.prototype.updateCheck=function(t,e){var n=this.checks.indexOf(t);e&&n===-1?this.checks.push(t):!e&&n!==-1&&this.checks.splice(n,1)},i.checkBlendMode=function(t,e){t.setBlendMode(e.blendMode)},i.checkPolygonOffset=function(t,e){t.setPolygonOffset(1,e.polygonOffset)},i.prototype.destroy=function(){this.gl=null},i}(),hw=function(){function i(t){this.renderer=t,this.count=0,this.checkCount=0,this.maxIdle=ct.GC_MAX_IDLE,this.checkCountMax=ct.GC_MAX_CHECK_COUNT,this.mode=ct.GC_MODE}return i.prototype.postrender=function(){this.renderer.renderingToScreen&&(this.count++,this.mode!==Xa.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},i.prototype.run=function(){for(var t=this.renderer.texture,e=t.managedTextures,n=!1,r=0;r<e.length;r++){var s=e[r];!s.framebuffer&&this.count-s.touched>this.maxIdle&&(t.destroyTexture(s,!0),e[r]=null,n=!0)}if(n){for(var a=0,r=0;r<e.length;r++)e[r]!==null&&(e[a++]=e[r]);e.length=a}},i.prototype.unload=function(t){var e=this.renderer.texture,n=t._texture;n&&!n.framebuffer&&e.destroyTexture(n);for(var r=t.children.length-1;r>=0;r--)this.unload(t.children[r])},i.prototype.destroy=function(){this.renderer=null},i}();function lw(i){var t,e,n,r,s,a,o,h,l,u,c,f,d,m,_,p,v,y,g,T,w,b,M;return"WebGL2RenderingContext"in globalThis&&i instanceof globalThis.WebGL2RenderingContext?M=(t={},t[wt.UNSIGNED_BYTE]=(e={},e[it.RGBA]=i.RGBA8,e[it.RGB]=i.RGB8,e[it.RG]=i.RG8,e[it.RED]=i.R8,e[it.RGBA_INTEGER]=i.RGBA8UI,e[it.RGB_INTEGER]=i.RGB8UI,e[it.RG_INTEGER]=i.RG8UI,e[it.RED_INTEGER]=i.R8UI,e[it.ALPHA]=i.ALPHA,e[it.LUMINANCE]=i.LUMINANCE,e[it.LUMINANCE_ALPHA]=i.LUMINANCE_ALPHA,e),t[wt.BYTE]=(n={},n[it.RGBA]=i.RGBA8_SNORM,n[it.RGB]=i.RGB8_SNORM,n[it.RG]=i.RG8_SNORM,n[it.RED]=i.R8_SNORM,n[it.RGBA_INTEGER]=i.RGBA8I,n[it.RGB_INTEGER]=i.RGB8I,n[it.RG_INTEGER]=i.RG8I,n[it.RED_INTEGER]=i.R8I,n),t[wt.UNSIGNED_SHORT]=(r={},r[it.RGBA_INTEGER]=i.RGBA16UI,r[it.RGB_INTEGER]=i.RGB16UI,r[it.RG_INTEGER]=i.RG16UI,r[it.RED_INTEGER]=i.R16UI,r[it.DEPTH_COMPONENT]=i.DEPTH_COMPONENT16,r),t[wt.SHORT]=(s={},s[it.RGBA_INTEGER]=i.RGBA16I,s[it.RGB_INTEGER]=i.RGB16I,s[it.RG_INTEGER]=i.RG16I,s[it.RED_INTEGER]=i.R16I,s),t[wt.UNSIGNED_INT]=(a={},a[it.RGBA_INTEGER]=i.RGBA32UI,a[it.RGB_INTEGER]=i.RGB32UI,a[it.RG_INTEGER]=i.RG32UI,a[it.RED_INTEGER]=i.R32UI,a[it.DEPTH_COMPONENT]=i.DEPTH_COMPONENT24,a),t[wt.INT]=(o={},o[it.RGBA_INTEGER]=i.RGBA32I,o[it.RGB_INTEGER]=i.RGB32I,o[it.RG_INTEGER]=i.RG32I,o[it.RED_INTEGER]=i.R32I,o),t[wt.FLOAT]=(h={},h[it.RGBA]=i.RGBA32F,h[it.RGB]=i.RGB32F,h[it.RG]=i.RG32F,h[it.RED]=i.R32F,h[it.DEPTH_COMPONENT]=i.DEPTH_COMPONENT32F,h),t[wt.HALF_FLOAT]=(l={},l[it.RGBA]=i.RGBA16F,l[it.RGB]=i.RGB16F,l[it.RG]=i.RG16F,l[it.RED]=i.R16F,l),t[wt.UNSIGNED_SHORT_5_6_5]=(u={},u[it.RGB]=i.RGB565,u),t[wt.UNSIGNED_SHORT_4_4_4_4]=(c={},c[it.RGBA]=i.RGBA4,c),t[wt.UNSIGNED_SHORT_5_5_5_1]=(f={},f[it.RGBA]=i.RGB5_A1,f),t[wt.UNSIGNED_INT_2_10_10_10_REV]=(d={},d[it.RGBA]=i.RGB10_A2,d[it.RGBA_INTEGER]=i.RGB10_A2UI,d),t[wt.UNSIGNED_INT_10F_11F_11F_REV]=(m={},m[it.RGB]=i.R11F_G11F_B10F,m),t[wt.UNSIGNED_INT_5_9_9_9_REV]=(_={},_[it.RGB]=i.RGB9_E5,_),t[wt.UNSIGNED_INT_24_8]=(p={},p[it.DEPTH_STENCIL]=i.DEPTH24_STENCIL8,p),t[wt.FLOAT_32_UNSIGNED_INT_24_8_REV]=(v={},v[it.DEPTH_STENCIL]=i.DEPTH32F_STENCIL8,v),t):M=(y={},y[wt.UNSIGNED_BYTE]=(g={},g[it.RGBA]=i.RGBA,g[it.RGB]=i.RGB,g[it.ALPHA]=i.ALPHA,g[it.LUMINANCE]=i.LUMINANCE,g[it.LUMINANCE_ALPHA]=i.LUMINANCE_ALPHA,g),y[wt.UNSIGNED_SHORT_5_6_5]=(T={},T[it.RGB]=i.RGB,T),y[wt.UNSIGNED_SHORT_4_4_4_4]=(w={},w[it.RGBA]=i.RGBA,w),y[wt.UNSIGNED_SHORT_5_5_5_1]=(b={},b[it.RGBA]=i.RGBA,b),y),M}var _h=function(){function i(t){this.texture=t,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=wt.UNSIGNED_BYTE,this.internalFormat=it.RGBA,this.samplerType=0}return i}(),uw=function(){function i(t){this.renderer=t,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new Wt,this.hasIntegerTextures=!1}return i.prototype.contextChange=function(){var t=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=lw(t);var e=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=e;for(var n=0;n<e;n++)this.boundTextures[n]=null;this.emptyTextures={};var r=new _h(t.createTexture());t.bindTexture(t.TEXTURE_2D,r.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[t.TEXTURE_2D]=r,this.emptyTextures[t.TEXTURE_CUBE_MAP]=new _h(t.createTexture()),t.bindTexture(t.TEXTURE_CUBE_MAP,this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);for(var n=0;n<6;n++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,null);t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR);for(var n=0;n<this.boundTextures.length;n++)this.bind(null,n)},i.prototype.bind=function(t,e){e===void 0&&(e=0);var n=this.gl;if(t=t==null?void 0:t.castToBaseTexture(),t&&t.valid&&!t.parentTextureArray){t.touched=this.renderer.textureGC.count;var r=t._glTextures[this.CONTEXT_UID]||this.initTexture(t);this.boundTextures[e]!==t&&(this.currentLocation!==e&&(this.currentLocation=e,n.activeTexture(n.TEXTURE0+e)),n.bindTexture(t.target,r.texture)),r.dirtyId!==t.dirtyId?(this.currentLocation!==e&&(this.currentLocation=e,n.activeTexture(n.TEXTURE0+e)),this.updateTexture(t)):r.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(t),this.boundTextures[e]=t}else this.currentLocation!==e&&(this.currentLocation=e,n.activeTexture(n.TEXTURE0+e)),n.bindTexture(n.TEXTURE_2D,this.emptyTextures[n.TEXTURE_2D].texture),this.boundTextures[e]=null},i.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var t=0;t<this.boundTextures.length;t++)this.boundTextures[t]=this.unknownTexture},i.prototype.unbind=function(t){var e=this,n=e.gl,r=e.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var s=0;s<r.length;s++)r[s]===this.unknownTexture&&this.bind(null,s)}for(var s=0;s<r.length;s++)r[s]===t&&(this.currentLocation!==s&&(n.activeTexture(n.TEXTURE0+s),this.currentLocation=s),n.bindTexture(t.target,this.emptyTextures[t.target].texture),r[s]=null)},i.prototype.ensureSamplerType=function(t){var e=this,n=e.boundTextures,r=e.hasIntegerTextures,s=e.CONTEXT_UID;if(r)for(var a=t-1;a>=0;--a){var o=n[a];if(o){var h=o._glTextures[s];h.samplerType!==Va.FLOAT&&this.renderer.texture.unbind(o)}}},i.prototype.initTexture=function(t){var e=new _h(this.gl.createTexture());return e.dirtyId=-1,t._glTextures[this.CONTEXT_UID]=e,this.managedTextures.push(t),t.on("dispose",this.destroyTexture,this),e},i.prototype.initTextureType=function(t,e){var n,r;e.internalFormat=(r=(n=this.internalFormats[t.type])===null||n===void 0?void 0:n[t.format])!==null&&r!==void 0?r:t.format,this.webGLVersion===2&&t.type===wt.HALF_FLOAT?e.type=this.gl.HALF_FLOAT:e.type=t.type},i.prototype.updateTexture=function(t){var e=t._glTextures[this.CONTEXT_UID];if(e){var n=this.renderer;if(this.initTextureType(t,e),t.resource&&t.resource.upload(n,t,e))e.samplerType!==Va.FLOAT&&(this.hasIntegerTextures=!0);else{var r=t.realWidth,s=t.realHeight,a=n.gl;(e.width!==r||e.height!==s||e.dirtyId<0)&&(e.width=r,e.height=s,a.texImage2D(t.target,0,e.internalFormat,r,s,0,t.format,e.type,null))}t.dirtyStyleId!==e.dirtyStyleId&&this.updateTextureStyle(t),e.dirtyId=t.dirtyId}},i.prototype.destroyTexture=function(t,e){var n=this.gl;if(t=t.castToBaseTexture(),t._glTextures[this.CONTEXT_UID]&&(this.unbind(t),n.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),t.off("dispose",this.destroyTexture,this),delete t._glTextures[this.CONTEXT_UID],!e)){var r=this.managedTextures.indexOf(t);r!==-1&&wr(this.managedTextures,r,1)}},i.prototype.updateTextureStyle=function(t){var e=t._glTextures[this.CONTEXT_UID];e&&((t.mipmap===cn.POW2||this.webGLVersion!==2)&&!t.isPowerOfTwo?e.mipmap=!1:e.mipmap=t.mipmap>=1,this.webGLVersion!==2&&!t.isPowerOfTwo?e.wrapMode=bn.CLAMP:e.wrapMode=t.wrapMode,t.resource&&t.resource.style(this.renderer,t,e)||this.setStyle(t,e),e.dirtyStyleId=t.dirtyStyleId)},i.prototype.setStyle=function(t,e){var n=this.gl;if(e.mipmap&&t.mipmap!==cn.ON_MANUAL&&n.generateMipmap(t.target),n.texParameteri(t.target,n.TEXTURE_WRAP_S,e.wrapMode),n.texParameteri(t.target,n.TEXTURE_WRAP_T,e.wrapMode),e.mipmap){n.texParameteri(t.target,n.TEXTURE_MIN_FILTER,t.scaleMode===En.LINEAR?n.LINEAR_MIPMAP_LINEAR:n.NEAREST_MIPMAP_NEAREST);var r=this.renderer.context.extensions.anisotropicFiltering;if(r&&t.anisotropicLevel>0&&t.scaleMode===En.LINEAR){var s=Math.min(t.anisotropicLevel,n.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));n.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY_EXT,s)}}else n.texParameteri(t.target,n.TEXTURE_MIN_FILTER,t.scaleMode===En.LINEAR?n.LINEAR:n.NEAREST);n.texParameteri(t.target,n.TEXTURE_MAG_FILTER,t.scaleMode===En.LINEAR?n.LINEAR:n.NEAREST)},i.prototype.destroy=function(){this.renderer=null},i}(),gh=new Me,cw=function(i){ee(t,i);function t(e,n){e===void 0&&(e=fs.UNKNOWN);var r=i.call(this)||this;return n=Object.assign({},ct.RENDER_OPTIONS,n),r.options=n,r.type=e,r.screen=new Yt(0,0,n.width,n.height),r.view=n.view||ct.ADAPTER.createCanvas(),r.resolution=n.resolution||ct.RESOLUTION,r.useContextAlpha=n.useContextAlpha,r.autoDensity=!!n.autoDensity,r.preserveDrawingBuffer=n.preserveDrawingBuffer,r.clearBeforeRender=n.clearBeforeRender,r._backgroundColor=0,r._backgroundColorRgba=[0,0,0,1],r._backgroundColorString="#000000",r.backgroundColor=n.backgroundColor||r._backgroundColor,r.backgroundAlpha=n.backgroundAlpha,n.transparent!==void 0&&(un("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),r.useContextAlpha=n.transparent,r.backgroundAlpha=n.transparent?0:1),r._lastObjectRendered=null,r.plugins={},r}return t.prototype.initPlugins=function(e){for(var n in e)this.plugins[n]=new e[n](this)},Object.defineProperty(t.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),t.prototype.resize=function(e,n){this.view.width=Math.round(e*this.resolution),this.view.height=Math.round(n*this.resolution);var r=this.view.width/this.resolution,s=this.view.height/this.resolution;this.screen.width=r,this.screen.height=s,this.autoDensity&&(this.view.style.width=r+"px",this.view.style.height=s+"px"),this.emit("resize",r,s)},t.prototype.generateTexture=function(e,n,r,s){n===void 0&&(n={}),typeof n=="number"&&(un("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),n={scaleMode:n,resolution:r,region:s});var a=n.region,o=jb(n,["region"]);s=a||e.getLocalBounds(null,!0),s.width===0&&(s.width=1),s.height===0&&(s.height=1);var h=ji.create(el({width:s.width,height:s.height},o));return gh.tx=-s.x,gh.ty=-s.y,this.render(e,{renderTexture:h,clear:!1,transform:gh,skipUpdateTransform:!!e.parent}),h},t.prototype.destroy=function(e){for(var n in this.plugins)this.plugins[n].destroy(),this.plugins[n]=null;e&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var r=this;r.plugins=null,r.type=fs.UNKNOWN,r.view=null,r.screen=null,r._tempDisplayObjectParent=null,r.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(t.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(e){this._backgroundColor=e,this._backgroundColorString=jd(e),Dr(e,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(e){this._backgroundColorRgba[3]=e},enumerable:!1,configurable:!0}),t}(As),fw=function(){function i(t){this.buffer=t||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return i}(),dw=function(){function i(t){this.renderer=t,this.managedBuffers={},this.boundBufferBases={}}return i.prototype.destroy=function(){this.renderer=null},i.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},i.prototype.bind=function(t){var e=this,n=e.gl,r=e.CONTEXT_UID,s=t._glBuffers[r]||this.createGLBuffer(t);n.bindBuffer(t.type,s.buffer)},i.prototype.bindBufferBase=function(t,e){var n=this,r=n.gl,s=n.CONTEXT_UID;if(this.boundBufferBases[e]!==t){var a=t._glBuffers[s]||this.createGLBuffer(t);this.boundBufferBases[e]=t,r.bindBufferBase(r.UNIFORM_BUFFER,e,a.buffer)}},i.prototype.bindBufferRange=function(t,e,n){var r=this,s=r.gl,a=r.CONTEXT_UID;n=n||0;var o=t._glBuffers[a]||this.createGLBuffer(t);s.bindBufferRange(s.UNIFORM_BUFFER,e||0,o.buffer,n*256,256)},i.prototype.update=function(t){var e=this,n=e.gl,r=e.CONTEXT_UID,s=t._glBuffers[r];if(t._updateID!==s.updateID)if(s.updateID=t._updateID,n.bindBuffer(t.type,s.buffer),s.byteLength>=t.data.byteLength)n.bufferSubData(t.type,0,t.data);else{var a=t.static?n.STATIC_DRAW:n.DYNAMIC_DRAW;s.byteLength=t.data.byteLength,n.bufferData(t.type,t.data,a)}},i.prototype.dispose=function(t,e){if(this.managedBuffers[t.id]){delete this.managedBuffers[t.id];var n=t._glBuffers[this.CONTEXT_UID],r=this.gl;t.disposeRunner.remove(this),n&&(e||r.deleteBuffer(n.buffer),delete t._glBuffers[this.CONTEXT_UID])}},i.prototype.disposeAll=function(t){for(var e=Object.keys(this.managedBuffers),n=0;n<e.length;n++)this.dispose(this.managedBuffers[e[n]],t)},i.prototype.createGLBuffer=function(t){var e=this,n=e.CONTEXT_UID,r=e.gl;return t._glBuffers[n]=new fw(r.createBuffer()),this.managedBuffers[t.id]=t,t.disposeRunner.add(this),t._glBuffers[n]},i}(),pp=function(i){ee(t,i);function t(e){var n=i.call(this,fs.WEBGL,e)||this;return e=n.options,n.gl=null,n.CONTEXT_UID=0,n.runners={destroy:new Ie("destroy"),contextChange:new Ie("contextChange"),reset:new Ie("reset"),update:new Ie("update"),postrender:new Ie("postrender"),prerender:new Ie("prerender"),resize:new Ie("resize")},n.runners.contextChange.add(n),n.globalUniforms=new zi({projectionMatrix:new Me},!0),n.addSystem(BM,"mask").addSystem(dM,"context").addSystem(ow,"state").addSystem(QM,"shader").addSystem(uw,"texture").addSystem(dw,"buffer").addSystem(_M,"geometry").addSystem(vM,"framebuffer").addSystem(GM,"scissor").addSystem(kM,"stencil").addSystem(HM,"projection").addSystem(hw,"textureGC").addSystem(cM,"filter").addSystem(zM,"renderTexture").addSystem(fM,"batch"),n.initPlugins(t.__plugins),n.multisample=void 0,e.context?n.context.initFromContext(e.context):n.context.initFromOptions({alpha:!!n.useContextAlpha,antialias:e.antialias,premultipliedAlpha:n.useContextAlpha&&n.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:e.preserveDrawingBuffer,powerPreference:n.options.powerPreference}),n.renderingToScreen=!0,XE(n.context.webGLVersion===2?"WebGL 2":"WebGL 1"),n.resize(n.options.width,n.options.height),n}return t.create=function(e){if(WE())return new t(e);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},t.prototype.contextChange=function(){var e=this.gl,n;if(this.context.webGLVersion===1){var r=e.getParameter(e.FRAMEBUFFER_BINDING);e.bindFramebuffer(e.FRAMEBUFFER,null),n=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.FRAMEBUFFER,r)}else{var r=e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),n=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,r)}n>=he.HIGH?this.multisample=he.HIGH:n>=he.MEDIUM?this.multisample=he.MEDIUM:n>=he.LOW?this.multisample=he.LOW:this.multisample=he.NONE},t.prototype.addSystem=function(e,n){var r=new e(this);if(this[n])throw new Error('Whoops! The name "'+n+'" is already in use');this[n]=r;for(var s in this.runners)this.runners[s].add(r);return this},t.prototype.render=function(e,n){var r,s,a,o;if(n&&(n instanceof ji?(un("6.0.0","Renderer#render arguments changed, use options instead."),r=n,s=arguments[2],a=arguments[3],o=arguments[4]):(r=n.renderTexture,s=n.clear,a=n.transform,o=n.skipUpdateTransform)),this.renderingToScreen=!r,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=a,!this.context.isLost){if(r||(this._lastObjectRendered=e),!o){var h=e.enableTempParent();e.updateTransform(),e.disableTempParent(h)}this.renderTexture.bind(r),this.batch.currentRenderer.start(),(s!==void 0?s:this.clearBeforeRender)&&this.renderTexture.clear(),e.render(this),this.batch.currentRenderer.flush(),r&&r.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},t.prototype.generateTexture=function(e,n,r,s){n===void 0&&(n={});var a=i.prototype.generateTexture.call(this,e,n,r,s);return this.framebuffer.blit(),a},t.prototype.resize=function(e,n){i.prototype.resize.call(this,e,n),this.runners.resize.emit(this.screen.height,this.screen.width)},t.prototype.reset=function(){return this.runners.reset.emit(),this},t.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},t.prototype.destroy=function(e){this.runners.destroy.emit();for(var n in this.runners)this.runners[n].destroy();i.prototype.destroy.call(this,e),this.gl=null},Object.defineProperty(t.prototype,"extract",{get:function(){return un("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),t.registerPlugin=function(e,n){un("6.5.0","Renderer.registerPlugin() has been deprecated, please use extensions.add() instead."),$n.add({name:e,type:Qt.RendererPlugin,ref:n})},t.__plugins={},t}(cw);$n.handleByMap(Qt.RendererPlugin,pp.__plugins);function pw(i){return pp.create(i)}var mw=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,vw=`attribute vec2 aVertexPosition;

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
`,_w=mw,mp=vw,il=function(){function i(){this.texArray=null,this.blend=0,this.type=hn.TRIANGLES,this.start=0,this.size=0,this.data=null}return i}(),rl=function(){function i(){this.elements=[],this.ids=[],this.count=0}return i.prototype.clear=function(){for(var t=0;t<this.count;t++)this.elements[t]=null;this.count=0},i}(),sl=function(){function i(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(i.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),i.prototype.view=function(t){return this[t+"View"]},i.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},i.sizeOf=function(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(t+" isn't a valid view type")}},i}(),gw=function(i){ee(t,i);function t(e){var n=i.call(this,e)||this;return n.shaderGenerator=null,n.geometryClass=null,n.vertexSize=null,n.state=qi.for2d(),n.size=ct.SPRITE_BATCH_SIZE*4,n._vertexCount=0,n._indexCount=0,n._bufferedElements=[],n._bufferedTextures=[],n._bufferSize=0,n._shader=null,n._packedGeometries=[],n._packedGeometryPoolSize=2,n._flushId=0,n._aBuffers={},n._iBuffers={},n.MAX_TEXTURES=1,n.renderer.on("prerender",n.onPrerender,n),e.runners.contextChange.add(n),n._dcIndex=0,n._aIndex=0,n._iIndex=0,n._attributeBuffer=null,n._indexBuffer=null,n._tempBoundTextures=[],n}return t.prototype.contextChange=function(){var e=this.renderer.gl;ct.PREFER_ENV===Wn.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),ct.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=RM(this.MAX_TEXTURES,e)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var n=0;n<this._packedGeometryPoolSize;n++)this._packedGeometries[n]=new this.geometryClass;this.initFlushBuffers()},t.prototype.initFlushBuffers=function(){for(var e=t._drawCallPool,n=t._textureArrayPool,r=this.size/4,s=Math.floor(r/this.MAX_TEXTURES)+1;e.length<r;)e.push(new il);for(;n.length<s;)n.push(new rl);for(var a=0;a<this.MAX_TEXTURES;a++)this._tempBoundTextures[a]=null},t.prototype.onPrerender=function(){this._flushId=0},t.prototype.render=function(e){e._texture.valid&&(this._vertexCount+e.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=e.vertexData.length/2,this._indexCount+=e.indices.length,this._bufferedTextures[this._bufferSize]=e._texture.baseTexture,this._bufferedElements[this._bufferSize++]=e)},t.prototype.buildTexturesAndDrawCalls=function(){var e=this,n=e._bufferedTextures,r=e.MAX_TEXTURES,s=t._textureArrayPool,a=this.renderer.batch,o=this._tempBoundTextures,h=this.renderer.textureGC.count,l=++Wt._globalBatch,u=0,c=s[0],f=0;a.copyBoundTextures(o,r);for(var d=0;d<this._bufferSize;++d){var m=n[d];n[d]=null,m._batchEnabled!==l&&(c.count>=r&&(a.boundArray(c,o,l,r),this.buildDrawCalls(c,f,d),f=d,c=s[++u],++l),m._batchEnabled=l,m.touched=h,c.elements[c.count++]=m)}c.count>0&&(a.boundArray(c,o,l,r),this.buildDrawCalls(c,f,this._bufferSize),++u,++l);for(var d=0;d<o.length;d++)o[d]=null;Wt._globalBatch=l},t.prototype.buildDrawCalls=function(e,n,r){var s=this,a=s._bufferedElements,o=s._attributeBuffer,h=s._indexBuffer,l=s.vertexSize,u=t._drawCallPool,c=this._dcIndex,f=this._aIndex,d=this._iIndex,m=u[c];m.start=this._iIndex,m.texArray=e;for(var _=n;_<r;++_){var p=a[_],v=p._texture.baseTexture,y=$d[v.alphaMode?1:0][p.blendMode];a[_]=null,n<_&&m.blend!==y&&(m.size=d-m.start,n=_,m=u[++c],m.texArray=e,m.start=d),this.packInterleavedGeometry(p,o,h,f,d),f+=p.vertexData.length/2*l,d+=p.indices.length,m.blend=y}n<r&&(m.size=d-m.start,++c),this._dcIndex=c,this._aIndex=f,this._iIndex=d},t.prototype.bindAndClearTexArray=function(e){for(var n=this.renderer.texture,r=0;r<e.count;r++)n.bind(e.elements[r],e.ids[r]),e.elements[r]=null;e.count=0},t.prototype.updateGeometry=function(){var e=this,n=e._packedGeometries,r=e._attributeBuffer,s=e._indexBuffer;ct.CAN_UPLOAD_SAME_BUFFER?(n[this._flushId]._buffer.update(r.rawBinaryData),n[this._flushId]._indexBuffer.update(s),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,n[this._flushId]=new this.geometryClass),n[this._flushId]._buffer.update(r.rawBinaryData),n[this._flushId]._indexBuffer.update(s),this.renderer.geometry.bind(n[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},t.prototype.drawBatches=function(){for(var e=this._dcIndex,n=this.renderer,r=n.gl,s=n.state,a=t._drawCallPool,o=null,h=0;h<e;h++){var l=a[h],u=l.texArray,c=l.type,f=l.size,d=l.start,m=l.blend;o!==u&&(o=u,this.bindAndClearTexArray(u)),this.state.blendMode=m,s.set(this.state),r.drawElements(c,f,r.UNSIGNED_SHORT,d*2)}},t.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},t.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),ct.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},t.prototype.stop=function(){this.flush()},t.prototype.destroy=function(){for(var e=0;e<this._packedGeometryPoolSize;e++)this._packedGeometries[e]&&this._packedGeometries[e].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),i.prototype.destroy.call(this)},t.prototype.getAttributeBuffer=function(e){var n=Ya(Math.ceil(e/8)),r=sf(n),s=n*8;this._aBuffers.length<=r&&(this._iBuffers.length=r+1);var a=this._aBuffers[s];return a||(this._aBuffers[s]=a=new sl(s*this.vertexSize*4)),a},t.prototype.getIndexBuffer=function(e){var n=Ya(Math.ceil(e/12)),r=sf(n),s=n*12;this._iBuffers.length<=r&&(this._iBuffers.length=r+1);var a=this._iBuffers[r];return a||(this._iBuffers[r]=a=new Uint16Array(s)),a},t.prototype.packInterleavedGeometry=function(e,n,r,s,a){for(var o=n.uint32View,h=n.float32View,l=s/this.vertexSize,u=e.uvs,c=e.indices,f=e.vertexData,d=e._texture.baseTexture._batchLocation,m=Math.min(e.worldAlpha,1),_=m<1&&e._texture.baseTexture.alphaMode?Yl(e._tintRGB,m):e._tintRGB+(m*255<<24),p=0;p<f.length;p+=2)h[s++]=f[p],h[s++]=f[p+1],h[s++]=u[p],h[s++]=u[p+1],o[s++]=_,h[s++]=d;for(var p=0;p<c.length;p++)r[a++]=l+c[p]},t._drawCallPool=[],t._textureArrayPool=[],t}(ho),yw=function(){function i(t,e){if(this.vertexSrc=t,this.fragTemplate=e,this.programCache={},this.defaultGroupCache={},e.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(e.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return i.prototype.generateShader=function(t){if(!this.programCache[t]){for(var e=new Int32Array(t),n=0;n<t;n++)e[n]=n;this.defaultGroupCache[t]=zi.from({uSamplers:e},!0);var r=this.fragTemplate;r=r.replace(/%count%/gi,""+t),r=r.replace(/%forloop%/gi,this.generateSampleSrc(t)),this.programCache[t]=new Ps(this.vertexSrc,r)}var s={tint:new Float32Array([1,1,1,1]),translationMatrix:new Me,default:this.defaultGroupCache[t]};return new ci(this.programCache[t],s)},i.prototype.generateSampleSrc=function(t){var e="";e+=`
`,e+=`
`;for(var n=0;n<t;n++)n>0&&(e+=`
else `),n<t-1&&(e+="if(vTextureId < "+n+".5)"),e+=`
{`,e+=`
	color = texture2D(uSamplers[`+n+"], vTextureCoord);",e+=`
}`;return e+=`
`,e+=`
`,e},i}(),vp=function(i){ee(t,i);function t(e){e===void 0&&(e=!1);var n=i.call(this)||this;return n._buffer=new Ee(null,e,!1),n._indexBuffer=new Ee(null,e,!0),n.addAttribute("aVertexPosition",n._buffer,2,!1,wt.FLOAT).addAttribute("aTextureCoord",n._buffer,2,!1,wt.FLOAT).addAttribute("aColor",n._buffer,4,!0,wt.UNSIGNED_BYTE).addAttribute("aTextureId",n._buffer,1,!0,wt.FLOAT).addIndex(n._indexBuffer),n}return t}(Cs),Ef=`precision highp float;
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
`,Sf=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,xw=function(){function i(){}return i.create=function(t){var e=Object.assign({vertex:Ef,fragment:Sf,geometryClass:vp,vertexSize:6},t),n=e.vertex,r=e.fragment,s=e.vertexSize,a=e.geometryClass;return function(o){ee(h,o);function h(l){var u=o.call(this,l)||this;return u.shaderGenerator=new yw(n,r),u.geometryClass=a,u.vertexSize=s,u}return h}(gw)},Object.defineProperty(i,"defaultVertexSrc",{get:function(){return Ef},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultFragmentTemplate",{get:function(){return Sf},enumerable:!1,configurable:!0}),i}(),_p=xw.create();Object.assign(_p,{extension:{name:"batch",type:Qt.RendererPlugin}});/*!
 * @pixi/accessibility - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ew={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};ge.mixin(Ew);var Sw=9,va=100,Tw=0,bw=0,Tf=2,bf=1,Mw=-1e3,ww=-1e3,Aw=2,Rw=function(){function i(t){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(Sn.tablet||Sn.phone)&&this.createTouchHook();var e=document.createElement("div");e.style.width=va+"px",e.style.height=va+"px",e.style.position="absolute",e.style.top=Tw+"px",e.style.left=bw+"px",e.style.zIndex=Tf.toString(),this.div=e,this.renderer=t,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(i.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),i.prototype.createTouchHook=function(){var t=this,e=document.createElement("button");e.style.width=bf+"px",e.style.height=bf+"px",e.style.position="absolute",e.style.top=Mw+"px",e.style.left=ww+"px",e.style.zIndex=Aw.toString(),e.style.backgroundColor="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",function(){t._isMobileAccessibility=!0,t.activate(),t.destroyTouchHook()}),document.body.appendChild(e),this._hookDiv=e},i.prototype.destroyTouchHook=function(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)},i.prototype.activate=function(){var t;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(t=this.renderer.view.parentNode)===null||t===void 0||t.appendChild(this.div))},i.prototype.deactivate=function(){var t;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(t=this.div.parentNode)===null||t===void 0||t.removeChild(this.div))},i.prototype.updateAccessibleObjects=function(t){if(!(!t.visible||!t.accessibleChildren)){t.accessible&&t.interactive&&(t._accessibleActive||this.addChild(t),t.renderId=this.renderId);var e=t.children;if(e)for(var n=0;n<e.length;n++)this.updateAccessibleObjects(e[n])}},i.prototype.update=function(){var t=performance.now();if(!(Sn.android.device&&t<this.androidUpdateCount)&&(this.androidUpdateCount=t+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var e=this.renderer.view.getBoundingClientRect(),n=e.left,r=e.top,s=e.width,a=e.height,o=this.renderer,h=o.width,l=o.height,u=o.resolution,c=s/h*u,f=a/l*u,d=this.div;d.style.left=n+"px",d.style.top=r+"px",d.style.width=h+"px",d.style.height=l+"px";for(var m=0;m<this.children.length;m++){var _=this.children[m];if(_.renderId!==this.renderId)_._accessibleActive=!1,wr(this.children,m,1),this.div.removeChild(_._accessibleDiv),this.pool.push(_._accessibleDiv),_._accessibleDiv=null,m--;else{d=_._accessibleDiv;var p=_.hitArea,v=_.worldTransform;_.hitArea?(d.style.left=(v.tx+p.x*v.a)*c+"px",d.style.top=(v.ty+p.y*v.d)*f+"px",d.style.width=p.width*v.a*c+"px",d.style.height=p.height*v.d*f+"px"):(p=_.getBounds(),this.capHitArea(p),d.style.left=p.x*c+"px",d.style.top=p.y*f+"px",d.style.width=p.width*c+"px",d.style.height=p.height*f+"px",d.title!==_.accessibleTitle&&_.accessibleTitle!==null&&(d.title=_.accessibleTitle),d.getAttribute("aria-label")!==_.accessibleHint&&_.accessibleHint!==null&&d.setAttribute("aria-label",_.accessibleHint)),(_.accessibleTitle!==d.title||_.tabIndex!==d.tabIndex)&&(d.title=_.accessibleTitle,d.tabIndex=_.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}},i.prototype.updateDebugHTML=function(t){t.innerHTML="type: "+t.type+"</br> title : "+t.title+"</br> tabIndex: "+t.tabIndex},i.prototype.capHitArea=function(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0);var e=this.renderer,n=e.width,r=e.height;t.x+t.width>n&&(t.width=n-t.x),t.y+t.height>r&&(t.height=r-t.y)},i.prototype.addChild=function(t){var e=this.pool.pop();e||(e=document.createElement("button"),e.style.width=va+"px",e.style.height=va+"px",e.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",e.style.position="absolute",e.style.zIndex=Tf.toString(),e.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?e.setAttribute("aria-live","off"):e.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?e.setAttribute("aria-relevant","additions"):e.setAttribute("aria-relevant","text"),e.addEventListener("click",this._onClick.bind(this)),e.addEventListener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusOut.bind(this))),e.style.pointerEvents=t.accessiblePointerEvents,e.type=t.accessibleType,t.accessibleTitle&&t.accessibleTitle!==null?e.title=t.accessibleTitle:(!t.accessibleHint||t.accessibleHint===null)&&(e.title="displayObject "+t.tabIndex),t.accessibleHint&&t.accessibleHint!==null&&e.setAttribute("aria-label",t.accessibleHint),this.debug&&this.updateDebugHTML(e),t._accessibleActive=!0,t._accessibleDiv=e,e.displayObject=t,this.children.push(t),this.div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIndex=t.tabIndex},i.prototype._onClick=function(t){var e=this.renderer.plugins.interaction,n=t.target.displayObject,r=e.eventData;e.dispatchEvent(n,"click",r),e.dispatchEvent(n,"pointertap",r),e.dispatchEvent(n,"tap",r)},i.prototype._onFocus=function(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","assertive");var e=this.renderer.plugins.interaction,n=t.target.displayObject,r=e.eventData;e.dispatchEvent(n,"mouseover",r)},i.prototype._onFocusOut=function(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","polite");var e=this.renderer.plugins.interaction,n=t.target.displayObject,r=e.eventData;e.dispatchEvent(n,"mouseout",r)},i.prototype._onKeyDown=function(t){t.keyCode===Sw&&this.activate()},i.prototype._onMouseMove=function(t){t.movementX===0&&t.movementY===0||this.deactivate()},i.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},i.extension={name:"accessibility",type:[Qt.RendererPlugin,Qt.CanvasRendererPlugin]},i}();/*!
 * @pixi/interaction - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Mf=function(){function i(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new re,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(i.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),i.prototype.getLocalPosition=function(t,e,n){return t.worldTransform.applyInverse(n||this.global,e)},i.prototype.copyEvent=function(t){"isPrimary"in t&&t.isPrimary&&(this.isPrimary=!0),this.button="button"in t&&t.button;var e="buttons"in t&&t.buttons;this.buttons=Number.isInteger(e)?e:"which"in t&&t.which,this.width="width"in t&&t.width,this.height="height"in t&&t.height,this.tiltX="tiltX"in t&&t.tiltX,this.tiltY="tiltY"in t&&t.tiltY,this.pointerType="pointerType"in t&&t.pointerType,this.pressure="pressure"in t&&t.pressure,this.rotationAngle="rotationAngle"in t&&t.rotationAngle,this.twist="twist"in t&&t.twist||0,this.tangentialPressure="tangentialPressure"in t&&t.tangentialPressure||0},i.prototype.reset=function(){this.isPrimary=!1},i}();/*! *****************************************************************************
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
***************************************************************************** */var al=function(i,t){return al=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},al(i,t)};function Cw(i,t){al(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Pw=function(){function i(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return i.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},i.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},i}(),yh=function(){function i(t){this._pointerId=t,this._flags=i.FLAGS.NONE}return i.prototype._doSet=function(t,e){e?this._flags=this._flags|t:this._flags=this._flags&~t},Object.defineProperty(i.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"flags",{get:function(){return this._flags},set:function(t){this._flags=t},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"none",{get:function(){return this._flags===i.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"over",{get:function(){return(this._flags&i.FLAGS.OVER)!==0},set:function(t){this._doSet(i.FLAGS.OVER,t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rightDown",{get:function(){return(this._flags&i.FLAGS.RIGHT_DOWN)!==0},set:function(t){this._doSet(i.FLAGS.RIGHT_DOWN,t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"leftDown",{get:function(){return(this._flags&i.FLAGS.LEFT_DOWN)!==0},set:function(t){this._doSet(i.FLAGS.LEFT_DOWN,t)},enumerable:!1,configurable:!0}),i.FLAGS=Object.freeze({NONE:0,OVER:1,LEFT_DOWN:2,RIGHT_DOWN:4}),i}(),Iw=function(){function i(){this._tempPoint=new re}return i.prototype.recursiveFindHit=function(t,e,n,r,s){var a;if(!e||!e.visible)return!1;var o=t.data.global;s=e.interactive||s;var h=!1,l=s,u=!0;if(e.hitArea)r&&(e.worldTransform.applyInverse(o,this._tempPoint),e.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?h=!0:(r=!1,u=!1)),l=!1;else if(e._mask&&r){var c=e._mask.isMaskData?e._mask.maskObject:e._mask;c&&!(!((a=c.containsPoint)===null||a===void 0)&&a.call(c,o))&&(r=!1)}if(u&&e.interactiveChildren&&e.children)for(var f=e.children,d=f.length-1;d>=0;d--){var m=f[d],_=this.recursiveFindHit(t,m,n,r,l);if(_){if(!m.parent)continue;l=!1,_&&(t.target&&(r=!1),h=!0)}}return s&&(r&&!t.target&&!e.hitArea&&e.containsPoint&&e.containsPoint(o)&&(h=!0),e.interactive&&(h&&!t.target&&(t.target=e),n&&n(t,e,!!h))),h},i.prototype.findHit=function(t,e,n,r){this.recursiveFindHit(t,e,n,r,!1)},i}(),Ow={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(i){i?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};ge.mixin(Ow);var _a=1,ga={target:null,data:{global:null}},Dw=function(i){Cw(t,i);function t(e,n){var r=i.call(this)||this;return n=n||{},r.renderer=e,r.autoPreventDefault=n.autoPreventDefault!==void 0?n.autoPreventDefault:!0,r.interactionFrequency=n.interactionFrequency||10,r.mouse=new Mf,r.mouse.identifier=_a,r.mouse.global.set(-999999),r.activeInteractionData={},r.activeInteractionData[_a]=r.mouse,r.interactionDataPool=[],r.eventData=new Pw,r.interactionDOMElement=null,r.moveWhenInside=!1,r.eventsAdded=!1,r.tickerAdded=!1,r.mouseOverRenderer=!("PointerEvent"in globalThis),r.supportsTouchEvents="ontouchstart"in globalThis,r.supportsPointerEvents=!!globalThis.PointerEvent,r.onPointerUp=r.onPointerUp.bind(r),r.processPointerUp=r.processPointerUp.bind(r),r.onPointerCancel=r.onPointerCancel.bind(r),r.processPointerCancel=r.processPointerCancel.bind(r),r.onPointerDown=r.onPointerDown.bind(r),r.processPointerDown=r.processPointerDown.bind(r),r.onPointerMove=r.onPointerMove.bind(r),r.processPointerMove=r.processPointerMove.bind(r),r.onPointerOut=r.onPointerOut.bind(r),r.processPointerOverOut=r.processPointerOverOut.bind(r),r.onPointerOver=r.onPointerOver.bind(r),r.cursorStyles={default:"inherit",pointer:"pointer"},r.currentCursorMode=null,r.cursor=null,r.resolution=1,r.delayedEvents=[],r.search=new Iw,r._tempDisplayObject=new ep,r._eventListenerOptions={capture:!0,passive:!1},r._useSystemTicker=n.useSystemTicker!==void 0?n.useSystemTicker:!0,r.setTargetElement(r.renderer.view,r.renderer.resolution),r}return Object.defineProperty(t.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(e){this._useSystemTicker=e,e?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),t.prototype.hitTest=function(e,n){return ga.target=null,ga.data.global=e,n||(n=this.lastObjectRendered),this.processInteractive(ga,n,null,!0),ga.target},t.prototype.setTargetElement=function(e,n){n===void 0&&(n=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=e,this.resolution=n,this.addEvents(),this.addTickerListener()},t.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(De.system.add(this.tickerUpdate,this,Yn.INTERACTION),this.tickerAdded=!0)},t.prototype.removeTickerListener=function(){this.tickerAdded&&(De.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},t.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var e=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(e.msContentZooming="none",e.msTouchAction="none"):this.supportsPointerEvents&&(e.touchAction="none"),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},t.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var e=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(e.msContentZooming="",e.msTouchAction=""):this.supportsPointerEvents&&(e.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},t.prototype.tickerUpdate=function(e){this._deltaTime+=e,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},t.prototype.update=function(){if(this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var e in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(e)){var n=this.activeInteractionData[e];if(n.originalEvent&&n.pointerType!=="touch"){var r=this.configureInteractionEventForDOMEvent(this.eventData,n.originalEvent,n);this.processInteractive(r,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},t.prototype.setCursorMode=function(e){e=e||"default";var n=!0;if(globalThis.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(n=!1),this.currentCursorMode!==e){this.currentCursorMode=e;var r=this.cursorStyles[e];if(r)switch(typeof r){case"string":n&&(this.interactionDOMElement.style.cursor=r);break;case"function":r(e);break;case"object":n&&Object.assign(this.interactionDOMElement.style,r);break}else n&&typeof e=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,e)&&(this.interactionDOMElement.style.cursor=e)}},t.prototype.dispatchEvent=function(e,n,r){(!r.stopPropagationHint||e===r.stopsPropagatingAt)&&(r.currentTarget=e,r.type=n,e.emit(n,r),e[n]&&e[n](r))},t.prototype.delayDispatchEvent=function(e,n,r){this.delayedEvents.push({displayObject:e,eventString:n,eventData:r})},t.prototype.mapPositionToPoint=function(e,n,r){var s;this.interactionDOMElement.parentElement?s=this.interactionDOMElement.getBoundingClientRect():s={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var a=1/this.resolution;e.x=(n-s.left)*(this.interactionDOMElement.width/s.width)*a,e.y=(r-s.top)*(this.interactionDOMElement.height/s.height)*a},t.prototype.processInteractive=function(e,n,r,s){var a=this.search.findHit(e,n,r,s),o=this.delayedEvents;if(!o.length)return a;e.stopPropagationHint=!1;var h=o.length;this.delayedEvents=[];for(var l=0;l<h;l++){var u=o[l],c=u.displayObject,f=u.eventString,d=u.eventData;d.stopsPropagatingAt===c&&(d.stopPropagationHint=!0),this.dispatchEvent(c,f,d)}return a},t.prototype.onPointerDown=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e);if(this.autoPreventDefault&&n[0].isNormalized){var r=e.cancelable||!("cancelable"in e);r&&e.preventDefault()}for(var s=n.length,a=0;a<s;a++){var o=n[a],h=this.getInteractionDataForPointerId(o),l=this.configureInteractionEventForDOMEvent(this.eventData,o,h);if(l.data.originalEvent=e,this.processInteractive(l,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",l),o.pointerType==="touch")this.emit("touchstart",l);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var u=o.button===2;this.emit(u?"rightdown":"mousedown",this.eventData)}}}},t.prototype.processPointerDown=function(e,n,r){var s=e.data,a=e.data.identifier;if(r){if(n.trackedPointers[a]||(n.trackedPointers[a]=new yh(a)),this.dispatchEvent(n,"pointerdown",e),s.pointerType==="touch")this.dispatchEvent(n,"touchstart",e);else if(s.pointerType==="mouse"||s.pointerType==="pen"){var o=s.button===2;o?n.trackedPointers[a].rightDown=!0:n.trackedPointers[a].leftDown=!0,this.dispatchEvent(n,o?"rightdown":"mousedown",e)}}},t.prototype.onPointerComplete=function(e,n,r){var s=this.normalizeToPointerData(e),a=s.length,o=e.target;e.composedPath&&e.composedPath().length>0&&(o=e.composedPath()[0]);for(var h=o!==this.interactionDOMElement?"outside":"",l=0;l<a;l++){var u=s[l],c=this.getInteractionDataForPointerId(u),f=this.configureInteractionEventForDOMEvent(this.eventData,u,c);if(f.data.originalEvent=e,this.processInteractive(f,this.lastObjectRendered,r,n||!h),this.emit(n?"pointercancel":"pointerup"+h,f),u.pointerType==="mouse"||u.pointerType==="pen"){var d=u.button===2;this.emit(d?"rightup"+h:"mouseup"+h,f)}else u.pointerType==="touch"&&(this.emit(n?"touchcancel":"touchend"+h,f),this.releaseInteractionDataForPointerId(u.pointerId))}},t.prototype.onPointerCancel=function(e){this.supportsTouchEvents&&e.pointerType==="touch"||this.onPointerComplete(e,!0,this.processPointerCancel)},t.prototype.processPointerCancel=function(e,n){var r=e.data,s=e.data.identifier;n.trackedPointers[s]!==void 0&&(delete n.trackedPointers[s],this.dispatchEvent(n,"pointercancel",e),r.pointerType==="touch"&&this.dispatchEvent(n,"touchcancel",e))},t.prototype.onPointerUp=function(e){this.supportsTouchEvents&&e.pointerType==="touch"||this.onPointerComplete(e,!1,this.processPointerUp)},t.prototype.processPointerUp=function(e,n,r){var s=e.data,a=e.data.identifier,o=n.trackedPointers[a],h=s.pointerType==="touch",l=s.pointerType==="mouse"||s.pointerType==="pen",u=!1;if(l){var c=s.button===2,f=yh.FLAGS,d=c?f.RIGHT_DOWN:f.LEFT_DOWN,m=o!==void 0&&o.flags&d;r?(this.dispatchEvent(n,c?"rightup":"mouseup",e),m&&(this.dispatchEvent(n,c?"rightclick":"click",e),u=!0)):m&&this.dispatchEvent(n,c?"rightupoutside":"mouseupoutside",e),o&&(c?o.rightDown=!1:o.leftDown=!1)}r?(this.dispatchEvent(n,"pointerup",e),h&&this.dispatchEvent(n,"touchend",e),o&&((!l||u)&&this.dispatchEvent(n,"pointertap",e),h&&(this.dispatchEvent(n,"tap",e),o.over=!1))):o&&(this.dispatchEvent(n,"pointerupoutside",e),h&&this.dispatchEvent(n,"touchendoutside",e)),o&&o.none&&delete n.trackedPointers[a]},t.prototype.onPointerMove=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e);(n[0].pointerType==="mouse"||n[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var r=n.length,s=0;s<r;s++){var a=n[s],o=this.getInteractionDataForPointerId(a),h=this.configureInteractionEventForDOMEvent(this.eventData,a,o);h.data.originalEvent=e,this.processInteractive(h,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",h),a.pointerType==="touch"&&this.emit("touchmove",h),(a.pointerType==="mouse"||a.pointerType==="pen")&&this.emit("mousemove",h)}n[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},t.prototype.processPointerMove=function(e,n,r){var s=e.data,a=s.pointerType==="touch",o=s.pointerType==="mouse"||s.pointerType==="pen";o&&this.processPointerOverOut(e,n,r),(!this.moveWhenInside||r)&&(this.dispatchEvent(n,"pointermove",e),a&&this.dispatchEvent(n,"touchmove",e),o&&this.dispatchEvent(n,"mousemove",e))},t.prototype.onPointerOut=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e),r=n[0];r.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var s=this.getInteractionDataForPointerId(r),a=this.configureInteractionEventForDOMEvent(this.eventData,r,s);a.data.originalEvent=r,this.processInteractive(a,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",a),r.pointerType==="mouse"||r.pointerType==="pen"?this.emit("mouseout",a):this.releaseInteractionDataForPointerId(s.identifier)}},t.prototype.processPointerOverOut=function(e,n,r){var s=e.data,a=e.data.identifier,o=s.pointerType==="mouse"||s.pointerType==="pen",h=n.trackedPointers[a];r&&!h&&(h=n.trackedPointers[a]=new yh(a)),h!==void 0&&(r&&this.mouseOverRenderer?(h.over||(h.over=!0,this.delayDispatchEvent(n,"pointerover",e),o&&this.delayDispatchEvent(n,"mouseover",e)),o&&this.cursor===null&&(this.cursor=n.cursor)):h.over&&(h.over=!1,this.dispatchEvent(n,"pointerout",this.eventData),o&&this.dispatchEvent(n,"mouseout",e),h.none&&delete n.trackedPointers[a]))},t.prototype.onPointerOver=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e),r=n[0],s=this.getInteractionDataForPointerId(r),a=this.configureInteractionEventForDOMEvent(this.eventData,r,s);a.data.originalEvent=r,r.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",a),(r.pointerType==="mouse"||r.pointerType==="pen")&&this.emit("mouseover",a)}},t.prototype.getInteractionDataForPointerId=function(e){var n=e.pointerId,r;return n===_a||e.pointerType==="mouse"?r=this.mouse:this.activeInteractionData[n]?r=this.activeInteractionData[n]:(r=this.interactionDataPool.pop()||new Mf,r.identifier=n,this.activeInteractionData[n]=r),r.copyEvent(e),r},t.prototype.releaseInteractionDataForPointerId=function(e){var n=this.activeInteractionData[e];n&&(delete this.activeInteractionData[e],n.reset(),this.interactionDataPool.push(n))},t.prototype.configureInteractionEventForDOMEvent=function(e,n,r){return e.data=r,this.mapPositionToPoint(r.global,n.clientX,n.clientY),n.pointerType==="touch"&&(n.globalX=r.global.x,n.globalY=r.global.y),r.originalEvent=n,e.reset(),e},t.prototype.normalizeToPointerData=function(e){var n=[];if(this.supportsTouchEvents&&e instanceof TouchEvent)for(var r=0,s=e.changedTouches.length;r<s;r++){var a=e.changedTouches[r];typeof a.button>"u"&&(a.button=e.touches.length?1:0),typeof a.buttons>"u"&&(a.buttons=e.touches.length?1:0),typeof a.isPrimary>"u"&&(a.isPrimary=e.touches.length===1&&e.type==="touchstart"),typeof a.width>"u"&&(a.width=a.radiusX||1),typeof a.height>"u"&&(a.height=a.radiusY||1),typeof a.tiltX>"u"&&(a.tiltX=0),typeof a.tiltY>"u"&&(a.tiltY=0),typeof a.pointerType>"u"&&(a.pointerType="touch"),typeof a.pointerId>"u"&&(a.pointerId=a.identifier||0),typeof a.pressure>"u"&&(a.pressure=a.force||.5),typeof a.twist>"u"&&(a.twist=0),typeof a.tangentialPressure>"u"&&(a.tangentialPressure=0),typeof a.layerX>"u"&&(a.layerX=a.offsetX=a.clientX),typeof a.layerY>"u"&&(a.layerY=a.offsetY=a.clientY),a.isNormalized=!0,n.push(a)}else if(!globalThis.MouseEvent||e instanceof MouseEvent&&(!this.supportsPointerEvents||!(e instanceof globalThis.PointerEvent))){var o=e;typeof o.isPrimary>"u"&&(o.isPrimary=!0),typeof o.width>"u"&&(o.width=1),typeof o.height>"u"&&(o.height=1),typeof o.tiltX>"u"&&(o.tiltX=0),typeof o.tiltY>"u"&&(o.tiltY=0),typeof o.pointerType>"u"&&(o.pointerType="mouse"),typeof o.pointerId>"u"&&(o.pointerId=_a),typeof o.pressure>"u"&&(o.pressure=.5),typeof o.twist>"u"&&(o.twist=0),typeof o.tangentialPressure>"u"&&(o.tangentialPressure=0),o.isNormalized=!0,n.push(o)}else n.push(e);return n},t.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},t.extension={name:"interaction",type:[Qt.RendererPlugin,Qt.CanvasRendererPlugin]},t}(As);/*!
 * @pixi/extract - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Lw=new Yt,Nw=4,Uw=function(){function i(t){this.renderer=t}return i.prototype.image=function(t,e,n){var r=new Image;return r.src=this.base64(t,e,n),r},i.prototype.base64=function(t,e,n){return this.canvas(t).toDataURL(e,n)},i.prototype.canvas=function(t,e){var n=this._rawPixels(t,e),r=n.pixels,s=n.width,a=n.height,o=n.flipY,h=new hf(s,a,1),l=h.context.getImageData(0,0,s,a);if(i.arrayPostDivide(r,l.data),h.context.putImageData(l,0,0),o){var u=new hf(h.width,h.height,1);u.context.scale(1,-1),u.context.drawImage(h.canvas,0,-a),h.destroy(),h=u}return h.canvas},i.prototype.pixels=function(t,e){var n=this._rawPixels(t,e).pixels;return i.arrayPostDivide(n,n),n},i.prototype._rawPixels=function(t,e){var n=this.renderer,r,s=!1,a,o=!1;if(t)if(t instanceof ji)a=t;else{var h=n.context.webGLVersion>=2?n.multisample:he.NONE;if(a=this.renderer.generateTexture(t,{multisample:h}),h!==he.NONE){var l=ji.create({width:a.width,height:a.height});n.framebuffer.bind(a.framebuffer),n.framebuffer.blit(l.framebuffer),n.framebuffer.bind(null),a.destroy(!0),a=l}o=!0}a?(r=a.baseTexture.resolution,e=e??a.frame,s=!1,n.renderTexture.bind(a)):(r=n.resolution,e||(e=Lw,e.width=n.width,e.height=n.height),s=!0,n.renderTexture.bind(null));var u=Math.round(e.width*r),c=Math.round(e.height*r),f=new Uint8Array(Nw*u*c),d=n.gl;return d.readPixels(Math.round(e.x*r),Math.round(e.y*r),u,c,d.RGBA,d.UNSIGNED_BYTE,f),o&&a.destroy(!0),{pixels:f,width:u,height:c,flipY:s}},i.prototype.destroy=function(){this.renderer=null},i.arrayPostDivide=function(t,e){for(var n=0;n<t.length;n+=4){var r=e[n+3]=t[n+3];r!==0?(e[n]=Math.round(Math.min(t[n]*255/r,255)),e[n+1]=Math.round(Math.min(t[n+1]*255/r,255)),e[n+2]=Math.round(Math.min(t[n+2]*255/r,255))):(e[n]=t[n],e[n+1]=t[n+1],e[n+2]=t[n+2])}},i.extension={name:"extract",type:Qt.RendererPlugin},i}();/*!
 * @pixi/loaders - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ya=function(){function i(t,e,n){e===void 0&&(e=!1),this._fn=t,this._once=e,this._thisArg=n,this._next=this._prev=this._owner=null}return i.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},i}();function wf(i,t){return i._head?(i._tail._next=t,t._prev=i._tail,i._tail=t):(i._head=t,i._tail=t),t._owner=i,t}var zn=function(){function i(){this._head=this._tail=void 0}return i.prototype.handlers=function(t){t===void 0&&(t=!1);var e=this._head;if(t)return!!e;for(var n=[];e;)n.push(e),e=e._next;return n},i.prototype.has=function(t){if(!(t instanceof ya))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return t._owner===this},i.prototype.dispatch=function(){for(var t=arguments,e=[],n=0;n<arguments.length;n++)e[n]=t[n];var r=this._head;if(!r)return!1;for(;r;)r._once&&this.detach(r),r._fn.apply(r._thisArg,e),r=r._next;return!0},i.prototype.add=function(t,e){if(e===void 0&&(e=null),typeof t!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return wf(this,new ya(t,!1,e))},i.prototype.once=function(t,e){if(e===void 0&&(e=null),typeof t!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return wf(this,new ya(t,!0,e))},i.prototype.detach=function(t){if(!(t instanceof ya))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return t._owner!==this?this:(t._prev&&(t._prev._next=t._next),t._next&&(t._next._prev=t._prev),t===this._head?(this._head=t._next,t._next===null&&(this._tail=null)):t===this._tail&&(this._tail=t._prev,this._tail._next=null),t._owner=null,this)},i.prototype.detachAll=function(){var t=this._head;if(!t)return this;for(this._head=this._tail=null;t;)t._owner=null,t=t._next;return this},i}();function gp(i,t){t=t||{};for(var e={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=e.parser[t.strictMode?"strict":"loose"].exec(i),r={},s=14;s--;)r[e.key[s]]=n[s]||"";return r[e.q.name]={},r[e.key[12]].replace(e.q.parser,function(a,o,h){o&&(r[e.q.name][o]=h)}),r}var xh,xa=null,Fw=0,Af=200,Bw=204,Gw=1223,kw=2;function Rf(){}function Cf(i,t,e){t&&t.indexOf(".")===0&&(t=t.substring(1)),t&&(i[t]=e)}function Eh(i){return i.toString().replace("object ","")}var me=function(){function i(t,e,n){if(this._dequeue=Rf,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof t!="string"||typeof e!="string")throw new Error("Both name and url are required for constructing a resource.");n=n||{},this._flags=0,this._setFlag(i.STATUS_FLAGS.DATA_URL,e.indexOf("data:")===0),this.name=t,this.url=e,this.extension=this._getExtension(),this.data=null,this.crossOrigin=n.crossOrigin===!0?"anonymous":n.crossOrigin,this.timeout=n.timeout||0,this.loadType=n.loadType||this._determineLoadType(),this.xhrType=n.xhrType,this.metadata=n.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=i.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=Rf,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new zn,this.onProgress=new zn,this.onComplete=new zn,this.onAfterMiddleware=new zn}return i.setExtensionLoadType=function(t,e){Cf(i._loadTypeMap,t,e)},i.setExtensionXhrType=function(t,e){Cf(i._xhrTypeMap,t,e)},Object.defineProperty(i.prototype,"isDataUrl",{get:function(){return this._hasFlag(i.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isComplete",{get:function(){return this._hasFlag(i.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isLoading",{get:function(){return this._hasFlag(i.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),i.prototype.complete=function(){this._clearEvents(),this._finish()},i.prototype.abort=function(t){if(!this.error){if(this.error=new Error(t),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=i.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},i.prototype.load=function(t){var e=this;if(!this.isLoading){if(this.isComplete){t&&setTimeout(function(){return t(e)},1);return}else t&&this.onComplete.once(t);switch(this._setFlag(i.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case i.LOAD_TYPE.IMAGE:this.type=i.TYPE.IMAGE,this._loadElement("image");break;case i.LOAD_TYPE.AUDIO:this.type=i.TYPE.AUDIO,this._loadSourceElement("audio");break;case i.LOAD_TYPE.VIDEO:this.type=i.TYPE.VIDEO,this._loadSourceElement("video");break;case i.LOAD_TYPE.XHR:default:typeof xh>"u"&&(xh=!!(globalThis.XDomainRequest&&!("withCredentials"in new XMLHttpRequest))),xh&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},i.prototype._hasFlag=function(t){return(this._flags&t)!==0},i.prototype._setFlag=function(t,e){this._flags=e?this._flags|t:this._flags&~t},i.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},i.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(i.STATUS_FLAGS.COMPLETE,!0),this._setFlag(i.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},i.prototype._loadElement=function(t){this.metadata.loadElement?this.data=this.metadata.loadElement:t==="image"&&typeof globalThis.Image<"u"?this.data=new Image:this.data=document.createElement(t),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},i.prototype._loadSourceElement=function(t){if(this.metadata.loadElement?this.data=this.metadata.loadElement:t==="audio"&&typeof globalThis.Audio<"u"?this.data=new Audio:this.data=document.createElement(t),this.data===null){this.abort("Unsupported element: "+t);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var e=this.metadata.mimeType,n=0;n<this.url.length;++n)this.data.appendChild(this._createSource(t,this.url[n],Array.isArray(e)?e[n]:e));else{var e=this.metadata.mimeType;this.data.appendChild(this._createSource(t,this.url,Array.isArray(e)?e[0]:e))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},i.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XMLHttpRequest;this.crossOrigin==="use-credentials"&&(t.withCredentials=!0),t.open("GET",this.url,!0),t.timeout=this.timeout,this.xhrType===i.XHR_RESPONSE_TYPE.JSON||this.xhrType===i.XHR_RESPONSE_TYPE.DOCUMENT?t.responseType=i.XHR_RESPONSE_TYPE.TEXT:t.responseType=this.xhrType,t.addEventListener("error",this._boundXhrOnError,!1),t.addEventListener("timeout",this._boundXhrOnTimeout,!1),t.addEventListener("abort",this._boundXhrOnAbort,!1),t.addEventListener("progress",this._boundOnProgress,!1),t.addEventListener("load",this._boundXhrOnLoad,!1),t.send()},i.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var t=this.xhr=new globalThis.XDomainRequest;t.timeout=this.timeout||5e3,t.onerror=this._boundXhrOnError,t.ontimeout=this._boundXhrOnTimeout,t.onprogress=this._boundOnProgress,t.onload=this._boundXhrOnLoad,t.open("GET",this.url,!0),setTimeout(function(){return t.send()},1)},i.prototype._createSource=function(t,e,n){n||(n=t+"/"+this._getExtension(e));var r=document.createElement("source");return r.src=e,r.type=n,r},i.prototype._onError=function(t){this.abort("Failed to load element using: "+t.target.nodeName)},i.prototype._onProgress=function(t){t&&t.lengthComputable&&this.onProgress.dispatch(this,t.loaded/t.total)},i.prototype._onTimeout=function(){this.abort("Load timed out.")},i.prototype._xhrOnError=function(){var t=this.xhr;this.abort(Eh(t)+" Request failed. Status: "+t.status+', text: "'+t.statusText+'"')},i.prototype._xhrOnTimeout=function(){var t=this.xhr;this.abort(Eh(t)+" Request timed out.")},i.prototype._xhrOnAbort=function(){var t=this.xhr;this.abort(Eh(t)+" Request was aborted by the user.")},i.prototype._xhrOnLoad=function(){var t=this.xhr,e="",n=typeof t.status>"u"?Af:t.status;(t.responseType===""||t.responseType==="text"||typeof t.responseType>"u")&&(e=t.responseText),n===Fw&&(e.length>0||t.responseType===i.XHR_RESPONSE_TYPE.BUFFER)?n=Af:n===Gw&&(n=Bw);var r=n/100|0;if(r===kw)if(this.xhrType===i.XHR_RESPONSE_TYPE.TEXT)this.data=e,this.type=i.TYPE.TEXT;else if(this.xhrType===i.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(e),this.type=i.TYPE.JSON}catch(o){this.abort("Error trying to parse loaded json: "+o);return}else if(this.xhrType===i.XHR_RESPONSE_TYPE.DOCUMENT)try{if(globalThis.DOMParser){var s=new DOMParser;this.data=s.parseFromString(e,"text/xml")}else{var a=document.createElement("div");a.innerHTML=e,this.data=a}this.type=i.TYPE.XML}catch(o){this.abort("Error trying to parse loaded xml: "+o);return}else this.data=t.response||e;else{this.abort("["+t.status+"] "+t.statusText+": "+t.responseURL);return}this.complete()},i.prototype._determineCrossOrigin=function(t,e){if(t.indexOf("data:")===0)return"";if(globalThis.origin!==globalThis.location.origin)return"anonymous";e=e||globalThis.location,xa||(xa=document.createElement("a")),xa.href=t;var n=gp(xa.href,{strictMode:!0}),r=!n.port&&e.port===""||n.port===e.port,s=n.protocol?n.protocol+":":"";return n.host!==e.hostname||!r||s!==e.protocol?"anonymous":""},i.prototype._determineXhrType=function(){return i._xhrTypeMap[this.extension]||i.XHR_RESPONSE_TYPE.TEXT},i.prototype._determineLoadType=function(){return i._loadTypeMap[this.extension]||i.LOAD_TYPE.XHR},i.prototype._getExtension=function(t){t===void 0&&(t=this.url);var e="";if(this.isDataUrl){var n=t.indexOf("/");e=t.substring(n+1,t.indexOf(";",n))}else{var r=t.indexOf("?"),s=t.indexOf("#"),a=Math.min(r>-1?r:t.length,s>-1?s:t.length);t=t.substring(0,a),e=t.substring(t.lastIndexOf(".")+1)}return e.toLowerCase()},i.prototype._getMimeFromXhrType=function(t){switch(t){case i.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case i.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case i.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case i.XHR_RESPONSE_TYPE.JSON:return"application/json";case i.XHR_RESPONSE_TYPE.DEFAULT:case i.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},i}();(function(i){(function(t){t[t.NONE=0]="NONE",t[t.DATA_URL=1]="DATA_URL",t[t.COMPLETE=2]="COMPLETE",t[t.LOADING=4]="LOADING"})(i.STATUS_FLAGS||(i.STATUS_FLAGS={})),function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.JSON=1]="JSON",t[t.XML=2]="XML",t[t.IMAGE=3]="IMAGE",t[t.AUDIO=4]="AUDIO",t[t.VIDEO=5]="VIDEO",t[t.TEXT=6]="TEXT"}(i.TYPE||(i.TYPE={})),function(t){t[t.XHR=1]="XHR",t[t.IMAGE=2]="IMAGE",t[t.AUDIO=3]="AUDIO",t[t.VIDEO=4]="VIDEO"}(i.LOAD_TYPE||(i.LOAD_TYPE={})),function(t){t.DEFAULT="text",t.BUFFER="arraybuffer",t.BLOB="blob",t.DOCUMENT="document",t.JSON="json",t.TEXT="text"}(i.XHR_RESPONSE_TYPE||(i.XHR_RESPONSE_TYPE={})),i._loadTypeMap={gif:i.LOAD_TYPE.IMAGE,png:i.LOAD_TYPE.IMAGE,bmp:i.LOAD_TYPE.IMAGE,jpg:i.LOAD_TYPE.IMAGE,jpeg:i.LOAD_TYPE.IMAGE,tif:i.LOAD_TYPE.IMAGE,tiff:i.LOAD_TYPE.IMAGE,webp:i.LOAD_TYPE.IMAGE,tga:i.LOAD_TYPE.IMAGE,avif:i.LOAD_TYPE.IMAGE,svg:i.LOAD_TYPE.IMAGE,"svg+xml":i.LOAD_TYPE.IMAGE,mp3:i.LOAD_TYPE.AUDIO,ogg:i.LOAD_TYPE.AUDIO,wav:i.LOAD_TYPE.AUDIO,mp4:i.LOAD_TYPE.VIDEO,webm:i.LOAD_TYPE.VIDEO},i._xhrTypeMap={xhtml:i.XHR_RESPONSE_TYPE.DOCUMENT,html:i.XHR_RESPONSE_TYPE.DOCUMENT,htm:i.XHR_RESPONSE_TYPE.DOCUMENT,xml:i.XHR_RESPONSE_TYPE.DOCUMENT,tmx:i.XHR_RESPONSE_TYPE.DOCUMENT,svg:i.XHR_RESPONSE_TYPE.DOCUMENT,tsx:i.XHR_RESPONSE_TYPE.DOCUMENT,gif:i.XHR_RESPONSE_TYPE.BLOB,png:i.XHR_RESPONSE_TYPE.BLOB,bmp:i.XHR_RESPONSE_TYPE.BLOB,jpg:i.XHR_RESPONSE_TYPE.BLOB,jpeg:i.XHR_RESPONSE_TYPE.BLOB,tif:i.XHR_RESPONSE_TYPE.BLOB,tiff:i.XHR_RESPONSE_TYPE.BLOB,webp:i.XHR_RESPONSE_TYPE.BLOB,tga:i.XHR_RESPONSE_TYPE.BLOB,avif:i.XHR_RESPONSE_TYPE.BLOB,json:i.XHR_RESPONSE_TYPE.JSON,text:i.XHR_RESPONSE_TYPE.TEXT,txt:i.XHR_RESPONSE_TYPE.TEXT,ttf:i.XHR_RESPONSE_TYPE.BUFFER,otf:i.XHR_RESPONSE_TYPE.BUFFER},i.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(me||(me={}));function Ai(){}function Hw(i){return function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];if(i===null)throw new Error("Callback was already called.");var s=i;i=null,s.apply(this,n)}}var zw=function(){function i(t,e){this.data=t,this.callback=e}return i}(),Sh=function(){function i(t,e){var n=this;if(e===void 0&&(e=1),this.workers=0,this.saturated=Ai,this.unsaturated=Ai,this.empty=Ai,this.drain=Ai,this.error=Ai,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(r,s,a){if(a&&typeof a!="function")throw new Error("task callback must be a function");if(n.started=!0,r==null&&n.idle()){setTimeout(function(){return n.drain()},1);return}var o=new zw(r,typeof a=="function"?a:Ai);s?n._tasks.unshift(o):n._tasks.push(o),setTimeout(n.process,1)},this.process=function(){for(;!n.paused&&n.workers<n.concurrency&&n._tasks.length;){var r=n._tasks.shift();n._tasks.length===0&&n.empty(),n.workers+=1,n.workers===n.concurrency&&n.saturated(),n._worker(r.data,Hw(n._next(r)))}},this._worker=t,e===0)throw new Error("Concurrency must not be zero");this.concurrency=e,this.buffer=e/4}return i.prototype._next=function(t){var e=this;return function(){for(var n=arguments,r=[],s=0;s<arguments.length;s++)r[s]=n[s];e.workers-=1,t.callback.apply(t,r),r[0]!=null&&e.error(r[0],t.data),e.workers<=e.concurrency-e.buffer&&e.unsaturated(),e.idle()&&e.drain(),e.process()}},i.prototype.push=function(t,e){this._insert(t,!1,e)},i.prototype.kill=function(){this.workers=0,this.drain=Ai,this.started=!1,this._tasks=[]},i.prototype.unshift=function(t,e){this._insert(t,!0,e)},i.prototype.length=function(){return this._tasks.length},i.prototype.running=function(){return this.workers},i.prototype.idle=function(){return this._tasks.length+this.workers===0},i.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},i.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var t=1;t<=this.concurrency;t++)this.process()}},i.eachSeries=function(t,e,n,r){var s=0,a=t.length;function o(h){if(h||s===a){n&&n(h);return}r?setTimeout(function(){e(t[s++],o)},1):e(t[s++],o)}o()},i.queue=function(t,e){return new i(t,e)},i}(),Th=100,Vw=/(#[\w-]+)?$/,Ja=function(){function i(t,e){var n=this;t===void 0&&(t=""),e===void 0&&(e=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(h,l){return n._loadResource(h,l)},this.resources={},this.baseUrl=t,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(h,l){return n._loadResource(h,l)},this._queue=Sh.queue(this._boundLoadResource,e),this._queue.pause(),this.resources={},this.onProgress=new zn,this.onError=new zn,this.onLoad=new zn,this.onStart=new zn,this.onComplete=new zn;for(var r=0;r<i._plugins.length;++r){var s=i._plugins[r],a=s.pre,o=s.use;a&&this.pre(a),o&&this.use(o)}this._protected=!1}return i.prototype._add=function(t,e,n,r){if(this.loading&&(!n||!n.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[t])throw new Error('Resource named "'+t+'" already exists.');if(e=this._prepareUrl(e),this.resources[t]=new me(t,e,n),typeof r=="function"&&this.resources[t].onAfterMiddleware.once(r),this.loading){for(var s=n.parentResource,a=[],o=0;o<s.children.length;++o)s.children[o].isComplete||a.push(s.children[o]);var h=s.progressChunk*(a.length+1),l=h/(a.length+2);s.children.push(this.resources[t]),s.progressChunk=l;for(var o=0;o<a.length;++o)a[o].progressChunk=l;this.resources[t].progressChunk=l}return this._queue.push(this.resources[t]),this},i.prototype.pre=function(t){return this._beforeMiddleware.push(t),this},i.prototype.use=function(t){return this._afterMiddleware.push(t),this},i.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var t in this.resources){var e=this.resources[t];e._onLoadBinding&&e._onLoadBinding.detach(),e.isLoading&&e.abort("loader reset")}return this.resources={},this},i.prototype.load=function(t){if(un("6.5.0","@pixi/loaders is being replaced with @pixi/assets in the next major release."),typeof t=="function"&&this.onComplete.once(t),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var e=this._queue._tasks.length,n=Th/e,r=0;r<this._queue._tasks.length;++r)this._queue._tasks[r].data.progressChunk=n;this._onStart(),this._queue.resume()}return this},Object.defineProperty(i.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(t){this._queue.concurrency=t},enumerable:!1,configurable:!0}),i.prototype._prepareUrl=function(t){var e=gp(t,{strictMode:!0}),n;if(e.protocol||!e.path||t.indexOf("//")===0?n=t:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&t.charAt(0)!=="/"?n=this.baseUrl+"/"+t:n=this.baseUrl+t,this.defaultQueryString){var r=Vw.exec(n)[0];n=n.slice(0,n.length-r.length),n.indexOf("?")!==-1?n+="&"+this.defaultQueryString:n+="?"+this.defaultQueryString,n+=r}return n},i.prototype._loadResource=function(t,e){var n=this;t._dequeue=e,Sh.eachSeries(this._beforeMiddleware,function(r,s){r.call(n,t,function(){s(t.isComplete?{}:null)})},function(){t.isComplete?n._onLoad(t):(t._onLoadBinding=t.onComplete.once(n._onLoad,n),t.load())},!0)},i.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},i.prototype._onComplete=function(){this.progress=Th,this.loading=!1,this.onComplete.dispatch(this,this.resources)},i.prototype._onLoad=function(t){var e=this;t._onLoadBinding=null,this._resourcesParsing.push(t),t._dequeue(),Sh.eachSeries(this._afterMiddleware,function(n,r){n.call(e,t,r)},function(){t.onAfterMiddleware.dispatch(t),e.progress=Math.min(Th,e.progress+t.progressChunk),e.onProgress.dispatch(e,t),t.error?e.onError.dispatch(t.error,e,t):e.onLoad.dispatch(e,t),e._resourcesParsing.splice(e._resourcesParsing.indexOf(t),1),e._queue.idle()&&e._resourcesParsing.length===0&&e._onComplete()},!0)},i.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(i,"shared",{get:function(){var t=i._shared;return t||(t=new i,t._protected=!0,i._shared=t),t},enumerable:!1,configurable:!0}),i.registerPlugin=function(t){return un("6.5.0","Loader.registerPlugin() is deprecated, use extensions.add() instead."),$n.add({type:Qt.Loader,ref:t}),i},i._plugins=[],i}();$n.handleByList(Qt.Loader,Ja._plugins);Ja.prototype.add=function(t,e,n,r){if(Array.isArray(t)){for(var s=0;s<t.length;++s)this.add(t[s]);return this}if(typeof t=="object"&&(n=t,r=e||n.callback||n.onComplete,e=n.url,t=n.name||n.key||n.url),typeof e!="string"&&(r=n,n=e,e=t),typeof e!="string")throw new Error("No url passed to add resource to loader.");return typeof n=="function"&&(r=n,n=null),this._add(t,e,n,r)};var Xw=function(){function i(){}return i.init=function(t){t=Object.assign({sharedLoader:!1},t),this.loader=t.sharedLoader?Ja.shared:new Ja},i.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},i.extension=Qt.Application,i}(),Ww=function(){function i(){}return i.add=function(){me.setExtensionLoadType("svg",me.LOAD_TYPE.XHR),me.setExtensionXhrType("svg",me.XHR_RESPONSE_TYPE.TEXT)},i.use=function(t,e){if(t.data&&(t.type===me.TYPE.IMAGE||t.extension==="svg")){var n=t.data,r=t.url,s=t.name,a=t.metadata;Lt.fromLoader(n,r,s,a).then(function(o){t.texture=o,e()}).catch(e)}else e()},i.extension=Qt.Loader,i}(),Yw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function jw(i){for(var t="",e=0;e<i.length;){for(var n=[0,0,0],r=[0,0,0,0],s=0;s<n.length;++s)e<i.length?n[s]=i.charCodeAt(e++)&255:n[s]=0;r[0]=n[0]>>2,r[1]=(n[0]&3)<<4|n[1]>>4,r[2]=(n[1]&15)<<2|n[2]>>6,r[3]=n[2]&63;var a=e-(i.length-1);switch(a){case 2:r[3]=64,r[2]=64;break;case 1:r[3]=64;break}for(var s=0;s<r.length;++s)t+=Yw.charAt(r[s])}return t}function qw(i,t){if(!i.data){t();return}if(i.xhr&&i.xhrType===me.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof i.data=="string"){var e=i.xhr.getResponseHeader("content-type");if(e&&e.indexOf("image")===0){i.data=new Image,i.data.src="data:"+e+";base64,"+jw(i.xhr.responseText),i.type=me.TYPE.IMAGE,i.data.onload=function(){i.data.onload=null,t()};return}}else if(i.data.type.indexOf("image")===0){var n=globalThis.URL||globalThis.webkitURL,r=n.createObjectURL(i.data);i.blob=i.data,i.data=new Image,i.data.src=r,i.type=me.TYPE.IMAGE,i.data.onload=function(){n.revokeObjectURL(r),i.data.onload=null,t()};return}}t()}var $w=function(){function i(){}return i.extension=Qt.Loader,i.use=qw,i}();$n.add(Ww,$w);/*!
 * @pixi/compressed-textures - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Kt,kt;(function(i){i[i.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",i[i.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",i[i.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",i[i.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",i[i.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",i[i.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",i[i.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",i[i.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",i[i.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",i[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",i[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",i[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",i[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",i[i.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",i[i.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",i[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",i[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",i[i.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR"})(kt||(kt={}));var Ka=(Kt={},Kt[kt.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,Kt[kt.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,Kt[kt.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,Kt[kt.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,Kt[kt.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,Kt[kt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,Kt[kt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,Kt[kt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,Kt[kt.COMPRESSED_R11_EAC]=.5,Kt[kt.COMPRESSED_SIGNED_R11_EAC]=.5,Kt[kt.COMPRESSED_RG11_EAC]=1,Kt[kt.COMPRESSED_SIGNED_RG11_EAC]=1,Kt[kt.COMPRESSED_RGB8_ETC2]=.5,Kt[kt.COMPRESSED_RGBA8_ETC2_EAC]=1,Kt[kt.COMPRESSED_SRGB8_ETC2]=.5,Kt[kt.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,Kt[kt.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,Kt[kt.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,Kt[kt.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,Kt[kt.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,Kt[kt.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,Kt[kt.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,Kt[kt.COMPRESSED_RGB_ETC1_WEBGL]=.5,Kt[kt.COMPRESSED_RGB_ATC_WEBGL]=.5,Kt[kt.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,Kt[kt.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,Kt[kt.COMPRESSED_RGBA_ASTC_4x4_KHR]=1,Kt);/*! *****************************************************************************
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
***************************************************************************** */var ol=function(i,t){return ol=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},ol(i,t)};function yp(i,t){ol(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Jw(i,t,e,n){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(u){try{l(n.next(u))}catch(c){a(c)}}function h(u){try{l(n.throw(u))}catch(c){a(c)}}function l(u){u.done?s(u.value):r(u.value).then(o,h)}l((n=n.apply(i,[])).next())})}function Kw(i,t){var e={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(l){return function(u){return h([l,u])}}function h(l){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,r=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(s=e.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){e.label=l[1];break}if(l[0]===6&&e.label<s[1]){e.label=s[1],s=l;break}if(s&&e.label<s[2]){e.label=s[2],e.ops.push(l);break}s[2]&&e.ops.pop(),e.trys.pop();continue}l=t.call(i,e)}catch(u){l=[6,u],r=0}finally{n=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Zw=function(i){yp(t,i);function t(e,n){n===void 0&&(n={width:1,height:1,autoLoad:!0});var r=this,s,a;return typeof e=="string"?(s=e,a=new Uint8Array):(s=null,a=e),r=i.call(this,a,n)||this,r.origin=s,r.buffer=a?new sl(a):null,r.origin&&n.autoLoad!==!1&&r.load(),a&&a.length&&(r.loaded=!0,r.onBlobLoaded(r.buffer.rawBinaryData)),r}return t.prototype.onBlobLoaded=function(e){},t.prototype.load=function(){return Jw(this,void 0,Promise,function(){var e,n,r;return Kw(this,function(s){switch(s.label){case 0:return[4,fetch(this.origin)];case 1:return e=s.sent(),[4,e.blob()];case 2:return n=s.sent(),[4,n.arrayBuffer()];case 3:return r=s.sent(),this.data=new Uint32Array(r),this.buffer=new sl(r),this.loaded=!0,this.onBlobLoaded(r),this.update(),[2,this]}})})},t}(Rs),hl=function(i){yp(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.format=n.format,r.levels=n.levels||1,r._width=n.width,r._height=n.height,r._extension=t._formatToExtension(r.format),(n.levelBuffers||r.buffer)&&(r._levelBuffers=n.levelBuffers||t._createLevelBuffers(e instanceof Uint8Array?e:r.buffer.uint8View,r.format,r.levels,4,4,r.width,r.height)),r}return t.prototype.upload=function(e,n,r){var s=e.gl,a=e.context.extensions[this._extension];if(!a)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var o=0,h=this.levels;o<h;o++){var l=this._levelBuffers[o],u=l.levelID,c=l.levelWidth,f=l.levelHeight,d=l.levelBuffer;s.compressedTexImage2D(s.TEXTURE_2D,u,this.format,c,f,0,d)}return!0},t.prototype.onBlobLoaded=function(){this._levelBuffers=t._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},t._formatToExtension=function(e){if(e>=33776&&e<=33779)return"s3tc";if(e>=37488&&e<=37497)return"etc";if(e>=35840&&e<=35843)return"pvrtc";if(e>=36196)return"etc1";if(e>=35986&&e<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},t._createLevelBuffers=function(e,n,r,s,a,o,h){for(var l=new Array(r),u=e.byteOffset,c=o,f=h,d=c+s-1&~(s-1),m=f+a-1&~(a-1),_=d*m*Ka[n],p=0;p<r;p++)l[p]={levelID:p,levelWidth:r>1?c:d,levelHeight:r>1?f:m,levelBuffer:new Uint8Array(e.buffer,u,_)},u+=_,c=c>>1||1,f=f>>1||1,d=c+s-1&~(s-1),m=f+a-1&~(a-1),_=d*m*Ka[n];return l},t}(Zw),Qw=function(){function i(){}return i.use=function(t,e){var n=t.data,r=this;if(t.type===me.TYPE.JSON&&n&&n.cacheID&&n.textures){for(var s=n.textures,a=void 0,o=void 0,h=0,l=s.length;h<l;h++){var u=s[h],c=u.src,f=u.format;if(f||(o=c),i.textureFormats[f]){a=c;break}}if(a=a||o,!a){e(new Error("Cannot load compressed-textures in "+t.url+", make sure you provide a fallback"));return}if(a===t.url){e(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var d={crossOrigin:t.crossOrigin,metadata:t.metadata.imageMetadata,parentResource:t},m=gr.resolve(t.url.replace(r.baseUrl,""),a),_=n.cacheID;r.add(_,m,d,function(p){if(p.error){e(p.error);return}var v=p.texture,y=v===void 0?null:v,g=p.textures,T=g===void 0?{}:g;Object.assign(t,{texture:y,textures:T}),e()})}else e()},Object.defineProperty(i,"textureExtensions",{get:function(){if(!i._textureExtensions){var t=ct.ADAPTER.createCanvas(),e=t.getContext("webgl");if(!e)return console.warn("WebGL not available for compressed textures. Silently failing."),{};var n={s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};i._textureExtensions=n}return i._textureExtensions},enumerable:!1,configurable:!0}),Object.defineProperty(i,"textureFormats",{get:function(){if(!i._textureFormats){var t=i.textureExtensions;i._textureFormats={};for(var e in t){var n=t[e];n&&Object.assign(i._textureFormats,Object.getPrototypeOf(n))}}return i._textureFormats},enumerable:!1,configurable:!0}),i.extension=Qt.Loader,i}();function xp(i,t,e){var n={textures:{},texture:null};if(!t)return n;var r=t.map(function(s){return new Lt(new Wt(s,Object.assign({mipmap:cn.OFF,alphaMode:fn.NO_PREMULTIPLIED_ALPHA},e)))});return r.forEach(function(s,a){var o=s.baseTexture,h=i+"-"+(a+1);Wt.addToCache(o,h),Lt.addToCache(s,h),a===0&&(Wt.addToCache(o,i),Lt.addToCache(s,i),n.texture=s),n.textures[h]=s}),n}var Jr,en,bh=4,Ea=124,tA=32,Pf=20,eA=542327876,Sa={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},nA={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},Ta={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},rn;(function(i){i[i.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",i[i.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",i[i.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",i[i.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",i[i.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",i[i.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",i[i.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",i[i.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",i[i.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",i[i.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",i[i.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",i[i.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",i[i.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",i[i.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",i[i.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",i[i.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",i[i.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",i[i.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",i[i.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",i[i.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",i[i.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",i[i.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",i[i.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",i[i.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",i[i.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",i[i.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",i[i.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",i[i.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",i[i.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",i[i.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",i[i.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",i[i.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",i[i.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",i[i.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",i[i.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",i[i.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",i[i.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",i[i.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",i[i.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",i[i.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",i[i.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",i[i.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",i[i.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",i[i.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",i[i.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",i[i.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",i[i.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",i[i.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",i[i.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",i[i.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",i[i.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",i[i.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",i[i.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",i[i.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",i[i.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",i[i.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",i[i.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",i[i.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",i[i.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",i[i.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",i[i.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",i[i.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",i[i.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",i[i.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",i[i.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",i[i.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",i[i.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",i[i.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",i[i.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",i[i.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",i[i.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",i[i.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",i[i.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",i[i.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",i[i.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",i[i.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",i[i.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",i[i.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",i[i.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",i[i.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",i[i.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",i[i.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",i[i.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",i[i.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",i[i.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",i[i.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",i[i.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",i[i.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",i[i.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",i[i.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",i[i.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",i[i.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",i[i.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",i[i.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",i[i.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",i[i.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",i[i.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",i[i.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",i[i.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",i[i.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",i[i.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",i[i.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",i[i.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",i[i.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",i[i.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",i[i.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",i[i.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",i[i.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",i[i.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",i[i.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",i[i.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",i[i.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",i[i.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",i[i.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",i[i.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",i[i.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",i[i.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",i[i.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",i[i.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",i[i.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",i[i.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",i[i.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(rn||(rn={}));var ll;(function(i){i[i.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",i[i.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",i[i.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(ll||(ll={}));var iA=1,rA=2,sA=4,aA=64,oA=512,hA=131072,lA=827611204,uA=861165636,cA=894720068,fA=808540228,dA=4,pA=(Jr={},Jr[lA]=kt.COMPRESSED_RGBA_S3TC_DXT1_EXT,Jr[uA]=kt.COMPRESSED_RGBA_S3TC_DXT3_EXT,Jr[cA]=kt.COMPRESSED_RGBA_S3TC_DXT5_EXT,Jr),mA=(en={},en[rn.DXGI_FORMAT_BC1_TYPELESS]=kt.COMPRESSED_RGBA_S3TC_DXT1_EXT,en[rn.DXGI_FORMAT_BC1_UNORM]=kt.COMPRESSED_RGBA_S3TC_DXT1_EXT,en[rn.DXGI_FORMAT_BC2_TYPELESS]=kt.COMPRESSED_RGBA_S3TC_DXT3_EXT,en[rn.DXGI_FORMAT_BC2_UNORM]=kt.COMPRESSED_RGBA_S3TC_DXT3_EXT,en[rn.DXGI_FORMAT_BC3_TYPELESS]=kt.COMPRESSED_RGBA_S3TC_DXT5_EXT,en[rn.DXGI_FORMAT_BC3_UNORM]=kt.COMPRESSED_RGBA_S3TC_DXT5_EXT,en[rn.DXGI_FORMAT_BC1_UNORM_SRGB]=kt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,en[rn.DXGI_FORMAT_BC2_UNORM_SRGB]=kt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,en[rn.DXGI_FORMAT_BC3_UNORM_SRGB]=kt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,en);function vA(i){var t=new Uint32Array(i),e=t[0];if(e!==eA)throw new Error("Invalid DDS file magic word");var n=new Uint32Array(i,0,Ea/Uint32Array.BYTES_PER_ELEMENT),r=n[Sa.HEIGHT],s=n[Sa.WIDTH],a=n[Sa.MIPMAP_COUNT],o=new Uint32Array(i,Sa.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,tA/Uint32Array.BYTES_PER_ELEMENT),h=o[iA];if(h&sA){var l=o[nA.FOURCC];if(l!==fA){var u=pA[l],c=bh+Ea,f=new Uint8Array(i,c),d=new hl(f,{format:u,width:s,height:r,levels:a});return[d]}var m=bh+Ea,_=new Uint32Array(t.buffer,m,Pf/Uint32Array.BYTES_PER_ELEMENT),p=_[Ta.DXGI_FORMAT],v=_[Ta.RESOURCE_DIMENSION],y=_[Ta.MISC_FLAG],g=_[Ta.ARRAY_SIZE],T=mA[p];if(T===void 0)throw new Error("DDSParser cannot parse texture data with DXGI format "+p);if(y===dA)throw new Error("DDSParser does not support cubemap textures");if(v===ll.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSParser does not supported 3D texture data");var w=new Array,b=bh+Ea+Pf;if(g===1)w.push(new Uint8Array(i,b));else{for(var M=Ka[T],I=0,E=s,x=r,O=0;O<a;O++){var N=Math.max(1,E+3&-4),P=Math.max(1,x+3&-4),H=N*P*M;I+=H,E=E>>>1,x=x>>>1}for(var L=b,O=0;O<g;O++)w.push(new Uint8Array(i,L,I)),L+=I}return w.map(function(G){return new hl(G,{format:T,width:s,height:r,levels:a})})}throw h&aA?new Error("DDSParser does not support uncompressed texture data."):h&oA?new Error("DDSParser does not supported YUV uncompressed texture data."):h&hA?new Error("DDSParser does not support single-channel (lumninance) texture data!"):h&rA?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}var ii,Bn,Kr,If=[171,75,84,88,32,49,49,187,13,10,26,10],_A=67305985,nn={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},ul=64,Of=(ii={},ii[wt.UNSIGNED_BYTE]=1,ii[wt.UNSIGNED_SHORT]=2,ii[wt.INT]=4,ii[wt.UNSIGNED_INT]=4,ii[wt.FLOAT]=4,ii[wt.HALF_FLOAT]=8,ii),gA=(Bn={},Bn[it.RGBA]=4,Bn[it.RGB]=3,Bn[it.RG]=2,Bn[it.RED]=1,Bn[it.LUMINANCE]=1,Bn[it.LUMINANCE_ALPHA]=2,Bn[it.ALPHA]=1,Bn),yA=(Kr={},Kr[wt.UNSIGNED_SHORT_4_4_4_4]=2,Kr[wt.UNSIGNED_SHORT_5_5_5_1]=2,Kr[wt.UNSIGNED_SHORT_5_6_5]=2,Kr);function xA(i,t,e){e===void 0&&(e=!1);var n=new DataView(t);if(!EA(i,n))return null;var r=n.getUint32(nn.ENDIANNESS,!0)===_A,s=n.getUint32(nn.GL_TYPE,r),a=n.getUint32(nn.GL_FORMAT,r),o=n.getUint32(nn.GL_INTERNAL_FORMAT,r),h=n.getUint32(nn.PIXEL_WIDTH,r),l=n.getUint32(nn.PIXEL_HEIGHT,r)||1,u=n.getUint32(nn.PIXEL_DEPTH,r)||1,c=n.getUint32(nn.NUMBER_OF_ARRAY_ELEMENTS,r)||1,f=n.getUint32(nn.NUMBER_OF_FACES,r),d=n.getUint32(nn.NUMBER_OF_MIPMAP_LEVELS,r),m=n.getUint32(nn.BYTES_OF_KEY_VALUE_DATA,r);if(l===0||u!==1)throw new Error("Only 2D textures are supported");if(f!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(c!==1)throw new Error("WebGL does not support array textures");var _=4,p=4,v=h+3&-4,y=l+3&-4,g=new Array(c),T=h*l;s===0&&(T=v*y);var w;if(s!==0?Of[s]?w=Of[s]*gA[a]:w=yA[s]:w=Ka[o],w===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var b=e?TA(n,m,r):null,M=T*w,I=M,E=h,x=l,O=v,N=y,P=ul+m,H=0;H<d;H++){for(var L=n.getUint32(P,r),G=P+4,q=0;q<c;q++){var z=g[q];z||(z=g[q]=new Array(d)),z[H]={levelID:H,levelWidth:d>1||s!==0?E:O,levelHeight:d>1||s!==0?x:N,levelBuffer:new Uint8Array(t,G,I)},G+=I}P+=L+4,P=P%4!==0?P+4-P%4:P,E=E>>1||1,x=x>>1||1,O=E+_-1&~(_-1),N=x+p-1&~(p-1),I=O*N*w}return s!==0?{uncompressed:g.map(function($){var B=$[0].levelBuffer,V=!1;return s===wt.FLOAT?B=new Float32Array($[0].levelBuffer.buffer,$[0].levelBuffer.byteOffset,$[0].levelBuffer.byteLength/4):s===wt.UNSIGNED_INT?(V=!0,B=new Uint32Array($[0].levelBuffer.buffer,$[0].levelBuffer.byteOffset,$[0].levelBuffer.byteLength/4)):s===wt.INT&&(V=!0,B=new Int32Array($[0].levelBuffer.buffer,$[0].levelBuffer.byteOffset,$[0].levelBuffer.byteLength/4)),{resource:new Rs(B,{width:$[0].levelWidth,height:$[0].levelHeight}),type:s,format:V?SA(a):a}}),kvData:b}:{compressed:g.map(function($){return new hl(null,{format:o,width:h,height:l,levels:d,levelBuffers:$})}),kvData:b}}function EA(i,t){for(var e=0;e<If.length;e++)if(t.getUint8(e)!==If[e])return console.error(i+" is not a valid *.ktx file!"),!1;return!0}function SA(i){switch(i){case it.RGBA:return it.RGBA_INTEGER;case it.RGB:return it.RGB_INTEGER;case it.RG:return it.RG_INTEGER;case it.RED:return it.RED_INTEGER;default:return i}}function TA(i,t,e){for(var n=new Map,r=0;r<t;){var s=i.getUint32(ul+r,e),a=ul+r+4,o=3-(s+3)%4;if(s===0||s>t-r){console.error("KTXLoader: keyAndValueByteSize out of bounds");break}for(var h=0;h<s&&i.getUint8(a+h)!==0;h++);if(h===-1){console.error("KTXLoader: Failed to find null byte terminating kvData key");break}var l=new TextDecoder().decode(new Uint8Array(i.buffer,a,h)),u=new DataView(i.buffer,a+h+1,s-h-1);n.set(l,u),r+=4+s+o}return n}me.setExtensionXhrType("dds",me.XHR_RESPONSE_TYPE.BUFFER);var bA=function(){function i(){}return i.use=function(t,e){if(t.extension==="dds"&&t.data)try{Object.assign(t,xp(t.name||t.url,vA(t.data),t.metadata))}catch(n){e(n);return}e()},i.extension=Qt.Loader,i}();me.setExtensionXhrType("ktx",me.XHR_RESPONSE_TYPE.BUFFER);var MA=function(){function i(){}return i.use=function(t,e){if(t.extension==="ktx"&&t.data)try{var n=t.name||t.url,r=xA(n,t.data,this.loadKeyValueData),s=r.compressed,a=r.uncompressed,o=r.kvData;if(s){var h=xp(n,s,t.metadata);if(o&&h.textures)for(var l in h.textures)h.textures[l].baseTexture.ktxKeyValueData=o;Object.assign(t,h)}else if(a){var u={};a.forEach(function(c,f){var d=new Lt(new Wt(c.resource,{mipmap:cn.OFF,alphaMode:fn.NO_PREMULTIPLIED_ALPHA,type:c.type,format:c.format})),m=n+"-"+(f+1);o&&(d.baseTexture.ktxKeyValueData=o),Wt.addToCache(d.baseTexture,m),Lt.addToCache(d,m),f===0&&(u[n]=d,Wt.addToCache(d.baseTexture,n),Lt.addToCache(d,n)),u[m]=d}),Object.assign(t,{textures:u})}}catch(c){e(c);return}e()},i.extension=Qt.Loader,i.loadKeyValueData=!1,i}();/*!
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
***************************************************************************** */var cl=function(i,t){return cl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},cl(i,t)};function Ep(i,t){cl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}(function(i){Ep(t,i);function t(e,n,r,s){e===void 0&&(e=1500),r===void 0&&(r=16384),s===void 0&&(s=!1);var a=i.call(this)||this,o=16384;return r>o&&(r=o),a._properties=[!1,!0,!1,!1,!1],a._maxSize=e,a._batchSize=r,a._buffers=null,a._bufferUpdateIDs=[],a._updateID=0,a.interactiveChildren=!1,a.blendMode=Rt.NORMAL,a.autoResize=s,a.roundPixels=!0,a.baseTexture=null,a.setProperties(n),a._tint=0,a.tintRgb=new Float32Array(4),a.tint=16777215,a}return t.prototype.setProperties=function(e){e&&(this._properties[0]="vertices"in e||"scale"in e?!!e.vertices||!!e.scale:this._properties[0],this._properties[1]="position"in e?!!e.position:this._properties[1],this._properties[2]="rotation"in e?!!e.rotation:this._properties[2],this._properties[3]="uvs"in e?!!e.uvs:this._properties[3],this._properties[4]="tint"in e||"alpha"in e?!!e.tint||!!e.alpha:this._properties[4])},t.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){this._tint=e,Dr(e,this.tintRgb)},enumerable:!1,configurable:!0}),t.prototype.render=function(e){var n=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return n.onChildrenChange(0)})),e.batch.setObjectRenderer(e.plugins.particle),e.plugins.particle.render(this))},t.prototype.onChildrenChange=function(e){for(var n=Math.floor(e/this._batchSize);this._bufferUpdateIDs.length<n;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[n]=++this._updateID},t.prototype.dispose=function(){if(this._buffers){for(var e=0;e<this._buffers.length;++e)this._buffers[e].destroy();this._buffers=null}},t.prototype.destroy=function(e){i.prototype.destroy.call(this,e),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},t})(An);var Df=function(){function i(t,e,n){this.geometry=new Cs,this.indexBuffer=null,this.size=n,this.dynamicProperties=[],this.staticProperties=[];for(var r=0;r<t.length;++r){var s=t[r];s={attributeName:s.attributeName,size:s.size,uploadFunction:s.uploadFunction,type:s.type||wt.FLOAT,offset:s.offset},e[r]?this.dynamicProperties.push(s):this.staticProperties.push(s)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return i.prototype.initBuffers=function(){var t=this.geometry,e=0;this.indexBuffer=new Ee(Nb(this.size),!0,!0),t.addIndex(this.indexBuffer),this.dynamicStride=0;for(var n=0;n<this.dynamicProperties.length;++n){var r=this.dynamicProperties[n];r.offset=e,e+=r.size,this.dynamicStride+=r.size}var s=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(s),this.dynamicDataUint32=new Uint32Array(s),this.dynamicBuffer=new Ee(this.dynamicData,!1,!1);var a=0;this.staticStride=0;for(var n=0;n<this.staticProperties.length;++n){var r=this.staticProperties[n];r.offset=a,a+=r.size,this.staticStride+=r.size}var o=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(o),this.staticDataUint32=new Uint32Array(o),this.staticBuffer=new Ee(this.staticData,!0,!1);for(var n=0;n<this.dynamicProperties.length;++n){var r=this.dynamicProperties[n];t.addAttribute(r.attributeName,this.dynamicBuffer,0,r.type===wt.UNSIGNED_BYTE,r.type,this.dynamicStride*4,r.offset*4)}for(var n=0;n<this.staticProperties.length;++n){var r=this.staticProperties[n];t.addAttribute(r.attributeName,this.staticBuffer,0,r.type===wt.UNSIGNED_BYTE,r.type,this.staticStride*4,r.offset*4)}},i.prototype.uploadDynamic=function(t,e,n){for(var r=0;r<this.dynamicProperties.length;r++){var s=this.dynamicProperties[r];s.uploadFunction(t,e,n,s.type===wt.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,s.offset)}this.dynamicBuffer._updateID++},i.prototype.uploadStatic=function(t,e,n){for(var r=0;r<this.staticProperties.length;r++){var s=this.staticProperties[r];s.uploadFunction(t,e,n,s.type===wt.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,s.offset)}this.staticBuffer._updateID++},i.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},i}(),wA=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,AA=`attribute vec2 aVertexPosition;
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
`,RA=function(i){Ep(t,i);function t(e){var n=i.call(this,e)||this;return n.shader=null,n.properties=null,n.tempMatrix=new Me,n.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:n.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:n.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:n.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:n.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:wt.UNSIGNED_BYTE,uploadFunction:n.uploadTint,offset:0}],n.shader=ci.from(AA,wA,{}),n.state=qi.for2d(),n}return t.prototype.render=function(e){var n=e.children,r=e._maxSize,s=e._batchSize,a=this.renderer,o=n.length;if(o!==0){o>r&&!e.autoResize&&(o=r);var h=e._buffers;h||(h=e._buffers=this.generateBuffers(e));var l=n[0]._texture.baseTexture,u=l.alphaMode>0;this.state.blendMode=Jd(e.blendMode,u),a.state.set(this.state);var c=a.gl,f=e.worldTransform.copyTo(this.tempMatrix);f.prepend(a.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=f.toArray(!0),this.shader.uniforms.uColor=Lb(e.tintRgb,e.worldAlpha,this.shader.uniforms.uColor,u),this.shader.uniforms.uSampler=l,this.renderer.shader.bind(this.shader);for(var d=!1,m=0,_=0;m<o;m+=s,_+=1){var p=o-m;p>s&&(p=s),_>=h.length&&h.push(this._generateOneMoreBuffer(e));var v=h[_];v.uploadDynamic(n,m,p);var y=e._bufferUpdateIDs[_]||0;d=d||v._updateID<y,d&&(v._updateID=e._updateID,v.uploadStatic(n,m,p)),a.geometry.bind(v.geometry),c.drawElements(c.TRIANGLES,p*6,c.UNSIGNED_SHORT,0)}}},t.prototype.generateBuffers=function(e){for(var n=[],r=e._maxSize,s=e._batchSize,a=e._properties,o=0;o<r;o+=s)n.push(new Df(this.properties,a,s));return n},t.prototype._generateOneMoreBuffer=function(e){var n=e._batchSize,r=e._properties;return new Df(this.properties,r,n)},t.prototype.uploadVertices=function(e,n,r,s,a,o){for(var h=0,l=0,u=0,c=0,f=0;f<r;++f){var d=e[n+f],m=d._texture,_=d.scale.x,p=d.scale.y,v=m.trim,y=m.orig;v?(l=v.x-d.anchor.x*y.width,h=l+v.width,c=v.y-d.anchor.y*y.height,u=c+v.height):(h=y.width*(1-d.anchor.x),l=y.width*-d.anchor.x,u=y.height*(1-d.anchor.y),c=y.height*-d.anchor.y),s[o]=l*_,s[o+1]=c*p,s[o+a]=h*_,s[o+a+1]=c*p,s[o+a*2]=h*_,s[o+a*2+1]=u*p,s[o+a*3]=l*_,s[o+a*3+1]=u*p,o+=a*4}},t.prototype.uploadPosition=function(e,n,r,s,a,o){for(var h=0;h<r;h++){var l=e[n+h].position;s[o]=l.x,s[o+1]=l.y,s[o+a]=l.x,s[o+a+1]=l.y,s[o+a*2]=l.x,s[o+a*2+1]=l.y,s[o+a*3]=l.x,s[o+a*3+1]=l.y,o+=a*4}},t.prototype.uploadRotation=function(e,n,r,s,a,o){for(var h=0;h<r;h++){var l=e[n+h].rotation;s[o]=l,s[o+a]=l,s[o+a*2]=l,s[o+a*3]=l,o+=a*4}},t.prototype.uploadUvs=function(e,n,r,s,a,o){for(var h=0;h<r;++h){var l=e[n+h]._texture._uvs;l?(s[o]=l.x0,s[o+1]=l.y0,s[o+a]=l.x1,s[o+a+1]=l.y1,s[o+a*2]=l.x2,s[o+a*2+1]=l.y2,s[o+a*3]=l.x3,s[o+a*3+1]=l.y3,o+=a*4):(s[o]=0,s[o+1]=0,s[o+a]=0,s[o+a+1]=0,s[o+a*2]=0,s[o+a*2+1]=0,s[o+a*3]=0,s[o+a*3+1]=0,o+=a*4)}},t.prototype.uploadTint=function(e,n,r,s,a,o){for(var h=0;h<r;++h){var l=e[n+h],u=l._texture.baseTexture.alphaMode>0,c=l.alpha,f=c<1&&u?Yl(l._tintRGB,c):l._tintRGB+(c*255<<24);s[o]=f,s[o+a]=f,s[o+a*2]=f,s[o+a*3]=f,o+=a*4}},t.prototype.destroy=function(){i.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},t.extension={name:"particle",type:Qt.RendererPlugin},t}(ho);/*!
 * @pixi/graphics - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Vn;(function(i){i.MITER="miter",i.BEVEL="bevel",i.ROUND="round"})(Vn||(Vn={}));var oi;(function(i){i.BUTT="butt",i.ROUND="round",i.SQUARE="square"})(oi||(oi={}));var gs={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(i,t){if(t===void 0&&(t=20),!this.adaptive||!i||isNaN(i))return t;var e=Math.ceil(i/this.maxLength);return e<this.minSegments?e=this.minSegments:e>this.maxSegments&&(e=this.maxSegments),e}},Sp=function(){function i(){this.color=16777215,this.alpha=1,this.texture=Lt.WHITE,this.matrix=null,this.visible=!1,this.reset()}return i.prototype.clone=function(){var t=new i;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t},i.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=Lt.WHITE,this.matrix=null,this.visible=!1},i.prototype.destroy=function(){this.texture=null,this.matrix=null},i}();/*! *****************************************************************************
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
***************************************************************************** */var fl=function(i,t){return fl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},fl(i,t)};function $l(i,t){fl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Lf(i,t){var e,n;t===void 0&&(t=!1);var r=i.length;if(!(r<6)){for(var s=0,a=0,o=i[r-2],h=i[r-1];a<r;a+=2){var l=i[a],u=i[a+1];s+=(l-o)*(u+h),o=l,h=u}if(!t&&s>0||t&&s<=0)for(var c=r/2,a=c+c%2;a<r;a+=2){var f=r-a-2,d=r-a-1,m=a,_=a+1;e=[i[m],i[f]],i[f]=e[0],i[m]=e[1],n=[i[_],i[d]],i[d]=n[0],i[_]=n[1]}}}var Tp={build:function(i){i.points=i.shape.points.slice()},triangulate:function(i,t){var e=i.points,n=i.holes,r=t.points,s=t.indices;if(e.length>=6){Lf(e,!1);for(var a=[],o=0;o<n.length;o++){var h=n[o];Lf(h.points,!0),a.push(e.length/2),e=e.concat(h.points)}var l=Yd(e,a,2);if(!l)return;for(var u=r.length/2,o=0;o<l.length;o+=3)s.push(l[o]+u),s.push(l[o+1]+u),s.push(l[o+2]+u);for(var o=0;o<e.length;o++)r.push(e[o])}}},Za={build:function(i){var t=i.points,e,n,r,s,a,o;if(i.type===Re.CIRC){var h=i.shape;e=h.x,n=h.y,a=o=h.radius,r=s=0}else if(i.type===Re.ELIP){var l=i.shape;e=l.x,n=l.y,a=l.width,o=l.height,r=s=0}else{var u=i.shape,c=u.width/2,f=u.height/2;e=u.x+c,n=u.y+f,a=o=Math.max(0,Math.min(u.radius,Math.min(c,f))),r=c-a,s=f-o}if(!(a>=0&&o>=0&&r>=0&&s>=0)){t.length=0;return}var d=Math.ceil(2.3*Math.sqrt(a+o)),m=d*8+(r?4:0)+(s?4:0);if(t.length=m,m!==0){if(d===0){t.length=8,t[0]=t[6]=e+r,t[1]=t[3]=n+s,t[2]=t[4]=e-r,t[5]=t[7]=n-s;return}var _=0,p=d*4+(r?2:0)+2,v=p,y=m;{var g=r+a,T=s,w=e+g,b=e-g,M=n+T;if(t[_++]=w,t[_++]=M,t[--p]=M,t[--p]=b,s){var I=n-T;t[v++]=b,t[v++]=I,t[--y]=I,t[--y]=w}}for(var E=1;E<d;E++){var x=Math.PI/2*(E/d),g=r+Math.cos(x)*a,T=s+Math.sin(x)*o,w=e+g,b=e-g,M=n+T,I=n-T;t[_++]=w,t[_++]=M,t[--p]=M,t[--p]=b,t[v++]=b,t[v++]=I,t[--y]=I,t[--y]=w}{var g=r,T=s+o,w=e+g,b=e-g,M=n+T,I=n-T;t[_++]=w,t[_++]=M,t[--y]=I,t[--y]=w,r&&(t[_++]=b,t[_++]=M,t[--y]=I,t[--y]=b)}}},triangulate:function(i,t){var e=i.points,n=t.points,r=t.indices;if(e.length!==0){var s=n.length/2,a=s,o,h;if(i.type!==Re.RREC){var l=i.shape;o=l.x,h=l.y}else{var u=i.shape;o=u.x+u.width/2,h=u.y+u.height/2}var c=i.matrix;n.push(i.matrix?c.a*o+c.c*h+c.tx:o,i.matrix?c.b*o+c.d*h+c.ty:h),s++,n.push(e[0],e[1]);for(var f=2;f<e.length;f+=2)n.push(e[f],e[f+1]),r.push(s++,a,s);r.push(a+1,a,s)}}},CA={build:function(i){var t=i.shape,e=t.x,n=t.y,r=t.width,s=t.height,a=i.points;a.length=0,a.push(e,n,e+r,n,e+r,n+s,e,n+s)},triangulate:function(i,t){var e=i.points,n=t.points,r=n.length/2;n.push(e[0],e[1],e[2],e[3],e[6],e[7],e[4],e[5]),t.indices.push(r,r+1,r+2,r+1,r+2,r+3)}};function dr(i,t,e){var n=t-i;return i+n*e}function ba(i,t,e,n,r,s,a){a===void 0&&(a=[]);for(var o=20,h=a,l=0,u=0,c=0,f=0,d=0,m=0,_=0,p=0;_<=o;++_)p=_/o,l=dr(i,e,p),u=dr(t,n,p),c=dr(e,r,p),f=dr(n,s,p),d=dr(l,c,p),m=dr(u,f,p),!(_===0&&h[h.length-2]===d&&h[h.length-1]===m)&&h.push(d,m);return h}var PA={build:function(i){if(ys.nextRoundedRectBehavior){Za.build(i);return}var t=i.shape,e=i.points,n=t.x,r=t.y,s=t.width,a=t.height,o=Math.max(0,Math.min(t.radius,Math.min(s,a)/2));e.length=0,o?(ba(n,r+o,n,r,n+o,r,e),ba(n+s-o,r,n+s,r,n+s,r+o,e),ba(n+s,r+a-o,n+s,r+a,n+s-o,r+a,e),ba(n+o,r+a,n,r+a,n,r+a-o,e)):e.push(n,r,n+s,r,n+s,r+a,n,r+a)},triangulate:function(i,t){if(ys.nextRoundedRectBehavior){Za.triangulate(i,t);return}for(var e=i.points,n=t.points,r=t.indices,s=n.length/2,a=Yd(e,null,2),o=0,h=a.length;o<h;o+=3)r.push(a[o]+s),r.push(a[o+1]+s),r.push(a[o+2]+s);for(var o=0,h=e.length;o<h;o++)n.push(e[o],e[++o])}};function Nf(i,t,e,n,r,s,a,o){var h=i-e*r,l=t-n*r,u=i+e*s,c=t+n*s,f,d;a?(f=n,d=-e):(f=-n,d=e);var m=h+f,_=l+d,p=u+f,v=c+d;return o.push(m,_),o.push(p,v),2}function Ri(i,t,e,n,r,s,a,o){var h=e-i,l=n-t,u=Math.atan2(h,l),c=Math.atan2(r-i,s-t);o&&u<c?u+=Math.PI*2:!o&&u>c&&(c+=Math.PI*2);var f=u,d=c-u,m=Math.abs(d),_=Math.sqrt(h*h+l*l),p=(15*m*Math.sqrt(_)/Math.PI>>0)+1,v=d/p;if(f+=v,o){a.push(i,t),a.push(e,n);for(var y=1,g=f;y<p;y++,g+=v)a.push(i,t),a.push(i+Math.sin(g)*_,t+Math.cos(g)*_);a.push(i,t),a.push(r,s)}else{a.push(e,n),a.push(i,t);for(var y=1,g=f;y<p;y++,g+=v)a.push(i+Math.sin(g)*_,t+Math.cos(g)*_),a.push(i,t);a.push(r,s),a.push(i,t)}return p*2}function IA(i,t){var e=i.shape,n=i.points||e.points.slice(),r=t.closePointEps;if(n.length!==0){var s=i.lineStyle,a=new re(n[0],n[1]),o=new re(n[n.length-2],n[n.length-1]),h=e.type!==Re.POLY||e.closeStroke,l=Math.abs(a.x-o.x)<r&&Math.abs(a.y-o.y)<r;if(h){n=n.slice(),l&&(n.pop(),n.pop(),o.set(n[n.length-2],n[n.length-1]));var u=(a.x+o.x)*.5,c=(o.y+a.y)*.5;n.unshift(u,c),n.push(u,c)}var f=t.points,d=n.length/2,m=n.length,_=f.length/2,p=s.width/2,v=p*p,y=s.miterLimit*s.miterLimit,g=n[0],T=n[1],w=n[2],b=n[3],M=0,I=0,E=-(T-b),x=g-w,O=0,N=0,P=Math.sqrt(E*E+x*x);E/=P,x/=P,E*=p,x*=p;var H=s.alignment,L=(1-H)*2,G=H*2;h||(s.cap===oi.ROUND?m+=Ri(g-E*(L-G)*.5,T-x*(L-G)*.5,g-E*L,T-x*L,g+E*G,T+x*G,f,!0)+2:s.cap===oi.SQUARE&&(m+=Nf(g,T,E,x,L,G,!0,f))),f.push(g-E*L,T-x*L),f.push(g+E*G,T+x*G);for(var q=1;q<d-1;++q){g=n[(q-1)*2],T=n[(q-1)*2+1],w=n[q*2],b=n[q*2+1],M=n[(q+1)*2],I=n[(q+1)*2+1],E=-(T-b),x=g-w,P=Math.sqrt(E*E+x*x),E/=P,x/=P,E*=p,x*=p,O=-(b-I),N=w-M,P=Math.sqrt(O*O+N*N),O/=P,N/=P,O*=p,N*=p;var z=w-g,$=T-b,B=w-M,V=I-b,ht=z*B+$*V,mt=$*B-V*z,k=mt<0;if(Math.abs(mt)<.001*Math.abs(ht)){f.push(w-E*L,b-x*L),f.push(w+E*G,b+x*G),ht>=0&&(s.join===Vn.ROUND?m+=Ri(w,b,w-E*L,b-x*L,w-O*L,b-N*L,f,!1)+4:m+=2,f.push(w-O*G,b-N*G),f.push(w+O*L,b+N*L));continue}var K=(-E+g)*(-x+b)-(-E+w)*(-x+T),nt=(-O+M)*(-N+b)-(-O+w)*(-N+I),tt=(z*nt-B*K)/mt,vt=(V*K-$*nt)/mt,yt=(tt-w)*(tt-w)+(vt-b)*(vt-b),Et=w+(tt-w)*L,U=b+(vt-b)*L,dt=w-(tt-w)*G,ut=b-(vt-b)*G,Tt=Math.min(z*z+$*$,B*B+V*V),_t=k?L:G,Nt=Tt+_t*_t*v,R=yt<=Nt;R?s.join===Vn.BEVEL||yt/v>y?(k?(f.push(Et,U),f.push(w+E*G,b+x*G),f.push(Et,U),f.push(w+O*G,b+N*G)):(f.push(w-E*L,b-x*L),f.push(dt,ut),f.push(w-O*L,b-N*L),f.push(dt,ut)),m+=2):s.join===Vn.ROUND?k?(f.push(Et,U),f.push(w+E*G,b+x*G),m+=Ri(w,b,w+E*G,b+x*G,w+O*G,b+N*G,f,!0)+4,f.push(Et,U),f.push(w+O*G,b+N*G)):(f.push(w-E*L,b-x*L),f.push(dt,ut),m+=Ri(w,b,w-E*L,b-x*L,w-O*L,b-N*L,f,!1)+4,f.push(w-O*L,b-N*L),f.push(dt,ut)):(f.push(Et,U),f.push(dt,ut)):(f.push(w-E*L,b-x*L),f.push(w+E*G,b+x*G),s.join===Vn.ROUND?k?m+=Ri(w,b,w+E*G,b+x*G,w+O*G,b+N*G,f,!0)+2:m+=Ri(w,b,w-E*L,b-x*L,w-O*L,b-N*L,f,!1)+2:s.join===Vn.MITER&&yt/v<=y&&(k?(f.push(dt,ut),f.push(dt,ut)):(f.push(Et,U),f.push(Et,U)),m+=2),f.push(w-O*L,b-N*L),f.push(w+O*G,b+N*G),m+=2)}g=n[(d-2)*2],T=n[(d-2)*2+1],w=n[(d-1)*2],b=n[(d-1)*2+1],E=-(T-b),x=g-w,P=Math.sqrt(E*E+x*x),E/=P,x/=P,E*=p,x*=p,f.push(w-E*L,b-x*L),f.push(w+E*G,b+x*G),h||(s.cap===oi.ROUND?m+=Ri(w-E*(L-G)*.5,b-x*(L-G)*.5,w-E*L,b-x*L,w+E*G,b+x*G,f,!1)+2:s.cap===oi.SQUARE&&(m+=Nf(w,b,E,x,L,G,!1,f)));for(var S=t.indices,W=gs.epsilon*gs.epsilon,q=_;q<m+_-2;++q)g=f[q*2],T=f[q*2+1],w=f[(q+1)*2],b=f[(q+1)*2+1],M=f[(q+2)*2],I=f[(q+2)*2+1],!(Math.abs(g*(b-I)+w*(I-T)+M*(T-b))<W)&&S.push(q,q+1,q+2)}}function OA(i,t){var e=0,n=i.shape,r=i.points||n.points,s=n.type!==Re.POLY||n.closeStroke;if(r.length!==0){var a=t.points,o=t.indices,h=r.length/2,l=a.length/2,u=l;for(a.push(r[0],r[1]),e=1;e<h;e++)a.push(r[e*2],r[e*2+1]),o.push(u,u+1),u++;s&&o.push(u,l)}}function Uf(i,t){i.lineStyle.native?OA(i,t):IA(i,t)}var Ff=function(){function i(){}return i.curveTo=function(t,e,n,r,s,a){var o=a[a.length-2],h=a[a.length-1],l=h-e,u=o-t,c=r-e,f=n-t,d=Math.abs(l*f-u*c);if(d<1e-8||s===0)return(a[a.length-2]!==t||a[a.length-1]!==e)&&a.push(t,e),null;var m=l*l+u*u,_=c*c+f*f,p=l*c+u*f,v=s*Math.sqrt(m)/d,y=s*Math.sqrt(_)/d,g=v*p/m,T=y*p/_,w=v*f+y*u,b=v*c+y*l,M=u*(y+g),I=l*(y+g),E=f*(v+T),x=c*(v+T),O=Math.atan2(I-b,M-w),N=Math.atan2(x-b,E-w);return{cx:w+t,cy:b+e,radius:s,startAngle:O,endAngle:N,anticlockwise:u*c>f*l}},i.arc=function(t,e,n,r,s,a,o,h,l){for(var u=o-a,c=gs._segmentsCount(Math.abs(u)*s,Math.ceil(Math.abs(u)/qa)*40),f=u/(c*2),d=f*2,m=Math.cos(f),_=Math.sin(f),p=c-1,v=p%1/p,y=0;y<=p;++y){var g=y+v*y,T=f+a+d*g,w=Math.cos(T),b=-Math.sin(T);l.push((m*w+_*b)*s+n,(m*-b+_*w)*s+r)}},i}(),DA=function(){function i(){}return i.curveLength=function(t,e,n,r,s,a,o,h){for(var l=10,u=0,c=0,f=0,d=0,m=0,_=0,p=0,v=0,y=0,g=0,T=0,w=t,b=e,M=1;M<=l;++M)c=M/l,f=c*c,d=f*c,m=1-c,_=m*m,p=_*m,v=p*t+3*_*c*n+3*m*f*s+d*o,y=p*e+3*_*c*r+3*m*f*a+d*h,g=w-v,T=b-y,w=v,b=y,u+=Math.sqrt(g*g+T*T);return u},i.curveTo=function(t,e,n,r,s,a,o){var h=o[o.length-2],l=o[o.length-1];o.length-=2;var u=gs._segmentsCount(i.curveLength(h,l,t,e,n,r,s,a)),c=0,f=0,d=0,m=0,_=0;o.push(h,l);for(var p=1,v=0;p<=u;++p)v=p/u,c=1-v,f=c*c,d=f*c,m=v*v,_=m*v,o.push(d*h+3*f*v*t+3*c*m*n+_*s,d*l+3*f*v*e+3*c*m*r+_*a)},i}(),LA=function(){function i(){}return i.curveLength=function(t,e,n,r,s,a){var o=t-2*n+s,h=e-2*r+a,l=2*n-2*t,u=2*r-2*e,c=4*(o*o+h*h),f=4*(o*l+h*u),d=l*l+u*u,m=2*Math.sqrt(c+f+d),_=Math.sqrt(c),p=2*c*_,v=2*Math.sqrt(d),y=f/_;return(p*m+_*f*(m-v)+(4*d*c-f*f)*Math.log((2*_+y+m)/(y+v)))/(4*p)},i.curveTo=function(t,e,n,r,s){for(var a=s[s.length-2],o=s[s.length-1],h=gs._segmentsCount(i.curveLength(a,o,t,e,n,r)),l=0,u=0,c=1;c<=h;++c){var f=c/h;l=a+(t-a)*f,u=o+(e-o)*f,s.push(l+(t+(n-t)*f-l)*f,u+(e+(r-e)*f-u)*f)}},i}(),NA=function(){function i(){this.reset()}return i.prototype.begin=function(t,e,n){this.reset(),this.style=t,this.start=e,this.attribStart=n},i.prototype.end=function(t,e){this.attribSize=e-this.attribStart,this.size=t-this.start},i.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},i}(),Ci,Mh=(Ci={},Ci[Re.POLY]=Tp,Ci[Re.CIRC]=Za,Ci[Re.ELIP]=Za,Ci[Re.RECT]=CA,Ci[Re.RREC]=PA,Ci),Bf=[],Ma=[],Gf=function(){function i(t,e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=null),this.points=[],this.holes=[],this.shape=t,this.lineStyle=n,this.fillStyle=e,this.matrix=r,this.type=t.type}return i.prototype.clone=function(){return new i(this.shape,this.fillStyle,this.lineStyle,this.matrix)},i.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},i}(),pr=new re,UA=function(i){$l(t,i);function t(){var e=i.call(this)||this;return e.closePointEps=1e-4,e.boundsPadding=0,e.uvsFloat32=null,e.indicesUint16=null,e.batchable=!1,e.points=[],e.colors=[],e.uvs=[],e.indices=[],e.textureIds=[],e.graphicsData=[],e.drawCalls=[],e.batchDirty=-1,e.batches=[],e.dirty=0,e.cacheDirty=-1,e.clearDirty=0,e.shapeIndex=0,e._bounds=new $a,e.boundsDirty=-1,e}return Object.defineProperty(t.prototype,"bounds",{get:function(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),t.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var e=0;e<this.drawCalls.length;e++)this.drawCalls[e].texArray.clear(),Ma.push(this.drawCalls[e]);this.drawCalls.length=0;for(var e=0;e<this.batches.length;e++){var n=this.batches[e];n.reset(),Bf.push(n)}this.batches.length=0},t.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},t.prototype.drawShape=function(e,n,r,s){n===void 0&&(n=null),r===void 0&&(r=null),s===void 0&&(s=null);var a=new Gf(e,n,r,s);return this.graphicsData.push(a),this.dirty++,this},t.prototype.drawHole=function(e,n){if(n===void 0&&(n=null),!this.graphicsData.length)return null;var r=new Gf(e,null,null,n),s=this.graphicsData[this.graphicsData.length-1];return r.lineStyle=s.lineStyle,s.holes.push(r),this.dirty++,this},t.prototype.destroy=function(){i.prototype.destroy.call(this);for(var e=0;e<this.graphicsData.length;++e)this.graphicsData[e].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},t.prototype.containsPoint=function(e){for(var n=this.graphicsData,r=0;r<n.length;++r){var s=n[r];if(s.fillStyle.visible&&s.shape&&(s.matrix?s.matrix.applyInverse(e,pr):pr.copyFrom(e),s.shape.contains(pr.x,pr.y))){var a=!1;if(s.holes)for(var o=0;o<s.holes.length;o++){var h=s.holes[o];if(h.shape.contains(pr.x,pr.y)){a=!0;break}}if(!a)return!0}}return!1},t.prototype.updateBatches=function(){if(!this.graphicsData.length){this.batchable=!0;return}if(this.validateBatching()){this.cacheDirty=this.dirty;var e=this.uvs,n=this.graphicsData,r=null,s=null;this.batches.length>0&&(r=this.batches[this.batches.length-1],s=r.style);for(var a=this.shapeIndex;a<n.length;a++){this.shapeIndex++;var o=n[a],h=o.fillStyle,l=o.lineStyle,u=Mh[o.type];u.build(o),o.matrix&&this.transformPoints(o.points,o.matrix),(h.visible||l.visible)&&this.processHoles(o.holes);for(var c=0;c<2;c++){var f=c===0?h:l;if(f.visible){var d=f.texture.baseTexture,m=this.indices.length,_=this.points.length/2;d.wrapMode=bn.REPEAT,c===0?this.processFill(o):this.processLine(o);var p=this.points.length/2-_;p!==0&&(r&&!this._compareStyles(s,f)&&(r.end(m,_),r=null),r||(r=Bf.pop()||new NA,r.begin(f,m,_),this.batches.push(r),s=f),this.addUvs(this.points,e,f.texture,_,p,f.matrix))}}}var v=this.indices.length,y=this.points.length/2;if(r&&r.end(v,y),this.batches.length===0){this.batchable=!0;return}var g=y>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&g===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=g?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},t.prototype._compareStyles=function(e,n){return!(!e||!n||e.texture.baseTexture!==n.texture.baseTexture||e.color+e.alpha!==n.color+n.alpha||!!e.native!=!!n.native)},t.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var e=0,n=this.graphicsData.length;e<n;e++){var r=this.graphicsData[e],s=r.fillStyle,a=r.lineStyle;if(s&&!s.texture.baseTexture.valid||a&&!a.texture.baseTexture.valid)return!1}return!0},t.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var e=this.batches,n=0,r=e.length;n<r;n++)for(var s=e[n],a=0;a<s.size;a++){var o=s.start+a;this.indicesUint16[o]=this.indicesUint16[o]-s.attribStart}},t.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var e=this.batches,n=0;n<e.length;n++)if(e[n].style.native)return!1;return this.points.length<t.BATCHABLE_SIZE*2},t.prototype.buildDrawCalls=function(){for(var e=++Wt._globalBatch,n=0;n<this.drawCalls.length;n++)this.drawCalls[n].texArray.clear(),Ma.push(this.drawCalls[n]);this.drawCalls.length=0;var r=this.colors,s=this.textureIds,a=Ma.pop();a||(a=new il,a.texArray=new rl),a.texArray.count=0,a.start=0,a.size=0,a.type=hn.TRIANGLES;var o=0,h=null,l=0,u=!1,c=hn.TRIANGLES,f=0;this.drawCalls.push(a);for(var n=0;n<this.batches.length;n++){var d=this.batches[n],m=8,_=d.style,p=_.texture.baseTexture;u!==!!_.native&&(u=!!_.native,c=u?hn.LINES:hn.TRIANGLES,h=null,o=m,e++),h!==p&&(h=p,p._batchEnabled!==e&&(o===m&&(e++,o=0,a.size>0&&(a=Ma.pop(),a||(a=new il,a.texArray=new rl),this.drawCalls.push(a)),a.start=f,a.size=0,a.texArray.count=0,a.type=c),p.touched=1,p._batchEnabled=e,p._batchLocation=o,p.wrapMode=bn.REPEAT,a.texArray.elements[a.texArray.count++]=p,o++)),a.size+=d.size,f+=d.size,l=p._batchLocation,this.addColors(r,_.color,_.alpha,d.attribSize,d.attribStart),this.addTextureIds(s,l,d.attribSize,d.attribStart)}Wt._globalBatch=e,this.packAttributes()},t.prototype.packAttributes=function(){for(var e=this.points,n=this.uvs,r=this.colors,s=this.textureIds,a=new ArrayBuffer(e.length*3*4),o=new Float32Array(a),h=new Uint32Array(a),l=0,u=0;u<e.length/2;u++)o[l++]=e[u*2],o[l++]=e[u*2+1],o[l++]=n[u*2],o[l++]=n[u*2+1],h[l++]=r[u],o[l++]=s[u];this._buffer.update(a),this._indexBuffer.update(this.indicesUint16)},t.prototype.processFill=function(e){if(e.holes.length)Tp.triangulate(e,this);else{var n=Mh[e.type];n.triangulate(e,this)}},t.prototype.processLine=function(e){Uf(e,this);for(var n=0;n<e.holes.length;n++)Uf(e.holes[n],this)},t.prototype.processHoles=function(e){for(var n=0;n<e.length;n++){var r=e[n],s=Mh[r.type];s.build(r),r.matrix&&this.transformPoints(r.points,r.matrix)}},t.prototype.calculateBounds=function(){var e=this._bounds;e.clear(),e.addVertexData(this.points,0,this.points.length),e.pad(this.boundsPadding,this.boundsPadding)},t.prototype.transformPoints=function(e,n){for(var r=0;r<e.length/2;r++){var s=e[r*2],a=e[r*2+1];e[r*2]=n.a*s+n.c*a+n.tx,e[r*2+1]=n.b*s+n.d*a+n.ty}},t.prototype.addColors=function(e,n,r,s,a){a===void 0&&(a=0);var o=(n>>16)+(n&65280)+((n&255)<<16),h=Yl(o,r);e.length=Math.max(e.length,a+s);for(var l=0;l<s;l++)e[a+l]=h},t.prototype.addTextureIds=function(e,n,r,s){s===void 0&&(s=0),e.length=Math.max(e.length,s+r);for(var a=0;a<r;a++)e[s+a]=n},t.prototype.addUvs=function(e,n,r,s,a,o){o===void 0&&(o=null);for(var h=0,l=n.length,u=r.frame;h<a;){var c=e[(s+h)*2],f=e[(s+h)*2+1];if(o){var d=o.a*c+o.c*f+o.tx;f=o.b*c+o.d*f+o.ty,c=d}h++,n.push(c/u.width,f/u.height)}var m=r.baseTexture;(u.width<m.width||u.height<m.height)&&this.adjustUvs(n,r,l,a)},t.prototype.adjustUvs=function(e,n,r,s){for(var a=n.baseTexture,o=1e-6,h=r+s*2,l=n.frame,u=l.width/a.width,c=l.height/a.height,f=l.x/l.width,d=l.y/l.height,m=Math.floor(e[r]+o),_=Math.floor(e[r+1]+o),p=r+2;p<h;p+=2)m=Math.min(m,Math.floor(e[p]+o)),_=Math.min(_,Math.floor(e[p+1]+o));f-=m,d-=_;for(var p=r;p<h;p+=2)e[p]=(e[p]+f)*u,e[p+1]=(e[p+1]+d)*c},t.BATCHABLE_SIZE=100,t}(vp),FA=function(i){$l(t,i);function t(){var e=i!==null&&i.apply(this,arguments)||this;return e.width=0,e.alignment=.5,e.native=!1,e.cap=oi.BUTT,e.join=Vn.MITER,e.miterLimit=10,e}return t.prototype.clone=function(){var e=new t;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e.width=this.width,e.alignment=this.alignment,e.native=this.native,e.cap=this.cap,e.join=this.join,e.miterLimit=this.miterLimit,e},t.prototype.reset=function(){i.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},t}(Sp),BA=new Float32Array(3),wh={},ys=function(i){$l(t,i);function t(e){e===void 0&&(e=null);var n=i.call(this)||this;return n.shader=null,n.pluginName="batch",n.currentPath=null,n.batches=[],n.batchTint=-1,n.batchDirty=-1,n.vertexData=null,n._fillStyle=new Sp,n._lineStyle=new FA,n._matrix=null,n._holeMode=!1,n.state=qi.for2d(),n._geometry=e||new UA,n._geometry.refCount++,n._transformID=-1,n.tint=16777215,n.blendMode=Rt.NORMAL,n}return Object.defineProperty(t.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return this.finishPoly(),new t(this._geometry)},Object.defineProperty(t.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(e){this.state.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){this._tint=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),t.prototype.lineStyle=function(e,n,r,s,a){return e===void 0&&(e=null),n===void 0&&(n=0),r===void 0&&(r=1),s===void 0&&(s=.5),a===void 0&&(a=!1),typeof e=="number"&&(e={width:e,color:n,alpha:r,alignment:s,native:a}),this.lineTextureStyle(e)},t.prototype.lineTextureStyle=function(e){e=Object.assign({width:0,texture:Lt.WHITE,color:e&&e.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:oi.BUTT,join:Vn.MITER,miterLimit:10},e),this.currentPath&&this.startPoly();var n=e.width>0&&e.alpha>0;return n?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._lineStyle,{visible:n},e)):this._lineStyle.reset(),this},t.prototype.startPoly=function(){if(this.currentPath){var e=this.currentPath.points,n=this.currentPath.points.length;n>2&&(this.drawShape(this.currentPath),this.currentPath=new Oa,this.currentPath.closeStroke=!1,this.currentPath.points.push(e[n-2],e[n-1]))}else this.currentPath=new Oa,this.currentPath.closeStroke=!1},t.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},t.prototype.moveTo=function(e,n){return this.startPoly(),this.currentPath.points[0]=e,this.currentPath.points[1]=n,this},t.prototype.lineTo=function(e,n){this.currentPath||this.moveTo(0,0);var r=this.currentPath.points,s=r[r.length-2],a=r[r.length-1];return(s!==e||a!==n)&&r.push(e,n),this},t.prototype._initCurve=function(e,n){e===void 0&&(e=0),n===void 0&&(n=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[e,n]):this.moveTo(e,n)},t.prototype.quadraticCurveTo=function(e,n,r,s){this._initCurve();var a=this.currentPath.points;return a.length===0&&this.moveTo(0,0),LA.curveTo(e,n,r,s,a),this},t.prototype.bezierCurveTo=function(e,n,r,s,a,o){return this._initCurve(),DA.curveTo(e,n,r,s,a,o,this.currentPath.points),this},t.prototype.arcTo=function(e,n,r,s,a){this._initCurve(e,n);var o=this.currentPath.points,h=Ff.curveTo(e,n,r,s,a,o);if(h){var l=h.cx,u=h.cy,c=h.radius,f=h.startAngle,d=h.endAngle,m=h.anticlockwise;this.arc(l,u,c,f,d,m)}return this},t.prototype.arc=function(e,n,r,s,a,o){if(o===void 0&&(o=!1),s===a)return this;!o&&a<=s?a+=qa:o&&s<=a&&(s+=qa);var h=a-s;if(h===0)return this;var l=e+Math.cos(s)*r,u=n+Math.sin(s)*r,c=this._geometry.closePointEps,f=this.currentPath?this.currentPath.points:null;if(f){var d=Math.abs(f[f.length-2]-l),m=Math.abs(f[f.length-1]-u);d<c&&m<c||f.push(l,u)}else this.moveTo(l,u),f=this.currentPath.points;return Ff.arc(l,u,e,n,r,s,a,o,f),this},t.prototype.beginFill=function(e,n){return e===void 0&&(e=0),n===void 0&&(n=1),this.beginTextureFill({texture:Lt.WHITE,color:e,alpha:n})},t.prototype.beginTextureFill=function(e){e=Object.assign({texture:Lt.WHITE,color:16777215,alpha:1,matrix:null},e),this.currentPath&&this.startPoly();var n=e.alpha>0;return n?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._fillStyle,{visible:n},e)):this._fillStyle.reset(),this},t.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},t.prototype.drawRect=function(e,n,r,s){return this.drawShape(new Yt(e,n,r,s))},t.prototype.drawRoundedRect=function(e,n,r,s,a){return this.drawShape(new Vb(e,n,r,s,a))},t.prototype.drawCircle=function(e,n,r){return this.drawShape(new Hb(e,n,r))},t.prototype.drawEllipse=function(e,n,r,s){return this.drawShape(new zb(e,n,r,s))},t.prototype.drawPolygon=function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];var s,a=!0,o=n[0];o.points?(a=o.closeStroke,s=o.points):Array.isArray(n[0])?s=n[0]:s=n;var h=new Oa(s);return h.closeStroke=a,this.drawShape(h),this},t.prototype.drawShape=function(e){return this._holeMode?this._geometry.drawHole(e,this._matrix):this._geometry.drawShape(e,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},t.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},t.prototype.isFastRect=function(){var e=this._geometry.graphicsData;return e.length===1&&e[0].shape.type===Re.RECT&&!e[0].matrix&&!e[0].holes.length&&!(e[0].lineStyle.visible&&e[0].lineStyle.width)},t.prototype._render=function(e){this.finishPoly();var n=this._geometry;n.updateBatches(),n.batchable?(this.batchDirty!==n.batchDirty&&this._populateBatches(),this._renderBatched(e)):(e.batch.flush(),this._renderDirect(e))},t.prototype._populateBatches=function(){var e=this._geometry,n=this.blendMode,r=e.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=e.batchDirty,this.batches.length=r,this.vertexData=new Float32Array(e.points);for(var s=0;s<r;s++){var a=e.batches[s],o=a.style.color,h=new Float32Array(this.vertexData.buffer,a.attribStart*4*2,a.attribSize*2),l=new Float32Array(e.uvsFloat32.buffer,a.attribStart*4*2,a.attribSize*2),u=new Uint16Array(e.indicesUint16.buffer,a.start*2,a.size),c={vertexData:h,blendMode:n,indices:u,uvs:l,_batchRGB:Dr(o),_tintRGB:o,_texture:a.style.texture,alpha:a.style.alpha,worldAlpha:1};this.batches[s]=c}},t.prototype._renderBatched=function(e){if(this.batches.length){e.batch.setObjectRenderer(e.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var n=0,r=this.batches.length;n<r;n++){var s=this.batches[n];s.worldAlpha=this.worldAlpha*s.alpha,e.plugins[this.pluginName].render(s)}}},t.prototype._renderDirect=function(e){var n=this._resolveDirectShader(e),r=this._geometry,s=this.tint,a=this.worldAlpha,o=n.uniforms,h=r.drawCalls;o.translationMatrix=this.transform.worldTransform,o.tint[0]=(s>>16&255)/255*a,o.tint[1]=(s>>8&255)/255*a,o.tint[2]=(s&255)/255*a,o.tint[3]=a,e.shader.bind(n),e.geometry.bind(r,n),e.state.set(this.state);for(var l=0,u=h.length;l<u;l++)this._renderDrawCallDirect(e,r.drawCalls[l])},t.prototype._renderDrawCallDirect=function(e,n){for(var r=n.texArray,s=n.type,a=n.size,o=n.start,h=r.count,l=0;l<h;l++)e.texture.bind(r.elements[l],l);e.geometry.draw(s,a,o)},t.prototype._resolveDirectShader=function(e){var n=this.shader,r=this.pluginName;if(!n){if(!wh[r]){for(var s=e.plugins[r].MAX_TEXTURES,a=new Int32Array(s),o=0;o<s;o++)a[o]=o;var h={tint:new Float32Array([1,1,1,1]),translationMatrix:new Me,default:zi.from({uSamplers:a},!0)},l=e.plugins[r]._shader.program;wh[r]=new ci(l,h)}n=wh[r]}return n},t.prototype._calculateBounds=function(){this.finishPoly();var e=this._geometry;if(e.graphicsData.length){var n=e.bounds,r=n.minX,s=n.minY,a=n.maxX,o=n.maxY;this._bounds.addFrame(this.transform,r,s,a,o)}},t.prototype.containsPoint=function(e){return this.worldTransform.applyInverse(e,t._TEMP_POINT),this._geometry.containsPoint(t._TEMP_POINT)},t.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var e=Dr(this.tint,BA),n=0;n<this.batches.length;n++){var r=this.batches[n],s=r._batchRGB,a=e[0]*s[0]*255,o=e[1]*s[1]*255,h=e[2]*s[2]*255,l=(a<<16)+(o<<8)+(h|0);r._tintRGB=(l>>16)+(l&65280)+((l&255)<<16)}}},t.prototype.calculateVertices=function(){var e=this.transform._worldID;if(this._transformID!==e){this._transformID=e;for(var n=this.transform.worldTransform,r=n.a,s=n.b,a=n.c,o=n.d,h=n.tx,l=n.ty,u=this._geometry.points,c=this.vertexData,f=0,d=0;d<u.length;d+=2){var m=u[d],_=u[d+1];c[f++]=r*m+a*_+h,c[f++]=o*_+s*m+l}}},t.prototype.closePath=function(){var e=this.currentPath;return e&&(e.closeStroke=!0,this.finishPoly()),this},t.prototype.setMatrix=function(e){return this._matrix=e,this},t.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},t.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},t.prototype.destroy=function(e){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,i.prototype.destroy.call(this,e)},t.nextRoundedRectBehavior=!1,t._TEMP_POINT=new re,t}(An);/*!
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
***************************************************************************** */var dl=function(i,t){return dl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},dl(i,t)};function GA(i,t){dl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Zr=new re,kA=new Uint16Array([0,1,2,0,2,3]),Is=function(i){GA(t,i);function t(e){var n=i.call(this)||this;return n._anchor=new xr(n._onAnchorUpdate,n,e?e.defaultAnchor.x:0,e?e.defaultAnchor.y:0),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=null,n.tint=16777215,n.blendMode=Rt.NORMAL,n._cachedTint=16777215,n.uvs=null,n.texture=e||Lt.EMPTY,n.vertexData=new Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n._transformTrimmedID=-1,n._textureTrimmedID=-1,n.indices=kA,n.pluginName="batch",n.isSprite=!0,n._roundPixels=ct.ROUND_PIXELS,n}return t.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=yr(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=yr(this.scale.y)*this._height/this._texture.orig.height)},t.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},t.prototype.calculateVertices=function(){var e=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===e._updateID)){this._textureID!==e._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=e._updateID;var n=this.transform.worldTransform,r=n.a,s=n.b,a=n.c,o=n.d,h=n.tx,l=n.ty,u=this.vertexData,c=e.trim,f=e.orig,d=this._anchor,m=0,_=0,p=0,v=0;if(c?(_=c.x-d._x*f.width,m=_+c.width,v=c.y-d._y*f.height,p=v+c.height):(_=-d._x*f.width,m=_+f.width,v=-d._y*f.height,p=v+f.height),u[0]=r*_+a*v+h,u[1]=o*v+s*_+l,u[2]=r*m+a*v+h,u[3]=o*v+s*m+l,u[4]=r*m+a*p+h,u[5]=o*p+s*m+l,u[6]=r*_+a*p+h,u[7]=o*p+s*_+l,this._roundPixels)for(var y=ct.RESOLUTION,g=0;g<u.length;++g)u[g]=Math.round((u[g]*y|0)/y)}},t.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var e=this._texture,n=this.vertexTrimmedData,r=e.orig,s=this._anchor,a=this.transform.worldTransform,o=a.a,h=a.b,l=a.c,u=a.d,c=a.tx,f=a.ty,d=-s._x*r.width,m=d+r.width,_=-s._y*r.height,p=_+r.height;n[0]=o*d+l*_+c,n[1]=u*_+h*d+f,n[2]=o*m+l*_+c,n[3]=u*_+h*m+f,n[4]=o*m+l*p+c,n[5]=u*p+h*m+f,n[6]=o*d+l*p+c,n[7]=u*p+h*d+f},t.prototype._render=function(e){this.calculateVertices(),e.batch.setObjectRenderer(e.plugins[this.pluginName]),e.plugins[this.pluginName].render(this)},t.prototype._calculateBounds=function(){var e=this._texture.trim,n=this._texture.orig;!e||e.width===n.width&&e.height===n.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},t.prototype.getLocalBounds=function(e){return this.children.length===0?(this._localBounds||(this._localBounds=new $a),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new Yt),e=this._localBoundsRect),this._localBounds.getRectangle(e)):i.prototype.getLocalBounds.call(this,e)},t.prototype.containsPoint=function(e){this.worldTransform.applyInverse(e,Zr);var n=this._texture.orig.width,r=this._texture.orig.height,s=-n*this.anchor.x,a=0;return Zr.x>=s&&Zr.x<s+n&&(a=-r*this.anchor.y,Zr.y>=a&&Zr.y<a+r)},t.prototype.destroy=function(e){i.prototype.destroy.call(this,e),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var n=typeof e=="boolean"?e:e&&e.texture;if(n){var r=typeof e=="boolean"?e:e&&e.baseTexture;this._texture.destroy(!!r)}this._texture=null},t.from=function(e,n){var r=e instanceof Lt?e:Lt.from(e,n);return new t(r)},Object.defineProperty(t.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(e){this._roundPixels!==e&&(this._transformID=-1),this._roundPixels=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(e){var n=yr(this.scale.x)||1;this.scale.x=n*e/this._texture.orig.width,this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(e){var n=yr(this.scale.y)||1;this.scale.y=n*e/this._texture.orig.height,this._height=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"anchor",{get:function(){return this._anchor},set:function(e){this._anchor.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){this._tint=e,this._tintRGB=(e>>16)+(e&65280)+((e&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"texture",{get:function(){return this._texture},set:function(e){this._texture!==e&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=e||Lt.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,e&&(e.baseTexture.valid?this._onTextureUpdate():e.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),t}(An);/*!
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
***************************************************************************** */var pl=function(i,t){return pl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},pl(i,t)};function HA(i,t){pl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var xs;(function(i){i[i.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",i[i.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(xs||(xs={}));var Ah={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:xs.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},zA=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],Lr=function(){function i(t){this.styleID=0,this.reset(),Ch(this,t,t)}return i.prototype.clone=function(){var t={};return Ch(t,this,Ah),new i(t)},i.prototype.reset=function(){Ch(this,Ah,Ah)},Object.defineProperty(i.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"breakWords",{get:function(){return this._breakWords},set:function(t){this._breakWords!==t&&(this._breakWords=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(t){this._dropShadow!==t&&(this._dropShadow=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(t){this._dropShadowAlpha!==t&&(this._dropShadowAlpha=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(t){this._dropShadowAngle!==t&&(this._dropShadowAngle=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(t){this._dropShadowBlur!==t&&(this._dropShadowBlur=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(t){var e=Rh(t);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(t){this._dropShadowDistance!==t&&(this._dropShadowDistance=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fill",{get:function(){return this._fill},set:function(t){var e=Rh(t);this._fill!==e&&(this._fill=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(t){this._fillGradientType!==t&&(this._fillGradientType=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(t){VA(this._fillGradientStops,t)||(this._fillGradientStops=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(t){this.fontFamily!==t&&(this._fontFamily=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(t){this._fontVariant!==t&&(this._fontVariant=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(t){this._lineHeight!==t&&(this._lineHeight=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"leading",{get:function(){return this._leading},set:function(t){this._leading!==t&&(this._leading=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(t){this._lineJoin!==t&&(this._lineJoin=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(t){this._miterLimit!==t&&(this._miterLimit=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"padding",{get:function(){return this._padding},set:function(t){this._padding!==t&&(this._padding=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"stroke",{get:function(){return this._stroke},set:function(t){var e=Rh(t);this._stroke!==e&&(this._stroke=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(t){this._strokeThickness!==t&&(this._strokeThickness=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(t){this._textBaseline!==t&&(this._textBaseline=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"trim",{get:function(){return this._trim},set:function(t){this._trim!==t&&(this._trim=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(t){this._whiteSpace!==t&&(this._whiteSpace=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(t){this._wordWrap!==t&&(this._wordWrap=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.styleID++)},enumerable:!1,configurable:!0}),i.prototype.toFontString=function(){var t=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,e=this.fontFamily;Array.isArray(this.fontFamily)||(e=this.fontFamily.split(","));for(var n=e.length-1;n>=0;n--){var r=e[n].trim();!/([\"\'])[^\'\"]+\1/.test(r)&&zA.indexOf(r)<0&&(r='"'+r+'"'),e[n]=r}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+t+" "+e.join(",")},i}();function kf(i){return typeof i=="number"?jd(i):(typeof i=="string"&&i.indexOf("0x")===0&&(i=i.replace("0x","#")),i)}function Rh(i){if(Array.isArray(i)){for(var t=0;t<i.length;++t)i[t]=kf(i[t]);return i}else return kf(i)}function VA(i,t){if(!Array.isArray(i)||!Array.isArray(t)||i.length!==t.length)return!1;for(var e=0;e<i.length;++e)if(i[e]!==t[e])return!1;return!0}function Ch(i,t,e){for(var n in e)Array.isArray(t[n])?i[n]=t[n].slice():i[n]=t[n]}var wa={willReadFrequently:!0},Pn=function(){function i(t,e,n,r,s,a,o,h,l){this.text=t,this.style=e,this.width=n,this.height=r,this.lines=s,this.lineWidths=a,this.lineHeight=o,this.maxLineWidth=h,this.fontProperties=l}return i.measureText=function(t,e,n,r){r===void 0&&(r=i._canvas),n=n??e.wordWrap;var s=e.toFontString(),a=i.measureFont(s);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);var o=r.getContext("2d",wa);o.font=s;for(var h=n?i.wordWrap(t,e,r):t,l=h.split(/(?:\r\n|\r|\n)/),u=new Array(l.length),c=0,f=0;f<l.length;f++){var d=o.measureText(l[f]).width+(l[f].length-1)*e.letterSpacing;u[f]=d,c=Math.max(c,d)}var m=c+e.strokeThickness;e.dropShadow&&(m+=e.dropShadowDistance);var _=e.lineHeight||a.fontSize+e.strokeThickness,p=Math.max(_,a.fontSize+e.strokeThickness)+(l.length-1)*(_+e.leading);return e.dropShadow&&(p+=e.dropShadowDistance),new i(t,e,m,p,l,u,_+e.leading,c,a)},i.wordWrap=function(t,e,n){n===void 0&&(n=i._canvas);for(var r=n.getContext("2d",wa),s=0,a="",o="",h=Object.create(null),l=e.letterSpacing,u=e.whiteSpace,c=i.collapseSpaces(u),f=i.collapseNewlines(u),d=!c,m=e.wordWrapWidth+l,_=i.tokenize(t),p=0;p<_.length;p++){var v=_[p];if(i.isNewline(v)){if(!f){o+=i.addLine(a),d=!c,a="",s=0;continue}v=" "}if(c){var y=i.isBreakingSpace(v),g=i.isBreakingSpace(a[a.length-1]);if(y&&g)continue}var T=i.getFromCache(v,l,h,r);if(T>m)if(a!==""&&(o+=i.addLine(a),a="",s=0),i.canBreakWords(v,e.breakWords))for(var w=i.wordWrapSplit(v),b=0;b<w.length;b++){for(var M=w[b],I=1;w[b+I];){var E=w[b+I],x=M[M.length-1];if(!i.canBreakChars(x,E,v,b,e.breakWords))M+=E;else break;I++}b+=M.length-1;var O=i.getFromCache(M,l,h,r);O+s>m&&(o+=i.addLine(a),d=!1,a="",s=0),a+=M,s+=O}else{a.length>0&&(o+=i.addLine(a),a="",s=0);var N=p===_.length-1;o+=i.addLine(v,!N),d=!1,a="",s=0}else T+s>m&&(d=!1,o+=i.addLine(a),a="",s=0),(a.length>0||!i.isBreakingSpace(v)||d)&&(a+=v,s+=T)}return o+=i.addLine(a,!1),o},i.addLine=function(t,e){return e===void 0&&(e=!0),t=i.trimRight(t),t=e?t+`
`:t,t},i.getFromCache=function(t,e,n,r){var s=n[t];if(typeof s!="number"){var a=t.length*e;s=r.measureText(t).width+a,n[t]=s}return s},i.collapseSpaces=function(t){return t==="normal"||t==="pre-line"},i.collapseNewlines=function(t){return t==="normal"},i.trimRight=function(t){if(typeof t!="string")return"";for(var e=t.length-1;e>=0;e--){var n=t[e];if(!i.isBreakingSpace(n))break;t=t.slice(0,-1)}return t},i.isNewline=function(t){return typeof t!="string"?!1:i._newlines.indexOf(t.charCodeAt(0))>=0},i.isBreakingSpace=function(t,e){return typeof t!="string"?!1:i._breakingSpaces.indexOf(t.charCodeAt(0))>=0},i.tokenize=function(t){var e=[],n="";if(typeof t!="string")return e;for(var r=0;r<t.length;r++){var s=t[r],a=t[r+1];if(i.isBreakingSpace(s,a)||i.isNewline(s)){n!==""&&(e.push(n),n=""),e.push(s);continue}n+=s}return n!==""&&e.push(n),e},i.canBreakWords=function(t,e){return e},i.canBreakChars=function(t,e,n,r,s){return!0},i.wordWrapSplit=function(t){return t.split("")},i.measureFont=function(t){if(i._fonts[t])return i._fonts[t];var e={ascent:0,descent:0,fontSize:0},n=i._canvas,r=i._context;r.font=t;var s=i.METRICS_STRING+i.BASELINE_SYMBOL,a=Math.ceil(r.measureText(s).width),o=Math.ceil(r.measureText(i.BASELINE_SYMBOL).width),h=Math.ceil(i.HEIGHT_MULTIPLIER*o);o=o*i.BASELINE_MULTIPLIER|0,n.width=a,n.height=h,r.fillStyle="#f00",r.fillRect(0,0,a,h),r.font=t,r.textBaseline="alphabetic",r.fillStyle="#000",r.fillText(s,0,o);var l=r.getImageData(0,0,a,h).data,u=l.length,c=a*4,f=0,d=0,m=!1;for(f=0;f<o;++f){for(var _=0;_<c;_+=4)if(l[d+_]!==255){m=!0;break}if(!m)d+=c;else break}for(e.ascent=o-f,d=u-c,m=!1,f=h;f>o;--f){for(var _=0;_<c;_+=4)if(l[d+_]!==255){m=!0;break}if(!m)d-=c;else break}return e.descent=f-o,e.fontSize=e.ascent+e.descent,i._fonts[t]=e,e},i.clearMetrics=function(t){t===void 0&&(t=""),t?delete i._fonts[t]:i._fonts={}},Object.defineProperty(i,"_canvas",{get:function(){if(!i.__canvas){var t=void 0;try{var e=new OffscreenCanvas(0,0),n=e.getContext("2d",wa);if(n&&n.measureText)return i.__canvas=e,e;t=ct.ADAPTER.createCanvas()}catch{t=ct.ADAPTER.createCanvas()}t.width=t.height=10,i.__canvas=t}return i.__canvas},enumerable:!1,configurable:!0}),Object.defineProperty(i,"_context",{get:function(){return i.__context||(i.__context=i._canvas.getContext("2d",wa)),i.__context},enumerable:!1,configurable:!0}),i}();Pn._fonts={};Pn.METRICS_STRING="|ÉqÅ";Pn.BASELINE_SYMBOL="M";Pn.BASELINE_MULTIPLIER=1.4;Pn.HEIGHT_MULTIPLIER=2;Pn._newlines=[10,13];Pn._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var XA={texture:!0,children:!1,baseTexture:!0},bp=function(i){HA(t,i);function t(e,n,r){var s=this,a=!1;r||(r=ct.ADAPTER.createCanvas(),a=!0),r.width=3,r.height=3;var o=Lt.from(r);return o.orig=new Yt,o.trim=new Yt,s=i.call(this,o)||this,s._ownCanvas=a,s.canvas=r,s.context=r.getContext("2d",{willReadFrequently:!0}),s._resolution=ct.RESOLUTION,s._autoResolution=!0,s._text=null,s._style=null,s._styleListener=null,s._font="",s.text=e,s.style=n,s.localStyleID=-1,s}return t.prototype.updateText=function(e){var n=this._style;if(this.localStyleID!==n.styleID&&(this.dirty=!0,this.localStyleID=n.styleID),!(!this.dirty&&e)){this._font=this._style.toFontString();var r=this.context,s=Pn.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),a=s.width,o=s.height,h=s.lines,l=s.lineHeight,u=s.lineWidths,c=s.maxLineWidth,f=s.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,a)+n.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,o)+n.padding*2)*this._resolution),r.scale(this._resolution,this._resolution),r.clearRect(0,0,this.canvas.width,this.canvas.height),r.font=this._font,r.lineWidth=n.strokeThickness,r.textBaseline=n.textBaseline,r.lineJoin=n.lineJoin,r.miterLimit=n.miterLimit;for(var d,m,_=n.dropShadow?2:1,p=0;p<_;++p){var v=n.dropShadow&&p===0,y=v?Math.ceil(Math.max(1,o)+n.padding*2):0,g=y*this._resolution;if(v){r.fillStyle="black",r.strokeStyle="black";var T=n.dropShadowColor,w=Dr(typeof T=="number"?T:qd(T)),b=n.dropShadowBlur*this._resolution,M=n.dropShadowDistance*this._resolution;r.shadowColor="rgba("+w[0]*255+","+w[1]*255+","+w[2]*255+","+n.dropShadowAlpha+")",r.shadowBlur=b,r.shadowOffsetX=Math.cos(n.dropShadowAngle)*M,r.shadowOffsetY=Math.sin(n.dropShadowAngle)*M+g}else r.fillStyle=this._generateFillStyle(n,h,s),r.strokeStyle=n.stroke,r.shadowColor="black",r.shadowBlur=0,r.shadowOffsetX=0,r.shadowOffsetY=0;var I=(l-f.fontSize)/2;(!t.nextLineHeightBehavior||l-f.fontSize<0)&&(I=0);for(var E=0;E<h.length;E++)d=n.strokeThickness/2,m=n.strokeThickness/2+E*l+f.ascent+I,n.align==="right"?d+=c-u[E]:n.align==="center"&&(d+=(c-u[E])/2),n.stroke&&n.strokeThickness&&this.drawLetterSpacing(h[E],d+n.padding,m+n.padding-y,!0),n.fill&&this.drawLetterSpacing(h[E],d+n.padding,m+n.padding-y)}this.updateTexture()}},t.prototype.drawLetterSpacing=function(e,n,r,s){s===void 0&&(s=!1);var a=this._style,o=a.letterSpacing,h=t.experimentalLetterSpacing&&("letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype);if(o===0||h){h&&(this.context.letterSpacing=o,this.context.textLetterSpacing=o),s?this.context.strokeText(e,n,r):this.context.fillText(e,n,r);return}for(var l=n,u=Array.from?Array.from(e):e.split(""),c=this.context.measureText(e).width,f=0,d=0;d<u.length;++d){var m=u[d];s?this.context.strokeText(m,l,r):this.context.fillText(m,l,r);for(var _="",p=d+1;p<u.length;++p)_+=u[p];f=this.context.measureText(_).width,l+=c-f+o,c=f}},t.prototype.updateTexture=function(){var e=this.canvas;if(this._style.trim){var n=Fb(e);n.data&&(e.width=n.width,e.height=n.height,this.context.putImageData(n.data,0,0))}var r=this._texture,s=this._style,a=s.trim?0:s.padding,o=r.baseTexture;r.trim.width=r._frame.width=e.width/this._resolution,r.trim.height=r._frame.height=e.height/this._resolution,r.trim.x=-a,r.trim.y=-a,r.orig.width=r._frame.width-a*2,r.orig.height=r._frame.height-a*2,this._onTextureUpdate(),o.setRealSize(e.width,e.height,this._resolution),r.updateUvs(),this.dirty=!1},t.prototype._render=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),i.prototype._render.call(this,e)},t.prototype.updateTransform=function(){this.updateText(!0),i.prototype.updateTransform.call(this)},t.prototype.getBounds=function(e,n){return this.updateText(!0),this._textureID===-1&&(e=!1),i.prototype.getBounds.call(this,e,n)},t.prototype.getLocalBounds=function(e){return this.updateText(!0),i.prototype.getLocalBounds.call(this,e)},t.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)},t.prototype._generateFillStyle=function(e,n,r){var s=e.fill;if(Array.isArray(s)){if(s.length===1)return s[0]}else return s;var a,o=e.dropShadow?e.dropShadowDistance:0,h=e.padding||0,l=this.canvas.width/this._resolution-o-h*2,u=this.canvas.height/this._resolution-o-h*2,c=s.slice(),f=e.fillGradientStops.slice();if(!f.length)for(var d=c.length+1,m=1;m<d;++m)f.push(m/d);if(c.unshift(s[0]),f.unshift(0),c.push(s[s.length-1]),f.push(1),e.fillGradientType===xs.LINEAR_VERTICAL){a=this.context.createLinearGradient(l/2,h,l/2,u+h);for(var _=r.fontProperties.fontSize+e.strokeThickness,m=0;m<n.length;m++){var p=r.lineHeight*(m-1)+_,v=r.lineHeight*m,y=v;m>0&&p>v&&(y=(v+p)/2);var g=v+_,T=r.lineHeight*(m+1),w=g;m+1<n.length&&T<g&&(w=(g+T)/2);for(var b=(w-y)/u,M=0;M<c.length;M++){var I=0;typeof f[M]=="number"?I=f[M]:I=M/c.length;var E=Math.min(1,Math.max(0,y/u+I*b));E=Number(E.toFixed(5)),a.addColorStop(E,c[M])}}}else{a=this.context.createLinearGradient(h,u/2,l+h,u/2);for(var x=c.length+1,O=1,m=0;m<c.length;m++){var N=void 0;typeof f[m]=="number"?N=f[m]:N=O/x,a.addColorStop(N,c[m]),O++}}return a},t.prototype.destroy=function(e){typeof e=="boolean"&&(e={children:e}),e=Object.assign({},XA,e),i.prototype.destroy.call(this,e),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(t.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(e){this.updateText(!0);var n=yr(this.scale.x)||1;this.scale.x=n*e/this._texture.orig.width,this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(e){this.updateText(!0);var n=yr(this.scale.y)||1;this.scale.y=n*e/this._texture.orig.height,this._height=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"style",{get:function(){return this._style},set:function(e){e=e||{},e instanceof Lr?this._style=e:this._style=new Lr(e),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(e){e=String(e??""),this._text!==e&&(this._text=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)},enumerable:!1,configurable:!0}),t.nextLineHeightBehavior=!1,t.experimentalLetterSpacing=!1,t}(Is);/*!
 * @pixi/prepare - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ct.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
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
***************************************************************************** */var ml=function(i,t){return ml=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},ml(i,t)};function WA(i,t){ml(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var YA=function(){function i(t){this.maxItemsPerFrame=t,this.itemsLeft=0}return i.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},i.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},i}();function jA(i,t){var e=!1;if(i&&i._textures&&i._textures.length){for(var n=0;n<i._textures.length;n++)if(i._textures[n]instanceof Lt){var r=i._textures[n].baseTexture;t.indexOf(r)===-1&&(t.push(r),e=!0)}}return e}function qA(i,t){if(i.baseTexture instanceof Wt){var e=i.baseTexture;return t.indexOf(e)===-1&&t.push(e),!0}return!1}function $A(i,t){if(i._texture&&i._texture instanceof Lt){var e=i._texture.baseTexture;return t.indexOf(e)===-1&&t.push(e),!0}return!1}function JA(i,t){return t instanceof bp?(t.updateText(!0),!0):!1}function KA(i,t){if(t instanceof Lr){var e=t.toFontString();return Pn.measureFont(e),!0}return!1}function ZA(i,t){if(i instanceof bp){t.indexOf(i.style)===-1&&t.push(i.style),t.indexOf(i)===-1&&t.push(i);var e=i._texture.baseTexture;return t.indexOf(e)===-1&&t.push(e),!0}return!1}function QA(i,t){return i instanceof Lr?(t.indexOf(i)===-1&&t.push(i),!0):!1}var t1=function(){function i(t){var e=this;this.limiter=new YA(ct.UPLOADS_PER_FRAME),this.renderer=t,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){e.queue&&e.prepareItems()},this.registerFindHook(ZA),this.registerFindHook(QA),this.registerFindHook(jA),this.registerFindHook(qA),this.registerFindHook($A),this.registerUploadHook(JA),this.registerUploadHook(KA)}return i.prototype.upload=function(t,e){var n=this;return typeof t=="function"&&(e=t,t=null),e&&un("6.5.0","BasePrepare.upload callback is deprecated, use the return Promise instead."),new Promise(function(r){t&&n.add(t);var s=function(){e==null||e(),r()};n.queue.length?(n.completes.push(s),n.ticking||(n.ticking=!0,De.system.addOnce(n.tick,n,Yn.UTILITY))):s()})},i.prototype.tick=function(){setTimeout(this.delayedTick,0)},i.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var t=this.queue[0],e=!1;if(t&&!t._destroyed){for(var n=0,r=this.uploadHooks.length;n<r;n++)if(this.uploadHooks[n](this.uploadHookHelper,t)){this.queue.shift(),e=!0;break}}e||this.queue.shift()}if(this.queue.length)De.system.addOnce(this.tick,this,Yn.UTILITY);else{this.ticking=!1;var s=this.completes.slice(0);this.completes.length=0;for(var n=0,r=s.length;n<r;n++)s[n]()}},i.prototype.registerFindHook=function(t){return t&&this.addHooks.push(t),this},i.prototype.registerUploadHook=function(t){return t&&this.uploadHooks.push(t),this},i.prototype.add=function(t){for(var e=0,n=this.addHooks.length;e<n&&!this.addHooks[e](t,this.queue);e++);if(t instanceof An)for(var e=t.children.length-1;e>=0;e--)this.add(t.children[e]);return this},i.prototype.destroy=function(){this.ticking&&De.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},i}();function Mp(i,t){return t instanceof Wt?(t._glTextures[i.CONTEXT_UID]||i.texture.bind(t),!0):!1}function e1(i,t){if(!(t instanceof ys))return!1;var e=t.geometry;t.finishPoly(),e.updateBatches();for(var n=e.batches,r=0;r<n.length;r++){var s=n[r].style.texture;s&&Mp(i,s.baseTexture)}return e.batchable||i.geometry.bind(e,t._resolveDirectShader(i)),!0}function n1(i,t){return i instanceof ys?(t.push(i),!0):!1}var i1=function(i){WA(t,i);function t(e){var n=i.call(this,e)||this;return n.uploadHookHelper=n.renderer,n.registerFindHook(n1),n.registerUploadHook(Mp),n.registerUploadHook(e1),n}return t.extension={name:"prepare",type:Qt.RendererPlugin},t}(t1);/*!
 * @pixi/spritesheet - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var r1=function(){function i(t,e,n){n===void 0&&(n=null),this.linkedSheets=[],this._texture=t instanceof Lt?t:null,this.baseTexture=t instanceof Wt?t:this._texture.baseTexture,this.textures={},this.animations={},this.data=e;var r=this.baseTexture.resource;this.resolution=this._updateResolution(n||(r?r.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return i.prototype._updateResolution=function(t){t===void 0&&(t=null);var e=this.data.meta.scale,n=ja(t,null);return n===null&&(n=e!==void 0?parseFloat(e):1),n!==1&&this.baseTexture.setResolution(n),n},i.prototype.parse=function(t){var e=this;return t&&un("6.5.0","Spritesheet.parse callback is deprecated, use the return Promise instead."),new Promise(function(n){e._callback=function(r){t==null||t(r),n(r)},e._batchIndex=0,e._frameKeys.length<=i.BATCH_SIZE?(e._processFrames(0),e._processAnimations(),e._parseComplete()):e._nextBatch()})},i.prototype._processFrames=function(t){for(var e=t,n=i.BATCH_SIZE;e-t<n&&e<this._frameKeys.length;){var r=this._frameKeys[e],s=this._frames[r],a=s.frame;if(a){var o=null,h=null,l=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,u=new Yt(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);s.rotated?o=new Yt(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):o=new Yt(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(h=new Yt(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[r]=new Lt(this.baseTexture,o,u,h,s.rotated?2:0,s.anchor),Lt.addToCache(this.textures[r],r)}e++}},i.prototype._processAnimations=function(){var t=this.data.animations||{};for(var e in t){this.animations[e]=[];for(var n=0;n<t[e].length;n++){var r=t[e][n];this.animations[e].push(this.textures[r])}}},i.prototype._parseComplete=function(){var t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)},i.prototype._nextBatch=function(){var t=this;this._processFrames(this._batchIndex*i.BATCH_SIZE),this._batchIndex++,setTimeout(function(){t._batchIndex*i.BATCH_SIZE<t._frameKeys.length?t._nextBatch():(t._processAnimations(),t._parseComplete())},0)},i.prototype.destroy=function(t){var e;t===void 0&&(t=!1);for(var n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)===null||e===void 0||e.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]},i.BATCH_SIZE=1e3,i}(),s1=function(){function i(){}return i.use=function(t,e){var n,r,s=this,a=t.name+"_image";if(!t.data||t.type!==me.TYPE.JSON||!t.data.frames||s.resources[a]){e();return}var o=(r=(n=t.data)===null||n===void 0?void 0:n.meta)===null||r===void 0?void 0:r.related_multi_packs;if(Array.isArray(o))for(var h=function(m){if(typeof m!="string")return"continue";var _=m.replace(".json",""),p=gr.resolve(t.url.replace(s.baseUrl,""),m);if(s.resources[_]||Object.values(s.resources).some(function(y){return gr.format(gr.parse(y.url))===p}))return"continue";var v={crossOrigin:t.crossOrigin,loadType:me.LOAD_TYPE.XHR,xhrType:me.XHR_RESPONSE_TYPE.JSON,parentResource:t,metadata:t.metadata};s.add(_,p,v)},l=0,u=o;l<u.length;l++){var c=u[l];h(c)}var f={crossOrigin:t.crossOrigin,metadata:t.metadata.imageMetadata,parentResource:t},d=i.getResourcePath(t,s.baseUrl);s.add(a,d,f,function(_){if(_.error){e(_.error);return}var p=new r1(_.texture,t.data,t.url);p.parse().then(function(){t.spritesheet=p,t.textures=p.textures,e()})})},i.getResourcePath=function(t,e){return t.isDataUrl?t.data.meta.image:gr.resolve(t.url.replace(e,""),t.data.meta.image)},i.extension=Qt.Loader,i}();/*!
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
***************************************************************************** */var vl=function(i,t){return vl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},vl(i,t)};function wp(i,t){vl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Qr=new re;(function(i){wp(t,i);function t(e,n,r){n===void 0&&(n=100),r===void 0&&(r=100);var s=i.call(this,e)||this;return s.tileTransform=new tp,s._width=n,s._height=r,s.uvMatrix=s.texture.uvMatrix||new ql(e),s.pluginName="tilingSprite",s.uvRespectAnchor=!1,s}return Object.defineProperty(t.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(e){this.uvMatrix.clampMargin=e,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(e){this.tileTransform.scale.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(e){this.tileTransform.position.copyFrom(e)},enumerable:!1,configurable:!0}),t.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},t.prototype._render=function(e){var n=this._texture;!n||!n.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),e.batch.setObjectRenderer(e.plugins[this.pluginName]),e.plugins[this.pluginName].render(this))},t.prototype._calculateBounds=function(){var e=this._width*-this._anchor._x,n=this._height*-this._anchor._y,r=this._width*(1-this._anchor._x),s=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,e,n,r,s)},t.prototype.getLocalBounds=function(e){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new Yt),e=this._localBoundsRect),this._bounds.getRectangle(e)):i.prototype.getLocalBounds.call(this,e)},t.prototype.containsPoint=function(e){this.worldTransform.applyInverse(e,Qr);var n=this._width,r=this._height,s=-n*this.anchor._x;if(Qr.x>=s&&Qr.x<s+n){var a=-r*this.anchor._y;if(Qr.y>=a&&Qr.y<a+r)return!0}return!1},t.prototype.destroy=function(e){i.prototype.destroy.call(this,e),this.tileTransform=null,this.uvMatrix=null},t.from=function(e,n){var r=e instanceof Lt?e:Lt.from(e,n);return new t(r,n.width,n.height)},Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e},enumerable:!1,configurable:!0}),t})(Is);var a1=`#version 100
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
`,Hf=`#version 100
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
`,o1=`#version 100
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
`,h1=`#version 300 es
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
`,l1=`#version 300 es
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
`,Aa=new Me,u1=function(i){wp(t,i);function t(e){var n=i.call(this,e)||this;return e.runners.contextChange.add(n),n.quad=new op,n.state=qi.for2d(),n}return t.prototype.contextChange=function(){var e=this.renderer,n={globals:e.globalUniforms};this.simpleShader=ci.from(Hf,a1,n),this.shader=e.context.webGLVersion>1?ci.from(h1,l1,n):ci.from(Hf,o1,n)},t.prototype.render=function(e){var n=this.renderer,r=this.quad,s=r.vertices;s[0]=s[6]=e._width*-e.anchor.x,s[1]=s[3]=e._height*-e.anchor.y,s[2]=s[4]=e._width*(1-e.anchor.x),s[5]=s[7]=e._height*(1-e.anchor.y);var a=e.uvRespectAnchor?e.anchor.x:0,o=e.uvRespectAnchor?e.anchor.y:0;s=r.uvs,s[0]=s[6]=-a,s[1]=s[3]=-o,s[2]=s[4]=1-a,s[5]=s[7]=1-o,r.invalidate();var h=e._texture,l=h.baseTexture,u=l.alphaMode>0,c=e.tileTransform.localTransform,f=e.uvMatrix,d=l.isPowerOfTwo&&h.frame.width===l.width&&h.frame.height===l.height;d&&(l._glTextures[n.CONTEXT_UID]?d=l.wrapMode!==bn.CLAMP:l.wrapMode===bn.CLAMP&&(l.wrapMode=bn.REPEAT));var m=d?this.simpleShader:this.shader,_=h.width,p=h.height,v=e._width,y=e._height;Aa.set(c.a*_/v,c.b*_/y,c.c*p/v,c.d*p/y,c.tx/v,c.ty/y),Aa.invert(),d?Aa.prepend(f.mapCoord):(m.uniforms.uMapCoord=f.mapCoord.toArray(!0),m.uniforms.uClampFrame=f.uClampFrame,m.uniforms.uClampOffset=f.uClampOffset),m.uniforms.uTransform=Aa.toArray(!0),m.uniforms.uColor=Kd(e.tint,e.worldAlpha,m.uniforms.uColor,u),m.uniforms.translationMatrix=e.transform.worldTransform.toArray(!0),m.uniforms.uSampler=h,n.shader.bind(m),n.geometry.bind(r),this.state.blendMode=Jd(e.blendMode,u),n.state.set(this.state),n.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},t.extension={name:"tilingSprite",type:Qt.RendererPlugin},t}(ho);/*!
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
***************************************************************************** */var _l=function(i,t){return _l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},_l(i,t)};function Jl(i,t){_l(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var c1=function(){function i(t,e){this.uvBuffer=t,this.uvMatrix=e,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return i.prototype.update=function(t){if(!(!t&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var e=this.uvBuffer.data;(!this.data||this.data.length!==e.length)&&(this.data=new Float32Array(e.length)),this.uvMatrix.multiplyUvs(e,this.data),this._updateID++}},i}(),Ph=new re,zf=new Oa,Es=function(i){Jl(t,i);function t(e,n,r,s){s===void 0&&(s=hn.TRIANGLES);var a=i.call(this)||this;return a.geometry=e,a.shader=n,a.state=r||qi.for2d(),a.drawMode=s,a.start=0,a.size=0,a.uvs=null,a.indices=null,a.vertexData=new Float32Array(1),a.vertexDirty=-1,a._transformID=-1,a._roundPixels=ct.ROUND_PIXELS,a.batchUvs=null,a}return Object.defineProperty(t.prototype,"geometry",{get:function(){return this._geometry},set:function(e){this._geometry!==e&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=e,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"material",{get:function(){return this.shader},set:function(e){this.shader=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(e){this.state.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(e){this._roundPixels!==e&&(this._transformID=-1),this._roundPixels=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(e){this.shader.tint=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(e){this.shader.texture=e},enumerable:!1,configurable:!0}),t.prototype._render=function(e){var n=this.geometry.buffers[0].data,r=this.shader;r.batchable&&this.drawMode===hn.TRIANGLES&&n.length<t.BATCHABLE_SIZE*2?this._renderToBatch(e):this._renderDefault(e)},t.prototype._renderDefault=function(e){var n=this.shader;n.alpha=this.worldAlpha,n.update&&n.update(),e.batch.flush(),n.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),e.shader.bind(n),e.state.set(this.state),e.geometry.bind(this.geometry,n),e.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},t.prototype._renderToBatch=function(e){var n=this.geometry,r=this.shader;r.uvMatrix&&(r.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=n.indexBuffer.data,this._tintRGB=r._tintRGB,this._texture=r.texture;var s=this.material.pluginName;e.batch.setObjectRenderer(e.plugins[s]),e.plugins[s].render(this)},t.prototype.calculateVertices=function(){var e=this.geometry,n=e.buffers[0],r=n.data,s=n._updateID;if(!(s===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==r.length&&(this.vertexData=new Float32Array(r.length));for(var a=this.transform.worldTransform,o=a.a,h=a.b,l=a.c,u=a.d,c=a.tx,f=a.ty,d=this.vertexData,m=0;m<d.length/2;m++){var _=r[m*2],p=r[m*2+1];d[m*2]=o*_+l*p+c,d[m*2+1]=h*_+u*p+f}if(this._roundPixels)for(var v=ct.RESOLUTION,m=0;m<d.length;++m)d[m]=Math.round((d[m]*v|0)/v);this.vertexDirty=s}},t.prototype.calculateUvs=function(){var e=this.geometry.buffers[1],n=this.shader;n.uvMatrix.isSimple?this.uvs=e.data:(this.batchUvs||(this.batchUvs=new c1(e,n.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},t.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},t.prototype.containsPoint=function(e){if(!this.getBounds().contains(e.x,e.y))return!1;this.worldTransform.applyInverse(e,Ph);for(var n=this.geometry.getBuffer("aVertexPosition").data,r=zf.points,s=this.geometry.getIndex().data,a=s.length,o=this.drawMode===4?3:1,h=0;h+2<a;h+=o){var l=s[h]*2,u=s[h+1]*2,c=s[h+2]*2;if(r[0]=n[l],r[1]=n[l+1],r[2]=n[u],r[3]=n[u+1],r[4]=n[c],r[5]=n[c+1],zf.contains(Ph.x,Ph.y))return!0}return!1},t.prototype.destroy=function(e){i.prototype.destroy.call(this,e),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},t.BATCHABLE_SIZE=100,t}(An),f1=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,d1=`attribute vec2 aVertexPosition;
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
`,Ss=function(i){Jl(t,i);function t(e,n){var r=this,s={uSampler:e,alpha:1,uTextureMatrix:Me.IDENTITY,uColor:new Float32Array([1,1,1,1])};return n=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},n),n.uniforms&&Object.assign(s,n.uniforms),r=i.call(this,n.program||Ps.from(d1,f1),s)||this,r._colorDirty=!1,r.uvMatrix=new ql(e),r.batchable=n.program===void 0,r.pluginName=n.pluginName,r.tint=n.tint,r.alpha=n.alpha,r}return Object.defineProperty(t.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(e){this.uniforms.uSampler!==e&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!e.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=e,this.uvMatrix.texture=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._alpha},set:function(e){e!==this._alpha&&(this._alpha=e,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){e!==this._tint&&(this._tint=e,this._tintRGB=(e>>16)+(e&65280)+((e&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),t.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var e=this.texture.baseTexture;Kd(this._tint,this._alpha,this.uniforms.uColor,e.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},t}(ci),lo=function(i){Jl(t,i);function t(e,n,r){var s=i.call(this)||this,a=new Ee(e),o=new Ee(n,!0),h=new Ee(r,!0,!0);return s.addAttribute("aVertexPosition",a,2,!1,wt.FLOAT).addAttribute("aTextureCoord",o,2,!1,wt.FLOAT).addIndex(h),s._updateId=-1,s}return Object.defineProperty(t.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),t}(Cs);/*!
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
***************************************************************************** */var gl=function(i,t){return gl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},gl(i,t)};function p1(i,t){gl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Qa=function(){function i(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}return i}(),m1=function(){function i(){}return i.test=function(t){return typeof t=="string"&&t.indexOf("info face=")===0},i.parse=function(t){var e=t.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var r in e){var s=e[r].match(/^[a-z]+/gm)[0],a=e[r].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),o={};for(var h in a){var l=a[h].split("="),u=l[0],c=l[1].replace(/"/gm,""),f=parseFloat(c),d=isNaN(f)?c:f;o[u]=d}n[s].push(o)}var m=new Qa;return n.info.forEach(function(_){return m.info.push({face:_.face,size:parseInt(_.size,10)})}),n.common.forEach(function(_){return m.common.push({lineHeight:parseInt(_.lineHeight,10)})}),n.page.forEach(function(_){return m.page.push({id:parseInt(_.id,10),file:_.file})}),n.char.forEach(function(_){return m.char.push({id:parseInt(_.id,10),page:parseInt(_.page,10),x:parseInt(_.x,10),y:parseInt(_.y,10),width:parseInt(_.width,10),height:parseInt(_.height,10),xoffset:parseInt(_.xoffset,10),yoffset:parseInt(_.yoffset,10),xadvance:parseInt(_.xadvance,10)})}),n.kerning.forEach(function(_){return m.kerning.push({first:parseInt(_.first,10),second:parseInt(_.second,10),amount:parseInt(_.amount,10)})}),n.distanceField.forEach(function(_){return m.distanceField.push({distanceRange:parseInt(_.distanceRange,10),fieldType:_.fieldType})}),m},i}(),yl=function(){function i(){}return i.test=function(t){return t instanceof XMLDocument&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},i.parse=function(t){for(var e=new Qa,n=t.getElementsByTagName("info"),r=t.getElementsByTagName("common"),s=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),o=t.getElementsByTagName("kerning"),h=t.getElementsByTagName("distanceField"),l=0;l<n.length;l++)e.info.push({face:n[l].getAttribute("face"),size:parseInt(n[l].getAttribute("size"),10)});for(var l=0;l<r.length;l++)e.common.push({lineHeight:parseInt(r[l].getAttribute("lineHeight"),10)});for(var l=0;l<s.length;l++)e.page.push({id:parseInt(s[l].getAttribute("id"),10)||0,file:s[l].getAttribute("file")});for(var l=0;l<a.length;l++){var u=a[l];e.char.push({id:parseInt(u.getAttribute("id"),10),page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xoffset:parseInt(u.getAttribute("xoffset"),10),yoffset:parseInt(u.getAttribute("yoffset"),10),xadvance:parseInt(u.getAttribute("xadvance"),10)})}for(var l=0;l<o.length;l++)e.kerning.push({first:parseInt(o[l].getAttribute("first"),10),second:parseInt(o[l].getAttribute("second"),10),amount:parseInt(o[l].getAttribute("amount"),10)});for(var l=0;l<h.length;l++)e.distanceField.push({fieldType:h[l].getAttribute("fieldType"),distanceRange:parseInt(h[l].getAttribute("distanceRange"),10)});return e},i}(),v1=function(){function i(){}return i.test=function(t){if(typeof t=="string"&&t.indexOf("<font>")>-1){var e=new globalThis.DOMParser().parseFromString(t,"text/xml");return yl.test(e)}return!1},i.parse=function(t){var e=new globalThis.DOMParser().parseFromString(t,"text/xml");return yl.parse(e)},i}(),Ih=[m1,yl,v1];function Ap(i){for(var t=0;t<Ih.length;t++)if(Ih[t].test(i))return Ih[t];return null}function _1(i,t,e,n,r,s){var a=e.fill;if(Array.isArray(a)){if(a.length===1)return a[0]}else return a;var o,h=e.dropShadow?e.dropShadowDistance:0,l=e.padding||0,u=i.width/n-h-l*2,c=i.height/n-h-l*2,f=a.slice(),d=e.fillGradientStops.slice();if(!d.length)for(var m=f.length+1,_=1;_<m;++_)d.push(_/m);if(f.unshift(a[0]),d.unshift(0),f.push(a[a.length-1]),d.push(1),e.fillGradientType===xs.LINEAR_VERTICAL){o=t.createLinearGradient(u/2,l,u/2,c+l);for(var p=0,v=s.fontProperties.fontSize+e.strokeThickness,y=v/c,_=0;_<r.length;_++)for(var g=s.lineHeight*_,T=0;T<f.length;T++){var w=0;typeof d[T]=="number"?w=d[T]:w=T/f.length;var b=g/c+w*y,M=Math.max(p,b);M=Math.min(M,1),o.addColorStop(M,f[T]),p=M}}else{o=t.createLinearGradient(l,c/2,u+l,c/2);for(var I=f.length+1,E=1,_=0;_<f.length;_++){var x=void 0;typeof d[_]=="number"?x=d[_]:x=E/I,o.addColorStop(x,f[_]),E++}}return o}function g1(i,t,e,n,r,s,a){var o=e.text,h=e.fontProperties;t.translate(n,r),t.scale(s,s);var l=a.strokeThickness/2,u=-(a.strokeThickness/2);if(t.font=a.toFontString(),t.lineWidth=a.strokeThickness,t.textBaseline=a.textBaseline,t.lineJoin=a.lineJoin,t.miterLimit=a.miterLimit,t.fillStyle=_1(i,t,a,s,[o],e),t.strokeStyle=a.stroke,a.dropShadow){var c=a.dropShadowColor,f=Dr(typeof c=="number"?c:qd(c)),d=a.dropShadowBlur*s,m=a.dropShadowDistance*s;t.shadowColor="rgba("+f[0]*255+","+f[1]*255+","+f[2]*255+","+a.dropShadowAlpha+")",t.shadowBlur=d,t.shadowOffsetX=Math.cos(a.dropShadowAngle)*m,t.shadowOffsetY=Math.sin(a.dropShadowAngle)*m}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0;a.stroke&&a.strokeThickness&&t.strokeText(o,l,u+e.lineHeight-h.descent),a.fill&&t.fillText(o,l,u+e.lineHeight-h.descent),t.setTransform(1,0,0,1,0,0),t.fillStyle="rgba(0, 0, 0, 0)"}function Rp(i){return Array.from?Array.from(i):i.split("")}function y1(i){typeof i=="string"&&(i=[i]);for(var t=[],e=0,n=i.length;e<n;e++){var r=i[e];if(Array.isArray(r)){if(r.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+r.length+".");var s=r[0].charCodeAt(0),a=r[1].charCodeAt(0);if(a<s)throw new Error("[BitmapFont]: Invalid character range.");for(var o=s,h=a;o<=h;o++)t.push(String.fromCharCode(o))}else t.push.apply(t,Rp(r))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}function Da(i){return i.codePointAt?i.codePointAt(0):i.charCodeAt(0)}var ri=function(){function i(t,e,n){var r,s,a=t.info[0],o=t.common[0],h=t.page[0],l=t.distanceField[0],u=ja(h.file),c={};this._ownsTextures=n,this.font=a.face,this.size=a.size,this.lineHeight=o.lineHeight/u,this.chars={},this.pageTextures=c;for(var f=0;f<t.page.length;f++){var d=t.page[f],m=d.id,_=d.file;c[m]=e instanceof Array?e[f]:e[_],l!=null&&l.fieldType&&l.fieldType!=="none"&&(c[m].baseTexture.alphaMode=fn.NO_PREMULTIPLIED_ALPHA,c[m].baseTexture.mipmap=cn.OFF)}for(var f=0;f<t.char.length;f++){var p=t.char[f],m=p.id,v=p.page,y=t.char[f],g=y.x,T=y.y,w=y.width,b=y.height,M=y.xoffset,I=y.yoffset,E=y.xadvance;g/=u,T/=u,w/=u,b/=u,M/=u,I/=u,E/=u;var x=new Yt(g+c[v].frame.x/u,T+c[v].frame.y/u,w,b);this.chars[m]={xOffset:M,yOffset:I,xAdvance:E,kerning:{},texture:new Lt(c[v].baseTexture,x),page:v}}for(var f=0;f<t.kerning.length;f++){var O=t.kerning[f],N=O.first,P=O.second,H=O.amount;N/=u,P/=u,H/=u,this.chars[P]&&(this.chars[P].kerning[N]=H)}this.distanceFieldRange=l==null?void 0:l.distanceRange,this.distanceFieldType=(s=(r=l==null?void 0:l.fieldType)===null||r===void 0?void 0:r.toLowerCase())!==null&&s!==void 0?s:"none"}return i.prototype.destroy=function(){for(var t in this.chars)this.chars[t].texture.destroy(),this.chars[t].texture=null;for(var t in this.pageTextures)this._ownsTextures&&this.pageTextures[t].destroy(!0),this.pageTextures[t]=null;this.chars=null,this.pageTextures=null},i.install=function(t,e,n){var r;if(t instanceof Qa)r=t;else{var s=Ap(t);if(!s)throw new Error("Unrecognized data format for font.");r=s.parse(t)}e instanceof Lt&&(e=[e]);var a=new i(r,e,n);return i.available[a.font]=a,a},i.uninstall=function(t){var e=i.available[t];if(!e)throw new Error("No font found named '"+t+"'");e.destroy(),delete i.available[t]},i.from=function(t,e,n){if(!t)throw new Error("[BitmapFont] Property `name` is required.");var r=Object.assign({},i.defaultOptions,n),s=r.chars,a=r.padding,o=r.resolution,h=r.textureWidth,l=r.textureHeight,u=y1(s),c=e instanceof Lr?e:new Lr(e),f=h,d=new Qa;d.info[0]={face:c.fontFamily,size:c.fontSize},d.common[0]={lineHeight:c.fontSize};for(var m=0,_=0,p,v,y,g=0,T=[],w=0;w<u.length;w++){p||(p=ct.ADAPTER.createCanvas(),p.width=h,p.height=l,v=p.getContext("2d"),y=new Wt(p,{resolution:o}),T.push(new Lt(y)),d.page.push({id:T.length-1,file:""}));var b=u[w],M=Pn.measureText(b,c,!1,p),I=M.width,E=Math.ceil(M.height),x=Math.ceil((c.fontStyle==="italic"?2:1)*I);if(_>=l-E*o){if(_===0)throw new Error("[BitmapFont] textureHeight "+l+"px is too small "+("(fontFamily: '"+c.fontFamily+"', fontSize: "+c.fontSize+"px, char: '"+b+"')"));--w,p=null,v=null,y=null,_=0,m=0,g=0;continue}if(g=Math.max(E+M.fontProperties.descent,g),x*o+m>=f){if(m===0)throw new Error("[BitmapFont] textureWidth "+h+"px is too small "+("(fontFamily: '"+c.fontFamily+"', fontSize: "+c.fontSize+"px, char: '"+b+"')"));--w,_+=g*o,_=Math.ceil(_),m=0,g=0;continue}g1(p,v,M,m,_,o,c);var O=Da(M.text);d.char.push({id:O,page:T.length-1,x:m/o,y:_/o,width:x,height:E,xoffset:0,yoffset:0,xadvance:Math.ceil(I-(c.dropShadow?c.dropShadowDistance:0)-(c.stroke?c.strokeThickness:0))}),m+=(x+2*a)*o,m=Math.ceil(m)}for(var w=0,N=u.length;w<N;w++)for(var P=u[w],H=0;H<N;H++){var L=u[H],G=v.measureText(P).width,q=v.measureText(L).width,z=v.measureText(P+L).width,$=z-(G+q);$&&d.kerning.push({first:Da(P),second:Da(L),amount:$})}var B=new i(d,T,!0);return i.available[t]!==void 0&&i.uninstall(t),i.available[t]=B,B},i.ALPHA=[["a","z"],["A","Z"]," "],i.NUMERIC=[["0","9"]],i.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],i.ASCII=[[" ","~"]],i.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:i.ALPHANUMERIC},i.available={},i}(),x1=`// Pixi texture info\r
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
`,E1=`// Mesh material default fragment\r
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
`,Vf=[],Xf=[],Wf=[];(function(i){p1(t,i);function t(e,n){n===void 0&&(n={});var r=i.call(this)||this;r._tint=16777215;var s=Object.assign({},t.styleDefaults,n),a=s.align,o=s.tint,h=s.maxWidth,l=s.letterSpacing,u=s.fontName,c=s.fontSize;if(!ri.available[u])throw new Error('Missing BitmapFont "'+u+'"');return r._activePagesMeshData=[],r._textWidth=0,r._textHeight=0,r._align=a,r._tint=o,r._font=void 0,r._fontName=u,r._fontSize=c,r.text=e,r._maxWidth=h,r._maxLineHeight=0,r._letterSpacing=l,r._anchor=new xr(function(){r.dirty=!0},r,0,0),r._roundPixels=ct.ROUND_PIXELS,r.dirty=!0,r._resolution=ct.RESOLUTION,r._autoResolution=!0,r._textureCache={},r}return t.prototype.updateText=function(){for(var e,n=ri.available[this._fontName],r=this.fontSize,s=r/n.size,a=new re,o=[],h=[],l=[],u=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",c=Rp(u),f=this._maxWidth*n.size/r,d=n.distanceFieldType==="none"?Vf:Xf,m=null,_=0,p=0,v=0,y=-1,g=0,T=0,w=0,b=0,M=0;M<c.length;M++){var I=c[M],E=Da(I);if(/(?:\s)/.test(I)&&(y=M,g=_,b++),I==="\r"||I===`
`){h.push(_),l.push(-1),p=Math.max(p,_),++v,++T,a.x=0,a.y+=n.lineHeight,m=null,b=0;continue}var x=n.chars[E];if(x){m&&x.kerning[m]&&(a.x+=x.kerning[m]);var O=Wf.pop()||{texture:Lt.EMPTY,line:0,charCode:0,prevSpaces:0,position:new re};O.texture=x.texture,O.line=v,O.charCode=E,O.position.x=a.x+x.xOffset+this._letterSpacing/2,O.position.y=a.y+x.yOffset,O.prevSpaces=b,o.push(O),_=O.position.x+Math.max(x.xAdvance-x.xOffset,x.texture.orig.width),a.x+=x.xAdvance+this._letterSpacing,w=Math.max(w,x.yOffset+x.texture.height),m=E,y!==-1&&f>0&&a.x>f&&(++T,wr(o,1+y-T,1+M-y),M=y,y=-1,h.push(g),l.push(o.length>0?o[o.length-1].prevSpaces:0),p=Math.max(p,g),v++,a.x=0,a.y+=n.lineHeight,m=null,b=0)}}var N=c[c.length-1];N!=="\r"&&N!==`
`&&(/(?:\s)/.test(N)&&(_=g),h.push(_),p=Math.max(p,_),l.push(-1));for(var P=[],M=0;M<=v;M++){var H=0;this._align==="right"?H=p-h[M]:this._align==="center"?H=(p-h[M])/2:this._align==="justify"&&(H=l[M]<0?0:(p-h[M])/l[M]),P.push(H)}var L=o.length,G={},q=[],z=this._activePagesMeshData;d.push.apply(d,z);for(var M=0;M<L;M++){var $=o[M].texture,B=$.baseTexture.uid;if(!G[B]){var V=d.pop();if(!V){var ht=new lo,mt=void 0,k=void 0;n.distanceFieldType==="none"?(mt=new Ss(Lt.EMPTY),k=Rt.NORMAL):(mt=new Ss(Lt.EMPTY,{program:Ps.from(E1,x1),uniforms:{uFWidth:0}}),k=Rt.NORMAL_NPM);var K=new Es(ht,mt);K.blendMode=k,V={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:K,vertices:null,uvs:null,indices:null}}V.index=0,V.indexCount=0,V.vertexCount=0,V.uvsCount=0,V.total=0;var nt=this._textureCache;nt[B]=nt[B]||new Lt($.baseTexture),V.mesh.texture=nt[B],V.mesh.tint=this._tint,q.push(V),G[B]=V}G[B].total++}for(var M=0;M<z.length;M++)q.indexOf(z[M])===-1&&this.removeChild(z[M].mesh);for(var M=0;M<q.length;M++)q[M].mesh.parent!==this&&this.addChild(q[M].mesh);this._activePagesMeshData=q;for(var M in G){var V=G[M],tt=V.total;if(!(((e=V.indices)===null||e===void 0?void 0:e.length)>6*tt)||V.vertices.length<Es.BATCHABLE_SIZE*2)V.vertices=new Float32Array(4*2*tt),V.uvs=new Float32Array(4*2*tt),V.indices=new Uint16Array(6*tt);else for(var vt=V.total,yt=V.vertices,Et=vt*4*2;Et<yt.length;Et++)yt[Et]=0;V.mesh.size=6*tt}for(var M=0;M<L;M++){var I=o[M],U=I.position.x+P[I.line]*(this._align==="justify"?I.prevSpaces:1);this._roundPixels&&(U=Math.round(U));var dt=U*s,ut=I.position.y*s,$=I.texture,Tt=G[$.baseTexture.uid],_t=$.frame,Nt=$._uvs,R=Tt.index++;Tt.indices[R*6+0]=0+R*4,Tt.indices[R*6+1]=1+R*4,Tt.indices[R*6+2]=2+R*4,Tt.indices[R*6+3]=0+R*4,Tt.indices[R*6+4]=2+R*4,Tt.indices[R*6+5]=3+R*4,Tt.vertices[R*8+0]=dt,Tt.vertices[R*8+1]=ut,Tt.vertices[R*8+2]=dt+_t.width*s,Tt.vertices[R*8+3]=ut,Tt.vertices[R*8+4]=dt+_t.width*s,Tt.vertices[R*8+5]=ut+_t.height*s,Tt.vertices[R*8+6]=dt,Tt.vertices[R*8+7]=ut+_t.height*s,Tt.uvs[R*8+0]=Nt.x0,Tt.uvs[R*8+1]=Nt.y0,Tt.uvs[R*8+2]=Nt.x1,Tt.uvs[R*8+3]=Nt.y1,Tt.uvs[R*8+4]=Nt.x2,Tt.uvs[R*8+5]=Nt.y2,Tt.uvs[R*8+6]=Nt.x3,Tt.uvs[R*8+7]=Nt.y3}this._textWidth=p*s,this._textHeight=(a.y+n.lineHeight)*s;for(var M in G){var V=G[M];if(this.anchor.x!==0||this.anchor.y!==0)for(var S=0,W=this._textWidth*this.anchor.x,J=this._textHeight*this.anchor.y,Z=0;Z<V.total;Z++)V.vertices[S++]-=W,V.vertices[S++]-=J,V.vertices[S++]-=W,V.vertices[S++]-=J,V.vertices[S++]-=W,V.vertices[S++]-=J,V.vertices[S++]-=W,V.vertices[S++]-=J;this._maxLineHeight=w*s;var Q=V.mesh.geometry.getBuffer("aVertexPosition"),Ct=V.mesh.geometry.getBuffer("aTextureCoord"),et=V.mesh.geometry.getIndex();Q.data=V.vertices,Ct.data=V.uvs,et.data=V.indices,Q.update(),Ct.update(),et.update()}for(var M=0;M<o.length;M++)Wf.push(o[M]);this._font=n,this.dirty=!1},t.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},t.prototype._render=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0);var n=ri.available[this._fontName],r=n.distanceFieldRange,s=n.distanceFieldType,a=n.size;if(s!=="none")for(var o=this.worldTransform,h=o.a,l=o.b,u=o.c,c=o.d,f=Math.sqrt(h*h+l*l),d=Math.sqrt(u*u+c*c),m=(Math.abs(f)+Math.abs(d))/2,_=this.fontSize/a,p=0,v=this._activePagesMeshData;p<v.length;p++){var y=v[p];y.mesh.shader.uniforms.uFWidth=m*r*_*this._resolution}i.prototype._render.call(this,e)},t.prototype.getLocalBounds=function(){return this.validate(),i.prototype.getLocalBounds.call(this)},t.prototype.validate=function(){var e=ri.available[this._fontName];if(!e)throw new Error('Missing BitmapFont "'+this._fontName+'"');this._font!==e&&(this.dirty=!0),this.dirty&&this.updateText()},Object.defineProperty(t.prototype,"tint",{get:function(){return this._tint},set:function(e){if(this._tint!==e){this._tint=e;for(var n=0;n<this._activePagesMeshData.length;n++)this._activePagesMeshData[n].mesh.tint=e}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"align",{get:function(){return this._align},set:function(e){this._align!==e&&(this._align=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontName",{get:function(){return this._fontName},set:function(e){if(!ri.available[e])throw new Error('Missing BitmapFont "'+e+'"');this._fontName!==e&&(this._fontName=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{get:function(){var e;return(e=this._fontSize)!==null&&e!==void 0?e:ri.available[this._fontName].size},set:function(e){this._fontSize!==e&&(this._fontSize=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"anchor",{get:function(){return this._anchor},set:function(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(e){e=String(e??""),this._text!==e&&(this._text=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(e){this._maxWidth!==e&&(this._maxWidth=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(e){e!==this._roundPixels&&(this._roundPixels=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)},enumerable:!1,configurable:!0}),t.prototype.destroy=function(e){var n=this._textureCache,r=ri.available[this._fontName],s=r.distanceFieldType==="none"?Vf:Xf;s.push.apply(s,this._activePagesMeshData);for(var a=0,o=this._activePagesMeshData;a<o.length;a++){var h=o[a];this.removeChild(h.mesh)}this._activePagesMeshData=[],s.filter(function(c){return n[c.mesh.texture.baseTexture.uid]}).forEach(function(c){c.mesh.texture=Lt.EMPTY});for(var l in n){var u=n[l];u.destroy(),delete n[l]}this._font=null,this._textureCache=null,i.prototype.destroy.call(this,e)},t.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},t})(An);var S1=function(){function i(){}return i.add=function(){me.setExtensionXhrType("fnt",me.XHR_RESPONSE_TYPE.TEXT)},i.use=function(t,e){var n=Ap(t.data);if(!n){e();return}for(var r=i.getBaseUrl(this,t),s=n.parse(t.data),a={},o=function(_){a[_.metadata.pageFile]=_.texture,Object.keys(a).length===s.page.length&&(t.bitmapFont=ri.install(s,a,!0),e())},h=0;h<s.page.length;++h){var l=s.page[h].file,u=r+l,c=!1;for(var f in this.resources){var d=this.resources[f];if(d.url===u){d.metadata.pageFile=l,d.texture?o(d):d.onAfterMiddleware.add(o),c=!0;break}}if(!c){var m={crossOrigin:t.crossOrigin,loadType:me.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:l},t.metadata.imageMetadata),parentResource:t};this.add(u,m,o)}}},i.getBaseUrl=function(t,e){var n=e.isDataUrl?"":i.dirname(e.url);return e.isDataUrl&&(n==="."&&(n=""),t.baseUrl&&n&&t.baseUrl.charAt(t.baseUrl.length-1)==="/"&&(n+="/")),n=n.replace(t.baseUrl,""),n&&n.charAt(n.length-1)!=="/"&&(n+="/"),n},i.dirname=function(t){var e=t.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return e===t?".":e===""?"/":e},i.extension=Qt.Loader,i}();/*!
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
***************************************************************************** */var xl=function(i,t){return xl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},xl(i,t)};function T1(i,t){xl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var b1=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;(function(i){T1(t,i);function t(e){e===void 0&&(e=1);var n=i.call(this,_w,b1,{uAlpha:1})||this;return n.alpha=e,n}return Object.defineProperty(t.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(e){this.uniforms.uAlpha=e},enumerable:!1,configurable:!0}),t})(vi);/*!
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
***************************************************************************** */var El=function(i,t){return El=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},El(i,t)};function Cp(i,t){El(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var M1=`
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
    }`;function w1(i,t){var e=Math.ceil(i/2),n=M1,r="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<i;a++){var o=s.replace("%index%",a.toString());o=o.replace("%sampleIndex%",a-(e-1)+".0"),r+=o,r+=`
`}return n=n.replace("%blur%",r),n=n.replace("%size%",i.toString()),n}var A1={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},R1=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function C1(i){for(var t=A1[i],e=t.length,n=R1,r="",s="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",a,o=0;o<i;o++){var h=s.replace("%index%",o.toString());a=o,o>=e&&(a=i-o-1),h=h.replace("%value%",t[a].toString()),r+=h,r+=`
`}return n=n.replace("%blur%",r),n=n.replace("%size%",i.toString()),n}var Yf=function(i){Cp(t,i);function t(e,n,r,s,a){n===void 0&&(n=8),r===void 0&&(r=4),s===void 0&&(s=ct.FILTER_RESOLUTION),a===void 0&&(a=5);var o=this,h=w1(a,e),l=C1(a);return o=i.call(this,h,l)||this,o.horizontal=e,o.resolution=s,o._quality=0,o.quality=r,o.blur=n,o}return t.prototype.apply=function(e,n,r,s){if(r?this.horizontal?this.uniforms.strength=1/r.width*(r.width/n.width):this.uniforms.strength=1/r.height*(r.height/n.height):this.horizontal?this.uniforms.strength=1/e.renderer.width*(e.renderer.width/n.width):this.uniforms.strength=1/e.renderer.height*(e.renderer.height/n.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)e.applyFilter(this,n,r,s);else{var a=e.getFilterTexture(),o=e.renderer,h=n,l=a;this.state.blend=!1,e.applyFilter(this,h,l,sn.CLEAR);for(var u=1;u<this.passes-1;u++){e.bindAndClear(h,sn.BLIT),this.uniforms.uSampler=l;var c=l;l=h,h=c,o.shader.bind(this),o.geometry.draw(5)}this.state.blend=!0,e.applyFilter(this,l,r,s),e.returnFilterTexture(a)}},Object.defineProperty(t.prototype,"blur",{get:function(){return this.strength},set:function(e){this.padding=1+Math.abs(e)*2,this.strength=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=e,this.passes=e},enumerable:!1,configurable:!0}),t}(vi);(function(i){Cp(t,i);function t(e,n,r,s){e===void 0&&(e=8),n===void 0&&(n=4),r===void 0&&(r=ct.FILTER_RESOLUTION),s===void 0&&(s=5);var a=i.call(this)||this;return a.blurXFilter=new Yf(!0,e,n,r,s),a.blurYFilter=new Yf(!1,e,n,r,s),a.resolution=r,a.quality=n,a.blur=e,a.repeatEdgePixels=!1,a}return t.prototype.apply=function(e,n,r,s){var a=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(a&&o){var h=e.getFilterTexture();this.blurXFilter.apply(e,n,h,sn.CLEAR),this.blurYFilter.apply(e,h,r,s),e.returnFilterTexture(h)}else o?this.blurYFilter.apply(e,n,r,s):this.blurXFilter.apply(e,n,r,s)},t.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(t.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(e){this.blurXFilter.quality=this.blurYFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(e){this.blurYFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(e){this.blurYFilter.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(e){this._repeatEdgePixels=e,this.updatePadding()},enumerable:!1,configurable:!0}),t})(vi);/*!
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
***************************************************************************** */var Sl=function(i,t){return Sl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Sl(i,t)};function P1(i,t){Sl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var I1=`varying vec2 vTextureCoord;
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
`,jf=function(i){P1(t,i);function t(){var e=this,n={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return e=i.call(this,mp,I1,n)||this,e.alpha=1,e}return t.prototype._loadMatrix=function(e,n){n===void 0&&(n=!1);var r=e;n&&(this._multiply(r,this.uniforms.m,e),r=this._colorMatrix(r)),this.uniforms.m=r},t.prototype._multiply=function(e,n,r){return e[0]=n[0]*r[0]+n[1]*r[5]+n[2]*r[10]+n[3]*r[15],e[1]=n[0]*r[1]+n[1]*r[6]+n[2]*r[11]+n[3]*r[16],e[2]=n[0]*r[2]+n[1]*r[7]+n[2]*r[12]+n[3]*r[17],e[3]=n[0]*r[3]+n[1]*r[8]+n[2]*r[13]+n[3]*r[18],e[4]=n[0]*r[4]+n[1]*r[9]+n[2]*r[14]+n[3]*r[19]+n[4],e[5]=n[5]*r[0]+n[6]*r[5]+n[7]*r[10]+n[8]*r[15],e[6]=n[5]*r[1]+n[6]*r[6]+n[7]*r[11]+n[8]*r[16],e[7]=n[5]*r[2]+n[6]*r[7]+n[7]*r[12]+n[8]*r[17],e[8]=n[5]*r[3]+n[6]*r[8]+n[7]*r[13]+n[8]*r[18],e[9]=n[5]*r[4]+n[6]*r[9]+n[7]*r[14]+n[8]*r[19]+n[9],e[10]=n[10]*r[0]+n[11]*r[5]+n[12]*r[10]+n[13]*r[15],e[11]=n[10]*r[1]+n[11]*r[6]+n[12]*r[11]+n[13]*r[16],e[12]=n[10]*r[2]+n[11]*r[7]+n[12]*r[12]+n[13]*r[17],e[13]=n[10]*r[3]+n[11]*r[8]+n[12]*r[13]+n[13]*r[18],e[14]=n[10]*r[4]+n[11]*r[9]+n[12]*r[14]+n[13]*r[19]+n[14],e[15]=n[15]*r[0]+n[16]*r[5]+n[17]*r[10]+n[18]*r[15],e[16]=n[15]*r[1]+n[16]*r[6]+n[17]*r[11]+n[18]*r[16],e[17]=n[15]*r[2]+n[16]*r[7]+n[17]*r[12]+n[18]*r[17],e[18]=n[15]*r[3]+n[16]*r[8]+n[17]*r[13]+n[18]*r[18],e[19]=n[15]*r[4]+n[16]*r[9]+n[17]*r[14]+n[18]*r[19]+n[19],e},t.prototype._colorMatrix=function(e){var n=new Float32Array(e);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n},t.prototype.brightness=function(e,n){var r=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(r,n)},t.prototype.tint=function(e,n){var r=e>>16&255,s=e>>8&255,a=e&255,o=[r/255,0,0,0,0,0,s/255,0,0,0,0,0,a/255,0,0,0,0,0,1,0];this._loadMatrix(o,n)},t.prototype.greyscale=function(e,n){var r=[e,e,e,0,0,e,e,e,0,0,e,e,e,0,0,0,0,0,1,0];this._loadMatrix(r,n)},t.prototype.blackAndWhite=function(e){var n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.hue=function(e,n){e=(e||0)/180*Math.PI;var r=Math.cos(e),s=Math.sin(e),a=Math.sqrt,o=1/3,h=a(o),l=r+(1-r)*o,u=o*(1-r)-h*s,c=o*(1-r)+h*s,f=o*(1-r)+h*s,d=r+o*(1-r),m=o*(1-r)-h*s,_=o*(1-r)-h*s,p=o*(1-r)+h*s,v=r+o*(1-r),y=[l,u,c,0,0,f,d,m,0,0,_,p,v,0,0,0,0,0,1,0];this._loadMatrix(y,n)},t.prototype.contrast=function(e,n){var r=(e||0)+1,s=-.5*(r-1),a=[r,0,0,0,s,0,r,0,0,s,0,0,r,0,s,0,0,0,1,0];this._loadMatrix(a,n)},t.prototype.saturate=function(e,n){e===void 0&&(e=0);var r=e*2/3+1,s=(r-1)*-.5,a=[r,s,s,0,0,s,r,s,0,0,s,s,r,0,0,0,0,0,1,0];this._loadMatrix(a,n)},t.prototype.desaturate=function(){this.saturate(-1)},t.prototype.negative=function(e){var n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.sepia=function(e){var n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.technicolor=function(e){var n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.polaroid=function(e){var n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.toBGR=function(e){var n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.kodachrome=function(e){var n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.browni=function(e){var n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.vintage=function(e){var n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.colorTone=function(e,n,r,s,a){e=e||.2,n=n||.15,r=r||16770432,s=s||3375104;var o=(r>>16&255)/255,h=(r>>8&255)/255,l=(r&255)/255,u=(s>>16&255)/255,c=(s>>8&255)/255,f=(s&255)/255,d=[.3,.59,.11,0,0,o,h,l,e,0,u,c,f,n,0,o-u,h-c,l-f,0,0];this._loadMatrix(d,a)},t.prototype.night=function(e,n){e=e||.1;var r=[e*-2,-e,0,0,0,-e,0,e,0,0,0,e,e*2,0,0,0,0,0,1,0];this._loadMatrix(r,n)},t.prototype.predator=function(e,n){var r=[11.224130630493164*e,-4.794486999511719*e,-2.8746118545532227*e,0*e,.40342438220977783*e,-3.6330697536468506*e,9.193157196044922*e,-2.951810836791992*e,0*e,-1.316135048866272*e,-3.2184197902679443*e,-4.2375030517578125*e,7.476448059082031*e,0*e,.8044459223747253*e,0,0,0,1,0];this._loadMatrix(r,n)},t.prototype.lsd=function(e){var n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,e)},t.prototype.reset=function(){var e=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(e,!1)},Object.defineProperty(t.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(e){this.uniforms.m=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(e){this.uniforms.uAlpha=e},enumerable:!1,configurable:!0}),t}(vi);jf.prototype.grayscale=jf.prototype.greyscale;/*!
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
***************************************************************************** */var Tl=function(i,t){return Tl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Tl(i,t)};function O1(i,t){Tl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var D1=`varying vec2 vFilterCoord;
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
`,L1=`attribute vec2 aVertexPosition;

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
`;(function(i){O1(t,i);function t(e,n){var r=this,s=new Me;return e.renderable=!1,r=i.call(this,L1,D1,{mapSampler:e._texture,filterMatrix:s,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,r.maskSprite=e,r.maskMatrix=s,n==null&&(n=20),r.scale=new re(n,n),r}return t.prototype.apply=function(e,n,r,s){this.uniforms.filterMatrix=e.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var a=this.maskSprite.worldTransform,o=Math.sqrt(a.a*a.a+a.b*a.b),h=Math.sqrt(a.c*a.c+a.d*a.d);o!==0&&h!==0&&(this.uniforms.rotation[0]=a.a/o,this.uniforms.rotation[1]=a.b/o,this.uniforms.rotation[2]=a.c/h,this.uniforms.rotation[3]=a.d/h),e.applyFilter(this,n,r,s)},Object.defineProperty(t.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(e){this.uniforms.mapSampler=e},enumerable:!1,configurable:!0}),t})(vi);/*!
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
***************************************************************************** */var bl=function(i,t){return bl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},bl(i,t)};function N1(i,t){bl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var U1=`
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
`,F1=`varying vec2 v_rgbNW;
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
`;(function(i){N1(t,i);function t(){return i.call(this,U1,F1)||this}return t})(vi);/*!
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
***************************************************************************** */var Ml=function(i,t){return Ml=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Ml(i,t)};function B1(i,t){Ml(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var G1=`precision highp float;

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
`;(function(i){B1(t,i);function t(e,n){e===void 0&&(e=.5),n===void 0&&(n=Math.random());var r=i.call(this,mp,G1,{uNoise:0,uSeed:0})||this;return r.noise=e,r.seed=n,r}return Object.defineProperty(t.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(e){this.uniforms.uNoise=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(e){this.uniforms.uSeed=e},enumerable:!1,configurable:!0}),t})(vi);/*!
 * @pixi/mixin-cache-as-bitmap - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Pp=new Me;ge.prototype._cacheAsBitmap=!1;ge.prototype._cacheData=null;ge.prototype._cacheAsBitmapResolution=null;ge.prototype._cacheAsBitmapMultisample=he.NONE;var k1=function(){function i(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return i}();Object.defineProperties(ge.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(i){i!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=i,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(i){i!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=i,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(i){if(this._cacheAsBitmap!==i){this._cacheAsBitmap=i;var t;i?(this._cacheData||(this._cacheData=new k1),t=this._cacheData,t.originalRender=this.render,t.originalRenderCanvas=this.renderCanvas,t.originalUpdateTransform=this.updateTransform,t.originalCalculateBounds=this.calculateBounds,t.originalGetLocalBounds=this.getLocalBounds,t.originalDestroy=this.destroy,t.originalContainsPoint=this.containsPoint,t.originalMask=this._mask,t.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(t=this._cacheData,t.sprite&&this._destroyCachedDisplayObject(),this.render=t.originalRender,this.renderCanvas=t.originalRenderCanvas,this.calculateBounds=t.originalCalculateBounds,this.getLocalBounds=t.originalGetLocalBounds,this.destroy=t.originalDestroy,this.updateTransform=t.originalUpdateTransform,this.containsPoint=t.originalContainsPoint,this._mask=t.originalMask,this.filterArea=t.originalFilterArea)}}}});ge.prototype._renderCached=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(t))};ge.prototype._initCachedDisplayObject=function(t){var e;if(!(this._cacheData&&this._cacheData.sprite)){var n=this.alpha;this.alpha=1,t.batch.flush();var r=this.getLocalBounds(null,!0).clone();if(this.filters&&this.filters.length){var s=this.filters[0].padding;r.pad(s)}r.ceil(ct.RESOLUTION);var a=t.renderTexture.current,o=t.renderTexture.sourceFrame.clone(),h=t.renderTexture.destinationFrame.clone(),l=t.projection.transform,u=ji.create({width:r.width,height:r.height,resolution:this.cacheAsBitmapResolution||t.resolution,multisample:(e=this.cacheAsBitmapMultisample)!==null&&e!==void 0?e:t.multisample}),c="cacheAsBitmap_"+Yi();this._cacheData.textureCacheId=c,Wt.addToCache(u.baseTexture,c),Lt.addToCache(u,c);var f=this.transform.localTransform.copyTo(Pp).invert().translate(-r.x,-r.y);this.render=this._cacheData.originalRender,t.render(this,{renderTexture:u,clear:!0,transform:f,skipUpdateTransform:!1}),t.framebuffer.blit(),t.projection.transform=l,t.renderTexture.bind(a,o,h),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var d=new Is(u);d.transform.worldTransform=this.transform.worldTransform,d.anchor.x=-(r.x/r.width),d.anchor.y=-(r.y/r.height),d.alpha=n,d._bounds=this._bounds,this._cacheData.sprite=d,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=d.containsPoint.bind(d)}};ge.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(t))};ge.prototype._initCachedDisplayObjectCanvas=function(t){if(!(this._cacheData&&this._cacheData.sprite)){var e=this.getLocalBounds(null,!0),n=this.alpha;this.alpha=1;var r=t.context,s=t._projTransform;e.ceil(ct.RESOLUTION);var a=ji.create({width:e.width,height:e.height}),o="cacheAsBitmap_"+Yi();this._cacheData.textureCacheId=o,Wt.addToCache(a.baseTexture,o),Lt.addToCache(a,o);var h=Pp;this.transform.localTransform.copyTo(h),h.invert(),h.tx-=e.x,h.ty-=e.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,{renderTexture:a,clear:!0,transform:h,skipUpdateTransform:!1}),t.context=r,t._projTransform=s,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var l=new Is(a);l.transform.worldTransform=this.transform.worldTransform,l.anchor.x=-(e.x/e.width),l.anchor.y=-(e.y/e.height),l.alpha=n,l._bounds=this._bounds,this._cacheData.sprite=l,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=l.containsPoint.bind(l)}};ge.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};ge.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};ge.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,Wt.removeFromCache(this._cacheData.textureCacheId),Lt.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};ge.prototype._cacheAsBitmapDestroy=function(t){this.cacheAsBitmap=!1,this.destroy(t)};/*!
 * @pixi/mixin-get-child-by-name - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ge.prototype.name=null;An.prototype.getChildByName=function(t,e){for(var n=0,r=this.children.length;n<r;n++)if(this.children[n].name===t)return this.children[n];if(e)for(var n=0,r=this.children.length;n<r;n++){var s=this.children[n];if(s.getChildByName){var a=s.getChildByName(t,!0);if(a)return a}}return null};/*!
 * @pixi/mixin-get-global-position - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ge.prototype.getGlobalPosition=function(t,e){return t===void 0&&(t=new re),e===void 0&&(e=!1),this.parent?this.parent.toGlobal(this.position,t,e):(t.x=this.position.x,t.y=this.position.y),t};/*!
 * @pixi/app - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var H1=function(){function i(){}return i.init=function(t){var e=this;Object.defineProperty(this,"resizeTo",{set:function(n){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=n,n&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){e._resizeTo&&(e.cancelResize(),e._resizeId=requestAnimationFrame(function(){return e.resize()}))},this.cancelResize=function(){e._resizeId&&(cancelAnimationFrame(e._resizeId),e._resizeId=null)},this.resize=function(){if(e._resizeTo){e.cancelResize();var n,r;if(e._resizeTo===globalThis.window)n=globalThis.innerWidth,r=globalThis.innerHeight;else{var s=e._resizeTo,a=s.clientWidth,o=s.clientHeight;n=a,r=o}e.renderer.resize(n,r)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=t.resizeTo||null},i.destroy=function(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},i.extension=Qt.Application,i}(),Ip=function(){function i(t){var e=this;this.stage=new An,t=Object.assign({forceCanvas:!1},t),this.renderer=pw(t),i._plugins.forEach(function(n){n.init.call(e,t)})}return i.registerPlugin=function(t){un("6.5.0","Application.registerPlugin() is deprecated, use extensions.add()"),$n.add({type:Qt.Application,ref:t})},i.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(i.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),i.prototype.destroy=function(t,e){var n=this,r=i._plugins.slice(0);r.reverse(),r.forEach(function(s){s.destroy.call(n)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null},i._plugins=[],i}();$n.handleByList(Qt.Application,Ip._plugins);$n.add(H1);/*!
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
***************************************************************************** */var wl=function(i,t){return wl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},wl(i,t)};function Br(i,t){wl(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var z1=function(i){Br(t,i);function t(e,n,r,s){e===void 0&&(e=100),n===void 0&&(n=100),r===void 0&&(r=10),s===void 0&&(s=10);var a=i.call(this)||this;return a.segWidth=r,a.segHeight=s,a.width=e,a.height=n,a.build(),a}return t.prototype.build=function(){for(var e=this.segWidth*this.segHeight,n=[],r=[],s=[],a=this.segWidth-1,o=this.segHeight-1,h=this.width/a,l=this.height/o,u=0;u<e;u++){var c=u%this.segWidth,f=u/this.segWidth|0;n.push(c*h,f*l),r.push(c/a,f/o)}for(var d=a*o,u=0;u<d;u++){var m=u%a,_=u/a|0,p=_*this.segWidth+m,v=_*this.segWidth+m+1,y=(_+1)*this.segWidth+m,g=(_+1)*this.segWidth+m+1;s.push(p,v,y,v,g,y)}this.buffers[0].data=new Float32Array(n),this.buffers[1].data=new Float32Array(r),this.indexBuffer.data=new Uint16Array(s),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},t}(lo),V1=function(i){Br(t,i);function t(e,n,r){e===void 0&&(e=200),r===void 0&&(r=0);var s=i.call(this,new Float32Array(n.length*4),new Float32Array(n.length*4),new Uint16Array((n.length-1)*6))||this;return s.points=n,s._width=e,s.textureScale=r,s.build(),s}return Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),t.prototype.build=function(){var e=this.points;if(e){var n=this.getBuffer("aVertexPosition"),r=this.getBuffer("aTextureCoord"),s=this.getIndex();if(!(e.length<1)){n.data.length/4!==e.length&&(n.data=new Float32Array(e.length*4),r.data=new Float32Array(e.length*4),s.data=new Uint16Array((e.length-1)*6));var a=r.data,o=s.data;a[0]=0,a[1]=0,a[2]=0,a[3]=1;for(var h=0,l=e[0],u=this._width*this.textureScale,c=e.length,f=0;f<c;f++){var d=f*4;if(this.textureScale>0){var m=l.x-e[f].x,_=l.y-e[f].y,p=Math.sqrt(m*m+_*_);l=e[f],h+=p/u}else h=f/(c-1);a[d]=h,a[d+1]=0,a[d+2]=h,a[d+3]=1}for(var v=0,f=0;f<c-1;f++){var d=f*2;o[v++]=d,o[v++]=d+1,o[v++]=d+2,o[v++]=d+2,o[v++]=d+1,o[v++]=d+3}r.update(),s.update(),this.updateVertices()}}},t.prototype.updateVertices=function(){var e=this.points;if(!(e.length<1)){for(var n=e[0],r,s=0,a=0,o=this.buffers[0].data,h=e.length,l=0;l<h;l++){var u=e[l],c=l*4;l<e.length-1?r=e[l+1]:r=u,a=-(r.x-n.x),s=r.y-n.y;var f=Math.sqrt(s*s+a*a),d=this.textureScale>0?this.textureScale*this._width/2:this._width/2;s/=f,a/=f,s*=d,a*=d,o[c]=u.x+s,o[c+1]=u.y+a,o[c+2]=u.x-s,o[c+3]=u.y-a,n=u}this.buffers[0].update()}},t.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},t}(lo);(function(i){Br(t,i);function t(e,n,r){r===void 0&&(r=0);var s=this,a=new V1(e.height,n,r),o=new Ss(e);return r>0&&(e.baseTexture.wrapMode=bn.REPEAT),s=i.call(this,a,o)||this,s.autoUpdate=!0,s}return t.prototype._render=function(e){var n=this.geometry;(this.autoUpdate||n._width!==this.shader.texture.height)&&(n._width=this.shader.texture.height,n.update()),i.prototype._render.call(this,e)},t})(Es);var X1=function(i){Br(t,i);function t(e,n,r){var s=this,a=new z1(e.width,e.height,n,r),o=new Ss(Lt.WHITE);return s=i.call(this,a,o)||this,s.texture=e,s.autoResize=!0,s}return t.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var e=this.geometry,n=this.shader.texture,r=n.width,s=n.height;this.autoResize&&(e.width!==r||e.height!==s)&&(e.width=this.shader.texture.width,e.height=this.shader.texture.height,e.build())},Object.defineProperty(t.prototype,"texture",{get:function(){return this.shader.texture},set:function(e){this.shader.texture!==e&&(this.shader.texture=e,this._textureID=-1,e.baseTexture.valid?this.textureUpdated():e.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),t.prototype._render=function(e){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),i.prototype._render.call(this,e)},t.prototype.destroy=function(e){this.shader.texture.off("update",this.textureUpdated,this),i.prototype.destroy.call(this,e)},t}(Es);(function(i){Br(t,i);function t(e,n,r,s,a){e===void 0&&(e=Lt.EMPTY);var o=this,h=new lo(n,r,s);h.getBuffer("aVertexPosition").static=!1;var l=new Ss(e);return o=i.call(this,h,l,null,a)||this,o.autoUpdate=!0,o}return Object.defineProperty(t.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(e){this.geometry.getBuffer("aVertexPosition").data=e},enumerable:!1,configurable:!0}),t.prototype._render=function(e){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),i.prototype._render.call(this,e)},t})(Es);var Ra=10;(function(i){Br(t,i);function t(e,n,r,s,a){n===void 0&&(n=Ra),r===void 0&&(r=Ra),s===void 0&&(s=Ra),a===void 0&&(a=Ra);var o=i.call(this,Lt.WHITE,4,4)||this;return o._origWidth=e.orig.width,o._origHeight=e.orig.height,o._width=o._origWidth,o._height=o._origHeight,o._leftWidth=n,o._rightWidth=s,o._topHeight=r,o._bottomHeight=a,o.texture=e,o}return t.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(t.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(e){this.geometry.getBuffer("aVertexPosition").data=e},enumerable:!1,configurable:!0}),t.prototype.updateHorizontalVertices=function(){var e=this.vertices,n=this._getMinScale();e[9]=e[11]=e[13]=e[15]=this._topHeight*n,e[17]=e[19]=e[21]=e[23]=this._height-this._bottomHeight*n,e[25]=e[27]=e[29]=e[31]=this._height},t.prototype.updateVerticalVertices=function(){var e=this.vertices,n=this._getMinScale();e[2]=e[10]=e[18]=e[26]=this._leftWidth*n,e[4]=e[12]=e[20]=e[28]=this._width-this._rightWidth*n,e[6]=e[14]=e[22]=e[30]=this._width},t.prototype._getMinScale=function(){var e=this._leftWidth+this._rightWidth,n=this._width>e?1:this._width/e,r=this._topHeight+this._bottomHeight,s=this._height>r?1:this._height/r,a=Math.min(n,s);return a},Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(e){this._leftWidth=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(e){this._rightWidth=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"topHeight",{get:function(){return this._topHeight},set:function(e){this._topHeight=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(e){this._bottomHeight=e,this._refresh()},enumerable:!1,configurable:!0}),t.prototype._refresh=function(){var e=this.texture,n=this.geometry.buffers[1].data;this._origWidth=e.orig.width,this._origHeight=e.orig.height;var r=1/this._origWidth,s=1/this._origHeight;n[0]=n[8]=n[16]=n[24]=0,n[1]=n[3]=n[5]=n[7]=0,n[6]=n[14]=n[22]=n[30]=1,n[25]=n[27]=n[29]=n[31]=1,n[2]=n[10]=n[18]=n[26]=r*this._leftWidth,n[4]=n[12]=n[20]=n[28]=1-r*this._rightWidth,n[9]=n[11]=n[13]=n[15]=s*this._topHeight,n[17]=n[19]=n[21]=n[23]=1-s*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},t})(X1);/*!
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
***************************************************************************** */var Al=function(i,t){return Al=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},Al(i,t)};function W1(i,t){Al(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}(function(i){W1(t,i);function t(e,n){n===void 0&&(n=!0);var r=i.call(this,e[0]instanceof Lt?e[0]:e[0].texture)||this;return r._textures=null,r._durations=null,r._autoUpdate=n,r._isConnectedToTicker=!1,r.animationSpeed=1,r.loop=!0,r.updateAnchor=!1,r.onComplete=null,r.onFrameChange=null,r.onLoop=null,r._currentTime=0,r._playing=!1,r._previousFrame=null,r.textures=e,r}return t.prototype.stop=function(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(De.shared.remove(this.update,this),this._isConnectedToTicker=!1))},t.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(De.shared.add(this.update,this,Yn.HIGH),this._isConnectedToTicker=!0))},t.prototype.gotoAndStop=function(e){this.stop();var n=this.currentFrame;this._currentTime=e,n!==this.currentFrame&&this.updateTexture()},t.prototype.gotoAndPlay=function(e){var n=this.currentFrame;this._currentTime=e,n!==this.currentFrame&&this.updateTexture(),this.play()},t.prototype.update=function(e){if(this._playing){var n=this.animationSpeed*e,r=this.currentFrame;if(this._durations!==null){var s=this._currentTime%1*this._durations[this.currentFrame];for(s+=n/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];var a=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*a,this._currentTime+=a;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r?this.onLoop():this.animationSpeed<0&&this.currentFrame>r&&this.onLoop()),this.updateTexture())}},t.prototype.updateTexture=function(){var e=this.currentFrame;this._previousFrame!==e&&(this._previousFrame=e,this._texture=this._textures[e],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},t.prototype.destroy=function(e){this.stop(),i.prototype.destroy.call(this,e),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},t.fromFrames=function(e){for(var n=[],r=0;r<e.length;++r)n.push(Lt.from(e[r]));return new t(n)},t.fromImages=function(e){for(var n=[],r=0;r<e.length;++r)n.push(Lt.from(e[r]));return new t(n)},Object.defineProperty(t.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textures",{get:function(){return this._textures},set:function(e){if(e[0]instanceof Lt)this._textures=e,this._durations=null;else{this._textures=[],this._durations=[];for(var n=0;n<e.length;n++)this._textures.push(e[n].texture),this._durations.push(e[n].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"currentFrame",{get:function(){var e=Math.floor(this._currentTime)%this._textures.length;return e<0&&(e+=this._textures.length),e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(De.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(De.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),t})(Is);/*!
 * pixi.js - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */$n.add(Rw,Uw,Dw,RA,i1,_p,u1,S1,Qw,bA,MA,s1,Yb,Xw);class Op{constructor(){this.app=new Ip({resizeTo:window,backgroundAlpha:0});const t=500,e=500;var n=new ys;n.beginFill(15074864),n.moveTo(t/2-200,e/2+100),n.lineTo(t/2-200,e/2-100),n.lineTo(t/2+200,e/2-100),n.lineTo(t/2+200,e/2+100),n.endFill(),this.app.stage.addChild(n),this.div=document.getElementById("three"),this.div.appendChild(this.app.view),this.app.view.setAttribute("style","position: fixed; top: 0px; left: 0px; z-index: 100")}}class Dp{constructor(){this.model=Je(eo),this.threeView=Je(Vl),this.pixiView=Je(Op),this.controller=Je(Fd),this.controller.initialize()}}console.log("main4");jn($f).asSingletone();jn(eo).asSingletone();jn(os).asSingletone();jn(Vl).asSingletone();jn(Op).asSingletone();jn(Fd).asSingletone();jn(Nd).asSingletone();jn(Ud).asSingletone();jn(Dp).asSingletone();Je(Dp);
