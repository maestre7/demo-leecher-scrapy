
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE book (
    id_book uuid unique default uuid_generate_v4(),
    name_description varchar(255), 
    type_book varchar(255), 
    demography varchar(255), 
    score int,
    cover varchar(255), 
    time_modification date default CURRENT_TIMESTAMP, 
    CONSTRAINT PK_book 
    PRIMARY KEY (id_book, name_description)
);