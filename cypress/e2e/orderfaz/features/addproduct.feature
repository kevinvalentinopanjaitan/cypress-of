Feature: Add Product with Default Selected CO Template

    Background: User Navigate To Orderfaz
        Given User navigate to orderfaz website
        When User fill "48yunyun@gmail.com" and "S6BWY3Qhc84K7gta"
        And User click login button
        Then User "successfully" login because "valid credentials"

    #Scenario: User create product with type physical with non variant
        # When User fill all form with valid format
        # And User click to the next steps
        # And User add new bump offer
        # And User create new bump offer with "OrderFaz Bump Offer"
        # And User fill bump title with "Ini adalah judul bump"
        # And User fill bump description with "Ini adalah deskripsi"
        # And User fill bump image
        # And User check bump product title
        # And User fill bump price with "25000"
        # And User fill bump text label check "Ini adalah text label check"
        # And User click finish edit 
        # And User click save
        # Then User validate success popup

    Scenario Outline: User failed to create product with type "<type>" and "<variant>"
        When User navigate to create product page
        And User choose "<type>" of product
        And User leave blank on product name
        And User leave blank on category
        And User choose variant "<variant>"
        # And User leave blank on "<variant>" price
        # And User leave blank on weight and volume
        # Then User click to the next steps
    Examples:
    |   type        |   variant     |
    |   Physical    |   Simple      |
    |   Physical    |   Bervarian   |
    # |   Digital     |   Simple      |
    # |   Digital     |   Bervarian   |
