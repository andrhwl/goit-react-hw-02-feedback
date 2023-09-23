import PropTypes from 'prop-types';
import { Statlist } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <Statlist>Good: {good}</Statlist>
    <Statlist>Neutral: {neutral}</Statlist>
    <Statlist>Bad: {bad}</Statlist>
    <Statlist>Total: {total}</Statlist>
    <Statlist>Positive feedback: {positivePercentage}%</Statlist>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number,
  positivPercentage: PropTypes.number,
};
