(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,t,r){e.exports=r(73)},62:function(e,t,r){},64:function(e,t,r){},73:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(20),i=(r(62),r(7)),c=(r(64),r(25)),l=r(1),u=r(24),s=r(42),h=r(41),f=r(10),m=r(17),p=function(){var e=Object(l.l)(),t=Object(l.j)();return a.a.createElement(h.a,{expand:"lg",bg:"dark",variant:"dark",fixed:"top"},a.a.createElement(u.a,{fluid:!0},a.a.createElement(h.a.Brand,null,a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16"},a.a.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),a.a.createElement("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})),"STG Note-Taker"),a.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},a.a.createElement(s.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0},a.a.createElement(s.a.Item,null,a.a.createElement(c.b,{className:"nav-link ".concat("/"===t.pathname?"active":""),"aria-current":"page",to:"/"},"HOME")),a.a.createElement(s.a.Item,null,a.a.createElement(c.b,{className:"nav-link ".concat("/about"===t.pathname?"active":""),to:"/about"},"ABOUT"))),a.a.createElement(s.a,null,localStorage.getItem("authToken")?a.a.createElement(m.a,{onClick:function(){localStorage.removeItem("authToken"),e("/login")},className:"btn btn-primary mx-1"},"LOG OUT"):a.a.createElement(f.a,{className:"d-flex",role:"search"},a.a.createElement(c.b,{className:"btn btn-primary mx-1",to:"/login",role:"button"},"LOG IN"),a.a.createElement(c.b,{className:"btn btn-primary mx-1",to:"/signup",role:"button"},"SIGN UP"))))))},d=function(){return a.a.createElement("h5",null,"STG Note-Taker was developed by GangCao, Samuel Smith and Tyson Lannon in 2022 as project for a Software/Web Delvelopment Bootcamp!")},v=r(9),y=r(3),g=Object(n.createContext)(),b=function(e){var t=Object(n.useContext)(g).addNote,r=Object(n.useState)({title:"",description:"",tag:""}),o=Object(i.a)(r,2),c=o[0],l=o[1],s=function(e){l(Object(y.a)({},c,Object(v.a)({},e.target.name,e.target.value)))};return a.a.createElement(u.a,{className:"my-3",style:{width:"80%"}},a.a.createElement("h2",null,"Add a Note"),a.a.createElement(f.a,null,a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Title"),a.a.createElement(f.a.Control,{type:"text",value:c.title,id:"title",name:"title","aria-describedby":"emailHelp",minLength:2,required:!0,onChange:s})),a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Description"),a.a.createElement(f.a.Control,{type:"text",as:"textarea",rows:3,id:"description",name:"description",value:c.description,onChange:s})),a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Tags/Keywords"),a.a.createElement(f.a.Control,{type:"text",id:"tag",name:"tag",value:c.tag,onChange:s})),a.a.createElement(m.a,{type:"submit",variant:"primary",onClick:function(r){r.preventDefault(),t(c.title,c.description,c.tag),l({title:"",description:"",tag:""}),e.showAlert("Added new note successfully","success")}},"Save Note")))},w=r(43),E=function(e){var t=Object(n.useContext)(g).deleteNote,r=e.note,o=e.updateNote;return a.a.createElement(w.a,{defaultActiveKey:"1"},a.a.createElement(w.a.Item,{eventKey:"1"},a.a.createElement(w.a.Header,{style:{fontWeight:"bold"}},r.title),a.a.createElement(w.a.Body,null,a.a.createElement("p",null,r.description),a.a.createElement("i",{className:"fas fa-trash mx-2",onClick:function(){t(r._id),e.showAlert("Deleted succesfully","success")}}),a.a.createElement("i",{className:"fas fa-edit mx-2",onClick:function(){o(r)}}))))},x=function(e){var t=Object(l.l)(),r=Object(n.useContext)(g),o=r.notes,c=r.getNotes,s=r.editNote;Object(n.useEffect)(function(){localStorage.getItem("authToken")?c():t("/login")},[]);var h=Object(n.useRef)(null),p=Object(n.useRef)(null),d=Object(n.useState)({eid:"",etitle:"",edescription:"",etag:""}),b=Object(i.a)(d,2),w=b[0],x=b[1],L=function(e){h.current.click(),x({eid:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},O=function(e){x(Object(y.a)({},w,Object(v.a)({},e.target.name,e.target.value)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(m.a,{type:"button",ref:h,className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Launch demo modal"),a.a.createElement(u.a,{className:"modal fade",id:"exampleModal","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},a.a.createElement("div",{className:"modal-dialog"},a.a.createElement("div",{className:"modal-content"},a.a.createElement("div",{className:"modal-header"},a.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Edit Note"),a.a.createElement(m.a,{className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),a.a.createElement("div",{className:"modal-body"},a.a.createElement(f.a,null,a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Edit Title"),a.a.createElement(f.a.Control,{type:"text",minLength:3,required:!0,id:"etitle",name:"etitle",value:w.etitle,"aria-describedby":"emailHelp",onChange:O})),a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Edit Content"),a.a.createElement(f.a.Control,{type:"text",id:"edescription",name:"edescription",value:w.edescription,onChange:O})),a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Edit Tags/Keywords"),a.a.createElement(f.a.Control,{type:"text",id:"etag",name:"etag",value:w.etag,onChange:O})))),a.a.createElement("div",{className:"modal-footer"},a.a.createElement(m.a,{ref:p,variant:"secondary","data-bs-dismiss":"modal"},"Close"),a.a.createElement(m.a,{variant:"primary",disabled:w.etitle.length<3,onClick:function(){p.current.click(),s(w.eid,w.etitle,w.edescription,w.etag),e.showAlert("Note updated successfully!","success")}},"Update Note"))))),a.a.createElement("div",{className:"row my-3"},a.a.createElement("h2",null,"Your Notes"),0===o.length&&"No Notes to display",o.map(function(t){return a.a.createElement(E,{key:t._id,updateNote:L,showAlert:e.showAlert,note:t})}))))},L=function(e){var t=e.showAlert;return a.a.createElement("div",null,a.a.createElement("div",{className:"container",style:{width:"80%"}},a.a.createElement(x,{showAlert:t})),a.a.createElement(b,{showAlert:t}))},O=r(11);function N(){N=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(T){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new j(a||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var h={};function f(){}function m(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==t&&r.call(y,o)&&(d=y);var g=p.prototype=f.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var j=function(e){var t="http://localhost:5001",r=Object(n.useState)([]),o=Object(i.a)(r,2),c=o[0],l=o[1],u=function(){var e=Object(O.a)(N().mark(function e(){var r,n;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("authToken")}});case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(O.a)(N().mark(function e(r,n,a){var o,i;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("authToken")},body:JSON.stringify({title:r,description:n,tag:a})});case 2:return o=e.sent,e.next=5,o.json();case 5:i=e.sent,l(c.concat(i));case 7:case"end":return e.stop()}},e)}));return function(t,r,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(O.a)(N().mark(function e(r){var n,a;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(r),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("authToken")}});case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent,a=c.filter(function(e){return e._id!==r}),l(a);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(N().mark(function e(r,n,a,o){var i,u;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(r),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("authToken")},body:JSON.stringify({title:n,description:a,tag:o})});case 2:e.sent,i=JSON.parse(JSON.stringify(c)),u=0;case 5:if(!(u<i.length)){e.next=15;break}if(i[u]._id!==r){e.next=12;break}return i[u].title=n,i[u].description=a,i[u].tag=o,e.abrupt("break",15);case 12:u++,e.next=5;break;case 15:l(i);case 16:case"end":return e.stop()}},e)}));return function(t,r,n,a){return e.apply(this,arguments)}}();return a.a.createElement(g.Provider,{value:{notes:c,setNotes:l,addNote:s,deleteNote:h,editNote:f,getNotes:u}},e.children)},k=function(e){return a.a.createElement("div",{style:{height:"50px"}},e.alert&&a.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},a.a.createElement("strong",null,function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),":",e.alert.msg))};function S(){S=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(T){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var h={};function f(){}function m(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,o)&&(d=y);var g=p.prototype=f.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var T=function(e){var t=Object(n.useState)({email:"",password:""}),r=Object(i.a)(t,2),o=r[0],c=r[1],s=Object(l.l)(),h=function(){var t=Object(O.a)(S().mark(function t(r){var n,a;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,fetch("".concat("http://localhost:5001","/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,password:o.password})});case 3:return n=t.sent,t.next=6,n.json();case 6:(a=t.sent).success?(localStorage.setItem("authToken",a.authToken),s("/"),e.showAlert("Logged in successfully!","success")):e.showAlert("Invalid credentials!","danger");case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),p=function(e){c(Object(y.a)({},o,Object(v.a)({},e.target.name,e.target.value)))};return a.a.createElement(u.a,{className:"mt-3",style:{width:"70%"}},a.a.createElement(f.a,{onSubmit:h},a.a.createElement("h2",null,"Log In to Continue"),a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Email address"),a.a.createElement(f.a.Control,{type:"email",value:o.email,id:"email",name:"email",onChange:p,autoComplete:"off","aria-describedby":"emailHelp"}),a.a.createElement(f.a.Text,{id:"emailHelp",className:"tex-muted"},"We'll never share your email address with anyone")),a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Password"),a.a.createElement(f.a.Control,{type:"password",value:o.password,id:"password",name:"password",onChange:p,autoComplete:"off"})),a.a.createElement(m.a,{type:"submit",variant:"primary"},"Submit")))};function C(){C=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var h={};function f(){}function m(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,o)&&(d=y);var g=p.prototype=f.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var _=function(e){var t=Object(n.useState)({name:"",email:"",password:"",cpassword:""}),r=Object(i.a)(t,2),o=r[0],c=r[1],s=Object(n.useState)(""),h=Object(i.a)(s,2),p=h[0],d=h[1],g=Object(l.l)(),b=function(){var t=Object(O.a)(C().mark(function t(r){var n,a,i,c,l;return C().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),o.password===o.cpassword){t.next=5;break}d("Password does not match"),t.next=13;break;case 5:return n=o.name,a=o.email,i=o.password,t.next=8,fetch("".concat("http://localhost:5001","/api/auth/createuser"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:a,password:i})});case 8:return c=t.sent,t.next=11,c.json();case 11:(l=t.sent).success?(localStorage.setItem("authToken",l.authToken),g("/"),e.showAlert("Account created successfully!","success")):e.showAlert("Invalid details","danger");case 13:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),w=function(e){c(Object(y.a)({},o,Object(v.a)({},e.target.name,e.target.value)))};return a.a.createElement(u.a,{className:"mt-3",style:{width:"70%"}},a.a.createElement("h2",null,"Sign Up Here"),a.a.createElement(f.a,{onSubmit:b},a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Name"),a.a.createElement(f.a.Control,{type:"text",id:"name",name:"name",onChange:w,"aria-describedby":"emailHelp",minLength:3,required:!0})),a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Email address"),a.a.createElement(f.a.Control,{type:"email",id:"email",name:"email",onChange:w,"aria-describedby":"emailHelp",required:!0}),a.a.createElement(f.a.Text,{id:"emailHelp",className:"text-muted"},"We'll never share your email address with anyone")),a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Password"),a.a.createElement(f.a.Control,{type:"password",id:"password",name:"password",onChange:w,minLength:8,autoComplete:"off",required:!0}),a.a.createElement(f.a.Text,{id:"emailHelp",className:"text-muted"},"Password must be at least 8 characters")),a.a.createElement(f.a.Group,{className:"mb-3"},a.a.createElement(f.a.Label,null,"Confirm Password"),a.a.createElement(f.a.Control,{type:"password",id:"cpassword",name:"cpassword",onChange:w,minLength:8,autoComplete:"off",required:!0}),a.a.createElement(f.a.Text,{id:"confirmPwd",style:{color:"red"}},p)),a.a.createElement(m.a,{type:"submit",variant:"primary",disabled:o.password.length<8||o.cpassword.length<8},"Submit")))},G=(r(71),function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),r=t[0],o=t[1],u=function(e,t){o({msg:e,type:t}),setTimeout(function(){o(null)},2500)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null,a.a.createElement(c.a,null,a.a.createElement(p,null),a.a.createElement(k,{alert:r}),a.a.createElement("div",{className:"container"},a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",element:a.a.createElement(L,{showAlert:u})}),a.a.createElement(l.a,{path:"/about",element:a.a.createElement(d,null)}),a.a.createElement(l.a,{path:"/login",element:a.a.createElement(T,{showAlert:u})}),a.a.createElement(l.a,{path:"/signup",element:a.a.createElement(_,{showAlert:u})}))))))}),P=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,75)).then(function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),o(e),i(e)})};o.render(n.createElement(n.StrictMode,null,n.createElement(G,null)),document.getElementById("root")),P()}},[[54,3,2]]]);
//# sourceMappingURL=main.1e9a2075.chunk.js.map