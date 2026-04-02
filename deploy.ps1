# WTM Hyderabad & IWD 2026: Firebase Deployment Script
# Use this in PowerShell to build and push to Firebase Hosting.

Write-Output "Building the Google Beautiful React App..."
# Ensures strict building without breaking constraints
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Output "Build Successful. Deploying to Firebase Hosting..."
    # You must be authenticated via `firebase login` first.
    firebase deploy --only hosting
    Write-Output "Deployment Complete! Check the Pomelli Guidelines to generate social media posts."
} else {
    Write-Output "Build failed. Fix frontend errors before deploying."
}
