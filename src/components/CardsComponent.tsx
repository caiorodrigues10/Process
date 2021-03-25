import style from "../styles/components/CardsComponent.module.css"


export function CardsComponent() {
    return (
        <div className={style.container}>
            <img className={style.imgnone} src="/images/beats-headphones.png" />
            <div className={style.texts}>
                <span className={style.apple}>
                    FÓRMULA DE LANÇAMENTO
                </span>
                <span className={style.byapple}>
                    Por <b>&nbsp;Érico Rocha</b>
                </span>
                <span className={style.loren}>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book.
                </span>
            </div>
            <div className={style.componentsright}>
                <button className={style.avaliation}>
                    3.4
                        <img src="/images/starwhite.png" />
                </button>
                <span className={style.value}>
                    R$2500
                    </span>
                <button className={style.iloved}>
                    <img src="/images/heart.png" />
                    <label>AMEI</label>
                </button>
                <button className={style.purchase}>
                    <img src="/images/shopping-bag.png" />
                    <label>COMPRAR</label>
                </button>
            </div>
        </div>
    )
}