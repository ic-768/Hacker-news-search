# Overview

This project is a React application that allows users to search for stories from Hacker News. It features an auto-suggest input field, a list of selected stories, and the ability to remove stories from the list. The application retrieves data using the Hacker News Search API.

# Features

- Auto-Suggest Input Field:

  - Users can type at least 3 letters of a Hacker News story title.
  - A dropdown list displays available stories based on the input.

- Story Selection:

  - When a user selects a story from the dropdown, it is added to a saved list.
  - The saved list is stored in localStorage, persisting sessions.

- Remove Stories:
  - Users can remove stories from the saved list by clicking a delete button.

# Other notes

- Vite, Tailwind and ShadCN were used to bootstrap the app.
- Given the 2 hour requirement, I unfortunately did not have enough time to write integration / unit tests.
- All functionality implementation was completed within the allotted time, with the exception of a minor refactor: the replacement of a useEffect with a computedValue. The commit has been marked with `Next day` for transparency.
