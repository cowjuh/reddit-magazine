import React from 'react'
import logo from './logo.svg';
import './App.css';
import PageButton from './components/PageButton'
import CoverPage from './components/CoverPage'
import TableContents from './components/TableContents'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { fetchTopPhotos, get_url_extension } from './utils/api';

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
        <div className="cover">
          <Router>
              <Switch>
                <Route exact path='/' component={() => <CoverPage firstPost={this.state.firstPost}/>}/>
                <Route path='/toc' component={() => <TableContents posts={this.state.posts}/>}/>
                <Route render={() => <h2>404 Not Found</h2>}/>
              </Switch>
          </Router>
        </div>

      </div>
    );
  }
}
