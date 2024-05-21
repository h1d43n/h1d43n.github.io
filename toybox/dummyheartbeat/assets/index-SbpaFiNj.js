(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var re,c,Ke,Ze,D,Ae,Xe,ce,ge,pe,de,B={},Ye=[],yt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_e=Array.isArray;function N(e,t){for(var n in t)e[n]=t[n];return e}function Qe(e){var t=e.parentNode;t&&t.removeChild(e)}function ve(e,t,n){var i,o,r,l={};for(r in t)r=="key"?i=t[r]:r=="ref"?o=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?re.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return Z(e,l,i,o,null)}function Z(e,t,n,i,o){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Ke,__i:-1,__u:0};return o==null&&c.vnode!=null&&c.vnode(r),r}function C(e){return e.children}function T(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?L(e):null}function et(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return et(e)}}function xe(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!Q.__r++||Ae!==c.debounceRendering)&&((Ae=c.debounceRendering)||Xe)(Q)}function Q(){var e,t,n,i,o,r,l,u;for(D.sort(ce);e=D.shift();)e.__d&&(t=D.length,i=void 0,r=(o=(n=e).__v).__e,l=[],u=[],n.__P&&((i=N({},o)).__v=o.__v+1,c.vnode&&c.vnode(i),$e(n.__P,i,o,n.__n,n.__P.namespaceURI,32&o.__u?[r]:null,l,r??L(o),!!(32&o.__u),u),i.__v=o.__v,i.__.__k[i.__i]=i,it(l,i,u),i.__e!=r&&et(i)),D.length>t&&D.sort(ce));Q.__r=0}function tt(e,t,n,i,o,r,l,u,s,a,p){var _,h,f,y,E,$=i&&i.__k||Ye,v=t.length;for(n.__d=s,bt(n,t,$),s=n.__d,_=0;_<v;_++)(f=n.__k[_])!=null&&typeof f!="boolean"&&typeof f!="function"&&(h=f.__i===-1?B:$[f.__i]||B,f.__i=_,$e(e,f,h,o,r,l,u,s,a,p),y=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Se(h.ref,null,f),p.push(f.ref,f.__c||y,f)),E==null&&y!=null&&(E=y),65536&f.__u||h.__k===f.__k?(s&&!s.isConnected&&(s=L(h)),s=nt(f,s,e)):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:y&&(s=y.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=s,n.__e=E}function bt(e,t,n){var i,o,r,l,u,s=t.length,a=n.length,p=a,_=0;for(e.__k=[],i=0;i<s;i++)l=i+_,(o=e.__k[i]=(o=t[i])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Z(null,o,null,null,null):_e(o)?Z(C,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Z(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,u=gt(o,n,l,p),o.__i=u,r=null,u!==-1&&(p--,(r=n[u])&&(r.__u|=131072)),r==null||r.__v===null?(u==-1&&_--,typeof o.type!="function"&&(o.__u|=65536)):u!==l&&(u===l+1?_++:u>l?p>s-l?_+=u-l:_--:u<l?u==l-1&&(_=u-l):_=0,u!==i+_&&(o.__u|=65536))):(r=n[l])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=L(r)),he(r,r,!1),n[l]=null,p--);if(p)for(i=0;i<a;i++)(r=n[i])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=L(r)),he(r,r))}function nt(e,t,n){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=nt(i[o],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function ee(e,t){return t=t||[],e==null||typeof e=="boolean"||(_e(e)?e.some(function(n){ee(n,t)}):t.push(e)),t}function gt(e,t,n,i){var o=e.key,r=e.type,l=n-1,u=n+1,s=t[n];if(s===null||s&&o==s.key&&r===s.type&&!(131072&s.__u))return n;if(i>(s!=null&&!(131072&s.__u)?1:0))for(;l>=0||u<t.length;){if(l>=0){if((s=t[l])&&!(131072&s.__u)&&o==s.key&&r===s.type)return l;l--}if(u<t.length){if((s=t[u])&&!(131072&s.__u)&&o==s.key&&r===s.type)return u;u++}}return-1}function Te(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||yt.test(t)?n:n+"px"}function z(e,t,n,i,o){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Te(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Te(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i?n.u=i.u:(n.u=ge,e.addEventListener(t,r?de:pe,r)):e.removeEventListener(t,r?de:pe,r);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ne(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ge++;else if(t.t<n.u)return;return n(c.event?c.event(t):t)}}}function $e(e,t,n,i,o,r,l,u,s,a){var p,_,h,f,y,E,$,v,b,k,A,x,Pe,j,ue,U=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),r=[u=t.__e=n.__e]),(p=c.__b)&&p(t);e:if(typeof U=="function")try{if(v=t.props,b=(p=U.contextType)&&i[p.__c],k=p?b?b.props.value:p.__:i,n.__c?$=(_=t.__c=n.__c).__=_.__E:("prototype"in U&&U.prototype.render?t.__c=_=new U(v,k):(t.__c=_=new T(v,k),_.constructor=U,_.render=St),b&&b.sub(_),_.props=v,_.state||(_.state={}),_.context=k,_.__n=i,h=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),U.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=N({},_.__s)),N(_.__s,U.getDerivedStateFromProps(v,_.__s))),f=_.props,y=_.state,_.__v=t,h)U.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(U.getDerivedStateFromProps==null&&v!==f&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,k),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,k)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(_.props=v,_.state=_.__s,_.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(q){q&&(q.__=t)}),A=0;A<_._sb.length;A++)_.__h.push(_._sb[A]);_._sb=[],_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,k),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(f,y,E)})}if(_.context=k,_.props=v,_.__P=e,_.__e=!1,x=c.__r,Pe=0,"prototype"in U&&U.prototype.render){for(_.state=_.__s,_.__d=!1,x&&x(t),p=_.render(_.props,_.state,_.context),j=0;j<_._sb.length;j++)_.__h.push(_._sb[j]);_._sb=[]}else do _.__d=!1,x&&x(t),p=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++Pe<25);_.state=_.__s,_.getChildContext!=null&&(i=N(N({},i),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(E=_.getSnapshotBeforeUpdate(f,y)),tt(e,_e(ue=p!=null&&p.type===C&&p.key==null?p.props.children:p)?ue:[ue],t,n,i,o,r,l,u,s,a),_.base=t.__e,t.__u&=-161,_.__h.length&&l.push(_),$&&(_.__E=_.__=null)}catch(q){t.__v=null,s||r!=null?(t.__e=u,t.__u|=s?160:32,r[r.indexOf(u)]=null):(t.__e=n.__e,t.__k=n.__k),c.__e(q,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=$t(n.__e,t,n,i,o,r,l,s,a);(p=c.diffed)&&p(t)}function it(e,t,n){t.__d=void 0;for(var i=0;i<n.length;i++)Se(n[i],n[++i],n[++i]);c.__c&&c.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){c.__e(r,o.__v)}})}function $t(e,t,n,i,o,r,l,u,s){var a,p,_,h,f,y,E,$=n.props,v=t.props,b=t.type;if(b==="svg"?o="http://www.w3.org/2000/svg":b==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r!=null){for(a=0;a<r.length;a++)if((f=r[a])&&"setAttribute"in f==!!b&&(b?f.localName===b:f.nodeType===3)){e=f,r[a]=null;break}}if(e==null){if(b===null)return document.createTextNode(v);e=document.createElementNS(o,b,v.is&&v),r=null,u=!1}if(b===null)$===v||u&&e.data===v||(e.data=v);else{if(r=r&&re.call(e.childNodes),$=n.props||B,!u&&r!=null)for($={},a=0;a<e.attributes.length;a++)$[(f=e.attributes[a]).name]=f.value;for(a in $)if(f=$[a],a!="children"){if(a=="dangerouslySetInnerHTML")_=f;else if(a!=="key"&&!(a in v)){if(a=="value"&&"defaultValue"in v||a=="checked"&&"defaultChecked"in v)continue;z(e,a,null,f,o)}}for(a in v)f=v[a],a=="children"?h=f:a=="dangerouslySetInnerHTML"?p=f:a=="value"?y=f:a=="checked"?E=f:a==="key"||u&&typeof f!="function"||$[a]===f||z(e,a,f,$[a],o);if(p)u||_&&(p.__html===_.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(_&&(e.innerHTML=""),tt(e,_e(h)?h:[h],t,n,i,b==="foreignObject"?"http://www.w3.org/1999/xhtml":o,r,l,r?r[0]:n.__k&&L(n,0),u,s),r!=null)for(a=r.length;a--;)r[a]!=null&&Qe(r[a]);u||(a="value",y!==void 0&&(y!==e[a]||b==="progress"&&!y||b==="option"&&y!==$[a])&&z(e,a,y,$[a],o),a="checked",E!==void 0&&E!==e[a]&&z(e,a,E,$[a],o))}return e}function Se(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){c.__e(i,n)}}function he(e,t,n){var i,o;if(c.unmount&&c.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Se(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){c.__e(r,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&he(i[o],t,n||typeof e.type!="function");n||e.__e==null||Qe(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function St(e,t,n){return this.constructor(e,n)}function kt(e,t,n){var i,o,r,l;c.__&&c.__(e,t),o=(i=typeof n=="function")?null:t.__k,r=[],l=[],$e(t,e=(!i&&n||t).__k=ve(C,null,[e]),o||B,B,t.namespaceURI,!i&&n?[n]:o?null:t.firstChild?re.call(t.childNodes):null,r,!i&&n?n:o?o.__e:t.firstChild,i,l),it(r,e,l)}re=Ye.slice,c={__e:function(e,t,n,i){for(var o,r,l;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,i||{}),l=o.__d),l)return o.__E=o}catch(u){e=u}throw e}},Ke=0,Ze=function(e){return e!=null&&e.constructor==null},T.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=N({},this.state),typeof e=="function"&&(e=e(N({},n),this.props)),e&&N(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),xe(this))},T.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),xe(this))},T.prototype.render=C,D=[],Xe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ce=function(e,t){return e.__v.__b-t.__v.__b},Q.__r=0,ge=0,pe=Ne(!1),de=Ne(!0);var te,w,se,De,ne=0,ot=[],X=[],g=c,He=g.__b,Ce=g.__r,Le=g.diffed,Oe=g.__c,Ie=g.unmount,Me=g.__;function rt(e,t){g.__h&&g.__h(w,e,ne||t),ne=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:X}),n.__[e]}function wt(e,t){var n=rt(te++,3);!g.__s&&_t(n.__H,t)&&(n.__=e,n.i=t,w.__H.__h.push(n))}function me(e){return ne=5,le(function(){return{current:e}},[])}function le(e,t){var n=rt(te++,7);return _t(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function H(e,t){return ne=8,le(function(){return e},t)}function Et(){for(var e;e=ot.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Y),e.__H.__h.forEach(ye),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){w=null,He&&He(e)},g.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Me&&Me(e,t)},g.__r=function(e){Ce&&Ce(e),te=0;var t=(w=e.__c).__H;t&&(se===w?(t.__h=[],w.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=X,n.__N=n.i=void 0})):(t.__h.forEach(Y),t.__h.forEach(ye),t.__h=[],te=0)),se=w},g.diffed=function(e){Le&&Le(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ot.push(t)!==1&&De===g.requestAnimationFrame||((De=g.requestAnimationFrame)||Ut)(Et)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==X&&(n.__=n.__V),n.i=void 0,n.__V=X})),se=w=null},g.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Y),n.__h=n.__h.filter(function(i){return!i.__||ye(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],g.__e(i,n.__v)}}),Oe&&Oe(e,t)},g.unmount=function(e){Ie&&Ie(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Y(i)}catch(o){t=o}}),n.__H=void 0,t&&g.__e(t,n.__v))};var Re=typeof requestAnimationFrame=="function";function Ut(e){var t,n=function(){clearTimeout(i),Re&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);Re&&(t=requestAnimationFrame(n))}function Y(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function ye(e){var t=w;e.__c=e.__(),w=t}function _t(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}var Pt=Symbol.for("preact-signals");function ke(){if(I>1)I--;else{for(var e,t=!1;F!==void 0;){var n=F;for(F=void 0,be++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&ut(n))try{n.c()}catch(o){t||(e=o,t=!0)}n=i}}if(be=0,I--,t)throw e}}var m=void 0,F=void 0,I=0,be=0,ie=0;function lt(e){if(m!==void 0){var t=e.n;if(t===void 0||t.t!==m)return t={i:0,S:e,p:m.s,n:void 0,t:m,e:void 0,x:void 0,r:t},m.s!==void 0&&(m.s.n=t),m.s=t,e.n=t,32&m.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=m.s,t.n=void 0,m.s.n=t,m.s=t),t}}function S(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}S.prototype.brand=Pt;S.prototype.h=function(){return!0};S.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};S.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};S.prototype.subscribe=function(e){var t=this;return Ee(function(){var n=t.value,i=m;m=void 0;try{e(n)}finally{m=i}})};S.prototype.valueOf=function(){return this.value};S.prototype.toString=function(){return this.value+""};S.prototype.toJSON=function(){return this.value};S.prototype.peek=function(){var e=m;m=void 0;try{return this.value}finally{m=e}};Object.defineProperty(S.prototype,"value",{get:function(){var e=lt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(be>100)throw new Error("Cycle detected");this.v=e,this.i++,ie++,I++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{ke()}}}});function M(e){return new S(e)}function ut(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function st(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function at(e){for(var t=e.s,n=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=n}function R(e){S.call(this,void 0),this.x=e,this.s=void 0,this.g=ie-1,this.f=4}(R.prototype=new S).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ie))return!0;if(this.g=ie,this.f|=1,this.i>0&&!ut(this))return this.f&=-2,!0;var e=m;try{st(this),m=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return m=e,at(this),this.f&=-2,!0};R.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}S.prototype.S.call(this,e)};R.prototype.U=function(e){if(this.t!==void 0&&(S.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};R.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(R.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=lt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function At(e){return new R(e)}function ft(e){var t=e.u;if(e.u=void 0,typeof t=="function"){I++;var n=m;m=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,we(e),i}finally{m=n,ke()}}}function we(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,ft(e)}function xt(e){if(m!==this)throw new Error("Out-of-order effect");at(this),m=e,this.f&=-2,8&this.f&&we(this),ke()}function W(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}W.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};W.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,ft(this),st(this),I++;var e=m;return m=this,xt.bind(this,e)};W.prototype.N=function(){2&this.f||(this.f|=2,this.o=F,F=this)};W.prototype.d=function(){this.f|=8,1&this.f||we(this)};function Ee(e){var t=new W(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var ae;function V(e,t){c[e]=t.bind(null,c[e]||function(){})}function oe(e){ae&&ae(),ae=e&&e.S()}function ct(e){var t=this,n=e.data,i=Nt(n);i.value=n;var o=le(function(){for(var r=t.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return t.__$u.c=function(){var l;!Ze(o.peek())&&((l=t.base)==null?void 0:l.nodeType)===3?t.base.data=o.peek():(t.__$f|=1,t.setState({}))},At(function(){var l=i.value.value;return l===0?0:l===!0?"":l||""})},[]);return o.value}ct.displayName="_st";Object.defineProperties(S.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:ct},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});V("__b",function(e,t){if(typeof t.type=="string"){var n,i=t.props;for(var o in i)if(o!=="children"){var r=i[o];r instanceof S&&(n||(t.__np=n={}),n[o]=r,i[o]=r.peek())}}e(t)});V("__r",function(e,t){oe();var n,i=t.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(o){var r;return Ee(function(){r=this}),r.c=function(){i.__$f|=1,i.setState({})},r}())),oe(n),e(t)});V("__e",function(e,t,n,i){oe(),e(t,n,i)});V("diffed",function(e,t){oe();var n;if(typeof t.type=="string"&&(n=t.__e)){var i=t.__np,o=t.props;if(i){var r=n.U;if(r)for(var l in r){var u=r[l];u!==void 0&&!(l in i)&&(u.d(),r[l]=void 0)}else n.U=r={};for(var s in i){var a=r[s],p=i[s];a===void 0?(a=Tt(n,s,p,o),r[s]=a):a.o(p,o)}}}e(t)});function Tt(e,t,n,i){var o=t in e&&e.ownerSVGElement===void 0,r=M(n);return{o:function(l,u){r.value=l,i=u},d:Ee(function(){var l=r.value.value;i[t]!==l&&(i[t]=l,o?e[t]=l:l?e.setAttribute(t,l):e.removeAttribute(t))})}}V("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var o in i){var r=i[o];r&&r.d()}}}}else{var l=t.__c;if(l){var u=l.__$u;u&&(l.__$u=void 0,u.d())}}e(t)});V("__h",function(e,t,n,i){(i<3||i===9)&&(t.__$f|=2),e(t,n,i)});T.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in t)return!0;for(var o in e)if(o!=="__source"&&e[o]!==this.props[o])return!0;for(var r in this.props)if(!(r in e))return!0;return!1};function Nt(e){return le(function(){return M(e)},[])}const Dt=5,Ht=.9,Ct=1,Lt=160,Ot=70,pt=85,It=5*1e3,Ue={delta:Dt,deltaDecrease:Ht,deltaIncrease:Ct,max:Lt,min:Ot,initialValue:pt,updateMillSeconds:It},P=M(null),G=M(!1),O=M(pt),J=M(!1);var Mt=0;function d(e,t,n,i,o,r){t||(t={});var l,u,s=t;if("ref"in s)for(u in s={},t)u=="ref"?l=t[u]:s[u]=t[u];var a={type:e,props:s,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Mt,__i:-1,__u:0,__source:o,__self:r};if(typeof e=="function"&&(l=e.defaultProps))for(u in l)s[u]===void 0&&(s[u]=l[u]);return c.vnode&&c.vnode(a),a}const Rt=e=>{const{openConfig:t}=e;return d("div",{className:"flex",children:[d("div",{className:"heart",onPointerUp:t,children:"❤"}),d("div",{className:"beat",children:O})]})};function Vt(e,t){for(var n in t)e[n]=t[n];return e}function Ve(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Fe(e,t){this.props=e,this.context=t}(Fe.prototype=new T).isPureReactComponent=!0,Fe.prototype.shouldComponentUpdate=function(e,t){return Ve(this.props,e)||Ve(this.state,t)};var Be=c.__b;c.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Be&&Be(e)};var Ft=c.__e;c.__e=function(e,t,n,i){if(e.then){for(var o,r=t;r=r.__;)if((o=r.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}Ft(e,t,n,i)};var We=c.unmount;function dt(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),e.__c.__H=null),(e=Vt({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(i){return dt(i,t,n)})),e}function vt(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(i){return vt(i,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function fe(){this.__u=0,this.t=null,this.__b=null}function ht(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function K(){this.u=null,this.o=null}c.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),We&&We(e)},(fe.prototype=new T).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=ht(i.__v),r=!1,l=function(){r||(r=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__a){var s=i.state.__a;i.__v.__k[0]=vt(s,s.__c.__P,s.__c.__O)}var a;for(i.setState({__a:i.__b=null});a=i.t.pop();)a.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(l,l)},fe.prototype.componentWillUnmount=function(){this.t=[]},fe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=dt(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__a&&ve(C,null,e.fallback);return o&&(o.__u&=-33),[ve(C,null,t.__a?null:e.children),o]};var je=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(K.prototype=new T).__a=function(e){var t=this,n=ht(t.__v),i=t.o.get(e);return i[0]++,function(o){var r=function(){t.props.revealOrder?(i.push(o),je(t,e,i)):o()};n?n(r):r()}},K.prototype.render=function(e){this.u=null,this.o=new Map;var t=ee(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},K.prototype.componentDidUpdate=K.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){je(e,n,t)})};var Bt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Wt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,jt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,qt=/[A-Z0-9]/g,zt=typeof document<"u",Gt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};T.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(T.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var qe=c.event;function Jt(){}function Kt(){return this.cancelBubble}function Zt(){return this.defaultPrevented}c.event=function(e){return qe&&(e=qe(e)),e.persist=Jt,e.isPropagationStopped=Kt,e.isDefaultPrevented=Zt,e.nativeEvent=e};var Xt={enumerable:!1,configurable:!0,get:function(){return this.class}},ze=c.vnode;c.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,i=t.type,o={};for(var r in n){var l=n[r];if(!(r==="value"&&"defaultValue"in n&&l==null||zt&&r==="children"&&i==="noscript"||r==="class"||r==="className")){var u=r.toLowerCase();r==="defaultValue"&&"value"in n&&n.value==null?r="value":r==="download"&&l===!0?l="":u==="translate"&&l==="no"?l=!1:u==="ondoubleclick"?r="ondblclick":u!=="onchange"||i!=="input"&&i!=="textarea"||Gt(n.type)?u==="onfocus"?r="onfocusin":u==="onblur"?r="onfocusout":jt.test(r)?r=u:i.indexOf("-")===-1&&Wt.test(r)?r=r.replace(qt,"-$&").toLowerCase():l===null&&(l=void 0):u=r="oninput",u==="oninput"&&o[r=u]&&(r="oninputCapture"),o[r]=l}}i=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=ee(n.children).forEach(function(s){s.props.selected=o.value.indexOf(s.props.value)!=-1})),i=="select"&&o.defaultValue!=null&&(o.value=ee(n.children).forEach(function(s){s.props.selected=o.multiple?o.defaultValue.indexOf(s.props.value)!=-1:o.defaultValue==s.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Xt)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=Bt,ze&&ze(e)};var Ge=c.__r;c.__r=function(e){Ge&&Ge(e),e.__c};var Je=c.diffed;c.diffed=function(e){Je&&Je(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const mt="configure",Yt=e=>{localStorage.setItem(mt,JSON.stringify(e))},Qt=()=>{const e=localStorage.getItem(mt);if(e){const t=JSON.parse(e);if(Object.keys(Ue).every(n=>typeof t[n]=="number"))return t}return null},en=e=>{e.stopPropagation()},tn=e=>{e.max<=e.min?P.value="最小値が最大値を超過しています":e.initialValue>e.max||e.initialValue<e.min?P.value="初期値が最小値～最大値の範囲を超えています":e.min<0?P.value="最小値が無効です":e.delta<1?P.value="変化量が無効です":e.deltaDecrease>1||e.deltaDecrease<0||e.deltaIncrease>1||e.deltaIncrease<0?P.value="変化率が無効です":e.updateMillSeconds<1e3?P.value="更新間隔が不正か短すぎます":P.value=null},nn=e=>{const{closeConfig:t,updateConfig:n,delta:i,deltaDecrease:o,deltaIncrease:r,max:l,min:u,initialValue:s,updateMillSeconds:a}=e,p=me({delta:i,deltaDecrease:o,deltaIncrease:r,max:l,min:u,initialValue:s,updateMillSeconds:a}),_=(b,k,A)=>{if(!Number.isNaN(Number(k))&&Object.keys(A).includes(b)){const x={...A,[b]:Number(k)};return J.value=!1,tn(x),x}return P.value="不正な値です",A},h=b=>{const k=b.currentTarget;if(k){const{name:A,value:x}=k;p.current=_(A,x,p.current)}},f=H(()=>{n(p.current)},[n]),y=H(()=>{Yt(p.current),J.value=!0},[]),E=H(()=>{t()},[t]),$=H(()=>{n(Ue),J.value=!1},[]),v=P.value;return d("div",{className:"dimmer",onPointerUp:en,children:d("div",{className:"popup",children:[d("h1",{children:"Configure"}),d("div",{className:`alert ${v?"":"hidden"}`,children:P}),d("form",{className:"form",children:[d("label",{children:"Delta:"}),d("input",{type:"number",name:"delta",min:"1",step:"1",defaultValue:i.toString(),title:"変化量の最大値",onChange:h}),d("label",{children:"DeltaDeclease:"}),d("input",{type:"number",name:"deltaDecrease",min:"0",max:"1",step:"0.1",defaultValue:o.toString(),title:"最大減少率(0~1)",onChange:h}),d("label",{children:"DeltaIInclease:"}),d("input",{type:"number",name:"deltaIncrease",min:"0",max:"1",step:"0.1",defaultValue:r.toString(),title:"最大増加率(0~1)",onChange:h}),d("label",{children:"Max:"}),d("input",{type:"number",name:"max",step:"1",defaultValue:l.toString(),title:"最大値",onChange:h}),d("label",{children:"Min:"}),d("input",{type:"number",name:"min",step:"1",defaultValue:u.toString(),title:"最小値",onChange:h}),d("label",{children:"Initial:"}),d("input",{type:"number",name:"initialValue",step:"1",defaultValue:s.toString(),title:"最初の値",onChange:h}),d("label",{children:"Update ms:"}),d("input",{type:"number",name:"updateMillSeconds",min:"1000",step:"1",defaultValue:a.toString(),title:"更新間隔 (ms)",onChange:h})]}),d("hr",{}),d("div",{className:"buttons",children:[d("button",{onPointerUp:E,children:"Close"}),d("button",{onPointerUp:y,disabled:J.value||!!v,children:"Save"}),d("button",{onPointerUp:f,disabled:!!v,children:"Update"}),d("button",{onPointerUp:$,children:"Reset to Default"})]})]})})},on=Qt()??Ue;function rn(){const e=me(null),t=me(on),n=()=>{if(P.value=null,e.current===null){const{updateMillSeconds:s}=t.current;e.current=setInterval(u,s)}},i=()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},o=H(()=>{i(),G.value=!0},[]),r=H(()=>{n(),G.value=!1},[]),l=H(s=>{t.current=s,O.value=s.initialValue,P.value=null,console.info("Update Config to ",s),G.value=!1,n()},[]),u=()=>{const{delta:s,deltaDecrease:a,deltaIncrease:p,max:_,min:h}=t.current,f=Math.round(Math.random()*s*(p+a)-s*a),y=Math.round(O.value+f);y>_?O.value=_:y<h?O.value=h:O.value=y};return wt(()=>(n(),()=>{i()}),[]),d(C,{children:[G.value&&d(nn,{closeConfig:r,updateConfig:l,...t.current}),d("div",{className:"container",children:d(Rt,{openConfig:o})})]})}kt(d(rn,{}),document.getElementById("app"));
