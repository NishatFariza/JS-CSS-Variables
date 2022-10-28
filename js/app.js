const inputs = document.querySelectorAll(".controls-wrap input")

function handleUpdate() {
    const suffix = this.dataset.suffix || "";
    
}


inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))