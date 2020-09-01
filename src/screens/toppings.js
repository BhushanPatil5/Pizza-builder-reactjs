/** 
 * @summary Screen:- Choose your toppings Pepperoni, Mushrooms, Onions, Sausage,
 * Bacon, Extra Cheese, Black Olives, Green peppers, Pineapple, Spinach
 * 
 * List of ingredients with photo and name to pick as toppings
 * The user should be able to add 0-3 ingredients from that list without any additional cost fr the pizza.
 * The user may add more ingredients, but each new addition after the third one costs $0.50
 * The user cant repeat ingredients
 * 
 * 
 * Max ingredients for each pizza
 * 5 for small
 * 7 for medius
 * 9 for large
**/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from '../components/jumbotron';
import Card from '../components/card';

import { getPizzaToppingsCollection } from '../utils';

const Toppings = React.memo(props => {

    const size = JSON.parse(localStorage.getItem('size'));
    const [toppingLimit, setToppingLimit] = useState(0);
    const [isNextBtnShow, setShowNextBtn] = useState(false)

    const showNextBtn = (show) => { setShowNextBtn(show) }

    /** 
     * get selected toppings and set limit for toppings
     * @param {Array} selectedToppings
    */
    const getSelectedCountOfToppings = (selectedToppings) => {
        let toppingsCount = selectedToppings && selectedToppings.filter(topping => topping.isSelected === true).length
        let limit = size?.size.limitForTopping - toppingsCount
        setToppingLimit(limit)
    }

    useEffect(() => {
        setToppingLimit(size?.size.limitForTopping)
    }, [])

    return (
        <>
            <div className="topping-container mt-5">
                <div className="container">
                    <div className="row">
                        <Jumbotron text={'CHOOSE YOUR TOPPINGS'} />
                        <div className="container text-center mt-3">
                            <p className="text-warning"> {`* You can select any max ${size?.size.limitForTopping} toppings`} </p>
                            <p className="text-warning">* You can select any 3 toopings for free after each one get charge $0.50 </p>
                            <p className="text-success"> {`You have left ${toppingLimit} topping`} </p>
                        </div>
                        <div className="mt-4 container">
                            <div className="row">
                                {getPizzaToppingsCollection.length > 0 && getPizzaToppingsCollection.map(({ topping, imgSrc, price, isSelected, id }, i) => {
                                    return (
                                        <div key={id} className="col-lg-4  mt-2">
                                            <Card
                                                getSelectedCountOfToppings={(selectedToppings) => getSelectedCountOfToppings(selectedToppings)}
                                                showNextBtn={(show) => showNextBtn(show)}
                                                isSelected={isSelected}
                                                toppingLimit={toppingLimit}
                                                imgSrc={imgSrc}
                                                height={60}
                                                width={90}
                                                parent={"topping"}
                                                text={topping}
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
                            <Link to="/check-your-custom-pizza" className="btn btn-ghost animate__animated animate__heartBeat">Next</Link>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
});

export default Toppings