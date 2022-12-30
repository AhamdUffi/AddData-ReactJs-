import { useState } from "react";
import "./App.css";
import InputData from "./components/InputData/InputData";
import ListUser from "./components/ListUser/ListUser";

function App() {
  const [users, setuser] = useState([]);
  function AddUser(Data) {
    setuser((prev) => {
      const updateUser = [...prev];
      updateUser.unshift(Data);
      return updateUser;
    });
  }
  return (
    <div className="container">
      <InputData shareData={AddUser} />
      <ListUser Users={users} />
    </div>
  );
}

export default App;
