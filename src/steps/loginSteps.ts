
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { expect } from 'chai';
import { baseUrl } from '../utils/config';

let loginPage: LoginPage;

Given('I navigate to the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLogin();
});

When('I log in with valid credentials', async function () {
  await loginPage.login('your_username', 'your_password');
});

Then('I should be logged in successfully', async function () {
  // Add assertions for successful login
  // For example, check if a user profile element is present
  const userProfile = await this.page.isVisible('.user-profile');
  expect(userProfile).to.be.true;
});
