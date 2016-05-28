import React from 'react';
import {Link, IndexLink} from 'react-router';

let Nav = (props) => {
  return (
    <div>
      <h3>Nav item</h3>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  )
};
export default Nav;
