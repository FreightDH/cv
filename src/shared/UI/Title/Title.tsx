import { FC, ReactElement, ReactNode } from 'react';

interface TitleProps {
  children: string | ReactNode;
}

export const Title: FC<TitleProps> = ({ children }): ReactElement => {
  return <h3 className="title--content">{children}</h3>;
};
