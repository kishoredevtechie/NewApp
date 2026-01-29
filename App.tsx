import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { persistor } from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import LoginAuthNavigator from './src/Navigation/LoginAuthNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LoginAuthNavigator />
      </PersistGate>
    </Provider>
  );
}
