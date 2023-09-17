
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../Components/SectionTitel/SectionTitle';
import { useForm, } from "react-hook-form"

const uploadImageToken = import.meta.env.VITE_Image_Upload_Token
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const {
        register,
        handleSubmit,
        reset
    } = useForm()


    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${uploadImageToken}`
    const onSubmit = (data) => {
        //console.log(data)
        const formData = new FormData()
        formData.append('image', data.image[0])
        // image post to image hosting server

        fetch(imageHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url
                    // const imgDeleteUrl= imgResponse.data.delete_url
                    const { name, price, type, recipe } = data
                    const newItem = { name, price: parseFloat(price), recipe, category:type, image: imgUrl }

                    axiosSecure.post('/food', newItem)
                        .then(serverResponse => {
                            console.log(serverResponse.data)
                            reset()
                            if (serverResponse.data.insertedId) {
                                Swal.fire(
                                    'Add Item!',
                                    'Your new Item has been updated.',
                                    'success'
                                )
                            }
                        })
                }
            })

    }
    return (
        <div className='w-full px-2'>
            <div className=''>
                <SectionTitle subHeading={'whats News'} heading={'ADD AN ITEM'} >

                </SectionTitle>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" {...register("name")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex  my-2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Recipe Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("type", { required: true })}  className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>salad</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>dessert</option>
                            <option>drinks</option>
                        </select>

                    </div>
                    <div className="form-control w-full max-w-xs ml-3">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="text" {...register("price")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Detail*</span>
                    </label>
                    <textarea  {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Recipe detail"></textarea>
                </div>
                <div className="form-control w-full max-w-xs my-2">
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-sm btn-info mb-3' type="submit" value={'ADD ITEM'} />

            </form>

        </div>
    );
};

export default AddItem;