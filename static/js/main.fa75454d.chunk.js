(this["webpackJsonpgood-news"]=this["webpackJsonpgood-news"]||[]).push([[0],{100:function(e,t,a){e.exports={navbar:"Navbar_navbar__1TLoR",close:"Navbar_close__2ajIZ"}},101:function(e,t,a){e.exports={customCheckbox:"CustomInput_customCheckbox__1nck1",checkmark:"CustomInput_checkmark__1TlcU"}},15:function(e,t,a){e.exports={header:"Header_header__3u6Mp",btnBurger:"Header_btnBurger__3lOPJ",search:"Header_search__o3u4h",logo:"Header_logo__14nSU",follow:"Header_follow__3I7No",login:"Header_login__1fW6p",followTooltip:"Header_followTooltip__2ugvQ",overlayContainer:"Header_overlayContainer__2HF9w",tooltip:"Header_tooltip__3mRmT",userTooltip:"Header_userTooltip__2mjLG",userHeader:"Header_userHeader__x0xMp",userNav:"Header_userNav__1LG9I",userInfoTriger:"Header_userInfoTriger__35lE_"}},155:function(e,t,a){e.exports={preloader:"Preloader_preloader__3uGWt"}},159:function(e,t,a){e.exports={goTop:"GoTop_goTop__3TSMK"}},161:function(e,t,a){e.exports=a.p+"static/media/facebook.53757d93.svg"},162:function(e,t,a){e.exports=a.p+"static/media/twitter.6620c8ae.svg"},163:function(e,t,a){e.exports=a.p+"static/media/google.276f52a7.svg"},164:function(e,t,a){e.exports=a.p+"static/media/linkedIn.1e01f0c0.svg"},165:function(e,t,a){e.exports=a.p+"static/media/pinterest.74f3c20a.svg"},166:function(e,t){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAB4AHgDAREAAhEBAxEB/8QAaAABAAMBAQEAAAAAAAAAAAAAAAIEBQMBCAEBAAAAAAAAAAAAAAAAAAAAABABAAIBAgMGBQUAAAAAAAAAAAECEQMEITFBUXGREiIUsTJSEwVhgcHxQhEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+jwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiZ4RzBP7OtjPktjukEAAAAAAAAAAAAIiZnEc5BqbfbU0qxwzeedgdgV93tq6lJvWMXjj3gzQAAAAAAAAAAT0Mff088vNHxBrgAAxrY8045Z4A8AAAAAAAAABOmlq340rM46wDQ2+5i8eS/p1Y4TWeAO4K253HCdLS9WpbhOOOIBQvp6lPnrNe8EQAAAAAAAAdNvpfd1a06c57ga1axWIiIxEcoBDV0NLV+euZ7eoOXsdLra8x2Z4fAHbT0tPTjFK4B7elb1mtozEgyNWk6epak9JBEAAAAAAAFz8bX13t2REeP9AvAAAAAzvyEY189tYn+AVgAAAAAAAW/x14i9qTztEY/YF8AAAAGbv7xbXxH+YxPeCuAAAAAAABEzE5jhMdQd43u5iMebPfEAe+3P1R4QB77c/VHhAHvtz9UeEA8tvNxaMefEfpEQDiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="},196:function(e,t,a){e.exports=a(370)},201:function(e,t,a){},202:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),i=a.n(o),c=(a(201),a(23)),l=a(34),s=a(26),u=a(25),A=a(27),m=(a(202),a(203),a(373)),p=a(21),d=a(10),g=a(17),f=a.n(g),E=a(30),h=a(104),v=a(11),b=a(48),_=function e(){var t=this;Object(c.a)(this,e),this.getArticles=function(){var e=Object(E.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instanse.get("".concat(t._getUrl(a),"apiKey=").concat(t.apiKey));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._getUrl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.endpoint;return"top-headlines?"!==a||e.country?"everything?"!==a||e.q||(e.q="headlines"):e.country="us",Object.entries(e).forEach((function(e){a="".concat(a).concat(e[0],"=").concat(e[1],"&")})),a},this.instanse=b.create({baseURL:"https://newsapi.org/v2/"}),this.apiKey="6787679983b14ae09ac4f6f18683340e"},O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).endpoint="top-headlines?",e}return Object(A.a)(t,e),t}(_),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).endpoint="everything?",e}return Object(A.a)(t,e),t}(_),y=new O,j=new w,T={isFetching:!1,isGoTop:!1},x=function(e){return{type:"good-news/app/TOGGLE_IS_FETCHING",payload:{isFetching:e}}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"good-news/app/TOGGLE_IS_FETCHING":case"good-news/app/TOGGLE_IS_GO_TOP":return Object(v.a)({},e,{},t.payload);default:return e}},S="good-news/articles/SET_ASIDE_FILTER",k="good-news/articles/SET_CURRENT_PAGE",C={asideArticles:[],everythingArticles:[],asideFilter:"popular",page:1},I=function(e){return{type:"good-news/articles/SET_TOP_ARTICLES",articles:e}},H=function(e,t){return{type:"good-news/articles/SET_EVERYTHING_ARTICLES",articles:e,page:t}},L=function(e){return{type:k,payload:{page:e}}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"good-news/articles/SET_TOP_ARTICLES":return Object(v.a)({},e,{asideArticles:t.articles.map((function(e,t){return Object(v.a)({},e,{source:Object(v.a)({},e.source,{id:t})})}))});case"good-news/articles/SET_EVERYTHING_ARTICLES":return 1===t.page?Object(v.a)({},e,{everythingArticles:t.articles.map((function(e,t){return Object(v.a)({},e,{source:Object(v.a)({},e.source,{id:t})})}))}):Object(v.a)({},e,{everythingArticles:[].concat(Object(h.a)(e.everythingArticles),Object(h.a)(t.articles)).map((function(e,t){return Object(v.a)({},e,{source:Object(v.a)({},e.source,{id:t})})}))});case S:case k:return Object(v.a)({},e,{},t.payload);default:return e}},B=a(151),M=a(152),F=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(a=Object(v.a)({path:"/"},a)).expires instanceof Date&&(a.expires=a.expires.toUTCString());var n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var r in a){n+="; "+r;var o=a[r];!0!==o&&(n+="="+o)}document.cookie=n},R=new(a.n(M).a)(b);R.onGet("/login").reply((function(e){var t=JSON.parse(localStorage.getItem(e.params.email));return t||(t={id:1,email:"admin@gmail.com",password:"12345",rememberMe:!0,isAuth:!1,login:"admin"}),e.params.email===t.email&&e.params.password===t.password?(e.params.rememberMe&&F("user",e.params.email,{"max-age":36e4}),localStorage.setItem(t.email,JSON.stringify(Object(v.a)({},t,{isAuth:!0}))),[200,{resultCode:0,data:{id:t.id,login:t.login,email:t.email}}]):[201,{resultCode:1,message:"Incorrect login or password"}]})),R.onGet("/logout").reply((function(e){var t=JSON.parse(localStorage.getItem(e.params));return t?(F("user","",{"max-age":-1}),localStorage.setItem(t.email,JSON.stringify(Object(v.a)({},t,{isAuth:!1}))),[200,{resultCode:0}]):[400,{resultCode:1}]})),R.onGet("/auth").reply((function(e){var t=JSON.parse(localStorage.getItem(function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}("user")));return t?[200,{resultCode:0,data:{id:t.id,login:t.login,email:t.email}}]:[201,{resultCode:1}]}));var U,Q=b,P=function(e){return Q.get("/login",{params:e}).then((function(e){return e.data}))},D=function(e){return Q.get("/logout",{params:e}).then((function(e){return e.data.resultCode}))},Y=function(){return Q.get("/auth").then((function(e){return e.data}))},W=a(71),V="good-news/auth/SET_USER_DATA",z={isAuth:!1,id:null,login:null,email:null},Z=function(e,t,a,n){return{type:V,payload:{id:e,login:t,email:a,isAuth:n}}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(v.a)({},e,{},t.payload);default:return e}},J=a(148),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,K=Object(d.c)({articles:G,app:N,auth:q,form:J.a}),$=Object(d.e)(K,X(Object(d.a)(B.a))),ee=a(74),te=a(372),ae=a(158),ne=a(54),re=a.n(ne),oe=a(12),ie=a(13),ce=function(e){var t=e.article;return r.a.createElement("div",{className:re.a.articleItem},r.a.createElement("div",{className:re.a.articleHeading},r.a.createElement("h2",null,r.a.createElement("a",{href:t.url},t.title)),r.a.createElement("p",null,t.description),r.a.createElement("div",{className:re.a.info},"By ",r.a.createElement("span",null,t.author)," Published on ",t.publishedAt)),r.a.createElement("div",{className:re.a.picture},r.a.createElement("img",{className:"w-100",src:t.urlToImage,alt:"photo"})),r.a.createElement("p",null,t.content),r.a.createElement("div",{className:re.a.comment},r.a.createElement("button",{className:"btn"},r.a.createElement("span",null,r.a.createElement(ie.a,{icon:oe.c})),"Load Comments (35)")))},le=function(e){var t=e.articles;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(ce,{article:e,key:e.source.id})})))},se=a(45),ue=a.n(se),Ae=function(e){var t=e.title,a=e.link;return r.a.createElement("div",{className:ue.a.title},r.a.createElement("a",{href:a},t))},me=function(e){var t=e.articles;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(Ae,{key:e.id,link:e.url,title:e.title})})))},pe=function(e){var t=e.articles,a=e.setActiveButton,n=e.asideFilter;return r.a.createElement("aside",{className:ue.a.aside},r.a.createElement("div",{className:ue.a.btnGroup},r.a.createElement("button",{onClick:function(){return a("popular")},className:"btn ".concat("popular"===n?ue.a.active:"")},"POPULAR"),r.a.createElement("button",{onClick:function(){return a("latest")},className:"btn ".concat("latest"===n?ue.a.active:"")},"LATEST")),r.a.createElement(me,{articles:t}))},de=a(154),ge=Object(de.a)((function(e){return e.articles.asideArticles}),(function(e){return e.map((function(e,t){return{title:e.title,url:e.url,id:t}}))})),fe=a(155),Ee=a.n(fe),he=a(156),ve=a.n(he),be=function(){return r.a.createElement("div",{className:Ee.a.preloader},r.a.createElement(ve.a,{type:"Oval",color:"#00BFFF",height:100,width:100}))},_e=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setActiveButton=function(e){a.props.setAsideFilter(e)},a}return Object(A.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getAsideArticles()}},{key:"componentDidUpdate",value:function(e,t){e.asideFilter!==this.props.asideFilter&&this.props.getAsideArticles()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(pe,{articles:this.props.articles,asideFilter:this.props.asideFilter,setActiveButton:this.setActiveButton}))}}]),t}(r.a.Component),Oe=Object(p.b)((function(e){return{articles:ge(e),asideFilter:e.articles.asideFilter}}),{setAsideFilter:function(e){return{type:S,payload:{asideFilter:e}}},getAsideArticles:function(){return function(){var e=Object(E.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t(x(!0)),"popular"!==a().articles.asideFilter){e.next=8;break}return e.next=5,y.getArticles({pageSize:60});case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,j.getArticles({sortBy:"publishedAt",pageSize:60});case 10:n=e.sent;case 11:t(I(n.articles)),t(x(!1)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,a){return e.apply(this,arguments)}}()}})(_e),we=function(e){var t=e.articles;return r.a.createElement("div",null,r.a.createElement(te.a,null,r.a.createElement(ae.a,{sm:4},r.a.createElement(Oe,null)),r.a.createElement(ae.a,{sm:8},r.a.createElement(le,{articles:t}))))},ye=a(159),je=a.n(ye),Te=function(e){var t=e.scrollTop;return r.a.createElement("div",{className:je.a.goTop,onClick:function(){t()}},r.a.createElement(ie.a,{icon:oe.b}))},xe=a(38),Ne=a(36),Se=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onScrollEnd=function(e){var t=window.pageYOffset;t>=document.querySelector("#root").scrollHeight-document.documentElement.clientHeight-300&&!a.props.isFetching&&a.props.getEverythingArticles(a.props.page+1,a.props.match.params.category),t>600?a.props.toggleIsGoTop(!0):a.props.toggleIsGoTop(!1)},a.scrollTop=function(){var e=window.pageYOffset/20,t=setInterval((function(){window.scrollTo(0,window.pageYOffset-e),window.pageYOffset<=0&&clearInterval(t)}),20)},a}return Object(A.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getEverythingArticles(1,this.props.match.params.category),window.addEventListener("scroll",this.onScrollEnd)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScrollEnd)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.category!==e.match.params.category&&(this.props.getEverythingArticles(1,this.props.match.params.category),this.scrollTop())}},{key:"render",value:function(){var e=this.props,t=e.isFetching,a=e.articles,n=e.isGoTop;Object(ee.a)(e,["isFetching","articles","isGoTop"]);return r.a.createElement("div",null,r.a.createElement(Ne.CSSTransitionGroup,{transitionName:"btnGoTop",transitionEnterTimeout:300,transitionLeaveTimeout:300},n&&r.a.createElement(Te,{scrollTop:this.scrollTop})),t&&r.a.createElement(be,null),r.a.createElement(we,{articles:a}))}}]),t}(r.a.Component),ke=Object(d.d)(Object(p.b)((function(e){return{articles:e.articles.everythingArticles,page:e.articles.page,isFetching:e.app.isFetching,isGoTop:e.app.isGoTop}}),{getEverythingArticles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return function(){var a=Object(E.a)(f.a.mark((function a(n){var r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(x(!0)),a.next=4,j.getArticles({pageSize:"5",page:e,q:t});case 4:r=a.sent,n(H(r.articles,e)),n(L(e)),n(x(!1)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},toggleIsGoTop:function(e){return{type:"good-news/app/TOGGLE_IS_GO_TOP",payload:{isGoTop:e}}}}),xe.f)(Se),Ce=a(15),Ie=a.n(Ce),He=a(44),Le=a(161),Ge=a.n(Le),Be=a(162),Me=a.n(Be),Fe=a(163),Re=a.n(Fe),Ue=a(164),Qe=a.n(Ue),Pe=a(165),De=a.n(Pe),Ye=function(e){return function(t){return function(a){var o=Object(n.useState)(!1),i=Object(He.a)(o,2),c=i[0],l=i[1];return r.a.createElement("div",{className:"hoverContainer",onMouseOver:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},r.a.createElement(t,a),r.a.createElement(Ne.CSSTransitionGroup,{transitionName:"hoverTooltip",transitionEnterTimeout:300,transitionLeaveTimeout:300},c&&r.a.createElement(e,a)))}}},We=Ye((function(){var e=Object(n.useState)(["Facebook","Twitter","Google","Linkedin","Pinterest"]),t=Object(He.a)(e,1)[0],a=Object(n.useState)({facebook:Ge.a,twitter:Me.a,google:Re.a,linkedin:Qe.a,pinterest:De.a}),o=Object(He.a)(a,1)[0];return r.a.createElement("ul",{className:Ie.a.followTooltip},t.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"#"}," ",r.a.createElement("img",{src:o[e.toLowerCase()],alt:e}),"Follow us on ",e))})))}))((function(){return r.a.createElement("div",{className:Ie.a.follow},"Follow Us",r.a.createElement("span",null,r.a.createElement(ie.a,{icon:oe.f})))})),Ve=a(166),ze=a.n(Ve),Ze=Ye((function(e){var t=e.logout,a=e.userName;return r.a.createElement("div",{className:"".concat(Ie.a.userTooltip," ").concat(Ie.a.tooltip)},r.a.createElement("div",{className:Ie.a.userHeader},r.a.createElement("img",{src:ze.a,alt:"user"}),r.a.createElement("div",null,a)),r.a.createElement("ul",{className:Ie.a.userNav},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"My profile")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"My account")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"My saved item"))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){t()}},"Logout")))}))((function(e){var t=e.userName;return r.a.createElement("div",{className:Ie.a.userInfoTriger},"Welcome ",r.a.createElement("span",null," ",t," ",r.a.createElement(ie.a,{icon:oe.f})))})),qe=a(100),Je=a.n(qe),Xe=a(58),Ke=function(e){var t=e.toggleIsShowNavbar,a=Object(n.useState)({Technology:"/articles/technology",Politics:"/articles/politics",Sport:"/articles/sport"}),o=Object(He.a)(a,1)[0],i=function(){t(!1)};return r.a.createElement("nav",{className:Je.a.navbar},r.a.createElement("div",{className:Je.a.close,onClick:function(){t(!1)}},r.a.createElement(ie.a,{icon:oe.g})),r.a.createElement("div",null,r.a.createElement("h4",null,"Category"),r.a.createElement("ul",null,Object.entries(o).map((function(e){return r.a.createElement("li",{key:e[0]},r.a.createElement(Xe.b,{onClick:i,to:e[1]},e[0]))})))))},$e=function(e){var t=e.isShowNavbar,a=e.toggleIsShowNavbar,n=e.isAuth,o=e.openLoginForm,i=e.logout,c=e.userName;return r.a.createElement("header",{className:Ie.a.header},r.a.createElement(Ne.CSSTransitionGroup,{transitionName:"navbar",transitionEnterTimeout:300,transitionLeaveTimeout:300},t&&r.a.createElement(Ke,{toggleIsShowNavbar:a})),r.a.createElement(m.a,null,r.a.createElement(te.a,null,r.a.createElement(ae.a,{sm:6},r.a.createElement("div",{className:"d-flex align-items-center ".concat(Ie.a.logo)},r.a.createElement("div",{className:Ie.a.btnBurger,onClick:function(){a(!0)}},r.a.createElement(ie.a,{icon:oe.a})),r.a.createElement("div",{className:Ie.a.search},r.a.createElement(ie.a,{icon:oe.e})),r.a.createElement("h1",null,"Good News"),r.a.createElement(We,null))),r.a.createElement(ae.a,{sm:6},r.a.createElement("div",{className:"d-flex justify-content-end align-items-center h-100 ".concat(Ie.a.login)},n?r.a.createElement(Ze,{userName:c,logout:i}):r.a.createElement("button",{onClick:function(){o(!0)}},"Login"))))))},et=a(53),tt=a.n(et),at=a(146),nt=a(147),rt=a(376),ot=a(375),it=a(377),ct=a(374),lt=function(e){var t=e.input,a=e.label,n=e.type,o=e.placeholder,i=e.icon,c=e.isError,l=e.meta,s=r.a.createElement(rt.a.Control,Object.assign({type:n},t,{placeholder:o,isInvalid:c||l.touched&&l.error}));return r.a.createElement(rt.a.Group,null,a&&r.a.createElement(rt.a.Label,null,a),i?r.a.createElement(ct.a,null,r.a.createElement(ct.a.Prepend,null,r.a.createElement(ct.a.Text,{id:"inputGroupPrepend"},r.a.createElement(ie.a,{color:"#d1d1d1",icon:i}))),s,r.a.createElement(rt.a.Control.Feedback,{type:"invalid"},l.error)):s)},st=function(e){return e||"number"===typeof e?void 0:"Field is required!"},ut=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address!":void 0},At=a(101),mt=a.n(At),pt=function(e){var t=e.input,a=e.label;return r.a.createElement("label",{className:mt.a.customCheckbox},r.a.createElement("input",Object.assign({},t,{type:"checkbox"})),r.a.createElement("span",{className:mt.a.checkmark}),a)},dt=(U=3,function(e){return e&&e.length<U?"Must be ".concat(U," characters or more!"):void 0}),gt=Object(nt.a)({form:"login"})((function(e){var t=e.handleSubmit,a=Object(ee.a)(e,["handleSubmit"]);return r.a.createElement(rt.a,{onSubmit:t},r.a.createElement(at.a,{name:"email",validate:[st,ut],isError:!!a.error,component:lt,type:"text",placeholder:"Email",icon:oe.d}),r.a.createElement(at.a,{name:"password",validate:[st,dt],isError:!!a.error,component:lt,type:"password",placeholder:"Password",icon:oe.h}),r.a.createElement(at.a,{name:"rememberMe",component:pt,label:"Remember me",id:"rememberMe"}),r.a.createElement("div",{className:tt.a.btnSubmit},r.a.createElement(ot.a,{type:"submit",variant:"danger"},"Login")),a.error&&r.a.createElement(it.a,{variant:"danger"},a.error))})),ft=function(e){var t=e.closeLoginForm,a=e.login;return r.a.createElement("div",{className:tt.a.overlay},r.a.createElement("div",{className:tt.a.wrapper},r.a.createElement("div",{onClick:function(){t(!1)},className:tt.a.closeBtn},r.a.createElement(ie.a,{icon:oe.g})),r.a.createElement("h4",null,"Login"),r.a.createElement(gt,{initialValues:{email:"admin@gmail.com",password:"12345"},onSubmit:function(e){a(e)}})))},Et=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isShowNavbar:!1,isLoginMode:!1},a.toggleIsShowNavbar=function(e){a.setState({isShowNavbar:e})},a.toggleLoginMode=function(e){a.setState({isLoginMode:e})},a}return Object(A.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){!e.isAuth&&this.props.isAuth&&this.setState({isLoginMode:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ne.CSSTransitionGroup,{transitionName:"loginModal",transitionEnterTimeout:300,transitionLeaveTimeout:300},this.state.isLoginMode&&r.a.createElement(ft,{login:this.props.login,closeLoginForm:this.toggleLoginMode})),r.a.createElement($e,{isAuth:this.props.isAuth,toggleIsShowNavbar:this.toggleIsShowNavbar,isShowNavbar:this.state.isShowNavbar,openLoginForm:this.toggleLoginMode,logout:this.props.logout,userName:this.props.userName}))}}]),t}(r.a.Component),ht=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,userName:e.auth.login}}),{login:function(e){return function(){var t=Object(E.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:0===(n=t.sent).resultCode?a(Z(n.data.id,n.data.login,n.data.email,!0)):1===n.resultCode&&a(Object(W.a)("login",{_error:n.message})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(E.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(a().auth.email);case 3:0===e.sent&&t(Z(null,null,null,!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()}})(Et),vt=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.authMe()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ht,null),r.a.createElement("main",{className:"appMain"},r.a.createElement(m.a,null,r.a.createElement(xe.b,{path:"/",exact:!0,component:function(){return r.a.createElement(xe.a,{to:"/articles"})}}),r.a.createElement(xe.b,{path:"/articles/:category?",component:ke}))))}}]),t}(r.a.Component),bt=Object(p.b)((function(){return{}}),{authMe:function(){return function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y();case 3:0===(a=e.sent).resultCode&&t(Z(a.data.id,a.data.login,a.data.email,!0)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})(vt),_t=function(){return r.a.createElement(Xe.a,null,r.a.createElement(p.a,{store:$},r.a.createElement(bt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_t,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){e.exports={aside:"Aside_aside__1se7D",btnGroup:"Aside_btnGroup__19YtF",active:"Aside_active__3Nm4j",title:"Aside_title__13ngN"}},53:function(e,t,a){e.exports={overlay:"Login_overlay__35cPA",wrapper:"Login_wrapper__1OucG",btnSubmit:"Login_btnSubmit__IHaad",closeBtn:"Login_closeBtn__1LuUg"}},54:function(e,t,a){e.exports={articleItem:"ArticleList_articleItem__2XGmf",articleHeading:"ArticleList_articleHeading__305ZX",info:"ArticleList_info__3VUWB",picture:"ArticleList_picture__24ptH",comment:"ArticleList_comment__3lVnD"}}},[[196,1,2]]]);
//# sourceMappingURL=main.fa75454d.chunk.js.map