import { useEffect, useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import PhotosList from "./components/PhotosList";
import { Ellipsis } from "react-spinners-css";
import { usePhotos } from "./hooks/usePhotos";
import Modal from "./components/Modal";
import axios from "axios";

function App() {
  const { photos, isLoading, isError } = usePhotos();
  const [showModal, setShowModal] = useState(false);
  const [quote, setQuote] = useState(null);
  const [quoteQueue, setQuoteQueue] = useState([]);

  const fetchRandomQuote = async () => {
    const res = await axios.get("https://dummyjson.com/quotes/random");
    return {
      content: res.data.quote,
      author: res.data.author,
    };
  };

  const refillQuoteQueue = async () => {
    if (quoteQueue.length >= 3) return;

    try {
      const needed = 3 - quoteQueue.length;
      const requests = Array.from({ length: needed }, () => fetchRandomQuote());
      const newQuotes = await Promise.all(requests);
      setQuoteQueue((prev) => [...prev, ...newQuotes]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    refillQuoteQueue();
  }, []);

  const handlePhotoClick = () => {
    if (quoteQueue.length > 0) {
      const [nextQuote, ...restQuotes] = quoteQueue;
      setQuote(nextQuote);
      setQuoteQueue(restQuotes);
      setShowModal(true);
      return;
    }

    // Fallback: if cache is empty, keep previous quote visible.
    setShowModal(true);
  };

  useEffect(() => {
    refillQuoteQueue();
  }, [quoteQueue]);

  return (
    <Container>
      <Header showHint={!isLoading} />
      {isLoading && <Ellipsis color="#E5E7EB" size={80} />}
      {isError && (
        <h2 className="text-red-900">Sorry, An error has been occurred!</h2>
      )}
      {!isLoading && !isError && (
        <PhotosList photos={photos} handlePhotoClick={handlePhotoClick} />
      )}
      <Modal
        show={showModal}
        quote={quote}
        close={() => setShowModal(false)}
      />
    </Container>
  );
}

export default App;
