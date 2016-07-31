import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

class Layout extends React.Component{

  render() {
    return (
      <div className="container-fluid">
        <Header ajaxRequests={this.props.ajaxRequests}/>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  ajaxRequests: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    ajaxRequests: state.ajaxRequests > 0
  };
}

export default connect(mapStateToProps)(Layout);
