"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7791],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(m,".").concat(k)]||u[k]||g[k]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},40686:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>b,contentTitle:()=>s,default:()=>U,frontMatter:()=>N,metadata:()=>c,toc:()=>y});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,o=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&o(t,a,e[a]);if(d)for(var a of d(e))p.call(e,a)&&o(t,a,e[a]);return t},g=(t,e)=>l(t,i(e)),k=(t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&d)for(var n of d(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a};const N={title:"$getAuditLogs",description:"$getAuditLogs r\xe9cup\xe9rera les logs du serveur en fonction des arguments donn\xe9s.",id:"getAuditLogs"},s=void 0,c={unversionedId:"functions/info-related/getAuditLogs",id:"version-6.4.0/functions/info-related/getAuditLogs",title:"$getAuditLogs",description:"$getAuditLogs r\xe9cup\xe9rera les logs du serveur en fonction des arguments donn\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getAuditLogs.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getAuditLogs",permalink:"/fr/docs/functions/info-related/getAuditLogs",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 juil. 2023",frontMatter:{title:"$getAuditLogs",description:"$getAuditLogs r\xe9cup\xe9rera les logs du serveur en fonction des arguments donn\xe9s.",id:"getAuditLogs"},sidebar:"docs",previous:{title:"$getAttachment",permalink:"/fr/docs/functions/info-related/getAttachment"},next:{title:"$getBanReason",permalink:"/fr/docs/functions/info-related/getBanReason"}},b={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"\xc9v\xe8nements des logs",id:"\xe9v\xe8nements-des-logs",level:2},{value:"Exemple(s)",id:"exemples",level:2}],f={toc:y},v="wrapper";function U(t){var e=t,{components:a}=e,r=k(e,["components"]);return(0,n.kt)(v,g(u(u({},f),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$getAuditLogs")," r\xe9cup\xe9rera les logs du serveur en fonction des arguments donn\xe9s."),(0,n.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$getAuditLogs[IDserveur;IDutilisateur?;limite?;action?;format?]\n")),(0,n.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"IDserveur"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"L'ID d'un serveur sp\xe9cifique."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"IDutilisateur?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"L'utilisateur qui a ex\xe9cut\xe9 l'action indiqu\xe9e dans les logs."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"limite?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"nombre"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Le maximum de logs \xe0 retourner."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"action?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"L'action qui a \xe9t\xe9 ex\xe9cut\xe9e."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"format?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Le format pour retourner les logs."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Formats"),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"{executor.username}"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Renverra le nom d'utilisateur de l'utilisateur qui a excus\xe9 l'action")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"{executor.mention}"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Mentionnera l'utilisateur qui a ex\xe9cut\xe9 l'action")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"{executor.id}"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie l'ID de l'utilisateur qui a ex\xe9cut\xe9 l'action")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"{executor.tag}"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie le discriminateur de l'utilisateur qui a ex\xe9cut\xe9 l'action")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"{target.id}"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie l'ID de l'utilisateur qui a \xe9t\xe9 la cible de l'action")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"{action}"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Retournera l'action elle-m\xeame")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"{id}"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie l'identifiant de l'action.")))),(0,n.kt)("h2",u({},{id:"\xe9v\xe8nements-des-logs"}),"\xc9v\xe8nements des logs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\xc9V\xc9NEMENT"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"VALEUR"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"DESCRIPTION"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"OBJET CHANG\xc9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"GuildUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"1"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Les param\xe8tres du serveur ont \xe9t\xe9 mis \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Serveur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ChannelCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"10"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un salon a \xe9t\xe9 cr\xe9\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Salon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ChannelUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"11"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Les param\xe8tres du salon ont \xe9t\xe9 mis \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Salon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ChannelDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"12"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Le salon a \xe9t\xe9 supprim\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Salon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ChannelOverwriteCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"13"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une r\xe9\xe9criture a \xe9t\xe9 ajout\xe9e au salon"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xe9\xe9criture de salon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ChannelOverwriteUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"14"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Les r\xe9\xe9critures d'un salon ont \xe9t\xe9 mises \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xe9\xe9criture de salon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ChannelOverwriteDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"15"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une r\xe9\xe9criture de salon a \xe9t\xe9 supprim\xe9e"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xe9\xe9criture de salon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MemberKick"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"20"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un membre a \xe9t\xe9 expuls\xe9 du serveur"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MemberPrune"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"21"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un membre a \xe9t\xe9 exclu temporairement du serveur"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MemberBanAdd"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"22"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un membre a \xe9t\xe9 banni du serveur"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MemberBanRemove"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"23"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un membre a \xe9t\xe9 d\xe9banni du serveur"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MemberUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"24"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un membre a \xe9t\xe9 mis \xe0 jour sur le serveur"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Membre")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MemberRoleUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"25"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un membre a \xe9t\xe9 ajout\xe9 ou retir\xe9 d'un r\xf4le"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xf4le")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MemberMove"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"26"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un membre a \xe9t\xe9 d\xe9plac\xe9 vers un salon vocal diff\xe9rent"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MemberDisconnect"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"27"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Le membre a \xe9t\xe9 d\xe9connect\xe9 d'un salon vocal"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"BotAdd"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"28"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un bot a \xe9t\xe9 ajout\xe9 au serveur"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"RoleCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"30"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un r\xf4le a \xe9t\xe9 cr\xe9\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xf4le")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"RoleUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"31"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un r\xf4le a \xe9t\xe9 modifi\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xf4le")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"RoleDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"32"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un r\xf4le a \xe9t\xe9 supprim\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xf4le")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"InviteCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"40"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une invitation au serveur a \xe9t\xe9 cr\xe9\xe9e"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Inviter et inviter des m\xe9tadonn\xe9es")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"InviteUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"41"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un invitation au serveur a \xe9t\xe9 mise \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Invitations et m\xe9tadonn\xe9es des invitations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"InviteDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"42"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une invitation au serveur a \xe9t\xe9 supprim\xe9e"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Invitations et m\xe9tadonn\xe9es des invitations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"WebhookCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"50"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Webhook a \xe9t\xe9 cr\xe9\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Webhook")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"WebhookUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"51"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Les propri\xe9t\xe9s d'un webhook ou du salon ont \xe9t\xe9 mises \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Webhook")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"WebhookDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"52"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un webhook a \xe9t\xe9 supprim\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Webhook")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"EmojiCr\xe9er"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"60"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un \xe9moji a \xe9t\xe9 cr\xe9\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Emoji")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"EmojiUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"61"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Le nom d'un \xe9moji a \xe9t\xe9 mis \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Emoji")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"EmojiDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"62"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un \xe9moji a \xe9t\xe9 supprim\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Emoji")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MessageDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"72"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un seul message a \xe9t\xe9 supprim\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MessageBulkDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"73"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Plusieurs messages ont \xe9t\xe9 supprim\xe9s"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MessagePin"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"74"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un message a \xe9t\xe9 \xe9pingl\xe9 sur un salon"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"MessageUnPin"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"75"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un message a \xe9t\xe9 d\xe9s\xe9pingl\xe9 d'un salon"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"IntegrationCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"80"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une application a \xe9t\xe9 ajout\xe9e au serveur"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Int\xe9gration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"IntegrationUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"81"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une application a \xe9t\xe9 mise \xe0 jour (par exemple, ses port\xe9es ont \xe9t\xe9 mises \xe0 jour)"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Int\xe9gration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"IntegrationDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"82"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une application a \xe9t\xe9 retir\xe9e du serveur"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Int\xe9gration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"StageInstanceCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"83"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une conf\xe9rence a \xe9t\xe9 cr\xe9\xe9e (le salon de conf\xe9rence passe en direct)"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Salon de conf\xe9rence")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"StageInstanceUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"84"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Les d\xe9tails d'une conf\xe9rence ont \xe9t\xe9 mis \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Salon de conf\xe9rence")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"StageInstanceDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"85"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"La conf\xe9rence a \xe9t\xe9 arr\xeat\xe9e (le salon de conf\xe9rence n'est plus en direct)"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Salon de conf\xe9rence")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"StickerCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"90"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un autocollant a \xe9t\xe9 cr\xe9\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Autocollant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"StickerUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"91"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Les d\xe9tails d'un autocollant ont \xe9t\xe9 mis \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Autocollant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"StickerDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"92"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"L'autocollant a \xe9t\xe9 supprim\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Autocollant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"GuildScheduledEventCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"100"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un \xe9v\xe9nement a \xe9t\xe9 cr\xe9\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\xc9v\xe9nement planifi\xe9 de serveur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"GuildScheduledEventUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"101"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un \xe9v\xe9nement a \xe9t\xe9 mis \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\xc9v\xe9nement planifi\xe9 de serveur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"GuildScheduledEventDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"102"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un \xe9v\xe9nement a \xe9t\xe9 annul\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\xc9v\xe9nement planifi\xe9 de serveur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ThreadCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"110"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un fil de discussion a \xe9t\xe9 cr\xe9\xe9 dans un salon"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Fil de discussion")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ThreadUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"111"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un fil de discussion a \xe9t\xe9 mis \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Fil de discussion")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ThreadDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"112"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un fil de discussion a \xe9t\xe9 supprim\xe9"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Fil de discussion")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ApplicationCommandPermissionUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"121"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Les permissions ont \xe9t\xe9 mises \xe0 jour pour une commande"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"Autorisation de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"AutoModerationRuleCreate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"140"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une r\xe8gle de mod\xe9ration automatique a \xe9t\xe9 cr\xe9\xe9e"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xe8gle de mod\xe9ration automatique")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"AutoModerationRuleUpdate"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"141"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une r\xe8gle de mod\xe9ration automatique a \xe9t\xe9 mise \xe0 jour"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xe8gle de mod\xe9ration automatique")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"AutoModerationRuleDelete"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"142"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Une r\xe8gle de mod\xe9ration automatique a \xe9t\xe9 supprim\xe9e"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"R\xe8gle de mod\xe9ration automatique")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"AutoModerationBlockMessage"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"143"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un message a \xe9t\xe9 bloqu\xe9 par la mod\xe9ration automatique"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"AutoModerationFlagToChannel"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"144"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un message a \xe9t\xe9 signal\xe9 par la mod\xe9ration automatique"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"AutoModerationUserCommunicationDisabled"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"145"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Un membre a \xe9t\xe9 exclu temporairement par la mod\xe9ration automatique"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela retournera vos derniers bannissements (qui sont enregistr\xe9s dans les logs du serveur) :"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getAuditLogs',\n    code: `\n  $getAuditLogs[$guildID;$authorID;5;$authorID;12;{executor.username}: {target.id} - {action}]\n  `\n});\n")))}U.isMDXComponent=!0}}]);