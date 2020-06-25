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

--
-- Name: chains; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA chains;


ALTER SCHEMA chains OWNER TO postgres;

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
    phone character varying(255),
    country character varying(255)
);


ALTER TABLE public.bidata OWNER TO postgres;

--
-- Name: bidata2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bidata2 (
    id integer NOT NULL,
    name character varying(255),
    username character varying(8000),
    email character varying(255),
    product character varying(255),
    "time" character varying(255),
    payment character varying(255),
    revenue character varying(255),
    fortunes character varying(255),
    phone character varying(255),
    country character varying(255),
    status character varying(255)
);


ALTER TABLE public.bidata2 OWNER TO postgres;

--
-- Name: bidata2_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bidata2_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bidata2_id_seq OWNER TO postgres;

--
-- Name: bidata2_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bidata2_id_seq OWNED BY public.bidata2.id;


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
-- Name: failed; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.failed (
    id integer NOT NULL,
    data character varying(255)
);


ALTER TABLE public.failed OWNER TO postgres;

--
-- Name: failed_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.failed_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.failed_id_seq OWNER TO postgres;

--
-- Name: failed_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.failed_id_seq OWNED BY public.failed.id;


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
    vendor character varying(255),
    selling character varying(255),
    published character varying(255)
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
-- Name: runnerup; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.runnerup (
    id integer NOT NULL,
    name character varying(255),
    username character varying(255),
    age character varying(255),
    email character varying(255),
    product character varying(255),
    fortune character varying(255),
    date character varying(255),
    country character varying(255)
);


ALTER TABLE public.runnerup OWNER TO postgres;

--
-- Name: runnerup_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.runnerup_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.runnerup_id_seq OWNER TO postgres;

--
-- Name: runnerup_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.runnerup_id_seq OWNED BY public.runnerup.id;


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
    verified character varying(255),
    country character varying(255),
    fullname character varying(255)
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
    date character varying(255),
    country character varying(255)
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
-- Name: bidata2 id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bidata2 ALTER COLUMN id SET DEFAULT nextval('public.bidata2_id_seq'::regclass);


--
-- Name: bids id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bids ALTER COLUMN id SET DEFAULT nextval('public.bids_id_seq'::regclass);


--
-- Name: failed id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed ALTER COLUMN id SET DEFAULT nextval('public.failed_id_seq'::regclass);


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
-- Name: runnerup id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.runnerup ALTER COLUMN id SET DEFAULT nextval('public.runnerup_id_seq'::regclass);


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

COPY public.bidata (id, name, username, email, product, "time", payment, revenue, fortunes, phone, country) FROM stdin;
188	Email11	tried	signinworks9@gmail.com	firtOne	2020-06-22T04:48:56.069-07:00	07846772931	20240	[ 1656,1761,1638,1434]	11112	rwanda
189	Email11	tried	signinworks9@gmail.com	firtOne	2020-06-22T04:49:12.541-07:00	07846772931	20240	[ 1656,1932,1638,1434]	11112	rwanda
190	Email11	tried	signinworks9@gmail.com	Now Ma	2020-06-22T05:04:03.024-07:00	07846772931	0.1	[ 1656,1932,1638,1434]	11112	rwanda
191	Email11	tried	signinworks9@gmail.com	firtOne	2020-06-22T05:10:02.772-07:00	07846772931	20240	[ 1656,1932,1638,1434]	11112	rwanda
192	Email11	tried	signinworks9@gmail.com	firtOne	2020-06-22T05:10:43.314-07:00	07846772931	20240	[ 1215,1389,34]	11112	rwanda
193	Email11	tried	signinworks9@gmail.com	firtOne	2020-06-22T05:12:58.123-07:00	07846772931	20240	[ 882,1678,1267,1446,4]	11112	rwanda
194	test	test	test@test.test	firtOne	2020-06-22T06:59:21.467-07:00	07846772931	20240	[ 882,1678,1267,1446,4]	1	rwanda
195	test	test	test@test.test	firtOne	2020-06-22T06:59:43.298-07:00	07846772931	20240	[ 1744,1840,1267,1568,4]	1	rwanda
196	test	test	test@test.test	firtOne	2020-06-22T07:36:22.590-07:00	Rwandan Mobile-money	0.12	[1504]	1	\N
197	test	test	test@test.test	testing 	2020-06-22T07:46:56.765-07:00	Rwandan Mobile-money	0.22	[1380]	1	\N
\.


--
-- Data for Name: bidata2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bidata2 (id, name, username, email, product, "time", payment, revenue, fortunes, phone, country, status) FROM stdin;
5	Email11	tried	signinworks9@gmail.com	Now Ma	2020-06-22T05:04:02.943-07:00	\N	0.1	[1656,1932,1638,1434]	25011112	\N	\N
6	Email11	tried	signinworks9@gmail.com	firtOne	2020-06-22T05:12:58.003-07:00	\N	20240	[882,1678,1267,1446,4]	25011112	\N	\N
7	Email11	tried	signinworks9@gmail.com	firtOne	2020-06-22T05:12:58.003-07:00	\N	20240	[882,1678,1267,1446,4]	25011112	rwanda	failed
8	Email11	tried	signinworks9@gmail.com	firtOne	2020-06-22T05:12:58.003-07:00	\N	20240	[882,1678,1267,1446,4]	25011112	rwanda	current
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
20	63	["1891","1407","1368","1904","1615","1975","1481","1439","1234","1968","1495","1290"]	35	0.03	2020-06-16T12:10:54.213-07:00
21	66	["1491","1257"]	35	0.03	2020-06-16T12:12:16.538-07:00
22	67	[1691,1627,1117,1484,1084,1761,1910,1652,1353,1664,1275,1676,1760,1160,1466,1690,1589,1656,1230,1590,1535]	35	0.03	2020-06-16T12:26:54.788-07:00
23	65	[1864,1618,1350,1590,1471,1914]	35	0.03	2020-06-16T12:28:46.367-07:00
24	68	[1269,1293,1917,1185,1101,1937,1803,1148,1856,1546,1393,1394,1740,1963,1779,1578,1478,1955,1261,1060,1497]	35	0.03	2020-06-16T12:31:58.357-07:00
25	66	[1344,1744,1724,1119,1960,1847,1188,1588,1421,1963]	35	0.03	2020-06-16T12:54:39.454-07:00
26	74	[1089,1945,1451]	58	100	2020-06-19T12:28:05.890-07:00
27	75	[1747,1983,1874,1048,1284]	58	0.10	2020-06-19T12:34:19.775-07:00
28	76	[1181,1350,1116,1782]	58	1	2020-06-19T12:40:48.662-07:00
29	77	[1586,1703,1435,1507]	58	20240	2020-06-19T12:44:53.230-07:00
30	77	[]	58	20240	2020-06-19T12:44:57.500-07:00
31	78	[1786,1301,1426,1849]	58	20240	2020-06-19T12:48:10.586-07:00
32	79	[1569,1903,1922]	58	20240	2020-06-19T13:20:56.125-07:00
33	80	[1007,1207,1469]	58	20240	2020-06-19T13:23:19.943-07:00
34	81	[1642,1477,1148,1969]	58	20240	2020-06-19T13:26:13.033-07:00
35	82	[1415,1702,1772,1388]	58	20240	2020-06-19T13:29:51.423-07:00
36	83	[1634,1322,1497,1637]	58	20240	2020-06-19T13:32:26.364-07:00
37	84	[1163,1976,1240,1464]	58	20240	2020-06-19T13:41:36.433-07:00
38	85	[1163,1976,1240,1464]	58	20240	2020-06-20T04:06:04.023-07:00
39	85	[1163,1976,1240,1464]	58	20240	2020-06-20T04:06:14.873-07:00
40	88	[1163,1976,1240,1464]	58	20240	2020-06-20T04:36:16.723-07:00
41	88	[677,1780,1836,1661]	58	20240	2020-06-20T04:36:36.154-07:00
42	88	[677]	58	20240	2020-06-20T04:36:38.279-07:00
43	88	[677]	58	20240	2020-06-20T04:41:02.803-07:00
44	88	[677]	58	20240	2020-06-20T04:41:57.103-07:00
45	88	[61227,1394,1039,1195,1598,1931,1575,1261,1804,1562,1908,1936661]	58	20240	2020-06-20T04:42:33.397-07:00
46	88	[61227,1394,1039,1195,1598,1931,1575,1261,1804,1562,1908,1936661]	58	20240	2020-06-20T04:42:35.741-07:00
47	88	[61227,1394,1039,1195,1598,1931,1575,1261,1804,1562,1908,1936661]	58	20240	2020-06-20T04:42:39.002-07:00
48	89	[61227,1394,1039,1195,1598,1931,1575,1261,1804,1562,1908,1936661]	58	20240	2020-06-20T04:42:49.388-07:00
49	89	[61227,1936661]	58	20240	2020-06-20T04:42:51.762-07:00
50	90	[1852,1062,1157]	58	20	2020-06-20T08:33:53.830-07:00
51	90	[1341,1919,1138,1755,1562,1660,1754,1038,1132,1632,1358,1817,1050,1786,1670,1843,1101,1574,1687,1635,1218,1151,1901,1119,1073,1505,1289,1746]	35	20	2020-06-20T08:55:41.557-07:00
52	90	[]	35	20	2020-06-20T08:56:26.948-07:00
53	90	[]	35	20	2020-06-20T08:56:37.056-07:00
54	90	[]	58	20	2020-06-20T08:58:07.268-07:00
55	91	[1329,1034,1690,1536,1317,1643,1744,1459,1276,1450,1187,1255,1381,1580,1604,1736,1054,1287,1323,1978]	35	20240	2020-06-20T09:00:21.068-07:00
56	91	[]	35	20240	2020-06-20T09:00:27.293-07:00
57	91	[]	35	20240	2020-06-20T09:00:31.170-07:00
58	91	[]	35	20240	2020-06-20T09:00:35.329-07:00
59	91	[]	35	20240	2020-06-20T09:00:44.228-07:00
60	92	[1011,1077,1496,1413,1519,1208,1487,1026,1960,1940,1293,1209,1990,1995,1045,1207,1764,1750,1409,1334]	35	20240	2020-06-20T09:07:03.809-07:00
61	92	[]	35	20240	2020-06-20T09:07:09.328-07:00
62	92	[]	35	20240	2020-06-20T09:07:13.514-07:00
63	92	[]	35	20240	2020-06-20T09:07:25.134-07:00
64	92	[]	35	20240	2020-06-20T09:07:30.698-07:00
65	92	[]	35	20240	2020-06-20T09:07:55.811-07:00
66	92	[]	35	20240	2020-06-20T09:08:10.808-07:00
67	92	[]	58	20240	2020-06-20T09:08:47.784-07:00
68	92	[]	58	20240	2020-06-20T09:08:50.493-07:00
69	92	[109]	58	20240	2020-06-20T09:08:57.306-07:00
70	93	[1122,1451,1624,1853]	35	20240	2020-06-20T09:09:43.632-07:00
71	93	[]	35	20240	2020-06-20T09:09:57.244-07:00
72	93	[10]	58	20240	2020-06-20T09:13:39.346-07:00
73	93	[1910,1235,1854]	35	20240	2020-06-20T09:21:58.902-07:00
74	93	[]	35	20240	2020-06-20T09:22:09.682-07:00
75	93	[1619,1514]	35	20240	2020-06-20T09:23:37.520-07:00
76	93	[]	35	20240	2020-06-20T09:23:51.676-07:00
77	93	[1219,1271]	35	20240	2020-06-20T09:35:52.464-07:00
78	93	[]	35	20240	2020-06-20T09:36:05.381-07:00
79	93	[]	35	20240	2020-06-20T09:36:36.807-07:00
80	93	[1119,1047]	35	20240	2020-06-20T09:43:39.885-07:00
81	93	[]	35	20240	2020-06-20T09:43:44.015-07:00
82	93	[1051]	35	20240	2020-06-20T09:45:31.329-07:00
83	93	[]	35	20240	2020-06-20T09:45:35.191-07:00
84	93	[1508]	35	20240	2020-06-20T09:52:57.381-07:00
85	93	[]	35	20240	2020-06-20T09:53:08.764-07:00
86	93	[1216,1863]	35	20240	2020-06-20T09:54:20.944-07:00
87	93	[]	35	20240	2020-06-20T09:54:31.313-07:00
88	93	[1516]	35	20240	2020-06-20T09:56:50.653-07:00
89	93	[]	35	20240	2020-06-20T09:56:54.260-07:00
90	93	[1460]	35	20240	2020-06-20T10:01:51.334-07:00
91	93	[]	35	20240	2020-06-20T10:02:02.824-07:00
92	93	[]	35	20240	2020-06-20T10:02:15.466-07:00
93	93	[1884]	35	20240	2020-06-20T10:03:12.322-07:00
94	93	[]	35	20240	2020-06-20T10:03:15.617-07:00
95	94	[1573]	35	20240	2020-06-20T10:04:19.219-07:00
96	94	[]	35	20240	2020-06-20T10:04:26.050-07:00
97	94	[]	35	20240	2020-06-20T10:04:35.195-07:00
98	94	[]	35	20240	2020-06-20T10:05:08.772-07:00
99	94	[]	35	20240	2020-06-20T10:05:14.976-07:00
100	94	[]	35	20240	2020-06-20T10:05:36.386-07:00
101	94	[1019]	35	20240	2020-06-20T10:06:51.738-07:00
102	94	[]	35	20240	2020-06-20T10:07:01.353-07:00
103	94	["1945"]	35	20240	2020-06-20T10:07:07.144-07:00
104	94	["1875"]	35	20240	2020-06-20T10:07:12.271-07:00
105	94	["1128"]	35	20240	2020-06-20T10:07:16.032-07:00
106	94	["1246"]	35	20240	2020-06-20T10:07:19.402-07:00
107	94	["1988"]	35	20240	2020-06-20T10:07:22.963-07:00
108	94	["1409"]	35	20240	2020-06-20T10:07:42.699-07:00
109	94	[1785]	35	20240	2020-06-20T10:09:19.715-07:00
110	94	[]	35	20240	2020-06-20T10:09:23.907-07:00
111	94	[]	35	20240	2020-06-20T10:09:30.080-07:00
112	94	[]	35	20240	2020-06-20T10:09:37.011-07:00
113	94	[1108]	35	20240	2020-06-20T10:11:03.595-07:00
114	94	[]	35	20240	2020-06-20T10:11:15.907-07:00
115	94	[]	35	20240	2020-06-20T10:11:21.926-07:00
116	94	[]	35	20240	2020-06-20T10:11:30.350-07:00
117	94	[1073,1352]	35	20240	2020-06-20T10:12:37.351-07:00
118	94	[]	35	20240	2020-06-20T10:12:53.188-07:00
119	94	[]	35	20240	2020-06-20T10:13:00.537-07:00
120	94	[]	35	20240	2020-06-20T10:13:06.854-07:00
121	94	[]	35	20240	2020-06-20T10:13:17.119-07:00
122	94	[]	35	20240	2020-06-20T10:13:25.544-07:00
123	94	[]	35	20240	2020-06-20T10:13:34.043-07:00
124	94	[1624]	58	20240	2020-06-20T10:14:58.443-07:00
125	94	[1624]	58	20240	2020-06-20T10:15:00.233-07:00
126	94	[]	58	20240	2020-06-20T10:15:18.614-07:00
127	94	[]	58	20240	2020-06-20T10:15:23.366-07:00
128	94	[1886]	35	20240	2020-06-20T10:18:10.559-07:00
129	94	[]	35	20240	2020-06-20T10:18:24.762-07:00
130	94	[]	35	20240	2020-06-20T10:18:36.009-07:00
131	94	[]	35	20240	2020-06-20T10:18:52.193-07:00
132	94	[1267]	35	20240	2020-06-20T10:22:57.038-07:00
133	94	[]	35	20240	2020-06-20T10:23:00.932-07:00
134	94	[]	35	20240	2020-06-20T10:23:05.344-07:00
135	94	[]	35	20240	2020-06-20T10:23:09.468-07:00
136	94	[]	35	20240	2020-06-20T10:23:14.878-07:00
137	94	[1348,1298]	35	20240	2020-06-20T10:23:50.578-07:00
138	94	[]	35	20240	2020-06-20T10:23:54.011-07:00
139	94	[]	35	20240	2020-06-20T10:24:05.971-07:00
140	94	[]	35	20240	2020-06-20T10:24:09.764-07:00
141	94	[]	35	20240	2020-06-20T10:25:36.280-07:00
142	94	[]	35	20240	2020-06-20T10:26:26.071-07:00
143	94	[]	35	20240	2020-06-20T10:26:29.663-07:00
144	94	[]	35	20240	2020-06-20T10:26:32.619-07:00
145	94	[]	35	20240	2020-06-20T10:26:36.115-07:00
146	94	[1657]	35	20240	2020-06-20T10:27:53.472-07:00
147	94	[]	35	20240	2020-06-20T10:28:05.776-07:00
148	94	[]	35	20240	2020-06-20T10:28:09.701-07:00
149	94	[]	35	20240	2020-06-20T10:28:09.708-07:00
150	94	[1582,1793]	35	20240	2020-06-20T10:28:57.128-07:00
151	94	[]	35	20240	2020-06-20T10:29:08.574-07:00
152	95	[1930,1789,1280]	35	20240	2020-06-20T10:29:42.311-07:00
153	95	[]	35	20240	2020-06-20T10:29:55.222-07:00
154	95	[]	35	20240	2020-06-20T10:29:58.897-07:00
155	95	[]	35	20240	2020-06-20T10:29:58.903-07:00
156	95	[]	35	20240	2020-06-20T10:30:04.722-07:00
157	95	[]	35	20240	2020-06-20T10:30:04.727-07:00
158	95	[]	35	20240	2020-06-20T10:30:05.044-07:00
159	95	[1426,1633]	35	20240	2020-06-20T10:32:04.033-07:00
160	95	[]	35	20240	2020-06-20T10:32:08.618-07:00
161	95	[]	35	20240	2020-06-20T10:32:13.694-07:00
162	95	[]	35	20240	2020-06-20T10:32:19.317-07:00
163	95	[]	35	20240	2020-06-20T10:32:23.402-07:00
164	95	[1812,1987]	35	20240	2020-06-20T10:37:18.505-07:00
165	95	[]	35	20240	2020-06-20T10:37:23.172-07:00
166	95	["1474","1553","1847","1785"]	35	20240	2020-06-20T10:37:39.720-07:00
167	95	["1321","1234"]	35	20240	2020-06-20T10:37:48.704-07:00
168	97	[1213,1269,1021]	58	20240	2020-06-22T04:11:29.057-07:00
169	97	[1213,1269,1021]	58	20240	2020-06-22T04:13:00.507-07:00
170	97	[]	65	20240	2020-06-22T04:24:26.508-07:00
171	97	[1656,1761,1638,1434]	65	20240	2020-06-22T04:24:55.400-07:00
172	97	[]	65	20240	2020-06-22T04:48:56.017-07:00
173	97	[1932]	65	20240	2020-06-22T04:49:12.495-07:00
174	96	[1656,1932,1638,1434]	65	0.1	2020-06-22T05:04:02.943-07:00
175	99	[1656,1932,1638,1434]	65	20240	2020-06-22T05:10:02.732-07:00
176	99	[1215,1389,34]	65	20240	2020-06-22T05:10:43.269-07:00
177	100	[882,1678,1267,1446,4]	65	20240	2020-06-22T05:12:58.003-07:00
178	100	[882,4]	35	20240	2020-06-22T06:59:21.381-07:00
179	100	[1744,1840,1568,4]	35	20240	2020-06-22T06:59:43.267-07:00
180	101	[1504]	35	0.12	2020-06-22T07:36:22.560-07:00
181	103	[1380]	35	0.22	2020-06-22T07:46:56.747-07:00
\.


--
-- Data for Name: failed; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.failed (id, data) FROM stdin;
\.


--
-- Data for Name: nowdata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nowdata (paymomo, date, id) FROM stdin;
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5Mjg0NTg4OSwiZXhwaXJlcyI6IjIwMjAtMDYtMjIgMTc6MTE6MjkiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.GZGviOD2TB90HtAAuQqCYTAQOZDcoA5iJVub0lw__Io	1592759485635	19
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkwNDc1NywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMDk6MzI6MzciLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.tVrqJb2Z-mS2gHPl7q2eA8DaitYE2c8GRG3dlGCx73M	1592818354044	20
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkwNDc2NiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMDk6MzI6NDYiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.9tkHX5sZh6WS_WiqZUR7EDS4JhYkVsRTZ15mzSKYYcI	1592818367900	21
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkwNDkxNCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMDk6MzU6MTQiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.vXGK4zPY3fYhjBJa7CDlrohp49SQDQT5vAl3-860a-0	1592818521288	22
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkwOTcwMCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTA6NTU6MDAiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.1F1AXNleJisXFQTHVbSH98adC5tmOXfpK1sXZ7KyNiY	1592823314170	23
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxMDU5NiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTE6MDk6NTYiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.y5Pyx_PI82PYxC4QHr-KVQiAYzaG9hTTHZE0CWd-Hb8	1592824201323	24
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxMDgwOCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTE6MTM6MjgiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.eaq_K_6kNGww1yh6o4g3OANqRyr6Dr2oyGcMRimMNmE	1592824430658	25
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxMDk2NSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTE6MTY6MDUiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.jDkbFBQ3tC1S-VZX0ChKJFZztTyfF_Q45XrR4WCaQxw	1592824593467	26
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxMTIzMywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTE6MjA6MzMiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.ccnCxc6k0yoL3z1YfYH9cR-GsXoS7lg680mB-Iy-1C0	1592824844106	27
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxMTUxNywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTE6MjU6MTciLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.re7LF-jdVpoIthuQDQGGMCH7lt_vw8FsDJlnt-hHj88	1592825132887	28
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxMzU4NiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTE6NTk6NDYiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.zcB13BKNJw5hWz2myM5mcbctWrBy-Xxbsi9wdZOxQyk	1592827182909	29
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNDAwNCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTI6MDY6NDQiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.eoms7D_Mc4h8zUhShERcYeew7cm2YN1o2CZ0cGBPTsg	1592827600230	30
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNjAyOSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTI6NDA6MjkiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.VpWifQ-zGk-rjSJjHyaCRhcTWErqBmLFaUNMAF0cHu4	1592829625490	31
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNjM4MiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTI6NDY6MjIiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.t5phsPj64aqzVBM3PhDJudPIY0V1jv48wKpm5UbSah8	1592829978197	32
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNjQ4OSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTI6NDg6MDkiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.dpJeHXYOmwN4lx-ZTRkYuIsAiQJwdlUJR6dt_-HUttk	1592830086461	33
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNjU0MSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTI6NDk6MDEiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.EB89_nVMx8LA9nJX2RoYrG59U7nHKquih0BITom4YHo	1592830137858	34
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNjkyNCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTI6NTU6MjQiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.KJncLCDFvxqZ0Uw_FAybrnhlbXsHWuQM1p6k3ibKdv8	1592830520561	35
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNjk1MiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTI6NTU6NTIiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.l1S4fukmq4G8-IhRQiFxDHkvxZPPWbgTWLYsWPKbIp4	1592830547833	36
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNzA1NiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTI6NTc6MzYiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.oFKuksLZuSsvqgeuqshZUOYJ30qeuKtLU39pQbSwpNk	1592830652145	37
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNzQzNywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6MDM6NTciLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.bZy7PCHG9vYmzlez4dAUUD2X0plkUftdL4ubQjpZIMc	1592831032487	38
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxNzQ0MSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6MDQ6MDEiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.qFfQBk2T4LFGY6lwTW6RkwvDmWe_K-16GYhmOTeN5fQ	1592831037116	39
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxODEzOSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6MTU6MzkiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.q7y76tu13BBUSTFheJ2x6LdSRrNRijHVvbQ6L6-KSvg	1592831735535	40
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxODM3MywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6MTk6MzMiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.RkKudEsF6Hr5T4dW10Pr3YvIF1897xMMQTasQ3zCldU	1592831971208	41
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxODQyMywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6MjA6MjMiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.rTXIjmtBmSLYByUuaXwherhqr6YoT1fupznKUxpRAxU	1592832019522	42
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxODU2MiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6MjI6NDIiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.BPKx9bdwY9Aka0Cna1BQC1nU9MEx1zjFvj2lPr2oG_o	1592832158449	43
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxODYyNywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6MjM6NDciLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.Bl6AXgF7BTW403P05et8CCIgRHH-q391HFgWgZzIxZk	1592832223254	44
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxOTU3NiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6Mzk6MzYiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.ueSFQPp2wWJ2Na6u7rmgWpeoYhmi7-94mM9RjV912hM	1592833173784	45
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkxOTU3NywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6Mzk6MzciLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.0BVu-v5Qg9cHcduC_E_wQhEOMTvbRrLlIXmDFq3MhpE	1592833174449	46
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMDU2OSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6NTY6MDkiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.DdLmFFBnLZ1d2C2EOB7RnerRUW3oANzhhEFeWtpzMSY	1592834169783	47
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMDU3MCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTM6NTY6MTAiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.rCfXsiKJuzagJLcBvs90mcokwwgSSmeUbeqb6dUW44c	1592834170349	48
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMDkzNSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MDI6MTUiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.D_jHrbFNEusOgAkdbuqsMPG5J7o0RwCFr9-CpH-eVf4	1592834531280	49
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMTAzOCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MDM6NTgiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.78fg3guWoDqYdnoIPXXgOzA77wEmb7pEJUfnXDtWvZ8	1592834634596	50
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMTI5NywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MDg6MTciLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.XvO1PHpXVbsrHyVTkVqNmjVTMDzzt9-9y_TP-z5Xf9E	1592834893093	51
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMTQwOSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MTA6MDkiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.-jZTDWRjV3tpCWOugRKWq1hmRam7TUeYth_eOo1S_ZY	1592835005709	52
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMTYzMiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MTM6NTIiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.A9ASGywUYUubS7Xwn6lcCjUACCksZBA2Eyc_4nnELZU	1592835227956	53
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMTc5OSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MTY6MzkiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.oFToj_Y71b5WL1ssOPHbXvzN9Y9PxMyr77HtIJjfV_s	1592835394812	54
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMTg2NSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MTc6NDUiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.uvKh78pfQ29o8CHu0OWJ9Cu3407GlajHVsJPtWxW7Yg	1592835461374	55
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMjI0MiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MjQ6MDIiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.QonD-Ov91wFcB3-pWRvrDsCMXs56Bz87xLdo0Yc-dvw	1592835838367	56
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMjMwMiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MjU6MDIiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.le62Qr_oFxIvoUopm-v-3wvWMRcTjaqGJCYzywSx7a4	1592835898296	57
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMjMxOCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MjU6MTgiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.mbOG76fjtiQH-3F28Q_HJBrUzlPqQUqgwzlgtUL4e4U	1592835913526	58
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMjM2NSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MjY6MDUiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.j6_X8btxr2TSHiK03hnZRTIDumfGCUnnUGTg7pLZia4	1592835960858	59
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMjM2NiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6MjY6MDYiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.FbGJNM6LR77hM9n1kvGnuKyveb9ZpxywGDR-YCtTT2A	1592835961866	60
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMjQ5OSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6Mjg6MTkiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.OfGR2-nMqgwMPDcaT3YA42QU9tQ1t6IDPvX-yhoKkCQ	1592836094724	61
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMjUwMCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6Mjg6MjAiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.cuFLJjFPGFWyBBVuDQOx4jnT2Zkj2sLJGL5v7ag_BQg	1592836096021	62
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzA1NCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6Mzc6MzQiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.0CGbAKtgJfKB3gplBAvgw-7BosraEPYrha7WRf-z6fw	1592836650593	63
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzA2NSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6Mzc6NDUiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.XWTRhi0vOm1qoEpMZwk2g2v9lxeEO2TKgBy2KgFubtI	1592836661646	64
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzQ4NiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NDQ6NDYiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.XIHv-cMlb4koE7fyURmIPW21YHD6InejiEbdLk_vSK0	1592837081816	65
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzQ4NywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NDQ6NDciLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.CYFzB6TY_5y1IAdpCl6DtHZg1eIw3s6zMqmOmxXvmZY	1592837083106	66
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzUwNCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NDU6MDQiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.-PO0xchbVEJJ0kv4qbXtejMD5YV2uf91b8Tb56G7L-Y	1592837100385	67
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzU2OSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NDY6MDkiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.H-hvM57cF2E4hZ-BuSiP6Gt8Et7-g82hRL3JTYf9qlU	1592837164420	68
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzU3MCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NDY6MTAiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.7R6-03OcW9XUU0LgP1aR1pJj5Oe9z_lC9QJnibX3hnE	1592837165448	69
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzY3MCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NDc6NTAiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.FdtlsirYL-Mj0CkyVDpI6BfzBo5d3wY6FxZkf_38gxE	1592837267101	70
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzY3OCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NDc6NTgiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.Wi7JZQg6EOenCwyHu7JlgWk3maVz3QhlDtjIS3KAhWI	1592837274569	71
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzc2MiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NDk6MjIiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.9Ngw-ldFLyVmjzdZKrcifqkDXX2nyE4UV8oJjsvJgYE	1592837359338	72
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyMzc2NSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NDk6MjUiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.Zs6LchpSV7uIwJJc1Xz5G2NjKDdrud4cwErm6nJiWF4	1592837361078	73
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyNDMyMiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NTg6NDIiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.bVnhefuRitxItoCs0LGz5Ew-WcZzxfAeC2VeR_gNOfo	1592837918000	74
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyNDMyOCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NTg6NDgiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.KZJX8xD29vOqyJb16QPN7b_qde9aJsU6SuSWyw_Soxg	1592837924521	75
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyNDM1OCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTQ6NTk6MTgiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.BLaj-GI6z5iBrO2cggAKmAIF1g7qOjzEjurgDUVWOC4	1592837955252	76
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyNDQ5NiwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTU6MDE6MzYiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.hPo3TENc1exLV_RFhnzSviTgeecKYbYamHsEUR6A5Mc	1592838093942	77
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyNDUwMCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTU6MDE6NDAiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.ow2rsZi4DkPDv_hBtFpTUFDsP1kZr78bmgIwin7UdgA	1592838097107	78
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyNDU1MCwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTU6MDI6MzAiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.npQk942KW9vJg5o5FKKuF40pqIwsII8Qh1Ym7g9dXlA	1592838146383	79
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyNDgxMSwiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTU6MDY6NTEiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.dwpQyuWCVMBmU67cEJqQ9MKY6DwQR5QOR6azV1caruk	1592838406588	80
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjZmNWIwOThhLWQ0NmMtNDAzYy1iNTk2LTE0MTgxYTA1NGE4NyIsImV4cCI6MTU5MjkyNDgxMywiZXhwaXJlcyI6IjIwMjAtMDYtMjMgMTU6MDY6NTMiLCJwbGF0Zm9ybUlkIjoiMDhjNmE5ZjQtNWU1Ni00NWU5LWE4ZmMtYzM5MmIyNWI1ZWM3IiwidGVuYW50SWQiOiI4MDAzOTJkYS04ZDYyLTQzM2UtODYyZi1lOGVjOGM2NzY0ZDAifQ.XCY0zm1vh0azEtuMUKnQXfFACNzr-RkdWZXSSa8eFWI	1592838408713	81
\.


--
-- Data for Name: productreq; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productreq (id, name, price, target, winners, picture, date, hour, type) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, price, target, tickets, winners, picture, date, hour, current, sold, status, type, vendor, selling, published) FROM stdin;
97	firtOne	20240	drain	20	2	hey boy ca 	2020/09/09	12:00	[1493,1750,1725,1915,1516,1894,1684,1143,1134,1451,1337,1086]	[1213,1269,1021,1656,1761,1638,1434,1932]	failed	brand New	admin	\N	2020-06-22T04:10:41.124-07:00
98	firtOne	20240	drain	20	2	hey boy ca 	2020/09/09	12:00	[1521,1050,1940,1538,1323,1866,1487,1127,1602,1973,1605,1862,1166,1667,1789,1572,1552,1306,1028,1515]	\N	current	brand New	admin	\N	2020-06-22T04:55:27.675-07:00
96	Now Ma	0.1	\N	12	12	http://localhost:5000/uploads/1592753102550-euro.png	2020-06-28	08:25	[1587,1400,1377,1441,1831,1889,1986,1184,1777,1474,1786]	[1434]	true	Brand New	admin	12	\N
99	firtOne	20240	drain	20	2	hey boy ca 	2020/09/09	12:00	[1087,1576,1004,1811,1529,1950,1754,1035,1978,1244,1010,1480,1155,1702,1840,1772,1415,1870]	[1215,1389]	expired	brand New	admin	\N	2020-06-22T05:09:44.282-07:00
100	firtOne	20240	drain	20	20	hey boy ca 	2020/09/09	12:00	[1882,1719,1445,1705,1443,1759,1729,1959,1091,1784,1433,1853,1489,1382]	[1678,1267,1446,1840,1568,1744]	current	brand New	admin	\N	2020-06-22T05:12:12.550-07:00
102	NNew	1	\N	12	21	http://localhost:5000/uploads/1592835955226-benedict.jpeg	2020-06-29	19:26	[1233,1513,1027,1337,1558,1476,1328,1412,1632,1018,1964,1353]	\N	current	Second Hand	admin	1200	2020-06-22T07:25:55.648-07:00
101	firtOne	0.12	drain	20	20	hey boy ca 	2020/09/09	12:00	[1999,1268,1219,1838,1105,1612,1307,1318,1210,1519,1632,1428,1429,1794,1903,1693,1462,1061,1370]	[1504]	current	brand New	admin	\N	2020-06-22T06:08:29.182-07:00
103	testing 	0.22	\N	21	1	http://localhost:5000/uploads/1592837158843-Iphone2.jpg	2020-06-29	19:46	[1638,1731,1880,1283,1772,1689,1014,1515,1594,1893,1542,1620,1718,1053,1916,1571,1636,1811,1641,1846]	[1380]	current	Second Hand	admin	20	2020-06-22T07:45:59.092-07:00
\.


--
-- Data for Name: runnerup; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.runnerup (id, name, username, age, email, product, fortune, date, country) FROM stdin;
1	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
2	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
3	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
4	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
5	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
6	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
7	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
8	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
9	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
10	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
11	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
12	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
13	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
14	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
15	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
16	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
17	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
18	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
19	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
20	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
21	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
22	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
23	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
24	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
25	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
26	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
27	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
28	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
29	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
30	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
31	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
32	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
33	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
34	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
35	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
36	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
37	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
38	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
39	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
40	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
41	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
42	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
43	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
44	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
45	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
46	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
47	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
48	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
49	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
50	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
51	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
52	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
53	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
54	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
55	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
56	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
57	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
58	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
59	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
60	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
61	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
62	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
63	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
64	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
65	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
66	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
67	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
68	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
69	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
70	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
71	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
72	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
73	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
74	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
75	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
76	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
77	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
78	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
79	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
80	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
81	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
82	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
83	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
84	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
85	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
86	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
87	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T05:10:02.732-07:00	rwanda
88	Email11	tried	442	signinworks9@gmail.com	firtOne	1932	2020-06-22T05:10:02.732-07:00	rwanda
89	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T05:10:02.732-07:00	rwanda
90	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T05:10:02.732-07:00	rwanda
91	Email11	tried	442	signinworks9@gmail.com	firtOne	34	2020-06-22T05:10:43.269-07:00	rwanda
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
48	keke	12123	real@ma	2112	1234567890	\N	\N	male	12	true	Jun 14 2020	\N	Rwanda	1268	\N
58	Muhire 	Logino	horix77777@gmail.com	11112	mhjhjhbhnh	\N	\N	male	442	\N	Jun 19 2020	\N	rwanda	250	\N
47	rewr	real	email@email.com	212132	12213123	\N	\N	male	2321	true	Jun 14 2020	\N	Rwanda	376	\N
49	realName 	secondHola	12312@qdmdand	3123123	1212312	\N	\N	male	12	\N	Jun 14 2020	\N	Rwanda	250	\N
50	ManMA	reAlMAn 	tueday@email.com	9302193	12323123	\N	\N	male	21	\N	Jun 14 2020	\N	Rwanda	250	\N
51	namesHere	12	12@12	12	12121	\N	\N	female	12	\N	Jun 18 2020	\N	Rwanda	250	\N
60	nemz	nemz	kevin@msad	784677044	1111111111	12345	\N	male	12	\N	Jun 20 2020	\N	Ecuador	250	eqwqe
61	newUsa	AUAS	EMAJDAFK@MADNMASN.CKMN	823483294	112233	\N	\N	male	32	\N	Jun 20 2020	\N	Saint Helena	250	\N
59	testw	owo	horix77777@yahoo.co	7847727123	12345	\N	\N	male	12	\N	Jun 20 2020	\N	Rwanda	250	\N
52	new	tester	11@1443	1	12345	\N	\N	female	1	\N	Jun 18 2020	http://localhost:5000/uploads/1592555222236-benedict.jpeg	Rwanda	250	\N
57	kevin1	home	horix77777@yahoo.com	219023	12345	kigali Rwanda 	\N	male	12	\N	Jun 19 2020	\N	Rwanda	250	Nk\\
40	benokolie	ben1	ben@gmail.com	07334342222	123456	\N	\N	male	22	true	Jun 06 2020	http://localhost:5000/uploads/1592568263946-6225234-download-instagram-logo-icon-free-png-transparent-image-and-clipart-instagram-symbol-transparent-400_400_preview.png	\N	\N	\N
35	test	test	test@test.test	1	11111	kigali Rwanda 	\N	male	1	\N	Jun 06 2020	http://localhost:5000/uploads/1592644002633-benedict.jpeg	\N	\N	kGl
62	newM	M	emaiW@saddas	21312	11	\N	\N	male	12	\N	Jun 21 2020	\N	Rwanda	262	\N
63	11	111	2w@qew	1112131231	qdwqe`121	\N	\N	male	11	\N	Jun 21 2020	\N	Bangladesh	213	\N
65	Email11	tried	signinworks9@gmail.com	11112	mhjhjhbhnh	\N	\N	male	442	\N	Jun 22 2020	\N	rwanda	250	\N
66	new Vendor 	vend1	signinworks@gmail.com	122312	12345	kk 2 avenue 	\N	male	32	true	Jun 22 2020	\N	Rwanda	250	kk
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

COPY public.vendreq (id, sells, address, store, account, phone, email, verified, country, fullname) FROM stdin;
24	shoies	kk 2 avenue 	kk	vend1	250122312	signinworks@gmail.com	true	Rwanda	\N
25	111	11	1	vend1	250122312	signinworks@gmail.com	true	Rwanda	new Vendor 
\.


--
-- Data for Name: winners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.winners (id, name, username, age, email, product, fortune, date, country) FROM stdin;
100	Muhire 	Logino	442	horix77777@gmail.com	firstOne	1497	2020-06-19T13:32:26.364-07:00	\N
101	Muhire 	Logino	442	horix77777@gmail.com	firstOne	1637	2020-06-19T13:32:26.364-07:00	\N
102	Muhire 	Logino	442	horix77777@gmail.com	firstOne	1702	2020-06-19T13:29:51.423-07:00	\N
103	Muhire 	Logino	442	horix77777@gmail.com	firstOne	1772	2020-06-19T13:29:51.423-07:00	\N
104	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	\N
105	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	\N
106	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	\N
107	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	\N
108	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	\N
109	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	\N
110	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	\N
111	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	\N
112	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	\N
113	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	\N
114	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
115	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
116	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
117	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
118	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
119	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
120	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
121	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
122	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
123	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
124	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
125	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
126	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
127	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
128	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
129	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
130	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
131	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
132	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
133	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
134	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
135	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
136	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
137	Email11	tried	442	signinworks9@gmail.com	firtOne	1656	2020-06-22T04:24:55.400-07:00	rwanda
138	Email11	tried	442	signinworks9@gmail.com	firtOne	1638	2020-06-22T04:24:55.400-07:00	rwanda
139	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
140	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
141	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
142	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
143	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
144	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
145	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
146	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:11:29.057-07:00	rwanda
147	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1213	2020-06-22T04:13:00.507-07:00	rwanda
148	Email11	tried	442	signinworks9@gmail.com	firtOne	1761	2020-06-22T04:24:55.400-07:00	rwanda
149	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:11:29.057-07:00	rwanda
150	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1269	2020-06-22T04:13:00.507-07:00	rwanda
151	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
152	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:11:29.057-07:00	rwanda
153	Muhire 	Logino	442	horix77777@gmail.com	firtOne	1021	2020-06-22T04:13:00.507-07:00	rwanda
154	Email11	tried	442	signinworks9@gmail.com	firtOne	1434	2020-06-22T04:24:55.400-07:00	rwanda
155	Email11	tried	442	signinworks9@gmail.com	firtOne	1215	2020-06-22T05:10:43.269-07:00	rwanda
156	Email11	tried	442	signinworks9@gmail.com	firtOne	1389	2020-06-22T05:10:43.269-07:00	rwanda
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
-- Name: bidata2_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bidata2_id_seq', 8, true);


--
-- Name: bidata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bidata_id_seq', 197, true);


--
-- Name: bids_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bids_id_seq', 181, true);


--
-- Name: failed_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.failed_id_seq', 1, false);


--
-- Name: nowdata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nowdata_id_seq', 81, true);


--
-- Name: productreq_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productreq_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 103, true);


--
-- Name: runnerup_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.runnerup_id_seq', 91, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 66, true);


--
-- Name: vendpro_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vendpro_id_seq', 11, true);


--
-- Name: vendreq_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vendreq_id_seq', 25, true);


--
-- Name: winners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.winners_id_seq', 156, true);


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
-- Name: failed failed_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed
    ADD CONSTRAINT failed_pkey PRIMARY KEY (id);


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

