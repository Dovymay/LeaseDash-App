import github from "../assets/Github-logo.png"

function Footer() {
    return (
    <footer className="footer">
      <a
        href="https://github.com/Dovymay/LeaseDash-App"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img src={github} alt="GitHub" className="github-icon" />
      </a>
    </footer>
  )
}

export default Footer