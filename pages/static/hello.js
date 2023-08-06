import React from "react";

const hello = (props) => {
  return <div>hello
       <h1>ServerSide</h1>
      <div>
        {props.data.users.map((data) => (
          <div key={data.id}>{data.firstName}</div>
        ))}
      </div>
  </div>;
};
export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default hello;
