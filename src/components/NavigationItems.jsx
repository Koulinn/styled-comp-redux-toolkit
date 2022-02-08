import styled from "styled-components";

const NavigationItems = styled.li`
  padding: 8px 16px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${(props) => (props.last ? "0px" : "32px")};
`;

export default NavigationItems;
