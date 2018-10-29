DROP DATABASE IF EXISTS listings;

CREATE DATABASE listings;

USE listings;

CREATE TABLE listing_description (
	id INT(11) AUTO_INCREMENT NOT NULL, 
	unique_ID INT(10) UNIQUE,
	room_type MEDIUMTEXT,
	user_name MEDIUMTEXT,
	room_type_details MEDIUMTEXT,
	city MEDIUMTEXT,
	city_details MEDIUMTEXT,
	listing_details MEDIUMTEXT,
	guest_access_details MEDIUMTEXT,
	interaction_guests_details MEDIUMTEXT,
	other_details MEDIUMTEXT,
	PRIMARY KEY(`id`)
);