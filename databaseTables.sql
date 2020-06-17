

CREATE TABLE bidata (
    id SERIAL,
    name varchar(255),
    username varchar(8000),
    email varchar(255),
    product varchar(255),
    "time" varchar(255),
    payment varchar(255),
    revenue varchar(255),
    fortunes varchar(255),
    phone varchar(255)
);


CREATE TABLE bids (
    id SERIAL,
    product varchar(255),
    bids varchar(8000),
    madeby varchar(255),
    revenue varchar(255),
    "time" varchar(255)
);


CREATE TABLE failed (
    id SERIAL,
    data varchar(255)
);



CREATE TABLE nowdata (
    paymomo varchar(1000),
    date varchar(255),
    id integer NOT NULL
);



CREATE TABLE productreq (
    id SERIAL,
    name varchar(255),
    price varchar(255),
    target varchar(255),
    winners varchar(255),
    picture varchar(8000),
    date varchar(255),
    hour varchar(255),
    type varchar(255)
);


CREATE TABLE products (
    id SERIAL,
    name varchar(255),
    price varchar(255),
    target varchar(255),
    tickets varchar(255),
    winners varchar(255),
    picture varchar(8000),
    date varchar(255),
    hour varchar(255),
    current varchar(8000),
    sold varchar(8000),
    status varchar(255),
    type varchar(255),
    vendor varchar(255),
    selling varchar(255)
);


CREATE TABLE users (
    id SERIAL,
    firstname varchar(255),
    secondname varchar(255),
    email varchar(255),
    phone varchar(255),
    password varchar(255),
    address varchar(255),
    isadmin varchar(255),
    gender varchar(255),
    age integer,
    vendor varchar(255),
    date varchar(255),
    picture varchar(1000),
    country varchar(255),
    countrycode varchar(255),
    store varchar(255)
);



CREATE TABLE vendpro (
    id SERIAL,
    name varchar(255),
    store varchar(255),
    winners varchar(255),
    hour varchar(255),
    date varchar(255),
    price varchar(255),
    picture varchar(2000)
);


CREATE TABLE vendreq (
    id SERIAL,
    sells varchar(255),
    address varchar(255),
    store varchar(255),
    account varchar(255),
    phone varchar(255),
    email varchar(255),
    verified varchar(255)
);


CREATE TABLE winners (
    id SERIAL,
    name varchar(255),
    username varchar(255),
    age varchar(255),
    email varchar(255),
    product varchar(255),
    fortune varchar(255),
    date varchar(255)
);


CREATE TABLE wins (
    id SERIAL,
    name varchar(255),
    quote varchar(255),
    location varchar(255),
    product varchar(255),
    price varchar(255),
    picture varchar(8000),
    video varchar(255),
    audion varchar(255)
);

