(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(4),r=n.n(o),s=n(5),c=n(6),a=n(3),u=n.n(a),i=n(1),d=(n(12),n(0)),l=function(t){var e=t.goods;return Object(d.jsx)("ul",{className:"list",children:e.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",className:"list-item is-".concat(t.color),children:t.name},t.id)}))})};n(14),n(15);function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))}var f;!function(t){t[t.getAllGoods=0]="getAllGoods",t[t.getRedGoods=1]="getRedGoods",t[t.get5FisrtGoods=2]="get5FisrtGoods"}(f||(f={}));var g=function(){var t=Object(i.useState)([]),e=Object(c.a)(t,2),n=e[0],o=e[1],r=0===n.length,a=function(){var t=Object(s.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e,t.next=t.t0===f.getAllGoods?3:t.t0===f.getRedGoods?9:t.t0===f.get5FisrtGoods?15:21;break;case 3:return t.t1=o,t.next=6,b();case 6:return t.t2=t.sent,(0,t.t1)(t.t2),t.abrupt("break",22);case 9:return t.t3=o,t.next=12,b().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 12:return t.t4=t.sent,(0,t.t3)(t.t4),t.abrupt("break",22);case 15:return t.t5=o,t.next=18,b().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}));case 18:return t.t6=t.sent,(0,t.t5)(t.t6),t.abrupt("break",22);case 21:return t.abrupt("break",22);case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(d.jsx)("button",{className:"button",type:"button","data-cy":"all-button",onClick:function(){return a(f.getAllGoods)},children:"Load all goods"}),Object(d.jsx)("button",{className:"button",type:"button","data-cy":"first-five-button",onClick:function(){return a(f.get5FisrtGoods)},children:"Load 5 first goods"}),Object(d.jsx)("button",{className:"button",type:"button","data-cy":"red-button",onClick:function(){return a(f.getRedGoods)},children:"Load red goods"}),!r&&Object(d.jsx)(l,{goods:n})]})};r.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a1a9f5af.chunk.js.map