var React = require('react');
var PropTypes = React.PropTypes;

function UserItem(props) {
  return (
    <li className='list-group-item'>{props.children}</li>
  )
}


function UserDetails(user){
  return (
    <div>
      {!!user.score && <UserItem><h3>Score: {user.score}</h3></UserItem>}
      <UserItem>
        <a target='_blank' href={user.info.html_url}>
          <img
            style={{display:'block', margin: '0 auto'}}
            src={user.info.avatar_url}
            className='img-rounded img-responsive' />
        </a>
      </UserItem>
      {user.info.name && <UserItem>Name: {user.info.name}</UserItem>}
      <UserItem>Username: {user.info.login}</UserItem>
      {user.info.location && <UserItem>Location: {user.info.location}</UserItem>}
      {user.info.company && <UserItem>Company: {user.info.company}</UserItem>}
      <UserItem>Followers: {user.info.followers}</UserItem>
      <UserItem>Following: {user.info.following}</UserItem>
      <UserItem>Public Repos: {user.info.public_repos}</UserItem>
      {user.info.blog && <UserItem>Blog: <a target='_blank' href={user.info.blog}> {user.info.blog}</a></UserItem>}
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
  })
}

module.exports = UserDetails;
