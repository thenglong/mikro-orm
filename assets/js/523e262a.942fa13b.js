"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96998],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21083:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"Smart Query Conditions"},s=void 0,p={unversionedId:"query-conditions",id:"query-conditions",title:"Smart Query Conditions",description:"When you want to make complex queries, we can easily end up with a lot of boilerplate code",source:"@site/docs/query-conditions.md",sourceDirName:".",slug:"/query-conditions",permalink:"/docs/next/query-conditions",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/query-conditions.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1663709147,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{title:"Smart Query Conditions"},sidebar:"docs",previous:{title:"Smart Nested Populate",permalink:"/docs/next/nested-populate"},next:{title:"Propagation",permalink:"/docs/next/propagation"}},u={},d=[{value:"List of supported operators",id:"list-of-supported-operators",level:2},{value:"Comparison",id:"comparison",level:3},{value:"Logical",id:"logical",level:3},{value:"Full text searching",id:"full-text-searching",level:2},{value:"PostgreSQL",id:"postgresql",level:3},{value:"MySQL, MariaDB",id:"mysql-mariadb",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"SQLite",id:"sqlite",level:3}],m=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},c=m("Tabs"),k=m("TabItem"),f={toc:d};function g(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When you want to make complex queries, we can easily end up with a lot of boilerplate code\nfull of curly brackets:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const res = await orm.em.find(Author, { $and: [\n  { id: { $in: [1, 2, 7] }, },\n  { id: { $nin: [3, 4] }, },\n  { id: { $gt: 5 }, },\n  { id: { $lt: 10 }, },\n  { id: { $gte: 7 }, },\n  { id: { $lte: 8 }, },\n  { id: { $ne: 9 }, },\n] });\n")),(0,l.kt)("p",null,"For AND condition with single field, we can also do this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const res = await orm.em.find(Author, { \n  id: { \n    $in: [1, 2, 7],\n    $nin: [3, 4],\n    $gt: 5,\n    $lt: 10,\n    $gte: 7,\n    $lte: 8,\n    $ne: 9,\n  },\n});\n")),(0,l.kt)("p",null,"There is also shortcut for ",(0,l.kt)("inlineCode",{parentName:"p"},"$in")," - simply provide array as value and it\nwill be converted automatically:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const res = await orm.em.find(Author, { favouriteBook: [1, 2, 7] });\n")),(0,l.kt)("p",null,"For primary key lookup, we can provide the array directly to ",(0,l.kt)("inlineCode",{parentName:"p"},"em.find()"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const res = await orm.em.find(Author, [1, 2, 7]);\n")),(0,l.kt)("h2",{id:"list-of-supported-operators"},"List of supported operators"),(0,l.kt)("h3",{id:"comparison"},"Comparison"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"operator"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$eq")),(0,l.kt)("td",{parentName:"tr",align:null},"equals"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are equal to a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$gt")),(0,l.kt)("td",{parentName:"tr",align:null},"greater"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are greater than a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$gte")),(0,l.kt)("td",{parentName:"tr",align:null},"greater or equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are greater than or equal to a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$in")),(0,l.kt)("td",{parentName:"tr",align:null},"contains"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches any of the values specified in an array.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$lt")),(0,l.kt)("td",{parentName:"tr",align:null},"lower"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are less than a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$lte")),(0,l.kt)("td",{parentName:"tr",align:null},"lower or equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are less than or equal to a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$ne")),(0,l.kt)("td",{parentName:"tr",align:null},"not equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches all values that are not equal to a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$nin")),(0,l.kt)("td",{parentName:"tr",align:null},"not contains"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches none of the values specified in an array.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$like")),(0,l.kt)("td",{parentName:"tr",align:null},"like"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses LIKE operator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$re")),(0,l.kt)("td",{parentName:"tr",align:null},"regexp"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses REGEXP operator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$fulltext")),(0,l.kt)("td",{parentName:"tr",align:null},"full text"),(0,l.kt)("td",{parentName:"tr",align:null},"A driver specific full text search function. See requirements ",(0,l.kt)("a",{parentName:"td",href:"#full-text-searching"},"below"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$ilike")),(0,l.kt)("td",{parentName:"tr",align:null},"ilike"),(0,l.kt)("td",{parentName:"tr",align:null},"(postgres only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$overlap")),(0,l.kt)("td",{parentName:"tr",align:null},"&&"),(0,l.kt)("td",{parentName:"tr",align:null},"(postgres only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$contains")),(0,l.kt)("td",{parentName:"tr",align:null},"@>"),(0,l.kt)("td",{parentName:"tr",align:null},"(postgres only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$contained")),(0,l.kt)("td",{parentName:"tr",align:null},"<@"),(0,l.kt)("td",{parentName:"tr",align:null},"(postgres only)")))),(0,l.kt)("h3",{id:"logical"},"Logical"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"operator"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$and")),(0,l.kt)("td",{parentName:"tr",align:null},"Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$not")),(0,l.kt)("td",{parentName:"tr",align:null},"Inverts the effect of a query expression and returns documents that do not match the query expression.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$or")),(0,l.kt)("td",{parentName:"tr",align:null},"Joins query clauses with a logical OR returns all documents that match the conditions of either clause.")))),(0,l.kt)("h2",{id:"full-text-searching"},"Full text searching"),(0,l.kt)("p",null,"Full-text search refers to searching some text inside extensive text data stored and returning results that contain some or all of the words from the query. In contrast, traditional search would return exact matches."),(0,l.kt)("p",null,"The implementation and requirements differs per driver so it's important that fields are setup correctly."),(0,l.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,l.kt)("p",null,"PosgreSQL allows to execute queries (pg-query) on the type pg-vector. The pg-vector type can be a column (more performant) or be created in the query (no excess columns in the database)."),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/functions-textsearch.html"},"PostgreSQL documentation")," for possible queries."),(0,l.kt)(c,{groupId:"entity-def",defaultValue:"as-column",values:[{label:"reflect-metadata",value:"as-column"},{label:"ts-morph",value:"in-query"}],mdxType:"Tabs"},(0,l.kt)(k,{value:"as-column",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"import { FullTextType } from '@mikro-orm/postgresql';\n\n@Entity()\nexport class Book {\n\n  @Property()\n  title!: string;\n\n  @Index({ type: 'fulltext' })\n  @Property({ type: FullTextType, onUpdate: (book) => book.title })\n  searchableTitle!: string;\n\n}\n")),(0,l.kt)("p",null,"And to find results: ",(0,l.kt)("inlineCode",{parentName:"p"},"repository.findOne({ searchableTitle: { $fulltext: 'query' } })"))),(0,l.kt)(k,{value:"in-query",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @Index({ type: 'fulltext' })\n  @Property()\n  title!: string;\n\n}\n")),(0,l.kt)("p",null,"And to find results: ",(0,l.kt)("inlineCode",{parentName:"p"},"repository.findOne({ title: { $fulltext: 'query' } })")))),(0,l.kt)("h3",{id:"mysql-mariadb"},"MySQL, MariaDB"),(0,l.kt)("p",null,"MySQL and MariaDB allow full text searches on all columns with a fulltext index."),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/fulltext-boolean.html"},"MySQL documentation")," or ",(0,l.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/full-text-index-overview/#in-boolean-mode"},"MariaDB documentation")," for possible queries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @Index({ type: 'fulltext' })\n  @Property()\n  title!: string;\n\n}\n")),(0,l.kt)("p",null,"And to find results: ",(0,l.kt)("inlineCode",{parentName:"p"},"repository.findOne({ title: { $fulltext: 'query' } })")),(0,l.kt)("h3",{id:"mongodb"},"MongoDB"),(0,l.kt)("p",null,"MongoDB allows full text searches on all columns with a text index. However, when executing a full text search, it selects matches based on all fields with a text index: it's only possible to add one query and only on the top-level of the query object. Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/operator/query/text/#behavior"},"MongoDB documentation")," for more information on this behavior."),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/operator/query/text/#definition"},"MongoDB documentation")," for possible queries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @Index({ type: 'fulltext' })\n  @Property()\n  title!: string;\n\n}\n")),(0,l.kt)("h3",{id:"sqlite"},"SQLite"),(0,l.kt)("p",null,"In SQLite, full text searches can only be executed on ",(0,l.kt)("a",{parentName:"p",href:"https://www.sqlite.org/fts5.html#overview_of_fts5"},"FTS5 virtual tables"),". MikroORM can't create this table, and has to be done ",(0,l.kt)("a",{parentName:"p",href:"https://www.sqlite.org/fts5.html#fts5_table_creation_and_initialization"},"manually"),". Simple tables can be created with this query:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CREATE VIRTUAL TABLE <table name> USING fts5(<colum1>, <column2>, ...);")),(0,l.kt)("p",null,"Afterwards an entity can created normally for the structure of this table. The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Index")," is not necessary for full text searches in SQLite."),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://www.sqlite.org/fts5.html#full_text_query_syntax"},"SQLite documentation")," for possible queries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  title!: string;\n\n}\n")),(0,l.kt)("p",null,"And to find results: ",(0,l.kt)("inlineCode",{parentName:"p"},"repository.findOne({ title: { $fulltext: 'query' } })")))}g.isMDXComponent=!0}}]);