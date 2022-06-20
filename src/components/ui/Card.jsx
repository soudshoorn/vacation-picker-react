import React from 'react'

const Card = ({ vacation, setVacation }) => {

    return (
        <div className="card" onClick={() => setVacation(vacation)}>
            <figure className="card__img--wrapper">
                <img src={vacation.images.image1} className="card__img" alt="" />
            </figure>
            <div className="card__description">
                <h3 className="card__description--title">{vacation.name}</h3>
                <p className="card__description--para">Capital: {vacation.capital}</p>
            </div>
        </div>
    )
}

export default Card;