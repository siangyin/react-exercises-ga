(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),o=n(4),l=n(1);n(12);var u=function(e){return r.a.createElement("div",{className:"AllTheThings"},r.a.createElement("h2",null,"Put these in your cart!"),r.a.createElement("ul",null,e.children))};var s=function(e){return r.a.createElement("div",{className:"MyShoppingCart"},r.a.createElement("h2",null,"Your Cart!"),r.a.createElement("ul",null,e.children))};var p=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),s=u[0],p=u[1],m=Object(a.useState)(""),d=Object(l.a)(m,2),b=d[0],h=d[1],f=Object(a.useState)({backgroundColor:"white",border:"1px solid grey"}),g=Object(l.a)(f,2),v=g[0],y=g[1],E=r.a.createElement("button",{type:"submit",disabled:!0},"Submit");function k(e){console.log(e.target.value),""===e.target.value&&y({backgroundColor:"#fdffb6",border:"1px solid red"})}return i&&s&&b&&(E=r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={name:i,price:s,description:b};return console.log("yeah submitted"),e.onSaveObj(n),h(""),p(""),c("")}},r.a.createElement("input",{type:"text",value:i,name:"name",placeholder:"product name",maxLength:"30",onChange:function(e){var t=e.target.value;c(t)},onBlur:k,style:v}),r.a.createElement("input",{type:"number",value:s,name:"price",placeholder:"product price",min:"0.01",step:"0.01",onChange:function(e){var t=e.target.value;p(t)},onBlur:k,style:v}),r.a.createElement("textarea",{name:"description",value:b,placeholder:"product description",onChange:function(e){var t=e.target.value;h(t)},onBlur:k,style:v}),E)},m=[{name:"allen wrench",price:2.99,description:"handy tool"},{name:"cornucopia",price:5.99,description:"festive holiday decoration"},{name:"banana",price:.99,description:"full of potassium"},{name:"guillotine (cigar)",price:10.59,description:"behead your stub"},{name:"jack-o-lantern",price:3.99,description:"spooky seasonal fun"},{name:"doggie treat (box)",price:5.99,description:"fido loves 'em"},{name:"egg separator",price:3.99,description:"it separates yolks from whites"},{name:"LED lightbulb",price:6.55,description:"It's super-efficient!"},{name:"owl pellets",price:3.99,description:"Don't ask what they used to be."},{name:"flag",price:5.99,description:"catches the breeze"},{name:"hair brush",price:6.99,description:"fine boar bristles"},{name:"iridium (one gram)",price:19.36,description:"corrosion-resistant metal"},{name:"quark",price:.01,description:"Very small"},{name:"turtleneck",price:19.99,description:"available in black and slightly-darker black"},{name:"kaleidoscope",price:8.25,description:"tube with moving plastic pieces inside"},{name:"mitt (leather)",price:15,description:"regulation sized"},{name:"nothing",price:10,description:"Hey, if you pay us, we won't ask any questions."},{name:"violin",price:2e3,description:"Talk about a JS fiddle..."},{name:"yoyo",price:1,description:"We had to pull some strings to get this one in."},{name:"pincushion",price:1.99,description:"You'll get 'stuck' on it"}];function d(){var e=Object(a.useState)(m),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([]),d=Object(l.a)(c,2),b=d[0],h=d[1];function f(e,t){return e.map(function(e,n){return r.a.createElement("li",{key:e.name+e.price+n,id:n,onClick:t},e.name," - $",e.price," ",r.a.createElement("br",null),e.description)})}return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Big Time Shopping"),r.a.createElement("div",{className:"Form"},r.a.createElement("h2",null,"Enter new item here"),r.a.createElement(p,{onSaveObj:function(e){i(function(t){return[e].concat(Object(o.a)(t))}),console.log("in app js"),console.log(e)}})),r.a.createElement("div",{className:"products"},r.a.createElement(u,null,f(n,function(e){var t=e.target.id;n[t].hasOwnProperty("Qty")?n[t].Qty+=1:n[t].Qty=1;var a,r={name:n[t].name,price:n[t].price};a=r,h(function(e){return[].concat(Object(o.a)(e),[a])})})),r.a.createElement(s,null,f(b,function(e){!function(e){var t=b.filter(function(t,n){return parseInt(e)!==n});h(t)}(e.currentTarget.id)}))))}var b=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),b)},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.968ae748.chunk.js.map