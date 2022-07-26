import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px; 
        padding: 8px;
    }

    button{
        background-color: #ccc;        
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;


        &:hover{
           background-color: #808B9C;
           color: white;
           box-shadow: 8px 3px 15px rgba(0, 0, 0, 0.2) ;
        }
    }
  
`;
