import {Formik,Form, Field} from 'formik'

export const FormClient = () => {
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Add Client</h1>
            <Formik>
                <Form>
                    <div className='mb-4'>
                        <label 
                        className='text-gray-800'
                        htmlFor='name'>
                            Name:
                        </label>
                        <Field 
                        type='text'
                        id="name"
                        placeholder="Enter customer name" 
                        className='mt-2 block w-full p-3 bg-gray-50' />
                    </div>
                    <div className='mb-4'>
                        <label 
                        className='text-gray-800'
                        htmlFor='company'>
                            Company:
                        </label>
                        <Field 
                        type='text'
                        id="company"
                        placeholder="Enter customer Company" 
                        className='mt-2 block w-full p-3 bg-gray-50' />
                    </div>
                    <div className='mb-4'>
                        <label 
                        className='text-gray-800'
                        htmlFor='email'>
                            E-mail:
                        </label>
                        <Field 
                        type='email'
                        id="email"
                        placeholder="Enter customer email" 
                        className='mt-2 block w-full p-3 bg-gray-50' />
                    </div>
                    <div className='mb-4'>
                        <label 
                        className='text-gray-800'
                        htmlFor='phone'>
                            Phone:
                        </label>
                        <Field 
                        type='tel'
                        id="phone"
                        placeholder="Enter customer phone" 
                        className='mt-2 block w-full p-3 bg-gray-50' />
                    </div>
                    <div className='mb-4'>
                        <label 
                        className='text-gray-800'
                        htmlFor='note'>
                            Note:
                        </label>
                        <Field 
                        as='textarea'
                        type='text'
                        id="note"
                        placeholder="Notes..." 
                        className='mt-2 block w-full p-3 bg-gray-50' />
                    </div>
                    <input 
                    type='submit'
                    value='Add Client'
                    className='mt-5 w-full bg-orange-500 p-3 text-white uppercase font-bold text-lg'
                    />
                </Form>
            </Formik>
        </div>
    )
}
