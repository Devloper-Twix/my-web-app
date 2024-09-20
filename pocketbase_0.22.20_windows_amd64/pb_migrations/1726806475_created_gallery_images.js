/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kethdacoh4h7lql",
    "created": "2024-09-20 04:27:55.909Z",
    "updated": "2024-09-20 04:27:55.909Z",
    "name": "gallery_images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1ga6wuoa",
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
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kethdacoh4h7lql");

  return dao.deleteCollection(collection);
})
