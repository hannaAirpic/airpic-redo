import React, { Component } from 'react';
import './App.css';
import { Form, FormGroup, FormControl, ControlLabel, Radio, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';

import data from './data.json';

const fanDropdown =  (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Fan</ControlLabel>
    <FormControl componentClass="select">
      { data['60_fans'].map((fan) => <option key={fan}>{fan}</option>) }
    </FormControl>
  </FormGroup>
);

const fanQuantity = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Fan Quantity</ControlLabel>
    <FormControl componentClass="select">
      { data['fan_quantity'].map((quantity) => <option key={quantity}>{quantity}</option>) }
    </FormControl>
  </FormGroup>
);

const fanQuantityAuto = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Fan Quantity</ControlLabel>
    <FormControl componentClass="select">
      { data['fan_quantity_auto'].map((quantity) => <option key={quantity}>{quantity}</option>) }
    </FormControl>
  </FormGroup>
);

const frequency = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Frequency</ControlLabel>
    { data['frequency'].map((freq) => <Radio name="radioGroup1" key={freq} inline defaultChecked>{freq}</Radio>) }
  </FormGroup>
);

const fanConfiguration = (
  <FormGroup className="form-group">
  <ControlLabel className="input-label">Configuration</ControlLabel>
    { data['configuration'].map((config) => <Radio name="radioGroup2" key={config} inline defaultChecked>{config}</Radio>) }
  </FormGroup>
);

const grain = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Grain</ControlLabel>
    <FormControl componentClass="select">
      { data['grain'].map((grain) => <option key={grain}>{grain}</option>) }
    </FormControl>
  </FormGroup>
);

const diameter = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Diameter (ft)</ControlLabel>
    <FormControl componentClass="select">
      { data['diameter'].map((d) => <option key={d}>{d}</option>) }
    </FormControl>
  </FormGroup>
);

const corrugation = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Corrugation/Height</ControlLabel>
    { data['corrugation'].map((corr) => <Radio name="radioGroup3" key={corr} inline defaultChecked>{corr}</Radio>) }
  </FormGroup>
);

const numRings = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Number of Rings/Feet</ControlLabel>
    <FormControl type="text" placeholder="1"/>
  </FormGroup>
);

const floorType = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Floor Type</ControlLabel>
    <FormControl componentClass="select">
      { data['floor_type'].map((floor) => <option key={floor}>{floor}</option>) }
    </FormControl>
  </FormGroup>
);

const peakAngle = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Peak Angle</ControlLabel>
    { data['peak_angle'].map((peak) => <Radio name="radioGroup4" key={peak} inline defaultChecked>{peak}</Radio>) }
  </FormGroup>
);

const plenumHeight = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Plenum Height</ControlLabel>
    { data['plenum_height'].map((plenum) => <Radio name="radioGroup5" key={plenum} inline defaultChecked>{plenum}</Radio>) }
  </FormGroup>
);

const hopperAngle = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Hopper Angle</ControlLabel>
    <FormControl componentClass="select">
      { data['hopper_angle'].map((angle) => <option key={angle}>{angle}</option>) }
    </FormControl>
  </FormGroup>
);

const binType = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Storage Container</ControlLabel>
    <FormControl componentClass="select">
      { data['bin_type'].map((bin) => <option key={bin}>{bin}</option>) }
    </FormControl>
  </FormGroup>
);

const fanType = (
  <FormGroup className="form-group">
    <ControlLabel className="input-label">Fan Type</ControlLabel>
    <FormControl componentClass="select">
      { data['fan_type_to_select'].map((type) => <option key={type}>{type}</option>) }
    </FormControl>
  </FormGroup>
);

const calculateAirflow = (
  <Button id="calculat-airflow" type="submit">Calculate Airflow</Button>
);

const selectFan = (
  <Button id="select-fan" type="submit">Select Fan</Button>
);

const selectFanForm = (
  <Form inline>
    <Grid className="show-grid">
      <Row className="input-section">
        <h3>Fan Inputs</h3>
        <Col md={6} className="left-col">
          <Row> { frequency } </Row>
          <Row> { fanType } </Row>
        </Col>
        <Col md={6} className="right-col">
          <Row> { fanQuantityAuto } </Row>
          <Row> { fanConfiguration } </Row>
          <br/><br/>
        </Col>
      </Row>
      <Row className="input-section">
        <h3>Bin Inputs</h3>
        <Col md={6} className="left-col">
          <Row> { binType } </Row>
          <Row> { floorType } </Row>
          <Row> { peakAngle } </Row>
          <Row> { plenumHeight } </Row>
          <Row> { hopperAngle } </Row>
        </Col>
        <Col md={6} className="right-col">
          <Row> { grain } </Row>
          <Row> { diameter } </Row>
          <Row> { corrugation } </Row>
          <Row> { numRings } </Row>
          <br/><br/>
        </Col>
      </Row>
      <Row>
        { selectFan }
      </Row>
    </Grid>
  </Form>
);

const calculateAirflowForm = (
  <Form inline>
    <Grid className="show-grid">
      <Row className="input-section">
        <h3>Fan Inputs</h3>
        <Col md={6} className="left-col">
          <Row> { frequency } </Row>
          <Row> { fanDropdown } </Row>
        </Col>
        <Col md={6} className="right-col">
          <Row> { fanQuantity } </Row>
          <Row> { fanConfiguration } </Row>
          <br/><br/>
        </Col>
      </Row>
      <Row className="input-section">
        <h3>Bin Inputs</h3>
        <Col md={6} className="left-col">
          <Row> { binType } </Row>
          <Row> { floorType } </Row>
          <Row> { peakAngle } </Row>
          <Row> { plenumHeight } </Row>
          <Row> { hopperAngle } </Row>
        </Col>
        <Col md={6} className="right-col">
          <Row> { grain } </Row>
          <Row> { diameter } </Row>
          <Row> { corrugation } </Row>
          <Row> { numRings } </Row>
          <br/><br/>
        </Col>
      </Row>
      <Row>
        { calculateAirflow }
      </Row>
    </Grid>
  </Form>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The New Airpic Web App</h1>
        </header>
        <div>
          <Tabs defaultActiveKey={1} id="action-tabs" animation={false}>
            <Tab eventKey={1} title="Select New Fan">
              <div className="App-body">
                { selectFanForm }
              </div>
            </Tab>
            <Tab eventKey={2} title="Calculate Airflow">
              <div className="App-body">
                { calculateAirflowForm }
              </div>
            </Tab>
            <Tab eventKey={3} title="Bin Dry"></Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
