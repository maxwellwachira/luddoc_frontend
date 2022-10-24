import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage  } from '@mantine/hooks';

import PageLoader from '../components/pageLoader/pageLoader';
import { AuthContextProvider } from '../features/authentication/context/authContextProvider';
import { RefreshContextProvider } from '../features/courses/contexts/refreshDataContexProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    useEffect(() => {
      setTimeout(() => setLoading(true), 700);
    }, []);

  return (
    <AuthContextProvider>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            <RefreshContextProvider>
              { !loading ?
                (<PageLoader />) :
                (<Component {...pageProps} />)
              }
            </RefreshContextProvider>
          </MantineProvider>
      </ColorSchemeProvider>
    </AuthContextProvider>
    
  );
  
}

export default MyApp;