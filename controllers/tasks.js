const tasks= [{
    id: 1,
    title: 'Learn React',
    description: 'Learn how to use react in building web app'
    }, {
    id: 2,
    title: 'Learn Node',
    description: 'Learn how to use node in building server'
    }, {
    id: 3,
    title: 'Learn Array Manipulation',
    description: 'Learn how to manipulate arrays in javascript'
    }];
function fetchTasks(query){
    //there is no query string
    if(!Object.keys(query).length)return tasks;
    //search based on the provided search key and value
    else{
        var filteredTasks=[];
        for(var i=0; i<tasks.length; i++) {

            if(tasks[i][query.searchKey].toLowerCase() === query.searchValue.toLowerCase()) {
                filteredTasks.push(tasks[i])
                break;
            }
        }

        return filteredTasks
    }

}

function addTask(task){
    tasks.push(task)
    return tasks;
}

function updateTask(id,updatedTask){
    for(var i=0; i<tasks.length; i++) {
        if(tasks[i].id == id) {
            tasks[i]={id,...updatedTask};
            break;
        }
    }
    return tasks;
}



function deleteTask(id){
    for(var i=0; i<tasks.length; i++) {
        if(tasks[i].id == id) {
            tasks.splice(i,1);
            break;
        }
    }
    return tasks;
}



module.exports={
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
}