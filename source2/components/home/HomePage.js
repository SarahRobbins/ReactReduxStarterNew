import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>ALL THAT'S FIT TO PRINT</h1>
        <h2>Books to suit every preference.</h2>
        <br />
        <Link to="/books" className="btn btn-info">Check out the Books!</Link>
      </div>
    );
  }
}

export default HomePage;
