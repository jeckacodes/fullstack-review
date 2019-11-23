import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount () {
    this.get();
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: {term: term}
    })
    .done((msg) => {
      console.log('search sent to server', msg);
      this.get();
    });
  }

  get () {
    console.log('fetching top 25');
    $.ajax({
      method: 'GET',
      url: '/repos'
    })
    .done((msg) => {
      console.log('here\'s data', msg);
      this.setState({ repos: msg});
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));