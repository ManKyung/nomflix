(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterImage.c0d876ef.png"},73:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l=n(1),u=n.n(l),d=n(38),p=n.n(d),j=n(12),b=n(13),h=n(15),g=n(14),x=n(19),m=n(5),O=n(10),v=n.n(O),f=n(17),y=n(3),_=n(2),w=n(16),k=n(0),S=_.c.div(r||(r=Object(y.a)(["\n  :not(:last-child){\n    margin-bottom: 50px\n  }\n}\n"]))),R=_.c.span(a||(a=Object(y.a)(["\n  font-size: 14px;\n  font-weight: bold;\n"]))),T=_.c.div(i||(i=Object(y.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),M=function(e){var t=e.title,n=e.children;return Object(k.jsxs)(S,{children:[Object(k.jsx)(R,{children:t}),Object(k.jsx)(T,{children:n})]})},z=_.c.div(c||(c=Object(y.a)(["\n  height:100vh;\n  width: 100vw;\n  display:flex;\n  justify-content:center;\n  font-size: 28px;\n  margin-top: 20px;\n"]))),U=function(){return Object(k.jsx)(z,{children:Object(k.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f2"})})},C=n(4),I=n.n(C),N=_.c.div(o||(o=Object(y.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),F=_.c.span(s||(s=Object(y.a)(["\n  color: ",";\n"])),(function(e){return e.color})),P=function(e){var t=e.text,n=e.color;return Object(k.jsx)(N,{children:Object(k.jsx)(F,{color:n,children:t})})};P.prototype={text:I.a.string.isRequired,color:I.a.string.isRequired};var D,V,q,A,B,L,J,E,G,H,K,Q,W,X,Y,Z,$,ee,te,ne,re,ae,ie,ce,oe,se,le=P,ue=_.c.div(D||(D=Object(y.a)(["\n  font-size:12px;\n"]))),de=_.c.div(V||(V=Object(y.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 3px;\n  background-position: center;\n  transition: .1s linear;\n"])),(function(e){return e.bgUrl})),pe=_.c.span(q||(q=Object(y.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  transition: .1s linear;\n  opacity: 0;\n"]))),je=_.c.div(A||(A=Object(y.a)(["\n  margin-bottom: 5px;\n  &:hover {\n    "," {\n      opacity: 0.3\n    }\n    "," {\n      opacity: 1\n    }\n  }\n  position:relative;\n"])),de,pe),be=_.c.span(B||(B=Object(y.a)(["\n  display: block;\n  font-size:12px;\n  margin-bottom: 3px;\n"]))),he=_.c.span(L||(L=Object(y.a)(["\n  font-size:10px;\n  color: rgba(255,255,255,0.5);\n"]))),ge=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie;return Object(k.jsx)(x.b,{to:o?"/movie/".concat(t):"/show/".concat(t),children:Object(k.jsxs)(ue,{children:[Object(k.jsxs)(je,{children:[Object(k.jsx)(de,{bgUrl:r?"https://image.tmdb.org/t/p/w300/".concat(r):n(29)}),Object(k.jsxs)(pe,{children:[Object(k.jsx)("span",{role:"img","aria-label":"image",children:"\u2b50"})," ",i,"/10"]})]}),Object(k.jsx)(be,{children:a.length>15?"".concat(a.substring(0,18),"..."):a}),Object(k.jsx)(he,{children:c})]})})},xe=_.c.div(J||(J=Object(y.a)(["\n  padding: 20px;\n"]))),me=function(e){var t=e.nowPlaying,n=e.popular,r=e.upcoming,a=e.loading,i=e.error;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w.a,{children:Object(k.jsx)("title",{children:"Movies | Nomflix"})}),a?Object(k.jsx)(U,{}):Object(k.jsxs)(xe,{children:[t&&t.length>0&&Object(k.jsx)(M,{title:"now Playing",children:t.map((function(e){return Object(k.jsx)(ge,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),r&&r.length>0&&Object(k.jsx)(M,{title:"upcoming Movies",children:r.map((function(e){return Object(k.jsx)(ge,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(k.jsx)(M,{title:"popular Movies",children:n.map((function(e){return Object(k.jsx)(ge,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),i&&Object(k.jsx)(le,{color:"#e74c3c",text:i})]})]})},Oe=n(44),ve=n.n(Oe).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"dcffc429c89f59ad0dd490e7b48b2ad2",language:"en-US"}}),fe=function(){return ve.get("movie/now_playing")},ye=function(){return ve.get("movie/upcoming")},_e=function(){return ve.get("movie/popular")},we=function(e){return ve.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ke=function(e){return ve.get("search/movie",{params:{query:encodeURIComponent(e)}})},Se=function(){return ve.get("tv/top_rated")},Re=function(){return ve.get("tv/popular")},Te=function(){return ve.get("tv/airing_today")},Me=function(e){return ve.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ze=function(e){return ve.get("search/tv",{params:{query:encodeURIComponent(e)}})},Ue=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n,r,a,i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe();case 3:return t=e.sent,n=t.data.results,e.next=7,ye();case 7:return r=e.sent,a=r.data.results,e.next=11,_e();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(k.jsx)(me,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(u.a.Component),Ce=_.c.div(E||(E=Object(y.a)(["\n  padding: 20px;\n"]))),Ie=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w.a,{children:Object(k.jsx)("title",{children:"Movies | Nomflix"})}),a?Object(k.jsx)(U,{}):Object(k.jsxs)(Ce,{children:[Object(k.jsx)(w.a,{children:Object(k.jsx)("title",{children:"TV Show | Nomflix"})}),t&&t.length>0&&Object(k.jsx)(M,{title:"Top Rated Show",children:t.map((function(e){return Object(k.jsx)(ge,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isshow:!0},e.id)}))}),n&&n.length>0&&Object(k.jsx)(M,{title:"Popular Show",children:n.map((function(e){return Object(k.jsx)(ge,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isshow:!0},e.id)}))}),r&&r.length>0&&Object(k.jsx)(M,{title:"Airing Show",children:r.map((function(e){return Object(k.jsx)(ge,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isshow:!0},e.id)}))}),i&&Object(k.jsx)(le,{color:"#e74c3c",text:i})]})]})},Ne=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n,r,a,i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Se();case 3:return t=e.sent,n=t.data.results,e.next=7,Re();case 7:return r=e.sent,a=r.data.results,e.next=11,Te();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Cant' find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.error,i=e.loading;return Object(k.jsx)(Ie,{topRated:t,popular:n,airingToday:r,error:a,loading:i})}}]),n}(u.a.Component),Fe=_.c.div(G||(G=Object(y.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  padding: 50px;\n"]))),Pe=_.c.div(H||(H=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),De=_.c.div(K||(K=Object(y.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),Ve=_.c.div(Q||(Q=Object(y.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),qe=_.c.div(W||(W=Object(y.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]))),Ae=_.c.h3(X||(X=Object(y.a)(["\n  font-size:34px;\n  margin-bottom: 10px;\n"]))),Be=_.c.div(Y||(Y=Object(y.a)(["\n  margin-bottom: 20px;\n"]))),Le=_.c.span(Z||(Z=Object(y.a)(["\n\n"]))),Je=_.c.span($||($=Object(y.a)(["\n  margin: 0 10px;\n"]))),Ee=_.c.p(ee||(ee=Object(y.a)(["\n  font-size: 12px;\n  color: white;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]))),Ge=function(e){var t=e.result,r=e.loading;e.error;return r?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w.a,{children:"Loading... | Nomflix"}),Object(k.jsx)(U,{})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w.a,{children:Object(k.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," | Nomflix"]})}),Object(k.jsxs)(Fe,{children:[Object(k.jsx)(Ve,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(k.jsxs)(Pe,{children:[Object(k.jsx)(De,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29)}),Object(k.jsxs)(qe,{children:[Object(k.jsx)(Ae,{children:t.original_title?t.original_title:t.original_name}),Object(k.jsxs)(Be,{children:[Object(k.jsx)(Le,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(k.jsx)(Je,{children:"\ud83c\udf69"}),Object(k.jsxs)(Le,{children:[t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(k.jsx)(Je,{children:"\ud83c\udf69"}),Object(k.jsx)(Le,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(k.jsx)(Ee,{children:t.overview})]})]})]})]})},He=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(e){var r;Object(j.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n,r,a,i,c,o,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,we(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,Me(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Cant' find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(k.jsx)(Ge,{result:t,error:n,loading:r})}}]),n}(u.a.Component),Ke=_.c.div(te||(te=Object(y.a)(["\n  padding: 20px;\n"]))),Qe=_.c.form(ne||(ne=Object(y.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),We=_.c.input(re||(re=Object(y.a)(["\n  all:unset;\n  font-size: 28px;\n  width: 100%;\n"]))),Xe=function(e){var t=e.movieResults,n=e.tvResults,r=e.loading,a=e.error,i=e.searchTerm,c=e.handleSubmit,o=e.updateTerm;return Object(k.jsxs)(Ke,{children:[Object(k.jsx)(w.a,{children:Object(k.jsx)("title",{children:"Search | Nomflix"})}),Object(k.jsx)(Qe,{onSubmit:c,children:Object(k.jsx)(We,{placeholder:"Search Movie or TV Shows...",value:i,onChange:o})}),r?Object(k.jsx)(U,{}):Object(k.jsxs)(k.Fragment,{children:[t&&t.length>0&&Object(k.jsx)(M,{title:"Movie Results",children:t.map((function(e){return Object(k.jsx)(ge,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(k.jsx)(M,{title:"TV Show Results",children:n.map((function(e){return Object(k.jsx)(ge,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isshow:!0},e.id)}))})]}),a&&Object(k.jsx)(le,{color:"#e74c3c",text:a}),n&&t&&0===n.length&&0===t.length&&Object(k.jsx)(le,{text:"Nothing found",color:"#95a5a6"})]})},Ye=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.handleSubmit=function(t){void 0!==t&&t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.searchByTerm=Object(f.a)(v.a.mark((function t(){var n,r,a,i,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,t.prev=1,e.setState({loading:!0}),t.next=5,ke(n);case 5:return r=t.sent,a=r.data.results,t.next=9,ze(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e.setState({error:"Cant't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[1,14,17,20]])}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.handleSubmit()}},{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading;return Object(k.jsx)(Xe,{movieResults:t,tvResults:n,searchTerm:r,error:a,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(u.a.Component),Ze=_.c.header(ae||(ae=Object(y.a)(["\n  color:white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items:center;\n  background-color: rgba(20,20,20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),$e=_.c.ul(ie||(ie=Object(y.a)(["\n  display: flex;\n"]))),et=_.c.li(ce||(ce=Object(y.a)(["\n  width: 70px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid ",";\n"])),(function(e){return e.current?"#3498db":"transparent"})),tt=Object(_.c)(x.b)(oe||(oe=Object(y.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center; \n"]))),nt=Object(m.g)((function(e){var t=e.location.pathname;return Object(k.jsx)(Ze,{children:Object(k.jsxs)($e,{children:[Object(k.jsx)(et,{current:"/"===t,children:Object(k.jsx)(tt,{to:"/",children:"Movies"})}),Object(k.jsx)(et,{current:"/tv"===t,children:Object(k.jsx)(tt,{to:"/tv",children:"TV"})}),Object(k.jsx)(et,{current:"/search"===t,children:Object(k.jsx)(tt,{to:"/search",children:"Search"})})]})})})),rt=function(){return Object(k.jsx)(x.a,{children:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(nt,{}),Object(k.jsxs)(m.d,{children:[Object(k.jsx)(m.b,{path:"https://mankyung.github.io/nomflix/",exact:!0,component:Ue}),Object(k.jsx)(m.b,{path:"https://mankyung.github.io/nomflix/tv",exact:!0,component:Ne}),Object(k.jsx)(m.b,{path:"https://mankyung.github.io/nomflix/search",component:Ye}),Object(k.jsx)(m.b,{path:"https://mankyung.github.io/nomflix/movie/:id",component:He}),Object(k.jsx)(m.b,{path:"https://mankyung.github.io/nomflix/show/:id",component:He}),Object(k.jsx)(m.a,{from:"*",to:"/"})]})]})})},at=n(45),it=Object(_.a)(se||(se=Object(y.a)(["\n  ",";\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont,Roboto, Oxygen;\n    font-size: 12px;\n    background-color: rgba(20,20,20,1);\n    color:white;\n    padding-top: 50px;\n  }\n"])),at.a),ct=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(rt,{}),Object(k.jsx)(it,{})]})}}]),n}(l.Component);p.a.render(Object(k.jsx)(ct,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.ec021d71.chunk.js.map