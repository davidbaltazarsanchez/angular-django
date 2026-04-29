# ===== Build Angular =====
FROM node:20-alpine AS build

WORKDIR /app

COPY frontend-angular/app/package*.json ./
RUN npm install

COPY frontend-angular/app .

RUN npx ng build --configuration=production

# ===== NGINX =====
FROM nginx:alpine

#  ELIMINA configs default
RUN rm -rf /etc/nginx/conf.d/*

# Copia TU config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copia Angular
COPY --from=build /app/dist/sitio/browser /usr/share/nginx/html