(this["webpackJsonpmuef-test"]=this["webpackJsonpmuef-test"]||[]).push([[5],{486:function(e,t,n){"use strict";var a=n(7),i=n(0),o=n.n(i),s=n(11),r=n.n(s),c=n(18),l=n(17),h=n(1),d=n.n(h),p=n(10),u=n(36),m=n(25),f=n.n(m),g=n(97),O=n(4),b=n(27);var v={children:d.a.node.isRequired,popperClassName:d.a.string,placement:d.a.string,placementPrefix:d.a.string,arrowClassName:d.a.string,hideArrow:d.a.bool,tag:O.p,isOpen:d.a.bool.isRequired,cssModule:d.a.object,offset:d.a.oneOfType([d.a.string,d.a.number]),fallbackPlacement:d.a.oneOfType([d.a.string,d.a.array]),flip:d.a.bool,container:O.q,target:O.q.isRequired,modifiers:d.a.object,boundariesElement:d.a.oneOfType([d.a.string,O.a]),onClosed:d.a.func,fade:d.a.bool,transition:d.a.shape(b.a.propTypes)},E={boundariesElement:"scrollParent",placement:"auto",hideArrow:!1,isOpen:!1,offset:0,fallbackPlacement:"flip",flip:!0,container:"body",modifiers:{},onClosed:function(){},fade:!0,transition:Object(u.a)({},b.a.defaultProps)},T=function(e){function t(t){var n;return(n=e.call(this,t)||this).setTargetNode=n.setTargetNode.bind(Object(c.a)(n)),n.getTargetNode=n.getTargetNode.bind(Object(c.a)(n)),n.getRef=n.getRef.bind(Object(c.a)(n)),n.onClosed=n.onClosed.bind(Object(c.a)(n)),n.state={isOpen:t.isOpen},n}Object(l.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null};var n=t.prototype;return n.componentDidUpdate=function(){this._element&&this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus&&this._element.childNodes[0].focus()},n.setTargetNode=function(e){this.targetNode="string"===typeof e?Object(O.i)(e):e},n.getTargetNode=function(){return this.targetNode},n.getContainerNode=function(){return Object(O.i)(this.props.container)},n.getRef=function(e){this._element=e},n.onClosed=function(){this.props.onClosed(),this.setState({isOpen:!1})},n.renderChildren=function(){var e=this.props,t=e.cssModule,n=e.children,i=e.isOpen,s=e.flip,c=(e.target,e.offset),l=e.fallbackPlacement,h=e.placementPrefix,d=e.arrowClassName,m=e.hideArrow,f=e.popperClassName,v=e.tag,E=(e.container,e.modifiers),T=e.boundariesElement,y=(e.onClosed,e.fade),w=e.transition,C=e.placement,j=Object(p.a)(e,["cssModule","children","isOpen","flip","target","offset","fallbackPlacement","placementPrefix","arrowClassName","hideArrow","popperClassName","tag","container","modifiers","boundariesElement","onClosed","fade","transition","placement"]),N=Object(O.l)(r()("arrow",d),t),_=Object(O.l)(r()(f,h?h+"-auto":""),this.props.cssModule),D=Object(u.a)({offset:{offset:c},flip:{enabled:s,behavior:l},preventOverflow:{boundariesElement:T}},E),k=Object(u.a)({},b.a.defaultProps,{},w,{baseClass:y?w.baseClass:"",timeout:y?w.timeout:0});return o.a.createElement(b.a,Object(a.a)({},k,j,{in:i,onExited:this.onClosed,tag:v}),o.a.createElement(g.a,{referenceElement:this.targetNode,modifiers:D,placement:C},(function(e){var t=e.ref,a=e.style,i=e.placement,s=e.arrowProps;return o.a.createElement("div",{ref:t,style:a,className:_,"x-placement":i},n,!m&&o.a.createElement("span",{ref:s.ref,className:N,style:s.style}))})))},n.render=function(){return this.setTargetNode(this.props.target),this.state.isOpen?"inline"===this.props.container?this.renderChildren():f.a.createPortal(o.a.createElement("div",{ref:this.getRef},this.renderChildren()),this.getContainerNode()):null},t}(o.a.Component);T.propTypes=v,T.defaultProps=E;var y=T,w={placement:d.a.oneOf(O.b),target:O.q.isRequired,container:O.q,isOpen:d.a.bool,disabled:d.a.bool,hideArrow:d.a.bool,boundariesElement:d.a.oneOfType([d.a.string,O.a]),className:d.a.string,innerClassName:d.a.string,arrowClassName:d.a.string,popperClassName:d.a.string,cssModule:d.a.object,toggle:d.a.func,autohide:d.a.bool,placementPrefix:d.a.string,delay:d.a.oneOfType([d.a.shape({show:d.a.number,hide:d.a.number}),d.a.number]),modifiers:d.a.object,offset:d.a.oneOfType([d.a.string,d.a.number]),innerRef:d.a.oneOfType([d.a.func,d.a.string,d.a.object]),trigger:d.a.string,fade:d.a.bool,flip:d.a.bool},C={show:0,hide:50},j={isOpen:!1,hideArrow:!1,autohide:!1,delay:C,toggle:function(){},trigger:"click",fade:!0};function N(e,t){return t&&(e===t||t.contains(e))}function _(e,t){return void 0===t&&(t=[]),t&&t.length&&t.find((function(t){return N(e,t)}))}var D=function(e){function t(t){var n;return(n=e.call(this,t)||this)._targets=[],n.currentTargetElement=null,n.addTargetEvents=n.addTargetEvents.bind(Object(c.a)(n)),n.handleDocumentClick=n.handleDocumentClick.bind(Object(c.a)(n)),n.removeTargetEvents=n.removeTargetEvents.bind(Object(c.a)(n)),n.toggle=n.toggle.bind(Object(c.a)(n)),n.showWithDelay=n.showWithDelay.bind(Object(c.a)(n)),n.hideWithDelay=n.hideWithDelay.bind(Object(c.a)(n)),n.onMouseOverTooltipContent=n.onMouseOverTooltipContent.bind(Object(c.a)(n)),n.onMouseLeaveTooltipContent=n.onMouseLeaveTooltipContent.bind(Object(c.a)(n)),n.show=n.show.bind(Object(c.a)(n)),n.hide=n.hide.bind(Object(c.a)(n)),n.onEscKeyDown=n.onEscKeyDown.bind(Object(c.a)(n)),n.getRef=n.getRef.bind(Object(c.a)(n)),n.state={isOpen:t.isOpen},n._isMounted=!1,n}Object(l.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this.updateTarget()},n.componentWillUnmount=function(){this._isMounted=!1,this.removeTargetEvents(),this._targets=null,this.clearShowTimeout(),this.clearHideTimeout()},t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null},n.onMouseOverTooltipContent=function(){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._hideTimeout&&this.clearHideTimeout(),this.state.isOpen&&!this.props.isOpen&&this.toggle())},n.onMouseLeaveTooltipContent=function(e){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._showTimeout&&this.clearShowTimeout(),e.persist(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide")))},n.onEscKeyDown=function(e){"Escape"===e.key&&this.hide(e)},n.getRef=function(e){var t=this.props.innerRef;t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),this._popover=e},n.getDelay=function(e){var t=this.props.delay;return"object"===typeof t?isNaN(t[e])?C[e]:t[e]:t},n.show=function(e){if(!this.props.isOpen){if(this.clearShowTimeout(),this.currentTargetElement=e?e.currentTarget||e.target:null,e&&e.composedPath&&"function"===typeof e.composedPath){var t=e.composedPath();this.currentTargetElement=t&&t[0]||this.currentTargetElement}this.toggle(e)}},n.showWithDelay=function(e){this._hideTimeout&&this.clearHideTimeout(),this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay("show"))},n.hide=function(e){this.props.isOpen&&(this.clearHideTimeout(),this.currentTargetElement=null,this.toggle(e))},n.hideWithDelay=function(e){this._showTimeout&&this.clearShowTimeout(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide"))},n.clearShowTimeout=function(){clearTimeout(this._showTimeout),this._showTimeout=void 0},n.clearHideTimeout=function(){clearTimeout(this._hideTimeout),this._hideTimeout=void 0},n.handleDocumentClick=function(e){var t=this.props.trigger.split(" ");t.indexOf("legacy")>-1&&(this.props.isOpen||_(e.target,this._targets))?(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen&&!N(e.target,this._popover)?this.hideWithDelay(e):this.props.isOpen||this.showWithDelay(e)):t.indexOf("click")>-1&&_(e.target,this._targets)&&(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen?this.hideWithDelay(e):this.showWithDelay(e))},n.addEventOnTargets=function(e,t,n){this._targets.forEach((function(a){a.addEventListener(e,t,n)}))},n.removeEventOnTargets=function(e,t,n){this._targets.forEach((function(a){a.removeEventListener(e,t,n)}))},n.addTargetEvents=function(){if(this.props.trigger){var e=this.props.trigger.split(" ");-1===e.indexOf("manual")&&((e.indexOf("click")>-1||e.indexOf("legacy")>-1)&&document.addEventListener("click",this.handleDocumentClick,!0),this._targets&&this._targets.length&&(e.indexOf("hover")>-1&&(this.addEventOnTargets("mouseover",this.showWithDelay,!0),this.addEventOnTargets("mouseout",this.hideWithDelay,!0)),e.indexOf("focus")>-1&&(this.addEventOnTargets("focusin",this.show,!0),this.addEventOnTargets("focusout",this.hide,!0)),this.addEventOnTargets("keydown",this.onEscKeyDown,!0)))}},n.removeTargetEvents=function(){this._targets&&(this.removeEventOnTargets("mouseover",this.showWithDelay,!0),this.removeEventOnTargets("mouseout",this.hideWithDelay,!0),this.removeEventOnTargets("keydown",this.onEscKeyDown,!0),this.removeEventOnTargets("focusin",this.show,!0),this.removeEventOnTargets("focusout",this.hide,!0)),document.removeEventListener("click",this.handleDocumentClick,!0)},n.updateTarget=function(){var e=Object(O.i)(this.props.target,!0);e!==this._targets&&(this.removeTargetEvents(),this._targets=e?Array.from(e):[],this.currentTargetElement=this.currentTargetElement||this._targets[0],this.addTargetEvents())},n.toggle=function(e){return this.props.disabled||!this._isMounted?e&&e.preventDefault():this.props.toggle(e)},n.render=function(){if(!this.props.isOpen)return null;this.updateTarget();var e=this.props,t=e.className,n=e.cssModule,i=e.innerClassName,s=e.isOpen,r=e.hideArrow,c=e.boundariesElement,l=e.placement,h=e.placementPrefix,d=e.arrowClassName,p=e.popperClassName,u=e.container,m=e.modifiers,f=e.offset,g=e.fade,b=e.flip,v=Object(O.m)(this.props,Object.keys(w)),E=Object(O.l)(p,n),T=Object(O.l)(i,n);return o.a.createElement(y,{className:t,target:this.currentTargetElement||this._targets[0],isOpen:s,hideArrow:r,boundariesElement:c,placement:l,placementPrefix:h,arrowClassName:d,popperClassName:E,container:u,modifiers:m,offset:f,cssModule:n,fade:g,flip:b},o.a.createElement("div",Object(a.a)({},v,{ref:this.getRef,className:T,role:"tooltip",onMouseOver:this.onMouseOverTooltipContent,onMouseLeave:this.onMouseLeaveTooltipContent,onKeyDown:this.onEscKeyDown})))},t}(o.a.Component);D.propTypes=w,D.defaultProps=j;var k=D,x=function(e){var t=r()("tooltip","show",e.popperClassName),n=r()("tooltip-inner",e.innerClassName);return o.a.createElement(k,Object(a.a)({},e,{popperClassName:t,innerClassName:n}))};x.propTypes=w,x.defaultProps={placement:"top",autohide:!0,placementPrefix:"bs-tooltip",trigger:"hover focus"};t.a=x},489:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(0),o=n.n(i),s=n(53),r=n(477),c=n(486),l=n(479),h=n(480),d=n(474),p=n(475),u=n(476);t.default=Object(s.b)((function(e){return{score:e}}))((function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),s=n[0],m=n[1],f=e.mode,g=e.index,O="".concat(f).concat(g),b=function(t){var n=t.target.id,a=t.target.value;e.dispatch({type:n,value:a})};return o.a.createElement("div",null,o.a.createElement(r.a,{color:"light"},o.a.createElement("h5",{style:{color:"#333333"}},e.question.question," ",o.a.createElement("span",{className:"toolip-question",id:O},"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21.")),o.a.createElement(c.a,{placement:"top",isOpen:s,target:O,toggle:function(){return m(!s)}},console.log(e),e.question.toolips),o.a.createElement(l.a,{className:"mt-4"},o.a.createElement(h.a,{md:2},o.a.createElement(d.a,{check:!0},o.a.createElement(p.a,{check:!0},o.a.createElement(u.a,{onChange:b,type:"radio",id:"question".concat(e.index),name:"".concat(e.index).concat(e.mode),value:0})," ",o.a.createElement("p",{style:{color:"#333333"}},"\u0e44\u0e21\u0e48\u0e40\u0e04\u0e22")))),o.a.createElement(h.a,{md:2},o.a.createElement(d.a,{check:!0},o.a.createElement(p.a,{check:!0},o.a.createElement(u.a,{onChange:b,type:"radio",id:"question".concat(e.index),name:"".concat(e.index).concat(e.mode),value:1})," ",o.a.createElement("p",{style:{color:"#333333"}},"1-2 \u0e04\u0e23\u0e31\u0e49\u0e07/\u0e40\u0e14\u0e37\u0e2d\u0e19")))),o.a.createElement(h.a,{md:2},o.a.createElement(d.a,{check:!0},o.a.createElement(p.a,{check:!0},o.a.createElement(u.a,{onChange:b,type:"radio",id:"question".concat(e.index),name:"".concat(e.index).concat(e.mode),value:2})," ",o.a.createElement("p",{style:{color:"#333333"}},"1-2 \u0e04\u0e23\u0e31\u0e49\u0e07/\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c")))),o.a.createElement(h.a,{md:2},o.a.createElement(d.a,{check:!0},o.a.createElement(p.a,{check:!0},o.a.createElement(u.a,{onChange:b,type:"radio",id:"question".concat(e.index),name:"".concat(e.index).concat(e.mode),value:3})," ",o.a.createElement("p",{style:{color:"#333333"}},"3-4 \u0e04\u0e23\u0e31\u0e49\u0e07/\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c")))),o.a.createElement(h.a,{md:2},o.a.createElement(d.a,{check:!0},o.a.createElement(p.a,{check:!0},o.a.createElement(u.a,{onChange:b,type:"radio",id:"question".concat(e.index),name:"".concat(e.index).concat(e.mode),value:4})," ",o.a.createElement("p",{style:{color:"#333333"}},"\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19")))))))}))}}]);
//# sourceMappingURL=5.7288cc1d.chunk.js.map