db = connect( 'mongodb://localhost:27017/success' );
printjson(
db.medics.aggregate([
  {
    $project: {
      fields: { $objectToArray: "$$ROOT" }  // Convert document to array of key-value pairs
    }
  },
  {
    $unwind: "$fields"  // Flatten the key-value pairs array
  },
  {
    $group: {
      _id: null,
      allKeys: { $addToSet: "$fields.k" }  // Collect unique keys
    }
  }
])
)