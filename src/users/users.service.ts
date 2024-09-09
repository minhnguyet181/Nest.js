import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
@Injectable()
export class UsersService {

  private readonly users: User[] = [];   
  create(user: User) {
    //  const user = new User() ;
    // // id hiện tại bằng độ dài của mảng users
 
    // user.name = createUserDto.name;
    // user.age = createUserDto.age;
    // user.address = createUserDto.address;
    // user.detail = createUserDto.detail;
    this.users.push(user);
  
    return user;
  } 
  findAll(): User[] {
    return this.users;
  }
 

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
// import { Injectable } from '@nestjs/common'; import { User } from './interfaces/user.interface';  @Injectable() export class UsersService
//  {   private readonly users: User[] = [];    create(user: User) {     this.users.push(cat);   }    findAll(): User[] {     return this.users;   } }
