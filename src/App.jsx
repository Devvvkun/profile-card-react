import { useState } from 'react'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  const employees = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/HmenYQjbwruylFHO0Y74HgZyeqQeZawQf9rG2qVX7Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXh0bHV4dXJ5LmNvbS93cC1jb250ZW50L3Vw/bG9hZHMvZnVubnkt/cHJvZmlsZS1waWN0/dXJlcy0zLmpwZw",
    name: "Himanshu Singh",
    role: "Software Engineer",
    hours: "8 hrs",
    salary: 1500
  },
  {
    id: 2,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...", // keep as is (trimmed here)
    name: "Aarav Sharma",
    role: "Frontend Developer",
    hours: "7 hrs",
    salary: 1200
  },
  {
    id: 3,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...",
    name: "Priya Verma",
    role: "Backend Developer",
    hours: "9 hrs",
    salary: 1800
  },
  {
    id: 4,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...",
    name: "Rohan Gupta",
    role: "UI/UX Designer",
    hours: "6 hrs",
    salary: 1100
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoeJg5OK_TGHNFG2fGN7fzjYEUh99RRb9XA&s",
    name: "Neha Patel",
    role: "Data Analyst",
    hours: "8 hrs",
    salary: 1400
  }
];
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
      {
        employees.map((user) => (
          <Card User = {user}/>
        ))
      }
      </div>
    </>
  )
}

export default App
