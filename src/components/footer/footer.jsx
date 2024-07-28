import { Link, NavLink } from 'react-router-dom'
import './footer.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-section section1'>
                    <div className="logo-wrap">
                        <div className="img-wrap">
                            <img className='logo-img' src='logo.jpg' />
                        </div>
                        <div className="organization-name">
                            <p>Nashi Technology Co. Ltd</p>
                            <p>поставщик товаров из Китая оптом</p>
                        </div>
                    </div>
                    <div className='privacy-policy'>
                        <NavLink style={{textDecoration: 'none', color: 'inherit'}} to='privacy-policy'>Политика конфиденциальности</NavLink>
                    </div>
                </div>
                <div className='footer-section section2'>
                    <div className='footer-menu'>
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
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='services'>Контакты</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='services'>Вопросы и ответы</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='services'>Отслеживание заказа</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className='footer-section section3'>
                    <div className='contacts'>
                        <div className='section-title'>
                            Контакты
                        </div>
                        <div className='contacts-list'>
                            <ul>
                                <li>
                                    <img className='messengers-icon' src="telegram.svg" />
                                    +86 133 0131 6101
                                </li>
                                <li>
                                    <img className='messengers-icon' src="wechat.svg" />
                                    +86 180 2809 0135
                                </li>
                                <li>
                                    <img className='messengers-icon' src="whatsapp.svg" />
                                    13301316101
                                </li>
                                <li>
                                    <img className='messengers-icon' src="phone.svg" />
                                    +86 133 0131 6101
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}