# SimpleCheckout Playground

This repository contains an example implementation of the SimpleCheckout SDK, serving as a playground and reference for integration.

## Overview

The SimpleCheckout Playground is a client-facing application where you can test credit card tokenization and interact with the `CreditCardForm` and `CVCVerificationForm` components using sandbox API keys.

It demonstrates how to integrate `simplecheckout-sdk` into a web application.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Fewsats/simplecheckout-playground.git
    cd simplecheckout-playground
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3001` (or another port if 3001 is busy).

## Usage

### Credit Card Tokenization
Navigate to `http://localhost:3001/` to test the credit card tokenization flow.

1.  Enter your **Publishable Key** and **Customer ID** (sandbox credentials).
2.  Click **Initialize Form**.
3.  Fill in the credit card details and email.
4.  Submit to receive a token.

### Account Connection
Navigate to `http://localhost:3001/account.html` to test connecting user accounts.

1.  Enter your **Publishable Key** and **Customer ID**.
2.  Select a **Login Source** (fetched automatically when key is entered).
3.  Click **Initialize Account Form**.
4.  Enter credentials to connect the account.

## Tips

Both pages accept URL parameters, which is convenient for debugging—bookmark a link with your credentials pre-filled:

**Credit Card Tokenization:**
```
http://localhost:3001/?publishable_key=pk_sandbox_xxx&customer_id=your-customer-uuid
```

**Account Connection:**
```
http://localhost:3001/account.html?publishable_key=pk_sandbox_xxx&customer_id=your-customer-uuid&login_source_id=your-login-source-uuid
```

## Documentation


For full SDK documentation, please refer to the [SimpleCheckout Documentation](https://docs.simplecheckout.ai/).

- [Connecting Customer Account](https://docs.simplecheckout.ai/connecting-accounts)
- [Tokenizing Credit Cards](https://docs.simplecheckout.ai/collecting-users-cc)
- [CVC Verification](https://docs.simplecheckout.ai/cvc-verification)