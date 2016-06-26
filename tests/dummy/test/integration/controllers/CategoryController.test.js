var clone = require('clone');
var request = require('supertest');
var JSONAPIValidator = require('jsonapi-validator').Validator;

describe("Blueprint overriding", function() {

  describe("POST /categories", function() {
    it('Should trim name', function (done) {

      var categoryToCreate = {
        'data': {
          'attributes': {
            name: " foo"
          },
          'type':'categories'
        }
      };

      categoryCreated = clone(categoryToCreate);
      categoryCreated.data.id = "1";
      categoryCreated.data.attributes.name = "foo";

      request(sails.hooks.http.app)
        .post('/categories')
        .send(categoryToCreate)
        .expect(201)
        .expect(validateJSONapi)
        .expect(categoryCreated)
        .end(done);
    });
  });
});
