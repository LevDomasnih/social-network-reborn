import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";
import {ServerStyleSheet} from 'styled-components'
import 'module-alias/register'

class MyDocument extends Document {

    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>,
                ],
            }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        return (
            <Html lang='ru'>
                <Head/>
                <body>
                <Main/>
                    <div id='push-portal'/>
                    <div id='modal-portal'/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
