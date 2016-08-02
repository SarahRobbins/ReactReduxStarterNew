import React from 'react';

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact Us!</h1>
        <h2>We love hearing from you :) Reach out to us:</h2><br />
        <h4><span className="glyphicon glyphicon-phone" />  918.544.6798</h4><br />
        <h4><span className="glyphicon glyphicon-envelope" />  booksrus@gmail.com</h4> <br />
        <h4><span className="glyphicon glyphicon-map-marker" />  318 Main St, Palo Alto, CA</h4><br />
      </div>
    );
  }
}

export default ContactPage;
