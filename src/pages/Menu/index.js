import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Drinks from '../../components/Drinks';
import Layout from '../../layout';
import blur from '../../assets/images/backgrounds/blur.svg';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { quizResults } = useSelector(
    (_S) => ({
      quizResults: _S.QuizReducer.quizResults,
    }),
    shallowEqual,
  );

  const isEmpty = Object.keys(quizResults).length === 0;
  console.log(isEmpty);

  return (
    <>
      <Layout>
        <div className="container welcome">
          <section className="col-12 col-lg-8 offset-lg-2 py-5 mt-5 text-center">
            <div className="row align-items-center">
              <div className="col-12">
                <h1 className="mb-3 text-center">
                  Thanks for
                  {' '}
                  <br />
                  {' '}
                  <span className="cormoorant-italic">letting us know!</span>
                </h1>
              </div>
            </div>
            {quizResults && !isEmpty && (
              <>
                <Drinks quizResults={JSON.parse(quizResults)} />
                <div className="col-12 py-5">
                  <p>
                    Thank you for participating in our drinks recommendation
                    engine. Find out what your team color means shortly!
                  </p>
                </div>
              </>
            )}
            <Link to="/" className="btn btn-primary">
              Start
            </Link>
          </section>
        </div>
        <img src={blur} alt="" className="blur-one" />
        <img src={blur} alt="" className="blur-two" />
      </Layout>
    </>
  );
};

export default Menu;
