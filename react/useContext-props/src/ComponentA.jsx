import { useState, createContext } from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Swyzsh");

  return(
    <div className="box">
      <h2>Component A</h2>
      <h3>{`Hi ${user}`}</h3>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;