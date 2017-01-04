const Button = {
    button: '<button id="myButton"> Press me</button>',
    attachEl: () => {
        document.getElementById('myButton').addEventListener('click' , () => {
            //debugger;
            console.log('Clicked');
        })
    }
}

export default Button;