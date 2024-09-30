import React from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();
  const params = useParams();
  const id = params.eventId;
  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "could not fetch details for the selected event" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
