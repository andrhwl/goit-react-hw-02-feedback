import PropTypes from 'prop-types';
import { Sectionmain } from './Section.styled';

export const Section = ({ title, children }) => (
  <Sectionmain>
    <h2>{title}</h2>
    {children}
  </Sectionmain>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
