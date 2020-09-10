import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export const NavigationMenu = styled.ul`
  display: flex;

  li {
    list-style: none;

    & + li {
      margin-left: 32px;
    }
  }
`;

interface PropsLink {
  to: string;
  url: string;
}

export const MenuOption = styled(Link)<PropsLink>`
  display: block;
  padding: 0 0 6px 0;

  ${props =>
    props.to === props.url &&
    css`
      border-bottom: 2px solid #ff872c;
    `}
`;
