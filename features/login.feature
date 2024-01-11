Feature: Login
  As a user
  I want to log in to my account
  So that I can access the application

  Scenario: Successful login
    Given I navigate to the login page
    When I log in with valid credentials
    Then I should be logged in successfully
