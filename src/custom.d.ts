declare module "*.svg" {
    const content: any;
    export default content;
}
declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_API_URL: string;
    }
}
