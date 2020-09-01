import React, { useState, useEffect } from 'react';
import { getPizzaToppingsCollection } from '../utils'
import useToggle from './useToggle';

const Card = React.memo(props => {
    const { text, imgSrc, height, width, price, type, parent, limitForTopping, toppingLimit, showNextBtn, getSelectedCountOfToppings } = props

    const [topping, setToppings] = useToggle(false);
    const [selectedToppings, setSelectedToppings] = useState(getPizzaToppingsCollection);
    let toppings = selectedToppings

    /** 
     * setting pizza metadata on crust and size screen
     * @param {String} value
     * @param {Number} limitForTopping
     * @param {String} parent
     * @param {Number} price
    */
    const setPizzaMetaData = (value, limitForTopping, parent, price) => {
        let hash = { [parent]: { price, value, limitForTopping } }
        if (parent === 'size') localStorage.setItem("size", JSON.stringify(hash))
        if (parent === 'crust') localStorage.setItem("crust", JSON.stringify(hash))
        showNextBtn(true) // show next btn on after selecting any size or crust type
    }


    const onClickRadioCard = (e, limitForTopping, parent, price) => {
        setPizzaMetaData(e.target.value, limitForTopping, parent, price)
    }

    /** 
     * function responsible for select/undo toppings
     * if tooping limit is over so we will return the function
     * @param {String} text
    */
    const onClickToppingHandler = (text) => {
        if (toppingLimit === 0 && !topping) {
            alert("Your topping limit is over")
            return
        }

        const toppingIndex = toppings.findIndex((topp => topp.topping === text));
        if (toppingIndex !== -1) toppings[toppingIndex].isSelected = !topping ? true : false
        setSelectedToppings(toppings)
        localStorage.setItem("toppings", JSON.stringify(toppings))
        getSelectedCountOfToppings(toppings)
        setToppings(!topping)
        let toppingCount = toppings.filter(topping => topping.isSelected === true).length // get selected topping count
        toppingCount === 0 ? showNextBtn(false) : showNextBtn(true) // show next btn when select any topping
    }

    /** 
     * on route change we forcefully hide 
     * nextbtn on component load
    */
    useEffect(() => {
        let routeListener = props.history.listen((location, action) => {
            if (location.pathname !== "/choose-your-pizza-toppings") showNextBtn(false)
        });
        return () => routeListener()
    }, [])


    const btnTextContent = topping ? 'Undo' : 'Select'
    const btnClass = topping ? 'btn-ghost' : 'btn-full'

    return (
        <>
            <label>
                {!(parent === 'topping') && <input type={type} onChange={(e) => onClickRadioCard(e, limitForTopping, parent, price)} name="card-radio" className="card-input-element d-none" id={text} value={text} />}

                <div className="card card-body shadow-lg bg-light br-10 d-flex flex-row justify-content-between align-items-center animate__animated animate__zoomIn">
                    <div className="container">
                        <div className="row justify-content-around align-items-baseline">
                            <div className="col-4">
                                <img className="align-self-center br-10 p-0"
                                    src={imgSrc}
                                    alt="Generic placeholder image"
                                    width={width}
                                    height={height}
                                />
                            </div>
                            <div className="col-8 text-center">
                                <h6 className="text-capitalize">{text} ({`$${price}`})</h6>
                            </div>
                            {parent === 'topping' && <div className="mt-3">
                                <a onClick={() => onClickToppingHandler(text)} className={`btn py-0 px-2 ${btnClass}`} style={{ fontSize: '12px' }} href="#!">{btnTextContent}</a>
                            </div>}
                        </div>
                    </div>
                </div>
            </label>
        </>
    )
});

export default Card