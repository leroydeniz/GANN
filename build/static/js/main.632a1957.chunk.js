(this.webpackJsonpgenn=this.webpackJsonpgenn||[]).push([[0],{58:function(e,a,t){},59:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(21),s=t.n(c),i=(t(58),t(59),t(7)),o=t(8),d=t(10),l=t(9),j=t(94),b=t(95),u=t(93),p=t.p+"static/media/logo.e53c176c.svg",h=t(1),m=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"divMenu",children:Object(h.jsxs)(j.a,{expand:"lg",children:[Object(h.jsx)(j.a.Brand,{href:"/",children:Object(h.jsxs)("div",{id:"logo",children:[Object(h.jsx)("img",{src:p,className:"app-logo",alt:"Logotipo"}),Object(h.jsxs)("span",{id:"brand",children:[Object(h.jsx)("strong",{children:"GANN"}),"Service"]})]})}),Object(h.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(b.a,{className:"ms-auto",children:[Object(h.jsx)(b.a.Link,{href:"/",children:"Inicio"}),Object(h.jsxs)(u.a,{title:"Servicios",id:"basic-nav-dropdown",children:[Object(h.jsx)(u.a.Item,{href:"/entrenamiento",children:"Entrenamiento"}),Object(h.jsx)(u.a.Item,{href:"/test",children:"Entrenar + Clasificar"})]}),Object(h.jsx)(b.a.Link,{href:"/autor",children:"Autor y Memoria"})]})})]})})}}]),t}(n.a.Component),O=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsx)("header",{id:"header",children:Object(h.jsxs)("div",{className:"center",children:[Object(h.jsx)(m,{}),Object(h.jsx)("div",{className:"clearfix"})]})})}}]),t}(r.Component),f=function(){return Object(h.jsx)("footer",{id:"footer",children:Object(h.jsx)("div",{className:"center",children:Object(h.jsxs)("p",{children:["TFG de ",Object(h.jsx)("a",{href:"https://leroydeniz.com",children:" Leroy Deniz"})," \xa0 | \xa0 Grado en Ingenier\xeda Inform\xe1tica \xa0 | \xa0 Universidad del Pa\xeds Vasco"]})})})},x=t(52),v=t(11),g=(t(37),function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).emailRef=n.a.createRef(),e.dataset1Ref=n.a.createRef(),e.dataset2Ref=n.a.createRef(),e.termsRef=n.a.createRef(),e.recibirFormulario=function(a){a.preventDefault();var t=e.emailRef.current.value,r=e.dataset1Ref.current.value,n=e.dataset2Ref.current.value;e.termsRef.current.value&&e.render(t+r+n)},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Clasificar"}),Object(h.jsxs)("p",{children:["Para clasificar un dataset, ingrese un dataset de train que genere el clasificador o la definici\xf3n de la RN, y un dataset sin clasificar.",Object(h.jsx)("br",{}),"El resultado ser\xe1 el dataset clasificado."]}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{onSubmit:this.recibirFormulario,children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"@"})}),Object(h.jsx)("input",{className:"form-control",type:"email",id:"email",name:"email",placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1",ref:this.emailRef,required:!0})]}),Object(h.jsx)("div",{className:"input-group mb-3",children:Object(h.jsx)("input",{className:"form-control",type:"file",id:"dataset1",name:"dataset1",placeholder:"Dataset de train","aria-label":"Dataset de train","aria-describedby":"basic-addon1",ref:this.dataset1Ref,required:!0})}),Object(h.jsx)("div",{className:"input-group mb-3",children:Object(h.jsx)("input",{className:"form-control",type:"file",id:"dataset2",name:"dataset2",placeholder:"Dataset de test","aria-label":"Dataset de test","aria-describedby":"basic-addon1",ref:this.dataset2Ref})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("p",{children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"checkbox",name:"terms",id:"terms",value:"Acepto",ref:this.termsRef,defaultChecked:!0})," Acepto los t\xe9rminos y condiciones del servicio."]})})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"submit",className:"btn btn-info",value:"Clasificar"})})]})]})}}]),t}(r.Component)),y=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).emailRef=n.a.createRef(),e.dataset1Ref=n.a.createRef(),e.dataset2Ref=n.a.createRef(),e.termsRef=n.a.createRef(),e.recibirFormulario=function(a){a.preventDefault();var t=e.emailRef.current.value,r=e.dataset1Ref.current.value;e.dataset2Ref.current.value;e.termsRef.current.value&&e.render(t+r)},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Evaluar"}),Object(h.jsxs)("p",{children:["Para evaluar una red neuronal (RN), ingrese un dataset de train que genere el clasificador o la definici\xf3n de la RN.",Object(h.jsx)("br",{}),"El resultado ser\xe1n los datos de validaci\xf3n del clasificador."]}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{onSubmit:this.recibirFormulario,children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"@"})}),Object(h.jsx)("input",{className:"form-control",type:"email",id:"email",name:"email",placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1",ref:this.emailRef,required:!0})]}),Object(h.jsx)("div",{className:"input-group mb-3",children:Object(h.jsx)("input",{className:"form-control",type:"file",id:"dataset1",name:"dataset1",placeholder:"Dataset de train","aria-label":"Dataset de train","aria-describedby":"basic-addon1",ref:this.dataset1Ref,required:!0})}),Object(h.jsx)("div",{className:"input-group mb-3",children:Object(h.jsx)("input",{className:"form-control",type:"file",id:"dataset2",name:"dataset2",placeholder:"Dataset de test","aria-label":"Dataset de test","aria-describedby":"basic-addon1",ref:this.dataset2Ref})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("p",{children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"checkbox",name:"terms",id:"terms",value:"Acepto",ref:this.termsRef,defaultChecked:!0})," Acepto los t\xe9rminos y condiciones del servicio."]})})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"submit",className:"btn btn-info",value:"Evaluar"})})]})]})}}]),t}(r.Component),N=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).emailRef=n.a.createRef(),e.dataset1Ref=n.a.createRef(),e.termsRef=n.a.createRef(),e.recibirFormulario=function(a){a.preventDefault();var t=e.emailRef.current.value,r=e.dataset1Ref.current.value;e.termsRef.current.value&&e.render(t+r)},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Entrenar"}),Object(h.jsxs)("p",{children:["Para entrenar la red neuronal, ingrese un dataset de train.",Object(h.jsx)("br",{}),"El resultado ser\xe1 la configuraci\xf3n de una red neuronal \xf3ptima y los datos de la bondad del clasificador."]}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{onSubmit:this.recibirFormulario,children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"@"})}),Object(h.jsx)("input",{className:"form-control",type:"email",id:"email",name:"email",placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1",ref:this.emailRef,required:!0})]}),Object(h.jsx)("div",{className:"input-group mb-3",children:Object(h.jsx)("input",{className:"form-control",type:"file",id:"dataset1",name:"dataset1",placeholder:"Dataset de train","aria-label":"Dataset de train","aria-describedby":"basic-addon1",ref:this.dataset1Ref,required:!0})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("p",{children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"checkbox",name:"terms",id:"terms",value:"Acepto",ref:this.termsRef,defaultChecked:!0})," Acepto los t\xe9rminos y condiciones del servicio."]})})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"submit",className:"btn btn-info",value:"Entrenar"})})]})]})}}]),t}(r.Component),R=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).handleChange=function(e){r.setState({opcion:e.target.value},r.handleSubmit)},r.state={opcion:null},r}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,a){}},{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:"Servicios."}),Object(h.jsx)("div",{id:"radio-buttons",children:Object(h.jsxs)("p",{children:["Entrenar",Object(h.jsx)("input",{id:"entrenar",className:"RadioButton",value:"Entrenar",name:"servicios",type:"radio",onChange:this.handleChange}),"Evaluar",Object(h.jsx)("input",{id:"evaluar",className:"RadioButton",value:"Evaluar",name:"servicios",type:"radio",onChange:this.handleChange}),"Clasificar",Object(h.jsx)("input",{id:"clasificar",className:"RadioButton",value:"Clasificar",name:"servicios",type:"radio",onChange:this.handleChange})]})}),"Entrenar"==this.state.opcion&&Object(h.jsx)(N,{}),"Evaluar"==this.state.opcion&&Object(h.jsx)(y,{}),"Clasificar"==this.state.opcion&&Object(h.jsx)(g,{}),Object(h.jsx)("hr",{})]})}}]),t}(r.Component),C=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:"Autor."}),Object(h.jsx)("h3",{children:"Leroy Deniz"}),Object(h.jsxs)("p",{children:["Grado en Ingenier\xeda Inform\xe1tica",Object(h.jsx)("br",{}),"Especialidad Ingenier\xeda de Software",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"(+34) 669 987 109",Object(h.jsx)("br",{}),"leroydeniz ",Object(h.jsx)("code",{children:"[at]"})," icloud.com",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("code",{children:"https://leroydeniz.com"})]})]})}}]),t}(r.Component),E=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:"GANN Service."}),Object(h.jsxs)("p",{children:["Los algoritmos de clasificaci\xf3n supervisada resuelven un tipo de problema espec\xedfico donde se cuenta con una serie de datos previamente clasificados. Para poder decidir la clasificaci\xf3n de una muestra, se tiene en cuenta toda la informaci\xf3n que se pueda extraer de un conjunto de datos inicial, de datos cuya clase es conocida por el clasificador.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"En este trabajo se implementa una aplicaci\xf3n web que permite al usuario entrenar una red neuronal, cargando un dataset de entrenamiento para ello y devolvi\xe9ndole la definici\xf3n de la red entrenada junto con informaci\xf3n sobre la fidelidad de esta. Adem\xe1s podr\xe1 ingresar opcionalmente un dataset adicional que ser\xe1 procesado y clasificado con la misma red generada.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"La aplicaci\xf3n es construida sobre una arquitectura de tres capas, contando con una interfaz web que permitir\xe1 al usuario interactuar con el software, y cuyo Core es una API construida en Python. Esta \xfaltima ser\xe1 la responsable de entrenar la red neuronal.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Se aborda el dise\xf1o del Core utilizando t\xe9cnicas de clasificaci\xf3n supervisada bajo entrenamiento de redes neuronales evolutivas por medio de algoritmos gen\xe9ticos. El uso de algoritmos gen\xe9ticos permite a la red crecer tanto en n\xfamero de nodos como de capas de manera din\xe1mica, en funci\xf3n de lo que ella misma considere necesaria para su propio entrenamiento."]})]})}}]),t}(r.Component),k=t(51),A=t.n(k),D="https://jsonplaceholder.typicode.com",F=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={posts:[],status:null},e.getPosts=function(){var a="".concat(D,"/posts");A.a.get(a).then((function(a){e.setState({posts:a.data,status:"success"})}))},e}return Object(o.a)(t,[{key:"componentWillMount",value:function(){this.getPosts()}},{key:"render",value:function(){if(this.state.posts.length>=1&&"success"===this.state.status){var e=this.state.posts.map((function(e){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsxs)("p",{children:["UserId: ",e.userId,Object(h.jsx)("br",{}),"PostId: ",e.id,Object(h.jsx)("br",{}),"Title: ",e.title,Object(h.jsx)("br",{}),"Parameter: ",e.body,Object(h.jsx)("br",{})]}),Object(h.jsx)("hr",{})]})}));return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)("h2",{children:"Listado de par\xe1metros."}),e]})}return 0===this.state.posts.length&&"success"===this.state.status?Object(h.jsx)("h2",{children:"La consulta no ha devuelto datos."}):Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)("h2",{children:"Procesando..."}),Object(h.jsx)("p",{children:"Espere mientras se carga el contenido."})]})}}]),t}(r.Component),q=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:"Test."}),Object(h.jsx)(F,{})]})}}]),t}(r.Component),I=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:"Ups."}),Object(h.jsx)("p",{children:"La p\xe1gina a la que intenta acceder no ha sido encontrada."})]})}}]),t}(r.Component),P=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsx)(x.a,{children:Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{exact:!0,path:"/",component:E}),Object(h.jsx)(v.a,{exact:!0,path:"/index",component:E}),";",Object(h.jsx)(v.a,{exact:!0,path:"/entrenamiento",component:R}),";",Object(h.jsx)(v.a,{exact:!0,path:"/test",component:q}),";",Object(h.jsx)(v.a,{exact:!0,path:"/autor",component:C}),";",Object(h.jsx)(v.a,{component:I}),";"]})})}}]),t}(r.Component);var S=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{}),Object(h.jsx)(P,{}),Object(h.jsx)(f,{})]})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,96)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),L()}},[[87,1,2]]]);
//# sourceMappingURL=main.632a1957.chunk.js.map