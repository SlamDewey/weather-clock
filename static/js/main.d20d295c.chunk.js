(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports={WeatherSettings:{TemperatureModes:["K","\xb0F","\xb0C"],SelectedMode:"\xb0F"},TimeSettings:{TimeModes:["24HR","12HR"],SelectedMode:"12HR"},LocationSettings:{Zip:"19031",Country:"US"}}},,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(8),o=n.n(r),s=(n(15),n(2)),m=n(3),c=n(5),u=n(4),h=n(6),g=n(1),p=(n(16),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={error:"",temperature:0,city:"Unknown",humidity:"Unknown ",description:"Unknown ",list:[]},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"GetWeatherData",value:function(e,t){var n=this;fetch("https://api.openweathermap.org/data/2.5/weather?zip="+e+","+t+"&appid=c1d16b8b18a14269d269f0f4e6b614b8").then(function(e){return e.json()}).then(function(e){n.setState({temperature:e.main.temp,city:e.name,humidity:e.main.humidity,description:e.weather[0].description,icon_id:e.weather[0].id,error:""})},function(e){n.setState({error:e})}),fetch("api.openweathermap.org/data/2.5/forecast/daily?zip="+e+","+t+"&appid=c1d16b8b18a14269d269f0f4e6b614b8")}},{key:"TempMode",value:function(){return g.WeatherSettings.SelectedMode}},{key:"parse_temp",value:function(e){switch(this.TempMode()){case"K":return e;case"\xb0F":return(1.8*(e-273.15)+32).toFixed(2);case"\xb0C":return(e-273.15).toFixed(2);default:return"Invalid Temperature Mode"}}},{key:"componentDidMount",value:function(){var e=this;this.GetWeatherData(this.props.zip,this.props.country),this.timerID=setInterval(function(){return e.tick()},6e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.GetWeatherData(this.props.zip,this.props.country)}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.temperature,i=e.city,r=e.humidity,o=e.description,s=e.icon_id,m=this.props.country,c=this.TempMode();return t?"Error":a.a.createElement("div",{className:"weather-container"},a.a.createElement("div",{className:"weather-attrib",id:"conditions"},this.parse_temp(n)," ",c,a.a.createElement("br",null),"Humidity: ",r,"%"),a.a.createElement("div",{className:"weather-attrib",id:"description"},this.getWeatherImage(s),a.a.createElement("br",null),o),a.a.createElement("div",{className:"weather-attrib",id:"location"},i,", ",m))}},{key:"MakeImgComponent",value:function(e,t,n,i){return n&&i||(n=i=100),a.a.createElement("div",{className:"weather-icon"},a.a.createElement("img",{src:e,alt:t,width:n,height:i}))}},{key:"getWeatherImage",value:function(e){if(e<233)return this.MakeImgComponent("weather_img/200-232.svg");if(e<322)return 300===e?this.MakeImgComponent("weather_img/300d.svg"):301===e?this.MakeImgComponent("weather_img/301.svg"):314===e||321===e?this.MakeImgComponent("weather_img/314 321.svg"):this.MakeImgComponent("weather_img/302 310 311 312 313.svg");if(e<532){if(500===e)return this.MakeImgComponent("weather_img/500d.svg");if(501===e)return this.MakeImgComponent("weather_img/501.svg");if(502===e||531===e)return this.MakeImgComponent("weather_img/502 531.svg");if(503===e||504===e||522===e)return this.MakeImgComponent("weather_img/503 504 522.svg");if(511===e)return this.MakeImgComponent("weather_img/511.svg");if(520===e||521===e)return this.MakeImgComponent("weather_img/520 521.svg")}else if(e<623){if(600===e)return this.MakeImgComponent("weather_img/600d.svg");if(601===e||602===e)return this.MakeImgComponent("weather_img/601 602.svg");if(611===e||615===e||616===e||620===e)return this.MakeImgComponent("weather_img/611 615 616 620.svg");if(612===e||613===e)return this.MakeImgComponent("weather_img/612 613d.svg");if(621===e||622===e)return this.MakeImgComponent("weather_img/621 622.svg");if(520===e||521===e)return this.MakeImgComponent("weather_img/520 521.svg")}else if(e<782){if(701===e||711===e||731===e||751===e||761===e||762===e)return this.MakeImgComponent("weather_img/701 711 731 751 761 762.svg");if(721===e)return this.MakeImgComponent("weather_img/721.svg");if(741===e)return this.MakeImgComponent("weather_img/741.svg");if(771===e)return this.MakeImgComponent("weather_img/771.svg");if(781===e)return this.MakeImgComponent("weather_img/781.svg")}else{if(!(e<805))return null;if(800===e)return this.MakeImgComponent("weather_img/800d.svg");if(801===e||802===e)return this.MakeImgComponent("weather_img/801 802d.svg");if(803===e||804===e)return this.MakeImgComponent("weather_img/803 804.svg")}}}]),t}(i.Component)),l=(n(17),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={date:new Date},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"TimeMode",value:function(){return g.TimeSettings.SelectedMode}},{key:"parse_time",value:function(){var e=this.TimeMode(),t=this.state.date,n=t.getHours(),i=t.getMinutes().toString().padStart(2,"0"),a="";switch(e){case"24HR":a=n+":"+i;break;case"12HR":var r=n%12;a=r+":"+i+(r!==n?"p":"a");break;default:a="Invalid Time Mode"}return a}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this.state.date,t=e.getMonth()+1,n=e.getDate(),i=e.getFullYear().toString().padStart(4,"0");return a.a.createElement("div",{className:"time-container"},a.a.createElement("div",{className:"display-container"},a.a.createElement("div",{className:"time-display"},this.parse_time()),a.a.createElement("div",{className:"date-display"},t,"/",n,"/",i)))}}]),t}(i.Component)),d=(n(18),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"Location",value:function(){return[g.LocationSettings.Zip,g.LocationSettings.Country]}},{key:"render",value:function(){var e=this.Location(),t=e[0],n=e[1];return a.a.createElement("div",{className:"content"},a.a.createElement(p,{zip:t,country:n}),a.a.createElement(l,{zip:t,country:n}))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.d20d295c.chunk.js.map