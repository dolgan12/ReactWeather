import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openweathermap from 'openweathermap';
import ErrorModal from 'ErrorModal';

class Weather extends React.Component {
  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      isLoading: false
    }
  }
  handleSearch(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openweathermap.getTemp(location).then( (data) =>{
      that.setState({
        location: data.location,
        temp: data.temp,
        isLoading: false
      });
    }, (e) => {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });

  }

  render() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}
Weather.propTypes = {

};

export default Weather;
