import React from 'react'
import Card from './assets/Components/card.jsx'
const App = () => {
  const users = [
    {
      fullName: "Aarav Sharma",
      title: "Frontend Developer",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      likeCount: 1240,
      postCount: 87,
      viewCount: 15400,
      followed: true,
    },
    {
      fullName: "Isha Verma",
      title: "UI/UX Designer",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      likeCount: 980,
      postCount: 65,
      viewCount: 12030,
      followed: false,
    },
    {
      fullName: "Rohan Mehta",
      title: "Full Stack Developer",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      coverImage: "https://images.unsplash.com/photo-1503264116251-35a269479413",
      likeCount: 2100,
      postCount: 102,
      viewCount: 19800,
      followed: true,
    },
    {
      fullName: "Sneha Patil",
      title: "Product Designer",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      coverImage: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
      likeCount: 760,
      postCount: 44,
      viewCount: 9050,
      followed: false,
    },
    {
      fullName: "Aditya Kulkarni",
      title: "Backend Engineer",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      likeCount: 1340,
      postCount: 71,
      viewCount: 14320,
      followed: true,
    },
    {
      fullName: "Neha Singh",
      title: "Digital Marketer",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://i.pinimg.com/1200x/ac/be/7f/acbe7fbee632f7ade3223ea097963d68.jpg",
      coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
      likeCount: 690,
      postCount: 39,
      viewCount: 8120,
      followed: false,
    },
    {
      fullName: "Kunal Joshi",
      title: "Software Engineer",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      likeCount: 1750,
      postCount: 90,
      viewCount: 16780,
      followed: true,
    },
    {
      fullName: "Pooja Nair",
      title: "Content Creator",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      coverImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      likeCount: 2560,
      postCount: 140,
      viewCount: 25400,
      followed: true,
    },
    {
      fullName: "Rahul Deshpande",
      title: "DevOps Engineer",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://i.pinimg.com/736x/45/2b/c9/452bc95f8ffa59b26de10d056ed05692.jpg",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      likeCount: 890,
      postCount: 52,
      viewCount: 10120,
      followed: false,
    },
    {
      fullName: "Ananya Gupta",
      title: "Data Analyst",
      info: "Lorem ipsum dolor sit amet.",
      profile: "https://images.unsplash.com/photo-1548142813-c348350df52b",
      coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      likeCount: 1120,
      postCount: 68,
      viewCount: 13990,
      followed: true,
    },
  ];

  return (
    <div className="bg-pink-200 flex flex-wrap gap-7 justify-center text-2xl text-amber-950 min-h-screen p-6">
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
};


export default App
