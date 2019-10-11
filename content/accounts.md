---
id: accounts_docs
title: Accounts
---

The **Accounts API** is a collection of endpoints that interact with ledger manager, supporting a number of banking features that allow users to keep track of their financial activity on the 10x platform.    
  
The collection includes functionality to view *transactions*, *balances*, *pools* and *budgets* on a given account subscription, with the APIs primarily supporting the **`GET`** operation. 
  
> An *account* is interchangeable with a *subscription* in the context of the **Accounts API**, thus the value for `accountId` is provided by the `subscriptionKey` which is returned in [**Subscriptions API**](subscriptions.md).  


### Transactions

Use the **`GET`** operation on `/v1/accounts/{accountId}/transactions` to return a list of all the transactions on carried out on an account, including payments in and payments out. 
     
The API response includes notable transaction fields including the `amount` , `dateTime`  and `transactionId`.  
   
> The `amount` field on items retrieved from the ledger will be represented as an object with `value` and `currency` properties.  

Use the **`GET`** operation on `/v1/accounts/{accountId}/transactions/{transactionId}` to return details for a specific `transactionId`.


### Balances

Use the **`GET`** operation on `/v1/accounts/{accountId}/balances` to return the available balances on an account. 

The API response includes notable balance fields including the `creditDebitIndicator` which gives an indicattion as to whether an account is in **`CREDIT`** or **`DEBIT`**, and also an `amount` representing what is in the account.  

### Budget

The budget resource allows you to create, retrieve and update a budget for a specified account. 
  
Use the **`POST`** operation on `/v1/accounts/{accountId}/budget`, supplying a `limit` on and a `frequency`. 

Use the **`GET`** operation to retrieve the budget set. 

Use the **`DELETE`** operation to delete active budgets.

This API response will return the the `startTime`, `limit` and `frequency`. 

### Spends

The spend resource allows you to retrieve values representing the actual and average spend on an account for a party. 

Use the **`GET`** operation on `/v1/accounts/{accountId}/spend` to return the  `daily`, `weekly`, and `monthly` fields for actual and average spends. 

### Pools

The pools resource allows you to retrieve the spend pool associated with the account.
   
Use the **GET** operation on `/v1/accounts/{accountId}/pools` to return the spendType and the amount associated with specified account. 

When specifying `spendType` as a query parameter `/v1/accounts/{accountId}/pools?spendType=day` the API response will return `spends`, `transactions` and `availableBalance` for the account.

### Statements

The statements resource allows you to get monthly statements, or generate statements by customized period. 

Use the **`GET`** operation on `/v1/accounts/{accountId}/statements` to get a list of available statements associated with an accountId.

Use the **`POST`** operation on `/v1/accounts/{accountId}/statements` to get url of PDF or CSV format statement for your account for a given period of time.

Also allows you to get the url for PDF format statement for a given document id. 


Check [**Accounts API Reference**](/api-reference/#10x-banking-api-accounts) for more details