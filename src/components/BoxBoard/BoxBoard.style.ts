import styled from "@emotion/styled";

export const SLayout = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  margin: auto;
`;

export const SInfomation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
`;

export const SBoxBoard = styled.div`
  width: 360px;
  height: 360px;
  display: -moz-box;
  display: flex;
  flex-flow: row wrap;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  justify-content: space-around;
`;

export const SBox = styled.div<BoxBoardStyle>`
  width: ${(props) => props.boxSize}px;
  height: ${(props) => props.boxSize}px;
  margin: 2px;
  background-color: rgb(
    ${(props) => props.red},
    ${(props) => props.blue},
    ${(props) => props.green}
  );
  opacity: ${(props) => props.boxIdx === props.diffBoxIdx && props.opacity};
`;
