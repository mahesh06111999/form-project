import React, { useState, useRef } from "react";
import "./UserInput.css";
import ErrorModal from "../ErrorModal";

const UserInput = (props) => {
  const enteredusernameref = useRef();
  const entereduserageref = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    const enteredusername = enteredusernameref.current.value;
    const entereduserage = entereduserageref.current.value;
    event.preventDefault();

    if (
      enteredusername.trim().length === 0 ||
      entereduserage.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid input (non empty values is not allowed)",
      });
      return;
    }
    if (+entereduserage < 1) {
      setError({
        title: "Invalid Age",
        message: "Please eneter a valid age",
      });
      return;
    }
    const entereddata = {
      name: enteredusername,
      age: entereduserage,
    };
    props.receivedata(entereddata);
    enteredusernameref.current.value = "";
    entereduserageref.current.value = "";
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <form className="form-design" onSubmit={submitHandler}>
        <p>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={enteredusernameref} />
        </p>
        <p>
          <label htmlFor="userage">Age(Years)</label>
          <input type="number" id="userage" ref={entereduserageref} />
        </p>
        <button type="submit" className="button">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserInput;
