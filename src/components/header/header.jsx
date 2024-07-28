import { Link } from 'react-router-dom'
import './header.css'
import { BurgerMenu } from '../burgerMenu/burgerMenu'

export const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-wrap">
                    <div className="img-wrap">
                        <img className='logo-img' src='logo.jpg' />
                    </div>
                    <div className="organization-name">
                        <p>Nashi Technology Co. Ltd</p>
                        <p>поставщик товаров из Китая оптом</p>
                    </div>
                </div>
                <div className="nav-menu">
                    <div className="menu-container">
                        <ul>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>О компании</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='services'>Каталог</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='services'>Услуги</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='how-order'>Как заказать</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='delivery'>Доставка</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='services'>Отзывы</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='services'>Вопросы и ответы</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='services'>Отслеживание заказа</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='services'>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="messengers">
                    <img className='messengers-icon' src="telegram.svg" />
                    <img className='messengers-icon' src="wechat.svg" />
                    <img className='messengers-icon' src="whatsapp.svg" />
                </div>
                <div className='burger-wrap'>
                    <BurgerMenu/>
                </div>
            </div>
        </header>
    )
}