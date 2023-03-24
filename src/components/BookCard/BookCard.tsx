import React from 'react';
import {VolumeInfo} from "../../models/types/SearchResponse";
import cls from './BookCard.module.css'
import classNames from "classnames";
import {generatePath, Link} from "react-router-dom";
import { RoutePath } from '../../app/providers/routers/config/routerConfig';

type BookCardProps = Pick<VolumeInfo, 'categories' | 'title' | 'imageLinks' | 'authors'> & { id: string}

const BookCard = ({imageLinks, title, authors, categories, id}: BookCardProps) => {

    return (
        <Link to={generatePath(RoutePath.book, {id})} className={cls.link}>
            <article className={classNames(cls.bookCard)}>
                {
                    <img
                        alt={`cover book ${title}`}
                        src={imageLinks?.thumbnail}
                        height={200}
                        width={150}
                    />
                }
                {   categories &&
                    <p className={cls.category}>
                        {categories[0]}
                    </p>
                }
            <h3 className={cls.title}>{title}</h3>
            <p>{authors && authors.join(', ')}</p>
        </article>
        </Link>
    );
};

export default BookCard;
