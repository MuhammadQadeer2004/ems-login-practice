const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      complete: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage layout.",
        taskDate: "2025-07-03",
        category: "Design",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login validation issues.",
        taskDate: "2025-07-01",
        category: "Development",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        taskTitle: "Create Wireframe",
        taskDescription: "Prepare wireframes for the dashboard.",
        taskDate: "2025-07-02",
        category: "UX",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Zara",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      complete: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Update API Routes",
        taskDescription: "Add new routes for user module.",
        taskDate: "2025-07-03",
        category: "Backend",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskTitle: "Database Backup",
        taskDescription: "Backup the production database.",
        taskDate: "2025-06-30",
        category: "Database",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        taskTitle: "Set Up CI/CD",
        taskDescription: "Integrate CI/CD pipeline with GitHub.",
        taskDate: "2025-07-05",
        category: "DevOps",
        active: false,
        newTask: false,
        complete: false,
        failed: true
      },
      {
        taskTitle: "Fix Notification Bug",
        taskDescription: "Fix delayed notifications issue.",
        taskDate: "2025-07-01",
        category: "Frontend",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Usman",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 2,
      complete: 0,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize images.",
        taskDate: "2025-07-02",
        category: "Performance",
        active: false,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review pull requests for UI updates.",
        taskDate: "2025-07-03",
        category: "Code",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement dark mode in dashboard.",
        taskDate: "2025-07-04",
        category: "Frontend",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Areeba",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      complete: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Write Test Cases",
        taskDescription: "Add unit tests for user services.",
        taskDate: "2025-07-01",
        category: "Testing",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve layout breaking on mobile.",
        taskDate: "2025-07-03",
        category: "UI",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        taskTitle: "Email Template",
        taskDescription: "Design and test the welcome email.",
        taskDate: "2025-07-05",
        category: "Marketing",
        active: false,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskTitle: "Analytics Dashboard",
        taskDescription: "Build chart for user stats.",
        taskDate: "2025-07-06",
        category: "Analytics",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Hassan",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      complete: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Set Up SSO",
        taskDescription: "Configure single sign-on with Google.",
        taskDate: "2025-07-04",
        category: "Security",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskTitle: "Write Docs",
        taskDescription: "Document API usage in markdown.",
        taskDate: "2025-07-02",
        category: "Documentation",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        taskTitle: "Create Demo Video",
        taskDescription: "Record a walkthrough of new features.",
        taskDate: "2025-07-03",
        category: "Presentation",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
localStorage.setItem('employees',JSON.stringify(employees));
localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return ({ employees, admin });
};