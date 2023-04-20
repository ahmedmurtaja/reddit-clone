BEGIN;

DROP TABLE IF EXISTS USERS,
POSTS,
COMMENTS,
VOTES CASCADE;

CREATE TABLE USERS(
    ID SERIAL PRIMARY KEY,
    USERNAME VARCHAR(256) UNIQUE NOT NULL,
    EMAIL VARCHAR(256) UNIQUE NOT NULL,
    PASSWORD TEXT NOT NULL,
    AVATAR TEXT NOT NULL DEFAULT 'https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png'
);

CREATE TABLE POSTS(
    ID SERIAL PRIMARY KEY,
    CONTENT TEXT NOT NULL,
    USER_ID INT NOT NULL,
    CONSTRAINT USER_ID FOREIGN KEY(USER_ID) REFERENCES USERS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE COMMENTS(
    ID SERIAL PRIMARY KEY,
    CONTENT TEXT NOT NULL,
    USER_ID INT NOT NULL,
    POST_ID INT NOT NULL,
    CONSTRAINT USER_ID FOREIGN KEY(USER_ID) REFERENCES USERS(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT POST_ID FOREIGN KEY(POST_ID) REFERENCES POSTS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE VOTES(
    ID SERIAL PRIMARY KEY,
    USER_ID INT NOT NULL,
    POST_ID INT,
    Vote int not null,
    COMMENT_ID int,
    CONSTRAINT FK_USER_ID FOREIGN KEY(USER_ID) REFERENCES USERS(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FK_POST_ID FOREIGN KEY(POST_ID) REFERENCES POSTS(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FK_COMMENT_ID FOREIGN KEY(COMMENT_ID) REFERENCES COMMENTS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO USERS(USERNAME, EMAIL, PASSWORD) VALUES ('admin', 'admin@localhost', '$2b$10$Q8Z');
INSERT INTO USERS(USERNAME, EMAIL, PASSWORD) VALUES ('user', 'user@localhost', '$2b$10$Q8Z');

INSERT INTO POSTS(CONTENT, USER_ID) VALUES ('Hello World', 1);
INSERT INTO POSTS(CONTENT, USER_ID) VALUES ('Hello World', 2);

INSERT INTO COMMENTS(CONTENT, USER_ID, POST_ID) VALUES ('Hello World', 1, 1);
INSERT INTO COMMENTS(CONTENT, USER_ID, POST_ID) VALUES ('Hello World', 2, 2);

INSERT INTO VOTES(USER_ID, POST_ID, VOTE) VALUES (1, 1, 1);
INSERT INTO VOTES(USER_ID, POST_ID, VOTE) VALUES (2, 2, 1);



COMMIT;