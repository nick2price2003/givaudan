/* eslint-disable no-unused-vars */
import { QuizActionTypes } from '../../types';

import { api } from '../../../utils/api';

export const QuizActionCreators = {
  resetState: () => async (dispatch) => {
    dispatch({
      type: QuizActionTypes.RESET_STATE,
    });
  },
  getQuestions: () => async (dispatch) => {
    dispatch({
      type: QuizActionTypes.GET_QUESTIONS_REQ,
    });
    try {
      const response = await api('GET', 'quiz');
      dispatch({
        type: QuizActionTypes.GET_QUESTIONS_RES,
        error: null,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: QuizActionTypes.GET_QUESTIONS_RES,
        error: e?.data?.message || e.message || 'Something went wrong',
      });
    }
  },
  postQuiz: (values) => async (dispatch) => {
    dispatch({
      type: QuizActionTypes.POST_QUIZ_REQ,
    });
    try {
      const data = [
        values,
      ];

      const dataMapped = await data.map((outer) => {
        const mappedObj = Object.keys(outer).map((k, i) => {
          const res = { id: i + 1 };

          const answers = [{ type: 'radio', answer: outer[k] }];

          return { ...res, answers };
        });
        return mappedObj;
      });

      const payload = await dataMapped.flatMap((x) => x);

      const response = await api('POST', 'quiz', payload);

      dispatch({
        type: QuizActionTypes.POST_QUIZ_RES,
        error: null,
        payload: response.clusterResults,
      });
    } catch (e) {
      dispatch({
        type: QuizActionTypes.POST_QUIZ_RES,
        error: e?.data?.message || e.message || 'Something went wrong',
      });
    }
  },
  postChange: (values) => async (dispatch) => {
    dispatch({
      type: QuizActionTypes.POST_CHANGE_REQ,
    });
    try {
      const clusterResults = {
        drinkName: values,
      };

      dispatch({
        type: QuizActionTypes.POST_CHANGE_RES,
        error: null,
        payload: JSON.stringify(clusterResults),
      });
      return true;
    } catch (e) {
      dispatch({
        type: QuizActionTypes.POST_CHANGE_RES,
        error: e?.data?.message || e.message || 'Something went wrong',
      });
      return 'ERROR';
    }
  },
};
