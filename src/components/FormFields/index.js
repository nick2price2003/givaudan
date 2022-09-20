/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import {
  Field,
} from 'formik';

export const RenderRadioAnswers = (question) => {
  const { answers } = question.question;
  return answers.map((answer) => (
    <Fragment key={answer.answerid}>
      <div className="mb-3 form-check">
        <Field type="radio" className="form-check-input" name={question.question.id} id={`a${answer.answerid}`} value={`${answer.answerid}`} />
        <label className="form-check-label" htmlFor={`a${answer.answerid}`}>
          {answer.answer}
        </label>
      </div>
    </Fragment>
  ));
};
