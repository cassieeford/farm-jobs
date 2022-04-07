DROP TABLE IF EXISTS businesses, advertisements;

CREATE TABLE businesses (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    companytext VARCHAR(500) NOT NULL,
    email VARCHAR(60) NOT NULL,
    pword VARCHAR(80) NOT NULL,
    companytype VARCHAR(60) NOT NULL,
    contactname VARCHAR(60) NOT NULL,
    contactnum VARCHAR(60) NOT NULL,
    contactemail VARCHAR(60) NOT NULL,
    streetadd VARCHAR(60) NOT NULL,
    town VARCHAR(60) NOT NULL,
    postcode VARCHAR(10) NOT NULL,
    ad_id int,
    listascontractor VARCHAR(60) NOT NULL
);

INSERT into businesses (name, companytext, email,pword,companytype, contactname, contactnum, contactemail, streetadd, town,  postcode, ad_id, listascontractor)
VALUES 
(   "Bobs Legacy Primary Producers", 
    "Bobs Farm is a 5th generation family businesses growing potatos, carrots and peas for over 100 years.",
    "bob@bobsfarm.com",
    "$2b$12$jcI9R5o8urXPQvdhhfIPEebMdBIjqqp1TrrB1YfRXZ0zOf0fqjX36",
    "producer",
    "Bob Bones",
    "0404 414 414",
    "contact@bobsfarm.com",
    "45 Bradford Rd",
    "Baringhup",
    "3463", 
    0 ,
    "false"
),
(   
    "Puckles Harvesting and Cropping",
    "Contract harvest teams with 20 years experience of harvesting wheat, barley and rye crops",
    "Puckles@cropping.com",
    "$2b$12$F8k8iIqXM/sTjS4f542y.eogUz.noMCUyxgGiefQ.onl9jx.6tO62",
    "contractor",
    "Jeremy Puckle",
    "0202 212 212",
    "info@pucklescropping.com",
    "50 Joyces Creek-Baringhup Rd",
    "Joyces Creek",
    "3364",
    1,
    "true"
),
(   
    "All Day Shearing",
    "Sheep Shearing and Rousabout contracting team servicing Victoria Wide",
    "Alldayshearing@gmail.com",
    "allall",
    "contractor",
    "Jonathon Smith",
    "0303 313 313",
    "info@pucklescropping.com",
    "50 Fogartys Gap Road",
    "Ravenswood South",
    "3453",
    3,
    "true"
),
(   
    "Pollock and Sons",
    "2nd generation sheep and crop farmers",
    "Pollocks@gmail.com",
    "polpol",
    "producer",
    "Paul Pollock",
    "0404 414 414",
    "info@pollockfarms.com",
    "143 Ford Road",
    "Harcourt North",
    "3453",
    1,
    "false"
),
(   
    "Jennings Family Farm",
    "7000 acres of cropping land around Baringhup region",
    "jennings@gmail.com",
    "jenjen",
    "producer",
    "Jennifer Jennings",
    "0505 515 515",
    "info@jenningsfarm.com",
    "100 Baringhup Road",
    "Baringhup",
    "3463",
    4,
    "false"
)
;

CREATE TABLE advertisements (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    businessesId int,
    adtype VARCHAR(10) NOT NULL,
    adtitle VARCHAR(100) NOT NULL,
    adfield VARCHAR(40) NOT NULL,
    joblocation VARCHAR(200) NOT NULL,
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
"Wool classer, Shearers and rousies wanted for 7,000 sheep",
"Livestock",
"-36.980623204677, 144.25703850640292", 
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
"-36.886422316301875, 144.03371288177522", 
"Negotiable",
"17th March 2022",
"13th April 2022",
"20th May 2022",
"3 weeks",
"Headers, trucks, field bins and teams wanted for 2000 acre crop harvest.",
"false"
),
( 
1,
"Job",
"Potato and carrot pickers",
"Picking",
"-36.94785547903208, 144.16316989808692",  
"$30 an hour",
"20th March 2022",
"10th April 2022",
"30th May 2022",
"2 weeks",
"Pickers wanted for vegetable Harvest. Accomodation and meals are provided. ",
"false"
)
;
-- CREATE TABLE junction (
--     junctionid int NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     b_name VARCHAR(40) NOT NULL,
--     b_companytext VARCHAR(500) NOT NULL,
--     b_company VARCHAR(500) NOT NULL,
--     b_contactname VARCHAR(60) NOT NULL,
--     b_contactnum VARCHAR(60) NOT NULL,
--     b_contactemail VARCHAR(60) NOT NULL,
--     b_streetadd VARCHAR(60) NOT NULL,
--     b_town VARCHAR(60) NOT NULL,
--     b_postcode VARCHAR(10) NOT NULL,
--     a_id INT 
--     a_adtype VARCHAR(10) NOT NULL,
--     a_adtitle VARCHAR(100) NOT NULL,
--     a_adfield VARCHAR(40) NOT NULL,
--     a_joblocation VARCHAR(80) NOT NULL,
--     a_wage VARCHAR(60),
--     a_datelisted VARCHAR(40) NOT NULL,
--     a_adclosingdate VARCHAR(40) NOT NULL,
--     a_contractstartdate VARCHAR(40) NOT NULL,
--     a_contractlength VARCHAR(60) NOT NULL,
--     a_adinfo VARCHAR(500) NOT NULL,
--     a_adfilled VARCHAR(10) NOT NULL
--     FOREIGN KEY(itemid) REFERENCES items(itemid),
--     FOREIGN KEY(sustainabilityid) REFERENCES sustainability(id)
-- );

--  let sql =
--     "SELECT businesses.name, businesses.companytext, businesses.company, businesses.contactname, businesses.contactnum, businesses.contactemail, businesses.streetadd, businesses.town,  businesses.postcode, businesses.companytype, advertisements.id, advertisements.adtype, advertisements.adtitle, advertisements.adfield, advertisements.joblocation, advertisements.wage, advertisements.datelisted, advertisements.adclosingdate, advertisements.contractstartdate, advertisements.contractlength, advertisements.adinfo, advertisements.adfilled FROM businesses, advertisements WHERE advertisements.businessesId=businesses.id";


