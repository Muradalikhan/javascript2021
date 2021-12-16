
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


  const updateUser=(id)=>{
    console.log(id)
  }



  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <div>

          <Header />

          <div>

            <table className="table" style={{ margin: '80px auto', width: '80%' }}>
              <thead>
                <tr className='table-dark'>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>

              <tbody>
                {userList.map((e, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i}</th>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>


                        <button className="btn btn-success" onClick={() => updateUser(e.uid)}><span class="material-icons md-18">edit_note</span></button>
                        <button className="btn btn-danger" onClick={() => deleteUser(e.uid)}><span class="material-icons md-18">delete</span></button>

                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>

          </div>
        </div>
      )}
    </>
  )
}
