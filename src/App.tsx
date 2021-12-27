import React from 'react';
import './App.css';
import FirstReduxTest from './pages/input';
import { PostList } from './posts/renderPosts';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <FirstReduxTest/>
          <PostList/>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
