Silktide Consent Manager is a cookie consent banner for websites, delivered as one JavaScript file and one stylesheet. A page loads both, from the jsDelivr CDN or from files the site hosts, then calls an init function with the consent types the site uses. The banner stores each visitor's choice in the browser and loads third-party scripts only after consent. It updates Google Consent Mode and can fire a custom event for Google Tag Manager. The code is published in the repository of Silktide, a company that also sells a separate platform for website governance.

## Worth knowing

Choices are kept in the visitor's browser and nothing is sent to Silktide. The project's FAQ says a site that needs to show a visitor consented has to send each choice to its own server or analytics. The banner's compliance statements are the project's own claims about GDPR and ePrivacy.
