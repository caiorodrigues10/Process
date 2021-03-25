import style from '../styles/components/FilterComponent.module.css'

export function FilterComponent() {
    return (
        <div className={style.container}>
            <div className={style.price}>
                <div className={style.txtprice}>
                    Preços
                    <ul>
                        <li><input type="radio" name="1" /><span>R$10</span></li>
                        <li><input type="radio" name="1" /><span>R$10-R$100</span></li>
                        <li><input type="radio" name="1" /><span>R$100-R$500</span></li>
                        <li><input type="radio" name="1" /><span>R$500</span></li>
                        <li><input type="radio" name="1" /><span>Todos</span></li>
                    </ul>
                </div>
            </div>
            <div className={style.slider}>
                <div className={style.divider}></div>

                <span className={style.value}>Valores</span>
                <span className={style.value1}>1.99 - 4098</span>

                <div className={style.limits}>
                    <img src="/images/Slider.png" />
                </div>

            </div>
        </div>
    )
}