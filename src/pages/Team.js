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
          <h1>About Us</h1>
          <hr />
          <article style={{ textAlign: 'justify' }}>
            <p>
              “Gamet Seeds “is a group of experienced and committed seed professionals who are
              engaged in quality seed manufacturing and supply for field (row) crops, vegetable
              crops and fodder crops. Gamet Seeds is based and operates from Bangalore (India).
              Gamet Seeds has a large network of experienced out growers and trained &skilled human
              resource in different seed production zones of India. Gamet has developed seed
              production system for each crop which is specific to different seasons and locations
              across India. Our seed production system includes Production planning, Agronomic
              practices and Total quality management system throughout the crop cycle. The
              stakeholders; such as out growers ,field management staff in the Production ecosystem
              get continuous knowledge and trainings on the seed production technology aspects;
              particularly on male and female staggering, effective pollination, isolation
              maintenance, off types rouging, yield estimation and post harvest management. This
              enables us to achieve planned quantity with right quality (Genetic, Physiological and
              Physical) and importantly timely supplies.
            </p>
            <div>
              <h3>Gamet Seeds Focus Crops:</h3> Following are the focus crops of Gamet for the
              quality seed supply both for domestic (Indian) and international clients:
              <br />
              <table
                style={{ width: '100%', padding: '10px' }}
                className="table-dark table-striped"
              >
                <thead>
                  <tr>
                    <th>Field Crops</th>
                    <th>Vegetable Crops</th>
                    <th>Fodder Crops</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Corn</td>
                    <td>Tomato</td>
                    <td>SSG (Fodder Sorghum)</td>
                  </tr>
                  <tr>
                    <td>Cotton</td>
                    <td>Hot pepper (Chilli)</td>
                  </tr>
                  <tr>
                    <td>Sorghum</td>
                    <td>Squash</td>
                  </tr>
                  <tr>
                    <td>Pearl millet (Bajra)</td>
                    <td>Water melon</td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
            <div>
              <h3>Gamet Seeds Activities</h3>
              <ul>
                <li> Foundation /Basic seed multiplication and supply</li>
                <li> Hybrid seed production research </li>
                <li> Hybrid seed productionand supply</li>
              </ul>
            </div>
            <div>
              <h3>Why Gamet Seeds?</h3>
              <ul>
                <li>
                  Frontline Seed companies (client) can outsource the above activities on turnkey
                  basis to Gamet.
                </li>
                <li>
                  Gamet helps in quicker scale up of client's seed business with minimum overheads.
                </li>
                <li>
                  Our clients have the privilege of obtaining the traceability of on field
                  production process,  on real time basis leveraging the digital technology and
                  platforms.
                </li>
                <li>
                  While achieving the business goals; Gamet links our clients to thousands of
                  privileged farmers as out growers, who gets indirect employment through Gamet’s
                  seed multiplication activities
                </li>
              </ul>
            </div>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default About;
