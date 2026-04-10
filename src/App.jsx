import { useState } from "react";
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
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);

  const handlePhotoClick = () => {
    setShowModal(true);
    setIsQuoteLoading(true);
    setQuote(null);

    axios
      .get("https://dummyjson.com/quotes/random")
      .then((res) => {
        setQuote({
          content: res.data.quote,
          author: res.data.author,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setIsQuoteLoading(false));
  };

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
        isLoading={isQuoteLoading}
        close={() => setShowModal(false)}
      />
    </Container>
  );
}

export default App;
