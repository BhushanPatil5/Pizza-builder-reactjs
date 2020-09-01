/** 
 * @summary
 * User Should Pick The Size of pizza
 * Screen:- Choose your size i.e. Small($8), Mediaum($10), Large($12)
**/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from '../components/jumbotron';
import Card from '../components/card';

import { getPizzaSizeCollection } from '../utils'

const Size = React.memo(props => {

    const [isNextBtnShow, setShowNextBtn] = useState(false)
    const showNextBtn = (show) => setShowNextBtn(show)

    return (
        <>
            <div className="size-container mt-5">
                <div className="container">
                    <div className="row">
                        <Jumbotron text={'CHOOSE YOUR SIZE'} />
                        <div className="mt-4 container">
                            <div className="row">
                                {getPizzaSizeCollection.length > 0 && getPizzaSizeCollection.map(({ size, imgSrc, price, limitForTopping, id }, i) => {
                                    return (
                                        <div key={id} className="col-lg-4 col-md-6 mt-2">
                                            <Card
                                                showNextBtn={(show) => showNextBtn(show)}
                                                imgSrc={imgSrc}
                                                height={100}
                                                width={100}
                                                type={"radio"}
                                                parent={"size"}
                                                text={size}
                                                price={price}
                                                limitForTopping={limitForTopping}
                                                {...props}
                                            />
                                        </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-5">
                    {isNextBtnShow && <div className="container mt-3">
                        <div className="row justify-content-end">
                            <Link to="/choose-your-pizza-crust" className="btn btn-ghost animate__animated animate__heartBeat">Next</Link>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
});

export default Size