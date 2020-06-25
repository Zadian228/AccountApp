//
// import {
//   Pipe,
//   PipeTransform
// } from '@angular/core';
// import {OperationService} from '../accounts/operation.service';
// import {Operations} from './interfaces';
//
//
//
// @Pipe ({
//   name: 'OperaionsExpense'
// })
//
// export class OperaionsExpense implements PipeTransform {
//
//   constructor(private operationsService: OperationService) {
//   }
//
//   transform(operations: Operations[], args: string): Operations[] {
//     for (const operation of operations) {
//       if (operation.income === 0) {
//         console.log(operations)
//         return operations;
//
//       } else {
//         return null;
//       }
//     }
//
//   }
// }
