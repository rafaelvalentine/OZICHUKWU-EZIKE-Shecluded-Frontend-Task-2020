(this["webpackJsonpshecluded-frontend-task"]=this["webpackJsonpshecluded-frontend-task"]||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),c=n(17),l=n(21),u=n(12),s={data:[],paginationCount:0,paginationLimit:0,paginationPage:0},d={data:[]},p={loading:!1},g=Object(l.c)({Cats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CAT_DATA":return Object(u.a)({},e,{},a);default:return e}},LOTR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"DATA_DATA":return Object(u.a)({},e,{},a);default:return e}},Loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"LOADING":return console.log(a),Object(u.a)({},e,{loading:a});default:return e}}}),m=n(43),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,f=Object(l.e)(g,h(Object(l.a)(m.a))),b=n(25),E=n(14),P=n(15),v=n(18),w=n(16),x=n(19),O=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(v.a)(this,Object(w.a)(t).call(this,e))).state={error:null,errorInfo:null},n}return Object(x.a)(t,e),Object(P.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("div",null,r.a.createElement("h2",null,"Something went wrong."),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(a.Component),y=n(22),j=(n(63),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"one-half left"},r.a.createElement("h1",null,"CG Generalist"),r.a.createElement("a",{href:"#",className:"cta"},"Let's Go")),r.a.createElement("div",{className:"one-half right"},r.a.createElement("h1",null,"Designer/Developer"),r.a.createElement("a",{href:"#",className:"cta"},"Let's Go")))}),k=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null))}}]),t}(a.Component),F=Object(c.b)(null,null)(k),T=n(48),N=n(49),B=n(13),D=(n(64),function(e){return r.a.createElement(B.a,{className:"cards ml-5 mr-4 mb-4"},r.a.createElement(B.a.Img,{variant:"top",src:e.url}),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,r.a.createElement("span",null,"Breed:")," ",e.breeds.name||"moxie"),r.a.createElement(B.a.Text,null,r.a.createElement("span",null,"Temperament: ")," ",e.breeds.temperament),r.a.createElement(B.a.Text,null,r.a.createElement("span",null,"Life Span: ")," ",e.breeds.life_span),r.a.createElement("span",null," Shedding Level:")," ",e.breeds.shedding_level,r.a.createElement(B.a.Text,null,r.a.createElement("span",null,"Dog Friendly:")," ",e.breeds.dog_friendly),r.a.createElement(B.a.Text,null,r.a.createElement("span",null," Child Friendly: "),e.breeds.child_friendly)))}),C=(n(65),n(26)),L=n(9),A=n(5),_="375px",S="425px",U="768px",R="1024px",I="1440px",G="2560px",M={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(_,")"),mobileL:"(min-width: ".concat(S,")"),tablet:"(min-width: ".concat(U,")"),laptop:"(min-width: ".concat(R,")"),laptopL:"(min-width: ".concat(I,")"),desktop:"(min-width: ".concat(G,")"),desktopL:"(min-width: ".concat(G,")")};function z(){var e=Object(L.a)(["\ncolor: ",";\nmargin:0 6px;\ncursor:pointer;\n:hover{\n  color: ",";\n}\n"]);return z=function(){return e},e}function H(){var e=Object(L.a)(["\njustify-content:space-around;\n"]);return H=function(){return e},e}function J(){var e=Object(L.a)(["\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nspan.selectedText{\nmargin:0 16px;\n}\n"]);return J=function(){return e},e}function V(){var e=Object(L.a)(["\nwidth: 25px;\nheight: 25px;\nbackground:",";\nborder: none;\n"]);return V=function(){return e},e}function W(){var e=Object(L.a)(["\nposition: absolute;\nbottom: 20px;\ndisplay:flex;\njustify-content:space-between;\nalign-items: center;\nheight: 85px;\nwidth:95%;\nbackground:",";\npadding:35px 64px;\nborder: .5px solid ",";\nmargin: 0 auto; \nmargin-left: 32px;\nfont-size: 12px;\nline-height: 16px;\ncolor: ",";\n@media ","{\n  &.pagination{\n    width:94%;\n    position:fixed;\n    bottom:50px;\n  }\n}\n\n"]);return W=function(){return e},e}var X=A.b.div(W(),(function(e){return"#F5F5F5"}),(function(e){return e.theme.green}),(function(e){return e.theme.cardName}),M.desktop),K=A.b.button(V(),(function(e){return e.theme.transparent})),$=A.b.div(J()),q=(Object(A.b)($)(H()),A.b.span(z(),(function(e){return e.active?e.theme.green:"#C8C8C8"}),(function(e){return e.theme.green})));function Q(){var e=Object(L.a)(["\n    width: ",";\n    height: ",";\n    margin: ",";\n    border: 1px solid ",";\n    background: transparent;\n    padding: 8px;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 10px;\n    line-height: 14px;\n    appearance: none;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: 90%;\n    background-size: center;\n    border-radius: 2px;\n    color: ",";\n    cursor:pointer;\n    :focus{\n        outline: ",";\n    }\n"]);return Q=function(){return e},e}function Y(){var e=Object(L.a)(["\n    margin-top ",";\n"]);return Y=function(){return e},e}var Z=A.b.div(Y(),(function(e){return e.marTop?e.marTop:"0"})),ee=A.b.select(Q(),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.margin}),(function(e){return e.theme.selectBorder}),n(66),(function(e){return e.theme.cardName}),(function(e){return e.theme.blue}));ee.defaultProps={width:"49px",height:"29px"};var te=function(e){var t=e.name,n=e.children,a=e.value,o=e.changed,i=Object(C.a)(e,["name","children","value","changed"]);return r.a.createElement(Z,i,r.a.createElement(ee,Object.assign({name:t,value:a,onChange:o},i)," ",n," "))},ne=function(e){var t=e.data,a=(e.currentPage,e.handlePagnationUp),o=e.handlePagnationDown,i=e.newindexOfFirstUser,c=e.handleDataRange,l=e.pageUsers,u=e.allUsers,s=e.pageNumbers,d=e.selectedPage,p=(e.pageLimit,e.upperPageBound),g=e.lowerPageBound,m=Object(C.a)(e,["data","currentPage","handlePagnationUp","handlePagnationDown","newindexOfFirstUser","handleDataRange","pageUsers","allUsers","pageNumbers","selectedPage","pageLimit","upperPageBound","lowerPageBound"]),h=s().map((function(e){return e.page===t.currentPage?r.a.createElement(q,{active:!0,key:e.id,onClick:function(){return d(e.page)},className:"currentpage"},e.page):e.page<=p&&e.page>g?r.a.createElement(q,{key:e.id,onClick:function(){return d(e.page)}},e.page):null}));return r.a.createElement(X,m,r.a.createElement("div",{style:{cursor:"pointer"}},1!==t.currentPage?r.a.createElement(K,{onClick:o,value:"Prev"},r.a.createElement("img",{className:"double_arrow rotate ",src:n(67),alt:"arrow-left"})," "):null,h,t.currentPage>=Math.ceil(t.count/t.usersPerPage)?null:r.a.createElement(K,{onClick:a,type:"button",value:"Next"},r.a.createElement("img",{className:"double_arrow",src:n(68),alt:"arrow-right"}))),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement($,null,r.a.createElement("span",{className:"selectedText"},"View"),r.a.createElement(te,{changed:c,marTop:"0"},r.a.createElement("option",{hidden:!0},t.usersPerPage),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"50"},"50"),r.a.createElement("option",{value:"100"},"100")),r.a.createElement("span",{className:"selectedText"},"Items per page"))),r.a.createElement("div",null,r.a.createElement("span",null," ",i||0," - ",l||0," out of ",u||0,"  ")))},ae=function(e){var t={name:"nil",temperament:"not stated",life_span:"not stated",shedding_level:"unknown",dog_friendly:"not specified",child_friendly:"unclear"};return e.data.map((function(e){return r.a.createElement(D,Object.assign({key:e.id||Math.random()},e,{breeds:e.breeds[0]||t}))}))},re=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(v.a)(this,Object(w.a)(t).call(this,e))).state={firstPage:1,currentPage:1,usersPerPage:0,pageLimit:5,upperPageBound:10,lowerPageBound:0,count:0,limit:0,data:[],params:{limit:"20",page:"0",order:"DESC",breed_id:"",size:"med",mime_types:"",format:"JSON"}},n.scrollToTop=function(){return window.scrollTo(0,n.myRef.current.offsetTop)},n.handlePagnationUp=function(e){if(e.target.blur(),n.state.currentPage>=n.state.firstPage&&n.setState((function(e,t){return{currentPage:e.currentPage+1}}),(function(){return n.scrollToTop()})),n.state.currentPage===n.state.upperPageBound){var t=n.state.upperPageBound+n.state.pageLimit,a=n.state.lowerPageBound+n.state.pageLimit;n.setState((function(e,n){return{upperPageBound:t,lowerPageBound:a}}))}},n.handlePagnationDown=function(e){if(e.target.blur(),n.state.currentPage===n.state.lowerPageBound+1){var t=n.state.upperPageBound-n.state.pageLimit,a=n.state.lowerPageBound-n.state.pageLimit;n.setState((function(e,n){return{upperPageBound:t,lowerPageBound:a}}))}n.state.currentPage!==n.state.firstPage&&n.setState((function(e,t){return{currentPage:e.currentPage-1}}),(function(){return n.scrollToTop()}))},n.handleDataRange=function(e){e.target.blur();var t=Number(e.target.value);return console.log("numberToShow:",t),n.setState({usersPerPage:t,currentPage:1},(function(){return n.handleFetchCats(Object(u.a)({},n.state.params,{page:0,limit:t})).then((n.renderPageNumbers(),n.scrollToTop(),void console.log("this.state.usersPerPage :",n.state.usersPerPage)))}))},n.renderPageNumbers=function(){for(var e=[],t=Math.ceil(n.state.count/n.state.usersPerPage),a=1;a<=t;a++){var r={id:a,page:a};e.push(r)}return e},n.selectedPage=function(e){n.scrollToTop(),n.setState({currentPage:e},(function(){return n.handleFetchCats(Object(u.a)({},n.state.params,{page:e--}))}))},n.handleFetchCats=function(e){return n.props.handlePageLoader(!0),console.log(e),n.props.handleFetchCats(e).then((function(){setTimeout((function(){n.renderPageNumbers(),n.props.handlePageLoader(!1)}),2e3)}))},n.myRef=r.a.createRef(),n}return Object(x.a)(t,e),Object(P.a)(t,[{key:"componentDidUpdate",value:function(e,t){}},{key:"componentDidMount",value:function(){this.handleFetchCats(this.state.params)}},{key:"render",value:function(){var e=this.state.currentPage*this.state.usersPerPage-this.state.usersPerPage,t=this.state.count,n=e+1,a=this.state.usersPerPage+e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{className:"wrapper py-4",fluid:!0},r.a.createElement("div",{className:"hello-kitty pb-3",ref:this.myRef},"Hello Kitty"),r.a.createElement(N.a,{className:"justify-content-start"},r.a.createElement(ae,{data:this.state.data})),r.a.createElement(ne,{className:"pagination",data:this.state,allUsers:t,pageUsers:a,newindexOfFirstUser:n,handlePagnationUp:this.handlePagnationUp,handlePagnationDown:this.handlePagnationDown,handleDataRange:this.handleDataRange,pageNumbers:this.renderPageNumbers,selectedPage:this.selectedPage,pageLimit:this.state.pageLimit,upperPageBound:this.state.upperPageBound,lowerPageBound:this.state.lowerPageBound})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.data.length!==t.data.length?{data:e.data,currentPage:e.page+1,usersPerPage:e.limit,count:e.count}:Number(e.page)!==Number(t.currentPage)+1?{data:e.data,currentPage:e.page+1,usersPerPage:e.limit,count:e.count}:null}}]),t}(a.Component),oe={CAT_DATA:"CAT_DATA",LOTR_DATA:"LOTR_DATA",LOADING:"LOADING"},ie=n(50),ce=n.n(ie),le=oe.CAT_DATA,ue=function(e){return function(t){return ce.a.create({baseURL:"https://api.thecatapi.com/v1/images/search",headers:{"x-api-key":"5cb17320-581b-4472-87e5-a2cd0d3d8870"}}).get("/",{params:e}).then((function(e){var n=e.data,a=e.headers,r=Number(a["pagination-count"]),o=Number(a["pagination-limit"]),i=parseInt(a["pagination-page"]);return t({type:le,payload:{data:n,paginationCount:r,paginationLimit:o,paginationPage:i}}),n})).catch((function(e){console.log(e)}))}},se=oe.LOADING,de=function(e){return function(t){console.log(e),t({type:se,payload:e})}},pe=Object(c.b)((function(e){return{data:e.Cats.data,count:e.Cats.paginationCount,limit:e.Cats.paginationLimit,page:e.Cats.paginationPage}}),(function(e){return{handleFetchCats:function(t){return e(ue(t))},handlePageLoader:function(t){return e(de(t))}}}))(re),ge=(n(85),function(e){return r.a.createElement("div",{id:"error404"},r.a.createElement("div",{className:"message-box"},r.a.createElement("div",{className:"message-text-div"},r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"Oops! The page you are looking for doesn't exist")),r.a.createElement("div",{className:"buttons-con"},r.a.createElement("div",{className:"action-link-wrap"},r.a.createElement("a",{onClick:function(t){t.preventDefault(),e.history.goBack()},href:"/",className:"link-button link-back-button"},"Go Back"),r.a.createElement("a",{onClick:function(t){t.preventDefault(),e.history.push("/home")},href:"/",className:"link-button"},"Go to Home Page")))))}),me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:F}),r.a.createElement(y.a,{exact:!0,path:"/cats",component:pe}),r.a.createElement(y.a,{component:ge})))},he=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(P.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(a.Component),fe=Object(y.f)(he),be=n(52),Ee=n.n(be);function Pe(){var e=Object(L.a)(["\nposition: absolute;\nbottom: 0;\ntop: 0;\nz-index: 10000;\nwidth: 100%;\nheight: 100%;\ndisplay:flex;\njustify-content: center;\nalign-items:center;\nbackground:","\n// margin: -75px 0 0 -75px;\n// border: 16px solid #f3f3f3;\n// border-radius: 50%;\n// border-top: 16px solid #3498db;\n// width: 120px;\n// height: 120px;\n// -webkit-animation: spin 2s linear infinite;\n// animation: spin 2s linear infinite;\n"]);return Pe=function(){return e},e}var ve=A.b.div(Pe(),(function(e){return"rgba(0, 0, 0, .35)"})),we=function(e){return console.log(e),r.a.createElement(a.Fragment,null,e.loading?r.a.createElement(ve,null,r.a.createElement(Ee.a,{type:"MutatingDots",color:"#FD8A25",height:100,width:100})):null)},xe=Object(c.b)((function(e){return{loading:e.Loading.loading}}),null)(we);n(106),n(107),n(108),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,{store:f},r.a.createElement(A.a,{theme:{orange:"#FD8A25",green:"#27AE60",purple:"#5353D0",blue:"#2F80ED",red:"#FF4500",white:"#FFFFFF",title:"#9E9E9E",text:"#7E7E7E",textBlack:"#000000",header:"#2E384D",subHeader:"#8798AD",label:"#B0BAC9",cardName:"#7E7E7E",cardSkill:"#515151",paleOrange:"#FF4500",lightOrange:"rgba(255, 69, 0, 0.1)",mediumOrange:"#F79E1B",electricBlue:"#0C57FB",lightElectricBlue:"rgba(12, 87, 251, .1)",gray:"#F4F6F8",transparent:"transparent",faintBlue:"#FBFEFF",paleGreen:"rgba(39, 174, 96, 0.5)",lightGreen:"rgba(39, 174, 96, 0.1)",handleText:"#3B3B3B",subHandleText:"#515151",faintBorder:"#F7F7F7",selectBorder:"#F1F2F7",chatBtnRed:"#FF4500"}},r.a.createElement((function(){return r.a.createElement("div",{id:"App"},r.a.createElement(xe,null),r.a.createElement(b.a,null,r.a.createElement(O,null,r.a.createElement(fe,null,r.a.createElement(me,null)))))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,n){e.exports=n(109)},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){e.exports=n.p+"static/media/arrow-dropdown.f1b95245.svg"},67:function(e,t,n){e.exports=n.p+"static/media/arrow-drop-left.d0ea87ea.svg"},68:function(e,t,n){e.exports=n.p+"static/media/arrow-drop-right.758ebe3e.svg"},85:function(e,t,n){}},[[54,1,2]]]);
//# sourceMappingURL=main.e10475d9.chunk.js.map