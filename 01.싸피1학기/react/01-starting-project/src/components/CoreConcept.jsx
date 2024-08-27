// props 받음
function CoreConcept({image, description, title}) {
    return (
      <li>
        {/* props.image와 동일 */}
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }


export default CoreConcept;