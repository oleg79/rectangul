export const numbers = (state = [], {type, payload}) => {
  switch (type) {
    case 'ADD_NUMBER':
      return [...state, payload];
    case 'CLEAR_NUMBERS':
      return [];
    default: return state;
  }
};

export const words = (state = [], {type, payload}) => {
  switch (type) {
    case 'ADD_WORD':
      return [...state, payload];
    case 'CLEAR_WORDS':
      return [];
    default: return state;
  }
};
