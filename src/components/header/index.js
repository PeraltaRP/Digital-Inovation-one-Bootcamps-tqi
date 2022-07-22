import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Header = () => {
    const {getUser} = useGithub();
    const [usernameforsearch, setusernameforsearch] = useState();
    const submitGetUser = () => {

        if(!usernameforsearch) return; 

        return getUser(usernameforsearch);
     };

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder='Pesquisar por username...' onChange={submitGetUser}/>
                <button type="submit">Buscar</button>
                
            </S.Wrapper>
        </header>
    )
}

export default Header;
