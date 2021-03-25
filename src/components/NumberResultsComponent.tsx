import style from '../styles/components/NumberResultComponent.module.css'

export function NumberResultComponent() {
    return (
        <div className={style.container}>
            <span className={style.filter}>
                Filtros
            </span>
            <span className={style.result}>
                200 resultados encontrados
            </span>

            <div className={style.componentsright}>
                <span className={style.txtlist}>
                    Listagem
                <img className={style.arrow} src="/images/arrow.png" />
                </span>

                <img className={style.grid} src="/images/GridView.png" />
                <img className={style.list} src="/images/ListView.png" />
            </div>
        </div>
    )
}