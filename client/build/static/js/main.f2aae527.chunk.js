(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(33),r=n.n(s),o=(n(46),n(2)),l=(n(47),n(12)),i=n(3),u=n(5),j=n.n(u),d=n(21),b=n(16),h=n(11),g=(n(49),n(61)),m=n(0);var O=function(e){var t=e.gameOverReason,n=e.setgameOver,c=e.setCanStartOver,a=e.setHighestResult,s=Object(g.a)().t;return Object(m.jsxs)("div",{className:"gameOver",children:[Object(m.jsx)("h1",{children:s("gameOverPage.gameOver")}),Object(m.jsx)("h2",{children:s("time`s up"===t?"gameOverPage.time`s up":"gameOverPage.wrong color")}),Object(m.jsx)("div",{className:"buttons",children:Object(m.jsx)("button",{onClick:function(){c(!0),a(0),n(!1)},children:s("gameOverPage.newGame")})})]})};n(32);var p=function(e){var t=e.record,n=e.userName,a=e.level,s=Object(g.a)(),r=s.t,l=(s.i18n,Object(c.useState)([{userName:"loading"}])),i=Object(o.a)(l,2),u=i[0],j=i[1];Object(c.useEffect)((function(){d(),console.log("record change"),console.log({record:t})}),[t]);var d=function(){fetch("/getUsers").then((function(e){return e.json()})).then((function(e){var t=e.users,n=t.sort((function(e,t){return 15===a?t.record1-e.record1:10===a?t.record2-e.record2:5===a?t.record3-e.record3:void 0}));j(n),console.log("set new users"),console.log(t)}))};return Object(m.jsxs)("div",{className:"table",children:[Object(m.jsxs)("h1",{className:"table__title",children:[r("gamePage.level")," ",15===a?1:10===a?2:3]}),Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:r("gamePage.tableTitleUserName")}),Object(m.jsx)("th",{children:r("gamePage.tableTitleRecord")})]})}),Object(m.jsx)("tbody",{children:u.map((function(e,t){return Object(m.jsxs)("tr",{style:e.userName===n?{backgroundColor:"green"}:null,className:e.userName===n?"table__tr table__tr--current":"table__tr",children:[Object(m.jsx)("th",{children:e.userName}),Object(m.jsx)("th",{children:15===a?e.record1:10===a?e.record2:e.record3})]},t)}))})]})]})},f=[],v=[];var x=function(e){var t=e.user,a=e.level,s=e.setUser;Object(c.useEffect)((function(){if(console.log("7777777"),console.log(t),t.constructor===Object&&0===Object.keys(t).length){var e=document.cookie.split("=")[1];console.log(e),console.log("8888888"),fetch("/getUserDataByName",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e})}).then((function(e){return e.json()})).then((function(e){var t=e.userData;console.log(t),s(t)}))}}),[]);var r=Object(g.a)().t,i=Object(c.useState)(!0),u=Object(o.a)(i,2),x=u[0],N=u[1],y=Object(c.useState)(""),w=Object(o.a)(y,2),S=w[0],k=w[1],P=Object(c.useState)(!1),_=Object(o.a)(P,2),C=_[0],F=_[1],T=Object(c.useState)(a),A=Object(o.a)(T,2),E=A[0],U=A[1],D=Object(c.useState)(!1),L=Object(o.a)(D,2),R=L[0],H=L[1],B=Object(c.useState)(),J=Object(o.a)(B,2),z=J[0],M=J[1],q=Object(c.useState)(0),I=Object(o.a)(q,2),G=I[0],V=I[1],K=Object(c.useState)(!1),Q=Object(o.a)(K,2),W=Q[0],X=Q[1],Y=n(32);Object(c.useEffect)((function(){15===a?(M(t.record1),t.record1):10===a?(M(t.record2),t.record2):5===a&&(M(t.record3),t.record3)}),[t]);var Z=function(){var e=Object(h.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:U(a),F(!1),f=[].concat(Object(b.a)(f),[$()]),console.log(f),t=Object(d.a)(f),e.prev=5,t.s();case 7:if((n=t.n()).done){e.next=13;break}return c=n.value,e.next=11,ee(c,250);case 11:e.next=7;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),t.e(e.t0);case 18:return e.prev=18,t.f(),e.finish(18);case 21:v=Object(b.a)(f),F(!0),H(!0);case 24:case"end":return e.stop()}}),e,null,[[5,15,18,21]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){if(R){if(!(E<=0)){var e=setTimeout((function(){U(E-1)}),1e3);return function(){clearTimeout(e)}}X("time`s up")}else console.log("timer stop")}),[E,R]);var $=function(){var e=["blue","green","red","yellow"];return e[Math.floor(Math.random()*e.length)]},ee=function(e,t){return new Promise((function(n,c){switch(setTimeout((function(){k(e),setTimeout((function(){k(""),n()}),250)}),t),e){case"red":new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3").play();break;case"blue":new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3").play();break;case"green":new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3").play();break;case"yellow":new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3").play()}}))},te=function(e){C?function(e){ne.apply(this,arguments)}(e.currentTarget.id):console.log("butoons not active")};function ne(){return(ne=Object(h.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.shift()===n?(ee(n,200),0===v.length&&(H(!1),V(f.length),f.length>z&&(M(f.length),ce(t.userName,f.length,a)),setTimeout((function(){Z()}),1e3))):(console.log("wrong color"),U(a),H(!1),X("wrong color"),F(!1),N(!0),f=[]);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=function(e,t,n){fetch("/updateRecord",{method:"put",body:JSON.stringify({userName:e,newRecord:t,level:n}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){console.log(e),console.log("update")}))},ae=Y("start",{notActive:!x}),se=Y({blueFlash:C&&"blue"===S},{"button blue":C&&"blue"!==S},{blueFlash:!C&&"blue"===S},{"button blue notActive":!C&&"blue"!==S}),re=Y({redFlash:C&&"red"===S},{"button red":C&&"red"!==S},{redFlash:!C&&"red"===S},{"button red notActive":!C&&"red"!==S}),oe=Y({greenFlash:C&&"green"===S},{"button green":C&&"green"!==S},{greenFlash:!C&&"green"===S},{"button green notActive":!C&&"green"!==S}),le=Y({yellowFlash:C&&"yellow"===S},{"button yellow":C&&"yellow"!==S},{yellowFlash:!C&&"yellow"===S},{"button yellow notActive":!C&&"yellow"!==S});return Object(m.jsx)(m.Fragment,{children:W?Object(m.jsx)(O,{gameOverReason:W,setCanStartOver:N,setgameOver:X,setHighestResult:V}):Object(m.jsxs)("div",{className:"wrrapper",children:[Object(m.jsxs)("h1",{className:"wrrapper__title",children:[r("gamePage.Hello")," ",t.userName]}),Object(m.jsxs)("h3",{className:"wrrapper__info",children:[r("gamePage.highestResult1")," ",z]}),Object(m.jsxs)("h3",{className:"wrrapper__info",children:[r("gamePage.highestResult2")," ",G," "]}),Object(m.jsxs)("div",{className:"board",children:[Object(m.jsx)("div",{id:"blue",className:se,onClick:te}),Object(m.jsx)("div",{id:"yellow",className:le,onClick:te}),Object(m.jsx)("div",{id:"red",className:re,onClick:te}),Object(m.jsx)("div",{id:"green",className:oe,onClick:te}),Object(m.jsxs)("div",{className:ae,onClick:function(e){x&&(N(!1),Z())},children:[r("gamePage.start"),Object(m.jsx)("div",{className:"timer",children:E})]})]}),Object(m.jsx)(l.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(m.jsx)("button",{onClick:function(){return f=[]},type:"submit",className:"backButton button",children:r("gamePage.backBtn")})}),Object(m.jsx)(p,{record:z,userName:t.userName,level:a})]})})};var N=function(e){e.setUserName,e.setLanguage;var t=e.setLevel,n=e.setUser,a=Object(g.a)(),s=a.t,r=a.i18n,l=Object(i.f)(),u=Object(c.useState)(!1),d=Object(o.a)(u,2),b=d[0],O=d[1],p=function(e){r.changeLanguage(e)},f=function(){var e=Object(h.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/validatUserName",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,password:c})}).then((function(e){return e.json()})).then((function(e){console.log({data:e}),e.userData?(n(e.userData),console.log("user set"),l.push("/simon")):O(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"settingsForm",children:[Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.children.userName.value,n=e.target.children.password.value;console.log(n),document.cookie="userName=".concat(t),f(t,n)},children:[Object(m.jsx)("h1",{className:"settingsForm__title",children:s("settingPage.title")}),Object(m.jsx)("h3",{className:"loginSection__description",children:s("settingPage.playAs")}),Object(m.jsx)("input",{className:"loginSection__input",type:"text",placeholder:s("settingPage.placeholder"),name:"userName",required:!0}),Object(m.jsx)("input",{className:"loginSection__input",type:"password",placeholder:s("settingPage.placeholder2"),name:"password",required:!0}),Object(m.jsx)("p",{className:"loginSection__errMesagge",children:b?s("settingPage.loginError"):null}),Object(m.jsxs)("div",{className:"settingsForm__radio",children:[Object(m.jsxs)("div",{className:"lang",children:[Object(m.jsx)("h3",{children:s("settingPage.lang")}),Object(m.jsxs)("label",{htmlFor:"English",children:[s("settingPage.English"),Object(m.jsx)("input",{type:"radio",name:"language",value:"English",id:"English",onChange:function(){return p("en")}})]}),Object(m.jsxs)("label",{htmlFor:"Hebrew",children:[s("settingPage.Hebrew"),Object(m.jsx)("input",{type:"radio",name:"language",value:"Hebrew",id:"Hebrew",onChange:function(){return p("hi")}})]})]}),Object(m.jsxs)("div",{className:"level",children:[Object(m.jsx)("h3",{children:s("settingPage.difficultyLevel")}),Object(m.jsxs)("div",{className:"level__btns",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{value:"easy",name:"Difficulty",type:"radio",required:!0,checked:!0,onChange:function(){return t(15)}}),s("settingPage.easy")]})}),Object(m.jsx)("div",{className:"radio",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{name:"Difficulty",type:"radio",value:"medium",onChange:function(){return t(10)}}),s("settingPage.medium")]})}),Object(m.jsx)("div",{className:"radio",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{name:"Difficulty",type:"radio",value:"hard",onChange:function(){return t(5)}}),s("settingPage.Hard")]})})]})]})]}),Object(m.jsx)("button",{type:"submit",className:"button",children:s("settingPage.play")})]}),Object(m.jsx)("img",{src:"../../../../../logo1.png",alt:"simonImg"})]})};var y=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)({}),s=Object(o.a)(a,2),r=s[0],u=s[1],j=Object(c.useState)("English"),d=Object(o.a)(j,2),b=(d[0],d[1]),h=Object(c.useState)(15),g=Object(o.a)(h,2),O=g[0],p=g[1],f=Object(c.useState)(0),v=Object(o.a)(f,2);return v[0],v[1],Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(l.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/simon",children:Object(m.jsx)(x,{user:r,level:O,setUser:u})}),Object(m.jsx)(i.a,{path:"/",children:Object(m.jsx)(N,{setUserName:n,setLanguage:b,setLevel:p,setUser:u})})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},S=n(29),k=n(20),P=n(39),_=n(41);S.a.use(P.a).use(_.a).use(k.e).init({fallbackLng:"en",debug:!0,whitelist:["en","hi"],interpolation:{escapeValue:!1}});S.a;r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(c.Suspense,{fallback:Object(m.jsx)("div",{children:"loading~~~"}),children:Object(m.jsx)(y,{})})}),document.getElementById("root")),w()}},[[60,1,2]]]);
//# sourceMappingURL=main.f2aae527.chunk.js.map