(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),r=n.n(s),i=(n(14),n(4)),o=(n(17),n(0)),l=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("div",{className:"footer__title",children:"Nativity Creche"}),Object(o.jsx)("div",{className:"footer__subtitle",children:"\xa9 2021 All rights reserved"})]})})},d=(n(19),function(){return Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{className:"header__title",children:"Nativity Creche Around The World"}),Object(o.jsx)("div",{className:"header__subtitle",children:"Create an atmosphere of real magic"})]})})}),j=n(3),b=n.n(j),u=n(5),h=n(6),m=(n(21),n(9)),f=n.n(m);n(22);function x(e){var t="https://api.imgbb.com/1/upload?key=".concat("7e55391f5e058c95cd6728f7f406bdf3"),n=new FormData;return n.append("image",e),fetch(t,{method:"POST",body:n}).then((function(e){if(e&&e.ok)return e.json()}))}function p(e){return fetch("https://script.google.com/macros/s/AKfycbxBa7yCtpHlJK9sJ4xfEl6TGnwsrhblEokbyb7CHWZuwTHyn2c/exec",{method:"POST",body:e})}var O=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(c.useRef)(),r=function(){var e=Object(u.a)(b.a.mark((function e(t){var n,c,s,r,i,o,l,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a(!0),n=new FormData(t.target),c=n.get("file"),n.delete("file"),!c){e.next=16;break}return e.next=8,x(c);case 8:o=e.sent,l=o&&o.data,s=l&&l.url,r=l&&l.url_viewer,i=l&&l.delete_url,n.append("imageUrl",s),n.append("viewImageUrl",r),n.append("deleteImageUrl",i);case 16:return e.next=18,p(n);case 18:d=e.sent,alert("Thank you! We'll connect with you soon."),a(!1),console.log("sucsess",d);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("div",{className:"drop",style:{visibility:n?"visible":"hidden"}}),Object(o.jsxs)("div",{className:"form__wrapper",children:[Object(o.jsx)("h1",{className:"form__title",children:"Please contuct with us entered this form"}),Object(o.jsxs)("form",{ref:s,onSubmit:r,children:[Object(o.jsxs)("div",{className:"form__contact-data",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("label",{className:"form__label",children:["What is your name?",Object(o.jsx)("input",{type:"text",name:"name"})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{className:"form__label",children:["How to contact with you?",Object(o.jsx)("input",{type:"text",name:"contact"})]})})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{className:"form__label",children:["Describe your wish",Object(o.jsx)("textarea",{name:"description",rows:20})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{className:"form__label form__label-file",children:["Attach photo",Object(o.jsx)("input",{type:"file",name:"file"})]})}),Object(o.jsx)("div",{className:"form__button",children:Object(o.jsx)("button",{type:"submit",disabled:n,onClick:function(){i.a.event({category:"Contact Us",action:"User pressed Contact Us button"})},children:"Contact Us"})})]})]})]})},v=(n(23),function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){!function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://notion-api.splitbee.io/v1/table/f4ab71b8aaac43a4b45f797e32fc0387").then((function(e){return e.json()}));case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)("section",{className:"main__content",children:Object(o.jsx)(f.a,{className:"main__slider-wrapper",autoplay:1e4,touchDisabled:!1,minSwipeOffset:20,children:n.map((function(e,t){var n=e.name,c=e.description,a=e.image;return Object(o.jsx)("div",{className:"main__slider-content slide",style:{background:"center/100% url('".concat(a[0].url,"') no-repeat")},children:Object(o.jsx)("div",{className:"main__slider-inner",children:Object(o.jsx)("p",{children:c})})},"".concat(n,"-").concat(t))}))})}),Object(o.jsx)("section",{className:"main__advertising",children:Object(o.jsx)("aside",{children:"Google Advertising"})}),Object(o.jsx)("section",{className:"main__form",children:Object(o.jsx)(O,{})})]})})}),_=(n(24),function(){return i.a.initialize("UA-xxxxxxx-x"),i.a.pageview(window.location.pathname+window.location.search),Object(o.jsxs)("div",{className:"app-container",children:[Object(o.jsx)(d,{}),Object(o.jsx)(v,{}),Object(o.jsx)(l,{})]})});r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.ae675331.chunk.js.map