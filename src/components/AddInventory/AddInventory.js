
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

const AddInventory = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)


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
        <div className='w-50 mx-auto  shadow rounded p-3'>
            <h2 className='text-center mb-5 text-secondary fw-bold'>Please Add a Inventory</h2>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price' type="text" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='Supplier' type="text" {...register("Supplier")} />
                <input className='mb-3' placeholder='Photo url' type="text" {...register("img")} />
                <input className='w-75 mx-auto' type="submit" value="Add Inventory" />
            </form>

            <ToastContainer />

        </div>

    );
};

export default AddInventory; 