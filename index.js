const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

const humans = {
  1: {
    id: 1,
    name: "Alice Thompson",
    age: 28,
    email: "alice.thompson@email.com",
    address: "123 Oak Street, New York, NY 10001",
    dob: "1997-03-15",
    mobile: "+1-555-123-4567",
  },
  2: {
    id: 2,
    name: "Robert Garcia",
    age: 35,
    email: "robert.garcia@email.com",
    address: "456 Maple Avenue, Los Angeles, CA 90001",
    dob: "1990-07-22",
    mobile: "+1-555-234-5678",
  },
  3: {
    id: 3,
    name: "Jennifer Lee",
    age: 42,
    email: "jennifer.lee@email.com",
    address: "789 Pine Road, Chicago, IL 60601",
    dob: "1983-11-08",
    mobile: "+1-555-345-6789",
  },
  4: {
    id: 4,
    name: "William Martinez",
    age: 31,
    email: "william.martinez@email.com",
    address: "321 Cedar Lane, Houston, TX 77001",
    dob: "1994-05-30",
    mobile: "+1-555-456-7890",
  },
  5: {
    id: 5,
    name: "Emma Anderson",
    age: 26,
    email: "emma.anderson@email.com",
    address: "654 Birch Boulevard, Phoenix, AZ 85001",
    dob: "1999-09-12",
    mobile: "+1-555-567-8901",
  },
};

const employees = {
  1: {
    id: 1,
    name: "John Smith",
    email: "john.smith@company.com",
    department: "Engineering",
  },
  2: {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    department: "Marketing",
  },
  3: {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@company.com",
    department: "Sales",
  },
  4: {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@company.com",
    department: "Human Resources",
  },
  5: {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@company.com",
    department: "Finance",
  },
};

app.get("/public-data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const human = humans[id];

  if (human) {
    res.json(human);
  } else {
    res.status(404).json({ error: "Human not found" });
  }
});

app.get("/employee/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees[id];

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
