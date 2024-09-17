import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BlogList} />
        <Route path="/posts/:id" component={BlogDetail} />
      </Switch>
    </Router>
  );
};

export default App;
