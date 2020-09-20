import React from 'react';
import Uic from "./Uic";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../Redux/store";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


function App() {

    return (
      <ReduxProvider store={reduxStore}>
          <Router>
              <div className="App">
                  <Route path='/signup' component={SignUp} />
                  <Route path='/signin' component={SignIn} />
                  <Route path='/events' component={Uic} />
              </div>
          </Router>
      </ReduxProvider>
  );
}

export default App;
