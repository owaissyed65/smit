// import New from "@/components/New";
import React, { useEffect, useState } from "react";

const hello = (props) => {
  // const [d, setD] = useState(1);
  const [s, setS] = useState();

  
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      console.log(data);
      setS(data);
    };
    
  

  // function checkClosure(msg) {
  //   return function (e) {
  //     console.log(msg);
  //     console.log(e.target.innerText);
  //   };
  // }

  // const add = (a) => (b) => (c) => console.log(a + b + c);
  return (
    <div className="flex">
      {/* <button onClick={checkClosure("Hello How are you")}>Check</button> */}
      {/* {d} */}
      {/* <New data="hello" /> */}
      <div>
        {s?.map((data) => (
          <div key={data.id}>{data.title}</div>
        ))}
      </div>
      {/* <button
        onClick={() => {
          add(1)(2)(3);
        }}
      >
        Add
      </button> */}
    </div>
  );
};

export default hello;
