"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,h=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Some thread functions",description:"This wiki is about 3 custom functions for threads: lock, unlock and rename.",authors:{name:"@p4olo.",title:"Member - 713132410153205802",userid:"713132410153205802",url:"https://discord.com/users/713132410153205802",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/713132410153205802/34unj",source:"@site/forums/posts/713132410153205802/34unj.md",title:"Some thread functions",description:"This wiki is about 3 custom functions for threads: lock, unlock and rename.",date:"2023-07-10T17:51:40.000Z",formattedDate:"July 10, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@p4olo.",title:"Member - 713132410153205802",userid:"713132410153205802",url:"https://discord.com/users/713132410153205802",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png"}],frontMatter:{title:"Some thread functions",description:"This wiki is about 3 custom functions for threads: lock, unlock and rename.",authors:{name:"@p4olo.",title:"Member - 713132410153205802",userid:"713132410153205802",url:"https://discord.com/users/713132410153205802",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Reloading the Commands ",permalink:"/wikis/posts/693451182617657394/30bbab"},nextItem:{title:"Progression bar",permalink:"/wikis/posts/713132410153205802/c6h1efa"}},c={authorsImageUrls:[void 0]},l=[{value:"FUNCTIONS:",id:"functions",level:3},{value:"CODE:",id:"code",level:3}],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"functions"},"FUNCTIONS:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"$lockThread","[threadID]"),(0,a.kt)("li",{parentName:"ul"},"$unlockThread","[threadID]"),(0,a.kt)("li",{parentName:"ul"},"$renameThread","[threadID;newName]")),(0,a.kt)("h3",{id:"code"},"CODE:"),(0,a.kt)("p",null,"Put this code in you main file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"bot.functionManager.createFunction(\n    {\n      name: \"$lockThread\",\n      type: \"djs\",\n      code: async (d) => {\n        const data = d.util.aoiFunc(d);\n        const [threadId] = data.inside.splits;\n  \n        const thread = await d.message.client.channels.fetch(threadId);\n  \n        try {\n          await thread.setLocked(true);\n\n          return {\n            code: d.util.setCode(data),\n          };\n        } catch (error) {\n          console.error(error);\n          return d.aoiError.fnError(d, 'custom', {}, 'Failed to lock thread');\n        }\n      },\n    },\n    {\n      name: \"$unlockThread\",\n      type: \"djs\",\n      code: async (d) => {\n        const data = d.util.aoiFunc(d);\n        const [threadId] = data.inside.splits;\n  \n        const thread = await d.message.client.channels.fetch(threadId);\n  \n        try {\n          await thread.setLocked(false);\n\n          return {\n            code: d.util.setCode(data),\n          };\n        } catch (error) {\n          console.error(error);\n          return d.aoiError.fnError(d, 'custom', {}, 'Failed to unlock thread');\n        }\n      },\n    },\n    {\n      name: \"$renameThread\",\n      type: \"djs\",\n      code: async (d) => {\n        const data = d.util.aoiFunc(d);\n        const [threadId, newName] = data.inside.splits;\n  \n        try {\n          const thread = await d.message.client.channels.fetch(threadId);\n  \n          await thread.setName(newName);\n\n          return {\n            code: d.util.setCode(data),\n          };\n          \n        } catch (error) {\n          console.error(error);\n          return d.aoiError.fnError(d, 'custom', {}, 'Failed to rename thread');\n        }\n      },\n    });\n")))}m.isMDXComponent=!0}}]);