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
                    <div>
                      <h2>Dhruv Washishth</h2>
                      <p>
                        Dhruv Washishth is an entrepreneur based in San Francisco. He has worked in
                        Silicon Valley, Bangalore, and London. He is a recipient of the prestigious <b
                        >
                          EB1 &quot;Alien of Extraordinary Ability&quot; Permanent Resident card
                          from the US government.
                        </b>
                        He was selected by the Government of UK as a Young Global Entrepreneur. He
                        is an alum of The London School of Economics (MSc - Discontinued) &amp;
                        Christ University, Bangalore, India. He has run two startups, worked as a
                        management consultant and is a mentor at Draper University in San Mateo,
                        California. He is leading the business development efforts for GAMET SEEDS
                        in the US.
                        <br />Email:{' '}
                        <a href="mailto:dhruvw@gametseeds.com">dhruvw@gametseeds.com</a>
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              <div className="row">
                <div className="col-12 contbcg2">
                  <h1 style={{ textAlign: 'center', width: '100%' }}>Mentor</h1>
                  <hr />
                  <article style={{ textAlign: 'justify' }}>
                    <div>
                      <h2>Dr. A Sitaram</h2>
                      <p>
                        Dr Sitaram is plant breeder of national repute, responsible for development
                        and release of first hybrids in oil seed. He was National coordinator for
                        Oil seeds and Nutri-Cereals research project of government of India. He was
                        responsible for the development and release of more than sixty varieties /
                        Hybrids across different agro climatic regions of India. He was also a
                        curator for one of the largest Nutri-Cereals germplasm, for collection,
                        evaluation and utilization. He was an elected fellow of Indian Society of
                        Genetics &amp; Plant breeding and National Academy of Agriculture Sciences.
                        As Professor of Genetics &amp; Plant breeding he guided forty post graduate
                        and doctoral studies. Dr Sitaram is a guiding force behind GAMET SEEDS and
                        supporting GAMET with his enormous networks of Genetics &amp; Plant breeding
                        platforms across India and Globe.
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
