import Header from './Header'

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />)
  })
})