db.siteAnalytics.createIndex({ createdAt: 1 }, { expireAfterSeconds: 30 })
 
db.siteAnalytics.insertMany([ { name: "Test 1", createdAt: new Date() }, { name: "Test 2", createdAt: new Date() } ])
  