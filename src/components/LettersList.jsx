import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const LettersList = () => {
  const words = useSelector(state => state.words);
  const dispatch = useDispatch();
  const [word, setWord] = React.useState('');

  const addWord = () => {
    dispatch({type: 'ADD_WORD', payload: word});
    setWord('');
  };

  return (
    <div>
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)}/>
      <button onClick={addWord}>add</button>
      <button onClick={() => dispatch({type: 'CLEAR_WORDS'})}>clear</button>
      <ul>
        { words.map((w, i) => <li key={i}>{i + 1} - {w}</li>) }
      </ul>
    </div>
  );
};

export default LettersList;
