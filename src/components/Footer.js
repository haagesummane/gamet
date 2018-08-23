import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
      <div className="text-center footer_bcg footer_">
        &copy;{new Date().getFullYear()}&nbsp;Gamet&nbsp;Seeds | All&nbsp;Rights&nbsp;Reserved
      </div>
    );
  }
}
export default Footer;
