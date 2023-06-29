import React, {useContext} from 'react';
import { backgroundContext } from 'layouts/Lay';

export default function Background({children}) {
    const {backgroundColor} = useContext(backgroundContext);
    console.log(backgroundColor)
    return (
    <div style={{backgroundColor: backgroundColor, width: '100%', height: '100%'}}>
        {children}
    </div>
    )
}
