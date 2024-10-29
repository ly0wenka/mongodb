for (let i = 0; i < 1000000; i++) {
    db.users.insert({
      name: `User ${i}`,
      email: `user${i}@example.com`,
      age: Math.floor(Math.random() * 100),
      status: i % 2 === 0 ? "active" : "inactive",
      createdAt: new Date()
    });
  }