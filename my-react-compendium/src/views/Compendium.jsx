
import { useEffect, useState } from 'react';
import PlayerList from '../components/PlayersList/PlayerList';
import { getAllPlayers } from '../services/API';
import { extractPlayerDetails, filterPlayersByTeam } from '../utils/helper';

function Compendium(){

    const [loading, SetLoading] = useState(true);
    const [players, setPlayers] = useState([]);


    useEffect(() => {

        const getPlayers = async () => {
          const players = await getAllPlayers();
          const munged = extractPlayerDetails(players);
          console.log("PLAYRES", munged)
          console.log("Filtered", filterPlayersByTeam(munged, 'Boston Celtics'));
          setPlayers(munged)
        }
      
        getPlayers();
      }, []);
      

    return (<>
    <PlayerList players ={players}/>
    </>)
}


export default Compendium; 