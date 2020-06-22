import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import TitlePage from '../templates/TitlePage';
import AboutPage from '../templates/AboutPage';
import ProjectsPage from '../templates/ProjectsPage';
import SkillPage from '../templates/SkillPage';

import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import Footer from '../templates/Footer';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <TitlePage />
    <AboutPage />
    <ProjectsPage />
    <SkillPage />
    <Footer />
  </ThemeProvider>
);

export default IndexPage;
