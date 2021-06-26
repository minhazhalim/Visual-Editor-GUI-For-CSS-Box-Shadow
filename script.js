document.querySelectorAll('input').forEach(input => input.addEventListener('input',inputChanged));
function inputChanged(event){
     document.documentElement.style.setProperty(`--${event.target.name}`,event.target.value);
}