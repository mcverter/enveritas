import React from 'react';
import PropTypes from 'prop-types';

const QuestionDisplay =
  ({idx, question,
     height, width, margin, borderWidth, padding,
     onDragStart, onDragEnd
   }) => {
    const allStyles = Object.assign({},
      {height, width, margin, borderWidth, padding}, styles);
    return (
      <div
        style={allStyles}
        draggable={true}
        onDragStart={(event) => onDragStart(event, idx)}
        onDragEnd={(event) => onDragEnd(event)} >
        <div>{idx} {question}</div>
      </div>
    )
  };

const styles= {
  borderColor: "black",
  borderStyle: "solid",
  textAlign: "left",
  backgroundColor: "#e9e9e9",
  fontWeight: 900,
  marginRight: "auto",
  marginLeft: "auto"
};

QuestionDisplay.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.number,
  borderWidth: PropTypes.number,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func
};

export default QuestionDisplay;

