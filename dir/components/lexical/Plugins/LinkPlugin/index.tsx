

import {LinkPlugin as LexicalLinkPlugin} from '@lexical/react/LexicalLinkPlugin';
import * as React from 'react';

import {validateUrl} from '../../Utils/url';

type Props = {
  hasLinkAttributes?: boolean;
};

export default function LinkPlugin({
  hasLinkAttributes = false,
}: Props): React.JSX.Element {
  return (
    <LexicalLinkPlugin
      validateUrl={validateUrl}
      attributes={
        hasLinkAttributes
          ? {
              rel: 'noopener noreferrer',
              target: '_blank',
            }
          : undefined
      }
    />
  );
}
