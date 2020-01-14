const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const qna = {
  q: ['What is your name? ',
    'What activity do you like? ',
    'What do you listen to while you do that activity? ',
    'Which meal is your favorite? ',
    'What is your favorite food? ',
    'Which sport is your favorite? ',
    'What is your superpower? '],
  a: []
}

const query = function(i) {
  rl.question(qna.q[i], (ans) => {
    qna.a.push(ans);
    if (i < 6) query(i + 1);
    else {
      console.log(`\n${qna.a[0]} loves listening to ${qna.a[2]} while ${qna.a[1]}, devouring ${qna.a[4]} for ${qna.a[3]}, prefers ${qna.a[5]} over any other sport, and is amazing at ${qna.a[6]}.\n`);
      rl.close();
    }
  })
};

query(0);
