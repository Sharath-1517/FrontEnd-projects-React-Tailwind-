import React from 'react';
import { Link } from 'react-router-dom';

const Component = (props) => {
  return (
      <div className="card">
        <a href="/qr-code-challenge"><img src={`/images/${props.img_path}`} alt="" className='card__image'/></a>
        <h2 className="card__name">qr code component</h2>
        <Link to={'/qr-code-challenge'} className='card__link'>live url</Link>
        <a href={props.solution} className='card__solution__link'>solution url</a>
      </div>
  )
}

export default Component;
