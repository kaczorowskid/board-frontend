import { Gherkin } from '../../support/gherkin';
import { commands } from './commands';

export const scenarios = {
  'I check login': () => {
    const { Given } = Gherkin(commands);

    Given('System open page', 'http://localhost:3000')
      .When('I fill the input', 'email', 'b@.pl')
      .Then('Check if validation message is visible', 'email', 'isVisible')
      .And('Check validation', 'email', 'email is not a valid email')
      .When('I clear the input', 'email')
      .Then('Check if validation message is visible', 'email', 'isVisible')
      .And('Check validation', 'email', 'Please enter email')
      .When('I fill the input', 'email', 'b@b.pl')
      .Then('Check if validation message is visible', 'email', 'isNotVisible')
      .When('I fill the input', 'password', 'b')
      .Then('Check if validation message is visible', 'password', 'isVisible')
      .And(
        'Check validation',
        'password',
        'password must be between 3-40 characters'
      )
      .When('I clear the input', 'password')
      .Then('Check if validation message is visible', 'password', 'isVisible')
      .And('Check validation', 'password', 'Please enter password')
      .When('I fill the input', 'password', 'bbb')
      .Then(
        'Check if validation message is visible',
        'password',
        'isNotVisible'
      )
      .When('I click the login button')
      .Then('Check if redirect on dashboard');
  }
};
