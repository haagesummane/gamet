import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import seed1 from 'images/seed1.jpg';
import 'css/Home.css';
import logo from 'images/logo.png';

class Home extends Component {
  render() {
    document.body.style = {
      background:
        'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(' +
        seed1 +
        ') no-repeat center center fixed !important',
    };
    return (
      <AppBody active={this.props.active} noUpArrow={true}>
        <div
          style={{
            height: '100%',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '10%',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <article
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '20px',
              width: '100%',
            }}
            className="contbcgh"
          >
            <img src={logo} style={{ height: '150px' }} alt="Gamet seeds" />
            <div className="hometext">
              <h1>Welcome to Gamet seeds</h1>
              <h2>Pioneers of Seeds</h2>
            </div>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default Home;
