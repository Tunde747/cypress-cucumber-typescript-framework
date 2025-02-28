Feature: datatable test


  Scenario: Login as user order and checkout
    Given I am logged as a "standard_user"
    When I add the following items to my cart
      | item                  |
      | Sauce Labs Bolt T-Shirt|
      | Sauce Labs Onesie |
    Then there should be 2 items in my cart
    When I proceed to checkout
    And I provide my contact information
    When I proceed to finish my order
    Then I should complete my order sucessfully.

