window.addEventListener('load', () => {
    const todoCreation = document.querySelector('.todo__creation');
    const creationInput = document.querySelector('.todo__creation-input');
    const todoList = document.querySelector('.todo__main');
    const todoCompleted = document.querySelector('.todo__completed')
    const childLeft = document.querySelector('.childleft')
    const checkBtn = document.querySelector('checkbtn')
    const completed = document.getElementById('complete')
    const All = document.getElementById('all')
    const clear = document.getElementById('clear')

    // CREATION OF NEW TODO LIST
    todoCreation.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoTask = creationInput.value;
        
        if (!todoTask) {
            alert('fill out the field');
            return
        }

        

        creationInput.value = ''

        const todoListTask = document.createElement('div');
        todoListTask.classList.add('todo__main-container');

        const todoListContent = document.createElement('div');
        todoListContent.classList.add('todo__main-content')

        const todoMainText = document.createElement('p')
        todoMainText.classList.add('todo_main-text')
        todoMainText.innerHTML = todoTask;

        todoList.appendChild(todoListTask)

        todoListContent.appendChild(todoMainText)

        const todoCheck = document.createElement('div');
        todoCheck.classList.add('circle')

        const todoControls = document.createElement('div')
        todoControls.classList.add('todo__main-controls')
        const todoh1 = document.createElement('h1')
        todoh1.innerHTML = 'X'

        todoControls.appendChild(todoh1)

        todoListTask.appendChild(todoCheck)
        

        todoListTask.appendChild(todoListContent);

        todoListTask.appendChild(todoControls)


        // HOVER EFFECT FOR TODO LIST
        todoMainText.addEventListener('mouseover', () => {
            todoh1.style.opacity = 1;
        })

        todoMainText.addEventListener('mouseout', () => {
            todoh1.style.opacity = 0;
        })

        todoControls.addEventListener('mouseover', () => {
            todoh1.style.opacity = 1;
        })

        todoControls.addEventListener('mouseout', () => {
            todoh1.style.opacity = 0;
        })


        todoh1.addEventListener('click', () => {
            todoList.removeChild(todoListTask)
            childLeft.innerHTML = todoList.childElementCount + ' left'
        })

        childLeft.innerHTML = todoList.childElementCount + ' left'

        // COMPLETED SECTION
        todoCheck.addEventListener('click', () => {
            todoCheck.classList.toggle('toggle-circle')
            todoMainText.classList.toggle('toggle-p')

            const newPara = document.createElement('p')
            newPara.classList.add('newPara')

            newPara.innerHTML = todoTask

            todoCompleted.appendChild(newPara)
        })


        completed.addEventListener('click', () => {
            todoList.style.display = 'none'
            todoCompleted.removeAttribute('style')
                    
        })
        
    })

    All.addEventListener('click', () => {
        todoList.style.display = 'block'
        todoCompleted.style.display = 'none'
    })

    clear.addEventListener('click', () => {
        todoCompleted.innerHTML = ''
    })
    
    
})



const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const main = document.getElementById('main')


moon.addEventListener('click', () => {
    moon.style.display = 'none'
    sun.style.display = 'block';

    main.removeAttribute('class')
    main.classList.add('main-2')
})

sun.addEventListener('click', () => {
    sun.style.display = 'none';
    moon.style.display = 'block';

    main.removeAttribute('class')
    main.classList.add('main-1')
})



