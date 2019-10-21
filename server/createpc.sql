#设置客户端连接服务器端编码
SET NAMES UTF8;

#丢弃数据库，如果存在
DROP DATABASE IF EXISTS ycpc;

#创建数据库，设置编码
CREATE DATABASE ycpc CHARSET=UTF8;

#进入创建的数据库
USE ycpc;

#创建保存用户信息表
CREATE TABLE userInfo(
  uid BIGINT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(11),
  uphone BIGINT,
  upwd VARCHAR(11)
);

INSERT INTO userInfo VALUES(10,'余成',13036592217,"1");
INSERT INTO userInfo VALUES(20,'李静',13036592217,"1");
INSERT INTO userInfo VALUES(30,'范荣欣',13036592217,"1");