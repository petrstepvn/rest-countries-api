(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{27:function(t,n,e){t.exports=e(39)},39:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e.n(r),i=e(23),o=e.n(i),c=e(5),u=e(3),l=e(8),d=e(4),s=e(2),m=e(9),f={fontWeight:{light:300,medium:600,bold:800},boxShadow:"0px 0px 3px rgba(0, 0, 0, 0.18)",width:"1440px",borderRadius:"5px",padding:{global:"2.5rem",main:"1.5rem",medium:"2rem",big:"3rem"},transition:"0.3s"},h=Object(m.a)({color:{background:"hsl(0, 0%, 98%)",primary:"hsl(0, 0%, 100%)",text:"hsl(200, 15%, 8%)",hover:"hsl(0, 0%, 90%)",selected:"hsl(0, 0%, 80%)",skeleton:"linear-gradient(to right, #dddddd 0%, #e8e8e8 50%, #dddddd 100%)"}},f),b=Object(m.a)({color:{background:"hsl(207, 26%, 17%)",primary:"hsl(209, 23%, 22%)",text:" hsl(0, 0%, 100%)",hover:"hsl(207, 26%, 16%)",selected:"hsl(207, 26%, 13%)",skeleton:"linear-gradient(to right, #202c37 0%, #24313e 50%, #202c37 100%)"}},f);function p(){var t=Object(u.a)(["\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t}\n\n\tbody {\n\t\tfont-family: 'Nunito Sans', sans-serif;\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t\ttransition: background ",", color ",";\n\n\t}\n\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: inherit;\n\t}\n"]);return p=function(){return t},t}var g=Object(s.b)(p(),(function(t){return t.theme.color.background}),(function(t){return t.theme.color.text}),(function(t){return t.theme.transition}),(function(t){return t.theme.transition}));function v(){var t=Object(u.a)(["\n\tcolor: ",";\n\tbackground: ",";\n\tbox-shadow: ",";\n\tborder-radius: ",";\n\ttransition: background ",",\n\t\tcolor ",";\n\tmin-width: 120px;\n\tpadding: 0.5rem;\n\tfont-size: 1rem;\n\tborder: none;\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\toutline: none;\n\n\t:hover {\n\t\tbackground: ",";\n\t}\n\n\tsvg {\n\t\twidth: 1.4em;\n\t\theight: 1.4em;\n\t\tmargin-right: 8px;\n\t}\n"]);return v=function(){return t},t}var x=s.c.button(v(),(function(t){return t.theme.color.text}),(function(t){return t.theme.color.primary}),(function(t){var n=t.theme;return!t.clear&&n.boxShadow}),(function(t){return t.theme.borderRadius}),(function(t){return t.theme.transition}),(function(t){return t.theme.transition}),(function(t){return t.theme.color.hover})),w=function(t){var n=t.text,e=t.icon,r=t.onClick,i=t.clear,o=void 0!==i&&i;return a.a.createElement(x,{onClick:r,clear:o},e,n)},j=e(20);function E(){var t=Object(u.a)(["\n\tcolor: ",";\n\ttransition: color ",";\n"]);return E=function(){return t},t}function y(){var t=Object(u.a)(["\n\tmax-width: ",";\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1.5rem;\n\tmargin: auto;\n"]);return y=function(){return t},t}function O(){var t=Object(u.a)(["\n\tbackground: ",";\n\tbox-shadow: ",";\n\ttransition: background ",";\n"]);return O=function(){return t},t}var k=s.c.header(O(),(function(t){return t.theme.color.primary}),(function(t){return t.theme.boxShadow}),(function(t){return t.theme.transition})),S=s.c.div(y(),(function(t){return t.theme.width})),L=s.c.h2(E(),(function(t){return t.theme.color.text}),(function(t){return t.theme.transition})),C=function(t){var n=t.switchTheme,e=t.isDark;return a.a.createElement(k,null,a.a.createElement(S,null,a.a.createElement(l.b,{to:"/rest-countries-api/"},a.a.createElement(L,null,"Where in the World?")),a.a.createElement(w,{clear:!0,onClick:n,icon:e?a.a.createElement(j.b,null):a.a.createElement(j.a,null),text:e?"Dark Mode":"Light Mode"})))},R=e(11),W=e.n(R),z=e(15),A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return t.toLocaleString("en-GB").replace(/,/g,".")};function M(){var t=Object(u.a)([""]);return M=function(){return t},t}function D(){var t=Object(u.a)(["\n\tfont-weight: ",";\n\tpadding-right: 0.3rem;\n\ttext-transform: capitalize;\n"]);return D=function(){return t},t}function B(){var t=Object(u.a)(["\n\tmin-width: ",";\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\twhite-space: nowrap;\n\tline-height: 1.7;\n"]);return B=function(){return t},t}var N=s.c.div(B(),(function(t){return!t.noMinWidth&&"200px"})),F=s.c.p(D(),(function(t){return t.theme.fontWeight.medium})),I=s.c.p(M()),T=function(t){var n=t.title,e=t.body,r=t.noMinWidth,i=void 0!==r&&r;return a.a.createElement(N,{noMinWidth:i},a.a.createElement(F,null,n,":"),a.a.createElement(I,null,"object"===typeof e?e.join(", "):e))};function J(){var t=Object(u.a)(["\n\tbackground: ",";\n\tborder-radius: inherit;\n\ttransition: background ",";\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: inline-block;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-size: 750% auto;\n\tanimation: pulse 1.6s linear infinite;\n\n\t@keyframes pulse {\n\t\t0% {\n\t\t\tbackground-position: 100%;\n\t\t}\n\n\t\t40%,\n\t\t100% {\n\t\t\tbackground-position: -150%;\n\t\t}\n\t}\n"]);return J=function(){return t},t}var P=s.c.div(J(),(function(t){return t.theme.color.skeleton}),(function(t){return t.theme.transition})),G=function(){return a.a.createElement(P,null)};function $(){var t=Object(u.a)(["\n\tmargin-bottom: 1rem;\n"]);return $=function(){return t},t}function q(){var t=Object(u.a)(["\n\tpadding: 1rem;\n\tline-height: 1.7;\n"]);return q=function(){return t},t}function H(){var t=Object(u.a)(["\n\topacity: ",";\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tborder-radius: inherit;\n\ttransition: transform 0.3s ease, opacity 0.3s;\n"]);return H=function(){return t},t}function K(){var t=Object(u.a)(["\n\twidth: 100%;\n\theight: 200px;\n\toverflow: hidden;\n\tposition: relative;\n\tborder-top-left-radius: ",";\n\tborder-top-right-radius: ",";\n"]);return K=function(){return t},t}function Q(){var t=Object(u.a)(["\n\tbackground: ",";\n\tbox-shadow: ",";\n\tborder-radius: ",";\n\ttransition: background ",";\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\toverflow: hidden;\n\theight: 100%;\n\n\t&:hover img {\n\t\ttransform: scale(1.15);\n\t}\n"]);return Q=function(){return t},t}var U=s.c.article(Q(),(function(t){return t.theme.color.primary}),(function(t){return t.theme.boxShadow}),(function(t){return t.theme.borderRadius}),(function(t){return t.theme.transition})),V=s.c.div(K(),(function(t){return t.theme.borderRadius}),(function(t){return t.theme.borderRadius})),X=s.c.img(H(),(function(t){return t.isLoading?0:1})),Y=s.c.div(q()),Z=s.c.h3($()),_=function(t){var n=t.payload,e=Object(r.useState)(!0),i=Object(c.a)(e,2),o=i[0],u=i[1],l=n.name,d=n.capital,s=n.region,m=n.population,f=n.flag;return a.a.createElement(U,null,a.a.createElement(V,null,a.a.createElement(X,{isLoading:o,src:f,alt:l,onLoad:function(){return u(!1)}}),o&&a.a.createElement(G,null)),a.a.createElement(Y,null,a.a.createElement(Z,null,l),a.a.createElement(T,{title:"Population",body:A(m)}),a.a.createElement(T,{title:"Region",body:s}),a.a.createElement(T,{title:"Capital",body:d})))},tt=e(10);function nt(){var t=Object(u.a)(["\n\theight: 30px;\n\twidth: 30px;\n\tmargin-left: 1rem;\n"]);return nt=function(){return t},t}function et(){var t=Object(u.a)(["\n\tbackground: ",";\n\ttransition: background ",",\n\t\tcolor ",";\n\tcolor: inherit;\n\tborder: 0;\n\tflex: 1;\n\tpadding: 1rem;\n\tfont-family: inherit;\n\toutline: none;\n\tfont-size: inherit;\n\n\t::placeholder {\n\t\tcolor: currentColor;\n\t}\n"]);return et=function(){return t},t}function rt(){var t=Object(u.a)(["\n\tbackground: ",";\n\tbox-shadow: ",";\n\tborder-radius: ",";\n\ttransition: background ",";\n\tmax-width: 400px;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n"]);return rt=function(){return t},t}var at=s.c.div(rt(),(function(t){return t.theme.color.primary}),(function(t){return t.theme.boxShadow}),(function(t){return t.theme.borderRadius}),(function(t){return t.theme.transition})),it=s.c.input(et(),(function(t){return t.theme.color.primary}),(function(t){return t.theme.transition}),(function(t){return t.theme.transition})),ot=Object(s.c)(tt.d)(nt()),ct=function(t){var n=t.handleSearch;return a.a.createElement(at,null,a.a.createElement(ot,null),a.a.createElement(it,{type:"text",placeholder:"Search for a country...",onChange:function(t){return n(t.target.value)}}))};function ut(){var t=Object(u.a)(["\n\tline-height: 1.6;\n\tpadding: 0.2rem 1.5rem;\n\tcursor: pointer;\n\n\tbackground: ",";\n\ttransition: background ",";\n\n\t:hover {\n\t\tbackground: ",";\n\t}\n"]);return ut=function(){return t},t}function lt(){var t=Object(u.a)(["\n\tbackground: ",";\n\tbox-shadow: ",";\n\tborder-radius: ",";\n\ttransition: background ",";\n\tposition: absolute;\n\ttop: 100%;\n\tleft: 0;\n\tmargin-top: 0.2rem;\n\tlist-style: none;\n\twidth: 200px;\n\tpadding: 0.8rem 0;\n\tz-index: 1;\n"]);return lt=function(){return t},t}function dt(){var t=Object(u.a)(["\n\tbackground: ",";\n\tbox-shadow: ",";\n\tfont-weight: ",";\n\tborder-radius: ",";\n\ttransition: background ",";\n\twidth: 200px;\n\tpadding: 1rem 1.5rem;\n\tcursor: pointer;\n\tuser-select: none;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);return dt=function(){return t},t}function st(){var t=Object(u.a)(["\n\tposition: relative;\n"]);return st=function(){return t},t}var mt=s.c.div(st()),ft=s.c.div(dt(),(function(t){return t.theme.color.primary}),(function(t){return t.theme.boxShadow}),(function(t){return t.theme.fontWeight.medium}),(function(t){return t.theme.borderRadius}),(function(t){return t.theme.transition})),ht=s.c.ul(lt(),(function(t){return t.theme.color.primary}),(function(t){return t.theme.boxShadow}),(function(t){return t.theme.borderRadius}),(function(t){return t.theme.transition})),bt=s.c.li(ut(),(function(t){var n=t.theme;return t.selected&&n.color.selected}),(function(t){return t.theme.transition}),(function(t){return t.theme.color.hover})),pt=["All","Africa","America","Asia","Europe","Oceania"],gt=function(t){var n=t.handleRegion,e=Object(r.useState)(""),i=Object(c.a)(e,2),o=i[0],u=i[1],l=Object(r.useState)(!1),d=Object(c.a)(l,2),s=d[0],m=d[1];return a.a.createElement(mt,null,a.a.createElement(ft,{onClick:function(){m(!s)}},a.a.createElement("p",null,"Filter by Region"),s?a.a.createElement(tt.a,null):a.a.createElement(tt.b,null)),s&&a.a.createElement(ht,null,pt.map((function(t){return a.a.createElement(bt,{selected:o===t,key:t,onClick:function(){return function(t){u(t),m(!s),n("All"===t?"":t)}(t)}},t)}))))};function vt(){var t=Object(u.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-template-columns: repeat(auto-fill, minmax(270px, 1fr));\n\tgap: 3rem;\n"]);return vt=function(){return t},t}function xt(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\n\t& > * {\n\t\tmargin-bottom: ",";\n\t}\n"]);return xt=function(){return t},t}var wt=s.c.div(xt(),(function(t){return t.theme.padding.main})),jt=s.c.div(vt()),Et=function(){var t=Object(r.useState)([]),n=Object(c.a)(t,2),e=n[0],i=n[1],o=Object(r.useState)({region:"",text:""}),u=Object(c.a)(o,2),d=u[0],s=u[1],f=Object(r.useState)([]),h=Object(c.a)(f,2),b=h[0],p=h[1];Object(r.useEffect)((function(){var t=new AbortController,n={signal:t.signal};return function(){var t=Object(z.a)(W.a.mark((function t(){var e,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag",n);case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,i(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()(),function(){return t.abort()}}),[]),Object(r.useEffect)((function(){var t=d.region,n=d.text,r=e.map((function(e){return e.region.includes(t)&&e.name.toLowerCase().includes(n.toLowerCase())?Object(m.a)({},e,{show:!0}):Object(m.a)({},e,{show:!1})}));p(r)}),[d,e]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(wt,null,a.a.createElement(ct,{handleSearch:function(t){s(Object(m.a)({},d,{text:t}))}}),a.a.createElement(gt,{handleRegion:function(t){s(Object(m.a)({},d,{region:t}))}})),a.a.createElement(jt,null,b.map((function(t,n){return a.a.createElement(l.b,{style:t.show?{display:"block"}:{display:"none"},key:n,to:"/country/".concat(t.name)},a.a.createElement(_,{payload:t}))}))))};function yt(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\n\t> * {\n\t\tmargin: 0.3rem;\n\t}\n"]);return yt=function(){return t},t}function Ot(){var t=Object(u.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tpadding: "," 0;\n\t& > * {\n\t\twidth: 50%;\n\t}\n"]);return Ot=function(){return t},t}function kt(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpadding-top: ",";\n\n\t@media (min-width: 700px) {\n\t\tpadding: ",";\n\t}\n"]);return kt=function(){return t},t}function St(){var t=Object(u.a)(["\n\tfont-size: 2em;\n"]);return St=function(){return t},t}function Lt(){var t=Object(u.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: inherit;\n\topacity: ",";\n\ttransition: opacity ",";\n"]);return Lt=function(){return t},t}function Ct(){var t=Object(u.a)(["\n\theight: ",";\n\tposition: relative;\n\tborder-radius: ",";\n\tbox-shadow: ",";\n"]);return Ct=function(){return t},t}function Rt(){var t=Object(u.a)(["\n\tmargin-top: ",";\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\n\t& > * {\n\t\twidth: 100%;\n\n\t\t@media (min-width: 700px) {\n\t\t\twidth: 50%;\n\t\t}\n\t}\n"]);return Rt=function(){return t},t}var Wt=s.c.section(Rt(),(function(t){return t.theme.padding.big})),zt=s.c.div(Ct(),(function(t){return t.isLoading&&"400px"}),(function(t){return t.theme.borderRadius}),(function(t){return t.theme.boxShadow})),At=s.c.img(Lt(),(function(t){return t.isLoading?0:1}),(function(t){return t.theme.transition})),Mt=s.c.h1(St()),Dt=s.c.div(kt(),(function(t){return t.theme.padding.medium}),(function(t){return t.theme.padding.medium})),Bt=s.c.div(Ot(),(function(t){return t.theme.padding.main})),Nt=s.c.div(yt()),Ft=function(){var t=Object(r.useState)({}),n=Object(c.a)(t,2),e=n[0],i=n[1],o=Object(r.useState)([]),u=Object(c.a)(o,2),s=u[0],m=u[1],f=Object(r.useState)(!0),h=Object(c.a)(f,2),b=h[0],p=h[1],g=Object(d.f)().country;Object(r.useEffect)((function(){p(!0);var t="https://restcountries.eu/rest/v2",n=new AbortController,e={signal:n.signal};return function(){var n=Object(z.a)(W.a.mark((function n(){var r,a,o,c;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(t,"/name/").concat(g,"?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag"),e);case 3:return r=n.sent,n.next=6,r.json();case 6:if(!(a=n.sent)[0].borders.length){n.next=15;break}return n.next=10,fetch("".concat(t,"/alpha?fields=name&codes=").concat(a[0].borders.join(";")),e);case 10:return o=n.sent,n.next=13,o.json();case 13:c=n.sent,m(c.map((function(t){return t.name})));case 15:i(a[0]),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),console.log(n.t0);case 21:case"end":return n.stop()}}),n,null,[[0,18]])})));return function(){return n.apply(this,arguments)}}()(),function(){return n.abort()}}),[g]);var v=e.name,x=e.nativeName,j=e.population,E=e.region,y=e.subregion,O=e.capital,k=e.topLevelDomain,S=e.currencies,L=e.languages,C=e.flag;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.b,{to:"/"},a.a.createElement(w,{text:"Back",icon:a.a.createElement(tt.c,null)})),a.a.createElement(Wt,null,a.a.createElement(zt,{isLoading:b},a.a.createElement(At,{isLoading:b,src:C,alt:v,onLoad:function(){return p(!1)}}),b&&a.a.createElement(G,null)),a.a.createElement(Dt,null,a.a.createElement(Mt,null,v),a.a.createElement(Bt,null,a.a.createElement(T,{title:"Native name",body:x}),a.a.createElement(T,{title:"Population",body:A(j)}),a.a.createElement(T,{title:"Region",body:E}),a.a.createElement(T,{title:"Sub region",body:y}),a.a.createElement(T,{title:"Capital",body:O}),a.a.createElement(T,{title:"Top Level Domain",body:k}),a.a.createElement(T,{title:"Currencies",body:null===S||void 0===S?void 0:S.map((function(t){return t.name}))}),a.a.createElement(T,{title:"Languages",body:null===L||void 0===L?void 0:L.map((function(t){return t.name}))})),a.a.createElement(Nt,null,a.a.createElement(T,{title:"Border countries",noMinWidth:!0}),null===s||void 0===s?void 0:s.map((function(t,n){return a.a.createElement(l.b,{key:n,to:"/country/".concat(t)},a.a.createElement(w,{text:t}))}))))))};function It(){var t=Object(u.a)(["\n\tmax-width: ",";\n\tpadding: ",";\n\tmargin: auto;\n"]);return It=function(){return t},t}var Tt=s.c.main(It(),(function(t){return t.theme.width}),(function(t){return t.theme.padding.main})),Jt=function(){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),e=n[0],i=n[1];Object(r.useEffect)((function(){var t=localStorage.getItem("theme");i("dark"===t||"light"!==t)}),[]),Object(r.useEffect)((function(){localStorage.setItem("theme",e?"dark":"light")}),[e]);return a.a.createElement(s.a,{theme:e?b:h},a.a.createElement(g,null),a.a.createElement(l.a,null,a.a.createElement(C,{switchTheme:function(){i(!e)},isDark:e}),a.a.createElement(Tt,null,a.a.createElement(d.c,null,a.a.createElement(d.a,{path:"/rest-countries-api/",exact:!0,component:Et}),a.a.createElement(d.a,{path:"/rest-countries-api/country/:country",component:Ft})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Jt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3b949e6c.chunk.js.map