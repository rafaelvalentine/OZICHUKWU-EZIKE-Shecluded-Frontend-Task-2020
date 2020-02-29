(this["webpackJsonpshecluded-frontend-task"]=this["webpackJsonpshecluded-frontend-task"]||[]).push([[0],{119:function(e,t,n){},122:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),l=n.n(o),i=n(18),c=n(25),u=n(21),s={data:[],paginationCount:0,paginationLimit:0,paginationPage:0},d={data:[]},p={loading:!1},m=Object(c.c)({Cats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CAT_DATA":return Object(u.a)({},e,{},a);default:return e}},LOTR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"LOTR_DATA":return Object(u.a)({},e,{},a);default:return e}},Loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"LOADING":return Object(u.a)({},e,{loading:a});default:return e}}}),g=n(55),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,f=Object(c.e)(m,h(Object(c.a)(g.a))),b=n(12),E=n(15),v=n(16),P=n(19),y=n(17),w=n(20),O=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(P.a)(this,Object(y.a)(t).call(this,e))).state={error:null,errorInfo:null},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("div",null,r.a.createElement("h2",null,"Something went wrong."),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(a.Component),x=n(26),k=n(63),j=(n(74),function(){var e=Object(a.useState)({hoverStyle:""}),t=Object(k.a)(e,2),n=t[0],o=t[1],l=function(){""!==n.hoverStyle&&"right-is-hovered"!==n.hoverStyle?o({hoverStyle:""}):o({hoverStyle:"left-is-hovered"})},i=function(){""!==n.hoverStyle&&"left-is-hovered"!==n.hoverStyle?o({hoverStyle:""}):o({hoverStyle:"right-is-hovered"})};return r.a.createElement("div",{className:"container-jumbutron ".concat(n.hoverStyle)},r.a.createElement("div",{className:"one-half left",onMouseEnter:l,onMouseLeave:l},r.a.createElement("h1",null,"Cats' list"),r.a.createElement(b.b,{to:"/cats",className:"cta"},"Let's Go")),r.a.createElement("div",{className:"one-half right",onMouseEnter:i,onMouseLeave:i},r.a.createElement("h1",null,"The Lord of the Rings"),r.a.createElement(b.b,{to:"/lotr",className:"cta"},"Let's Go")))}),T=function(e){function t(){return Object(E.a)(this,t),Object(P.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null))}}]),t}(a.Component),F=Object(i.b)(null,null)(T),B=n(32),L=n(33),N=n(6),C=(n(76),function(e){return r.a.createElement(N.a,{className:"cards ml-5 mr-4 mb-4"},r.a.createElement(N.a.Img,{variant:"top",src:e.url}),r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,r.a.createElement("span",null,"Breed:")," ",e.breeds.name||"moxie"),r.a.createElement(N.a.Text,null,r.a.createElement("span",null,"Temperament: ")," ",e.breeds.temperament),r.a.createElement(N.a.Text,null,r.a.createElement("span",null,"Life Span: ")," ",e.breeds.life_span),r.a.createElement("span",null," Shedding Level:")," ",e.breeds.shedding_level,r.a.createElement(N.a.Text,null,r.a.createElement("span",null,"Dog Friendly:")," ",e.breeds.dog_friendly),r.a.createElement(N.a.Text,null,r.a.createElement("span",null," Child Friendly: "),e.breeds.child_friendly)))}),D=(n(77),n(31)),S=n(13),A=n(9),_="375px",R="425px",U="768px",M="1024px",I="1440px",G="2560px",z={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(_,")"),mobileL:"(min-width: ".concat(R,")"),tablet:"(min-width: ".concat(U,")"),laptop:"(min-width: ".concat(M,")"),laptopL:"(min-width: ".concat(I,")"),desktop:"(min-width: ".concat(G,")"),desktopL:"(min-width: ".concat(G,")")};function H(){var e=Object(S.a)(["\ncolor: ",";\nmargin:0 6px;\ncursor:pointer;\n:hover{\n  color: ",";\n}\n"]);return H=function(){return e},e}function J(){var e=Object(S.a)(["\njustify-content:space-around;\n"]);return J=function(){return e},e}function W(){var e=Object(S.a)(["\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nspan.selectedText{\nmargin:0 16px;\n}\n"]);return W=function(){return e},e}function X(){var e=Object(S.a)(["\nwidth: 25px;\nheight: 25px;\nbackground:",";\nborder: none;\n"]);return X=function(){return e},e}function V(){var e=Object(S.a)(["\nposition: absolute;\nbottom: 10px;\ndisplay:flex;\njustify-content:space-between;\nalign-items: center;\nheight: 85px;\nwidth: 95%;\nbackground:",";\npadding:35px 64px;\nborder: .5px solid ",";\nmargin: 0 auto; \nmargin-left: 32px;\nfont-size: 12px;\nline-height: 16px;\ncolor: ",";\n@media ","{\n  &.pagination{\n    width:94%;\n    position:fixed;\n    bottom:50px;\n  }\n}\n\n"]);return V=function(){return e},e}var K=A.b.div(V(),(function(e){return"#F5F5F5"}),(function(e){return e.theme.green}),(function(e){return e.theme.cardName}),z.desktop),Q=A.b.button(X(),(function(e){return e.theme.transparent})),$=A.b.div(W()),q=(Object(A.b)($)(J()),A.b.span(H(),(function(e){return e.active?e.theme.green:"#C8C8C8"}),(function(e){return e.theme.green})));function Y(){var e=Object(S.a)(["\n    width: ",";\n    height: ",";\n    margin: ",";\n    border: 1px solid ",";\n    background: transparent;\n    padding: 8px;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 10px;\n    line-height: 14px;\n    appearance: none;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: 90%;\n    background-size: center;\n    border-radius: 2px;\n    color: ",";\n    cursor:pointer;\n    :focus{\n        outline: ",";\n    }\n"]);return Y=function(){return e},e}function Z(){var e=Object(S.a)(["\n    margin-top ",";\n"]);return Z=function(){return e},e}var ee=A.b.div(Z(),(function(e){return e.marTop?e.marTop:"0"})),te=A.b.select(Y(),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.margin}),(function(e){return e.theme.selectBorder}),n(78),(function(e){return e.theme.cardName}),(function(e){return e.theme.blue}));te.defaultProps={width:"49px",height:"29px"};var ne=function(e){var t=e.name,n=e.children,a=e.value,o=e.changed,l=Object(D.a)(e,["name","children","value","changed"]);return r.a.createElement(ee,l,r.a.createElement(te,Object.assign({name:t,value:a,onChange:o},l)," ",n," "))},ae=function(e){var t=e.data,a=(e.currentPage,e.handlePagnationUp),o=e.handlePagnationDown,l=e.newindexOfFirstUser,i=e.handleDataRange,c=e.pageUsers,u=e.allUsers,s=e.pageNumbers,d=e.selectedPage,p=(e.pageLimit,e.upperPageBound),m=e.lowerPageBound,g=Object(D.a)(e,["data","currentPage","handlePagnationUp","handlePagnationDown","newindexOfFirstUser","handleDataRange","pageUsers","allUsers","pageNumbers","selectedPage","pageLimit","upperPageBound","lowerPageBound"]),h=s().map((function(e){return e.page===t.currentPage?r.a.createElement(q,{active:!0,key:e.id,onClick:function(){return d(e.page)},className:"currentpage"},e.page):e.page<=p&&e.page>m?r.a.createElement(q,{key:e.id,onClick:function(){return d(e.page)}},e.page):null}));return r.a.createElement(K,g,r.a.createElement("div",{style:{cursor:"pointer"}},1!==t.currentPage?r.a.createElement(Q,{onClick:o,value:"Prev"},r.a.createElement("img",{className:"double_arrow rotate ",src:n(79),alt:"arrow-left"})," "):null,h,t.currentPage>=Math.ceil(t.count/t.usersPerPage)?null:r.a.createElement(Q,{onClick:a,type:"button",value:"Next"},r.a.createElement("img",{className:"double_arrow",src:n(80),alt:"arrow-right"}))),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement($,null,r.a.createElement("span",{className:"selectedText"},"View"),r.a.createElement(ne,{changed:i,marTop:"0"},r.a.createElement("option",{hidden:!0},t.usersPerPage),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"50"},"50"),r.a.createElement("option",{value:"100"},"100")),r.a.createElement("span",{className:"selectedText"},"Items per page"))),r.a.createElement("div",null,r.a.createElement("span",null," ",l||0," - ",c||0," out of ",u||0,"  ")))},re=function(e){var t={name:"nil",temperament:"not stated",life_span:"not stated",shedding_level:"unknown",dog_friendly:"not specified",child_friendly:"unclear"};return e.data.map((function(e){return r.a.createElement(C,Object.assign({key:e.id||Math.random()},e,{breeds:e.breeds[0]||t}))}))},oe=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(P.a)(this,Object(y.a)(t).call(this,e))).state={firstPage:1,currentPage:1,usersPerPage:0,pageLimit:5,upperPageBound:10,lowerPageBound:0,count:0,limit:0,data:[],params:{limit:"20",page:"0",order:"DESC",breed_id:"",size:"med",mime_types:"",format:"JSON"}},n.scrollToTop=function(){return window.scrollTo(0,n.myRef.current.offsetTop)},n.handlePagnationUp=function(e){if(e.target.blur(),n.state.currentPage>=n.state.firstPage&&n.setState((function(e,t){return{currentPage:e.currentPage+1}}),(function(){return n.scrollToTop()})),n.state.currentPage===n.state.upperPageBound){var t=n.state.upperPageBound+n.state.pageLimit,a=n.state.lowerPageBound+n.state.pageLimit;n.setState((function(e,n){return{upperPageBound:t,lowerPageBound:a}}))}},n.handlePagnationDown=function(e){if(e.target.blur(),n.state.currentPage===n.state.lowerPageBound+1){var t=n.state.upperPageBound-n.state.pageLimit,a=n.state.lowerPageBound-n.state.pageLimit;n.setState((function(e,n){return{upperPageBound:t,lowerPageBound:a}}))}n.state.currentPage!==n.state.firstPage&&n.setState((function(e,t){return{currentPage:e.currentPage-1}}),(function(){return n.scrollToTop()}))},n.handleDataRange=function(e){e.target.blur();var t=Number(e.target.value);return console.log("numberToShow:",t),n.setState({usersPerPage:t,currentPage:1},(function(){return n.handleFetchCats(Object(u.a)({},n.state.params,{page:0,limit:t})).then((n.renderPageNumbers(),n.scrollToTop(),void console.log("this.state.usersPerPage :",n.state.usersPerPage)))}))},n.renderPageNumbers=function(){for(var e=[],t=Math.ceil(n.state.count/n.state.usersPerPage),a=1;a<=t;a++){var r={id:a,page:a};e.push(r)}return e},n.selectedPage=function(e){n.scrollToTop(),n.setState({currentPage:e},(function(){return n.handleFetchCats(Object(u.a)({},n.state.params,{page:e--}))}))},n.handleFetchCats=function(e){return n.props.handlePageLoader(!0),console.log(e),n.props.handleFetchCats(e).then((function(){setTimeout((function(){n.renderPageNumbers(),n.props.handlePageLoader(!1)}),2e3)}))},n.myRef=r.a.createRef(),n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(e,t){}},{key:"componentDidMount",value:function(){this.handleFetchCats(this.state.params)}},{key:"render",value:function(){var e=this.state.currentPage*this.state.usersPerPage-this.state.usersPerPage,t=this.state.count,n=e+1,a=this.state.usersPerPage+e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{className:"wrapper py-4",fluid:!0},r.a.createElement("div",{className:"hello-kitty pb-3",ref:this.myRef},"Hello Kitty"),r.a.createElement(L.a,{className:"justify-content-start"},r.a.createElement(re,{data:this.state.data})),r.a.createElement(ae,{className:"pagination",data:this.state,allUsers:t,pageUsers:a,newindexOfFirstUser:n,handlePagnationUp:this.handlePagnationUp,handlePagnationDown:this.handlePagnationDown,handleDataRange:this.handleDataRange,pageNumbers:this.renderPageNumbers,selectedPage:this.selectedPage,pageLimit:this.state.pageLimit,upperPageBound:this.state.upperPageBound,lowerPageBound:this.state.lowerPageBound})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.data.length!==t.data.length?{data:e.data,currentPage:e.page+1,usersPerPage:e.limit,count:e.count}:Number(e.page)!==Number(t.currentPage)+1?{data:e.data,currentPage:e.page+1,usersPerPage:e.limit,count:e.count}:null}}]),t}(a.Component),le={CAT_DATA:"CAT_DATA",LOTR_DATA:"LOTR_DATA",LOADING:"LOADING"},ie=n(41),ce=n.n(ie),ue=function(){return ce.a.create({baseURL:"https://api.thecatapi.com/v1/images/search",headers:{"x-api-key":"5cb17320-581b-4472-87e5-a2cd0d3d8870"}})},se=function(){return ce.a.create({baseURL:"https://the-one-api.herokuapp.com/v1",headers:{Authorization:"Bearer ".concat("XuyMN15-Bh5C34T1oiQy")}})},de=function(){return{catApi:ue,lotrApi:se}},pe=le.CAT_DATA,me=function(e){return function(t){return de().catApi().get("/",{params:e}).then((function(e){var n=e.data,a=e.headers,r=Number(a["pagination-count"]),o=Number(a["pagination-limit"]),l=parseInt(a["pagination-page"]);return t({type:pe,payload:{data:n,paginationCount:r,paginationLimit:o,paginationPage:l}}),n})).catch((function(e){console.log(e)}))}},ge=le.LOADING,he=function(e){return function(t){t({type:ge,payload:e})}},fe=le.LOTR_DATA,be=function(){return function(e){return de().lotrApi().get("/character").then((function(t){var n=t.data.docs;return e({type:fe,payload:{data:n}}),n})).catch((function(e){console.log(e)}))}},Ee=Object(i.b)((function(e){return{data:e.Cats.data,count:e.Cats.paginationCount,limit:e.Cats.paginationLimit,page:e.Cats.paginationPage}}),(function(e){return{handleFetchCats:function(t){return e(me(t))},handlePageLoader:function(t){return e(he(t))}}}))(oe),ve=(n(97),function(e){return r.a.createElement(N.a,{className:"cards ml-5 mr-4 mb-4"},r.a.createElement(N.a.Img,{variant:"top",src:n(98)}),r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,r.a.createElement("span",null,"name:")," ",e.name||"unknown"),r.a.createElement(N.a.Text,null,r.a.createElement("span",null,"race: ")," ",e.race||"unknown"),r.a.createElement(N.a.Text,null,r.a.createElement("span",null,"gender: ")," ",e.gender||"unknown"),r.a.createElement("span",null," birth:")," ",e.birth||"unknown",r.a.createElement(N.a.Text,null,r.a.createElement("span",null,"death:")," ",e.death||"unknown"),r.a.createElement(N.a.Text,null,r.a.createElement("span",null,"realm: ")," ",e.realm||"unknown"),r.a.createElement(N.a.Text,null,r.a.createElement("span",null," hair: "),e.hair||"unknown"),r.a.createElement(N.a.Link,{href:e.wikiUrl},"Click for more ")))}),Pe=(n(99),function(e){return e.data.map((function(e){return r.a.createElement(ve,Object.assign({key:e._id||Math.random()},e))}))}),ye=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(P.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},n.handleFetchCharacters=function(){return n.props.handlePageLoader(!0),n.props.handleFetchCharacters().then((function(){setTimeout((function(){n.props.handlePageLoader(!1)}),2e3)}))},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(e,t){}},{key:"componentDidMount",value:function(){this.handleFetchCharacters()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{className:"wrapper_lotr py-4",fluid:!0},r.a.createElement("div",{className:"title"},r.a.createElement("p",null,"Welcome to MiddleEarth"),r.a.createElement("span",null,"\"Where there's life there's hope, and need of vittles.\""),r.a.createElement("sub",null,"\u2015 J.R.R. Tolkien, The Lord of the Rings ")),r.a.createElement(L.a,null,r.a.createElement(Pe,{data:this.state.data}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.data.length!==t.data.length?{data:e.data}:null}}]),t}(a.Component),we=Object(i.b)((function(e){return{data:e.LOTR.data}}),(function(e){return{handleFetchCharacters:function(){return e(be())},handlePageLoader:function(t){return e(he(t))}}}))(ye),Oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:F}),r.a.createElement(x.a,{exact:!0,path:"/cats",component:Ee}),r.a.createElement(x.a,{exact:!0,path:"/lotr",component:we})))},xe=function(e){function t(){return Object(E.a)(this,t),Object(P.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(a.Component),ke=Object(x.f)(xe),je=n(61),Te=n.n(je);function Fe(){var e=Object(S.a)(["\nposition: absolute;\nbottom: 0;\ntop: 0;\nz-index: 10000;\nwidth: 100%;\nheight: 100%;\ndisplay:flex;\njustify-content: center;\nalign-items:center;\nbackground:","\n// margin: -75px 0 0 -75px;\n// border: 16px solid #f3f3f3;\n// border-radius: 50%;\n// border-top: 16px solid #3498db;\n// width: 120px;\n// height: 120px;\n// -webkit-animation: spin 2s linear infinite;\n// animation: spin 2s linear infinite;\n"]);return Fe=function(){return e},e}var Be=A.b.div(Fe(),(function(e){return"rgba(0, 0, 0, .35)"})),Le=function(e){return r.a.createElement(a.Fragment,null,e.loading?r.a.createElement(Be,null,r.a.createElement(Te.a,{type:"MutatingDots",color:"#FD8A25",height:100,width:100})):null)},Ne=Object(i.b)((function(e){return{loading:e.Loading.loading}}),null)(Le),Ce=n(42),De=n(62),Se=(n(119),function(){return r.a.createElement(Ce.a,{bg:"primary",variant:"dark",sticky:"top"},r.a.createElement(Ce.a.Brand,{href:"#"},"My List"),r.a.createElement(De.a,{className:"ml-auto"},r.a.createElement(b.c,{className:"nav-link",exact:!0,activeStyle:{borderBottom:"1px solid #fff"},to:"/"},"Home"),r.a.createElement(b.c,{className:"nav-link",to:"/cats",activeStyle:{borderBottom:"1px solid #fff"}},"Cats"),r.a.createElement(b.c,{className:"nav-link",to:"/lotr",activeStyle:{borderBottom:"1px solid #fff"}},"LOTR")))});n(122),n(123),n(124),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,{store:f},r.a.createElement(A.a,{theme:{orange:"#FD8A25",green:"#27AE60",purple:"#5353D0",blue:"#2F80ED",red:"#FF4500",white:"#FFFFFF",title:"#9E9E9E",text:"#7E7E7E",textBlack:"#000000",header:"#2E384D",subHeader:"#8798AD",label:"#B0BAC9",cardName:"#7E7E7E",cardSkill:"#515151",paleOrange:"#FF4500",lightOrange:"rgba(255, 69, 0, 0.1)",mediumOrange:"#F79E1B",electricBlue:"#0C57FB",lightElectricBlue:"rgba(12, 87, 251, .1)",gray:"#F4F6F8",transparent:"transparent",faintBlue:"#FBFEFF",paleGreen:"rgba(39, 174, 96, 0.5)",lightGreen:"rgba(39, 174, 96, 0.1)",handleText:"#3B3B3B",subHandleText:"#515151",faintBorder:"#F7F7F7",selectBorder:"#F1F2F7",chatBtnRed:"#FF4500"}},r.a.createElement((function(){return r.a.createElement("div",{id:"App"},r.a.createElement(Ne,null),r.a.createElement(b.a,null,r.a.createElement(Se,null),r.a.createElement(O,null,r.a.createElement(ke,null,r.a.createElement(Oe,null)))))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,n){e.exports=n(125)},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){e.exports=n.p+"static/media/arrow-dropdown.f1b95245.svg"},79:function(e,t,n){e.exports=n.p+"static/media/arrow-drop-left.d0ea87ea.svg"},80:function(e,t,n){e.exports=n.p+"static/media/arrow-drop-right.758ebe3e.svg"},97:function(e,t,n){},98:function(e,t,n){e.exports=n.p+"static/media/the_one_ring.3de5c276.jpg"},99:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.e169730c.chunk.js.map