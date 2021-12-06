import FilterForm from "../Forms/FilterForm";
import SearchForm from "../Forms/SearchForm";

function Controls({
    
    teams,
    filterChange,
    selectedTeam



}){


    return (<>
            <FilterForm teams={teams} filterChange={filterChange} selectedTeam={selectedTeam} />
            
    
    </>)
}

export default Controls;