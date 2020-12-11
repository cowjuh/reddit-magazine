import React from 'react'
import './App.css';
import Navigation from './components/Navigation'
import CoverPage from './components/CoverPage'
import ErrorPage from './components/ErrorPage'
import TableContents from './components/TableContents'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { fetchTopPhotos, fetchTopPoems, get_url_extension } from './utils/api';
import PoetryPage from './components/PoetryPage';

export default class App extends React.Component {
  state = {
    posts: [],
    firstPost: {},
    poems: [],
    firstPoem: {}
  }
  filterByStickied = (arr) => {
    var result = []
    for(const element in arr) {
      if(arr[element].data.stickied === false) {
        result.push(arr[element])
      }
    }
    return result
  }

  filterByFileType = (arr) => {
    var result = []
    for(const element in arr) {
      if(get_url_extension(arr[element].data.url) === 'jpg') {
        result.push(arr[element])
      }
    }
    return result
  }

  updateData = () => {
    fetchTopPhotos()
        .then((res) => {
          var filtered = this.filterByFileType(res)
          this.setState({
            posts: filtered,
            firstPost: filtered[2].data
          })
        })

    fetchTopPoems()
        .then((res) => {
          const result = this.filterByStickied(res)
          this.setState({
            poems: result,
            firstPoem: result[5].data
          })
        })
  }
  componentDidMount() {
      this.updateData()
  }
  render() {
    return (
      <div className="App">
          <Router>
            <Navigation/>
              <Switch>
                <Route path='/1' component={() => <CoverPage firstPost={this.state.firstPost}/>}/>
                <Route path='/2' component={() => <TableContents posts={this.state.posts}/>}/>
                <Route path='/3' component={() => <PoetryPage post={this.state.firstPost} poem={this.state.firstPoem}/>}/>
                <Redirect exact from='/' to='/1'/>
                <Route component={ErrorPage}/>
              </Switch>
          </Router>
      </div>
    );
  }
}
