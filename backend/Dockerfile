# Use Node.js as base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# uninstall the current bcrypt modules
RUN npm uninstall bcrypt

# install the bcrypt modules for the machine
RUN npm install bcrypt

# Copy all backend files
COPY . .

# Expose the backend port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
