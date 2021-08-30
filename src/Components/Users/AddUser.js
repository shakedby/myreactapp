import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0) {
      return;
    }
    if (+enteredAge < 1) {
      // +:change the age from string to number
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setUsername(""); //clear input after adduser button
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value); //target=input, value=id-username
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
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
  );
};

export default AddUser;
