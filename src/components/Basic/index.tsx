import React, { Component, CSSProperties } from "react";
import { getProgressDisplay } from "../../utils";
import "./style.scss";

interface State {
  isRippling: boolean;
  style?: CSSProperties;
}

export class Basic extends Component<{ progress: number }, State> {
  state: State = {
    isRippling: false,
    style: undefined
  };

  private handleEvent = ({
    pageX,
    pageY
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (this.state.isRippling) return;
    const style = { left: `${pageX - 500}px`, top: `${pageY - 500}px` };
    this.setState(
      {
        style,
        isRippling: true
      },
      () => {
        setTimeout(
          () => this.setState({ isRippling: false, style: undefined }),
          2000
        );
      }
    );
  };

  render() {
    const { isRippling, style } = this.state,
      width = getProgressDisplay(this.props.progress);
    return (
      <div
        className="progress"
        style={{ width }}
        onMouseDown={this.handleEvent}
      >
        <code className="progress-display">{width}</code>
        <span
          className={`ripple-pond ${isRippling ? "rippling" : ""}`}
          style={style}
        />
      </div>
    );
  }
}
