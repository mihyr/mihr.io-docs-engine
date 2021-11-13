import React from "react"

import CloudflareLogo from "./cloudflare-logo"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a className="DocsSidebar--cloudflare-logo-link DocsSidebar--link" href="https://pegasus.mihr.io">
      <DocsNavLogoLockup
        logo={<Img src='https://raw.githubusercontent.com/PegasusDrone/pegasus-docs-engine/master/src/components/icon.png'/>}
        text={(
          <>
            <span data-text="Pegasus">Pegasus</span>
            <span>&nbsp;</span>
            <span data-text="Docs">Docs</span>
          </>
        )}
      />
    </a>
  </div>
)

export default DocsSidebarHeaderSection
