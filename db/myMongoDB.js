const { MongoClient } = require('mongodb');
function MyDB() {
  const myDB = {};

  const uri =
    'mongodb+srv://yimanliu:yimanliu123@cluster.yvawa.mongodb.net/db?retryWrites=true&w=majority' ||
    'mongodb://localhost:27017';

  // Load apt normal order no sort
  myDB.getApt = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {};

      return collection
        .find(query)
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };
  // Load apt normal order sort 1
  myDB.getAptSortOne = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {};

      return collection
        .find(query)
        .sort({ price: 1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Load apt normal order sort 2
  myDB.getAptSortTwo = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {};

      return collection
        .find(query)
        .sort({ price: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Load apt normal order sort 3
  myDB.getAptSortThree = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {};

      return collection
        .find(query)
        .sort({ like: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Load apt normal order sort 4
  myDB.getAptSortFour = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {};

      return collection
        .find(query)
        .sort({ dislike: 1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price <= 2000 no sort
  myDB.getAptFilterOne = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $lt: '$1999' } };

      return collection
        .find(query)
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price <= 2000 sort 1
  myDB.getAptFilterOneSortOne = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $lt: '$1999' } };

      return collection
        .find(query)
        .sort({ price: 1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price <= 2000 sort 2
  myDB.getAptFilterOneSortTwo = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $lt: '$1999' } };

      return collection
        .find(query)
        .sort({ price: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price <= 2000 sort 3
  myDB.getAptFilterOneSortThree = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $lt: '$1999' } };

      return collection
        .find(query)
        .sort({ like: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price <= 2000 sort 4
  myDB.getAptFilterOneSortFour = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $lt: '$1999' } };

      return collection
        .find(query)
        .sort({ dislike: 1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 2000 - 4000 no sort
  myDB.getAptFilterTwo = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$2600' } }, { price: { $lt: '$3999' } }],
      };

      return collection
        .find(query)
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 2000 - 4000 sort 1
  myDB.getAptFilterTwoSortOne = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$2600' } }, { price: { $lt: '$3999' } }],
      };

      return collection
        .find(query)
        .sort({ price: 1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 2000 - 4000 sort 2
  myDB.getAptFilterTwoSortTwo = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$2600' } }, { price: { $lt: '$3999' } }],
      };

      return collection
        .find(query)
        .sort({ price: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 2000 - 4000 sort 3
  myDB.getAptFilterTwoSortThree = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$2600' } }, { price: { $lt: '$3999' } }],
      };

      return collection
        .find(query)
        .sort({ like: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 2000 - 4000 sort 4
  myDB.getAptFilterTwoSortFour = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$2600' } }, { price: { $lt: '$3999' } }],
      };

      return collection
        .find(query)
        .sort({ dislike: 1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 4000 - 6000 no sort
  myDB.getAptFilterThree = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$4000' } }, { price: { $lt: '$5999' } }],
      };

      return collection
        .find(query)
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 4000 - 6000 sort 1
  myDB.getAptFilterThreeSortOne = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$4000' } }, { price: { $lt: '$5999' } }],
      };

      return collection
        .find(query)
        .sort({ price: 1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 4000 - 6000 sort 2
  myDB.getAptFilterThreeSortTwo = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$4000' } }, { price: { $lt: '$5999' } }],
      };

      return collection
        .find(query)
        .sort({ price: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 4000 - 6000 sort 3
  myDB.getAptFilterThreeSortThree = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$4000' } }, { price: { $lt: '$5999' } }],
      };

      return collection
        .find(query)
        .sort({ like: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price 4000 - 6000 sort 4
  myDB.getAptFilterThreeSortFour = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = {
        $and: [{ price: { $gt: '$4000' } }, { price: { $lt: '$5999' } }],
      };

      return collection
        .find(query)
        .sort({ dislike: 1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price >= 6000 no sort
  myDB.getAptFilterFour = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $gt: '$6000' } };

      return collection
        .find(query)
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price >= 6000 sort 1
  myDB.getAptFilterFourSortOne = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $gt: '$6000' } };

      return collection
        .find(query)
        .sort({ price: 1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price >= 6000 sort 2
  myDB.getAptFilterFourSortTwo = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $gt: '$6000' } };

      return collection
        .find(query)
        .sort({ price: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price >= 6000 sort 3
  myDB.getAptFilterFourSortThree = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $gt: '$6000' } };

      return collection
        .find(query)
        .sort({ like: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter price >= 6000 sort 4
  myDB.getAptFilterFourSortFour = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { price: { $gt: '$6000' } };

      return collection
        .find(query)
        .sort({ dislike: -1 })
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Filter by keyword
  myDB.getAptBySearch = async (keyword) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      const query = { titletextonly: { $regex: `.*${keyword}*` } };

      return collection
        .find(query)
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Load all apartments
  myDB.loadApartments = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('apartments');

      return collection;
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  // Load all users
  myDB.loadUsers = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db('apartments');
      const collection = db.collection('users');

      return collection;
    } catch (err) {
      console.log('Error connecting to database', err);
    }
  };

  return myDB;
}

module.exports = MyDB();
