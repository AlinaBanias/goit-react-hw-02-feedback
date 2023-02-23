import React,{ Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
   return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = this.countTotalFeedback();

    const positiveFeedbacks = this.state.good;

    return Math.round((positiveFeedbacks / totalFeedbacks) * 100);
  };

  clickHandler = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1}))
  };

  render () {
    return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.clickHandler}/>
     <Statistics good={this.state.good}
      neutral={this.state.neutral}
      bad={this.state.bad}
      total={this.countTotalFeedback}
      positivePercentage={this.countPositiveFeedbackPercentage}/>
     </Section>
    )
  };
}
export default App;

