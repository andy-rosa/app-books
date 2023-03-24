import cls from './ErrorPage.module.css';
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../app/providers/routers/config/routerConfig";

export const ErrorPage = () => {
    const navigate = useNavigate();

    const reloadPage = () => {
        navigate(RoutePath.main);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cls.PageError}>
            <div>An unexpected error has occurred</div>
            <button onClick={reloadPage} className={cls.btn}>Reload page</button>
        </div>
    );
}
