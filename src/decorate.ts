function dec(id: number){
    console.log('evaluated', id);
    return (target: object, property: string, descriptor: object) => console.log('executed', id);
  }
  
  class Example {
      @dec(1)
      @dec(2)
      method(){}
  }
  
  const exam: Example = new Example()
  exam.method()