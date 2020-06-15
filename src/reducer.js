let lastId=0;
export default function reducer(state = {"filter":"All","filters":["All","Completed","Pending"],tasks:[]},action){
if(action.type==='ADD_TASK'){
    return{
        ...state,
        "tasks":[
        ...state.tasks,
        {"id":lastId++,
        "title":action.payload.title,
        "status": false}
        ]
    }}
    else if(action.type==='TASK_DELETED'){
        return {
            ...state,
            tasks: state.tasks.filter((task) => (
                task.id !== action.payload.id))
                
        }
    
    }

    else if(action.type==="STATUS_CHANGE"){
        return {
            ...state,
            "tasks":
                state.tasks.map((task)=>{
                    if(task.id===action.payload.id)
                    {return {...task,"status":task.status?false:true}}
                    else{return task}
                })            
        }
    
    
        
        
    }
}