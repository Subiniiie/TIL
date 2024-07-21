import { useState } from "react";

function Player({initialName, symbol}) {
    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false)

    function handleEditClick() {
        // setIsEditing(!isEditing), setIsEditing(isEditing ? false : true)와 동일
        setIsEditing((editing) => !editing)   
    }

    function handleChange(event) {
        console.log(event.target.value)
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return ( 
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
    )
}

export default Player;