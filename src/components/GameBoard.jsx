export default function GameBoard({onSelectSqaure,turns}){
    
   
    

    return (
        <ol id="game-board">
           {turns.map((row, rowIndex)=> <li key={rowIndex}>
            <ol>
                {row.map((playerName, colIndex)=> <li key ={colIndex}>
                    <button onClick={() => onSelectSqaure(rowIndex,colIndex)} disabled={playerName!=null}>{playerName}</button>
                    </li>)}
            </ol>
           </li>)} 
        </ol>
    );
}