import * as React from 'react';

import styleComponent from "./SubTitleComponent.module.scss";


export const SubTitleComponent = (props) => {
    return (
    <div className={styleComponent.title}>{props.subTitle}</div>
    );
};