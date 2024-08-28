import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

export interface EventCardProps {
  buttonText: string;
  imageUrl: string;
  eventType: string;
  date: string;
  location: string;
  participants: string;
  description: string;
  eventTitle: string;
}
export const events: EventCardProps[] = [
  {
    eventTitle: "LDKCP Gen 2 Data Science Club",
    buttonText: "Read More",
    imageUrl: "/eventsasset/ldkcp-dsc-2024.jpeg",
    eventType: "LDKCP",
    date: "21 July 2024",
    location: "Bina Nusantara University",
    participants: "12 people",
    description:
      "We had an amazing time at the LDK CP Gen-2 DSC event on Sunday, July 21st! The event was a blend of insightful leadership training, teamwork, and personal growth. Held at the M2CD Room, Binus Syahdan, the day was packed with engaging activities and informative sessions, making it a truly enriching experience for all participants.\nThe event kicked off at 11:30 AM with a warm welcome and introductions. Attendees, dressed in their sharp white shirts and black pants, brought their enthusiasm and dedication, setting the tone for a day of learning and leadership development. From interactive workshops to thought-provoking discussions, each session was designed to help us master the art of leadership and prepare for our roles in Data Science Club.\nThe energy in the room was palpable, and the sense of community was stronger than ever. We not only gained valuable insights but also forged new connections and strengthened existing ones, making the day both productive and enjoyable.🤩\nA big thank you to everyone who participated and contributed to the success of this event! Your passion and commitment were the driving forces behind its success. Let’s continue to strive for excellence and lead with confidence as we embark on this new chapter together. 🚀",
  },
  {
    eventTitle: "OUTVENTURE 2024: BEYOND BOUNDARIES",
    buttonText: "Read More",
    imageUrl: "/eventsasset/dsc-outventure-2024.jpg",
    eventType: "Outing",
    date: "17 June 2024",
    location: "Bina Nusantara University",
    participants: "15 People",
    description:
      "We had an absolute blast at Outventure 2024 on Sunday, June 16th! The event was a perfect mix of adventure, fun, and networking. From outbound activities and swimming to a variety of exciting games, we enjoyed every moment to the fullest. The day started early at BINUS Anggrek Campus, and we made our way to Outbound Sapadia for a series of thrilling activities. Everyone brought their enthusiasm and spirit, making the event a memorable experience filled with laughter and camaraderie😆✨\nThe activities were not only fun but also a great way to refresh and take a break from our daily routines. We built new connections, enjoyed delicious breakfast and lunch, and took advantage of the convenient transportation provided from the campus. Thank you to everyone who joined us and made Outventure 2024 an unforgettable experience! Your energy and participation were the highlights of the day🤩🙌🏻\nStay tuned for more events, and let’s continue to go beyond boundaries together! 🚀",
  },
  {
    eventTitle: "DSC Cascade 2024",
    buttonText: "Read More",
    imageUrl: "/eventsasset/dsc-cascade-2024.jpg",
    eventType: "Seminar",
    date: "15 June 2024",
    location: "Bina Nusantara University",
    participants: "20 people",
    description:
      "Hello, Data Enthusiasts!\n👩🏻‍💻🧑🏻‍💻👋 We had an incredible time at the DSC CASCADE event last Friday, June 14th, 2024! 🎉 Our talk show on Navigating the Social Data Seas: AI-Powered Insights and Trends was a great success, thanks to our amazing speaker, kak Nuur S. and enthusiastic participation and insightful discussions from everyone who attended. 🙌\nThroughout the session, we explored how AI can provide valuable insights and predict trends, showcasing the innovative potential of AI beyond chatbots like ChatGPT. The discussions were enlightening, and we hope everyone left with a deeper understanding of the exciting future that AI holds. 🤩💡🚀\nWe are grateful to all the attendees and speaker who made this event a success. Your participation and curiosity drive our passion for organizing such informative events. Stay tuned for more exciting events from Data Science Club😆‼",
  },
  {
    eventTitle: "Data Science Club Odyssey",
    buttonText: "Read More",
    imageUrl: "/eventsasset/dsc-journey-2024.png",
    eventType: "Company Visit",
    date: "January 2024",
    location: "Bina Nusantara University",
    participants: "50 people",
    description:
      "The Data Science Club Odyssey 2024, hosted at Binus University, brought together 30 passionate participants for an immersive workshop featuring NVIDIA. This event aimed to bridge the gap between academic learning and industry practices by offering students hands-on experience with cutting-edge data science tools and technologies. NVIDIAs involvement added a unique edge, providing participants with insights into the latest advancements in deep learning, AI, and GPU-accelerated computing.\nThroughout the workshop, participants engaged in a series of intensive sessions led by NVIDIA experts. These sessions covered a wide range of topics, including AI model development, deep learning techniques, and the application of GPU acceleration in data processing. Each session was designed to not only impart technical knowledge but also to encourage practical application, ensuring that attendees left with a deeper understanding of how to leverage these technologies in real-world scenarios.\nBeyond the technical training, the Data Science Club Odyssey 2024 fostered a sense of community among the participants. The event provided ample opportunities for networking and collaboration, allowing students to connect with like-minded peers and industry professionals. By the end of the workshop, participants had not only gained valuable skills but also established a network that will support their future endeavors in the rapidly evolving field of data science.",
  },
  {
    eventTitle: "Data Science Club Journey 2024: Bukalapak",
    buttonText: "Read More",
    imageUrl: "/eventsasset/dsc-journey-2024.png",
    eventType: "Company Visit",
    date: "January 2024",
    location: "Bina Nusantara University",
    participants: "30 people",
    description:
      "On January 2024, the Data Science Club hosted a company visit event titled Data Science Club Journey 2024: Bukalapak in Jakarta. The event attracted 50 enthusiastic participants eager to explore the world of data science within one of Indonesia leading e-commerce platforms.\nThroughout the visit, attendees were given an exclusive behind-the-scenes look at Bukalapak's cutting-edge data science operations. The day kicked off with a welcome session by the Bukalapak team, where they shared insights into the company's history, growth, and the pivotal role data science plays in their success.\nParticipants had the opportunity to engage with Bukalapak's data scientists and engineers through a series of presentations and interactive discussions. Topics covered included data-driven decision-making, machine learning applications, and the innovative technologies that power Bukalapak’s platform.\nA highlight of the visit was a guided tour of Bukalapak's headquarters, where participants observed the dynamic work environment and the tools and technologies used by the data science team. The event concluded with a Q&A session, allowing participants to delve deeper into specific areas of interest and gain valuable advice for their own data science careers.\nThe Data Science Club Journey 2024: Bukalapak event was a resounding success, providing attendees with both inspiration and practical knowledge to fuel their passion for data science.",
  },
  {
    eventTitle: "LDKA Gen 2 Data Science Club",
    buttonText: "Read More",
    imageUrl: "/eventsasset/ldka-dsc-2024.png",
    eventType: "LDKA",
    date: "January 2024",
    location: "Bina Nusantara University",
    participants: "43 people",
    description:
      "The LDKA Gen-2 Data Science Club in January 2024 was a transformative leadership training event aimed at empowering the next generation of student activists. Designed to build foundational leadership skills, the event featured a diverse curriculum focused on critical thinking, effective communication, and the core principles of leadership. The participants, eager to enhance their abilities, engaged in a series of interactive workshops and discussions that provided them with practical tools and strategies to lead with confidence and integrity.\nA highlight of the event was the keynote session by Richie Muljana, a prominent figure in the field, who shared his insights on leadership within the context of data science and beyond. His session was both inspiring and educational, offering participants a deep dive into the qualities that define a successful leader in today`s complex and fast-paced world. Muljana emphasized the importance of adaptability, vision, and the ability to communicate effectively in leading teams toward shared goals.\nThe training not only equipped the participants with essential leadership skills but also fostered a strong sense of community among the aspiring leaders. By the end of the event, participants left with a renewed sense of purpose and a clearer understanding of their roles as leaders, both within the Data Science Club and in their broader academic and professional journeys.",
  },
  {
    eventTitle: "Data Science Club Olympiad 2023",
    buttonText: "Read More",
    imageUrl: "/eventsasset/dsc-olympiad-2023.png",
    eventType: "Competition",
    date: "December 2023",
    location: "Bina Nusantara University",
    participants: "24 people",
    description:
      "The Data Science Club Olympiad 2023 at Binus University was an exciting and intellectually charged event that brought together 24 talented participants from various disciplines. These participants, all passionate about data science, gathered to demonstrate their skills and compete in a series of challenging tasks designed to test their analytical and problem-solving abilities. The Olympiad served as a unique platform for students to apply their theoretical knowledge to real-world data problems, pushing the boundaries of what they could achieve with data-driven insights.\nThroughout the competition, participants tackled a range of data challenges, from data preprocessing and analysis to predictive modeling and visualization. They worked both individually and in teams, showcasing their ability to think critically and creatively under pressure. The event emphasized not only technical expertise but also the importance of clear communication and collaboration in data science. The competitive atmosphere was balanced by a strong sense of camaraderie among the participants, who were united by their shared passion for data science.\nWith a total prize pool of 3 million Rupiah at stake, the competition was fierce, but the atmosphere remained collegial and supportive. In the end, the Olympiad not only crowned the top data science talents at Binus University but also inspired all participants to continue honing their skills and pursuing excellence in this rapidly growing field. The event underscored the critical role of data science in today’s world and left a lasting impact on everyone involved.",
  },
  {
    eventTitle: "Data Science Club Goes to School",
    buttonText: "Read More",
    imageUrl: "/eventsasset/dsc-pkm-2023.png",
    eventType: "PKM",
    date: "November 2023",
    location: "Bina Nusantara University",
    participants: "20 people",
    description:
      "In November 2023, the Data Science Club organized a five-day community outreach event titled Data Science Club Goes to School, aimed at introducing high school students to the fundamentals of data science. This event was designed to bridge the gap between high school education and the rapidly growing field of data science, providing young students with a glimpse into the world of data analysis, machine learning, and data-driven decision-making.\nOver the course of the five days, members of the Data Science Club delivered engaging and interactive lessons tailored to the high school students' level of understanding. The curriculum covered essential topics such as data collection, data cleaning, basic statistical analysis, and introductory machine learning concepts. Through hands-on activities, group exercises, and real-world examples, the high school students were able to grasp the importance of data science in various industries and everyday life.\nThe event not only aimed to educate but also to inspire the next generation of data scientists. By providing high school students with practical knowledge and exposure to data science tools, the Data Science Club hoped to ignite their interest in pursuing further studies and careers in this exciting field. Data Science Club Goes to School was a successful initiative that fostered a sense of curiosity and enthusiasm for data science among young learners, leaving a lasting impact on both the students and the participating club members.",
  },
  {
    eventTitle: "Welcoming Party Data Science Club 2023",
    buttonText: "Read More",
    imageUrl: "/eventsasset/dsc-welpar-2023.png",
    eventType: "Welcoming Party",
    date: "October 2023",
    location: "Bina Nusantara University",
    participants: "94 people",
    description:
      "In October 2023, the Data Science Club hosted a vibrant Welcoming Party at Binus University to kick off the new academic year and introduce new and returning members to the club. This engaging event aimed to foster a sense of community and excitement among participants, providing an opportunity for students to connect with fellow data science enthusiasts and learn more about the club's upcoming activities and initiatives.\nThe Welcoming Party featured a variety of interactive activities, including icebreaker games, networking sessions, and presentations on the club’s goals and plans for the year. Attendees were introduced to the club’s leadership team, learned about upcoming events and projects, and had the chance to participate in informal discussions about their interests and aspirations in data science.\nThe event was not only a platform for building connections and camaraderie but also a celebration of the club’s commitment to promoting data science education and collaboration. By creating a welcoming and inclusive atmosphere, the Data Science Club successfully set the stage for a dynamic and productive year ahead, inspiring both new and existing members to actively participate and contribute to the club’s initiatives.",
  },
  {
    eventTitle: "New Era of Data Science: Generative AI in 5.0 Industry",
    buttonText: "Read More",
    imageUrl: "/eventsasset/dsc-seminar-2023.png",
    eventType: "Seminar",
    date: "September 2023",
    location: "Bina Nusantara University",
    participants: "500 people",
    description:
      "In September 2023, the Data Science Club at Binus University hosted a highly anticipated seminar titled New Era of Data Science: Generative AI in the 5.0 Industry. The seminar featured Emmanuel Dave, a prominent data scientist at Tokopedia, as the keynote speaker. This event focused on the transformative impact of Generative AI within the context of the evolving 5.0 industry.\nDuring the seminar, Emmanuel Dave delivered an insightful presentation on the latest advancements in Generative AI and its implications for various sectors. He explored how this technology is revolutionizing data science practices, from automating content creation to enhancing predictive modeling and personalizing user experiences. Attendees gained a deeper understanding of the potential applications and challenges associated with Generative AI, as well as its role in shaping the future of industry 5.0.\nThe event provided a valuable opportunity for students, professionals, and enthusiasts to engage with cutting-edge concepts in data science and network with like-minded individuals. By featuring an expert in the field, the Data Science Club effectively highlighted the importance of staying abreast of technological advancements and preparing for the future of data-driven innovation.",
  },
];

const EventCard: React.FC<EventCardProps> = ({
  buttonText,
  imageUrl,
  eventType,
  date,
  location,
  participants,
  eventTitle,
}) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:w-[30%]">
    <img src={imageUrl} alt={eventTitle} className="w-full h-40 object-cover" />
    <div className="p-6">
      <h3 className="text-left text-md font-semibold mb-1 text-blue-600">
        [{eventType}] <span className="text-41ABC3">{eventTitle}</span>
      </h3>
      <div className="text-gray-500 mb-1 flex items-center">
        <img
          src="/icons/eventicons/icon_calendar.svg"
          alt="Date Icon"
          className="w-4 h-4 mr-2"
        />
        {date}
      </div>
      <div className="text-gray-500 mb-1 flex items-center">
        <img
          src="/icons/eventicons/icon_location.svg"
          alt="Location Icon"
          className="w-4 h-4 mr-2"
        />
        {location}
      </div>
      <div className="text-gray-500 mb-4 flex items-center">
        <img
          src="/icons/eventicons/icon_user.svg"
          alt="Participants Icon"
          className="w-4 h-4 mr-2"
        />
        {participants}
      </div>
      <Link
        href={`/events/${encodeURIComponent(
          eventTitle.toLowerCase().replace(/\s+/g, "-")
        )}`}
      >
        <button className="bg-[#2D5AA1] text-white px-4 py-2 rounded-[15px] hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </Link>
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
            description={event.description}
          />
        ))}
      </div>
    </section>
  );
};

export default eventInfo;
