"use client";

import { useEffect } from "react";

const IubendaScript = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = {
        "askConsentAtCookiePolicyUpdate": true,
        "floatingPreferencesButtonDisplay": "bottom-right",
        "perPurposeConsent": true,
        "siteId": 3679281,
        "whitelabel": false,
        "cookiePolicyId": 11302309,
        "lang": "it",
        "banner": {
          "acceptButtonCaptionColor": "#FFFFFF",
          "acceptButtonColor": "#0073CE",
          "acceptButtonDisplay": true,
          "backgroundColor": "#FFFFFF",
          "closeButtonRejects": true,
          "customizeButtonCaptionColor": "#4D4D4D",
          "customizeButtonColor": "#DADADA",
          "customizeButtonDisplay": true,
          "explicitWithdrawal": true,
          "listPurposes": true,
          "position": "float-top-center",
          "showTitle": false,
          "textColor": "#000000"
        }
      };
    `;
    document.head.appendChild(script1);
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//cdn.iubenda.com/cs/ccpa/stub.js";
    script2.async = true;
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.type = "text/javascript";
    script3.src = "//cdn.iubenda.com/cs/iubenda_cs.js";
    script3.async = true;
    document.head.appendChild(script3);
  }, []);

  return null;
};

export default IubendaScript;
