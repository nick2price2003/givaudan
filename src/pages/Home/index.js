import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../layout';
import { QuizActionCreators } from '../../redux/actions/quiz';

const Home = () => {
  const dispatch = useDispatch();
  const { resetState } = bindActionCreators(
    QuizActionCreators,
    dispatch,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    resetState();
  }, []);

  return (
    <>
      <Layout>
        <div className="container welcome">
          <section className="col-12 col-lg-8 offset-lg-2 py-md-5 mt-md-5 text-center">
            <div className="py-5 mt-5">
              <h2>Fancy a drink?</h2>
            </div>
            <div className="vline mx-auto" />
            <div className="py-5">
              <p>
                We&apos;ve developed an algorithm just for you, put your trust
                in data and let us recommend you a drink...
              </p>
            </div>
            <Link to="/quiz" className="btn btn-primary">Start</Link>
          </section>
        </div>
        <div className="footer-background" />
      </Layout>
    </>
  );
};

export default Home;
