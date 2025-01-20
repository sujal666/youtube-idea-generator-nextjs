# VidGenie: AI-Powered YouTube Content Generator  

VidGenie is a full-stack application tailored for YouTube content creators to generate actionable video ideas using AI-driven insights. This app combines advanced YouTube data scraping and content ideation to supercharge your content creation process.  

---

## 🚀 Features  

- **YouTube Data Scraping**: Fetch complete channel data including video titles, thumbnails, descriptions, likes, views, and comments.  
- **AI-Driven Ideation**: Generate next-video ideas based on existing video data and comments using CrewAI/OpenAI.  
- **Idea Ranking**: Rank and score video ideas to prioritize impactful content.  
- **Research Links**: Get suggestions for similar video topics to refine your content strategy.  
- **Secure Authentication**: Account creation and login with Clerk for user management.  

---

## 📖 Workflow  

### 1. **Landing Page**  
   - The application begins with a visually appealing landing page.  
   - Click on the **"Get Started"** button to create an account or log in using Clerk authentication.  

---

### 2. **User Dashboard (Videos Page)**  
   - Upon logging in, the user is directed to the **Videos Page**, which is initially empty.  
   - **Add a YouTube Channel**:  
     - Input the YouTube channel URL in the designated field.  
   - **Scrape Button**:  
     - Click the **Scrape** button to fetch data from the specified YouTube channel.  
     - The app uses the YouTube Data API to retrieve the following details for every video on the channel:  
       - Video Title  
       - Thumbnail  
       - Description  
       - Number of Likes  
       - Number of Views  
       - Number of Comments  
       - List of Comments  

   - All scraped videos are displayed on the **Videos Page** in a tabular or grid format for easy viewing.  

---

### 3. **Generate Ideas**  
   - Navigate to the **"Generate Ideas"** page from the dashboard.  
   - Click on the **"Generate Ideas"** button. This triggers the backend workflow:  
     - **Data Analysis**:  
       - The backend processes the fetched videos and the top 50 comments from each video.  
       - CrewAI/OpenAI analyzes the video content and user comments to identify trends, audience preferences, and potential new topics.  
     - **Idea Generation**:  
       - AI generates multiple ideas for the next video, including:  
         - Suggested video titles.  
         - Detailed video descriptions.  
         - Topic ideas.  
         - Relevant research links (videos on similar topics from YouTube).  
     - **Scoring**:  
       - Each idea is assigned a score based on its potential impact and relevance to the audience.  

   - The results are displayed in a structured format, showing:  
     - The idea title.  
     - Description.  
     - Research links.  
     - The assigned score.  

---

### 4. **Research & Finalize**  
   - Explore the research links provided by the AI to gain further insights on similar topics.  
   - Choose the highest-scoring idea and use it as inspiration for the next video.  

---

### 5. **Optional: Monitoring and Updates**  
   - The app can be extended to allow users to monitor engagement for the newly uploaded video and refine future ideas based on updated analytics.  

---

## 🛠️ Tech Stack  

- **Frontend**: Next.js, TailwindCSS, Shadcn  
- **Backend**: Node.js, Drizzle ORM, CrewAI/OpenAI  
- **Database**: Neon (Serverless PostgreSQL)  
- **API Integration**: YouTube Data API  
- **Authentication**: Clerk  

---


## 📸 Screenshots

### 1. Landing Page
![Landing Page](./public/assets/Screenshot%202025-01-20%20043548.png)

### 2. Videos Page
![Videos Page](./public/assets/Screenshot%202025-01-20%20043621.png),(./public/assets/Screenshot%202025-01-20%20043621.png)

### 3. Generate Ideas Page
![Generate Ideas Page](https://via.placeholder.com/800x400)

### 4. Idea Suggestions
![Idea Suggestions](https://via.placeholder.com/800x400)

