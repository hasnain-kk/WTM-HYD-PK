# Pomelli Brandguide & Social Workflow
*For WTM Hyderabad & IWD 2026: Break the Pattern*

Now that your "Google Beautiful" interface is deployed to Firebase Hosting, you must feed the live environment to Pomelli to sync your social media channels with the website's exact UI/UX.

> [!TIP]
> This automation ensures your Instagram and LinkedIn deliverables perfectly inherit the Google Sans typography, the exact #4285F4 (Google Blue) / #673AB7 (Deep Purple) color codes, and the pill-button component layouts.

## Implementation Steps

### 1. Retrieve Staging URL
Run `firebase deploy --only hosting:staging` (or check your standard live domain). Copy the resulting Web URL to your clipboard.

### 2. Configure Pomelli Input
1. Open up Pomelli's Dashboard and navigate to the **"Brandguide Generator"** or **"Web Ingestion"** module.
2. In the "Website URL" prompt, paste your Firebase Staging URL.
3. Check the option: `"Inherit Typography & Color Variables (CSS/JSON Tokens)"`. Pomelli will scan your deployed `design-tokens.json` and the inline `animations.css` to grasp the visual metrics.

### 3. Specify the IWD Event Sub-Page
If you are generating posts for the April 13th Baithak, ensure you append `/iwd-2026` to the URL.
*Example: `https://wtm-hyderabad.web.app/iwd-2026`*

> [!IMPORTANT]
> Because we isolated the "Disruptive" mesh gradient specifically to this route, Pomelli will automatically adapt the post backgrounds and cards to use the `Deep Purple`, `Teal`, and `Coral` design language instead of the standard Google quartet.

### 4. Template Selection
- For **Instagram**: Select "Micro-Interaction Carousel". Pomelli can mimic the 400ms Standard Easing animations as video snippets for your Reels or Carousel items.
- For **LinkedIn**: Select "Speaker/Team Card Profile". It will scrape Hasnain KK and the local organizers directly from the generated DOM.

### 5. Final Output Checks
**No Dashes Rule**: Although our Registration confirmation enforces a zero-dash rule computationally, verify that Pomelli's generated text captions haven't hallucinated en or em dashes when summarizing the event.

You are now ready to hit schedule. Your socials will look 1:1 like your high-end Google Cloud Next architecture!
