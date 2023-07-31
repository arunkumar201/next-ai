FROM node
MAINTAINER ARUN KUMAR

WORKDIR /user/app
COPY  . .
RUN npm install --production
RUN npm run build 

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

CMD ['npm','run start']

