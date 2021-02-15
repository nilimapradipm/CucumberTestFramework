$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('feature\Register.feature');
formatter.feature({
  "line": 1,
  "name": "RegisterFunctionality",
  "description": "",
  "id": "registerfunctionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Register with invalid details",
  "description": "",
  "id": "registerfunctionality;register-with-invalid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open JavaTpoint website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter invalid data on the page",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 7
    },
    {
      "cells": [
        "First Name",
        "nilima"
      ],
      "line": 8
    },
    {
      "cells": [
        "email",
        "nilimam@yahoo.co.in"
      ],
      "line": 9
    },
    {
      "cells": [
        "password",
        "password1"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Registration is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.goToJavaTpoint()"
});
formatter.result({
  "duration": 3343462100,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.enterData(DataTable)"
});
formatter.result({
  "duration": 288697500,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.registration_is_successful()"
});
formatter.result({
  "duration": 89500,
  "status": "passed"
});
});