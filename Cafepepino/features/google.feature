Feature: Searching for falabella by Google

  I want to find falabella site's and search any product

  Scenario: Searching for falabella by Google
    Given I am open Google's search page
    When I am typing my search request "Falabella" on Google
    Then I press the "enter" key on Google
    Then I click on the falabella url
