import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import Logo2 from './assets/Logo2.ico'

const Layout = ({ children, title, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" type="image/x-icon" href={Logo2} />
        

        <title>{title}</title>
        <meta name="description" content={description} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      
      {children}
    </HelmetProvider>
  );
};

export default Layout;