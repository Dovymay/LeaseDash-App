import GitHUB from "../assets/GitHUBB.png"
import linkedIn from "../assets/LinkedIn.png"

function AboutPage () {
    return (
        <div>
          <h1>Apartment Rentals Admin App</h1>  
          <p>Admin dashboard for the apartment rental platform where the admin can see and manage the apartments shown on the platform.</p>
          <div className="aboutImages">
             <a
                    href="https://github.com/Dovymay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link2"
                  >
                    <img src={GitHUB} alt="Github" className="GitHUB-icon"/> 
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dovydas-majauskas-a98946259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedIn-link"
                  >
                    <img src={linkedIn} alt="linkedIn" className="LinkedIn-icon"/> 
                  </a>
          </div>
          
        </div>
        
    )
}

export default AboutPage