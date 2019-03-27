import React, {Component} from 'react';

class WeatherIcon extends Component {

    render() {
        const {icon, alt, width, height, dn} = this.props;
        var daynig;
        if (!this.props.dn) {
            var hs = (new Date()).getHours();
            daynig = (hs < 20 && hs > 5)? "d" : "n";
        }
        else daynig = dn;
        return this.MakeImgComponent(this.getWeatherIconURL(icon, daynig), alt, width, height);
    }
    MakeImgComponent(url, alt, width, height) {
        if (!width || !height) width = height = '50%';
        return (
            <div className="weather-icon">
                <img src={url} alt={alt} width={width} height={height} />
            </div>
        );
    }
    //map API icon_id to local image files for weather visualization
    getWeatherIconURL(icon_id, dn) {
        if (icon_id < 233) {    //200-232
            return "weather_img/200-232.svg";
        } else if (icon_id < 322) { //300-321
            if (icon_id === 300)
                return "weather_img/300" + dn + ".svg";
            else if (icon_id === 301)
                return "weather_img/301.svg";
            else if (icon_id === 314 || icon_id === 321)
                return "weather_img/314 321.svg";
            else return "weather_img/302 310 311 312 313.svg";
        } else if (icon_id < 532) { //500-531
            if (icon_id === 500)
                return "weather_img/500" + dn + ".svg";
            else if (icon_id === 501)
                return "weather_img/501.svg";
            else if (icon_id === 502 || icon_id === 531)
                return "weather_img/502 531.svg";
            else if (icon_id === 503 || icon_id === 504 || icon_id === 522)
                return "weather_img/503 504 522.svg";
            else if (icon_id === 511)
                return "weather_img/511.svg";
            else if (icon_id === 520 || icon_id === 521)
                return "weather_img/520 521.svg";
        } else if (icon_id < 623) { //600-622
            if (icon_id === 600)
                return "weather_img/600" + dn + ".svg";
            else if (icon_id === 601 || icon_id === 602)
                return "weather_img/601 602.svg";
            else if (icon_id === 611 || icon_id === 615 || icon_id === 616 || icon_id === 620)
                return "weather_img/611 615 616 620.svg";
            else if (icon_id === 612 || icon_id === 613)
                return "weather_img/612 613" + dn + ".svg";
            else if (icon_id === 621 || icon_id === 622)
                return "weather_img/621 622.svg";
            else if (icon_id === 520 || icon_id === 521)
                return "weather_img/520 521.svg";
        } else if (icon_id < 782) { //701-781
            if (icon_id === 701 || icon_id === 711 || icon_id === 731 || icon_id === 751 || icon_id === 761 || icon_id === 762)
                return "weather_img/701 711 731 751 761 762.svg";
            else if (icon_id === 721)
                return "weather_img/721.svg";
            else if (icon_id === 741)
                return "weather_img/741.svg";
            else if (icon_id === 771)
                return "weather_img/771.svg";
            else if (icon_id === 781)
                return "weather_img/781.svg";
        } else if (icon_id < 805) { //800-804
            if (icon_id === 800)
                return "weather_img/800" + dn + ".svg";
            else if (icon_id === 801 || icon_id === 802)
                return "weather_img/801 802" + dn + ".svg";
            else if (icon_id === 803 || icon_id === 804)
                return "weather_img/803 804.svg";
        }
        else return null;
    }
}
export default WeatherIcon;