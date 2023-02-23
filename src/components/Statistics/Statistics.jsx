import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import  Notification  from 'components/Notification';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
return (
    <>
    <h3 className={css.statisticsTitle}>Statistics</h3>
    {!total() ? (
        <Notification message="There is no feedback" />)
        :
    (
    <ul>
        <li className={css.statisticsList}>Good : {good}</li>
        <li className={css.statisticsList}>Neutral : {neutral}</li>
        <li className={css.statisticsList}>Bad : {bad}</li>
        <li className={css.statisticsList}>Total : {total()}</li>
        <li className={css.statisticsList}>Positive feedback : {positivePercentage()}%</li>
    </ul> 
    )}
    </>
);
}
export default Statistics;

Statistics.protoTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}