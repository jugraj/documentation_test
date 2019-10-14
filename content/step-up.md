---
id: step_up_docs
title: Step-Up
---

## Step-Up (Re-Auth) User blah blah

As part of some API calls, the user will be asked to strong customer (step-up) authenticate using one of the available authentication types plus the Cryptomathic-generated device ID. Currently, this flow is only enabled for domestic payments so when the user attempts to make a payment, it will need to go through the step-up authentication process.

> Once the feature is available in an environment, these APIs can only be tested using a Cryptomathic-enabled mobile device. This is to ensure that the feature is two-factor compliant, using passcode/biometric and the Cryptomathic-generated device ID.

When a payment is initiated through the Domestic Payments API without a valid transaction identifier, the platform will return a 403 error with following response to indicate that the request requires step-up authentication.

**Initial Request: khasdk hasf haskf als hasoay **

```
POST /v1/payments/domestic  

Headers:
Content-Type: application/json
X-APIKEY: --hidden--
Authorization: Bearer --bearer token--  

Body:

{ … }
```

**Response:**

```
HTTP 403

Body:
{
  "code": "403.000.51",
  "message": "Step-up required",
  "info": "Not Allowed to execute this request",
  "transactionId": "<uuid>",
  "requestPayload": {},
  "authenticationMethods": [
    "PASSCODE"
  ]
}
```

Currently, we only support step up authentication with passcode which can be initiated using the `POST /oauth2/stepup` API call.

> Important: The transaction identifier returned is only applicable for a single payment request so as per current design, the client will have re-authenticate for every new payment.

The client will need to ask the user to authenticate again using the following request

**Authentication:**

```
POST /v1/oauth2/stepup

Headers:
X-APIKEY: --hidden--
Content-Type: application/json
X-TransactionId: << transaction identifier from initial request >>
Authorization: Bearer << token from existing login >>

Body:
{
  "username": "9de3e326-b5bb-4cdc-bf6d-f6b609fbb765",
  "passcode": "111234"
}
```

Once authenticated, the response will contain a new set of access/refresh tokens which will be needed to replay the original domestic payment request with `POST /payments/domestic`. The client will also need to pass in the transaction identifier `(transactionId)` received in the initial request.

**Replay Request:**

```
POST /v1/payments/domestic

Headers:
X-APIKEY: --hidden--
X-TransactionId: << transaction identifier from initial request >>
Content-Type: application/json
Authorization: Bearer << token from latest authentication >>

Body:
{ … }
```
