import { useRouterError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouterError();

    return (
        <div className='space-y-8'>
            <hi className='text-center text-6xl font-extra-bold mt-20 text-blue-900'>CRM React</hi>
            <p className='text-center'>Hubo un error</p>
            <p className='text-center'>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage
