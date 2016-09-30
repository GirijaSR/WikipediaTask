Feature: Wikipedia

As a user
I want to search for a term in wikipedia
So that i can get more information relevant to the term

@1
Scenario: Assert Title

  Given I am on a wikipedia home page
  Then I should see a title as wikipedia

@2
Scenario: Search

  Given I am on a wikipedia home page
  When I search for a "furry rabbits"
  Then I should see a "Did you mean: fury rabbit" suggestion


@3
Scenario:  Result

  Given I am on a wikipedia home page
  When  I search for a "furry rabbits"
  And  I click on the Did you mean suggestion
  Then I should see 20 search results on a page


@4
Scenario: Search term first result

  Given I am on a wikipedia home page
  When  I search for a "furry rabbits"
  And  I click on the Did you mean suggestion
  And I click on the first result
  Then I should see a title as "List of fictional rabbits and hares" and table of contents header as "Contents"






