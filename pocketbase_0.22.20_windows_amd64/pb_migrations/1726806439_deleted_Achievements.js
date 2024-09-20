/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("37lk7tckknp2kdg");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "37lk7tckknp2kdg",
    "created": "2024-09-20 04:09:01.780Z",
    "updated": "2024-09-20 04:09:01.780Z",
    "name": "Achievements",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "heun4vt0",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 42,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0zgwyee7",
        "name": "Description",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "fihqtj7i",
        "name": "Images",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
