export const extractPlayerDetails = (apiData) => {


const listOfPlayers = apiData.data;

const mungedPlayers = listOfPlayers.map((player) => ({ 
    id:player.id,
    firstName:player.first_name,
    lastName:player.last_name,
    position:player.position || 'Retired',
    conference:player.team.conference,
    team: player.team.full_name,
}))

return mungedPlayers;
}


export const extractTeams = (apiData) => {


    const listOfTeams = apiData.data;
    
    const mungedTeams = listOfTeams.map((team) => (team.full_name));
    
    return mungedTeams;
    }



export const filterPlayersByTeam = (list, team) => {
console.log(team)
const filtered = [];
for(let i =0; i< list.length; i++){
    if(list[i].team === team){
        filtered.push(list[i]);
    }
}

return filtered; 

}