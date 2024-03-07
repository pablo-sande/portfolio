# Use an existing node image as base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

RUN npm install -g pnpm

# Install required packages
RUN pnpm install

# Copy all files to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD [ "pnpm", "start" ]