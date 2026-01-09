# OOP (Object Oriented Programming)

This repository is a collection of my learning journey in Object-Oriented Programming (OOP).

I am focusing on mastering key OOP principles such as classes, inheritance, polymorphism, encapsulation, and abstraction, with practical examples and projects.

Each commit represents a step in applying these concepts, whether through basic examples like creating a Bank Account class or more advanced design patterns.

## Next Practice

1 Background: An e-commerce platform applies different discounts based on promotions or customer segments (e.g., seasonal discounts, loyalty discounts, bulk purchase discounts). The marketing team frequently introduces new types of discounts. The system should allow adding new discount types without modifying the code for existing discounts.

Question: How would you design the discount calculation system so that new discount types can be introduced without changing the existing discount logic?

2 Background: An e-commerce platform manages products with various types, such as physical goods, digital downloads, and services. Physical goods need methods for shipping, inventory tracking, and delivery, while digital products only require download and licensing methods. Service-based products may need scheduling functionality. The product interface should avoid imposing irrelevant methods on different product types.
Question: How would you design interfaces for these different product types?

3 Background: A web application requires logging for various events, initially using a specific logging library. However, there might be a need to replace or extend the logging system in the future (e.g., to support a cloud-based logging service or custom logging formats).

Question: How would you design the logging system to allow easy replacement or addition of different logging implementations without modifying the main application logic?

4 Background: An online store supports various payment types through a PaymentMethod class. Some payment types, like BankTransfer or DigitalWallet, may need additional information to complete the payment. The store expects to handle any payment method uniformly without unexpected errors.

Question: How would you design the PaymentMethod and its subclasses so that the store can process any payment type seamlessly?

5 Background: An online store processes payments using a specific payment gateway (e.g., PayPal). The store might later integrate additional payment providers or switch to another gateway entirely. The payment processing logic should not rely directly on any specific payment provider.
Question: How would you design the payment processing module so that it can handle different payment gateways without altering the main payment logic?

6 Background: A multi-functional printer can print, scan, copy, and fax. However, some models are simpler and only support printing and scanning, while others support all four functions. The printer's interface should not force simpler models to implement unnecessary methods.

Question: How would you design interfaces for the printer functions?

7 Background: An application initially uses a local database for user authentication. Later, it might switch to an external identity provider, such as OAuth or SAML. The core authentication and authorization logic should remain unaffected by the change in authentication providers.

Question: How would you design the authentication module so that it can integrate different authentication providers without needing to modify the main authentication logic?

8 Background: A payment gateway processes various types of transactions—such as credit, debit, and digital wallets—for e-commerce sites. It must validate transaction details, communicate with banks, log transactions, and send confirmation or error responses. The platform also requires fraud detection and report generation for each transaction type.

Question: What are the classes you might need in this software solution?

9 Background: A notification system sends different types of notifications, such as SMS, email, and push notifications. Each type has specific requirements (e.g., SMS requires a phone number, while email requires an email address). The notification interface should avoid requiring any one notification type to provide unnecessary information or implement irrelevant methods.

Question: How would you design the interfaces for notifications?

10 Background: A mobile application sends notifications to users through various channels, such as email and SMS. The platform wants to add additional channels (e.g., push notifications, in-app alerts) in the future. New notification types should be integrated without changing existing notification classes.

Question: How would you design a notification system that allows the addition of new notification channels without modifying existing code?

11 Background: A warehouse needs an automated inventory system to manage items stored across various locations. The system must track item quantities, update stock levels when items are added or removed, and notify warehouse staff when inventory is low or restocked. The system will also generate reports on stock movements and item status.

Question: What are the classes you might need in this software solution?

12 Background: An e-commerce platform calculates taxes based on the customer’s location. Initially, it supports tax calculations for a few regions (e.g., state, federal, international) with specific rules. As the platform expands, it needs to add more location-specific tax rules without altering the existing logic for current locations.

Question: How would you implement the tax calculation system to allow new location-based tax rules to be added without modifying the original tax classes?

13 Background: A document processing tool converts documents between various formats (e.g., PDF, Word, HTML). As user demands increase, the tool needs to support additional formats, such as XML, JSON, or even audio formats. These new conversions must be added without modifying the existing code that handles current formats.

Question: How would you design the document conversion tool to allow new format conversions to be added without altering the existing conversion logic?
