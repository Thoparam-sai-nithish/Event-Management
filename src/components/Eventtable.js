import Table from 'react-bootstrap/Table';
import axios from 'axios';
import {useEffect,useState} from 'react'

function Eventtable() {
    
    
 
    let [list,setlist] = useState([])
    let [err,seterr] = useState([])
    useEffect(()=>
  getLists(),[])

  let getLists=()=>{
    axios.get(`http://localhost:5000/events/get-events-details`)
    .then(response=>{
      console.log(response.data.payload)
          if(response.status===200){
            setlist(response.data.payload)
          }
    })
    .catch(err=>{
      console.log("err is",err)
      
      if(err.response){
       seterr(err.message)
      }
      else if(err.request){
        seterr(err.message)
      }
      else{
        seterr(err.message)
      }})
  }

 
  return (
<>
{err && <p>{err}</p>}
        <Table striped bordered hover className='mt-5'>
            <thead>
              <tr >
                <th>id</th>
                <th >Eventname</th>
                <th >Time</th>
                <th >Venue</th>
                <th >Club Name</th>
                <th>Club Admin</th>
                <th>Prize Money</th>
                
              </tr>
            </thead>
            <tbody >
              
            
              {
                list.map((obj)=>(
   
                      <tr key={parseInt(obj._id)}>
                        <td>{obj._id} </td> 
                      <td>{obj.Eventname} </td>
                      <td>{obj.Venue} </td>
                      <td>{obj.Time} </td>
                      <td>{obj.ClubName} </td>
                      <td>{obj.ClubAdmin} </td>
                      <td>{obj.PrizeMoney} </td>
                    </tr>
  
                )
                )
             }
            </tbody>
          </Table>
</>
  );
}

export default Eventtable;