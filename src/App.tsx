import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Resume from './pages/Resume';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import Menu from './components/Menu/Menu';
import MenuSwitcher from './components/Menu/MenuSwitcher';

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Provider store={store}>
      <div className="App">
        <MenuSwitcher openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Menu openMenu={openMenu} />
        <Editor />
        {/* <Resume /> */}
      </div>
    </Provider>
  );
}

export default App;
