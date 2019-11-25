# FROM node:10.15.3-alpine
# MAINTAINER Charlie
# ENV NODE_ENV=production
# ENV HOST 0.0.0.0
# RUN mkdir -p /lighttink-web
# COPY . /lighttink-web
# WORKDIR /lighttink-web
# EXPOSE 3333
# #此为cnpm淘宝镜像
# RUN npm config set registry https://registry.npm.taobao.org
# RUN npm install
# RUN npm run build
# CMD ["npm", "start"]

# 拉取 node 镜像，alpine 版本包最小
FROM node:10-alpine

# 设置 maintainer
LABEL maintainer "caomeng666@foxmail.com"

# 将当前项目拷贝到镜像中的 /app 文件中
COPY . /app

# 设置 /app 为工作区
WORKDIR /app

# 执行命令
RUN yarn \
  && yarn build \
  && yarn cache clean

# 执行运行命令
CMD ["yarn","start"]

# 暴露出 3000 端口
EXPOSE 3333