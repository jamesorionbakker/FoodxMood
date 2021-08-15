(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,n){},113:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(28),c=n.n(r),s=(n(106),n(25)),i=n(16),o=n(8),l=n(17),u=n(12),d=n(7),j=n.n(d),h=n(15),b=n(44),O=n(58),p=n(77),m=function(){function e(t){Object(b.a)(this,e);var n=Object(p.a)(t),a=n.exp,r=n.username,c=n.firstName,s=n.lastName;this.value=t,this.exp=a,this.username=r,this.firstName=c,this.lastName=s}return Object(O.a)(e,[{key:"getCurrSeconds",value:function(){return Math.ceil(Date.now()/1e3)}},{key:"expired",value:function(){return this.exp<this.getCurrSeconds()+10}}]),e}();function f(){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/access");case 2:if(200===(t=e.sent).status){e.next=8;break}return e.next=6,t.json();case 6:throw n=e.sent,new Error(n);case 8:return e.next=10,t.json();case 10:return a=e.sent,e.abrupt("return",new m(a));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function e(t){if(Object(b.a)(this,e),t&&!t.expired()){this.accessToken=t;var n=t.username,a=t.firstName,r=t.lastName;this.username=n,this.firstName=a,this.lastName=r,this.isLoggedIn=!0}else this.accessToken=null,this.username="",this.firstName="",this.lastName="",this.isLoggedIn=!1};var y=n(41),g=n(2),w=Object(g.a)(Object(g.a)({},new v),{},{attemptingLogin:!0});var N={data:{},loading:!0};var E={show:!1,ingredients:[],time:"",mealType:"",_id:"",new:!1,edit:!1,timeString:"",dateString:""};var C={show:!1,symptoms:[],time:"",mood:null,_id:"",new:!1,edit:!1,dateString:"",timeString:""};var k={username:"",password:"",show:!1,invalidPassword:!1,invalidUsername:!1};var S={show:!1};var T={activity:{active:!0,filter:"all"}};n(91);function M(e){var t="Password must be at least 8 characters with at least one capital letter and one number";return/\s/.test(e)?{valid:!1,error:"Password cannot contain spaces. "+t}:/^\S{8,}$/i.test(e)&&/[A-Z]/.test(e)&&/\d/.test(e)?{valid:!0,error:""}:{valid:!1,error:t}}function R(e){var t=/^\w{1,}/i.test(e);return{valid:t,error:t?"":"Invalid Name"}}var _={value:"",valid:!1,touched:!1,error:"Required Field"},I={show:!1,firstName:Object(g.a)({},_),lastName:Object(g.a)({},_),email:Object(g.a)(Object(g.a)({},_),{},{valid:!0}),username:Object(g.a)({},_),password:Object(g.a)({},_),passwordVerify:Object(g.a)({},_)};var H=Object(y.combineReducers)({UserState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERSTATE/SET":return Object(g.a)(Object(g.a)({},t.payload),{},{attemptingLogin:!1});default:return Object(g.a)({},e)}},activity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTIVITY/SET_DATA":return Object(g.a)({},t.payload);case"ACTIVITY/LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:!0});default:return e}},mealForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"MEAL_FORM/EDIT":case"MEAL_FORM/NEW":return Object(g.a)(Object(g.a)({},E),n);case"MEAL_FORM/CHANGE":return Object(g.a)(Object(g.a)({},e),n);case"MEAL_FORM/CLOSE":return Object(g.a)({},E);case"MEAL_FORM/DELETE_INGREDIENT":var a=e.ingredients.filter((function(e){return e!==n}));return Object(g.a)(Object(g.a)({},e),{},{ingredients:a});default:return e}},healthCheckForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"HEALTH_CHECK_FORM/EDIT":case"HEALTH_CHECK_FORM/NEW":return Object(g.a)(Object(g.a)({},C),n);case"HEALTH_CHECK_FORM/DELETE_SYMPTOM":var a=e.symptoms.filter((function(e){return e!==n}));return Object(g.a)(Object(g.a)({},e),{},{symptoms:a});case"HEALTH_CHECK_FORM/CHANGE":return Object(g.a)(Object(g.a)({},e),n);case"HEALTH_CHECK_FORM/CLOSE":return Object(g.a)({},C);default:return e}},loginForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"LOGIN_FORM/SET":return Object(g.a)(Object(g.a)({},e),n);case"LOGIN_FORM/SHOW":return Object(g.a)(Object(g.a)({},e),{},{show:!0});case"LOGIN_FORM/RESET":return Object(g.a)({},k);default:return e}},userMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.payload,t.type){case"USER_MENU/SHOW":return console.log("showing"),Object(g.a)(Object(g.a)({},e),{},{show:!0});case"USER_MENU/HIDE":return console.log("hiding"),Object(g.a)(Object(g.a)({},e),{},{show:!1});default:return e}},view:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"VIEW/ACTIVITY":return Object(g.a)(Object(g.a)({},T),n);default:return e}},registerForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"REGISTER_FORM/SHOW":return Object(g.a)(Object(g.a)({},e),{},{show:!0});case"REGISTER_FORM/HIDE":return Object(g.a)(Object(g.a)({},e),{},{show:!1});case"REGISTER_FORM/SET":case"REGISTER_FORM/VALIDATE":return Object(g.a)(Object(g.a)({},e),n);case"REGISTER_FORM/TOUCH_ALL":var a=Object(g.a)({},e);Object.keys(e).forEach((function(e){a[e].hasOwnProperty("touched")&&(a[e].touched=!0)}));return a;default:return Object(g.a)({},e)}}}),L=n(92),A=n(93),F=Object(y.compose)(Object(y.applyMiddleware)(L.a)),D=Object(y.createStore)(H,Object(A.composeWithDevTools)(F)),U=D.dispatch;function G(){return D.getState().UserState.accessToken}function P(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(G().value)}}function V(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G().expired()){e.next=3;break}return e.next=3,U(Z());case 3:return console.log("api get: "+t),e.next=6,fetch("/api/".concat(t),{method:"GET",headers:P()});case 6:return n=e.sent,e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t){return W.apply(this,arguments)}function W(){return(W=Object(h.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G().expired()){e.next=3;break}return e.next=3,U(Z());case 3:return console.log("api post: "+t),e.next=6,fetch("/api/".concat(t),{method:"POST",headers:P(),body:JSON.stringify(n)});case 6:return a=e.sent,e.next=9,a.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e,t){return J.apply(this,arguments)}function J(){return(J=Object(h.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G().expired()){e.next=3;break}return e.next=3,U(Z());case 3:return e.next=5,fetch("/api/".concat(t),{method:"PUT",headers:P(),body:JSON.stringify(n)});case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){return $.apply(this,arguments)}function $(){return($=Object(h.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G().expired()){e.next=3;break}return e.next=3,U(Z());case 3:return e.next=5,fetch("/api/".concat(t,"/").concat(n),{method:"DELETE",headers:P()});case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return{type:"USERSTATE/SET",payload:e}}function Z(){return console.log("attempting login"),function(){var e=Object(h.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:a=e.sent,t(q(new v(a))),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("no refresh token, login required"),t(q(new v));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()}function Q(e){return{type:"LOGIN_FORM/SET",payload:e}}function X(e){return{type:"REGISTER_FORM/SET",payload:e}}function ee(e){return{type:"REGISTER_FORM/VALIDATE",payload:e}}var te=n(23),ne=n(22),ae=n(19),re=(n(113),n(18)),ce=n.n(re),se=n(1);function ie(e){var t=e.name,n=e.state,a=e.validationCallback,r=e.placeholder,c=e.capitalize,i=e.type,o=e.validated,l=e.trimWhitespace,u=e.lowercase,d=e.onBlur,j=e.onChange;return Object(se.jsxs)(s.a.Group,{children:[Object(se.jsx)(s.a.Control,{name:t,value:n.value,isInvalid:o&&n.touched&&!n.valid,isValid:o&&n.touched&&n.valid,onBlur:function(e){e.target.value&&d(e,a)},onChange:function(e){var t=e.target,n=t.name,a=t.value;l&&(a=ce.a.trim(a)),u&&(a=ce.a.toLower(a)),c&&/\w$/.test(a)&&(a=a.split(/([\s-_.])/).reduce((function(e,t){return e+ce.a.upperFirst(t)}),""),a=ce.a.trim(a)),j({name:n,value:a})},type:i,placeholder:r}),Object(se.jsx)(s.a.Control.Feedback,{type:"invalid",children:n.error}),Object(se.jsx)(s.a.Control.Feedback,{type:"valid",children:n.error})]})}function oe(){var e=Object(a.useState)(!1),t=Object(ne.a)(e,2),n=t[0],r=t[1],c=Object(u.b)(),d=Object(u.c)((function(e){return e.registerForm}));function b(e){return O.apply(this,arguments)}function O(){return(O=Object(h.a)(j.a.mark((function e(t){var n,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c({type:"REGISTER_FORM/TOUCH_ALL"}),d.password.valid){e.next=4;break}return e.abrupt("return");case 4:if(d.passwordVerify.valid){e.next=6;break}return e.abrupt("return");case 6:if(d.username.valid){e.next=8;break}return e.abrupt("return");case 8:if(d.firstName.valid){e.next=10;break}return e.abrupt("return");case 10:if(d.lastName.valid){e.next=12;break}return e.abrupt("return");case 12:return n={username:ce.a.toLower(ce.a.trim(d.username.value)),firstName:ce.a.trim(d.firstName.value),lastName:ce.a.trim(d.lastName.value),password:ce.a.trim(d.password.value)},console.log(n),r(!0),e.prev=15,e.next=18,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 18:if(200===(a=e.sent).status){e.next=21;break}throw new Error("Error ".concat(a.status));case 21:return console.log("success"),e.t0=m,e.next=25,a.json();case 25:e.t1=e.sent,s=new e.t0(e.t1),c(q(new v(s))),e.next=34;break;case 30:e.prev=30,e.t2=e.catch(15),r(!1),console.log(e.t2);case 34:case"end":return e.stop()}}),e,null,[[15,30]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(h.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.name,a=t.value,c(X(Object(te.a)({},n,{value:a})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(j.a.mark((function e(t,n){var a,r,s,i,o,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target,r=a.name,s=a.value,e.next=3,n(s);case 3:i=e.sent,o=i.valid,l=i.error,c(ee(Object(te.a)({},r,{value:s,valid:o,touched:!0,error:l})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(se.jsx)(ae.a,{show:d.show,onHide:function(){return c({type:"REGISTER_FORM/HIDE"})},children:Object(se.jsxs)(s.a,{onSubmit:b,noValidate:!0,children:[Object(se.jsx)(ae.a.Header,{children:Object(se.jsx)(ae.a.Title,{children:"Sign Up!"})}),Object(se.jsxs)(ae.a.Body,{className:"register-form-container",children:[Object(se.jsx)("h6",{children:"Personal info:"}),Object(se.jsxs)(i.a,{children:[Object(se.jsx)(o.a,{xs:6,children:Object(se.jsx)(ie,{state:d.firstName,name:"firstName",capitalize:!0,validated:!0,placeholder:"First Name",validationCallback:R,onChange:p,onBlur:x})}),Object(se.jsx)(o.a,{xs:6,children:Object(se.jsx)(ie,{state:d.lastName,name:"lastName",validated:!0,placeholder:"Last Name",validationCallback:R,capitalize:!0,onChange:p,onBlur:x})})]}),Object(se.jsx)(i.a,{children:Object(se.jsx)(o.a,{xs:12})}),Object(se.jsx)("hr",{}),Object(se.jsx)("h6",{children:"Account Info:"}),Object(se.jsx)(i.a,{children:Object(se.jsx)(o.a,{xs:12,children:Object(se.jsx)(ie,{state:d.username,name:"username",validated:!0,trimWhitespace:!0,lowercase:!0,placeholder:"Username",validationCallback:function(){var e=Object(h.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/^\w{1,}$/i.test(t)){e.next=2;break}return e.abrupt("return",{valid:!1,error:"Invalid Username"});case 2:return e.next=4,fetch("validation/username/"+t);case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,r=a?"Username is available":"Username is not available",e.abrupt("return",{valid:a,error:r});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onChange:p,onBlur:x})})}),Object(se.jsx)(i.a,{children:Object(se.jsx)(o.a,{xs:12,children:Object(se.jsx)(ie,{type:"password",state:d.password,name:"password",validated:!0,placeholder:"Password",validationCallback:M,onChange:p,onBlur:x})})}),Object(se.jsx)(i.a,{children:Object(se.jsx)(o.a,{xs:12,children:Object(se.jsx)(ie,{type:"password",state:d.passwordVerify,name:"passwordVerify",validated:!0,placeholder:"Verify Password",validationCallback:function(e){var t=d.password.value===e;return{valid:t,error:t?"":"Passwords do not match"}},onChange:p,onBlur:x})})})]}),Object(se.jsxs)(ae.a.Footer,{children:[Object(se.jsx)(l.a,{variant:"default",onClick:function(){return c({type:"REGISTER_FORM/HIDE"})},children:"Cancel"}),Object(se.jsx)(l.a,{onClick:b,type:"submit",disabled:n,variant:"default",className:"button-light-green",children:n?"Creating Account":"Create Account"})]})]})})}function le(){var e=Object(u.c)((function(e){return e.loginForm})),t=Object(u.c)((function(e){return e.UserState})).attemptingLogin,n=Object(u.b)();return Object(se.jsx)("div",{className:"login-container",children:!t&&Object(se.jsx)(s.a,{className:"form",onSubmit:function(e){e.preventDefault(),console.log("signing in"),n(function(){var e=Object(h.a)(j.a.mark((function e(t,n){var a,r,c,s,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n().loginForm,r=a.username,c=a.password,e.next=4,fetch("/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:r,password:c})});case 4:if(200===(s=e.sent).status){e.next=10;break}return e.next=8,s.json();case 8:throw i=e.sent,new Error(i);case 10:return e.t0=m,e.next=13,s.json();case 13:e.t1=e.sent,o=new e.t0(e.t1),t(q(new v(o))),t({type:"LOGIN_FORM/RESET"}),e.next=24;break;case 19:e.prev=19,e.t2=e.catch(0),console.log(e.t2),"invalid username"===e.t2.message&&t(Q({invalidPassword:!1,invalidUsername:!0})),"invalid password"===e.t2.message&&t(Q({invalidPassword:!0,invalidUsername:!1}));case 24:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,n){return e.apply(this,arguments)}}())},children:Object(se.jsx)("div",{className:"login",children:Object(se.jsxs)(i.a,{className:"form-row",children:[Object(se.jsx)(o.a,{className:"form-col",md:"auto",children:Object(se.jsx)(s.a.Control,{isInvalid:e.invalidUsername,name:"username",className:"username",placeholder:"User Name",value:e.username,onChange:function(e){n(Q({username:e.target.value}))}})}),Object(se.jsx)(o.a,{className:"filler",xs:12}),Object(se.jsx)(o.a,{className:"form-col",md:"auto",children:Object(se.jsx)(s.a.Control,{isInvalid:e.invalidPassword,name:"password",className:"password",type:"password",value:e.password,onChange:function(e){n(Q({password:e.target.value}))},placeholder:"Password"})}),Object(se.jsx)(o.a,{className:"filler",xs:12}),Object(se.jsx)(o.a,{className:"form-col",xs:8,md:"auto",children:Object(se.jsx)(l.a,{type:"submit",className:"login-button",variant:"light",children:"Sign In"})}),Object(se.jsxs)(o.a,{className:"form-col",xs:4,md:"auto",children:[Object(se.jsx)(l.a,{onClick:function(){return n({type:"REGISTER_FORM/SHOW"})},className:"button-dark-green",variant:"success",children:"Sign Up"}),Object(se.jsx)(oe,{})]})]})})})})}n(116);var ue=n(39),de=n(56);n(117);function je(){var e=Object(u.c)((function(e){return e.userMenu})),t=Object(a.useState)(!1),n=Object(ne.a)(t,2),r=n[0],c=n[1],s=Object(u.b)();return Object(se.jsxs)("div",{children:[Object(se.jsxs)("h4",{children:["Hello, ",Object(u.c)((function(e){return e.UserState.firstName})),Object(se.jsx)(l.a,{className:"user-menu-button",variant:"outline-light",style:{marginLeft:"20px",color:"white",borderColor:"white"},onClick:function(){return s({type:"USER_MENU/SHOW"})},children:Object(se.jsx)("i",{className:"fas fa-bars"})})]}),Object(se.jsxs)(de.a,{className:"user-menu",show:e.show,onHide:function(){return s({type:"USER_MENU/HIDE"})},placement:"end",children:[Object(se.jsx)(de.a.Header,{closeButton:!0,children:Object(se.jsx)(de.a.Title,{children:"Your Account"})}),Object(se.jsxs)(de.a.Body,{children:[Object(se.jsx)("div",{className:"options-container",children:Object(se.jsxs)("ul",{children:[Object(se.jsx)("li",{children:Object(se.jsx)("button",{className:"link",children:"Account Settings"})}),Object(se.jsx)("li",{children:Object(se.jsx)("button",{className:"link",children:"Help"})})]})}),Object(se.jsxs)("div",{className:"logout-button-container",children:[Object(se.jsx)("hr",{}),Object(se.jsx)(l.a,{disabled:r,variant:"default",className:"logout button-dark-green",onClick:Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,s(function(){var e=Object(h.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(){return n().UserState.accessToken},e.prev=1,!a().expired()){e.next=5;break}return e.next=5,t(Z());case 5:return e.next=7,fetch("/logout",{headers:P()});case 7:t({type:"USER_MENU/HIDE"}),t(q(new v)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))),children:r?"Logging Out":"Log Out"})]})]})]})]})}function he(){var e=Object(u.c)((function(e){return e.UserState}));return Object(se.jsx)(ue.a,{fluid:!0,className:"header-container",children:Object(se.jsxs)(i.a,{className:"header",children:[Object(se.jsx)(o.a,{xs:12,sm:"auto",className:"logo",children:Object(se.jsxs)("h3",{children:["Food ",Object(se.jsx)("span",{className:"x",children:"x"})," Mood"]})}),Object(se.jsx)(o.a,{xs:12,md:!0,className:"filler"}),Object(se.jsx)(o.a,{xs:12,md:"auto",className:"login",children:e.isLoggedIn?Object(se.jsx)(je,{}):Object(se.jsx)(le,{})})]})})}n(118);function be(e){return{type:"VIEW/ACTIVITY",payload:{activity:{active:!0,filter:e}}}}function Oe(e){var t=Object(u.b)();return Object(se.jsxs)("div",{className:"sidebar-container",children:[Object(se.jsxs)("div",{className:"nav-group",children:[Object(se.jsx)("div",{className:"nav-group-title",children:Object(se.jsx)("h5",{children:"Your Log"})}),Object(se.jsx)("div",{onClick:function(){t(be("all"))},className:"nav-item",children:Object(se.jsx)("a",{href:"#",children:"All Activity"})}),Object(se.jsx)("div",{onClick:function(){t(be("meals"))},className:"nav-item",children:Object(se.jsx)("a",{href:"#",children:"Meals"})}),Object(se.jsx)("div",{onClick:function(){t(be("health-checks"))},className:"nav-item",children:Object(se.jsx)("a",{href:"#",children:"Wellness"})}),Object(se.jsx)("div",{className:"nav-item-catagory"})]}),Object(se.jsxs)("div",{className:"nav-group",children:[Object(se.jsx)("div",{className:"nav-group-title",children:Object(se.jsx)("h5",{children:"Analysis"})}),Object(se.jsx)("div",{className:"nav-item",children:Object(se.jsx)("a",{href:"#",children:"Food Items"})}),Object(se.jsx)("div",{className:"nav-item",children:Object(se.jsx)("a",{href:"#",children:"Symptoms"})}),Object(se.jsx)("div",{className:"nav-item-catagory"})]})]})}n(119);var pe=n(21),me=n.n(pe);n(120);function fe(e){return Object(se.jsx)("div",{className:"pill",children:Object(se.jsx)("div",{className:"pill-primary ".concat(e.color),children:e.text})})}var xe=n(66),ve=n.n(xe);function ye(e,t){return me()("".concat(e," ").concat(t),"YYYY-MM-DD HH:mm").unix()}function ge(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me()().unix();return me.a.unix(e).format("YYYY-MM-DD")}function we(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me()().unix();return me.a.unix(e).format("HH:mm")}function Ne(e){return{type:"MEAL_FORM/CHANGE",payload:e}}function Ee(e){return function(){var e=Object(h.a)(j.a.mark((function e(t,n){var a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"ACTIVITY/LOADING"}),a=n().view.activity.filter,e.next=5,V("activity/".concat(a));case 5:r=e.sent,c=Object.fromEntries(r.map((function(e){return[e._id,e]}))),t({type:"ACTIVITY/SET_DATA",payload:{data:c,loading:!1}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()}function Ce(e){return{type:"HEALTH_CHECK_FORM/CHANGE",payload:e}}function ke(e){var t,n=Object(u.b)(),a=e.entry,r=a._id,c=a.type;function s(){return(s=Object(h.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,z("activity/".concat(t),r);case 4:n(Ee()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return"meal"===c&&(t="meals"),"healthCheck"===c&&(t="health-checks"),Object(se.jsxs)("div",{children:[Object(se.jsx)("a",{onClick:function(e){return s.apply(this,arguments)},href:"#",children:Object(se.jsx)("i",{style:{marginLeft:"10px"},className:"fas fa-times"})}),Object(se.jsx)("a",{onClick:function(e){e.preventDefault(),"meal"===c&&n(function(e){var t=D.getState().activity.data[e];return{type:"MEAL_FORM/EDIT",payload:Object(g.a)(Object(g.a)({edit:!0,show:!0},t),{},{timeString:we(t.time),dateString:ge(t.time)})}}(r)),"healthCheck"===c&&n(function(e){var t=D.getState().activity.data[e];return{type:"HEALTH_CHECK_FORM/EDIT",payload:Object(g.a)(Object(g.a)({edit:!0,show:!0},t),{},{timeString:we(t.time),dateString:ge(t.time)})}}(r))},href:"#",children:Object(se.jsx)("i",{style:{marginLeft:"10px"},className:"fas fa-pencil-alt"})})]})}me()().format(),me.a.extend(ve.a);n(80);function Se(e){var t,n=e.entry,a=n.ingredients,r=n.mealType,c=n.time;return Object(se.jsx)(ue.a,{className:"entry-container",fluid:!0,children:Object(se.jsxs)(i.a,{children:[Object(se.jsx)(o.a,{xs:"auto",className:"time-container",children:me.a.unix(c).format("h:mm A")}),Object(se.jsx)(o.a,{xs:!0,className:"entry-data-container meal-entry-container",children:Object(se.jsxs)(i.a,{children:[Object(se.jsxs)(o.a,{children:[Object(se.jsx)(i.a,{className:"entry-heading",children:Object(se.jsx)(o.a,{children:Object(se.jsxs)("h5",{children:[Object(se.jsx)("span",{className:"emoji",children:(t=r,{Breakfast:"\ud83c\udf73",Lunch:"\ud83e\udd6a",Dessert:"\ud83e\uddc1",Snack:"\ud83c\udf47",Dinner:"\ud83c\udf74",Drink:"\ud83e\udd64",HealthCheck:"\u2764\ufe0f"}[t])}),r]})})}),Object(se.jsxs)(i.a,{className:"entry-section",children:[Object(se.jsx)(o.a,{xs:"auto",children:Object(se.jsx)("div",{className:"section-title",children:"Ingredients:"})}),Object(se.jsx)(o.a,{xs:!0,children:a.map((function(e,t){return Object(se.jsx)(fe,{text:e.name,color:"red"},t)}))})]})]}),Object(se.jsx)(o.a,{className:"manage-entry-col",xs:"auto",children:Object(se.jsx)(ke,{entry:n})})]})})]})})}function Te(e){var t=e.entry,n=t.symptoms,a=(t.type,t.time);return Object(se.jsx)(ue.a,{className:"entry-container",fluid:!0,children:Object(se.jsxs)(i.a,{children:[Object(se.jsx)(o.a,{xs:"auto",className:"time-container",children:me.a.unix(a).format("h:mm A")}),Object(se.jsx)(o.a,{xs:!0,className:"entry-data-container health-check-entry-container",children:Object(se.jsxs)(i.a,{children:[Object(se.jsxs)(o.a,{children:[Object(se.jsx)(i.a,{className:"entry-heading",children:Object(se.jsx)(o.a,{children:Object(se.jsxs)("h5",{children:[Object(se.jsx)("span",{className:"emoji",children:"\u2764\ufe0f"}),"Wellness Check"]})})}),Object(se.jsxs)(i.a,{className:"entry-section",children:[Object(se.jsx)(o.a,{xs:"auto",children:Object(se.jsx)("div",{className:"section-title",children:"Symptoms:"})}),Object(se.jsx)(o.a,{xs:!0,children:n.map((function(e,t){return Object(se.jsx)(fe,{text:e.description,color:"green"},t)}))})]})]}),Object(se.jsx)(o.a,{xs:"auto",className:"manage-entry-col",children:Object(se.jsx)(ke,{entry:t})})]})})]})})}n(121);function Me(e){var t=e.entries,n=e.index;return Object(se.jsxs)("div",{children:[n>0&&Object(se.jsx)("hr",{}),Object(se.jsx)(ue.a,{fluid:!0,className:"date-block-container",children:Object(se.jsxs)(i.a,{children:[Object(se.jsx)(o.a,{xs:1,className:"date-col",children:Object(se.jsx)("div",{className:"date-container",children:Object(se.jsx)("div",{children:t[0].date})})}),Object(se.jsx)(o.a,{children:t.map((function(e){return"meal"===e.type?Object(se.jsx)(Se,{entry:e},e._id):"healthCheck"===e.type?Object(se.jsx)(Te,{entry:e},e._id):null}))})]})})]})}n(122);function Re(e){var t=Object(u.b)();return Object(se.jsxs)("div",{className:"add-buttons-container",children:[Object(se.jsxs)(l.a,{onClick:function(){t((console.log("new meal action"),{type:"MEAL_FORM/NEW",payload:{new:!0,show:!0,timeString:we(),dateString:ge()}}))},className:"button-light-brown",variant:"default",children:[Object(se.jsx)("i",{className:"fas fa-plus"})," Add Meal"]}),Object(se.jsxs)(l.a,{onClick:function(){t((console.log("new meal action"),{type:"HEALTH_CHECK_FORM/NEW",payload:{new:!0,show:!0,timeString:we(),dateString:ge()}}))},className:"button-light-brown",variant:"default",children:[Object(se.jsx)("i",{className:"fas fa-plus"})," Add Wellness Check"]})]})}var _e=n(69),Ie=n(101);n(144);function He(e){var t=e.defaultInputValue,n=e.submit,r=e.placeholder,c=e.apiEndpoint,s=e.allowNewItems,i=e.suggestions,o=e.clearOnSubmit,l=Object(a.useState)(!1),u=Object(ne.a)(l,2),d=u[0],b=u[1],O=Object(a.useState)([]),p=Object(ne.a)(O,2),m=p[0],f=p[1],x=Object(a.useState)([]),v=Object(ne.a)(x,2),y=v[0],g=v[1];function w(){return(w=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=4;break}f(i),e.next=13;break;case 4:return b(!0),t=ce.a.startCase(ce.a.lowerCase(t)),n="suggestions/".concat(c,"/").concat(t),e.t0=f,e.next=10,V(n);case 10:e.t1=e.sent,(0,e.t0)(e.t1),b(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){if(!(e.length<=0)){var t=e[0],a=!1;"object"===typeof t&&(t=t.label,a=!0),t=ce.a.startCase(ce.a.lowerCase(t)),s&&a&&function(e){E.apply(this,arguments)}(t),n(t),o&&g([""])}}function E(){return(E=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(c,{value:t});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(se.jsx)(Ie.a,{selectHintOnEnter:!0,id:"autocomplete-input",minLength:1,allowNew:s,delay:100,newSelectionPrefix:"Add a new item: ",isLoading:d,options:m,selected:y,placeholder:r,onChange:function(e){g(e),N(e)},onSearch:function(e){return w.apply(this,arguments)},defaultInputValue:t||""})}n(145);function Le(e){var t=e.onClick;return Object(se.jsx)("div",{className:"ingredient-pill",children:Object(se.jsx)("div",{onClick:t,className:"pill-primary",children:e.primaryText})})}n(146);function Ae(e){var t=Object(a.useState)(!1),n=Object(ne.a)(t,2),r=n[0],c=n[1],d=Object(u.c)((function(e){return e.mealForm})),b=Object(u.b)();function O(){return p.apply(this,arguments)}function p(){return(p=Object(h.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c(!0),t=ye(d.dateString,d.timeString),n={ingredients:d.ingredients.map((function(e){return e.name})),type:d.mealType,time:t},!d.new){e.next=7;break}return e.next=7,B("activity/meals",n);case 7:if(!d.edit){e.next=10;break}return e.next=10,K("activity/meals/"+d._id,n);case 10:c(!1),m(),b(Ee()),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),c(!1),m();case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function m(){return f.apply(this,arguments)}function f(){return(f=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b({type:"MEAL_FORM/CLOSE"});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(se.jsxs)(ae.a,{show:d.show,onHide:m,children:[Object(se.jsxs)(ae.a.Header,{closeButton:!0,children:[d.edit&&Object(se.jsx)(ae.a.Title,{children:"Edit Meal"}),d.new&&Object(se.jsx)(ae.a.Title,{children:"Post New Meal"})]}),Object(se.jsx)(ae.a.Body,{children:Object(se.jsxs)("div",{className:"meal-form-container",children:[Object(se.jsx)(i.a,{children:Object(se.jsx)(o.a,{xs:12,children:Object(se.jsx)(He,{submit:function(e){b(Ne({mealType:e}))},suggestions:["Breakfast","Lunch","Dinner","Snack","Dessert","Drink"],defaultInputValue:d.mealType,placeholder:"Meal Type (ie: Breakfast, Lunch, Dinner)"})})}),Object(se.jsxs)(i.a,{children:[Object(se.jsx)(o.a,{xs:6,children:Object(se.jsx)(s.a.Control,{type:"date",value:d.dateString,onChange:function(e){b(Ne({dateString:e.target.value}))}})}),Object(se.jsx)(o.a,{xs:6,children:Object(se.jsx)(s.a.Control,{type:"time",value:d.timeString,onChange:function(e){b(Ne({timeString:e.target.value}))}})})]}),Object(se.jsx)(i.a,{children:Object(se.jsx)(o.a,{children:Object(se.jsx)(He,{submit:function(e){e=ce.a.startCase(ce.a.lowerCase(e)),d.ingredients.map((function(e){return e.name})).includes(e)||b(Ne({ingredients:[].concat(Object(_e.a)(d.ingredients),[{name:e}])}))},apiEndpoint:"ingredients",clearOnSubmit:!0,placeholder:"Add Ingredients One at a Time"})})}),Object(se.jsx)("div",{className:"ingredient-list",children:d.ingredients.map((function(e){return Object(se.jsx)(Le,{onClick:function(){b({type:"MEAL_FORM/DELETE_INGREDIENT",payload:e})},primaryText:e.name},e.id)}))})]})}),Object(se.jsxs)(ae.a.Footer,{children:[Object(se.jsx)(l.a,{variant:"default",onClick:m,children:"Cancel"}),d.new&&Object(se.jsx)(l.a,{className:"button-light-green",disabled:r,variant:"default",onClick:O,children:r?"Posting":"Post Meal"}),d.edit&&Object(se.jsx)(l.a,{className:"button-light-green",disabled:r,variant:"default",onClick:O,children:r?"Saving":"Save Changes"})]})]})}var Fe=n(97),De=n.n(Fe),Ue=n(98),Ge=n.n(Ue);me()().format(),me.a.extend(De.a),me.a.extend(Ge.a),me.a.extend(ve.a);var Pe=function(e){var t;return console.log("building feed array"),(t=e,Object.entries(t).map((function(e){var t=Object(ne.a)(e,2),n=(t[0],t[1]);return Object(g.a)({},n)}))).sort((function(e,t){return t.time-e.time})).reduce((function(e,t,n,a){return t.date=function(e){var t=me.a.unix(e);if(t.isYesterday())return"Yesterday";if(t.isToday())return"Today";var n=me()().subtract(1,"week");return t.isAfter(n)?t.format("dddd"):t.format("MMM DD")}(t.time),0===n?(e.push([t]),e):a[n-1].date===t.date?(e[e.length-1].unshift(t),e):(e.push([t]),e)}),[])},Ve=n(99);n(147);function Ye(){var e=Object(a.useState)(!1),t=Object(ne.a)(e,2),n=t[0],r=t[1],c=Object(u.c)((function(e){return e.healthCheckForm})),d=Object(u.b)();function b(){d({type:"HEALTH_CHECK_FORM/CLOSE"})}function O(e){d(Ce({mood:e}))}function p(){return m.apply(this,arguments)}function m(){return(m=Object(h.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r(!0),t=ye(c.dateString,c.timeString),n={symptoms:c.symptoms.map((function(e){return e.description})),mood:c.mood,time:t},!c.new){e.next=7;break}return e.next=7,B("activity/health-checks",n);case 7:if(!c.edit){e.next=10;break}return e.next=10,K("activity/health-checks/"+c._id,n);case 10:r(!1),b(),d(Ee()),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),r(!1),b();case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}return Object(se.jsxs)(ae.a,{show:c.show,onHide:b,children:[Object(se.jsxs)(ae.a.Header,{closeButton:!0,children:[c.edit&&Object(se.jsx)(ae.a.Title,{children:"Edit Wellness Check"}),c.new&&Object(se.jsx)(ae.a.Title,{children:"Post New Wellness Check"})]}),Object(se.jsx)(ae.a.Body,{children:Object(se.jsxs)("div",{className:"health-check-form-container",children:[Object(se.jsxs)(i.a,{children:[Object(se.jsx)(o.a,{xs:6,children:Object(se.jsx)(s.a.Control,{type:"date",name:"date",value:c.dateString,onChange:function(e){d(Ce({dateString:e.target.value}))}})}),Object(se.jsx)(o.a,{xs:6,children:Object(se.jsx)(s.a.Control,{type:"time",name:"time",value:c.timeString,onChange:function(e){d(Ce({timeString:e.target.value}))}})})]}),Object(se.jsx)(i.a,{children:Object(se.jsx)(o.a,{xs:12,children:Object(se.jsxs)(Ve.a,{style:{display:"flex"},children:[Object(se.jsx)(l.a,{onClick:function(){return O(1)},className:"mood-button",variant:1===c.mood?"secondary":"light",children:"Grumpy"}),Object(se.jsx)(l.a,{onClick:function(){return O(2)},className:"mood-button",variant:2===c.mood?"secondary":"light",children:"Neutral"}),Object(se.jsx)(l.a,{onClick:function(){return O(3)},className:"mood-button",variant:3===c.mood?"secondary":"light",children:"Upbeat"})]})})}),Object(se.jsx)(i.a,{children:Object(se.jsx)(o.a,{children:Object(se.jsx)(He,{submit:function(e){e=ce.a.startCase(ce.a.lowerCase(e)),console.log(c.symptoms),c.symptoms.map((function(e){return e.description})).includes(e)||d(Ce({symptoms:[].concat(Object(_e.a)(c.symptoms),[{description:e}])}))},clearOnSubmit:!0,placeholder:"Add Symptoms One at a Time",apiEndpoint:"symptoms"})})}),Object(se.jsx)("div",{className:"symptom-list",children:c.symptoms.map((function(e,t){return Object(se.jsx)(Le,{onClick:function(){d({type:"HEALTH_CHECK_FORM/DELETE_SYMPTOM",payload:e})},index:t,primaryText:e.description},t)}))})]})}),Object(se.jsxs)(ae.a.Footer,{children:[Object(se.jsx)(l.a,{variant:"default",onClick:b,children:"Cancel"}),c.new&&Object(se.jsx)(l.a,{className:"button-light-green",disabled:n,variant:"default",onClick:p,children:n?"Posting":"Post Health Check"}),c.edit&&Object(se.jsx)(l.a,{className:"button-light-green",disabled:n,variant:"default",onClick:p,children:n?"Saving":"Save Changes"})]})]})}var Be=n(100);function We(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e})),r=!n.activity.loading;return Object(a.useEffect)((function(){t(Ee())}),[n.view]),Object(se.jsx)("div",{className:"activity-container",children:r?Object(se.jsxs)("div",{children:[Object(se.jsx)(Re,{}),Object(se.jsx)(Ae,{}),Object(se.jsx)(Ye,{}),Object(se.jsx)("hr",{}),Pe(n.activity.data).map((function(e,t){return Object(se.jsx)(Me,{index:t,entries:e},t)}))]}):Object(se.jsx)(Be.a,{animation:"border",className:"loading-spinner"})})}function Ke(e){var t=Object(u.c)((function(e){return e.view}));return Object(se.jsxs)("div",{style:{position:"relative"},children:[Object(se.jsx)(Oe,{}),t.activity.active&&Object(se.jsx)(We,{})]})}var Je=function(){var e=Object(u.c)((function(e){return e.UserState})),t=Object(u.b)();return Object(a.useEffect)((function(){return t(Z())}),[]),Object(se.jsxs)("div",{children:[Object(se.jsx)(he,{}),e.isLoggedIn&&Object(se.jsx)(Ke,{})]})};n(148);c.a.render(Object(se.jsx)(u.a,{store:D,children:Object(se.jsx)(Je,{})}),document.getElementById("root"))},80:function(e,t,n){}},[[149,1,2]]]);
//# sourceMappingURL=main.50bc7ee4.chunk.js.map