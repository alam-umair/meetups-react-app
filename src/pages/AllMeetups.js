import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const myData = [
  {
    id: "1",
    address: "abcd test",
    description: "this is a test",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    title: "test",
  },
  {
    id: "2",
    address: "abcd test",
    description: "this is a test",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    title: "test",
  },
  {
    id: "3",
    address: "abcd test",
    description: "this is a test",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    title: "test",
  },
  {
    id: "4",
    address: "abcd test",
    description: "this is a test",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    title: "test",
  },
  {
    id: 5,
    address: "abcd test",
    description: "this is a test",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    title: "test",
  },
];

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    fetch("https://react-started-b2e95-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setIsData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      {isData.length >= 2 ? (
        <MeetupList meetups={isData} />
      ) : (
        <MeetupList meetups={myData} />
      )}
    </div>
  );
}

export default AllMeetups;
