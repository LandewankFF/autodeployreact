# Stage 1: Build the React app 
FROM node:14-alpine as build 
WORKDIR /app 
COPY . /app 
RUN npm install 
RUN npm run build 

# Stage 2: Serve the React app with Nginx 
FROM nginx:alpine 

# Copy build output from previous stage 
COPY --from=build /app/build /usr/share/nginx/html 
# Expose port 80 
EXPOSE 80 

# Start nginx 
CMD ["nginx", "-g", "daemon off;"] 