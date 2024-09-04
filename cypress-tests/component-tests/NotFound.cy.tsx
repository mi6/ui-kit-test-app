/// <reference types="Cypress" />

import { mount } from "cypress/react";
import NotFound from "../../src/components/NotFound/NotFound";
import React from "react";
import {
  BE_VISIBLE,
  HAVE_PROP,
} from "../cypress/utils/cyConstants";
import Commands from "../cypress/support/commands";
import { BrowserRouter as Router } from "react-router-dom";

const DAY_INPUT_ARIA_LABEL = 'input[aria-label="day"]';
const MONTH_INPUT_ARIA_LABEL = 'input[aria-label="month"]';
const YEAR_INPUT_ARIA_LABEL = 'input[aria-label="year"]';

describe("Not Found page", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
  });
  it("should redirect back to home page from empty state", () => {
    mount(<NotFound />);

    Commands.checkHydrated("ic-empty-state");

    cy.get("ic-empty-state").should(BE_VISIBLE);

    cy.get("ic-link").should(HAVE_PROP, "href", "/");
  });

  it("should fill out feedback form", () => {
    mount(
      <Router>
        <NotFound />
      </Router>
  );

    Commands.checkHydrated("ic-empty-state");
    Commands.checkHydrated("ic-button");

    cy.get("ic-button").click();

    expect(cy.get("ic-dialog").should(BE_VISIBLE));
    
    Commands.checkHydrated("ic-select-with-multi");

    cy.findShadowEl("ic-select-with-multi", "button.select-input").click().realPress("ArrowDown")
    .realPress(["Shift", "ArrowDown"]);

    cy.findShadowEl("ic-select-with-multi", "button.select-input").click();

    cy.findShadowEl("ic-date-input", DAY_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl("ic-date-input", MONTH_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl("ic-date-input", YEAR_INPUT_ARIA_LABEL).type("4000");

    cy.findShadowEl("ic-dialog", "ic-button").contains("Confirm").click();

    cy.url().should('eq', 'http://localhost:5173/');
  });
});