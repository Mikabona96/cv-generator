import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Resume from './pages/Resume';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import Menu from './components/Menu/Menu';
import MenuSwitcher from './components/Menu/MenuSwitcher';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ExampleResume from './pages/ExampleResume';

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [changeTheme, setChangeTheme] = useState(false)
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <MenuSwitcher changeTheme={changeTheme} openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Menu openMenu={openMenu} changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
          <Routes>
            <Route path="/" element={<Editor />} />
            <Route path="/preview" element={<Resume changeTheme={changeTheme} />} />
            <Route path="/example" element={<ExampleResume changeTheme={changeTheme} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
