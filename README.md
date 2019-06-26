# ogma README

### Pre-Requisites

Mongo DBMS

### Installs

Take a clone of the source from GitHub.

### DB Setup

Create a Mongo DB instance called `Ogma` with a single collection called `questions`.  (Bear in mind that these names are case sensitive.)

The database can be loaded up with a test set of initial questions using the provided seed file in `ogma\Backend\ogma_api\db\ogma_db_seeds.js` by running the command `mongo < ogma_db_seeds.js`

### Run

You'll need 3 terminal sessions on the go:

1. To start up the Mongo DBMS, using the `mongod` command from any place in your deirectory structure
1. To start up the back end using the `npm start` command from within the `ogma\Backend\ogma_api` directory
1. To start up the front end using the `npm start` command from within the `ogma\Frontend` directory

### Usage
