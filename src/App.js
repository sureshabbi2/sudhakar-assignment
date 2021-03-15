import logo from './logo.svg';
import './App.css';

import { NavbarComponent, HomeComponent, OrdersListComponent , OrderItem} from './components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent}>
            
          </Route>
          <Route exact path="/gn/order-details" component={OrdersListComponent}>
            
          </Route>
          <Route exact path="/gn/order-details/:id" component={OrderItem}>
            
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
