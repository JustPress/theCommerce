import axios from "axios";

export const Form = () =>{
    
    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        axios.post('http://victormorel.ide.3wa.io:9234/register', {
            email: formData.get("email"),
            password: formData.get("password")
        })
        .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email"></input>
                <input type="password" name="password"></input>
                <input type="submit"></input>
            </form>
        </>
    )
}