import React from 'react';

let About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React.</p>
      <p>Here are some of the tools i used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used.</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map api for weather data.</li>
      </ul>
    </div>
  )
};
export default About;
