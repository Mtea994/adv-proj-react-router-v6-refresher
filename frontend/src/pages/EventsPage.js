import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();
  console.log(events, "Events");
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadData = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // ...
    throw json(
      { message: "Could not fetch Events" },
      {
        status: 500,
      }
    );
  }
  const resData = await response.json();
  console.log(resData);
  return resData.events;
};

export const loader = async () => {
  return defer({
    events: loadData(),
  });
};
