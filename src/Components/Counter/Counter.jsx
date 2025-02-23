import React from 'react';
import './Counter.scss';

const Counter = ({data}) => {
  return (
    <div className="web_count mt-5">
      {data.map((item) => (
        <div className="item fs-48">
          <span className="item_text">{item?.counter_key}</span>
          <p className="item_desc fs-16">{item?.counter_value}</p>
        </div>
      ))}
    </div>
  );
}

export default Counter