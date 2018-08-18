import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";

import App from '../App';
import Admin from '../admin';
import Blog from '../pages/blog';
import Technical from '../pages/technical';
import About from '../pages/about';


export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/blog' component={Blog} />
                                <Route path='/admin/technical' component={Technical} />
                                <Route path='/admin/about' component={About} />
                            </Switch>
                        </Admin>
                    }>
                    </Route>
                </App>
            </HashRouter>
        )
    }
}