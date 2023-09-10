(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});r(2791);var n=r(1087),i=r(6842),s=r(7892),a=r.n(s),o=r(184),u=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("/personal-portfolio").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"FoundIt",subtitle:"Lost and Found for Conestoga College",link:"https://github.com/patelrootul1/FoundIt",image:"/images/projects/FoundIt_Brochure.png",date:"2023-08-19",desc:"Cross Platform mobile application using React Native frameworkLeveraged Firebase auth,firestore and storage for backend services;Deployed on expo servers by making it production ready;"},{title:"Trade Social",subtitle:"Social Media for crypto Traders",link:"https://github.com/AryanAmin/SafeSphere",image:"/images/projects/TradeSocial.png",date:"2023-06-22",desc:"Implemented Airstack APIs to fetch the data using the user address;React.js was used to develop the application;Won prize at ethGlobal Waterloo 2023"},{title:"Weather based Electricity Consumption Prediction Using Big Data Analytics",subtitle:"Machine Learning Model Predicting Electricity Consumption",link:"https://github.com/patelrootul1/weather-app",image:"/images/projects/electricity.jpeg",date:"2021-05-22",desc:"Implemented Supervised Learning machine learning for electricity comsumption prediction;Implemented the models using Python, Jupyter Notebooks and hosted it on Heroku;The Accuracy of the model was 88%"},{title:"Conestoga Ticket Reservation Application",subtitle:"C# WPF Framework",link:"https://github.com/patelrootul1/Conestoga_Seat_Reservation",image:"/images/projects/Movie_Reservation.jpg",date:"2022-06-25",desc:"Implemented C# WPF Framework for reservation system;Used Object Oriented Programming by creating seat class for leveraging MVC design pattern;Implemented XML Serialization/Deserialization for saving the reservation locally."},{title:"Android Grading App",subtitle:"Implemented Android application using Java",link:"https://github.com/patelrootul1/GradingApp",image:"/images/projects/Grading.jpg",date:"2022-12-05",desc:"Implemented CRUD database using Sqlite for effective storage of database;Used Object Oriented Programming by creating student class which would allow storing data using object;Implemented Navigation Drawer, Recycler view and Fragments for smooth operations."}],l=function(){return(0,o.jsx)(i.Z,{title:"Projects",description:"Learn about Rootul Patel's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(n.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),c.map((function(t){return(0,o.jsx)(u,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},$=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:$,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+$(n,2,"0")+":"+$(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),s=r-i<0,a=e.clone().add(n+(s?-1:1),c);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:h,h:a,m:s,s:i,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=g;var b=function(t){return t instanceof j},D=function t(e,r,n){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),r&&(M[s]=r,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,i=o}return!n&&i&&(y=i),i||!n&&y},S=function(t,e){if(b(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new j(r)},w=v;w.l=D,w.i=b,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function g(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=g.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return w},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},$.isAfter=function(t,e){return S(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<S(t)},$.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var r=this,n=!!w.u(e)||e,l=w.p(t),f=function(t,e){var i=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(o)},m=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},p=this.$W,g=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return n?f(1,0):f(31,11);case c:return n?f(1,g):f(0,g+1);case u:var y=this.$locale().weekStart||0,M=(p<y?p+7:p)-y;return f(n?$-M:$+(6-M),g);case o:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case i:return m(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var r,u=w.p(t),l="set"+(this.$u?"UTC":""),f=(r={},r[o]=l+"Date",r[h]=l+"Date",r[c]=l+"Month",r[d]=l+"FullYear",r[a]=l+"Hours",r[s]=l+"Minutes",r[i]=l+"Seconds",r[n]=l+"Milliseconds",r)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[w.p(t)]()},$.add=function(n,l){var h,f=this;n=Number(n);var m=w.p(l),p=function(t){var e=S(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(m===c)return this.set(c,this.$M+n);if(m===d)return this.set(d,this.$y+n);if(m===o)return p(1);if(m===u)return p(7);var g=(h={},h[s]=e,h[a]=r,h[i]=t,h)[m]||1,$=this.$d.getTime()+n*g;return w.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=r.meridiem,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},h=function(t){return w.s(s%12||12,t,"0")},m=l||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return d(r.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(r.weekdaysMin,e.$W,u,2);case"ddd":return d(r.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(s);case"HH":return w.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,h,f){var m,p=this,g=w.p(h),$=S(n),v=($.utcOffset()-this.utcOffset())*e,y=this-$,M=function(){return w.m(p,$)};switch(g){case d:m=M()/12;break;case c:m=M();break;case l:m=M()/3;break;case u:m=(y-v)/6048e5;break;case o:m=(y-v)/864e5;break;case a:m=y/r;break;case s:m=y/e;break;case i:m=y/t;break;default:m=y}return f?m:w.a(m)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=D(t,e,!0);return n&&(r.$L=n),r},$.clone=function(){return w.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},g}(),k=j.prototype;return S.prototype=k,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",d],["$D",h]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,j,S),t.$i=!0),S},S.locale=D,S.isDayjs=b,S.unix=function(t){return S(1e3*t)},S.en=M[y],S.Ls=M,S.p={},S}()}}]);
//# sourceMappingURL=161.4025394b.chunk.js.map