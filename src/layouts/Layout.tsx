import React, {FC, PropsWithChildren} from 'react';
import ErrorBoundary from '../app/ErrorBoundary/ErrorBoundary';
import Header from "../components/widgets/Header/Header";

const Layout = ({children}: PropsWithChildren) => {
    return (
        <ErrorBoundary >
            <Header />
            {children}
        </ErrorBoundary>
    );
};

export default Layout;
