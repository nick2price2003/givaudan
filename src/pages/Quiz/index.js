import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Layout from '../../layout';
import Results from './Results';
import QuizForm from './Form';
import { QuizActionCreators } from '../../redux/actions/quiz';
import Loader from '../../components/Loader';
import blur from '../../assets/images/backgrounds/blur.svg';

const Quiz = () => {
  const dispatch = useDispatch();
  const { getQuestions } = bindActionCreators(QuizActionCreators, dispatch);

  useEffect(() => {
    window.scrollTo(0, 0);
    getQuestions();
  }, []);

  const {
    questions, quizSubmitted, quizResults, quizErr, loading,
  } = useSelector(
    (_S) => ({
      questions: _S.QuizReducer.questions,
      quizErr: _S.QuizReducer.quizErr,
      quizSubmitted: _S.QuizReducer.quizSubmitted,
      quizResults: _S.QuizReducer.quizResults,
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
              {!quizSubmitted ? (
                <>
                  <div className="row">
                    <div className="col-9 col-lg-7 text-center requirements">
                      <p className="small mb-5">
                        Please answer all of the following questions
                      </p>
                    </div>
                    <QuizForm questions={questions} quizErr={quizErr} />
                  </div>
                  <img src={blur} alt="" className="blur-four" />
                  <img src={blur} alt="" className="blur-two" />
                  <img src={blur} alt="" className="blur-three" />
                </>
              ) : (
                <Results quizResults={JSON.parse(quizResults)} />
              )}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Quiz;
