"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[83319],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96363:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"File Names Custom Function",description:"Is a comprehensive resource dedicated to providing information and documentation on a custom function for obtaining file names. ",authors:{name:"@jollyjolli",title:"Member - 166181471369953280",userid:"166181471369953280",url:"https://discord.com/users/166181471369953280",image_url:"https://cdn.discordapp.com/avatars/166181471369953280/97d86ef51d7e49e38ad47175a6f9dc19.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/166181471369953280/eff65g",source:"@site/forums/posts/166181471369953280/eff65g.md",title:"File Names Custom Function",description:"Is a comprehensive resource dedicated to providing information and documentation on a custom function for obtaining file names. ",date:"2023-07-02T19:26:24.000Z",formattedDate:"July 2, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@jollyjolli",title:"Member - 166181471369953280",userid:"166181471369953280",url:"https://discord.com/users/166181471369953280",image_url:"https://cdn.discordapp.com/avatars/166181471369953280/97d86ef51d7e49e38ad47175a6f9dc19.png",imageURL:"https://cdn.discordapp.com/avatars/166181471369953280/97d86ef51d7e49e38ad47175a6f9dc19.png"}],frontMatter:{title:"File Names Custom Function",description:"Is a comprehensive resource dedicated to providing information and documentation on a custom function for obtaining file names. ",authors:{name:"@jollyjolli",title:"Member - 166181471369953280",userid:"166181471369953280",url:"https://discord.com/users/166181471369953280",image_url:"https://cdn.discordapp.com/avatars/166181471369953280/97d86ef51d7e49e38ad47175a6f9dc19.png",imageURL:"https://cdn.discordapp.com/avatars/166181471369953280/97d86ef51d7e49e38ad47175a6f9dc19.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Voice Channel Count",permalink:"/wikis/posts/166181471369953280/0ggsc"},nextItem:{title:"Random Car Image",permalink:"/wikis/posts/166181471369953280/nji73d"}},l={authorsImageUrls:[void 0]},c=[{value:"NOTE: If your commands are in /commands/ no change nothing, but if the file name has other name, change line 10.",id:"note-if-your-commands-are-in-commands-no-change-nothing-but-if-the-file-name-has-other-name-change-line-10",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bot.functionManager.createFunction({\n  name: \"$fileNames\",\n  type: \"djs\",\n  code: async (d) => {\n    const data = d.util.aoiFunc(d);\n    const [category, separator = \", \"] = data.inside.splits;\n    \n    const fs = require('fs');\n    const path = require('path');\n    const folderPath = path.join(__dirname, 'commands', category);\n    \n    let files = [];\n    let output = '';\n    \n    try {\n      files = fs.readdirSync(folderPath);\n      output = files\n        .filter((file) => file !== '$alwaysExecute.js')\n        .map((file) => path.parse(file).name)\n        .join(separator);\n    } catch (err) {\n      output = `Error reading folder ${folderPath}: ${err}`;\n    }\n    \n    data.result = output;\n    \n    return { code: d.util.setCode(data) };\n  }\n});\n")),(0,r.kt)("h2",{id:"note-if-your-commands-are-in-commands-no-change-nothing-but-if-the-file-name-has-other-name-change-line-10"},"NOTE: If your commands are in /commands/ no change nothing, but if the file name has other name, change line 10."),(0,r.kt)("h1",{id:"how-to-use-it"},"HOW TO USE IT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"$fileNames[misc;separator (optional)]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"Code: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"$fileNames[utility; | ]\n")),(0,r.kt)("p",null,"Return:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"file1 | file2 | file3\n")))}u.isMDXComponent=!0}}]);