import Player from "../Players/Player";


function PlayerList({players}){

    return(
    <ul aria-label="playerList" className="playerList">
    {players.map((player) => {
      return (
        <li className="listItem" key={player.id}>
          <Player player={ player } />
        </li>
      )
    })}
  </ul>)
}

export default PlayerList;