import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Wdata from './Wdata';
//import Conditions from './Conditions';

class Wcard extends React.Component {


  render() {
    const d = new Date();
    const year = d.getFullYear();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const day = new Date(parseInt(this.props.dateString) * 1000);
    const nameDay = days[day.getDay(day)]
    const month = months[day.getMonth(day)]
    const date = day.getDate(day)
    const image = `http://openweathermap.org/img/wn/${this.props.img}@4x.png`
    const maxTemp = Math.round(this.props.max, 1)
    const minTemp = Math.round(this.props.min, 1)
    const windSpeed = Math.round(this.props.wind, 1)
    const feelsLike = Math.round(this.props.feelslike,1)
    const dataKey = this.props.dateString + "data"

    return (
      <>
          <Card className="mx-auto text-center mt-2"  style={{ height: '27rem' }}   >
          <Card.Img className="image-fluid" style={{ height: '27rem' }}   src="pic4.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Header as="h5">{nameDay}{"-"}{date}{"-"}{month}{"-"}{year}</Card.Header>
            <Image className="mx-auto" src={image} alt={this.props.alt} />
            <Card.Body>
            <Card.Text><strong>{this.props.text}</strong></Card.Text>

              <Wdata key={dataKey} max={maxTemp} min={minTemp} wind={windSpeed} feelslike={feelsLike} />
            </Card.Body>
            </Card.ImgOverlay>
          </Card>
      </>
    );
  }


}

export default Wcard;