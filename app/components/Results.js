var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var { Link } = require('react-router');
var MainContainer = require('./MainContainer');


function StartOver(){
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>
          Start Over
        </button>
      </Link>
    </div>
  )
}

function Results(props) {
  if (props.isLoading){
    return (
      <p> LOADING </p>
    )
  }

  if (props.scores[0] === props.scores[1]){
    return (
      <MainContainer>
        <h1>Its a Tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  var winnerIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var loserIndex = winnerIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winnerIndex]} info={props.playersInfo[winnerIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[loserIndex]} info={props.playersInfo[loserIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
};


Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired,
}

module.exports = Results;
