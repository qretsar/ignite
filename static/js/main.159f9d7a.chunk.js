(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{68:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s,o,d,b,l,g,m,j,u,p=t(0),h=t.n(p),O=t(21),A=t.n(O),f=t(3),x=t(11),w=t(4),v=t(69),E={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}},y={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}},k=t.p+"static/media/logo.9b6b8655.svg",C=t(12),I=t.n(C),S=t(17),D=t(13),R=t.n(D),U="https://api.rawg.io/api/",L="key=faed85b8d5414975b6b944c4a801cac2",N=(new Date).getFullYear(),T=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),B=function(){var e=(new Date).getDate()+1;return e<10?"0".concat(e):e}(),G="".concat(N,"-").concat(T,"-").concat(B),z="".concat(N-1,"-").concat(T-1,"-").concat(B-1),H="".concat(N+1,"-").concat(T+1>12?"01":T+1,"-").concat(B),_="games?".concat(L,"&dates=").concat(z,",").concat(G,"&ordering=-rating&page_size=10"),F="games?".concat(L,"&dates=").concat(G,",").concat(H,"&ordering=-added&page_size=10"),X="games?".concat(L,"&dates=").concat(z,",").concat(G,"&ordering=-released&page_size=10"),P=function(e){return"".concat(U,"games/").concat(e,"/screenshots?").concat(L)},Z=function(e){return"".concat(U,"games?search=").concat(e,"&").concat(L,"&page_size=9")},M=t(9),V=t(1),J=Object(w.b)(v.a.nav)(a||(a=Object(f.a)(["\n  padding: 3rem 5rem;\n  text-align: center;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    margin-top: 1rem;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n    outline: none;\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem 2rem;\n    cursor: pointer;\n    background: #027199;\n    color: white;\n  }\n"]))),W=Object(w.b)(v.a.nav)(c||(c=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n  img {\n    height: 2rem;\n    width: 2rem;\n  }\n"]))),Q=function(){var e=Object(M.b)(),n=Object(p.useState)(""),t=Object(x.a)(n,2),a=t[0],c=t[1],r=Object(M.c)((function(e){return e.games})).searched,i=function(){e({type:"CLEAR_SEARCHED"})};return Object(V.jsxs)(J,{variants:E,initial:"hidden",animate:"show",children:[Object(V.jsxs)(W,{onClick:i,children:[Object(V.jsx)("img",{src:k,alt:"logo"}),Object(V.jsx)("h1",{children:"Ignite"})]}),Object(V.jsxs)("form",{className:"search",children:[r.length?Object(V.jsx)("button",{onClick:i,children:"CLEAR SEARCH"}):"",Object(V.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},type:"text"}),Object(V.jsx)("button",{onClick:function(n){var t;n.preventDefault(),e((t=a,function(){var e=Object(S.a)(I.a.mark((function e(n){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get(Z(t));case 2:a=e.sent,n({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),c(" ")},type:"submit",children:"Search"})]})]})},Y=t(14),K=function(e,n){return e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games/","/media/resize/".concat(n,"/-/games/"))},q=Object(w.b)(v.a.div)(r||(r=Object(f.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n  overflow: hidden;\n  /* padding: 0.1rem; */\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]))),$=function(e){var n=e.name,t=e.released,a=e.image,c=e.id;console.log("".concat(null===a));var r=Object(M.b)();return Object(V.jsx)(q,{variants:y,initial:"hidden",animate:"show",onClick:function(){document.body.style.overflow="hidden",r(function(e){return function(){var n=Object(S.a)(I.a.mark((function n(t){var a,c;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,R.a.get((r=e,"".concat(U,"games/").concat(r,"?").concat(L)));case 3:return a=n.sent,n.next=6,R.a.get(P(e));case 6:c=n.sent,t({type:"GET_DETAIL",payload:{game:a.data,screen:c.data}});case 8:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()}(c))},children:Object(V.jsxs)(Y.b,{to:"/ignite/game/".concat(c),children:[Object(V.jsx)("h3",{children:n}),Object(V.jsx)("p",{children:t}),a?Object(V.jsx)("img",{src:K(a,1280),alt:n}):Object(V.jsx)("img",{src:a,alt:n})]})})},ee=t(2),ne=t.p+"static/media/apple.5757c37e.svg",te=t.p+"static/media/gamepad.c9269ef5.svg",ae=t.p+"static/media/nintendo.f579be04.svg",ce=t.p+"static/media/playstation.18cc4b9c.svg",re=t.p+"static/media/steam.d7b8819f.svg",ie=t.p+"static/media/xbox.3e7db735.svg",se=Object(w.b)(v.a.div)(i||(i=Object(f.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #027199;\n  }\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"]))),oe=Object(w.b)(v.a.div)(s||(s=Object(f.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  position: absolute;\n  left: 10%;\n  color: black;\n  z-index: 10;\n  img {\n    width: 100%;\n  }\n"]))),de=Object(w.b)(v.a.div)(o||(o=Object(f.a)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: space-between;\n  img {\n    width: 2rem;\n    height: 2rem;\n    display: inline;\n  }\n"]))),be=Object(w.b)(v.a.div)(d||(d=Object(f.a)(["\n  text-align: center;\n"]))),le=Object(w.b)(v.a.div)(b||(b=Object(f.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    margin-left: 3rem;\n  }\n"]))),ge=Object(w.b)(v.a.div)(l||(l=Object(f.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n    /* height: 60vh;\n    object-fit: cover; */\n  }\n"]))),me=Object(w.b)(v.a.div)(g||(g=Object(f.a)(["\n  margin: 5rem 0rem;\n"]))),je=function(){var e=function(e){switch(e){case"PlayStation 4":case"PlayStation 5":return ce;case"Xbox One":case"Xbox Series S/X":return ie;case"PC":return re;case"Nintendo Switch":return ae;case"iOS":return ne;default:return te}},n=Object(M.c)((function(e){return e.detail})),t=n.screen,a=n.game,c=n.isLoading,r=Object(ee.f)();return Object(V.jsx)(V.Fragment,{children:!c&&Object(V.jsx)(se,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",r("/ignite/"))},children:Object(V.jsxs)(oe,{children:[Object(V.jsxs)(de,{children:[Object(V.jsxs)("div",{className:"rating",children:[Object(V.jsx)("h3",{children:a.name}),Object(V.jsxs)("p",{children:["Rating: ",a.rating]}),function(){for(var e=[],n=Math.floor(a.rating),t=1;t<6;t++)t<=n?e.push(Object(V.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},t)):e.push(Object(V.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},t));return e}()]}),Object(V.jsxs)(be,{children:[Object(V.jsx)("h3",{children:"Platforms "}),Object(V.jsx)(le,{children:a.platforms.map((function(n){return Object(V.jsx)("img",{src:e(n.platform.name),alt:n.platform.name},n.platform.id)}))})]})]}),Object(V.jsx)(ge,{children:a.background_image?Object(V.jsx)("img",{src:K(a.background_image,1280),alt:a.background_image}):Object(V.jsx)("img",{src:a.background_image,alt:a.name})}),Object(V.jsx)(me,{children:Object(V.jsx)("p",{children:a.description_raw})}),Object(V.jsx)("div",{className:"gallery",children:t.results.map((function(e){return Object(V.jsx)("img",{src:K(e.image,1280),alt:e.image},e.id)}))})]})})})},ue=Object(w.b)(v.a.div)(m||(m=Object(f.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]))),pe=Object(w.b)(v.a.div)(j||(j=Object(f.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  place-items: center;\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]))),he=function(e){var n=Object(ee.e)().pathname.split("/")[2];console.log(n);var t=Object(M.b)();Object(p.useEffect)((function(){t(function(){var e=Object(S.a)(I.a.mark((function e(n){var t,a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(U).concat(_));case 2:return t=e.sent,e.next=5,R.a.get("".concat(U).concat(X));case 5:return a=e.sent,e.next=8,R.a.get("".concat(U).concat(F));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:c.data.results,newGames:a.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[t]);var a=Object(M.c)((function(e){return e.games})),c=a.newGames,r=a.popular,i=a.upcoming,s=a.searched;return Object(V.jsxs)(ue,{children:[n&&Object(V.jsx)(je,{}),s.length?Object(V.jsxs)("div",{className:"searched",children:[Object(V.jsx)("h2",{children:"Searched Games "}),Object(V.jsx)(pe,{children:s.map((function(e){return Object(V.jsx)($,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]}):"",Object(V.jsx)("h2",{children:"Upcoming Games "}),Object(V.jsx)(pe,{children:i.map((function(e){return Object(V.jsx)($,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(V.jsx)("h2",{children:"Popular Games"}),Object(V.jsx)(pe,{children:r.map((function(e){return Object(V.jsx)($,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(V.jsx)("h2",{children:"New Games"}),Object(V.jsx)(pe,{children:c.map((function(e){return Object(V.jsx)($,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]})},Oe=Object(w.a)(u||(u=Object(f.a)(['\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    html {\n        &::-webkit-scrollbar {\n             width: 0.5rem;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-color:darkgrey; \n       }\n       &::-webkit-scrollbar-track {\n             background: white;\n  }\n    }\n    body{\n        font-family: "Montserrat", sans-serif;\n        width: 100%;\n    }\n    h2{\n        font-size:3rem;\n        font-family: "Abril Fatface", cursive;\n        font-weight: lighter;\n        color: #027199;\n    }\n    h3{\n        font-size: 1.3rem;\n        color: #027199;\n        padding: 1.5rem 0rem;\n    }\n    p{\n        font-size: 1.2rem;\n        line-height: 200%;\n        color:#696969;\n    }\n    a{\n        text-decoration: none:\n    }\n    img{\n        display: block;\n    }\n    input{\n        font-weight: bold;\n        font-family: "Montserrat", sans-serif;\n    }\n'])));var Ae=function(){var e=Object(ee.e)();return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)(Oe,{}),Object(V.jsx)(Q,{}),Object(V.jsxs)(ee.c,{location:e,children:[Object(V.jsx)(ee.a,{path:"ignite/",element:Object(V.jsx)(he,{})}),Object(V.jsx)(ee.a,{path:"/ignite/game/:id",element:Object(V.jsx)(he,{})})]},e.pathname)]})},fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},xe=t(16),we=t(7),ve={popular:[],newGames:[],upcoming:[],searched:[]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(we.a)(Object(we.a)({},e),{},{popular:n.payload.popular,upcoming:n.payload.upcoming,newGames:n.payload.newGames});case"FETCH_SEARCHED":return Object(we.a)(Object(we.a)({},e),{},{searched:n.payload.searched});case"CLEAR_SEARCHED":return Object(we.a)(Object(we.a)({},e),{},{searched:[]});default:return Object(we.a)({},e)}},ye={game:{platforms:[]},screen:{results:[]},isLoading:!0},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(we.a)(Object(we.a)({},e),{},{game:n.payload.game,screen:n.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(we.a)(Object(we.a)({},e),{},{isLoading:!0});default:return Object(we.a)({},e)}},Ce=Object(xe.b)({games:Ee,detail:ke}),Ie=t(38),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.c,De=Object(xe.d)(Ce,Se(Object(xe.a)(Ie.a)));A.a.render(Object(V.jsx)(h.a.StrictMode,{children:Object(V.jsx)(M.a,{store:De,children:Object(V.jsx)(Y.a,{children:Object(V.jsx)(Ae,{})})})}),document.getElementById("root")),fe()}},[[68,1,2]]]);
//# sourceMappingURL=main.159f9d7a.chunk.js.map