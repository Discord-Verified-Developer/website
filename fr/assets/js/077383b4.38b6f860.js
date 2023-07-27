"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70091],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?t.createElement(m,c(c({ref:n},l),{},{components:r})):t.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51307:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>k,contentTitle:()=>g,default:()=>j,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var t=r(3905),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,d=(e,n)=>{for(var r in n||(n={}))p.call(n,r)&&l(e,r,n[r]);if(o)for(var r of o(n))s.call(n,r)&&l(e,r,n[r]);return e},u=(e,n)=>i(e,c(n)),f=(e,n)=>{var r={};for(var t in e)p.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&o)for(var t of o(e))n.indexOf(t)<0&&s.call(e,t)&&(r[t]=e[t]);return r};const m={title:"$packageDependencies",description:"$packageDependencies will return aoi.js' package dependencies.",id:"packageDependencies"},g=void 0,y={unversionedId:"functions/misc-related/packageDependencies",id:"version-6.4.0/functions/misc-related/packageDependencies",title:"$packageDependencies",description:"$packageDependencies will return aoi.js' package dependencies.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/packageDependencies.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/packageDependencies",permalink:"/fr/docs/functions/misc-related/packageDependencies",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$packageDependencies",description:"$packageDependencies will return aoi.js' package dependencies.",id:"packageDependencies"},sidebar:"docs",previous:{title:"$nodeVersion",permalink:"/fr/docs/functions/misc-related/nodeVersion"},next:{title:"$packageVersion",permalink:"/fr/docs/functions/misc-related/packageVersion"}},k={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},O="wrapper";function j(e){var n=e,{components:r}=n,a=f(n,["components"]);return(0,t.kt)(O,u(d(d({},v),a),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"$packageDependencies")," will return aoi.js' package dependencies."),(0,t.kt)("h2",d({},{id:"usage"}),"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$packageDependencies\n")),(0,t.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,t.kt)("p",null,"This will return aoi.js' package dependencies:"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "packageDependencies",\n    code: `\n    $packageDependencies\n    ` // Should return "@akarui/aoi.db, axios, discord-api-types, discord.js, undici"\n});\n')))}j.isMDXComponent=!0}}]);