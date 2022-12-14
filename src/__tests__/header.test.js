import App from '../app';
//import SettingsProvider from '../context/SettingsContext';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Testing the header component', () =>
{
  test('Should display number of pending items', async () =>
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

    fireEvent.change(itemNameBox, { target: { value: "Test Dot" } });
    fireEvent.change(assignee, { target: { value: "Snoopy" } });
    fireEvent.click(submitButton);

    const header = await screen.getByTestId('header');

    expect(header).toBeInTheDocument();
    // rendered 4 things; 4 things should be pending
    expect(header).toHaveTextContent(/4/);
  });
})
