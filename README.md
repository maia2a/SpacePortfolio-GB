---

# Personal Portfolio

This is a personal portfolio developed using Next.js and TailwindCSS. The project is structured to be modular and scalable, with reusable components organized in a logical manner.

## Technologies Used

- **Next.js**: A React framework for web applications with hybrid rendering and static generation support.
- **TailwindCSS**: A utility-first CSS framework that allows for rapid, responsive, and modern design.
- **TypeScript**: A programming language that adds static typing to JavaScript, aiding in code maintenance and scalability.

## Folder Structure

- **app**: Contains the main files of the project, including global configuration and the main page.
  - `favicon.ico`: Site icon.
  - `globals.css`: Global CSS file for basic styles.
  - `layout.tsx`: Component that defines the main layout of the application.
  - `page.tsx`: Component for the main page.

- **components**: Contains the main components and subcomponents used in the application.
  - **main**: Main components of the site.
    - `Encryption.tsx`: Component related to encryption (possibly a specific section or feature).
    - `Footer.tsx`: Footer component displaying community links, social media, and about information.
    - `Hero.tsx`: Hero section of the homepage.
    - `NavBar.tsx`: Navigation component that includes links to different sections of the portfolio.
    - `Projects.tsx`: Component that showcases the completed projects.
    - `Skills.tsx`: Component that lists the author's skills.
    - `StarBackground.tsx`: Decorative component that adds a starry background to the site.

  - **sub**: Subcomponents used within the main components.
    - `FooterSection.tsx`: Subcomponent of the footer, responsible for rendering specific sections.
    - `HeroContent.tsx`: Subcomponent of the Hero, responsible for the textual content.
    - `ProjectCard.tsx`: Subcomponent representing individual projects in the portfolio.
    - `SkillDataProvider.tsx`: Provides data related to skills.
    - `SkillText.tsx`: Component to render skill texts.

- **constant**: Contains constant files and global configurations.
  - `index.ts`: Exports global constants used throughout the application.

- **utils**: Utility functions used in different parts of the application.
  - `motion.ts`: File containing custom animations and transitions using the `framer-motion` library (or similar).

- **public**: Directory for public files like images, fonts, etc.

## How to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd your-repo
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the project:**
   ```bash
   npm run dev
   ```
5. **Access the application:**
   - The project will be available at `http://localhost:3000`.

## Deployment

This project can be easily deployed on hosting platforms like Vercel, which provides native support for Next.js projects.

## Contributions

Contributions are welcome! Feel free to open issues and pull requests with suggestions for improvements.

---
