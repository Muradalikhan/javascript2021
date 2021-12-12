
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import RouterApp from './config/router';
import Header from './screen/header';


function App() {
  return (
    <div className="App">
      <Header/>
      <RouterApp />
    </div>
  );
}

export default App;
