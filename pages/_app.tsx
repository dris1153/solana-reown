import '~/public/styles/globals.scss';
import queryClient from '~/core/queryClient';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Progress } from '~/components/progress';
import { useProgressStore } from '~/store';
import ModalProvider from '../context/ModalContext/ModalProvider';
import GlobalProvider from '../context/GlobalContext/GlobalProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import Web3Provider from '~/context/Web3Provider';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const setIsAnimating = useProgressStore((state) => {
    if (state) {
      return state.setIsAnimating;
    }
  });
  const isAnimating = useProgressStore((state) => {
    if (state) {
      return state.isAnimating;
    }
  });
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Progress isAnimating={isAnimating} />
        <AnimatePresence>
          <Toaster />
        </AnimatePresence>
        <Web3Provider>
          <GlobalProvider>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </GlobalProvider>
        </Web3Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
