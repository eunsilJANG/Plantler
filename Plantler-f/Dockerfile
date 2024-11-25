# 1. Node.js 기반 이미지 사용
FROM node:18 AS build

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 의존성 파일 복사
COPY package.json package-lock.json ./

# 4. 의존성 설치
RUN npm install

# 5. 애플리케이션 코드 복사
COPY . .

# 6. 리액트 애플리케이션 빌드
RUN npm run build

# 7. Nginx로 리액트 빌드된 파일 제공
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
