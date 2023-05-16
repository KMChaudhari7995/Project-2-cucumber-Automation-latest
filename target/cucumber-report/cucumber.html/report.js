$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktopspage.feature");
formatter.feature({
  "line": 1,
  "name": "Desktops Test",
  "description": "As user I want to verify the product arranged in alphabetical order",
  "id": "desktops-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8457010700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to verify the product arranged in alphabetical order",
  "description": "",
  "id": "desktops-test;user-should-be-able-to-verify-the-product-arranged-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover and click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I pass selectMenu method name \"Show AllDesktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by position \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify that the product is arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 146254200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnDesktopsTab()"
});
formatter.result({
  "duration": 207137400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 31
    }
  ],
  "location": "HomePageTestSteps.iPassSelectMenuMethodName(String)"
});
formatter.result({
  "duration": 1128072800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 27
    }
  ],
  "location": "DesktopsTestSteps.i_select_sort_by_position(String)"
});
formatter.result({
  "duration": 672303700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsTestSteps.i_should_be_able_to_verify_that_the_product_is_arranged_in_descending_order()"
});
formatter.result({
  "duration": 395669400,
  "status": "passed"
});
formatter.after({
  "duration": 797217600,
  "status": "passed"
});
formatter.before({
  "duration": 4190272900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to verify that product is added to shopping cart successfully",
  "description": "",
  "id": "desktops-test;user-should-be-able-to-verify-that-product-is-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 12,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover and click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I pass selectMenu method name \"Show AllDesktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select sort by position \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on product \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the text \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select Delivery Date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter qty \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on “Add to Cart” button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the message \"Success: You have added HP LP3065 to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on link \"shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Verify the shopping cart with below values",
  "rows": [
    {
      "cells": [
        "heading",
        "productName",
        "deliveryDate",
        "model",
        "total"
      ],
      "line": 26
    },
    {
      "cells": [
        "Shopping Cart",
        "HP LP3065",
        "Delivery Date:2023-11-30",
        "Product 21",
        "$122.00"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnDesktopsTab()"
});
formatter.result({
  "duration": 202849400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 31
    }
  ],
  "location": "HomePageTestSteps.iPassSelectMenuMethodName(String)"
});
formatter.result({
  "duration": 1125121900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 27
    }
  ],
  "location": "DesktopsTestSteps.i_select_sort_by_position(String)"
});
formatter.result({
  "duration": 633030100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 20
    }
  ],
  "location": "DesktopsTestSteps.i_click_on_product(String)"
});
formatter.result({
  "duration": 1593546100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 19
    }
  ],
  "location": "DesktopsTestSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 48336700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 24
    }
  ],
  "location": "DesktopsTestSteps.iSelectDeliveryDate(String)"
});
formatter.result({
  "duration": 10013528100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "DesktopsTestSteps.iEnterQty(String)"
});
formatter.result({
  "duration": 99386000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsTestSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 108721600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added HP LP3065 to your shopping cart!",
      "offset": 22
    }
  ],
  "location": "DesktopsTestSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 322996500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shopping cart",
      "offset": 17
    }
  ],
  "location": "DesktopsTestSteps.iClickOnLink(String)"
});
formatter.result({
  "duration": 719239400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsTestSteps.iVerifyTheShoppingCartWithBelowValues(DataTable)"
});
formatter.result({
  "duration": 184927400,
  "status": "passed"
});
formatter.after({
  "duration": 789206300,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As user I want to navigate to Desktops, LaptopsAndNotebooks and Components menu successfully",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3919220200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to navigate to Desktops menu successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-navigate-to-desktops-menu-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover and click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I pass selectMenu method name \"Show AllDesktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to verify Desktops text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 51300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnDesktopsTab()"
});
formatter.result({
  "duration": 183422700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 31
    }
  ],
  "location": "HomePageTestSteps.iPassSelectMenuMethodName(String)"
});
formatter.result({
  "duration": 1009599600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iShouldBeAbleToVerifyDesktopsText()"
});
formatter.result({
  "duration": 41081800,
  "status": "passed"
});
formatter.after({
  "duration": 764104500,
  "status": "passed"
});
formatter.before({
  "duration": 4255436700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to navigate to LaptopsAndNotebooks menu successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-navigate-to-laptopsandnotebooks-menu-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover and click on Laptops \u0026 Notebooks tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I pass selectMenu method name \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify Laptops \u0026 Notebooks text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 377700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnLaptopsNotebooksTab()"
});
formatter.result({
  "duration": 166810300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 31
    }
  ],
  "location": "HomePageTestSteps.iPassSelectMenuMethodName(String)"
});
formatter.result({
  "duration": 736965600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iShouldBeAbleToVerifyLaptopsNotebooksText()"
});
formatter.result({
  "duration": 44797900,
  "status": "passed"
});
formatter.after({
  "duration": 720616400,
  "status": "passed"
});
formatter.before({
  "duration": 3941292200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to navigate to Components menu successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-navigate-to-components-menu-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I mouse hover and click on Components tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I pass selectMenu method name \"Show AllComponents\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able to verify Components text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnComponentsTab()"
});
formatter.result({
  "duration": 187491900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllComponents",
      "offset": 31
    }
  ],
  "location": "HomePageTestSteps.iPassSelectMenuMethodName(String)"
});
formatter.result({
  "duration": 761352500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iShouldBeAbleToVerifyComponentsText()"
});
formatter.result({
  "duration": 38152800,
  "status": "passed"
});
formatter.after({
  "duration": 713333600,
  "status": "passed"
});
formatter.uri("laptopsandnotebookspage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops and notebooks page",
  "description": "\r\nAs a user I should be able to navigate laptops and notebooks page and place an order successfully",
  "id": "laptops-and-notebooks-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4048201900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to verify products price display high to low successfully",
  "description": "",
  "id": "laptops-and-notebooks-page;user-should-be-able-to-verify-products-price-display-high-to-low-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover and click on Laptops \u0026 Notebooks tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be able to verify that the product is arranged in High to Low order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnLaptopsNotebooksTab()"
});
formatter.result({
  "duration": 157486100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOn(String)"
});
formatter.result({
  "duration": 697623700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iSelectSortBy(String)"
});
formatter.result({
  "duration": 511755400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iShouldBeAbleToVerifyThatTheProductIsArrangedInHighToLowOrder()"
});
formatter.result({
  "duration": 213916200,
  "status": "passed"
});
formatter.after({
  "duration": 792307700,
  "status": "passed"
});
formatter.before({
  "duration": 3982315300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should be able to verify that user place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-page;user-should-be-able-to-verify-that-user-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@sanity"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on Laptops \u0026 Notebooks tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select Product \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify the productText \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"Add To Cart\" button on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the MacBook message \"Success: You have added MacBook to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on link “shopping cart” display on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the text \"Shopping Cart\" from MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the text \"MacBook\" product name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I change the quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on \"Update\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify the message \"Success: You have modified your shopping cart!\" on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the Total £737.45",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on \"Checkout\" button on MACBook page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the text \"checkout\" on MacBook page shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the text \"New Customer\" on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \"Guest Checkout\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \"Continue\" tab on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter below details in the form",
  "rows": [
    {
      "cells": [
        "John",
        "Smith",
        "john123@gmail.com",
        "056981239",
        "CrossWay",
        "Slough",
        "363641",
        "United Kingdom",
        "Cardiff"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on \"Continue\" Button on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I add comments about your order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I verify the message \"Warning: Payment method required!\" on checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnLaptopsNotebooksTab()"
});
formatter.result({
  "duration": 174186300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOn(String)"
});
formatter.result({
  "duration": 15928326100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iSelectSortBy(String)"
});
formatter.result({
  "duration": 489155000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iSelectProduct(String)"
});
formatter.result({
  "duration": 1378460700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheProductText(String)"
});
formatter.result({
  "duration": 51210700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnButtonOnMacBookPage(String)"
});
formatter.result({
  "duration": 127245900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added MacBook to your shopping cart!",
      "offset": 30
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheMacBookMessage(String)"
});
formatter.result({
  "duration": 274071500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iClickOnLinkShoppingCartDisplayOnMacBookPage()"
});
formatter.result({
  "duration": 631548700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextFromMacBookPage(String)"
});
formatter.result({
  "duration": 36605300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextProductName(String)"
});
formatter.result({
  "duration": 36528400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 111024900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnTab(String)"
});
formatter.result({
  "duration": 736026700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have modified your shopping cart!",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheMessageOnMacBookPage(String)"
});
formatter.result({
  "duration": 37657100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "737",
      "offset": 20
    },
    {
      "val": "45",
      "offset": 24
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTotal£(int,int)"
});
formatter.result({
  "duration": 39338600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnButtonOnMACBookPage(String)"
});
formatter.result({
  "duration": 482976600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkout",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextOnMacBookPageShoppingCart(String)"
});
formatter.result({
  "duration": 25203800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Customer",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextOnMacBookPage(String)"
});
formatter.result({
  "duration": 2026835700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guest Checkout",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnRadioButton(String)"
});
formatter.result({
  "duration": 65380600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnTabOnMacBookPage(String)"
});
formatter.result({
  "duration": 81426200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iEnterBelowDetailsInTheForm(DataTable)"
});
formatter.result({
  "duration": 1371328500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnButtonOnCheckoutPage(String)"
});
formatter.result({
  "duration": 2097627800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iAddCommentsAboutYourOrderIntoTextArea()"
});
formatter.result({
  "duration": 756772800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iCheckTheTermsConditionsCheckBox()"
});
formatter.result({
  "duration": 273746300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iClickOnContinue()"
});
formatter.result({
  "duration": 80063300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warning: Payment method required!",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheMessageOnCheckoutPage(String)"
});
formatter.result({
  "duration": 292472000,
  "status": "passed"
});
formatter.after({
  "duration": 798734600,
  "status": "passed"
});
formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As user I want to navigate to login link and verify the login and logout functionality",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3943675800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to navigate to login page successfully",
  "description": "",
  "id": "login-functionality;user-should-be-able-to-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I pass selectMyAccountOptions method parameter \"Login\" on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to verify the text \"Returning Customer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 48
    }
  ],
  "location": "LoginTestPage.iPassSelectMyAccountOptionsMethodParameterOnHomepage(String)"
});
formatter.result({
  "duration": 576087600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 37
    }
  ],
  "location": "LoginTestPage.i_should_be_able_to_verify_the_text(String)"
});
formatter.result({
  "duration": 47670000,
  "status": "passed"
});
formatter.after({
  "duration": 722434800,
  "status": "passed"
});
formatter.before({
  "duration": 4052735600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to login and logout successfully",
  "description": "",
  "id": "login-functionality;user-should-be-able-to-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I pass selectMyAccountOptions method parameter \"Login\" on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter the below details in the form",
  "rows": [
    {
      "cells": [
        "magnussmith123@gmail.com",
        "smith123456"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify text \"My Account\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I pass selectMyAccountOptions method parameter \"Logout\" on my account page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify text \"Account Logout\" from homepage",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on continue button on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 18800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 48
    }
  ],
  "location": "LoginTestPage.iPassSelectMyAccountOptionsMethodParameterOnHomepage(String)"
});
formatter.result({
  "duration": 564757000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iEnterTheBelowDetailsInTheForm(DataTable)"
});
formatter.result({
  "duration": 226528400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnLoginButton()"
});
formatter.result({
  "duration": 730866300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iVerifyText(String)"
});
formatter.result({
  "duration": 37896800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 48
    }
  ],
  "location": "LoginTestPage.iPassSelectMyAccountOptionsMethodParameterOnMyAccountPage(String)"
});
formatter.result({
  "duration": 791221900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iVerifyTextFromHomepage(String)"
});
formatter.result({
  "duration": 37856400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnContinueButtonOnHomepage()"
});
formatter.result({
  "duration": 485949600,
  "status": "passed"
});
formatter.after({
  "duration": 730908000,
  "status": "passed"
});
formatter.uri("registerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality",
  "description": "As user I want to navigate to register link and verify the registration functionality",
  "id": "registration-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3825929900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to navigate to register page successfully",
  "description": "",
  "id": "registration-functionality;user-should-be-able-to-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I pass selectMyAccountOptions method parameter \"Register\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to verify \"Register Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 48
    }
  ],
  "location": "RegistrationTestPage.i_pass_selectMyAccountOptions_method_parameter(String)"
});
formatter.result({
  "duration": 839767900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 28
    }
  ],
  "location": "RegistrationTestPage.i_should_be_able_to_verify(String)"
});
formatter.result({
  "duration": 45023900,
  "status": "passed"
});
formatter.after({
  "duration": 700445900,
  "status": "passed"
});
formatter.before({
  "duration": 4063785400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should be able to navigate to register page successfully",
  "description": "",
  "id": "registration-functionality;user-should-be-able-to-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I pass selectMyAccountOptions method parameter \"Register\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email id",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter below details in the registration form",
  "rows": [
    {
      "cells": [
        "Magnus",
        "Smith",
        "0782565511",
        "smith123456",
        "smith123456"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select subscribe yes radio button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on Privacy Policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on Continue button on register account page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Verify the message \"Your Account Has Been Created!\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I pass selectMyAccountOptions method parameter \"Logout\" on registration page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the text \"Account Logout\" on registration page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 48
    }
  ],
  "location": "RegistrationTestPage.i_pass_selectMyAccountOptions_method_parameter(String)"
});
formatter.result({
  "duration": 818142500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestPage.iEnterEmailId()"
});
formatter.result({
  "duration": 226082900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestPage.iEnterBelowDetailsInTheRegistrationForm(DataTable)"
});
formatter.result({
  "duration": 411847300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestPage.iSelectSubscribeYesRadioButton()"
});
formatter.result({
  "duration": 73950100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestPage.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 75604100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestPage.iClickOnContinueButtonOnRegisterAccountPage()"
});
formatter.result({
  "duration": 694203800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 22
    }
  ],
  "location": "RegistrationTestPage.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 37772400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestPage.iClickOnContinueTab()"
});
formatter.result({
  "duration": 437890900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 48
    }
  ],
  "location": "RegistrationTestPage.iPassSelectMyAccountOptionsMethodParameterOnRegistrationPage(String)"
});
formatter.result({
  "duration": 779156000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 19
    }
  ],
  "location": "RegistrationTestPage.iVerifyTheTextOnRegistrationPage(String)"
});
formatter.result({
  "duration": 45369300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestPage.iClickOnContinueButton()"
});
formatter.result({
  "duration": 490347800,
  "status": "passed"
});
formatter.after({
  "duration": 722257500,
  "status": "passed"
});
});