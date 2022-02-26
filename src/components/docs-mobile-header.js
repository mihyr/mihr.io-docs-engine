import React from "react"

import CloudflareLogo from "./cloudflare-logo"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsMobileHeader = () => (
  <div className="DocsMobileHeader">
    <a className="DocsMobileHeader--cloudflare-logo-link Link Link-without-underline" href="https://mihr.io/#projects">
      <DocsNavLogoLockup
        small={true}
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

export default DocsMobileHeader
