import React, { FC } from "react";
import { getProgressDisplay } from "../../utils";
import "./style.scss";

export const Basic: FC<{ progress: number }> = ({ progress }) => {
  const width = getProgressDisplay(progress);
  return (
    <div className="progress" style={{ width }}>
      <code className="progress-display">{width}</code>
    </div>
  );
};
