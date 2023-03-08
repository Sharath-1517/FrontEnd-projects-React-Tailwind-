import React from 'react'
import Component from './Component';
import data from '../../data';

const Home = () => {

  const details = data.map(datum => {
    console.log(datum);
    return (
      <Component 
        id = {datum.id}
        challenge_name = {datum.challenge_name}
        live = {datum.live}
        solution = {datum.solution}
        img_alt = {datum.img_alt}
        img_path = {datum.img_path}
      />
    );
  })

  return (
      <div className="home-container">
        {details}
      </div>
  )
}

export default Home;
