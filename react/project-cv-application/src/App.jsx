import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Info from "./Info.jsx";
import PracExp from "./PracExp.jsx";
import EdExp from "./EdExp.jsx";
import Form from "./Form.jsx";

function App() {
  const [userName, setUserName] = useState("Full Name");
  const [userIntro, setUserIntro] = useState("Write a short introduction of yourself here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
  const [userMail, setUserMail] = useState("Email Address");
  const [userAddress, setUserAddress] = useState("Residential Address");
  const [userLinks, setUserLinks] = useState([]);

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
      <div className="userActions">
        <button>Edit Details</button>
        <button onClick={savePDF}>
          Download
        </button>
      </div>
      <Info 
        userName={userName}
        userIntro={userIntro}
        userMail={userMail}
        userAddress={userAddress}
        userLinks={userLinks}
      />
      <PracExp />
      <EdExp />
      <Form />
    </>
  );
}

export default App