import { useTheme } from "styled-components";
import { Svg, SvgProps } from "../Svg";

const BunnyKnownPlaceholder: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="" fill={primaryColor} />
      <mask
        id="mask0_1825_148632"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="4"
        width="72"
        height="72"
      >
        <path d="" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_1825_148632)">
        <path fillRule="evenodd" clipRule="evenodd" d="" fill={secondaryColor} />
        <path d="" fill={primaryColor} />
        <path fillRule="evenodd" clipRule="evenodd" d="" fill={primaryColor} />
        <path d="" fill={secondaryColor} />
        <path fillRule="evenodd" clipRule="evenodd" d="" fill={secondaryColor} />
        <path fillRule="evenodd" clipRule="evenodd" d="" fill={secondaryColor} />
        <path d="" fill={secondaryColor} />
        <path d="" fill={secondaryColor} />
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="" fill={secondaryColor} />
    </Svg>
  );
};

export default BunnyKnownPlaceholder;
