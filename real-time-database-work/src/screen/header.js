
import React, { useEffect, useState } from 'react'
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  ref,
  db,
  onChildAdded,
  onValue,

} from "../config/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {

  const user = useSelector(state => state.setuser)
  const [currentUser, setCurrentUser] = useState();
  const [currentUserUid, setCurrentUserUid] = useState();



  const Navigation = useNavigate()
  const auth = getAuth()

  useEffect(() => {

    onAuthStateChanged(auth, (isLogin) => {
      if (isLogin) {

        setCurrentUserUid(isLogin.uid)
        getCurrentUser()
      }
      else {
        setCurrentUser('Login')

      }
    })

  }, [])



  const getCurrentUser = () => {
    let refrence = ref(db, `/users/`);

      console.log(refrence)
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
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={logout}>SignOut</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bg-secondary text-white" href="#" >{currentUser}</a>
              </li>


            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}
