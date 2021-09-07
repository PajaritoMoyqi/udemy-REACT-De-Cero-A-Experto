import React from 'react'
import propTypes from 'prop-types';

export const GifGridItem = ({id, title, url}) => {

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  ) // javascript class와 구분하고자 className을 쓴다.
}
GifGridItem.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}