
import React, { useEffect, useState } from 'react'
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';







export default function Header() {

  const [currentUser, setCurrentUser] = useState('');
  const [search, setSearch] = useState('');



  const dispatch=useDispatch()
  const Navigation = useNavigate()
  const auth = getAuth()


  useEffect(() => {

    onAuthStateChanged(auth, (isLogin) => {
      if (isLogin.displayName!==undefined) {
        setCurrentUser(isLogin.displayName)
      }
      else {
        setCurrentUser('Login')

      }
    })


    

  }, [])


  const sendValToRedux=(inpValue)=>{
    setSearch(inpValue)
    dispatch({
      type:'SEARCH',
      payload:search,
    })
  }
  



  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out");
        Navigation("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">FakeShop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="products">Profile</a>
              </li>
             
            </ul>
            
            
            <form className="d-flex">
              <input className="form-control me-2"  type="search" value={search} placeholder="Search" aria-label="Search" onChange={e=>sendValToRedux(e.target.value)} />
              <button className="btn btnColor me-2" type="button" onClick={logout}>SignOut</button>
            </form>
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link btnColor " href="#" >  <span class="material-icons md-18"> person </span> <b> {currentUser} </b> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
