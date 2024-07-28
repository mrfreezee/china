import { Link } from 'react-router-dom';
import './burgerMenu.css'
import { useState } from 'react'

export const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleBurger = () => {
        if (isOpen) {
            document.querySelector('.sidebar').classList.add('closing');
            setTimeout(() => {
                document.querySelector('.sidebar').classList.remove('closing');
                setIsOpen(false);
            }, 500);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className='burger-menu'>
            <div className={isOpen ? 'burger active' : 'burger'} onClick={toggleBurger}>
                <div className="burgerLine"></div>
                <div className="burgerLine"></div>
                <div className="burgerLine"></div>
            </div>
            <div className={isOpen ? 'sidebar active' : 'sidebar'} >
                <div className='close' onClick={toggleBurger}>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className='sidebar-container'>
                    <div className='logo-sidebar'>
                        <img className='img-sidebar' src='logo.jpg' />
                    </div>
                    <div className='menu-list'>
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
                    <div className="messengers-sidebar">
                        <img className='messengers-icon-sidebar' src="telegram.svg" />
                        <img className='messengers-icon-sidebar' src="wechat.svg" />
                        <img className='messengers-icon-sidebar' src="whatsapp.svg" />
                    </div>
                </div>
            </div>
        </div>

    )
}