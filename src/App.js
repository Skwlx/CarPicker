import React from 'react';
import Store from './store/configureStore';
import ConfigurationMenu from './components/configurationMenu';
import PreviewWindow from './components/previewWindow';


const App = () => {
  return (
      <div>
      <ConfigurationMenu cars={Store.getState()} />
      <PreviewWindow />
      </div>
  );
}

export default App;
