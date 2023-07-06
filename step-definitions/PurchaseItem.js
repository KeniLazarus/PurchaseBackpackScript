import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../support/pages/login.page.js';
import InventoryPage from '../support/pages/InventoryPage.page.js';
import ShoppingCart from '../support/pages/ShoppingCart.page.js';
import CheckoutStepOne from '../support/pages/CheckoutStepOne.page.js';
import CheckoutStepTwo from '../support/pages/CheckoutStepTwo.page.js';
import CheckoutComplete from '../support/pages/CheckoutComplete.page.js';

Given(/I am on the login page$/, async () => {
    await browser.url("/")});

Given(/^I login with credentials$/, async () => {
    await LoginPage.login('standard_user','secret_sauce')});

Given(/^I am on the inventory page$/, async () => {
    await InventoryPage.SauceLabsBackpackExists()});

Given(/^I choose a product and click on add to cart$/, async () => {
    await InventoryPage.SauceLabsBackpackAddToCart()});

Given(/^I click on the shopping cart$/, async () => {
    await InventoryPage.GoToCart()});

Given(/^I am on the cart page$/, async () => { 
    await ShoppingCart.CartPageIdentifier()});

Given(/^I click on checkout$/, async () => {
    await ShoppingCart.CheckoutButtonClick()});

Given(/^I am on the checkout page step one$/, async () => {
    await CheckoutStepOne.CheckoutPageOneIdentifier()});

Given(/^I input the requested information$/, async () => {
    await CheckoutStepOne.InputRequestedInformation('Keni','Lazarus','12345')});

Given(/^I click on continue$/, async () => {
    await CheckoutStepOne.ClickOnContinueButton()});

Given(/^I am on the checkout page step two$/, async () => { 
    await CheckoutStepTwo.CheckoutPageTwoIdentifier()});

When(/^I click on finish$/, async () => {
    await CheckoutStepTwo.ClickOnFinish()});

Then(/^I have completed my order$/, async () => {
    await CheckoutComplete.OrderCompleted()});

