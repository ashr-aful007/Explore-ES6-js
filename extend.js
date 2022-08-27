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
     provideFeeback(){
          console.log(`${this.name} think you for your feedback.`)
     }
}




class Devloper{
     name;
     designation = 'web Course InsTructor'
     tem = 'Web team'
     loction;
     tech;
     constructor(name, loction){
          this.name = name;
          this.loction = loction;
          this.tech = tech;
     }
     devlopfeature(feature){
          console.log(`start the support session at ${feature}`)
     }
     relese(version){
          console.log(`please create quiz for module ${version}`)
     }
     provideFeeback(){
          console.log(`${this.name} think you for your feedback.`)
     }
}



class Jobplacement{
     name;
     designation = 'job placement commandos'
     tem = 'jobplacemnt'
     loction;
     tech;
     constructor(name, loction){
          this.name = name;
          this.loction = loction;
          this.tech = tech;
     }
     devlopfeature(feature){
          console.log(`start the support session at ${feature}`)
     }
     relese(version){
          console.log(`please create quiz for module ${version}`)
     }
     provideFeeback(){
          console.log(`${this.name} think you for your feedback.`)
     }
}