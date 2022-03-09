import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  auth,
  onAuthStateChanged,
  ref,
  db,
  onChildAdded,
  remove,
} from "../config/firebase";
import Header from "./header";
import { useSelector } from "react-redux";
import { onValue, update } from "firebase/database";
import { Confirm } from "react-st-modal";
import ConfirmModal from "../component/Modal/Confirm";
import EditModal from "../component/Modal/Custome";

export default function Dashboard() {
  const [userLogin, setUserLogin] = useState(false);
  const [loader, setLoader] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState({});
  const searchValue = useSelector((state) => state.filterTable);

  const location = useLocation();
  const Navigation = useNavigate();

  useEffect(() => {
    setLoader(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserLogin(true);
        setLoader(false);
        setUserData(location.state);
        getData();
      } else {
        Navigation("/login");
      }
    });
  }, []);

  const getData = () => {
    let refrence = ref(db, "users/");
    onValue(refrence, (snapshot) => {
      if (snapshot.exists()) {
        setUserList(Object.values(snapshot.val()));
      }
    });
  };

  const updateUser = (id) => {
    const refrence = ref(db, "users/" + id);
    update(refrence, {
      name: "updated",
      email: "updated",
    });
  };

  return (
    <>
      <Header />
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <h2>{searchValue}</h2>

            <table
              className="table"
              style={{
                margin: "80px auto",
                width: "80%",
                backgroundColor: "white",
              }}
            >
              <thead>
                <tr className="table-dark">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>

              <tbody>
                {userList
                  .filter((e, i) => {
                    if (searchValue === "") {
                      return (
                        <tr key={i}>
                          <th scope="row">{i}</th>
                          <td>{e.name}</td>
                          <td>{e.email}</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => updateUser(e.uid)}
                            >
                              <span className="material-icons md-18">
                                edit_note
                              </span>
                            </button>
                          </td>
                        </tr>
                      );
                    } else if (
                      e.name.toLowerCase().includes(searchValue.toLowerCase())
                    ) {
                      return (
                        <tr key={i}>
                          <th scope="row">{i}</th>
                          <td>{e.name}</td>
                          <td>{e.email}</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => updateUser(e.uid)}
                            >
                              <span className="material-icons md-18">
                                edit_note
                              </span>
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  })

                  .map((e, i) => {
                    return (
                      <tr key={i} className="zebra-style">
                        <th scope="row">{i}</th>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>
                          <EditModal />
                          <ConfirmModal id={e.uid} />
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
  );
}
