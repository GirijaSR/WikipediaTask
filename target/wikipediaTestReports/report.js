$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/Wikipedia.feature");
formatter.feature({
  "line": 1,
  "name": "Wikipedia",
  "description": "\r\nAs a user\r\nI want to search for a term in wikipedia\r\nSo that i can get more information relevant to the term",
  "id": "wikipedia",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4651425499,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Assert Title",
  "description": "",
  "id": "wikipedia;assert-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on a wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I should see a title as wikipedia",
  "keyword": "Then "
});
formatter.match({
  "location": "WikipediaStepDef.i_am_on_a_wikipedia_home_page()"
});
formatter.result({
  "duration": 230762191,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaStepDef.i_should_see_a_title_as_wikipedia()"
});
formatter.result({
  "duration": 8585585,
  "status": "passed"
});
formatter.after({
  "duration": 1349578205,
  "status": "passed"
});
formatter.before({
  "duration": 3769218137,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search",
  "description": "",
  "id": "wikipedia;search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on a wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I search for a \"furry rabbits\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see a \"Did you mean: fury rabbit\" suggestion",
  "keyword": "Then "
});
formatter.match({
  "location": "WikipediaStepDef.i_am_on_a_wikipedia_home_page()"
});
formatter.result({
  "duration": 57795750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "furry rabbits",
      "offset": 16
    }
  ],
  "location": "WikipediaStepDef.i_search_for_a(String)"
});
formatter.result({
  "duration": 1908759555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Did you mean: fury rabbit",
      "offset": 16
    }
  ],
  "location": "WikipediaStepDef.i_should_see_a_suggestion(String)"
});
formatter.result({
  "duration": 56667171,
  "status": "passed"
});
formatter.after({
  "duration": 153595844,
  "status": "passed"
});
formatter.before({
  "duration": 3315600226,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Result",
  "description": "",
  "id": "wikipedia;result",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on a wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I search for a \"furry rabbits\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on the Did you mean suggestion",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see 20 search results on a page",
  "keyword": "Then "
});
formatter.match({
  "location": "WikipediaStepDef.i_am_on_a_wikipedia_home_page()"
});
formatter.result({
  "duration": 59768091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "furry rabbits",
      "offset": 16
    }
  ],
  "location": "WikipediaStepDef.i_search_for_a(String)"
});
formatter.result({
  "duration": 1989796171,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaStepDef.i_click_on_the_Did_you_mean_suggestion()"
});
formatter.result({
  "duration": 2257187370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    }
  ],
  "location": "WikipediaStepDef.i_should_see_search_results_on_a_page(int)"
});
formatter.result({
  "duration": 53650926,
  "status": "passed"
});
formatter.after({
  "duration": 1098103867,
  "status": "passed"
});
formatter.before({
  "duration": 3415965527,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Search term first result",
  "description": "",
  "id": "wikipedia;search-term-first-result",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@4"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on a wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I search for a \"furry rabbits\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on the Did you mean suggestion",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on the first result",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see a title as \"List of fictional rabbits and hares\" and table of contents header as \"Contents\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WikipediaStepDef.i_am_on_a_wikipedia_home_page()"
});
formatter.result({
  "duration": 61224254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "furry rabbits",
      "offset": 16
    }
  ],
  "location": "WikipediaStepDef.i_search_for_a(String)"
});
formatter.result({
  "duration": 1658562193,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaStepDef.i_click_on_the_Did_you_mean_suggestion()"
});
formatter.result({
  "duration": 2065659028,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaStepDef.i_click_on_the_first_result()"
});
formatter.result({
  "duration": 1090406092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "List of fictional rabbits and hares",
      "offset": 25
    },
    {
      "val": "Contents",
      "offset": 95
    }
  ],
  "location": "WikipediaStepDef.i_should_see_a_title_as_and_table_of_contents_header_as(String,String)"
});
formatter.result({
  "duration": 215865713,
  "status": "passed"
});
formatter.after({
  "duration": 210452040,
  "status": "passed"
});
});