import { render } from '@testing-library/react';

import FirstPage from './first-page';

describe('FirstPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstPage />);
    expect(baseElement).toBeTruthy();
  });
});
