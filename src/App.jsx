import { useState } from 'react'
import './App.css'
import Courses from './conponents/Courses'
import Listing from './conponents/Listing'
import Header from './conponents/header'

function App() {

  const [listing, setListing] =useState([]);
  const [creditsTime, setCreditsTime] = useState(0);
  const [price, setPrice] = useState(0);

  const handelListingButton = course => {
    console.log(course.price);
    const intereatedCourseListing = [...listing, course];
    setListing(intereatedCourseListing);

    const totalCredits = creditsTime + course.credit ;
    setCreditsTime(totalCredits);

    const totalPrice = price + course.price ;
    setPrice(totalPrice);
  }

  return (
    <>
      <Header></Header>
      <section>
        <div className='md:flex'>
          <Courses
            handelListingButton={handelListingButton}
          ></Courses>
          <Listing
            listing={listing}
            credits={creditsTime}
            price={price}
          ></Listing>
        </div>
      </section>
    </>
  )
}

export default App