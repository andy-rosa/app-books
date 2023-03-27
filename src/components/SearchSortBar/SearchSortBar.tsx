import React, {ChangeEvent} from 'react';
import {setSearchSort, SortType} from "../../app/providers/store/slices/SearchFormSlice";
import {useDispatch} from "react-redux";
import cls from './SearchSortBar.module.css'
import {useAppSelector} from "../../hooks/useAppSelector";

const optionsValue: SortType[] = ['relevance', 'newest']

const SearchSortBar = () => {
    const dispatch = useDispatch()
    const { sort } = useAppSelector(state => state.bookSearchForm)

    const handleSortChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSearchSort(evt.target.value as SortType))
    }

    return (
        <>
            <label
                htmlFor={'sort'}
                className={cls.label}
            >
                Sorting by
            </label>
        <select
            onChange={handleSortChange}
            defaultValue={sort}
            name={'sort'}
        >
            {
                optionsValue.map((optionValue) => <option
                    key={optionValue}
                    value={optionValue}
                >
                    {optionValue}
                </option>
                )
            }
        </select>
        </>
    );
};

export default SearchSortBar;
