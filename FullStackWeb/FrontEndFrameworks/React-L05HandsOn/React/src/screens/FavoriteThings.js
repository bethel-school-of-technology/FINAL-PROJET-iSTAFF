import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (
  <div>
    <h2>Favorite Things</h2>
    <ul>
      <li>
        <Link to={`${match.url}/Old-Pickup-Truck`}>Favorite Car</Link>
      </li>
      <li>
        <Link to={`${match.url}/Sushi`}>Favorite Food</Link>
      </li>
      <li>
        <Link to={`${match.url}/Red`}>Favorite Movie</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicValue`} component={Things} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a thing.</h3>}
    />
  </div>
);

export default FavoriteThings;