import styled from "styled-components";

const Separator = styled.div`
  padding-right: 12px;
`;
const SeparatorTitleContainer = styled.div`
  font-size: 14px;
  color: #aaa;
  margin: 10px 12px;
  padding: 4px 12px 2px;
`;

const SeparatorTitle = props => {
  return (
    <SeparatorTitleContainer>
      {props.children}
      <hr style={{ border: 0, borderTop: "1px solid #E5E5E5" }}/>
    </SeparatorTitleContainer>
  );
};

export {
  Separator,
  SeparatorTitle,
  SeparatorTitleContainer
}