import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div
          className="contbcg"
          style={{
            width: '80%',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          <h1> Contact Us</h1>
          <hr />
          <article
            style={{
              margin: '0 auto',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              padding: '20px',
            }}
          >
            <div style={{ flexDirection: 'column', marginRight: '5px', padding: '10px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333.956305716806!2d77.64732428038137!3d12.907949576292278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149bfea1348b%3A0x68406ba873c49323!2s1073%2C+24th+A+Cross+Road%2C+Garden+Layout%2C+Sector+2%2C+HSR+Layout%2C+Bengaluru%2C+Karnataka+560102!5e0!3m2!1sen!2sin!4v1535030415964"
                frameBorder="0"
                allowFullScreen
                title="Gamet seeds"
                style={{
                  border: 0,
                  minHeight: '200px',
                  minWidth: '250px',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div
              style={{
                textAlign: 'left',

                flexDirection: 'column',
                width: '70%',
              }}
            >
              <address>
                <p>
                  Gamet seeds:<br />
                  <p>#1031,22nd B Main, 24th B cross, HSR Layout, Sector 2, Bengaluru, 560 102</p>
                  <br />Email:&nbsp;
                  <a href="mailto:support@gametseeds.com"> support@gametseeds.com </a>
                  &nbsp;
                </p>
              </address>
            </div>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default Contact;
