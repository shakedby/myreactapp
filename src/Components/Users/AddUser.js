import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setUsername] = useState("");
  // const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  // const usernameChangeHandler = (event) => {
  //   setUsername(event.target.value); //target=input, value=id-username
  // };
  // const ageChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim() === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age-non empty!",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      // +:change the age from string to number
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ""; //clear input after adduser button
    ageInputRef.current.value = "";

    //console.log(props.onAddUser(enteredUsername, enteredAge));
    // setUsername(""); //clear input after adduser button
    // setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
