import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  };

  onButtonClick = optionName => {
    this.setState(prevState => ({
      [optionName]: prevState[optionName] + 1,
    }));
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <Section title={'Select an option'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        <Section title={'Stats'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <p>None Here</p>
          )}
        </Section>
      </>
    );
  }
}
