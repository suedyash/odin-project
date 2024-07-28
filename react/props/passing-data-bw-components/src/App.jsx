import './App.css'

function Button({ text = "Default Click", color = "pink", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  const handleButtonClickALT = function() {
    window.open("https://www.twitter.com", "_blank");
  }

  return (
    <div id='buttonContainer'>
      <Button></Button>
      <Button text="Click ME!" color="blue" fontSize={12} handleClick={handleButtonClick}></Button>
      <Button text="Don't click me !!!!" color="red" fontSize={12}></Button>
      <Button text="Click ME PLEASE!!!!!!!!" color="green" fontSize={20}></Button>
      <Button></Button>
      <Button fontSize={20}></Button>
      <Button text="Not so 'DEFAULT' now innit" color='cyan' handleClick={handleButtonClickALT}></Button>
    </div>
  );
}
