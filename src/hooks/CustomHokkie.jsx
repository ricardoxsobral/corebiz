import { useEffect, useState } from 'react';

const mediaQueryMap = {
  mobile: 'only screen and (max-width: 768px)', // Adjusted this line to cover all widths up to 768px
  web: 'only screen and (min-width: 769px)',    // Added this line for widths 769px and above
};

export default function useMedia(media) {
  const query = mediaQueryMap[media];
  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    function onMediaQueryChange() {
      setMatch(mediaQuery.matches);
    }

    mediaQuery.addEventListener('change', onMediaQueryChange, false);
    onMediaQueryChange();

    return () => mediaQuery.removeEventListener('change', onMediaQueryChange, false);
  }, [query, mediaQuery]);

  return match;
}
