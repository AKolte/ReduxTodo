(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{134:function(t,e,a){t.exports=a(277)},226:function(t,e,a){},227:function(t,e,a){},277:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),l=a(125),s=a.n(l),i=(a(226),a(15)),c=a(16),u=a(18),o=a(17),p=(a(227),function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props.taskData;return r.a.createElement("div",null,r.a.createElement("li",{className:"list-group-item "},r.a.createElement("input",{type:"checkbox",className:" ",onChange:this.props.handleStatusChange,checked:this.props.taskData.status,key:this.props.taskData.title}),t.title,r.a.createElement("input",{type:"button",className:"btn btn-danger",value:"Delete",onClick:this.props.handleDeleteTask})))}}]),a}(n.Component)),d=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",{className:"list-group"},this.props.tasks.filter((function(e){return t.props.handleFilterTasks(e)})).map((function(e){return r.a.createElement(p,{key:e.title,handleStatusChange:function(){return t.props.handleSwitchStatus(e)},handleDeleteTask:function(){return t.props.handleDeleteTask(e)},taskData:e})}))))}}]),a}(n.Component),f=a(132),h=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).addTask=function(t){t.preventDefault(),n.props.handleAddTask(n.state.inputValue),n.setState({inputValue:""})},n.state={inputValue:""},n}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("form",{onSubmit:this.addTask},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{onChange:function(e){return t.setState({inputValue:e.target.value})},type:"text",id:"newTaskTitle",className:"form-control",placeholder:"Add new Task",value:this.state.inputValue}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement(f.a,{type:"submit"},"Add")))))}}]),a}(n.Component),m=a(278),k=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"renderClassName",value:function(t,e){return t!==e?"default":"primary"}},{key:"render",value:function(){var t=this;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement(m.a,null,this.props.filters.map((function(e){return r.a.createElement(f.a,{bsStyle:t.renderClassName(t.props.filter,e),type:"button",onClick:function(){return t.props.handleUpdateFilter(e)},key:e},e)}))))}}]),a}(n.Component),b=a(48),E=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).filterTasks=function(e){var a=t.props.filter;return"All"===a||("Completed"===a?e.status:!e.status)},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(k,{style:{float:"left"},filter:this.props.filter,handleUpdateFilter:function(e){return t.props.updateFilter(e)},filters:this.props.filters}),r.a.createElement(h,{handleAddTask:function(e){""!==e.trim()&&t.props.addTask(e)}}),r.a.createElement(d,{tasks:this.props.tasks,handleFilterTasks:function(e){return t.filterTasks(e)},handleSwitchStatus:function(e){return t.props.switchStatus(e.id)},handleDeleteTask:function(e){return t.props.deleteTask(e.id)}}))}}]),a}(n.Component),v=Object(b.connect)((function(t){return{tasks:t.tasks,filter:t.filter,filters:t.filters}}),(function(t){return{addTask:function(e){return t(function(t){return{type:"TASK_ADDED",payload:{title:t}}}(e))},updateFilter:function(e){return t(function(t){return{type:"FILTER_CHANGE",payload:{filter:t}}}(e))},switchStatus:function(e){return t({type:"STATUS_CHANGE",payload:{id:e}})},deleteTask:function(e){return t({type:"TASK_DELETED",payload:{id:e}})}}}))(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(72),O=a(131),T=a(12),j=2,D={filter:"All",filters:["All","Completed","Pending"],tasks:[{id:0,title:"Bake Cake"},{id:1,title:"Walk the Dog"}]};var S=Object(y.createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TASK_ADDED":return Object(T.a)(Object(T.a)({},t),{},{tasks:[].concat(Object(O.a)(t.tasks),[{id:j++,title:e.payload.title,status:!1}])});case"TASK_DELETED":return Object(T.a)(Object(T.a)({},t),{},{tasks:t.tasks.filter((function(t){return t.id!==e.payload.id}))});case"STATUS_CHANGE":return Object(T.a)(Object(T.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===e.payload.id?Object(T.a)(Object(T.a)({},t),{},{status:!t.status}):t}))});case"FILTER_CHANGE":return Object(T.a)(Object(T.a)({},t),{},{filter:e.payload.filter});default:return t}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(b.Provider,{store:S},r.a.createElement("div",null,r.a.createElement("header",null),r.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.30eadbb8.chunk.js.map