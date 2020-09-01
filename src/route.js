import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// App Components
import App from './App';
const Size = React.lazy(() => import('./screens/size'));
const Crust = React.lazy(() => import('./screens/crust'));
const Toppings = React.lazy(() => import('./screens/toppings'));
const CustomPizza = React.lazy(() => import('./screens/custom-pizza'));

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<h1>Loading</h1>}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/choose-your-pizza-size" component={Size} />
                <Route exact path="/choose-your-pizza-crust" component={Crust} />
                <Route exact path="/choose-your-pizza-toppings" component={Toppings} />
                <Route exact path="/check-your-custom-pizza" component={CustomPizza} />
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default Routes