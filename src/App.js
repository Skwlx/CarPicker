import React from 'react';
import Store from './store/configureStore';
import ConfigurationMenu from './components/configurationMenu';
import PreviewWindow from './components/previewWindow';
import "./styles/main.scss";
import "./styles/app.scss";

const App = () => {
  return (
      <div className="app">
      <PreviewWindow />
      <ConfigurationMenu cars={Store.getState()} />
      </div>
  );
}

export default App;
