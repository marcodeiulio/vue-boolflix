(function(e){function i(i){for(var r,o,s=i[0],I=i[1],c=i[2],u=0,g=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&g.push(n[o][0]),n[o]=0;for(r in I)Object.prototype.hasOwnProperty.call(I,r)&&(e[r]=I[r]);l&&l(i);while(g.length)g.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,i=0;i<a.length;i++){for(var t=a[i],r=!0,s=1;s<t.length;s++){var I=t[s];0!==n[I]&&(r=!1)}r&&(a.splice(i--,1),e=o(o.s=t[0]))}return e}var r={},n={app:0},a=[];function o(i){if(r[i])return r[i].exports;var t=r[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,i,t){o.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,i){if(1&i&&(e=o(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var r in e)o.d(t,r,function(i){return e[i]}.bind(null,r));return t},o.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(i,"a",i),i},o.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],I=s.push.bind(s);s.push=i,s=s.slice();for(var c=0;c<s.length;c++)i(s[c]);var l=I;a.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"17b5":function(e,i){e.exports="data:image/png;base64,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"},"56d7":function(e,i,t){"use strict";t.r(i);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("BoolHeader",{on:{searchItems:e.searchItems}}),e.fetchedMoviesFlag?t("h2",[e._v("Movies")]):e._e(),e._l(e.movies[0],(function(e,i){return t("SearchResult",{key:e.id||i,attrs:{"movie-poster":e.backdrop_path,"movie-title":e.title,"movie-original-title":e.original_title,"movie-original-language":e.original_language,"movie-vote-average":e.vote_average}})})),e.fetchedShowsFlag?t("h2",[e._v("TV Shows")]):e._e(),e._l(e.series[0],(function(e,i){return t("SearchResult",{key:e.id||i,attrs:{"serie-poster":e.backdrop_path,"serie-name":e.name,"serie-original-name":e.original_name,"serie-original-language":e.original_language,"serie-vote-average":e.vote_average}})}))],2)},a=[],o=(t("99af"),t("bc3a")),s=t.n(o),I=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ul",[e.moviePoster||e.seriePoster?t("li",[t("img",{attrs:{src:""+e.posterBaseUrl+e.posterWidth+(e.moviePoster||e.seriePoster),alt:"poster"}})]):e._e(),t("li",[t("h3",[e._v("Title: "+e._s(e.movieTitle||e.serieName))])]),t("li",[e.hasFlag?t("img",{attrs:{src:e.flagImg,alt:e.movieOriginalLanguage||e.serieOriginalLanguage}}):t("span",[e._v("Original Language: "+e._s(e.movieOriginalLanguage||e.serieOriginalLanguage)+" ")])]),t("li",[e._v("Original Title: "+e._s(e.movieOriginalTitle||e.serieOriginalName))]),t("li",[e._l(e.voteMovie||e.voteSerie||0,(function(e,i){return t("i",{key:i,staticClass:"fa-solid fa-star"})})),e._l(5-e.voteMovie||5-e.voteSerie,(function(e,i){return t("i",{key:i+5,staticClass:"fa-regular fa-star"})}))],2)])},c=[],l=(t("caad"),t("2532"),t("5377"),t("a9e3"),{data:function(){return{flags:["it","en"],posterBaseUrl:"http://image.tmdb.org/t/p",posterWidth:"/w500"}},computed:{voteMovie:function(){return Math.ceil(this.movieVoteAverage/2)},voteSerie:function(){return Math.ceil(this.serieVoteAverage/2)},flagImg:function(){return t("b967")("./".concat(this.movieOriginalLanguage||this.serieOriginalLanguage,".png"))},hasFlag:function(){return this.flags.includes(this.movieOriginalLanguage||this.serieOriginalLanguage)}},props:{moviePoster:String,movieTitle:String,movieOriginalTitle:String,movieOriginalLanguage:String,movieVoteAverage:Number,seriePoster:String,serieName:String,serieOriginalName:String,serieOriginalLanguage:String,serieVoteAverage:Number}}),u=l,g=(t("d8e4"),t("2877")),v=Object(g["a"])(u,I,c,!1,null,null,null),f=v.exports,A=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("header",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"search query"},domProps:{value:e.searchQuery},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.searchItems.apply(null,arguments)},input:function(i){i.target.composing||(e.searchQuery=i.target.value)}}}),t("button",{attrs:{id:"submit-query"},on:{click:e.searchItems}},[e._v("Search")])])},h=[],p={name:"BoolHeader",data:function(){return{searchQuery:"bat"}},methods:{searchItems:function(){this.$emit("searchItems",this.searchQuery)}}},m=p,d=Object(g["a"])(m,A,h,!1,null,null,null),O=d.exports,w={name:"App",components:{SearchResult:f,BoolHeader:O},data:function(){return{api:{baseUri:"https://api.themoviedb.org/3",moviesEndpoint:"search/movie",seriesEndpoint:"search/tv",api_key:"3f606812feca15a95aae9e1e4b7e1f3b"},movies:[],series:[],fetchedMoviesFlag:0,fetchedShowsFlag:0}},methods:{searchItems:function(e){if(this.movies=[],this.series=[],this.fetchedMoviesFlag=0,this.fetchedShowsFlag=0,e){var i=this.api,t=i.api_key,r=i.baseUri,n=i.moviesEndpoint,a=i.seriesEndpoint,o={params:{api_key:t,query:e}};this.fetchAPI(r,o,n,this.movies),this.fetchAPI(r,o,a,this.series),this.fetchedMoviesFlag=1,this.fetchedShowsFlag=1}},fetchAPI:function(e,i,t,r){s.a.get("".concat(e,"/").concat(t),i).then((function(e){r.push(e.data.results),console.log(r)}))}}},y=w,b=(t("5c0b"),Object(g["a"])(y,n,a,!1,null,null,null)),E=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,i,t){"use strict";t("9c0c")},"9c0c":function(e,i,t){},b967:function(e,i,t){var r={"./en.png":"17b5","./it.png":"e33f"};function n(e){var i=a(e);return t(i)}function a(e){if(!t.o(r,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id="b967"},d8e4:function(e,i,t){"use strict";t("e3b6")},e33f:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},e3b6:function(e,i,t){}});
//# sourceMappingURL=app.8348ad76.js.map