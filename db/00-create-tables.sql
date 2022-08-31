CREATE TABLE users (
	id TEXT NOT NULL PRIMARY KEY,
	first_name TEXT,
	last_name TEXT,
	email TEXT NOT NULL UNIQUE
);

CREATE TABLE companies (
	id TEXT NOT NULL PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE reviews (
	id TEXT NOT NULL PRIMARY KEY,
	reviewer_id TEXT NOT NULL,
	company_id TEXT NOT NULL,
	review_text TEXT,
	rating INTEGER,
	created_on TEXT NOT NULL,
	FOREIGN KEY (reviewer_id) REFERENCES users(id),
	FOREIGN KEY (company_id) REFERENCES companies(id)
);
