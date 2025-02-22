import isUndefinedOrNull from "@pancakeswap/utils/isUndefinedOrNull";
import _isNaN from "lodash/isNaN";
import _replace from "lodash/replace";
import _toNumber from "lodash/toNumber";
import _toString from "lodash/toString";
import { useMemo } from "react";
import { Skeleton } from "../Skeleton";
import { TextProps } from "../Text";
import Balance from "./Balance";

interface BalanceProps extends TextProps {
  value: number;
  decimals?: number;
  unit?: string;
  isDisabled?: boolean;
  prefix?: string;
  strikeThrough?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const BalanceWithLoading: React.FC<
  React.PropsWithChildren<Omit<BalanceProps, "value"> & { value: string | number }>
> = ({ value, fontSize, ...props }) => {
  const isValueUndefinedOrNull = useMemo(() => isUndefinedOrNull(value), [value]);
  const finalValue = useMemo(() => {
    if (isValueUndefinedOrNull) return null;
    const trimmedValue = _replace(_toString(value), /,/g, "");

    return _isNaN(trimmedValue) || _isNaN(_toNumber(trimmedValue)) ? 0 : _toNumber(trimmedValue);
  }, [value, isValueUndefinedOrNull]);

  if (isValueUndefinedOrNull) {
    return <Skeleton />;
  }
  return <Balance {...props} value={finalValue as number} fontSize={fontSize} />;
};

export default BalanceWithLoading;
