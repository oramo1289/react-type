import * as React from 'react';

import styleComponent from "./TitleComponent.module.scss";

interface HelloWorldProps{
    title: string
}

export const TitleComponent = (props: HelloWorldProps) => {
    return (
    <div className={styleComponent.title}>{props.title}</div>
    );
};