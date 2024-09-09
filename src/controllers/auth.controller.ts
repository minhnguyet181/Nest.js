import { Controller,Get, Post }  from "@nestjs/common";
import { AuthService } from "src/service/auth.service";

@Controller ('auth') 
 export class AuthController {
    constructor(private authService: AuthService) {
    }
    @Post("/register") 
    register() {
      return this.authService.register();
    }
    @Get("login") 
    login() {
          return this.authService.login();
    }
    @Get("/infor") 
    infor() {
      return this.authService.infor();   
    }
 }