(this["webpackJsonpshopify-frontend-challenge"]=this["webpackJsonpshopify-frontend-challenge"]||[]).push([[0],{14:function(t,e,a){},31:function(t,e,a){},79:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(24),c=a.n(s),l=a(7),r=a(8),o=a(11),d=a(10),u=(a(14),a(9)),h=(a(31),a(25)),j=a.n(h),b=a(26),m=a(3),p=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={images_list:[],isLoaded:!1},n.handleClick=n.handleClick.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://api.nasa.gov/planetary/apod?api_key=UjdTEuz2nZ9mdbac4hojt5Vx4x81h2BNERNcZtNb&count=10").then((function(e){var a=e.data;a.forEach((function(t){t.liked=!1})),localStorage.setItem("local_images",a),t.setState({images_list:a,isLoaded:!0})}))}},{key:"handleClick",value:function(t){var e=this.state.images_list;e[t].liked=!e[t].liked,this.setState({images_list:e})}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Spacestagram"}),this.state.isLoaded?Object(m.jsx)("div",{className:"Cards",children:this.state.images_list.map((function(e,a){return Object(m.jsxs)("div",{className:"Nasa-card",children:[Object(m.jsxs)("h2",{children:[" ",e.title]}),Object(m.jsxs)("p",{children:[" ",e.date," "]}),Object(m.jsx)("img",{className:"Nasa-card-image",alt:e.title,src:e.url}),Object(m.jsx)("button",{className:t.state.images_list[a].liked?"button-liked":"button-unliked",onClick:function(){return t.handleClick(a)},children:"LIKE"},a)]})}))}):Object(m.jsx)(b.BounceLoader,{})]})}}]),a}(i.a.Component),O=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)(p,{})}}]),a}(i.a.Component),f=O,k=document.getElementById("root");c.a.render(Object(m.jsx)(n.StrictMode,{children:Object(m.jsx)(f,{})}),k)}},[[79,1,2]]]);
//# sourceMappingURL=main.2dd9f315.chunk.js.map