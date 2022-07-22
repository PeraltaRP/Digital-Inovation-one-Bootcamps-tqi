import React from "react";
import App from "./App";
import {ResetCSS} from "./global/resetCSS";
import GithubProvider from "./prviders/github-provider";

const Providers = () =>{
    return (
        <main>
            <GithubProvider>
                <ResetCSS/>
                <App/>                
            </GithubProvider>
        </main>
    );
}