import Head from "next/head";
import Link from "next/link";

function Help() {
  return (
    <div className="container">
      <Head>
        <title>Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>
          <Link href="/index">
            <a>Home</a>
          </Link>
        </div>
      </header>
      <main>
        <div>
          <h4>How to play</h4>
          <p>Enter your username.</p>
          <p>Enter a room name and send the room name to your opponent.</p>
          <p>Once your video starts hit the start button!</p>
          <p>Charades 28 is still a WIP</p>
        </div>
      </main>
      <footer>
        <a
          href="https://kachamukabe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Kacha Mukabe
        </a>
      </footer>

      <style jsx global>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          max-width: 980px;
          margin: 0 auto;
          padding-top: 1rem;
          z-index: 9;
          align-items: right;
          text-align: right;
        }

        main {
          padding: 5rem 0;
          width: clamp(23ch, 80%, 46ch);
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default Help;
