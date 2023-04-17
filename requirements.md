# Software Requirments Pantry Pirate

## Vision

The vision of the Pantry Pirate application is to provide users with an intuitive and efficient tool for managing their food inventory, creating shopping lists, and finding the best deals on products by scanning barcodes. This app aims to simplify the grocery shopping experience, reduce food waste, and save users time and money.

---

## Scope (In/Out)

- In Scope:
  - Developing a React Native application compatible with both Android and iOS devices.
  - Providing barcode scanning functionality to capture product information and add items to the user's inventory.
  - Allowing users to manually add items to their inventory, including those without barcodes.
  - Managing and displaying the user's inventory with options to sort and filter items based on various criteria.
  - Implementing functionality for creating, updating, and synchronizing shopping lists across devices.
  - Scanning barcodes to display the cheapest places to buy a product based on the user's location and preferences.

- Out of Scope
  - Integrating with third-party recipe apps or suggesting recipes based on the user's inventory.
  - Providing real-time inventory updates from local stores to ensure product availability.
  - Including a chatbot or customer support feature within the application.

---

## Minimum Viable Product

Cross-platform compatibility React Native application with user authentication, barcode scanning feature that captures product information and adds items to the user's inventory. The user will also be able to manually add the products to their inventory.

## Stretch Goals

- Best deal finder: Implement a feature that scans barcodes and displays the cheapest places to buy a product based on the user's location and preferences.

- Notifications: Send notifications to users about upcoming expiration dates for items in their inventory.

- Meal planning and recipe integration: Integrate with third-party recipe apps or add a feature that suggests meal plans and recipes based on the user's inventory

---

## Functional Requirements

1. The app should support both Android and iOS devices.
1. Users should be able to create an account or sign in to an existing account.
1. Users should have the option to manually add items to their inventory.
1. Users should be able to create and manage shopping lists within the app.

---

## Non-Functional Requirements

1. The app should have a user-friendly and responsive design, compatible with various screen sizes and orientations.
1. The app should be secure, protecting user data and ensuring privacy.
1. The app should provide fast and reliable performance, with minimal delays or crashes.
1. The app should be easy to navigate and understand for users of all ages and technical abilities.
1. The app should be compliant with platform-specific guidelines and regulations (e.g., Google Play Store, Apple App Store).

---

## Data Flow

### User Authentication and Account Creation
  
  When a user launches the application for the first time, they will be prompted to create an account or sign in to an existing account. User data, such as email, password, and preferences, will be securely transmitted and stored on a remote server.

### Barcode Scanning and Product Information Retrieval
  
  When the user scans a barcode using their device's camera, the application will capture the barcode data and send it to a remote server or an external API. The server or API will then return relevant product information, such as name, brand, and expiration date, which will be displayed in the app and added to the user's inventory.

### Inventory Management

  As the user adds items to their inventory, either by scanning barcodes or entering information manually, the application will send this data to the remote server for storage and synchronization. The server will maintain an up-to-date record of the user's inventory, allowing them to access and manage it from multiple devices.

### Shopping List Creation and Management

  When the user creates a shopping list, the application will transmit the list data to the remote server for storage and synchronization. As the user updates their shopping list, these changes will be sent to the server, ensuring that the user always has access to their most recent shopping list data on any device.

### Deal and Price Comparison

  When the user scans a barcode to find the best deals, the application will send the product information to a remote server or an external API. The server or API will then return a list of the cheapest places to buy the product based on the user's location and preferences. This data will be displayed in the app, allowing the user to make cost-effective shopping decisions.

---
