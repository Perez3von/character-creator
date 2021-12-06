
import { useEffect, useState } from 'react';
import Controls from '../components/Controls/Controls';
import Form from '../components/Forms/SearchForm';
import PlayerList from '../components/PlayersList/PlayerList';
import { getAllPlayers, getAllTeams } from '../services/API';
import { extractPlayerDetails, filterPlayersByTeam, extractTeams } from '../utils/helper';

function Compendium(){

    const [loading, SetLoading] = useState(true);
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('all');

    useEffect(() => {

        const getPlayers = async () => {
          const players = await getAllPlayers(25);
          const munged = extractPlayerDetails(players);
        //   console.log("PLAYRES", munged)
        //   console.log("Filtered", filterPlayersByTeam(munged, 'Boston Celtics'));
          setPlayers(munged)
        }
      
        getPlayers();
      }, []);

      useEffect(() => {

        const getTeams = async () => {
          const teams = await getAllTeams();
          const munged = extractTeams(teams);
        console.log(munged)
          setTeams(munged)
        }
      
        getTeams();
      }, []);
useEffect(()=>{

async function getFilteredPlayers(){

    if(selectedTeam !== 'all'){
        const players =  await getAllPlayers(100);
        const munged = extractPlayerDetails(players);
        const filteredPlayers = filterPlayersByTeam(munged, selectedTeam);
        setPlayers(filteredPlayers);

    }
    else{

        const players = await getAllPlayers(25);
          const munged = extractPlayerDetails(players);
          setPlayers(munged)

    }
    
}
getFilteredPlayers()
},[selectedTeam])


      

    return (<>
   
    
    <Controls 
    teams={teams}
    filterChange={setSelectedTeam}
    selectedTeam={selectedTeam}
    
    /> 
   
    <PlayerList players ={players}/>
    </>)
}


export default Compendium; 