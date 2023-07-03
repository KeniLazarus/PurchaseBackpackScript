Feature: Logging into website Saucedemo

  Scenario: As a user, I can log into the website

Given I am on the login page
When I login with credentials
Then I am logged in

