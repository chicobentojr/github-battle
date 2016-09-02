var React = require('react');

function puke(object){
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props){
  return props.isLoading === true
    ? <p> LOADING </p>
    : <p> BATTLE CONFIRMED! {puke(props)} </p>
}

module.exports = ConfirmBattle;
