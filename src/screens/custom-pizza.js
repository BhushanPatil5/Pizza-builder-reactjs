/** 
 * @summary
 * After the pizza is done, user should see a confirmation screen with his pizza and detailed info
 * Screen:- Check your custom pizza
**/

import React from 'react';

const CustomPizza = React.memo(props => {
    const size = JSON.parse(localStorage.getItem('size')); // selected size
    const crust = JSON.parse(localStorage.getItem('crust'));
    const toppings = JSON.parse(localStorage.getItem('toppings'));
    const selectedToppings = toppings.filter(topping => topping.isSelected === true)

    const toppingsList = selectedToppings.map(o => o.topping)
    let toppingPrice = 0

    // adding topping price only if user add more than 3 toppings
    if (toppingsList.length > 3) {
        let toppings = selectedToppings.map(o => o.price)
        toppings.length = toppings.length - 3
        toppingPrice = toppings.reduce((a, b) => (a + b),0);
    }

    // pizza hash for final pizza information data collection
    let pizzaInfo = {
        size: size.size,
        crust: crust.crust,
        toppings,
        totalPrice: size.size.price + crust.crust.price + toppingPrice,
        id: 1
    }

    const pizzaInfoCollection = [pizzaInfo]

    // on checkout btn handler
    const onCheckoutHandler = () => {
        alert("Checkout successfully")
        localStorage.clear();
        props.history.push('/')
    }

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <h2>Your Cart</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card animate__animated animate__fadeIn shadow-lg my-5">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Size</th>
                                                <th scope="col">Crust</th>
                                                <th scope="col">Toppings</th>
                                                <th scope="col">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pizzaInfoCollection.length > 0 && pizzaInfoCollection.map(({ size, crust, toppings, totalPrice, id }, i) => {
                                                return (
                                                    <tr key={id}>
                                                        <td>{size.value}</td>
                                                        <td>{crust.value}</td>
                                                        <td> <ul> {toppings.map((topping, i) => <li key={i}>{topping}</li>)} </ul> </td>
                                                        <td>{`$ ${totalPrice}`}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-5">
                    <a href="#!" onClick={() => onCheckoutHandler()} className="btn btn-ghost"> Proceed to checkout </a>
                </div>
            </div>
        </>
    )
});

export default CustomPizza