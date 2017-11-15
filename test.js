// var obj1 = {c1:" ",
// c2:" "};
// var key,key1;
// //console.log('obj1 '+typeof(obj1));
// for(key in obj1)
// {
//     console.log(key);
// }
//  var obj2 = {};
// // console.log('obj2 '+typeof(obj1));
// for(key1 in obj2)
// {
//     console.log(key1);
// }
// console.log('length of key'+Object.keys(obj1).length);
// console.log('length of key'+Object.keys(obj2).length);

// // console.log('obj2 '+typeof(obj2));
// //var obj3 ;
// //console.log('obj3 '+typeof(obj3));
//----------------------------------------------------------------------
// var d={};
// var pgmname={};
// var data = {};
   
//         data.ProgramName="p1" ,
//         data.UserName="U1" ,
//         data.IPaddress=" 10.200.208.44" ,
//         data.TimeStamp="7:77",
//   d.eid1=data;
    
//     data.ProgramName="p2" ,
//         data.UserName="U2" ,
//         data.IPaddress=" 10.200.208.44" ,
//         data.TimeStamp="7:77",
//          d.eid2=data;
// console.log(data);
// console.log(d);

// for(key in d)
// {
// var x = Object.keys(data)

// }
//..........................................
//checking for the filter variables condition
// logs = { "ProgramName":"p1" ,
//     "UserName":"U1" };

// connectedclients = {
//     cid1 :['p1','u1'],
//     cid2 :['p1','ip1']
// };
//   if (Object.keys(connectedclients).length)
//     {
//         /*  filtering checking code comes here */
        
//         for(var obj in connectedclients)
//         {
//             var c = 1;
//             console.log('initial c value'+ c);
//             var propertyvalues = connectedclients[obj];
//             for(var i = 0; i < propertyvalues.length ; i++)
//             {

//             console.log('the property values of the client'+ ' '+ obj +' '+propertyvalues[i])
//             console.log('Object.values(logs).indexOf(propertyvalues[i])'+' '+ Object.values(logs).indexOf(propertyvalues[i]));
//             if(Object.values(logs).indexOf(propertyvalues[i]) > -1)
//             {
                
//                 continue;

//             }
//             else
//             {
//                 c = 0;
//                 console.log('the data is not matching')
              
//                 break;
               
//             }
           
           
//             }
//             console.log('the value of c after enter into the loop'+' '+c);
//             if(c)
//             {
//                 console.log('the data is there'+ ' '+logs);
//             }
            


//         }
//     }
//...........................................



