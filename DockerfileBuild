# Use the official Nginx image as a base image
FROM nginx:alpine

# Copy your HTML file to the default location for Nginx
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 (optional, for documentation purposes)
EXPOSE 8080

# Command to start Nginx server
CMD ["nginx", "-g", "daemon off;"]