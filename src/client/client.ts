#!/usr/bin/env node
import * as yargs from 'yargs';
import ora from 'ora';
import { ListService } from './ListService';
import { CreateItemReq, Item, ItemReq, ResultResponse, ItemFilterReq } from '../proto/list_pb';

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
  .command('createItem [title] [status]', 'create new item',
  (yargs) => {
    yargs.positional('title', {
      desc: 'title item'
    })
    
    yargs.positional('status', {
      desc: 'status item'
    })

  },
  async (argv) => {
    if(argv.title == undefined && argv.status == undefined){
      spinner.fail('titile and status arg required');
    }else{
      const title: string = argv.title as string;
      const status: string = argv.status as string;
      const param = new CreateItemReq();
      param.setStatus(status);
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
      spinner.fail('uuid required');
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
  .command('filterItems [status]', 'filter item by status',
  (yargs) => {
    yargs.positional('status', {
      desc: 'status item'
    })
  },
  async (argv) => {
    if(argv.status == undefined){
      spinner.fail('status args required');
    }else{
      spinner.succeed('data has riceved');
      const status: string = argv.status as string;
      const param = new ItemFilterReq().setStatus(status);
      const call = client.filterItems(param);
      
      call.on('data', (data) => {
        console.log(data);
      })
      
      call.on('error', (err) => {
        console.log(err);
      })

      call.on('end', () => {
        console.log('data end');
      })
    }
  })
  .argv
