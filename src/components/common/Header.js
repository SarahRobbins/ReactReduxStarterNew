import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({ajaxRequests}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/books" activeClassName="active">View Books</Link>
      {" | "}
      <Link to="/contact" activeClassName="active">Contact</Link>
      {ajaxRequests && <LoadingDots/>}
    </nav>
  );
};

export default Header;
