import { useEffect, useState } from 'react'
import axios from 'axios'

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?page=8").then(res => {
      setPhotos(res.data);
      setIsLoading(false);
    }).catch(err => {
      console.log(err);
      setIsError(true);
      setIsLoading(false)
    })
  }, [])

  return { photos, isLoading, isError }
}