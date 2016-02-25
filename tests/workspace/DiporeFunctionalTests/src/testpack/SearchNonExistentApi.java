package testpack;

import org.junit.Test;
import org.openqa.selenium.By;

import junit.framework.TestCase;

public class SearchNonExistentApi extends TestCase{
	
	@Test
	public void testSearchResultForNonExistentApi() {
		DiporeTestSuite.driver.findElement(By.xpath("//input[@id='search-text']")).sendKeys("7328o473ygtlwebhf437");
		String bodyText = DiporeTestSuite.driver.findElement(By.tagName("body")).getText();
		assertTrue("Text 'Nothing found.' not seen!", bodyText.contains("Nothing found."));
	}

}
