import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  return <EventsList events={data.events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // ...
    throw json(
      { message: "Could not fetch Events" },
      {
        status: 500,
      }
    );
  } else {
    // const resData = await response.json();
    // console.log(resData);
    // return resData.events;
    return response;
  }
};
