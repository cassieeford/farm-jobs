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
    ad_id int,
    companytype VARCHAR(60) NOT NULL
);

INSERT into businesses (name, companytext, email,pword,company, contactname, contactnum, contactemail, streetadd, town,  postcode, ad_id, companytype)
VALUES 
(   "Bobs Farm", 
    "Bobs Farm is a 5th generation family businesses growing potatos, carrots and peas for over 100 years.",
    "bob@bobsfarm.com",
    "bobbob",
    "Bobs Legacy Primary Producers",
    "Bob Bones",
    "0404 414 414",
    "contact@bobsfarm.com",
    "45 Bradford Rd",
    "Baringhup",
    "3463", 
    0 ,
    "producer"
),
(   
    "Puckles Cropping",
    "Contract harvest teams with 20 years experience of harvesting wheat, barley and rye crops",
    "Puckles@cropping.com",
    "pucpuc",
    "Puckles Harvesting and Cropping",
    "Jeremy Puckle",
    "0202 212 212",
    "info@pucklescropping.com",
    "50 Joyces Creek-Baringhup Rd",
    "Joyces Creek",
    "3364",
    1,
    "contractor"
),
(   
    "All Day Shearing",
    "Sheep Shearing and Rousabout contracting team servicing Victoria Wide",
    "Alldayshearing@gmail.com",
    "allall",
    "All Day Sheep Shearing",
    "Jonathon Smith",
    "0303 313 313",
    "info@pucklescropping.com",
    "50 Fogartys Gap Road",
    "Ravenswood South",
    "3453",
    3,
    "contractor"
),
(   
    "Pollock and Sons",
    "2nd generation sheep and crop farmers",
    "Pollocks@gmail.com",
    "polpol",
    "Pollock Sheep and Cropping Farm",
    "Paul Pollock",
    "0404 414 414",
    "info@pollockfarms.com",
    "143 Ford Road",
    "Harcourt North",
    "3453",
    1,
    "producer"
),
(   
    "Jennings Family Farm",
    "7000 acres of cropping land around Baringhup region",
    "jennings@gmail.com",
    "jenjen",
    "Jennings Family Farm",
    "Jennifer Jennings",
    "0505 515 515",
    "info@jenningsfarm.com",
    "100 Baringhup Road",
    "Baringhup",
    "3463",
    4,
    "producer"
)
;

CREATE TABLE advertisements (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    businessesId int,
    adtype VARCHAR(10) NOT NULL,
    adtitle VARCHAR(100) NOT NULL,
    adfield VARCHAR(40) NOT NULL,
    joblocation VARCHAR(80) NOT NULL,
    wage VARCHAR(60),
    datelisted VARCHAR(40) NOT NULL,
    adclosingdate VARCHAR(40) NOT NULL,
    contractstartdate VARCHAR(40) NOT NULL,
    contractlength VARCHAR(60) NOT NULL,
    adinfo VARCHAR(500) NOT NULL,
    adfilled VARCHAR(10) NOT NULL
);

INSERT into advertisements (businessesId, adtype, adtitle, adfield, joblocation, wage, datelisted, adclosingdate, contractstartdate, contractlength, adinfo, adfilled)
VALUES 
( 
4,
"Job",
"Wool classer, Shearer and rousies wanted for 7,000 sheep",
"Livestock",
"Harcourt", 
"Negotiable",
"29th March 2022",
"15th April 2022",
"1st May 2022",
"2 weeks",
"Shearing team wanted for 5000 ewes, 800 rams and 1000 lambs. The farm has a raised board, 8 plant shed.",
"false"
),
( 
5,
"Job",
"Harvest Team for 2000 acre wheat and barley harvest",
"Cropping",
"Baringhup", 
"Negotiable",
"17th March 2022",
"13th April 2022",
"20th May 2022",
"3 weeks",
"Headers, trucks, field bins and teams wanted for 2000 acre crop harvest.",
"false"
)
;


