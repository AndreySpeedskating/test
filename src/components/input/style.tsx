import styled from 'styled-components';

export const Input = styled.input`
   width: 30%;
   height: 30px;
   margin: 20px 0;
   outline: none;
   padding: 0 0 0 10px;
   text-align: center;
   box-shadow: 0px 9px 0px -7px #000;
   border: none;
     &:focus {
     box-shadow: 0px 9px 0px -7px #349beb;
     }
     ::placeholder {
     color: #a1a1a1;
     }
`;
