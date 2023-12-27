import { useNavigate } from "react-router-dom";
import { useFileUploadStore } from "../services/state/FileUploadStore";

/**
 * Custom hook for handling image file selection and navigation.
 *
 * @param {string} previewPage - The route where the user should be navigated
 *    when an image file is selected.
 * @returns {Object} - An object containing the `handleImageSelect` function.
 */

const useFileHandling = (previewPage) => {
  const navigate = useNavigate();
  const { setFromViewPage, setImageFile, setImageDataURL } =
    useFileUploadStore();

  const handleImageSelect = (file) => {
    setFromViewPage(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      navigate(previewPage);
      setImageDataURL(reader.result);
    };
    reader.readAsDataURL(file);

    setImageFile(file);
  };

  return {
    handleImageSelect,
  };
};

export default useFileHandling;
