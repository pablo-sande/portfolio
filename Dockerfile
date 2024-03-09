FROM node:lts AS runtime
WORKDIR /app
COPY package.json ./
RUN rm -rf node_modules pnpm-lock.yaml
RUN npm install -g pnpm
RUN pnpm i
COPY . .
RUN pnpm run build
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD node ./dist/server/entry.mjs