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
        const { container } = render(<Subscription />);

        expect(container).not.toBeNull();
    });
    it('fills out values on the chooseCoffee page, tests for an error, and submits', async () => {
        container.addEventListener("icChange", callbackFn);
        // Check the current form step
        const stepOne = container.querySelector('ic-step[step-title="Choose coffee"]') as HTMLIcStepElement;
        expect(stepOne.stepType).toBe(stepStates.current);

        // Select radio-option from ic-radio-group
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
        const sizeMenuOption = await findByShadowLabelText(sizeSelect, "250g");
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
        });
        const detailSubmit = screen.getByShadowTestId("details-submit-btn") as HTMLIcButtonElement;
        await user.click(detailSubmit);

        expect(logSpy).toHaveBeenNthCalledWith(2, filledForm("details"));
    });
});
