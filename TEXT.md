## Testing phoneNumber

### text 01
https://habrahabr.ru/post/107262/
It is booring unit-test
You don't know wich is wrong
text:
Мы называем это типичным юнит-тестом. Он тестирует код, но и только. Больше никаких преимуществ у него нет. Именно после такого кода скептики делают вывод, что от юнит-тестов нет особой пользы.


### text 02
some best practice
one case for one check
text:
разбить тест-метод на несколько маленьких, так чтобы каждый из них тестировал только одну вещь, и дать им соответствующие имена.

Мы называем это хорошим юнит-тестом. Он гораздо легче читается: по названиям переменных легко догадаться, что 13 символов — это слишком много, 7 — слишком мало, а 8 символов — это нормально.

### text 03
text:
даже этот хороший юнит-тест не является вполне читабельным и не предоставляет достаточно информации о том, как работает функция .validate Его можно понять, но для этого всё-таки надо залезть в код и немножко подумать.

### text 04
text:
Мы называем это спецификацией в стиле BDD. Названия методов говорят почти на человеческом языке о том, как должен работать код. Мысленно вставив перед заглавными буквами пробелы, мы получаем спецификацию кода на английском языке. Чтобы понять, как работает класс, мы не должны залезать в код — достаточно прочитать называния. А если в ходе изменения кода в него внесли ошибку, и юнит-тест сломался, мы по названию сломавшегося тест-метода наверняка сможем определить, что за ошибка допущена в коде.

### text 05
Кроме it и should, в BDD есть и другие важные слова, такие как given, when и then, а также before и after, ну и вдобавок ensure, narrative и «should behave as».
see => https://mochajs.org/

### text 06
part 2
Мы будем использовать
Mocha – эта библиотека содержит общие функции для тестирования, включая describe и it.
Chai – библиотека поддерживает разнообразные функции для проверок. Есть разные «стили» проверки результатов, с которыми мы познакомимся позже, на текущий момент мы будем использовать лишь assert.equal.

Как запустить mocha в браузере!?
https://learn.javascript.ru/testing

Один тест тестирует ровно одну вещь.

About documentation
yarn run mocha test/test.js -R doc > rep.html
yarn run mocha test/test.js -R markdown

Amazing view
clear && yarn run mocha test/test.js -R nyan


## Testing API
https://github.com/visionmedia/supertest (TJ)
```javascript
it('should respond with redirect on post', function(done) {
  request(app)
    .post('/api/members')
    .send({"participant":{"nuid":"98ASDF988SDF89SDF89989SDF9898"}})
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) done(err);
      res.body.should.have.property('participant');
      res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
      done();
    });
});
```


### Plan
* unit-testing phoneNumber.validate and lodash
* vue-component testing
* Hermione  => UI-testing
* Hermione or supertest => Request testing (CRUD)


### Links
* https://vimeo.com/14489233
* https://mochajs.org/
* http://chaijs.com/
* https://github.com/visionmedia/supertest
