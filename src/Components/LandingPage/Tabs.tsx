import React from "react";

interface Props {
  title: string;
  src: string;
  //   children: React.ReactNode;
}

const Tabs: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

Tabs.defaultProps = {};

export default React.memo(Tabs);
