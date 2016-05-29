import React from 'react';
import {Link} from 'react-router';

let Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Stockholm'>Stockholm, Sweden</Link>
        </li>
        <li><Link to='/?location=phuket'>Phuket, Thailand</Link></li>
      </ol>
    </div>
  )
};
export default Examples;
