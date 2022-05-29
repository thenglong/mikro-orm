"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32983],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={title:"Entity Generator"},s=void 0,c={unversionedId:"entity-generator",id:"version-5.3/entity-generator",title:"Entity Generator",description:"To generate entities from existing database schema, you can use EntityGenerator helper.",source:"@site/versioned_docs/version-5.3/entity-generator.md",sourceDirName:".",slug:"/entity-generator",permalink:"/docs/entity-generator",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.3/entity-generator.md",tags:[],version:"5.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1663709147,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{title:"Entity Generator"},sidebar:"docs",previous:{title:"Schema Generator",permalink:"/docs/schema-generator"},next:{title:"Naming Strategy",permalink:"/docs/naming-strategy"}},u={},p=[{value:"Advanced configuration",id:"advanced-configuration",level:2},{value:"Current limitations",id:"current-limitations",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To generate entities from existing database schema, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityGenerator")," helper. "),(0,a.kt)("p",null,"You can use it via CLI: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To work with the CLI, first install ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/cli")," package locally.\nThe version needs to be aligned with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," package.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm generate-entities --dump  # Dumps all generated entities\nnpx mikro-orm generate-entities --save --path=./my-entities  # Saves entities into given directory\n")),(0,a.kt)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./generate-entities.ts"',title:'"./generate-entities.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    discovery: {\n      // we need to disable validation for no entities \n      warnWhenNoEntities: false,\n    },\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getEntityGenerator();\n  const dump = await generator.generate({ \n    save: true,\n    baseDir: process.cwd() + '/my-entities',\n  });\n  console.log(dump);\n  await orm.close(true);\n})();\n")),(0,a.kt)("p",null,"Then run this script via ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node generate-entities\n")),(0,a.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityGenerator")," generates only owning sides of relations (e.g. M:1) and uses decorators for the entity definition. We can adjust its behaviour via ",(0,a.kt)("inlineCode",{parentName:"p"},"entityGenerator")," section in the ORM config. Available options: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bidirectionalRelations")," to generate also the inverse sides for them"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identifiedReferences")," to generate M:1 and 1:1 relations as wrapped references"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entitySchema")," to generate the entities using ",(0,a.kt)("inlineCode",{parentName:"li"},"EntitySchema")," instead of decorators")),(0,a.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in mysql, tinyint columns will be defined as boolean properties")))}m.isMDXComponent=!0}}]);