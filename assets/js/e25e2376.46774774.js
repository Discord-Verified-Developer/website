"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[62360],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"$second",description:"$second will return the current second in CST.",id:"second"},c=void 0,i={unversionedId:"functions/misc-related/second",id:"version-6.3.0/functions/misc-related/second",title:"$second",description:"$second will return the current second in CST.",source:"@site/versioned_docs/version-6.3.0/functions/misc-related/second.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/second",permalink:"/docs/functions/misc-related/second",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011500,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$second",description:"$second will return the current second in CST.",id:"second"},sidebar:"docs",previous:{title:"$renameFile",permalink:"/docs/functions/misc-related/renameFile"},next:{title:"$setCacheData",permalink:"/docs/functions/misc-related/setCacheData"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$second")," will return the current second in CST."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$second\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will returns the current second:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "second",\n    code: `\n    $second\n    `\n});\n')),(0,o.kt)("p",null,"You can change the timezone using ",(0,o.kt)("inlineCode",{parentName:"p"},"$timezone"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "second",\n    code: `\n    $second \n    $timezone[America/New_York]\n    ` // returns current second in New York\n});\n')))}p.isMDXComponent=!0}}]);