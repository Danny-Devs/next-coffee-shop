import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>
        <p>&copy; 2022 Daniel Ahn</p>
      </footer>
    </>
  );
}

export default MyApp;
