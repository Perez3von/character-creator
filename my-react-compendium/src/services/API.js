

export const getAllPlayers= async() => {

const res = await fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "fc996735cfmsh4295e177ab49ed8p146752jsn47f55f3ad825"
	}
})

const data = await res.json();

console.log(data);

return data;

}

export const getAllTeams = async () => {

    const res = await fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "fc996735cfmsh4295e177ab49ed8p146752jsn47f55f3ad825"
	}
})

const data = await res.json();

console.log(data);

return data;

}