import { useState } from "react";
import './Form.css';

function Form({
  editMode, setEditMode,
  userName, setUserName,
  userMail, setUserMail,
  userAddress1, setUserAddress1,
  userAddress2, setUserAddress2,
  userAddress3, setUserAddress3,
  userLinks, setUserLinks,
  userIntro, setUserIntro,
}) {

  const [inputLinks, setInputLinks] = useState("www.finisvisus.com");

  const handleInputChange = (stateVar) => (e) => {
    stateVar(e.target.value);
  };

  const processLinks = (input) => {
    const links = input.split(',')
    .map(link => link.trim()) // trim whitespace from each link
    .filter(link => link !== ''); // remove empty strings from trailing commas

    setUserLinks(links);
    setEditMode(!editMode);
  };

  return (
    <div id="form" style={{ display: editMode ? 'flex' : 'none' }}>
      <button type="submit" onClick={() => processLinks(inputLinks)}>Submit changes</button>
      <label>
        <span>Who are you?</span>
        <input type="text" value={userName} onChange={handleInputChange(setUserName)} />
      </label>
      <label>
        <span>What's your Mail ID?</span>
        <input type="email" value={userMail} onChange={handleInputChange(setUserMail)} />
      </label>
      <label>
        <span>Where do you live?</span>
        <input type="text" value={userAddress1} onChange={handleInputChange(setUserAddress1)} />
      </label>
      <label>
        <input type="text" value={userAddress2} onChange={handleInputChange(setUserAddress2)} />
      </label>
      <label>
        <input type="text" value={userAddress3} onChange={handleInputChange(setUserAddress3)} />
      </label>
      <label className="userLinks">
        <span>Add your links...<h6>separate links with a comma ','</h6></span>
        <input type="text" value={inputLinks} onChange={handleInputChange(setInputLinks)} />
      </label>
      <label>
        <span>Write something about yourself...</span>
        <textarea value={userIntro} onChange={handleInputChange(setUserIntro)} />
      </label>
    </div>
  );
}

export default Form