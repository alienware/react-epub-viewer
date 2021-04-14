import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'

const NavItem = ({ message, onClick }: Props) => {
  return (
    <Content onClick={onClick}>
      <span>{message}</span>
    </Content>
  );
}

const Content = styled.button`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${palette.gray0};
  
  & > span {
    transition: .2s ${styles.transition};
    font-size: 14px;
  }

  &:hover {
    & > span {
      color: ${palette.blue3};
      margin-left: 12px;
    }
  }
`;

interface Props {
  message: string;
  onClick: () => void;
}

export default NavItem