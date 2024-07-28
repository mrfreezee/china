import './services.css'

export const Services = () => {
    return (
        <div className="services-page">
            <div className="services-section1">
                <div className='title'>
                    <h2>Услуги</h2>
                    <h1>Мы поможем вам наладить бизнес с Китаем</h1>
                </div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="text-block">
                            <h2>Поиск товара и надёжных поставщиков</h2>
                            <p>Найдём нужные товары и надёжного поставщика, договоримся о лучшей цене и доставим вам любым удобным способом. Комиссия за услугу от 2%.</p>
                            <p>Возможны индивидуальные условия сотрудничества.</p>
                        </div>
                        <div className="btn-container">
                            <a href="#" className="button button-blue">Получить консультацию</a>
                            <a href="#" className="button">Узнать комиссию</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="text-block">
                            <h2>Выпуск товара под вашим брендом</h2>
                            <p>Работаем с фабриками-производителями OEM (производителями оригинальных товаров без бренда). Поможем разработать и создать фирменную упаковку. Сделаем перевод инструкции и упаковки товара на русский язык. Напечатаем и наклеем ваши собственные логотипы на продукцию.</p>
                        </div>
                        <div className="btn-container">
                            <a href="#" className="button button-blue">Получить консультацию</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="text-block">
                            <h2>Выкуп товаров с китайских фабрик и маркетплейсов</h2>
                            <p>Поможем выкупить необходимый товар без комиссии и доставим удобным вам способом. Любая сумма выкупа, доставка товара от 5 кг.</p>
                        </div>
                        <div className="btn-container">
                            <a href="#" className="button button-blue">Получить консультацию</a>
                            <a href="#" className="button">Варианты доставки</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="text-block">
                            <h2>Доставка товара из Китая</h2>
                            <p>Организуем срочную или стандартную доставку ваших товаров от 3 до 25 дней. Бережно и надёжно упакуем товары для безопасной перевозки.</p>
                        </div>
                        <div className="btn-container">
                            <a href="#" className="button button-blue">Получить консультацию</a>
                            <a href="#" className="button">Варианты доставки</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="text-block">
                            <h2>Помощь с конвертацией и оплатой товара в Китае</h2>
                            <p>Помощь с конвертацией и оплатой товара в Китае. Поможем пополнить счёт в AliPay или перевести оплату поставщику и заказать товар.</p>
                            <p>Для уточнения подробностей свяжитесь с нами.</p>
                        </div>
                        <div className="btn-container">
                            <a href="#" className="button button-blue">Получить консультацию</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="text-block">
                            <h2>Не нашли нужную услугу?</h2>
                            <p>Свяжитесь с нами и мы проконсультируем вас по всем вопросам сотрудничества с Китаем.</p>
                        </div>
                        <div className="btn-container">
                            <a href="#" className="button button-blue">Получить консультацию</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-section2">
                <div className='title'>
                    <h2>Популярные поставщики</h2>
                    <h1><span className='highlight'>Работаем с популярными маркетплейсами Китая</span> и малоизвестными локальными производителями</h1>
                    <h2>Сможем предоставить огромный ассортимент продукции на ваш выбор</h2>
                </div>
                <div class="section">
                    <img className='shop-logo taobao-logo' src="taobao-logo.svg" alt="Taobao Logo" />
                    <div className='categories-container'>
                        <h1>Категории Товаров Taobao</h1>
                        <div class="categories">
                            <div class="category">Одежда и обувь</div>
                            <div class="category">Аксессуары</div>
                            <div class="category">Сумки</div>
                            <div class="category">Товары для дома</div>
                            <div class="category">Мебель</div>
                            <div class="category">Электроника</div>
                            <div class="category">Автомобильные запчасти</div>
                            <div class="category">Товары для туризма</div>
                            <div class="category">Товары для мам и детей</div>
                            <div class="category">Спортивные товары</div>
                            <div class="category">Компьютеры и оргтехника</div>
                        </div>
                    </div>
                    <img className='shop-screen' src="taobao.png" alt="Taobao" />
                </div>
                <div class="section">
                    <img className='shop-logo logo1688' src="1688-logo.svg" alt="1688 Logo" />
                    <div className='categories-container'>
                        <h1>Категории Товаров 1688</h1>
                        <div class="categories">
                            <div class="category">Одежда и обувь</div>
                            <div class="category">Товары для мам и детей</div>
                            <div class="category">Товары для дома</div>
                            <div class="category">Мебель</div>
                            <div class="category">Освещение</div>
                            <div class="category">GPS</div>
                            <div class="category">Развивающие игрушки</div>
                            <div class="category">Детские игрушки</div>
                            <div class="category">Сумки и чемоданы</div>
                            <div class="category">Телефоны и запчасти</div>
                            <div class="category">Строительные материалы</div>
                        </div>
                    </div>
                    <img className='shop-screen' src="1688.png" alt="1688" />
                </div>
                <div class="section">
                    <img className='shop-logo' src="alibaba-logo.svg" alt="Alibaba Logo" />
                    <div className='categories-container'>
                        <h1>Категории Товаров Alibaba</h1>
                        <div class="categories">
                            <div class="category">Одежда и обувь</div>
                            <div class="category">Товары для мам и детей</div>
                            <div class="category">Товары для дома и сада</div>
                            <div class="category">Мебель</div>
                            <div class="category">Освещение</div>
                            <div class="category">С/х товары</div>
                            <div class="category">Автомобили и запчасти</div>
                            <div class="category">Текстиль</div>
                            <div class="category">Сумки и чемоданы</div>
                            <div class="category">Телефоны и запчасти</div>
                            <div class="category">Электроника</div>
                            <div class="category">Упаковка</div>
                            <div class="category">Ювелирные изделия</div>
                            <div class="category">Аксессуары</div>
                            <div class="category">Инструменты и оборудование</div>
                            <div class="category">Промышленное оборудование</div>
                            <div class="category">Бытовая техника</div>
                            <div class="category">Спортивные товары</div>
                        </div>
                    </div>
                    <img className='shop-screen' src="alibaba.png" alt="Alibaba" />
                </div>
                <div class="section">
                    <div className='shop-logo poizon'>
                        POIZON
                    </div>
                    <div className='categories-container'>
                        <h1>Категории Товаров Poizon</h1>
                        <div class="categories">
                            <div class="category">Брендовая одежда и обувь</div>
                            <div class="category">Аксессуары</div>
                            <div class="category">Коллекционные предметы</div>
                        </div>
                    </div>
                    <img className='shop-screen' src="poizon.png" alt="Poizon" />
                </div>
            </div>
        </div>
    )
}