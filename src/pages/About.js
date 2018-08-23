import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div className="contbcg" style={{ width: '80%', textAlign: 'center' }}>
          <h1>About Us</h1>
          <hr />
          <article style={{ textAlign: 'justify' }}>
            <p>
              Seed is the most important and critical input component that ensures productivity of
              crop cultivation. The agricultural sector is highly dependent on the availability and
              quality of seeds. The food security and sustainable agriculture production of any
              country demands a systematic, strong and vibrant seed production system. We are
              witnessing the rapid growth in hybridization and the demand for quality seed is
              increasing throughout the globe. However, the challenge lies in meeting the expected
              quality, cost and timely delivery.
            </p>
            <p>
              n India, agriculture is the dominant occupation, which secures abundant opportunities
              for the seed production and marketing. From a predominantly public sector in the
              1960's, the Indian seed sector has evolved gradually in the last 40 years into a
              multi-faceted industry with involvement of both the public sector organization and
              large number of private firms, including prominent global seed companies. India has
              emerged one of the fifth largest seed market across the globe.  Inherent strengths of
              India are being the 2nd largest arable land with 46 soil types across 15 agro-climatic
              zones. This favors the seed production of diverse crops and ensures continuous seed
              production activity throughout the year. It makes India an avenue for seed production
              as the country has mutual advantages of trade due to low transaction cost,
              availability of skilled human resource and scope for quicker delivery. Besides this,
              enabling policy support from government such as tax exemption, credit on soft terms,
              duty free import of equipments and integrated approach towards seed science research
              are the growth drivers for Indian seed sector to be an important player in the global
              seed trade.
            </p>
            <p>
              “Gamet Seeds and Services “is a group of experienced and committed seed professionals
              who are engaged in quality seed manufacturing and supply of field (row) crops,
              vegetable crops and fodder crops. Gamet is based and operates from Bangalore (India).
              Gamet has the large network of experienced out growers and trained skilled human
              resources in different seed production zones of India. Gamet has developed seed
              production system for each crop and specific to the season and location in India. The
              seed production system includes the production planning, agronomy practices and the
              quality management system throuout the crop cycle. The stakeholders get continuous
              knowledge and training on the seed production technology aspects; particularly on male
              and female staggering, pollination, isolation maintenance, yield estimation and post
              harvest management. This enables us to achieve required quantity with right quality
              (genetic, physiological and physical) and the timely supply.
            </p>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default About;
