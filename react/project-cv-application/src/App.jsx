import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Info from "./Info.jsx";
import PracExp from "./PracExp.jsx";
import EdExp from "./EdExp.jsx";
import Form from "./Form.jsx";

function App() {
  const [editMode, setEditMode] = useState(false);

  const [userName, setUserName] = useState("Full Name");
  const [userMail, setUserMail] = useState("Email Address");
  const [userAddress1, setUserAddress1] = useState("Flat Number, Street Name");
  const [userAddress2, setUserAddress2] = useState("District, City");
  const [userAddress3, setUserAddress3] = useState("State, 110016");
  const [userIntro, setUserIntro] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
  const [userLinks, setUserLinks] = useState([]);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function savePDF() {
    let fileName = userName.toLowerCase().replace(/\s+/g, '');
    
    const userActions = document.querySelectorAll('.userActions button'); 
    userActions.forEach(btn => {
      btn.style.display = 'none';
    });
    
    html2canvas(document.body, {
      scale: 1.5,
      scrollX: 0,
      scrollY: -window.scrollY,
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
  
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [imgWidth, imgHeight],
      });
  
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${fileName}-cv.pdf`);
  
      userActions.forEach(btn => {
        btn.style.display = '';
      });
    }); 
  }

  return (
    <>
      
      { !editMode && (
        <>
          <div className="userActions">
            <button onClick={toggleEdit}>
              Edit Details
            </button>
            <button onClick={savePDF}>
              Download
            </button>
          </div>
          <Info 
            userName={userName}
            userIntro={userIntro}
            userMail={userMail}
            userAddress1={userAddress1}
            userAddress2={userAddress2}
            userAddress3={userAddress3}
            userLinks={userLinks}
          />
          <PracExp />
          <EdExp />
        </>
      )} 
      <Form 
        editMode={editMode} setEditMode={setEditMode}
        userName={userName} setUserName={setUserName}
        userMail={userMail} setUserMail={setUserMail}
        userAddress1={userAddress1} setUserAddress1={setUserAddress1}
        userAddress2={userAddress2} setUserAddress2={setUserAddress2}
        userAddress3={userAddress3} setUserAddress3={setUserAddress3}
        userLinks={userLinks} setUserLinks={setUserLinks} 
        userIntro={userIntro} setUserIntro={setUserIntro}
      />
    </>
  );
}

export default App