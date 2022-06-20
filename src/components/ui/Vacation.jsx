import { faHeart, faHeartBroken, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const Vacation = ({ vacation, setVacation, updateLike }) => {
    return (
        <div className="vacation">
            <div className="container">
                <div className="row">
                    <div className="vacation__banner">
                        <img src={vacation.images.image1} alt="" className="vacation__banner--img" />
                        <img src={vacation.images.image2} alt="" className="vacation__banner--img" />
                        <img src={vacation.images.image3} alt="" className="vacation__banner--img vacation__banner--last" />
                        <p onClick={() => setVacation(false)} className="close__button"><FontAwesomeIcon icon={faTimes} /></p>
                    </div>
                    <div className="vacation__pricetag">
                        {
                            vacation.price > 1000 ?
                            <div className="vacation__pricetag--expensive">
                                <p className="vacation__pricetag--para">EXPENSIVE</p>
                            </div>
                            : 
                            <div className="vacation__pricetag--cheap">
                                <p className="vacation__pricetag--para">CHEAP</p>
                            </div>
                        }
                    </div>
                    <div className="vacation__description">
                        <h2 className="vacation__description--title">{vacation.name}</h2>
                        <p className="vacation__description--capital">Capital: {vacation.capital}</p>

                        <p className="vacation__description--para">{vacation.description}</p>
                        <div className="vacation__description--likes">
                            <p onClick={() => updateLike(vacation, 1)} className="likes__add"><FontAwesomeIcon icon={faHeart} /></p>
                            {vacation.likes}
                            <p onClick={() => updateLike(vacation, 0)} className="likes__remove"><FontAwesomeIcon icon={faHeartBroken} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vacation;
