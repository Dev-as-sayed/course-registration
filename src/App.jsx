import { useState } from 'react'
import './App.css'
import Courses from './conponents/Courses'
import Listing from './conponents/Listing'
import Header from './conponents/header'


function App() {

  const [listing, setListing] =useState([]);

  const handelListingButton = course => {
    console.log(course);
    const intereatedCourseListing = [...listing, course];
    setListing(intereatedCourseListing);
  }

  return (
    <>
      <Header></Header>
      <section>
        <div className='md:flex'>
          <Courses
            handelListingButton={handelListingButton}
          ></Courses>
          <Listing></Listing>
        </div>
      </section>
    </>
  )
}

export default App
