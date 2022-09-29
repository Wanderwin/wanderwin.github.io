import{_ as ot}from"./preload-helper.1c052cf7.js";import{v as Ut,a as ht,c as Gt}from"./framework.412205eb.js";import{u as L,w as E,a as O,E as zt,i as V,p as kt,c as Jt,R as Wt,b as Yt,d as Xt,C as Qt,s as Zt}from"./Debug.vue_vue_type_style_index_0_scoped_true_lang.03de10d4.js";import{w as Q,d as b,o as l,c as u,u as r,a as _,b as j,t as g,e as v,f as i,g as st,h as P,m as $t,p as H,i as R,r as N,j as G,n as M,F as S,k as A,l as f,q as T,s as I,v as wt,x as z,y as U,z as W,A as Kt,B as F,C as D,D as et,E as Lt,G as te}from"./framework.6806ca9c.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";function ee(t,e){let n=[],o=!0;const s=a=>{if(o){o=!1;return}const c=[],d=Math.min(n.length,a.length);for(let p=0;p<d;p++){let h=n[p];const[m,k,C=""]=a[p];if(h.tagName.toLocaleLowerCase()===m){for(const y in k)h.getAttribute(y)!==k[y]&&h.setAttribute(y,k[y]);for(let y=0;y<h.attributes.length;y++){const $=h.attributes[y].name;$ in k||h.removeAttribute($)}h.innerHTML!==C&&(h.innerHTML=C)}else document.head.removeChild(h),h=mt(a[p]),document.head.append(h);c.push(h)}n.slice(d).forEach(p=>document.head.removeChild(p)),a.slice(d).forEach(p=>{const h=mt(p);document.head.appendChild(h),c.push(h)}),n=c};Q(()=>{const a=t.data,c=e.value,d=a&&a.title,p=a&&a.description,h=a&&a.frontmatter.head;document.title=(d?d+" | ":"")+c.title,document.querySelector("meta[name=description]").setAttribute("content",p||c.description),s([...h?oe(h):[]])})}function mt([t,e,n]){const o=document.createElement(t);for(const s in e)o.setAttribute(s,e[s]);return n&&(o.innerHTML=n),o}function ne(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function oe(t){return t.filter(e=>!ne(e))}const se=/#.*$/,re=/(index)?\.(md|html)$/,Y=/\/$/,ae=/^[a-z]+:/i;function rt(t){return Array.isArray(t)}function at(t){return ae.test(t)}function ie(t,e){if(e===void 0)return!1;const n=gt(`/${t.data.relativePath}`),o=gt(e);return n===o}function gt(t){return decodeURI(t).replace(se,"").replace(re,"")}function le(t,e){const n=t.endsWith("/"),o=e.startsWith("/");return n&&o?t.slice(0,-1)+e:!n&&!o?`${t}/${e}`:t+e}function nt(t){return/^\//.test(t)?t:`/${t}`}function qt(t){return t.replace(/(index)?(\.(md|html))?$/,"")||"/"}function ce(t){return t===!1||t==="auto"||rt(t)}function ue(t){return t.children!==void 0}function de(t){return rt(t)?t.length===0:!t}function it(t,e){if(ce(t))return t;e=nt(e);for(const n in t)if(e.startsWith(nt(n)))return t[n];return"auto"}function St(t){return t.reduce((e,n)=>(n.link&&e.push({text:n.text,link:qt(n.link)}),ue(n)&&(e=[...e,...St(n.children)]),e),[])}const pe=["href","aria-label"],he=["src"],me=b({__name:"NavBarTitle",setup(t){const{site:e,theme:n,localePath:o}=L();return(s,a)=>(l(),u("a",{class:"nav-bar-title",href:r(o),"aria-label":`${r(e).title}, back to home`},[r(n).logo?(l(),u("img",{key:0,class:"logo",src:r(E)(r(n).logo),alt:"Logo"},null,8,he)):_("",!0),j(" "+g(r(e).title),1)],8,pe))}});var ge=x(me,[["__scopeId","data-v-7ac13a1e"]]);function _e(){const{site:t,localePath:e,theme:n}=L();return v(()=>{const o=t.value.langs,s=Object.keys(o);if(s.length<2)return null;const c=O().path.replace(e.value,""),d=s.map(h=>({text:o[h].label,link:`${h}${c}`}));return{text:n.value.selectText||"Languages",items:d}})}const ve=["GitHub","GitLab","Bitbucket"].map(t=>[t,new RegExp(t,"i")]);function fe(){const{site:t}=L();return v(()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;if(!n)return null;const o=be(n);return{text:ye(o,e.repoLabel),link:o}})}function be(t){return zt.test(t)?t:`https://github.com/${t}`}function ye(t,e){if(e)return e;const n=t.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const o=ve.find(([s,a])=>a.test(n[0]));return o&&o[0]?o[0]:"Source"}function Ct(t){const e=O(),n=at(t.value.link);return{props:v(()=>{const s=_t(`/${e.data.relativePath}`);let a=!1;if(t.value.activeMatch)a=new RegExp(t.value.activeMatch).test(s);else{const c=_t(t.value.link);a=c==="/"?c===s:s.startsWith(c)}return{class:{active:a,isExternal:n},href:n?t.value.link:E(t.value.link),target:t.value.target||(n?"_blank":null),rel:t.value.rel||(n?"noopener noreferrer":null),"aria-label":t.value.ariaLabel}}),isExternal:n}}function _t(t){return t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const xe={},ke={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},$e=i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),we=i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Le=[$e,we];function qe(t,e){return l(),u("svg",ke,Le)}var lt=x(xe,[["render",qe]]);const Se={class:"nav-link"},Ce=b({__name:"NavLink",props:{item:null},setup(t){const n=st(t),{props:o,isExternal:s}=Ct(n.item);return(a,c)=>(l(),u("div",Se,[i("a",$t({class:"item"},r(o)),[j(g(t.item.text)+" ",1),r(s)?(l(),P(lt,{key:0})):_("",!0)],16)]))}});var vt=x(Ce,[["__scopeId","data-v-49fe041d"]]);const Te=t=>(H("data-v-07381bdb"),t=t(),R(),t),Pe={class:"nav-dropdown-link-item"},Ee=Te(()=>i("span",{class:"arrow"},null,-1)),Me={class:"text"},Ne={class:"icon"},Ae=b({__name:"NavDropdownLinkItem",props:{item:null},setup(t){const n=st(t),{props:o,isExternal:s}=Ct(n.item);return(a,c)=>(l(),u("div",Pe,[i("a",$t({class:"item"},r(o)),[Ee,i("span",Me,g(t.item.text),1),i("span",Ne,[r(s)?(l(),P(lt,{key:0})):_("",!0)])],16)]))}});var Ie=x(Ae,[["__scopeId","data-v-07381bdb"]]);const je=["aria-label"],Be={class:"button-text"},Fe={class:"dialog"},He=b({__name:"NavDropdownLink",props:{item:null},setup(t){const e=O(),n=N(!1);G(()=>e.path,()=>{n.value=!1});function o(){n.value=!n.value}return(s,a)=>(l(),u("div",{class:M(["nav-dropdown-link",{open:n.value}])},[i("button",{class:"button","aria-label":t.item.ariaLabel,onClick:o},[i("span",Be,g(t.item.text),1),i("span",{class:M(["button-arrow",n.value?"down":"right"])},null,2)],8,je),i("ul",Fe,[(l(!0),u(S,null,A(t.item.items,c=>(l(),u("li",{key:c.text,class:"dialog-item"},[f(Ie,{item:c},null,8,["item"])]))),128))])],2))}});var ft=x(He,[["__scopeId","data-v-18d75f62"]]);const Re={key:0,class:"nav-links"},De={key:1,class:"item"},Oe={key:2,class:"item"},Ve=b({__name:"NavLinks",setup(t){const{theme:e}=L(),n=_e(),o=fe(),s=v(()=>e.value.nav||o.value||n.value);return(a,c)=>r(s)?(l(),u("nav",Re,[r(e).nav?(l(!0),u(S,{key:0},A(r(e).nav,d=>(l(),u("div",{key:d.text,class:"item"},[d.items?(l(),P(ft,{key:0,item:d},null,8,["item"])):(l(),P(vt,{key:1,item:d},null,8,["item"]))]))),128)):_("",!0),r(n)?(l(),u("div",De,[f(ft,{item:r(n)},null,8,["item"])])):_("",!0),r(o)?(l(),u("div",Oe,[f(vt,{item:r(o)},null,8,["item"])])):_("",!0)])):_("",!0)}});var Tt=x(Ve,[["__scopeId","data-v-35b91e7e"]]);const Ue={emits:["toggle"]},Ge=i("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[i("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),ze=[Ge];function Je(t,e,n,o,s,a){return l(),u("div",{class:"sidebar-button",onClick:e[0]||(e[0]=c=>t.$emit("toggle"))},ze)}var We=x(Ue,[["render",Je]]);const Ye=t=>(H("data-v-40587210"),t=t(),R(),t),Xe={class:"nav-bar"},Qe=Ye(()=>i("div",{class:"flex-grow"},null,-1)),Ze={class:"nav"},Ke=b({__name:"NavBar",emits:["toggle"],setup(t){return(e,n)=>(l(),u("header",Xe,[f(We,{onToggle:n[0]||(n[0]=o=>e.$emit("toggle"))}),f(ge),Qe,i("div",Ze,[f(Tt)]),T(e.$slots,"search",{},void 0,!0)]))}});var tn=x(Ke,[["__scopeId","data-v-40587210"]]);function en(){let t=null,e=null;const n=an(o,300);function o(){const c=nn(),d=on(c);for(let p=0;p<d.length;p++){const h=d[p],m=d[p+1],[k,C]=rn(p,h,m);if(k){history.replaceState(null,document.title,C||" "),s(C);return}}}function s(c){if(a(e),a(t),e=document.querySelector(`.sidebar a[href="${c}"]`),!e)return;e.classList.add("active");const d=e.closest(".sidebar-links > ul > li");d&&d!==e.parentElement?(t=d.querySelector("a"),t&&t.classList.add("active")):t=null}function a(c){c&&c.classList.remove("active")}I(()=>{o(),window.addEventListener("scroll",n)}),wt(()=>{s(decodeURIComponent(location.hash))}),z(()=>{window.removeEventListener("scroll",n)})}function nn(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function on(t){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>t.some(n=>n.hash===e.hash))}function sn(){return document.querySelector(".nav-bar").offsetHeight}function bt(t){const e=sn();return t.parentElement.offsetTop-e-15}function rn(t,e,n){const o=window.scrollY;return t===0&&o===0?[!0,null]:o<bt(e)?[!1,null]:!n||o<bt(n)?[!0,decodeURIComponent(e.hash)]:[!1,null]}function an(t,e){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(t,e):(t(),o=!0,setTimeout(()=>{o=!1},e))}}function ln(){const t=O(),{site:e}=L();return en(),v(()=>{const n=t.data.headers,o=t.data.frontmatter.sidebar,s=t.data.frontmatter.sidebarDepth;if(o===!1)return[];if(o==="auto")return yt(n,s);const a=it(e.value.themeConfig.sidebar,t.data.relativePath);return a===!1?[]:a==="auto"?yt(n,s):a})}function yt(t,e){const n=[];if(t===void 0)return[];let o;return t.forEach(({level:s,title:a,slug:c})=>{if(s-1>e)return;const d={text:a,link:`#${c}`};s===2?(o=d,n.push(d)):o&&(o.children||(o.children=[])).push(d)}),n}const Pt=t=>{const e=O(),{site:n,frontmatter:o}=L(),s=t.depth||1,a=o.value.sidebarDepth||1/0,c=e.data.headers,d=t.item.text,p=cn(n.value.base,t.item.link),h=t.item.children,m=ie(e,t.item.link),k=s<a?Et(m,h,c,s+1):null;return U("li",{class:"sidebar-link"},[U(p?"a":"p",{class:{"sidebar-link-item":!0,active:m},href:p},d),k])};function cn(t,e){return e===void 0||e.startsWith("#")?e:le(t,e)}function Et(t,e,n,o=1){return e&&e.length>0?U("ul",{class:"sidebar-links"},e.map(s=>U(Pt,{item:s,depth:o}))):t&&n?Et(!1,un(n),void 0,o):null}function un(t){return Mt(dn(t))}function dn(t){t=t.map(n=>Object.assign({},n));let e;return t.forEach(n=>{n.level===2?e=n:e&&(e.children||(e.children=[])).push(n)}),t.filter(n=>n.level===2)}function Mt(t){return t.map(e=>({text:e.title,link:`#${e.slug}`,children:e.children?Mt(e.children):void 0}))}const pn={key:0,class:"sidebar-links"},hn=b({__name:"SideBarLinks",setup(t){const e=ln();return(n,o)=>r(e).length>0?(l(),u("ul",pn,[(l(!0),u(S,null,A(r(e),s=>(l(),P(r(Pt),{item:s},null,8,["item"]))),256))])):_("",!0)}});const mn=b({__name:"SideBar",props:{open:{type:Boolean}},setup(t){return(e,n)=>(l(),u("aside",{class:M(["sidebar",{open:t.open}])},[f(Tt,{class:"nav"}),T(e.$slots,"sidebar-top",{},void 0,!0),f(hn),T(e.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var gn=x(mn,[["__scopeId","data-v-17c48e2f"]]);const _n=/bitbucket.org/;function vn(){const{page:t,theme:e,frontmatter:n}=L(),o=v(()=>{const{repo:a,docsDir:c="",docsBranch:d="master",docsRepo:p=a,editLinks:h}=e.value,m=n.value.editLink!=null?n.value.editLink:h,{relativePath:k}=t.value;return!m||!k||!a?null:fn(a,p,c,d,k)}),s=v(()=>e.value.editLinkText||"Edit this page");return{url:o,text:s}}function fn(t,e,n,o,s){return _n.test(t)?yn(t,e,n,o,s):bn(t,e,n,o,s)}function bn(t,e,n,o,s){return(at(e)?e:`https://github.com/${e}`).replace(Y,"")+`/edit/${o}/`+(n?n.replace(Y,"")+"/":"")+s}function yn(t,e,n,o,s){return(at(e)?e:t).replace(Y,"")+`/src/${o}/`+(n?n.replace(Y,"")+"/":"")+s+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}const xn={class:"edit-link"},kn=["href"],$n=b({__name:"EditLink",setup(t){const{url:e,text:n}=vn();return(o,s)=>(l(),u("div",xn,[r(e)?(l(),u("a",{key:0,class:"link",href:r(e),target:"_blank",rel:"noopener noreferrer"},[j(g(r(n))+" ",1),f(lt,{class:"icon"})],8,kn)):_("",!0)]))}});var wn=x($n,[["__scopeId","data-v-55695e90"]]);const Ln={key:0,class:"last-updated"},qn={class:"prefix"},Sn={class:"datetime"},Cn=b({__name:"LastUpdated",setup(t){const{theme:e,page:n}=L(),o=v(()=>{const c=e.value.lastUpdated;return c!==void 0&&c!==!1}),s=v(()=>{const c=e.value.lastUpdated;return c===!0?"Last Updated":c}),a=N("");return I(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(c,d)=>r(o)?(l(),u("p",Ln,[i("span",qn,g(r(s))+":",1),i("span",Sn,g(a.value),1)])):_("",!0)}});var Tn=x(Cn,[["__scopeId","data-v-30c3cbb4"]]);const Pn={class:"page-footer"},En={class:"edit"},Mn={class:"updated"},Nn=b({__name:"PageFooter",setup(t){return(e,n)=>(l(),u("footer",Pn,[i("div",En,[f(wn)]),i("div",Mn,[f(Tn)])]))}});var An=x(Nn,[["__scopeId","data-v-5c96fb00"]]);function In(){const{page:t,theme:e}=L(),n=v(()=>qt(nt(t.value.relativePath))),o=v(()=>{const p=it(e.value.sidebar,n.value);return rt(p)?St(p):[]}),s=v(()=>o.value.findIndex(p=>p.link===n.value)),a=v(()=>{if(e.value.nextLinks!==!1&&s.value>-1&&s.value<o.value.length-1)return o.value[s.value+1]}),c=v(()=>{if(e.value.prevLinks!==!1&&s.value>0)return o.value[s.value-1]}),d=v(()=>!!a.value||!!c.value);return{next:a,prev:c,hasLinks:d}}const jn={},Bn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Fn=i("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Hn=[Fn];function Rn(t,e){return l(),u("svg",Bn,Hn)}var Dn=x(jn,[["render",Rn]]);const On={},Vn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Un=i("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Gn=[Un];function zn(t,e){return l(),u("svg",Vn,Gn)}var Jn=x(On,[["render",zn]]);const Wn={key:0,class:"next-and-prev-link"},Yn={class:"container"},Xn={class:"prev"},Qn=["href"],Zn={class:"text"},Kn={class:"next"},to=["href"],eo={class:"text"},no=b({__name:"NextAndPrevLinks",setup(t){const{hasLinks:e,prev:n,next:o}=In();return(s,a)=>r(e)?(l(),u("div",Wn,[i("div",Yn,[i("div",Xn,[r(n)?(l(),u("a",{key:0,class:"link",href:r(E)(r(n).link)},[f(Dn,{class:"icon icon-prev"}),i("span",Zn,g(r(n).text),1)],8,Qn)):_("",!0)]),i("div",Kn,[r(o)?(l(),u("a",{key:0,class:"link",href:r(E)(r(o).link)},[i("span",eo,g(r(o).text),1),f(Jn,{class:"icon icon-next"})],8,to)):_("",!0)])])])):_("",!0)}});var oo=x(no,[["__scopeId","data-v-e65a9748"]]);const so={class:"page"},ro={class:"container"},ao=b({__name:"Page",setup(t){return(e,n)=>{const o=W("Content");return l(),u("main",so,[i("div",ro,[T(e.$slots,"top",{},void 0,!0),f(o,{class:"content"}),f(An),f(oo),T(e.$slots,"bottom",{},void 0,!0)])])}}});var io=x(ao,[["__scopeId","data-v-8fcebc32"]]);const lo={key:0,id:"ads-container"},co=b({__name:"Layout",setup(t){const e=Kt(()=>ot(()=>import("./Home.56b8cedf.js"),["assets/Home.56b8cedf.js","assets/Debug.vue_vue_type_style_index_0_scoped_true_lang.03de10d4.js","assets/framework.6806ca9c.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/preload-helper.1c052cf7.js","assets/framework.412205eb.js"])),n=()=>null,o=n,s=n,a=n,c=O(),{site:d,page:p,theme:h,frontmatter:m}=L(),k=v(()=>!!m.value.customLayout),C=v(()=>!!m.value.home),y=v(()=>Object.keys(d.value.langs).length>1),$=v(()=>{const q=h.value;return m.value.navbar===!1||q.navbar===!1?!1:d.value.title||q.logo||q.repo||q.nav}),w=N(!1),B=v(()=>m.value.home||m.value.sidebar===!1?!1:!de(it(h.value.sidebar,c.data.relativePath))),K=q=>{w.value=typeof q=="boolean"?q:!w.value},Rt=K.bind(null,!1);G(c,Rt);const Dt=v(()=>[{"no-navbar":!$.value,"sidebar-open":w.value,"no-sidebar":!B.value}]);return(q,pt)=>{const Ot=W("Content"),Vt=W("Debug");return l(),u(S,null,[i("div",{class:M(["theme",r(Dt)])},[r($)?(l(),P(tn,{key:0,onToggle:K},{search:F(()=>[T(q.$slots,"navbar-search",{},()=>[r(h).algolia?(l(),P(r(a),{key:0,options:r(h).algolia,multilang:r(y)},null,8,["options","multilang"])):_("",!0)])]),_:3})):_("",!0),f(gn,{open:w.value},{"sidebar-top":F(()=>[T(q.$slots,"sidebar-top")]),"sidebar-bottom":F(()=>[T(q.$slots,"sidebar-bottom")]),_:3},8,["open"]),i("div",{class:"sidebar-mask",onClick:pt[0]||(pt[0]=Rr=>K(!1))}),r(k)?(l(),P(Ot,{key:1})):r(C)?T(q.$slots,"home",{key:2},()=>[f(r(e),null,{hero:F(()=>[T(q.$slots,"home-hero")]),features:F(()=>[T(q.$slots,"home-features")]),footer:F(()=>[T(q.$slots,"home-footer")]),_:3})]):(l(),P(io,{key:3},{top:F(()=>[T(q.$slots,"page-top-ads",{},()=>[r(h).carbonAds&&r(h).carbonAds.carbon?(l(),u("div",lo,[(l(),P(r(o),{key:"carbon"+r(p).relativePath,code:r(h).carbonAds.carbon,placement:r(h).carbonAds.placement},null,8,["code","placement"]))])):_("",!0)]),T(q.$slots,"page-top")]),bottom:F(()=>[T(q.$slots,"page-bottom"),T(q.$slots,"page-bottom-ads",{},()=>[r(h).carbonAds&&r(h).carbonAds.custom?(l(),P(r(s),{key:"custom"+r(p).relativePath,code:r(h).carbonAds.custom,placement:r(h).carbonAds.placement},null,8,["code","placement"])):_("",!0)])]),_:3}))],2),f(Vt)],64)}}}),uo={class:"theme"},po=i("h1",null,"404",-1),ho=["href"],mo=b({__name:"NotFound",setup(t){const{site:e}=L(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function o(){return n[Math.floor(Math.random()*n.length)]}return(s,a)=>(l(),u("div",uo,[po,i("blockquote",null,g(o()),1),i("a",{href:r(e).base,"aria-label":"go to home"},"Take me home.",8,ho)]))}}),go={Layout:co,NotFound:mo};function _o(t="2022-01-01"){const e=new Date(t),n=new Date().getTime()-e.getTime(),o=24*60*60*1e3,s=n/o,a=Math.floor(s),c=(s-a)*24,d=Math.floor(c),p=(c-d)*60,h=Math.floor(p),m=(p-h)*60,k=Math.floor(m);return{day:a,hour:d,minute:h,second:k}}const vo=()=>{const t=document.title;document.addEventListener("visibilitychange",function(){document.hidden?document.title="zzZZZ...":document.title=t})};const fo=["href"],bo={class:"post-info"},yo={class:"post-info-categories"},xo=["href"],ko={key:1,href:"#"},$o={class:"post-info-tags"},wo=["href"],Lo={key:1,href:"#"},qo={datetime:"2022-01-25T19:21:35.000Z"},So=["innerHTML"],Co={class:"post-excerpt"},To=["innerHTML"],Po=i("span",{class:"post-btn"},"READ MORE +",-1),Eo=b({__name:"PostItem",props:{article:Object},setup(t){return(e,n)=>(l(),u("a",{href:r(E)(t.article.regularPath),class:"post-item"},[i("div",bo,[i("div",null,[i("span",yo,[t.article.frontMatter.category&&t.article.frontMatter.category.length?(l(!0),u(S,{key:0},A(t.article.frontMatter.category,o=>(l(),u("a",{key:o,href:r(E)(`/pages/archives#category=${o}`)},g(o),9,xo))),128)):(l(),u("a",ko,"Empty"))]),i("span",$o,[t.article.frontMatter.tags&&t.article.frontMatter.tags.length?(l(!0),u(S,{key:0},A(t.article.frontMatter.tags,o=>(l(),u("a",{key:o,href:r(E)(`/pages/archives#tag=${o}`)},g(o),9,wo))),128)):(l(),u("a",Lo," Empty "))])]),i("time",qo,g(t.article.frontMatter.dateArr[2])+" / "+g(t.article.frontMatter.dateArr[1])+" / "+g(t.article.frontMatter.dateArr[0]),1)]),i("h1",{class:"post-title",innerHTML:t.article.frontMatter.title},null,8,So),i("div",Co,[i("div",{innerHTML:t.article.frontMatter.description},null,8,To)]),Po],8,fo))}});var Mo=[{title:"VitePress \u521B\u5EFA\u6587\u7AE0\u76EE\u5F55",content:`1. \u73AF\u5883
VitePress(Vue3 + TS)
2. \u601D\u8DEF

\u8BBE\u7F6E\u6587\u7AE0\u5BB9\u5668 id\uFF0C\u67E5\u627E\u5BB9\u5668\u5185\u6240\u6709 h1-h6 \u76F4\u63A5\u5B50\u8282\u70B9\uFF1B
\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5217\u8868\uFF0C\u904D\u5386\u8282\u70B9\u5217\u8868\uFF0C\u83B7\u53D6\u8282\u70B9\u4FE1\u606F\uFF0C\u5C01\u88C5\u4E3A\u5BF9\u8C61\uFF0C\u4FDD\u5B58\u5230\u521B\u5EFA\u7684\u5217\u8868\u4E2D\uFF1B\u5982\u679C\u5305\u542B\u5B50\u8282\u70B9\uFF0C\u7EE7\u7EED\u9012\u5F52\u904D\u5386\uFF1B
\u89E3\u6790\u6570\u636E\uFF0C\u5C55\u793A\u6587\u7AE0\u76EE\u5F55\u3002

3. \u5B9E\u73B0
3.1. \u6570\u636E\u7ED3\u6784\u8BBE\u8BA1
type ICatalog = {
    id: string, // unique title id
    nodeName: string, // title tag name
    text: string, // display text
    child: Array&lt;ICatalog&gt; // sub title
}

3.2. \u521B\u5EFA\u6587\u7AE0\u6807\u9898\u76EE\u5F55\u6570\u636E
// catalog.ts

/**
 * \u83B7\u53D6\u6587\u7AE0\u76EE\u5F55
 * @param container \u6587\u7AE0\u5BB9\u5668
 * @returns \u76EE\u5F55\u6811
 */
 export const getCatalogTree = (container: HTMLElement): Array&lt;ICatalog&gt; =&gt; {
    // \u6240\u6709\u5B50\u8282\u70B9
    const children: NodeList = container.childNodes as NodeList
    // \u8FC7\u6EE4\u6807\u9898\u8282\u70B9
    const hReg = /^H[1-6]{1,}$/ig
    const hNodes: Node[] = filterNodeByTag(children, hReg)
    // \u521B\u5EFA\u76EE\u5F55\u6811
    const tree: ICatalog[] = createTree(hNodes as HTMLElement[])
    return tree
}

/**
 * \u521B\u5EFA\u76EE\u5F55\u6811
 * @param htmlList html \u8282\u70B9\u5217\u8868
 * @returns \u76EE\u5F55\u6811
 */
function createTree(htmlList: HTMLElement[]): ICatalog[] {
    const list = []
    for (let i = 0; i &lt; htmlList.length; i++) {
        const item = htmlList[i];
        // \u5339\u914D\u5C42\u7EA7\u6807\u8BC6
        const levelReg = /^(_\\d)+(-\\d)*/ig
        // \u4E3A\u6BCF\u4E2A\u8282\u70B9\u8BBE\u7F6E\u5C42\u7EA7\u6807\u8BC6
        const level = (item.id.match(levelReg) as string[])[0]

        list.push({
            nodeName: item.nodeName,
            text: item.innerText.slice(0, item.innerText.length - 1),
            id: item.id,
            level: level
        })
    }
    return arrToTree(list)
}
/**
 * \u6570\u7EC4\u8F6C\u6811
 * @param arr 
 * @returns 
 */
function arrToTree(arr: ICatalog[]) {
    const result = []
    const obj: any = {} // \u4E34\u65F6map
    arr.forEach(item =&gt; {
        obj[item.level] = item
    })

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const item = obj[key];
            const firstLevReg = /^(_\\d)+$/ig // \u5224\u65AD\u4E00\u7EA7\u6807\u9898
            const isFirstLevel = firstLevReg.test(key)

            if (isFirstLevel) { // \u4E00\u7EA7\u6807\u9898
                result.push(item)
            } else { // \u4E0B\u7EA7\u6807\u9898
                // \u8FC7\u6EE4\u4E0A\u7EA7\u6807\u9898
                const filters = Object.keys(obj).filter(str =&gt; {
                    return str !== key &amp;&amp; key.includes(str)
                })
                // \u67E5\u627E\u76F4\u63A5\u4E0A\u7EA7\u6807\u9898(\u6700\u957F\u7684)
                const topLevel: string = findMaxLenStr(filters)
                if (obj[topLevel].child) {
                    obj[topLevel].child.push(item)
                } else {
                    obj[topLevel].child = [item]
                }
            }
            
        }
    }
    return result
}

/**
 * filter html node by nodeName
 * @param list original node list
 * @param reg filter rule
 * @returns target html node
 */
export function filterNodeByTag(list: NodeList, reg: RegExp): Node[] {
    const hNodes: Node[] = Array.from(list).filter((item: Node) =&gt; {
        return reg.test(item.nodeName)
    })
    return hNodes
}
/**
 * \u67E5\u627E\u6570\u7EC4\u4E2D\u6700\u957F\u7684\u5B57\u7B26\u4E32
 * @param arr \u76EE\u6807\u6570\u7EC4
 * @returns \u6700\u957F\u7684\u5B57\u7B26\u4E32s
 */
export function findMaxLenStr(arr: string[]): string {
    let res: string = arr[0]
    for (let i = 1; i &lt; arr.length; i++) {
        const item = arr[i];
        if (item.length &gt; res.length) {
            res = item
        }
    }
    return res
}

3.3. \u521B\u5EFA\u76EE\u5F55\u7EC4\u4EF6
&lt;!-- CataList.vue --&gt;
&lt;template&gt;
    &lt;ul&gt;
        &lt;li v-for=&quot;item in (tree as ICatalog[])&quot; :key=&quot;item.id&quot;&gt;
            &lt;a
                :href=&quot;\`#\${item.id}\`&quot;
                :name=&quot;item.id&quot;
                :title=&quot;item.text&quot;
                :class=&quot;[item.nodeName, item.active? &#39;active&#39; : &#39;&#39;]&quot;
                class=&quot;link&quot;
            &gt;
                {{item.text}}
            &lt;/a&gt;
            &lt;!-- \u9012\u5F52\u521B\u5EFA\u4E0B\u7EA7\u76EE\u5F55 --&gt;
            &lt;CataList v-if=&quot;item.child?.length&quot; :tree=&quot;item.child&quot;&gt;&lt;/CataList&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
// \u9012\u5F52 \u81EA\u5F15\u7528
import CataList from &#39;./CataList.vue&#39;

const props = defineProps({
    tree: Array // \u76EE\u5F55\u6570\u636E
})

&lt;/script&gt;
&lt;style&gt;
/* cusotm style... */
&lt;/style&gt;

3.4. \u6E32\u67D3\u7EC4\u4EF6
&lt;!-- index.vue --&gt;
&lt;template&gt;
    &lt;div v-if=&quot;cataData.length&quot;&gt;
        &lt;Catalog :tree=&quot;cataData&quot;&gt;&lt;/Catalog&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { reactive, onMounted, onUpdated } from &quot;vue&quot;;
import { getCatalogTree } from &#39;./catalog.ts&#39;
import Catalog from &quot;./CataList.vue&quot;;

// catalog tree data
const cataData: ICatalog[] = reactive([])

onMounted(() =&gt; {
    init()
}),
onUpdated(() =&gt; {
    init()
})

// init catalog
const init = (): void =&gt; {
    // get tree data
    const contentDiv: ChildNode = document.getElementById(&#39;content&#39;)?.childNodes[0] as ChildNode // \u6B63\u6587\u5BB9\u5668
    cataData.push(...getCatalogTree(contentDiv))
}

&lt;/script&gt;

`,excerpt:"",url:"/posts\\Site\\catalog"},{title:"Build a Free CDN\u3010Github + JSDelivr\u3011",content:`1. Create a public repository

2. Create a new release

3. Assets request
url template: https://cdn.jsdelivr.net/gh/user/repo@version/file
`,excerpt:"",url:"/posts\\Site\\cdn-github"},{title:"Hello World",content:`
`,excerpt:"",url:"/posts\\Site\\hello-world"},{title:"VitePress - Add Live2d",content:`1. Environment

Vue3

2. Git repository
live2d-model &#x1F517; 
3. Theme config
Add a prop under themeConfig
// ~/.vitepress/config.js
themeConfig: {
    // custom proName
    live2d: true
}

3. Create a component
or by CDN directly.
// L2d.ts

// live2d
import { h } from &#39;vue&#39;

const L2d = () =&gt; {
    return(
        h(&#39;script&#39;, { src: &#39;https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js&#39; })
    )
}

export default L2d

5. Render
&lt;!-- ./Layout.vue --&gt;

&lt;template&gt;
    &lt;Content /&gt;
    &lt;!-- any where --&gt;
    &lt;L2d v-if=&quot;theme.live2d&quot; /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
// import L2d ocmponent
import L2d from &#39;./L2d.ts&#39;
&lt;/script&gt;

`,excerpt:"",url:"/posts\\Site\\l2d"},{title:"VitePress \u5B9E\u73B0\u672C\u5730\u641C\u7D22",content:`1. \u73AF\u5883

VitePress(Vue3 + TS)

2. \u601D\u8DEF

\u9879\u76EE\u521D\u59CB\u5316\u65F6\uFF0C\u751F\u6210\u7D22\u5F15\u8868
\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5217\u8868Array\uFF0C\u5B58\u653E\u6587\u4EF6\u89E3\u6790\u5BF9\u8C61\uFF1B
\u9012\u5F52\u904D\u5386.md\u6587\u4EF6\uFF0C\u901A\u8FC7\u63D2\u4EF6grayMatter\u89E3\u6790frontmatter\u4FE1\u606F\uFF0C\u5B58\u5165\u5217\u8868\u4E2D\uFF1B
\u904D\u5386\u5B8C\u6210\u540E\uFF0C\u5C06Array\u8F6C\u4E3Ajson\u5B57\u7B26\u4E32\uFF0C\u5199\u5165\u6587\u4EF6post.json\uFF0C\u5B58\u5165\u78C1\u76D8\uFF1B


\u521B\u5EFA\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5E76\u76D1\u542Cinput\u503C\u6539\u53D8
\u5728\u7EC4\u4EF6\u4E2D\u5F15\u5165\u7D22\u5F15\u8868\uFF0C\u5C06\u6587\u7AE0\u6807\u9898title\u548C\u5185\u5BB9content\u5206\u522B\u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u8FC7\u6EE4\u51FA\u5339\u914D\u6210\u529F\u7684\u9879\u76EE\uFF1B
\u6E32\u67D3\u5339\u914D\u5230\u7684\u7ED3\u679C\u5230\u641C\u7D22\u5217\u8868\u4E2D\uFF0C\u5E76\u8BBE\u7F6E\u5173\u952E\u5B57\u9AD8\u4EAE\u3002

3. \u641C\u7D22\u6A21\u5757\u4EE3\u7801
// ~/.vitepress/theme/util/search-map.js

import fs from &#39;fs&#39;; // \u6587\u4EF6\u6A21\u5757
import path from &#39;path&#39;; // \u8DEF\u5F84\u6A21\u5757
import grayMatter from &#39;gray-matter&#39; // \u89E3\u6790 frontmatter

// \u7D22\u5F15\u5217\u8868
const fileMap = [];

/**
 * \u83B7\u53D6\u76EE\u5F55\u6587\u4EF6\u7D22\u5F15
 * @param {string} targetDirPath \u9700\u8981\u904D\u5386\u7684\u76EE\u5F55
 */
export default function createFilesJson(targetDirPath) {
    // \u8BFB\u53D6\u6587\u4EF6\u5217\u8868
    fs.readdirSync(targetDirPath).forEach(function (name) {
        // \u83B7\u53D6\u6587\u4EF6\u5B8C\u6574\u8DEF\u5F84
        const filePath = path.join(targetDirPath, name);
        // \u83B7\u53D6\u6587\u4EF6\u4FE1\u606F
        const stat = fs.statSync(filePath);

        if (stat.isFile()) {
            // \u4FDD\u5B58\u6587\u4EF6\u7D22\u5F15\u5BF9\u8C61
            fileMap.push(getFileObj(filePath))
        } else if ( // \u8FC7\u6EE4\u5FFD\u7565\u6587\u4EF6\u5939
            stat.isDirectory() &amp;&amp;
            &quot;.git&quot;!=path.basename(filePath) &amp;&amp;
            &#39;_&#39; != path.basename(filePath).substr(0,1)
        ) {
            // \u9012\u5F52\u904D\u5386\u76EE\u5F55
            createFilesJson(filePath);
        }
    });

    // \u904D\u5386\u5B8C\u6210\uFF0C\u5C06 post.json \u5199\u5165\u6839\u76EE\u5F55
    fs.writeFileSync(path.resolve(&#39;./&#39;) + &#39;/post.json&#39;, JSON.stringify(fileMap));
}

/**
 * \u83B7\u53D6\u6587\u4EF6\u7D22\u5F15\u5BF9\u8C61
 * @param {string} filePath \u6587\u4EF6\u8DEF\u5F84
 * @returns {object} \u7D22\u5F15\u5BF9\u8C61
 */
 function getFileObj(filePath) {
    if ( // \u8FC7\u6EE4\u5FFD\u7565\u6587\u4EF6
        &quot;.md&quot; == path.extname(filePath).toLowerCase()
        &amp;&amp; &#39;_&#39; != path.basename(filePath).substr(0,1) 
        &amp;&amp; &#39;README.md&#39; != path.basename(filePath)
        ){
        // \u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9
        let dataStr = fs.readFileSync(filePath, &#39;utf8&#39;)
        // \u89E3\u6790 frontmatter
        const matterObj = grayMatter(dataStr)
        
        // \u8FD4\u56DE\u7D22\u5F15\u5BF9\u8C61
        return {
            title: matterObj.data.title, // \u6807\u9898
            content: matterObj.content, // \u6B63\u6587
            excerpt: matterObj.excerpt, // \u6458\u8981
            filePath: filePath // \u6587\u4EF6\u8DEF\u5F84
        }
    }
}

4. \u9879\u76EE\u521D\u59CB\u5316\u751F\u6210\u7D22\u5F15\u6587\u4EF6
// ~/.vitepress/config.js
import createFilesJson from &#39;./theme/util/search-map.js&#39;
createFilesJson(&#39;./posts/&#39;)

5. \u521B\u5EFA\u641C\u7D22\u7EC4\u4EF6\uFF0C\u76D1\u542C\u5173\u952E\u5B57\u53D8\u5316
\u6837\u5F0F\u53EF\u81EA\u884C\u8C03\u6574
&lt;!-- search.vue --&gt;

&lt;template&gt;
    &lt;div&gt;
        &lt;!-- \u641C\u7D22\u8F93\u5165\u6846 --&gt;
        &lt;input type=&quot;text&quot; v-model=&quot;searchVal&quot;&gt;
        &lt;!-- \u641C\u7D22\u7ED3\u679C\u5217\u8868 --&gt;
        &lt;ul&gt;
            &lt;li
                v-for=&quot;item in resultList&quot;
                :key=&quot;item.title&quot;
            &gt;
                &lt;a :href=&quot;item.filePath&quot; @click=&quot;clearSearch&quot;&gt;
                    &lt;p v-html=&quot;item.title&quot;&gt;&lt;/p&gt;
                    &lt;p v-html=&quot;item.content&quot;&gt;&lt;/p&gt;
                &lt;/a&gt;
            &lt;/li&gt;
            &lt;!-- \u641C\u7D22\u7ED3\u679C\u4E3A\u7A7A --&gt;
            &lt;li v-if=&quot;!resultList.length &amp;&amp; searchVal !== &#39;&#39;&quot;&gt;Empty&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, reactive, watchEffect, computed } from &quot;vue&quot;;
import postJson from &#39;/post.json&#39; // \u5F15\u5165\u751F\u6210\u7684 post.json
// \u5173\u952E\u5B57
const searchVal = ref(&#39;&#39;)
// \u641C\u7D22\u7ED3\u679C\u5217\u8868
let resultList = reactive([])

// \u76D1\u542C\u8F93\u5165
watchEffect(() =&gt; {
    localSearch(searchVal.value)
})

/**
 * \u672C\u5730\u641C\u7D22
 * @param key \u5173\u952E\u5B57
 */
function localSearch(key: string): void {
    resultList.length = 0
    if (key.trim() === &#39;&#39;) { // \u5224\u7A7A
        return
    }
    // \u904D\u5386\u7D22\u5F15\u8868
    postJson.forEach(item =&gt; {
        // \u5BF9\u8C61\u6DF1\u62F7\u8D1D
        const newItem = JSON.parse(JSON.stringify(item))
        // \u5173\u952E\u5B57\u6B63\u5219
        const reg = new RegExp(key, &#39;ig&#39;)
        // \u6807\u9898\u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u6CA1\u6709\u8FD4\u56DE null
        const titleMatches = newItem.title.match(reg)
        // \u5185\u5BB9\u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u6CA1\u6709\u8FD4\u56DE null
        const contentMatches = newItem.content.match(reg)
        
        if (titleMatches || contentMatches) {
            // \u5339\u914D\u5185\u5BB9\u9AD8\u4EAE
            newItem.content = highLight(key, newItem.content)
            newItem.title = highLight(key, newItem.title)
            // \u4FDD\u5B58\u5230\u7ED3\u679C\u5217\u8868
            resultList.push(newItem)
        }
    })
}

/**
 * \u5173\u952E\u5B57\u9AD8\u4EAE
 * @param key \u5173\u952E\u5B57
 * @param str \u539F\u5185\u5BB9
 * @return \u65B0\u5B57\u7B26\u4E32
 */
const highLight = (key: string, str: string): string =&gt; {
    const reg = new RegExp(key, &#39;ig&#39;)
    return str.replace(reg, \`&lt;span style=&quot;color: red&quot;&gt;\${key}&lt;/span&gt;\`)
}

// \u6E05\u7A7A\u641C\u7D22
 const clearSearch = () =&gt; {
    searchVal.value = &#39;&#39;
}

&lt;/script&gt;

`,excerpt:"",url:"/posts\\Site\\local-search"},{title:"PicGo \u514D\u8D39\u56FE\u5E8A\u642D\u5EFA",content:`1. \u73AF\u5883

PicGo  Download &#x1F517;  Document &#x1F517; 

GitHub


2. \u914D\u7F6E

\u521B\u5EFA\u4E00\u4E2A\u516C\u5F00\u4ED3\u5E93\u5B58\u653E\u56FE\u7247\u8D44\u6E90\uFF1B

\u83B7\u53D6 token: 
 \u521B\u5EFA\u6210\u529F\u540E\uFF0Ctoken \u53EA\u4F1A\u51FA\u73B0\u4E00\u6B21\uFF0C\u4E00\u5B9A\u8981\u53CA\u65F6\u4FDD\u7559\u3002 

PicGo \u56FE\u5E8A\u914D\u7F6E: 
 \u81EA\u5B9A\u4E49\u57DF\u540D\u683C\u5F0F\uFF1A

GitHub: https://raw.githubusercontent.com/user/repo/branch    
JSDelivr: https://cdn.jsdelivr.net/gh/user/repo@version(\u63A8\u8350) \u3010\u5173\u4E8E JSDelivr CDN \u7684\u4F7F\u7528\u3011



3. \u4E0A\u4F20
\u62D6\u62FD\u6216\u70B9\u51FB\u4E0A\u4F20\u6210\u529F\u540E\uFF0CPicGo \u5C06\u81EA\u52A8\u751F\u6210\u94FE\u63A5\u5728\u7C98\u8D34\u677F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u535A\u5BA2\u4E2D\u4F7F\u7528\u3002
`,excerpt:"",url:"/posts\\Site\\picgo"},{title:"Valine \u90AE\u4EF6\u63D0\u9192\u57FA\u7840\u914D\u7F6E",content:`\u7531\u4E8E\u5B98\u7F51\u66F4\u65B0\u540E\uFF0C\u65E9\u4E9B\u7684\u6587\u6863\u90E8\u5206\u5DF2\u7ECF\u4E0D\u9002\u7528\uFF0C\u6B64\u7BC7\u5C31\u5F53\u524D\u6700\u65B0\u5B98\u7F51\u8FDB\u884C\u8865\u5145\u3002
1. \u767B\u5F55 LeanCloud
\u56FD\u5185\u548C\u56FD\u5916\u7248\u672C\u90FD\u53EF\u4EE5\u3002
2. \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF


SITE_NAME : \u7F51\u7AD9\u540D\u79F0\u3002
SITE_URL : \u7F51\u7AD9\u5730\u5740, \u6700\u540E\u4E0D\u8981\u52A0 / \u3002
SMTP_USER : SMTP \u670D\u52A1\u7528\u6237\u540D\uFF0C\u4E00\u822C\u4E3A\u90AE\u7BB1\u5730\u5740\u3002
SMTP_PASS : SMTP \u5BC6\u7801\uFF0C\u4E00\u822C\u4E3A\u6388\u6743\u7801\uFF0C\u800C\u4E0D\u662F\u90AE\u7BB1\u7684\u767B\u9646\u5BC6\u7801\uFF0C\u8BF7\u81EA\u884C\u67E5\u8BE2\u5BF9\u5E94\u90AE\u4EF6\u670D\u52A1\u5546\u7684\u83B7\u53D6\u65B9\u5F0F\u3002
SMTP_SERVICE : \u90AE\u4EF6\u670D\u52A1\u63D0\u4F9B\u5546\uFF0C\u652F\u6301 QQ\u3001163\u3001126\u3001Gmail\u3001&quot;Yahoo&quot;\u3001...... \uFF0C\u5168\u90E8\u652F\u6301\u8BF7\u53C2\u8003 : Nodemailer Supported - services\u3002 --- \u5982\u8FD9\u91CC\u6CA1\u6709\u4F60\u4F7F\u7528\u7684\u90AE\u4EF6\u63D0\u4F9B\u5546\uFF0C\u8BF7\u67E5\u770B\u81EA\u5B9A\u4E49\u90AE\u4EF6\u670D\u52A1\u5668
SENDER_NAME : \u5BC4\u4EF6\u4EBA\u540D\u79F0\u3002

3. \u90E8\u7F72 Git \u9879\u76EE
\u4E91\u5F15\u64CE &gt; \u90E8\u7F72 &gt; \u90E8\u7F72\u9879\u76EE


   
\u586B\u5165\u9879\u76EE\u5730\u5740\uFF1A      
https://github.com/zhaojun1998/Valine-Admin.git

\u6CE8\u610F\uFF1A \u7531\u4E8E\u5F53\u524D\u6E90\u4ED3\u5E93\u914D\u7F6E\u7684 node \u7248\u672C\u662F 6.x\uFF0C\u8FC7\u4F4E\u53EF\u80FD\u4F1A\u5BFC\u81F4 npm \u62A5\u9519\uFF1B\u6240\u4EE5\u5982\u679C\u9047\u5230\u62A5\u9519\u53EF\u4EE5\u5148 fork \u8FD9\u4E2A\u9879\u76EE\u5230\u81EA\u5DF1\u4ED3\u5E93\uFF0C\u5C06 package.json \u4E2D\u7684 node \u7248\u672C\u6539\u6210 12.x \u6216\u4EE5\u4E0A\uFF0C\u5C31\u53EF\u4EE5\u6210\u529F\u90E8\u7F72\u4E86\u3002
4. \u70B9\u51FB\u90E8\u7F72\u6309\u94AE\uFF0C\u5F00\u59CB\u6784\u5EFA\u3002

`,excerpt:"",url:"/posts\\Site\\valine-email"},{title:"CSS \u4E2D\u7684\u5E38\u7528\u5355\u4F4D",content:`\u9996\u5148\u6765\u8BF4\u4E00\u4E0B\u5BF9\u5404\u79CD\u5355\u4F4D\u7684\u5B9A\u4E49\u3002


\u7EDD\u5BF9\u5355\u4F4D\uFF1A\u662F\u4E00\u4E2A\u56FA\u5B9A\u7684\u503C\uFF0C\u53CD\u5E94\u4E86\u4E00\u4E2A\u771F\u5B9E\u7684\u7269\u7406\u5C3A\u5BF8\u3002
\u76F8\u5BF9\u5355\u4F4D\uFF1A\u76F8\u5BF9\u4E8E\u53C2\u7167\u5143\u7D20\u7684\u5355\u4F4D\uFF0C\u968F\u53C2\u7167\u5143\u7D20\u53D8\u5316\u3002


1. \u7EDD\u5BF9\u5355\u4F4D
1.1. px
1px \u5BF9\u5E94\u663E\u793A\u5668\u5C4F\u5E55\u4E0A\u7684\u4E00\u4E2A\u663E\u793A\u50CF\u7D20\u70B9\u3002
2. \u76F8\u5BF9\u5355\u4F4D
2.1. em
\u76F8\u5BF9\u4E8E\u8BE5\u5143\u7D20\u7684 font-size \u5C5E\u6027\u51B3\u5B9A\uFF0C1em = 1[font-size]\u3002
2.2. rem(font size of the root element)
\u76F8\u5BF9\u4E8E\u6839\u5143\u7D20(html)\u7684\u5B57\u4F53\u5927\u5C0F\u51B3\u5B9A\u3002
2.3. %

\u4E00\u822C\u5B50\u5143\u7D20\uFF1A height \u6216 width \u76F8\u5BF9\u4E8E\u76F4\u63A5\u7236\u5143\u7D20\u7684 height \u6216 width\uFF1B
\u975E relative \u5B9A\u4F4D\u7684\u5B50\u5143\u7D20\uFF1A
\u5B50\u5143\u7D20\u7684 left \u6216 right \u76F8\u5BF9\u4E8E\u76F4\u63A5\u975E static \u5B9A\u4F4D\u7236\u5143\u7D20\u7684 width\uFF1B
\u5B50\u5143\u7D20\u7684 top \u6216 bottom \u76F8\u5BF9\u4E8E\u76F4\u63A5\u975E static \u5B9A\u4F4D\u7236\u5143\u7D20\u7684 height\uFF1B


\u5B50\u5143\u7D20\u7684 padding \u6216 margin\uFF1A\u5782\u76F4\u548C\u6C34\u5E73\u65B9\u5411\u90FD\u76F8\u5BF9\u4E8E\u76F4\u63A5\u7236\u5143\u7D20\u7684 width\uFF1B
\u5B50\u5143\u7D20\u7684 border-radius, translate, background-size\uFF1A\u76F8\u5BF9\u4E8E\u5143\u7D20\u81EA\u8EAB\u7684 width\u3002

2.4. vw / vh
\u76F8\u5BF9\u4E8E\u5F53\u524D\u89C6\u53E3(view port)\u7684\u5BBD\u5EA6 / \u9AD8\u5EA6\u3002
2.5. vmin / vmax
\u76F8\u5BF9\u4E8E\u5F53\u524D\u89C6\u53E3\u5BBD\u5EA6(vw)\u548C\u9AD8\u5EA6(vh)\u7684\u6700\u5C0F\u503C\uFF08\u5E38\u7528\u4E8E APP \u6A2A\u5C4F\u9002\u914D\uFF09\u3002
`,excerpt:"",url:"/posts\\Tech\\CSS\\unit"},{title:"High-Frequency Git CMD",content:`1. Global config
# global username
git config --global user.name &quot;xxx&quot;

# global email
git config --global user.email &quot;xxx@email.com&quot;

# show configured info
git config --global --list

# clean configured info
git config --global --unset [user.name]

2. Generate key
ssh-keygen -t rsa -C &quot;xxx@email.com&quot;

`,excerpt:"",url:"/posts\\Tech\\Git\\cmd"},{title:"Multi-User Configuration",content:`Add the file config to ~/.ssh.
# ~/.ssh/config

# site alias
Host github.com

# domain name
HostName github.com

# verify method
PreferredAuthentications publickey

# username(email better)
User user@email.com

# key file location
IdentityFile ~/.ssh/id_rsa

`,excerpt:"",url:"/posts\\Tech\\Git\\uconfig"},{title:"HTML Tag [object] VS [embed]",content:`The two tags are both able to render media object such as audio, video, pdf and flash.Due to the compatibility depending on different browsers, we should mainly use &lt;object&gt;.
1. &lt;object&gt;
Supported by all major browsers
&lt;object width=&quot;400&quot; height=&quot;400&quot; data=&quot;data path&quot;&gt;
    rendered when the tag is not being supported.
&lt;/object&gt;

2. &lt;embed&gt;
Supported by all major browsers(no longer recommended).
&lt;embed width=&quot;550&quot; height=&quot;400&quot; src=&quot;data path&quot; /&gt;

3. Combination usage
&lt;object width=&quot;400&quot; height=&quot;400&quot; data=&quot;data path&quot;&gt;
    &lt;!-- Typically in IE --&gt;
    &lt;embed width=&quot;550&quot; height=&quot;400&quot; src=&quot;data path&quot; /&gt;
&lt;/object&gt;

`,excerpt:"",url:"/posts\\Tech\\HTML\\embed-object"},{title:"JavaScript \u4E00\u952E\u56DE\u5230\u9876\u90E8",content:`1. \u73AF\u5883
Vue3 + TS
2. \u601D\u8DEF

\u521B\u5EFA\u7EC4\u4EF6\u63D2\u5165\u9875\u9762\uFF0C\u4E3A\u63A7\u4EF6\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6(click)\uFF0C\u5E76\u9690\u85CF\uFF1B
\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u540E(onMounted)\uFF0C\u4E3Awindow\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6(croll)\uFF1B
\u5B9E\u65F6\u76D1\u542C\u6EDA\u52A8\u9AD8\u5EA6(scrollTop)\uFF0C\u8D85\u8FC7\u8BBE\u5B9A\u9AD8\u5EA6\u503C\u663E\u793A\u63A7\u4EF6\uFF1B
\u70B9\u51FB\u63A7\u4EF6\uFF0C\u6EDA\u52A8\u9AD8\u5EA6\u91CD\u7F6E\u4E3A 0\uFF0C\u5E76\u9690\u85CF\u63A7\u4EF6\uFF1B
\u4E3A\u4E86\u8282\u7701\u6027\u80FD\u5F00\u9500\uFF0C\u79BB\u5F00\u9875\u9762\u524D\uFF0C\u9700\u8981\u79FB\u9664\u6EDA\u52A8\u4E8B\u4EF6\u3002

3. \u5B9E\u73B0
&lt;template&gt;
    &lt;div class=&quot;back-top&quot; :style=&quot;{ display }&quot; @click=&quot;backTop&quot;&gt;
        &lt;p&gt;Backtop&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, onMounted, onUnmounted, computed } from &#39;vue&#39;

const scrollHeight = ref(0) // \u6EDA\u52A8\u9AD8\u5EA6
const display = computed(() =&gt; { // \u5927\u4E8E\u8BBE\u5B9A\u503C\u663E\u793A\u63A7\u4EF6
    return scrollHeight.value &gt; 400 ? &#39;block&#39; : &#39;none&#39;
})
// \u9875\u9762\u52A0\u8F7D\u5B8C\u6210
onMounted(() =&gt; {
    // \u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6
    window.addEventListener(&#39;scroll&#39;, scrollFn)
})
// \u9875\u9762\u5378\u8F7D
onUnmounted(() =&gt; {
    // \u79FB\u9664\u6EDA\u52A8\u4E8B\u4EF6
    window.removeEventListener(&#39;scroll&#39;, scrollFn)
})
const scrollFn = (e) =&gt; {
    // \u83B7\u53D6\u5F53\u524D\u6EDA\u52A8\u9AD8\u5EA6
    scrollHeight.value = document.documentElement.scrollTop
}
// \u70B9\u51FB\u8FD4\u56DE\u9876\u90E8
const backTop = () =&gt; {
    window.scrollTo(0, 0)
}

&lt;/script&gt;
&lt;style lang=&quot;sass&quot; scoped&gt;
.back-top
    position: fixed
    bottom: 20px
    right: 20px
    text-align: center
    cursor: pointer
    z-index: 1
&lt;/style&gt;

`,excerpt:"",url:"/posts\\Tech\\JS\\backtop"},{title:"One-click Copy",content:`1. Definition
export class CopyBoard {
    // which conainer the content in
    private codeEles: HTMLCollection = document.getElementsByTagName(&#39;pre&#39;)

    constructor() {
        const eleArr: Element[] = Array.from(this.codeEles)
        eleArr.forEach(ele =&gt; {
            const btn: HTMLButtonElement = document.createElement(&#39;button&#39;)
            btn.innerText = &#39;copy&#39;
            btn.setAttribute(&#39;class&#39;, &#39;btn-copy&#39;)
            ele.appendChild(btn)

            btn.addEventListener(&#39;click&#39;, function () {
                // textarea tag keep a from of the content
                const input: HTMLInputElement = document.createElement(&#39;textarea&#39;) 
                const prev: HTMLElement = btn.previousElementSibling as HTMLElement
                input.value = prev.innerText;
                // add a input to body
                document.body.appendChild(input)
                // select input content
                input.select()
                // execute copy cmd
                document.execCommand(&#39;copy&#39;)
                // successful tip
                btn.innerText = &#39;copied&#39;
                // remove input from body
                document.body.removeChild(input)
            })
        });
    }
}

2. Instantation
&lt;script setup lang=&quot;ts&quot;&gt;
import { CopyBoard } from &#39;copyboard.ts&#39;
import { onMounted } from &quot;vue&quot;;

onMounted(() =&gt; {
    new CopyBoard()
})
&lt;/script&gt;

`,excerpt:"",url:"/posts\\Tech\\JS\\copy"},{title:"ES6+ \u65B0\u7279\u6027",content:`1. \u57FA\u7840
1.1. let &amp; const

let: \u58F0\u660E\u53D8\u91CF
  \u4EE3\u66FF var \u4F7F\u7528\uFF0C\u58F0\u660E\u7684\u53D8\u91CF\u65E0\u6CD5\u5728\u201C\u6682\u65F6\u6027\u6B7B\u533A\u201D\u4E2D\u8BBF\u95EE\uFF1B
const: \u58F0\u660E\u5E38\u91CF
  \u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u5730\u5740\uFF08\u6307\u9488\uFF09\u4E0D\u53EF\u88AB\u4FEE\u6539\u3002

1.2. \u6A21\u677F\u5B57\u7B26\u4E32
\u4F7F\u5B57\u7B26\u4E32\u8FDE\u63A5\u65B9\u4FBF\u6613\u8BFB\u3002
const name = &#39;Tom&#39;
const temp = \`Hi, \${person.name}\`

1.3. \u7BAD\u5934\u51FD\u6570
\u7279\u6027\uFF1A

\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684 this\uFF0C\u800C\u662F\u53D6\u51B3\u4E8E\u4E0A\u4E0B\u6587\u4E2D\u7684 this\uFF1B
\u4E0D\u80FD\u7528 new \u5173\u952E\u5B57\u8C03\u7528\uFF0C\u56E0\u4E3A\u6CA1\u6709\u81EA\u5DF1\u7684 prototype \u5C5E\u6027\uFF1B

const fn = () =&gt; {
    console.log(this) // window
}

1.4. \u51FD\u6570\u9ED8\u8BA4\u53C2\u6570
const fn = (n = 1) =&gt; {
    return n * 10
}
console.log(fn()) // 10

1.5. \u5C55\u5F00\u8FD0\u7B97\u7B26(\u63A5\u6536\u51FD\u6570\u5269\u4F59\u53C2\u6570)
\u5C55\u5F00\u5BF9\u8C61\u6216\u6570\u7EC4
// \u6570\u7EC4
const list = [1, 2, 3]
const list2 = [4, 5, 6]
console.log([...list, ...list2]) // 1, 2, 3
// \u5BF9\u8C61
const obj = { name: &#39;Tom&#39;, age: 10 }
const obj2 = {
    ...obj,
    gender: 0
}
console.log(obj2) // { name: &#39;Tom&#39;, age: 10, gender: 0 }

\u63A5\u6536\u5269\u4F59\u53C2\u6570\uFF1A
const fn = (n, ...args) =&gt; {
    console.log(args) // \u6CA1\u6709\u5F62\u53C2\u63A5\u6536\u7684\u53C2\u6570 [2, 3]
}
fn(1,2,3)

1.6. \u5BF9\u8C61/\u6570\u7EC4\u89E3\u6784
// \u5BF9\u8C61
const person = { name: &#39;Tom&#39;, age: 10, gender: 0 }
const { name:newName, age } = person // \u5C5E\u6027\u91CD\u547D\u540D propName:newPropName
console.log(newName, age) // Tom 10
// \u6570\u7EC4
const list = [1, 2, 3]
const [, b, c] = list // \u4E0D\u9700\u8981\u7684\u4F4D\u7F6E\u4F7F\u7528,\u5360\u4F4D
console.log(b, c); // 2 3

1.7. \u4E8C\u8FDB\u5236 &amp; \u516B\u8FDB\u5236\u6574\u6570\u5B57\u9762\u91CF

\u5341\u8FDB\u5236\uFF0C\u65E0\u524D\u7F00
\u4E8C\u8FDB\u5236\uFF0C\u524D\u7F00 0b \u6216 0B
\u516B\u8FDB\u5236\uFF0C\u524D\u7F00 0o \u6216 0O
\u5341\u516D\u8FDB\u5236\uFF0C\u524D\u7F00 0x \u6216 0X

const binary = 0b10 // \u4E8C\u8FDB\u5236 2
const octol = 0o10 // \u516B\u8FDB\u5236 8

1.8. Class &amp; super\u5173\u952E\u5B57
Class &amp; super\uFF1A
// super class
class Person {
    constructor(name) {
        this.name = name
    }
    study() {
        console.log(\`\${this.name} is studying!\`);
    }
}
// sub class\uFF08extends from Person\uFF09
class Student extends Person {
    constructor(name) {
        super(name) // call constructor of Person
    }
}
const s = new Student(&#39;Tom&#39;) // All person must to study!
s.study() // Tom is studying!

\u5728\u5BF9\u8C61\u4E2D\u4F7F\u7528 super\uFF1A
// super object
const person = {
    study() {
        console.log(\`All person must to study!\`);
    }
}
// sub object
const student = {
    study() {
        super.study()
    }
}
// \u5C06 student \u7684 prototype \u6307\u5411 person \u7684 prototype
Object.setPrototypeOf(student, person)

student.study()

1.9. \u8FED\u4EE3\u5668(Iterator)
for...of \u904D\u5386
2. \u5B57\u7B26\u4E32\u65B0\u7279\u6027
2.1. includes(substr: string, index: number)
\u4ECE\u4E0B\u6807 index \u5F00\u59CB\uFF0C\u67E5\u8BE2\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u5B50\u4E32(substr)\uFF0C\u533A\u5206\u5927\u5C0F\u5199\u3002\u8FD4\u56DE\uFF1Aboolen
2.2. startsWidth(substr: string, index: number) / endsWidth(substr: string, index: number)
\u4ECE\u4E0B\u6807(index) \u5F00\u59CB\uFF0C\u67E5\u8BE2\u5B57\u7B26\u4E32\u662F\u5426\u4EE5\u6307\u5B9A\u5B50\u4E32(substr)\u5F00\u5934/\u7ED3\u5C3E\uFF0C\u533A\u5206\u5927\u5C0F\u5199\u3002\u8FD4\u56DE\uFF1Aboolean
2.3. repeat(n: number)
\u5C06\u539F\u5B57\u7B26\u4E32\u91CD\u590D n \u6B21\u3002\u8FD4\u56DE\uFF1Astring \u65B0\u5B57\u7B26\u4E32
2.4. padStart(lenth: number, str: string) / padEnd(length: number, str: string)
\u586B\u5145\u51FD\u6570\u3002\u5982\u679C\u5B57\u7B26\u4E32\u4E0D\u591F\u957F\u5EA6 length\uFF0C\u5C06\u7528 str \u5C06\u5B57\u7B26\u4E32\u8865\u5145\u5230\u5934\u90E8/\u5C3E\u90E8\u3002 
\u8FD4\u56DE\uFF1A\u65B0\u5B57\u7B26\u4E32
2.5. at(index: number)
\u67E5\u627E\u6307\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26\uFF0C\u652F\u6301\u8D1F\u7D22\u5F15\u3002\u8FD4\u56DE\uFF1Astring \u6307\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26
3. \u5BF9\u8C61\u65B0\u7279\u6027
3.1. Object.assign(target, source1...)
\u5C06\u5BF9\u8C61\u7684\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\u590D\u5236\u5230\u76EE\u6807\u5BF9\u8C61\u4E2D\u3002\u5C5E\u4E8E\u6D45\u62F7\u8D1D\u3002\u8FD4\u56DE\u503C\uFF1AObject \u62F7\u8D1D\u7684\u5BF9\u8C61
3.2. Object.is(value1, value2)
\u6BD4\u8F83\u4E24\u4E2A\u503C\u662F\u5426\u4E25\u683C\u76F8\u7B49(===)\u3002\u8FD4\u56DE\u503C\uFF1Aboolean
3.3. Object.keys(target: Object) / Object.values(target: Object)
\u8FD4\u56DE\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027/\u503C\u3002\u8FD4\u56DE\u503C\uFF1AArray
3.4. Object.entries(target: Object)
\u8FD4\u56DE\u5BF9\u8C61\u952E\u503C\u5BF9\u3002\u8FD4\u56DE\u503C\uFF1A[][]
`,excerpt:"",url:"/posts\\Tech\\JS\\es6"},{title:"NPM Registry Configuration",content:`1. By NPM config cmd
# show current
npm config get registry
# set a registry: taobao
npm config set registry https://registry.npm.taobao.org # or cnpm: http://r.cnpmjs.org/
# reset
npm config set registry https://registry.npmjs.org/

2. By NRM
NRM is a registry manager for NPM. It is being used for quickly alternating NPM registry.
Firstly, install NRM globally
$ npm install -g nrm

Alternate registry
# show all registries
nrm ls
# use registry
nrm use [name] # eg: taobao

More cmd nrm --help
`,excerpt:"",url:"/posts\\Tech\\NPM\\npm-reg"},{title:"\u4F7F\u7528 Vite \u6784\u5EFA\u9879\u76EE",content:`1. \u6784\u5EFA\u547D\u4EE4\uFF1A
# Npm
$ npm create vite@latest [app-name] --template [vue/react]
# Yarn
$ yarn create vite [app-name] --template [vue/react]

\u8F93\u5165\u547D\u4EE4\uFF0C\u9009\u62E9\u6784\u5EFA\u6A21\u677F\u548C JS \u7C7B\u578B\u3002
2. \u5B89\u88C5\u4F9D\u8D56
\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u8FDB\u5165\u9879\u76EE\u76EE\u5F55\uFF0C\u5B89\u88C5\u4F9D\u8D56\uFF1A
$ cd my-vue-app
$ npm install

3. \u542F\u52A8\u9879\u76EE
npm run dev

`,excerpt:"",url:"/posts\\Tech\\Vite\\start"},{title:"\u6D4F\u89C8\u5668\u63D2\u4EF6\u63A8\u8350",content:`1. \u5B89\u88C5\u65B9\u5F0F

\u80FD\u8BBF\u95EE\u63D2\u4EF6\u5E02\u573A\u7684\u7528\u6237\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u63D2\u4EF6\u5E02\u573A\u5B89\u88C5\uFF0C\u65B9\u4FBF\u540C\u6B65\u81F3\u6D4F\u89C8\u5668\u8D26\u53F7\uFF1B
Chrome\uFF1Ahttps://chrome.google.com/webstore/category/extensions
Edge: https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home


\u4E0D\u80FD\u8BBF\u95EE\u63D2\u4EF6\u5E02\u573A\u7684\u7528\u6237\u53EF\u4EE5\u4E0B\u8F7D crx \u6587\u4EF6\u624B\u52A8\u5B89\u88C5\uFF0C\u4F46\u65E0\u6CD5\u540C\u6B65\u5230\u6D4F\u89C8\u5668\u8D26\u53F7\u3002 
\u63D2\u4EF6 crx \u4E0B\u8F7D\uFF1AChrome\u63D2\u4EF6\u7F51, Cnplugins




2. \u5E38\u89C4\u7C7B
2.1. IGuge Helper(iGG\u8C37\u6B4C\u5B66\u672F\u52A9\u624B)
\u514D\u8D39\u8BBF\u95EE\u8C37\u6B4C\u5B66\u672F\u3001\u8C37\u6B4C\u641C\u7D22\u3001Gmail\u3001\u63D2\u4EF6\u5E02\u573A\u7B49\u8C37\u6B4C\u57FA\u672C\u670D\u52A1\u3002
2.2. Tampermonkey(\u6CB9\u7334)
\u7528\u6237\u811A\u672C\u7BA1\u7406\uFF0C\u53EF\u4EE5\u5B89\u88C5\u5404\u7C7B\u4E30\u5BCC\u7684\u6269\u5C55\u811A\u672C\u3002
2.3. AdGuard
\u53BB\u9664\u7F51\u9875\u5E7F\u544A\u3002
2.4. Grammarly
\u82F1\u6587\u5199\u4F5C\u8BED\u6CD5\u68C0\u9519\u3001\u7EA0\u9519\u548C\u8BC4\u5206\u3002
2.5. Vimium
\u5168\u952E\u76D8\u64CD\u4F5C\u6D4F\u89C8\u5668\u3002
2.6. SuperCopy
\u89E3\u9664\u6587\u672C\u590D\u5236\u7981\u6B62\u3002

3. \u5F00\u53D1\u7C7B
3.1. FeHelper(\u524D\u7AEF\u52A9\u624B)
JSON \u4EE3\u7801\u7F8E\u5316\u3002
`,excerpt:"",url:"/posts\\Tool\\ext-browser"},{title:"VsCode \u795E\u4ED9\u63D2\u4EF6",content:`1. Setting Sync
\u901A\u8FC7 GitHub \u8D26\u53F7\u540C\u6B65 VsCode \u8BBE\u7F6E\u3002
2. Code Runner
\u4E00\u952E\u8FD0\u884C\u4EE3\u7801\u3002
`,excerpt:"",url:"/posts\\Tool\\ext-vscode"},{title:"\u9AD8\u6548\u7387 Windows \u7CFB\u7EDF\u5DE5\u5177",content:`1. QTTabBar
\u8D44\u6E90\u7BA1\u7406\u5668\u589E\u5F3A\u8F6F\u4EF6\uFF0C\u652F\u6301\u591A\u6807\u7B7E\u9875\u7BA1\u7406\uFF0C\u50CF\u4F7F\u7528\u6D4F\u89C8\u5668\u4E00\u6837\u4F7F\u7528\u8D44\u6E90\u7BA1\u7406\u5668\u3002
2. Geek
\u5378\u8F7D\u8F6F\u4EF6\uFF0C\u540C\u65F6\u6E05\u7406\u6CE8\u518C\u8868\u548C\u6B8B\u7559\u7684\u6587\u4EF6\u5939\u3002
`,excerpt:"",url:"/posts\\Tool\\sf-win"},{title:"Vue3 \u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F",content:`1. \u4E0A\u4E0B\u7EA7\u901A\u4FE1
1.1. Props (\u4E0A -&gt; \u4E0B)
\u4E0A\u7EA7\u7EC4\u4EF6\u4F20\u53C2
&lt;!-- index.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import { Ref, ref } from &#39;vue&#39;
import Sub from &#39;./Sub.vue&#39;
const count: Ref&lt;number&gt; = ref(0)
&lt;/script&gt;

&lt;template&gt;
    &lt;div&gt;
        &lt;Sub :count=&quot;count&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

\u4E0B\u7EA7\u7EC4\u4EF6\u63A5\u6536
&lt;!-- Sub.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
defineProps&lt;{ count: number }&gt;()
&lt;/script&gt;
        
&lt;template&gt;
    &lt;div&gt;
        {{count}}
    &lt;/div&gt;
&lt;/template&gt;

1.2. emit (\u4E0B -&gt; \u4E0A)
\u4E0A\u7EA7\u7EC4\u4EF6\u63A5\u6536
&lt;!-- Sub.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import Sub from &#39;./Sub.vue&#39;;

const subClick = (msg: string): void =&gt; {
    console.log(&#39;recieve: &#39;, msg);
}
&lt;/script&gt;
    
&lt;template&gt;
    &lt;div&gt;
        &lt;Sub :count=&quot;count&quot; @onClick=&quot;subClick&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

\u4E0B\u7EA7\u7EC4\u4EF6\u4F20\u53C2
&lt;script setup lang=&quot;ts&quot;&gt;
import { Ref, ref } from &#39;vue&#39;
const msg: Ref&lt;string&gt; = ref(&#39;msg from Sub&#39;)
const emits = defineEmits([&#39;onClick&#39;])
const onClick = (): void =&gt; {
    console.log(&#39;send:&#39;, msg.value);
    emits(&#39;onClick&#39;, msg.value)
}
&lt;/script&gt;
        
&lt;template&gt;
    &lt;div&gt;
        &lt;button @click=&quot;onClick&quot;&gt;Send&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

`,excerpt:"",url:"/posts\\Vue\\comm"},{title:"\u56FE\u7247\u8D44\u6E90\u9884\u52A0\u8F7D",content:`\u9884\u52A0\u8F7D:\u5728\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u524D\uFF0C\u63D0\u524D\u52A0\u8F7D\u56FE\u7247\u7B49\u8D44\u6E90\uFF0C\u6709\u5229\u4E8E\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002
&lt;script setup lang=&quot;ts&quot;&gt;
import { onBeforeMount } from &quot;vue&quot;;
// some image url...
const urls: string[] = []
// before window loaded
onBeforeMount(() =&gt; {
    preloadImg()
})
// preload image
const preloadImg = (): void =&gt; {
    urls.forEach(url =&gt; {
        const img = new Image()
        img.src = url
        img.onload = () =&gt; {
            // loaded
        }
    })
}
&lt;/script&gt;

`,excerpt:"",url:"/posts\\Vue\\preload"},{title:"reactive \u58F0\u660E\u5F0F\u5BF9\u8C61\u91CD\u65B0\u8D4B\u503C\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u89E3\u51B3\u529E\u6CD5",content:`1. \u4F7F\u7528 ref \u58F0\u660E\u53D8\u91CF
&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
let obj = ref({ // \u58F0\u660E\u53D8\u91CF
    name: &#39;Tom&#39;
})
// \u6A21\u62DF\u4FEE\u6539\u64CD\u4F5C
setTimeout(() =&gt; {
    obj.value = { // \u91CD\u65B0\u8D4B\u503C
        name: &#39;Coco&#39;
    }
}, 1000);
&lt;/script&gt;
    
&lt;template&gt;
    &lt;div class=&quot;index&quot;&gt;
        {{ obj.name }}
    &lt;/div&gt;
&lt;/template&gt;

2. \u5C06\u6570\u636E\u4FDD\u5B58\u5230\u5BF9\u8C61\u5C5E\u6027\u4E2D
&lt;script setup lang=&quot;ts&quot;&gt;
import { reactive, toRefs } from &#39;vue&#39;
let obj = reactive({
    data: {
        name: &#39;Tom&#39;
    }
})
const { data } = toRefs(obj) // \u89E3\u6784\u5230\u6A21\u677F\u4E2D\u76F4\u63A5\u4F7F\u7528
// \u6A21\u62DF\u4FEE\u6539\u64CD\u4F5C
setTimeout(() =&gt; {
    obj.data = {
        name: &#39;Coco&#39;
    }
}, 1000);
&lt;/script&gt;
    
&lt;template&gt;
    &lt;div class=&quot;index&quot;&gt;
        name: {{ data.name }}
    &lt;/div&gt;
&lt;/template&gt;

`,excerpt:"",url:"/posts\\Vue\\reactive-modify"},{title:"Vue3 \u5B50\u7EC4\u4EF6\u66F4\u65B0\u4E0A\u7EA7\u7EC4\u4EF6\u53C2\u6570",content:`\u4E0A\u7EA7\u7EC4\u4EF6\u4F20\u53C2\u3002
&lt;!-- index.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import { Ref, ref } from &#39;vue&#39;
import Sub from &#39;./Sub.vue&#39;;
const count: Ref&lt;number&gt; = ref(0)
&lt;/script&gt;
    
&lt;template&gt;
    &lt;div class=&quot;index&quot;&gt;
        {{ count }}
        &lt;!-- \u7ED1\u5B9A\u53C2\u6570 count --&gt;
        &lt;Sub v-model:count=&quot;count&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

\u4E0B\u7EA7\u7EC4\u4EF6\u63A5\u6536\uFF0C\u5E76\u5728\u4E8B\u4EF6\u4E2D\u66F4\u65B0\u53C2\u6570\u3002
&lt;!-- Sub.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
// \u5B9A\u4E49\u63A5\u6536\u53C2\u6570
defineProps&lt;{ count: number }&gt;()
// \u6CE8\u518C\u4E8B\u4EF6
const emits = defineEmits([&#39;update:count&#39;])
&lt;/script&gt;
        
&lt;template&gt;
    &lt;div class=&quot;child&quot;&gt;
        &lt;!-- \u66F4\u65B0\u53C2\u6570 update:propName --&gt;
        &lt;input type=&quot;text&quot; @input=&quot;emits(&#39;update:count&#39;, $event.target.value)&quot;&gt;
    &lt;/div&gt;
&lt;/template&gt;

\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7EC4\u4EF6\u4E0A\u7684 v-model \u4F7F\u7528 modelValue \u4F5C\u4E3A prop\uFF0C update:modelValue \u4F5C\u4E3A\u4E8B\u4EF6\u3002
`,excerpt:"",url:"/posts\\Vue\\v3-model"}];const No={class:"input-group"},Ao=i("i",{class:"fa fa-search"},null,-1),Io={class:"result"},jo=["href"],Bo=["innerHTML"],Fo=["innerHTML"],Ho={key:0,class:"empty"},Ro=i("i",{class:"fa fa-meh-o"},null,-1),Do=j(" No Data "),Oo=[Ro,Do],Vo=b({__name:"Search",setup(t){const{theme:e}=L(),n=N("");let o=D([]);const s=v(()=>!!(o.length||n.value));Q(()=>{a(n.value)});function a(p){o.length=0,p.trim()!==""&&Mo.forEach(h=>{const m=JSON.parse(JSON.stringify(h)),k=new RegExp(p,"ig"),C=m.title.match(k),y=m.content.match(k);C&&(m.title=c(p,m.title)),y&&(m.content=c(p,m.content)),(C||y)&&o.push(m)})}const c=(p,h)=>{const m=new RegExp(p,"ig");return h.replace(m,`<span class="search-highlight">${p}</span>`)},d=()=>{n.value=""};return(p,h)=>r(e).search?(l(),u("div",{key:0,class:M(["search-wrapper",r(s)?"open":""])},[i("div",No,[Ao,et(i("input",{type:"text",placeholder:"Search","onUpdate:modelValue":h[0]||(h[0]=m=>n.value=m)},null,512),[[Ut,n.value]]),n.value?(l(),u("i",{key:0,class:"fa fa-trash",onClick:d})):_("",!0)]),i("ul",Io,[(l(!0),u(S,null,A(r(o),m=>(l(),u("li",{key:m.title},[i("a",{href:m.url,onClick:d},[i("p",{innerHTML:m.title,class:"title"},null,8,Bo),i("p",{innerHTML:m.content,class:"content"},null,8,Fo)],8,jo)]))),128)),!r(o).length&&n.value!==""?(l(),u("li",Ho,Oo)):_("",!0)])],2)):_("",!0)}}),Uo=b({__name:"PostList",props:{posts:Array},setup(t){const e=N("");return(n,o)=>(l(),u(S,null,[f(Vo,{filterKey:e.value,"onUpdate:filterKey":o[0]||(o[0]=s=>e.value=s)},null,8,["filterKey"]),i("div",null,[(l(!0),u(S,null,A(t.posts,(s,a)=>(l(),P(Eo,{key:a,article:s},null,8,["article"]))),128))])],64))}});const Go={class:"pagination"},zo=["href"],Jo=["href"],Wo=["href"],Yo=b({__name:"Pagination",props:{current:Number,pageNum:Number},setup(t){return(e,n)=>(l(),u("div",Go,[t.current>1?(l(),u("a",{key:0,class:"link",href:r(E)(t.current===2?"/index.html":`/page_${t.current-1}.html`)},"Prev",8,zo)):_("",!0),(l(!0),u(S,null,A(t.pageNum,o=>(l(),u("a",{class:M(["link",{active:t.current===o}]),key:o,href:r(E)(o===1?"/index.html":`/page_${o}.html`)},g(o),11,Jo))),128)),t.current<t.pageNum?(l(),u("a",{key:1,class:"link",href:r(E)(`/page_${t.current+1}.html`)},"Next",8,Wo)):_("",!0)]))}});var Xo=x(Yo,[["__scopeId","data-v-653fd1d2"]]);const Qo=b({__name:"index",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(t){const e=t;let n=D([]);return n=v(()=>{var s;return(((s=st(e).posts)==null?void 0:s.value)||[]).map(a=>{const c=JSON.parse(JSON.stringify(a)),d=c.frontMatter.date;return c.frontMatter.dateArr=d.split("-"),c})}),I(()=>{vo()}),(o,s)=>(l(),u(S,null,[f(Uo,{posts:r(n)},null,8,["posts"]),f(Xo,{current:t.pageCurrent,pageNum:t.pagesNum},null,8,["current","pageNum"])],64))}});class Zo{constructor(){this.x=50,this.y=50,this.vx=Math.random()*2+2,this.vy=Math.random()*2,this.color="#fff",this.shadowBlur=Math.random()*3,this.shadowX=Math.random()*2-1,this.shadowY=Math.random()*2-1,this.radiusX=Math.random()*3,this.radiusY=Math.random()*3,this.rotation=Math.PI*Math.floor(Math.random()*2)}}class ct{constructor(e){this.width=300,this.height=300,this.dustQuantity=50,this.dustArr=[];const n=document.getElementById(e);if(n)this.canvas=n,this.ctx=n.getContext("2d"),this.build(),window.addEventListener("resize",()=>this.resize());else throw new Error("canvasID \u65E0\u6548")}build(){if(this.resize(),this.ctx){const e=ct.getPoint(this.dustQuantity);for(let n of e){const o=new Zo;this.buildDust(n[0],n[1],o),this.dustArr.push(o)}setInterval(()=>{this.play()},40)}}play(){var n;const e=this.dustArr;(n=this.ctx)==null||n.clearRect(0,0,this.width,this.height);for(let o of e)if(o.x<0||o.y<0){const s=this.width,a=Math.floor(Math.random()*window.innerHeight);o.x=s,o.y=a,this.buildDust(s,a,o)}else{const s=o.x-o.vx,a=o.y-o.vy;this.buildDust(s,a,o)}}buildDust(e,n,o){const s=this.ctx;e&&(o.x=e),n&&(o.y=n),s&&(s.beginPath(),s.shadowBlur=o.shadowBlur,s.shadowColor=o.color,s.shadowOffsetX=o.shadowX,s.shadowOffsetY=o.shadowY,s.ellipse(o.x,o.y,o.radiusX,o.radiusY,o.rotation,0,Math.PI*2),s.closePath(),s.fillStyle=o.color,s.fill())}resize(){const e=this.canvas,n=window.innerWidth,o=window.innerHeight;this.width=n,this.height=o,this.dustQuantity=Math.floor((n+o)/38),e!==void 0&&(e.width=n,e.height=o)}static getPoint(e=1){let n=[];for(let o=0;o<e;o++){const s=Math.floor(Math.random()*window.innerWidth),a=Math.floor(Math.random()*window.innerHeight);n.push([s,a])}return n}}const Ko={class:"menu-list"},ts=["href"],es=["title"],ns=b({__name:"index",setup(t){const{theme:e,page:n}=L(),o=e.value.nav,s=v(()=>`/${n.value.relativePath.split(".")[0]}`);return(a,c)=>(l(),u("header",null,[i("nav",null,[i("div",Ko,[(l(!0),u(S,null,A(r(o),d=>(l(),u("a",{href:d.link,key:d.link,class:M(d.link===r(s)?"active":"")},[i("i",{class:M(`fa fa-${d.icon}`),title:d.text},null,10,es)],10,ts))),128))])])]))}});var os=x(ns,[["__scopeId","data-v-4729bdee"]]);const ss={key:0,class:"social-links"},rs=["href"],as=["title"],is=b({__name:"SocialLinks",setup(t){const{theme:e}=L();return(n,o)=>r(e).socialLinks.length?(l(),u("div",ss,[(l(!0),u(S,null,A(r(e).socialLinks,s=>(l(),u("a",{key:s.link,href:s.link,target:"_blank"},[i("i",{class:M(`fa fa-${s.icon}`),title:s.icon},null,10,as)],8,rs))),128))])):_("",!0)}});var ls=x(is,[["__scopeId","data-v-d284cb48"]]);const ut=t=>(H("data-v-2817a37c"),t=t(),R(),t),cs={key:0,class:"aside-wrapper"},us={href:"/",class:"logo"},ds=["src"],ps={class:"center dr"},hs={href:"/"},ms={class:"total"},gs=["href"],_s=ut(()=>i("span",{class:"total-title"},"Archives Total",-1)),vs={class:"total-number"},fs={class:"total-tags"},bs=ut(()=>i("span",{class:"total-title"},"Tags:",-1)),ys={class:"total-number"},xs={class:"total-categories"},ks=ut(()=>i("span",{class:"total-title"},"Categories:",-1)),$s={class:"total-number"},ws=b({__name:"index",setup(t){const{site:e,theme:n,frontmatter:o}=L(),s=e.value.title,a=n.value.logo,c=n.value.posts.length,d=n.value.tags.length,p=n.value.cats.length,h=v(()=>o.value.sidebar);return(m,k)=>r(h)?(l(),u("div",cs,[i("aside",null,[i("div",null,[i("a",us,[i("img",{src:r(E)(r(a)),alt:"Logo"},null,8,ds)]),i("h1",ps,[i("a",hs,"Dr."+g(r(s)),1)]),i("section",ms,[i("a",{class:"total-archives",href:r(E)("/pages/archives")},[_s,i("span",vs,g(r(c)),1)],8,gs),i("div",fs,[bs,i("span",ys,g(r(d)),1)]),i("div",xs,[ks,i("span",$s,g(r(p)),1)])]),f(ls)])])])):_("",!0)}});var Ls=x(ws,[["__scopeId","data-v-2817a37c"]]);class qs{constructor(){this.codeEles=document.getElementsByTagName("pre"),Array.from(this.codeEles).forEach(async n=>{const s=(await ot(()=>import("./message.f7171f40.js"),["assets/message.f7171f40.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/framework.6806ca9c.js","assets/framework.412205eb.js"])).default,a=document.createElement("i");a.setAttribute("class","btn-copy fa fa-clipboard"),n.appendChild(a),a.addEventListener("click",function(){const c=document.createElement("textarea"),d=a.previousElementSibling;c.value=d.innerText,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),s.success("Copied")})})}}const Ss=t=>(H("data-v-059f3759"),t=t(),R(),t),Cs={class:"post-header"},Ts={class:"title"},Ps={class:"info"},Es={class:"item date",datetime:"2022-01-25T19:21:35.000Z"},Ms=Ss(()=>i("div",{class:"divider"},null,-1)),Ns=b({__name:"PostHeader",setup(t){const{frontmatter:e}=L();let n=v(()=>e.value.title),o=v(()=>{const s=e.value.date;return(s?new Date(s).toJSON().split("T")[0]:"").split("-")});return(s,a)=>(l(),u("div",Cs,[i("h1",Ts,g(r(n)),1),i("div",Ps,[i("span",Es,g(r(o)[2])+" / "+g(r(o)[1])+" / "+g(r(o)[0]),1)]),Ms]))}});var As=x(Ns,[["__scopeId","data-v-059f3759"]]);const dt=t=>(H("data-v-6246841b"),t=t(),R(),t),Is={class:"post-footer"},js=dt(()=>i("span",null,"\u672C\u6587\u4F5C\u8005\uFF1A",-1)),Bs=["href"],Fs=dt(()=>i("span",null,"\u672C\u6587\u94FE\u63A5\uFF1A",-1)),Hs=["href"],Rs=dt(()=>i("li",null,[i("span",null,"\u7248\u6743\u58F0\u660E\uFF1A"),j(" \u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916\uFF0C\u5747\u91C7\u7528 "),i("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},"CC BY-NC-SA 4.0"),j(" \u8BB8\u53EF\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002 ")],-1)),Ds=b({__name:"PostFooter",setup(t){const{page:e,site:n,frontmatter:o}=L();let s=v(()=>{const a=`${e.value.relativePath.split(".")[0]}.html`;return`${n.value.themeConfig.website}/${a}`});return v(()=>o.value.postFooter),(a,c)=>(l(),u("div",Is,[i("ul",null,[i("li",null,[js,i("a",{href:r(n).themeConfig.website,target:"_blank"},g(r(n).title),9,Bs)]),i("li",null,[Fs,i("a",{href:r(s),target:"_blank"},g(r(s)),9,Hs)]),Rs])]))}});var Os=x(Ds,[["__scopeId","data-v-6246841b"]]);const Nt=t=>(H("data-v-2ea4cd0e"),t=t(),R(),t),Vs={class:"prev-next"},Us=Nt(()=>i("hr",null,null,-1)),Gs=["href"],zs={key:1},Js=["href"],Ws={key:1},Ys=Nt(()=>i("hr",null,null,-1)),Xs=b({__name:"PrevNext",setup(t){const{theme:e,page:n}=L(),o=v(()=>e.value.posts),s=v(()=>n.value.frontmatter.title);let a=D({regularPath:"",frontMatter:{title:""}}),c=D({regularPath:"",frontMatter:{title:""}});const d=(p,h)=>{h?(p.regularPath=h.regularPath,p.frontMatter.title=h.frontMatter.title):(p.regularPath="",p.frontMatter.title="")};return Q(()=>{const p=o.value.findIndex(h=>h.frontMatter.title===s.value);if(p>-1){const h=o.value[p-1],m=o.value[p+1];d(a,h),d(c,m)}}),(p,h)=>{var m,k,C,y,$,w;return l(),u("div",Vs,[Us,i("div",null,[et(i("a",{class:"prev",href:r(E)((m=r(a))==null?void 0:m.regularPath)},[r(e).docFooter.prev.icon?(l(),u("i",{key:0,class:M(`fa fa-${r(e).docFooter.prev.icon}`)},null,2)):_("",!0),r(e).docFooter.prev.text?(l(),u("span",zs,g(r(e).docFooter.prev.text),1)):_("",!0),j(" "+g((C=(k=r(a))==null?void 0:k.frontMatter)==null?void 0:C.title),1)],8,Gs),[[ht,r(a).regularPath]]),et(i("a",{class:"next",href:r(E)((y=r(c))==null?void 0:y.regularPath)},[j(g((w=($=r(c))==null?void 0:$.frontMatter)==null?void 0:w.title)+" ",1),r(e).docFooter.next.icon?(l(),u("i",{key:0,class:M(`fa fa-${r(e).docFooter.next.icon}`)},null,2)):_("",!0),r(e).docFooter.next.text?(l(),u("span",Ws,g(r(e).docFooter.next.text),1)):_("",!0)],8,Js),[[ht,r(c).regularPath]])]),Ys])}}});var Qs=x(Xs,[["__scopeId","data-v-2ea4cd0e"]]);function Zs(t){let e=t[0];for(let n=1;n<t.length;n++){const o=t[n];o.length>e.length&&(e=o)}return e}function At(t,e){return Array.from(t).filter(s=>e.test(s.nodeName))}function It(t,e){let n,o,s=0;return function(){n=this,o=arguments;let a=new Date().valueOf();a-s>e&&(t.apply(n,o),s=a)}}const Ks=t=>{t.forEach(e=>{const n=new Image;n.src=e})};const jt=t=>(H("data-v-46ebd702"),t=t(),R(),t),tr=jt(()=>i("i",{class:"fa fa-caret-up"},null,-1)),er=jt(()=>i("p",null,"TOP",-1)),nr=[tr,er],or=b({__name:"BackTop",setup(t){const e=N(0),n=v(()=>e.value>300?"block":"none");I(()=>{window.addEventListener("scroll",s)}),z(()=>{window.removeEventListener("scroll",s)});const o=()=>{e.value=document.documentElement.scrollTop},s=It.bind(this,o,1e3)(),a=()=>{const c=document.documentElement.scrollTop/6,d=setInterval(()=>{document.documentElement.scrollTop=document.documentElement.scrollTop-c,e.value=document.documentElement.scrollTop,e.value<=0&&clearInterval(d)},50)};return(c,d)=>(l(),u("div",{class:"back-top",style:Lt({display:r(n)}),onClick:a},nr,4))}});var sr=x(or,[["__scopeId","data-v-46ebd702"]]);const Z=t=>(H("data-v-4d9b8fe2"),t=t(),R(),t),rr=Z(()=>i("i",{class:"fa fa-heartbeat mr4"},null,-1)),ar=Z(()=>i("p",null,[j(" Published With "),i("a",{href:"https://vitejs.cn/vitepress/",target:"_blank"},"VitePress"),j(" & "),i("a",{href:"https://github.com/Yue-plus/hexo-theme-arknights",target:"_blank"},"Arknights")],-1)),ir=Z(()=>i("div",null,[i("span",null,"\xA9"),i("span",null,"2021 to 2022")],-1)),lr=Z(()=>i("div",null,[i("span",null,"ICP"),i("span",null,"\u2014 RHODEISLAND \u2014")],-1)),cr=b({__name:"Footer",setup(t){const{theme:e}=L(),n=N();let o=D({day:0,hour:0,minute:0,second:0}),s=null;I(()=>{e.value.footer.runtime.enable&&(s=setInterval(a,1e3))}),z(()=>{s&&clearInterval(s)});const a=()=>{const c=_o();o.day=c.day,o.hour=c.hour,o.minute=c.minute,o.second=c.second};return(c,d)=>(l(),u("footer",null,[r(e).footer.runtime.enable?(l(),u("p",{key:0,ref_key:"runtimeRef",ref:n},[rr,j(" "+g(r(o).day)+" days "+g(r(o).hour)+" hours "+g(r(o).minute)+" minutes and "+g(r(o).second)+" seconds ",1)],512)):_("",!0),ar,r(e).footer.copyright?(l(),u(S,{key:1},[ir,lr],64)):_("",!0)]))}});var ur=x(cr,[["__scopeId","data-v-4d9b8fe2"]]);const Bt=/^H[1-6]{1,}$/,dr=t=>{const e=t.childNodes,n=At(e,Bt);return pr(n)};function pr(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n],s=/^(_\d)+(-\d)*/ig,a=o.id.match(s)[0];e.push({nodeName:o.nodeName,text:o.innerText.slice(0,o.innerText.length-1),id:o.id,level:a})}return hr(e)}function hr(t){const e=[],n={};t.forEach(o=>{n[o.level]=o});for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)){const s=n[o];if(/^(_\d)+$/ig.test(o))e.push(s);else{const d=Object.keys(n).filter(h=>h!==o&&o.includes(h)),p=Zs(d);n[p].child?n[p].child.push(s):n[p].child=[s]}}return e}const mr=["href","name","title","onClick"],gr=b({__name:"CataList",props:{tree:Array},setup(t){const e=n=>{n.open=!n.open,n.active=!0};return(n,o)=>(l(),u("ul",null,[(l(!0),u(S,null,A(t.tree,s=>{var a;return l(),u("li",{key:s.id},[i("a",{href:`#${s.id}`,name:s.id,title:s.text,class:M([[s.nodeName,s.active?"active":""],"link"]),onClick:c=>e(s)},g(s.text),11,mr),((a=s.child)==null?void 0:a.length)&&s.open?(l(),P(Ft,{key:0,tree:s.child},null,8,["tree"])):_("",!0)])}),128))]))}});var Ft=x(gr,[["__scopeId","data-v-33c6374d"]]);const _r={key:0,class:"catalog"},vr=b({__name:"index",setup(t){const{frontmatter:e}=L(),n=N(0),o=N(0),s=D({data:[]}),a=D({titleNodes:[],titleMargins:[]});G(e,(y,$)=>{c()},{deep:!0}),I(()=>{c(),window.addEventListener("scroll",p)}),z(()=>{window.removeEventListener("scroll",p)});const c=()=>{var w;const y=(w=document.getElementById("content"))==null?void 0:w.childNodes[0],$=dr(y);s.data=$,o.value=y.getBoundingClientRect().top,m(y)},d=()=>{n.value=document.documentElement.scrollTop,h()},p=It.bind(this,d,50)(),h=()=>{const y=a.titleMargins;for(let $=0;$<y.length;$++){const w=y[$];if(w.top-n.value>=o.value){C(s.data),k(s.data,w.id);return}}},m=y=>{const $=y.childNodes;a.titleNodes=At($,Bt);const w=a.titleNodes.map(B=>({id:B.id,top:B.getBoundingClientRect().top}));a.titleMargins=w,h()},k=(y,$)=>{for(let w=0;w<y.length;w++){const B=y[w];if(B.id===$){B.active=!0,B.open=!0;return}B.child&&k(B.child,$)}},C=y=>{for(let $=0;$<y.length;$++){const w=y[$];w.active&&(w.active=!1),w.child&&C(w.child)}};return(y,$)=>s.data.length?(l(),u("div",_r,[f(Ft,{tree:s.data},null,8,["tree"])])):_("",!0)}});var fr=x(vr,[["__scopeId","data-v-32f802b6"]]);const br={key:0,class:"post-tag"},yr=i("i",{class:"fa fa-tags"},null,-1),xr=["href"],kr=b({__name:"index",setup(t){const{frontmatter:e}=L(),n=v(()=>e.value.page),o=v(()=>e.value.tags||[]);I(()=>{s()}),wt(()=>{s()});const s=()=>{n.value||new qs};return(a,c)=>{const d=W("Content");return l(),u("div",{class:M(["content",r(n)?"":"post-content"]),id:"postContent"},[r(n)?_("",!0):(l(),P(As,{key:0})),f(d,{id:"content"}),r(n)?_("",!0):(l(),u(S,{key:1},[r(o).length?(l(),u("p",br,[yr,(l(!0),u(S,null,A(r(o),p=>(l(),u("a",{key:p,href:`/pages/archives#tag=${p}`},g(p),9,xr))),128))])):_("",!0),f(Os),f(Qs),f(sr),f(fr)],64)),f(ur)],2)}}}),$r=()=>U("script",{src:"https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"}),wr=t=>{const e=localStorage.getItem(t);return e&&JSON.parse(e)},xt=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))};const Lr=b({__name:"BgToggle",props:{bgUrl:String},emits:["update:bgUrl"],setup(t,{emit:e}){const{theme:n}=L(),o=n.value.bgUrls,s=N(0);Q(()=>{e("update:bgUrl",o[s.value])}),te(()=>{Ks(o)}),I(()=>{a()});const a=()=>{const d=wr("bgIdx");d==null?xt("bgIdx",s.value):s.value=d},c=()=>{s.value>=o.length-1?s.value=0:s.value++,xt("bgIdx",s.value)};return(d,p)=>(l(),u("i",{class:"fa fa-retweet bg-toggle",title:"toggle background",onClick:c}))}});var qr=x(Lr,[["__scopeId","data-v-cb02d35a"]]);const Sr={ref:"canvasRef",id:"canvas-dust",width:"1036",height:"228"},Cr=b({__name:"NewLayout",setup(t){const{theme:e}=L(),n=N("");return I(()=>{new ct("canvas-dust")}),(o,s)=>(l(),u(S,null,[i("main",{class:"layout",style:Lt({"background-image":`url(${n.value})`})},[f(Ls,{class:"aside"}),f(kr,{class:"content"}),f(os,{class:"navbar"})],4),f(qr,{bgUrl:n.value,"onUpdate:bgUrl":s[0]||(s[0]=a=>n.value=a)},null,8,["bgUrl"]),r(e).live2d?(l(),P(r($r),{key:0})):_("",!0),i("canvas",Sr,null,512)],64))}});var Tr=x(Cr,[["__scopeId","data-v-603fe8f0"]]);var X={...go,Layout:Tr,enhanceApp({app:t}){t.component("Page",Qo)}};const tt=new Set,Ht=()=>document.createElement("link"),Pr=t=>{const e=Ht();e.rel="prefetch",e.href=t,document.head.appendChild(e)},Er=t=>{const e=new XMLHttpRequest;e.open("GET",t,e.withCredentials=!0),e.send()};let J;const Mr=V&&(J=Ht())&&J.relList&&J.relList.supports&&J.relList.supports("prefetch")?Pr:Er;function Nr(){if(!V||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const e=window.requestIdleCallback||setTimeout;let n=null;const o=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(c=>{if(c.isIntersecting){const d=c.target;n.unobserve(d);const{pathname:p}=d;if(!tt.has(p)){tt.add(p);const h=kt(p);Mr(h)}}})}),e(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:c,hostname:d,pathname:p}=a,h=p.match(/\.\w+$/);h&&h[0]!==".html"||c!=="_blank"&&d===location.hostname&&(p!==location.pathname?n.observe(a):tt.add(p))})})};I(o);const s=O();G(()=>s.path,o),z(()=>{n&&n.disconnect()})}const Ar=b({setup(t,{slots:e}){const n=N(!1);return I(()=>{n.value=!0}),()=>n.value&&e.default?e.default():null}}),Ir=X.NotFound||(()=>"404 Not Found"),jr={name:"VitePressApp",setup(){const{site:t}=L();return I(()=>{G(()=>t.value.lang,e=>{document.documentElement.lang=e},{immediate:!0})}),Nr(),()=>U(X.Layout)}};function Br(){const t=Hr(),e=Fr();e.provide(Wt,t);const n=Yt(t.route);return e.provide(Xt,n),V&&ee(t.route,n.site),e.component("Content",Qt),e.component("ClientOnly",Ar),e.component("Debug",()=>null),Object.defineProperty(e.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),X.enhanceApp&&X.enhanceApp({app:e,router:t,siteData:Zt}),{app:e,router:t}}function Fr(){return Gt(jr)}function Hr(){let t=V,e;return Jt(n=>{let o=kt(n);return t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),V?(t=!1,ot(()=>import(o),[])):require(o)},Ir)}if(V){const{app:t,router:e}=Br();e.go().then(()=>{t.mount("#app")})}export{vt as N,Br as createApp};
