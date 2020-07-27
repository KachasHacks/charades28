import "nes.css/css/nes.min.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: "Press Start 2P";
          src: url("/fonts/PressStart2P-Regular.ttf");
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
}
