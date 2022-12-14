import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from'./AddUser.module.css';

const AddUser = (props) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [userageInput, setUserageInput] = useState('');

  const nameInputHandler = (event) => {
    setUsernameInput(event.target.value)
  }

  const ageInputHandler = (event) => {
    setUserageInput(event.target.value)
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(usernameInput, userageInput);
    setUsernameInput('');
    setUserageInput('');
  };
  
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={nameInputHandler} value={usernameInput} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageInputHandler} value={userageInput} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;