import style from '../styles/components/VerticalMenuComponent.module.css'

export function VerticalMenuComponent() {
    return (
        <div className={style.container}>
            <div className={style.brand}>
                <img src="/images/Brand.png" />
            </div>
            <div className={style.menu}>
                <div className={style.horizontal}>
                    <span className={style.dash}>
                        Área do cliente
                    </span>
                    <img className={style.home} src="/images/home.png" />
                    <img className={style.arrow} src="/images/arrow.png" />
                </div>
            </div>
            
                <span className={style.textapp}>
                    APPS
                </span>

                <span className={style.mail}>
                    <img src="/images/mail.png" />
                </span>

                <span className={style.message}>
                    <img src="/images/message.png" />
                </span>

                <span className={style.check}>
                    <img src="/images/check.png" />
                </span>

                <span className={style.calendar}>
                    <img src="/images/calendar.png" />
                </span>

                <span className={style.textmenu}>
                    <span className={style.txtmail}>Email</span>
                    <p className={style.txtmsg}>Conversar</p>
                    <p className={style.txtcheck}>Todo</p>
                    <p className={style.txtcalendar}>Calendário</p>
                </span> 

            </div>
        
    )
}