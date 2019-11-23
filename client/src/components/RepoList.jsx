import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <br />
    <div>{props.repos.map((item) => <RepoItem repo={item}/>)}</div>
  </div>
)

export default RepoList;