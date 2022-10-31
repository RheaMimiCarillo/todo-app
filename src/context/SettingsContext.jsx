/* TODO

  X Implement the React `context` API for defining `settings` across the entire application.
    X Create a `context` for managing application display settings and provide this at the application level.
    X Display or Hide completed items (boolean).
    X Number of items to display per screen (number).
    X Default sort field (string).
    X Manually set (hard code) those state settings in the context provider's state, they should not be changeable.

  X Consume and utilize `context` values throughout your components
   X Show a maximum of a certain number of items per screen in the `<List />` component
     X Provide "next" and "previous" links to let the users navigate a long list of items
   X Hide or show completed items in the list
   X Optional: Sort the items based on any of the keys (i.e. difficulty)

  > Pagination Notes:

X Only display the first `n` items in the list, where `n` is the number to display per screen in your context.
  X If you have more than `n` items in the list, add a button labeled `Next` that will replace the list with the next `n` items in the list.
  X If you are past the first `n` items (i.e. on page 2 or higher), add a button labeled `Previous` that will replace the list with the previous `n` items in the list.

*/
