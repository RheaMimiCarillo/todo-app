import App from '../app';
//import SettingsProvider from '../context/SettingsContext';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Testing the list Item component', () =>
{
  test('Should display Items', async () =>
  {
    render(
      <App />
    );

    const itemNameBox = await screen.getByTestId('itemName');
    const assignee = await screen.getByTestId('itemName');
    const submitButton = await screen.getByTestId('addItemButton');

    fireEvent.change(itemNameBox, { target: { value: "Test Item" } });
    fireEvent.change(assignee, { target: { value: "Felix" } });
    fireEvent.click(submitButton);

    const list = await screen.getByTestId('list');

    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent(/Felix/);
  });
})
