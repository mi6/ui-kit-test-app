import Subscription from '../Subscription.tsx';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Subscription component', () => {
    it('renders', async () => {
        const { container } = render(<Subscription />);
        
        expect(container).not.toBeNull();
    });
    it('fills out values on the chooseCoffee page and submits', async () => {
        const user = userEvent.setup();
        const { container } = render(<Subscription />);
        
        // Listeners
        const callbackFn = jest.fn();
        container.addEventListener("icChange", callbackFn);
    
        // Check the current form step
        const stepOne = container.querySelector('ic-step[step-title="Choose coffee"]') as HTMLIcStepElement;
        expect(stepOne.stepType).toBe('current');
    
        // Select radio-option
        const coffeeRadio = container.querySelector(
            'ic-radio-option[value="house"]'
        ) as HTMLIcRadioOptionElement;
    
        await user.click(coffeeRadio);
    
        expect(callbackFn).toHaveBeenCalled();
        expect(coffeeRadio.selected).toBe(true);
    });
});