Feature: API scenarios

  @apitest
  Scenario: create user
    When I make a POST to create user with body '{"name": "Bingo", "job": "team lead"}'
    Then user is created successfully

  Scenario: update user
    When I update user with id 2 with the following body '{"name": "Angel", "job": "assistant teacher"}'
    Then user is updated successfully