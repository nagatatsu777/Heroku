(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(14),r=n.n(i),o=n(4),u=n(3),a=n.n(u),s="https://infinite-earth-35390.herokuapp.com/api/notes",j=function(){return a.a.get(s)},d=function(e){return a.a.post(s,e)},b=function(e,t){return a.a.put("".concat(s,"/").concat(e),t)},l=function(e){return a.a.delete("".concat(s,"/").concat(e))},f=n(0),h=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),u=Object(o.a)(r,2),a=u[0],s=u[1],h=Object(c.useState)(0),O=Object(o.a)(h,2),m=O[0],p=O[1],x=Object(c.useState)(""),v=Object(o.a)(x,2),g=v[0],S=v[1],w=Object(c.useState)(!1),C=Object(o.a)(w,2),k=C[0],y=C[1];Object(c.useEffect)((function(){console.log("effect"),j().then((function(e){console.log("promise fulfilled"),i(e.data)}))}),[]);var D=function(e){var t=e.deleteFunction;return Object(f.jsx)("button",{onClick:t,children:"delete"})},F=function(e){window.confirm("Do you really want to delete?")&&l(e).then((function(t){var c=n.filter((function(t){return t.id!==e}));i(c)}))};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Search"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(!k)},children:[Object(f.jsxs)("div",{children:["search:",Object(f.jsx)("input",{onChange:function(e){S(e.target.value)}})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"Search"})})]}),Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("success");var t={name:a,number:m,id:n.length+1},c=n.filter((function(e){return e.name===t.name}));c.length>=1?b(c[0].id,t).then((function(e){i(n.filter((function(e){return c[0].id!==e.id})).concat(e.data)),s(""),p("")})):(d(t).then((function(e){i(n.concat(e.data)),s(""),p(0)})),s(""),p(0))},children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{onChange:function(e){s(e.target.value)}})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{onChange:function(e){p(e.target.value)}})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]}),Object(f.jsx)("h2",{children:"Numbers"}),k?n.filter((function(e){return g.toLowerCase()===e.name.toLowerCase()})).map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[e.name," : ",e.number]}),Object(f.jsx)(D,{deleteFunction:function(){return F(e.id)}})]},e.id)})):n.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[e.name," : ",e.number]}),Object(f.jsx)(D,{deleteFunction:function(){return F(e.id)}})]},e.id)}))]})};r.a.render(Object(f.jsx)(h,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9d86fca1.chunk.js.map