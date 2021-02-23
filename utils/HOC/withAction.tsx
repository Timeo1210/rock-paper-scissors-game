import React from "react";

type HandleActionType = (itemType: ItemTypes) => void;

function withAction<T>(
  WrappedComponent: React.ComponentType<T>,
  handleAction: HandleActionType
) {
  return (props: T) => (
    <WrappedComponent handleAction={handleAction} {...props} />
  );
}

export default withAction;
