var express = require('express');
var router = express.Router();
var googleCivics = require('../lib/clients/google-civics');

function mergeReps({ offices, officials, divisions, normalizedInput }) {
  let reps = offices.reduce(function(transformedOfficials, val) {
    var _officials = val.officialIndices.map(i => officials[i]);
    _officials.forEach((o, i) => {
      o.divisionId = val.divisionId;
      o.office = val.name;
      if (o.phones) {
        o.phone = o.phones[0];
      }
    });
    return transformedOfficials.concat(_officials);
  }, []);
  return { reps, divisions, normalizedInput };
}

function extractDistricts({ reps, divisions, normalizedInput }) {
  let districts = reps.reduce(function(districts, rep) {
    let district = []; // for flattening null results
    let districtCode = rep.divisionId.split('/')[3];
    if (districtCode) {
      let districtId = districtCode.split(':')[1];
      if (!isNaN(Number(districtId))) { // a real number
        district = divisions[rep.divisionId].name;
      }
    }
    return districts.concat(district);
  }, []);
  return { reps, districts, normalizedInput };
}

router.get('/', function(req, res) {
  var results;
  var queryParams = req.query;
  if (queryParams.address) {
    googleCivics
      .getReps(queryParams.address)
      .then(mergeReps)
      .then(extractDistricts)
      .then(d => res.send(d))
      .catch(e => res.send(e));
  } else {
    res.status(400).send({
      error: {
        code: 400,
        message: "Address is required"
      }
    });
  }
});

module.exports = router;
