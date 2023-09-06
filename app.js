
const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const list_el = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;//Agrego el valor del input en una constante

    //Valido si el input esta vacio
    if (!task) {
        alert('Por favor escribe una tarea a añadir');
        return
    }

    // ----- CREACION DE ELEMENTOS -----//

    //Creo un elemento DIV TASK ( DIV GENERAL) a fin de agregar la clase task
    const task_el = document.createElement('div');
    task_el.classList.add('task')


    //Creo un elemento DIV CONTENT a fin de agregar la clase content
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content')
    //task_content_el.innerText = task //Agrego el input.value en el div class='content'


    task_el.appendChild(task_content_el);//Agrego el hijo(DIV CONTENT) al padre task_el(DIV TASK)


    //Creo un elemento INPUT TEXT con sus propiedades
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);//Agrego e hijo INPUT TEXT al padre (DIV CONTENT)

    //Creo el DIV ACTIONS
    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions')
    task_el.appendChild(task_actions_el)

    //Creo el BUTTON EDIT
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = '✏️'
    task_actions_el.appendChild(task_edit_el)

    //Creo el BUTTON DELETE
    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = '🗑️'
    task_actions_el.appendChild(task_delete_el)

    list_el.appendChild(task_el);//Agrego el hijo(DIV TASK) al padre list_el(DIV TASKS)
    // ------ LIMPIEZA DEL INPUT -----//
    input.value = '';//Luego de escribir la tarea, limpio el input.value

    //---- ACCIONES PARA EDIT DELETE and SAVE-----//

    task_edit_el.addEventListener('click', () => {
        if (task_edit_el.innerText == '✏️') {
            task_input_el.removeAttribute('readonly');
            task_input_el.focus();
            task_edit_el.innerText = '🗳️'
        } else {
            task_input_el.setAttribute('readonly', 'readonly');
            task_edit_el.innerText = '✏️'
        }
    })

    task_delete_el.addEventListener('click', () => {
        list_el.removeChild(task_el)
    })
})
