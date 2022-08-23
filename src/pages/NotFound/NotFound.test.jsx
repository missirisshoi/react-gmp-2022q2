import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NotFound from './NotFound';

describe('404 component', () => {
  test('renders 404', () => {
    render(<NotFound />);
    expect(screen.getByText(/404/)).toBeInTheDocument();
  });

  test('renders logo', () => {
    render(<NotFound />);
    expect(screen.getByText(/netflix/)).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const err = renderer.create(<NotFound />).toJSON();
    expect(err).toMatchSnapshot();
  });
});
