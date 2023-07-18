import React, { useState } from "react";
import UserInput from "./Components/UserInput/UserInput";
import Results from "./Components/Result/Result";

function App() {
  const [userdata, setUserdata] = useState([]);

  const receivedata = (datareceived) => {
    setUserdata((oldlist) => {
      return [...oldlist, datareceived];
    });
  };

  return (
    <>
      <UserInput receivedata={receivedata} />
      <Results items={userdata} />
    </>
  );
}

export default App;
