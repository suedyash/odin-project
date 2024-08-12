import { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";
import ComponentD from "./ComponentD.jsx";

function ComponentC() {
  const user = useContext(UserContext);

  return(
    <div className="box">
      <h2>Component C</h2>
      <h3>{`Hello again ${user}`}</h3>
      <ComponentD />
    </div>
  );
}

export default ComponentC;