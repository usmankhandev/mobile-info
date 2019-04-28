import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

class AllMobiles extends React.Component {
    render() {
        return(
            <div className = "all-mobiles">                
                <table>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Mobile Name</th>
                        <th>Ram</th>
                        <th>Rom</th>                        
                        <th>Camera</th>
                        <th>Battery</th>
                        <th>Market Price</th>
                        <th>Shape</th>
                        <th>Created Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>All Images of Mobile</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>Sumsung</td>
                    <td>s8</td>
                    <td>16</td>
                    <td>64</td>                    
                    <td>16</td>
                    <td>4000</td>
                    <td>50000</td>
                    <td>6.0</td>
                    <td>12/12/2018</td>
                    <td>
                        <IconButton aria-label="Edit">
							<EditIcon />
						</IconButton>
                    </td>
                    <td>
                        <IconButton aria-label="Delete">
							<DeleteIcon />
						</IconButton>
                    </td>
                    <td>
                    <Button variant="contained" >
                        Images
                    </Button>
                    </td>                    
                    </tr>

                    <tr>
                    {/* <tr> */}
                    <td>Sumsung</td>
                    <td>s8</td>
                    <td>16</td>
                    <td>64</td>                    
                    <td>16</td>
                    <td>4000</td>
                    <td>50000</td>
                    <td>6.0</td>
                    <td>12/12/2018</td>                    
                    <td>
                        <IconButton aria-label="Edit">
							<EditIcon />
						</IconButton>
                    </td>
                    <td>
                        <IconButton aria-label="Delete">
							<DeleteIcon />
						</IconButton>
                    </td>
                    <td>
                    <Button variant="contained" >
                        Images
                    </Button>
                    </td>
                    </tr>
                    <tr>
                    {/* <tr> */}
                    <td>Sumsung</td>
                    <td>s8</td>
                    <td>16</td>
                    <td>64</td>                    
                    <td>16</td>
                    <td>4000</td>
                    <td>50000</td>
                    <td>6.0</td>
                    <td>12/12/2018</td>
                    <td>
                        <IconButton aria-label="Edit">
							<EditIcon />
						</IconButton>
                    </td>
                    <td>
                        <IconButton aria-label="Delete">
							<DeleteIcon />
						</IconButton>
                    </td>
                    <td>
                    <Button variant="contained" >
                        Images
                    </Button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default AllMobiles;