import React from 'react';

const RepoItem = (props) => (
  <div className='list'>
    <b><a href={props.repo.link}>{props.repo.name}</a></b><br />
    User: {props.repo.owner} <br />
    Stars: {props.repo.stargazers} <br />
    {props.repo.description} <br />
  </div>
)

export default RepoItem;