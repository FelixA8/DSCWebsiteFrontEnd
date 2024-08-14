import { Poppins } from "next/font/google";
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

interface EventCardProps {
  buttonText: string;
  imageUrl: string;
  eventType: string;
  date: string;
  location: string;
  participants: string;
  eventTitle: string;
}

const events: EventCardProps[] = [
  {
    eventTitle: "Data Science Club Journey 2025: Bukalapak",
    buttonText: "Read More",
    imageUrl: "/eventsasset/data science club journey 2024.png",
    eventType: "Company Visit",
    date: "01 Januari 2025",
    location: "Bina Nusantara University",
    participants: "100 people",
  },
  {
    eventTitle: "LDKA Gen-3",
    buttonText: "Read More",
    imageUrl: "/eventsasset/ldka gen2.png",
    eventType: "Workshop",
    date: "01 Januari 2025",
    location: "Bina Nusantara University",
    participants: "200 People",
  },
  {
    eventTitle: "Data Science Club Olympiad 2025",
    buttonText: "Read More",
    imageUrl: "/eventsasset/data science club olympiad 2023.png",
    eventType: "Competition",
    date: "01 Januari 2025",
    location: "Bina Nusantara University",
    participants: "300 People",
  },
];

const EventCard: React.FC<EventCardProps> = ({ buttonText, imageUrl, eventType, date, location, participants, eventTitle }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:w-[30%]">
    <img
      src={imageUrl}
      alt={eventTitle}
      className="w-full h-40 object-cover"
    />
    <div className="p-6">
        <h3 className="text-left text-md font-semibold mb-1 text-blue-600">[{eventType}] <span className="text-41ABC3">{eventTitle}</span></h3>
      <div className="text-gray-500 mb-1 flex items-center">
        <img src="/icons/eventicons/icon_calendar.svg" alt="Date Icon" className="w-4 h-4 mr-2" />
        {date}
      </div>
      <div className="text-gray-500 mb-1 flex items-center">
        <img src="/icons/eventicons/icon_location.svg" alt="Location Icon" className="w-4 h-4 mr-2" />
        {location}
      </div>
      <div className="text-gray-500 mb-4 flex items-center">
        <img src="/icons/eventicons/icon_user.svg" alt="Participants Icon" className="w-4 h-4 mr-2" />
        {participants}
      </div>
      <button className="bg-[#2D5AA1] text-white px-4 py-2 rounded-[15px] hover:bg-blue-700 transition">
        {buttonText}
      </button>
    </div>
  </div>
);

const eventInfo = () => {
  return (
    <section
      className={
        "min-h-[600px] w-full flex flex-col align-middle text-center overflow-hidden " +
        poppins500.className
      }
    >
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {events.map((event, index) => (
          <EventCard
            key={index}
            buttonText={event.buttonText}
            imageUrl={event.imageUrl}
            eventType={event.eventType}
            date={event.date}
            location={event.location}
            participants={event.participants}
            eventTitle={event.eventTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default eventInfo;
