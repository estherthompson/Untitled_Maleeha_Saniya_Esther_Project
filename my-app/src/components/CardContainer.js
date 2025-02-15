import React from 'react';
import {Link} from 'react-router-dom';

function CardContainer({children}) {

  return (
    <div className= "card-countainer"> 
    <nav>   
        <Link to= "/">Home</Link>
        <Link to="/Community">Community</Link>
    </nav>
    <div className="card-content">{children}</div>
    </div>
  );
}

export default CardContainer;
