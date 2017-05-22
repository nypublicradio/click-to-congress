module.exports = {
 "normalizedInput": {
  "line1": "123 Main Street",
  "city": "Flushing",
  "state": "NY",
  "zip": "11354"
 },
 "divisions": {
  "ocd-division/country:us": {
   "name": "United States",
   "officeIndices": [
    0,
    1
   ]
  },
  "ocd-division/country:us/state:ny": {
   "name": "New York",
   "officeIndices": [
    2,
    4,
    5,
    11,
    12
   ]
  },
  "ocd-division/country:us/state:ny/cd:6": {
   "name": "New York's 6th congressional district",
   "officeIndices": [
    3
   ]
  },
  "ocd-division/country:us/state:ny/county:queens": {
   "name": "Queens County",
   "alsoKnownAs": [
    "ocd-division/country:us/state:ny/borough:queens",
    "ocd-division/country:us/state:ny/place:new_york/county:queens"
   ],
   "officeIndices": [
    9,
    10
   ]
  },
  "ocd-division/country:us/state:ny/place:new_york": {
   "name": "New York city",
   "officeIndices": [
    6,
    7,
    8
   ]
  }
 },
 "offices": [
  {
   "name": "President of the United States",
   "divisionId": "ocd-division/country:us",
   "officialIndices": [
    0
   ]
  },
  {
   "name": "Vice-President of the United States",
   "divisionId": "ocd-division/country:us",
   "officialIndices": [
    1
   ]
  },
  {
   "name": "United States Senate",
   "divisionId": "ocd-division/country:us/state:ny",
   "officialIndices": [
    2,
    3
   ]
  },
  {
   "name": "United States House of Representatives NY-06",
   "divisionId": "ocd-division/country:us/state:ny/cd:6",
   "officialIndices": [
    4
   ]
  },
  {
   "name": "Governor",
   "divisionId": "ocd-division/country:us/state:ny",
   "officialIndices": [
    5
   ]
  },
  {
   "name": "Lieutenant Governor",
   "divisionId": "ocd-division/country:us/state:ny",
   "officialIndices": [
    6
   ]
  },
  {
   "name": "Mayor",
   "divisionId": "ocd-division/country:us/state:ny/place:new_york",
   "officialIndices": [
    7
   ]
  },
  {
   "name": "Comptroller",
   "divisionId": "ocd-division/country:us/state:ny/place:new_york",
   "officialIndices": [
    8
   ]
  },
  {
   "name": "Public Advocate",
   "divisionId": "ocd-division/country:us/state:ny/place:new_york",
   "officialIndices": [
    9
   ]
  },
  {
   "name": "District Attorney - Queens",
   "divisionId": "ocd-division/country:us/state:ny/county:queens",
   "officialIndices": [
    10
   ]
  },
  {
   "name": "Queens Borough President",
   "divisionId": "ocd-division/country:us/state:ny/county:queens",
   "officialIndices": [
    11
   ]
  },
  {
   "name": "Attorney General",
   "divisionId": "ocd-division/country:us/state:ny",
   "officialIndices": [
    12
   ]
  },
  {
   "name": "State Comptroller",
   "divisionId": "ocd-division/country:us/state:ny",
   "officialIndices": [
    13
   ]
  }
 ],
 "officials": [
  {
   "name": "Donald J. Trump",
   "party": "Republican",
   "phones": [
    "(202) 456-1111"
   ]
  },
  {
   "name": "Mike Pence",
   "party": "Republican",
   "phones": [
    "(202) 456-1111"
   ]
  },
  {
   "name": "Charles E. Schumer",
   "party": "Democratic",
   "phones": [
    "(202) 224-6542"
   ]
  },
  {
   "name": "Kirsten E. Gillibrand",
   "party": "Democratic",
   "phones": [
    "(202) 224-4451"
   ]
  },
  {
   "name": "Grace Meng",
   "party": "Democratic",
   "phones": [
    "(202) 225-2601"
   ]
  },
  {
   "name": "Andrew M. Cuomo",
   "party": "Democratic",
   "phones": [
    "(518) 474-8390"
   ]
  },
  {
   "name": "Kathy Hochul",
   "party": "Democratic",
   "phones": [
    "(518) 474-8390"
   ]
  },
  {
   "name": "Bill de Blasio",
   "party": "Democratic",
   "phones": [
    "(212) 639-9675"
   ]
  },
  {
   "name": "Scott M. Stringer",
   "party": "Democrat",
   "phones": [
    "(212) 669-3916"
   ]
  },
  {
   "name": "Letitia \"Tish\" James",
   "party": "Democratic",
   "phones": [
    "(212) 669-7200"
   ]
  },
  {
   "name": "Richard A. Brown",
   "party": "Unknown",
   "phones": [
    "(718) 286-6000"
   ]
  },
  {
   "name": "Melinda Katz",
   "party": "Unknown",
   "phones": [
    "(718) 286-3000"
   ]
  },
  {
   "name": "Eric T. Schneiderman",
   "party": "Democratic",
   "phones": [
    "(800) 771-7755"
   ]
  },
  {
   "name": "Thomas P. DiNapoli",
   "party": "Democratic",
   "phones": [
    "(518) 474-4044"
   ]
  }
 ]
}; 
