import React from 'react';
import {useParams} from "react-router-dom";
import {useSearchBookQuery} from "../../app/api/book/book.api";
import { clearBookDescription } from '../../helper/clearBookDescription';
import cls from './BookPage.module.css'
import {Loader} from "../../components/Loader/Loader";

const BookPage = () => {
    const {id} = useParams();
    const {data, isLoading} = useSearchBookQuery(id as string);

    if (isLoading) {
        return <Loader />
    }

    return (data ?
        <div className={cls.gridWrapper}>
            <div className={cls.bookCoverContainer}>
            <img
                src={data.volumeInfo.imageLinks.thumbnail}
                alt={`book cover ${data.volumeInfo?.title}`}
                className={cls.bookCover}
            />
            </div>

            <div className={cls.infoContainer}>
            <div>{data.volumeInfo.categories?.join('/ ')}</div>
            <h1>{data.volumeInfo?.title}</h1>
            <p className={cls.author}>{data.volumeInfo.authors?.join(', ')}</p>
            <p className={cls.description}>{clearBookDescription(data.volumeInfo?.description)}</p>
            </div>
        </div>
            : <h1>loading...</h1>
    );
};

export default BookPage;
