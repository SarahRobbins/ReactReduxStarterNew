import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/books" activeClassName="active">View Books</Link>
      {" | "}
      <Link to="/contact" activeClassName="active">Contact</Link>
    </nav>
  );
};

export default Header;
