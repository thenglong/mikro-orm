"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13053],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52565:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Identity Map and Request Context",sidebar_label:"Identity Map"},s=void 0,p={unversionedId:"identity-map",id:"version-5.2/identity-map",title:"Identity Map and Request Context",description:"MikroORM uses identity map in background, so we will always get the same instance of one entity.",source:"@site/versioned_docs/version-5.2/identity-map.md",sourceDirName:".",slug:"/identity-map",permalink:"/docs/5.2/identity-map",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.2/identity-map.md",tags:[],version:"5.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1663709147,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{title:"Identity Map and Request Context",sidebar_label:"Identity Map"},sidebar:"docs",previous:{title:"Fundamentals",permalink:"/docs/5.2/fundamentals"},next:{title:"Entity References",permalink:"/docs/5.2/entity-references"}},d={},u=[{value:"Forking Entity Manager",id:"forking-entity-manager",level:2},{value:"Global Identity Map",id:"global-identity-map",level:2},{value:'<a name="request-context"></a> <code>RequestContext</code> helper',id:"-requestcontext-helper",level:2},{value:"How does <code>RequestContext</code> helper work?",id:"how-does-requestcontext-helper-work",level:3},{value:"<code>@UseRequestContext()</code> decorator",id:"userequestcontext-decorator",level:2},{value:"Why is Request Context needed?",id:"why-is-request-context-needed",level:2},{value:"Problem 1 - growing memory footprint",id:"problem-1---growing-memory-footprint",level:3},{value:"Problem 2 - unstable response of API endpoints",id:"problem-2---unstable-response-of-api-endpoints",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM")," uses identity map in background, so we will always get the same instance of one entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const authorRepository = em.getRepository(Author);\nconst jon = await authorRepository.findOne({ name: 'Jon Snow' }, { populate: ['books'] });\nconst authors = await authorRepository.findAll({ populate: ['books'] });\n\n// identity map in action\nconsole.log(jon === authors[0]); // true\n")),(0,r.kt)("p",null,"If we want to clear this identity map cache, we can do so via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.clear()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"orm.em.clear();\n")),(0,r.kt)("p",null,"We should always keep unique identity map per each request. This basically means that we need to clone entity manager and use the clone in request context. There are two ways to achieve this:"),(0,r.kt)("h2",{id:"forking-entity-manager"},"Forking Entity Manager"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"fork()")," method we can simply get clean entity manager with its own context and identity map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const em = orm.em.fork();\n")),(0,r.kt)("h2",{id:"global-identity-map"},"Global Identity Map"),(0,r.kt)("p",null,"Since v5, it is no longer possible to use the global identity map. This was a common issue that led to weird bugs, as using the global EM without request context is almost always wrong, we always need to have a dedicated context for each request, so they do not interfere."),(0,r.kt)("p",null,"We can still disable this check via ",(0,r.kt)("inlineCode",{parentName:"p"},"allowGlobalContext")," configuration, or a connected environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_ALLOW_GLOBAL_CONTEXT")," - this can be handy especially in unit tests."),(0,r.kt)("h2",{id:"-requestcontext-helper"},(0,r.kt)("a",{name:"request-context"})," ",(0,r.kt)("inlineCode",{parentName:"h2"},"RequestContext")," helper"),(0,r.kt)("p",null,"If we use dependency injection container like ",(0,r.kt)("inlineCode",{parentName:"p"},"inversify")," or the one in ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," framework, it can be hard to achieve this, because we usually want to access our repositories via DI container, but it will always provide we with the same instance, rather than new one for each request. "),(0,r.kt)("p",null,"To solve this, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper, that will use ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/async_context.html#class-asynclocalstorage"},(0,r.kt)("inlineCode",{parentName:"a"},"AsyncLocalStorage"))," in the background to isolate the request context. MikroORM will always use request specific (forked) entity manager if available, so all we need to do is to create new request context preferably as a middleware:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"app.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),(0,r.kt)("p",null,"We should register this middleware as the last one just before request handlers and before any of our custom middleware that is using the ORM. There might be issues when we register it before request processing middleware like ",(0,r.kt)("inlineCode",{parentName:"p"},"queryParser")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bodyParser"),", so definitely register the context after them. "),(0,r.kt)("p",null,"Later on we can then access the request scoped ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext.getEntityManager()"),". This method is used under the hood automatically, so we should not need it. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext.getEntityManager()")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if the context was not started yet.")),(0,r.kt)("h3",{id:"how-does-requestcontext-helper-work"},"How does ",(0,r.kt)("inlineCode",{parentName:"h3"},"RequestContext")," helper work?"),(0,r.kt)("p",null,"Internally all ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," methods that work with the Identity Map (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"em.find()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"em.getReference()"),") first call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.getContext()")," to access the contextual fork. This method will first check if we are running inside ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext")," handler and prefer the ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," fork from it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// we call em.find() on the global EM instance\nconst res = await orm.em.find(Book, {});\n\n// but under the hood this resolves to\nconst res = await orm.em.getContext().find(Book, {});\n\n// which then resolves to\nconst res = await RequestContext.getEntityManager().find(Book, {});\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext.getEntityManager()")," method then checks ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," static instance we use for creating new EM forks in the ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext.create()")," method. "),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/async_context.html#class-asynclocalstorage"},(0,r.kt)("inlineCode",{parentName:"a"},"AsyncLocalStorage"))," class from Node.js core is the magician here. It allows us to track the context throughout the async calls. It allows us to decouple the ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," fork creation (usually in a middleware as shown in previous section) from its usage through the global ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," instance."),(0,r.kt)("h2",{id:"userequestcontext-decorator"},(0,r.kt)("inlineCode",{parentName:"h2"},"@UseRequestContext()")," decorator"),(0,r.kt)("p",null,"Middlewares are executed only for regular HTTP request handlers, what if we need\na request scoped method outside that? One example of that is queue handlers or\nscheduled tasks (e.g. CRON jobs)."),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@UseRequestContext()")," decorator. It requires us to first inject the\n",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM")," instance to current context, it will be then used to create the context\nfor us. Under the hood, the decorator will register new request context for our\nmethod and execute it inside the context."),(0,r.kt)("p",null,"This decorator will wrap the underlying method in ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext.createAsync()")," call. Every call to such method will create new context (new ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," fork) which will be used inside."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"@UseRequestContext()")," should be used only on the top level methods. It should not be nested - a method decorated with it should not call another method that is also decorated with it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MyService {\n\n  constructor(private readonly orm: MikroORM) { }\n\n  @UseRequestContext()\n  async doSomething() {\n    // this will be executed in a separate context\n  }\n\n}\n")),(0,r.kt)("p",null,"Alternatively we can provide a callback that will return the ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { DI } from '..';\n\nexport class MyService {\n\n  @UseRequestContext(() => DI.orm)\n  async doSomething() {\n    // this will be executed in a separate context\n  }\n\n}\n")),(0,r.kt)("h2",{id:"why-is-request-context-needed"},"Why is Request Context needed?"),(0,r.kt)("p",null,"Imagine we will use a single Identity Map throughout our application. It will be shared across all request handlers, that can possibly run in parallel. "),(0,r.kt)("h3",{id:"problem-1---growing-memory-footprint"},"Problem 1 - growing memory footprint"),(0,r.kt)("p",null,"As there would be only one shared Identity Map, we can't just clear it after our request ends. There can be another request working with it so clearing the Identity Map from one request could break other requests running in parallel. This will result in growing memory footprint, as every entity that became managed at some point in time would be kept in the Identity Map. "),(0,r.kt)("h3",{id:"problem-2---unstable-response-of-api-endpoints"},"Problem 2 - unstable response of API endpoints"),(0,r.kt)("p",null,"Every entity has ",(0,r.kt)("inlineCode",{parentName:"p"},"toJSON()")," method, that automatically converts it to serialized form If we have only one shared Identity Map, following situation may occur:"),(0,r.kt)("p",null,"Let's say there are 2 endpoints"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book/:id")," that returns just the book, without populating anything"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book-with-author/:id")," that returns the book and its author populated")),(0,r.kt)("p",null,"Now when someone requests same book via both of those endpoints, we could end up with both returning the same output:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Book")," without populating its property ",(0,r.kt)("inlineCode",{parentName:"li"},"author")," property"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book-with-author/1")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),", this time with ",(0,r.kt)("inlineCode",{parentName:"li"},"author")," populated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),", but this time also with ",(0,r.kt)("inlineCode",{parentName:"li"},"author")," populated")),(0,r.kt)("p",null,"This happens because the information about entity association being populated is stored in the Identity Map."))}m.isMDXComponent=!0}}]);