import React, {FormEvent} from 'react';
import Form from "../../Form/Form";
import {setSearchText} from "../../../app/providers/store/slices/SearchFormSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useLazySearchBooksQuery} from "../../../app/api/books/books.api";
import {useNavigate, useParams} from 'react-router-dom';
import {RoutePath} from "../../../app/providers/routers/config/routerConfig";
import cls from './Header.module.css'

//TODO: Подумать над взаимосвязью с HomePage
const Header = () => {
    const dispatch = useDispatch();
    const searchFormState = useAppSelector(state => state.bookSearchForm)
    const { searchText } = searchFormState
    const [fetchBooks] = useLazySearchBooksQuery();
    const {id} = useParams();
    const navigate = useNavigate();

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        if (!searchText.length) return
        evt.preventDefault();
        dispatch(setSearchText(searchText))
        fetchBooks(searchFormState)
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
