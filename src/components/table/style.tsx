import styled from 'styled-components';

interface Props {
  width: string;
}

export const Row = styled.div`
  display: flex;
  margin: 5px auto;
  flex-direction: row;
  align-items: center;
  width: 80%;
  min-width: 500px;
  height: 30px;
  cursor: pointer;
    &:hover {
    box-shadow: 0 0 1px 2px #349beb;
    }
`;

export const Ceil = styled.div<Props>`
  text-align: center;
  width: ${(p) => p.width};
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 100%;
  padding: 0 5px;
  border: 1px solid #000;
`;

export const Header = styled.div`
  display: flex;
  margin: 5px auto;
  flex-direction: row;
  align-items: center;
  width: 80%;
  min-width: 500px;
  height: 30px;
`;
