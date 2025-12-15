# Assignment Project

Blog Management Application using React & Redux Core

## Problem Statement

- Design and develop a Blog Management Application using React and Redux Core that allows users to view, create, update, and delete blog posts.
- All application state related to blogs must be managed using Redux Core.

- The application should demonstrate
  - proper handling of asynchronous API calls,
  - global state management, and
  - real-world UI scenarios such as loading, error, and authorization checks.

## Learning Objectives

By completing this project, you should demonstrate:

- Understanding of Redux Core architecture
- Handling async APIs using redux-thunk
- Proper separation of actions, reducers, and store
- Ability to manage global state
- Real-world error and loading handling

## Tech Stack

- React
- Redux (Core)
- React-Redux
- Redux-Thunk
- Axios
- React Router DOM

## API Details

- Base URL => **https://jsonplaceholder.typicode.com**
- | Operation        | Method | Endpoint              |
  | ---------------- | ------ | --------------------- |
  | Fetch all blogs  | GET    | `/posts`              |
  | Fetch blog by ID | GET    | `/posts/:id`          |
  | Create blog      | POST   | `/posts`              |
  | Update blog      | PUT    | `/posts/:id`          |
  | Delete blog      | DELETE | `/posts/:id`          |
  | Fetch comments   | GET    | `/posts/:id/comments` |

## Project Structure

```
src/
├── redux/
│ ├── actions/
│ ├── reducers/
│ └── store.js
├── pages/
│ ├── BlogList.jsx
│ ├── BlogDetails.jsx
│ ├── CreateBlog.jsx
│ └── EditBlog.jsx
├── components/
│ ├── Loader.jsx
│ └── Error.jsx
├── App.jsx
└── main.jsx
```

## Functional Requirements

1. Blog Listing Page (/)

   - Fetch all blogs using Redux action
   - Show loader while data is being fetched
   - Show error message if API fails
   - Display list of blog titles
   - Clicking a blog navigates to blog details page

2. Blog Details Page (/blog/:id)

   - Fetch blog details using Redux
   - Fetch comments for the blog
   - Handle invalid blog ID
   - Show loading and error states

3. Create Blog Page (/create)

   - Display a controlled form (title, content)
   - Dispatch Redux action to create blog
   - Show success message after creation
   - Disable submit button during API call

4. Edit Blog Page (/edit/:id)

   - Pre-fill form with existing blog data
   - Update blog using Redux action
   - Handle invalid blog ID scenario

5. Delete Blog

   - Delete blog using Redux action
   - Show confirmation before deleting
   - Update UI after successful deletion

6. Authentication Simulation
   - Simulate login using localStorage
   - Only logged-in users can:
   - Create blogs
   - Edit blogs
   - Delete blogs
   - Redirect unauthenticated users to home page

## State Management Requirements

Redux state must include:

```
{
blogs: [],
blog: null,
loading: false,
error: null
}
```

## Edge Cases to Handle

- API failure
- Network issues
- Empty blog list
- Invalid blog ID
- Duplicate form submission
- Route not found

---
