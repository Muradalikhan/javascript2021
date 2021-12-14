

import 'bootstrap/dist/css/bootstrap.css';
import RouterApp from './config/router';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './config/redux/store';








function App() {
  return (
    <div className="App ">
      <Provider store={store}>
        <RouterApp />
      </Provider>
    </div>
  );
}

export default App;
