import React from 'react';
import Wcard from './Wcard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Navbar from 'react-bootstrap/Navbar'
import CardGroup from 'react-bootstrap/CardGroup';
import { ApiClient } from './ApiClient'
import Cityselector from './Cityselector';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: "",
      weather: []
    }
    this.apiClient = new ApiClient()
  }


  fetchWeatherData() {
    this.setState({
      loading: "....loading",
      fetching: true
    })

    this.apiClient.getWeather(53.8311,-1.46454)
      .then((response) => { this.updateWeather(response.data.daily) })
      .finally(() => {
        this.setState({
          loading: ""
        }, console.log(this.state.weather))
      })
  }

  

  updateWeather(response) {
    this.setState({
      weather: response
    })
  }

  buildCards() {
    return this.state.weather.slice(0, 5).map((current, i) => (
      <Col key={i} lg>
        <CardGroup>
          <Wcard dateString={current.dt} img={current.weather[0].icon} alt={current.weather[0].description} text={current.weather[0].description} max={current.temp.max} min={current.temp.min} wind={current.wind_speed} feelslike={current.feels_like.day} />
        </CardGroup>
      </Col>

    )
    )
  }

  componentDidMount() {
    this.fetchWeatherData()

  }

  render() {
    return (
      <>

        <Container>
        {this.state.loading}
          <Cityselector />
          <Row>
           {this.buildCards()}
          </Row>
        </Container>
      </>
    );
  }


}

export default App;
