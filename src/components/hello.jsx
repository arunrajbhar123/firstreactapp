import React from "react";

function Operation (){
    return (
        <div>
            <h1>Mobile Operating System</h1>
           <ul>
             <li>android</li>
             <li>blackberry</li>
             <li>iphone</li>
             <li>window phone</li>
           </ul>
        </div>
        
    )
}

function MobileMan (){
    return (
        <div>
            <h1>Mobile Mobile Manufacturers</h1>
           <ul>
             <li>samsung</li>
             <li>htc</li>
             <li>micromax</li>
             <li className='circle'>apple</li>
           </ul>
        </div>
        
    )
}



export {Operation,MobileMan};