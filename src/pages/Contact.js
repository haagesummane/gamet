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
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div style={{ flexDirection: 'column', marginRight: '5px', padding: '10px' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1588.5779528123446!2d77.64692654707781!3d12.907147963890786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzI2LjMiTiA3N8KwMzgnNTEuNyJF!5e0!3m2!1sen!2sin!4v1536426728347"
                      frameBorder="0"
                      allowFullScreen
                      title="Gamet seeds"
                      style={{
                        border: 0,
                        minHeight: '400px',
                        // minWidth: '500px',
                        width: '100%',
                        height: '100%',
                      }}
                    />{' '}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div
                    style={{
                      textAlign: 'left',

                      flexDirection: 'column',
                      width: '70%',
                    }}
                  >
                    <address>
                      <span>
                        Gamet seeds:<br />
                        <p>
                          #1031,22nd B Main, 24th B cross, HSR Layout, Sector 2, Bengaluru, India -
                          560 102
                          <br />Email:&nbsp;
                          <a href="mailto:support@gametseeds.com"> support@gametseeds.com </a>
                        </p>
                        &nbsp;
                      </span>
                    </address>
                  </div>
                </div>{' '}
              </div>
            </div>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default Contact;
