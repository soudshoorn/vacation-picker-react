import React from 'react'
import Vacation from '../components/ui/Vacation'
import Picker from '../components/Picker'

const Home = ({ currentVacation, setVacation, updateLike }) => {

  return (
    <>
      <Picker currentVacation={currentVacation} setVacation={setVacation} />
      <hr className="rowhr" />
      {
        currentVacation  ? <Vacation vacation={currentVacation} setVacation={setVacation} updateLike={updateLike} key={currentVacation.likes} /> : <br />
      }
      
    </>
  )
}

export default Home;