import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
        {options.map(option => (
            <button
            className={css.optionButton}
            key={option}
            id={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            >
                {option.charAt(0).toUpperCase()}
                {option.slice(1)}
            </button>
        ))}  
        </div>
    );
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
 options: PropTypes.arrayOf(PropTypes.string).isRequired,
 onLeaveFeedback: PropTypes.func.isRequired,
}