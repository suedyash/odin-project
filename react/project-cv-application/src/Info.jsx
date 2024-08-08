import './Info.css';

function Info(
  { 
    userName, 
    userIntro,
    userMail,
    userAddress,
    userLinks
  }) {

  return(
    <>
      <div className="sectionHeading firstSection">
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
          <h4>{userAddress}</h4>
          {userLinks.map((link, index) => (
          <h4 key={index}>{link}</h4>
          ))} 
        </div>
      </div>
    </>
  );
}

export default Info