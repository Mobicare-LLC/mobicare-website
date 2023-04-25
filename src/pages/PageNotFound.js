import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';



const PageNotFound = () => {

    return (
        <Layout showHeaderImage={false}>
            <div className='container my-5 py-5' style={{height: "60vh"}}>
                <section className="error-section">
                    <h1 className="error-code">404</h1>
                    <p className="error-message">Sorry, the page you are looking for could not be found.</p>
                </section>
            </div>
        </Layout>
    );
}

export default PageNotFound;
