import './howOrder.css'

export const HowOrder = () => {
    return (
        <div className='how-order-page'>
            <div className='title'>
                <h2>Как заказать</h2>
                <h1>КАК ОТПРАВИТЬ НАМ <span class="highlight">ЗАЯВКУ НА ПОИСК ИЛИ ВЫКУП ТОВАРА</span> С КИТАЙСКОГО МАРКЕТПЛЕЙСА ИЛИ ФАБРИКИ?</h1>
            </div>
            <div class="steps-container">
                <div class="steps-left">
                    <div class="step">
                        <div class="step-number">ШАГ 1</div>
                        <div class="step-content">
                            <h2>ВЫБОР ТОВАРОВ</h2>
                            <p>Вы выбираете товары на китайских площадках, заполняете таблицу Excel и отправляете заявку в <a href="#">WhatsApp</a> или <a href="#">WeChat</a>.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">ШАГ 3</div>
                        <div class="step-content">
                            <h2>ОБСУЖДЕНИЕ УСЛОВИЙ</h2>
                            <p>Мы торгуемся с поставщиками, чтобы вы заказали товар на лучших условиях.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">ШАГ 5</div>
                        <div class="step-content">
                            <h2>ОПЛАТА ТОВАРА</h2>
                            <p>Вы осуществляете перевод через СберБанк или Тинькофф.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">ШАГ 7</div>
                        <div class="step-content">
                            <h2>ПРОВЕРКА ТОВАРА</h2>
                            <p>Тщательно проверяем товары (количество, цвет, размер, брак). Отправляем вам фото и видео отчёт.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">ШАГ 9</div>
                        <div class="step-content">
                            <h2>ОТПРАВКА ТОВАРА В ВАШУ СТРАНУ</h2>
                            <p>Если нет вопросов, то упаковываем и отправляем товары в Россию, Беларусь, Казахстан, Кыргызстан.</p>
                        </div>
                    </div>
                </div>
                <div className='dots-wrap'>
                    <div className='dots-line'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>

                <div class="steps-right">
                    <div class="step">
                        <div class="step-number">ШАГ 2</div>
                        <div class="step-content">
                            <h2>СВЯЗЬ С ПОСТАВЩИКОМ</h2>
                            <p>Мы получаем вашу заявку и уточняем наличие товаров у поставщиков. Узнаем сколько стоит доставка по Китаю.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">ШАГ 4</div>
                        <div class="step-content">
                            <h2>РАСЧЁТ СТОИМОСТИ</h2>
                            <p>Производим расчёт стоимости (стоимость + доставка по Китаю + комиссия услуги).</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">ШАГ 6</div>
                        <div class="step-content">
                            <h2>ДОСТАВКА ТОВАРА ПО КИТАЮ</h2>
                            <p>После оплаты обычно в течение 3-4 дней получаем товары на наш склад.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">ШАГ 8</div>
                        <div class="step-content">
                            <h2>РЕШЕНИЕ ВОПРОСОВ</h2>
                            <p>При необходимости общаемся с поставщиками, решаем все вопросы (либо оформляем замену/возврат товара).</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='table-template-wrap'>
                <div className='table-temp-container'>
                    <div className='title'>
                        <h1>Скачайте <span className='highlight'>шаблон таблицы</span> для оформления заявки</h1>
                    </div>
                    <p>Заполните шаблон таблицы. Заполненную таблицу отправьте нам с помощью WhatsApp или WeChat.</p>
                    <div className='btn-container'>
                        <a className='button button-blue' href='#'>Скачать шаблон</a>
                        <a className='button' href='#'>Отправить таблицу в WhatsApp</a>
                    </div>
                </div>
                <img className='comp-img' src='copm.png'/>
            </div>
        </div>
    )
}