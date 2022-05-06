import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import 'styles/index.scss';

import { RootScene } from 'scenes';

const beforeRootRender = () => new Promise((resolve, reject) => {
    moment.locale('ru');
    resolve(true);
});

const startApp = async () => {
    await Promise.all([
        beforeRootRender()
    ]);

    ReactDom.render(<RootScene />, document.getElementById('root'));
};

startApp().then(() => {});
