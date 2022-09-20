/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Layout from '../../layout';
import ChangeForm from './Form';
import Loader from '../../components/Loader';

const Change = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    loading,
  } = useSelector(
    (_S) => ({
      loading: _S.QuizReducer.loading,
    }),
    shallowEqual,
  );

  return (
    <>
      <Layout>
        {loading && (
        <>
          <Loader />
        </>
        )}
        <div className="container quiz">
          <section className="row py-5">
            <div className="col-12 align-items-center g-5">
              <>
                <div className="row">
                  <div className="col-12 mb-5">
                    <h2>Did we get it wrong?</h2>
                    <h2>Tell us your favorite cocktail base.</h2>
                  </div>
                  <ChangeForm />
                </div>
              </>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Change;
