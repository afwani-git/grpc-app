#!/usr/bin/env node
import { Client, credentials, ServiceError } from '@grpc/grpc-js';
//const clientService = new ListService();
import * as yargs from 'yargs';
import ora from 'ora';
import { hidenBin } from 'yargs/helpers'
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import { ListService } from './ListService';
import { CreateItemReq, Item, ItemReq, ResultResponse } from '../proto/list_pb';
import {argv} from 'yargs';

const client = new ListService();
const spinner = ora('loading').start();

const cond = {
  msg: '',
  status: 'process'
}
spinner.color = 'blue';

yargs
  .command('getAllItem', 'get allItem', 
   (_yargs) => {}, 
   async (argv) => {
    const result = await client.getList(); 
    
    if(result){
      spinner.succeed('data has fetched');
      console.log(result.toObject());
    }
  })
  .command('createItem [title]', 'create new item',
  (yargs) => {
    yargs.positional('title', {
      desc: 'title item'
    })
  },
  async (argv) => {
    if(argv.title == undefined){
      return console.log('title required')
    }else{
      const title: string = argv.title as string;
      const param = new CreateItemReq();
      param.setTitle(title);
      const result = await client.createItem(param);
      if(result){
        spinner.succeed('data has fetched');
        console.log(result.toObject());
      }
    }
  })
  .command('deleteItem [uuid]', 'delete item by uuid',
  (yargs) => {
    yargs.positional('uuid', {
      desc: 'uuid item'
    })
  },
  async (argv) => {
    if(argv.uuid == undefined){
      cond.msg = 'uuid is required !'
      cond.status = 'fail';
    }else{
      const uuid: string = argv.uuid as string;
      const param = new ItemReq();
      param.setId(uuid);
      const result = await client.deleteItem(param);
      
      if(result){
        spinner.succeed('data has fetched');
        console.log(result.toObject());
      }

    }
  })
  .argv
