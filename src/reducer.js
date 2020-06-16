let lastId=2;
const initalState = {
  filter: "All",
  filters: ["All", "Completed", "Pending"],
  tasks: [
      {id:0,title:"Bake Cake"},
      {id:1,title:"Walk the Dog"},
    ],
};

export default function reducer(state = initalState,action){
switch(action.type){
case 'TASK_ADDED':
    return{
        ...state,
        "tasks":[
        ...state.tasks,
        {"id":lastId++,
        "title":action.payload.title,
        "status": false}
        ]
    }
case 'TASK_DELETED':
        return {
            ...state,
            tasks: state.tasks.filter((task) => (
                task.id !== action.payload.id))                
        }
    
case 'STATUS_CHANGE':
        return {
            ...state,
            "tasks":
                state.tasks.map((task)=>{
                    if(task.id===action.payload.id)
                    {return {...task,"status":task.status?false:true}}
                    else{return task}
                })            
        }
case 'FILTER_CHANGE':
    return{
        ...state,
        filter:action.payload.filter,
    }
    
default:
    return state;   
}
}