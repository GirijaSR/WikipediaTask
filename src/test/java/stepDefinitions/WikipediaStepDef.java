package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.WikipediaPage;

/**
 * Created by girija on 28/09/2016.
 */
public class WikipediaStepDef {
    WikipediaPage page = new WikipediaPage();
    @Given("^I am on a wikipedia home page$")
    public void i_am_on_a_wikipedia_home_page()  {
        page.assertHomePage();
    }

    @Then("^I should see a title as wikipedia$")
    public void i_should_see_a_title_as_wikipedia()  {
        page.assertWikipediaTitle();
    }

    @When("^I search for a \"([^\"]*)\"$")
    public void i_search_for_a(String term)  {
        page.searchTerms(term);
    }

    @Then("^I should see a \"([^\"]*)\" suggestion$")
    public void i_should_see_a_suggestion(String suggestion)  {
        page.assertSuggestion(suggestion);
    }

    @When("^I click on the Did you mean suggestion$")
    public void i_click_on_the_Did_you_mean_suggestion() throws InterruptedException {
        page.clickSuggestion();

    }

    @Then("^I should see (\\d+) search results on a page$")
    public void i_should_see_search_results_on_a_page(int results)  {
        page.assertNumberOfResults(results);

    }

    @When("^I click on the first result$")
    public void i_click_on_the_first_result()  {
         page.clickFirstResult();

    }

    @Then("^I should see a title as \"([^\"]*)\" and table of contents header as \"([^\"]*)\"$")
    public void i_should_see_a_title_as_and_table_of_contents_header_as(String resultText, String contents)
    {
       page.assertFirstResultAndContents(resultText,contents);
    }


}
