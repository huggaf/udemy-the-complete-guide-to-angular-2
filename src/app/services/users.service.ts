export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activate(index:number){
    this.activeUsers.push(this.inactiveUsers[index]);
    this.inactiveUsers.splice(index, 1);
  }

  inactivate(index:number){
    this.inactiveUsers.push(this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
  }
}
