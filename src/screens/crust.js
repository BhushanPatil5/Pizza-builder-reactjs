/** 
 * @summary
 * Screen:- Choose your crust i.e. Thin(+$2), Thick(+$4)
 * User should then be able to pick the crust type
**/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from '../components/jumbotron';
import Card from '../components/card';

import { getPizzaCrustCollection } from '../utils';

const Crust = React.memo(props => {

    const [isNextBtnShow, setShowNextBtn] = useState(false)

    const showNextBtn = (show) => { setShowNextBtn(show) }

    return (
        <>
            <div className="crust-container mt-5">
                <div className="container">
                    <div className="row">
                        <Jumbotron text={'CHOOSE YOUR CRUST'} />
                        <div className="mt-4 container">
                            <div className="row">
                                {getPizzaCrustCollection.length > 0 && getPizzaCrustCollection.map(({ size, imgSrc, price, id }, i) => {
                                    return (<div key={id} className="col-lg-6  mt-2">
                                        <Card
                                            showNextBtn={(show) => showNextBtn(show)}
                                            imgSrc={imgSrc}
                                            height={60}
                                            width={90}
                                            type={"radio"}
                                            parent={"crust"}
                                            text={size}
                                            price={price}
                                            {...props}
                                        />
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-5">
                    <div className="container mt-3">
                        {isNextBtnShow && <div className="row justify-content-end">
                            <Link to="/choose-your-pizza-toppings" className="btn btn-ghost animate__animated animate__heartBeat">Next</Link>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
});

export default Crust