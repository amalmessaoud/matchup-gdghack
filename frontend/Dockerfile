# Use Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the frontend
RUN npm run build

# Install a simple web server to serve the built files
RUN npm install -g serve

# Expose frontend port (leave it at 5173 if using Vite, otherwise use 3001 for React)
EXPOSE 5173

# Serve the built React app
CMD ["serve", "-s", "dist", "-l", "5173"]
