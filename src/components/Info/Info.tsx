import {
  IcAccordion,
  IcDataEntity,
  IcDataRow,
  IcTypography,
  IcLink,
  IcStatusTag,
  IcAccordionGroup,
} from "@ukic/react";
import React from "react";

import "./index.css";

const Info: React.FC = () => {
  return (
    <div className="container">
      <IcTypography variant="h2" applyVerticalMargins>
        FAQs
      </IcTypography>
      <IcAccordionGroup singleExpansion>
        <IcAccordion
          heading="What is the ICDS?"
          message="The ICDS is a design system that provides a set of reusable components and guidelines for building consistent and user-friendly interfaces."
        />
        <IcAccordion heading="Which components are canary components?">
          <IcTypography applyVerticalMargins>
            Please find a list below of canary components
          </IcTypography>
          <IcDataEntity size="small">
            <IcDataRow label="Card horizontal">
              <IcLink
                slot="value"
                href="https://design.sis.gov.uk/components/card-horizontal"
              >
                Guidance for card horizontal
              </IcLink>
            </IcDataRow>
            <IcDataRow label="Data table">
              <IcLink
                slot="value"
                href="https://design.sis.gov.uk/components/data-table"
              >
                Guidance for data table
              </IcLink>
            </IcDataRow>
            <IcDataRow label="Date input">
              <IcLink
                slot="value"
                href="https://design.sis.gov.uk/components/date-input"
              >
                Guidance for date input
              </IcLink>
            </IcDataRow>
            <IcDataRow label="Date picker">
              <IcLink
                slot="value"
                href="https://design.sis.gov.uk/components/date-picker"
              >
                Guidance for date picker
              </IcLink>
            </IcDataRow>
            <IcDataRow label="Multi-select">
              <IcLink
                slot="value"
                href="https://design.sis.gov.uk/components/multi-select"
              >
                Guidance for multi-select
              </IcLink>
            </IcDataRow>
            <IcDataRow label="Tree view">
              <IcStatusTag label="Coming soon" slot="value" />
            </IcDataRow>
          </IcDataEntity>
        </IcAccordion>
        <IcAccordion heading="Which components aren't on this site?">
          <IcTypography>So far this site is not actively using:</IcTypography>
          <ul>
            <li>IcBadge</li>
            <li>IcBreadcrumb</li>
            <li>IcClassificationBanner</li>
            <li>IcLoadingIndicator</li>
            <li>IcPagination</li>
            <li>IcPopoverMenu</li>
            <li>IcSearchBar</li>
            <li>IcSideNavigation</li>
            <li>IcSkeleton</li>
            <li>IcSwitch</li>
            <li>IcTab</li>
            <li>IcToggleButton</li>
            <li>IcTooltip</li>
          </ul>
        </IcAccordion>
      </IcAccordionGroup>
    </div>
  );
};

export default Info;
