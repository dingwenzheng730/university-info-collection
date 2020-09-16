import React from 'react';
import Uic from "./Uic";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../Redux/store";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './SignUp';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


function App() {

    return (
      <Router>
          <ReduxProvider store={reduxStore}>
              <div className="App">
                  <Route path='/signup' component={SignUp} />
                  <Route path='/events' component={Uic} />
              </div>
          </ReduxProvider>
      </Router>
  );
}

export default App;
