import React from "react"

import CloudflareLogo from "./cloudflare-logo"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a className="DocsSidebar--cloudflare-logo-link DocsSidebar--link" href="https://mihr.io/#projects">
      <DocsNavLogoLockup
        logo={<CloudflareLogo/>}
        text={(
          <>
            <span data-text="Mihir's">Mihir's</span>
            <span>&nbsp;</span>
            <span data-text="Projects">Projects</span>
          </>
        )}
      />
    </a>
  </div>
)

export default DocsSidebarHeaderSection
