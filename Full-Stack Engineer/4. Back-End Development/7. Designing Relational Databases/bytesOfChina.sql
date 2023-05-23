CREATE TABLE restaurant (
  id integer PRIMARY KEY,
  name varchar(20),
  description varchar(100),
  rating decimal,
  telephone char(10),
  hours varchar(100)
);

CREATE TABLE address (
  id integer PRIMARY KEY,
  street_number varchar(10),
  street_name varchar(20),
  city varchar(20),
  state varchar(15),
  google_map_link varchar(50)
);

CREATE TABLE category (
  id char(2) PRIMARY KEY,
  name varchar(20),
  description varchar(200)
);

CREATE TABLE dish (
  id integer PRIMARY KEY,
  name varchar(50),
  description varchar(200),
  hot_and_spicy boolean
);

CREATE TABLE review (
  id integer PRIMARY KEY,
  rating decimal,
  description varchar(100),
  date date
);

/* SELECT constraint_name, table_name, column_name FROM information_schema.key_column_usage WHERE table_name = 'restaurant' OR table_name = 'address' OR table_name = 'category' OR table_name = 'dish' OR table_name = 'review'; */