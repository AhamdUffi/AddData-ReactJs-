import React, { useState, useRef } from "react";
import "./InputData.css";
import Button from "./UI/Button/Button";
import { v4 as uuid } from "uuid";
import Validation from "../alertValidation/Validation";

const InputData = (props) => {
  const [entiredName, setEntiredName] = useState("");
  const [entiredAge, setEntiredAgg] = useState("");
  const [error, setError] = useState();
  const inputName = useRef();
  const inputAge = useRef();

  function addName(event) {
    setEntiredName(event.target.value);
  }
  function addAge(event) {
    setEntiredAgg(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const entiredUserName = inputName.current.value;
    const entiredUserAge = inputAge.current.value;
    if (
      entiredUserName.trim().length === 0 ||
      +entiredUserAge.trim().length === 0
    ) {
      setError({
        title: "invalid Input",
        massage: "please!. input a right value",
      });
      return;
    }
    if (+entiredUserAge < 1) {
      setError({
        title: "invalid age",
        massage: "please! enter yur right age ( > 0)",
      });
      return;
    }
    props.shareData({
      userName: entiredUserName,
      age: +entiredUserAge,
      id: uuid(),
    });
    inputName.current.value = "";
    inputAge.current.value = "";
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <>
      {error && (
        <Validation
          title={error.title}
          massage={error.massage}
          onConfirm={errorHandler}
        />
      )}
      <div className="form-control">
        <form action="#" onSubmit={submitHandler}>
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            placeholder="enter your username"
            onChange={addName}
            ref={inputName}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="enter your Age"
            onChange={addAge}
            ref={inputAge}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </div>
    </>
  );
};

export default InputData;
