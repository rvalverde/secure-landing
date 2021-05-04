import { Fragment } from "react";
import Head from "next/head";

const Layout = (props) => (
  <Fragment>
    <Head>
      <title>RIMAC Seguros y Reaseguros</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
        rel="stylesheet"
      />

      <link rel="shortcut icon" href="/static/assets/favicon.ico" />
    </Head>

    <main className="main">
      <div className="main-wrap">{props.children}</div>

      <footer>
        <div className="container">
          <p>© 2021 Rimac Seguros y Reaseguros.</p>
        </div>
      </footer>
    </main>
  </Fragment>
);

export default Layout;
