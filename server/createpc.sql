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
  fid SMALLINT PRIMARY KEY,
  fname VARCHAR(8),
  laptopCount INT
);

INSERT INTO laptop_family VALUES(10,'联想',2);
INSERT INTO laptop_family VALUES(20,'戴尔',2);
INSERT INTO laptop_family VALUES(30,'小米',3);