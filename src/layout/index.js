import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/Theme';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const Site = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const SiteContent = styled.div`
  flex: 1;
`

const MainLayout = ({children}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Site>
            <Header/>
            <SiteContent>
                {children}
            </SiteContent>
            <Footer/>
        </Site>
    </ThemeProvider>

);

export default MainLayout;
