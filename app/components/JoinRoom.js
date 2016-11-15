import React from 'react';
import {getRoomIds} from '../server';
import {Link} from 'react-router';

var roomNumber;

// TODO:
// 1) Needs to create a Rooms Table for a database of all active room
// 2) Check to see if the room number is actually active and if its not then throw some error
// 3) Also check with Justin to make the design better for this webpage
// 4) After successful validation of the room number, take the user into the room session (Room Component)

export default class JoinRoom extends React.Component{

  constructor(props){
    super(props);

  }

  validateRoom(e){
    e.preventDefault();
    var roomsIds = [];
    var rooms = getRoomIds();

    for (var room in rooms) {
      var input_room_number = document.getElementById("userInput").value;
      if(rooms[room]._id == input_room_number){
        console.log("Allowing user to join the room " + input_room_number);
      }     
    }
  }



    render() {
        return (
            <div>
                <div className = "col-md-4"></div>
                 <div className = "col-md-4">
                     <div id="join_room_panel" className="panel panel-default panel-joinroom">
                       <div className="panel-body">
                         <h2 id="join_room_text">Join a Room</h2>
                         <input type="text" className="form-control" id="userInput" 
                             placeholder="Enter Room Number" />
                           <Link to={{pathname:"room",query:{roomId:roomNumber}}}>
                               <button type = "button" className="btn btn-default" id="btn1" onClick={(e)=>this.validateRoom(e)}>Join</button>
                           </Link>
                           <Link to="/">
                             <button type = "button" className="btn btn-default" id="btn2" >Back</button>
                           </Link>

                        </div>
                     </div>
                   </div>
                 <div className = "col-md-4"></div>
            </div>
        );
    }
}
