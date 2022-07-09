"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[89626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),v=i,f=p["".concat(u,".").concat(v)]||p[v]||d[v]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"Invite System"},s=void 0,o={unversionedId:"guides/variables/advanced-guides/invite-system",id:"guides/variables/advanced-guides/invite-system",title:"Invite System",description:"Introduction",source:"@site/docs/guides/variables/advanced-guides/invite-system.md",sourceDirName:"guides/variables/advanced-guides",slug:"/guides/variables/advanced-guides/invite-system",permalink:"/docs/guides/variables/advanced-guides/invite-system",draft:!1,tags:[],version:"current",frontMatter:{title:"Invite System"},sidebar:"someSidebar",previous:{title:"Advanced Guides",permalink:"/docs/guides/variables/advanced-guides/"},next:{title:"Music",permalink:"/docs/guides/variables/advanced-guides/music"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"How to enable",id:"how-to-enable",level:2},{value:"Functions",id:"functions",level:2},{value:"$userInfo",id:"userinfo",level:3},{value:"Options",id:"options",level:4},{value:"$resetInvites",id:"resetinvites",level:3}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A feature everyone has been asking for. An invite tracker system to track invites by users."),(0,i.kt)("h2",{id:"how-to-enable"},"How to enable"),(0,i.kt)("p",null,"To enable the system, simply write in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const Aoijs = require(\'aoi.js\')\nconst bot = new Aoijs.Bot({\ntoken: "token",\nprefix: "!",\nfetchInvites: true\n})\n')),(0,i.kt)("p",null,"Make sure you enable ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER MEMBERS")," intents"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(65394).Z,width:"1169",height:"140"})),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("p",null,"With the invite tracker system, of course there's the functions!"),(0,i.kt)("h3",{id:"userinfo"},"$userInfo"),(0,i.kt)("p",null,"This function gets the user's invite information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"$userInfo[option;userID (optional)]\n")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inviter - The user who invited the author/specified user"),(0,i.kt)("li",{parentName:"ul"},"code - The invite code the inviter used"),(0,i.kt)("li",{parentName:"ul"},"real - The count of users the author/specified user invited that are still in the server"),(0,i.kt)("li",{parentName:"ul"},"fake - The count of alt accounts (Discord Age 10 Minutes and below) the author/specified user invited (Alt Account also must leave the server to be counted)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "invites",\ncode: `\n$title[$username\'s invite info]\n$thumbnail[$authorAvatar]\n$description[\nTotal: $sum[$userInfo[real];$userInfo[fake]]\nReal: $userInfo[real]\nFake: $userInfo[fake]\n---------------------\nInvited By: $userTag[$userInfo[inviter]] (\\`$userInfo[code]\\`)]\n`\n})\n')),(0,i.kt)("h3",{id:"resetinvites"},"$resetInvites"),(0,i.kt)("p",null,"This function resets the invites the specified user has OR the whole guild (if no user specified)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"$resetInvites[guildID;userID (optional)]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "resetInvites",\ncode: `\nSuccessfully reset invites for $username[$mentioned[1]]\n$resetInvites[$guildID;$mentioned[1]]\n`\n})\n')))}d.isMDXComponent=!0},65394:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (44)-58f5ec20dd9190425cde19d582a9f31b.png"}}]);