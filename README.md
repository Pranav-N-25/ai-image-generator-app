# SAAI Image Generator with Multi-Model Support

Welcome to the SAAI Image Generator! This advanced application leverages state-of-the-art AI models to generate stunning images based on user prompts. With multi-model support, users can choose from various AI models to suit their creative needs, making this app a versatile tool for artists, developers, and enthusiasts alike.

## Features
- **Multi-Model Support**: Choose from multiple AI models for image generation, each optimized for different styles and use cases.
- **Custom Prompts**: Generate unique images by providing detailed prompts.
- **User Authentication**: Secure user accounts with JWT-based authentication.
- **Image Management**: Save, organize, and manage your generated images in collections.
- **Responsive Design**: A modern and intuitive UI built with Tailwind CSS.
- **Developer-Friendly API**: Integrate the app's capabilities into your own projects with our RESTful API.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **AI Models**: Integrated with multiple AI models for diverse image generation capabilities.

## Installation
Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/saai-image-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd saai-image-generator
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following:
     ```env
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     AI_MODEL_API_KEY=your-ai-model-api-key
     ```
5. Start the development servers:
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server
   cd ../frontend
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:5173`.

## Usage
- **Generate Images**: Select an AI model, enter a prompt, and generate images.
- **Manage Collections**: Save and organize your favorite images.
- **User Authentication**: Sign up or log in to access personalized features.

## API Documentation
### Base URL
`http://localhost:5000/api`

### Endpoints
- **POST** `/api/images/generate`: Generate an image by specifying the model and prompt.
- **GET** `/api/users/me`: Retrieve user details.

For detailed API documentation, refer to the [Integration Guide](INTEGRATION.md).

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy coding! 🚀