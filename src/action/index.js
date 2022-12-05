export const addshop = (data)=>{
    return{
        type: "add_shop",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteShop = (id)=>{
    return{
        type: "delete_shop",
        id
    }
}
export const removeShop = ()=>{
    return{
        type: "remove_shop",
    }
}