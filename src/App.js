
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Char2D from './char2D.js';
import Char3D from './char3D.js';
import CharFB from './charFB.js';
import Empty from './Empty.js';
import './App.css';
function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/api/examples/react/char2D">
                        <Char2D />
                    </Route>
                    <Route path="/api/examples/react/char3D">
                        <Char3D />
                    </Route>
                    <Route path="/api/examples/react/charFB">
                        <CharFB />
                    </Route>
                    <Route path="/api/examples/react/empty">
                        <Empty />
                    </Route>
                    <Route path="/">
                        <Char3D />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
