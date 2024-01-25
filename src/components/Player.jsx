import {useState} from 'react';
export default function Player({playerName, symbol, isActive,changeName}){

    
    
    const [editableName, setEditableName] = useState(playerName);
    const [isEditing, setIsEditing] = useState(false);

    let nameField = <span className="player-name" >{editableName}</span>;
    
    function handleEditClick(){
        setIsEditing((editing)=>!editing);
        if(isEditing){
            changeName(editableName,symbol);
        }
        
    }
    function handleOnChange(event){
        setEditableName(event.target.value)
    }
    if(isEditing){
        nameField = <input type="text"  required value={editableName} onChange={handleOnChange}/>
    }
return (
    <li className={isActive ? 'active':undefined}><span  className="player">
                  {nameField}
                  <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
);
}