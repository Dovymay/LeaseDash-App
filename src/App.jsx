import './App.css'
import { useState } from "react";
import listingsData from "./data/listings.json";
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer.jsx'
import Homepage from './pages/Homepage.jsx'
import ListingDetailsPage from './pages/ListingDetailsPage.jsx'
import AddListing from './pages/AddListing.jsx'
import EditListingPage from './pages/EditListingPage.jsx';
import AboutPage from './pages/AboutPage.jsx'
import NotFound from './pages/NotFoundPage.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [listings, setListings] = useState(listingsData.results);

  const handleDelete = (id) => {
    setListings((prev) => prev.filter(l => l.id !== id));
  };


  return (

      <div className='App'>
        <Navbar />

        <div className="main-layout">
          <Sidebar />
            <main className="content">
          {/* Routes / Pages go here */}
              
              <Routes>
                <Route path="/" element={<Homepage  listings={listings} handleDelete={handleDelete}/>} />
                <Route path="list/:id" element={<ListingDetailsPage listings={listings}/>} />
                <Route path="/add-listing" element={<AddListing listings={listings} setListings={setListings}/>} />
                <Route path="/edit-listing/:id" element={<EditListingPage listings={listings} setListings={setListings}/>} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
        </div>
            
        <Footer />
      </div>
      
  )
}

export default App
