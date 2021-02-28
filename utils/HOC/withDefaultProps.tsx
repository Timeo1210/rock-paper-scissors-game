import React from "react";

function withDefaultProps<T>(
  WrappedComponent: React.ComponentType<T>,
  defaultProps: any
) {
  return (props: T) => <WrappedComponent {...defaultProps} {...props} />;
}

export default withDefaultProps;
