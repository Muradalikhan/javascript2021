
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import Theme from './components/theme';
import { useSelector } from 'react-redux'
import Counter from './components/Counter';


function App() {
  const theme = useSelector(state => state.theme.value)



  return (
    <div className="App">
      <div className='Profile' style={{ backgroundColor: theme, color: `${theme === 'black' ? 'white' : 'black'}` }}>
        <Profile />
        <Login />

        <div className='m-5'>
          <Counter />
        </div>
      </div>



      <Theme />
    </div>
  );
}

export default App;
