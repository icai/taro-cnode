import { useEffect, useState } from 'react';

const useTitle = (initialTitle, watchTitleChange = false) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    const originalTitle = document.title;

    if (title !== originalTitle) {
      document.title = title;
    }

    return () => {
      // Restore original title when the component unmounts
      document.title = originalTitle;
    };
  }, [title]);

  useEffect(() => {
    if (watchTitleChange) {
      const handleTitleChange = () => {
        setTitle(document.title);
      };

      // Listen for changes in the title
      window.addEventListener('visibilitychange', handleTitleChange);

      return () => {
        // Remove event listener when the component unmounts
        window.removeEventListener('visibilitychange', handleTitleChange);
      };
    }
  }, [watchTitleChange]);

  return {
    title,
    setTitle
  };
};


export default useTitle;
