import {QueryClient, QueryClientProvider} from 'react-query';
import styled from '@emotion/styled';
import Toast from './toast';

const RootDiv = styled.div`
  margin-left: 8px;
  height: 97vh;
  width: 98vw;
  // background-color: lightBlue;
`;

function MyApp({Component, pageProps}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RootDiv>
        <Component {...pageProps} />
      </RootDiv>
      <Toast />
    </QueryClientProvider>
  );
}

export default MyApp;
