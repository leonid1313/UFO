(this.webpackJsonpufo=this.webpackJsonpufo||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(25),i=a.n(s),r=(a(34),a(8)),o=a(10),l=a(2),j=(a(35),a(0));var u=function(){return Object(j.jsx)("div",{className:"container-header",children:Object(j.jsx)("h1",{className:"title-header",children:"Page About Cats"})})};a(37);var d=function(){return Object(j.jsx)("div",{className:"containerLoader",children:"Leonid Manuilenko"})};a(38);var b=function(e){var t=Object.assign({},e);return console.log(t.location.data.largeImageURL),Object(j.jsx)("div",{className:"container-about",children:Object(j.jsxs)("div",{className:"container-card container-card-about",children:[Object(j.jsx)("img",{className:"image-about",src:t.location.data.largeImageURL}),Object(j.jsxs)("div",{className:"cardBody",children:[Object(j.jsxs)("h1",{className:"login",children:["User name: ",t.location.data.user]}),Object(j.jsxs)("h1",{className:"title",children:["Type: ",t.location.data.type]}),Object(j.jsxs)("p",{className:"description",children:["Views: ",t.location.data.views]}),Object(j.jsxs)("p",{className:"rank-text",children:["Comments: ",t.location.data.comments]}),Object(j.jsxs)("p",{className:"date-text",children:["Tags: ",t.location.data.tags]}),Object(j.jsxs)("p",{className:"rank-text",children:["Likes: ",t.location.data.likes]}),Object(j.jsxs)("p",{className:"rank-text",children:["Downloads: ",t.location.data.downloads]})]})]})})},m=a(14),O=a.n(m),h=a(26),x=a(27),p=a.n(x);a(58),a(59);var f=function(e){var t=e.image,a=e.likes,n=e.tags,c=e.comments,s=e.item,i=n.split(",");return Object(j.jsxs)("div",{className:"container-card",children:[Object(j.jsxs)("div",{className:"container-image",children:[Object(j.jsx)(o.b,{className:"link-about",to:{pathname:"/about/".concat(s),data:s}}),Object(j.jsx)("img",{className:"image",src:t})]}),Object(j.jsx)("div",{className:"cardBody",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Likes: ",a]}),Object(j.jsxs)("p",{children:["Comments: ",c]}),Object(j.jsxs)("p",{children:["Tags:",i.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:"tags-span",children:e})})}))]})]})})]})};a(65);var g=function(e){var t=e.items,a=Object(n.useState)(t),s=Object(r.a)(a,2),i=(s[0],s[1]),o=c.a.useState(""),l=Object(r.a)(o,2),u=l[0],d=l[1],b=c.a.useState([]),m=Object(r.a)(b,2),O=(m[0],m[1]),h=t.map((function(e){return e.tags}));return c.a.useEffect((function(){var e=h.filter((function(e){return e.toLowerCase().includes(u)}));O(e)}),[u]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("select",{onChange:function(e){switch(e.target.value){case"Sort by":i();break;case"Likes":i(t.sort((function(e,t){return t.likes-e.likes})));break;case"Comments":i(t.sort((function(e,t){return t.comments-e.comments})))}},className:"sort",children:[Object(j.jsx)("option",{value:"Sort by",children:"Sort by"}),Object(j.jsx)("option",{value:"Likes",children:"Likes"}),Object(j.jsx)("option",{value:"Comments",children:"Comments"})]}),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("input",{type:"text",placeholder:"Search",value:u,onChange:function(e){d(e.target.value)}})}),Object(j.jsx)("div",{className:"container",children:t.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f,{link:e.pageURL,userName:e.user,image:e.largeImageURL,likes:e.likes,tags:e.tags,comments:e.comments,item:e},e.id)})}))})]})},v=(a(66),function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],s=1;s<=Math.ceil(a/t);s++)c.push(s);return Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(j.jsx)("li",{className:"page-item",children:Object(j.jsx)("button",{className:"button-pagination",onClick:function(){return n(e)},children:e})},e)}))})})});var N=function(){var e=Object(n.useState)(1),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(12),i=Object(r.a)(s,2),o=i[0],l=(i[1],Object(n.useState)([])),u=Object(r.a)(l,2),d=u[0],b=u[1],m=function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pixabay.com/api/?key=23130780-02838ef9e7fd441ed11d8cbfa&q=cats&image_type=all&per_page=100").then((function(e){return b(e.data.hits)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m("")}),[]);var x=a*o,f=x-o,N=d.slice(f,x);return console.log(N),Object(j.jsxs)("div",{className:"container-search",children:[Object(j.jsx)(g,{items:N}),Object(j.jsx)(v,{postsPerPage:o,totalPosts:d.length,paginate:function(e){return c(e)}})]})};var k=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(!1),setTimeout((function(){c(!0)}),1e3)}),[]),Object(j.jsx)(j.Fragment,{children:a?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a,{basename:"/UFO",children:[Object(j.jsx)(u,{}),Object(j.jsx)(l.a,{path:"/",exact:!0,component:N}),Object(j.jsx)(l.a,{path:"/about/:item",exact:!0,component:b})]})}):Object(j.jsx)(d,{})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),L()}},[[67,1,2]]]);
//# sourceMappingURL=main.7239e7aa.chunk.js.map