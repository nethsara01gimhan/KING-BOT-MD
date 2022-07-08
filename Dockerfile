FROM node:lts-buster

RUN git clone https://github.com/nethsara01gimhan/KING-BOT-MD /root/KING-BOT-MD
WORKDIR /root/KING-BOT-MD/
ENV TZ=Asia/Colombo
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "."]
