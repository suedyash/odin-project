import './Info.css';

function Info() {

  let userName = "Full Name";
  let userIntro = "Write a short introduction of yourself here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  let userMail = "Email Address";
  let addressLine1 = "Residential Address";
  let addressLine2 = "XYZ";
  let addressLine3 = "Country";
  let userLinks = [];

  let link1 = "Weblink 1";
  let link2 = "Weblink 2";
  userLinks.push(link1);
  userLinks.push(link2);

  return(
    <>
      <div className="sectionHeading">
        <h3>HIRE ME?</h3>
        <div className="underLine"></div>
      </div>

      <div className="personalDetails">
        <div className='lh'>
          <h1>{userName}</h1>
          <h4>{userIntro}</h4>
        </div>
        <div className='rh'>
          <h4>{userMail}</h4>
          <h4>{addressLine1}<br />{addressLine2}<br />{addressLine3}</h4>
          {userLinks.map((link, index) => (
            <h4 key={index}>{link}</h4>
          ))} 
        </div>
      </div>
    </>
  );
}

export default Info