(this["webpackJsonpborder-radius-previewer"]=this["webpackJsonpborder-radius-previewer"]||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),i=a.n(o),c=a(11),l=a(7),u=a(14),s=a(3),d=Object(s.a)({"@keyframes fadeIn":{from:{opacity:0},to:{opacity:1}},control:{width:500,height:500,maxWidth:"90vw",maxHeight:"90vw",transform:"translate(0)",margin:"0 auto"},wrapper:{animationName:"$fadeIn",animationDuration:".5s"},elliptical:{display:"flex",alignItems:"center","& > span":{marginLeft:8,marginRight:8,fontWeight:500}}}),p=a(21),f=a.n(p),m=Object(s.a)({wrapper:{position:"relative",flexGrow:1,backgroundColor:"#fff",padding:12,marginTop:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"},button:{cursor:"pointer",backgroundColor:"#24c6dc",position:"absolute",right:0,top:0,height:"100%",width:60,border:"none","&:hover":{backgroundColor:"#00a0d0"},"& > svg":{height:20}},output:{margin:0,background:"transparent",outline:"none",border:"none",width:"calc(100% - 80px)",fontSize:14}});function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=function(e){var t=e.svgRef,a=e.title,n=b(e,["svgRef","title"]);return r.a.createElement("svg",h({width:"30pt",height:"30pt",viewBox:"0 0 30 30",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",{id:"surface1"},r.a.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(255%,255%,255%)",fillOpacity:1},d:"M 21.324219 0 L 4.816406 0 C 3.304688 0 2.0625 1.238281 2.0625 2.75 L 2.0625 22.011719 L 4.816406 22.011719 L 4.816406 2.75 L 21.324219 2.75 Z M 25.453125 5.503906 L 10.320312 5.503906 C 8.804688 5.503906 7.566406 6.742188 7.566406 8.253906 L 7.566406 27.519531 C 7.566406 29.03125 8.804688 30.265625 10.320312 30.265625 L 25.453125 30.265625 C 26.964844 30.265625 28.207031 29.03125 28.207031 27.519531 L 28.207031 8.253906 C 28.207031 6.742188 26.964844 5.503906 25.453125 5.503906 Z M 25.453125 27.519531 L 10.320312 27.519531 L 10.320312 8.253906 L 25.453125 8.253906 Z M 25.453125 27.519531 "})))},v=r.a.forwardRef((function(e,t){return r.a.createElement(g,h({svgRef:t},e))})),x=(a.p,Object(n.forwardRef)((function(e,t){var a=m(e);return r.a.createElement("div",{className:a.wrapper},r.a.createElement("input",{ref:t,className:a.output,value:e.value,name:"output",readOnly:!0}),r.a.createElement("button",{onClick:e.handleCopy,className:a.button},r.a.createElement(v,{height:25,width:25})))})));x.defaultProps={value:"",handleCopy:function(){}};var y=x,O=Object(s.a)({"@keyframes fadeIn":{from:{opacity:0},to:{opacity:1}},wrapper:{height:"100vh",width:"100vw",background:"linear-gradient(to left, rgb(36, 198, 220), rgb(81, 74, 157))",display:"flex",justifyContent:"center",alignItems:"center"},title:{width:"100%",padding:72,background:"rgba(0, 0, 0, .2)",textAlign:"center",fontSize:64,color:"#fff",animationName:"$fadeIn",animationDuration:".5s"}}),w=function(){var e=O();return r.a.createElement("div",{className:e.wrapper},r.a.createElement("h2",{className:e.title},"Paste me!"))},j=a(13);var E=function(e){var t=e.values,a=e.min,n=e.max,o=e.handleChange,i=e.vertical;return r.a.createElement(j.Range,{step:1,min:a,max:n,values:[t],onChange:o,direction:i?j.Direction.Up:j.Direction.Left,renderTrack:function(e){var t,a=e.props,n=e.children;return r.a.createElement("div",Object.assign({},a,{style:(t=a.style,Object(l.a)(Object(l.a)({},t),{},{height:i?"100%":0,width:i?0:"100%"}))}),n)},renderThumb:function(e){var t,a=e.props;return r.a.createElement("div",Object.assign({},a,{style:(t=a.style,Object(l.a)(Object(l.a)({},t),{},{height:15,width:15,backgroundColor:"#fff",boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",borderRadius:"25%"}))}))}})},C=Object(s.a)({control:{transform:"translate(0)",margin:"0 auto",width:300,height:300,maxWidth:"90vw",maxHeight:"90vh","@media (min-width: 800px) and (min-height: 800px)":{width:500,height:500}},verticalSlider:{position:"absolute",height:"100%"},horizontalSlider:{position:"absolute",width:"100%"},top:{extend:"horizontalSlider",right:0,top:0},left:{extend:"verticalSlider",left:0,top:0},bottom:{extend:"horizontalSlider",left:0,bottom:0},right:{extend:"verticalSlider",right:0,bottom:0}}),k=Object(s.a)({shape:function(e){return{borderRadius:e.radius,display:"block",background:"#fff",width:"100%",height:"100%",position:"absolute",left:0,top:0,boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)"}}});function S(e){var t=k(e);return r.a.createElement("div",{className:t.shape})}var R=function(e){var t=C(),a=e.controls,n=e.currentRadius,o=e.handleChange,i=function(e){return"left"===e||"right"===e};return r.a.createElement("div",{className:t.control},r.a.createElement(S,{radius:n}),Object.keys(a).map((function(e){return r.a.createElement("div",{className:t[e],key:e},r.a.createElement(E,{handleChange:o(e),min:0,max:100,values:a[e],vertical:i(e)}))})))};R.defaultProps={currentRadius:"",controls:{top:0,left:100,bottom:100,right:0},handleChange:function(e){return function(t){console.log(e,t)}}};var L=r.a.memo(R);function N(){var e=d(),t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)({top:0,left:100,bottom:100,right:0}),p=Object(u.a)(s,2),m=p[0],h=p[1],b=Object(n.useState)(!1),g=Object(u.a)(b,2),v=g[0],x=g[1],O=Object(n.createRef)(),j=function(e){var t=m.bottom,a=m.left,n=m.right,r=m.top,o=function(e){return 100-e};return e?["".concat(o(r),"% ").concat(r,"% ").concat(t,"% ").concat(o(t),"%"),"".concat(o(a),"% ").concat(o(n),"% ").concat(n,"% ").concat(a,"%")].join(" / "):"".concat(o(a),"% ").concat(r,"% ").concat(n,"% ").concat(o(t),"%")}(v),E=Object(n.useCallback)((function(e){null===e||void 0===e||e.select(),null===e||void 0===e||e.setSelectionRange(0,99999),document.execCommand("copy"),i(!0)}),[]);return Object(n.useEffect)((function(){o&&setTimeout((function(){return i(!1)}),700)}),[o]),o?r.a.createElement(w,null):r.a.createElement("section",{className:e.wrapper},r.a.createElement("h1",{style:{textAlign:"center"}},"Border Radius Previewer"),r.a.createElement("label",{className:e.elliptical},r.a.createElement("span",null,"Simple"),r.a.createElement(f.a,{checkedIcon:!1,uncheckedIcon:!1,onColor:"#3867d6",offColor:"#778ca3",onChange:function(){return x((function(e){return!e}))},checked:v}),r.a.createElement("span",null,"Complex")),r.a.createElement(y,{handleCopy:function(){return E(O.current)},ref:O,value:j}),r.a.createElement(L,{controls:m,currentRadius:j,handleChange:function(e){return function(t){h(Object(l.a)(Object(l.a)({},m),{},Object(c.a)({},e,t)))}}}))}var I=a(8),z=Object(s.a)({app:{background:"linear-gradient(to right, #24c6dc, #514a9d)",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}});s.b.setup(Object(I.a)());s.b.createStyleSheet({"@global":{body:{fontFamily:"Roboto, sans-serif",margin:0,padding:0}}}).attach();var P=function(){var e=z();return r.a.createElement("main",{className:e.app},r.a.createElement(N,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2df4a99f.chunk.js.map