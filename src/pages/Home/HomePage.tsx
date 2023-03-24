import React, {useEffect, useState} from 'react';
import cls from "./HomePage.module.css";
import BookCard from "../../components/BookCard/BookCard";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useLazySearchBooksQuery} from "../../app/api/books/books.api";
import {Loader} from "../../components/Loader/Loader";
import {useDispatch} from "react-redux";
import {setStartIndex} from "../../app/providers/store/slices/SearchFormSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const searchFormState = useAppSelector(state => state.bookSearchForm)
    const { category, searchText, sort, startIndex } = searchFormState
    const [search, setSearch] = useState(searchText);

    const [fetchSearch, {data, isLoading}] = useLazySearchBooksQuery()

    const handleNextBooksClick = () => {
        if (search === searchText) {
            dispatch(setStartIndex(true));
        } else {
            setSearch(searchText)
            dispatch(setStartIndex(false));
        }
    };

    useEffect(() => {
        if (!searchText.length) return
        fetchSearch(searchFormState)
    }, [sort, category, searchText, startIndex])

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            {
                data
                && <h2 className={cls.title}>Found {data.total} results</h2>
            }
            <div className={cls.gridWrapper}>
                {
                    data &&
                    data.items?.map(
                        ({id, volumeInfo}) => (<BookCard
                            title={volumeInfo.title}
                            categories={volumeInfo.categories}
                            imageLinks={volumeInfo.imageLinks}
                            authors={volumeInfo.authors}
                            key={id}
                            id={id}
                        />)
                    )
                }
            </div>
            <button onClick={handleNextBooksClick}>
                Load Next 30 Books
            </button>
        </>
    );
};

export default HomePage;
