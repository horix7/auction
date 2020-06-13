CREATE TABLE users(
id SERIAL  PRIMARY KEY ,
firstname VARCHAR(255),
secondname VARCHAR(255),
email VARCHAR(255),
phone VARCHAR(255),
password VARCHAR(255),
address VARCHAR(255),
isadmin VARCHAR(255),
gender VARCHAR(255),
age INT,
vendor VARCHAR(255),
date VARCHAR(255)

);

CREATE TABLE vendreq(
id SERIAL  PRIMARY KEY ,
sells VARCHAR(255),
address VARCHAR(255),
store VARCHAR(255),
account VARCHAR(255),
phone VARCHAR(255),
email VARCHAR(255)

);


CREATE TABLE products(
id SERIAL  PRIMARY KEY ,
name VARCHAR(255),
price VARCHAR(255),
target VARCHAR(255),
tickets VARCHAR(255),
winners VARCHAR(255),
picture VARCHAR(8000),
date VARCHAR(255),
hour VARCHAR(255),
current VARCHAR(8000),
sold VARCHAR(8000),
status VARCHAR(255),
type VARCHAR(255)


);

CREATE TABLE productreq(
id SERIAL  PRIMARY KEY ,
name VARCHAR(255),
price VARCHAR(255),
target VARCHAR(255),
winners VARCHAR(255),
picture VARCHAR(8000),
date VARCHAR(255),
hour VARCHAR(255),
type VARCHAR(255)

);


CREATE TABLE wins(
id SERIAL  PRIMARY KEY ,
name VARCHAR(255),
quote VARCHAR(255),
location  VARCHAR(255),
product VARCHAR(255),
price VARCHAR(255),
picture VARCHAR(8000),
video VARCHAR(255),
audion VARCHAR(255)

);


CREATE TABLE bids(
id SERIAL  PRIMARY KEY ,
product VARCHAR(255),
bids VARCHAR(8000),
madeby VARCHAR(255),
revenue VARCHAR(255),
time VARCHAR(255)

);


CREATE TABLE bidata(
id SERIAL  PRIMARY KEY ,
name VARCHAR(255),
username VARCHAR(255),
email VARCHAR(255),
product VARCHAR(255),
time VARCHAR(255),
payment VARCHAR(255),
revenue VARCHAR(255),
fortunes VARCHAR(255)

);



CREATE TABLE winners(
id SERIAL  PRIMARY KEY ,
name VARCHAR(255),
username VARCHAR(255),
age VARCHAR(255),
email  VARCHAR(255),
product  VARCHAR(255),
fortune  VARCHAR(255),
date  VARCHAR(255)

);


CREATE TABLE vendPro(
id SERIAL  PRIMARY KEY ,
name VARCHAR(255),
store VARCHAR(255),
winners VARCHAR(255),
hour  VARCHAR(255),
date  VARCHAR(255),
price  VARCHAR(255),
image VARCHAR(2000)
);



 alter table users add column country-code varchar(255);
  alter table users add column country varchar(255);