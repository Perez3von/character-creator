import PropTypes from 'prop-types';
import headshot from "../Players/headshot.jpg" ;
function Player({player}){

    const {firstName, lastName, team, conference, position} = player;




return(

    <>

    <figure aria-label='object'>
        <img src={headshot} alt='img'/>
        <div className='details'>
            <h3>Player: {firstName} {lastName} </h3>
            <label>Position: {position} </label>
            <p>Team: {team} </p>
            <label>Conference: {conference} </label>
        </div>
    </figure>
    </>
)


}




Player.propTypes = {

player: PropTypes.shape({

    firstName:PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired,
    position:PropTypes.string.isRequired,
    conference:PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,

}).isRequired,

}

export default Player;