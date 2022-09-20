/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Loader from '../../../components/Loader';
import { QuizActionCreators } from '../../../redux/actions/quiz';
import { RenderRadioAnswers } from '../../../components/FormFields';

const quizSchema = Yup.object().shape({
  1: Yup.string().required('Please select an option'),
  2: Yup.string().required('Please select an option'),
  3: Yup.string().required('Please select an option'),
  4: Yup.string().required('Please select an option'),
  5: Yup.string().required('Please select an option'),
  6: Yup.string().required('Please select an option'),
  7: Yup.string().required('Please select an option'),
  8: Yup.string().required('Please select an option'),
  9: Yup.string().required('Please select an option'),
  10: Yup.string().required('Please select an option'),
});

const QuizForm = ({ questions, quizErr }) => {
  const dispatch = useDispatch();
  const { postQuiz } = bindActionCreators(
    QuizActionCreators,
    dispatch,
  );
  const initialValues = Object.keys(questions).reduce((obj, item) => {
    const key = questions[item].id;
    obj[key] = '';
    return obj;
  }, {});

  const handleSubmitQuiz = (values) => {
    try {
      postQuiz(values);
    } catch (e) {
      console.log('ihih');
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={quizSchema}
        onSubmit={(values) => {
          handleSubmitQuiz(values);
        }}
      >
        {({ dirty, isValid }) => (
          <Form>
            {quizErr && (
              <div style={{ color: 'red', marginTop: 10 }}>{quizErr}</div>
            )}
            {questions
              && Object.keys(questions).map((keyName, index) => {
                return (
                  <div className="mb-5" key={index}>
                    <p>{`${index + 1}. ${questions[keyName].question}`}</p>
                    <RenderRadioAnswers question={questions[keyName]} />
                  </div>
                );
              })}
            <button
              type="submit"
              className="btn btn-primary mt-5"
              disabled={!(isValid && dirty)}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default QuizForm;
