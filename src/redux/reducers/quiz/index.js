import { QuizActionTypes } from '../../types';

export const initialState = {
  loading: false,
  quizErr: null,
  quizSubmitted: false,
  questions: {},
  quizResults: {},
};

export const QuizReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case QuizActionTypes.RESET_STATE:
      return initialState;
    case QuizActionTypes.GET_QUESTIONS_REQ: {
      return {
        ...state,
        loading: true,
        quizErr: null,
      };
    }
    case QuizActionTypes.GET_QUESTIONS_RES: {
      if (error) {
        return {
          ...state,
          loading: false,
          quizErr: error,
        };
      }
      return {
        ...state,
        loading: false,
        quizErr: null,
        questions: payload.quizData,
      };
    }
    case QuizActionTypes.POST_QUIZ_REQ: {
      return {
        ...state,
        loading: true,
        quizErr: null,
      };
    }
    case QuizActionTypes.POST_QUIZ_RES: {
      if (error) {
        return {
          ...state,
          loading: false,
          quizSubmitted: false,
          quizErr: error,
        };
      }
      return {
        ...state,
        loading: false,
        quizErr: null,
        quizSubmitted: true,
        quizResults: payload,
      };
    }
    case QuizActionTypes.POST_CHANGE_REQ: {
      return {
        ...state,
        loading: true,
        quizErr: null,
      };
    }
    case QuizActionTypes.POST_CHANGE_RES: {
      if (error) {
        return {
          ...state,
          loading: false,
          quizSubmitted: false,
          quizErr: error,
        };
      }
      return {
        ...state,
        loading: false,
        quizErr: null,
        quizSubmitted: true,
        quizResults: payload,
      };
    }
    default:
      return state;
  }
};
