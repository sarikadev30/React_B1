## **What is an API?**

- API = **Application Programming Interface**
- It allows **communication between different systems**.
- In web apps, APIs are used to **send and receive data** between **frontend (React)** and **backend (Node/Java/Spring/etc.)**.

**Example:**

React frontend asks server → “Give me the list of products.”

Server responds with → JSON data containing products.

---

## **HTTP Request / Response Cycle**

When the browser fetches data from a server:

- Client send request to server
- Server send response to the client

### **Request Contains:**

| Part    | Meaning                          |
| ------- | -------------------------------- |
| Method  | GET, POST, PUT, DELETE           |
| URL     | Address of resource              |
| Headers | Extra info (Auth token, type)    |
| Body    | Data to send (only for POST/PUT) |

### **Response Contains:**

| Part        | Meaning                        |
| ----------- | ------------------------------ |
| Status Code | 200, 400, 401, 500             |
| Headers     | Data type, cookies             |
| Body        | The actual data (usually JSON) |

---

## **REST API Basics**

REST = **Representational State Transfer**

A set of rules for designing APIs.

| Operation   | HTTP Method   | Meaning              |
| ----------- | ------------- | -------------------- |
| Read Data   | **GET**       | Fetch data           |
| Create Data | **POST**      | Send new data        |
| Update Data | **PUT/PATCH** | Modify existing data |
| Delete Data | **DELETE**    | Remove data          |
