import style from '../styles/components/CategoryComponent.module.css'

export function CategoryComponent() {
    return (
        <div className={style.container}>
            <div className={style.divider}></div>
            <span className={style.category}>Categorias</span>

            <ul>
                <li><input type="checkbox" />
                    <label className={style.namecategory}>
                        Érico Rocha
                    </label>
                    <label className={style.numbercategory}>
                        1920
                    </label>
                </li>
                <li><input type="checkbox" />
                    <label className={style.namecategory}>
                        Desafio 6 em 7
                    </label>
                    <label className={style.numbercategory}>
                        1820
                    </label>
                </li>
                <li><input type="checkbox" />
                    <label className={style.namecategory}>
                        Fórmula de lançamento
                    </label>
                    <label className={style.numbercategory}>
                        462
                    </label>
                </li>
                <li><input type="checkbox" />
                    <label className={style.namecategory}>
                        ClickPages
                    </label>
                    <label className={style.numbercategory}>
                        6556
                    </label>
                </li>
                <li><input type="checkbox" />
                    <label className={style.namecategory}>
                        Audios
                    </label>
                    <label className={style.numbercategory}>
                        120
                    </label>
                </li>
            </ul>

        </div>
    )
}