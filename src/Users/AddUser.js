import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
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
    if (usernameInput.trim().length === 0 || userageInput.trim().length === 0) {
      return;
    }
    if (+userageInput < 1) { // as initially inputs data are strings
      return;
    }
    props.onAddUser(usernameInput, userageInput);
    setUsernameInput('');
    setUserageInput('');
  };

  return (
    <>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={nameInputHandler} value={usernameInput} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageInputHandler} value={userageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;