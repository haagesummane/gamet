import React, { Component } from 'react';

import 'css/App.css';
import routes from 'components/Routes';
import logo from 'images/logo.png';

class Nav extends Component {
  render() {
    var ln_classes = Array(routes.length);
    if (typeof this.props.active === 'number') ln_classes[this.props.active] = ' active';
    return (
      <div style={{ marginBottom: '88px' }}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              href="/"
            >
              <img src={logo} style={{ height: '60px' }} alt="Gamet seeds" />
              <h2 style={{ color: 'black' }}>Gamet Seeds</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                {routes.map((r, i) => (
                  <li key={i} className="nav-item">
                    <a
                      // style={{ textTransform: 'uppercase' }}
                      className={' nav-link ' + ln_classes[i]}
                      href={r[0]}
                    >
                      {r[1]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
