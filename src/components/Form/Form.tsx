import React, {FormEvent} from 'react';
import cls from './Form.module.css';
import SearchTextBar from "../SearchTextBar/SearchTextBar";
import {useAppSelector} from "../../hooks/useAppSelector";
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
            className={cls.form}
        >
            <SearchTextBar />
            <SearchFilterBar />
            <SearchSortBar currentValue={sort} />
        </form>
    );
};

export default Form;
