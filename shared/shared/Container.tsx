import clsx from 'clsx';
import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={clsx('container mx-auto max-w-[1250px]')}>{children}</div>;
};


