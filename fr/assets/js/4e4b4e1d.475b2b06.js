"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>N,default:()=>y,frontMatter:()=>k,metadata:()=>g,toc:()=>b});var a=n(3905),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>r(e,i(t)),c=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const k={title:"$newChannel",description:"$newChannel contient les donn\xe9es du salon mis \xe0 jour, utilis\xe9es dans les \xe9v\xe8nements channel update, delete et create, ou sinon toutes les donn\xe9es seront vides.",id:"newChannel"},N=void 0,g={unversionedId:"functions/event-related/newChannel",id:"version-6.4.0/functions/event-related/newChannel",title:"$newChannel",description:"$newChannel contient les donn\xe9es du salon mis \xe0 jour, utilis\xe9es dans les \xe9v\xe8nements channel update, delete et create, ou sinon toutes les donn\xe9es seront vides.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/newChannel.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/newChannel",permalink:"/fr/docs/functions/event-related/newChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 juil. 2023",frontMatter:{title:"$newChannel",description:"$newChannel contient les donn\xe9es du salon mis \xe0 jour, utilis\xe9es dans les \xe9v\xe8nements channel update, delete et create, ou sinon toutes les donn\xe9es seront vides.",id:"newChannel"},sidebar:"docs",previous:{title:"$newApplicationCmd",permalink:"/fr/docs/functions/event-related/newApplicationCmd"},next:{title:"$newGuild",permalink:"/fr/docs/functions/event-related/newGuild"}},v={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Options",id:"options",level:3},{value:"Exemple(s)",id:"exemples",level:2}],h={toc:b},f="wrapper";function y(e){var t=e,{components:n}=t,l=c(t,["components"]);return(0,a.kt)(f,m(u(u({},h),l),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$newChannel")," contient les donn\xe9es du salon mis \xe0 jour, utilis\xe9es dans les \xe9v\xe8nements channel update, delete et create, ou sinon toutes les donn\xe9es seront vides."),(0,a.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$newChannel[option]\n")),(0,a.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Option \xe0 r\xe9cup\xe9rer."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h3",u({},{id:"options"}),"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie le nom du salon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie l'id du salon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"createdAt"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie la date de cr\xe9ation du salon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"createdTimestamp"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie le timestamp de quand le salon a \xe9t\xe9 cr\xe9\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"defaultAutoArchiveDuration"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie la dur\xe9e de l'archive par d\xe9faut.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"deleteable"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie true / false si le salon peut \xeatre supprim\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"deleted"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie true / false si le salon a \xe9t\xe9 supprim\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"guildID"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie l'ID de la guilde actuelle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"lastMessageContent"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie le contenu du dernier message envoy\xe9 dans le salon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"lastMessageID"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie l'ID du dernier message envoy\xe9 dans le salon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"lastPinAt"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie la date du dernier message \xe9pingl\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"lastPinTimestamp"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Retourne le timestamp du dernier message \xe9pingl\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"manageable"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Retourne true / false si le salon est g\xe9rable.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"nsfw"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie true / false si le salon est NSFW.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parentName"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie le nom de la cat\xe9gorie.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parentID"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie l'ID de la cat\xe9gorie.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"position"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie la position du salon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"slowmode"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie la dur\xe9e du mode ralenti du salon. (s'il y en a)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"topic"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie le sujet du salon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie le type de salon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"viewable"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie true / false si le salon est visible.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"permsAllowed"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie les permissions autoris\xe9es pour le salon actuel.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"permsDenied"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie les permissions refus\xe9es pour le salon actuel.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"perms"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie les permissions pour le salon actuel.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"joinable"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie true / false si le canal est rejoignable (seulement si c'est un salon vocal).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"userLimit"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie la limite d'utilisateur pour le salon (vocal) actuel.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"messageCount"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie le nombre de messages envoy\xe9s dans le salon actuel.")))),(0,a.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),'bot.channelCreateCommand({\n    channel: "channelid",\n    code: `\n    Un nouveau salon a \xe9t\xe9 cr\xe9\xe9!\n- Nom: $newChannel[name]\n- ID: $newChannel[id]\n- <#$newChannel[id]>`\n})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ce code s'ex\xe9cutera quand ",(0,a.kt)("strong",{parentName:"li"},"un salon est cr\xe9\xe9"),".")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),'bot.channelDeleteCommand({\n    channel: "channelid",\n    code: `\n    Un salon a \xe9t\xe9 supprim\xe9!\n- Nom: $oldChannel[name]\n- ID: $oldChannel[id]`\n})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ce code s'ex\xe9cutera quand ",(0,a.kt)("strong",{parentName:"li"},"un salon est supprim\xe9"),".")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),'bot.channelUpdateCommand({\n    channel: "channelid",\n    code: `\n    Un salon a \xe9t\xe9 mis \xe0 jour!\n- Nouveau nom: $newChannel[name]\n - Ancien nom: $oldChannel[name]`\n})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ce code s'ex\xe9cutera quand ",(0,a.kt)("strong",{parentName:"li"},"un salon est mis \xe0 jour"),".")),(0,a.kt)("hr",null))}y.isMDXComponent=!0}}]);