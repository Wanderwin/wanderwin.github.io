import{u as y,w as T}from"./Debug.vue_vue_type_style_index_0_scoped_true_lang.03de10d4.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{N as g}from"./app.75ad8ca2.js";import{d as p,e as i,u as e,o as s,c as a,f as _,a as r,t as l,h as x,F as I,k as L,z as b,l as d,q as k}from"./framework.6806ca9c.js";import"./preload-helper.1c052cf7.js";import"./framework.412205eb.js";const A={key:0,class:"home-hero"},B={key:0,class:"figure"},C=["src","alt"],N={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},V=p({__name:"HomeHero",setup(h){const{site:o,frontmatter:t}=y(),c=i(()=>{const{heroImage:n,heroText:u,tagline:H,actionLink:$,actionText:F}=t.value;return n||u||H||$&&F}),v=i(()=>t.value.heroText||o.value.title),f=i(()=>t.value.tagline||o.value.description);return(n,u)=>e(c)?(s(),a("header",A,[e(t).heroImage?(s(),a("figure",B,[_("img",{class:"image",src:e(T)(e(t).heroImage),alt:e(t).heroAlt},null,8,C)])):r("",!0),e(v)?(s(),a("h1",N,l(e(v)),1)):r("",!0),e(f)?(s(),a("p",w,l(e(f)),1)):r("",!0),e(t).actionLink&&e(t).actionText?(s(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("",!0),e(t).altActionLink&&e(t).altActionText?(s(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)}});var D=m(V,[["__scopeId","data-v-5d8b683d"]]);const S={key:0,class:"home-features"},q={class:"wrapper"},z={class:"container"},E={class:"features"},j={key:0,class:"title"},G={key:1,class:"details"},J=p({__name:"HomeFeatures",setup(h){const{frontmatter:o}=y(),t=i(()=>o.value.features&&o.value.features.length>0),c=i(()=>o.value.features?o.value.features:[]);return(v,f)=>e(t)?(s(),a("div",S,[_("div",q,[_("div",z,[_("div",E,[(s(!0),a(I,null,L(e(c),(n,u)=>(s(),a("section",{key:u,class:"feature"},[n.title?(s(),a("h2",j,l(n.title),1)):r("",!0),n.details?(s(),a("p",G,l(n.details),1)):r("",!0)]))),128))])])])])):r("",!0)}});var K=m(J,[["__scopeId","data-v-245bde66"]]);const M={key:0,class:"footer"},O={class:"container"},P={class:"text"},Q=p({__name:"HomeFooter",setup(h){const{frontmatter:o}=y();return(t,c)=>e(o).footer?(s(),a("footer",M,[_("div",O,[_("p",P,l(e(o).footer),1)])])):r("",!0)}});var R=m(Q,[["__scopeId","data-v-bff49316"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=p({__name:"Home",setup(h){return(o,t)=>{const c=b("Content");return s(),a("main",U,[d(D),k(o.$slots,"hero",{},void 0,!0),d(K),_("div",W,[d(c)]),k(o.$slots,"features",{},void 0,!0),d(R),k(o.$slots,"footer",{},void 0,!0)])}}});var ae=m(X,[["__scopeId","data-v-8382b818"]]);export{ae as default};
