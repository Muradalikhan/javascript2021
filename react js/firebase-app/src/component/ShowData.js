import { ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { child, get } from "firebase/database";

const ShowData = () => {
  const [data, setData] = useState([]);
  let arr = [];
  const getData = () => {
    const dbRef = ref(db);
    get(child(dbRef, "Todo"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const childData = snapshot.val();
          console.log(childData);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>get data</div>
      {data.map((item, ind) => {
        return (
          <div key={ind}>
            <div>{item.task}</div>
            <div>{item.complete}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowData;
