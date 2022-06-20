import React from 'react'

const New = () => {
    return (
        <section className="newvacation">
            <div className="container">
                <div className="row">
                    <div className="newvacation__form--wrapper">
                        <form action="">
                            <div className="newvacation__form--country newvacation__form">
                                <label>Country</label>
                                <input placeholder="Country..." type="text" />
                            </div>

                            <div className="newvacation__form--capital newvacation__form">
                                <label>Capital</label>
                                <input placeholder="Capital..." type="text" />
                            </div>

                            <div className="newvacation__form--description newvacation__form">
                                <label>Capital</label>
                                <textarea placeholder="Description..." required></textarea>
                            </div>

                            <div className="newvacation__form--description newvacation__form">
                                <label>Images</label>
                                <input type="text" placeholder="Image 1 (URL)" required />
                                <input type="text" placeholder="Image 2 (URL)" required />
                                <input type="text" placeholder="Image 3 (URL)" required />
                            </div>

                            <div className="newvacation__form--capital newvacation__form">
                                <label>Price</label>
                                <input type="number" required placeholder="450" />
                            </div>

                            <input className="newvacation__form--submit" type="submit" value="Nieuwe Vakantie Toevoegen" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default New;