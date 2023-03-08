import React from 'react';
import { Link } from 'react-router-dom';

const Component = (props) => {
  return (
      <div className="card">
        <Link to={props.live}><img src={`images/${props.img_path}`} alt="" className='card__image'/></Link>
        <h2 className="card__name">qr code component</h2>
        <Link to={props.live} className='card__link'>live url</Link>
        <a href={props.solution} className='card__solution__link'>solution url</a>
      </div>
  )
}

export default Component;
