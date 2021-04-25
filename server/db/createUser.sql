-- Running this script will Recreate the entire database
-- DO NOT RUN

DROP DATABASE `shesays` IF EXISTS `shesays`;
CREATE DATABASE `shesays` DEFAULT CHARACTER SET latin1;
USE `shesays`;

# User relation
CREATE TABLE User (
	uid INTEGER NOT NULL,

	email VARCHAR(40) NOT NULL,

    first_name VARCHAR(40),
    last_name VARCHAR(40),

    username VARCHAR(40) NOT NULL,

    credibility FLOAT DEFAULT 0.0,

    PRIMARY KEY (uid)
);

# Video Relation
CREATE TABLE Video(
	vid INTEGER NOT NULL,

    src_link VARCHAR(90) NOT NULL,

    rating FLOAT DEFAULT 0.0,

    # The user who created the video
    uid INTEGER NOT NULL,

    upload_datetime DATETIME DEFAULT NOW(),

    PRIMARY KEY (vid),
    FOREIGN KEY (uid) REFERENCES User (uid) ON DELETE CASCADE
);

# Forum Relation (each entry represents a different topic)
CREATE TABLE Forum(
	fid INTEGER NOT NULL,

    topic VARCHAR(90),

    # Figured I'd give it a default
    datetime_created DATETIME DEFAULT NOW(),

    # User who created the forum
    uid INTEGER,

    PRIMARY KEY(fid),

    FOREIGN KEY (uid) REFERENCES User (uid) ON DELETE SET NULL
);

# Relationships Time

# 'Upload_Video' was folded into the Video Relation
# 'Create_Forum' was also folded into the Forum relation

# Video Comment
CREATE TABLE Video_Comment(
	cid INTEGER NOT NULL,

    content VARCHAR(1000) NOT NULL,

    datetime_created DATETIME DEFAULT NOW(),

    uid INTEGER NOT NULL,

    vid INTEGER NOT NULL,

    PRIMARY KEY(cid),

    FOREIGN KEY (uid) REFERENCES User (uid) ON DELETE CASCADE,
    FOREIGN KEY (vid) REFERENCES Video (vid) ON DELETE CASCADE
);

# Like Relation
CREATE TABLE Rate(
	liker_uid INTEGER NOT NULL,
    liked_uid INTEGER NOT NULL,
    vid INTEGER NOT NULL,
    PRIMARY KEY (liker_uid, liked_uid, vid),
    FOREIGN KEY (liker_uid) REFERENCES User (uid),
    FOREIGN KEY (liked_uid) REFERENCES User (uid),
    FOREIGN KEY (vid) REFERENCES Video (vid)
);

# Forum Comment
CREATE TABLE Forum_Comment(
	cid INTEGER NOT NULL,

    content VARCHAR(1000) NOT NULL,

    datetime_created DATETIME DEFAULT NOW(),

    uid INTEGER NOT NULL,

    fid INTEGER NOT NULL,

    PRIMARY KEY(cid),

    FOREIGN KEY (uid) REFERENCES User (uid) ON DELETE CASCADE,
    FOREIGN KEY (fid) REFERENCES Forum (fid) ON DELETE CASCADE
);

