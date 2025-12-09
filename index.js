const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
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

const tasks = {
  1: {
    taskNo: "1",
    orderNo: "ORD-1001",
    description: "Inspect Hydraulic Lines",
    site: "NY-SITE-A",
    woNo: "WO-70001",
    maintOrgSite: "Maint-A",
    maintOrg: "Aerospace Maintenance Group",
  },
  2: {
    taskNo: "2",
    orderNo: "ORD-1002",
    description: "Replace Fuel Filter",
    site: "CA-SITE-B",
    woNo: "WO-70002",
    maintOrgSite: "Maint-B",
    maintOrg: "Aircraft Service Division",
  },
  3: {
    taskNo: "3",
    orderNo: "ORD-1003",
    description: "Engine Oil Check",
    site: "TX-SITE-C",
    woNo: "WO-70003",
    maintOrgSite: "Maint-C",
    maintOrg: "Maintenance Operations Center",
  },
  4: {
    taskNo: "4",
    orderNo: "ORD-1004",
    description: "Replace Brake Pads",
    site: "FL-SITE-D",
    woNo: "WO-70004",
    maintOrgSite: "Maint-D",
    maintOrg: "Repair & Maintenance Unit",
  },
  5: {
    taskNo: "5",
    orderNo: "ORD-1005",
    description: "Landing Gear Inspection",
    site: "WA-SITE-E",
    woNo: "WO-70005",
    maintOrgSite: "Maint-E",
    maintOrg: "Aviation Maintenance Center",
  },
};

app.get("/public-data", (req, res) => {
  res.json({
    schema: {
      id: "number",
      name: "string",
      age: "number",
      email: "string",
      address: "string",
      dob: "string (YYYY-MM-DD)",
      mobile: "string",
    },
  });
});

app.get("/public-data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const human = humans[id];
  if (human) {
    res.json(human);
  } else {
    res.status(404).json({ error: "Human not found" });
  }
});

app.get("/employee", (req, res) => {
  res.json({
    schema: {
      id: "number",
      name: "string",
      email: "string",
      department: "string",
    },
  });
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

app.get("/task", (req, res) => {
  res.json({
    schema: {
      taskNo: "string",
      orderNo: "string",
      description: "string",
      site: "string",
      woNo: "string",
      maintOrgSite: "string",
      maintOrg: "string",
    },
  });
});

app.get("/task/:taskNo", (req, res) => {
  const taskNo = req.params.taskNo;
  const task = tasks[taskNo];
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
