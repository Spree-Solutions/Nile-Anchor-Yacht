FROM node:10-alpine AS builder
ENV NODE_OPTIONS=--max_old_space_size=4096
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
# COPY package-lock.json .
# RUN npm upgrade -g
RUN npm install
# Copy app files
COPY . .
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
