import { Controller, Get, Param, Query, Request } from '@nestjs/common'
import { FastifyRequest } from 'fastify'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':userId')
  getHello(
    @Request() request: FastifyRequest,
    @Query('key') key: string,
    @Param('userId') userId: string
  ): string {
    console.log(key)
    console.log(Object.keys(request))
    console.log('userId', userId)

    return this.appService.getHello()
  }
}
