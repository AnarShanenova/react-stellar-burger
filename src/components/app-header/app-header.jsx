import appHeaderStyle from './app-header.module.css';

import { 
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={`${appHeaderStyle.header} pt-4 pb-4`}>
      <nav className={appHeaderStyle.nav}>
        <a href="/" className={`${appHeaderStyle.button} pt-4 pr-5 pb-4 pl-5 mr-2`}>
          <BurgerIcon type="primary" />
          <span className={`${appHeaderStyle.button_text} ${appHeaderStyle.button_text_active} ml-2 text_type_main-default`}>Конструктор</span>
        </a>
        <a href="/" className={`${appHeaderStyle.button} pt-4 pr-5 pb-4 pl-5 mr-2`}>
          <ListIcon type="secondary" />
          <span className={`${appHeaderStyle.button_text} ml-2 text_type_main-default`}>Лента заказов</span>
        </a>
        <a href="/" className={appHeaderStyle.logo}>
          <Logo />
        </a>
        <a href="/" className={`${appHeaderStyle.button} pt-4 pr-5 pb-4 pl-5 mr-2`}>
          <ProfileIcon type="secondary" />
          <span className={`${appHeaderStyle.button_text} ml-2 text_type_main-default`}>Личный кабинет</span>
        </a>
      </nav>
    </header>
  );
}

export default AppHeader;