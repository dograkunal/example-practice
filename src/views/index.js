import React from "react";

function index() {
  return <div>index</div>;
}

export default index;
export const greetUserName = (name) => {
  console.log(name + "hello how are you");
};
