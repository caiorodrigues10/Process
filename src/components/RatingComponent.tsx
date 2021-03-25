import style from '../styles/components/RatingComponent.module.css'

export function RatingComponent() {
    return (
        <div className={style.container}>
            <div className={style.divider}></div>
            <ul>
                <li><span className={style.txtrating}>Avaliação</span></li>
                <li className={style.firstelement}><img src="/images/5Star.png" /><label className={style.numbers}>8500</label></li>
                <li className={style.secondelement}><img src="/images/4Star.png" /><label className={style.numbers}>3250</label></li>
                <li><img src="/images/3Star.png" /><label className={style.numbers}>1120</label></li>
            </ul>
            <button type="reset">
                LIMPAR FILTROS
            </button>
        </div>
    )
}