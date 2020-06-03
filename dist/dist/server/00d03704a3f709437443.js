exports.ids=[3],exports.modules={47:function(t,e,r){var content=r(50);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(3).default;t.exports.__inject__=function(t){o("30629462",content,!0,t)}},48:function(t,e,r){"use strict";var o=r(5),n=r(8),l={name:"MovieCard",props:{movie:Object},data:()=>({show:!1,favorite:!1,trailer:void 0}),async created(){this.favorite=this.isFavorite,!n.c&&this.movie.id&&await this.checkForTrailer()},computed:{isFavorite(){return!!localStorage.getItem(this.movie.id)}},methods:{...Object(o.mapMutations)(["setMovie"]),toggleFavorite(){localStorage.setItem(this.movie.id,!this.favorite),this.favorite=!this.favorite},async checkForTrailer(){this.trailer=await this.$mdb.movieInfo({id:this.movie.id,language:this.$i18n.locale,append_to_response:"videos"}),this.trailer=this.trailer.videos.results.find(t=>"Trailer"===t.type)||{}},async watchTrailer(){!this.trailer&&n.c&&this.movie.id&&await this.checkForTrailer(),this.trailer&&this.trailer.key&&this.setMovie(this.trailer)}}},d=r(4);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<div class="card">',"</div>",[t._ssrNode((t.movie.poster_path?'<div class="card-header"><img'+t._ssrAttr("src",t.movie.poster_path?"https://image.tmdb.org/t/p/w780"+t.movie.poster_path:void 0)+' alt="Card image" class="card-img"></div>':'<div style="margin-top:32%"></div>')+" "),t._ssrNode('<div class="card-body">',"</div>",[t._ssrNode('<h1 class="card-title">'+t._ssrEscape(t._s(t.movie.title))+"</h1> "),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("b-row",[r("b-col",{staticClass:"metadata",attrs:{md:"4"}},[r("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),t._v(" "),r("p",[t._v(t._s(t.movie.vote_average)+"/10")])]),t._v(" "),r("b-col",{attrs:{md:"8"}},[t._v(t._s(t.movie.release_date))])],1)],1)],1),t._ssrNode(' <p class="card-text">'+t._ssrEscape(t._s(t.movie.overview))+"</p> "),r("b-row",[t.movie.id&&(void 0===t.trailer||t.trailer.key)?r("b-col",{staticStyle:{"margin-top":"8px"},attrs:{sm:"12",md:"6",lg:"6"}},[r("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(e){return t.watchTrailer()}}},[t._v(t._s(t.$t("trailer.watch")))])]):t._e(),t._v(" "),t.movie.id?r("b-col",{staticStyle:{"margin-top":"8px"},attrs:{sm:"12",md:"6",lg:"6"}},[r("button",{staticClass:"btn btn-outline-warning align-right",attrs:{type:"button"},on:{click:t.toggleFavorite}},[t._v(t._s(t.favorite?t.$t("favorite.remove"):t.$t("favorite.add")))])]):t._e()],1)],2)],2)])}),[],!1,(function(t){var e=r(49);e.__inject__&&e.__inject__(t)}),null,"13451a4a");e.a=component.exports},49:function(t,e,r){"use strict";r.r(e);var o=r(47),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},50:function(t,e,r){(e=r(2)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Fredericka+the+Great);"]),e.push([t.i,".col-md-4,.description{padding:0}.description{font-family:Fredericka the Great,cursive;text-align:left}.card-header,.metadata{background:none;padding:0;position:relative;border-style:none}.metadata{font-size:16px}.metadata i,.metadata p{float:left}.metadata p{margin-top:0;margin-left:10px}.metadata i{color:#ff9d00;margin-top:5px;margin-left:1px}.card-img{-webkit-clip-path:inset(10% 0 20% 0);clip-path:inset(10% 0 20% 0);margin-top:-15%}.card-body{position:relative;margin-top:-30%;color:#9fa7a9}.card-body .card-title{font-weight:600;color:#414345}.card-body .card-text{margin-top:8px;font-weight:600;line-height:30px}.card,.trailer-preview{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.card:hover,.trailer-preview:hover{box-shadow:0 8px 18px rgba(0,0,0,.1),0 8px 8px rgba(0,0,0,.18)}.card{border-radius:8pt;border-style:none;overflow:hidden}.trailer-preview{position:absolute;top:-46px;right:24px;width:80px;height:80px;border-radius:50%;font-size:36px;text-align:left;padding-top:13px}.trailer-preview,.trailer-preview:active,.trailer-preview:disabled,.trailer-preview:focus,.trailer-preview:hover{background-color:#ff3d49;color:#fff}.trailer-preview i{margin-left:5px}",""]),t.exports=e},52:function(t,e,r){"use strict";var o={name:"MovieTable",components:{MovieCard:r(48).a},props:{movies:Array}},n=r(4),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",{staticStyle:{"padding-left":"15px","padding-right":"15px",color:"lightgray","margin-bottom":"4px"}},[t.movies?r("span",[t._v("Showing you "+t._s(t.movies.results.length+" out of "+t.movies.total_results))]):r("span",[t._v(t._s(t.$t("search.no_search")))])]),t._ssrNode(" "),r("b-row",t._l(t.movies.results,(function(t){return r("b-col",{key:t.id,staticStyle:{"margin-top":"20px"},attrs:{md:"6",lg:"6",xl:"3"}},[r("MovieCard",{attrs:{movie:t}})],1)})),1)],2)}),[],!1,null,null,"1fda11f8");e.a=component.exports},55:function(t,e,r){"use strict";r.r(e);var o=r(48),n=r(52),l=r(8),d={name:"Category",components:{MovieCard:o.a,MovieTable:n.a},data:()=>({response:{},showLoader:!0}),computed:{category(){return this.$route.params.category},findMethod(){}},methods:{async searchOnline(t=1){return this.$mdb.movieByCategory({category:this.category,page:t,language:this.$i18n.locale})},async loadMore(){const t=await this.searchOnline((this.response.page||0)+1);t.results=this.response.results?[...this.response.results,...t.results]:t.results,this.response=t},async infiniteScroll(){this.showLoader=!1,await this.loadMore(),this.showLoader=!0}},async created(){this.category&&l.b.indexOf(this.category)>-1||this.$router.push("/"),this.loadMore()}},c=r(4),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.response&&t.response.results?t._ssrNode("<div>","</div>",[t._ssrNode("<h1>"+t._ssrEscape(t._s(t.$t("movie."+t.category)!="movie."+t.category?t.$t("movie."+t.category):t.$t("movie.byCategory",{category:t.category})))+"</h1> "),r("MovieTable",{attrs:{movies:t.response}}),t._ssrNode(" "),t.showLoader?r("infinite-loading",{on:{infinite:t.infiniteScroll}}):t._e()],2):"latest"===t.category&&t.response&&t.response.id?t._ssrNode("<div>","</div>",[t._ssrNode("<h1>"+t._ssrEscape(t._s(t.$t("movie.newest")))+"</h1> "),r("MovieCard",{attrs:{movie:t.response}})],2):t._ssrNode('<div class="row">',"</div>",[t._ssrNode('<div class="mx">',"</div>",[r("b-spinner",{staticClass:"mx",staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner"}})],1)])])}),[],!1,null,null,"c89d6042");e.default=component.exports}};