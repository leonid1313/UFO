(this.webpackJsonpufo=this.webpackJsonpufo||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(23),r=a.n(s),i=(a(55),a(13)),o=a(17),j=a(7),l=(a(56),a(1));var u=function(){return Object(l.jsx)("div",{className:"container-header",children:Object(l.jsx)("h1",{className:"title-header",children:"Cats"})})};a(58);var b=function(){return Object(l.jsx)("div",{className:"containerLoader",children:"Leonid Manuilenko"})},d=(a(59),a(8));var O=function(e){var t=Object.assign({},e);return Object(l.jsx)("div",{className:"container-about",children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(d.a.Img,{variant:"top",src:t.location.data.largeImageURL}),Object(l.jsxs)(d.a.Body,{children:[Object(l.jsxs)(d.a.Title,{children:["User name: ",t.location.data.user]}),Object(l.jsxs)(d.a.Text,{children:["Type: ",t.location.data.type]}),Object(l.jsxs)(d.a.Text,{children:["Views: ",t.location.data.views]}),Object(l.jsxs)(d.a.Text,{children:["Comments: ",t.location.data.comments]}),Object(l.jsxs)(d.a.Text,{children:["Tags: ",t.location.data.tags]}),Object(l.jsxs)(d.a.Text,{children:["Likes: ",t.location.data.likes]}),Object(l.jsxs)(d.a.Text,{children:["Downloads: ",t.location.data.downloads]})]})]})})},m=(a(60),a(42)),h=a(43),x=a(50),p=a(49),f=a(26),g=a(30),v=a.n(g),k=a(44),y="GET_USERS",N=a(45),T=a.n(N),C=a(20);a(83);var S=function(e){var t=e.image,a=e.likes,n=e.tags,c=e.comments,s=e.item,r=(e.id,n.split(","));return Object(l.jsx)("div",{className:"container-card",children:Object(l.jsxs)(d.a,{children:[Object(l.jsxs)("div",{className:"container-image",children:[Object(l.jsx)(o.b,{className:"link-about",to:{pathname:"/about/".concat(s.id),data:s}}),Object(l.jsx)(d.a.Img,{className:"image",variant:"top",src:t})]}),Object(l.jsxs)(d.a.Body,{children:[Object(l.jsxs)(d.a.Text,{children:["Likes: ",a]}),Object(l.jsxs)(d.a.Text,{children:["Comments: ",c]}),Object(l.jsxs)(d.a.Text,{children:["Tags:",r.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("span",{className:"tags-span",children:e})})}))]})]})]})})},w=(a(86),a(27)),L=a(32),F=(a(87),function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],s=1;s<=Math.ceil(a/t);s++)c.push(s);return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(l.jsxs)("li",{className:"page-item",children:[Object(l.jsx)(w.a,{className:"button-pagination",onClick:function(){return n(e)},variant:"primary",children:e})," "]},e)}))})})});var R=function(e){var t=e.items,a=Object(n.useState)(1),c=Object(i.a)(a,2),s=c[0],r=c[1],o=Object(n.useState)(12),j=Object(i.a)(o,2),u=j[0],b=(j[1],s*u),d=b-u,O=t.slice(d,b),m=Object(n.useState)(Object(C.a)(O)),h=Object(i.a)(m,2),x=h[0],p=h[1];console.log(x);var f=Object(n.useCallback)((function(e){switch(e.target.value){case"Sort by":p(Object(C.a)(O));break;case"Likes":p(Object(C.a)(O).sort((function(e,t){return t.likes-e.likes})));break;case"Comments":p(Object(C.a)(O).sort((function(e,t){return t.comments-e.comments})))}}),[O]),g=Object(n.useState)(""),v=Object(i.a)(g,2),k=v[0],y=v[1];return Object(n.useEffect)((function(){return p(O)}),[t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container-sort",children:[Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)(L.a.Control,{type:"text",placeholder:"Search for tags",value:k,onChange:function(e){y(e.target.value)}}),Object(l.jsx)(w.a,{className:"button-find",variant:"primary",onClick:function(){if(""===y)p(Object(C.a)(O));else{var e=O.filter((function(e){return e.tags.toLowerCase().includes(k)}));p(e)}},children:"Find"})," "]}),Object(l.jsxs)(L.a.Select,{onChange:f,id:"sort","aria-label":"Default select example",children:[Object(l.jsx)("option",{value:"Sort by",children:"Sort by"}),Object(l.jsx)("option",{value:"Likes",children:"Likes"}),Object(l.jsx)("option",{value:"Comments",children:"Comments"})]})]}),Object(l.jsx)("div",{className:"container",children:x===[]?Object(l.jsx)("h1",{children:"No card with this tag"}):x.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(S,{link:e.pageURL,userName:e.user,image:e.largeImageURL,likes:e.likes,tags:e.tags,comments:e.comments,item:e,id:e.id},e.id)})}))}),Object(l.jsx)(F,{postsPerPage:u,totalPosts:t.length,paginate:function(e){return r(e)}})]})},U=(a(88),function(e){Object(x.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"render",value:function(){var e=this.props.users.users;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container-search",children:Object(l.jsx)(R,{items:e})})})}}]),a}(c.a.Component)),P=Object(f.b)((function(e){return{users:e.users}}),{getUsers:function(){return function(){var e=Object(k.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://pixabay.com/api/?key=23130780-02838ef9e7fd441ed11d8cbfa&q=cats&image_type=all&per_page=100");case 3:a=e.sent,t({type:y,payload:a.data.hits}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"USERS_ERROR",payload:console.log(e.t0)});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})(U);var E=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(!1),setTimeout((function(){c(!0)}),1e3)}),[]),Object(l.jsx)(l.Fragment,{children:a?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.a,{basename:"/UFO",children:[Object(l.jsx)(u,{}),Object(l.jsx)(j.a,{path:"/",exact:!0,component:P}),Object(l.jsx)(j.a,{path:"/about/:item",exact:!0,component:O})]})}):Object(l.jsx)(b,{})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},D=a(18),B=a(47),M=a(48),_=a(2),J={users:[],loading:!0};var q=Object(D.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(_.a)(Object(_.a)({},e),{},{users:t.payload,loading:!1});default:return e}}}),G=[B.a],V=Object(D.createStore)(q,{},Object(M.composeWithDevTools)(D.applyMiddleware.apply(void 0,G)));r.a.render(Object(l.jsx)(f.a,{store:V,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(E,{})})}),document.getElementById("root")),I()}},[[89,1,2]]]);
//# sourceMappingURL=main.092cb809.chunk.js.map