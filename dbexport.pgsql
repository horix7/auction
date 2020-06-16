--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bidata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bidata (
    id integer NOT NULL,
    name character varying(255),
    username character varying(8000),
    email character varying(255),
    product character varying(255),
    "time" character varying(255),
    payment character varying(255),
    revenue character varying(255),
    fortunes character varying(255),
    phone character varying(255)
);


ALTER TABLE public.bidata OWNER TO postgres;

--
-- Name: bidata_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bidata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bidata_id_seq OWNER TO postgres;

--
-- Name: bidata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bidata_id_seq OWNED BY public.bidata.id;


--
-- Name: bids; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bids (
    id integer NOT NULL,
    product character varying(255),
    bids character varying(8000),
    madeby character varying(255),
    revenue character varying(255),
    "time" character varying(255)
);


ALTER TABLE public.bids OWNER TO postgres;

--
-- Name: bids_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bids_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bids_id_seq OWNER TO postgres;

--
-- Name: bids_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bids_id_seq OWNED BY public.bids.id;


--
-- Name: nowdata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nowdata (
    paymomo character varying(1000),
    date character varying(255),
    id integer NOT NULL
);


ALTER TABLE public.nowdata OWNER TO postgres;

--
-- Name: nowdata_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nowdata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nowdata_id_seq OWNER TO postgres;

--
-- Name: nowdata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nowdata_id_seq OWNED BY public.nowdata.id;


--
-- Name: productreq; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productreq (
    id integer NOT NULL,
    name character varying(255),
    price character varying(255),
    target character varying(255),
    winners character varying(255),
    picture character varying(8000),
    date character varying(255),
    hour character varying(255),
    type character varying(255)
);


ALTER TABLE public.productreq OWNER TO postgres;

--
-- Name: productreq_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.productreq_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.productreq_id_seq OWNER TO postgres;

--
-- Name: productreq_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productreq_id_seq OWNED BY public.productreq.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255),
    price character varying(255),
    target character varying(255),
    tickets character varying(255),
    winners character varying(255),
    picture character varying(8000),
    date character varying(255),
    hour character varying(255),
    current character varying(8000),
    sold character varying(8000),
    status character varying(255),
    type character varying(255),
    vendor character varying(255)
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(255),
    secondname character varying(255),
    email character varying(255),
    phone character varying(255),
    password character varying(255),
    address character varying(255),
    isadmin character varying(255),
    gender character varying(255),
    age integer,
    vendor character varying(255),
    date character varying(255),
    picture character varying(1000),
    country character varying(255),
    countrycode character varying(255),
    store character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: vendpro; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vendpro (
    id integer NOT NULL,
    name character varying(255),
    store character varying(255),
    winners character varying(255),
    hour character varying(255),
    date character varying(255),
    price character varying(255),
    picture character varying(2000)
);


ALTER TABLE public.vendpro OWNER TO postgres;

--
-- Name: vendpro_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vendpro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vendpro_id_seq OWNER TO postgres;

--
-- Name: vendpro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vendpro_id_seq OWNED BY public.vendpro.id;


--
-- Name: vendreq; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vendreq (
    id integer NOT NULL,
    sells character varying(255),
    address character varying(255),
    store character varying(255),
    account character varying(255),
    phone character varying(255),
    email character varying(255),
    verified character varying(255)
);


ALTER TABLE public.vendreq OWNER TO postgres;

--
-- Name: vendreq_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vendreq_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vendreq_id_seq OWNER TO postgres;

--
-- Name: vendreq_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vendreq_id_seq OWNED BY public.vendreq.id;


--
-- Name: winners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.winners (
    id integer NOT NULL,
    name character varying(255),
    username character varying(255),
    age character varying(255),
    email character varying(255),
    product character varying(255),
    fortune character varying(255),
    date character varying(255)
);


ALTER TABLE public.winners OWNER TO postgres;

--
-- Name: winners_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.winners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.winners_id_seq OWNER TO postgres;

--
-- Name: winners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.winners_id_seq OWNED BY public.winners.id;


--
-- Name: wins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wins (
    id integer NOT NULL,
    name character varying(255),
    quote character varying(255),
    location character varying(255),
    product character varying(255),
    price character varying(255),
    picture character varying(8000),
    video character varying(255),
    audion character varying(255)
);


ALTER TABLE public.wins OWNER TO postgres;

--
-- Name: wins_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.wins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wins_id_seq OWNER TO postgres;

--
-- Name: wins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.wins_id_seq OWNED BY public.wins.id;


--
-- Name: bidata id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bidata ALTER COLUMN id SET DEFAULT nextval('public.bidata_id_seq'::regclass);


--
-- Name: bids id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bids ALTER COLUMN id SET DEFAULT nextval('public.bids_id_seq'::regclass);


--
-- Name: nowdata id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nowdata ALTER COLUMN id SET DEFAULT nextval('public.nowdata_id_seq'::regclass);


--
-- Name: productreq id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productreq ALTER COLUMN id SET DEFAULT nextval('public.productreq_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: vendpro id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendpro ALTER COLUMN id SET DEFAULT nextval('public.vendpro_id_seq'::regclass);


--
-- Name: vendreq id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendreq ALTER COLUMN id SET DEFAULT nextval('public.vendreq_id_seq'::regclass);


--
-- Name: winners id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winners ALTER COLUMN id SET DEFAULT nextval('public.winners_id_seq'::regclass);


--
-- Name: wins id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wins ALTER COLUMN id SET DEFAULT nextval('public.wins_id_seq'::regclass);


--
-- Data for Name: bidata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bidata (id, name, username, email, product, "time", payment, revenue, fortunes, phone) FROM stdin;
1	paul	test	paul@paul.paul	firstOne	2020-06-04T08:11:45.857-07:00	07846772931	20240	2	2131
2	paul	test	paul@paul.paul	firstOne	2020-06-04T08:24:03.059-07:00	07846772931	20240	2	2131
3	paul	test	paul@paul.paul	firstOne	2020-06-04T08:24:19.867-07:00	07846772931	20240	2	2131
4	paul	test	paul@paul.paul	firstOne	2020-06-04T08:25:38.734-07:00	07846772931	20240	2	2131
5	paul	test	paul@paul.paul	firstOne	2020-06-04T08:25:58.285-07:00	07846772931	20240	2	2131
6	paul	test	paul@paul.paul	firstOne	2020-06-04T08:26:24.437-07:00	07846772931	20240	2	2131
7	paul	test	paul@paul.paul	firstOne	2020-06-04T08:28:15.350-07:00	07846772931	20240	2	2131
8	paul	test	paul@paul.paul	firstOne	2020-06-04T08:28:47.961-07:00	07846772931	20240	2	2131
9	paul	test	paul@paul.paul	firstOne	2020-06-04T08:32:27.178-07:00	07846772931	20240	2	2131
10	paul	test	paul@paul.paul	firstOne	2020-06-04T08:33:05.754-07:00	07846772931	20240	2	2131
11	paul	test	paul@paul.paul	firstOne	2020-06-04T08:35:01.277-07:00	07846772931	20240	2	2131
12	paul	test	paul@paul.paul	firstOne	2020-06-04T08:36:30.044-07:00	07846772931	20240	2	2131
13	paul	test	paul@paul.paul	firstOne	2020-06-04T08:36:47.367-07:00	07846772931	20240	2	2131
14	paul	p123aul	paul@paul.paul	firstOne	2020-06-07T02:28:05.108-07:00	07846772931	20240	2	2131
15	paul	p123aul	paul@paul.paul	firstOne	2020-06-07T02:29:20.418-07:00	07846772931	20240	2	2131
16	paul	p123aul	paul@paul.paul	firstOne	2020-06-07T08:09:41.428-07:00	07846772931	20240	2	2131
17	paul	p123aul	paul@paul.paul	21312d	2020-06-07T09:05:27.177-07:00	07846772931	20240	2	2131
18	mnmnmnmnm	r	nbnvbjhh@jnkjhkjkj	21312d	2020-06-07T09:16:40.670-07:00	07846772931	20240	2	11112
19	mnmnmnmnm	r	nbnvbjhh@jnkjhkjkj	21312d	2020-06-07T09:17:19.681-07:00	07846772931	20240	2	11112
20	mnmnmnmnm	r	nbnvbjhh@jnkjhkjkj	21312d	2020-06-07T09:40:56.204-07:00	07846772931	20240	2	11112
21	mnmnmnmnm	r	nbnvbjhh@jnkjhkjkj	21312d	2020-06-07T09:41:56.823-07:00	07846772931	20240	2	11112
22	mnmnmnmnm	r	nbnvbjhh@jnkjhkjkj	21312d	2020-06-07T09:42:37.040-07:00	07846772931	20240	2	11112
23	mnmnmnmnm	r	nbnvbjhh@jnkjhkjkj	firstOne	2020-06-07T10:49:35.461-07:00	07846772931	20240	2	11112
24	mnmnmnmnm	r	nbnvbjhh@jnkjhkjkj	21312d	2020-06-07T11:00:25.560-07:00	07846772931	20240	2	11112
25	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:20:52.954-07:00	07846772931	20240	2	2131
26	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:22:31.622-07:00	07846772931	20240	2	2131
27	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:23:05.093-07:00	07846772931	20240	2	2131
28	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:23:23.006-07:00	07846772931	20240	2	2131
29	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:24:03.210-07:00	07846772931	20240	2	2131
30	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:26:42.848-07:00	07846772931	20240	2	2131
31	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:27:22.487-07:00	07846772931	20240	2	2131
32	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:28:12.298-07:00	07846772931	20240	2	2131
33	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:28:25.860-07:00	07846772931	20240	2	2131
34	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:28:59.165-07:00	07846772931	20240	2	2131
35	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:29:35.805-07:00	07846772931	20240	2	2131
36	paul	p123aul	paul@paul.paul	firstOne	2020-06-13T02:29:43.550-07:00	07846772931	20240	2	2131
\.


--
-- Data for Name: bids; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bids (id, product, bids, madeby, revenue, "time") FROM stdin;
1	16	[1668]	42	20240	2020-06-07T09:40:56.157-07:00
2	16	[4771]	42	20240	2020-06-07T09:41:56.772-07:00
3	16	[2009]	42	20240	2020-06-07T09:42:37.010-07:00
4	15	[9477,9145,6323,2489]	42	20240	2020-06-07T10:49:35.429-07:00
5	17	[9477,9145,6323,2489]	42	20240	2020-06-07T11:00:25.525-07:00
6	54	[1062,1020,1377]	2	20240	2020-06-13T02:15:05.577-07:00
7	54	[1062,1020,1377]	2	20240	2020-06-13T02:16:32.139-07:00
8	54	[1062,1020,1377]	2	20240	2020-06-13T02:20:52.902-07:00
9	54	[]	2	20240	2020-06-13T02:22:31.577-07:00
10	54	[]	2	20240	2020-06-13T02:23:05.078-07:00
11	54	[22312]	2	20240	2020-06-13T02:23:22.984-07:00
12	53	[1062,1020,1377,22312]	2	20240	2020-06-13T02:24:03.195-07:00
13	53	[1062,1377,22312]	2	20240	2020-06-13T02:26:42.830-07:00
14	53	[1062,1377,22312]	2	20240	2020-06-13T02:27:22.465-07:00
15	53	[1062,1377,22312]	2	20240	2020-06-13T02:28:12.260-07:00
16	53	[1062,1377,22312]	2	20240	2020-06-13T02:28:25.842-07:00
17	53	[1062112,1377,22312]	2	20240	2020-06-13T02:28:59.150-07:00
18	53	[1444,1464,1831]	2	20240	2020-06-13T02:29:35.794-07:00
19	53	[]	2	20240	2020-06-13T02:29:43.532-07:00
\.


--
-- Data for Name: nowdata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nowdata (paymomo, date, id) FROM stdin;
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjIwODY3NywiZXhwaXJlcyI6IjIwMjAtMDYtMTUgMDg6MTE6MTciLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.wIMMej9b-GB9uugIlA1zQWiuko2xhjjQl8Vb0VW1lTo	1592122277593	1
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjIwODY5NiwiZXhwaXJlcyI6IjIwMjAtMDYtMTUgMDg6MTE6MzYiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ._LaCoLZU6GBu83NjtSE6vugM11sxbQ1JPivjlwyf1Ng	1592122295917	2
\.


--
-- Data for Name: productreq; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productreq (id, name, price, target, winners, picture, date, hour, type) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, price, target, tickets, winners, picture, date, hour, current, sold, status, type, vendor) FROM stdin;
63	realmA	0.03	\N	12	1221	http://localhost:5000/uploads/1592147556499-apple-macbook-air-2020-core-i5-review-the-best-macbook-you-can-get-no.jpg	2020-06-16	22:12	[1891,1407,1368,1904,1615,1975,1481,1439,1234,1968,1495,1290]	\N	\N	\N	admin
66	real!131	0.03	\N	12	32	http://localhost:5000/uploads/1592157181215-IMG_0694.JPG	2020-06-16	22:54	[1491,1257,1344,1744,1724,1119,1960,1847,1188,1588,1421,1963]	\N	\N	\N	admin
67	producName	0.03	\N	21	12	http://localhost:5000/uploads/1592157358009-2 pac  (2).jpg	2020-06-28	10:58	[1691,1627,1117,1484,1084,1761,1910,1652,1353,1664,1275,1676,1760,1160,1466,1690,1589,1656,1230,1590,1535]	\N	\N	\N	kGl
68	producName	0.03	\N	21	12	http://localhost:5000/uploads/1592157358009-2 pac  (2).jpg	2020-06-28	10:58	[1269,1293,1917,1185,1101,1937,1803,1148,1856,1546,1393,1394,1740,1963,1779,1578,1478,1955,1261,1060,1497]	\N	\N	\N	kGl
65	realmA	0.03	\N	6	1221	http://localhost:5000/uploads/1592147556499-apple-macbook-air-2020-core-i5-review-the-best-macbook-you-can-get-no.jpg	2020-06-16	22:12	[1864,1618,1350,1590,1471,1914]	\N	\N	\N	admin
58	realm	0.03	\N	4	2	http://localhost:5000/uploads/1592133594570-2 pac  (2).jpg	2020-06-16	16:20	[1977,1957,1967,1231]	\N	\N	Second Hand	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, firstname, secondname, email, phone, password, address, isadmin, gender, age, vendor, date, picture, country, countrycode, store) FROM stdin;
42	mnmnmnmnm	r	nbnvbjhh@jnkjhkjkj	11112	11111	\N	\N	male	442	\N	Jun 07 2020	\N	\N	\N	\N
43	Tryna	Tryna	Tryna@Tryna	12213123	Tryna	\N	\N	male	112	\N	Jun 12 2020	http://localhost:5000/uploads/1591994046457-apple-macbook-air-2020-core-i5-review-the-best-macbook-you-can-get-no.jpg	\N	\N	\N
44	rela 	rela 	rela@rela	213	rela rela 	\N	\N	male	12	\N	Jun 12 2020	http://localhost:5000/uploads/1591994106768-2 pac  (2).jpg	\N	\N	\N
45	mnmnmnmnm	11	1@jnkjhkjkj	11112	mhjhjhbhnh	\N	\N	male	442	\N	Jun 14 2020	\N	rwanda	250	\N
46	121	1212	21221@12	212	1212112	\N	\N	female	1212	\N	Jun 14 2020	\N	Rwanda	250	\N
40	benokolie	ben1	ben@gmail.com	07334342222	123456	\N	\N	male	22	true	Jun 06 2020	no Pic Now 	\N	\N	\N
48	keke	12123	real@ma	2112	1234567890	\N	\N	male	12	true	Jun 14 2020	\N	Rwanda	1268	\N
47	rewr	real	email@email.com	212132	12213123	\N	\N	male	2321	true	Jun 14 2020	\N	Rwanda	376	\N
49	realName 	secondHola	12312@qdmdand	3123123	1212312	\N	\N	male	12	\N	Jun 14 2020	\N	Rwanda	250	\N
50	ManMA	reAlMAn 	tueday@email.com	9302193	12323123	\N	\N	male	21	\N	Jun 14 2020	\N	Rwanda	250	\N
35	test	test	test@test.test	1	11111	kigali Rwanda 	\N	male	1	true	Jun 06 2020	http://localhost:5000/uploads/1591991792062-2020-mercedes-benz-cls-class-mmp-1-1572628347.jpg	\N	\N	kGl
34	realMan	man	213@112qq	21123	21321231	\N	\N	male	1222	\N	Jun 06 2020	\N	\N	\N	\N
36	mnmnmnmnm	bnbngbuhbk	nbnvbjhbjh@jnkjhkjkj	11112	mhjhjhbhnh	\N	\N	male	442	\N	Jun 06 2020	\N	\N	\N	\N
37	djkjad	sdasd	213@12312	21312	213213123	\N	\N	male	12	\N	Jun 06 2020	\N	\N	\N	\N
38	tehew	ewr	12321312@dndna	2112	123123	\N	\N	male	12	\N	Jun 06 2020	\N	\N	\N	\N
41	mnm	mnmnmnmm	hghgg@ghj	4342	nmnmnbnnmnmnm	\N	\N	male	676	\N	Jun 07 2020	\N	\N	\N	\N
39	muhire kevin 	kevin	emailPkevin@gmail.com	324332982123	1111111111	\N	True	male	23	true	Jun 06 2020	\N	\N	\N	\N
\.


--
-- Data for Name: vendpro; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vendpro (id, name, store, winners, hour, date, price, picture) FROM stdin;
\.


--
-- Data for Name: vendreq; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vendreq (id, sells, address, store, account, phone, email, verified) FROM stdin;
11	Shoes 	kigali Rwanda 	kGl	test	1	test@test.test	true
\.


--
-- Data for Name: winners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.winners (id, name, username, age, email, product, fortune, date) FROM stdin;
16	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9477	2020-06-07T10:49:35.429-07:00
17	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9145	2020-06-07T10:49:35.429-07:00
18	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	2489	2020-06-07T10:49:35.429-07:00
19	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9145	2020-06-07T10:49:35.429-07:00
20	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	6323	2020-06-07T10:49:35.429-07:00
21	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9145	2020-06-07T10:49:35.429-07:00
22	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	6323	2020-06-07T10:49:35.429-07:00
23	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	2489	2020-06-07T10:49:35.429-07:00
24	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9477	2020-06-07T10:49:35.429-07:00
25	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9145	2020-06-07T10:49:35.429-07:00
26	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	6323	2020-06-07T10:49:35.429-07:00
27	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	2489	2020-06-07T10:49:35.429-07:00
28	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9477	2020-06-07T10:49:35.429-07:00
29	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9145	2020-06-07T10:49:35.429-07:00
30	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9477	2020-06-07T10:49:35.429-07:00
31	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	6323	2020-06-07T10:49:35.429-07:00
32	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	2489	2020-06-07T10:49:35.429-07:00
33	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9477	2020-06-07T10:49:35.429-07:00
34	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9145	2020-06-07T10:49:35.429-07:00
35	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	6323	2020-06-07T10:49:35.429-07:00
36	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9145	2020-06-07T10:49:35.429-07:00
37	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	6323	2020-06-07T10:49:35.429-07:00
38	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	2489	2020-06-07T10:49:35.429-07:00
39	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	4771	2020-06-07T09:41:56.772-07:00
40	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	2009	2020-06-07T09:42:37.010-07:00
41	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	4771	2020-06-07T09:41:56.772-07:00
42	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	2009	2020-06-07T09:42:37.010-07:00
43	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	1668	2020-06-07T09:40:56.157-07:00
44	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	4771	2020-06-07T09:41:56.772-07:00
45	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9477	2020-06-07T10:49:35.429-07:00
46	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	9145	2020-06-07T10:49:35.429-07:00
47	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	firstOne	2489	2020-06-07T10:49:35.429-07:00
48	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	1668	2020-06-07T09:40:56.157-07:00
49	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	2009	2020-06-07T09:42:37.010-07:00
50	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	4771	2020-06-07T09:41:56.772-07:00
51	mnmnmnmnm	r	442	nbnvbjhh@jnkjhkjkj	21312d	2009	2020-06-07T09:42:37.010-07:00
\.


--
-- Data for Name: wins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.wins (id, name, quote, location, product, price, picture, video, audion) FROM stdin;
18	New Pro Mwmbwe Now 	No Onws Missed Now Where or whenaver 	NO HERE 	ICE CREAM 	200 RWF ----	http://localhost:5000/uploads/1591972398457-IMG-20181203-WA0000.jpg	hOMElAND 	SJDKASJDKJADSA
19	Muhire kevin	 Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method	Kigali Rwanda	MacBook	0.23 $	http://localhost:5000/uploads/1591982774721-2 pac .jpg	https://www.youtube.com/watch?v=9Vfplo_xxVs	https://www.youtube.com/watch?v=dMGy_7iBTeE
20	12321	23123	32131	312321	321312	http://localhost:5000/uploads/1592133639829-2 pac .jpg	321312	321312
21	names1	twelve	home aline	home	20102	http://localhost:5000/uploads/1592133701706-2 pac .jpg	home	again
\.


--
-- Name: bidata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bidata_id_seq', 36, true);


--
-- Name: bids_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bids_id_seq', 19, true);


--
-- Name: nowdata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nowdata_id_seq', 2, true);


--
-- Name: productreq_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productreq_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 68, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 50, true);


--
-- Name: vendpro_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vendpro_id_seq', 10, true);


--
-- Name: vendreq_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vendreq_id_seq', 11, true);


--
-- Name: winners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.winners_id_seq', 51, true);


--
-- Name: wins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.wins_id_seq', 21, true);


--
-- Name: bidata bidata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bidata
    ADD CONSTRAINT bidata_pkey PRIMARY KEY (id);


--
-- Name: bids bids_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bids
    ADD CONSTRAINT bids_pkey PRIMARY KEY (id);


--
-- Name: nowdata nowdata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nowdata
    ADD CONSTRAINT nowdata_pkey PRIMARY KEY (id);


--
-- Name: productreq productreq_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productreq
    ADD CONSTRAINT productreq_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: vendpro vendpro_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendpro
    ADD CONSTRAINT vendpro_pkey PRIMARY KEY (id);


--
-- Name: vendreq vendreq_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendreq
    ADD CONSTRAINT vendreq_pkey PRIMARY KEY (id);


--
-- Name: winners winners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winners
    ADD CONSTRAINT winners_pkey PRIMARY KEY (id);


--
-- Name: wins wins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wins
    ADD CONSTRAINT wins_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

