(function(e){function i(i){for(var t,o,s=i[0],I=i[1],g=i[2],u=0,l=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&l.push(n[o][0]),n[o]=0;for(t in I)Object.prototype.hasOwnProperty.call(I,t)&&(e[t]=I[t]);c&&c(i);while(l.length)l.shift()();return a.push.apply(a,g||[]),r()}function r(){for(var e,i=0;i<a.length;i++){for(var r=a[i],t=!0,s=1;s<r.length;s++){var I=r[s];0!==n[I]&&(t=!1)}t&&(a.splice(i--,1),e=o(o.s=r[0]))}return e}var t={},n={app:0},a=[];function o(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,i,r){o.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,i){if(1&i&&(e=o(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var t in e)o.d(r,t,function(i){return e[i]}.bind(null,t));return r},o.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(i,"a",i),i},o.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],I=s.push.bind(s);s.push=i,s=s.slice();for(var g=0;g<s.length;g++)i(s[g]);var c=I;a.push([0,"chunk-vendors"]),r()})({0:function(e,i,r){e.exports=r("56d7")},"17b5":function(e,i){e.exports="data:image/png;base64,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"},"56d7":function(e,i,r){"use strict";r.r(i);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),n=function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("div",{attrs:{id:"app"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"search query"},domProps:{value:e.searchQuery},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.searchItems.apply(null,arguments)},input:function(i){i.target.composing||(e.searchQuery=i.target.value)}}}),r("button",{attrs:{id:"submit-query"},on:{click:e.searchItems}},[e._v("Search")]),e.fetchedMoviesFlag?r("h2",[e._v("Movies")]):e._e(),e._l(e.movies[0],(function(e,i){return r("SearchResult",{key:e.id||i,attrs:{"movie-poster":e.backdrop_path,"movie-title":e.title,"movie-original-title":e.original_title,"movie-original-language":e.original_language,"movie-vote-average":e.vote_average}})})),e.fetchedShowsFlag?r("h2",[e._v("TV Shows")]):e._e(),e._l(e.series[0],(function(e,i){return r("SearchResult",{key:e.id||i,attrs:{"serie-poster":e.backdrop_path,"serie-name":e.name,"serie-original-name":e.original_name,"serie-original-language":e.original_language,"serie-vote-average":e.vote_average}})}))],2)},a=[],o=(r("99af"),r("bc3a")),s=r.n(o),I=function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("ul",[e.moviePoster||e.seriePoster?r("li",[r("img",{attrs:{src:""+e.posterBaseUrl+e.posterWidth+(e.moviePoster||e.seriePoster),alt:"poster"}})]):e._e(),r("li",[r("h3",[e._v("Title: "+e._s(e.movieTitle||e.serieName))])]),r("li",[e.hasFlag?r("img",{attrs:{src:e.flagImg,alt:e.movieOriginalLanguage||e.serieOriginalLanguage}}):r("span",[e._v("Original Language: "+e._s(e.movieOriginalLanguage||e.serieOriginalLanguage)+" ")])]),r("li",[e._v("Original Title: "+e._s(e.movieOriginalTitle||e.serieOriginalName))]),r("li",[e._v("Average Score: "+e._s(e.movieVoteAverage||e.serieVoteAverage))])])},g=[],c=(r("caad"),r("2532"),r("5377"),r("a9e3"),{data:function(){return{flags:["it","en"],posterBaseUrl:"http://image.tmdb.org/t/p",posterWidth:"/w500"}},computed:{flagImg:function(){return r("b967")("./".concat(this.movieOriginalLanguage||this.serieOriginalLanguage,".png"))},hasFlag:function(){return this.flags.includes(this.movieOriginalLanguage||this.serieOriginalLanguage)}},props:{moviePoster:String,movieTitle:String,movieOriginalTitle:String,movieOriginalLanguage:String,movieVoteAverage:Number,seriePoster:String,serieName:String,serieOriginalName:String,serieOriginalLanguage:String,serieVoteAverage:Number}}),u=c,l=(r("d8e4"),r("2877")),v=Object(l["a"])(u,I,g,!1,null,null,null),A=v.exports,f={name:"App",components:{SearchResult:A},data:function(){return{searchQuery:"bat",api:{baseUri:"https://api.themoviedb.org/3",moviesEndpoint:"search/movie",seriesEndpoint:"search/tv",api_key:"3f606812feca15a95aae9e1e4b7e1f3b"},movies:[],series:[],fetchedMoviesFlag:0,fetchedShowsFlag:0}},methods:{searchItems:function(){if(this.movies=[],this.series=[],this.fetchedMoviesFlag=0,this.fetchedShowsFlag=0,this.searchQuery){var e=this.api,i=e.api_key,r=e.baseUri,t=e.moviesEndpoint,n=e.seriesEndpoint,a={params:{api_key:i,query:this.searchQuery}};this.fetchAPI(r,a,t,this.movies),this.fetchAPI(r,a,n,this.series),this.fetchedMoviesFlag=1,this.fetchedShowsFlag=1}},fetchAPI:function(e,i,r,t){s.a.get("".concat(e,"/").concat(r),i).then((function(e){t.push(e.data.results),console.log(t)}))}}},p=f,h=(r("5c0b"),Object(l["a"])(p,n,a,!1,null,null,null)),m=h.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,i,r){"use strict";r("9c0c")},"9c0c":function(e,i,r){},b967:function(e,i,r){var t={"./en.png":"17b5","./it.png":"e33f"};function n(e){var i=a(e);return r(i)}function a(e){if(!r.o(t,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=a,e.exports=n,n.id="b967"},d8e4:function(e,i,r){"use strict";r("e3b6")},e33f:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},e3b6:function(e,i,r){}});
//# sourceMappingURL=app.a7a686b8.js.map