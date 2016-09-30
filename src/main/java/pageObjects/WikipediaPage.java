package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * Created by girija on 28/09/2016.
 */
public class WikipediaPage extends BaseMain {
    public void assertHomePage()
    {
       String actualText=driver.findElement(By.id("js-localized-slogan")).getText();
       Assert.assertEquals("The Free Encyclopedia",actualText);

    }
    public void assertWikipediaTitle()
    {
       String actualTitle=driver.getTitle();
        Assert.assertEquals("Wikipedia",actualTitle);
    }
    public void searchTerms(String term)
    {

        driver.findElement(By.id("searchInput")).sendKeys(term);
        driver.findElement(By.xpath("html/body/div[2]/form/fieldset/button")).click();

    }
    public void assertSuggestion(String suggestion )
    {
        String actualSuggestion=driver.findElement(By.className("searchdidyoumean")).getText();
        System.out.println(actualSuggestion);
        Assert.assertEquals(suggestion,actualSuggestion);

    }
    public void clickSuggestion() throws InterruptedException {
        Thread.sleep(1000);
       driver.findElement(By.id("mw-search-DYM-suggestion")).click();
    }
    public void assertNumberOfResults(int results)
    {
        List<WebElement> searchResults=driver.findElements(By.className("mw-search-result-heading"));
        int numberOfResults=searchResults.size();
        Assert.assertEquals(results,numberOfResults);
    }
    public void clickFirstResult()
    {
        List<WebElement> results= driver.findElements(By.className("mw-search-result-heading"));
        String firstResult  = results.get(0).getText();
        driver.findElement(By.linkText(firstResult)).click();
    }
    public void assertFirstResultAndContents(String resultText,String contents)
    {
       String actualResultText=driver.findElement(By.id("firstHeading")).getText();
       Assert.assertEquals(resultText,actualResultText);
       String actContents=driver.findElement(By.xpath("html/body/div[3]/div[3]/div[4]/div[2]/div/h2")).getText();
       Assert.assertEquals(contents,actContents);
    }


}
