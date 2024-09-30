# DSCWebsiteFrontEnd

**DSCWebsiteFrontEnd** is the official website for the Data Science Club (DSC). This platform serves as a hub for club members and aspiring data scientists to access resources, events, and information related to data science.

The website is built using **Next.js** and **Tailwind CSS**, providing a seamless and efficient user experience with server-side rendering and utility-first CSS styling.

## Features

- **Responsive Design**: The website is designed to be mobile-friendly and responsive, ensuring accessibility across various devices.
- **Event Management**: Display upcoming events, workshops, and meetups organized by the Data Science Club.
- **Resource Hub**: Access a collection of learning materials, tutorials, and resources for aspiring data scientists.
- **Member Portal**: A dedicated section for club members to log in and access exclusive content and resources.
- **Contact Form**: Easily reach out to club organizers for inquiries, collaborations, or feedback.

## Technology Stack

- **Next.js**: A powerful React framework for building server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: For making API requests to fetch data dynamically.
- **Firebase (optional)**: For real-time database and user authentication (if implemented).

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your development environment.
- AWS account and S3 Bucket set up for asset storage.
- Google Cloud account for cloud integration services.
- Basic knowledge of Next.js and React.js.

1. Clone the repository:

   ```bash
   git clone https://github.com/FelixA8/DSCWebsiteFrontEnd.git
   cd PersonalPortfolioWeb

2. Install Dependencies:

   ```bash
   npm install
   
3. Configure environment variables:
   
   Create a .env.local file to store sensitive environment variables like AWS credentials, Google Cloud API keys, etc.
   
4. Run the development server:

   ```bash
   npm run dev

Open http://localhost:3000 to view the site locally.

## Project Structure

The project is organized as follows:

```bash
src/
├── app/              # Main application logic and routing
├── components/       # Reusable components for the website
└── ui/               # User interface components and styles

