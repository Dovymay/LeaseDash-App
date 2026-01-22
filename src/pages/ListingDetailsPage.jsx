import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFoundPage";



function ListingDetailsPage ({ listings }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const listing = listings.find(l => l.id === Number(id))

    if (!listing) {
    return <NotFound />;
  }

    return (
    <div>
    <h1>Listing details</h1>
        <div className="detailsPage">
            <img className="detailsImage" src={listing.picture_url}></img>
            <div className="details">            
                <h2>Title: {listing.name}</h2>
                <h3>Listing ID: {listing.id}</h3>
                <p>Price per night: {listing.price}</p>
                <p>Location: {listing.host_location}</p>
                <p>Host name: {listing.host_name}</p>
                <p>License {listing.license? "✅" : "❌"}</p>
                <p>Available now? {listing.instant_bookable? "✅" : "❌"}</p>

                <button 
                    className="delete-button" 
                    onClick={() => navigate('/')}
                    >
                     Back
                </button>
                 <button 
                 className="edit-button"
                 onClick={() => navigate(`/edit-listing/${listing.id}`)}
                 >
                     Edit 
                </button>

            </div> 
        </div>      
    </div>
    )
}

export default ListingDetailsPage