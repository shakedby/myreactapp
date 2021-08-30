import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value); //target=input, value=id-username
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age-non empty!",
      });
      return;
    }
    if (+enteredAge < 1) {
      // +:change the age from string to number
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    //console.log(props.onAddUser(enteredUsername, enteredAge));
    setUsername(""); //clear input after adduser button
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
