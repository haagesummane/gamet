import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import crop_cal from 'images/crop_cal.jpg';

class CropCal extends Component {
  render() {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    var st = { width: '100%' };
    if (width > height) st = { height: '80vh' };
    return (
      <AppBody active={this.props.active}>
        <div
          // style={{
          //   height: '90vh',
          //   width: '100vw',
          //   backgroundImage: 'url(' + crop_cal + ')',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundSize: 'contain',
          // }}
          className="container-fluid mzpz fp"
        >
          <img src={crop_cal} alt="Gamet Seeds Crop Calendar" style={{ ...st }} />
        </div>
      </AppBody>
    );
  }
}
export default CropCal;
