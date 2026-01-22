import { useState } from "react"
import ListingCard from "./ListingCard"


function ListingsList({ listings, handleDelete }) {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const totalPages = Math.ceil(listings.length/itemsPerPage)
    const currentItems = listings.slice(firstItemIndex, lastItemIndex)


    return (
        <div className="listings-list">
            <h1>Listings</h1>
            <hr />

            {currentItems.map((listing) => (
                <ListingCard 
                key={listing.id} 
                listing={listing} 
                handleDelete={handleDelete}
                />
            ))}

            <div className="pagination">
                <button 
                className="pagination-buttons"
                disabled={currentPage==1}
                onClick={() => setCurrentPage(currentPage-1)}
                >Prev
                </button>

                Page {currentPage} of {totalPages}

                <button 
                className="pagination-buttons"
                disabled={currentPage==totalPages}
                onClick={() => setCurrentPage(currentPage+1)}
                >Next
                </button>
            </div>
        </div>
    )
}

export default ListingsList