(this["webpackJsonpcpp-code-compare"]=this["webpackJsonpcpp-code-compare"]||[]).push([[0],{26:function(t,e,i){},45:function(t,e,i){},47:function(t,e,i){},48:function(t,e,i){},50:function(t,e,i){"use strict";i.r(e);var s=i(2),n=i.n(s),a=i(20),o=i.n(a),c=(i(26),i(21)),r=i(4),h=i(5),d=i(1),l=i(7),u=i(6),p=i(10),m=i.n(p),g=(i(45),i(11)),b=i.n(g),j=(i(47),i(48),i(0)),v=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var s;return Object(r.a)(this,i),(s=e.call(this,t)).state={title:s.props.title,content:s.props.code,helpText:s.props.help,html:"",scrollTop:0,rotated:!1},s.onChangeText=s.onChangeText.bind(Object(d.a)(s)),s.highlight=s.highlight.bind(Object(d.a)(s)),s.coupleScroll=s.coupleScroll.bind(Object(d.a)(s)),s.pCode=n.a.createRef(),s.scroller=n.a.createRef(),s.coupleDiv=n.a.createRef(),s}return Object(h.a)(i,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"coupleScroll",value:function(t){this.coupleDiv.current.scrollTop=this.scroller.current.scrollTop,this.coupleDiv.current.scrollLeft=this.scroller.current.scrollLeft}},{key:"highlight",value:function(){var t=b.a.highlight(this.state.content,b.a.languages.js,"js");this.pCode.current.innerHTML=t}},{key:"onChangeText",value:function(t){var e=this;this.setState({content:t.target.value},(function(){e.highlight(),e.props.update(e.props.id,t.target.value)}))}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"code-box",style:{width:this.props.width?this.props.width:"100%"},children:[Object(j.jsxs)("div",{className:"box-title",children:[Object(j.jsx)("div",{className:"code-title",children:this.state.title}),Object(j.jsxs)("div",{className:"title-command-buttons",children:[Object(j.jsx)("i",{onClick:function(){t.props.compiler(t.props.id,t.state.content)},className:"fa fa-play code-compile-button"}),Object(j.jsx)("div",{onClick:function(){t.setState({rotated:!t.state.rotated})},className:"help-question",children:this.state.rotated?"^":"?"})]})]}),Object(j.jsxs)("div",{className:"box-frame",children:[Object(j.jsx)("pre",{ref:this.coupleDiv,children:Object(j.jsx)("code",{ref:this.pCode,className:"language-js"})}),Object(j.jsx)("textarea",{ref:this.scroller,onScroll:this.coupleScroll,spellCheck:"false",name:"textBox",value:this.state.content,onChange:this.onChangeText,className:"code-text"})]}),Object(j.jsx)("div",{className:this.state.rotated?"help-div":"help-div rotated",children:this.state.helpText})]})}}]),i}(n.a.Component),O=i(8),f=i.n(O),x=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).onDragStart=t.onDragStart.bind(Object(d.a)(t)),t.onDragEnd=t.onDragEnd.bind(Object(d.a)(t)),t.drag=t.drag.bind(Object(d.a)(t)),t}return Object(h.a)(i,[{key:"drag",value:function(t){var e=t.clientX,i=document.getElementById("top-part").parentNode.getBoundingClientRect().width;this.props.onChange(this.props.id,this.state.relate+100*(e-this.state.position)/i)}},{key:"onDragStart",value:function(t){var e=this,i=t.clientX;this.setState({position:i,relate:this.props.width,dragging:!0},(function(){document.addEventListener("mousemove",e.drag),document.addEventListener("mouseup",e.onDragEnd)}))}},{key:"onDragEnd",value:function(t){document.removeEventListener("mousemove",this.drag),this.setState({dragging:!1})}},{key:"render",value:function(){return this.props.static?Object(j.jsx)("div",{className:f.a.border}):Object(j.jsx)("div",{id:"border-".concat(this.props.id),onMouseDown:this.onDragStart,className:"".concat(f.a.border," ").concat(f.a.borderNonStatic)})}}]),i}(n.a.Component),C=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).onDragStart=t.onDragStart.bind(Object(d.a)(t)),t.onDragEnd=t.onDragEnd.bind(Object(d.a)(t)),t.drag=t.drag.bind(Object(d.a)(t)),t}return Object(h.a)(i,[{key:"drag",value:function(t){var e=t.clientY,i=document.getElementById("view-page").parentNode.getBoundingClientRect().height,s=this.state.relate+100*(e-this.state.position)/i;this.props.onChange(s)}},{key:"onDragStart",value:function(t){var e=this,i=t.clientY;this.setState({position:i,relate:this.props.height,dragging:!0},(function(){document.addEventListener("mousemove",e.drag),document.addEventListener("mouseup",e.onDragEnd)}))}},{key:"onDragEnd",value:function(t){document.removeEventListener("mousemove",this.drag),this.setState({dragging:!1})}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"borderH-".concat(this.props.id),onMouseDown:this.onDragStart,className:"horizontal-border"})}}]),i}(n.a.Component);function S(t){var e=[t];return e=e.map((function(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value}))}var y=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(){var t;Object(r.a)(this,i),t=e.call(this);var s=localStorage.getItem("Code1");null==s&&(s='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    cout<<"your input";\n}');var n=localStorage.getItem("Code2");null==n&&(n='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n  cout<<"Output from f1"<<endl;\n}');var a=localStorage.getItem("Code3");return null==a&&(a='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n  cout<<"Output from f2"<<endl;\n}'),t.state={resizePosition:[0,33,67,100],showResult:!1,matchInput:"",matchF1:"",matchF2:"",minWidth:20,minHeight:20,maxHeight:80,height:50,terminalMessage:S("Output Pane\n\n"),title1:"CustomInputGenerator.cpp",title2:"Program1.cpp",title3:"Program2.cpp",help1:"In each run, your code should print the new set of inputs to the stdout. These inputs will then be consumed by Program1 and Program2. Only use cout for printing (Dont use printf)",help2:"All inputs should be read using cin (dont use scanf). Code must output using cout (dont use printf)",help3:"All inputs should be read using cin (dont use scanf). Code must output using cout (dont use printf)",Code1:s,Code2:n,Code3:a},t.getWidth=t.getWidth.bind(Object(d.a)(t)),t.setBorderPosition=t.setBorderPosition.bind(Object(d.a)(t)),t.setBorderPositionH=t.setBorderPositionH.bind(Object(d.a)(t)),t.setCodeBoxProperty=t.setCodeBoxProperty.bind(Object(d.a)(t)),t.compile=t.compile.bind(Object(d.a)(t)),t.compare=t.compare.bind(Object(d.a)(t)),t}return Object(h.a)(i,[{key:"compile",value:function(t,e){var i=this;this.setState({terminalMessage:["Compiling ".concat(this.state["title".concat(t)])],showResult:!1},(function(){m.a.post("https://q-tv.herokuapp.com/api/compile/",{code:e}).then((function(t){i.setState({terminalMessage:S(t.data)})}))}))}},{key:"compare",value:function(){var t=this;this.setState({terminalMessage:["Comparing ".concat(this.state.title2," and ").concat(this.state.title3)],showResult:!1},(function(){m.a.post("https://q-tv.herokuapp.com/api/compile/compare",{input:t.state.Code1,f1:t.state.Code2,f2:t.state.Code3}).then((function(e){if(0==e.data.code)t.setState({terminalMessage:S(e.data.error)});else if(1==e.data.code){t.setState({terminalMessage:S("Found mismatch!\n\n"),matchInput:e.data.input,matchF1:e.data.output1,matchF2:e.data.output2,showResult:!0})}else t.setState({terminalMessage:["Timeout reached!"]})}))}))}},{key:"setCodeBoxProperty",value:function(t,e){localStorage.setItem("Code".concat(t),e),this.setState(Object(c.a)({},"Code".concat(t),e))}},{key:"getWidth",value:function(t){return this.state.resizePosition[t]-this.state.resizePosition[t-1]}},{key:"setBorderPosition",value:function(t,e){var i=JSON.parse(JSON.stringify(this.state.resizePosition)),s=this.state.resizePosition[t-1]+this.state.minWidth,n=this.state.resizePosition[t+1]-this.state.minWidth;e<s?e=s:e>n&&(e=n),i[t]=e,this.setState({resizePosition:i})}},{key:"setBorderPositionH",value:function(t){t<this.state.minHeight?t=this.state.minHeight:t>this.state.maxHeight&&(t=this.state.maxHeight),this.setState({height:t})}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:"view-page",children:[Object(j.jsxs)("div",{className:"top-part",id:"top-part",style:{height:"".concat(this.state.height,"%")},children:[Object(j.jsx)(x,{static:!0}),Object(j.jsx)(v,{compiler:this.compile,id:1,width:"".concat(this.getWidth(1),"%"),update:this.setCodeBoxProperty,code:this.state.Code1,title:this.state.title1,help:this.state.help1}),Object(j.jsx)(x,{id:1,width:this.state.resizePosition[1],onChange:this.setBorderPosition}),Object(j.jsx)(v,{compiler:this.compile,id:2,width:"".concat(this.getWidth(2),"%"),update:this.setCodeBoxProperty,code:this.state.Code2,title:this.state.title2,help:this.state.help2}),Object(j.jsx)(x,{id:2,width:this.state.resizePosition[2],onChange:this.setBorderPosition}),Object(j.jsx)(v,{compiler:this.compile,id:3,width:"".concat(this.getWidth(3),"%"),update:this.setCodeBoxProperty,code:this.state.Code3,title:this.state.title3,help:this.state.help3}),Object(j.jsx)(x,{static:!0})]}),Object(j.jsx)(C,{height:this.state.height,onChange:this.setBorderPositionH}),Object(j.jsx)("div",{className:"command-pane",children:Object(j.jsx)("button",{onClick:this.compare,className:"command-pane-buttons",children:"COMPARE CODE"})}),Object(j.jsx)(C,{height:this.state.height,onChange:this.setBorderPositionH}),Object(j.jsxs)("div",{className:"console",style:{height:"calc(".concat(100-this.state.height,"% - 32px)")},children:[this.state.terminalMessage.map((function(t){return""===t?Object(j.jsx)("br",{}):Object(j.jsx)("div",{className:"console-line-item",children:t})})),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"result-div",hidden:!this.state.showResult,children:["Input",Object(j.jsx)("div",{className:"console-textarea",children:this.state.matchInput.split("\n").map((function(t,e){return Object(j.jsxs)("span",{children:[t,Object(j.jsx)("br",{})]},e)}))}),"Output From Program 1",Object(j.jsx)("div",{className:"console-textarea",children:this.state.matchF1.split("\n").map((function(t,e){return Object(j.jsxs)("span",{children:[t,Object(j.jsx)("br",{})]},e)}))}),"Output From Program 2",Object(j.jsx)("div",{className:"console-textarea",children:this.state.matchF2.split("\n").map((function(t,e){return Object(j.jsxs)("span",{children:[t,Object(j.jsx)("br",{})]},e)}))})]})]})]})}}]),i}(n.a.Component),P=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,51)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;i(t),s(t),n(t),a(t),o(t)}))};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),P()},8:function(t,e,i){t.exports={border:"codeBoxBorderStyles_border__sFbIz",borderNonStatic:"codeBoxBorderStyles_borderNonStatic__2_L5c",slider:"codeBoxBorderStyles_slider__WP2lb"}}},[[50,1,2]]]);
//# sourceMappingURL=main.468d930d.chunk.js.map