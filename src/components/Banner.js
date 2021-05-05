import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <Link to="/">
        <div className="banner_textbox">
          <div className="banner_animation_display">
            <div className="banner_list">
              <div className="banner_list_item">CHŪKO</div>
              <div className="banner_list_item">中古</div>
            </div>
          </div>
        </div>
      </Link>
    </div >
  )
}

export default Banner;