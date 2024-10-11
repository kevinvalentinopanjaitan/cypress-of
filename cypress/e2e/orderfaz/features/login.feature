Feature: Login

    Background: User Navigate To Orderfaz
        Given User navigate to orderfaz website

    Scenario Outline: User login with '<condition>'
        When User fill '<email>' and '<password>'
        And User click login button
        Then User '<result>' login
        Examples:
            | email              | password         | result       | condition         |
            | 48yunyun@gmail.com | S6BWY3Qhc84K7gta | successfully | valid credentials |
            | akmjboss@gmail.com | S6BWY3Qhc84K7gta | failed       | invalid email     |