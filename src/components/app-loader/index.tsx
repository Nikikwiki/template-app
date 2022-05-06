import React from 'react';
import clsx from 'clsx';

import css from './style.scss';

interface IAppLoaderProps {
    loading: boolean;
}

export const AppLoader: React.FC<IAppLoaderProps> = ({ loading, children }): JSX.Element => {
    return loading ? (
        <div className={clsx(css.appLoader)}>
            <div>Loading...</div>
        </div>
    ) : (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};
