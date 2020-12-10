import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import CoverPage from './components/CoverPage'
import ErrorPage from './components/ErrorPage'
import TableContents from './components/TableContents'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { fetchTopPhotos, get_url_extension } from './utils/api';
import { FaArrowRight } from 'react-icons/fa';

export default class App extends React.Component {
  state = {
    posts: [],
    firstPost: {}
  }
  updateData = () => {
    fetchTopPhotos()
        .then((dataReceived) => {
            dataReceived.some((post) => {

              if(get_url_extension(post.data.url) === 'jpg' || get_url_extension(post.data.url) === 'png') {
                  this.setState({
                    posts: dataReceived,
                    firstPost: post.data
                  })
                  return true
              }
              return
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
                <Redirect exact from='/' to='/1'/>
                <Route component={ErrorPage}/>
              </Switch>
          </Router>
      </div>
    );
  }
}
