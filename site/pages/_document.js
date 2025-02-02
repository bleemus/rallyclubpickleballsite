// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
render() {
return (
    <Html>
    <Head>
        {/* Preconnect to improve font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* Google Fonts stylesheet */}
        <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
        />
    </Head>
    <body>
        <Main />
        <NextScript />
    </body>
    </Html>
);
}
}

export default MyDocument;
