webpackJsonp([2],{0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),a=n(52),u=r(a),s=n(17),c=r(s),l=n(821),p=r(l),f=n(241),d=r(f),h=n(827),v=r(h),m=n(242),y=r(m);n(261),Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(void 0!==r&&null!==r){r=Object(r);for(var o=Object.keys(Object(r)),i=0,a=o.length;a>i;i++){var u=o[i],s=Object.getOwnPropertyDescriptor(r,u);void 0!==s&&s.enumerable&&(e[u]=r[u])}}}return e}});var g=c["default"].extend({init:function(){this.products=new d["default"],this.contacts=new v["default"],this.newCode=new y["default"],this.filterText="",window.app=this,u["default"].run(p["default"],u["default"].HistoryLocation,function(t){i["default"].render(i["default"].createElement(t,null),document.body)})}});g.init(),t.exports=g},805:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),a=n(14),u=r(a),s=u["default"].TextField,c=u["default"].Paper,l=i["default"].createClass({displayName:"CodeInput",handleChange:function(){this.props.onUserInput(this.refs.codesString.getValue())},render:function(){return i["default"].createElement(c,{zDepth:2,style:{width:"25%",marginTop:"10",marginLeft:"10","float":"left"}},i["default"].createElement("div",{style:{padding:30,minHeight:450}},i["default"].createElement(s,{type:"text",floatingLabelText:"Add Codes...",multiLine:!0,value:this.props.codesString,ref:"codesString",onChange:this.handleChange})))}});t.exports=l},806:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),a=n(14),u=r(a),s=u["default"].Paper,c=u["default"].RaisedButton,l=i["default"].createClass({displayName:"CodeOutput",getContent:function(){var t={display:"inline-block",height:"auto",width:"intrinsic",margin:2},e=this.props.codes.map(function(e,n){return i["default"].createElement(s,{zDepth:1,key:n,style:t},i["default"].createElement("p",{style:{padding:3}}," ",e," "))});return this.props.codes.length>0?i["default"].createElement("div",null,i["default"].createElement("div",{style:{display:"block",top:0,left:0}},i["default"].createElement(c,{onClick:this.props.submit,primary:!0,label:"Submit Codes"})),e):i["default"].createElement("p",null," Enter codes in the textbox to the left ")},render:function(){var t=this.getContent();return i["default"].createElement(s,{zDepth:2,style:{width:"72%",marginTop:"10",marginRight:"10","float":"right"}},i["default"].createElement("div",{style:{padding:30,minHeight:450}},i["default"].createElement("div",null,t)))}});t.exports=l},807:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),a=n(14),u=r(a),s=u["default"].Paper,c=u["default"].TextField,l=u["default"].FlatButton,p=i["default"].createClass({displayName:"EditProductForm",getInitialState:function(){var t=this.props.product,e=t.productId,n=t.title,r=t.isbn13,o=this.props.contact,i=o.mainEmail,a=o.cc;return{productId:e,title:n,isbn13:r,mainEmail:i,cc:a}},handleChange:function(t){var e=this.state;e[t.target.name]=t.target.value,this.setState(e)},handleSubmit:function(t){t.preventDefault();var e=this,n=this.refs.title.getValue(),r=this.refs.isbn13.getValue(),o=this.refs.mainEmail.getValue(),i=this.refs.cc.getValue(),a={title:n,isbn13:r},u={mainEmail:o,cc:i};e.props.product.save(a,{wait:!0,success:function(){e.props.contact.save(u,{wait:!0,success:function(){e.props.success()}})}})},render:function(){var t=this.state,e=t.title,n=t.isbn13,r=this.state,o=r.mainEmail,a=r.cc,u={display:"block"},p={padding:"20"};return i["default"].createElement(s,{zDepth:2,style:{width:"95%",marginTop:"30",marginRight:"auto",marginLeft:"auto"}},i["default"].createElement("form",{style:p,onSubmit:this.handleSubmit},i["default"].createElement("div",{style:u},i["default"].createElement(c,{type:"text",name:"title",ref:"title",floatingLabelText:"Title",defaultValue:e,onChange:this.handleChange})),i["default"].createElement("div",{style:u},i["default"].createElement(c,{type:"text",name:"isbn13",ref:"isbn13",floatingLabelText:"ISBN",defaultValue:n,onChange:this.handleChange})),i["default"].createElement("div",{style:u},i["default"].createElement(c,{type:"text",name:"mainEmail",ref:"mainEmail",floatingLabelText:"Main Contact Email",defaultValue:o,onChange:this.handleChange})),i["default"].createElement("div",{style:u},i["default"].createElement(c,{type:"text",name:"cc",ref:"cc",floatingLabelText:"CC Emails",defaultValue:a,onChange:this.handleChange})),i["default"].createElement(l,{label:"Submit"})))}});t.exports=p},813:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),a=n(805),u=r(a),s=n(806),c=r(s),l=n(825),p=r(l),f=n(14),d=r(f),h=d["default"].Paper,v=d["default"].Snackbar,m=i["default"].createClass({displayName:"AddCodes",getInitialState:function(){return{formattedCodes:[]}},handleUserInput:function(t){var e=this.format(t);this.setState({formattedCodes:e})},format:function(t){var e=t.split("\n").filter(function(t){return t}),n=e.map(function(t){return t.trim()});return n},submit:function(){var t=this,e=new p["default"];e.save({productId:this.props.productId,codes:t.state.formattedCodes},{wait:!0,isNew:!0,success:function(){t.notifySuccess()},error:function(e,n){t.notifyError(),console.log("error...",e,n)}})},notifySuccess:function(){this.refs.successSnackbar.show()},notifyError:function(){this.refs.errorSnackbar.show()},render:function(){var t=this.props.product,e=t.isbn13,n=t.title;return i["default"].createElement("div",null,i["default"].createElement(h,{zDepth:2,style:{width:"95%",marginRight:"auto",marginLeft:"auto"}},i["default"].createElement("h2",{className:"mui-font-style-headline",style:{textAlign:"center",padding:5}},"Add Codes for: ",n),i["default"].createElement("h4",{style:{textAlign:"center"}},e)),i["default"].createElement(u["default"],{onUserInput:this.handleUserInput}),i["default"].createElement(c["default"],{codes:this.state.formattedCodes,submit:this.submit}),i["default"].createElement(v,{ref:"successSnackbar",message:"Codes added!"}),i["default"].createElement(v,{ref:"errorSnackbar",message:"ERROR! No Codes Added."}))}});t.exports=m},814:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(2),a=r(i),u=n(807),s=r(u),c=n(14),l=r(c),p=l["default"].Paper,f=l["default"].Snackbar,d=a["default"].createClass({displayName:"EditProduct",success:function(){this.refs.snackbar.show()},render:function(){var t=this.props.product,e=t.isbn13,n=t.title;return a["default"].createElement("div",null,a["default"].createElement(p,{zDepth:2,style:{width:"95%",marginRight:"auto",marginLeft:"auto"}},a["default"].createElement("h2",{className:"mui-font-style-headline",style:{textAlign:"center"}},"Edit: ",n),a["default"].createElement("h4",{style:{textAlign:"center"}},e)),a["default"].createElement(s["default"],o({},this.props,{success:this.success})),a["default"].createElement(f,{ref:"snackbar",message:"Edit Successful"}))}});t.exports=d},815:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),a=i["default"].createClass({displayName:"ProductStats",render:function(){var t=this.props.product,e=t.isbn13,n=t.title;return i["default"].createElement("div",null,i["default"].createElement("p",null,"Product Stats:"),i["default"].createElement("br",null),i["default"].createElement("p",null," ",e," "),i["default"].createElement("p",null," ",n," "))}});t.exports=a},821:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(823),a=r(i),u=n(824),s=r(u),c=n(814),l=r(c),p=n(813),f=r(p),d=n(815),h=r(d),v=n(822),m=r(v),y=n(239),g=r(y),b=n(2),x=r(b),E=n(52),C=r(E),w=n(14),T=r(w),O=n(162),_=r(O),N=T["default"].MenuItem,D=T["default"].LeftNav,S=T["default"].FlatButton,P=new T["default"].Styles.ThemeManager,j=C["default"].Route,M=C["default"].RouteHandler,k=C["default"].DefaultRoute,A=C["default"].NotFoundRoute,R=C["default"].Redirect,I=[{type:N.Types.LINK,payload:"changelog",text:"Changelog"},{type:N.Types.LINK,payload:"https://trello.com/b/9DTy6SXm/dispense",text:"Trello",target:"_blank"}],F=x["default"].createClass({displayName:"NotFound",render:function(){return x["default"].createElement("h1",null," No Route Found ")}}),L=x["default"].createClass({displayName:"App",mixins:[C["default"].State],contextTypes:{router:x["default"].PropTypes.func},childContextTypes:{muiTheme:x["default"].PropTypes.object},getChildContext:function(){return{muiTheme:P.getCurrentTheme()}},getInitialState:function(){return{location:"",isDocked:!1}},toMainSearch:function(){var t=this.context.router;t.transitionTo("mainSearch")},toAddProduct:function(){var t=this.context.router;t.transitionTo("addProduct")},feedback:function(){window.open("mailto:gbuler@wiley.com?subject=Dispense%20Feedback","_blank")},keyMap:function(){var t=this;return{esc:function(){t.toggleNav()}}},toggleNav:function(){this.refs.leftNav.toggle(),this.setState({isDocked:!this.state.isDocked}),document.body.style.overflow="auto"},render:function(){var t=this,e={height:"50",opacity:"0.9","float":"right"};return x["default"].createElement(_["default"],{keyMap:{esc:function(e){e.preventDefault(),t.toggleNav()},tab:function(t){t.preventDefault()},"shift+tab":function(t){t.preventDefault()}}},x["default"].createElement("div",null,x["default"].createElement("div",{style:{zIndex:10,position:"fixed",right:"0",top:"0"}},x["default"].createElement(S,{label:"Add New Product",style:e,onClick:this.toAddProduct,secondary:!0}),x["default"].createElement(S,{label:"Main Search",style:e,onClick:this.toMainSearch,secondary:!0}),x["default"].createElement(S,{label:"Feedback",style:e,onClick:this.feedback,secondary:!0})),x["default"].createElement("div",{style:{position:"relative",top:"50px"}},x["default"].createElement(M,o({},this.props,{toggleNav:this.toggleNav}))),x["default"].createElement(D,{ref:"leftNav",docked:this.state.isDocked,menuItems:I})))}});t.exports=x["default"].createElement(j,{name:"app",path:"/dispenseManager/",handler:L},x["default"].createElement(R,{from:"/dispenseManager",to:"/dispenseManager/"}),x["default"].createElement(j,{name:"mainSearch",handler:a["default"]}),x["default"].createElement(j,{name:"addProduct",handler:m["default"]}),x["default"].createElement(j,{name:"product",path:"product/:productId",handler:s["default"]},x["default"].createElement(j,{name:"editProduct",handler:l["default"]}),x["default"].createElement(j,{name:"addCodes",handler:f["default"]}),x["default"].createElement(j,{name:"productStats",handler:h["default"]}),x["default"].createElement(k,{handler:l["default"]})),x["default"].createElement(j,{name:"changelog",path:"changelog",handler:g["default"]}),x["default"].createElement(k,{handler:a["default"]}),x["default"].createElement(A,{handler:F}))},822:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),a=n(17),u=r(a),s=n(14),c=r(s),l=c["default"].TextField,p=c["default"].FlatButton,f=c["default"].Paper,d=c["default"].Snackbar,h=i["default"].createClass({displayName:"addProduct",handleSubmit:function(t){t.preventDefault();var e=this,n=this.refs.title.getValue(),r=this.refs.isbn13.getValue(),o=this.refs.contact.getValue(),i={title:n,isbn13:r},a={mainEmail:o};u["default"].products.create(i,{wait:!0,success:function(){u["default"].contacts.create(a,{wait:!0,success:function(){e.success()}})}})},success:function(){this.refs.snackbar.show()},getInitialState:function(){return{title:"",isbn13:"",contact:""}},handleChange:function(t){var e=this.state;e[t.target.name]=t.target.value,this.setState(e)},render:function(){var t={display:"block"},e={padding:20};return i["default"].createElement("div",null,i["default"].createElement(f,{zDepth:3,style:{width:"85%",marginRight:"auto",marginLeft:"auto"}},i["default"].createElement("form",{style:e,onSubmit:this.handleSubmit},i["default"].createElement("div",{style:t},i["default"].createElement(l,{type:"text",name:"title",ref:"title",floatingLabelText:"Title",onChange:this.handleChange})),i["default"].createElement("div",{style:t},i["default"].createElement(l,{type:"text",name:"isbn13",ref:"isbn13",floatingLabelText:"ISBN",onChange:this.handleChange})),i["default"].createElement("div",{style:t},i["default"].createElement(l,{type:"text",name:"contact",ref:"contact",floatingLabelText:"Contact",onChange:this.handleChange})),i["default"].createElement(p,{label:"Submit"}))),i["default"].createElement(d,{ref:"snackbar",message:"Product Added!"}))}});t.exports=h},823:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),a=n(52),u=r(a),s=n(17),c=r(s),l=n(240),p=r(l),f=u["default"].RouteHandler,d=i["default"].createClass({displayName:"MainSearch",contextTypes:{router:i["default"].PropTypes.func},render:function(){return i["default"].createElement("div",null,i["default"].createElement("header",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"50px",opacity:"0.8",backgroundColor:"white",zIndex:"4"}}),i["default"].createElement("div",null,i["default"].createElement(p["default"],{transitionTo:"product",toggleNav:this.props.toggleNav,products:c["default"].products}),i["default"].createElement(f,this.props)))}});t.exports=d},824:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(17),i=r(o),a=n(2),u=r(a),s=n(52),c=r(s),l=n(14),p=r(l),f=c["default"].RouteHandler,d=p["default"].FlatButton,h=u["default"].createClass({displayName:"ManageProduct",contextTypes:{router:u["default"].PropTypes.func},getInitialState:function(){return{productId:this.props.params.productId,contact:null,product:null}},componentDidMount:function(){var t=this;i["default"].contacts.getOrFetch(t.props.params.productId,{all:!0},function(e,n){e&&console.error("contact not found",e),t.setState({contact:n})}),i["default"].products.getOrFetch(t.props.params.productId,{all:!0},function(e,n){e&&console.error("model not found",e),t.setState({product:n})})},toEditProduct:function(){var t=this.state.productId,e=this.context.router;e.transitionTo("editProduct",{productId:t})},toAddCodes:function(){var t=this.state.productId,e=this.context.router;e.transitionTo("addCodes",{productId:t})},render:function(){var t={height:"50",opacity:"0.9","float":"right"};return this.state.product&&this.state.contact?u["default"].createElement("div",null,u["default"].createElement("div",{style:{position:"fixed",top:"0",left:"0",zIndex:"9"}},u["default"].createElement(d,{label:"Edit Product",style:t,onClick:this.toEditProduct,secondary:!0}),u["default"].createElement(d,{label:"Add Codes",style:t,onClick:this.toAddCodes,secondary:!0})),u["default"].createElement(f,this.state)):u["default"].createElement("div",null,"LOADING PRODUCT...")}});t.exports=h},825:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(93),i=r(o);t.exports=i["default"].extend({location:"availableCodes-collection/addCodes",initialize:function(){this.url="http://localhost:8080/api/"+this.location,console.log("url",this.url)},props:{productId:"any",codes:"array"},session:{},derived:{id:function(){return this.productId}}})},826:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(93),i=r(o);t.exports=i["default"].extend({props:{productId:"any",mainEmail:"string",cc:"string",lastEmailed:"string"},derived:{id:function(){return this.productId}}})},827:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(154),i=r(o),a=n(826),u=r(a);t.exports=i["default"].extend({model:u["default"],location:"contacts",initialize:function(){i["default"].prototype.initialize.call(this)}})}});
//# sourceMappingURL=dispenseManager.entry.js.map