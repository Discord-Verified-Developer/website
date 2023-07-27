"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[42651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>x,frontMatter:()=>k,metadata:()=>h,toc:()=>f});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))i.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&i.call(e,r)&&(n[r]=e[r]);return n};const k={title:"$color",description:"$color will change the color of an embed.",id:"color"},g=void 0,h={unversionedId:"functions/interaction-related/color",id:"version-6.4.0/functions/interaction-related/color",title:"$color",description:"$color will change the color of an embed.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/color.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/color",permalink:"/uk/docs/functions/interaction-related/color",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$color",description:"$color will change the color of an embed.",id:"color"},sidebar:"docs",previous:{title:"$clearReactions",permalink:"/uk/docs/functions/interaction-related/clearReactions"},next:{title:"$createApplicationCommand",permalink:"/uk/docs/functions/interaction-related/createApplicationCommand"}},b={},f=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],N={toc:f},y="wrapper";function x(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(y,u(m(m({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$color")," will change the color of an embed"),(0,r.kt)("h2",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$color[index?;hex]\n")),(0,r.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"index?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The embed index."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"hex"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The hex color or color name (supported colornames below)."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," Embed Colors ")),(0,r.kt)("p",null,(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/000000/000000.png",alt:"c"}))," Default ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/FFFFFF/FFFFFF.png",alt:"c"}))," White ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/1ABC9C/1ABC9C.png",alt:"c"}))," Aqua ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/57F287/57F287.png",alt:"c"}))," Green ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/3498DB/3498DB.png",alt:"c"}))," Blue ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/FFFF00/FFFF00.png",alt:"c"}))," Yellow ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/9B59B6/9B59B6.png",alt:"c"}))," Purple ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/E91E63/E91E63.png",alt:"c"}))," LuminousVividPink ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/EB459E/EB459E.png",alt:"c"}))," Fuchsia ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/F1C40F/F1C40F.png",alt:"c"}))," Gold ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/E67E22/E67E22.png",alt:"c"}))," Orange ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/ED4245/ED4245.png",alt:"c"}))," Red ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/95A5A6/95A5A6.png",alt:"c"}))," Grey ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/34495E/34495E.png",alt:"c"}))," Navy ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/11806A/11806A.png",alt:"c"}))," DarkAqua ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/1F8B4C/1F8B4C.png",alt:"c"}))," DarkGreen ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/206694/206694.png",alt:"c"}))," DarkBlue ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/71368A/71368A.png",alt:"c"}))," DarkPurple ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/AD1457/AD1457.png",alt:"c"}))," DarkVividPink ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/C27C0E/C27C0E.png",alt:"c"}))," DarkGold ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/A84300/A84300.png",alt:"c"}))," DarkOrange ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/992D22/992D22.png",alt:"c"}))," DarkRed ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/979C9F/979C9F.png",alt:"c"}))," DarkGrey ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/7F8C8D/7F8C8D.png",alt:"c"}))," DarkerGrey ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/BCC0C0/BCC0C0.png",alt:"c"}))," LightGrey ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/2C3E50/2C3E50.png",alt:"c"}))," DarkNavy ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/5865F2/5865F2.png",alt:"c"}))," Blurple ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/99AAB5/99AAB5.png",alt:"c"}))," Greyple ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/2C2F33/2C2F33.png",alt:"c"}))," DarkButNotBlack ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/23272A/23272A.png",alt:"c"}))," NotQuiteBlack ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",m({parentName:"p"},{src:"https://placehold.co/15x15/000000/000000.png",alt:"c"}))," Random")),(0,r.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return a red embed:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'color',\n    code: `\n  $description[What a nice color!]\n  $color[Red]\n  `\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'color',\n    code: `\n  $description[What a nice color!]\n  $color[ED4245]\n  `\n});\n")))}x.isMDXComponent=!0}}]);