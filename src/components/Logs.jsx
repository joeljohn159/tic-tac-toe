export default function Logs({turns}){
    return (<ol id="log">
{turns.map((turn)=><li key={`${turn.square.row}${turn.square.col}`}>{turn.player} has position {turn.square.row} {turn.square.col}</li>)}
    </ol>);
}