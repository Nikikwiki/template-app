declare const __PRODUCTION__: string;
declare const __DEVELOPMENT__: string;
declare const __ENV__: string;
declare const __USE_REDUX_LOGGER__: string;

declare function getLng(): string;

type Nullable<T> = T | null;

interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
