import { ref, remove, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { onValue } from "firebase/database";
import { toast } from "react-toastify";

const ShowData = () => {
  const [todoList, setTodoList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [msg, setMsg] = useState("");

  const getData = () => {
    setLoader(true);
    const dbRef = ref(db, "Todo/");
    onValue(dbRef, (snapshot) => {
      setTodoList([]);
      if (snapshot.exists()) {
        setLoader(false);
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          const obj = {
            id: childKey,
            childData,
          };
          setTodoList((oldArr) => [...oldArr, obj]);
          setMsg("");
        });
      } else {
        setLoader(false);
        setMsg("data not found");
      }
    });
  };

  const deleteItem = (id) => {
    remove(ref(db, `Todo/${id}`));
    toast.success("data deleted succesfully!");
  };
  const updateItem = (id, status) => {
    update(ref(db, `Todo/${id}`), {
      complete: !status,
    });
    toast.success("data updated succesfully!");
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {!loader ? (
        todoList.map((item, ind) => {
          return (
            <div key={ind} className="task">
              <div
                className={item.childData.complete ? "complete" : ""}
                style={{ flex: 0.5 }}
              >
                {item.childData.task}
              </div>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
              <button
                onClick={() => updateItem(item.id, item.childData.complete)}
              >
                Complete
              </button>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
      {msg.length > 0 && msg}
    </div>
  );
};

export default ShowData;
