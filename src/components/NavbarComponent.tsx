import style from '../styles/components/NavbarComponent.module.css'

export function NavbarComponent() {
    return (
        <div>
            <div className={style.container}>
                <img className={style.check} src="/images/check.png" />
                <img className={style.message} src="/images/message.png" />
                <img className={style.mail} src="/images/mail.png" />
                <img className={style.calendar} src="/images/calendar.png" />
                <img className={style.star} src="/images/star.png" />

                <div className={style.secondpart}>
                    <img className={style.bell} src="/images/bell.png" />
                    <img className={style.search} src="/images/search.png" />

                    <span className={style.nickname}>
                        Caio Rodrigues
                        <span className={style.classuser}>Cliente VIP</span>
                    </span>
                    <img className={style.oval} src="/images/oval.png" />
                </div>

            </div>
        </div>
    )
}