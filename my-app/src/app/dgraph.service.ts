import { Injectable } from '@angular/core';
import {DgraphClient} from 'dgraph-js/lib/client'


@Injectable({
  providedIn: 'root'
})
export class DgraphService {

  constructor(private dgraphClient: DgraphClient) { }
  log(msg: any)   { 
    console.log(msg); 
  }

  callDgraph(){
    console.log('Calling dgraph service');

  }
}
