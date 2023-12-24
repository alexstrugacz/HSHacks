/// <reference types="react-scripts" />
declare module '*.mp4' {
    const src: string;
    export default src;
}
// allow .module.css files
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
