(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(21),r=n.n(a),i=(n(28),n(6)),o=(n(29),n(13)),l=n(2),u=n(12),j=n.n(u),b=n(22),d=n(19),h=n(16),m=(n(31),n(1)),O=[],p=[],f=15;var g=function(e){var t,n=e.language,s=(e.user,e.setUser,e.selectedOption,e.setSelectedOption,e.loginUser,Object(c.useState)("--")),a=Object(i.a)(s,2),r=a[0],o=a[1],l=Object(c.useState)(""),u=Object(i.a)(l,2),g=u[0],x=u[1],v=Object(c.useState)(!1),y=Object(i.a)(v,2),w=y[0],k=y[1],S=Object(c.useState)(!1),N=Object(i.a)(S,2),F=N[0],C=N[1],A=Object(c.useState)(!0),U=Object(i.a)(A,2),T=U[0],D=U[1],I=Object(c.useState)(),z=Object(i.a)(I,2),B=z[0],E=z[1],M=Object(c.useState)(0),P=Object(i.a)(M,2),q=P[0],H=P[1];Object(c.useEffect)((function(){E(document.cookie.split("=")[1])}),[]);var J=function(){var e=["blue","green","red","yellow"];return e[Math.floor(Math.random()*e.length)]},L=function(){var e=Object(h.a)(j.a.mark((function e(){var n,c,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(){if(o(f-=1),(0===f||0===p.length||!0===w)&&(clearInterval(t),0===f)){k(!0),f=15;var e=O.length-1;e>q&&H(e)}},o(15),f=16,C(!1),O=[].concat(Object(d.a)(O),[J()]),console.log(O),n=Object(b.a)(O),e.prev=7,n.s();case 9:if((c=n.n()).done){e.next=15;break}return s=c.value,e.next=13,K(s,250);case 13:e.next=9;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:p=Object(d.a)(O),C(!0),t=setInterval(a,1e3);case 26:case"end":return e.stop()}}),e,null,[[7,17,20,23]])})));return function(){return e.apply(this,arguments)}}();function G(e){return W.apply(this,arguments)}function W(){return(W=Object(h.a)(j.a.mark((function e(t){var n,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F){e.next=2;break}return e.abrupt("return");case 2:if(n=t.currentTarget.id,console.log({clickedControler:n}),c=p.shift(),console.log({expectedClick:c}),c!==n){e.next=12;break}console.log(!0),console.log(p),0===p.length&&(console.log("\u05e1\u05d9\u05d9\u05de\u05ea\u05d9\u05d0\u05ea\u05d4\u05e8\u05e6\u05e3"),O.length>q&&H(O.length),setTimeout((function(){L()}),2e3)),e.next=19;break;case 12:return k(!0),(s=O.length-1)>q&&H(s),C(!1),O=[],f=15,e.abrupt("return");case 19:K(n,200);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e,t){return new Promise((function(n,c){switch(setTimeout((function(){x(e),setTimeout((function(){x(""),n()}),250)}),t),e){case"red":new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3").play();break;case"blue":new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3").play();break;case"green":new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3").play();break;case"yellow":new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3").play()}}))}return Object(m.jsx)(m.Fragment,{children:w?Object(m.jsxs)("div",{className:"gameOver",children:[Object(m.jsx)("h1",{children:"game over"}),Object(m.jsx)("div",{className:"buttons",children:Object(m.jsx)("button",{onClick:function(){console.log("new game"),O=[],k(!1),clearInterval(t),o("--"),D(!0)},children:"new game"})})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("h1",{children:["Hello ",B,"!"]}),Object(m.jsxs)("h2",{children:["your highest result in this round is ",q," "]})]}),Object(m.jsxs)("div",{className:"board",children:[Object(m.jsx)("div",{id:"blue",className:F?"blue"===g?"blueFlash":"button blue":"blue"===g?"blueFlash":"button blue notActive",onClick:G}),Object(m.jsx)("div",{id:"yellow",className:F?"yellow"===g?"yellowFlash":"button yellow":"yellow"===g?"yellowFlash":"button yellow notActive",onClick:G}),Object(m.jsx)("div",{id:"red",className:F?"red"===g?"redFlash":"button red":"red"===g?"redFlash":"button red notActive",onClick:G}),Object(m.jsx)("div",{id:"green",className:F?"green"===g?"greenFlash":"button green":"green"===g?"greenFlash":"button green notActive",onClick:G}),Object(m.jsxs)("div",{className:T?"start":"start notActive",onClick:T?function(){D(!1),L()}:null,children:[n.startBtn,Object(m.jsx)("div",{className:"timer",children:r})]})]})]})})};n(33);var x,v=function(e){return e.user,e.setUser,e.selectedOption,e.setSelectedOption,e.loginUser,Object(c.useEffect)((function(){fetch("/getData").then((function(e){return e.json()})).then((function(e){console.log(e)}))}),[]),Object(m.jsx)("div",{className:"loginForm",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("h1",{children:"Welcome to the simon game"}),Object(m.jsx)("h3",{children:"play as"}),Object(m.jsx)("input",{type:"text",placeholder:"enter username",name:"userName",required:!0,onChange:function(e){document.cookie="username=".concat(e.target.value)}}),Object(m.jsx)("h3",{children:"Select a difficulty level"}),Object(m.jsx)("div",{className:"radio",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{value:"easy",name:"Difficulty",type:"radio",required:!0}),"easy (15 min)"]})}),Object(m.jsx)("div",{className:"radio",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{name:"Difficulty",type:"radio",value:"medium"}),"medium (10 min)"]})}),Object(m.jsx)("div",{className:"radio",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{name:"Difficulty",type:"radio"}),"Hard (5 min)"]})}),Object(m.jsx)("button",{type:"submit",children:Object(m.jsx)(o.b,{to:"/simon",style:{"text-decoration":"none",color:"black"},children:" play"})})]})})};var y=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("\u05d0\u05e0\u05d9"),r=Object(i.a)(a,2),u=r[0],j=r[1],b=Object(c.useState)({title:"simon game",routerGame:"game",routerSettings:"settings",startBtn:"start"}),d=Object(i.a)(b,2),h=d[0];return d[1],Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(o.a,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/simon",children:Object(m.jsx)(g,{language:h,user:u,setUser:j,selectedOption:n,setSelectedOption:s,loginUser:x})}),Object(m.jsx)(l.a,{path:"/",children:Object(m.jsx)(v,{user:u,setUser:j,selectedOption:n,setSelectedOption:s,loginUser:x})})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),w()}},[[39,1,2]]]);
//# sourceMappingURL=main.5a7e0cf9.chunk.js.map