import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import Layout from './component/Layout/Layout'
import { BrowserRouter as Router, Switch , Route , Redirect } from 'react-router-dom'
import Home from './pages/Home/Home'
import TweetByHashTag from './pages/TweetByHashTag/TweetByHashTag'
import TweetsByUser from './pages/TweetsByUser/TweetsByUser'
import auth from './pages/auth/Auth'
import { ToastContainer } from 'react-toastify'
import './i18n'

const App = () => {
  return (
    <div>
        <Router>
          <Switch>
          <PuplicRoute path="/login" component={auth} />
          <PrivateRoute path="/" render={()=>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/hashtags/:hashtag" component={TweetByHashTag}/>
              <Route path="/users/:name/:id" component={TweetsByUser} />
            </Switch>
          </Layout>
          }/>
          </Switch>
        </Router>
        <ToastContainer/>
    </div>
  )
}
const isLogin = () => !!localStorage.getItem("x-auth-token")

const PuplicRoute = ({component, ...props}) => {
  return <Route {...props} render={(props)=> {
    if(isLogin())
      return <Redirect to={"/"}/>
    else {
      return React.createElement(component,props)
    }
  }} />
}

const PrivateRoute = ({render, ...props}) => {
  return <Route {...props} render={(props) => {
    if(isLogin())
      return render(props)
    else return <Redirect to={"/login"} />
  }}/>
}
export default App

