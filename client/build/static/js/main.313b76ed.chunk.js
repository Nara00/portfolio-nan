(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(97)},42:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),s=(a(42),a(34)),i=a(2),o=a(3),m=a(5),d=a(4),u=a(6),E=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<5;t++)t===this.props.section?e[t]="nav-link active":e[t]="nav-link";return this.state={className:e},l.a.createElement("nav",{class:"navbar navbar-light navbar-expand-md fixed-top py-3 navbar-custom"},l.a.createElement("div",{class:"container",style:{padding:" 0px",marginLeft:" 1vw",marginRight:" 1vw",maxWidth:" 100vw"}},l.a.createElement("a",{class:"navbar-brand d-flex align-items-center text-expanded",href:"#"},l.a.createElement("span",null,"NAN")),l.a.createElement("button",{"data-bs-toggle":"collapse",class:"navbar-toggler","data-bs-target":"#navcol-2"},l.a.createElement("span",{class:"visually-hidden"},"Toggle navigation"),l.a.createElement("span",{class:"navbar-toggler-icon"},l.a.createElement("i",{class:"fas fa-bars",style:{color:"var(--primary)"}}))),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navcol-2"},l.a.createElement("ul",{class:"navbar-nav ms-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:this.state.className[0],href:"#"},"Inicio")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:this.state.className[1],href:"#skills"},"Skills")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:this.state.className[2],href:"#sobre-mi"},"Sobre mi")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:this.state.className[3],href:"#proyectos"},"Proyectos")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:this.state.className[4],href:"#footer"},"Contacto"))))))}}]),t}(l.a.Component),g=function(e){if(window.innerWidth>768)return l.a.createElement("div",{style:{bottom:"0",position:"absolute",right:"0"}},l.a.createElement("a",{href:e.to},l.a.createElement("img",{src:"assets/img/Vector.svg",style:{paddingBottom:" 8vh",paddingRight:"3.5vw"}})))},h=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"inicio",style:{position:" relative",background:" var(--background)",height:" 100vh",width:" 95vw",paddingLeft:" 7vw",paddingRight:" 2vw"}},l.a.createElement("div",{class:"header-sections"},l.a.createElement("p",{class:"p-note"},"Este es mi"),l.a.createElement("p",{class:"p-note"},"portfolio")),l.a.createElement("div",{style:{paddingTop:" 10vh"}},l.a.createElement("h2",null,"HOLA! SOY"),l.a.createElement("h1",null,"NARA\xa0",l.a.createElement("span",{style:{color:" var(--secondary)"}},"ABRIL "),l.a.createElement("span",null,"NANFARA.")),l.a.createElement("p",{style:{color:" var(--secondary)"}},"Casi ingeniera de sistemas")),l.a.createElement(g,{to:"#skills"}))}}]),t}(l.a.Component),p=a(14),v=a.n(p),b=a(15),f=a.n(b),w=(a(32),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={allSkills:[]},a.componentDidMount=function(){a.getAllSkills()},a.getAllSkills=function(){v.a.get("/api/skills").then(function(e){var t=e.data;a.setState({allSkills:t})}).catch(function(){})},a.getCategoryCards=function(e){var t=[];return e.forEach(function(e){t.push(a.getCard(e))}),l.a.createElement(f.a,{mouseTracking:!0,controlsStrategy:"responsive",autoWidth:!0,disableButtonsControls:!0,disableDotsControls:!0,items:t})},a.init=function(){var e=[];return e.push(a.getCategoryTitle("Sistemas")),e.push(a.getCategoryCards(a.state.allSkills.filter(function(e){return"programacion"===e.category}))),e.push(a.getCategoryTitle("Dise\xf1o")),e.push(a.getCategoryCards(a.state.allSkills.filter(function(e){return"disenio"===e.category}))),e.push(a.getCategoryTitle("Humanas")),e.push(a.getCategoryCards(a.state.allSkills.filter(function(e){return"humanas"===e.category}))),e},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getCard",value:function(e){return l.a.createElement("div",{class:"col-auto",style:{padding:"0.37rem",width:"11rem"}},l.a.createElement("div",{class:"card-skill"},l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},e.title),l.a.createElement("p",{class:"card-text",style:{color:" var(--secondary)",marginTop:" -.25rem"}},e.level))))}},{key:"getCategoryTitle",value:function(e){return l.a.createElement("div",null,l.a.createElement("p",{style:{color:" var(--secondary)"}},e))}},{key:"render",value:function(){return l.a.createElement("section",{id:"skills",class:"sections-config"},l.a.createElement("div",{class:"row header-sections"},l.a.createElement("div",{class:"col"},l.a.createElement("h1",null,"SKILLS")),l.a.createElement("div",{class:"col",style:{position:" relative"}},l.a.createElement("div",null,l.a.createElement("p",{class:"p-note"},"Me gustan"),l.a.createElement("p",{class:"p-note"},"muchas"),l.a.createElement("p",{class:"p-note"},"cosas")))),this.init(),l.a.createElement(g,{to:"#sobre-mi"}))}}]),t}(l.a.Component)),y=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(window.innerWidth),l.a.createElement("section",{id:"sobre-mi",class:"sections-config"},l.a.createElement("div",{class:"row header-sections"},l.a.createElement("div",{class:"col-auto"},l.a.createElement("h1",null,"SOBRE MI")),l.a.createElement("div",{class:"col",style:{position:" relative"}},l.a.createElement("div",null,l.a.createElement("p",{class:"p-note"},"Hab\xeda una"),l.a.createElement("p",{class:"p-note"},"vez..."),l.a.createElement("p",{class:"p-note"}," ")))),window.innerWidth>768&&l.a.createElement("div",{style:{fontWeight:400}},l.a.createElement("p",{class:"text-center"},"Nac\xed en Argentina en el 2000"),l.a.createElement("p",{class:"text-center"}),l.a.createElement("p",{class:"text-center"}),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col"},l.a.createElement("p",null)),l.a.createElement("div",{class:"col"},l.a.createElement("p",null,l.a.createElement("br",null),"Obtuve algunos reconocimientos"),l.a.createElement("p",null,l.a.createElement("br",null),"2017 - Bandera Argentina",l.a.createElement("br",null),"2019 - Premio Santander al m\xe9rito acad\xe9mico",l.a.createElement("br",null),"2020 - Premio Santander al m\xe9rito acad\xe9mico",l.a.createElement("br",null),"2021 - Premio Santander al m\xe9rito acad\xe9mico",l.a.createElement("br",null),l.a.createElement("br",null)))),l.a.createElement("p",{class:"text-center"},"Ahora me encuentro en el \xfaltimo a\xf1o de",l.a.createElement("span",{style:{color:" var(--secondary)",fontWeight:"600"}},"\xa0ingenier\xeda de sistemas")),l.a.createElement("p",{class:"text-center"},"en la Universidad Cat\xf3lica de C\xf3rdoba",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"text-center",style:{textAlign:"center",wordWrap:"break-word",paddingLeft:"10vw",paddingRight:"10vw"}},l.a.createElement("p",{class:"text-center",style:{fontWeight:"800"}},"Me gustan muchos caminos pero mi preferido es en el que la tecnolog\xeda se encuentra con el arte porque admiro cuando la tecnolog\xeda nos hace sentir m\xe1s humanos."))),window.innerWidth<=768&&l.a.createElement("div",{style:{fontWeight:400}},l.a.createElement("p",{class:"text-center"},"Nac\xed en Argentina en el 2000"),l.a.createElement("p",{class:"text-center"}),l.a.createElement("p",{class:"text-center"}),l.a.createElement("p",{class:"text-center"},l.a.createElement("br",null),"Obtuve algunos reconocimientos:"),l.a.createElement("p",{class:"text-center",style:{fontSize:"0.9rem"}},"2017 - Bandera Argentina",l.a.createElement("br",null),"2019 - Premio Santander al m\xe9rito acad\xe9mico",l.a.createElement("br",null),"2020 - Premio Santander al m\xe9rito acad\xe9mico",l.a.createElement("br",null),"2021 - Premio Santander al m\xe9rito acad\xe9mico",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("p",{class:"text-center"},"Ahora me encuentro en el \xfaltimo a\xf1o de",l.a.createElement("span",{style:{color:" var(--secondary)",fontWeight:"600"}},"\xa0ingenier\xeda de sistemas")),l.a.createElement("p",{class:"text-center"},"en la Universidad Cat\xf3lica de C\xf3rdoba",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"text-center",style:{textAlign:"center",wordWrap:"break-word"}},l.a.createElement("p",{class:"text-center",style:{fontWeight:"800"}},"Me gustan muchos caminos pero mi preferido es en el que la tecnolog\xeda se encuentra con el arte porque admiro cuando la tecnolog\xeda nos hace sentir m\xe1s humanos."))),l.a.createElement(g,{to:"#proyectos"}))}}]),t}(l.a.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={allProjects:[],width:window.innerWidth},a.componentDidMount=function(){a.getAllProjects()},a.getAllProjects=function(){v.a.get("/api/projects").then(function(e){var t=e.data;a.setState({allProjects:t})}).catch(function(){})},a.init=function(){var e=[];return e.push(a.getCategoryCards(a.state.allProjects)),e},a.getCategoryCards=function(e){var t=[];return e.forEach(function(e){t.push(a.getCard(e))}),a.state.width<1414?l.a.createElement(f.a,{mouseTracking:!0,controlsStrategy:"responsive",autoWidth:!0,disableButtonsControls:!0,disableDotsControls:!0,items:t}):l.a.createElement("div",{class:"row",style:{marginTop:" 2vh",marginBottom:" 2vh"}},t)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getCard",value:function(e){return l.a.createElement("div",{class:"col-auto",style:{padding:".75rem",width:"20rem"}},l.a.createElement("div",{class:"card-project"},l.a.createElement("a",{target:"_blank",href:e.link},l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},e.title),l.a.createElement("div",{class:"row",style:{margin:"0",padding:"0",marginTop:" 0.2vw",height:"6rem"}},l.a.createElement("p",{class:"card-text",style:{color:"var(--tertiary)",fontWeight:"400",padding:"0"}},e.description)),l.a.createElement("p",{class:"card-text",style:{paddingTop:".5rem"}},"</>",e.language)))))}},{key:"render",value:function(){return l.a.createElement("section",{id:"proyectos",class:"sections-config"},l.a.createElement("div",{class:"row header-sections"},l.a.createElement("div",{class:"col"},l.a.createElement("h1",null,"PROYECTOS")),l.a.createElement("div",{class:"col",style:{position:" relative"}},l.a.createElement("div",null,l.a.createElement("p",{class:"p-note"},"Hello"),l.a.createElement("p",{class:"p-note"},"world!"),l.a.createElement("p",{class:"p-note"})))),this.init(),l.a.createElement(g,{to:"#footer"}))}}]),t}(l.a.Component),C=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"footer"},l.a.createElement("footer",{class:"text-center bg-dark"},l.a.createElement("div",{class:"container text-white py-4 py-lg-5"},l.a.createElement("p",{style:{marginBottom:" 3vh"}},"Fue un placer conocernos <3"),l.a.createElement("ul",{class:"list-inline fs-4"},l.a.createElement("li",{class:"list-inline-item me-4"},l.a.createElement("a",{href:"https://www.linkedin.com/in/nara-abril-nanfara/",target:"_blank"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 16 16",class:"bi bi-linkedin text-light"},l.a.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})))),l.a.createElement("li",{class:"list-inline-item me-4"},l.a.createElement("a",{href:"https://github.com/Nara00",target:"_blank"},l.a.createElement("svg",{class:"bi bi-github text-light",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})))),l.a.createElement("li",{class:"list-inline-item me-4"},l.a.createElement("a",{href:"abrilnanfara@gmail.com",target:"_blank"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icon-tabler-mail text-light"},l.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.a.createElement("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),l.a.createElement("polyline",{points:"3 7 12 13 21 7"})))),l.a.createElement("li",{class:"list-inline-item me-4"},l.a.createElement("a",{href:"https://twitter.com/Abril_Nanfara",target:"_blank"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 16 16",class:"bi bi-twitter text-light"},l.a.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})))),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"https://www.instagram.com/abril_nanfara/",target:"_blank"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 16 16",class:"bi bi-instagram text-light"},l.a.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))))),l.a.createElement("p",{class:"text-muted mb-0",style:{fontSize:"1rem"}},"Copyright \xa9 2022 NAN"))))}}]),t}(l.a.Component);var x=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1],c=window.innerHeight;return Object(n.useEffect)(function(){var e=function(e){return window.scrollY<c-c/3?r(0):window.scrollY<2*c-c/3?r(1):window.scrollY<3*c-c/3?r(2):window.scrollY<4*c-c/1.1?r(3):r(4)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[a]),l.a.createElement("div",null,l.a.createElement(E,{section:a}),l.a.createElement("div",null,l.a.createElement("div",{class:"row",style:{margin:" 0",background:" var(--background)"}},l.a.createElement("div",{class:"col-auto side-column",style:{padding:" 0"}},l.a.createElement("p",null)),l.a.createElement("div",{class:"col-auto m-auto col-auto",style:{background:" var(--background)",padding:" 0"}},l.a.createElement(h,null),l.a.createElement(w,null),l.a.createElement(y,null),l.a.createElement(k,null)),l.a.createElement("div",{class:"col-auto side-column",style:{padding:" 0"}},l.a.createElement("p",null)))),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row",style:{background:" var(--background2)"}},l.a.createElement("div",{class:"col fixed-bottom",style:{background:" var(--background2)",height:" 1vw"}},l.a.createElement("p",null)))),l.a.createElement(C,null))},j=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,98)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),j()}},[[35,3,2]]]);
//# sourceMappingURL=main.313b76ed.chunk.js.map