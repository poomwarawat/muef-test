(this["webpackJsonpmuef-test"]=this["webpackJsonpmuef-test"]||[]).push([[6],{486:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(484),r=a(5),u=a(471),o=a(9),d=a(8),s=function(e){var t=e.type,a=e.codeId,l=Object(n.useState)(null),s=Object(r.a)(l,2),m=s[0],E=s[1];Object(n.useEffect)((function(){if(101===t){d.a.get("/check-total-score/".concat(a)).then((function(e){!1===e.data.result?E(!1):E(!0)}))}else if(102===t){d.a.get("/check-total-score-102/".concat(a)).then((function(e){!1===e.data.result?E(!1):E(!0)}))}}),[]);return c.a.createElement("div",null,!0===m?c.a.createElement("div",null):!1!==m?c.a.createElement("div",null,"Loading..."):c.a.createElement(o.b,{to:"".concat(e.url)},c.a.createElement(u.a,{color:"primary"},"\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19")))},m=function(e){var t=e.type,a=e.codeId,l=Object(n.useState)(null),u=Object(r.a)(l,2),s=u[0],m=u[1];Object(n.useEffect)((function(){101===t?d.a.get("/check-total-score/".concat(a)).then((function(e){e.data.result?m(!1):m(!0)})):102===t&&d.a.get("/check-total-score-102/".concat(a)).then((function(e){e.data.result?m(!1):m(!0)}))}),[]);return c.a.createElement("div",null,!0===s?c.a.createElement("div",null):!1!==s?c.a.createElement("div",null,"Loading..."):c.a.createElement(o.b,{to:"".concat(e.url)},"\u0e1c\u0e25\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19"))},E=function(e){var t=e.type,a=e.codeId,l=Object(n.useState)(null),s=Object(r.a)(l,2),m=s[0],E=s[1];Object(n.useEffect)((function(){101===t?d.a.get("/check-total-score/".concat(a)).then((function(e){e.data.result?E(!1):E(!0)})):102===t&&d.a.get("/check-total-score-102/".concat(a)).then((function(e){e.data.result?E(!1):E(!0)}))}),[]);return c.a.createElement("div",null,!0===m?c.a.createElement("div",null):!1!==m?c.a.createElement("div",null,"Loading..."):c.a.createElement(o.b,{to:"".concat(e.url)},c.a.createElement(u.a,{color:"danger"},"\u0e41\u0e01\u0e49\u0e44\u0e02")))};t.a=function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19\u0e17\u0e35\u0e48\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e1a\u0e1a\u0e1f\u0e2d\u0e23\u0e4c\u0e21 MU.EF ",e.testCode),c.a.createElement("div",{className:"table-bg"},c.a.createElement(l.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u0e25\u0e33\u0e14\u0e31\u0e1a"),c.a.createElement("th",null,"\u0e23\u0e2b\u0e31\u0e2a\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19"),c.a.createElement("th",null,"\u0e0a\u0e37\u0e48\u0e2d-\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"),c.a.createElement("th",null,"\u0e41\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19"),c.a.createElement("th",null,"\u0e1c\u0e25\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19"),c.a.createElement("th",null,"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"))),c.a.createElement("tbody",null,e.std.map((function(t,a){return c.a.createElement("tr",{key:a},c.a.createElement("th",{scope:"row"},a+1),c.a.createElement("td",null,t.codeId),c.a.createElement("td",null,t.fname," ",t.lname),c.a.createElement("td",null,c.a.createElement(s,{type:e.testCode,codeId:t.codeId,url:"/MUEF-TEST-".concat(e.testCode,"/").concat(t.codeId)})),c.a.createElement("td",null,c.a.createElement(m,{codeId:t.codeId,type:e.testCode,url:"/MUEF-TEST-".concat(e.testCode,"/").concat(t.codeId,"/result")})),c.a.createElement("td",null,c.a.createElement(E,{codeId:t.codeId,type:e.testCode,url:"/edit/".concat(t.codeId)})))}))))))}},488:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),l=a.n(c),r=a(486),u=a(8);t.default=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),a=t[0],o=t[1],d=Object(c.useState)([]),s=Object(n.a)(d,2),m=s[0],E=s[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("key");u.a.get("/get-access-user/".concat(e)).then((function(e){o(e.data[0].username),u.a.get("/get-student-user/".concat(e.data[0].username)).then((function(e){e.data&&E(e.data)}))}))}),[]),l.a.createElement("div",null,a&&m&&l.a.createElement(r.a,{user:a,std:m,testCode:101}))}}}]);
//# sourceMappingURL=6.b1e4a7f9.chunk.js.map