import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Outlet } from "react-router-dom";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import Header from "./components/Header";

const queryClient = new QueryClient();
function App() {
  return (
   <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </ThemeProvider>
   </>
  );
}

export default App;
