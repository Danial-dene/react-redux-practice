import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";


export const PostList = () => {
    const listOfData = useSelector((state: RootStateOrAny) => state.post) 
    console.log(listOfData)

    const renderedData = listOfData.map((data:any) =>{

        return(
            <div>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.content}</p>
            </div>
        )
    })
    return(
        <div>
            {renderedData}
        </div>
    )
}