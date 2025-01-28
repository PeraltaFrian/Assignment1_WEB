Spirit Scribe

Overview:

Spirit Scribe is a web app created to help users explore and reflect on meaningful Bible verses while growing in their faith. The app lets users save their favorite verse. It features a responsive navigation menu, making it easy to move between different pages like the Home page, Saved Verses, Add Verse, and About Us. 

Design Choices:
When designing Spirit Scribe, several key principles were kept in mind to ensure the app is both user-friendly and visually appealing.

Responsive Design:
    • The app is optimized for various device sizes.
    • Used TailwindCSS to create a responsive layout that adapts to different screen widths.
    • A hamburger menu is used to keep the interface clean and accessible for mobile devices.
    • Smooth, user-friendly experience across all device types.
    • Local state management is used to handle the storage of Bible verses. This allows users to easily add and delete 
    their bible verses.

User-Centric Navigation:
    • Focused on creating an intuitive and simple navigation for easy user access.
    • The main sections (Home, Saved Verses, Add Verse, and About Us), are prominently displayed for easy discovery.
    • The app is fully responsive, ensuring that it provides a smooth and seamless user experience across a range of  
    devices, from desktop computers to mobile phones.
    • React Router is utilized for client-side routing, enabling fast and seamless transitions between pages without the 
    need for full-page reloads, improving both performance and user experience.
    • To make interactions more engaging and intuitive, the app includes smooth animations and transitions. These UI 
    enhancements provide a more polished, fluid experience for users as they navigate through different sections making 
    interactions more engaging and intuitive.

Color Palette:
    • Carefully selected to align with the spiritual theme of the app.
    • Blue and green tones were chosen for their associations Bible focused nature.
    • Ensured high contrast between text and background for readability, especially for users with visual impairments.

Typography:
    • Choose a font for its clarity, legibility, and wide usage across devices, ensuring text is easy to read on both 
    small and large screens.

 Features and Functionalities:
 •	Responsive Navigation Menu:
    o The navigation menu adaptable to mobile devices with a hamburger menu.
    o Quick links to key sections like Home, Saved Verses, Add Verse and About Us.
    o Smooth animations make the menu feel interactive and user-friendly.
 •	Home Page: 
    o Introduce users to the app with a welcoming hero section that communicates the purpose of Spirit Scribe 
    encouraging users to explore and engage with the content.
 •	Saved Verses and Add Verse Sections:
    o Users can easily add and delete their saved Bible verses.
    o Verses are stored securely in the local Storage.
 •	About Us Section:
    o A dedicated page that provides information about the Spirit Scribe 
 •	User Experience Enhancements:
    o Animations are used for smooth page transitions, creating a more engaging experience.
    o Thoughtful iconography helps with navigation and improves the presentation of information.
 •	Search Functionality: 
    o Feature to search from the Bible verses within the saved verses list.

Implementation Approach and Technologies Used:
    • React: A JavaScript library for building dynamic and interactive user interfaces. It allows for the creation of 
    reusable components and efficient state management.
    • React Router: This tool is used for handling navigation between different pages within the application, enabling 
    seamless transitions without the need for page reloads.
    • TailwindCSS: A utility-first CSS framework that aids in building responsive and modern designs quickly. 
    TailwindCSS provides pre-defined utility classes to style elements and ensure the application is responsive across 
    different screen sizes.
    • Heroicons: A clean and simple icon library used to incorporate meaningful and visually appealing icons throughout 
    the app. These icons enhance navigation and overall usability.
    • CSS Animations & Transitions: Implemented to improve user experience by providing smooth transitions and 
    animations, making the application feel more polished and engaging.
    • Local Storage: Used to store saved Bible verses locally within the user's browser.

Folder Structure:
    /node_modules     # Contains all the installed dependencies and packages required to run your project. 
    /public
        /images         # Contains images used in the app
    /src
        /components     # Contains reusable components JSX files and CSS that are used.
        /pages          # Separate pages like Home, SavedVerses, VersesInput, and AboutUs
        /App.js         
        /index.js       
        /index.css      
    /package.json     
    /package-lock.json
    /postcss.config.js
    /README.md
    /tailwind.config.js

The folder structure is designed to keep everything organized and easy to manage, with reusable components in /src/components, page-specific files in /src/pages, and static assets like images in /public/images. This makes the project easy to maintain and keeping things simple and clean.

How to Run the Application Locally
Prerequisites:
    • Node.js installed 
    • npm

Steps:
    1. Clone the repository
    2. Install dependencies
        npm install
    3. Run the application: Start the development server by running:
        npm start
        This will start the app on http://localhost:3000.

Dependencies
•	React: JavaScript library for building user interfaces.
•	React Router: Used for client-side routing between pages.
•	TailwindCSS: Utility-first CSS framework for responsive design.
•	Heroicons: Icon library for commonly used icons.

How to Use Spirit Scribe
Navigation Menu: 
    • Mobile View: On smaller screens, use the hamburger menu (three horizontal lines) to open a vertical sidebar with 
    navigation links.
    • Desktop/Laptop View: On larger screens, the menu appears as a horizontal bar at the top for easy access to:
        * Home
        * Saved Verses
        * Add Verse
        * About Us
Saved Verses Page
    • View Saved Verses: The Saved Verses page shows 3 default verses and any user-added verses stored in localStorage.
    • Delete Button: You can delete any custom verses, but default ones can’t be removed.    
Add Verse Page
    • Add a Verse: On the Add Verse page, type in your verse at the box, and click "Add Verse" button the verse will be 
    saved in localStorage.
About Us
    • The About Us page: gives a quick overview of the app’s mission to help users grow in faith by saving and 
    reflecting on Bible verses.

Testing Instructions:
•	Verify responsiveness: Test the app on different screen sizes (desktop, tablet, mobile) to ensure the navigation menu and layout adjust correctly.
•	Check Saved Verses functionality: Ensure that adding, deleting, and viewing verses works as expected, and that they are stored in localStorage.
•	Test Search functionality: On the Saved Verses page, test the search functionality by typing a part of a saved verse in the search input.

Inspirations:
•	Bible App : Inspired the layout and functionality of the Saved Verses page. The idea of a clean, organized view for saved Bible verses was taken from similar apps.
•	Medium: The minimalist, easy-to-read typography and clean layout were inspired by Medium’s design, which offers a distraction-free reading experience.
•	Material Design: The principles of Material Design influenced some UI elements such as buttons and input fields, providing a modern and accessible user interface.


Inspirations:
Spirit Scribe was inspired by my experience using Bible apps and daily devotional books, aiming to create a simple, accessible way to save and reflect on meaningful verses.

