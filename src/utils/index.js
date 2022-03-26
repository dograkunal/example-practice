import React from "react";

function index() {
  return <div>index</div>;
}

export default index;
export const greetUser = (msg) => {
  console.log(msg + "hello how are you");
};
