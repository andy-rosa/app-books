import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {setSearchCategory} from "../../app/providers/store/slices/SearchFormSlice";
import cls from "./SearchFilterBar.module.css";
import {useAppSelector} from "../../hooks/useAppSelector";

const optionsFilterValue = [
    'all',
    'Art',
    'Biography',
    'Computers',
    'History',
    'Medical',
    'Poetry'
]

const SearchFilterBar = () => {
    const dispatch = useDispatch();

    const { category } = useAppSelector(state => state.bookSearchForm)
    const handleFilterChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSearchCategory(evt.target.value))
    }

    return (
        <>
            <label
                htmlFor={'categories'}
                className={cls.label}
            >
                Categories
            </label>
        <select
            onChange={handleFilterChange}
            defaultValue={category}
            name={'categories'}
        >
            {optionsFilterValue.map((filter) => <option
                value={filter}
                key={filter}
            >
                {filter.toLowerCase()}
            </option>)
            }
        </select>
            </>
    );
};

export default SearchFilterBar;
