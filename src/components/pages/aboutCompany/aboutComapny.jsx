import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import './aboutCompany.css'

export const AboutCompany = () => {

    const [isVisible, setIsVisible] = useState(false);

    const { ref: sect1, inView: insect1 } = useInView({
        threshold: 0.6,
    });
    useEffect(() => {
        if (insect1) {
            setIsVisible(true);
        }
    }, [insect1]);

    return (
        <div className="about-company-page">
            <div className="about-section1">
                <h1><span className='highlight'>Nashi Technology Co. Ltd</span> поставщик товаров из Китая оптом</h1>
                <p>
                    <img className='img-about-company' src='11111.jpeg' />
                    <p style={{ paddingTop: '30px' }}><span style={{ color: 'black', paddingTop: '80px' }}>Полностью сопровождаем процесс закупок в Китае.</span> Найдём нужные товары и надёжного поставщика, тщательно проверим качество товара и запишем видеотчёт, договоримся о лучшей цене и доставим вам собственной транспортной компанией.</p>
                </p>
                <div className='connection'>
                    <p style={{ textAlign: 'center' }}>Свяжитесь с нами и мы проконсультируем вас по всем вопросам</p>
                    <div className="buttons">
                        <button className="whatsapp">Связаться в WhatsApp</button>
                        <button className="telegram">Связаться в Telegram</button>
                    </div>
                </div>
                <div className="international-delivery">
                    <h3>Международная доставка</h3>
                    <div className="flags">
                        <img src="russia.png" alt="Russia" />
                        <img src="kazakhstan.png" alt="Kazakhstan" />
                        <img src="belarus.png" alt="Belarus" />
                        <img src="kyrgyzstan.png" alt="Kyrgyzstan" />
                    </div>
                </div>
                <div className="info">
                    <div>Доставка в Москву от 3 дней или от 0,5 $/кг</div>
                    <div>Собственный склад и транспортная логистика в Китае</div>
                    <div>Нашей компании более 13 лет</div>
                    <div>Более 4000 довольных клиентов</div>
                </div>
            </div>

            <div className="about-section2" ref={sect1}>
                <div className="title">
                    <h2>Преимущества</h2>
                    <h1>КОМПЛЕКСНЫЕ УСЛУГИ ПО ВЫКУПУ ТОВАРОВ ОПТОМ И В РОЗНИЦУ <span className="highlight">С ЛУЧШИМИ УСЛОВИЯМИ ДЛЯ ВАС</span></h1>
                </div>
                <div className='benefits'>
                    <div className={!isVisible ? 'benefit' : 'benefit visible vis1'} >
                        <h3>ГАРАНТИРОВАННОЕ ПОЛУЧЕНИЕ <span className="highlight">ТОВАРОВ ВЫСОКОГО КАЧЕСТВА</span></h3>
                        <p>Наша компания будет осуществлять строгий контроль качества перед отправкой товаров. Обеспечит фото и видео отчёты.</p>
                    </div>
                    <div className={!isVisible ? 'benefit' : 'benefit visible vis2'} >
                        <h3>СОКРАТИТЕ СРОКИ ПОСТАВКИ <span className="highlight">ТОВАРОВ ИЗ КИТАЯ</span></h3>
                        <p>Мы являемся подразделением крупной транспортной логистической компании Китая Yuhua Cargo 587. За счёт этого отправляем товары в кратчайшие сроки.</p>
                    </div>
                    <div className={!isVisible ? 'benefit' : 'benefit visible vis3'} >
                        <h3>СНИЗИТЕ ЗАТРАТЫ НА ЗАКУПКУ И <span className="highlight">УВЕЛИЧИТЕ ВАШУ ПРИБЫЛЬ</span></h3>
                        <p>Вы получите возможность закупать товары напрямую от производителей, обходя посредников и экономя на дополнительных расходах.</p>
                    </div>
                    <div className={!isVisible ? 'benefit' : 'benefit visible vis4'} >
                        <h3>ПРОФЕССИОНАЛЬНАЯ <span className="highlight">ПОДДЕРЖКА И КОНСУЛЬТАЦИИ</span></h3>
                        <p>Поможем с поиском товаров, поставщиков, организацией закупок и решением возникающих вопросов. Говорим и пишем на русском языке.</p>
                    </div>
                    <div className={!isVisible ? 'benefit' : 'benefit visible vis5'} >
                        <h3>ПОМОЖЕМ СОЗДАТЬ НАДЁЖНЫЕ ОТНОШЕНИЯ <span className="highlight">С ПОСТАВЩИКОМ</span></h3>
                        <p>Вы получите возможность развиваться и расти вместе с нашей компанией, мы стремимся к долгосрочному партнёрству и готовы поддерживать ваш бизнес на протяжении многих лет.</p>
                    </div>
                    <div className={!isVisible ? 'benefit' : 'benefit visible vis6'} >
                        <h3>ПОЛУЧИТЕ ДОСТУП К ШИРОКОМУ ВЫБОРУ <span className="highlight">ТОВАРОВ ПО НИЗКИМ ЦЕНАМ</span></h3>
                        <p>Мы работаем с самыми популярными маркетплейсами и фабриками Китая. Договариваемся о лучших ценах и условиях для вас за счёт понимания местного менталитета и владения китайским языком.</p>
                    </div>
                </div>
            </div>

            <div className="about-section3">
                <div className="title">
                    <h2>Преимущества</h2>
                    <h1>Мы <span className="highlight">являемся крупной китайской транспортной компанией YUHUA CARGO 587</span> с отлаженной доставкой в Россию, Беларусь, Казахстан и Кыргызстан</h1>
                </div>
                <p>
                    <img className='img2-about-company' src='maneger.jpg' />
                    <div>
                        Скорость, ответственность, честность и развитие взаимовыгодного сотрудничества — основополагающие принципы нашей команды.<br></br>
                    </div>
                    <div>
                        Работая с 2012 года, компания YUHUA CARGO 587 ведёт непрерывное развитие и является крупной транспортной компанией Китая, оказывающей весь спектр логистических и сопутствующих услуг на международном рынке.<br></br>
                    </div>
                    <div>
                        VERA CHINA GROUP — отдельное подразделение транспортной компании YUHUA CARGO 587, отвечающее за поиск товаров и поставщиков для зарубежных предпринимателей. Мы развиваем актуальное направление поиска и выкупа товаров из Китая для наших клиентов из России и соседних стран, оказывая комплексную услугу под ключ.<br></br>
                    </div>
                    <div>
                        Благодаря выстроенной схеме логистики и отлаженным механизмам взаимодействия, <span style={{ color: 'salmon' }}>мы обеспечим быструю и надёжную доставку ваших заказов в любой город России, а также в Республику Беларусь, Казахстан и Киргизию. Компания официально зарегистрирована в Китае.</span> <br></br>
                    </div>
                    <div>
                        Наши сотрудники оперативны, вежливы и компетентны в решении любых задач, мы всегда на связи. Китайские специалисты смогут получить скидку и урегулировать любые вопросы на языке поставщика продукции.<br></br>
                    </div>
                </p>
                <div className="about-us">
                    <div>Знаем рынок и работаем в данном направлении более 13 лет. <span className='highlight'>Нам можно доверять</span></div>
                    <div>С нами приятно работать, <span className='highlight'>мы любим то, что делаем</span> и хотим развиваться вместе с вами</div>
                    <div>Обеспечиваем <span className='highlight'>высокий уровень сервиса</span> и индивидуальный подход</div>
                    <div><span className='highlight'>Большое количество отзывов</span> гарантируют высокое качество работы</div>
                </div>
            </div>

            <div className='about-section4'>
                <div className='photo-container'>
                    <img className='photo-employees ph1' src='ph1.jpg'/>
                    <img className='photo-employees ph2' src='ph2.jpg'/>
                    <img className='photo-employees ph3' src='ph4.png'/>
                    <img className='photo-employees ph4' src='ph5.png'/>
                    <img className='photo-employees ph5' src='11111.jpeg'/>
                </div>
            </div>
        </div>
    )
}