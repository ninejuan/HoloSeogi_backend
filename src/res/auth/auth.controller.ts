import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Authentication' };
  }

  // api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'OK' };
  }

  @Get('status')
  user(@Req() request: Request) {
    console.log(request.user);
    if (request.user) {
      return { msg: 'Authenticated', user: request.user };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }

  @Patch('editintro')
  
}
