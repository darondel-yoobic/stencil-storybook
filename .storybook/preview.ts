import { getHostRef, registerHost, renderVdom } from '@stencil/core/internal/client';
import type { Preview } from '@storybook/html';

import { defineCustomElements } from '../loader';

defineCustomElements();

const preview: Preview = {
  decorators: [
    (Story) => {
      const host = document.createElement('div');

      registerHost(host, { $flags$: 0, $tagName$: host.tagName.toLowerCase() });
      renderVdom(getHostRef(host), Story());

      return host.children[0];
    }
  ]
};

export default preview;
