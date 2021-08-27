
import routeList from './route';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <div className="container">

        <div className="row">
          <Switch>
            {generateRouteList(routeList)}
          </Switch>
        </div>

      </div>

    </BrowserRouter>

  );
}
var generateRouteList = (routeList) => {
  var result = null;
  result = routeList.map((item, index) => {
    return (
      <Route key={index} path={item.path} exact={item.exact} component={item.component} />
    )
  })
  return result;
}

export default App;
