declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.jsx';
declare module '*.js';
declare module '*.module.scss' {
    const content: { [className: string]: string };
    export default content;
}
