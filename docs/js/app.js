(function(e){function t(t){for(var r,o,s=t[0],a=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isFunnyColor,expression:"isFunnyColor"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isFunnyColor)?e._i(e.isFunnyColor,null)>-1:e.isFunnyColor},on:{change:function(t){var n=e.isFunnyColor,r=t.target,i=!!r.checked;if(Array.isArray(n)){var c=null,o=e._i(n,c);r.checked?o<0&&(e.isFunnyColor=n.concat([c])):o>-1&&(e.isFunnyColor=n.slice(0,o).concat(n.slice(o+1)))}else e.isFunnyColor=i}}}),e._v(" Радужные цвета ")]),n("Donut",{attrs:{slices:e.slices,currentSlice:e.currentSlice,colors:e.colors},on:{click:function(t){e.currentSlice=t}}})],1)},c=[],o=(n("99af"),n("a15b"),n("d81d"),n("3835")),s=n("5c96"),a=(n("06f1"),n("57ef")),l=n.n(a),u=["#67B6F4","#67E3F4","#9E88F8","#7D8AFF","#5DA4DC","#5DCDDC","#8E7BE0","#717CE6","#5292C3","#52B6C3","#7E6DC6","#646ECC","#487FAA","#489EAA","#6E5FAD","#5760B2","#3D6D92","#3D8792","#5E5194","#4B5298","#335A79","#337079","#4E437B","#3E447E"],d={viewBox:{width:600,height:400},normal:{bigRadius:148,smallRadius:72,textRadius:168,percentLabelRadius:110},hover:{bigRadius:158,smallRadius:72,textRadius:168,percentLabelRadius:110}};function p(e){var t=Math.cos(2*Math.PI*e),n=Math.sin(2*Math.PI*e);return[t,n]}var f={name:"Donut",components:{ElPopover:s["Popover"]},props:{slices:{type:Array,required:!0,default:function(){return[]}},colors:{type:Array,required:!1,default:function(){return u}},sizes:{type:Object,required:!1,default:function(){return d}},currentSlice:{},visible:!0},methods:{getTooltipCoordinates:function(e){var t=p(e),n=Object(o["a"])(t,2),r=n[0],i=n[1],c=this.sizes.viewBox,s=c.width,a=c.height,l=this.sizes.hover.textRadius,u=0,d=0;return d=(s/2+r*l)/s*100,u=(a/2+i*l)/a*100,{top:"".concat(u,"%"),left:"".concat(d,"%")}},sliceClick:function(e){this.$emit("click",e)}},render:function(){var e=this,t=arguments[0],n=-.25,r=n;return t("div",{class:l.a.container,style:{maxWidth:this.sizes.viewBox.width,maxHeight:this.sizes.viewBox.height}},[this.slices.map((function(n){var i=r+n.percent/2,c={horizontal:(i+.25)%1>.5?"left":"right",vertical:i%1>.5||i<0?"end":"start"};return r+=n.percent,t(s["Popover"],{class:l.a.point,style:e.getTooltipCoordinates(i),attrs:{placement:"".concat(c.horizontal,"-").concat(c.vertical),"visible-arrow":!1,"popper-class":"donut-popper",trigger:"manual",value:n.id===e.currentSlice,content:"".concat(i,"  ").concat(c.horizontal,"-").concat(c.vertical)}},[t("div",{slot:"reference"}),t("div",[n.text]),t("div",[100*n.percent,"%"])])})),t("svg",{attrs:{viewBox:"-".concat(this.sizes.viewBox.width/2," -").concat(this.sizes.viewBox.height/2," ").concat(this.sizes.viewBox.width," ").concat(this.sizes.viewBox.height)},class:l.a.svg},[t("text",{attrs:{x:"0",y:"0","text-anchor":"middle"},class:l.a.svgTextAll},["Всего (шт.):"]),t("text",{attrs:{x:"0",y:"14","text-anchor":"middle"},class:l.a.svgTextAll},["546864"]),this.slices.map((function(r,i){var c=p(n),s=Object(o["a"])(c,2),a=s[0],u=s[1],d=p(n+r.percent/2),f=Object(o["a"])(d,2),v=f[0],h=f[1];n+=r.percent;var x=p(n),g=Object(o["a"])(x,2),y=g[0],b=g[1],m=r.percent>.5?1:0,C=e.sizes[r.id===e.currentSlice?"hover":"normal"],A=["M ".concat(a*C.bigRadius," ").concat(u*C.bigRadius),"A ".concat(C.bigRadius," ").concat(C.bigRadius," 0 ").concat(m," 1 ").concat(y*C.bigRadius," ").concat(b*C.bigRadius),"L ".concat(y*C.smallRadius," ").concat(b*C.smallRadius),"A ".concat(C.smallRadius," ").concat(C.smallRadius," 0 ").concat(m," 0 ").concat(a*C.smallRadius," ").concat(u*C.smallRadius),"Z"].join(" ");return t("g",[t("path",{attrs:{d:A,fill:e.colors[i%e.colors.length],"vector-effect":"non-scaling-stroke"},class:l.a.svgSlice,on:{click:function(){return e.sliceClick(r.id)}}}),r.percent>=.05&&t("g",[r.id!==e.currentSlice&&t("text",{attrs:{x:v*C.textRadius,y:h*C.textRadius+8,"text-anchor":(n-r.percent/2+.25)%1>.5?"end":"start"},class:l.a.svgText},[r.text]),t("text",{attrs:{x:v*C.percentLabelRadius,y:h*C.percentLabelRadius+6,"text-anchor":"middle"},class:l.a.svgTextPercent,on:{click:function(){return e.$emit("click",r.id)}}},[100*r.percent,"%"])])])}))])])}},v={name:"App",components:{Donut:f},data:function(){return{slices:[{id:1,text:"79200101623",percent:.37},{id:2,text:"79200101623",percent:.16},{id:3,text:"79200101623",percent:.12},{id:4,text:"79200101623",percent:.11},{id:5,text:"79200101623",percent:.1},{id:6,text:"79200101623",percent:.05},{id:7,text:"79200101623",percent:.03},{id:8,text:"79200101623",percent:.02},{id:9,text:"79200101623",percent:.01},{id:10,text:"79200101623",percent:.01},{id:11,text:"79200101623",percent:.01},{id:12,text:"79200101623",percent:.01}],currentSlice:void 0,funnyColors:["#67B6F4","#ce67f4","#f88888","#ffb57d","#9ddc5d","#5ddcb0","#7b94e0","#e671ad","#c37252","#c39a52","#b2c352","#52c358","#52c3b6"],boringColors:["#67B6F4","#67E3F4","#9E88F8","#7D8AFF","#5DA4DC","#5DCDDC","#8E7BE0","#717CE6","#5292C3","#52B6C3","#7E6DC6","#646ECC","#487FAA","#489EAA","#6E5FAD","#5760B2","#3D6D92","#3D8792","#5E5194","#4B5298","#335A79","#337079","#4E437B","#3E447E"],isFunnyColor:!0}},computed:{colors:function(){return this.isFunnyColor?this.funnyColors:this.boringColors}}},h=v,x=(n("034f"),n("2877")),g=Object(x["a"])(h,i,c,!1,null,null,null),y=g.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(y)}}).$mount("#app")},"57ef":function(e,t,n){e.exports={container:"styles-module_container_-kDei",point:"styles-module_point_oUyvR",svg:"styles-module_svg_8El7l",svgSlice:"styles-module_svgSlice_35gGX",svgText:"styles-module_svgText_r1A5X",svgTextAll:"styles-module_svgTextAll_1GOCj",svgTextPercent:"styles-module_svgTextPercent_2sBee"}},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.js.map