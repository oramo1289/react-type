import * as React from 'react';
import ReactDOM from "react-dom";

import styleComponent from "./index.module.scss";

import { TitleComponent } from './screens/TitleComponent/TitleComponent'

const App = () => {
    return (
        <>
            <div className={styleComponent.title}>Hola mundo</div>
            <TitleComponent title={'HOLA MUNDO'} />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root-app'));