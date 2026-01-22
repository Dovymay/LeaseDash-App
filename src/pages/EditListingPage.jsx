import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditListingPage = ({ listings, setListings }) => {

    const { id } = useParams()

    const oneListing = listings.find((listing) => {
        if(listing.id == Number(id)){
            return true
        }
    })

    const nav = useNavigate()

    const [image, setImage] = useState(oneListing.picture_url)
    const [title, setTitle] = useState(oneListing.name)
    const [listingId, setListingId] = useState(oneListing.id)
    const [price, setPrice] = useState(oneListing.price)
    const [location, setLocation] = useState(oneListing.host_location)
    const [host, setHost] = useState(oneListing.host_name)
    const [license, setLicense] = useState(oneListing.license)
    const [available, setAvailable] = useState(oneListing.instant_bookable)

    function handleEditListing(event) {
        event.preventDefault()
        const updatedListing = {
            id: Number(id),
            name: title,
            picture_url: image, 
            price: price,
            host_location: location,
            host_name: host,
            license: license,
            instant_bookable: available,
        }

        const mappedListings = listings.map((oneListing) => {
            if(oneListing.id == Number(id)){
                return {...oneListing, ...updatedListing}
            }else{
                return oneListing
            }
        })

        setListings(mappedListings);

        nav("/");
    }
    
    

    return (
        <div className="form-page">

        <h1 className="h-1">Edit the listing</h1>

        <form  onSubmit={handleEditListing}>         
            <label>
                Listing image:
                <input value={image} 
                onChange={(e) => {setImage(e.target.value)}}
                type="text"
                placeholder="Add image url"
                />   
            </label>

            <label>
                Listing title:
                <input value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                type="text"
                placeholder="Type title"
                />   
            </label>

            <label>
                Listing ID:
             <input value={listingId}
              onChange={(e) => {setListingId(e.target.value)}}
              type="number"
              placeholder="Type ID"
             />   
            </label>

            <label>
                Price per night:
            <input value={price}
              onChange={(e) => {setPrice(e.target.value)}}
              type="text"
              placeholder="Type price with currency" 
              />
            </label>

            <label>
                Location:
             <input value={location}
              onChange={(e) => {setLocation(e.target.value)}}
              type="text"
              placeholder="Type location" 
              /> 
            </label>

            <label>
                Host name:
             <input value={host}
              onChange={(e) => {setHost(e.target.value)}}
              type="text"
              placeholder="Type host name" 
              />  
            </label>

            <label>
                License: 
             <input type="checkbox" 
             checked={license}
             onChange={(e) => setLicense(e.target.checked)}
             />   
            </label>

            <label>
                Available now?:
             <input type="checkbox"
             checked={available}
             onChange={(e) => setAvailable(e.target.checked)}
             />    
            </label>
            
            <button>
                Update
            </button>
        </form>
    </div>
    )
}

export default EditListingPage