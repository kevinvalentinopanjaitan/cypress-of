Feature: Login

  Background: User Navigate To Orderfaz
    Given User navigate to orderfaz website

  Scenario Outline: User login with '<condition>'
    When User fill '<email>' and '<password>'
    And User click login button
    Then User '<result>' login because '<condition>'

    Examples:
      | condition         | email              | password         | result       |
      | valid credentials | 48yunyun@gmail.com | S6BWY3Qhc84K7gta | successfully |
      | invalid email     | akmjboss@gmail.com | S6BWY3Qhc84K7gta | failed1      |
      | invalid password  | 48yunyun@gmail.com | akmjboss         | failed2      |
  Scenario: User login with empty email
    When User fill empty email
    And User click login button
    Then User failed login because empty email

  Scenario: User login with empty password
    When User fill with valid email
    And User leave blank on password
    And User click login button
    Then User failed login because empty password
