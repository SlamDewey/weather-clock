(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports={WeatherSettings:{TemperatureModes:["K","\xb0F","\xb0C"],SelectedMode:"\xb0F"},TimeSettings:{TimeModes:["24HR","12HR"],SelectedMode:"12HR",Alarms:[{h:9,m:0},{h:9,m:5}]},LocationSettings:{Zip:"19031",Country:"US"}}},23:function(e,t,a){e.exports=a(43)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(4),c=a(3),o=a(5),s=a(0),u=a.n(s),l=a(20),m=a.n(l),h=a(11),d=a(12),p=a(10),v=(a(28),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.icon,n=t.alt,r=t.width,i=t.height,c=t.dn;if(this.props.dn)e=c;else{var o=(new Date).getHours();e=o<20&&o>5?"d":"n"}return this.MakeImgComponent(this.getWeatherIconURL(a,e),n,r,i)}},{key:"MakeImgComponent",value:function(e,t,a,n){return a&&n||(a=n="50%"),u.a.createElement("div",{className:"weather-icon"},u.a.createElement("img",{src:e,alt:t,width:a,height:n}))}},{key:"getWeatherIconURL",value:function(e,t){if(e<233)return"weather_img/200-232.svg";if(e<322)return 300===e?"weather_img/300"+t+".svg":301===e?"weather_img/301.svg":314===e||321===e?"weather_img/314 321.svg":"weather_img/302 310 311 312 313.svg";if(e<532){if(500===e)return"weather_img/500"+t+".svg";if(501===e)return"weather_img/501.svg";if(502===e||531===e)return"weather_img/502 531.svg";if(503===e||504===e||522===e)return"weather_img/503 504 522.svg";if(511===e)return"weather_img/511.svg";if(520===e||521===e)return"weather_img/520 521.svg"}else if(e<623){if(600===e)return"weather_img/600"+t+".svg";if(601===e||602===e)return"weather_img/601 602.svg";if(611===e||615===e||616===e||620===e)return"weather_img/611 615 616 620.svg";if(612===e||613===e)return"weather_img/612 613"+t+".svg";if(621===e||622===e)return"weather_img/621 622.svg";if(520===e||521===e)return"weather_img/520 521.svg"}else if(e<782){if(701===e||711===e||731===e||751===e||761===e||762===e)return"weather_img/701 711 731 751 761 762.svg";if(721===e)return"weather_img/721.svg";if(741===e)return"weather_img/741.svg";if(771===e)return"weather_img/771.svg";if(781===e)return"weather_img/781.svg"}else{if(!(e<805))return null;if(800===e)return"weather_img/800"+t+".svg";if(801===e||802===e)return"weather_img/801 802"+t+".svg";if(803===e||804===e)return"weather_img/803 804.svg"}}}]),t}(s.Component)),f=(a(29),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"TempMode",value:function(){return p.WeatherSettings.SelectedMode}},{key:"parse_temp",value:function(e){switch(this.TempMode()){case"K":return e.toFixed(0);case"\xb0F":return(1.8*(e-273.15)+32).toFixed(0);case"\xb0C":return(e-273.15).toFixed(0);default:return"Invalid Temperature Mode"}}},{key:"parse_date",value:function(e){var t=new Date(e);return t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()}},{key:"render",value:function(){var e=this.props,t=e.date,a=e.high,n=e.low,r=e.icon,i=e.dn;return u.a.createElement("div",{className:"weather-tile"},u.a.createElement("div",{className:"date"},this.parse_date(t)),u.a.createElement("div",{className:"temp"},u.a.createElement("div",{className:"small-temp-text"},this.parse_temp(n),"--\x3e",this.parse_temp(a))),u.a.createElement("div",{className:"weather-icon"},u.a.createElement(v,{icon:r,dn:i})))}}]),t}(s.Component));function g(e,t,a,n){this.date=e,this.low=t,this.high=a,this.icon=n}var w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={error:"",temperature:0,city:"Unknown",humidity:"Unknown ",description:"Unknown ",weather_tiles:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"GetWeatherData",value:function(e,t){var a=this;fetch("https://api.openweathermap.org/data/2.5/weather?zip="+e+","+t+"&appid=c1d16b8b18a14269d269f0f4e6b614b8").then(function(e){return e.json()}).then(function(e){a.setState({temperature:e.main.temp,city:e.name,humidity:e.main.humidity,description:e.weather[0].description,icon_id:e.weather[0].id,error:""})},function(e){a.setState({error:e})}),fetch("https://api.openweathermap.org/data/2.5/forecast?zip="+e+","+t+"&appid=c1d16b8b18a14269d269f0f4e6b614b8").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<3;n++){var r=e.list[8*n+2],i=e.list[8*n+4],c=e.list[8*n+6];t[n]=new g(i.dt_txt,r.main.temp_min,c.main.temp_max,i.weather[0].id)}a.setState({weather_tiles:t})},function(e){a.setState({error:e})})}},{key:"TempMode",value:function(){return p.WeatherSettings.SelectedMode}},{key:"parse_temp",value:function(e){switch(this.TempMode()){case"K":return e.toFixed(0);case"\xb0F":return(1.8*(e-273.15)+32).toFixed(0);case"\xb0C":return(e-273.15).toFixed(0);default:return"Invalid Temperature Mode"}}},{key:"componentDidMount",value:function(){var e=this;this.GetWeatherData(this.props.zip,this.props.country),this.timerID=setInterval(function(){return e.tick()},6e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.GetWeatherData(this.props.zip,this.props.country)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.temperature,n=e.city,r=e.humidity,i=e.description,c=e.icon_id,o=this.props.country,s=this.state.weather_tiles,l=this.TempMode();return t?"Error":u.a.createElement("div",{className:"weather-container"},u.a.createElement("div",{className:"weather-attrib-container"},u.a.createElement("div",{className:"weather-attrib",id:"temperature"},this.parse_temp(a),l),u.a.createElement("div",{className:"weather-attrib",id:"icon"},u.a.createElement(v,{icon:c})),u.a.createElement("div",{className:"weather-attrib",id:"details"},"Humidity: ",r,"% ----- ",i,u.a.createElement("br",null),n,", ",o)),u.a.createElement("div",{className:"weather-tiles-container"},this.mapWeatherTiles(s)))}},{key:"mapWeatherTiles",value:function(e){return e.map(function(e,t){return u.a.createElement(f,{key:t,date:e.date,low:e.low,high:e.high,icon:e.icon,dn:"d"})})}}]),t}(s.Component),b=(a(30),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={date:new Date},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"TimeMode",value:function(){return p.TimeSettings.SelectedMode}},{key:"parse_time",value:function(){var e=this.TimeMode(),t=this.state.date,a=t.getHours(),n=t.getMinutes().toString().padStart(2,"0"),r="";switch(e){case"24HR":r=a.toString().padStart(2,"0")+":"+n;break;case"12HR":var i=a%12;r=(0===i?12:i)+":"+n+(a>=12?"p":"a");break;default:r="Invalid Time Mode"}return r}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this.state.date,t=e.getMonth()+1,a=e.getDate(),n=e.getFullYear().toString().padStart(4,"0");return u.a.createElement("div",{className:"time-container"},u.a.createElement("div",{className:"display-container"},u.a.createElement("div",{className:"time-display"},this.parse_time()),u.a.createElement("div",{className:"date-display"},t,"/",a,"/",n)))}}]),t}(s.Component)),y=(a(31),"sbcont"),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={container:y},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.href;return u.a.createElement(d.b,{to:e},u.a.createElement("div",{className:"sbcont"},u.a.createElement("div",{className:"bar1"}),u.a.createElement("div",{className:"bar2"}),u.a.createElement("div",{className:"bar3"})))}}]),t}(s.Component),j=(a(40),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"Location",value:function(){return[p.LocationSettings.Zip,p.LocationSettings.Country]}},{key:"render",value:function(){var e=this.Location(),t=e[0],a=e[1];return u.a.createElement("div",{className:"home"},u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"content-column",id:"time"},u.a.createElement(b,{zip:t,country:a})),u.a.createElement("div",{className:"content-column",id:"weather"},u.a.createElement(w,{zip:t,country:a}))),u.a.createElement("div",{className:"bottom-panel"},u.a.createElement(E,{href:"/settings"})),u.a.createElement("div",{className:"copyright"},"Copyright ","\xa9"," 2019 Jared Massa"))}}]),t}(s.Component)),k=(a(41),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"settings-content"},u.a.createElement(d.b,{to:"/"},u.a.createElement("div",{className:"back-button"},"<< Go Back")),u.a.createElement("div",{className:"options-section"}))}}]),t}(s.Component)),O=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{style:{color:"white",textAlign:"center",width:"100%",height:"100%"}},u.a.createElement("h1",null,"404"),u.a.createElement("h3",null,"Page not found."),u.a.createElement("p",null,"There's only two pages on this site...  What were you looking for?"))}}]),t}(s.Component);a(42),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=document.getElementById("root"),N=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(h.c,null,u.a.createElement(h.a,{exact:!0,path:"/",component:j}),u.a.createElement(h.a,{path:"/settings",component:k}),u.a.createElement(h.a,{component:O}))}}]),t}(s.Component);m.a.render(u.a.createElement(d.a,null,u.a.createElement(N,null)),_),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.3750e38a.chunk.js.map