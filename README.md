# AssignmentONE - Swift Translator Automation Tests

A comprehensive Playwright-based automated testing suite for validating the **Swift Translator** web application's text translation functionality from Romanized Sinhala to Sinhala script.

## 📋 Project Overview

This project contains automated test suites that validate the translation features of the Swift Translator application (https://www.swifttranslator.com/). The tests cover positive test cases, negative test cases, and UI functionality to ensure the translator accurately converts Romanized Sinhala text into proper Sinhala script.

### Key Features
- **Automated Browser Testing**: Uses Playwright for cross-browser testing (Chromium, Firefox, WebKit)
- **Multiple Test Suites**: Organized test cases for different scenarios
- **HTML Reporting**: Generates detailed HTML reports for test results
- **Parallel Execution**: Tests run in parallel for faster feedback
- **Multi-Browser Support**: Tests run across multiple browsers automatically

## 🗂️ Project Structure

```
AssignmentONE/
├── tests/
│   ├── ui_test.spec.js          # UI functionality tests
│   ├── pos_test.spec.js         # Positive test cases (16+ tests)
│   ├── neg_test.spec.js         # Negative test cases (10+ tests)
│   └── example.spec.js          # Example test template
├── playwright.config.js          # Playwright configuration
├── playwright-report/            # Generated HTML test reports
├── test-results/                 # Test execution results
├── package.json                  # Project dependencies
└── README.md                      # This file
```

## 📝 Test Suites Description

### 1. **UI Tests** (`ui_test.spec.js`)
- Tests basic UI functionality and translation accuracy
- Validates input/output boxes are working correctly
- Example: "mata gedhara yanna oonee." → "මට ගෙදර යන්න ඕනේ."

### 2. **Positive Tests** (`pos_test.spec.js`)
- Contains 16+ test cases for valid Romanized Sinhala input
- Tests common phrases, questions, and sentences
- Validates correct translation output in proper Sinhala script
- Examples:
  - "Api bath kanavaa." → "අපි බත් කනවා." (We are eating rice)
  - "magee nama Mahindha raajapakSha nemee yaluvee." → "මගේ නම මහින්ද රාජපක්ෂ නෙමේ යලුවේ."

### 3. **Negative Tests** (`neg_test.spec.js`)
- Contains 10+ test cases for edge cases and special scenarios
- Tests mixed content (Romanized + English words)
- Validates handling of incomplete or malformed input
- Examples:
  - "apimeetingekatayamu" → "අපිmeetingඑකටයමු" (mixed Sinhala/English)
  - "eyaa naqq hena simp kenek." → "එයා නං හෙන simp කෙනෙක්."

## 🚀 Setup Guide

### Prerequisites
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Windows, macOS, or Linux** operating system
- **Git** (optional, for cloning the repository)

### Installation Steps

1. **Clone or Navigate to the Project**
   ```bash
   cd C:\Users\charu\OneDrive\Desktop\HireMate-V1\TEST\AssignmentONE
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   
   This will install:
   - `@playwright/test` (v1.58.0) - Testing framework
   - `@types/node` (v25.0.10) - TypeScript type definitions

3. **Install Playwright Browsers** (if not automatically installed)
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
# Run only UI tests
npx playwright test ui_test.spec.js

# Run only positive tests
npx playwright test pos_test.spec.js

# Run only negative tests
npx playwright test neg_test.spec.js
```

### Run Tests in Headed Mode (with browser visible)
```bash
npx playwright test --headed
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Single Test
```bash
npx playwright test -g "Pos_Fun_0001"
```

### Run Tests on Specific Browser
```bash
# Chromium only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# WebKit (Safari) only
npx playwright test --project=webkit
```

## 📊 Viewing Test Reports

### Generate and View HTML Report
After running tests, view the detailed report:
```bash
npx playwright show-report
```

The HTML report includes:
- Test execution summary
- Pass/fail status for each test
- Screenshots and videos of failed tests
- Execution duration
- Error messages and stack traces

### Report Location
- **HTML Report**: `playwright-report/index.html`
- **Test Results**: `test-results/` directory

## ⚙️ Configuration Details

### Playwright Configuration (`playwright.config.js`)

```javascript
{
  testDir: './tests',           // Location of test files
  fullyParallel: true,          // Run tests in parallel
  forbidOnly: !!process.env.CI, // Fail on test.only in CI
  retries: process.env.CI ? 2 : 0,  // Retry failed tests on CI
  reporter: 'html',             // Generate HTML reports
  trace: 'on-first-retry',      // Capture traces on first retry
  projects: [
    { name: 'chromium' },       // Chrome/Edge
    { name: 'firefox' },        // Firefox
    { name: 'webkit' }          // Safari
  ]
}
```

## 🔍 Test Locators

The tests use the following locators to interact with the Swift Translator:

- **Input Box (Romanized Text)**
  ```javascript
  page.locator('textarea')
  ```

- **Output Box (Translated Text)**
  ```javascript
  page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50')
  ```

## 📈 Test Statistics

- **Total Test Cases**: 26+
- **Positive Test Cases**: 16+
- **Negative Test Cases**: 10+
- **UI Tests**: 1+
- **Browsers Tested**: 3 (Chromium, Firefox, WebKit)

## 🛠️ Troubleshooting

### Issue: Tests timeout
- **Solution**: Increase the timeout in `playwright.config.js` or check the website availability

### Issue: Browser not found
- **Solution**: Run `npx playwright install` to install browser binaries

### Issue: Tests fail with "element not found"
- **Solution**: The website structure may have changed; update selectors in test files

### Issue: Network errors
- **Solution**: Check internet connection and ensure https://www.swifttranslator.com/ is accessible

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Swift Translator Website](https://www.swifttranslator.com/)

## 👤 Author

**Charuka Ranesinh**  
GitHub: [charukaranesinhe2003](https://github.com/charukaranesinhe2003)

## 📄 License

ISC License - See LICENSE file for details

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## ⚠️ Important Notes

1. **Website Dependency**: Tests require internet connectivity and the Swift Translator website to be online
2. **Test Execution Time**: Running all tests across 3 browsers may take several minutes
3. **Parallel Execution**: By default, tests run in parallel; modify `fullyParallel` in `playwright.config.js` to disable
4. **CI/CD**: CI environment automatically retries failed tests twice

## 🔄 CI/CD Integration

This project is ready for CI/CD integration. Set the `CI` environment variable to enable:
- Automatic test retries
- Sequential test execution
- Forbid `test.only` usage
```bash
set CI=true && npx playwright test
```

---

**Last Updated**: January 2026  
**Status**: Active Development