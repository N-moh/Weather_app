import React from 'react';

import Table from 'react-bootstrap/Table';

class Wdata extends React.Component {

  render() {
    return (
      <>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th colSpan="2"><sup>o</sup>C</th>
              <th><sub>Wind</sub>  <sub>mph</sub>  </th>
              
              <th><sup>Feelslike</sup> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.max}</td>
              <td>{this.props.min}</td>
              <td>{this.props.wind}</td>
              <td>{this.props.feelslike}{"°C"}</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }


}

export default Wdata;