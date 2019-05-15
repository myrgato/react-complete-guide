import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

const defaultProps = {};

const StyledPerson = styled.div`
  display: inline-block;
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 200px;
  padding: 20px;
`;

const Person = ({ name, age }) => (
  <StyledPerson>
    <h1>{name}</h1>
    <p>Your age: {age}</p>
  </StyledPerson>
);

Person.propTypes = propTypes;
Person.defaultProps = defaultProps;

export default Person;
