(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))n(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function i(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerPolicy&&(o.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?o.credentials="include":_.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(_){if(_.ep)return;_.ep=!0;const o=i(_);fetch(_.href,o)}})();var Y,v,Nt,Tt,U,mt,At,it,ut,nt,_t,I={},Ft=[],Zt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ct=Array.isArray;function E(e,t){for(var i in t)e[i]=t[i];return e}function Ot(e){var t=e.parentNode;t&&t.removeChild(e)}function te(e,t,i){var n,_,o,f={};for(o in t)o=="key"?n=t[o]:o=="ref"?_=t[o]:f[o]=t[o];if(arguments.length>2&&(f.children=arguments.length>3?Y.call(arguments,2):i),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)f[o]===void 0&&(f[o]=e.defaultProps[o]);return z(e,f,n,_,null)}function z(e,t,i,n,_){var o={type:e,props:t,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_??++Nt,__i:-1,__u:0};return _==null&&v.vnode!=null&&v.vnode(o),o}function W(e){return e.children}function D(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__i+1):null;for(var i;t<e.__k.length;t++)if((i=e.__k[t])!=null&&i.__e!=null)return i.__e;return typeof e.type=="function"?H(e):null}function Dt(e){var t,i;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((i=e.__k[t])!=null&&i.__e!=null){e.__e=e.__c.base=i.__e;break}return Dt(e)}}function gt(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!J.__r++||mt!==v.debounceRendering)&&((mt=v.debounceRendering)||At)(J)}function J(){var e,t,i,n,_,o,f,s;for(U.sort(it);e=U.shift();)e.__d&&(t=U.length,n=void 0,o=(_=(i=e).__v).__e,f=[],s=[],i.__P&&((n=E({},_)).__v=_.__v+1,v.vnode&&v.vnode(n),lt(i.__P,n,_,i.__n,i.__P.namespaceURI,32&_.__u?[o]:null,f,o??H(_),!!(32&_.__u),s),n.__v=_.__v,n.__.__k[n.__i]=n,Wt(f,n,s),n.__e!=o&&Dt(n)),U.length>t&&U.sort(it));J.__r=0}function Mt(e,t,i,n,_,o,f,s,c,u,a){var r,$,l,m,k,g=n&&n.__k||Ft,p=t.length;for(i.__d=c,ee(i,t,g),c=i.__d,r=0;r<p;r++)(l=i.__k[r])!=null&&typeof l!="boolean"&&typeof l!="function"&&($=l.__i===-1?I:g[l.__i]||I,l.__i=r,lt(e,l,$,_,o,f,s,c,u,a),m=l.__e,l.ref&&$.ref!=l.ref&&($.ref&&at($.ref,null,l),a.push(l.ref,l.__c||m,l)),k==null&&m!=null&&(k=m),65536&l.__u||$.__k===l.__k?(c&&typeof l.type=="string"&&!e.contains(c)&&(c=H($)),c=It(l,c,e)):typeof l.type=="function"&&l.__d!==void 0?c=l.__d:m&&(c=m.nextSibling),l.__d=void 0,l.__u&=-196609);i.__d=c,i.__e=k}function ee(e,t,i){var n,_,o,f,s,c=t.length,u=i.length,a=u,r=0;for(e.__k=[],n=0;n<c;n++)f=n+r,(_=e.__k[n]=(_=t[n])==null||typeof _=="boolean"||typeof _=="function"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"||_.constructor==String?z(null,_,null,null,null):ct(_)?z(W,{children:_},null,null,null):_.constructor===void 0&&_.__b>0?z(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null?(_.__=e,_.__b=e.__b+1,s=ie(_,i,f,a),_.__i=s,o=null,s!==-1&&(a--,(o=i[s])&&(o.__u|=131072)),o==null||o.__v===null?(s==-1&&r--,typeof _.type!="function"&&(_.__u|=65536)):s!==f&&(s==f-1?r=s-f:s==f+1?r++:s>f?a>c-f?r+=s-f:r--:s<f&&r++,s!==n+r&&(_.__u|=65536))):(o=i[f])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=H(o)),ot(o,o,!1),i[f]=null,a--);if(a)for(n=0;n<u;n++)(o=i[n])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=H(o)),ot(o,o))}function It(e,t,i){var n,_;if(typeof e.type=="function"){for(n=e.__k,_=0;n&&_<n.length;_++)n[_]&&(n[_].__=e,t=It(n[_],t,i));return t}e.__e!=t&&(i.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function ie(e,t,i,n){var _=e.key,o=e.type,f=i-1,s=i+1,c=t[i];if(c===null||c&&_==c.key&&o===c.type&&!(131072&c.__u))return i;if(n>(c!=null&&!(131072&c.__u)?1:0))for(;f>=0||s<t.length;){if(f>=0){if((c=t[f])&&!(131072&c.__u)&&_==c.key&&o===c.type)return f;f--}if(s<t.length){if((c=t[s])&&!(131072&c.__u)&&_==c.key&&o===c.type)return s;s++}}return-1}function bt(e,t,i){t[0]==="-"?e.setProperty(t,i??""):e[t]=i==null?"":typeof i!="number"||Zt.test(t)?i:i+"px"}function V(e,t,i,n,_){var o;t:if(t==="style")if(typeof i=="string")e.style.cssText=i;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)i&&t in i||bt(e.style,t,"");if(i)for(t in i)n&&i[t]===n[t]||bt(e.style,t,i[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=i,i?n?i.u=n.u:(i.u=ut,e.addEventListener(t,o?_t:nt,o)):e.removeEventListener(t,o?_t:nt,o);else{if(_=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=i??"";break t}catch{}typeof i=="function"||(i==null||i===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&i==1?"":i))}}function $t(e){return function(t){if(this.l){var i=this.l[t.type+e];if(t.t==null)t.t=ut++;else if(t.t<i.u)return;return i(v.event?v.event(t):t)}}}function lt(e,t,i,n,_,o,f,s,c,u){var a,r,$,l,m,k,g,p,d,F,P,j,O,yt,q,Z,x=t.type;if(t.constructor!==void 0)return null;128&i.__u&&(c=!!(32&i.__u),o=[s=t.__e=i.__e]),(a=v.__b)&&a(t);t:if(typeof x=="function")try{if(p=t.props,d="prototype"in x&&x.prototype.render,F=(a=x.contextType)&&n[a.__c],P=a?F?F.props.value:a.__:n,i.__c?g=(r=t.__c=i.__c).__=r.__E:(d?t.__c=r=new x(p,P):(t.__c=r=new D(p,P),r.constructor=x,r.render=_e),F&&F.sub(r),r.props=p,r.state||(r.state={}),r.context=P,r.__n=n,$=r.__d=!0,r.__h=[],r._sb=[]),d&&r.__s==null&&(r.__s=r.state),d&&x.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=E({},r.__s)),E(r.__s,x.getDerivedStateFromProps(p,r.__s))),l=r.props,m=r.state,r.__v=t,$)d&&x.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),d&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(d&&x.getDerivedStateFromProps==null&&p!==l&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(p,P),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(p,r.__s,P)===!1||t.__v===i.__v)){for(t.__v!==i.__v&&(r.props=p,r.state=r.__s,r.__d=!1),t.__e=i.__e,t.__k=i.__k,t.__k.forEach(function(R){R&&(R.__=t)}),j=0;j<r._sb.length;j++)r.__h.push(r._sb[j]);r._sb=[],r.__h.length&&f.push(r);break t}r.componentWillUpdate!=null&&r.componentWillUpdate(p,r.__s,P),d&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(l,m,k)})}if(r.context=P,r.props=p,r.__P=e,r.__e=!1,O=v.__r,yt=0,d){for(r.state=r.__s,r.__d=!1,O&&O(t),a=r.render(r.props,r.state,r.context),q=0;q<r._sb.length;q++)r.__h.push(r._sb[q]);r._sb=[]}else do r.__d=!1,O&&O(t),a=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++yt<25);r.state=r.__s,r.getChildContext!=null&&(n=E(E({},n),r.getChildContext())),d&&!$&&r.getSnapshotBeforeUpdate!=null&&(k=r.getSnapshotBeforeUpdate(l,m)),Mt(e,ct(Z=a!=null&&a.type===W&&a.key==null?a.props.children:a)?Z:[Z],t,i,n,_,o,f,s,c,u),r.base=t.__e,t.__u&=-161,r.__h.length&&f.push(r),g&&(r.__E=r.__=null)}catch(R){t.__v=null,c||o!=null?(t.__e=s,t.__u|=c?160:32,o[o.indexOf(s)]=null):(t.__e=i.__e,t.__k=i.__k),v.__e(R,t,i)}else o==null&&t.__v===i.__v?(t.__k=i.__k,t.__e=i.__e):t.__e=ne(i.__e,t,i,n,_,o,f,c,u);(a=v.diffed)&&a(t)}function Wt(e,t,i){t.__d=void 0;for(var n=0;n<i.length;n++)at(i[n],i[++n],i[++n]);v.__c&&v.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(o){o.call(_)})}catch(o){v.__e(o,_.__v)}})}function ne(e,t,i,n,_,o,f,s,c){var u,a,r,$,l,m,k,g=i.props,p=t.props,d=t.type;if(d==="svg"?_="http://www.w3.org/2000/svg":d==="math"?_="http://www.w3.org/1998/Math/MathML":_||(_="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((l=o[u])&&"setAttribute"in l==!!d&&(d?l.localName===d:l.nodeType===3)){e=l,o[u]=null;break}}if(e==null){if(d===null)return document.createTextNode(p);e=document.createElementNS(_,d,p.is&&p),o=null,s=!1}if(d===null)g===p||s&&e.data===p||(e.data=p);else{if(o=o&&Y.call(e.childNodes),g=i.props||I,!s&&o!=null)for(g={},u=0;u<e.attributes.length;u++)g[(l=e.attributes[u]).name]=l.value;for(u in g)if(l=g[u],u!="children"){if(u=="dangerouslySetInnerHTML")r=l;else if(u!=="key"&&!(u in p)){if(u=="value"&&"defaultValue"in p||u=="checked"&&"defaultChecked"in p)continue;V(e,u,null,l,_)}}for(u in p)l=p[u],u=="children"?$=l:u=="dangerouslySetInnerHTML"?a=l:u=="value"?m=l:u=="checked"?k=l:u==="key"||s&&typeof l!="function"||g[u]===l||V(e,u,l,g[u],_);if(a)s||r&&(a.__html===r.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),t.__k=[];else if(r&&(e.innerHTML=""),Mt(e,ct($)?$:[$],t,i,n,d==="foreignObject"?"http://www.w3.org/1999/xhtml":_,o,f,o?o[0]:i.__k&&H(i,0),s,c),o!=null)for(u=o.length;u--;)o[u]!=null&&Ot(o[u]);s||(u="value",m!==void 0&&(m!==e[u]||d==="progress"&&!m||d==="option"&&m!==g[u])&&V(e,u,m,g[u],_),u="checked",k!==void 0&&k!==e[u]&&V(e,u,k,g[u],_))}return e}function at(e,t,i){try{typeof e=="function"?e(t):e.current=t}catch(n){v.__e(n,i)}}function ot(e,t,i){var n,_;if(v.unmount&&v.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||at(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){v.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(_=0;_<n.length;_++)n[_]&&ot(n[_],t,i||typeof e.type!="function");i||e.__e==null||Ot(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function _e(e,t,i){return this.constructor(e,i)}function oe(e,t,i){var n,_,o,f;v.__&&v.__(e,t),_=(n=typeof i=="function")?null:t.__k,o=[],f=[],lt(t,e=(!n&&i||t).__k=te(W,null,[e]),_||I,I,t.namespaceURI,!n&&i?[i]:_?null:t.firstChild?Y.call(t.childNodes):null,o,!n&&i?i:_?_.__e:t.firstChild,n,f),Wt(o,e,f)}Y=Ft.slice,v={__e:function(e,t,i,n){for(var _,o,f;t=t.__;)if((_=t.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(e)),f=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e,n||{}),f=_.__d),f)return _.__E=_}catch(s){e=s}throw e}},Nt=0,Tt=function(e){return e!=null&&e.constructor==null},D.prototype.setState=function(e,t){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},i),this.props)),e&&E(i,e),e!=null&&this.__v&&(t&&this._sb.push(t),gt(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),gt(this))},D.prototype.render=W,U=[],At=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,it=function(e,t){return e.__v.__b-t.__v.__b},J.__r=0,ut=0,nt=$t(!1),_t=$t(!0);var re=0;function S(e,t,i,n,_,o){t||(t={});var f,s,c=t;if("ref"in c)for(s in c={},t)s=="ref"?f=t[s]:c[s]=t[s];var u={type:e,props:c,key:i,ref:f,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--re,__i:-1,__u:0,__source:_,__self:o};if(typeof e=="function"&&(f=e.defaultProps))for(s in f)c[s]===void 0&&(c[s]=f[s]);return v.vnode&&v.vnode(u),u}var K,w,tt,wt,kt=0,Bt=[],y=v,St=y.__b,xt=y.__r,Pt=y.diffed,Et=y.__c,Ut=y.unmount,Ht=y.__;function jt(e,t){y.__h&&y.__h(w,e,kt||t),kt=0;var i=w.__H||(w.__H={__:[],__h:[]});return e>=i.__.length&&i.__.push({}),i.__[e]}function fe(e,t){var i=jt(K++,3);!y.__s&&Rt(i.__H,t)&&(i.__=e,i.i=t,w.__H.__h.push(i))}function qt(e,t){var i=jt(K++,7);return Rt(i.__H,t)&&(i.__=e(),i.__H=t,i.__h=e),i.__}function se(){for(var e;e=Bt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(G),e.__H.__h.forEach(rt),e.__H.__h=[]}catch(t){e.__H.__h=[],y.__e(t,e.__v)}}y.__b=function(e){w=null,St&&St(e)},y.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ht&&Ht(e,t)},y.__r=function(e){xt&&xt(e),K=0;var t=(w=e.__c).__H;t&&(tt===w?(t.__h=[],w.__h=[],t.__.forEach(function(i){i.__N&&(i.__=i.__N),i.i=i.__N=void 0})):(t.__h.forEach(G),t.__h.forEach(rt),t.__h=[],K=0)),tt=w},y.diffed=function(e){Pt&&Pt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Bt.push(t)!==1&&wt===y.requestAnimationFrame||((wt=y.requestAnimationFrame)||ue)(se)),t.__H.__.forEach(function(i){i.i&&(i.__H=i.i),i.i=void 0})),tt=w=null},y.__c=function(e,t){t.some(function(i){try{i.__h.forEach(G),i.__h=i.__h.filter(function(n){return!n.__||rt(n)})}catch(n){t.some(function(_){_.__h&&(_.__h=[])}),t=[],y.__e(n,i.__v)}}),Et&&Et(e,t)},y.unmount=function(e){Ut&&Ut(e);var t,i=e.__c;i&&i.__H&&(i.__H.__.forEach(function(n){try{G(n)}catch(_){t=_}}),i.__H=void 0,t&&y.__e(t,i.__v))};var Ct=typeof requestAnimationFrame=="function";function ue(e){var t,i=function(){clearTimeout(n),Ct&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(i,100);Ct&&(t=requestAnimationFrame(i))}function G(e){var t=w,i=e.__c;typeof i=="function"&&(e.__c=void 0,i()),w=t}function rt(e){var t=w;e.__c=e.__(),w=t}function Rt(e,t){return!e||e.length!==t.length||t.some(function(i,n){return i!==e[n]})}var ce=Symbol.for("preact-signals");function ht(){if(L>1)L--;else{for(var e,t=!1;M!==void 0;){var i=M;for(M=void 0,ft++;i!==void 0;){var n=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&zt(i))try{i.c()}catch(_){t||(e=_,t=!0)}i=n}}if(ft=0,L--,t)throw e}}var h=void 0,M=void 0,L=0,ft=0,Q=0;function Vt(e){if(h!==void 0){var t=e.n;if(t===void 0||t.t!==h)return t={i:0,S:e,p:h.s,n:void 0,t:h,e:void 0,x:void 0,r:t},h.s!==void 0&&(h.s.n=t),h.s=t,e.n=t,32&h.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=h.s,t.n=void 0,h.s.n=t,h.s=t),t}}function b(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}b.prototype.brand=ce;b.prototype.h=function(){return!0};b.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};b.prototype.U=function(e){if(this.t!==void 0){var t=e.e,i=e.x;t!==void 0&&(t.x=i,e.e=void 0),i!==void 0&&(i.e=t,e.x=void 0),e===this.t&&(this.t=i)}};b.prototype.subscribe=function(e){var t=this;return pt(function(){var i=t.value,n=h;h=void 0;try{e(i)}finally{h=n}})};b.prototype.valueOf=function(){return this.value};b.prototype.toString=function(){return this.value+""};b.prototype.toJSON=function(){return this.value};b.prototype.peek=function(){var e=h;h=void 0;try{return this.value}finally{h=e}};Object.defineProperty(b.prototype,"value",{get:function(){var e=Vt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(ft>100)throw new Error("Cycle detected");this.v=e,this.i++,Q++,L++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{ht()}}}});function C(e){return new b(e)}function zt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Gt(e){for(var t=e.s;t!==void 0;t=t.n){var i=t.S.n;if(i!==void 0&&(t.r=i),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Jt(e){for(var t=e.s,i=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):i=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=i}function T(e){b.call(this,void 0),this.x=e,this.s=void 0,this.g=Q-1,this.f=4}(T.prototype=new b).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Q))return!0;if(this.g=Q,this.f|=1,this.i>0&&!zt(this))return this.f&=-2,!0;var e=h;try{Gt(this),h=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return h=e,Jt(this),this.f&=-2,!0};T.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}b.prototype.S.call(this,e)};T.prototype.U=function(e){if(this.t!==void 0&&(b.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};T.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(T.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Vt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function le(e){return new T(e)}function Kt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){L++;var i=h;h=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,vt(e),n}finally{h=i,ht()}}}function vt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Kt(e)}function ae(e){if(h!==this)throw new Error("Out-of-order effect");Jt(this),h=e,this.f&=-2,8&this.f&&vt(this),ht()}function B(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}B.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};B.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Kt(this),Gt(this),L++;var e=h;return h=this,ae.bind(this,e)};B.prototype.N=function(){2&this.f||(this.f|=2,this.o=M,M=this)};B.prototype.d=function(){this.f|=8,1&this.f||vt(this)};function pt(e){var t=new B(e);try{t.c()}catch(i){throw t.d(),i}return t.d.bind(t)}var et;function A(e,t){v[e]=t.bind(null,v[e]||function(){})}function X(e){et&&et(),et=e&&e.S()}function Qt(e){var t=this,i=e.data,n=ve(i);n.value=i;var _=qt(function(){for(var o=t.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return t.__$u.c=function(){var f;!Tt(_.peek())&&((f=t.base)==null?void 0:f.nodeType)===3?t.base.data=_.peek():(t.__$f|=1,t.setState({}))},le(function(){var f=n.value.value;return f===0?0:f===!0?"":f||""})},[]);return _.value}Qt.displayName="_st";Object.defineProperties(b.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Qt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});A("__b",function(e,t){if(typeof t.type=="string"){var i,n=t.props;for(var _ in n)if(_!=="children"){var o=n[_];o instanceof b&&(i||(t.__np=i={}),i[_]=o,n[_]=o.peek())}}e(t)});A("__r",function(e,t){X();var i,n=t.__c;n&&(n.__$f&=-2,(i=n.__$u)===void 0&&(n.__$u=i=function(_){var o;return pt(function(){o=this}),o.c=function(){n.__$f|=1,n.setState({})},o}())),X(i),e(t)});A("__e",function(e,t,i,n){X(),e(t,i,n)});A("diffed",function(e,t){X();var i;if(typeof t.type=="string"&&(i=t.__e)){var n=t.__np,_=t.props;if(n){var o=i.U;if(o)for(var f in o){var s=o[f];s!==void 0&&!(f in n)&&(s.d(),o[f]=void 0)}else i.U=o={};for(var c in n){var u=o[c],a=n[c];u===void 0?(u=he(i,c,a,_),o[c]=u):u.o(a,_)}}}e(t)});function he(e,t,i,n){var _=t in e&&e.ownerSVGElement===void 0,o=C(i);return{o:function(f,s){o.value=f,n=s},d:pt(function(){var f=o.value.value;n[t]!==f&&(n[t]=f,_?e[t]=f:f?e.setAttribute(t,f):e.removeAttribute(t))})}}A("unmount",function(e,t){if(typeof t.type=="string"){var i=t.__e;if(i){var n=i.U;if(n){i.U=void 0;for(var _ in n){var o=n[_];o&&o.d()}}}}else{var f=t.__c;if(f){var s=f.__$u;s&&(f.__$u=void 0,s.d())}}e(t)});A("__h",function(e,t,i,n){(n<3||n===9)&&(t.__$f|=2),e(t,i,n)});D.prototype.shouldComponentUpdate=function(e,t){var i=this.__$u;if(!(i&&i.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var n in t)return!0;for(var _ in e)if(_!=="__source"&&e[_]!==this.props[_])return!0;for(var o in this.props)if(!(o in e))return!0;return!1};function ve(e){return qt(function(){return C(e)},[])}const N=C(!1),st=C("visible"),Xt=C("unknown"),dt=C("N/A"),Yt=C("N/A"),pe=()=>{if(!N.value){const e=new Date().toLocaleString();N.value=!0,dt.value=e,Yt.value=e}},Lt=()=>{const e=document.visibilityState;if(Xt.value=st.value,st.value=e,N.value){const t=new Date().toLocaleString();N.value=!document.hidden,dt.value=t}};function de(){return fe(()=>(document.addEventListener("visibilitychange",Lt),()=>{document.removeEventListener("visibilitychange",Lt)}),[]),S(W,{children:[S("section",{children:[S("h3",{children:`Flag: ${N}`}),S("p",{children:["This flag becomes true when click button.",S("br",{}),"Also, it becomes false when document visibility gets hidden."]}),S("p",{children:["Last flag update: ",dt]})]}),S("section",{children:S("h3",{children:`Document visibility: ${Xt} => ${st}`})}),S("button",{onPointerUp:pe,disabled:N.value,children:"Set flag to true"}),S("p",{children:["Last clicked: ",Yt]})]})}oe(S(de,{}),document.getElementById("app"));