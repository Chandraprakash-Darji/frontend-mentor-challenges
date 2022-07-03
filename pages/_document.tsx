import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
               
                    <link
                        rel="shortcut icon"
                        href="/c.png"
                        type="image/x-icon"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300;500;900&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="description" content="All the Frontend mentor project created by Chandraprakash-Darji"></meta>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
