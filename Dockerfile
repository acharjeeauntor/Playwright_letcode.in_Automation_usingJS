# Set the base image
FROM node:latest

# Install cross-env globally
RUN npm install -g cross-env

# Set the working directory
WORKDIR /app

# Install project dependencies
COPY package*.json ./
RUN npm install && \
    npx playwright install && \
    npx playwright install-deps

# Copy the application code
COPY . .

# Run the somke test scripts
CMD npx cross-env ENV=api npm run test:api && \
    npx cross-env ENV=functional npm run test:single


