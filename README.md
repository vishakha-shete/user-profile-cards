# User Profile Cards

A frontend project that displays user profile cards using structured user data.
Each card presents personal details, images, engagement statistics, and follow status.

This project focuses on **React component design**, **data-driven UI rendering**, and **clean Tailwind CSS styling**.

---

## 🚀 Features

- Dynamic user profile cards built with React
- Real profile and cover images
- User information displayed on each card:
  - Full name
  - Professional title
  - Short description (`info`)
  - Profile image and cover image
- Engagement statistics:
  - Posts count
  - Likes count
  - Views count
- Follow / Following status display
- Responsive card layout using Tailwind CSS
- Reusable and scalable component structure

---

## 🧩 User Data Structure

Each user object includes the following properties:

```js
{
  fullName: "Aarav Sharma",
  title: "Frontend Developer",
  info: "Lorem ipsum dolor sit amet.",
  profile: "profile-image-url",
  coverImage: "cover-image-url",
  likeCount: 1240,
  postCount: 87,
  viewCount: 15400,
  followed: true
}
