import './App.css'
import Courses from './conponents/Courses'
import Listing from './conponents/Listing'
import Header from './conponents/header'


function App() {


  return (
    <>
      <Header></Header>
      <section>
        <div className='md:flex'>
          <Courses></Courses>
          <Listing></Listing>
        </div>
      </section>
    </>
  )
}

export default App
