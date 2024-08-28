"use client";

import { useParams } from "next/navigation";
import { events } from "@/ui/events/events-info-section";
import { PageWrapper } from "@/app/page-wrapper";

const EventDetail = () => {
  const params = useParams();
  let { id } = params;

  if (Array.isArray(id)) {
    id = id[0];
  }

  const formattedId = id
    ? decodeURIComponent(id).replace(/-/g, " ").toLowerCase()
    : "";
  const event = events.find(
    (event) => event.eventTitle.toLowerCase() === formattedId
  );

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-stretch">
          <div className="md:w-1/2 flex flex-col justify-center">
            <img
              src={event.imageUrl}
              alt={event.eventTitle}
              className="rounded-lg object-cover h-full"
              style={{ height: "100%" }}
            />
          </div>

          <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-[#2A6FA6]">
              {event.eventTitle}
            </h1>
            <div className="text-lg text-gray-600 mt-4 flex items-center">
              <img
                src="/icons/eventicons/icon_calendar.svg"
                alt="Date Icon"
                className="w-4 h-4 mr-2"
              />
              {event.date}
            </div>
            <div className="text-lg text-gray-600 flex items-center">
              <img
                src="/icons/eventicons/icon_location.svg"
                alt="Location Icon"
                className="w-4 h-4 mr-2"
              />
              {event.location}
            </div>
            <div className="text-lg text-gray-600 flex items-center">
              <img
                src="/icons/eventicons/icon_user.svg"
                alt="Participants Icon"
                className="w-4 h-4 mr-2"
              />
              {event.participants}
            </div>
            <p className="text-gray-800 mt-6">{event.description}</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default EventDetail;
