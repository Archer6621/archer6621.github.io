import{c as o,h as v,g as Q,a9 as fe,b as D,I as ve,J as ge,B as ae,O as me,r as H,o as he,T as be,w as ye,s as P,l as pe,A as ke}from"./index.262c9c48.js";import{c as F,h as xe,a as z,f as qe}from"./render.b34a7442.js";const V={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function ie(e,t=V){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const U="0 0 24 24",W=e=>e,K=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":K,"ion-ios":K,"ion-logo":K,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(ue).join("|")+")"),Ee=new RegExp("^("+Object.keys(le).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,we=/^img:/,Re=/^svguse:/,Be=/^ion-/,Ce=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var J=F({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Q(),a=ie(e),l=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,r=e.name;if(r==="none"||!r)return{none:!0};if(n.iconMapFn!==null){const s=n.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Se.test(r)===!0){const[s,y=U]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[p,h,k]=u.split("@@");return v("path",{style:h,d:p,transform:k})})}}if(we.test(r)===!0)return{img:!0,src:r.substring(4)};if(Re.test(r)===!0){const[s,y=U]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const b=r.match($e);if(b!==null)c=ue[b[1]](r);else if(Ce.test(r)===!0)c=r;else if(Be.test(r)===!0)c=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(X.test(r)===!0){c="notranslate material-symbols";const s=r.match(X);s!==null&&(r=r.substring(6),c+=se[s[1]]),q=r}else{c="notranslate material-icons";const s=r.match(Ee);s!==null&&(r=r.substring(2),c+=le[s[1]]),q=r}return{cls:c,content:q}});return()=>{const c={class:l.value,style:a.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,xe(t.default)):f.value.img===!0?v("span",c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});function Le(e,t){const n=e.style;for(const a in t)n[a]=t[a]}function Ze(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=fe(e);if(t)return t.$el||t}function et(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function _e(e,t=250){let n=!1,a;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),a=e.apply(this,arguments)),a}}function Y(e,t,n,a){n.modifiers.stop===!0&&ae(e);const l=n.modifiers.color;let f=n.modifiers.center;f=f===!0||a===!0;const c=document.createElement("span"),r=document.createElement("span"),q=me(e),{left:b,top:s,width:y,height:u}=t.getBoundingClientRect(),p=Math.sqrt(y*y+u*u),h=p/2,k=`${(y-p)/2}px`,d=f?k:`${q.left-b-h}px`,x=`${(u-p)/2}px`,_=f?x:`${q.top-s-h}px`;r.className="q-ripple__inner",Le(r,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${d},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${l?" text-"+l:""}`,c.setAttribute("dir","ltr"),c.appendChild(r),t.appendChild(c);const C=()=>{c.remove(),clearTimeout(L)};n.abort.push(C);let L=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${k},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,L=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,L=setTimeout(()=>{c.remove(),n.abort.splice(n.abort.indexOf(C),1)},275)},250)},50)}function G(e,{modifiers:t,value:n,arg:a}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||a,keyCodes:[].concat(l.keyCodes||13)}}var Pe=qe({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const a={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(l){a.enabled===!0&&l.qSkipRipple!==!0&&l.type===(a.modifiers.early===!0?"pointerdown":"click")&&Y(l,e,a,l.qKeyEvent===!0)},keystart:_e(l=>{a.enabled===!0&&l.qSkipRipple!==!0&&D(l,a.modifiers.keyCodes)===!0&&l.type===`key${a.modifiers.early===!0?"down":"up"}`&&Y(l,e,a,!0)},300)};G(a,t),e.__qripple=a,ve(a,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&G(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),ge(t,"main"),delete e._qripple)}});function tt(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function oe(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{oe(e,n)}):e.add(t)}function nt(e){const t=new Set;return e.forEach(n=>{oe(t,n)}),Array.from(t)}function Ae(e){return e.appContext.config.globalProperties.$router!==void 0}function at(e){return e.isUnmounted===!0||e.isDeactivated===!0}const Oe={size:{type:[Number,String],default:"1em"},color:String};function Te(e){return{cSize:o(()=>e.size in V?`${V[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var je=F({name:"QSpinner",props:{...Oe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Te(e);return()=>v("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Me=Object.keys(ce),ze={align:{type:String,validator:e=>Me.includes(e)}};function Ne(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ie(e,t){for(const n in t){const a=t[n],l=e[n];if(typeof a=="string"){if(a!==l)return!1}else if(Array.isArray(l)===!1||l.length!==a.length||a.some((f,c)=>f!==l[c]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Ke(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function De(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Ke(e[n],t[n])===!1)return!1;return!0}const Ve={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Qe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=Q(),{props:a,proxy:l,emit:f}=n,c=Ae(n),r=o(()=>a.disable!==!0&&a.href!==void 0),q=t===!0?o(()=>c===!0&&a.disable!==!0&&r.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""):o(()=>c===!0&&r.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""),b=o(()=>q.value===!0?_(a.to):null),s=o(()=>b.value!==null),y=o(()=>r.value===!0||s.value===!0),u=o(()=>a.type==="a"||y.value===!0?"a":a.tag||e||"div"),p=o(()=>r.value===!0?{href:a.href,target:a.target}:s.value===!0?{href:b.value.href,target:a.target}:{}),h=o(()=>{if(s.value===!1)return-1;const{matched:g}=b.value,{length:$}=g,S=g[$-1];if(S===void 0)return-1;const R=l.$route.matched;if(R.length===0)return-1;const B=R.findIndex(ee.bind(null,S));if(B>-1)return B;const N=Z(g[$-2]);return $>1&&Z(S)===N&&R[R.length-1].path!==N?R.findIndex(ee.bind(null,g[$-2])):B}),k=o(()=>s.value===!0&&h.value!==-1&&Ie(l.$route.params,b.value.params)),d=o(()=>k.value===!0&&h.value===l.$route.matched.length-1&&De(l.$route.params,b.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${a.exactActiveClass} ${a.activeClass}`:a.exact===!0?"":k.value===!0?` ${a.activeClass}`:"":"");function _(g){try{return l.$router.resolve(g)}catch{}return null}function C(g,{returnRouterError:$,to:S=a.to,replace:R=a.replace}={}){if(a.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||a.target==="_blank")return Promise.resolve(!1);g.preventDefault();const B=l.$router[R===!0?"replace":"push"](S);return $===!0?B:B.then(()=>{}).catch(()=>{})}function L(g){if(s.value===!0){const $=S=>C(g,S);f("click",g,$),g.defaultPrevented!==!0&&$()}else f("click",g)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:u,resolvedLink:b,linkIsActive:k,linkIsExactActive:d,linkClass:x,linkAttrs:p,getLink:_,navigateToRouterLink:C,navigateOnClick:L}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Fe={xs:8,sm:10,md:14,lg:20,xl:24},He=["button","submit","reset"],Ue=/[^\s]\/[^\s]/,We=["flat","outline","push","unelevated"],de=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,rt=e=>{const t=de(e);return t!==void 0?{[t]:!0}:{}},Xe={...re,...Ve,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...We.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ze.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Je(e){const t=ie(e,Fe),n=Ne(e),{hasRouterLink:a,hasLink:l,linkTag:f,linkAttrs:c,navigateOnClick:r}=Qe({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),b=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),u=o(()=>de(e,"standard")),p=o(()=>{const d={tabindex:y.value};return l.value===!0?Object.assign(d,c.value):He.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),a.value!==!0&&Ue.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),h=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:k,attributes:p,hasLink:l,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:E}=pe;let A=null,O=null,T=null;var it=F({name:"QBtn",props:{...Xe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:a}=Q(),{classes:l,style:f,innerClasses:c,attributes:r,hasLink:q,linkTag:b,navigateOnClick:s,isActionable:y}=Je(e),u=H(null),p=H(null);let h=null,k,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=o(()=>({center:e.round})),L=o(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),g=o(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(y.value===!0){const i={onClick:S,onKeydown:R,onMousedown:N};if(a.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";i[`onTouchstart${m}`]=B}return i}return{onClick:P}}),$=o(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:f.value,...r.value,...g.value}));function S(i){if(u.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&u.value.contains(m)===!1&&m.contains(u.value)===!1){u.value.focus();const I=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",I,E),u.value!==null&&u.value.removeEventListener("blur",I,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",I,E),u.value.addEventListener("blur",I,E)}}s(i)}}function R(i){u.value!==null&&(n("keydown",i),D(i,[13,32])===!0&&O!==u.value&&(O!==null&&j(),i.defaultPrevented!==!0&&(u.value.focus(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,E)),P(i)))}function B(i){u.value!==null&&(n("touchstart",i),i.defaultPrevented!==!0&&(A!==u.value&&(A!==null&&j(),A=u.value,h=i.target,h.addEventListener("touchcancel",w,E),h.addEventListener("touchend",w,E)),k=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,k=!1},200)))}function N(i){u.value!==null&&(i.qSkipRipple=k===!0,n("mousedown",i),i.defaultPrevented!==!0&&T!==u.value&&(T!==null&&j(),T=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(i){if(u.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===u.value)){if(i!==void 0&&i.type==="keyup"){if(O===u.value&&D(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&ke(m),i.cancelBubble===!0&&ae(m),u.value.dispatchEvent(m),P(i),i.qKeyEvent=!0}n("keyup",i)}j()}}function j(i){const m=p.value;i!==!0&&(A===u.value||T===u.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),A===u.value&&(h!==null&&(h.removeEventListener("touchcancel",w,E),h.removeEventListener("touchend",w,E)),A=h=null),T===u.value&&(document.removeEventListener("mouseup",w,E),T=null),O===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,E),O=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function M(i){P(i),i.qSkipRipple=!0}return he(()=>{j(!0)}),Object.assign(a,{click:S}),()=>{let i=[];e.icon!==void 0&&i.push(v(J,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=z(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(J,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:L.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},i)),e.loading!==null&&m.push(v(be,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(je)])]:null)),ye(v(b.value,$.value,m),[[Pe,_.value,void 0,C.value]])}}});export{J as Q,Pe as R,ie as a,je as b,Ve as c,Qe as d,Ae as e,Ze as f,tt as g,Le as h,et as i,it as j,rt as k,nt as l,ze as m,Ne as n,_e as t,re as u,at as v};
