import React, {FormEvent} from 'react';
import Form from "../../Form/Form";
import {useNavigate, useParams} from 'react-router-dom';
import {RoutePath} from "../../../app/providers/routers/config/routerConfig";
import cls from './Header.module.css'

const Header = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (id) navigate(RoutePath.main)
    };

    return (
        <header className={cls.header}>
            <h1 className={cls.title}>Search for books</h1>
            <Form handleSubmit={handleSubmit}/>
        </header>
    );
};

export default Header;
