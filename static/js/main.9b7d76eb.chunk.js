(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(5),o=a(3),c=a(4),s=a(0),l=a.n(s),u=a(23),m=a.n(u),h=a(12),d=a(14),p=a(13),f=a(11),v=a(7),g=(a(31),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.icon,n=t.alt,r=t.width,i=t.height,o=t.dn;if(this.props.dn)e=o;else{var c=(new Date).getHours();e=c<20&&c>5?"d":"n"}return this.MakeImgComponent(this.getWeatherIconURL(a,e),n,r,i)}},{key:"MakeImgComponent",value:function(e,t,a,n){return a&&n||(a=n="50%"),l.a.createElement("div",{className:"weather-icon"},l.a.createElement("img",{src:e,alt:t,width:a,height:n}))}},{key:"getWeatherIconURL",value:function(e,t){if(e<233)return"weather_img/200-232.svg";if(e<322)return 300===e?"weather_img/300"+t+".svg":301===e?"weather_img/301.svg":314===e||321===e?"weather_img/314 321.svg":"weather_img/302 310 311 312 313.svg";if(e<532){if(500===e)return"weather_img/500"+t+".svg";if(501===e)return"weather_img/501.svg";if(502===e||531===e)return"weather_img/502 531.svg";if(503===e||504===e||522===e)return"weather_img/503 504 522.svg";if(511===e)return"weather_img/511.svg";if(520===e||521===e)return"weather_img/520 521.svg"}else if(e<623){if(600===e)return"weather_img/600"+t+".svg";if(601===e||602===e)return"weather_img/601 602.svg";if(611===e||615===e||616===e||620===e)return"weather_img/611 615 616 620.svg";if(612===e||613===e)return"weather_img/612 613"+t+".svg";if(621===e||622===e)return"weather_img/621 622.svg";if(520===e||521===e)return"weather_img/520 521.svg"}else if(e<782){if(701===e||711===e||731===e||751===e||761===e||762===e)return"weather_img/701 711 731 751 761 762.svg";if(721===e)return"weather_img/721.svg";if(741===e)return"weather_img/741.svg";if(771===e)return"weather_img/771.svg";if(781===e)return"weather_img/781.svg"}else{if(!(e<805))return null;if(800===e)return"weather_img/800"+t+".svg";if(801===e||802===e)return"weather_img/801 802"+t+".svg";if(803===e||804===e)return"weather_img/803 804.svg"}}}]),t}(s.Component)),b=(a(32),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"TempMode",value:function(){var e=(new f.a).get("temp_mode");return e||v.WeatherSettings.DefaultMode}},{key:"parse_temp",value:function(e){switch(this.TempMode()){case"K":return e.toFixed(0);case"\xb0F":return(1.8*(e-273.15)+32).toFixed(0);case"\xb0C":return(e-273.15).toFixed(0);default:return"Invalid Temperature Mode"}}},{key:"parse_date",value:function(e){var t=new Date(e);return t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()}},{key:"render",value:function(){var e=this.props,t=e.date,a=e.morn,n=e.noon,r=e.eve,i=e.icon,o=e.dn;return l.a.createElement("div",{className:"weather-tile"},l.a.createElement("div",{className:"weather-tile-date"},this.parse_date(t)),l.a.createElement("div",{className:"temp"},l.a.createElement("div",{className:"small-temp-text"},l.a.createElement("table",{style:{margin:"auto",width:"75%",minWidth:"95px"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"6am:"),l.a.createElement("td",null,this.parse_temp(a)," ",this.TempMode())),l.a.createElement("tr",null,l.a.createElement("td",null,"12pm:"),l.a.createElement("td",null,this.parse_temp(n)," ",this.TempMode())),l.a.createElement("tr",null,l.a.createElement("td",null,"6pm:"),l.a.createElement("td",null,this.parse_temp(r)," ",this.TempMode())))))),l.a.createElement("div",{className:"weather-icon-container"},l.a.createElement(g,{icon:i,dn:o})))}}]),t}(s.Component));function w(e,t,a,n,r){this.date=e,this.morn=t,this.noon=a,this.eve=n,this.icon=r}var E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={error:"",temperature:0,city:"Unknown",country:"Unknown",humidity:"Unknown ",description:"Unknown ",weather_tiles:[]},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"GetWeatherData",value:function(e,t){var a=this;fetch("https://api.openweathermap.org/data/2.5/weather?lat="+e+"&lon="+t+"&appid=c1d16b8b18a14269d269f0f4e6b614b8").then(function(e){return e.json()}).then(function(e){a.setState({temperature:e.main.temp,city:e.name,country:e.sys.country,humidity:e.main.humidity,description:e.weather[0].description,icon_id:e.weather[0].id,error:""})},function(e){a.setState({error:e})}),fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+e+"&lon="+t+"&appid=c1d16b8b18a14269d269f0f4e6b614b8").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<3;n++){var r=e.list[8*n+4],i=e.list[8*n+6],o=e.list[8*n+8];t[n]=new w(i.dt_txt,r.main.temp,i.main.temp,o.main.temp,i.weather[0].id)}a.setState({weather_tiles:t})},function(e){a.setState({error:e})})}},{key:"TempMode",value:function(){var e=(new f.a).get("temp_mode");return e||v.WeatherSettings.DefaultMode}},{key:"parse_temp",value:function(e){switch(this.TempMode()){case"K":return e.toFixed(0);case"\xb0F":return(1.8*(e-273.15)+32).toFixed(0);case"\xb0C":return(e-273.15).toFixed(0);default:return"Invalid Temperature Mode"}}},{key:"componentDidMount",value:function(){var e=this;this.GetWeatherData(this.props.lat,this.props.lon),this.timerID=setInterval(function(){return e.tick()},6e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.GetWeatherData(this.props.lat,this.props.lon)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.temperature,n=e.city,r=e.humidity,i=e.description,o=e.icon_id,c=this.state.country,s=this.state.weather_tiles,u=this.TempMode();return t&&(alert("Error Getting Weather Data!"),console.log(t)),l.a.createElement("div",{className:"weather-container"},l.a.createElement("div",{className:"weather-attrib-container"},l.a.createElement("div",{className:"weather-attrib",id:"temperature"},this.parse_temp(a),u),l.a.createElement("div",{className:"weather-attrib",id:"icon"},l.a.createElement(g,{icon:o})),l.a.createElement("div",{className:"weather-attrib",id:"details"},"Humidity: ",r,"% ----- ",i,l.a.createElement("br",null),n,", ",c)),l.a.createElement("div",{className:"weather-tiles-container"},this.mapWeatherTiles(s)))}},{key:"mapWeatherTiles",value:function(e){return e.map(function(e,t){return l.a.createElement(b,{key:t,date:e.date,morn:e.morn,noon:e.noon,eve:e.eve,icon:e.icon,dn:"d"})})}}]),t}(s.Component),y=(a(33),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={date:new Date},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"TimeMode",value:function(){var e=(new f.a).get("time_mode");return e||v.TimeSettings.DefaultMode}},{key:"parse_time",value:function(){var e=this.TimeMode(),t=this.state.date,a=t.getHours(),n=t.getMinutes().toString().padStart(2,"0"),r="";switch(e){case"24HR":r=a.toString().padStart(2,"0")+":"+n;break;case"12HR":var i=a%12;r=(0===i?12:i)+":"+n+(a>=12?"p":"a");break;default:r="Invalid Time Mode"}return r}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this.state.date,t=e.getMonth()+1,a=e.getDate(),n=e.getFullYear().toString().padStart(4,"0");return l.a.createElement("div",{className:"time-container"},l.a.createElement("div",{className:"display-container"},l.a.createElement("div",{className:"time-display"},this.parse_time()),l.a.createElement("div",{className:"date-display"},t,"/",a,"/",n)))}}]),t}(s.Component)),k=(a(34),"sbcont"),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={container:k},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.href;return l.a.createElement(d.b,{to:e},l.a.createElement("div",{className:"sbcont"},l.a.createElement("div",{className:"bar1"}),l.a.createElement("div",{className:"bar2"}),l.a.createElement("div",{className:"bar3"})))}}]),t}(s.Component),_=(a(43),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={lat:v.LocationSettings.DefaultLatitude,lon:v.LocationSettings.DefaultLongitude},a.Location=a.Location.bind(Object(p.a)(Object(p.a)(a))),a.setPos=a.setPos.bind(Object(p.a)(Object(p.a)(a))),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"setPos",value:function(e,t){this.setState({lat:e,lon:t})}},{key:"Location",value:function(){var e=this;"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(t){e.setPos(t.coords.latitude,t.coords.longitude)}):(alert("Can't Read Geolocation, using default..."),this.setPos(v.LocationSettings.DefaultLatitude,v.LocationSettings.DefaultLongitude))}},{key:"componentDidMount",value:function(){this.Location()}},{key:"render",value:function(){var e=this.state,t=e.lat,a=e.lon;return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content-column",id:"time"},l.a.createElement(y,{lat:t,lon:a})),l.a.createElement("div",{className:"content-column",id:"weather"},l.a.createElement(E,{lat:t,lon:a}))),l.a.createElement("div",{className:"bottom-panel"},l.a.createElement(j,{href:"/settings"})),l.a.createElement("div",{className:"copyright"},"Copyright ","\xa9"," 2019 Jared Massa"))}}]),t}(s.Component)),O=(a(44),new f.a),M=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e,t,a,n){e.preventDefault(),O.set(t,a,n),this.setState({})}},{key:"map_buttons",value:function(e,t,a){var n=this;return e.map(function(e,r){return l.a.createElement("button",{className:"option-button",id:e===a?"selected":"",key:r,onClick:function(a){return n.handleChange(a,t,e,"/")}},e)})}},{key:"TimeMode",value:function(){var e=(new f.a).get("time_mode");return e||v.TimeSettings.DefaultMode}},{key:"TempMode",value:function(){var e=(new f.a).get("temp_mode");return e||v.WeatherSettings.DefaultMode}},{key:"render",value:function(){return l.a.createElement("div",{className:"settings-content"},l.a.createElement("table",{className:"options-section"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"WeatherSettings"},l.a.createElement("td",null,"Temperature Mode:"),l.a.createElement("td",null,this.map_buttons(v.WeatherSettings.TemperatureModes,"temp_mode",this.TempMode()))),l.a.createElement("tr",{className:"TimeSettings"},l.a.createElement("td",null,"Time Mode:"),l.a.createElement("td",null,this.map_buttons(v.TimeSettings.TimeModes,"time_mode",this.TimeMode()))))),l.a.createElement(d.b,{to:"/"},l.a.createElement("div",{className:"back-button"},"<< Go Back")))}}]),t}(s.Component),N=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{color:"white",textAlign:"center",width:"100%",height:"100%"}},l.a.createElement("h1",null,"404"),l.a.createElement("h3",null,"Page not found."),l.a.createElement("p",null,"There's only two pages on this site...  What were you looking for?"))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=document.getElementById("root"),T=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",render:function(){return l.a.createElement(_,null)}}),l.a.createElement(h.a,{path:"/settings",render:function(){return l.a.createElement(M,null)}}),l.a.createElement(h.a,{render:function(){return l.a.createElement(N,null)}}))}}]),t}(s.Component);m.a.render(l.a.createElement(d.a,null,l.a.createElement(T,null)),D),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={WeatherSettings:{TemperatureModes:["K","\xb0F","\xb0C"],DefaultMode:"\xb0F"},TimeSettings:{TimeModes:["24HR","12HR"],DefaultMode:"12HR"},LocationSettings:{DefaultLatitude:39.9508061,DefaultLongitude:-75.15953}}}},[[26,1,2]]]);
//# sourceMappingURL=main.9b7d76eb.chunk.js.map