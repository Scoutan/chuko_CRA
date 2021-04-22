import React from 'react';
import FetchBar from './FetchBar';

const Menu = (props) => {
  return (
    <div className="main-menu">
      <button className="button" onClick={props.load}>
        Load from file
      </button>
      <button className="button" onClick={props.save}>
        Save to file
      </button>
      <button className="button" onClick={props.clear}>
        Clear file
      </button>
      <button className="button" onClick={props.test}>
        Fetch Test
      </button>
      <FetchBar
        loadingSearch={props.loadingSearch}
        inputValue={props.inputValue}
        inputChange={props.inputChange}
        onFetch={props.onFetch}
      />
    </div>
  )
}

export default Menu;