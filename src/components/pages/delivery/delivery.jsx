import './delivery.css'

export const Delivery = () => {
    return (
        <div className='delivery-page'>
            <div className="title delivery-title">
                <h2>Доставка</h2>
                <h1> <span className="highlight">Гарантированная доставка</span> товаров из Китая вовремя и без проблем</h1>
                <h2>Надёжно упакуем ваши товары, бережно отгрузим и доставим в срок</h2>
            </div>
            <div class="video-wrap">
                <div class="video-item">
                    <iframe width="408" height="605" src="https://www.youtube.com/embed/ga0ydXkygkE" title="Как работает компания China Cargo Group 587" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="video-item">
                    <iframe width="408" height="605" src="https://www.youtube.com/embed/ZvzYK0zM2ZY" title="Приветственное видео от компании China Cargo Group 587" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="video-item">
                    <iframe width="408" height="605" src="https://www.youtube.com/embed/yWqZ0wRvHz8" title="Проверка качества товаров перед отправкой из Китая" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="video-item">
                    <iframe width="408" height="605" src="https://www.youtube.com/embed/jokC1eA7sTg" title="Отправка товаров из Китайских маркетплейсов и фабрик в Россию, Казахстан, Кыргызстан и Белорусь" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className='delivery-options-section'>
                <div className="title delivery-title">
                    <h1> <span className="highlight">Варианты доставки</span> товаров из Китая в Москву</h1>
                </div>
                <div class="delivery-options">
                    <div class="option">
                        <h2>АВИА ЭКСПРЕСС</h2>
                        <p class="time">2–3 дня</p>
                        <p class="price">от 23 $/кг</p>
                        <p class="description">Подойдёт для доставки образцов или очень дорогого груза</p>
                    </div>
                    <div class="option">
                        <h2>АВТО ЭКСПРЕСС</h2>
                        <p class="time">10–14 дней</p>
                        <p class="price">от 2 $/кг</p>
                        <p class="description">Быстрая доставка по разумной цене</p>
                    </div>
                    <div class="option">
                        <h2>АВТО СТАНДАРТ</h2>
                        <p class="time">18–25 дней</p>
                        <p class="price">от 1,5 $/кг</p>
                        <p class="description">Вариант для товаров с низкой плотностью</p>
                    </div>
                    <div class="option">
                        <h2>ЖД ДОСТАВКА</h2>
                        <p class="time">25–30 дней</p>
                        <p class="price">от 1,5 $/кг</p>
                        <p class="description">Для товаров с низкой надбавочной стоимостью</p>
                    </div>
                </div>
                <div className='delivery-info'>
                    <div className='text-block'>
                        <p>Окончательная стоимость доставки груза из Китая определяется исходя из характера груза, его объёма и веса, желаемых сроков доставки, использование дополнительных услуг, таких как таможенная очистка, страхование грузов</p>
                    </div>
                    <div className='calculation'>
                        <p>Для получения точного расчёта стоимости доставки, свяжитесь с нами</p>
                        <a className='button button-blue' href='#'>Связаться в WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    )

}