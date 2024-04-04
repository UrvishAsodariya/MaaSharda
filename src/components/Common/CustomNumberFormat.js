import React from "react";
import accounting from "accounting-js";

function CustomNumberFormat({
  value,
  displayType,
  thousandSeparator,
  className,
}) {
  const formattedValue = accounting.formatMoney(
    value,
    "",
    0,
    thousandSeparator ? "," : "",
    "."
  );

  if (displayType === "text") {
    return <span className={className}>{formattedValue}</span>;
  }

  // Handle other display types here if needed
  return null;
}

export default CustomNumberFormat;
