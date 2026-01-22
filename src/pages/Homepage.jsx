import ListingsList from "../components/ListingsList"

function Homepage({ listings, handleDelete }) {
    return (
        <div>
          <ListingsList 
          listings={listings} 
          handleDelete={handleDelete}
          />  
        </div>
    )
}

export default Homepage