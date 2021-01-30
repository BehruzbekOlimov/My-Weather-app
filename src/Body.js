import {
    WiSunrise,
    WiSunset,
    WiTime3,
    WiHumidity,
    WiStrongWind,
    WiDaySunny,
    WiDayCloudy,
    WiCloud,
    WiCloudy,
    WiRain,
    WiDayRain, WiThunderstorm, WiSnow, WiFog, WiNightClear, WiNightCloudy, WiNightRain,WiWindDeg

} from "react-icons/wi";

const Body=({data})=> {
        if (data){
            const {main,weather,sys,timezone,wind}=data
            const [weatherData]=weather
            let sunsetDate=new Date((sys.sunset+timezone+(new Date()).getTimezoneOffset()*60)*1000);
            let currentTime=new Date(Date.now()+(timezone+(new Date()).getTimezoneOffset()*60)*1000);
            let sunriseDate=new Date((sys.sunrise+timezone+(new Date()).getTimezoneOffset()*60)*1000);
            let sunset={
                hour:sunsetDate.getHours()<10?"0"+sunsetDate.getHours():sunsetDate.getHours(),
                minute:sunsetDate.getMinutes()<10?"0"+sunsetDate.getMinutes():sunsetDate.getMinutes(),
                second:sunsetDate.getSeconds()<10?"0"+sunsetDate.getSeconds():sunsetDate.getSeconds(),
            }
            let sunrise={
                hour:sunriseDate.getHours()<10?"0"+sunriseDate.getHours():sunriseDate.getHours(),
                minute:sunriseDate.getMinutes()<10?"0"+sunriseDate.getMinutes():sunriseDate.getMinutes(),
                second:sunriseDate.getSeconds()<10?"0"+sunriseDate.getSeconds():sunriseDate.getSeconds(),
            }
            let current={
                hour:currentTime.getHours()<10?"0"+currentTime.getHours():currentTime.getHours(),
                minute:currentTime.getMinutes()<10?"0"+currentTime.getMinutes():currentTime.getMinutes(),
                second:currentTime.getSeconds()<10?"0"+currentTime.getSeconds():currentTime.getSeconds(),
            }
            let icons=[
                {
                    name:'01d',
                    icon: <WiDaySunny size={100}/>
                },
                {
                    name:'02d',
                    icon: <WiDayCloudy size={100}/>
                },
                {
                    name:'03d',
                    icon: <WiCloud size={100}/>
                },
                {
                    name:'04d',
                    icon: <WiCloudy size={100}/>
                },
                {
                    name:'09d',
                    icon: <WiRain size={100}/>
                },
                {
                    name:'10d',
                    icon: <WiDayRain size={100}/>
                },
                {
                    name:'11d',
                    icon: <WiThunderstorm size={100}/>
                },
                {
                    name:'13d',
                    icon: <WiSnow size={100}/>
                },
                {
                    name:'50d',
                    icon: <WiFog size={100}/>
                },
                {
                    name:'01n',
                    icon: <WiNightClear size={100}/>
                },
                {
                    name:'02n',
                    icon: <WiNightCloudy size={100}/>
                },
                {
                    name:'03n',
                    icon: <WiCloud size={100}/>
                },
                {
                    name:'04n',
                    icon: <WiCloudy size={100}/>
                },
                {
                    name:'09n',
                    icon: <WiRain size={100}/>
                },
                {
                    name:'10n',
                    icon: <WiNightRain size={100}/>
                },
                {
                    name:'11n',
                    icon: <WiThunderstorm size={100}/>
                },
                {
                    name:'13n',
                    icon: <WiSnow size={100}/>
                },
                {
                    name:'50n',
                    icon: <WiFog size={100}/>
                },
            ]
            let color=''
            let [icon]=icons.filter(({name})=>name===weatherData.icon)


        return (
            <div className={'Body'}>
                <div className="d-flex">
                    <div><h1>{data.name}</h1>
                    <p>{weatherData.description}</p>
                    </div>
                    <div>{icon.icon}</div>
                </div>
                <div className="d-flex mb-2">
                <h2>{Math.round(main.temp)}°C</h2>
                {
                    Math.round(main.temp_min)!==Math.round(main.temp_max) &&
                        <h3>{Math.round(main.temp_min)}°C - {Math.round(main.temp_max)}°C</h3>
                }
                </div>
                <div className='d-flex'><WiTime3 size={40}/> { `${current.hour}:${current.minute}:${current.second}` }</div>
                <div className='d-flex'><WiSunrise size={40}/> { `${sunrise.hour}:${sunrise.minute}:${sunrise.second}` }</div>
                <div className='d-flex'><WiSunset size={40}/> { `${sunset.hour}:${sunset.minute}:${sunset.second}` }</div>
                <div className='d-flex'><WiHumidity size={40}/> { main.humidity }%</div>
                <div className='d-flex'><WiStrongWind size={40}/> {wind.speed} m/s <WiWindDeg style={{transform:`rotate(${wind.deg}deg)`}} size={40}/> </div>


            </div>
        )
        }
            return <span className={'loading'}/>
    }

export default Body