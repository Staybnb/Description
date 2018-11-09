DROP TABLE IF EXISTS topbunk.listings;

DROP SCHEMA IF EXISTS topbunk;

CREATE SCHEMA topbunk;

CREATE TABLE topbunk.listings (
	id SERIAL,
	room_type TEXT,
	user_name TEXT,
	room_type_details TEXT,
	city TEXT,
	city_details TEXT,
	listing_details TEXT,
	guest_access_details TEXT,
	interaction_guests_details TEXT,
	other_details TEXT,
	avatar TEXT
);