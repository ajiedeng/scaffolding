import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../flexible';
import Provider from '../components/Provider';
import App from './App.js';
// import * as Sentry from '@sentry/browser';

// if(process.env.NODE_ENV === 'production'){
//     Sentry.init({
//         dsn: "https://e347228ed1324ca28e52f32939fb8cbe@sentry.io/1833008",
//         beforeSend(event,hint) {
//             console.error(hint.originalException || hint.syntheticException);
//             return event;
//         },
//         environment: process.env.IOT_PLATFORM,
//     });
//     Sentry.configureScope(function(scope) {
//         scope.setTag("IOT_PROTOCOL",  process.env.PROTOCOL);
//         scope.setTag("IOT_PLATFORM",  process.env.IOT_PLATFORM);
//     });
// }

const Root=()=>{
    const settings = {
        type:'sync',
        // updateStrategy:'immediate',
    };
    return(
        <Provider settings={settings}>
            <App/>
        </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));