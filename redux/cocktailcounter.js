const initialState = {
  counterValue: 0,
};

const PLUS = "PLUS";
const MIN = "MIN";

export function plus() {
  return { type: PLUS };
}

export function min() {
  return { type: MIN };
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { ...state, counterValue: state.counterValue + 1 };
    case MIN:
      return { ...state, counterValue: state.counterValue - 1 };
    default:
      return state;
  }
};
