
import './Dialog.css';

import * as React from 'react';
import {ReactNode} from 'react';

type Props = Readonly<{
  'data-test-id'?: string;
  children: ReactNode;
}>;

export function DialogButtonsList({children}: Props): React.JSX.Element {
  return <div className="DialogButtonsList">{children}</div>;
}

export function DialogActions({
  'data-test-id': dataTestId,
  children,
}: Props): React.JSX.Element {
  return (
    <div className="DialogActions" data-test-id={dataTestId}>
      {children}
    </div>
  );
}