class Instructor{
     name;
     designation = 'web Course InsTructor'
     tem = 'Web team'
     loction;
     constructor(name, loction){
          this.name = name;
          this.loction = loction;
     }
     startSupportSession(time){
          console.log(`start the support session at ${time}`)
     }
     createQuiz(module){
          console.log(`please create quiz for module ${module}`)
     }
}

const aamir = new Instructor('aamir', 'mumbi')
console.log(aamir)
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('soliman', 'solaiman khan');
console.log(solaiman)