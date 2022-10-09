import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const onButtonClick = evt => {
    onLeaveFeedback(evt.target.dataset.name);
  };
  return (
    <div>
      {options.map(item => (
        <button data-name={item} onClick={onButtonClick} key={item}>
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
