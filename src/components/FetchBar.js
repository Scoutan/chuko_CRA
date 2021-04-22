import React from 'react';

const FetchBar = (props) => {
  return (
    <div className="fetchbar">
      <input type="text" value={props.inputValue} onChange={props.inputChange} placeholder="URL from HobbySearch or amiami..." />
      <button className="button" onClick={props.onFetch}>Fetch</button>
    </div>
  )
}

export default FetchBar;