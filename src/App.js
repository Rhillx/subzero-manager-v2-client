// importing modules needed
import React, { Component } from 'react';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import {applyMiddleware, createStore} from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
// Importing components
import MainScreen from './Components/MainScreen';
import ExpenseReport from './Components/ExpenseReport';
import TransactionLog from './Components/TransactionLog';
import BatchList from './Components/BatchList';
import NotePage from './Components/NotePage';
// Importing files
// import rootReducers from './Reducers';




class App extends Component {
  



  render(){
    // const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    // const store = createStoreWithMiddleware(rootReducers)

    return (

      <div className="App">
        <MuiThemeProvider>
          <Router>
            <div>
              <Route path="/" exact strict component={MainScreen}/>
              <Route path="/expense" component={ExpenseReport}/>
              <Route path="/transaction-log" component={TransactionLog}/>
              <Route path="/batches" component={BatchList}/>
              <Route path="/notes" component={NotePage}/>
            </div>
          </Router>
        </MuiThemeProvider>
     
      </div>
    );
  }
}




export default App;
