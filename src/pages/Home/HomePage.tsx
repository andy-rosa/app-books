import React, {useEffect, useRef, useState} from 'react';
import cls from "./HomePage.module.css";
import BookCard from "../../components/BookCard/BookCard";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useLazySearchBooksQuery} from "../../app/api/books/books.api";
import {Loader} from "../../components/Loader/Loader";
import {useDispatch} from "react-redux";
import {setStartIndex} from "../../app/providers/store/slices/SearchFormSlice";
import {SearchItem} from "../../models/types/SearchResponse";

//TODO: доделать логику сортировки и верстку
const HomePage = () => {
    const dispatch = useDispatch();
    const searchFormState = useAppSelector(state => state.bookSearchForm)
    const { category, searchText, sort, startIndex } = searchFormState

    const searchRef = useRef<string | undefined>();
    const categoryRef = useRef<typeof category>();
    const sortRef = useRef<typeof sort>();

    const [fetchSearch, {data, isLoading}] = useLazySearchBooksQuery()

    const [books, setBooks] = useState<SearchItem[]>([])

    useEffect(() => {
        if (searchText === searchRef.current) {
            if (data?.items) setBooks(prev => [...prev,...data.items])
        } else {
            if (data?.items) setBooks(data?.items)
        }
    }, [data])

    const handleNextBooksClick = () => {
        dispatch(setStartIndex(searchRef.current === searchText));
        fetchSearch(searchFormState)
        searchRef.current = searchText
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
                    books &&
                    books.map(
                        ({id, volumeInfo}, index) => (<BookCard
                            title={volumeInfo.title}
                            categories={volumeInfo.categories}
                            imageLinks={volumeInfo.imageLinks}
                            authors={volumeInfo.authors}
                            key={id + index}
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
