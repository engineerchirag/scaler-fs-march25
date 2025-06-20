import { useState } from "react";

const SignupForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleFieldChange = (key) => (e) => {
        // console.log(key, e.target.value);
        const formCopy = { ...form };
        formCopy[key] = e.target.value;
        setForm(formCopy);
    }

    const handleSignup = () => {
        // print form data in json format
        console.log(form);
    };
    return (
        <>
            <h2>Signup Form</h2>

            <div style={{ 'fontSize': '13px', display: 'flex', flexDirection: 'column', 'justifyContent': 'space-between', rowGap: '15px', width: '300px' }}>
                <div style={{ display: 'flex', 'justifyContent': 'space-between' }}>
                    <label>Name</label>
                    <input placeholder="Enter name" onChange={handleFieldChange('name')} />
                </div>

                <div style={{ display: 'flex', 'justifyContent': 'space-between' }}>
                    <label>Email</label>
                    <input placeholder="Enter email" type="email" onChange={handleFieldChange('email')} />
                </div>

                <div style={{ display: 'flex', 'justifyContent': 'space-between' }}>
                    <label>Password</label>
                    <input placeholder="Enter password" type="password" onChange={handleFieldChange('password')} />
                </div>

                <button onClick={handleSignup}>Signup</button>
            </div>
        </>
    )
}

// const SignupForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     }

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     }

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     }

//     const handleSignup = () => {
//         // print form data in json format
//         console.log({
//             name,
//             email,
//             password
//         })
//     };
//     return (
//         <div style={{'fontSize': '13px', display: 'flex', flexDirection: 'column', 'justifyContent': 'space-between', rowGap: '15px', width: '300px'}}>
//             <div style={{ display: 'flex', 'justifyContent': 'space-between' }}>
//                 <label>Name</label>
//                 <input placeholder="Enter name" onChange={handleNameChange}/>
//             </div>

//             <div style={{ display: 'flex', 'justifyContent': 'space-between' }}>
//                 <label>Email</label>
//                 <input placeholder="Enter email" type="email" onChange={handleEmailChange}/>
//             </div>

//             <div style={{ display: 'flex', 'justifyContent': 'space-between' }}>
//                 <label>Password</label>
//                 <input placeholder="Enter password" type="password" onChange={handlePasswordChange}/>
//             </div>

//             <button onClick={handleSignup}>Signup</button>
//         </div>
//     )
// }

export default SignupForm;