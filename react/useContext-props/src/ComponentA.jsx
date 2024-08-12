import ComponentB from "./ComponentB.jsx";

function ComponentA() {

  return(
    <div className="box">
      <h2>Component A</h2>
      <ComponentB />
    </div>
  );
}

export default ComponentA;