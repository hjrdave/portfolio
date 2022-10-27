/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import Helmet from 'react-helmet';
import Layout from './src/components/templates/layout';

export const wrapRootElement = ({ element }) => {

    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/bc8edc6f62.js" crossOrigin="anonymous"></script>
            </Helmet>
            <Layout>
                {element}
            </Layout>
        </>
    );
}

