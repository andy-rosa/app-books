import { RouteObject } from "react-router-dom";
import HomePage from "../../../../pages/Home/HomePage";
import BookPage from "../../../../pages/Book/BookPage";
import Layout from "../../../../layouts/Layout";

export enum AppRoute {
    MAIN = 'main',
    BOOK = 'book',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.BOOK]: '/:id',
    [AppRoute.NOT_FOUND]: '*',
};


export const routeConfig: RouteObject[] = [
    {
        index: true,
        element:
            <Layout >
                < HomePage />
            </Layout>
    },
    {
        path: RoutePath.book,
        element:
            <Layout >
                < BookPage />
            </Layout>

    },
]
