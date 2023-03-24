import React, {ChangeEvent, FormEvent, useState} from 'react';
import classNames from "classnames";
import cls from './Form.module.css';
import SearchTextBar from "../SearchTextBar/SearchTextBar";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {useLazySearchBooksQuery} from "../../app/api/books/books.api";
import {setSearchText} from "../../app/providers/store/slices/SearchFormSlice";
import SearchSortBar from "../SearchSortBar/SearchSortBar";
import SearchFilterBar from "../SearchFilterBar/SearchFilterBar";

interface FormProps {
    handleSubmit: (evt: FormEvent<HTMLFormElement>) => void
}

const Form = ({handleSubmit}: FormProps) => {
    const searchFormState = useAppSelector(state => state.bookSearchForm)
    const { sort } = searchFormState

    return (
        <form
            onSubmit={handleSubmit}
            className={classNames(cls.form)}
        >
            <SearchTextBar />
            <SearchFilterBar />
            <SearchSortBar currentValue={sort} />
        </form>
    );
};

export default Form;
