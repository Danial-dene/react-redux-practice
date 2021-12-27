import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { EditData } from "./editPost";
import { Link } from 'react-router-dom'


export const PostList = () => {
    const listOfData = useSelector((state: RootStateOrAny) => state.post) 
   // console.log(listOfData)
   const  dispatch = useDispatch()

   const onDelete = (dataToDelete) => {
       dispatch(deletePost({

       }))
   }

    let PostToEdit = ({ post })  => {
        return (
            <div>
                <Router>
                <h2>Post button</h2>
                <Switch>
                    <Link to= {"/posts/editPost"} className="button muted-button" >
                        Edit Post
                    </Link>

                    <Route exact path='/posts/editPost/:id' component={EditData}>
                        
                    </Route>
                    
                </Switch>
                </Router>
            </div>
        )
    }

    //rendering data is a must in order to display data in redux it function like using while to display data in PHP
    const renderedData = listOfData.map((data:any) => {

        return (
            <div>

                <Router>
                    
                    <p>{data.id}</p>
                    <p>{data.name}</p>
                    <p>{data.content}</p>

                    <PostToEdit key={data.id} post={data} />
                    
                </Router>

            </div>
        )
    })
    return(
        <div>
            {renderedData}
            {PostToEdit}
            
        </div>
    )
}