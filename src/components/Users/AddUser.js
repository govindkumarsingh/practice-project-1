import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

function AddUser(props) {
  const [enteredUsername, setenteredUsername] = useState('')
  const [enteredAge, setenteredAge] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    }

    if (+enteredAge < 1) {
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setenteredUsername('')
    setenteredAge('')
  }

  const usernameChangeHandler = (event) => {
    setenteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value)
  }

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
