(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[61],{1503:function(e,t,n){(function(n){var a,i,o;i=[],a=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){c(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):i(c.href)?a(e,t,n):o(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(i(e))a(e,n,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){o(s)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var o="application/octet-stream"===e.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&c||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},u.readAsDataURL(e)}else{var d=r.URL||r.webkitURL,m=d.createObjectURL(e);i?i.location=m:location.href=m,i=null,setTimeout((function(){d.revokeObjectURL(m)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c},void 0===(o="function"===typeof a?a.apply(t,i):a)||(e.exports=o)}).call(this,n(17))},1564:function(e,t,n){"use strict";n.r(t);var a=n(33),i=n(1),o=n(479),r=n(776),s=n.n(r),c=n(1503),l=n(92),u=n(9),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}];t.default=function(){var e=Object(i.useRef)(),t=Object(i.useState)(d),n=Object(a.a)(t,1)[0],r=Object(i.useState)(""),m=Object(a.a)(r,2),b=m[0],j=m[1],h=Object(i.useState)(!1),f=Object(a.a)(h,2),p=f[0],x=f[1],w=Object(i.useState)(""),O=Object(a.a)(w,2),v=O[0],g=O[1],y=Object(i.useState)([]),L=Object(a.a)(y,2),S=L[0],C=L[1],k=Object(i.useState)("xlsx"),E=Object(a.a)(k,2),R=E[0],N=E[1],T=function(){x(!p)},A=(b?S:n).map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.website}),Object(u.jsx)("td",{children:e.id})]},e.id)}));return Object(u.jsxs)(i.Fragment,{children:[Object(u.jsx)(o.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/SheetJS/sheetjs"}),Object(u.jsx)(l.ib,{className:"export-component",children:Object(u.jsx)(l.B,{sm:"12",children:Object(u.jsxs)(l.l,{children:[Object(u.jsx)(l.m,{className:"pb-0",children:Object(u.jsxs)("div",{className:"d-flex justify-content-between flex-wrap flex-sm-row flex-column",children:[Object(u.jsx)(l.i,{color:"primary",onClick:function(){return T()},children:"Export"}),Object(u.jsxs)("div",{className:"d-flex align-items-center justify-content-end mt-sm-0 mt-1",children:[Object(u.jsx)(l.N,{for:"search-input",className:"me-1",children:"Search"}),Object(u.jsx)(l.K,{id:"search-input",bsSize:"sm",type:"text",value:b,onChange:function(e){return function(e){var t=n,a=[],i=e.target.value;j(i),i.length&&(a=t.filter((function(e){var t=e.name.toLowerCase().startsWith(i.toLowerCase())||e.email.toLowerCase().startsWith(i.toLowerCase())||e.website.toLowerCase().startsWith(i.toLowerCase())||e.id.toString().toLowerCase().startsWith(i.toLowerCase()),n=e.name.toLowerCase().includes(i.toLowerCase())||e.email.toLowerCase().includes(i.toLowerCase())||e.website.toLowerCase().includes(i.toLowerCase())||e.id.toString().toLowerCase().includes(i.toLowerCase());return t||(!t&&n?n:null)})),C(a),j(i))}(e)}})]})]})}),Object(u.jsxs)(l.mb,{innerRef:e,className:"table-hover-animation mt-2",responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Website"}),Object(u.jsx)("th",{children:"Rank"})]})}),Object(u.jsx)("tbody",{children:A})]})]})})}),Object(u.jsxs)(l.Q,{isOpen:p,toggle:function(){return T()},className:"modal-dialog-centered",onClosed:function(){return g("")},children:[Object(u.jsx)(l.T,{toggle:function(){return T()},children:"Export To Excel"}),Object(u.jsxs)(l.R,{children:[Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsx)(l.K,{type:"text",value:v,onChange:function(e){return g(e.target.value)},placeholder:"Enter File Name"})}),Object(u.jsx)("div",{children:Object(u.jsxs)(l.K,{type:"select",id:"selectFileFormat",name:"customSelect",value:R,onChange:function(e){return N(e.target.value)},children:[Object(u.jsx)("option",{children:"xlsx"}),Object(u.jsx)("option",{children:"csv"}),Object(u.jsx)("option",{children:"txt"})]})})]}),Object(u.jsxs)(l.S,{children:[Object(u.jsx)(l.i,{color:"primary",onClick:function(){return function(){T();var t=R,n=s.a.utils.table_to_book(e.current,{sheet:"Sheet JS"}),a=s.a.write(n,{bookType:t,bookSST:!0,type:"binary"}),i=v.length?"".concat(v,".").concat(R):"excel-sheet.".concat(R);return c.saveAs(new Blob([function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a<e.length;a++)n[a]=255&e.charCodeAt(a);return t}(a)],{type:"application/octet-stream"}),i)}()},children:"Export"}),Object(u.jsx)(l.i,{color:"flat-danger",onClick:function(){return T()},children:"Cancel"})]})]})]})}},479:function(e,t,n){"use strict";var a=n(92),i=n(9);t.a=function(e){return Object(i.jsx)(a.ib,{className:"mb-2",children:Object(i.jsxs)(a.B,{sm:"12",className:"ms-50",children:[Object(i.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(i.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},687:function(e,t){},777:function(e,t){},778:function(e,t){}}]);
//# sourceMappingURL=61.d9d156cb.chunk.js.map