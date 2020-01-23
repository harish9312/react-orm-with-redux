import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Home } from './components/Home';
import { store } from './store/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
