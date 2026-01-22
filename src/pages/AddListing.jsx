import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddListing = ({ listings, setListings }) => {

const [image, setImage] = useState('')
const [title, setTitle] = useState('')
const [id, setId] = useState(0)
const [price, setPrice] = useState('')
const [location, setLocation] = useState('')
const [host, setHost] = useState('')
const [license, setLicense] = useState(false)
const [available, setAvailable] = useState(false)

const nav = useNavigate()

function handleAddListing(event) {
    event.preventDefault()
    const newListing = {
        id: Number(id),
        name: title,
        picture_url: image, 
        price: price,
        host_location: location,
        host_name: host,
        license: license,
        instant_bookable: available,
    }
    console.log("listing added", newListing)

    setListings([newListing, ...listings])

    //Sets all of the states back to original values
    setImage("")
    setTitle("")  
    setId(0)
    setPrice("")
    setLocation("")
    setHost("")
    setLicense(false)
    setAvailable(false)

    //Navigates back to Homepage
    nav("/")
}

    return (
    <div className="form-page">

        <h1 className="h-1">Add a new listing</h1>

        <form onSubmit={handleAddListing}>         
            <label>
                Listing image:
                <input value={image} onChange={(event) => {
                setImage(event.target.value)}}
                type="text"
                placeholder="Add image url"
                />   
            </label>

            <label>
                Listing title:
                <input value={title} onChange={(event) => {
                setTitle(event.target.value)}}
                type="text"
                placeholder="Type title"
                />   
            </label>

            <label>
                Listing ID:
             <input value={id} onChange={(e) => {
              setId(Number(e.target.value))}}
              type="number"
              placeholder="Type ID"
             />   
            </label>

            <label>
                Price per night:
            <input value={price} onChange={(e) => 
              setPrice(e.target.value)}
              type="text"
              placeholder="Type price with currency" 
              />
            </label>

            <label>
                Location:
             <input value={location} onChange={(e) => {
              setLocation(e.target.value)}}
              type="text"
              placeholder="Type location" 
              /> 
            </label>

            <label>
                Host name:
             <input value={host} onChange={(e) => {
              setHost(e.target.value)}}
              type="text"
              placeholder="Type host name" 
              />  
            </label>

            <label>
                License: 
             <input type="checkbox"
             checked={license}
             onChange={(e) => {setLicense(e.target.checked)
             }}
             />   
            </label>

            <label>
                Available now?:
             <input type="checkbox"
             checked={available}
             onChange={(e) => {setAvailable(e.target.checked)
             }}
             />    
            </label>
            
            <button>
                Add
            </button>
        </form>
    </div>
    )
}

export default AddListing