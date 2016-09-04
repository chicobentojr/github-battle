var React = require('react');

function MainContainer(props){
  return (
    <div className="jumbotron col-sm-12 text-center transparentBg">
      {props.children}
    </div>
  )
}

module.exports = MainContainer;
