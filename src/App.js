import React from 'react'
import './App.css';
import Navigation from './components/Navigation'
import CoverPage from './components/CoverPage'
import ErrorPage from './components/ErrorPage'
import TableContents from './components/TableContents'
import FeaturePage from './components/FeaturePage'
import PhotoGrid from './components/PhotoGrid'
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
            firstPost: filtered[0].data
          })
        })

    fetchTopPoems()
        .then((res) => {
          const result = this.filterByStickied(res)
          this.setState({
            poems: result,
            firstPoem: result[0].data
          })
        })
  }
  componentWillMount() {
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
                <Route path='/3' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={2}/>}/>
                <Route path='/4' component={() => <FeaturePage posts={this.state.posts} num={6}/>}/>
                <Route path='/5' component={() => <PhotoGrid posts={this.state.posts} num={7}/>}/>
                <Route path='/6' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={8}/>}/>
                <Route path='/7' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={9}/>}/>
                <Route path='/8' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={10}/>}/>
                <Route path='/9' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={11}/>}/>

                <Redirect exact from='/' to='/1'/>
                <Route component={ErrorPage}/>
              </Switch>
          </Router>
      </div>
    );
  }
}
