#!/usr/bin/env node
//Full code from further week to save time
function wait(ms) {
    return new Promise(function (resolve)
     {setTimeout(function () 
        {resolve(ms);}, ms);});}

   const fakeApi = {
    fetchToDos: async () => {
        await wait(50);
        return [
            { task: 'Make Bed', due: new Date(2009, 5, 5) },
            { task: 'Clean room', due: new Date(3000, 5, 5) },
            ];
        }
    }

   async function getFutureToDos (api){
    try {
        const today = new Date();
        const todos = await api.fetchToDos();
            return todos.filter((todo) => {
                return todo.due < today;
              })
            } catch (e){
                console.log("there was a problem " + error);
                throw new Error();
            }
        }


getFutureToDos(fakeApi)
.then((futureToDos) => {
    console.log(futureToDos);
})
