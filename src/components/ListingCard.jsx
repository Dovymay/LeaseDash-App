import { Link } from "react-router-dom"

function ListingCard({ listing, handleDelete }) {
    return(
       
        <div className="listingsContainer">            
            <img className="listing-image" src={listing.picture_url}></img>
             <Link to={`/list/${listing.id}`}>
            <h3>{listing.name}</h3>
            </Link>
            <p>{listing.id}</p>
            <p>{listing.price}</p>
            <p>{listing.host_location}</p>
            <p>{listing.host_name}</p>

            <p>License {listing.license? "✅" : "❌"}</p>
            <p>Available now? {listing.instant_bookable? "✅" : "❌"}</p>

            <div className="listing-actions">
                <button 
                    className="delete-button" 
                    onClick={(e) => {
                        // Solution to prevent Default <Link> action:
                        e.stopPropagation() 
                        e.preventDefault()
                        // Above code needs te fixed.
                        handleDelete(listing.id)}}
                    >
                     Delete
                </button>

                <Link to={`/edit-listing/${listing.id}`}>
                <button className="edit-button"
                 onClick={(e) => {
                    e.stopPropagation();
                    }}
                    >
                        Edit
                    </button>
                </Link>
                 
            </div>           
        </div>      
        
    )
}

export default ListingCard
