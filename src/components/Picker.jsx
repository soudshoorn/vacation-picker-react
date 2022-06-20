import React from 'react'
import { vacationsList } from '../vacationsList';
import Card from './ui/Card';

const Picker = ({ setVacation }) => {
    return (
        <section className="picker">
            <div className="container">
                <div className="row">
                <div className="cards__output">
                {
                    vacationsList.map((vacation) => (
                    <Card vacation={vacation} setVacation={setVacation} key={vacation.id} />
                    ))
                }
                </div>
                </div>
            </div>
        </section>
    )
}

export default Picker;
