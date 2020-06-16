
export const addTask=(title)=>{
    return{
        type:"TASK_ADDED",
        payload:{
            title,
        }
    }
}
export const deleteTask=(id)=>{
    return{
    type:"TASK_DELETED",
    payload:{
        id
    }
    }
}

export const statusChange=(id)=>{
return{
    type:"STATUS_CHANGE",
    payload:{
        id
    }
}
}

export const updateFilter=(filter)=>{
    return {
      type: "FILTER_CHANGE",
      payload:{filter}
    };
}