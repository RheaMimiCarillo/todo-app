import App from '../app';
//import SettingsProvider from '../context/SettingsContext';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Testing the list component', () =>
{
  test('Should display Items', async () =>
  {
    render(
      <App />
    );

    const itemNameBox = await screen.getByTestId('itemName');
    const assignee = await screen.getByTestId('itemName');
    const submitButton = await screen.getByTestId('addItemButton');

    fireEvent.change(itemNameBox, { target: { value: "Test Cat" } });
    fireEvent.change(assignee, { target: { value: "Felix" } });
    fireEvent.click(submitButton);

    fireEvent.change(itemNameBox, { target: { value: "Test Cat" } });
    fireEvent.change(assignee, { target: { value: "Dot" } });
    fireEvent.click(submitButton);

    fireEvent.change(itemNameBox, { target: { value: "Test Lizard" } });
    fireEvent.change(assignee, { target: { value: "Sock" } });
    fireEvent.click(submitButton);

    fireEvent.change(itemNameBox, { target: { value: "Test Dog" } });
    fireEvent.change(assignee, { target: { value: "Snoopy" } });
    fireEvent.click(submitButton);

    const list = await screen.getByTestId('list');

    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent(/Felix/);
    expect(list).toHaveTextContent(/Dot/);
    expect(list).toHaveTextContent(/Sock/);

    // default pagination is 3 list items
    expect(list).not.toHaveTextContent(/Snoopy/);
  });
})
