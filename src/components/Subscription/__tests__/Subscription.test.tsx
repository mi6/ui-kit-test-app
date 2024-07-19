import Subscription from '../Subscription.tsx';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
    screen,
    findByShadowLabelText,
    getByShadowLabelText,
    getByShadowTestId,
    getAllByShadowLabelText,
    // within,
    // deepQuerySelectorAll,
    // deepQuerySelector,
    // logShadowDOM,
} from 'shadow-dom-testing-library'

const formValues = {
  grind: 'whole',
  variety: 'house',
  size: '250',
  name: 'Java the Hutt',
  email: 'javadahutt@hothmail.com',
  phone: '1138',
  contact: ['sms', 'email'],
}

const filledForm = (page?: string): {} => {
  const date = new Date();
  return {
    "checkoutForm": {
      "dateToStart": page === "checkout" ? date : '',
      "terms": page === "checkout" ? "agree" : '',
    },
    "coffeeForm": {
      "grind": formValues.grind,
      "size": formValues.size,
      "variety": formValues.variety,
    },
    "detailForm": {
      "contact": [
        page === "details" || page === "checkout" ? formValues.contact[0] : "",
        page === "details" || page === "checkout" ? formValues.contact[1] : "",
      ],
      "email": page === "details" || page === "checkout" ? formValues.email : "",
      "name": page === "details" || page === "checkout" ? formValues.name : "",
      "phone": page === "details" || page === "checkout" ? formValues.phone : "",
    },
  }
}

const stepStates = {
  current: 'current',
  completed: 'completed',
}

function findDeepInShadowDOM(root: Element | ShadowRoot, selector: string): Element | null {
  let element = root.querySelector(selector);
  if (element) {
    return element;
  }

  
  const shadowHosts = root.querySelectorAll('*');
  for (let i = 0; i < shadowHosts.length; i++) {
    const potentialShadowRoot = shadowHosts[i].shadowRoot;
    if (potentialShadowRoot) {
      element = findDeepInShadowDOM(potentialShadowRoot, selector);
      if (element) {
        return element; 
      }
    }
  }

  return null;
}

describe('Subscription component', () => {
  let container: HTMLElement;
  let callbackFn: jest.Mock;
  let logSpy: jest.SpyInstance;
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(async () => {
    const renderResult = render(<Subscription />);
    container = renderResult.container;
    user = userEvent.setup();
    container.addEventListener("icChange", callbackFn);
    callbackFn = jest.fn();
    logSpy = jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    container.removeEventListener("icChange", callbackFn);
    jest.restoreAllMocks();
  });
    it('renders', async () => {
        // const { container } = render(<Subscription />);

        expect(container).not.toBeNull();
    });
    it('fills out values on the chooseCoffee page, tests for an error, and submits', async () => {
        container.addEventListener("icChange", callbackFn);

        // Check the current form step
        const stepOne = container.querySelector('ic-step[step-title="Choose coffee"]') as HTMLIcStepElement;
        expect(stepOne.stepType).toBe(stepStates.current);

        // Select radio-option from ic-radio-group
        const coffeeRadio = container.querySelector(
            'ic-radio-option[value="house"]'
        ) as HTMLIcRadioOptionElement;

        await user.click(coffeeRadio);

        expect(callbackFn).toHaveBeenCalled();
        expect(coffeeRadio.selected).toBe(true);

        // Try submitting to see error state
        const coffeeSubmit = screen.getByShadowTestId("coffee-submit-btn") as HTMLIcButtonElement;
        await user.click(coffeeSubmit);

        // ic-alert should be visible
        const alert = container.querySelector('ic-alert') as HTMLIcAlertElement;
        expect(alert).not.toBeNull();

        // Select size from ic-select
        const sizeSelect = container.querySelector('ic-select[label="Size"]') as HTMLIcSelectElement;
        // await user.click(sizeSelect);

        // find ic-menu in the shadowRoot of ic-select
        const sizeMenuOption = await findByShadowLabelText(sizeSelect, "250g")
        await user.click(sizeMenuOption);
        expect(callbackFn).toHaveBeenCalled();

        // Submit first page of form
        await user.click(coffeeSubmit);
        expect(logSpy).toHaveBeenNthCalledWith(2, filledForm());
    });
    it('fills out values on the enterDetails page and submits', async () => {
      const coffeeRadio = container.querySelector(
        'ic-radio-option[value="house"]'
      ) as HTMLIcRadioOptionElement;
      await user.click(coffeeRadio);
      const coffeeSubmit = getByShadowTestId(container, "coffee-submit-btn") as HTMLIcButtonElement;
      const sizeSelect = container.querySelector('ic-select[label="Size"]') as HTMLIcSelectElement;
      const sizeMenuOption = await findByShadowLabelText(sizeSelect,"250g");
      await user.click(sizeMenuOption);
      await user.click(coffeeSubmit);

      // Check second page is loaded
      const stepTwo = await container.querySelector('ic-step[step-title="Enter Details"]') as HTMLIcStepElement;
      expect(stepTwo.stepType).toBe(stepStates.current);

      const detailsTypography = await screen.findByShadowText('Please enter your details') as HTMLIcTypographyElement;
      await waitFor(() => {
        expect(detailsTypography).toHaveClass('hydrated');
      });

      // Fill out second page of form and submit
      const nameTextField = getByShadowLabelText(container, "Name");
      await user.type(nameTextField, formValues.name)
      const emailTextField = getAllByShadowLabelText(container, "Email")[0];
      await user.type(emailTextField, formValues.email)
      const phoneTextField = getByShadowLabelText(container, "Phone");
      await user.type(phoneTextField, formValues.phone)

      const checkboxes = screen.getAllByShadowRole('checkbox')
      await checkboxes.forEach(async (checkbox) => {
        await user.click(checkbox);
      }
      );
      const detailSubmit = screen.getByShadowTestId("details-submit-btn") as HTMLIcButtonElement;
      await user.click(detailSubmit);

      expect(logSpy).toHaveBeenNthCalledWith(2, filledForm("details"));
    });
    it.only('fills out values on the checkout page and submits', async () => {
     // Fill out first two pages of form and submit
      const coffeeRadio = container.querySelector(
        'ic-radio-option[value="house"]'
      ) as HTMLIcRadioOptionElement;
      await user.click(coffeeRadio);
      const coffeeSubmit = getByShadowTestId(container, "coffee-submit-btn") as HTMLIcButtonElement;
      const sizeSelect = container.querySelector('ic-select[label="Size"]') as HTMLIcSelectElement;
      const sizeMenuOption = await findByShadowLabelText(sizeSelect,"250g");
      await user.click(sizeMenuOption);
      await user.click(coffeeSubmit);
      const detailsTypography = await screen.findByShadowText('Please enter your details') as HTMLIcTypographyElement;
      await waitFor(() => {
        expect(detailsTypography).toHaveClass('hydrated');
      });
      const nameTextField = getByShadowLabelText(container, "Name");
      await user.type(nameTextField, formValues.name)
      const emailTextField = getAllByShadowLabelText(container, "Email")[0];
      await user.type(emailTextField, formValues.email)
      const phoneTextField = getByShadowLabelText(container, "Phone");
      await user.type(phoneTextField, formValues.phone)
      const checkboxes = screen.getAllByShadowRole('checkbox')
      await checkboxes.forEach(async (checkbox) => {
        await user.click(checkbox);
      }
      );
      const detailSubmit = screen.getByShadowTestId("details-submit-btn") as HTMLIcButtonElement;
      await user.click(detailSubmit);

      // Check third page is loaded
      const stepThree = await container.querySelector('ic-step[step-title="Checkout"]') as HTMLIcStepElement;
      expect(stepThree.stepType).toBe(stepStates.current);


      // Fill out third page of form and submit
      // const datePicker = container.querySelector('ic-date-picker') as HTMLIcDatePickerElement;
      // const dateInput = deepQuerySelector(container, 'ic-date-input') as HTMLIcDateInputElement;
      // const calendarButton = dateInput.shadowRoot?.querySelector("#calendar-button") as HTMLIcButtonElement
      // await user.click(calendarButton)
      // const dunno = datePicker.getAllByShadowRole('button')
      // screen.debug(calendarButton)
      


      const calendarButton = findDeepInShadowDOM(container, 'ic-button');
      if (calendarButton) {
        console.log('Found calendar button:', calendarButton);
      } else {
        console.log('Calendar button not found');
      }
      // screen.debug(calendarButton);
      // await user.click(calendarButton)
      // const dayButton = datePicker.shadowRoot?.querySelector('button[class="day-button today focussed"]') as HTMLButtonElement;
      // logShadowDOM()
      // screen.debug(dayButton)
      // console.log(dayButton);
      // const dayButton = datePicker.shadowRoot?.querySelector('button[class="day-button today focussed"]') as HTMLButtonElement;

      // const dateInput = await findByShadowLabelText(datePicker, "Date to start");
      // screen.debug(dayButton)

      // datePicker.querySelector('input').value = new Date()
      // screen.debug(datePicker)
      // const termsCheckbox = getByShadowLabelText(datePicker, "Agree") as HTMLIcCheckboxElement;
      // await user.click(termsCheckbox);

      // const checkoutSubmit = screen.getByShadowText("Submit order") as HTMLIcButtonElement;
      // await user.click(checkoutSubmit);

      // expect(logSpy).toHaveBeenNthCalledWith(2, filledForm("checkout"));
      });
});

   // Select a date using the date picker
    // findShadowEl(IC_DATE_PICKER, IC_DATE_INPUT)
    //   .shadow()
    //   .find(CALENDAR_BUTTON_ID)
    //   .click();
    // findShadowEl(IC_DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).click();
    // checkDateInputValue(new Date());