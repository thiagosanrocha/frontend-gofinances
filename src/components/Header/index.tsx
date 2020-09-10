import React from 'react';

import { useRouteMatch } from 'react-router-dom';

import { Container, NavigationMenu, MenuOption } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { url } = useRouteMatch();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavigationMenu>
            <li>
              <MenuOption to="/" url={url}>
                Listagem
              </MenuOption>
            </li>
            <li>
              <MenuOption to="/import" url={url}>
                Importar
              </MenuOption>
            </li>
          </NavigationMenu>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
