(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1642:function(e,t,c){"use strict";c.r(t);var a=c(33),s=c(1),i=c(5),n=c.n(i),r=c(92),l=c(9),d=function(e){var t=e.data;return Object(l.jsxs)("div",{className:"pricing-faq",children:[Object(l.jsx)("h3",{className:"text-center",children:"FAQ's"}),Object(l.jsx)("p",{className:"text-center mb-0",children:"Let us help answer the most common questions."}),Object(l.jsx)(r.ib,{className:"mt-75 mb-2",children:Object(l.jsx)(r.B,{className:"mx-auto",sm:"12",lg:{size:10,offset:2},children:Object(l.jsx)(r.rb,{className:"accordion-margin mt-2",children:t.map((function(e,t){return Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.c,{tag:"h2",targetId:String(t+1),children:e.question}),Object(l.jsx)(r.b,{accordionId:String(t+1),children:e.ans})]},t+1)}))})})})]})},j=c(649),o=c(593),b=function(){return Object(l.jsx)("div",{className:"pricing-free-trial",children:Object(l.jsx)(r.ib,{children:Object(l.jsx)(r.B,{className:"mx-auto",lg:{size:10,offset:3},sm:"12",children:Object(l.jsxs)("div",{className:"pricing-trial-content d-flex justify-content-between",children:[Object(l.jsxs)("div",{className:"text-center text-md-start mt-3",children:[Object(l.jsx)("h3",{className:"text-primary",children:"Still not convinced? Start with a 14-day FREE trial!"}),Object(l.jsx)("h5",{children:"You will get full access to with all the features for 14 days."}),Object(l.jsx)("div",{className:"mt-2 mt-lg-3",children:Object(l.jsx)(r.i,{color:"primary",children:"Start 14-day FREE trial"})})]}),Object(l.jsx)("img",{className:"pricing-trial-img img-fluid",src:o.a,alt:"trial svg",style:{transform:"scaleX(1)"}})]})})})})},m=function(e){var t=e.duration,c=e.setDuration;return Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("h1",{className:"mt-5",children:"Pricing Plans"}),Object(l.jsx)("p",{className:"mb-2 pb-75",children:"All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs."}),Object(l.jsxs)("div",{className:"d-flex align-items-center justify-content-center mb-5 pb-50",children:[Object(l.jsx)("h6",{className:"me-50 mb-0",children:"Monthly"}),Object(l.jsx)("div",{className:"form-switch",children:Object(l.jsx)(r.K,{id:"plan-switch",type:"switch",checked:"yearly"===t,onChange:function(e){e.target.checked?c("yearly"):c("monthly")}})}),Object(l.jsx)("h6",{className:"ms-50 mb-0",children:"Annually"})]})]})};c(650),t.default=function(){var e=Object(s.useState)(null),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(s.useState)(null),o=Object(a.a)(r,2),u=o[0],h=o[1],x=Object(s.useState)("monthly"),O=Object(a.a)(x,2),p=O[0],f=O[1];return Object(s.useEffect)((function(){n.a.get("/pricing/data").then((function(e){var t=[],c=[];Object.entries(e.data).forEach((function(e){var s=Object(a.a)(e,2),n=s[0],r=s[1];"qandA"!==n?(t.push(r),i([].concat(t))):(c.push(r),h(c[0]))}))}))}),[]),Object(l.jsxs)("div",{id:"pricing-table",children:[Object(l.jsx)(m,{duration:p,setDuration:f}),null!==c&&null!==u?Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)(j.a,{data:c,duration:p}),Object(l.jsx)(b,{}),Object(l.jsx)(d,{data:u})]}):null]})}},593:function(e,t,c){"use strict";t.a=c.p+"static/media/pricing-Illustration.b00baee8.svg"},649:function(e,t,c){"use strict";var a=c(12),s=c(16),i=c(2),n=c.n(i),r=c(92),l=c(9);t.a=function(e){var t=e.data,c=e.duration,i=e.bordered,d=e.fullWidth,j=e.cols,o=j||{md:4,xs:12};return Object(l.jsx)(r.ib,{className:"pricing-card",children:Object(l.jsx)(r.B,Object(a.a)(Object(a.a)({},d?{}:{sm:{offset:2,size:10},lg:{offset:2,size:10}}),{},{className:n()({"mx-auto":!d}),children:Object(l.jsx)(r.ib,{children:t.map((function(e,t){var d="yearly"===c?e.yearlyPlan.perMonth:e.monthlyPrice,j="yearly"===c?e.yearlyPlan.totalAnnual:e.monthlyPrice,b="Basic"===e.title?"mb-2 mt-5":"Standard"===e.title?"mb-1":"mb-2";return Object(l.jsx)(r.B,Object(a.a)(Object(a.a)({},o),{},{children:Object(l.jsx)(r.l,{className:n()("text-center",Object(s.a)({border:i,"shadow-none":i,popular:!0===e.popular,"border-primary":i&&!0===e.popular},"".concat(e.title.toLowerCase(),"-pricing"),e.title)),children:Object(l.jsxs)(r.m,{children:[!0===e.popular?Object(l.jsx)("div",{className:"pricing-badge text-end",children:Object(l.jsx)(r.f,{color:"light-primary",pill:!0,children:"Popular"})}):null,Object(l.jsx)("img",{className:b,src:e.img,alt:"pricing svg"}),Object(l.jsx)("h3",{children:e.title}),Object(l.jsx)(r.u,{children:e.subtitle}),Object(l.jsxs)("div",{className:"annual-plan",children:[Object(l.jsxs)("div",{className:"plan-price mt-2",children:[Object(l.jsx)("sup",{className:"font-medium-1 fw-bold text-primary me-25",children:"$"}),Object(l.jsx)("span",{className:"pricing-".concat(e.title.toLowerCase(),"-value fw-bolder text-primary"),children:d}),Object(l.jsx)("span",{className:"pricing-duration text-body font-medium-1 fw-bold ms-25",children:"/month"})]}),"Basic"!==e.title&&"yearly"===c?Object(l.jsxs)("small",{className:"annual-pricing text-muted",children:["USD ",j," / year"]}):null]}),Object(l.jsx)(r.O,{tag:"ul",className:"list-group-circle text-start mb-2",children:e.planBenefits.map((function(e,t){return Object(l.jsx)(r.P,{tag:"li",children:e},t)}))}),Object(l.jsx)(r.i,{block:!0,outline:"Standard"!==e.title,color:"Basic"===e.title?"success":"primary",children:"Basic"===e.title?"Your current plan":"Upgrade"})]})})}),t)}))})}))})}},650:function(e,t,c){}}]);
//# sourceMappingURL=65.fa202597.chunk.js.map