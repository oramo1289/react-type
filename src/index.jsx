import React from "react";
import ReactDOM from "react-dom";

import styleComponent from "./index.scss";

const App = () => {
    return (
        <div className={styleComponent.title}>Hola mundo</div>
    );
};

ReactDOM.render(<App />, document.getElementById('root-app'));