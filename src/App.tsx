import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import FirstReduxTest from './pages/input';

import createStore from './createReduxStore';

const store = createStore()

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}> 
        <FirstReduxTest/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
