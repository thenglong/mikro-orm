"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52499],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=g(t),m=o,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=t[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65397:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return g},toc:function(){return u}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],l={title:"Logging"},s=void 0,g={unversionedId:"logging",id:"version-5.2/logging",title:"Logging",description:"For development purposes it might come handy to enable logging and debug mode:",source:"@site/versioned_docs/version-5.2/logging.md",sourceDirName:".",slug:"/logging",permalink:"/docs/5.2/logging",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.2/logging.md",tags:[],version:"5.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1663709147,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{title:"Logging"},sidebar:"docs",previous:{title:"Result cache",permalink:"/docs/5.2/caching"},next:{title:"Advanced Features",permalink:"/docs/5.2/advanced"}},p={},u=[{value:"Custom Logger",id:"custom-logger",level:2},{value:"Disabling colored output",id:"disabling-colored-output",level:2},{value:"Logger Namespaces",id:"logger-namespaces",level:2},{value:"Highlighters",id:"highlighters",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"return MikroORM.init({\n  debug: true,\n});\n")),(0,i.kt)("p",null,"By doing this ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," will start using ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," function to dump all queries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[query] select `e0`.* from `author` as `e0` where `e0`.`name` = ? limit ? [took 2 ms]\n[query] begin [took 1 ms]\n[query] insert into `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) values (?, ?, ?, ?, ?) [took 2 ms]\n[query] commit [took 2 ms]\n")),(0,i.kt)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information about every processed entity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[discovery] ORM entity discovery started\n[discovery] - processing entity Author\n[discovery] - using cached metadata for entity Author\n[discovery] - processing entity Book\n[discovery] - processing entity BookTag\n[discovery] - entity discovery finished after 13 ms\n")),(0,i.kt)("h2",{id:"custom-logger"},"Custom Logger"),(0,i.kt)("p",null,"We can also provide our own logger function via ",(0,i.kt)("inlineCode",{parentName:"p"},"logger")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"return MikroORM.init({\n  debug: true,\n  logger: msg => myCustomLogger.log(msg),\n});\n")),(0,i.kt)("p",null,"If we want to have more control over logging, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"loggerFactory"),"\nand use our own implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Logger, LoggerOptions, MikroORM, Configuration } from '@mikro-orm/core';\n\nclass MyLogger implements Logger {\n  // ...\n}\n\nconst orm = await MikroORM.init({\n  debug: true,\n  loggerFactory: (options: LoggerOptions) => new MyLogger(config),\n});\n")),(0,i.kt)("p",null,"We can also extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultLogger")," instead of implementing everything from scratch. It is also exported from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," package."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")," interface is defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Logger {\n  log(namespace: LoggerNamespace, message: string, context?: LogContext): void;\n  error(namespace: LoggerNamespace, message: string, context?: LogContext): void;\n  warn(namespace: LoggerNamespace, message: string, context?: LogContext): void;\n  logQuery(context: LogContext): void;\n  setDebugMode(debugMode: boolean | LoggerNamespace[]): void;\n  isEnabled(namespace: LoggerNamespace): boolean;\n}\n\ntype LoggerNamespace = 'query' | 'query-params' | 'discovery' | 'info';\n\ninterface LogContext {\n  query?: string;\n  params?: unknown[];\n  took?: number;\n  level?: 'info' | 'warning' | 'error';\n  connection?: {\n    type?: string;\n    name?: string;\n  };\n}\n")),(0,i.kt)("h2",{id:"disabling-colored-output"},"Disabling colored output"),(0,i.kt)("p",null,"To disable colored output, we can use multiple environment variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NO_COLOR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MIKRO_ORM_NO_COLOR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FORCE_COLOR"))),(0,i.kt)("h2",{id:"logger-namespaces"},"Logger Namespaces"),(0,i.kt)("p",null,"There are multiple Logger Namespaces that you can specifically request, while omitting the rest. Just specify array of them via the ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"return MikroORM.init({\n  debug: ['query'], // now only queries will be logged\n});\n")),(0,i.kt)("p",null,"Currently, there are 4 namespaces \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"query-params"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"discovery")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,i.kt)("p",null,"If you provide ",(0,i.kt)("inlineCode",{parentName:"p"},"query-params")," then you must also provide ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," in order for it to take effect."),(0,i.kt)("h2",{id:"highlighters"},"Highlighters"),(0,i.kt)("p",null,"Previously Highlight.js was used to highlight various things in the CLI, like SQL and mongo queries, or migrations or entities generated via CLI. While the library worked fine, it was causing\nperformance issues mainly for those bundling via webpack and using lambdas, as the library was huge."),(0,i.kt)("p",null,"Since v4, highlighting is disabled by default, and there are 2 highlighters you can optionally use (you need to install them first)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { SqlHighlighter } from '@mikro-orm/sql-highlighter';\n\nMikroORM.init({\n  highlighter: new SqlHighlighter(),\n  // ...\n});\n")),(0,i.kt)("p",null,"For MongoDB you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoHighlighter")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@mikro-orm/mongo-highlighter"),"\npackage."))}m.isMDXComponent=!0}}]);