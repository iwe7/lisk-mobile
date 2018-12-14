import React from 'react';
import { BigNumber } from 'bignumber.js';
import { Text } from 'react-native';

const FormattedNumber = ({
  val, children, type, style,
}) => {
  const Element = type || Text;
  const bgNum = new BigNumber(val || children);
  const formatedNumber = bgNum.toFormat();
  return <Element style={style}>{formatedNumber} LSK</Element>;
};

export default FormattedNumber;
