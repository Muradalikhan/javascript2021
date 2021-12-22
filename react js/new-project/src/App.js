
import { ThemeProvider } from '@mui/styles';
import './App.css';
import RouterApp from './config/router';
import store from './config/store';
import {Provider} from 'react-redux'


function App() {
  return (

    <div className="App">
     <Provider store={store}>
      <RouterApp />
    </Provider>
    </div>

  );
}

export default App;
