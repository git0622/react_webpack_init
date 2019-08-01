import React, { Component } from 'react';
import "./welcome.scss";
import { BrowserRouter, Route, Link, Switch, HashRouter, Redirect } from "react-router-dom";
import Home from '../home/home';
import News from '../news/news';
import About from '../about/about'

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HashRouter> {/*react-router-dom方法里有BroserRouter和HashRouter ,自行选一个使用*/}
          <div>{/*一定要有个标签将路由组件包起来*/}
            <ul>
              <li><Link to="/home">首页</Link></li> {/*Link相当于a标签 这里的to和Route的path对应*/}
              <li><Link to="/news">新闻</Link></li>
              <li><Link to="/about">关于</Link></li>
            </ul>
            <hr />
            <Switch> {/*Switch一组平行路由需要加switch*/}
              <Route exact path="/" component={Home} render={() => (<Redirect to={`${this.props.match.url}/home`} />)} />
              {/* <Route exact path={`${this.props.match.url}/home`} component={Home} render={() => (<Redirect to={`${this.props.match.url}/home`}/>)} /> */}
              <Route path="/home" component={Home} />{/*component是你要切换显示的组件*/}
              <Route path="/news" component={News} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default Welcome;