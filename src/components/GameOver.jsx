export default function GameOver({winner,rematch}){
    return (
        <div id="game-over">
            <h2>GAME-OVER</h2>
            {winner && <p>{winner} WON!</p>}
            {!winner && <p>It's a DRAW!</p>}
            <p>
                <button onClick={rematch}>Rematch!</button>
            </p>
        </div>
    );
}