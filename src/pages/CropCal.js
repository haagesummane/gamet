import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import crop_cal from 'images/crop_cal.jpg';

class CropCal extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div>
          <img src={crop_cal} alt="Gamet Seeds Crop Calendar" style={{ width: '100%' }} />
        </div>
      </AppBody>
    );
  }
}
export default CropCal;
