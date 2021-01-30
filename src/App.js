import React, {Component} from 'react';
import axios from "axios";
import InputPane from "./InputPane";
import Body from "./Body";

class App extends Component {
    constructor() {
        super();
        this.state = {
            object: null,
            cityName : '',
            url: this.getUrl('tashkent')
        }
    }

    API_KEY = '8c072e571172de5113d07ed6c0e3acab'

    getUrl(city) {
        return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric`
    }

    handleCityName = (e) => {
        this.setState({cityName:e.target.value})
    }
    handleClick = (e) => {
        e.preventDefault()
        const url = this.getUrl(this.state.cityName)
        axios.get(url)
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    this.setState({object: response.data, url, cityName:''})
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then((response) => {
                this.setState({object: response.data})
            })
    }


    render() {
        if (this.state.object){
            const {main}=this.state.object
            let background='',color='black'
            if (main.temp>=40){
                background='orangered'
                color='wheat'
            }else  if (main.temp>=35){
                background='orange'
                color='wheat'
            }else  if (main.temp>=30){
                background='yellow'
            }else  if (main.temp>=25){
                background='lightgreen'
            }else  if (main.temp>=20){
                background='green'
            }else  if (main.temp>=10){
                background='lightblue'
            }else  if (main.temp>=5){
                background='skyblue'
            }else  if (main.temp>=0){
                background='deepskyblue'
            }else  if (main.temp>=-5){
                background='blue'
                color='wheat'
            }else  if (main.temp>=-10){
                background='darkblue'
                color='wheat'
            }else  if (main.temp>=-20){
                background='#000050'
                color='wheat'
            }else {
                background='#7530a9'
                color='wheat'
            }
            return (
                <div className="App" style={{background,color}}>
                    <InputPane value={this.state.cityName} onChange={this.handleCityName} onClick={this.handleClick}/>
                    <Body data={this.state.object}/>
                </div>
            );
        }

        return (
            <div className="App">
                <InputPane value={this.state.cityName} onChange={this.handleCityName} onClick={this.handleClick}/>
                <Body data={null}/>
            </div>
        );
    }
}

export default App;