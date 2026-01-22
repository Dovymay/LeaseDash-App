import notFoundImage from "../assets/NotFound.png"
import { useNavigate } from "react-router-dom"


function NotFound() {
const navigate = useNavigate()

    return (
        <div className="not-found-overlay">
            <img src={notFoundImage} 
            alt="NotFound" 
            className="notFoundImage" 
            onClick={() => navigate("/")} />
        </div>
    )
}

export default NotFound