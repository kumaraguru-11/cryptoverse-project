(self.webpackChunkcryptoverse_recreation=self.webpackChunkcryptoverse_recreation||[]).push([[293],{6e3:function(e,t,n){"use strict";var r=n(9439),a=n(2791),s=n(9140),i=n(1389),c=n(1087),o=n(6048),l=n.n(o),u=n(184);t.Z=function(e){var t=e.coins,n=(0,a.useState)(0),o=(0,r.Z)(n,2),d=o[0],h=o[1],f=d+10,m=t&&t.slice(d,f),p=t?Math.ceil(t.length/10):1;return(0,u.jsxs)("div",{className:"p-3",children:[(0,u.jsx)("div",{className:"row",children:t&&m.map((function(e){return(0,u.jsx)("div",{className:"col-md-6 col-sm-6 col-lg-4 mb-4",children:(0,u.jsxs)(s.Z,{style:{minWidth:"10rem"},children:[(0,u.jsx)(s.Z.Body,{children:(0,u.jsxs)(c.OL,{to:"/crypto/".concat(e.uuid),className:"text-decoration-none text-dark",children:[(0,u.jsxs)("span",{className:"d-flex border-bottom justify-content-between align-items-center p-2",children:[(0,u.jsx)(s.Z.Title,{children:e.name}),(0,u.jsx)("img",{src:e.iconUrl,alt:e.name,width:40,height:40})]}),(0,u.jsxs)(s.Z.Text,{className:"border-bottom",children:[(0,u.jsxs)("div",{className:"d-flex justify-content-between m-3",children:[(0,u.jsx)("span",{className:"fw-semibold fs-5",children:"Price:"}),(0,u.jsx)("span",{children:(0,i.ZP)(parseFloat(e.price))})]}),(0,u.jsxs)("div",{className:"m-3 d-flex justify-content-between",children:[(0,u.jsx)("span",{className:"fw-semibold fs-5",children:"Market Cap:"}),(0,u.jsx)("span",{children:(0,i.ZP)(parseFloat(e.marketCap))})]}),(0,u.jsxs)("div",{className:"m-3 d-flex justify-content-between",children:[(0,u.jsx)("span",{className:"fw-semibold fs-5",children:"Daily Change:"}),(0,u.jsx)("span",{children:(0,i.ZP)(parseFloat(e.change))})]})]})]})}),(0,u.jsxs)("div",{className:"d-flex justify-content-around mb-3",children:[(0,u.jsx)(c.rU,{className:"text-decoration-none opacity-75 Card_Link fs-6",to:"/market/".concat(e.uuid),children:"View Markets"}),(0,u.jsx)(c.rU,{className:"text-decoration-none opacity-75 Card_Link fs-6",to:"/exchange/".concat(e.uuid),children:"View Exchanges"})]})]})},e.uuid)}))}),(0,u.jsx)(l(),{breakLabel:"...",nextLabel:"next >",onPageChange:function(e){var n=10*e.selected%t.length;h(n)},pageRangeDisplayed:5,pageCount:p,previousLabel:"< previous",renderOnZeroPageCount:null,containerClassName:"pagination",pageClassName:"page-num",previousLinkClassName:"page-num",nextLinkClassName:"page-num",activeLinkClassName:"active"})]})}},3865:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});n(2791);var r=n(9140),a=n(7892),s=n.n(a),i=n(130),c=n.n(i);function o(e){var t=new Date(e),n=((new Date).getTime()-t.getTime())/1e3,r=n/60,a=r/60,s=a/24,i=s/7,c=s/30;return c>=1?"".concat(Math.floor(c)," month").concat(Math.floor(c)>1?"s":""," ago"):i>=1?"".concat(Math.floor(i)," week").concat(Math.floor(i)>1?"s":""," ago"):s>=1?"".concat(Math.floor(s)," day").concat(Math.floor(s)>1?"s":""," ago"):a>=1?"".concat(Math.floor(a)," hour").concat(Math.floor(a)>1?"s":""," ago"):r>=1?"".concat(Math.floor(r)," minute").concat(Math.floor(r)>1?"s":""," ago"):n>=1?"".concat(Math.floor(n)," second").concat(Math.floor(n)>1?"s":""," ago"):"just now"}s().extend(c());var l=n(184),u=function(e){return(0,l.jsx)("div",{className:"p-2",children:(0,l.jsx)("div",{className:"row",children:e.feeds.map((function(e,t){return(0,l.jsx)("div",{className:" p-3 col-md-6 col-sm-6 col-lg-4",children:(0,l.jsx)("a",{href:e.url,target:"_blank",title:e.name,rel:"noreferrer",className:"text-decoration-none",children:(0,l.jsx)(r.Z,{style:{minWidth:"5rem"},children:(0,l.jsxs)(r.Z.Body,{children:[(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsx)(r.Z.Title,{className:"NewsCard_Title",children:e.name}),(0,l.jsx)("img",{src:e.image&&e.image.thumbnail.contentUrl,alt:e.name,width:80,height:80})]}),(0,l.jsxs)("div",{className:"d-flex opacity-75 justify-content-between",children:[(0,l.jsxs)(r.Z.Subtitle,{className:"mb-2 text-muted fs-6 my-3 fw-normal",children:[(0,l.jsxs)("span",{children:[" ",(0,l.jsx)("i",{className:"bi bi-person mx-2"})]}),e.provider[0].name]}),(0,l.jsxs)(r.Z.Subtitle,{className:"mb-2 text-muted fs-6 my-3 fw-normal",children:[(0,l.jsxs)("span",{children:[" ",(0,l.jsx)("i",{className:"bi bi-calendar4 mx-2 "})]}),o(e.datePublished)]})]}),(0,l.jsx)(r.Z.Text,{className:"my-2",children:e.description})]})})})},t)}))})})}},8892:function(e,t,n){"use strict";n.d(t,{L:function(){return s},Nu:function(){return i},Xj:function(){return c},ot:function(){return o}});n(45);var r=n(1389),a=n(184),s=["3h","24h","7d","30d","1y","3m","3y","5y"],i=function(e){return[{title:"Number Of Markets",value:e.numberOfMarkets,icon:"bi bi-graph-up"},{title:"Number Of Exchanges",value:e.numberOfExchanges,icon:"bi bi-currency-yen"},{title:"Aprroved Supply",value:e.supply.confirmed?(0,a.jsx)("i",{className:"bi bi-check-lg"}):(0,a.jsx)("i",{className:"bi bi-slash-circle"}),icon:"bi bi-exclamation-circle"},{title:"Total Supply",value:"$ ".concat((0,r.ZP)(parseFloat(e.supply.total))),icon:"bi bi-exclamation-circle"},{title:"Circulating Supply",value:"$ ".concat((0,r.ZP)(parseFloat(e.supply.max))),icon:"bi bi-exclamation-circle"}]},c=function(e){return[{title:"Price to USD",value:"$ ".concat(e.price&&(0,r.ZP)(parseFloat(e.price))),icon:"bi bi-currency-dollar"},{title:"Rank",value:e.rank,icon:"bi bi-hash"},{title:"24h Volume",value:"$ ".concat(e["24hVolume"]&&(0,r.ZP)(parseFloat(e["24hVolume"]))),icon:"bi bi-lightning"},{title:"Market Cap",value:"$ ".concat(e.marketCap&&(0,r.ZP)(parseFloat(e.marketCap))),icon:"bi bi-currency-dollar"},{title:"All-time-high(daily avg.)",value:"$ ".concat((0,r.ZP)(parseFloat(e.allTimeHigh.price))),icon:"bi bi-currency-dollar"}]},o=function(e){return[{title:"Total Cryptocurriencies",value:"".concat(e.totalCoins&&(0,r.ZP)(parseFloat(e.totalCoins))),icon:(0,a.jsx)("i",{className:"bi bi-exclamation-circle"})},{title:"Total Exchanges",value:"".concat(e.totalExchanges&&(0,r.ZP)(parseFloat(e.totalExchanges))),icon:(0,a.jsx)("i",{className:"bi bi-currency-yen"})},{title:"Total Market Cap",value:"".concat(e.totalMarketCap&&(0,r.ZP)(parseFloat(e.totalMarketCap))),icon:(0,a.jsx)("i",{className:"bi bi-currency-dollar"})},{title:"Total 24 Volume",value:"".concat(e.total24hVolume&&(0,r.ZP)(parseFloat(e.total24hVolume))),icon:(0,a.jsx)("i",{className:"bi bi-lightning"})},{title:"Total Market",value:"".concat(e.totalMarkets&&(0,r.ZP)(parseFloat(e.totalMarkets))),icon:(0,a.jsx)("i",{className:"bi bi-currency-dollar"})}]}},7898:function(e,t,n){"use strict";n(2791);var r=n(9385),a=n(184);function s(e){return e.loading?(0,a.jsx)(r.Z,{}):e.error?e.error:e.fulfilled?e.children:(0,a.jsx)(a.Fragment,{children:"Something has happened"})}s.defaultProps={loading:!0,fulfilled:!1,error:null,children:(0,a.jsx)(a.Fragment,{})},t.Z=s},4293:function(e,t,n){"use strict";n.r(t);n(2791);var r=n(3958),a=n(3545),s=n(7898),i=n(8892),c=n(6e3),o=n(3865),l=n(184);t.default=function(){var e=(0,r.VS)({limit:10}),t=e.data,n=e.isLoading,u=e.error,d=(0,a._)({query:"Cryptocurrencies",count:6}),h=d.data,f=d.error,m=d.isLoading;return(0,l.jsx)(s.Z,{fulfilled:Boolean(t&&h),error:u||f,loading:n||m,children:Boolean(t&&h)&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"p-4 my-3",children:[(0,l.jsx)("h4",{className:"fw-normal",children:"Global Crypto Stats"}),(0,l.jsxs)("div",{className:"p-3",children:[(0,l.jsx)("div",{className:"row",children:(0,i.ot)(t.data.stats).map((function(e){return(0,l.jsxs)("div",{className:"col-md-6 col-sm-6 col-lg-4 my-3",children:[(0,l.jsx)("div",{className:"opacity-75",children:e.title}),(0,l.jsxs)("div",{className:"fs-4",children:[e.icon,e.value]})]},e.title)}))}),(0,l.jsx)("h3",{className:"fw-normal mt-5",children:"Top 10 Crypto Currencies in the World"}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsx)(c.Z,{coins:t.data.coins})}),(0,l.jsx)("h3",{className:"fw-normal mt-3",children:" Latest Cryptocurrencies News"}),(0,l.jsx)("div",{className:"my-3",children:(0,l.jsx)(o.Z,{feeds:h.value})})]})]})})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",s="minute",i="hour",c="day",o="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,x={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,l),s=n-a<0,i=t.clone().add(r+(s?-1:1),l);return+(-(r+(n-a)/(s?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:c,D:h,h:i,m:s,s:a,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",b={};b[g]=x;var $=function(e){return e instanceof w},j=function e(t,n,r){var a;if(!t)return g;if("string"==typeof t){var s=t.toLowerCase();b[s]&&(a=s),n&&(b[s]=n,a=s);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var c=t.name;b[c]=t,a=c}return!r&&a&&(g=a),a||!r&&g},M=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},N=y;N.l=j,N.i=$,N.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function x(e){this.$L=j(e.locale,null,!0),this.parse(e)}var v=x.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(N.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var a=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return N},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return M(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<M(e)},v.$g=function(e,t,n){return N.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!N.u(t)||t,u=N.p(e),f=function(e,t){var a=N.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(c)},m=function(e,t){return N.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,x=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case l:return r?f(1,x):f(0,x+1);case o:var g=this.$locale().weekStart||0,b=(p<g?p+7:p)-g;return f(r?v-b:v+(6-b),x);case c:case h:return m(y+"Hours",0);case i:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case a:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,o=N.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[c]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[i]=u+"Hours",n[s]=u+"Minutes",n[a]=u+"Seconds",n[r]=u+"Milliseconds",n)[o],m=o===c?this.$D+(t-this.$W):t;if(o===l||o===d){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[N.p(e)]()},v.add=function(r,u){var h,f=this;r=Number(r);var m=N.p(u),p=function(e){var t=M(f);return N.w(t.date(t.date()+Math.round(e*r)),f)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===c)return p(1);if(m===o)return p(7);var x=(h={},h[s]=t,h[i]=n,h[a]=e,h)[m]||1,v=this.$d.getTime()+r*x;return N.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=N.z(this),s=this.$H,i=this.$m,c=this.$M,o=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,a,s){return e&&(e[n]||e(t,r))||a[n].slice(0,s)},h=function(e){return N.s(s%12||12,e,"0")},m=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return N.s(t.$y,4,"0");case"M":return c+1;case"MM":return N.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,l,3);case"MMMM":return d(l,c);case"D":return t.$D;case"DD":return N.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return N.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(s,i,!0);case"A":return m(s,i,!1);case"m":return String(i);case"mm":return N.s(i,2,"0");case"s":return String(t.$s);case"ss":return N.s(t.$s,2,"0");case"SSS":return N.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,f){var m,p=this,x=N.p(h),v=M(r),y=(v.utcOffset()-this.utcOffset())*t,g=this-v,b=function(){return N.m(p,v)};switch(x){case d:m=b()/12;break;case l:m=b();break;case u:m=b()/3;break;case o:m=(g-y)/6048e5;break;case c:m=(g-y)/864e5;break;case i:m=g/n;break;case s:m=g/t;break;case a:m=g/e;break;default:m=g}return f?m:N.a(m)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return b[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=j(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return N.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},x}(),k=w.prototype;return M.prototype=k,[["$ms",r],["$s",a],["$m",s],["$H",i],["$W",c],["$M",l],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,w,M),e.$i=!0),M},M.locale=j,M.isDayjs=$,M.unix=function(e){return M(1e3*e)},M.en=b[g],M.Ls=b,M.p={},M}()},130:function(e){e.exports=function(){"use strict";return function(e,t,n){e=e||{};var r=t.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(e,t,n,a){return r.fromToBase(e,t,n,a)}n.en.relativeTime=a,r.fromToBase=function(t,r,s,i,c){for(var o,l,u,d=s.$locale().relativeTime||a,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,m=0;m<f;m+=1){var p=h[m];p.d&&(o=i?n(t).diff(s,p.d,!0):s.diff(t,p.d,!0));var x=(e.rounding||Math.round)(Math.abs(o));if(u=o>0,x<=p.r||!p.r){x<=1&&m>0&&(p=h[m-1]);var v=d[p.l];c&&(x=c(""+x)),l="string"==typeof v?v.replace("%d",x):v(x,r,p.l,u);break}}if(r)return l;var y=u?d.future:d.past;return"function"==typeof y?y(l):y.replace("%s",l)},r.to=function(e,t){return s(e,t,this,!0)},r.from=function(e,t){return s(e,t,this)};var i=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(i(this),e)},r.fromNow=function(e){return this.from(i(this),e)}}}()}}]);
//# sourceMappingURL=293.2a689121.chunk.js.map