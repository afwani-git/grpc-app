#!/usr/bin/env node
import * as yargs from 'yargs';
import ora from 'ora';
import * as fs from 'fs';
import { ClientService } from './clientService';
import { CreateItemReq, Item, ItemReq,  ItemFilterReq, UpdateItemReq } from '../proto/list_pb';

const client = new ClientService();
const spinner = ora('loading').start();

spinner.color = 'blue';

yargs
  .command('getAllItem', 'get allItem', 
   (_yargs) => {}, 
   async (_argv) => {
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
  .command('updateItem [locateFile]', 'update item by given file json',
  (yargs) => {
    yargs.positional('locateFile', {
      desc: 'locate file [json extension only]'
    })
  },
  async (argv) => {
    if(argv.locateFile == undefined){
      spinner.fail('locateFile args required');
    }else{

      const locateFile: string =  argv.locateFile as string;
      const rawData = fs.readFileSync(locateFile, 'utf8');
      const data = JSON.parse(rawData);

      const call = client.updateItem(); 

      //read/response
      call.on('data', (data) => {
        console.log(data);
      })

      call.on('error', (err) => {
        spinner.fail(err.message);
      })
      
      call.on('end', () => {
        spinner.succeed('end');
      })

      const param: UpdateItemReq = new UpdateItemReq();
      //write to server
      data.item.map((item) => {
        param.setId(item.id);
        param.setTitle(item.title);
        param.setStatus(item.status);
        
        call.write(param);
      });

      call.end();      
    }
  })
  .command('batchCreate [locateFile]', 'batch create item',
  (yargs) => {
    yargs.positional('locateFile', {
      desc: 'locate file [json extension only]'
    })
  },
  async (argv) => {
    if(argv.locateFile == undefined){
      spinner.fail('locateFile args required');
    }else{

      const locateFile: string =  argv.locateFile as string;
      const rawData = fs.readFileSync(locateFile, 'utf8');
      const data = JSON.parse(rawData);
        
      const param: CreateItemReq = new CreateItemReq();
      const params: CreateItemReq[] = [];

      data.item.map((dat) => {
          param.setTitle(dat.title);
          param.setStatus(dat.status);
          params.push(param);
      })
      
      const result = await client.batchCreate(params);
      if(result){
        spinner.succeed('data has fetched');
        console.log(result);
      }
    }
  })
  .argv
