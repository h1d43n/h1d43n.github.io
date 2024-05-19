(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function _(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=_(n);fetch(n.href,o)}})();var X,v,At,Nt,P,dt,Ut,et,ft,_t,it,L={},Ct=[],Kt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,st=Array.isArray;function E(e,t){for(var _ in t)e[_]=t[_];return e}function Mt(e){var t=e.parentNode;t&&t.removeChild(e)}function Xt(e,t,_){var i,n,o,f={};for(o in t)o=="key"?i=t[o]:o=="ref"?n=t[o]:f[o]=t[o];if(arguments.length>2&&(f.children=arguments.length>3?X.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)f[o]===void 0&&(f[o]=e.defaultProps[o]);return W(e,f,i,n,null)}function W(e,t,_,i,n){var o={type:e,props:t,key:_,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++At,__i:-1,__u:0};return n==null&&v.vnode!=null&&v.vnode(o),o}function Q(e){return e.children}function M(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__i+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?H(e):null}function Ft(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return Ft(e)}}function yt(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!z.__r++||dt!==v.debounceRendering)&&((dt=v.debounceRendering)||Ut)(z)}function z(){var e,t,_,i,n,o,f,s;for(P.sort(et);e=P.shift();)e.__d&&(t=P.length,i=void 0,o=(n=(_=e).__v).__e,f=[],s=[],_.__P&&((i=E({},n)).__v=n.__v+1,v.vnode&&v.vnode(i),ut(_.__P,i,n,_.__n,_.__P.namespaceURI,32&n.__u?[o]:null,f,o??H(n),!!(32&n.__u),s),i.__v=n.__v,i.__.__k[i.__i]=i,Dt(f,i,s),i.__e!=o&&Ft(i)),P.length>t&&P.sort(et));z.__r=0}function Lt(e,t,_,i,n,o,f,s,c,u,a){var r,$,l,y,S,m=i&&i.__k||Ct,p=t.length;for(_.__d=c,Qt(_,t,m),c=_.__d,r=0;r<p;r++)(l=_.__k[r])!=null&&typeof l!="boolean"&&typeof l!="function"&&($=l.__i===-1?L:m[l.__i]||L,l.__i=r,ut(e,l,$,n,o,f,s,c,u,a),y=l.__e,l.ref&&$.ref!=l.ref&&($.ref&&ct($.ref,null,l),a.push(l.ref,l.__c||y,l)),S==null&&y!=null&&(S=y),65536&l.__u||$.__k===l.__k?(c&&!c.isConnected&&(c=H($)),c=Ot(l,c,e)):typeof l.type=="function"&&l.__d!==void 0?c=l.__d:y&&(c=y.nextSibling),l.__d=void 0,l.__u&=-196609);_.__d=c,_.__e=S}function Qt(e,t,_){var i,n,o,f,s,c=t.length,u=_.length,a=u,r=0;for(e.__k=[],i=0;i<c;i++)f=i+r,(n=e.__k[i]=(n=t[i])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?W(null,n,null,null,null):st(n)?W(Q,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?W(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=e,n.__b=e.__b+1,s=Yt(n,_,f,a),n.__i=s,o=null,s!==-1&&(a--,(o=_[s])&&(o.__u|=131072)),o==null||o.__v===null?(s==-1&&r--,typeof n.type!="function"&&(n.__u|=65536)):s!==f&&(s===f+1?r++:s>f?a>c-f?r+=s-f:r--:s<f?s==f-1&&(r=s-f):r=0,s!==i+r&&(n.__u|=65536))):(o=_[f])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=H(o)),nt(o,o,!1),_[f]=null,a--);if(a)for(i=0;i<u;i++)(o=_[i])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=H(o)),nt(o,o))}function Ot(e,t,_){var i,n;if(typeof e.type=="function"){for(i=e.__k,n=0;i&&n<i.length;n++)i[n]&&(i[n].__=e,t=Ot(i[n],t,_));return t}e.__e!=t&&(_.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Yt(e,t,_,i){var n=e.key,o=e.type,f=_-1,s=_+1,c=t[_];if(c===null||c&&n==c.key&&o===c.type&&!(131072&c.__u))return _;if(i>(c!=null&&!(131072&c.__u)?1:0))for(;f>=0||s<t.length;){if(f>=0){if((c=t[f])&&!(131072&c.__u)&&n==c.key&&o===c.type)return f;f--}if(s<t.length){if((c=t[s])&&!(131072&c.__u)&&n==c.key&&o===c.type)return s;s++}}return-1}function mt(e,t,_){t[0]==="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||Kt.test(t)?_:_+"px"}function B(e,t,_,i,n){var o;t:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)_&&t in _||mt(e.style,t,"");if(_)for(t in _)i&&_[t]===i[t]||mt(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=_,_?i?_.u=i.u:(_.u=ft,e.addEventListener(t,o?it:_t,o)):e.removeEventListener(t,o?it:_t,o);else{if(n=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t in e)try{e[t]=_??"";break t}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,_))}}function gt(e){return function(t){if(this.l){var _=this.l[t.type+e];if(t.t==null)t.t=ft++;else if(t.t<_.u)return;return _(v.event?v.event(t):t)}}}function ut(e,t,_,i,n,o,f,s,c,u){var a,r,$,l,y,S,m,p,g,x,D,U,pt,I,Y,k=t.type;if(t.constructor!==void 0)return null;128&_.__u&&(c=!!(32&_.__u),o=[s=t.__e=_.__e]),(a=v.__b)&&a(t);t:if(typeof k=="function")try{if(p=t.props,g=(a=k.contextType)&&i[a.__c],x=a?g?g.props.value:a.__:i,_.__c?m=(r=t.__c=_.__c).__=r.__E:("prototype"in k&&k.prototype.render?t.__c=r=new k(p,x):(t.__c=r=new M(p,x),r.constructor=k,r.render=te),g&&g.sub(r),r.props=p,r.state||(r.state={}),r.context=x,r.__n=i,$=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=E({},r.__s)),E(r.__s,k.getDerivedStateFromProps(p,r.__s))),l=r.props,y=r.state,r.__v=t,$)k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k.getDerivedStateFromProps==null&&p!==l&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(p,x),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(p,r.__s,x)===!1||t.__v===_.__v)){for(t.__v!==_.__v&&(r.props=p,r.state=r.__s,r.__d=!1),t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(R){R&&(R.__=t)}),D=0;D<r._sb.length;D++)r.__h.push(r._sb[D]);r._sb=[],r.__h.length&&f.push(r);break t}r.componentWillUpdate!=null&&r.componentWillUpdate(p,r.__s,x),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(l,y,S)})}if(r.context=x,r.props=p,r.__P=e,r.__e=!1,U=v.__r,pt=0,"prototype"in k&&k.prototype.render){for(r.state=r.__s,r.__d=!1,U&&U(t),a=r.render(r.props,r.state,r.context),I=0;I<r._sb.length;I++)r.__h.push(r._sb[I]);r._sb=[]}else do r.__d=!1,U&&U(t),a=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++pt<25);r.state=r.__s,r.getChildContext!=null&&(i=E(E({},i),r.getChildContext())),$||r.getSnapshotBeforeUpdate==null||(S=r.getSnapshotBeforeUpdate(l,y)),Lt(e,st(Y=a!=null&&a.type===Q&&a.key==null?a.props.children:a)?Y:[Y],t,_,i,n,o,f,s,c,u),r.base=t.__e,t.__u&=-161,r.__h.length&&f.push(r),m&&(r.__E=r.__=null)}catch(R){t.__v=null,c||o!=null?(t.__e=s,t.__u|=c?160:32,o[o.indexOf(s)]=null):(t.__e=_.__e,t.__k=_.__k),v.__e(R,t,_)}else o==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=Zt(_.__e,t,_,i,n,o,f,c,u);(a=v.diffed)&&a(t)}function Dt(e,t,_){t.__d=void 0;for(var i=0;i<_.length;i++)ct(_[i],_[++i],_[++i]);v.__c&&v.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){v.__e(o,n.__v)}})}function Zt(e,t,_,i,n,o,f,s,c){var u,a,r,$,l,y,S,m=_.props,p=t.props,g=t.type;if(g==="svg"?n="http://www.w3.org/2000/svg":g==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((l=o[u])&&"setAttribute"in l==!!g&&(g?l.localName===g:l.nodeType===3)){e=l,o[u]=null;break}}if(e==null){if(g===null)return document.createTextNode(p);e=document.createElementNS(n,g,p.is&&p),o=null,s=!1}if(g===null)m===p||s&&e.data===p||(e.data=p);else{if(o=o&&X.call(e.childNodes),m=_.props||L,!s&&o!=null)for(m={},u=0;u<e.attributes.length;u++)m[(l=e.attributes[u]).name]=l.value;for(u in m)if(l=m[u],u!="children"){if(u=="dangerouslySetInnerHTML")r=l;else if(u!=="key"&&!(u in p)){if(u=="value"&&"defaultValue"in p||u=="checked"&&"defaultChecked"in p)continue;B(e,u,null,l,n)}}for(u in p)l=p[u],u=="children"?$=l:u=="dangerouslySetInnerHTML"?a=l:u=="value"?y=l:u=="checked"?S=l:u==="key"||s&&typeof l!="function"||m[u]===l||B(e,u,l,m[u],n);if(a)s||r&&(a.__html===r.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),t.__k=[];else if(r&&(e.innerHTML=""),Lt(e,st($)?$:[$],t,_,i,g==="foreignObject"?"http://www.w3.org/1999/xhtml":n,o,f,o?o[0]:_.__k&&H(_,0),s,c),o!=null)for(u=o.length;u--;)o[u]!=null&&Mt(o[u]);s||(u="value",y!==void 0&&(y!==e[u]||g==="progress"&&!y||g==="option"&&y!==m[u])&&B(e,u,y,m[u],n),u="checked",S!==void 0&&S!==e[u]&&B(e,u,S,m[u],n))}return e}function ct(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(i){v.__e(i,_)}}function nt(e,t,_){var i,n;if(v.unmount&&v.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||ct(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){v.__e(o,t)}i.base=i.__P=null}if(i=e.__k)for(n=0;n<i.length;n++)i[n]&&nt(i[n],t,_||typeof e.type!="function");_||e.__e==null||Mt(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function te(e,t,_){return this.constructor(e,_)}function ee(e,t,_){var i,n,o,f;v.__&&v.__(e,t),n=(i=typeof _=="function")?null:t.__k,o=[],f=[],ut(t,e=(!i&&_||t).__k=Xt(Q,null,[e]),n||L,L,t.namespaceURI,!i&&_?[_]:n?null:t.firstChild?X.call(t.childNodes):null,o,!i&&_?_:n?n.__e:t.firstChild,i,f),Dt(o,e,f)}X=Ct.slice,v={__e:function(e,t,_,i){for(var n,o,f;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(e)),f=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,i||{}),f=n.__d),f)return n.__E=n}catch(s){e=s}throw e}},At=0,Nt=function(e){return e!=null&&e.constructor==null},M.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},_),this.props)),e&&E(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),yt(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),yt(this))},M.prototype.render=Q,P=[],Ut=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,et=function(e,t){return e.__v.__b-t.__v.__b},z.__r=0,ft=0,_t=gt(!1),it=gt(!0);var G,w,Z,bt,$t=0,It=[],q=[],d=v,wt=d.__b,kt=d.__r,St=d.diffed,xt=d.__c,Et=d.unmount,Pt=d.__;function Rt(e,t){d.__h&&d.__h(w,e,$t||t),$t=0;var _=w.__H||(w.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:q}),_.__[e]}function _e(e,t){var _=Rt(G++,3);!d.__s&&Vt(_.__H,t)&&(_.__=e,_.i=t,w.__H.__h.push(_))}function Bt(e,t){var _=Rt(G++,7);return Vt(_.__H,t)?(_.__V=e(),_.i=t,_.__h=e,_.__V):_.__}function ie(){for(var e;e=It.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(j),e.__H.__h.forEach(ot),e.__H.__h=[]}catch(t){e.__H.__h=[],d.__e(t,e.__v)}}d.__b=function(e){w=null,wt&&wt(e)},d.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Pt&&Pt(e,t)},d.__r=function(e){kt&&kt(e),G=0;var t=(w=e.__c).__H;t&&(Z===w?(t.__h=[],w.__h=[],t.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=q,_.__N=_.i=void 0})):(t.__h.forEach(j),t.__h.forEach(ot),t.__h=[],G=0)),Z=w},d.diffed=function(e){St&&St(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(It.push(t)!==1&&bt===d.requestAnimationFrame||((bt=d.requestAnimationFrame)||ne)(ie)),t.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==q&&(_.__=_.__V),_.i=void 0,_.__V=q})),Z=w=null},d.__c=function(e,t){t.some(function(_){try{_.__h.forEach(j),_.__h=_.__h.filter(function(i){return!i.__||ot(i)})}catch(i){t.some(function(n){n.__h&&(n.__h=[])}),t=[],d.__e(i,_.__v)}}),xt&&xt(e,t)},d.unmount=function(e){Et&&Et(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(i){try{j(i)}catch(n){t=n}}),_.__H=void 0,t&&d.__e(t,_.__v))};var Ht=typeof requestAnimationFrame=="function";function ne(e){var t,_=function(){clearTimeout(i),Ht&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(_,100);Ht&&(t=requestAnimationFrame(_))}function j(e){var t=w,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),w=t}function ot(e){var t=w;e.__c=e.__(),w=t}function Vt(e,t){return!e||e.length!==t.length||t.some(function(_,i){return _!==e[i]})}var oe=Symbol.for("preact-signals");function lt(){if(T>1)T--;else{for(var e,t=!1;F!==void 0;){var _=F;for(F=void 0,rt++;_!==void 0;){var i=_.o;if(_.o=void 0,_.f&=-3,!(8&_.f)&&qt(_))try{_.c()}catch(n){t||(e=n,t=!0)}_=i}}if(rt=0,T--,t)throw e}}var h=void 0,F=void 0,T=0,rt=0,J=0;function Wt(e){if(h!==void 0){var t=e.n;if(t===void 0||t.t!==h)return t={i:0,S:e,p:h.s,n:void 0,t:h,e:void 0,x:void 0,r:t},h.s!==void 0&&(h.s.n=t),h.s=t,e.n=t,32&h.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=h.s,t.n=void 0,h.s.n=t,h.s=t),t}}function b(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}b.prototype.brand=oe;b.prototype.h=function(){return!0};b.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};b.prototype.U=function(e){if(this.t!==void 0){var t=e.e,_=e.x;t!==void 0&&(t.x=_,e.e=void 0),_!==void 0&&(_.e=t,e.x=void 0),e===this.t&&(this.t=_)}};b.prototype.subscribe=function(e){var t=this;return vt(function(){var _=t.value,i=h;h=void 0;try{e(_)}finally{h=i}})};b.prototype.valueOf=function(){return this.value};b.prototype.toString=function(){return this.value+""};b.prototype.toJSON=function(){return this.value};b.prototype.peek=function(){var e=h;h=void 0;try{return this.value}finally{h=e}};Object.defineProperty(b.prototype,"value",{get:function(){var e=Wt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(rt>100)throw new Error("Cycle detected");this.v=e,this.i++,J++,T++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{lt()}}}});function at(e){return new b(e)}function qt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function jt(e){for(var t=e.s;t!==void 0;t=t.n){var _=t.S.n;if(_!==void 0&&(t.r=_),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function zt(e){for(var t=e.s,_=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):_=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=_}function A(e){b.call(this,void 0),this.x=e,this.s=void 0,this.g=J-1,this.f=4}(A.prototype=new b).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===J))return!0;if(this.g=J,this.f|=1,this.i>0&&!qt(this))return this.f&=-2,!0;var e=h;try{jt(this),h=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(_){this.v=_,this.f|=16,this.i++}return h=e,zt(this),this.f&=-2,!0};A.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}b.prototype.S.call(this,e)};A.prototype.U=function(e){if(this.t!==void 0&&(b.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};A.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(A.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Wt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function re(e){return new A(e)}function Gt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){T++;var _=h;h=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,ht(e),i}finally{h=_,lt()}}}function ht(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Gt(e)}function fe(e){if(h!==this)throw new Error("Out-of-order effect");zt(this),h=e,this.f&=-2,8&this.f&&ht(this),lt()}function O(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}O.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};O.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Gt(this),jt(this),T++;var e=h;return h=this,fe.bind(this,e)};O.prototype.N=function(){2&this.f||(this.f|=2,this.o=F,F=this)};O.prototype.d=function(){this.f|=8,1&this.f||ht(this)};function vt(e){var t=new O(e);try{t.c()}catch(_){throw t.d(),_}return t.d.bind(t)}var tt;function N(e,t){v[e]=t.bind(null,v[e]||function(){})}function K(e){tt&&tt(),tt=e&&e.S()}function Jt(e){var t=this,_=e.data,i=ue(_);i.value=_;var n=Bt(function(){for(var o=t.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return t.__$u.c=function(){var f;!Nt(n.peek())&&((f=t.base)==null?void 0:f.nodeType)===3?t.base.data=n.peek():(t.__$f|=1,t.setState({}))},re(function(){var f=i.value.value;return f===0?0:f===!0?"":f||""})},[]);return n.value}Jt.displayName="_st";Object.defineProperties(b.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Jt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});N("__b",function(e,t){if(typeof t.type=="string"){var _,i=t.props;for(var n in i)if(n!=="children"){var o=i[n];o instanceof b&&(_||(t.__np=_={}),_[n]=o,i[n]=o.peek())}}e(t)});N("__r",function(e,t){K();var _,i=t.__c;i&&(i.__$f&=-2,(_=i.__$u)===void 0&&(i.__$u=_=function(n){var o;return vt(function(){o=this}),o.c=function(){i.__$f|=1,i.setState({})},o}())),K(_),e(t)});N("__e",function(e,t,_,i){K(),e(t,_,i)});N("diffed",function(e,t){K();var _;if(typeof t.type=="string"&&(_=t.__e)){var i=t.__np,n=t.props;if(i){var o=_.U;if(o)for(var f in o){var s=o[f];s!==void 0&&!(f in i)&&(s.d(),o[f]=void 0)}else _.U=o={};for(var c in i){var u=o[c],a=i[c];u===void 0?(u=se(_,c,a,n),o[c]=u):u.o(a,n)}}}e(t)});function se(e,t,_,i){var n=t in e&&e.ownerSVGElement===void 0,o=at(_);return{o:function(f,s){o.value=f,i=s},d:vt(function(){var f=o.value.value;i[t]!==f&&(i[t]=f,n?e[t]=f:f?e.setAttribute(t,f):e.removeAttribute(t))})}}N("unmount",function(e,t){if(typeof t.type=="string"){var _=t.__e;if(_){var i=_.U;if(i){_.U=void 0;for(var n in i){var o=i[n];o&&o.d()}}}}else{var f=t.__c;if(f){var s=f.__$u;s&&(f.__$u=void 0,s.d())}}e(t)});N("__h",function(e,t,_,i){(i<3||i===9)&&(t.__$f|=2),e(t,_,i)});M.prototype.shouldComponentUpdate=function(e,t){var _=this.__$u;if(!(_&&_.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in t)return!0;for(var n in e)if(n!=="__source"&&e[n]!==this.props[n])return!0;for(var o in this.props)if(!(o in e))return!0;return!1};function ue(e){return Bt(function(){return at(e)},[])}var ce=0;function C(e,t,_,i,n,o){t||(t={});var f,s,c=t;if("ref"in c)for(s in c={},t)s=="ref"?f=t[s]:c[s]=t[s];var u={type:e,props:c,key:_,ref:f,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ce,__i:-1,__u:0,__source:n,__self:o};if(typeof e=="function"&&(f=e.defaultProps))for(s in f)c[s]===void 0&&(c[s]=f[s]);return v.vnode&&v.vnode(u),u}const Tt=50,le=300,ae=60,he=100,ve=1*1e3,V=at(he);function pe(){return _e(()=>{const e=setInterval(()=>{const t=Math.round(Math.random()*Tt*2-Tt),_=Math.round(V.value+t);_>le||_<ae?V.value=_-t*2:V.value=_},ve);return()=>{clearInterval(e)}},[]),C("div",{className:"container",children:C("div",{className:"flex",children:[C("div",{className:"heart",children:"❤"}),C("div",{className:"beat",children:V.value})]})})}ee(C(pe,{}),document.getElementById("app"));
