const test = require('../RPS.js');
const assert = require('assert');

describe("whoWon", function(){
 
  it("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
    let output = test.whoWon('rock', 'paper');
    assert.strictEqual(output, "Player 2 wins!");
  });

  it("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
    let output = test.whoWon('paper', 'scissors');
    assert.strictEqual(output, "Player 2 wins!");
  });

  it("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
    let output = test.whoWon('scissors', 'rock');
    assert.strictEqual(output, "Player 2 wins!");
  });

  it("returns 'Player 1 wins!' if P1 = rock & P2 = scissors", function(){
    let output = test.whoWon('rock', 'scissors');
    assert.strictEqual(output, "Player 1 wins!");
  });

  it("returns 'Player 1 wins!' if P1 = scissors & P2 = paper", function(){
    let output = test.whoWon('scissors', 'paper');
    assert.strictEqual(output, "Player 1 wins!");
  });

  it("returns 'Player 1 wins!' if P1 = paper & P2 = rock", function(){
    let output = test.whoWon('paper', 'rock');
    assert.strictEqual(output, "Player 1 wins!");
  });

  it("returns 'TIE!' if P1 = rock & P2 = rock", function(){
    let output = test.whoWon('rock', 'rock');
    assert.strictEqual(output, "TIE!");
  });

  it("returns 'TIE!' if P1 = paper & P2 = paper", function(){
    let output = test.whoWon('paper', 'paper');
    assert.strictEqual(output, "TIE!");
  });

  it("returns 'TIE!' if P1 = scissors & P2 = scissors", function(){
    let output = test.whoWon('scissors', 'scissors');
    assert.strictEqual(output, "TIE!");
  });

  it("returns 'Invalid Input' if something other than 'rock', 'paper' or 'scissors' is entered", function(){
    let output = test.whoWon('pock', 'rock');
    assert.strictEqual(output, 'Invalid Input, try again.');
  });

    it("returns 'Invalid Input' if something other than 'rock', 'paper' or 'scissors' is entered", function(){
    let output = test.whoWon('scissors', 'papel');
    assert.strictEqual(output, 'Invalid Input, try again.');
  });
})