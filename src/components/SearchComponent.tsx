import style from "../styles/components/SearchComponent.module.css";

export function SearchComponent() {
    return (
        <div className={style.container}>
            <span>Buscar</span>
            <img src="/images/search.png" />
        </div>
    )
}