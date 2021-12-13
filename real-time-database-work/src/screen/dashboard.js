
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  auth,
  onAuthStateChanged,
  ref,
  db,
  onChildAdded,
  remove,
} from "../config/firebase";
import Header from './header';





export default function Dashboard() {
  const [userLogin, setUserLogin] = useState(false);
  const [loader, setLoader] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState({});

  const location = useLocation();
  const Navigation = useNavigate();




  useEffect(() => {

    setLoader(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUserLogin(true);
        setLoader(false);
        setUserData(location.state);
        getData()
      } else {
        Navigation("/login");
      }
    });




  }, [])


  const getData = () => {
    let refrence = ref(db, "users/");
    let arr = [];
    onChildAdded(refrence, (snapshot) => {
      if (snapshot.exists()) {
        arr.push(snapshot.val());
        setUserList([...arr]);
      }
    });
  };

  const deleteUser = (id) => {
    const refrence = ref(db, "users/" + id);
    remove(refrence);
  }






  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <div>

          <Header />

          <div>
            <table style={{ margin: '80px auto' }}>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>


              {userList.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>

                      {/* <span class="material-icons md-36"  onClick={() => updateUser(e.uid)}>edit_note</span> */}
                      <button className="btn btn-danger" onClick={() => deleteUser(e.uid)}>delete</button>

                    </td>
                  </tr>
                );
              })}


            </table>

          </div>
        </div>
      )}
    </>
  )
}
