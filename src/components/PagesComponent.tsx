import style from '../styles/components/PagesComponent.module.css'

export function PagesComponent() {

    return (
        <div className={style.container}>
            <img className={style.left} src="/images/Left.png" />

            <a href="#" className={style.selected}>1</a>
            <a href="#" >2</a>
            <a href="#" >3</a>
            <a href="#" >4</a>
            <a href="#" >5</a>
            <a href="#" >6</a>
            <a href="#" >7</a>
            <a href="#" >8</a>
            <a href="#" >9</a>
            <a href="#" >10</a>

            <img className={style.right} src="/images/Right.png" />
        </div>
    )
}