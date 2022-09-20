/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { RenderRadioAnswers } from '../../../components/FormFields';
import { QuizActionCreators } from '../../../redux/actions/quiz';

const quizSchema = Yup.object().shape({
  1: Yup.string().required('Please select an option'),
});

const ChangeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postChange } = bindActionCreators(QuizActionCreators, dispatch);

  const question = {
    id: 1,
    corellationid: 1,
    question: '',
    helptext: null,
    imageurl: null,
    type: null,
    answers: [
      {
        answerid: 'Vodka',
        answer: 'Vodka',
      },
      {
        answerid: 'Tequila',
        answer: 'Tequila',
      },
      {
        answerid: 'Gin',
        answer: 'Gin',
      },
      {
        answerid: 'Whisky',
        answer: 'Whisky',
      },
      {
        answerid: 'Rum',
        answer: 'Rum',
      },
      {
        answerid: 'Schnapps',
        answer: 'Schnapps',
      },
      {
        answerid: 'Other',
        answer: 'Other',
      },
      {
        answerid: 'Alcohol Free',
        answer: 'Alcohol Free',
      },
    ],
  };

  const handleSubmitChange = async (values) => {
    await postChange(values[1]);
    navigate('/menu');
  };

  return (
    <>
      <Formik
        initialValues={{
          1: '',
        }}
        validationSchema={quizSchema}
        onSubmit={(values) => {
          handleSubmitChange(values);
        }}
      >
        {({ dirty, isValid }) => (
          <Form>
            <div className="mb-5">
              <RenderRadioAnswers question={question} />
            </div>
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

export default ChangeForm;
