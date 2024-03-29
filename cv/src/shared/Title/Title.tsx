import { ReactElement, ReactNode } from 'react';

interface TitleProps {
  children: string | ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }): ReactElement => {
  return <h3 className="title--content">{children}</h3>;
};

export default Title;
