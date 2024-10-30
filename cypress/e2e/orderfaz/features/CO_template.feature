Feature: Create New Checkout Template

    Background: User Navigate To Orderfaz
        Given User navigate to orderfaz website
        When User fill "48yunyun@gmail.com" and "S6BWY3Qhc84K7gta"
        And User click login button
        Then User "successfully" login because "valid credentials"

    Scenario: User create new checkout template
        When User navigate to checkout link page
        And User choose design "<Design>"