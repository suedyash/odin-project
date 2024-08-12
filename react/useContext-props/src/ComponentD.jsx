import { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

function ComponentD() {
  const user = useContext(UserContext);

  return(
    <div className="box">
      <h2>Component D</h2>
      <h3>{`Bye ${user}`}</h3>
    </div>
  );
}

export default ComponentD;