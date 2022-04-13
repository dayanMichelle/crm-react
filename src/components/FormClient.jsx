import {Formik,Form, Field} from 'formik'

export const FormClient = () => {
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Add Client</h1>
            <Formik>
                <Form>
                    <div>
                        <label 
                        className='text-gray-800'
                        htmlFor='name'>
                            Name:
                        </label>
                        <Field 
                        id="name"
                        placeholder="Enter your name" 
                        className='mt-2 block w-full p-3 bg-gray-50' />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
