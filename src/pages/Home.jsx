import React from 'react'
import Vacation from '../components/ui/Vacation'
import Picker from '../components/Picker'

const Home = ({ currentVacation, setVacation }) => {

  return (
    <>
      <Picker setVacation={setVacation} />
      <hr className="rowhr" />
      <Vacation vacation={currentVacation} />
    </>
  )
}

export default Home;