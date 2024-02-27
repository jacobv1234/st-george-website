

const toggleGoalsNav = (event) => {
    const goalsNav = document.querySelector('.sub')
    goalsNav.classList.toggle('hidden-nav')
    event.stopPropagation()
    /* 
    `event.stopPropagation()` stops the hideNavOnPageClick from triggering
    because due to JS event bubbling whenever `goalsText` is clicked it would run
    first then hideNavOnPageClick would also run as it is inside the body tag making
    it a trigger to the function. But with `event.stopPropagation()` this function(`toggleGoalsNav`) runs and the
    `hideNavOnPageClick` function is not triggered when `goalsText` is clicked as it prevents the "event bubbling" in JS.
    */
}

const hideNavOnPageClick = () => {
    const goalsNav = document.querySelector('.sub')
    const runOrDont = !goalsNav.classList.value.includes('hidden-nav')

    if (runOrDont) {
        goalsNav.classList.toggle('hidden-nav')
    }
}

function setup_navbar() {
    const body = document.querySelector('body')
    const goalsText = document.getElementById('goals')
    body.onclick = hideNavOnPageClick
    goalsText.onclick = toggleGoalsNav
}

setup_navbar()
