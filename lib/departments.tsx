export type SubDepartment = {
    name: String;
    picName: String[];
    picImage: String[];
    description: String;
}

export type Department = {
    name: String;
    logo: String;
    slug: String;
    description: String;
    hodName: String;
    hodImage: String;
    subdivision: SubDepartment[];
    image: String[];
}

export const listDepartment: Department[] = [
    {

        name: "EDUCATION AND DEVELOPMENT",
        slug: "education-and-development",
        logo: "/icons/departments/edu.svg",
        description: "The Education and Development Department plays a multifaceted role encompassing strategic planning, meticulous data collection, efficient processing, innovative curriculum development, effective teaching methodologies, and rigorous program evaluation.",
        hodImage: "/profile/edu/MarvelM.png",
        hodName: "Marvel Martawidjaja",
        image: [],
        subdivision: [
            {
                name: "Research Division",
                description: "The Research Division develops and plan innovations that can support the progress of the Education and Development department, through developing organization’s website and conducting analysis to identify opportunities for continuous improvement.",
                picImage: ["/profile/edu/DaveCT.png"],
                picName: ["Dave Christian Thio"],
            },
            {
                name: "Educational Content",
                description: "The Educational Content Division curates, develops, and delivers a diverse range of engaging and informative learning materials. These resources are designed for fostering intellectual growth and lifelong learning.",
                picImage: ["/profile/edu/Richie.png"],
                picName: ["Richie Darylson Tandiono"],
            },
            {
                name: "Training Division",
                description: "The Training Division is dedicated to sharing knowledge through educational class and programs. With a focus on interactive learning, it empowers individuals with practical skills and valuable insights, fostering personal and professional development.",
                picImage: ["/profile/edu/Hendry.png"],
                picName: ["Hendry Setiawan"],
            }
        ],
    },
    {

        name: "CREATIVE",
        slug: "creative",
        logo: "/icons/departments/creative.svg",
        description: "Department for activists to train and develop graphic design and video editing skills through various real-world practices.",
        hodImage: "/profile/creative/Tasya.png",
        hodName: "Anastasia Jocelyn Hilman",
        image: [],
        subdivision: [
            {
                name: "Graphic Design",
                description: "Graphic Design Division is dedicated to crafting visually captivating and professional materials for a variety of needs. Our talented team specializes in creating posters, birthday cards, engaging Instagram feeds, and dynamic Instagram stories to enhance social media presence. Additionally, we design personalized lanyards, twibbons for social campaigns, and certificates for events and achievements. We also focus on promoting upcoming events with eye-catching graphics to ensure maximum reach and engagement. Our division is committed to delivering high-quality designs that effectively communicate and resonate with the target audience.",
                picImage: ["/profile/creative/Brenda.png", "/profile/creative/Michelle.png"],
                picName: ["Brenda Lukman", "Michelle Imanuela Winata"],
            },
            {
                name: "Video Creator",
                description: "Video Creator is responsible editing videos for Data Science Club contents such as YouTube videos, Video Based Learnings or Instagram contents",
                picImage: ["/profile/creative/Reyno.png"],
                picName: ["Amadeus Reyno A. N."],
            },
        ],
    },
    {

        name: "Human Capital",
        slug: "human-capital",
        logo: "/icons/departments/hc.svg",
        description: "Human Capital (HC) Department is a part of an organization that focuses on the management, development, and utilization of human resources to achieve organizational goals.",
        hodImage: "/profile/hc/Kimmy.png",
        hodName: "Kimberly Kayla Dewi",
        image: [],
        subdivision: [
            {
                name: "Event Organizer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt temporibus consequatur sed aliquid, nam esse qui enim ullam iste praesentium illo autem ratione neque illum facilis repellendus eveniet expedita, veniam minus at! Recusandae iste, asperiores tenetur, perferendis accusantium illum sint quos itaque voluptate, aut deserunt. Unde nam nemo, praesentium totam consequuntur at ad porro provident deleniti reprehenderit sit, error earum sint et placeat ipsum quibusdam ipsam nihil, rerum animi. Dolores!",
                picImage: ["/profile/hc/Geovanka.png"],
                picName: ["Geovanka Therisa K."],
            },
            {
                name: "Human Resource Development",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt temporibus consequatur sed aliquid, nam esse qui enim ullam iste praesentium illo autem ratione neque illum facilis repellendus eveniet expedita, veniam minus at! Recusandae iste, asperiores tenetur, perferendis accusantium illum sint quos itaque voluptate, aut deserunt. Unde nam nemo, praesentium totam consequuntur at ad porro provident deleniti reprehenderit sit, error earum sint et placeat ipsum quibusdam ipsam nihil, rerum animi. Dolores!",
                picImage: ["/profile/hc/Pieter.png"],
                picName: ["Pieter Effendy"],
            },
        ],
    },
    {

        name: "Media",
        slug: "media",
        logo: "/icons/departments/media.svg",
        description: "Media Department is responsible for managing social media accounts and creating content to be posted on social media for public viewing, as well as promoting the Data Science Club organization.",
        hodImage: "/profile/media/Meisa.png",
        hodName: "Meisa Kamilia",
        image: [],
        subdivision: [
            {
                name: "Content Creator",
                description: "Content Creator division is responsible for creating knowledge content to be uploaded to the Data Science Club's social media. This includes creating content for events and other interesting contents",
                picImage: ["/profile/media/Vynne.png"],
                picName: ["Verena Vynne Sentosa"],
            },
            {
                name: "Social Media Management",
                description: "Social Media Management division is responsible for managing social media of Data Science Club. Scheduling post, analytics, etc.",
                picImage: ["/profile/media/Jesslyn.png"],
                picName: ["Jesslyn Hok"],
            },
        ],
    },
    {

        name: "Public Relation",
        slug: "public-relation",
        logo: "/icons/departments/pr.svg",
        description: "Public relations is a department focused on establishing relationships with external parties. Through this department, activists will be involved in various activities such as marketing, funding, partnerships, external outreach, and other activities that will hone organizational skills and soft skills, particularly in communication.",
        hodImage: "/profile/pr/Callista.png",
        hodName: "Callista Serena Ekaputri",
        image: [],
        subdivision: [
            {
                name: "Fund Raising Division",
                description: "Responsible for creating marketing strategies, setting up sales pages, creating forms/receipts for incoming and outgoing goods, providing storage space for stock to be sold, managing reports/audits transparently to the DSC treasurer, assisting in budget preparation and monitoring expenses for the public relations department's work programs, managing the economy funding division's account, handling merchandise orders with vendors, and managing incoming order lists.",
                picImage: ["/profile/pr/Alle.png"],
                picName: ["Alleluia Rahuellah Alefika"],
            },
            {
                name: "Community Collaboration",
                description: "Responsible for connecting DSC and external parties, participating in events organized by either external or internal parties, and providing information to all DSC members about events from both external and internal parties, giving recommendations for speakers or content ideas for the media department, and communicating with external parties regarding media partnerships.",
                picImage: ["/profile/pr/Adam.png"],
                picName: ["Adam Ferdinand Malik Pawoko"],
            },
        ],
    },
]



