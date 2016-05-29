import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openweathermap from 'openweathermap';

class Weather extends React.Component {
  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      isLoading: false
    }
  }
  handleSearch(location) {
    var then = this;

    this.setState({isLoading: true});
    openweathermap.getTemp(location).then( (data) =>{
      then.setState({
        location: data.location,
        temp: data.temp,
        isLoading: false
      });
    }, (errorMessage) => {
      alert(errorMessage);
      then.setState({isLoading: false});
    });

  }

  render() {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}
Weather.propTypes = {

};

export default Weather;
