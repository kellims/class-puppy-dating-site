import { useState } from "react";
import Dog from "./Dog";

function Dogs() {
    const [dogs, setDogs] = useState([{
        name: "Duke",
        age: 2,
        breed: "Havanese",
        favoriteToy: "Anything",
        size: "medium",
        gender: "male"

    }
    ]);
    const [dogForm, setDogForm] = useState(
        {
            name: "",
            age: 1,
            breed: "",
            favoriteToy: "",
            size: "",
            gender: ""
        }
    )

    function handleChange(e) {
        console.log(e.target)
        setDogForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
        console.log(dogForm)
    }

    function handleSubmit(e) {
        //a form will default to reloading the page once submitted. The PreventDefault stops it from refreshing the entire page.
        e.preventDefault();
        setDogs((startingDogs) => ([...startingDogs, dogForm]))
        e.target.reset();
    };

    return (
        <>
        <h2>Here are my dogs</h2>
        {dogs.map((dog, idx) => {
            return (
                <div key={idx}>
                   <Dog dog={dog}/>
                </div>
            )
        })}
        <form onSubmit={handleSubmit}>
            <label>
                <span>Name:</span>
                <input
                    type="text"
                    placeholder="Dog's name"
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Age:</span>
                <input
                    type="number"
                    placeholder="Dog's age"
                    name="age"
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Breed:</span>
                <input
                    type="text"
                    placeholder="Havanese"
                    name="breed"
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Favorite Toy:</span>
                <input
                    type="text"
                    placeholder="Something Chewy"
                    name="favoriteToy"
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Size: </span>
                <select name="size" onChange={handleChange}>
                    <option value="Tiny">Tiny</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Gigantic">Gigantic</option>
                </select>
            </label>
            <label onChange={handleChange}>
                <span>Gender</span>
                <select name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>
            <button>Submit Form</button>
        </form>
       </> 
    )
}

export default Dogs;