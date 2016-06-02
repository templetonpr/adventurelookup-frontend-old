import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <footer style={this.props.style}>
        <h4>Legal</h4>
        <ul>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
        </ul>
        <h4>Social Media</h4>
        <ul>
          <li><a target="_blank" href="https://www.facebook.com/">Facebook</a></li>
          <li><a target="_blank" href="https://twitter.com/adventurelookup">Twitter</a></li>
          <li><a target="_blank" href="https://www.gotinder.com/">Tinder</a></li>
        </ul>
        <div>
          <p>&copy; 2016 Lookup Industries, Inc.</p>
          <p>All rights reserved. Restrictions may apply. Colors may vary.</p>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  style: PropTypes.object,
};

export default Footer;
