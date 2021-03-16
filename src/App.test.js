import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('render selected ship', () => {
  const {getByTestId} = render(<App />);
  const div = getByTestId('ship-selected-boat')
  fireEvent.click(div);
  const selectedShip = getByTestId('selected-ship').querySelector('[data-testid=ship-boat]');
  expect(selectedShip).toBeInTheDocument();
});
