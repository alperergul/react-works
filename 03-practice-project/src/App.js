import React, { useState } from "react";
import "./App.css";
import AddUSer from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUSer onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
