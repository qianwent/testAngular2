/**
 * Created by Will Qian on 2/15/2017.
 */
import { Injectable } from '@angular/core';
@Injectable()
export class MyFakeService{
  getMessage(){
    return 'fake service';
  }
}
