import FunctionalInput from "./assets/FunctionalInput";
import ClassInput from "./assets/ClassInput";

function App() {
  return (
    <>
      <FunctionalInput name="Functional component!" />
      <div className="divider" />
      <ClassInput name="Class based component!" />
    </>
  );
}

export default App;
