export class CounterService{
  actions = {
    inactivations:0,
    activations:0
  };

  addInactivation(by:number = 1){
    this.actions.inactivations += by;
  }

  addActivation(by:number = 1){
    this.actions.activations += by;
  }
}
