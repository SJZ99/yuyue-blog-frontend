(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cdc9218"],{"64c2":function(t,a,e){t.exports=e.p+"img/city.1eb78c71.jpg"},"9b2b":function(t,a,e){"use strict";e("b77b")},b1ba:function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{attrs:{id:"box"}},[e("h2",{attrs:{id:"custom-title"}},[t._v("Articles")]),t._l(t.articles,(function(a,c){return e("v-card",{key:c,attrs:{id:"preview",dark:""},on:{click:function(e){return t.changePath("/program/"+t.language+"/"+a.id)}}},[e("v-img",{attrs:{src:a.img}}),e("v-card-title",[t._v(t._s(a.title))]),e("v-card-subtitle",[t._v(t._s(a.preface))]),e("v-card-actions",[e("h5",[t._v(t._s(a.date))])])],1)}))],2)])},i=[],n=e("09b9"),r={data:function(){return{language:n["a"].currentRoute.params.lang.toLowerCase(),articles:[{id:1,img:e("64c2"),title:"【tag】titletle",preface:"canvalkjvnnlsajdnvalsjdnvaljdskva;vas",date:"2022/1/31"}]}},methods:{fetchPreviews:function(){var t=this;this.axios.get("/program/previews/".concat(this.language)).then((function(a){t.articles=a.data,t.articles.forEach((function(a){a.img="".concat(t.axios.defaults.baseURL,"/program/img/").concat(a.img)}))})).catch((function(t){console.log(t)}))}},created:function(){this.fetchPreviews()}},s=r,o=(e("9b2b"),e("2877")),l=e("6544"),d=e.n(l),u=e("b0af"),v=e("99d9"),g=e("adda"),f=Object(o["a"])(s,c,i,!1,null,null,null);a["default"]=f.exports;d()(f,{VCard:u["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VImg:g["a"]})},b77b:function(t,a,e){}}]);
//# sourceMappingURL=chunk-7cdc9218.f4811144.js.map