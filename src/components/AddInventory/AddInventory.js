
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from "../../firebase.init";

const AddInventory = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user, loading] = useAuthState(auth);

    const onSubmit = data => {
        const newData = { ...data, email: user.email, sold: 0 }

        const url = `https://intense-taiga-61434.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)


        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                if (result) {
                    toast('Product Added');
                    reset();

                }
            })


    };
    return (
        <div className='w-50 mx-auto  shadow rounded p-3 my-5'>
            <h2 className='text-center mb-5 text-secondary fw-bold'>Please Add a Inventory</h2>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} required />
                <textarea className='mb-3' placeholder='Description' {...register("description")} required />
                <input className='mb-3' placeholder='Price' type="text" {...register("price")} required />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} required />
                <input className='mb-3' placeholder='Supplier' type="text" {...register("Supplier")} required />
                <input className='mb-3' placeholder='Photo url' type="text" {...register("img")} required />
                <input className='w-75 mx-auto' type="submit" value="Add Inventory" />
            </form>

            <ToastContainer />

        </div>

    );
};

export default AddInventory; 