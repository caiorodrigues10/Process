import style from '../styles/components/ResultsComponent.module.css'

export function ResultsComponent(){
    return(
        <div className={style.container}>
            <span className={style.txtresult}>
                Resultados
            </span>
                <img className={style.path} src="/images/path.png" />
                <img className={style.home} src="/images/home.png" />
                <img className={style.arrowright} src="/images/arrowright.png" />
            <span className={style.txtcursos}>
                Cursos
            </span>
                <img className={style.settings} src="/images/settings.png" />
                <span className={style.oval}></span>
        </div>
    )
}