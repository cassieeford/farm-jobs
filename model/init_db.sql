DROP TABLE IF EXISTS businesses, advertisements;
CREATE TABLE businesses (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    companytext VARCHAR(500) NOT NULL,
    email VARCHAR(60) NOT NULL,
    pword VARCHAR(80) NOT NULL,
    company VARCHAR(60) NOT NULL,
    contactname VARCHAR(60) NOT NULL,
    contactnum VARCHAR(60) NOT NULL,
    contactemail VARCHAR(60) NOT NULL,
    streetadd VARCHAR(60) NOT NULL,
    town VARCHAR(60) NOT NULL,
    postcode VARCHAR(10) NOT NULL,
    ad_id INT,
    companytype VARCHAR(60) NOT NULL
);
CREATE TABLE advertisements (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    adtype VARCHAR(10) NOT NULL,
    adtitle VARCHAR(60) NOT NULL,
    location VARCHAR(80) NOT NULL,
    adfield VARCHAR(40) NOT NULL,
    wage VARCHAR(60),
    datelisted VARCHAR(40) NOT NULL,
    adclosingdate VARCHAR(40) NOT NULL,
    contractlength VARCHAR(60) NOT NULL,
    adinfo VARCHAR(2000) NOT NULL,
    adfilled VARCHAR(10) NOT NULL
);

INSERT into businesses (name, companytext, email,pword,company, contactname, contactnum, contactemail, streetadd, town,  postcode, ad_id, companytype)
VALUES 
("Bobs Farm", "Bobs Farm is a 5th generation family businesses growing potatos, carrots and peas for over 100 years.","bob@bobsfarm.com","bobbob","Bobs Legacy Primary Producers", "Bob the 5th Bones", "0404 414 414", "contact@bobsfarm.com", "45 Bradford Rd", "Baringhup", "3463", 0 , "producer")