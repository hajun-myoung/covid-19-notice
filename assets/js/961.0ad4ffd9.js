(self.webpackChunkcovid_19_notice=self.webpackChunkcovid_19_notice||[]).push([[961],{2961:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>Ue});var a=l(6252),n=l(9963),o=l(2262),r=l(2119),i=l(7621),s=l(3577);const u={class:"hero"},c={key:1,id:"main-title"},v={key:2,class:"description"},d={key:3,class:"actions"},m={key:0,class:"features"},p={class:"theme-default-content custom"};var h=l(480);const g=(0,a.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=(0,r.yj)(),l=(0,i.WF)(),{item:n}=(0,o.BK)(e),s=(0,a.Fl)((()=>(0,h.ak)(n.value.link))),u=(0,a.Fl)((()=>(0,h.B2)(n.value.link)||(0,h.R5)(n.value.link))),c=(0,a.Fl)((()=>{if(!u.value)return n.value.target?n.value.target:s.value?"_blank":void 0})),v=(0,a.Fl)((()=>"_blank"===c.value)),d=(0,a.Fl)((()=>!s.value&&!u.value&&!v.value)),m=(0,a.Fl)((()=>{if(!u.value)return n.value.rel?n.value.rel:v.value?"noopener noreferrer":void 0})),p=(0,a.Fl)((()=>n.value.ariaLabel||n.value.text)),g=(0,a.Fl)((()=>{const e=Object.keys(l.value.locales);return e.length?!e.some((e=>e===n.value.link)):"/"!==n.value.link})),k=(0,a.Fl)((()=>!!g.value&&t.path.startsWith(n.value.link)));return{isActive:(0,a.Fl)((()=>!!d.value&&(n.value.activeMatch?new RegExp(n.value.activeMatch).test(t.path):k.value))),isBlankTarget:v,isRouterLink:d,linkRel:m,linkTarget:c,linkAriaLabel:p}}});g.render=function(e,t,l,n,o,r){const i=(0,a.up)("RouterLink"),u=(0,a.up)("OutboundLink");return e.isRouterLink?((0,a.wg)(),(0,a.j4)(i,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":e.isActive}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,s.zw)(e.item.text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.j4)("a",(0,a.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,s.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,["href","rel","target","aria-label"]))};const k=g,b=(0,a.aZ)({name:"Home",components:{NavLink:k},setup(){const e=(0,i.I2)(),t=(0,i.I5)(),l=(0,a.Fl)((()=>e.value.heroImage?(0,i.pJ)(e.value.heroImage):null)),n=(0,a.Fl)((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),o=(0,a.Fl)((()=>e.value.heroAlt||n.value||"hero")),r=(0,a.Fl)((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),s=(0,a.Fl)((()=>(0,h.kJ)(e.value.actions)?e.value.actions.map((({text:e,link:t,type:l="primary"})=>({text:e,link:t,type:l}))):[])),u=(0,a.Fl)((()=>(0,h.kJ)(e.value.features)?e.value.features:[])),c=(0,a.Fl)((()=>e.value.footer)),v=(0,a.Fl)((()=>e.value.footerHtml));return{heroImage:l,heroAlt:o,heroText:n,tagline:r,actions:s,features:u,footer:c,footerHtml:v}}});b.render=function(e,t,l,n,o,r){const i=(0,a.up)("NavLink"),h=(0,a.up)("Content");return(0,a.wg)(),(0,a.j4)("main",{class:"home","aria-labelledby":e.heroText?"main-title":void 0},[(0,a.Wm)("header",u,[e.heroImage?((0,a.wg)(),(0,a.j4)("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,["src","alt"])):(0,a.kq)("",!0),e.heroText?((0,a.wg)(),(0,a.j4)("h1",c,(0,s.zw)(e.heroText),1)):(0,a.kq)("",!0),e.tagline?((0,a.wg)(),(0,a.j4)("p",v,(0,s.zw)(e.tagline),1)):(0,a.kq)("",!0),e.actions.length?((0,a.wg)(),(0,a.j4)("p",d,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.actions,(e=>((0,a.wg)(),(0,a.j4)(i,{key:e.text,class:["action-button",[e.type]],item:e},null,8,["class","item"])))),128))])):(0,a.kq)("",!0)]),e.features.length?((0,a.wg)(),(0,a.j4)("div",m,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.features,(e=>((0,a.wg)(),(0,a.j4)("div",{key:e.title,class:"feature"},[(0,a.Wm)("h2",null,(0,s.zw)(e.title),1),(0,a.Wm)("p",null,(0,s.zw)(e.details),1)])))),128))])):(0,a.kq)("",!0),(0,a.Wm)("div",p,[(0,a.Wm)(h)]),e.footer?((0,a.wg)(),(0,a.j4)(a.HY,{key:1},[e.footerHtml?((0,a.wg)(),(0,a.j4)("div",{key:0,class:"footer",innerHTML:e.footer},null,8,["innerHTML"])):((0,a.wg)(),(0,a.j4)("div",{key:1,class:"footer",textContent:(0,s.zw)(e.footer)},null,8,["textContent"]))],64)):(0,a.kq)("",!0)],8,["aria-labelledby"])};const w=b,f={class:"page"},L={class:"theme-default-content"},y={class:"page-meta"},W={key:0,class:"meta-item edit-link"},j={key:1,class:"meta-item last-updated"},F={class:"meta-item-label"},x={class:"meta-item-info"},I={key:2,class:"meta-item contributors"},N={class:"meta-item-label"},T={class:"meta-item-info"},H=(0,a.Uk)(", ");var S=l(1070);const C=e=>!(0,h.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,z={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},$=()=>{const e=(0,S.X6)(),t=(0,i.Vi)(),l=(0,i.I2)();return(0,a.Fl)((()=>{var a,n;if(null!=(n=null!=(a=l.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:o,docsRepo:r=o,docsBranch:i="main",docsDir:s="",editLinkText:u}=e.value;if(!r)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:l,filePathRelative:a,editLinkPattern:n})=>{const o=C(e);let r;return n?r=n:null!==o&&(r=z[o]),r?r.replace(/:repo/,(0,h.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,h.FY)(`${(0,h.U1)(l)}/${a}`)):null})({docsRepo:r,docsBranch:i,docsDir:s,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))},U=(0,a.aZ)({name:"PageMeta",components:{NavLink:k},setup:()=>({themeLocale:(0,S.X6)(),editNavLink:$(),lastUpdated:(()=>{const e=(0,i.I5)(),t=(0,S.X6)(),l=(0,i.Vi)(),n=(0,i.I2)();return(0,a.Fl)((()=>{var a,o,r,i;return(null==(o=null!=(a=n.value.lastUpdated)?a:t.value.lastUpdated)||o)&&(null==(r=l.value.git)?void 0:r.updatedTime)?new Date(null==(i=l.value.git)?void 0:i.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=(0,S.X6)(),t=(0,i.Vi)(),l=(0,i.I2)();return(0,a.Fl)((()=>{var a,n,o,r;return null!=(n=null!=(a=l.value.contributors)?a:e.value.contributors)&&!n||null==(r=null==(o=t.value.git)?void 0:o.contributors)?null:r}))})()})});U.render=function(e,t,l,n,o,r){const i=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.j4)("footer",y,[e.editNavLink?((0,a.wg)(),(0,a.j4)("div",W,[(0,a.Wm)(i,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):(0,a.kq)("",!0),e.lastUpdated?((0,a.wg)(),(0,a.j4)("div",j,[(0,a.Wm)("span",F,(0,s.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,a.Wm)("span",x,(0,s.zw)(e.lastUpdated),1)])):(0,a.kq)("",!0),e.contributors&&e.contributors.length?((0,a.wg)(),(0,a.j4)("div",I,[(0,a.Wm)("span",N,(0,s.zw)(e.themeLocale.contributorsText)+": ",1),(0,a.Wm)("span",T,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.contributors,((t,l)=>((0,a.wg)(),(0,a.j4)(a.HY,{key:l},[(0,a.Wm)("span",{class:"contributor",title:`email: ${t.email}`},(0,s.zw)(t.name),9,["title"]),l!==e.contributors.length-1?((0,a.wg)(),(0,a.j4)(a.HY,{key:0},[H],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)])};const q=U,M={key:0,class:"page-nav"},B={class:"inner"},A={key:0,class:"prev"},P=(0,a.Uk)(" ← "),R={key:1,class:"next"},Y=(0,a.Uk)(" → "),D=e=>!1===e?null:(0,h.HD)(e)?(0,S.sC)(e):!!(0,h.PO)(e)&&e,E=(e,t,l)=>{const a=e.findIndex((e=>e.link===t));if(-1!==a){const t=e[a+l];return(null==t?void 0:t.link)?t:null}for(const a of e)if(a.children){const e=E(a.children,t,l);if(e)return e}return null},O=(0,a.aZ)({name:"PageNav",components:{NavLink:k},setup(){const e=(0,i.I2)(),t=(0,S.VU)(),l=(0,r.yj)();return{prevNavLink:(0,a.Fl)((()=>{const a=D(e.value.prev);return!1!==a?a:E(t.value,l.path,-1)})),nextNavLink:(0,a.Fl)((()=>{const a=D(e.value.next);return!1!==a?a:E(t.value,l.path,1)}))}}});O.render=function(e,t,l,n,o,r){const i=(0,a.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,a.wg)(),(0,a.j4)("nav",M,[(0,a.Wm)("p",B,[e.prevNavLink?((0,a.wg)(),(0,a.j4)("span",A,[P,(0,a.Wm)(i,{item:e.prevNavLink},null,8,["item"])])):(0,a.kq)("",!0),e.nextNavLink?((0,a.wg)(),(0,a.j4)("span",R,[(0,a.Wm)(i,{item:e.nextNavLink},null,8,["item"]),Y])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)};const Z=O,_=(0,a.aZ)({name:"Page",components:{PageMeta:q,PageNav:Z}});_.render=function(e,t,l,n,o,r){const i=(0,a.up)("Content"),s=(0,a.up)("PageMeta"),u=(0,a.up)("PageNav");return(0,a.wg)(),(0,a.j4)("main",f,[(0,a.WI)(e.$slots,"top"),(0,a.Wm)("div",L,[(0,a.Wm)(i)]),(0,a.Wm)(s),(0,a.Wm)(u),(0,a.WI)(e.$slots,"bottom")])};const X=_,V={key:0,class:"navbar-links"},K={class:"title"},G=(0,a.Wm)("span",{class:"arrow down"},null,-1),J={class:"title"},Q={class:"nav-dropdown"},ee={class:"dropdown-subtitle"},te={key:1},le={class:"dropdown-subitem-wrapper"},ae=(0,a.aZ)({name:"DropdownLink",components:{NavLink:k},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=(0,o.BK)(e),l=(0,a.Fl)((()=>t.value.ariaLabel||t.value.text)),n=(0,o.iH)(!1),i=(0,r.yj)();return(0,a.YP)((()=>i.path),(()=>{n.value=!1})),{open:n,dropdownAriaLabel:l,handleDropdown:e=>{const t=0===e.detail;n.value=!!t&&!n.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});ae.render=function(e,t,l,o,r,i){const u=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.j4)("div",{class:["dropdown-wrapper",{open:e.open}]},[(0,a.Wm)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,a.Wm)("span",K,(0,s.zw)(e.item.text),1),G],8,["aria-label"]),(0,a.Wm)("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[2]||(t[2]=t=>e.open=!e.open)},[(0,a.Wm)("span",J,(0,s.zw)(e.item.text),1),(0,a.Wm)("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),(0,a.wy)((0,a.Wm)("ul",Q,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.item.children,((t,l)=>((0,a.wg)(),(0,a.j4)("li",{key:t.link||l,class:"dropdown-item"},[t.children?((0,a.wg)(),(0,a.j4)(a.HY,{key:0},[(0,a.Wm)("h4",ee,[t.link?((0,a.wg)(),(0,a.j4)(u,{key:0,item:t,onFocusout:l=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.j4)("span",te,(0,s.zw)(t.text),1))]),(0,a.Wm)("ul",le,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(t.children,(l=>((0,a.wg)(),(0,a.j4)("li",{key:l.link,class:"dropdown-subitem"},[(0,a.Wm)(u,{item:l,onFocusout:a=>e.isLastItemOfArray(l,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(u,{key:1,item:t,onFocusout:l=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[n.F8,e.open]])],2)};const ne=ae,oe=e=>(0,h.HD)(e)?(0,S.sC)(e):e.children?{...e,children:e.children.map(oe)}:e,re=(0,a.aZ)({name:"NavbarLinks",components:{NavLink:k,DropdownLink:ne},setup(){const e=(()=>{const e=(0,S.X6)();return(0,a.Fl)((()=>(e.value.navbar||[]).map(oe)))})(),t=(()=>{const e=(0,r.tv)(),t=(0,i.I)(),l=(0,i.I5)(),n=(0,S.X6)();return(0,a.Fl)((()=>{var a,o;const r=Object.keys(l.value.locales);if(r.length<2)return[];const i=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(a=n.value.selectLanguageText)?a:"unkown language",ariaLabel:null!=(o=n.value.selectLanguageAriaLabel)?o:"unkown language",children:r.map((a=>{var o,r,u,c,v,d;const m=null!=(r=null==(o=l.value.locales)?void 0:o[a])?r:{},p=null!=(c=null==(u=n.value.locales)?void 0:u[a])?c:{},h=`${m.lang}`,g=null!=(v=p.selectLanguageName)?v:h;let k;if(h===l.value.lang)k=s;else{const l=i.replace(t.value,a);k=e.getRoutes().some((e=>e.path===l))?l:null!=(d=p.home)?d:a}return{text:g,link:k}}))}]}))})(),l=(()=>{const e=(0,S.X6)(),t=(0,a.Fl)((()=>e.value.repo)),l=(0,a.Fl)((()=>t.value?C(t.value):null)),n=(0,a.Fl)((()=>t.value&&!(0,h.ak)(t.value)?`https://github.com/${t.value}`:t.value)),o=(0,a.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===l.value?"Source":l.value:null));return(0,a.Fl)((()=>n.value&&o.value?[{text:o.value,link:n.value}]:[]))})();return{navbarLinks:(0,a.Fl)((()=>[...e.value,...t.value,...l.value]))}}});re.render=function(e,t,l,n,o,r){const i=(0,a.up)("DropdownLink"),s=(0,a.up)("NavLink");return e.navbarLinks.length?((0,a.wg)(),(0,a.j4)("nav",V,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.navbarLinks,(e=>((0,a.wg)(),(0,a.j4)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(i,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(s,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("",!0)};const ie=re,se={class:"icon",focusable:"false",viewBox:"0 0 32 32"},ue=(0,a.Wm)("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),ce=(0,a.Wm)("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),ve=(0,a.Wm)("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),de=(0,a.Wm)("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),me=(0,a.Wm)("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),pe=(0,a.Wm)("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),he=(0,a.Wm)("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),ge=(0,a.Wm)("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),ke=(0,a.Wm)("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1),be={class:"icon",focusable:"false",viewBox:"0 0 32 32"},we=(0,a.Wm)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),fe=(0,a.aZ)({setup(e){const t=(0,S.vs)(),l=()=>{t.value=!t.value};return(e,r)=>((0,a.wg)(),(0,a.j4)("button",{class:"toggle-dark-button",onClick:l},[(0,a.wy)(((0,a.wg)(),(0,a.j4)("svg",se,[ue,ce,ve,de,me,pe,he,ge,ke],512)),[[n.F8,!(0,o.SU)(t)]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)("svg",be,[we],512)),[[n.F8,(0,o.SU)(t)]])]))}}),Le=(0,a.Wm)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[(0,a.Wm)("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})],-1),ye=(0,a.aZ)({name:"ToggleSidebarButton",emits:["toggle"]});ye.render=function(e,t,l,n,o,r){return(0,a.wg)(),(0,a.j4)("div",{class:"toggle-sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[Le])};const We=ye,je=(0,a.aZ)({emits:["toggle-sidebar"],setup(e){const t=(0,i.I)(),l=(0,i.I5)(),n=(0,S.X6)(),r=(0,o.iH)(null),u=(0,o.iH)(null),c=(0,a.Fl)((()=>n.value.home||t.value)),v=(0,a.Fl)((()=>n.value.logo)),d=(0,a.Fl)((()=>l.value.title)),m=(0,o.iH)(0),p=(0,a.Fl)((()=>m.value?{maxWidth:m.value+"px"}:{})),h=(0,a.Fl)((()=>n.value.darkMode));function g(e,t){var l,a,n;const o=null==(n=null==(a=null==(l=null==e?void 0:e.ownerDocument)?void 0:l.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[t],r=Number.parseInt(o,10);return Number.isNaN(r)?0:r}return(0,a.bv)((()=>{const e=g(r.value,"paddingLeft")+g(r.value,"paddingRight"),t=()=>{var t;window.innerWidth<=719?m.value=0:m.value=r.value.offsetWidth-e-((null==(t=u.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),(e,t)=>{const l=(0,a.up)("RouterLink"),n=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.j4)("header",{ref:r,class:"navbar"},[(0,a.Wm)(We,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle-sidebar"))}),(0,a.Wm)("span",{ref:u},[(0,a.Wm)(l,{to:(0,o.SU)(c)},{default:(0,a.w5)((()=>[(0,o.SU)(v)?((0,a.wg)(),(0,a.j4)("img",{key:0,class:"logo",src:(0,o.SU)(i.pJ)((0,o.SU)(v)),alt:(0,o.SU)(d)},null,8,["src","alt"])):(0,a.kq)("",!0),(0,o.SU)(d)?((0,a.wg)(),(0,a.j4)("span",{key:1,class:["site-name",{"can-hide":(0,o.SU)(v)}]},(0,s.zw)((0,o.SU)(d)),3)):(0,a.kq)("",!0)])),_:1},8,["to"])],512),(0,a.Wm)("div",{class:"navbar-links-wrapper",style:(0,o.SU)(p)},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(ie,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,o.SU)(h)?((0,a.wg)(),(0,a.j4)(fe,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(n)],4)],512)}}}),Fe={class:"sidebar"},xe={class:"sidebar-links"},Ie=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ne=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||Ie(e.path)===Ie(t)))(e,t.link)||!!t.children&&t.children.some((t=>Ne(e,t))),Te=(e,t)=>e.link?(0,a.h)(k,{...t,item:e}):(0,a.h)("p",t,e.text),He=(e,t)=>{var l;return(null===(l=e.children)||void 0===l?void 0:l.length)?(0,a.h)("ul",{class:{"sidebar-sub-items":t>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(Se,{item:e,depth:t+1}))))):null},Se=({item:e,depth:t=0})=>{const l=(0,r.yj)(),a=Ne(l,e);return[Te(e,{class:{"sidebar-heading":0===t,"sidebar-item":!0,active:a}}),He(e,t)]};Se.displayName="SidebarChild",Se.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const Ce=(0,a.aZ)({name:"Sidebar",components:{NavbarLinks:ie,SidebarChild:Se},setup:()=>({sidebarItems:(0,S.VU)()})});Ce.render=function(e,t,l,n,o,r){const i=(0,a.up)("NavbarLinks"),s=(0,a.up)("SidebarChild");return(0,a.wg)(),(0,a.j4)("aside",Fe,[(0,a.Wm)(i),(0,a.WI)(e.$slots,"top"),(0,a.Wm)("ul",xe,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.sidebarItems,(e=>((0,a.wg)(),(0,a.j4)(s,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,a.WI)(e.$slots,"bottom")])};const ze=Ce,$e=(0,a.aZ)({name:"Layout",components:{Home:w,Page:X,Navbar:je,Sidebar:ze,Transition:n.uT},setup(){const e=(0,i.Vi)(),t=(0,i.I2)(),l=(0,S.X6)(),n=(0,a.Fl)((()=>!1!==t.value.navbar&&!1!==l.value.navbar)),s=(0,S.VU)(),u=(0,o.iH)(!1),c=e=>{u.value="boolean"==typeof e?e:!u.value},v={x:0,y:0},d=(0,a.Fl)((()=>[{"no-navbar":!n.value,"no-sidebar":!s.value.length,"sidebar-open":u.value},t.value.pageClass]));let m;(0,a.bv)((()=>{const e=(0,r.tv)();m=e.afterEach((()=>{c(!1)}))})),(0,a.Ah)((()=>{m()}));const p=(0,S.P$)(),h=p.resolve,g=p.pending;return{frontmatter:t,page:e,containerClass:d,shouldShowNavbar:n,toggleSidebar:c,onTouchStart:e=>{v.x=e.changedTouches[0].clientX,v.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-v.x,l=e.changedTouches[0].clientY-v.y;Math.abs(t)>Math.abs(l)&&Math.abs(t)>40&&(t>0&&v.x<=80?c(!0):c(!1))},onBeforeEnter:h,onBeforeLeave:g}}});$e.render=function(e,t,l,o,r,i){const s=(0,a.up)("Navbar"),u=(0,a.up)("Sidebar"),c=(0,a.up)("Home"),v=(0,a.up)("Page");return(0,a.wg)(),(0,a.j4)("div",{class:["theme-container",e.containerClass],onTouchstart:t[2]||(t[2]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[3]||(t[3]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?((0,a.wg)(),(0,a.j4)(s,{key:0,onToggleSidebar:e.toggleSidebar},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:1},8,["onToggleSidebar"])):(0,a.kq)("",!0),(0,a.Wm)("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=t=>e.toggleSidebar(!1))}),(0,a.Wm)(u,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:1}),e.frontmatter.home?((0,a.wg)(),(0,a.j4)(c,{key:1})):((0,a.wg)(),(0,a.j4)(n.uT,{key:2,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{key:e.page.path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:1})])),_:1},8,["onBeforeEnter","onBeforeLeave"]))],34)};const Ue=$e}}]);