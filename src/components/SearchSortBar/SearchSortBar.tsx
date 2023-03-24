import React, {ChangeEvent} from 'react';
import {setSearchSort, SortType} from "../../app/providers/store/slices/SearchFormSlice";
import {useDispatch} from "react-redux";
import cls from './SearchSortBar.module.css'

interface SortBarProps {
    currentValue: SortType
}

const optionsValue: SortType[] = ['relevance', 'newest']

const SearchSortBar = ({currentValue}: SortBarProps) => {
    const dispatch = useDispatch()

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
            defaultValue={currentValue}
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
