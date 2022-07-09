"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[14680],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(f,s(s({ref:n},d),{},{components:t})):a.createElement(f,s({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},77415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"Aliases",description:"Setting up Aliases for your Commands."},s=void 0,i={unversionedId:"guides/command-handler/aliases",id:"guides/command-handler/aliases",title:"Aliases",description:"Setting up Aliases for your Commands.",source:"@site/docs/guides/command-handler/aliases.md",sourceDirName:"guides/command-handler",slug:"/guides/command-handler/aliases",permalink:"/docs/guides/command-handler/aliases",draft:!1,tags:[],version:"current",frontMatter:{title:"Aliases",description:"Setting up Aliases for your Commands."},sidebar:"someSidebar",previous:{title:"Command Handler",permalink:"/docs/guides/command-handler/"},next:{title:"Command Handler Extras",permalink:"/docs/guides/command-handler/command-handler-extras"}},l={},c=[{value:"Usage:",id:"usage",level:3},{value:"Aliases in your <code>command.js</code> in commands folder:",id:"aliases-in-your-commandjs-in-commands-folder",level:3},{value:"Example",id:"example",level:3}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"aliases: ['TEXT1','TEXT2']\n")),(0,r.kt)("p",null,'{% tabs %}\n{% tab title="index.js" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"name\",\naliases: ['name2','name3'],\ncode: `code`\n})\n")),(0,r.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,r.kt)("h3",{id:"aliases-in-your-commandjs-in-commands-folder"},"Aliases in your ",(0,r.kt)("inlineCode",{parentName:"h3"},"command.js")," in commands folder:"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,'{% tabs %}\n{% tab title="command.js" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = ({\nname: \"ping\",\naliases: ['pong','info'],\ncode: `$pingms`\n})\n")),(0,r.kt)("p",null,"{% endtab %}\n{% endtabs %}"))}m.isMDXComponent=!0}}]);