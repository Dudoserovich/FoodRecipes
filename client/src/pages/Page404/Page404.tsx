import s from './Page404.module.scss';
import img from '/cat404.png';

export default function Page404() {
    return (
        <>
            <img className={s.img404} src={img} alt="cat404"/>
            <h1>404, Not found</h1>
        </>
    )
}
