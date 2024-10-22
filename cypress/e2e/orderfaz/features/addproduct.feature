Feature: Add Physical Product Non Variant with Default Selected CO Template

    Background: User Navigate To Orderfaz
        Given User navigate to orderfaz website
        When User fill "48yunyun@gmail.com" and "S6BWY3Qhc84K7gta"
        And User click login button
        Then User "successfully" login because "valid credentials"

    Scenario: User create product with type physical and non variant
        When User fill all form with valid format
        And User click to the next steps
        And User add new bump offer
        And User create new bump offer
        And User fill bump title
        And User fill bump description
        And User fill bump image
        And User check bump product title
        And User fill bump price
        And User fill bump text label check
        And User click finish edit
        And User click save
        Then User validate success popup