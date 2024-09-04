import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import {
  IcTopNavigation,
  IcNavigationItem,
  IcFooter,
  IcFooterLink,
} from "@ukic/react";

import "./App.css";
import SwitchRoutes from "./Routes";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <IcTopNavigation appTitle="Coffee" status="alpha" version="v0.0.1">
      <IcNavigationItem
        slot="navigation"
        label="Home"
        href="/"
        selected={location.pathname === "/"}
      />
      <IcNavigationItem
        slot="navigation"
        label="Subscriptions"
        href="/subscribe"
        selected={location.pathname === "/subscribe"}
      />
      <IcNavigationItem
        slot="navigation"
        label="FAQs"
        href="/info"
        selected={location.pathname === "/info"}
      />
    </IcTopNavigation>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <SwitchRoutes />
      <IcFooter description="This app is maintained by the ICDS team.">
        <IcFooterLink slot="link" href="https://design.sis.gov.uk/">
          ICDS guidance site
        </IcFooterLink>
        <IcFooterLink slot="link" href="https://github.com/mi6/ic-ui-kit">
          UI Kit Github
        </IcFooterLink>
      </IcFooter>
    </Router>
  );
};

export default App;
