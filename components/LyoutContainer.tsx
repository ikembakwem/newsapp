import React from 'react';

type LayoutContainerProps = {
  children: React.ReactNode;
};

export default function LayoutContainer(props: LayoutContainerProps) {
  return (
    <div className="flex flex-col max-h-screen w-full max-w-full h-full bg-transparent box-border">
      <div>
        <div className="relative h-16"></div>
        <React.Fragment>{props.children}</React.Fragment>
      </div>
    </div>
  );
}
