/* This component assumes that all questions will have the same dimensions */

import React, {Component, } from 'react';
import PropTypes from 'prop-types';

import QuestionDisplay from '../components/QuestionDisplay';
import {retrieveQuestions} from '../actions/questionsSource';

class QuestionListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      draggedOriginalIdx: undefined,
      draggedOriginalY: undefined
    };

    this._onDragStart = this._onDragStart.bind(this);
    this._onDragEnd = this._onDragEnd.bind(this);
  }

  /* Simulate retrieving question from server */
  componentWillMount() {
    retrieveQuestions()
      .then(questions => {
          this.setState({questions});
        }
      )
  }

  /* Store y-location and index of dragged question */
  _onDragStart(event, idx) {
    this.setState({
      draggedOriginalIdx: idx,
      draggedOriginalY: event.pageY
    })
  }

  /* Compute the new index of the dragged question and reset the questions state */
  _onDragEnd(event){
    const {questionHeight, questionMargin, questionBorder, questionPadding} = this.props;
    const {questions, draggedOriginalIdx, draggedOriginalY} = this.state;

    /* Calculate the index by which the question has moved based on the yDelta of the drag */
    let yDelta = event.pageY - draggedOriginalY;
    let totalQuestionHeight = questionHeight + questionMargin +
      2*(questionBorder + questionPadding);
    let idxDelta = yDelta > 0 ? Math.floor(yDelta/totalQuestionHeight) :
      Math.ceil(yDelta/totalQuestionHeight);
    let newIndex = draggedOriginalIdx + idxDelta;

    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= questions.length) {
      newIndex = questions.length - 1;
    }

    let newQuestions = questions.slice();
    newQuestions.splice(newIndex, 0,
      newQuestions.splice(draggedOriginalIdx, 1)[0]);

    this.setState({questions: newQuestions});
  }


  render() {
    const {questions} = this.state;
    if (!questions || !questions.length) {
      return <div>Loading ...</div>
    }

    const {questionHeight, questionMargin, questionBorder, questionWidth, questionPadding} = this.props;

    return (
      <div>
        <h1> Questions </h1>
        {questions.map((q, idx)=>(
          <QuestionDisplay
            key={idx}
            idx={idx}
            question={q}
            height={questionHeight}
            width={questionWidth}
            margin={questionMargin}
            borderWidth={questionBorder}
            padding={questionPadding}
            onDragStart={this._onDragStart}
            onDragEnd={this._onDragEnd}
          />
        ))}

        <div style={{border:"2px solid red"}}>
          <h2> Questions JSON </h2>
          <div>
            <pre>{JSON.stringify(questions, null, 2)}</pre>
          </div>
        </div>
      </div>
    )
  }
}

QuestionListContainer.propTypes = {
  questionHeight: PropTypes.number,
  questionWidth: PropTypes.number,
  questionMargin: PropTypes.number,
  questionBorder: PropTypes.number,
  questionPadding: PropTypes.number
};

export default QuestionListContainer;