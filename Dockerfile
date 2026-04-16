# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm install

# Copia o código e faz o build
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve
FROM nginx:stable-alpine
# Remove a configuração padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build da primeira etapa (ajuste o caminho se necessário)
# Com Angular 17+, o output padrão costuma ser dist/<projeto>/browser
COPY --from=build /app/dist/john-mota-portfolio/browser /usr/share/nginx/html

# Copia configuração customizada do nginx para lidar com rotas do Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
