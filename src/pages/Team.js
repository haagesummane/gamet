import AppBody from 'components/AppBody';
import React, { Component } from 'react';
// import logo from 'images/logo.png';

class About extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div className="contbcg" style={{ width: '80%', textAlign: 'center' }}>
          {/* <h2>Welcome to Gamet seeds</h2>
          <img src={logo} style={{ height: '260px' }} alt="Gamet seeds" /> */}

          <article style={{ textAlign: 'justify' }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 contbcg2">
                  <h1 style={{ textAlign: 'center', width: '100%' }}>Gamet Seeds Team</h1>
                  <hr />
                  <article style={{ textAlign: 'justify' }}>
                    <div>
                      <h2>Dr. Suresh Nath</h2>
                      <p>
                        Dr.Suresh Nath, a ROTARY INTERNATIONAL scholar, completed his PhD in SEED
                        TECHNOLOGY from Massey University in NEW ZEALAND in the year 1992. Since
                        then he was with Cargill Seeds and Monsanto India for 18 years in senior
                        leadership role for Seed Quality Assurance, Seed Production Research,
                        Pre-foundation &Foundation seed, Hybrid seed production and Seed exports. As
                        a management savvy Seed Tech, he is passionate and hungry to explore more
                        for the cause of Seed Industry.
                        <br />Email:
                        <a href="mailto:sureshnath@gametseeds.com">sureshnath@gametseeds.com</a>
                      </p>
                    </div>

                    <div>
                      <h2>Mr. Vijayakumar Katti</h2>
                      <p>
                        Mr. Vijayakumar has 27 years experience in the Seed Industry with Cargill
                        Seeds and Monsanto India, particularly in executive and senior management
                        roles. Vijakumar has masters in Crop Agronomy from University of Agriculture
                        Sciences Dharwad, India. Vijayakumar with all his experience has groomed
                        himself as a unique and proven Seed Agronomist. He is well versed with field
                        Quality Management Systems including Grow Out Tests (GOT)and ISO Enzyme
                        tests. His leadership skills in training and motivating out growers have
                        contributed in consistent business performance over the years. <br />Email:
                        <a href="mailto:vijaykumar@gametseeds.com">vijaykumar@gametseeds.com</a>
                      </p>
                    </div>
                    <div>
                      <h2>Mr. Suresh Bhat</h2>
                      <p>
                        Suresh has the 24 years of Agriculture and Food industry experiences in
                        executive and management roles with Cargill, Monsanto, and Avesta Good Earth
                        Foods. Suresh has his Masters specialized in Seed Science and Technology
                        from University of Agriculture Sciences Dharwad (India) and Executive
                        Management Programme from Indian Institute of Management (IIM) Bangalore,
                        India. He is a recipient of University Gold Medal from UAS Dharwad at his
                        postgraduate studies. Suresh has extensive exposure in Pre- Basic (Pre-
                        Foundation), Basic (Foundation/Stock Seed) and Hybrid seed production and
                        supply planning, coordinating, monitoring, training, procurement,
                        processing, and inventory management activity.<br />Email:{' '}
                        <a href="mailto:sureshbhat@gametseeds.com">sureshbhat@gametseeds.com</a>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default About;
