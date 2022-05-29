"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28690],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Serializing"},s=void 0,p={unversionedId:"serializing",id:"version-5.0/serializing",title:"Serializing",description:"By default, all entities are monkey patched with toObject() and toJSON methods:",source:"@site/versioned_docs/version-5.0/serializing.md",sourceDirName:".",slug:"/serializing",permalink:"/docs/5.0/serializing",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/serializing.md",tags:[],version:"5.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1663709147,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{title:"Serializing"},sidebar:"docs",previous:{title:"Loading Strategies",permalink:"/docs/5.0/loading-strategies"},next:{title:"Updating Entity Values",permalink:"/docs/5.0/entity-helper"}},c={},d=[{value:"Hidden Properties",id:"hidden-properties",level:2},{value:"Shadow Properties",id:"shadow-properties",level:2},{value:"Property Serializers",id:"property-serializers",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, all entities are monkey patched with ",(0,a.kt)("inlineCode",{parentName:"p"},"toObject()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"toJSON")," methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface AnyEntity<K = number | string> {\n  toObject(parent?: AnyEntity, isCollection?: boolean): Record<string, any>;\n  toJSON(...args: any[]): Record<string, any>;\n  // ...\n}\n")),(0,a.kt)("p",null,"When you serialize your entity via ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify(entity)"),", its ",(0,a.kt)("inlineCode",{parentName:"p"},"toJSON")," method will be\ncalled automatically. You can provide custom implementation for ",(0,a.kt)("inlineCode",{parentName:"p"},"toJSON"),", while using\n",(0,a.kt)("inlineCode",{parentName:"p"},"toObject")," for initial serialization:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Book {\n\n  // ...\n\n  toJSON(strict = true, strip = ['id', 'email'], ...args: any[]): { [p: string]: any } {\n    const o = wrap(this, true).toObject(...args); // do not forget to pass rest params here\n\n    if (strict) {\n      strip.forEach(k => delete o[k]);\n    }\n\n    return o;\n  }\n\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Do not forget to pass rest params when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"toObject(...args)"),", otherwise the results\nmight not be stable.")),(0,a.kt)("h2",{id:"hidden-properties"},"Hidden Properties"),(0,a.kt)("p",null,"If you want to omit some properties from serialized result, you can mark them with ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden"),"\nflag on ",(0,a.kt)("inlineCode",{parentName:"p"},"@Property()")," decorator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Book {\n\n  @Property({ hidden: true })\n  hiddenField = Date.now();\n\n}\n\nconst book = new Book(...);\nconsole.log(wrap(book).toObject().hiddenField); // undefined\nconsole.log(wrap(book).toJSON().hiddenField); // undefined\n")),(0,a.kt)("h2",{id:"shadow-properties"},"Shadow Properties"),(0,a.kt)("p",null,"The opposite situation where you want to define a property that lives only in memory (is\nnot persisted into database) can be solved by defining your property as ",(0,a.kt)("inlineCode",{parentName:"p"},"persist: false"),".\nSuch property can be assigned via one of ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity.assign()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"em.create()")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"em.merge()"),". It will be also part of serialized result. "),(0,a.kt)("p",null,"This can be handle when dealing with additional values selected via ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," or\nMongoDB's aggregations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Book {\n\n  @Property({ persist: false })\n  count?: number;\n\n}\n\nconst book = new Book(...);\nwrap(book).assign({ count: 123 });\nconsole.log(wrap(book).toObject().count); // 123\nconsole.log(wrap(book).toJSON().count); // 123\n")),(0,a.kt)("h2",{id:"property-serializers"},"Property Serializers"),(0,a.kt)("p",null,"As an alternative to custom ",(0,a.kt)("inlineCode",{parentName:"p"},"toJSON()")," method, we can also use property serializers.\nThey allow to specify a callback that will be used when serializing a property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Book {\n\n  @ManyToOne({ serializer: value => value.name, serializedName: 'authorName' })\n  author: Author;\n\n}\n\nconst author = new Author('God')\nconst book = new Book(author);\nconsole.log(wrap(book).toJSON().authorName); // 'God'\n")))}m.isMDXComponent=!0}}]);