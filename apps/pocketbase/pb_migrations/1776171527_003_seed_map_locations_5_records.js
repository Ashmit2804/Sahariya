/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("map_locations");

  const record0 = new Record(collection);
    record0.set("village_name", "Baran");
    record0.set("latitude", 24.8);
    record0.set("longitude", 75.6);
    record0.set("description", "District headquarters");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("village_name", "Atru");
    record1.set("latitude", 24.9);
    record1.set("longitude", 75.5);
    record1.set("description", "Historic town with Sahariya settlements");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("village_name", "Anta");
    record2.set("latitude", 24.7);
    record2.set("longitude", 75.4);
    record2.set("description", "Village with traditional art practices");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("village_name", "Chhipabarod");
    record3.set("latitude", 24.85);
    record3.set("longitude", 75.65);
    record3.set("description", "Sahariya community center");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("village_name", "Kishanganj");
    record4.set("latitude", 24.75);
    record4.set("longitude", 75.55);
    record4.set("description", "Rural settlement");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})