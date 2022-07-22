import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';



function Repositories() {
    return (
        <S.WrapperTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName= 'is-selected'
        >
           <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
           </S.WrapperTabList> 

            <S.WrapperTabPanel>
                <RepositoryItem
                     name="app-ideas"
                     linkToRepo="https://github.com/benits/app-ideas"
                     fullName= "benits/app-ideas"
                     />
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
                <RepositoryItem
                name="benits"
                linkToRepo="https://github.com/benits/benits"
                fullName= "benits/benits"
                />
            </S.WrapperTabPanel>

        </S.WrapperTabs>
    );
};

export default Repositories;
