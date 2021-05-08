import { CREATED } from 'http-status'
import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common'

import { NewUserDto } from '../../models/new-user.dto'
import { UserDto } from '../../models/user.dto'

@Controller('users')
export class UsersController {
  @Post()
  @HttpCode(CREATED)
  async create(@Body() newUser: NewUserDto) {
    console.log('new user', newUser)

    return { success: true }
  }

  @Get(':id')
  async get(@Param() user: UserDto) {
    return { success: true, user: user.id }
  }
}
