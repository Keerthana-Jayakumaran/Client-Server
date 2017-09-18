# Server-Client
server-client implementation

Description:

Different Machines generating events at different times, those events get logged and stored in a log streams (may be a server).
These logs should be retrieved with filter options( Eg. based on time,user,machines)by the client(browser). If the event logs get updated, notifications about how many events updated should be there for client browser.

Payload Requirement:

1. Each event has below details,
[User ,Machine ,Process ,Sent Time ,Received Time ,Time Duration ,Bytes taken]

2. Server should send the updated events without getting request from client browser.

3. Efficient storage and retrieving For Filtering:

  1-hour-event log details
  or
  upto 200,000 events-show the event logs details.
 
Design:
1. Protocol: Http (between server and events generating machines).
2. Connection : websocket connection (between the client and server for automatic updation)
3. REST API:
4. Server Implementation :Node Js
5. Front end: Html





