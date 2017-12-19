import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Web3Provider } from 'react-web3';
import App from './App';
import DevTools, { ImportExportTool } from './DevTools';
import routes from '../config/routes.js';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { store, history } = this.props;

    const isDevEnv = process.env.NODE_ENV === 'development';

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Web3Provider>
              <App>{routes}</App>
            </Web3Provider>
            {isDevEnv &&
              <div>
                <DevTools />
                <ImportExportTool />
              </div>
            }
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
