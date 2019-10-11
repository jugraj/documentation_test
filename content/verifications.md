---
id: verifications_docs
title: Verifications
---

As part of the onboarding journey, **Verifications API** gives a customer the capability to check if there are any duplicates for mobile numbers, email addresses, profanity checks over the preferred name. The API also provides the orchestration where the One Time Password (OTP) is sent and verfied.

### Verifying an email address or mobile number

The **Verifications API** endpoints for email and mobile number allow customers of the 10x platform to perform duplication checks determining whether fields been registered by another user on the platform.  

#### Determining whether an email address or mobile number is already in use

##### Email Addresses
Use the **`GET`** operation on `/v1/verifications/emailAddresses/{$emailAddress}` to check whether an email address has been registered against a party on the 10x platform.
  
If no email address is found on the platform we return a **`404`** `status` code. 

##### Mobile Numbers
  
Use the **`GET`** operation on `/v1/verifications/mobileNumbers/{$mobileNumber}` to check whether a mobile number has been registered against a party on the 10x platform.
   
If no mobile number is found on the platform we return a **`404`** `status` code. 
   
> Be sure to set the international code for the mobile number e.g. +44 for GB. The number should also be provided as a URL encoded value

#### Sending a verification code to a mobile device

Use the **`POST`** operation on `/v1/verifications/OTPCodes` to generate a one-time use verification code that is forwarded to the specified mobile number via SMS.  
  
Once a verification code has been received, a user will have **five minutes to confirm the code** and verify that they are the owner of the mobile number they have specified. 

Use the **`POST`** operation on  `/v1/verifications/OTPCodes/{OTPCode}` with the payload containing `mobileNumber` to complete the mobile number verification.  

```
{
    "mobileNumber": "+4478xxxxxxxx"
}
```
  
> **Retries**: The 10x platform will allow three additional attempts for the person to validate the verification code that they have received.  
  
#### Perform a profanity check on a preferred name  
  
Preferred names can be assigned by party and potentially are viewable by other users of the 10x platform.  
  
All preferred names can be verified as being suitable for use on the verify endpoint.

Use the **`GET`** operation on  `/v1/verifications/preferredNames/{$preferredName}` to check whether the preferred name violates platform profanity rules. 

The API response will return a **`200`** `status` code should the preferred name not violate profanity rules.  

Check [**Verifications API Reference**](/api-reference/#10x-banking-api-verifications) for more details