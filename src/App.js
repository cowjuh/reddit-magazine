import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import CoverPage from './components/CoverPage'
import ErrorPage from './components/ErrorPage'
import TableContents from './components/TableContents'
import FeaturePage from './components/FeaturePage'
import {BrowserRouter as Router, Redirect, Route, Switch, useLocation} from 'react-router-dom'
import { get_url_extension, fetchContent, subredditExists } from './utils/api'
import PoetryPage from './components/PoetryPage'

export default class App extends React.Component {
  state = {
    posts: [],
    firstPost: {},
    poems: [],
    firstPoem: {},
    imgSubreddit: 'analog',
    poemSubreddit: 'ocpoetry',
    curPage: 1,
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
    fetchContent(this.state.imgSubreddit)
      .then((res) => {
        var filtered = this.filterByFileType(res)
        this.setState({
          posts: filtered,
          firstPost: filtered[0].data
        })
      })
    fetchContent(this.state.poemSubreddit)
      .then((res) => {
        const result = this.filterByStickied(res)
        this.setState({
          poems: result,
          firstPoem: result[0].data
        })
      })
  }

  componentDidMount() {
    this.updateData()
  }

  handlePageTurn = (newPage) => {
    if(newPage != this.state.curPage) {
      this.setState({
        curPage: newPage
      })
    }
  }
  handleSubmit = (id, subreddit) => {
    let newState = Object.assign({}, this.state)
    subredditExists(subreddit)
      .then((res)=> {
        if(res != 0) {
          {id === 'imgSubreddit' ? newState.imgSubreddit = subreddit : newState.poemSubreddit = subreddit}
          this.setState(newState, () => this.updateData())
        }
      })
  }

  render() {
    const {posts, firstPost, poems, firstPoem, imgSubreddit, poemSubreddit} = this.state
    return (
      <div className="App">
          <Router>
            <Navigation curPage={this.state.curPage} handlePageTurn={this.handlePageTurn}/>
            <Switch>
              <Route path='/1' component={() => <CoverPage num={0} posts={this.state.posts} firstPost={this.state.firstPost} handleSubmit={this.handleSubmit}/>}/>
              <Route path='/2' component={() => <TableContents posts={this.state.posts}/>}/>
              <Route path='/3' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={2}/>}/>
              <Route path='/4' component={() => <FeaturePage posts={this.state.posts} num={6}/>}/>
              <Route path='/5' component={() => <FeaturePage posts={this.state.posts} num={7}/>}/>
              <Route path='/6' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={8}/>}/>
              <Route path='/7' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={9}/>}/>
              <Route path='/8' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={10}/>}/>
              <Route path='/9' component={() => <FeaturePage posts={this.state.posts} num={11}/>}/>
              <Route path='/10' component={() => <FeaturePage posts={this.state.posts} num={12}/>}/>
              <Route path='/11' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={13}/>}/>
              <Route path='/12' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={14}/>}/>
              <Route path='/13' component={() => <PoetryPage posts={this.state.posts} poems={this.state.poems} num={15}/>}/>
              <Redirect exact="true" from='/' to='/1'/>
              <Route component={ErrorPage}/>
            </Switch>
          </Router>
      </div>
    );
  }
}
