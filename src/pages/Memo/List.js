import React from 'react';
import { useParams } from "react-router-dom";

function List() {

    const { id } = useParams();
    return (
        <div>{id}님의 덕담보따리</div>
    );
}
export default List;
