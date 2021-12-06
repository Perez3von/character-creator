import { filterPlayersByTeam } from "../../utils/helper";

function FilterForm({teams, filterChange, selectedTeam}){


    return( 
    <div>
        <h3>Filter Teams</h3>
        <select
          value={selectedTeam}
          onChange={(event) => filterChange(event.target.value)}
        >
          <option value='all'>All</option>
          {teams.map((team,id) => (
            <option key = {id} value={team}>{team}</option>
          ))}
        </select>
      </div>)
}


export default FilterForm;