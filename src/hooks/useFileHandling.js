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
  const {
    setFromViewPage,
    setImageFile,
    setImageDataURL,
    imageFile,
    imageDataURL,
    fromViewPage,
  } = useFileUploadStore();

  const handleImageSelect = (file) => {
    // Set values in the store
    setFromViewPage(true);
    setImageFile(file);

    // Read the file and set the image data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageDataURL(reader.result);
    };
    reader.readAsDataURL(file);

    // Navigate to the specified preview page
    navigate(previewPage);
  };

  return {
    handleImageSelect,
    imageFile,
    imageDataURL,
    fromViewPage,
  };
};

export default useFileHandling;
