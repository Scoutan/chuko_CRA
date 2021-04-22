const Dimmer = (props) => {
  return (
    <div className="dimmer">
      <div className="loader">
      </div>
      <h3 className="message">
        {props.message}
      </h3>
    </div>
  )
}

export default Dimmer;