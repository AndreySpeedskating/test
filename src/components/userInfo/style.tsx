import styled from 'styled-components';

interface Props {
  width: string;
}

export const ModalField = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  z-index: 1;
  background-color: #fafafa;
  opacity: 0.7;
`;

export const UserRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: 5px 0;
  color: black;
  justify-content: space-between;
`;

export const Ceil = styled.div<Props>`
  width: ${(p) => p.width};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const UserCard = styled.div`
  position: absolute;
  top: 140px;
  left: 20%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  background: #cfcfcf;
`;

export const Close = styled.button`
  position: absolute;
  width: 60px;
  height: 30px;
  top: 15px;
  right: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #cfcfcf;
  font: 300 18px/20px Roboto, sans-serif;
  text-align: center;
  padding: 0;
  opacity: 0.7;
    &:hover {
    opacity: 1;
    }
`;
