(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(14),i=n.n(o),r=n(4),u=n(3),a=n.n(u),s="https://infinite-earth-35390.herokuapp.com/api/notes",l=function(){return a.a.get(s)},j=function(e){return console.log("Create"),a.a.post("".concat(s,"/").concat(e.name,"/").concat(e.number,"/").concat(e.id),e)},d=function(e,t){return a.a.put("".concat(s,"/").concat(e),t)},b=function(e){return a.a.delete("".concat(s,"/").concat(e))},f=n(0),h=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(""),u=Object(r.a)(i,2),a=u[0],s=u[1],h=Object(c.useState)(0),O=Object(r.a)(h,2),m=O[0],p=O[1],x=Object(c.useState)(""),g=Object(r.a)(x,2),v=g[0],S=g[1],w=Object(c.useState)(!1),C=Object(r.a)(w,2),k=C[0],y=C[1];Object(c.useEffect)((function(){console.log("effect"),l().then((function(e){console.log("promise fulfilled"),o(e.data)}))}),[]);var D=function(e){var t=e.deleteFunction;return Object(f.jsx)("button",{onClick:t,children:"delete"})},F=function(e){window.confirm("Do you really want to delete?")&&(b(e).then((function(t){var c=n.filter((function(t){return t.id!==e}));o(c)})),console.log("6"))};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Search"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(!k)},children:[Object(f.jsxs)("div",{children:["search:",Object(f.jsx)("input",{onChange:function(e){S(e.target.value)}})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"Search"})})]}),Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("success");var t={name:a,number:m,id:n.length+1};console.log("1");var c=n.filter((function(e){return e.name===t.name}));c.length>=1?(console.log("2"),d(c[0].id,t).then((function(e){o(n.filter((function(e){return c[0].id!==e.id})).concat(e.data)),s(""),p("")})),console.log("3")):(console.log("4"),j(t).then((function(e){o(n.concat(e.data)),s(""),p(0)})),s(""),p(0),console.log("5"))},children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{onChange:function(e){s(e.target.value)}})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{onChange:function(e){p(e.target.value)}})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]}),Object(f.jsx)("h2",{children:"Numbers"}),k?n.filter((function(e){return v.toLowerCase()===e.name.toLowerCase()})).map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[e.name," : ",e.number]}),Object(f.jsx)(D,{deleteFunction:function(){return F(e.id)}})]},e.id)})):n.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[e.name," : ",e.number]}),Object(f.jsx)(D,{deleteFunction:function(){return F(e.id)}})]},e.id)}))]})};i.a.render(Object(f.jsx)(h,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fcc6a32b.chunk.js.map