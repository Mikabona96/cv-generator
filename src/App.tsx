import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Resume from './pages/Resume';
import {Provider} from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu />
        {/* <Resume /> */}
      </div>
    </Provider>
  );
}

export default App;
