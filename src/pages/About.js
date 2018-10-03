import AppBody from 'components/AppBody';
import React, { Component } from 'react';
class About extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ width: '90%' }} className="container-fluid">
          <div className="row">
            <div className="col-12 contbcg1" style={{ width: '80%', textAlign: 'center' }}>
              <h1>About Us</h1>
              <hr />
              <article style={{ textAlign: 'justify' }}>
                <p>
                  “Gamet Seeds” is a group of experienced and committed seed professionals who are
                  engaged in custom manufacturing of quality seed & supply, for field (row) crops,
                  vegetable crops and fodder crops. Gamet Seeds is based and operates from Bangalore
                  (India).
                </p>
                <p>
                  Gamet Seeds has a large network of <strong>experienced out growers</strong> and
                  trained & skilled human resource in different seed production zones of India.
                  India has advantages of trade due to low transaction cost, availability of skilled
                  human resource, varied soils & agro-climatic zones that provide{' '}
                  <strong>ample scope for seed production &amp; delivery all-round the year</strong>.
                  Gamet has developed seed production system for each crop which is specific to
                  different seasons and locations across India.
                </p>
                <p>
                  <h3> Gamet seed production system includes:</h3>
                  <ul>
                    <li> Production planning, </li>
                    <li> Timely agronomic practices and post-harvest management</li>
                    <li> Total quality management system throughout the crop cycle</li>
                    <li> State of the art digital monitoring & reporting on real time basis</li>
                  </ul>
                </p>
                <p>
                  The stakeholders such as ; <stromg>out growers</stromg> , field management staff ,
                  field operations crew get continuous knowledge and trainings on{' '}
                  <strong>the seed production technology aspects:</strong>
                </p>
                <p>
                  <ul>
                    <li> Male and female staggering</li>
                    <li> Effective pollination</li>
                    <li> Isolation maintenance </li>
                    <li> Off types rouging </li>
                    <li> Yield estimation</li>
                    <li> Post harvest quality management.</li>
                  </ul>
                </p>
                <p>
                  This enables Gamet to achieve planned quantities with right quality (Genetic,
                  Physiological and Physical) and importantly timely supplies
                </p>
                <div>
                  <h3>Gamet Statement:</h3>
                  <strong>
                    Gamet works ONLY as a backend quality seed producer for our clients / seed
                    companies on a B2B model. Gamet SHALL NOT involve in any Retail / Brand seed
                    sales and marketing activity.
                  </strong>{' '}
                </div>
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
                    <li> Foundation / Basic seed multiplication and supply</li>
                    <li> Hybrid seed production research </li>
                    <li> Hybrid seed productionand supply</li>
                  </ul>
                </div>
                <div>
                  <h3>Why Gamet Seeds?</h3>
                  <ul>
                    <li>
                      Frontline Seed companies (client) can outsource the above activities on
                      turnkey basis to Gamet.
                    </li>
                    <li>
                      {' '}
                      Gamet helps in quicker scale up of client's seed business with minimum
                      overheads.
                    </li>
                    <li>
                      {' '}
                      Our clients have the privilege of obtaining the traceability of on field
                      production process, on real time basis leveraging the digital technology and
                      platforms.
                    </li>
                    <li>
                      {' '}
                      While achieving the business goals, Gamet links our clients to thousands of
                      small / medium holding farmers as <strong>Out Growers</strong>, who get
                      continuous employment &amp; livelihood through Gamet’s seed multiplication
                      activities.
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </AppBody>
    );
  }
}
export default About;
