#it's a set of instructions that tells Docker how to build an image.

# Get Node.js 20
FROM node:20

# Work inside the /app folder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project
COPY . .

# App runs on port 3000
EXPOSE 3000

# Run app.js
CMD ["node", "app.js"]