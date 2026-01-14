// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
render() {
return (
    <Html>
    <Head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Theme color for browser chrome */}
        <meta name="theme-color" content="#2D5A27" />

        {/* Preconnect to improve font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* Google Fonts stylesheet */}
        <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P07QFV8R94"></script>
        <script
            dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-P07QFV8R94');
            `,
            }}
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
