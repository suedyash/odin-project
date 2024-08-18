function Footer() {
  const openGithub = () => {
    window.open('https://github.com/swyzsh', '_blank');
  }

  return (
    <div className="footer">
      <span>Made with love, by Swyzsh 💛</span>
      <button onClick={openGithub}>Github</button>
    </div>
  );
}

export default Footer;