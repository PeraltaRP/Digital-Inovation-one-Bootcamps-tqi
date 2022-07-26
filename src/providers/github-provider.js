import React, {createContext, useCallback, useState} from 'react';
import api from '../services/api';


export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
}) 

const GithubProvider = ({children}) => {

    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            followings: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    })

    const getUser = (username) => {
        api.get(`users/${username}`).then(({ data:{user}}) => {
            setGithubState(prevState => ({...prevState,user: {                
                login: user.login,
                name: user.name,
                html_url: user.html_url,
                blog: user.blog,
                company: user.company,
                location: user.location,
                followers: user.followers,
                followings: user.followings,
                public_gists: user.public_gists,
                public_repos: user.public_repos,
            }}));
        })

    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => signIn(username), []), 
    };

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;
