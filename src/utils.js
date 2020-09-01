// images for pizza size
import smallPizza from './assets/images/small-pizza-150x150.png';
import mediumPizza from './assets/images/medium-pizza-150x150.png';
import largePizza from './assets/images/large-pizza-150x150.png';

// images for crust type
import thinCrust from './assets/images/thin-base.jpg';
import thickCrust from './assets/images/Thick-base.jpg';

// images for pizza size
import pepperoni from './assets/images/pepperoni.webp';
import mushroom from './assets/images/mushroom.jpg';
import onions from './assets/images/onions.jpg';
import sausage from './assets/images/sausage.png';
import bacon from './assets/images/bacon.jpeg';
import extraCheese from './assets/images/extra-cheese.jpg';
import blackOlives from './assets/images/black-olives.jpg';
import greenPepper from './assets/images/green-pepper.jpg';
import pineapple from './assets/images/pineapple.webp';
import spinach from './assets/images/spinach.jpeg';

/** 
 * pizza size's collection
 * @export {Array} getPizzaSizeCollection
*/
export const getPizzaSizeCollection = [
    {
        size: 'small',
        imgSrc: smallPizza,
        price: 8,
        limitForTopping: 5,
        id: 1
    },
    {
        size: 'medium',
        imgSrc: mediumPizza,
        price: 10,
        limitForTopping: 7,
        id: 2
    },
    {
        size: 'large',
        imgSrc: largePizza,
        limitForTopping: 9,
        price: 12,
        id: 3
    }
]

/** 
 * pizza crust type collection
 * @export {Array} getPizzaCrustCollection
*/
export const getPizzaCrustCollection = [
    {
        size: 'thin',
        imgSrc: thinCrust,
        price: 2,
        id: 1
    },
    {
        size: 'thick',
        imgSrc: thickCrust,
        price: 4,
        id: 2
    },
]

/** 
 * pizza toppings collection
 * @export {Array} getPizzaToppingsCollection
*/
export const getPizzaToppingsCollection = [
    {
        topping: 'pepperoni',
        imgSrc: pepperoni,
        price: 0.50,
        isSelected: false,
        id: 1
    },
    {
        topping: 'mushrooms',
        imgSrc: mushroom,
        isSelected: false,
        price: 0.50,
        id: 2
    },
    {
        topping: 'onions',
        imgSrc: onions,
        isSelected: false,
        price: 0.50,
        id: 3
    },
    {
        topping: 'sausge',
        imgSrc: sausage,
        isSelected: false,
        price: 0.50,
        id: 4
    },
    {
        topping: 'Bacon',
        imgSrc: bacon,
        isSelected: false,
        price: 0.50,
        id: 5
    },
    {
        topping: 'extra cheese',
        imgSrc: extraCheese,
        isSelected: false,
        price: 0.50,
        id: 6
    },
    {
        topping: 'black olives',
        imgSrc: blackOlives,
        isSelected: false,
        price: 0.50,
        id: 7
    },
    {
        topping: 'green peppers',
        imgSrc: greenPepper,
        isSelected: false,
        price: 0.50,
        id: 8
    },
    {
        topping: 'pineapple',
        imgSrc: pineapple,
        isSelected: false,
        price: 0.50,
        id: 9
    },
    {
        topping: 'spinach',
        imgSrc: spinach,
        isSelected: false,
        price: 0.50,
        id: 10
    },
]
