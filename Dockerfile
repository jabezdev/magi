# Step 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve it using Nginx
FROM nginx:alpine
# Vite outputs to /app/dist, not /app/build
COPY --from=builder /app/dist /usr/share/nginx/html
# Optional: if you use client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
