import React, {ChangeEvent, FC} from 'react';
import cls from "./SearchTextBar.module.css";
import { ReactComponent as SearchIcon } from './icons/search.svg'
import {useDispatch} from 'react-redux';
import { setSearchText } from '../../app/providers/store/slices/SearchFormSlice';
import {useAppSelector} from "../../hooks/useAppSelector";

const SearchTextBar: FC = () => {
    const searchFormState = useAppSelector(state => state.bookSearchForm)
    const { searchText } = searchFormState
    const dispatch = useDispatch();

    const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchText(evt.target.value));
    };

    return (
        <>
            <label
                htmlFor="searchTerm"
                className={cls.visuallyHidden}
            >
                Search:
            </label>
            <input
                type="text"
                id="searchTerm"
                required
                defaultValue={searchText}
                onChange={handleInputChange}
                className={cls.search}
                placeholder={'Search for book title'}
            />
            <button
                type="submit"
                className={cls.btn}
            >
                <SearchIcon />
            </button>
        </>
    );
};

export default SearchTextBar;
